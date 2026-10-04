/**
 * backup-reconcile.js
 * ------------------------------------------------------------------
 * Standalone backup reconciliation for Travis Guardian.
 *
 * Purpose:
 *   The original saveBackup() silently dies when the FileSystemDirectoryHandle
 *   loses its readwrite permission (which happens on browser close, tab
 *   reload, or site-data clear). After that, IndexedDB keeps growing but the
 *   encrypted backup file on disk freezes in time. On restore, only data up
 *   to the freeze point resurfaces.
 *
 * This file:
 *   - Opens its own IDB connection (TravisGuardian_v1.0)
 *   - Reads the stored backup dir handle from meta
 *   - On boot, checks permission. If 'granted' -> reconcile immediately.
 *   - If 'prompt'/'denied'/missing -> show a small banner with a button.
 *     Click re-requests permission (user gesture required by spec) or
 *     re-picks the folder, then reconciles.
 *   - Reconcile = decrypt backup, union-by-id with IDB, write back.
 *     Backup is a strict mirror of IDB (IDB wins on conflicts).
 *
 * Zero coupling: does not touch window.* from the main app, does not
 * require any existing function. Talks only to IndexedDB + File System API.
 * ------------------------------------------------------------------
 */
(function () {
  'use strict';

  // ---------- Config (must match the main app) ----------
  const DB_NAME      = 'TravisGuardian_v1.0';
  const DB_VERSION   = 1;
  const STORES       = ['meta', 'tx'];
  const BACKUP_FILE  = 'travis-finance-backup.enc';
  const BACKUP_META_ID = 'backupHandle';
  const PASSWORD     = 'Travisguardian';       // hardcoded, matches app
  const LOG          = '[TravisBackup]';
  const BANNER_ID    = 'travis-backup-banner';

  // ---------- Tiny logger ----------
  const log  = (...a) => console.log(LOG, ...a);
  const warn = (...a) => console.warn(LOG, ...a);
  const err  = (...a) => console.error(LOG, ...a);

  // ---------- Crypto (matches main app format) ----------
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
    const iv  = crypto.getRandomValues(new Uint8Array(12));
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const key = await deriveKey(password, salt);
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
    const key = await deriveKey(password, salt);
    const pt = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv }, key, ct
    );
    return JSON.parse(new TextDecoder().decode(pt));
  }

  // ---------- IDB (own connection, no coupling) ----------
  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onsuccess = () => resolve(req.result);
      req.onerror   = () => reject(req.error);
      // If the main app hasn't created stores yet, we create them so we
      // don't blow up. If they exist, onupgradeneeded won't fire.
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
      const tx = db.transaction(store, 'readonly');
      const req = tx.objectStore(store).get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror   = () => reject(req.error);
    });
  }

  function idbGetAll(db, store) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(store, 'readonly');
      const req = tx.objectStore(store).getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror   = () => reject(req.error);
    });
  }

  function idbPut(db, store, value) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(store, 'readwrite');
      tx.objectStore(store).put(value);
      tx.oncomplete = () => resolve();
      tx.onerror    = () => reject(tx.error);
    });
  }

  // ---------- Permission helpers ----------
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
      // Corrupt or wrong password -> treat as empty, we'll overwrite
      warn('readBackupFile: could not decrypt, treating as empty', e);
      return null;
    }
  }

  async function writeBackupFile(dirHandle, payload) {
    const bytes = await encryptData(payload, PASSWORD);
    const fh = await dirHandle.getFileHandle(BACKUP_FILE, { create: true });
    const w = await fh.createWritable();
    await w.write(bytes);
    await w.close();
  }

  // ---------- Reconciliation core ----------
  // Backup = strict mirror of IDB. IDB wins on conflicts.
  async function reconcile(dirHandle) {
    log('starting reconcile…');

    const db = await openDB();
    try {
      // 1. Read everything from IDB
      const idbMeta = await idbGetAll(db, 'meta');
      const idbTx   = await idbGetAll(db, 'tx');

      // 2. Read existing backup (may be null / stale)
      const existing = await readBackupFile(dirHandle);
      const backupMeta = (existing && Array.isArray(existing.meta)) ? existing.meta : [];
      const backupTx   = (existing && Array.isArray(existing.tx))   ? existing.tx   : [];

      // 3. Build union maps keyed by id. IDB wins on conflict.
      const metaMap = new Map();
      for (const r of backupMeta) if (r && r.id != null) metaMap.set(r.id, r);
      for (const r of idbMeta)   if (r && r.id != null) metaMap.set(r.id, r);

      const txMap = new Map();
      for (const r of backupTx) if (r && r.id != null) txMap.set(r.id, r);
      for (const r of idbTx)   if (r && r.id != null) txMap.set(r.id, r);

      // Don't leak the directory handle itself into the encrypted file.
      // (It's not serializable anyway, but be defensive.)
      metaMap.delete(BACKUP_META_ID);

      // 4. Sort tx by id ascending for stable file contents
      const mergedTx = Array.from(txMap.values())
        .sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

      const mergedMeta = Array.from(metaMap.values());

      const payload = {
        meta: mergedMeta,
        tx: mergedTx,
        reconciledAt: Date.now(),
        version: 1
      };

      // 5. Skip write if nothing changed since last reconcile
      const last = await idbGet(db, 'meta', '__backupReconcileState');
      const signature = JSON.stringify({
        m: mergedMeta.length,
        t: mergedTx.length,
        lastTxId: mergedTx.length ? mergedTx[mergedTx.length - 1].id : null,
        lastMetaId: mergedMeta.length ? mergedMeta[mergedMeta.length - 1].id : null
      });
      if (last && last.signature === signature) {
        log('nothing to update (signature unchanged)');
        await idbPut(db, 'meta', {
          id: '__backupReconcileState',
          signature,
          reconciledAt: Date.now(),
          skipped: true
        });
        return { ok: true, skipped: true, txCount: mergedTx.length, metaCount: mergedMeta.length };
      }

      // 6. Write merged backup to disk
      await writeBackupFile(dirHandle, payload);
      log(`wrote backup: ${mergedTx.length} tx, ${mergedMeta.length} meta`);

      // 7. Persist signature
      await idbPut(db, 'meta', {
        id: '__backupReconcileState',
        signature,
        reconciledAt: Date.now(),
        skipped: false
      });

      return { ok: true, skipped: false, txCount: mergedTx.length, metaCount: mergedMeta.length };
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

  async function storeHandle(db, handle) {
    await idbPut(db, 'meta', { id: BACKUP_META_ID, value: handle });
  }

  // Attempt an unattended reconcile. Returns true if it ran.
  async function tryUnattendedReconcile() {
    if (!('showDirectoryPicker' in window)) {
      warn('File System Access API not supported in this browser');
      return false;
    }
    const db = await openDB();
    let handle = null;
    try {
      handle = await getStoredHandle(db);
    } finally {
      // keep db open a moment longer for reconcile; reconcile opens its own,
      // so closing here is fine.
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
      log('unattended reconcile ok', res);
      return true;
    } catch (e) {
      err('unattended reconcile failed', e);
      return false;
    }
  }

  // User-gesture path: re-request or re-pick, then reconcile.
  async function manualReconnect() {
    const db = await openDB();
    let handle = null;
    try {
      handle = await getStoredHandle(db);
    } finally {
      try { db.close(); } catch (_) {}
    }

    // Case A: handle exists but permission is dead -> requestPermission
    if (handle) {
      const state = await permissionState(handle);
      if (state !== 'granted') {
        const req = await requestPermission(handle);
        log('requestPermission ->', req);
        if (req !== 'granted') handle = null; // fall through to re-pick
      }
    }

    // Case B: no handle, or permission was denied -> re-pick folder
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
      const db2 = await openDB();
      try { await storeHandle(db2, handle); }
      finally { try { db2.close(); } catch (_) {} }
      log('stored new handle');
    }

    try {
      const res = await reconcile(handle);
      log('manual reconcile ok', res);
      return { ok: true, ...res };
    } catch (e) {
      err('manual reconcile failed', e);
      return { ok: false, reason: 'reconcile-failed', error: e };
    }
  }

  // ---------- Boot orchestration ----------
  async function boot() {
    if (!('indexedDB' in window)) {
      warn('no indexedDB, aborting');
      return;
    }
    if (!('showDirectoryPicker' in window)) {
      // Silent — old browsers. Nothing we can do.
      return;
    }

    // Small delay so the main app's initDB() finishes first if it's racing.
    await new Promise(r => setTimeout(r, 400));

    // 1) Try unattended
    const ok = await tryUnattendedReconcile();
    if (ok) { hideBanner(); return; }

    // 2) Figure out why and show the right banner
    const db = await openDB();
    let handle = null;
    try { handle = await getStoredHandle(db); }
    finally { try { db.close(); } catch (_) {} }

    if (!handle) {
      showBanner({
        title: 'Backup not set up',
        msg: 'Choose a folder to keep an encrypted copy of your data.',
        btn: 'Set up backup',
        onClick: async () => {
          const r = await manualReconnect();
          if (r.ok) {
            showBanner({
              title: 'Backup active',
              msg: `Synced ${r.txCount ?? 0} transactions.`,
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

    // Handle exists but permission isn't granted
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
    version: '1.0.0',
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

  // Auto-boot
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(boot, 0);
  } else {
    window.addEventListener('DOMContentLoaded', () => setTimeout(boot, 0));
  }
})();
