/**
 * ui-tweaks.js  ·  v3.1.0
 * ------------------------------------------------------------------
 * Standalone DOM + data layer for Travis Guardian's Ledger view.
 *
 * v3.1.0 — Category-drift detection + explainer panels
 *   • Two anomaly detectors:
 *       - Row-level  : single tx >2.5× same-recipient median (90d)
 *       - Category   : current period total >1.8× trailing 3-month
 *                      median for that account name (expenses only)
 *       - Income     : income categories flag on DROPS (>40% below
 *                      trailing median), never on rises.
 *   • Anomalies card restructured into two sub-sections, both
 *     clickable.
 *   • Glasmorphic explainer panel quotes exact numbers + lists the
 *     contributing transactions. Two buttons:
 *       "This is normal"  -> folds current month into baseline
 *       "Dismiss"         -> hides for this category+period only
 *   • LocalStorage dismissal stores:
 *       dismiss:drift:<cat>:<YYYY-MM>
 *       dismiss:row:<txId>
 *       dismiss:baseline-bump:<cat>:<YYYY-MM>
 *   • "New" chip (blue) for first-seen recipient/category combos.
 *   • Top recipients: min 3 occurrences, split incoming/outgoing,
 *     sorted by count then total.
 *   • Charges pill stays SEPARATE from drift panel.
 *
 * v3.0.0 features retained:
 *   • IDB-driven data (no window.state dependency)
 *   • Month picker: All time / This month / months with data
 *   • Row grouping by date + per-day spend
 *   • Net-flow card
 *   • #nav-mpesa relocation
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

  // Anomaly tuning
  const ROW_FACTOR       = 2.5;    // row flagged if > 2.5× same-recipient median
  const ROW_FLOOR_KSH    = 500;    // ignore row flags below this absolute amount
  const DRIFT_FACTOR     = 1.8;    // category flagged if > 1.8× trailing median
  const DRIFT_FLOOR_KSH  = 500;    // ignore drift below this absolute increase
  const INCOME_DROP_FACT  = 0.6;   // income flagged if < 60% of trailing median
  const MIN_CATEGORY_TX  = 4;      // category needs ≥4 tx in trailing 3mo to drift
  const MIN_RECIPIENT_TX = 3;      // top-recipient list requires ≥3 occurrences

  // Account names treated as SPENDING categories for drift detection.
  // (Not recipients, not transfer legs, not income.)
  const EXPENSE_CATEGORIES = new Set([
    'Airtime Purchase','Bills','Utilities','Rent','School','Food & Groceries',
    'Transport','Medical','Entertainment','Payroll','Marketing',
    'Cost of Goods Sold','Tax','Insurance','Other Expenses',
    'Send Money','Withdrawals','Deposits'
  ]);

  // Account names treated as INCOME categories.
  const INCOME_CATEGORIES = new Set([
    'Salary','Side Hustle','Allowance','Dividends','Other Income',
    'Sales Revenue','Service Revenue'
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

  const LS_DRIFT_DISMISS   = 'tg_ui_dismiss_drift';       // { "Airtime:2026-10": ts }
  const LS_ROW_DISMISS     = 'tg_ui_dismiss_row';         // { "<txId>": ts }
  const LS_BASELINE_BUMP   = 'tg_ui_baseline_bump';       // { "Airtime:2026-10": ts }
  const LS_NEW_SEEN        = 'tg_ui_new_seen';            // { "recipient|account": ts }

  function loadMap(key) {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : {}; }
    catch (_) { return {}; }
  }
  function saveMap(key, map) {
    try { localStorage.setItem(key, JSON.stringify(map)); } catch (_) {}
  }
  function isDismissed(key, mapKey, id) {
    const m = loadMap(mapKey);
    return !!m[id + ':' + key] || !!m[key];
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
  // IDB reader
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

  async function refreshCache() {
    const rows = await readAllTx();
    rows.sort((a, b) => Number(b.id) - Number(a.id));
    TX_CACHE = rows;
    return rows;
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
  // Anomaly: row-level
  // ==================================================================

  // Cache of { "recipient|debit": [amounts...] } built per render from ALL tx,
  // not just visible, so trailing-90-day medians are honest.
  function buildRecipientHistory(allTx) {
    const map = new Map();
    for (const t of allTx) {
      if (typeof t.id !== 'number') continue;
      const key = recipientKey(t);
      if (!key) continue;
      const cur = map.get(key) || { amounts: [], dates: [] };
      cur.amounts.push(Number(t.amount) || 0);
      cur.dates.push(t.id);
      map.set(key, cur);
    }
    return map;
  }

  function recipientKey(tx) {
    // Prefer explicit recipient parsed from desc; fall back to debit account.
    const rec = extractMerchant(tx);
    if (rec && rec.name) return rec.name.toLowerCase() + '|' + String(tx.debit || '');
    return String(tx.debit || '');
  }

  // Returns { flagged: bool, median, factor } for a single tx.
  function rowAnomaly(tx, history) {
    const amt = Number(tx.amount) || 0;
    if (amt < ROW_FLOOR_KSH) return { flagged: false };
    if (isChargeRow(tx)) return { flagged: false };

    const key = recipientKey(tx);
    const h = history.get(key);
    if (!h || h.amounts.length < MIN_CATEGORY_TX) return { flagged: false };

    // 90-day trailing window ending at this tx's date.
    const t0 = tx.id;
    const ninety = 90 * 24 * 60 * 60 * 1000;
    const past = [];
    for (let i = 0; i < h.amounts.length; i++) {
      if (h.dates[i] < t0 && t0 - h.dates[i] <= ninety) past.push(h.amounts[i]);
    }
    if (past.length < 3) return { flagged: false };

    const med = medianOf(past);
    if (med <= 0) return { flagged: false };
    const factor = amt / med;
    if (factor >= ROW_FACTOR) return { flagged: true, median: med, factor };
    return { flagged: false };
  }

  // ==================================================================
  // Anomaly: category drift
  // ==================================================================

  // Build the monthly total per category across ALL tx.
  function monthlyCategoryTotals(allTx) {
    // map: "y-m" -> { cat -> total }
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

  // For a category, given a target month (y,m), return the trailing 3 months'
  // totals (chronological order, length up to 3) that are non-zero.
  function trailingMonths(buckets, y, m, n) {
    const out = [];
    for (let i = n; i >= 1; i--) {
      let yy = y, mm = m - i;
      while (mm < 0) { mm += 12; yy--; }
      const key = yy + '-' + mm;
      out.push({ y: yy, m: mm, key, total: (buckets.get(key) || {})[categoryOf(null)] || 0 });
    }
    // NOTE: the category-total is filled in by caller since trailingMonths
    // doesn't know the category. We return keys only and caller resolves.
    return out.map(o => o.key);
  }

  function categoryOf(tx) {
    if (!tx) return null;
    const d = String(tx.debit || '');
    // For expenses the debit is the account that received value — could be
    // an expense account (Airtime Purchase, Rent, etc). If debit is a
    // liquid account, this tx is an inflow and its income category is the
    // credit side.
    if (EXPENSE_CATEGORIES.has(d)) return d;
    if (isLiquidCredit(d)) {
      const c = String(tx.credit || '');
      if (INCOME_CATEGORIES.has(c)) return c;
      if (EXPENSE_CATEGORIES.has(c)) return c;   // transfers recorded oddly
    }
    if (INCOME_CATEGORIES.has(d)) return d;
    if (EXPENSE_CATEGORIES.has(String(tx.credit || ''))) return String(tx.credit);
    return null;
  }

  function categoryType(cat) {
    return INCOME_CATEGORIES.has(cat) ? 'income' : 'expense';
  }

  // Detect drift for the current selection. Only runs when selection is a
  // specific month (not 'all').
  function detectDrift(allTx) {
    if (selection.kind !== 'month') return [];
    const buckets = monthlyCategoryTotals(allTx);
    const y = selection.y, m = selection.m;

    // Current month's totals.
    const curKey = y + '-' + m;
    const cur = buckets.get(curKey) || {};

    // For each category in current month, look at the 3 preceding months.
    const results = [];
    for (const cat of Object.keys(cur)) {
      if (cat === CHARGE_DEBIT) continue;                 // charges excluded
      if (isRowDismissed('drift:' + cat + ':' + curKey)) continue;
      if (loadMap(LS_DRIFT_DISMISS)[cat + ':' + curKey]) continue;

      const type = categoryType(cat);
      const currentTotal = cur[cat] || 0;

      // Trailing 3 months, exclusive of current.
      const trailing = [];
      for (let i = 1; i <= 3; i++) {
        let yy = y, mm = m - i;
        while (mm < 0) { mm += 12; yy--; }
        const key = yy + '-' + mm;
        const t = (buckets.get(key) || {})[cat] || 0;
        if (t > 0) trailing.push(t);
      }
      if (trailing.length < 2) continue;                 // need at least 2 months of history

      // Optional "baseline bump": if user marked the previous month as
      // normal for this category, include the current total for the
      // previous month into the baseline too.
      const bumpKey = cat + ':' + curKey;
      if (loadMap(LS_BASELINE_BUMP)[bumpKey]) {
        trailing.push(currentTotal);
      }

      const base = medianOf(trailing);
      if (base <= 0) continue;

      // Count tx for this category in trailing window; require MIN_CATEGORY_TX.
      let txCount = 0;
      for (const t of allTx) {
        if (typeof t.id !== 'number') continue;
        if (categoryOf(t) !== cat) continue;
        const d = new Date(t.id);
        const monthsAgo = (y - d.getFullYear()) * 12 + (m - d.getMonth());
        if (monthsAgo >= 0 && monthsAgo <= 3) txCount++;
      }
      if (txCount < MIN_CATEGORY_TX) continue;

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
        // Income: flag on DROPS.
        const factor = currentTotal / base;
        if (factor <= INCOME_DROP_FACT && (base - currentTotal) >= DRIFT_FLOOR_KSH) {
          results.push({
            kind: 'drift-income', cat, type, currentTotal, base,
            trailing, factor, diff: currentTotal - base, key: cat + ':' + curKey
          });
        }
      }
    }

    // Sort expenses by impact descending, incomes by severity descending.
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

    // Build history + anomaly maps once per render.
    const recipientHistory = buildRecipientHistory(all);
    const driftFindings = detectDrift(all);

    tbody.innerHTML = '';

    if (visible.length === 0) {
      const tr = document.createElement('tr');
      tr.innerHTML = '<td colspan="4" style="padding:32px;text-align:center;color:var(--win-text-3);">' +
                     'No transactions in this period.</td>';
      tbody.appendChild(tr);
      renderLedgerMeta(visible, driftFindings);
      renderChargesPill(visible);
      renderPeriodSelector(all);
      return;
    }

    // Group by calendar day.
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
        '<td colspan="4" style="position:sticky;top:0;z-index:1;' +
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

      for (const tx of rows) tbody.appendChild(buildRow(tx, recipientHistory, driftFindings));
    }

    renderLedgerMeta(visible, driftFindings);
    renderChargesPill(visible);
    renderPeriodSelector(all);
  }

  function buildRow(tx, history, driftFindings) {
    const tr = document.createElement('tr');
    const amt = Number(tx.amount) || 0;
    const isAirtime  = tx.debit === 'Airtime Purchase';
    const isCharge   = isChargeRow(tx);

    // Determine flags for this row.
    const row = isCharge ? { flagged: false } : rowAnomaly(tx, history);
    const rowFlagged = row.flagged && !isRowDismissed(tx.id);

    // "New" detection: first time we've seen this (recipient|category) combo.
    const comboKey = (extractMerchant(tx)?.name || tx.debit || '') + '|' + (tx.debit || '');
    const isNew = !hasSeenCombo(comboKey) && !isCharge && !isAirtime;
    if (isNew) markSeenCombo(comboKey);

    // Is this tx part of a drift-flagged category in the current period?
    const cat = categoryOf(tx);
    const driftHit = driftFindings.find(d => d.cat === cat);

    let accent = '';
    if (rowFlagged) accent = 'box-shadow:inset 3px 0 0 #F59E0B;';
    else if (driftHit) accent = 'box-shadow:inset 3px 0 0 #FB923C;';
    else if (isAirtime) accent = 'box-shadow:inset 3px 0 0 #8B5CF6;';
    else if (isCharge)  accent = 'box-shadow:inset 3px 0 0 #DC2626;';

    const flags = [];
    if (rowFlagged) {
      flags.push('<span data-tg-anom-row="1" style="font-size:10px;font-weight:700;background:#FEF3C7;color:#92400E;padding:1px 6px;border-radius:20px;cursor:pointer;">⚠ Unusual · click</span>');
    }
    if (isNew) {
      flags.push('<span style="font-size:10px;font-weight:700;background:#DBEAFE;color:#1E40AF;padding:1px 6px;border-radius:20px;">New</span>');
    }
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
    `;

    if (rowFlagged) {
      tr.querySelector('[data-tg-anom-row]').addEventListener('click', (e) => {
        e.stopPropagation();
        showRowExplainer(tx, row);
      });
    }
    return tr;
  }

  // ==================================================================
  // Explainer panels (glasmorphic)
  // ==================================================================

  function showRowExplainer(tx, info) {
    const amt = Number(tx.amount) || 0;
    const rec = extractMerchant(tx);
    const label = rec?.name || tx.debit || 'this recipient';
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
          Over the past <strong>90 days</strong>, your typical transaction
          with <strong>${escapeHtml(label)}</strong> was about
          <strong>KSh ${money(Math.round(median))}</strong>.
          <br>
          This transaction is <strong>${factor}× larger</strong> than that
          median — a jump of <strong>KSh ${money(Math.round(amt - median))}</strong>.
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
            markSeenCombo((extractMerchant(tx)?.name || tx.debit || '') + '|' + (tx.debit || ''));
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

    // Which transactions contributed to this category in the current period?
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
            // Fold the current month into the baseline for future renders.
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

  // -------- Shared explainer shell --------

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

    // Wire actions
    (actions || []).forEach((a, i) => {
      const btn = card.querySelector(`[data-tg-action="${i}"]`);
      if (btn) btn.addEventListener('click', a.onClick);
    });
    card.querySelector('[data-tg-close="1"]').addEventListener('click', closeExplainer);

    // Outside click to close
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
  // Meta: net flow + top recipients + anomalies (two sections)
  // ==================================================================

  function renderLedgerMeta(visible, driftFindings) {
    const meta = document.getElementById(LEDGER_META_ID);
    if (!meta) return;

    const inflow  = visible.reduce((s, r) => s + (isLiquidCredit(r.debit)  ? Number(r.amount) || 0 : 0), 0);
    const outflow = visible.reduce((s, r) => s + (isLiquidCredit(r.credit) ? Number(r.amount) || 0 : 0), 0);
    const net     = inflow - outflow;

    // -------- Top recipients (split in/out, min 3 occurrences) --------
    const outMap = new Map();
    const inMap  = new Map();
    for (const r of visible) {
      const m = extractMerchant(r);
      if (!m || !m.name) continue;
      const target = m.dir === 'in' ? inMap : outMap;
      const cur = target.get(m.name) || { name: m.name, count: 0, total: 0 };
      cur.count++;
      cur.total += Number(r.amount) || 0;
      target.set(m.name, cur);
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

    // -------- Anomalies: two sub-sections --------
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
      const row = rowAnomaly(t, buildRecipientHistory(TX_CACHE));
      return row.flagged;
    });

    const rowBlocks = rowAnomalies.slice(0, 5).map(t => {
      const amt = Number(t.amount) || 0;
      const rec = extractMerchant(t);
      const label = rec?.name || t.debit || 'transaction';
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

    // -------- Net-flow card --------
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

    // Wire click handlers for drift findings.
    meta.querySelectorAll('[data-tg-drift]').forEach(el => {
      el.addEventListener('click', () => {
        const key = el.getAttribute('data-tg-drift');
        const finding = driftFindings.find(d => d.key === key);
        if (finding) showDriftExplainer(finding);
      });
    });

    // Wire click handlers for row anomalies.
    meta.querySelectorAll('[data-tg-rowanom]').forEach(el => {
      el.addEventListener('click', () => {
        const id = Number(el.getAttribute('data-tg-rowanom'));
        const tx = TX_CACHE.find(t => Number(t.id) === id);
        if (!tx) return;
        const info = rowAnomaly(tx, buildRecipientHistory(TX_CACHE));
        if (info.flagged) showRowExplainer(tx, info);
      });
    });
  }

  // ==================================================================
  // Merchant extraction
  // ==================================================================

  function extractMerchant(tx) {
    const d = String(tx.desc || '');
    const dir = isLiquidCredit(tx.credit) ? 'out' : 'in';

    const patterns = [
      /sent\s+(?:ksh|kes)?\s*[\d,.]*\s*to\s+([^\[\n]+)/i,
      /paybill\s+(?:ksh|kes)?\s*[\d,.]*\s*to\s+([^\[\n]+)/i,
      /buy goods\s+(?:ksh|kes)?\s*[\d,.]*\s*to\s+([^\[\n]+)/i,
      /withdrawal\s+(?:ksh|kes)?\s*[\d,.]*\s*from\s+([^\[\n]+)/i,
      /deposit\s+(?:ksh|kes)?\s*[\d,.]*\s*into\s+([^\[\n]+)/i,
      /received\s+(?:ksh|kes)?\s*[\d,.]*\s*from\s+([^\[\n]+)/i,
      /airtime\s+(?:ksh|kes)?\s*[\d,.]*\s*to\s+([^\[\n]+)/i
    ];
    for (const rx of patterns) {
      const m = d.match(rx);
      if (m && m[1]) {
        const name = m[1].replace(/\s*\[REF:.*$/, '').trim();
        if (name.length >= 2) return { name, dir };
      }
    }
    return null;
  }

  // ==================================================================
  // M-Pesa button relocation (unchanged)
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
    version: '3.1.0',
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
    status: async () => {
      await refreshCache();
      const months = monthsWithData(TX_CACHE);
      return {
        version: '3.1.0',
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

    log('booted v3.1.0');
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(boot, 0);
  } else {
    window.addEventListener('DOMContentLoaded', () => setTimeout(boot, 0));
  }
})();
