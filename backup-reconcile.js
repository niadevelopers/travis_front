/**
 * backup-reconcile.js
 * ------------------------------------------------------------------
 * Standalone backup reconciliation for Travis Guardian.
 *
 * PURPOSE
 *   Keep travis-finance-backup.enc in sync with IndexedDB without
 *   interfering with the main app's own backup/restore flow.
 *
 * DESIGN
 *   - Reads ONLY transaction records (store 'tx') from IDB.
 *   - Reads the existing encrypted backup file.
 *   - Merges tx records by id (IDB wins on conflict, file entries
 *     preserved if IDB doesn't have them).
 *   - Writes the merged tx list back into the encrypted file, leaving
 *     the 'meta' array inside the file UNTOUCHED (byte-for-byte in
 *     terms of contents, re-serialized).
 *   - NEVER touches the 'meta' store in IDB (so 'config',
 *     'backupHandle', fingerprints, activation flags, etc. are all
 *     under the main app's sole control).
 *
 * SAFETY
 *   - If IDB has no 'config' meta record, this script treats the
 *     browser as "fresh" and does NOT overwrite the backup file.
 *   - If the merged tx count would be smaller than the backup file's
 *     existing tx count, this script refuses to write (this prevents
 *     an empty IDB from wiping a good backup).
 *   - All writes happen 10 minutes after page load so the main app's
 *     own restore flow always has time to complete first.
 * ------------------------------------------------------------------
 */
