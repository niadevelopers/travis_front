/**
 * ui-tweaks.js  ·  v3.3.0
 * ------------------------------------------------------------------
 * v3.3.0 changes (from v3.2.1):
 *   • Anomaly detection now works on REAL data end-to-end.
 *   • Direction comes from double-entry (liquid side determines flow):
 *       credit liquid -> outflow, counterparty is on the debit side
 *       debit  liquid -> inflow,  counterparty is on the credit side
 *   • Party extraction (in priority order):
 *       1. If the non-liquid account side is not a known category,
 *          use it directly as the party name (M-Pesa auto-import path).
 *       2. Otherwise parse the desc for a name after a direction verb
 *          (manual entry path: "Paid Emilly Otieno", etc).
 *       3. Otherwise parse a leading name-like token sequence from the
 *          desc, gated by a capitalisation check + common-word stoplist
 *          (so "KPLC" and "Kenya Power" work, but "urgent rent" does not).
 *   • Row detector thresholds relaxed for 2-month histories:
 *       MIN_ROW_TX   = 3   (was 4)
 *       ROW_FLOOR    = 150 (was 500)
 *       90-day window with fallback to full history if <3 past entries.
 *   • Same-direction comparison only (out vs out, in vs in).
 *   • "New" chip and "Unusual" chip now coexist on the same row.
 *   • Test anomaly machinery REMOVED (no injectFakeAnomaly, no ?debug=1
 *     button, no [TEST ANOMALY] handling).
 *   • New diagnostic: TravisUITweaks.explainParty(name) — see exactly
 *     what the detector sees for a given party.
 *
 * v3.2.x features retained:
 *   • Per-row delete (visible red ×) with system confirm + 6s undo toast
 *   • Category drift (1.8× trailing 3-month median; income flags on drops)
 *   • Glasmorphic explainers, localStorage dismissal stores
 *   • Top recipients (min 3, split in/out), charges pill
 *   • Month picker, row grouping, net-flow card, #nav-mpesa relocation
 *
 * Load order: AFTER script.js / travis-mpesa.js / backup-reconcile.js
 *   <script src="ui-tweaks.js"></script>
 * ------------------------------------------------------------------
 */
