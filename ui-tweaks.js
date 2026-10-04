/**
 * ui-tweaks.js  ·  v2.0.0
 * ------------------------------------------------------------------
 * Standalone DOM + data tweaks for Travis Guardian. Zero coupling with
 * the main app. Everything is applied after the app renders by watching
 * the DOM and reading the app's own `state.transactions` global.
 *
 * Changes in v2 (from v1):
 *   • Ledger is now DATA-DRIVEN — filtered from state.transactions by
 *     numeric tx.id timestamp, not by parsing DOM date cells. The month
 *     off-by-one bug from v1 is gone permanently.
 *   • Month picker: All time / This month / only months with real data.
 *   • Row grouping by date with per-day spend totals.
 *   • Net-flow line (In / Out / Net) for the selected period.
 *   • Charges pill: sums M-Pesa Charge rows only (Safaricom fees, not
 *     principals). Breakdown panel on click.
 *   • Merchant / recipient roll-up (top 5), inferred from desc patterns.
 *   • Anomaly highlights: rows >2× period median get flagged; airtime
 *     purchases get a category-level callout.
 *
 * Untouched from v1:
 *   • Relocate #nav-mpesa from sidebar-footer to Finance section.
 *
 * Load order: include AFTER script.js / travis-mpesa.js / backup-reconcile.js
 *   <script src="ui-tweaks.js"></script>
 * ------------------------------------------------------------------
 */