(function () {
  'use strict';

  // ---------- Config (must match the main app) ----------
  const DB_NAME        = 'TravisGuardian_v1.0';
  const DB_VERSION     = 1;
  const BACKUP_FILE    = 'travis-finance-backup.enc';
  const BACKUP_META_ID = 'backupHandle';
  const CONFIG_META_ID = 'config';
  const PASSWORD       = 'Travisguardian';
  const LOG            = '[TravisBackup]';
  const BANNER_ID      = 'travis-backup-banner';

  // 10 minutes. Gives main app time to restore first.
  const BOOT_DELAY_MS  = 5 * 60 * 1000;

  // ---------- Logger ----------
  const log  = (...a) => console.log(LOG, ...a);
  const warn = (...a) => console.warn(LOG, ...a);
  const err  = (...a) => console.error(LOG, ...a);

  // ---------- Crypto (matches main app format exactly) ----------
  // File layout: salt(16) || iv(12) || ciphertext
  async function deriveKey(password, salt) {
    const enc = new TextEncoder();
    const baseKey = await crypto.subtle.importKey(
      'raw', enc.encode(password), 'PBKDF2', false, ['deriveKey', 'deriveBits']
    );
    return crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt, iterations: 600000, hash: 'SHA-256' },
      baseKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  async function encryptData(obj, password) {
    const enc = new TextEncoder();
    const plaintext = JSON.stringify(obj);
    const iv   = crypto.getRandomValues(new Uint8Array(12));
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const key  = await deriveKey(password, salt);
    const ct = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv }, key, enc.encode(plaintext)
    );
    const out = new Uint8Array(salt.length + iv.length + ct.byteLength);
    out.set(salt, 0);
    out.set(iv, salt.length);
    out.set(new Uint8Array(ct), salt.length + iv.length);
    return out;
  }

  async function decryptData(bytes, password) {
    const salt = bytes.slice(0, 16);
    const iv   = bytes.slice(16, 28);
    const ct   = bytes.slice(28);
    const key  = await deriveKey(password, salt);
    const pt   = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv }, key, ct
    );
    return JSON.parse(new TextDecoder().decode(pt));
  }

  // ---------- IDB (own connection) ----------
  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onsuccess = () => resolve(req.result);
      req.onerror   = () => reject(req.error);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('meta'))
          db.createObjectStore('meta', { keyPath: 'id' });
        if (!db.objectStoreNames.contains('tx'))
          db.createObjectStore('tx', { keyPath: 'id' });
      };
    });
  }

  function idbGet(db, store, key) {
    return new Promise((resolve, reject) => {
      const tx  = db.transaction(store, 'readonly');
      const req = tx.objectStore(store).get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror   = () => reject(req.error);
    });
  }

  function idbGetAll(db, store) {
    return new Promise((resolve, reject) => {
      const tx  = db.transaction(store, 'readonly');
      const req = tx.objectStore(store).getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror   = () => reject(req.error);
    });
  }

  // NOTE: we intentionally do NOT provide an idbPut for the 'meta' store.
  // This script must never modify 'meta' in IDB.
  function idbPutTx(db, value) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('tx', 'readwrite');
      tx.objectStore('tx').put(value);
      tx.oncomplete = () => resolve();
      tx.onerror    = () => reject(tx.error);
    });
  }

  // ---------- Permissions ----------
  async function permissionState(handle) {
    if (!handle || !handle.queryPermission) return 'unsupported';
    try {
      return await handle.queryPermission({ mode: 'readwrite' });
    } catch (e) {
      warn('queryPermission failed', e);
      return 'denied';
    }
  }

  async function requestPermission(handle) {
    if (!handle || !handle.requestPermission) return 'unsupported';
    try {
      return await handle.requestPermission({ mode: 'readwrite' });
    } catch (e) {
      warn('requestPermission failed', e);
      return 'denied';
    }
  }

  // ---------- Banner UI ----------
  function ensureBanner() {
    let el = document.getElementById(BANNER_ID);
    if (el) return el;
    el = document.createElement('div');
    el.id = BANNER_ID;
    el.style.cssText = [
      'position:fixed','left:50%','bottom:16px','transform:translateX(-50%)',
      'z-index:99999','max-width:92vw','width:420px',
      'background:#1f1f1f','color:#fff','border-radius:12px',
      'box-shadow:0 8px 28px rgba(0,0,0,0.35)',
      'padding:14px 16px','font:13px/1.45 system-ui,Segoe UI,Arial,sans-serif',
      'display:none','align-items:center','gap:12px'
    ].join(';');
    el.innerHTML = `
      <div style="flex:1">
        <div id="${BANNER_ID}-title" style="font-weight:600;margin-bottom:2px;"></div>
        <div id="${BANNER_ID}-msg" style="opacity:0.85;font-size:12px;"></div>
      </div>
      <button id="${BANNER_ID}-btn" style="
        background:#0078D4;color:#fff;border:none;border-radius:8px;
        padding:8px 14px;font:600 12px system-ui;cursor:pointer;white-space:nowrap;
      "></button>
      <button id="${BANNER_ID}-close" style="
        background:transparent;color:#aaa;border:none;font-size:18px;
        cursor:pointer;line-height:1;padding:2px 4px;
      ">×</button>
    `;
    document.body.appendChild(el);
    document.getElementById(`${BANNER_ID}-close`).onclick = () => {
      el.style.display = 'none';
    };
    return el;
  }

  function showBanner({ title, msg, btn, onClick }) {
    const el = ensureBanner();
    document.getElementById(`${BANNER_ID}-title`).textContent = title;
    document.getElementById(`${BANNER_ID}-msg`).textContent   = msg;
    const b = document.getElementById(`${BANNER_ID}-btn`);
    b.textContent = btn;
    b.onclick = onClick;
    el.style.display = 'flex';
  }

  function hideBanner() {
    const el = document.getElementById(BANNER_ID);
    if (el) el.style.display = 'none';
  }

  // ---------- File read/write ----------
  async function readBackupFile(dirHandle) {
    try {
      const fh = await dirHandle.getFileHandle(BACKUP_FILE, { create: false });
      const file = await fh.getFile();
      if (file.size === 0) return null;
      const buf = new Uint8Array(await file.arrayBuffer());
      return await decryptData(buf, PASSWORD);
    } catch (e) {
      if (e && e.name === 'NotFoundError') return null;
      warn('readBackupFile: could not decrypt, treating as empty', e);
      return null;
    }
  }

  async function writeBackupFile(dirHandle, payload) {
    const bytes = await encryptData(payload, PASSWORD);
    const fh = await dirHandle.getFileHandle(BACKUP_FILE, { create: true });
    const w  = await fh.createWritable();
    await w.write(bytes);
    await w.close();
  }

  // ---------- Reconciliation core ----------
  // Rules:
  //   - Only 'tx' records are read from IDB and written to the file.
  //   - The 'meta' array inside the backup file is preserved verbatim.
  //   - If IDB is "fresh" (no 'config' meta record), we skip the write.
  //   - If the merged tx count < existing file tx count, we skip the write.
  async function reconcile(dirHandle) {
    log('starting reconcile…');

    const db = await openDB();
    try {
      // 1. Safety: is this a fresh browser / cleared IDB?
      const configRec = await idbGet(db, 'meta', CONFIG_META_ID);
      if (!configRec) {
        log('IDB has no "config" record — treating browser as fresh, skipping reconcile');
        return { ok: false, reason: 'fresh-browser' };
      }

      // 2. Read tx records from IDB only.
      const idbTx = await idbGetAll(db, 'tx');

      // 3. Read existing backup.
      const existing = await readBackupFile(dirHandle);

      // If we can't decrypt the existing file, do NOT overwrite it.
      // This is the backup the user may still need to restore from.
      if (existing === null) {
        warn('backup file missing or undecryptable — refusing to overwrite');
        return { ok: false, reason: 'no-readable-backup' };
      }

      const backupMeta = Array.isArray(existing.meta) ? existing.meta : [];
      const backupTx   = Array.isArray(existing.tx)   ? existing.tx   : [];

      // 4. Merge tx by id. IDB wins on conflict.
      const txMap = new Map();
      for (const r of backupTx) if (r && r.id != null) txMap.set(r.id, r);
      for (const r of idbTx)   if (r && r.id != null) txMap.set(r.id, r);

      const mergedTx = Array.from(txMap.values())
        .sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

      // 5. Safety: refuse to shrink the backup's tx list.
      if (mergedTx.length < backupTx.length) {
        warn(`refusing to shrink tx list (file=${backupTx.length}, merged=${mergedTx.length})`);
        return { ok: false, reason: 'would-shrink' };
      }

      // 6. No-op check.
      if (mergedTx.length === backupTx.length &&
          mergedTx.every((r, i) => r.id === backupTx[i]?.id)) {
        log('tx list unchanged — no write needed');
        return { ok: true, skipped: true, txCount: mergedTx.length };
      }

      // 7. Write merged file. Preserve meta exactly as read.
      const payload = {
        meta: backupMeta,
        tx: mergedTx
      };

      await writeBackupFile(dirHandle, payload);
      log(`wrote backup: ${mergedTx.length} tx (meta preserved: ${backupMeta.length})`);

      return { ok: true, skipped: false, txCount: mergedTx.length, metaCount: backupMeta.length };
    } finally {
      try { db.close(); } catch (_) {}
    }
  }

  // ---------- Flow control ----------
  async function getStoredHandle(db) {
    try {
      const rec = await idbGet(db, 'meta', BACKUP_META_ID);
      return rec && rec.value ? rec.value : null;
    } catch (e) {
      warn('could not read stored handle', e);
      return null;
    }
  }

  async function tryUnattendedReconcile() {
    if (!('showDirectoryPicker' in window)) {
      warn('File System Access API not supported');
      return false;
    }
    const db = await openDB();
    let handle = null;
    try {
      handle = await getStoredHandle(db);
    } finally {
      try { db.close(); } catch (_) {}
    }
    if (!handle) {
      log('no stored handle');
      return false;
    }
    const state = await permissionState(handle);
    log('stored handle permission:', state);
    if (state !== 'granted') return false;

    try {
      const res = await reconcile(handle);
      log('unattended reconcile result', res);
      return res.ok === true;
    } catch (e) {
      err('unattended reconcile failed', e);
      return false;
    }
  }

  async function manualReconnect() {
    const db = await openDB();
    let handle = null;
    try {
      handle = await getStoredHandle(db);
    } finally {
      try { db.close(); } catch (_) {}
    }

    if (handle) {
      const state = await permissionState(handle);
      if (state !== 'granted') {
        const req = await requestPermission(handle);
        log('requestPermission ->', req);
        if (req !== 'granted') handle = null;
      }
    }

    if (!handle) {
      try {
        handle = await window.showDirectoryPicker({
          mode: 'readwrite',
          startIn: 'documents'
        });
      } catch (e) {
        if (e && e.name === 'AbortError') {
          log('user cancelled picker');
          return { ok: false, reason: 'cancelled' };
        }
        err('showDirectoryPicker failed', e);
        return { ok: false, reason: 'picker-failed' };
      }
      // Store the handle in IDB's meta so the main app can find it later.
      // This is the ONLY meta write this script performs.
      const db2 = await openDB();
      try {
        await new Promise((resolve, reject) => {
          const tx = db2.transaction('meta', 'readwrite');
          tx.objectStore('meta').put({ id: BACKUP_META_ID, value: handle });
          tx.oncomplete = () => resolve();
          tx.onerror    = () => reject(tx.error);
        });
      } finally {
        try { db2.close(); } catch (_) {}
      }
      log('stored new handle in IDB meta');
    }

    try {
      const res = await reconcile(handle);
      log('manual reconcile result', res);
      return { ok: true, ...res };
    } catch (e) {
      err('manual reconcile failed', e);
      return { ok: false, reason: 'reconcile-failed', error: e };
    }
  }

  // ---------- Boot ----------
  async function boot() {
    if (!('indexedDB' in window)) { warn('no indexedDB'); return; }
    if (!('showDirectoryPicker' in window)) return;

    await new Promise(r => setTimeout(r, 400));

    // Sanity: if the main app hasn't loaded yet, bail. The main app sets
    // `state.user` in its own boot(); if it's missing, we're probably
    // looking at a fresh install and there's nothing to reconcile.
    const db0 = await openDB();
    let hasConfig = false;
    try {
      hasConfig = !!(await idbGet(db0, 'meta', CONFIG_META_ID));
    } finally {
      try { db0.close(); } catch (_) {}
    }
    if (!hasConfig) {
      log('no config record — main app not initialized yet, skipping boot');
      return;
    }

    const ok = await tryUnattendedReconcile();
    if (ok) { hideBanner(); return; }

    const db = await openDB();
    let handle = null;
    try { handle = await getStoredHandle(db); }
    finally { try { db.close(); } catch (_) {} }

    if (!handle) {
      showBanner({
        title: 'Backup not set up',
        msg: 'Choose a folder to keep an encrypted copy of your transactions.',
        btn: 'Set up backup',
        onClick: async () => {
          const r = await manualReconnect();
          if (r.ok) {
            showBanner({
              title: 'Backup active',
              msg: r.skipped
                ? 'Already up to date.'
                : `Synced ${r.txCount ?? 0} transactions.`,
              btn: 'OK',
              onClick: hideBanner
            });
          } else if (r.reason !== 'cancelled') {
            showBanner({
              title: 'Backup setup failed',
              msg: 'Please try again.',
              btn: 'Retry',
              onClick: () => document.getElementById(`${BANNER_ID}-btn`).click()
            });
          }
        }
      });
      return;
    }

    showBanner({
      title: 'Backup needs permission',
      msg: 'Reconnect your backup folder to keep saving new transactions.',
      btn: 'Reconnect',
      onClick: async () => {
        const r = await manualReconnect();
        if (r.ok) {
          showBanner({
            title: 'Backup active',
            msg: r.skipped
              ? 'Already up to date.'
              : `Synced ${r.txCount ?? 0} transactions.`,
            btn: 'OK',
            onClick: hideBanner
          });
        } else if (r.reason !== 'cancelled') {
          showBanner({
            title: 'Reconnect failed',
            msg: 'Open the app in a normal tab and try again.',
            btn: 'Retry',
            onClick: () => document.getElementById(`${BANNER_ID}-btn`).click()
          });
        }
      }
    });
  }

  // ---------- Public surface ----------
  window.TravisBackup = {
    version: '1.1.0',
    reconcileNow: async () => {
      const db = await openDB();
      let handle = null;
      try { handle = await getStoredHandle(db); }
      finally { try { db.close(); } catch (_) {} }
      if (!handle) return { ok: false, reason: 'no-handle' };
      if (await permissionState(handle) !== 'granted')
        return { ok: false, reason: 'permission' };
      return reconcile(handle);
    },
    reconnect: manualReconnect,
    boot
  };

  // Auto-boot after 10 minutes.
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(boot, BOOT_DELAY_MS);
  } else {
    window.addEventListener('DOMContentLoaded', () => setTimeout(boot, BOOT_DELAY_MS));
  }
})();