(function () {
  'use strict';

  const LOG = '[UITweaks]';
  const log  = (...a) => console.log(LOG, ...a);
  const warn = (...a) => console.warn(LOG, ...a);

  // ==================================================================
  // Config
  // ==================================================================

  const DB_NAME  = 'TravisGuardian_v1.0';
  const DB_VER   = 1;
  const STORE    = 'tx';

  const MONTHS_LONG = ['January','February','March','April','May','June',
                       'July','August','September','October','November','December'];

  const LEDGER_VIEW_ID = 'view-port';
  const LEDGER_BAR_ID  = 'tg-ledger-bar';
  const LEDGER_META_ID = 'tg-ledger-meta';
  const FILTER_KEY     = 'travis_ledger_period';
  const CHARGE_DEBIT   = 'M-Pesa Charge';

  // Row anomaly
  const ROW_FACTOR     = 2.5;
  const ROW_FLOOR_KSH  = 150;
  const MIN_ROW_TX     = 3;

  // Category drift
  const DRIFT_FACTOR     = 1.8;
  const DRIFT_FLOOR_KSH  = 500;
  const INCOME_DROP_FACT = 0.6;
  const MIN_DRIFT_TX     = 4;

  const MIN_RECIPIENT_TX = 3;

  const EXPENSE_CATEGORIES = new Set([
    'Airtime Purchase','Bills','Utilities','Rent','School','Food & Groceries',
    'Transport','Medical','Entertainment','Payroll','Marketing',
    'Cost of Goods Sold','Tax','Insurance','Other Expenses',
    'Send Money','Withdrawals','Deposits'
  ]);

  const INCOME_CATEGORIES = new Set([
    'Salary','Side Hustle','Allowance','Dividends','Other Income',
    'Sales Revenue','Service Revenue'
  ]);

  // All known category names, lowercased, used to decide "is this account
  // a category or a person?" and to reject category words inside descs.
  const KNOWN_CATEGORIES = new Set([
    ...[...EXPENSE_CATEGORIES, ...INCOME_CATEGORIES].map(s => s.toLowerCase()),
    'm-pesa','m-pesa charge','mpesa','bank / m-pesa','bank account','cash',
    'savings','petty cash','inventory','fixed assets','accounts receivable',
    'accounts payable','loans payable','credit','fuliza repayment',
    'loan repayment'
  ]);

  // Small stoplist so leading-token desc parsing doesn't turn adjectives
  // like "urgent", "weekly", or "bus" into fake counterparties.
  const COMMON_WORDS = new Set([
    'for','to','from','the','a','an','on','at','in','of','and','or','by',
    'with','via','payment','pay','paid','sent','send','received','recd',
    'urgent','weekly','daily','monthly','yearly','bus','taxi','fare',
    'lunch','dinner','breakfast','shopping','groceries','rent','bills',
    'bill','medical','school','fuel','petrol','diesel','airtime','electricity',
    'water','wifi','internet','netflix','subscription'
  ]);

  // ==================================================================
  // State
  // ==================================================================

  let selection = { kind: 'all' };
  try {
    const raw = localStorage.getItem(FILTER_KEY);
    if (raw) selection = JSON.parse(raw);
  } catch (_) {}

  let TX_CACHE = [];

  // ==================================================================
  // LocalStorage dismissal helpers
  // ==================================================================

  const LS_DRIFT_DISMISS = 'tg_ui_dismiss_drift';
  const LS_ROW_DISMISS   = 'tg_ui_dismiss_row';
  const LS_BASELINE_BUMP = 'tg_ui_baseline_bump';
  const LS_NEW_SEEN      = 'tg_ui_new_seen';

  function loadMap(key) {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : {}; }
    catch (_) { return {}; }
  }
  function saveMap(key, map) {
    try { localStorage.setItem(key, JSON.stringify(map)); } catch (_) {}
  }
  function dismiss(key, mapKey) {
    const m = loadMap(mapKey);
    m[key] = Date.now();
    saveMap(mapKey, m);
  }
  function isRowDismissed(txId) {
    const m = loadMap(LS_ROW_DISMISS);
    return !!m[String(txId)];
  }
  function dismissRow(txId) {
    const m = loadMap(LS_ROW_DISMISS);
    m[String(txId)] = Date.now();
    saveMap(LS_ROW_DISMISS, m);
  }
  function hasSeenCombo(combo) {
    const m = loadMap(LS_NEW_SEEN);
    return !!m[combo];
  }
  function markSeenCombo(combo) {
    const m = loadMap(LS_NEW_SEEN);
    m[combo] = Date.now();
    saveMap(LS_NEW_SEEN, m);
  }

  // ==================================================================
  // IDB — read, put, delete
  // ==================================================================

  function readAllTx() {
    return new Promise((resolve) => {
      const req = indexedDB.open(DB_NAME, DB_VER);
      req.onsuccess = () => {
        const db = req.result;
        try {
          if (!db.objectStoreNames.contains(STORE)) { db.close(); return resolve([]); }
          const tx = db.transaction(STORE, 'readonly');
          const store = tx.objectStore(STORE);
          const all = store.getAll();
          all.onsuccess = () => { db.close(); resolve(all.result || []); };
          all.onerror   = () => { db.close(); resolve([]); };
        } catch (e) { try { db.close(); } catch (_) {} resolve([]); }
      };
      req.onerror = () => resolve([]);
    });
  }

  function putTx(tx) {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VER);
      req.onsuccess = () => {
        const db = req.result;
        try {
          const t = db.transaction(STORE, 'readwrite');
          t.objectStore(STORE).put(tx);
          t.oncomplete = () => { db.close(); resolve(); };
          t.onerror    = () => { db.close(); reject(t.error); };
        } catch (e) { try { db.close(); } catch (_) {} reject(e); }
      };
      req.onerror = () => reject(req.error);
    });
  }

  function deleteTx(id) {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VER);
      req.onsuccess = () => {
        const db = req.result;
        try {
          const t = db.transaction(STORE, 'readwrite');
          t.objectStore(STORE).delete(id);
          t.oncomplete = () => { db.close(); resolve(); };
          t.onerror    = () => { db.close(); reject(t.error); };
        } catch (e) { try { db.close(); } catch (_) {} reject(e); }
      };
      req.onerror = () => reject(req.error);
    });
  }

  async function refreshCache() {
    const rows = await readAllTx();
    rows.sort((a, b) => Number(b.id) - Number(a.id));
    TX_CACHE = rows;
    return rows;
  }

  async function syncBackup() {
    try {
      if (window.TravisBackup && typeof window.TravisBackup.reconcileNow === 'function') {
        const res = await window.TravisBackup.reconcileNow();
        log('backup reconcile:', res);
        return res;
      }
    } catch (e) {
      warn('backup reconcile failed (will retry on next boot)', e);
    }
    return null;
  }

  // ==================================================================
  // Shared helpers
  // ==================================================================

  function isChargeRow(tx) { return tx && tx.debit === CHARGE_DEBIT; }

  function inSelection(tx) {
    if (!tx || typeof tx.id !== 'number') return false;
    if (selection.kind === 'all') return true;
    const d = new Date(tx.id);
    return d.getFullYear() === selection.y && d.getMonth() === selection.m;
  }

  function periodLabel() {
    if (selection.kind === 'all') return 'All time';
    return MONTHS_LONG[selection.m] + ' ' + selection.y;
  }

  function money(n) { return Number(n || 0).toLocaleString('en-KE'); }

  function monthsWithData(txs) {
    const seen = new Map();
    for (const t of txs) {
      if (typeof t.id !== 'number') continue;
      const d = new Date(t.id);
      const key = d.getFullYear() + '-' + d.getMonth();
      if (!seen.has(key)) seen.set(key, { y: d.getFullYear(), m: d.getMonth(), count: 0 });
      seen.get(key).count++;
    }
    return Array.from(seen.values()).sort((a, b) => (b.y - a.y) || (b.m - a.m));
  }

  function persistSelection() {
    try { localStorage.setItem(FILTER_KEY, JSON.stringify(selection)); } catch (_) {}
  }

  function isLiquidCredit(name) {
    const s = String(name || '').toLowerCase();
    return s === 'cash' || s === 'm-pesa' || s === 'bank / m-pesa'
        || s === 'bank account' || s === 'savings' || s === 'petty cash';
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }

  function dayLabel(d) {
    return d.toLocaleDateString('en-KE', {
      weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
    });
  }

  function medianOf(arr) {
    const a = arr.slice().sort((x, y) => x - y);
    if (a.length === 0) return 0;
    const mid = Math.floor(a.length / 2);
    return a.length % 2 ? a[mid] : (a[mid - 1] + a[mid]) / 2;
  }

  // ==================================================================
  // Party extraction
  // ==================================================================

  function isCategoryName(s) {
    return KNOWN_CATEGORIES.has(String(s || '').toLowerCase().trim());
  }

  function normalizeParty(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/\s*\[ref:[^\]]*\]\s*/gi, ' ')
      .replace(/\b\d{6,}\b/g, ' ')
      .replace(/[^a-z0-9 .'\-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function isUsableParty(s) {
    if (!s || s.length < 3) return false;
    if (/^\d+$/.test(s)) return false;
    if (isCategoryName(s)) return false;
    if (COMMON_WORDS.has(s)) return false;
    // Reject pure numbers-with-letters junk like "ksh12" already filtered above
    return true;
  }

  function captureNameAfter(text, startIdx) {
    const tail = text.slice(startIdx, startIdx + 60);
    const stopRx = /\d|\bfor\b|\bon\b|\bat\b|\bre\b|\bregarding\b|\[ref:|,|\.|$/i;
    const m = tail.match(stopRx);
    const raw = m ? tail.slice(0, m.index) : tail;
    return normalizeParty(raw);
  }

  function parsePartyFromDesc(desc) {
    if (!desc) return null;

    // Verb-first patterns.
    const VERBS = [
      /\bsent\s+(?:to\s+)?/i,
      /\bpaid\s+(?:to\s+)?/i,
      /\bpay\s+(?:to\s+)?/i,
      /\bgave\s+(?:to\s+)?/i,
      /\bgive\s+(?:to\s+)?/i,
      /\bgiven\s+(?:to\s+)?/i,
      /\bpurchased\s+from\s+/i,
      /\bbought\s+from\s+/i,
      /\bbuy\s+from\s+/i,
      /\breceived\s+(?:from\s+)?/i,
      /\bgot\s+(?:from\s+)?/i,
      /\brefunded\s+by\s+/i,
      /\brefund\s+from\s+/i,
      /\bpaid\s+by\s+/i
    ];
    for (const rx of VERBS) {
      const m = desc.match(rx);
      if (m) {
        const name = captureNameAfter(desc, m.index + m[0].length);
        if (name && isUsableParty(name)) return name;
      }
    }

    // Leading-token fallback with capitalisation guard + stoplist.
    // Only applies to non-verb descs like "KPLC", "Kenya Power", "KPLC Bill".
    const cleaned = desc.replace(/\[REF:[^\]]*\]/gi, ' ').trim();
    const rawTokens = cleaned.split(/\s+/).filter(Boolean);
    // Guard: require at least one token that looks like a proper noun
    // (all-caps acronym of >=3 letters, or a Capitalised non-first-person word).
    const hasProperToken = rawTokens.some(t => {
      const letters = t.replace(/[^A-Za-z]/g, '');
      if (letters.length < 2) return false;
      if (/^[A-Z]{3,}$/.test(letters)) return true;       // KPLC, KCB, KRA
      if (/^[A-Z][a-z]+/.test(letters)) return true;       // Kenya, Otieno
      return false;
    });
    if (!hasProperToken) return null;

    const nameParts = [];
    for (const tok of rawTokens) {
      const low = tok.toLowerCase().replace(/[^a-z0-9'\-&]/g, '');
      if (!low) break;
      if (/^\d+$/.test(low)) break;
      if (isCategoryName(low)) break;
      if (COMMON_WORDS.has(low)) break;
      nameParts.push(low);
      if (nameParts.length >= 3) break;
    }
    if (nameParts.length > 0) {
      const joined = nameParts.join(' ');
      if (isUsableParty(joined)) return joined;
    }
    return null;
  }

  // Direction from double-entry, party from account side if usable,
  // else from desc.
  function extractParty(tx) {
    const debit  = String(tx.debit  || '').trim();
    const credit = String(tx.credit || '').trim();

    const debitIsLiquid  = isLiquidCredit(debit);
    const creditIsLiquid = isLiquidCredit(credit);

    let direction = null;
    let counterpartyAccount = null;

    if (creditIsLiquid && !debitIsLiquid) {
      direction = 'out';
      counterpartyAccount = debit;
    } else if (debitIsLiquid && !creditIsLiquid) {
      direction = 'in';
      counterpartyAccount = credit;
    } else if (debitIsLiquid && creditIsLiquid) {
      return null;                      // internal transfer
    } else {
      // Neither side liquid — fall back to whichever side is a category
      direction = 'out';
      counterpartyAccount = isCategoryName(debit) ? credit : debit;
    }

    // 1. If the counterparty account is a real name, use it.
    const acctNorm = normalizeParty(counterpartyAccount);
    if (acctNorm && isUsableParty(acctNorm)) {
      return { name: acctNorm, direction };
    }

    // 2. Else parse the desc.
    const fromDesc = parsePartyFromDesc(String(tx.desc || ''));
    if (fromDesc) return { name: fromDesc, direction };

    return null;
  }

  // ==================================================================
  // Row-level anomaly — built from extractParty
  // ==================================================================

  function buildPartyHistory(allTx) {
    // map: "<name>|<direction>" -> { amounts: [], dates: [] }
    const map = new Map();
    for (const t of allTx) {
      if (typeof t.id !== 'number') continue;
      if (isChargeRow(t)) continue;
      const p = extractParty(t);
      if (!p) continue;
      const key = p.name + '|' + p.direction;
      const cur = map.get(key) || { amounts: [], dates: [], name: p.name, direction: p.direction };
      cur.amounts.push(Number(t.amount) || 0);
      cur.dates.push(t.id);
      map.set(key, cur);
    }
    return map;
  }

  function partyKeyOf(tx) {
    const p = extractParty(tx);
    if (!p) return null;
    return p.name + '|' + p.direction;
  }

  function rowAnomaly(tx, history) {
    const amt = Number(tx.amount) || 0;
    if (amt < ROW_FLOOR_KSH) return { flagged: false };
    if (isChargeRow(tx)) return { flagged: false };

    const key = partyKeyOf(tx);
    if (!key) return { flagged: false };

    const h = history.get(key);
    if (!h) return { flagged: false };

    // Past entries only (strictly older than this tx).
    const t0 = tx.id;
    const ninety = 90 * 24 * 60 * 60 * 1000;
    const past90 = [];
    for (let i = 0; i < h.amounts.length; i++) {
      if (h.dates[i] < t0 && t0 - h.dates[i] <= ninety) past90.push(h.amounts[i]);
    }
    // Fallback: if fewer than 3 in 90d, use the full older history.
    let past = past90;
    if (past.length < MIN_ROW_TX) {
      past = [];
      for (let i = 0; i < h.amounts.length; i++) {
        if (h.dates[i] < t0) past.push(h.amounts[i]);
      }
    }
    if (past.length < MIN_ROW_TX) return { flagged: false };

    const med = medianOf(past);
    if (med <= 0) return { flagged: false };
    const factor = amt / med;
    if (factor >= ROW_FACTOR) {
      return { flagged: true, median: med, factor, pastCount: past.length, usedFallback: past90.length < MIN_ROW_TX };
    }
    return { flagged: false };
  }

  // ==================================================================
  // Category drift (unchanged from v3.2.x)
  // ==================================================================

  function monthlyCategoryTotals(allTx) {
    const buckets = new Map();
    for (const t of allTx) {
      if (typeof t.id !== 'number') continue;
      const d = new Date(t.id);
      const ym = d.getFullYear() + '-' + d.getMonth();
      const cat = categoryOf(t);
      if (!cat) continue;
      const b = buckets.get(ym) || {};
      b[cat] = (b[cat] || 0) + (Number(t.amount) || 0);
      buckets.set(ym, b);
    }
    return buckets;
  }

  function categoryOf(tx) {
    if (!tx) return null;
    const d = String(tx.debit || '');
    if (EXPENSE_CATEGORIES.has(d)) return d;
    if (isLiquidCredit(d)) {
      const c = String(tx.credit || '');
      if (INCOME_CATEGORIES.has(c)) return c;
      if (EXPENSE_CATEGORIES.has(c)) return c;
    }
    if (INCOME_CATEGORIES.has(d)) return d;
    if (EXPENSE_CATEGORIES.has(String(tx.credit || ''))) return String(tx.credit);
    return null;
  }

  function categoryType(cat) {
    return INCOME_CATEGORIES.has(cat) ? 'income' : 'expense';
  }

  function detectDrift(allTx) {
    if (selection.kind !== 'month') return [];
    const buckets = monthlyCategoryTotals(allTx);
    const y = selection.y, m = selection.m;
    const curKey = y + '-' + m;
    const cur = buckets.get(curKey) || {};

    const results = [];
    for (const cat of Object.keys(cur)) {
      if (cat === CHARGE_DEBIT) continue;
      if (loadMap(LS_DRIFT_DISMISS)[cat + ':' + curKey]) continue;

      const type = categoryType(cat);
      const currentTotal = cur[cat] || 0;

      const trailing = [];
      for (let i = 1; i <= 3; i++) {
        let yy = y, mm = m - i;
        while (mm < 0) { mm += 12; yy--; }
        const key = yy + '-' + mm;
        const t = (buckets.get(key) || {})[cat] || 0;
        if (t > 0) trailing.push(t);
      }
      if (trailing.length < 2) continue;

      const bumpKey = cat + ':' + curKey;
      if (loadMap(LS_BASELINE_BUMP)[bumpKey]) trailing.push(currentTotal);

      const base = medianOf(trailing);
      if (base <= 0) continue;

      let txCount = 0;
      for (const t of allTx) {
        if (typeof t.id !== 'number') continue;
        if (categoryOf(t) !== cat) continue;
        const d = new Date(t.id);
        const monthsAgo = (y - d.getFullYear()) * 12 + (m - d.getMonth());
        if (monthsAgo >= 0 && monthsAgo <= 3) txCount++;
      }
      if (txCount < MIN_DRIFT_TX) continue;

      if (type === 'expense') {
        const factor = currentTotal / base;
        const diff = currentTotal - base;
        if (factor >= DRIFT_FACTOR && diff >= DRIFT_FLOOR_KSH) {
          results.push({
            kind: 'drift', cat, type, currentTotal, base,
            trailing, factor, diff, key: cat + ':' + curKey
          });
        }
      } else {
        const factor = currentTotal / base;
        if (factor <= INCOME_DROP_FACT && (base - currentTotal) >= DRIFT_FLOOR_KSH) {
          results.push({
            kind: 'drift-income', cat, type, currentTotal, base,
            trailing, factor, diff: currentTotal - base, key: cat + ':' + curKey
          });
        }
      }
    }

    results.sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff));
    return results;
  }

  // ==================================================================
  // Ledger chrome
  // ==================================================================

  function ledgerTableMounted() {
    const view = document.getElementById(LEDGER_VIEW_ID);
    if (!view) return null;
    return view.querySelector('table.win-table');
  }

  function ensureLedgerChrome() {
    const table = ledgerTableMounted();
    if (!table) return;
    const wrap = table.parentElement;
    const cardBody = wrap && wrap.parentElement;
    if (!cardBody) return;

    if (!document.getElementById(LEDGER_BAR_ID)) {
      const bar = document.createElement('div');
      bar.id = LEDGER_BAR_ID;
      bar.style.cssText = [
        'display:flex','align-items:center','justify-content:space-between',
        'gap:10px','flex-wrap:wrap',
        'padding:10px 12px','margin-bottom:8px',
        'background:rgba(0,120,212,0.05)',
        'border:1px solid rgba(0,120,212,0.15)',
        'border-radius:8px','font-size:12px','color:var(--win-text-2)'
      ].join(';');
      bar.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <span style="font-size:14px;">🗓️</span>
          <span id="tg-period-label" style="font-weight:600;color:var(--win-text);"></span>
          <select id="tg-period-select"
                  style="border:1px solid var(--win-border-2);border-radius:6px;
                         padding:4px 8px;font-size:12px;background:white;
                         font-family:inherit;color:var(--win-text);">
          </select>
        </div>
        <button id="tg-charges-pill" type="button"
                style="display:none;align-items:center;gap:8px;
                       background:linear-gradient(135deg,#fff7ed,#ffedd5);
                       border:1px solid #fdba74;border-radius:20px;
                       padding:5px 12px 5px 10px;font-size:12px;cursor:pointer;
                       font-family:inherit;color:#9a3412;font-weight:600;">
          <span style="font-size:13px;">📊</span>
          <span id="tg-charges-total">KSh 0</span>
          <span style="opacity:0.75;font-weight:500;" id="tg-charges-count"></span>
        </button>
      `;
      cardBody.insertBefore(bar, wrap);
    }

    if (!document.getElementById(LEDGER_META_ID)) {
      const meta = document.createElement('div');
      meta.id = LEDGER_META_ID;
      meta.style.cssText = 'margin-bottom:10px;';
      cardBody.insertBefore(meta, wrap);
    }
  }

  // ==================================================================
  // Ledger render
  // ==================================================================

  function renderLedger() {
    const table = ledgerTableMounted();
    if (!table) return;
    ensureLedgerChrome();

    const tbody = table.querySelector('tbody');
    if (!tbody) return;

    const all = TX_CACHE;
    const visible = all.filter(inSelection);

    const partyHistory = buildPartyHistory(all);
    const driftFindings = detectDrift(all);

    tbody.innerHTML = '';

    if (visible.length === 0) {
      const tr = document.createElement('tr');
      tr.innerHTML = '<td colspan="5" style="padding:32px;text-align:center;color:var(--win-text-3);">' +
                     'No transactions in this period.</td>';
      tbody.appendChild(tr);
      renderLedgerMeta(visible, driftFindings, partyHistory);
      renderChargesPill(visible);
      renderPeriodSelector(all);
      return;
    }

    const groups = new Map();
    for (const tx of visible) {
      const d = new Date(tx.id);
      const key = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(tx);
    }

    for (const [key, rows] of groups) {
      const d = new Date(rows[0].id);
      const dayTotalOut = rows.reduce((s, r) => s + (isLiquidCredit(r.credit) ? Number(r.amount) || 0 : 0), 0);

      const head = document.createElement('tr');
      head.setAttribute('data-tg-day-head', key);
      head.innerHTML =
        '<td colspan="5" style="position:sticky;top:0;z-index:1;' +
        'padding:8px 14px;background:rgba(0,0,0,0.035);' +
        'font-size:11px;font-weight:600;color:var(--win-text-2);' +
        'text-transform:uppercase;letter-spacing:.06em;' +
        'border-top:1px solid var(--win-border);border-bottom:1px solid var(--win-border);">' +
          dayLabel(d) +
          '<span style="float:right;font-weight:500;opacity:0.8;">' +
            'Spent: KSh ' + money(dayTotalOut) +
          '</span>' +
        '</td>';
      tbody.appendChild(head);

      for (const tx of rows) tbody.appendChild(buildRow(tx, partyHistory));
    }

    renderLedgerMeta(visible, driftFindings, partyHistory);
    renderChargesPill(visible);
    renderPeriodSelector(all);
  }

  function buildRow(tx, partyHistory) {
    const tr = document.createElement('tr');
    tr.setAttribute('data-tg-txid', String(tx.id));
    const amt = Number(tx.amount) || 0;
    const isAirtime  = tx.debit === 'Airtime Purchase';
    const isCharge   = isChargeRow(tx);

    const row = isCharge ? { flagged: false } : rowAnomaly(tx, partyHistory);
    const rowFlagged = row.flagged && !isRowDismissed(tx.id);

    // "New" is a soft blue chip — informational, not a verdict.
    const p = extractParty(tx);
    const comboKey = p ? (p.name + '|' + p.direction) : null;
    const isNew = comboKey && !hasSeenCombo(comboKey) && !isCharge && !isAirtime;
    if (isNew) markSeenCombo(comboKey);

    let accent = '';
    if (rowFlagged) accent = 'box-shadow:inset 3px 0 0 #F59E0B;';
    else if (isAirtime) accent = 'box-shadow:inset 3px 0 0 #8B5CF6;';
    else if (isCharge)  accent = 'box-shadow:inset 3px 0 0 #DC2626;';

    const flags = [];
    if (rowFlagged) flags.push('<span data-tg-anom-row="1" style="font-size:10px;font-weight:700;background:#FEF3C7;color:#92400E;padding:1px 6px;border-radius:20px;cursor:pointer;">⚠ Unusual · click</span>');
    if (isNew) flags.push('<span style="font-size:10px;font-weight:700;background:#DBEAFE;color:#1E40AF;padding:1px 6px;border-radius:20px;">New</span>');
    if (isAirtime) flags.push('<span style="font-size:10px;font-weight:700;background:#EDE9FE;color:#5B21B6;padding:1px 6px;border-radius:20px;">Airtime</span>');
    if (isCharge)  flags.push('<span style="font-size:10px;font-weight:700;background:#FEE2E2;color:#991B1B;padding:1px 6px;border-radius:20px;">Charge</span>');

    const esc = escapeHtml;
    tr.innerHTML = `
      <td style="font-family:monospace;font-size:11px;color:var(--win-text-3);white-space:nowrap;${accent}">
        ${new Date(tx.id).toLocaleDateString('en-KE')}
      </td>
      <td>
        <div style="font-size:13px;font-weight:500;">${esc(tx.desc || '')}</div>
        <div style="display:flex;gap:6px;margin-top:4px;flex-wrap:wrap;">
          <span class="chip chip-green" style="font-size:10px;">${esc(tx.debit || '')} → ${esc(tx.credit || '')}</span>
          ${flags.join('')}
        </div>
      </td>
      <td style="text-align:right;font-family:monospace;color:var(--win-green);font-weight:600;white-space:nowrap;">
        ${isLiquidCredit(tx.debit) ? '+' + money(amt) : ''}
      </td>
      <td style="text-align:right;font-family:monospace;color:var(--win-red);font-weight:600;white-space:nowrap;">
        ${isLiquidCredit(tx.credit) ? '-' + money(amt) : ''}
      </td>
      <td class="tg-row-actions" style="width:40px;text-align:center;padding:8px 6px;">
        <button class="tg-row-del" title="Delete transaction"
                aria-label="Delete transaction"
                style="width:26px;height:26px;border-radius:6px;
                       border:1px solid rgba(196,43,28,0.25);
                       background:rgba(196,43,28,0.08);
                       color:var(--win-red);cursor:pointer;
                       font-size:15px;font-weight:700;line-height:1;
                       opacity:1;
                       transition:background .15s,color .15s,transform .1s;
                       font-family:inherit;
                       display:flex;align-items:center;justify-content:center;
                       margin:0 auto;">×</button>
      </td>
    `;

    const delBtn = tr.querySelector('.tg-row-del');
    delBtn.addEventListener('mouseenter', () => {
      delBtn.style.background = 'rgba(196,43,28,0.22)';
      delBtn.style.transform  = 'scale(1.08)';
    });
    delBtn.addEventListener('mouseleave', () => {
      delBtn.style.background = 'rgba(196,43,28,0.08)';
      delBtn.style.transform  = 'scale(1)';
    });
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      confirmDeleteTx(tx);
    });

    if (rowFlagged) {
      tr.querySelector('[data-tg-anom-row]').addEventListener('click', (e) => {
        e.stopPropagation();
        showRowExplainer(tx, row);
      });
    }
    return tr;
  }

  // ==================================================================
  // Delete flow
  // ==================================================================

  function confirmDeleteTx(tx) {
    const amt = Number(tx.amount) || 0;
    const lines = [
      'Delete this transaction?',
      '',
      'Date:   ' + new Date(tx.id).toLocaleDateString('en-KE'),
      'Amount: KSh ' + money(amt),
      'Debit:  ' + (tx.debit || '—'),
      'Credit: ' + (tx.credit || '—'),
      (tx.desc ? 'Note:   ' + tx.desc : ''),
      '',
      'This removes it from the ledger and the backup file.'
    ].filter(Boolean).join('\n');

    if (!window.confirm(lines)) return;
    doDeleteTx(tx);
  }

  async function doDeleteTx(tx) {
    try {
      await deleteTx(tx.id);
    } catch (e) {
      warn('delete failed', e);
      window.alert('Could not delete: ' + (e && e.message ? e.message : String(e)));
      return;
    }

    TX_CACHE = TX_CACHE.filter(t => Number(t.id) !== Number(tx.id));
    renderLedger();
    syncBackup().catch(() => {});
    showUndoToast(tx);
  }

  function showUndoToast(tx) {
    const existing = document.getElementById('tg-undo-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'tg-undo-toast';
    toast.style.cssText = [
      'position:fixed','left:50%','bottom:24px','transform:translateX(-50%)',
      'z-index:99997','min-width:280px','max-width:90vw',
      'background:#1f1f1f','color:#fff','border-radius:10px',
      'box-shadow:0 12px 32px rgba(0,0,0,0.35)',
      'padding:12px 14px','display:flex','align-items:center','gap:12px',
      'font:13px/1.4 system-ui,Segoe UI,Arial,sans-serif'
    ].join(';');
    toast.innerHTML = `
      <div style="flex:1;">
        <div style="font-weight:600;">Transaction deleted</div>
        <div style="font-size:11px;opacity:0.75;margin-top:2px;">
          KSh ${money(tx.amount)} · ${escapeHtml(tx.debit || '')} → ${escapeHtml(tx.credit || '')}
        </div>
      </div>
      <button id="tg-undo-btn" style="
        background:rgba(255,255,255,0.1);color:#fff;border:none;border-radius:6px;
        padding:7px 12px;font:600 12px inherit;cursor:pointer;white-space:nowrap;">
        Undo
      </button>
      <button id="tg-undo-close" style="
        background:transparent;color:#aaa;border:none;font-size:16px;
        cursor:pointer;line-height:1;padding:2px 4px;">×</button>
    `;
    document.body.appendChild(toast);

    let timer = setTimeout(() => cleanup(), 6000);

    function cleanup() {
      clearTimeout(timer);
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }

    toast.querySelector('#tg-undo-close').addEventListener('click', cleanup);
    toast.querySelector('#tg-undo-btn').addEventListener('click', async () => {
      clearTimeout(timer);
      try {
        await putTx(tx);
        TX_CACHE.push(tx);
        TX_CACHE.sort((a, b) => Number(b.id) - Number(a.id));
        renderLedger();
        syncBackup().catch(() => {});
      } catch (e) {
        warn('undo failed', e);
      }
      cleanup();
    });
  }

  // ==================================================================
  // Explainer panels (glasmorphic)
  // ==================================================================

  function showRowExplainer(tx, info) {
    const amt = Number(tx.amount) || 0;
    const p = extractParty(tx);
    const label = p ? p.name : (tx.debit || 'this recipient');
    const dirText = p && p.direction === 'in' ? 'received from' : 'sent to';
    const factor = info.factor.toFixed(2);
    const median = info.median;

    openExplainer({
      icon: '⚠',
      title: 'Why is this unusual?',
      accent: '#F59E0B',
      body: `
        <div style="margin-bottom:10px;">
          <strong>${escapeHtml(label)}</strong> —
          <span style="font-family:monospace;font-weight:700;">KSh ${money(amt)}</span>
        </div>
        <div style="background:rgba(245,158,11,0.10);border-radius:8px;padding:12px 14px;line-height:1.7;">
          Comparing this <strong>${dirText} ${escapeHtml(label)}</strong> against your
          prior history with them:
          <br>
          Your typical prior amount was about
          <strong>KSh ${money(Math.round(median))}</strong>
          (from ${info.pastCount} earlier transaction${info.pastCount === 1 ? '' : 's'}${info.usedFallback ? ', full history' : ', last 90 days'}).
          <br>
          This transaction is <strong>${factor}× larger</strong> — a jump of
          <strong>KSh ${money(Math.round(amt - median))}</strong>.
        </div>
        <div style="margin-top:12px;font-size:11px;color:var(--win-text-3);line-height:1.6;">
          If this is a one-off (bonus, emergency, big purchase), dismiss it.
          If this is your new normal with this recipient, mark it as normal and
          Travis will adjust its baseline.
        </div>
      `,
      actions: [
        { label: 'This is normal', kind: 'normal', onClick: () => {
            dismissRow(tx.id);
            closeExplainer();
            renderLedger();
          } },
        { label: 'Dismiss', kind: 'muted', onClick: () => {
            dismissRow(tx.id);
            closeExplainer();
            renderLedger();
          } }
      ]
    });
  }

  function showDriftExplainer(finding) {
    const cat = finding.cat;
    const currentTotal = finding.currentTotal;
    const base = finding.base;
    const trailing = finding.trailing;
    const factor = finding.factor.toFixed(2);
    const type = finding.type;

    const contributing = TX_CACHE
      .filter(t => inSelection(t) && categoryOf(t) === cat)
      .sort((a, b) => Number(b.id) - Number(a.id));

    const isIncome = type === 'income';

    const rowsHtml = contributing.map(t => `
      <div style="display:flex;justify-content:space-between;padding:5px 0;
                  border-bottom:1px solid rgba(0,0,0,0.05);font-size:12px;">
        <span style="color:var(--win-text-2);">${new Date(t.id).toLocaleDateString('en-KE', { day:'numeric', month:'short' })}</span>
        <span style="flex:1;margin:0 10px;color:var(--win-text-3);
                     overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;">
          ${escapeHtml(t.desc || '')}
        </span>
        <span style="font-family:monospace;font-weight:600;">KSh ${money(t.amount)}</span>
      </div>
    `).join('');

    const trailingStr = trailing.length === 0
      ? 'no prior data'
      : trailing.map(v => 'KSh ' + money(Math.round(v))).join(' · ');

    const headline = isIncome
      ? `${cat} came in lower than usual`
      : `${cat} is running high`;

    const differenceText = isIncome
      ? `<strong>KSh ${money(Math.abs(currentTotal - base))} less</strong> than your usual`
      : `<strong>+KSh ${money(currentTotal - base)} extra</strong> this period`;

    const accent = isIncome ? '#DC2626' : '#FB923C';

    openExplainer({
      icon: isIncome ? '📉' : '📊',
      title: headline,
      accent,
      body: `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
          <div style="background:rgba(0,0,0,0.03);border-radius:8px;padding:10px 12px;">
            <div style="font-size:10px;color:var(--win-text-3);text-transform:uppercase;letter-spacing:.06em;">This period</div>
            <div style="font-size:18px;font-weight:800;font-family:monospace;">KSh ${money(currentTotal)}</div>
          </div>
          <div style="background:rgba(0,0,0,0.03);border-radius:8px;padding:10px 12px;">
            <div style="font-size:10px;color:var(--win-text-3);text-transform:uppercase;letter-spacing:.06em;">Your usual</div>
            <div style="font-size:18px;font-weight:800;font-family:monospace;">KSh ${money(Math.round(base))}</div>
            <div style="font-size:10px;color:var(--win-text-3);margin-top:2px;">trailing 3-month median</div>
          </div>
        </div>
        <div style="background:rgba(${isIncome ? '220,38,38' : '251,146,60'},0.10);
                    border-radius:8px;padding:12px 14px;line-height:1.7;">
          That's <strong>${factor}×</strong> your usual — ${differenceText}.
        </div>
        <div style="margin-top:12px;font-size:11px;color:var(--win-text-3);">
          <strong>Trailing months:</strong> ${trailingStr}
        </div>
        <div style="margin-top:14px;">
          <div style="font-size:11px;font-weight:700;color:var(--win-text-2);
                      text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">
            ${contributing.length} transactions this period
          </div>
          <div style="max-height:220px;overflow-y:auto;">${rowsHtml || '<em style="color:var(--win-text-3);">none</em>'}</div>
        </div>
      `,
      actions: isIncome ? [
        { label: 'Dismiss', kind: 'muted', onClick: () => {
            dismiss(finding.key, LS_DRIFT_DISMISS);
            closeExplainer();
            renderLedger();
          } }
      ] : [
        { label: 'This is normal', kind: 'normal', onClick: () => {
            const bm = loadMap(LS_BASELINE_BUMP);
            bm[finding.key] = Date.now();
            saveMap(LS_BASELINE_BUMP, bm);
            dismiss(finding.key, LS_DRIFT_DISMISS);
            closeExplainer();
            renderLedger();
          } },
        { label: 'Dismiss', kind: 'muted', onClick: () => {
            dismiss(finding.key, LS_DRIFT_DISMISS);
            closeExplainer();
            renderLedger();
          } }
      ]
    });
  }

  let explainerEl = null;

  function openExplainer({ icon, title, body, actions, accent }) {
    closeExplainer();

    const overlay = document.createElement('div');
    overlay.id = 'tg-explainer-overlay';
    overlay.style.cssText = [
      'position:fixed','inset:0','z-index:99999',
      'display:flex','align-items:center','justify-content:center',
      'padding:20px','background:rgba(15,20,30,0.45)',
      'backdrop-filter:blur(14px) saturate(140%)',
      '-webkit-backdrop-filter:blur(14px) saturate(140%)'
    ].join(';');

    const card = document.createElement('div');
    card.style.cssText = [
      'position:relative','max-width:520px','width:100%','max-height:85vh',
      'overflow:hidden','display:flex','flex-direction:column',
      'background:rgba(255,255,255,0.85)',
      'backdrop-filter:blur(24px) saturate(180%)',
      '-webkit-backdrop-filter:blur(24px) saturate(180%)',
      'border:1px solid rgba(255,255,255,0.6)',
      'border-radius:16px',
      'box-shadow:0 24px 64px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.1)',
      'font-family:inherit','color:var(--win-text)'
    ].join(';');

    const actionsHtml = (actions || []).map((a, i) => {
      const base = 'flex:1;padding:11px 16px;border-radius:8px;font-size:13px;'
                 + 'font-weight:600;cursor:pointer;font-family:inherit;border:none;';
      const styles = a.kind === 'normal'
        ? 'background:linear-gradient(135deg,#0078D4,#005A9E);color:white;'
        : a.kind === 'muted'
        ? 'background:rgba(0,0,0,0.06);color:var(--win-text-2);border:1px solid var(--win-border-2);'
        : 'background:rgba(0,0,0,0.04);color:var(--win-text-2);';
      return `<button data-tg-action="${i}" style="${base}${styles}">${escapeHtml(a.label)}</button>`;
    }).join('');

    card.innerHTML = `
      <div style="padding:18px 22px 12px;border-bottom:1px solid rgba(0,0,0,0.06);
                  display:flex;align-items:flex-start;gap:12px;flex-shrink:0;">
        <div style="width:36px;height:36px;border-radius:10px;
                    background:${accent}22;color:${accent};
                    display:flex;align-items:center;justify-content:center;
                    font-size:18px;flex-shrink:0;">${icon}</div>
        <div style="flex:1;">
          <div style="font-size:15px;font-weight:700;line-height:1.3;">${escapeHtml(title)}</div>
          <div style="font-size:11px;color:var(--win-text-3);margin-top:2px;">${escapeHtml(periodLabel())}</div>
        </div>
        <button data-tg-close="1" style="background:transparent;border:none;
                font-size:20px;line-height:1;cursor:pointer;color:var(--win-text-3);
                padding:0 4px;">×</button>
      </div>
      <div style="padding:16px 22px 20px;overflow-y:auto;flex:1;">
        ${body}
      </div>
      ${actionsHtml ? `
      <div style="padding:14px 22px;border-top:1px solid rgba(0,0,0,0.06);
                  display:flex;gap:10px;background:rgba(255,255,255,0.4);flex-shrink:0;">
        ${actionsHtml}
      </div>` : ''}
    `;

    overlay.appendChild(card);
    document.body.appendChild(overlay);
    explainerEl = overlay;

    (actions || []).forEach((a, i) => {
      const btn = card.querySelector(`[data-tg-action="${i}"]`);
      if (btn) btn.addEventListener('click', a.onClick);
    });
    card.querySelector('[data-tg-close="1"]').addEventListener('click', closeExplainer);

    overlay.addEventListener('mousedown', (e) => {
      if (e.target === overlay) closeExplainer();
    });
    document.addEventListener('keydown', escClose);
  }

  function escClose(e) { if (e.key === 'Escape') closeExplainer(); }

  function closeExplainer() {
    if (explainerEl && explainerEl.parentNode) explainerEl.parentNode.removeChild(explainerEl);
    explainerEl = null;
    document.removeEventListener('keydown', escClose);
  }

  // ==================================================================
  // Period selector
  // ==================================================================

  function renderPeriodSelector(allTxs) {
    const sel = document.getElementById('tg-period-select');
    const lbl = document.getElementById('tg-period-label');
    if (!sel || !lbl) return;

    const months = monthsWithData(allTxs);
    const now = new Date();
    const hasCurrent = months.some(m => m.y === now.getFullYear() && m.m === now.getMonth());

    const opts = [];
    opts.push('<option value="all">All time</option>');
    if (hasCurrent) {
      opts.push('<option value="' + now.getFullYear() + '-' + now.getMonth() + '">This month</option>');
    }
    for (const m of months) {
      if (m.y === now.getFullYear() && m.m === now.getMonth()) continue;
      opts.push(
        '<option value="' + m.y + '-' + m.m + '">' +
        MONTHS_LONG[m.m] + ' ' + m.y + ' (' + m.count + ')' +
        '</option>'
      );
    }
    const newHtml = opts.join('');
    if (sel.innerHTML !== newHtml) sel.innerHTML = newHtml;

    const want = selection.kind === 'all' ? 'all' : selection.y + '-' + selection.m;
    if (sel.value !== want) sel.value = want;

    if (sel.selectedIndex === -1) {
      sel.value = 'all';
      selection = { kind: 'all' };
      persistSelection();
    }

    lbl.textContent = periodLabel();

    if (!sel._tgWired) {
      sel._tgWired = true;
      sel.addEventListener('change', () => {
        const v = sel.value;
        if (v === 'all') selection = { kind: 'all' };
        else {
          const [y, m] = v.split('-').map(Number);
          selection = { kind: 'month', y, m };
        }
        persistSelection();
        renderLedger();
      });
    }
  }

  // ==================================================================
  // Charges pill
  // ==================================================================

  function renderChargesPill(visible) {
    const pill  = document.getElementById('tg-charges-pill');
    const total = document.getElementById('tg-charges-total');
    const count = document.getElementById('tg-charges-count');
    if (!pill || !total || !count) return;

    const chargeRows = visible.filter(isChargeRow);
    if (chargeRows.length === 0) { pill.style.display = 'none'; return; }

    const sum = chargeRows.reduce((s, r) => s + (Number(r.amount) || 0), 0);
    total.textContent = 'KSh ' + money(sum);
    count.textContent = '· ' + chargeRows.length + ' charge' + (chargeRows.length !== 1 ? 's' : '');
    pill.style.display = 'inline-flex';

    if (!pill._tgWired) {
      pill._tgWired = true;
      pill.addEventListener('click', () => showChargesBreakdown(pill._chargeRows || []));
    }
    pill._chargeRows = chargeRows;
  }

  function showChargesBreakdown(chargeRows) {
    const kinds = { send: 0, withdraw: 0, paybill: 0, buygoods: 0, fuliza: 0, other: 0 };
    let total = 0;
    for (const r of chargeRows) {
      total += Number(r.amount) || 0;
      const d = String(r.desc || '').toLowerCase();
      if (/fuliza/.test(d)) kinds.fuliza++;
      else if (/withdraw/.test(d)) kinds.withdraw++;
      else if (/paybill/.test(d)) kinds.paybill++;
      else if (/buy goods|till/.test(d)) kinds.buygoods++;
      else if (/sent|send/.test(d)) kinds.send++;
      else kinds.other++;
    }

    const existing = document.getElementById('tg-charges-panel');
    if (existing) existing.remove();

    const panel = document.createElement('div');
    panel.id = 'tg-charges-panel';
    panel.style.cssText = [
      'position:fixed','z-index:9998',
      'background:rgba(255,255,255,0.9)',
      'backdrop-filter:blur(20px) saturate(180%)',
      '-webkit-backdrop-filter:blur(20px) saturate(180%)',
      'border:1px solid rgba(255,255,255,0.6)',
      'border-radius:12px','box-shadow:0 12px 32px rgba(0,0,0,0.18)',
      'padding:14px 16px','font-size:12px','min-width:230px',
      'color:var(--win-text)'
    ].join(';');

    const line = (label, n) => n > 0
      ? `<div style="display:flex;justify-content:space-between;padding:3px 0;color:var(--win-text-2);">
           <span>${label}</span><span style="font-weight:600;color:var(--win-text);">${n}</span>
         </div>`
      : '';

    panel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
        <div style="font-weight:700;">Transaction charges</div>
        <div style="font-family:monospace;font-weight:700;color:#9a3412;">KSh ${money(total)}</div>
      </div>
      <div style="border-top:1px solid var(--win-border);padding-top:6px;">
        ${line('Send Money', kinds.send)}
        ${line('Withdrawals', kinds.withdraw)}
        ${line('Paybill', kinds.paybill)}
        ${line('Buy Goods / Till', kinds.buygoods)}
        ${line('Fuliza', kinds.fuliza)}
        ${line('Other', kinds.other)}
      </div>
      <div style="margin-top:10px;border-top:1px solid var(--win-border);padding-top:8px;
                  font-size:11px;color:var(--win-text-3);line-height:1.5;">
        Only Safaricom fees are counted here. Principals and airtime are excluded.
      </div>
    `;

    document.body.appendChild(panel);

    const pill = document.getElementById('tg-charges-pill');
    if (pill) {
      const r = pill.getBoundingClientRect();
      panel.style.top  = (r.bottom + 8) + 'px';
      panel.style.left = Math.max(8, Math.min(window.innerWidth - 240, r.right - 220)) + 'px';
    }

    const closer = (e) => {
      if (!panel.contains(e.target) && e.target.id !== 'tg-charges-pill') {
        panel.remove();
        document.removeEventListener('mousedown', closer);
        document.removeEventListener('keydown', esc);
      }
    };
    const esc = (e) => {
      if (e.key === 'Escape') {
        panel.remove();
        document.removeEventListener('mousedown', closer);
        document.removeEventListener('keydown', esc);
      }
    };
    setTimeout(() => {
      document.addEventListener('mousedown', closer);
      document.addEventListener('keydown', esc);
    }, 0);
  }

  // ==================================================================
  // Meta cards
  // ==================================================================

  function renderLedgerMeta(visible, driftFindings, partyHistory) {
    const meta = document.getElementById(LEDGER_META_ID);
    if (!meta) return;

    const inflow  = visible.reduce((s, r) => s + (isLiquidCredit(r.debit)  ? Number(r.amount) || 0 : 0), 0);
    const outflow = visible.reduce((s, r) => s + (isLiquidCredit(r.credit) ? Number(r.amount) || 0 : 0), 0);
    const net     = inflow - outflow;

    // Top recipients — group by extractParty(), direction-aware.
    const outMap = new Map();
    const inMap  = new Map();
    for (const r of visible) {
      const p = extractParty(r);
      if (!p) continue;
      const target = p.direction === 'in' ? inMap : outMap;
      const cur = target.get(p.name) || { name: p.name, count: 0, total: 0 };
      cur.count++;
      cur.total += Number(r.amount) || 0;
      target.set(p.name, cur);
    }
    const sortFn = (a, b) => (b.count - a.count) || (b.total - a.total);
    const topOut = Array.from(outMap.values()).filter(x => x.count >= MIN_RECIPIENT_TX).sort(sortFn).slice(0, 3);
    const topIn  = Array.from(inMap.values()).filter(x => x.count >= MIN_RECIPIENT_TX).sort(sortFn).slice(0, 3);

    const recipientLine = (x, dir) => `
      <div style="display:flex;justify-content:space-between;padding:3px 0;">
        <span>
          <span style="color:var(--win-text-3);">${dir === 'in' ? '↓' : '↑'}</span>
          ${escapeHtml(x.name)}
          <span style="color:var(--win-text-3);"> ×${x.count}</span>
        </span>
        <span style="font-family:monospace;font-weight:600;">KSh ${money(x.total)}</span>
      </div>
    `;

    const recipientsBody = (topOut.length === 0 && topIn.length === 0)
      ? '<span style="color:var(--win-text-3);">No recipient appears 3+ times in this period.</span>'
      : `
        ${topOut.length > 0 ? '<div style="font-size:10px;color:var(--win-text-3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:2px;">Paid out to</div>' : ''}
        ${topOut.map(x => recipientLine(x, 'out')).join('')}
        ${topIn.length > 0 ? '<div style="font-size:10px;color:var(--win-text-3);text-transform:uppercase;letter-spacing:.06em;margin:6px 0 2px;">Received from</div>' : ''}
        ${topIn.map(x => recipientLine(x, 'in')).join('')}
      `;

    const driftBlocks = driftFindings.map(d => {
      const isIncome = d.type === 'income';
      const arrow    = isIncome ? '↓' : '↑';
      const bg       = isIncome ? 'rgba(220,38,38,0.10)' : 'rgba(251,146,60,0.10)';
      const fg       = isIncome ? '#991B1B' : '#9A3412';
      const factorTxt = isIncome
        ? Math.round((1 - d.factor) * 100) + '% below usual'
        : d.factor.toFixed(2) + '× usual';
      const diffTxt = isIncome
        ? '−KSh ' + money(Math.abs(d.currentTotal - d.base))
        : '+KSh ' + money(d.currentTotal - d.base);
      return `
        <div data-tg-drift="${escapeHtml(d.key)}"
             style="display:flex;align-items:center;justify-content:space-between;
                    padding:8px 10px;background:${bg};border-radius:8px;
                    margin-bottom:6px;cursor:pointer;font-size:12px;
                    transition:transform .1s;"
             onmouseover="this.style.transform='translateX(2px)'"
             onmouseout="this.style.transform='translateX(0)'">
          <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;">
            <span style="font-size:14px;">${arrow}</span>
            <span style="font-weight:600;color:${fg};
                         overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
              ${escapeHtml(d.cat)}
            </span>
            <span style="font-size:10px;color:var(--win-text-3);flex-shrink:0;">
              ${factorTxt}
            </span>
          </div>
          <span style="font-family:monospace;font-weight:700;
                       color:${fg};flex-shrink:0;margin-left:8px;">
            ${diffTxt}
          </span>
        </div>
      `;
    }).join('');

    const rowAnomalies = visible.filter(t => {
      if (isChargeRow(t)) return false;
      if (isRowDismissed(t.id)) return false;
      return rowAnomaly(t, partyHistory).flagged;
    });

    const rowBlocks = rowAnomalies.slice(0, 5).map(t => {
      const amt = Number(t.amount) || 0;
      const p = extractParty(t);
      const label = p ? p.name : (t.debit || 'transaction');
      return `
        <div data-tg-rowanom="${t.id}"
             style="display:flex;align-items:center;justify-content:space-between;
                    padding:8px 10px;background:rgba(245,158,11,0.10);border-radius:8px;
                    margin-bottom:6px;cursor:pointer;font-size:12px;
                    transition:transform .1s;"
             onmouseover="this.style.transform='translateX(2px)'"
             onmouseout="this.style.transform='translateX(0)'">
          <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;">
            <span style="font-size:14px;">⚠</span>
            <span style="font-weight:600;color:#92400E;
                         overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
              ${escapeHtml(label)}
            </span>
            <span style="font-size:10px;color:var(--win-text-3);flex-shrink:0;">
              ${new Date(t.id).toLocaleDateString('en-KE', { day:'numeric', month:'short' })}
            </span>
          </div>
          <span style="font-family:monospace;font-weight:700;color:#92400E;flex-shrink:0;">
            KSh ${money(amt)}
          </span>
        </div>
      `;
    }).join('');

    const anomaliesBody = (driftFindings.length === 0 && rowAnomalies.length === 0)
      ? `<span style="color:var(--win-text-3);">No anomalies flagged in ${escapeHtml(periodLabel())}.</span>`
      : `
        ${driftFindings.length > 0 ? `
          <div style="font-size:10px;font-weight:700;color:var(--win-text-3);
                      text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">
            Category drift
          </div>
          ${driftBlocks}
        ` : ''}
        ${rowAnomalies.length > 0 ? `
          <div style="font-size:10px;font-weight:700;color:var(--win-text-3);
                      text-transform:uppercase;letter-spacing:.06em;
                      margin:${driftFindings.length > 0 ? '10px' : '0'} 0 6px;">
            Individual transactions
          </div>
          ${rowBlocks}
          ${rowAnomalies.length > 5 ? `<div style="font-size:11px;color:var(--win-text-3);text-align:center;margin-top:4px;">+${rowAnomalies.length - 5} more in the list below</div>` : ''}
        ` : ''}
      `;

    const netColor = net >= 0 ? 'var(--win-green)' : 'var(--win-red)';
    const netSign  = net >= 0 ? '+' : '-';

    const netBody = `
      <div style="display:flex;justify-content:space-between;padding:2px 0;">
        <span style="color:var(--win-text-2);">In</span>
        <span style="font-family:monospace;font-weight:700;color:var(--win-green);">KSh ${money(inflow)}</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:2px 0;">
        <span style="color:var(--win-text-2);">Out</span>
        <span style="font-family:monospace;font-weight:700;color:var(--win-red);">KSh ${money(outflow)}</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:6px 0 0;
                  border-top:1px solid var(--win-border);margin-top:6px;">
        <span style="font-weight:600;">Net</span>
        <span style="font-family:monospace;font-weight:800;color:${netColor};">
          ${netSign}KSh ${money(Math.abs(net))}
        </span>
      </div>
    `;

    const card = (title, body, flex) => `
      <div style="background:white;border:1px solid var(--win-border);border-radius:10px;
                  padding:12px 14px;flex:${flex || 1};min-width:200px;">
        <div style="font-size:10px;font-weight:700;color:var(--win-text-3);
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;">${title}</div>
        <div style="font-size:12px;line-height:1.6;">${body}</div>
      </div>
    `;

    meta.innerHTML = `
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
        ${card('Net flow · ' + escapeHtml(periodLabel()), netBody, '0 0 220px')}
        ${card('Top recipients', recipientsBody, '1 1 240px')}
        ${card('Anomalies', anomaliesBody, '1 1 320px')}
      </div>
    `;

    meta.querySelectorAll('[data-tg-drift]').forEach(el => {
      el.addEventListener('click', () => {
        const key = el.getAttribute('data-tg-drift');
        const finding = driftFindings.find(d => d.key === key);
        if (finding) showDriftExplainer(finding);
      });
    });

    meta.querySelectorAll('[data-tg-rowanom]').forEach(el => {
      el.addEventListener('click', () => {
        const id = Number(el.getAttribute('data-tg-rowanom'));
        const tx = TX_CACHE.find(t => Number(t.id) === id);
        if (!tx) return;
        const info = rowAnomaly(tx, buildPartyHistory(TX_CACHE));
        if (info.flagged) showRowExplainer(tx, info);
      });
    });
  }

  // ==================================================================
  // M-Pesa button relocation
  // ==================================================================

  function relocateMpesaButton() {
    const btn = document.getElementById('nav-mpesa');
    if (!btn) return false;
    const sidebar = document.getElementById('nav-sidebar');
    if (!sidebar) return false;
    const newEntryBtn = sidebar.querySelector('button[onclick*="showTxModal"]');
    if (!newEntryBtn) return false;
    if (newEntryBtn.nextElementSibling === btn) return true;
    if (newEntryBtn.parentNode) {
      newEntryBtn.parentNode.insertBefore(btn, newEntryBtn.nextSibling);
      log('relocated #nav-mpesa under Finance section');
      return true;
    }
    return false;
  }

  function installMpesaRelocator() {
    let tries = 0;
    const MAX_TRIES = 40;
    const tick = () => {
      tries++;
      if (relocateMpesaButton()) return;
      if (tries >= MAX_TRIES) { warn('gave up waiting for #nav-mpesa'); return; }
      setTimeout(tick, 500);
    };
    setTimeout(tick, 300);
  }

  // ==================================================================
  // Observers + boot
  // ==================================================================

  function installLedgerObserver() {
    const view = document.getElementById(LEDGER_VIEW_ID);
    if (!view) return setTimeout(installLedgerObserver, 500);

    let scheduled = false;
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(async () => {
        scheduled = false;
        if (ledgerTableMounted()) {
          await refreshCache();

          const months = monthsWithData(TX_CACHE);
          const valid = selection.kind === 'all'
            || months.some(m => m.y === selection.y && m.m === selection.m);
          if (!valid && months.length > 0) {
            selection = { kind: 'month', y: months[0].y, m: months[0].m };
            persistSelection();
          }

          renderLedger();
        } else {
          const bar = document.getElementById(LEDGER_BAR_ID);
          const mta = document.getElementById(LEDGER_META_ID);
          if (bar) bar.remove();
          if (mta) mta.remove();
        }
      });
    };
    const obs = new MutationObserver(schedule);
    obs.observe(view, { childList: true, subtree: true });
    log('ledger observer installed');
    schedule();
  }

  window.TravisUITweaks = {
    version: '3.3.0',
    refresh: async () => {
      await refreshCache();
      if (ledgerTableMounted()) renderLedger();
      return TX_CACHE.length;
    },
    showAll: () => {
      selection = { kind: 'all' };
      persistSelection();
      if (ledgerTableMounted()) renderLedger();
    },
    selectMonth: (y, m) => {
      selection = { kind: 'month', y, m };
      persistSelection();
      if (ledgerTableMounted()) renderLedger();
    },
    clearDismissals: () => {
      [LS_DRIFT_DISMISS, LS_ROW_DISMISS, LS_BASELINE_BUMP].forEach(k => {
        try { localStorage.removeItem(k); } catch (_) {}
      });
      if (ledgerTableMounted()) renderLedger();
      log('cleared dismissals');
    },
    // Diagnostic: inspect what the detector sees for a given party name.
    // Example: await TravisUITweaks.explainParty('emilly otieno')
    explainParty: async (rawName) => {
      await refreshCache();
      const needle = normalizeParty(rawName);
      if (!needle) return { error: 'empty name' };
      const history = buildPartyHistory(TX_CACHE);
      const matches = [];
      for (const [key, h] of history.entries()) {
        if (key.startsWith(needle + '|') || key === needle) {
          matches.push({ key, ...h });
        }
      }
      if (matches.length === 0) {
        // Also scan raw tx to help debug keying.
        const raw = TX_CACHE.filter(t => {
          const p = extractParty(t);
          return p && p.name.indexOf(needle) !== -1;
        });
        return {
          query: needle,
          foundInHistory: false,
          rawMatchingTx: raw.map(t => ({
            id: t.id,
            amount: t.amount,
            debit: t.debit,
            credit: t.credit,
            desc: t.desc,
            extracted: extractParty(t)
          }))
        };
      }
      return matches.map(m => {
        const sorted = m.amounts.slice().sort((a,b)=>a-b);
        const med = medianOf(sorted);
        return {
          key: m.key,
          totalTx: m.amounts.length,
          amounts: sorted,
          median: med,
          factorOfLargest: med > 0 ? (Math.max(...sorted) / med) : null,
          wouldFlagLargest: med > 0 && Math.max(...sorted) >= Math.max(ROW_FLOOR_KSH, ROW_FACTOR * med)
        };
      });
    },
    status: async () => {
      await refreshCache();
      const months = monthsWithData(TX_CACHE);
      return {
        version: '3.3.0',
        selection,
        period: periodLabel(),
        txCount: TX_CACHE.length,
        monthCount: months.length,
        months: months.map(m => MONTHS_LONG[m.m] + ' ' + m.y + ' (' + m.count + ')'),
        mpesaInFinanceSection: (() => {
          const btn = document.getElementById('nav-mpesa');
          const newEntry = document.querySelector('#nav-sidebar button[onclick*="showTxModal"]');
          return !!(btn && newEntry && newEntry.nextElementSibling === btn);
        })(),
        barPresent: !!document.getElementById(LEDGER_BAR_ID)
      };
    },
    rerun: () => {
      if (ledgerTableMounted()) renderLedger();
      relocateMpesaButton();
    }
  };

  async function boot() {
    installLedgerObserver();
    installMpesaRelocator();

    await refreshCache();
    log('IDB loaded:', TX_CACHE.length, 'transactions');

    if (TX_CACHE.length > 0 && !localStorage.getItem(FILTER_KEY)) {
      const months = monthsWithData(TX_CACHE);
      if (months.length > 0) {
        const now = new Date();
        const hasCurrent = months.some(m => m.y === now.getFullYear() && m.m === now.getMonth());
        selection = hasCurrent
          ? { kind: 'month', y: now.getFullYear(), m: now.getMonth() }
          : { kind: 'month', y: months[0].y, m: months[0].m };
        persistSelection();
      }
    }

    document.addEventListener('click', (e) => {
      const t = e.target && e.target.closest && e.target.closest('.nav-item, .taskbar-btn');
      if (t) setTimeout(() => { if (ledgerTableMounted()) renderLedger(); }, 60);
    });

    log('booted v3.3.0');
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(boot, 0);
  } else {
    window.addEventListener('DOMContentLoaded', () => setTimeout(boot, 0));
  }
})();