(function () {
  'use strict';

  const LOG = '[UITweaks]';
  const log  = (...a) => console.log(LOG, ...a);
  const warn = (...a) => console.warn(LOG, ...a);

  // ==================================================================
  // Shared
  // ==================================================================

  const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun',
                        'Jul','Aug','Sep','Oct','Nov','Dec'];
  const MONTHS_LONG  = ['January','February','March','April','May','June',
                        'July','August','September','October','November','December'];

  const LEDGER_VIEW_ID = 'view-port';
  const LEDGER_BAR_ID  = 'tg-ledger-bar';       // top bar (picker + charges)
  const LEDGER_META_ID = 'tg-ledger-meta';      // net-flow + roll-up + anomalies
  const FILTER_KEY     = 'travis_ledger_period';
  const CHARGE_DEBIT   = 'M-Pesa Charge';

  // Selection: { kind: 'all' } or { kind: 'month', y: 2026, m: 9 }  (m is 0-based)
  let selection = { kind: 'month' };             // default set on boot
  try {
    const raw = localStorage.getItem(FILTER_KEY);
    if (raw) selection = JSON.parse(raw);
  } catch (_) {}

  function persistSelection() {
    try { localStorage.setItem(FILTER_KEY, JSON.stringify(selection)); } catch (_) {}
  }

  function readStateTx() {
    try {
      if (window.state && Array.isArray(window.state.transactions)) {
        // Copy + numeric sort descending by id (newest first)
        return window.state.transactions
          .slice()
          .sort((a, b) => Number(b.id) - Number(a.id));
      }
    } catch (_) {}
    return [];
  }

  function isChargeRow(tx) {
    return tx && tx.debit === CHARGE_DEBIT;
  }

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

  function money(n) {
    return Number(n || 0).toLocaleString('en-KE');
  }

  // Enumerate months that actually have transactions. Newest first.
  function monthsWithData(txs) {
    const seen = new Map();          // key "y-m" -> {y, m, count}
    for (const t of txs) {
      if (typeof t.id !== 'number') continue;
      const d = new Date(t.id);
      const key = d.getFullYear() + '-' + d.getMonth();
      if (!seen.has(key)) seen.set(key, { y: d.getFullYear(), m: d.getMonth(), count: 0 });
      seen.get(key).count++;
    }
    return Array.from(seen.values())
      .sort((a, b) => (b.y - a.y) || (b.m - a.m));
  }

  // ==================================================================
  // 1. LEDGER  — data-driven render + filter + grouping + meta
  // ==================================================================

  // Detect that nav('book') has rendered the ledger table.
  function ledgerTableMounted() {
    const view = document.getElementById(LEDGER_VIEW_ID);
    if (!view) return null;
    return view.querySelector('table.win-table');
  }

  function ensureLedgerChrome() {
    // Insert bar + meta containers once, above the table's scroll wrapper.
    const table = ledgerTableMounted();
    if (!table) return;
    const wrap   = table.parentElement;          // overflow-x wrapper
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

  // Rebuild the table body from state.transactions, filtered + grouped.
  function renderLedger() {
    const table = ledgerTableMounted();
    if (!table) return;

    ensureLedgerChrome();

    const tbody = table.querySelector('tbody');
    if (!tbody) return;

    const all     = readStateTx();
    const visible = all.filter(inSelection);

    // Sort ascending by id within selection so dates flow oldest -> newest
    // when grouped? No — keep DESC (newest first) which is what users expect.
    visible.sort((a, b) => Number(b.id) - Number(a.id));

    // Replace tbody contents.
    tbody.innerHTML = '';

    if (visible.length === 0) {
      const tr = document.createElement('tr');
      tr.innerHTML = '<td colspan="4" style="padding:32px;text-align:center;color:var(--win-text-3);">' +
                     'No transactions in this period.</td>';
      tbody.appendChild(tr);
      renderLedgerMeta(all, visible);
      renderChargesPill(visible);
      renderPeriodSelector(all);
      return;
    }

    // Group by calendar day.
    const groups = new Map();      // "y-m-d" -> [tx, ...]
    for (const tx of visible) {
      const d = new Date(tx.id);
      const key = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(tx);
    }

    // Compute anomaly threshold once for the visible set.
    const anomalyThreshold = computeAnomalyThreshold(visible);

    for (const [key, rows] of groups) {
      const d = new Date(rows[0].id);
      const dayTotalOut = rows.reduce((s, r) => {
        // "Out" = rows where the debit side is an expense-ish account and
        // the credit side is a liquid account. Rather than re-derive the
        // full account taxonomy, approximate: a row contributes to "spent
        // today" if its credit is a liquid wallet/cash account.
        return s + (isLiquidCredit(r.credit) ? Number(r.amount) || 0 : 0);
      }, 0);

      // Date sub-header row.
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

      for (const tx of rows) {
        tbody.appendChild(buildRow(tx, anomalyThreshold));
      }
    }

    renderLedgerMeta(all, visible);
    renderChargesPill(visible);
    renderPeriodSelector(all);
  }

  function isLiquidCredit(name) {
    const s = String(name || '').toLowerCase();
    return s === 'cash' || s === 'm-pesa' || s === 'bank / m-pesa'
        || s === 'bank account' || s === 'savings' || s === 'petty cash';
  }

  function dayLabel(d) {
    return d.toLocaleDateString('en-KE', {
      weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
    });
  }

  function computeAnomalyThreshold(rows) {
    const amounts = rows
      .map(r => Number(r.amount) || 0)
      .filter(n => n > 0)
      .sort((a, b) => a - b);
    if (amounts.length < 5) return Infinity;      // too few to flag
    const mid = Math.floor(amounts.length / 2);
    const median = amounts.length % 2
      ? amounts[mid]
      : (amounts[mid - 1] + amounts[mid]) / 2;
    if (!isFinite(median) || median <= 0) return Infinity;
    return median * 2;
  }

  function buildRow(tx, anomalyThreshold) {
    const tr = document.createElement('tr');
    const amt = Number(tx.amount) || 0;
    const isAnomaly = amt > anomalyThreshold;
    const isAirtime  = tx.debit === 'Airtime Purchase';
    const isCharge   = isChargeRow(tx);

    // Left accent for anomalies/charges/airtime — subtle, colored strip.
    let accent = '';
    if (isAnomaly) accent = 'box-shadow:inset 3px 0 0 #F59E0B;';
    else if (isAirtime) accent = 'box-shadow:inset 3px 0 0 #8B5CF6;';
    else if (isCharge)  accent = 'box-shadow:inset 3px 0 0 #DC2626;';

    // Chips column (Transaction column): show account pair + optional flags.
    const flags = [];
    if (isAnomaly) flags.push(
      '<span style="font-size:10px;font-weight:700;background:#FEF3C7;' +
      'color:#92400E;padding:1px 6px;border-radius:20px;">⚠ Unusual</span>'
    );
    if (isAirtime) flags.push(
      '<span style="font-size:10px;font-weight:700;background:#EDE9FE;' +
      'color:#5B21B6;padding:1px 6px;border-radius:20px;">Airtime</span>'
    );
    if (isCharge) flags.push(
      '<span style="font-size:10px;font-weight:700;background:#FEE2E2;' +
      'color:#991B1B;padding:1px 6px;border-radius:20px;">Charge</span>'
    );

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
        ${isDebitSideLiquid(tx) ? '+' + money(amt) : ''}
      </td>
      <td style="text-align:right;font-family:monospace;color:var(--win-red);font-weight:600;white-space:nowrap;">
        ${isCreditSideLiquid(tx) ? '-' + money(amt) : ''}
      </td>
    `;
    return tr;
  }

  // Mirror of the app's own logic: a "debit (+)" means money moved INTO a
  // liquid account (cash/wallet/bank). Credit (-) means money left a liquid.
  function isDebitSideLiquid(tx) {
    return isLiquidCredit(tx.debit);
  }
  function isCreditSideLiquid(tx) {
    return isLiquidCredit(tx.credit);
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  // -------- Period selector --------
  function renderPeriodSelector(allTxs) {
    const sel = document.getElementById('tg-period-select');
    const lbl = document.getElementById('tg-period-label');
    if (!sel || !lbl) return;

    const months = monthsWithData(allTxs);

    // Rebuild options only if the list shape changed (avoids resetting focus).
    const shape = months.map(m => m.y + '-' + m.m).join('|');
    if (sel.getAttribute('data-shape') !== shape) {
      sel.setAttribute('data-shape', shape);
      const opts = [];
      opts.push('<option value="all">All time</option>');

      const now = new Date();
      const hasCurrent = months.some(m => m.y === now.getFullYear() && m.m === now.getMonth());
      if (hasCurrent) {
        opts.push('<option value="' + now.getFullYear() + '-' + now.getMonth() + '">This month</option>');
      }
      for (const m of months) {
        const isCurrent = m.y === now.getFullYear() && m.m === now.getMonth();
        if (isCurrent) continue;                 // already listed above
        opts.push('<option value="' + m.y + '-' + m.m + '">' +
                  MONTHS_LONG[m.m] + ' ' + m.y +
                  ' <span>' + m.count + '</span></option>');
      }
      sel.innerHTML = opts.join('');
    }

    // Sync current value.
    const val = selection.kind === 'all' ? 'all' : selection.y + '-' + selection.m;
    sel.value = val;

    // Label reflects whatever we're actually showing.
    lbl.textContent = periodLabel();

    // Wire change handler once.
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
        // Re-render without a full page nav.
        const table = ledgerTableMounted();
        if (table) renderLedger();
      });
    }
  }

  // -------- Charges pill --------
  function renderChargesPill(visible) {
    const pill  = document.getElementById('tg-charges-pill');
    const total = document.getElementById('tg-charges-total');
    const count = document.getElementById('tg-charges-count');
    if (!pill || !total || !count) return;

    const chargeRows = visible.filter(isChargeRow);
    if (chargeRows.length === 0) {
      pill.style.display = 'none';
      return;
    }
    const sum = chargeRows.reduce((s, r) => s + (Number(r.amount) || 0), 0);
    total.textContent = 'KSh ' + money(sum);
    count.textContent = '· ' + chargeRows.length + ' charge' + (chargeRows.length !== 1 ? 's' : '');
    pill.style.display = 'inline-flex';

    if (!pill._tgWired) {
      pill._tgWired = true;
      pill.addEventListener('click', () => showChargesBreakdown(chargeRows));
    }
    pill._chargeRows = chargeRows;      // stash for breakdown
  }

  function showChargesBreakdown(chargeRows) {
    const kinds = {
      send: 0, withdraw: 0, paybill: 0, buygoods: 0, fuliza: 0, other: 0
    };
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

    // Build a tiny floating panel anchored near the pill.
    const existing = document.getElementById('tg-charges-panel');
    if (existing) existing.remove();

    const panel = document.createElement('div');
    panel.id = 'tg-charges-panel';
    panel.style.cssText = [
      'position:fixed','z-index:9998',
      'background:white','border:1px solid var(--win-border)',
      'border-radius:10px','box-shadow:0 12px 32px rgba(0,0,0,0.15)',
      'padding:14px 16px','font-size:12px','min-width:220px',
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

    // Position near the pill.
    const pill = document.getElementById('tg-charges-pill');
    if (pill) {
      const r = pill.getBoundingClientRect();
      panel.style.top  = (r.bottom + 8) + 'px';
      panel.style.left = Math.max(8, Math.min(window.innerWidth - 240, r.right - 220)) + 'px';
    }

    // Dismiss on outside click / Escape.
    const closer = (e) => {
      if (!panel.contains(e.target) && e.target.id !== 'tg-charges-pill') {
        panel.remove();
        document.removeEventListener('mousedown', closer);
        document.removeEventListener('keydown', esc);
      }
    };
    const esc = (e) => { if (e.key === 'Escape') { panel.remove(); document.removeEventListener('mousedown', closer); document.removeEventListener('keydown', esc); } };
    setTimeout(() => {
      document.addEventListener('mousedown', closer);
      document.addEventListener('keydown', esc);
    }, 0);
  }

  // -------- Meta line: net flow + merchant roll-up + anomalies --------
  function renderLedgerMeta(allTxs, visible) {
    const meta = document.getElementById(LEDGER_META_ID);
    if (!meta) return;

    const inflow  = visible.reduce((s, r) => s + (isDebitSideLiquid(r)  ? Number(r.amount) || 0 : 0), 0);
    const outflow = visible.reduce((s, r) => s + (isCreditSideLiquid(r) ? Number(r.amount) || 0 : 0), 0);
    const net     = inflow - outflow;

    // Merchant roll-up
    const merchants = new Map();
    for (const r of visible) {
      const m = extractMerchant(r);
      if (!m) continue;
      const cur = merchants.get(m.name) || { name: m.name, count: 0, total: 0, dir: m.dir };
      cur.count++;
      cur.total += Number(r.amount) || 0;
      merchants.set(m.name, cur);
    }
    const topMerchants = Array.from(merchants.values())
      .sort((a, b) => b.total - a.total)
      .slice(0, 5);

    // Airtime anomalies
    const airtime = visible.filter(r => r.debit === 'Airtime Purchase');
    const airtimeTotal = airtime.reduce((s, r) => s + (Number(r.amount) || 0), 0);

    // Unusual amounts
    const threshold = computeAnomalyThreshold(visible);
    const unusual = visible.filter(r => (Number(r.amount) || 0) > threshold);

    const card = (title, body, tone) => `
      <div style="background:white;border:1px solid var(--win-border);border-radius:10px;
                  padding:12px 14px;flex:1;min-width:200px;${tone ? 'border-color:' + tone + ';' : ''}">
        <div style="font-size:10px;font-weight:700;color:var(--win-text-3);
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;">${title}</div>
        <div style="font-size:12px;line-height:1.6;">${body}</div>
      </div>
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

    const merchantBody = topMerchants.length === 0
      ? '<span style="color:var(--win-text-3);">No recipient patterns found in this period.</span>'
      : topMerchants.map(m =>
          `<div style="display:flex;justify-content:space-between;padding:3px 0;">
             <span><span style="color:var(--win-text-3);">${m.dir === 'in' ? '↓' : '↑'}</span>
                   ${escapeHtml(m.name)} <span style="color:var(--win-text-3);">×${m.count}</span></span>
             <span style="font-family:monospace;font-weight:600;">KSh ${money(m.total)}</span>
           </div>`
        ).join('');

    const anomalyBody = [];
    if (unusual.length > 0) {
      anomalyBody.push(
        `<div style="padding:3px 0;">
           <span style="color:#92400E;font-weight:600;">⚠ ${unusual.length} unusual amount${unusual.length !== 1 ? 's' : ''}</span>
           <span style="color:var(--win-text-3);"> · largest KSh ${money(Math.max(...unusual.map(r => Number(r.amount) || 0)))}</span>
         </div>`
      );
    }
    if (airtime.length > 0) {
      anomalyBody.push(
        `<div style="padding:3px 0;">
           <span style="color:#5B21B6;font-weight:600;">📞 ${airtime.length} airtime purchase${airtime.length !== 1 ? 's' : ''}</span>
           <span style="color:var(--win-text-3);"> · KSh ${money(airtimeTotal)}</span>
         </div>`
      );
    }
    if (anomalyBody.length === 0) {
      anomalyBody.push('<span style="color:var(--win-text-3);">No anomalies flagged.</span>');
    }

    meta.innerHTML = `
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
        ${card('Net flow · ' + periodLabel(), netBody)}
        ${card('Top recipients', merchantBody)}
        ${card('Anomalies', anomalyBody.join(''))}
      </div>
    `;
  }

  // Pull a recipient/merchant name out of the tx description when possible.
  function extractMerchant(tx) {
    const d = String(tx.desc || '');
    // Direction: if money left a liquid account, it's an outgoing to recipient.
    const dir = isCreditSideLiquid(tx) ? 'out' : 'in';

    // Ordered patterns — most specific first.
    const patterns = [
      /sent\s+(?:ksh|kes)?\s*[\d,.]*\s*to\s+([^\[\n]+)/i,
      /paybill\s+(?:ksh|kes)?\s*[\d,.]*\s*to\s+([^\[\n]+)/i,
      /buy goods\s+(?:ksh|kes)?\s*[\d,.]*\s*to\s+([^\[\n]+)/i,
      /withdrawal\s+(?:ksh|kes)?\s*[\d,.]*\s*from\s+([^\[\n]+)/i,
      /deposit\s+(?:ksh|kes)?\s*[\d,.]*\s*into\s+([^\[\n]+)/i,
      /received\s+(?:ksh|kes)?\s*[\d,.]*\s*from\s+([^\[\n]+)/i,
      /airtime\s+(?:ksh|kes)?\s*[\d,.]*\s*to\s+([^\[\n]+)/i
    ];
    for (const rx of patrician(rx => rx).length ? patterns : patterns) {
      const m = d.match(rx);
      if (m && m[1]) {
        const name = m[1].replace(/\s*\[REF:.*$/, '').trim();
        if (name.length >= 2) return { name, dir };
      }
    }
    return null;
  }
  // (typo-proof helper — no-op, keeps the patterns loop clean)
  function patrician(_) { return []; }

  // ==================================================================
  // 2. M-Pesa button relocation (unchanged from v1)
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
  // 3. Ledger observer  — re-render whenever nav('book') rebuilds table
  // ==================================================================

  function installLedgerObserver() {
    const view = document.getElementById(LEDGER_VIEW_ID);
    if (!view) return setTimeout(installLedgerObserver, 500);

    let scheduled = false;
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        if (ledgerTableMounted()) {
          // Default selection: current month, but only if it has data.
          if (!localStorage.getItem(FILTER_KEY)) {
            const months = monthsWithData(readStateTx());
            const now = new Date();
            const hasCurrent = months.some(m => m.y === now.getFullYear() && m.m === now.getMonth());
            selection = hasCurrent
              ? { kind: 'month', y: now.getFullYear(), m: now.getMonth() }
              : (months[0] ? { kind: 'month', y: months[0].y, m: months[0].m } : { kind: 'all' });
            persistSelection();
          }
          renderLedger();
        } else {
          // Not on ledger view — clean up our injected chrome if the
          // table is gone (so it doesn't leak into other views).
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

  // ==================================================================
  // 4. Public debug handle + boot
  // ==================================================================

  window.TravisUITweaks = {
    version: '2.0.0',
    showAll: () => { selection = { kind: 'all' }; persistSelection();
      const t = ledgerTableMounted(); if (t) renderLedger(); },
    selectMonth: (y, m) => { selection = { kind: 'month', y, m }; persistSelection();
      const t = ledgerTableMounted(); if (t) renderLedger(); },
    status: () => ({
      selection,
      period: periodLabel(),
      mpesaInFinanceSection: (() => {
        const btn = document.getElementById('nav-mpesa');
        const newEntry = document.querySelector('#nav-sidebar button[onclick*="showTxModal"]');
        return !!(btn && newEntry && newEntry.nextElementSibling === btn);
      })(),
      barPresent: !!document.getElementById(LEDGER_BAR_ID)
    }),
    rerun: () => { if (ledgerTableMounted()) renderLedger(); relocateMpesaButton(); }
  };

  function boot() {
    installLedgerObserver();
    installMpesaRelocator();
    document.addEventListener('click', (e) => {
      const t = e.target && e.target.closest && e.target.closest('.nav-item, .taskbar-btn');
      if (t) setTimeout(() => { if (ledgerTableMounted()) renderLedger(); }, 60);
    });
    log('booted v2.0.0');
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(boot, 0);
  } else {
    window.addEventListener('DOMContentLoaded', () => setTimeout(boot, 0));
  }
})();
