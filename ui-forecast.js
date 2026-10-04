/**
 * ui-forecast.js  ·  v1.0.0
 * ------------------------------------------------------------------
 * Travis Guardian — Money Map (Pass 1 of the forecast suite).
 *
 * This file adds a standalone panel to the Finance section of the
 * sidebar. It reads transactions straight from IndexedDB, describes
 * how money flows through the user's life, and renders that as plain
 * language. No forecast yet — that's Pass 2, and needs more data than
 * most users will have on day one.
 *
 * What it shows:
 *   • Where money comes in  — total + breakdown by source, and a
 *     "concentration" callout if too much of it depends on one place.
 *   • Where money goes out — total + breakdown by category.
 *   • Liquidity             — how much of the user's money is liquid
 *     (Cash / M-Pesa / Bank) vs held in other forms.
 *   • Velocity              — how often money comes in and goes out.
 *   • Rhythm                — which days of the month money usually
 *     arrives and leaves, so the user recognises their own pattern.
 *
 * Zero coupling with the main app: reads IDB independently, injects
 * its own UI, never touches window.state or any other global.
 *
 * Load order: include AFTER ui-tweaks.js
 *   <script src="ui-forecast.js"></script>
 * ------------------------------------------------------------------
 */
(function () {
  'use strict';

  const LOG = '[UIForecast]';
  const log  = (...a) => console.log(LOG, ...a);
  const warn = (...a) => console.warn(LOG, ...a);

  // ==================================================================
  // Config
  // ==================================================================

  const DB_NAME  = 'TravisGuardian_v1.0';
  const DB_VER   = 1;
  const STORE    = 'tx';

  const MODAL_ID   = 'tg-money-map-modal';
  const NAV_ID     = 'nav-money-map';
  const FILTER_KEY = 'travis_ledger_period';

  const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun',
                        'Jul','Aug','Sep','Oct','Nov','Dec'];
  const MONTHS_LONG  = ['January','February','March','April','May','June',
                        'July','August','September','October','November','December'];
  const WEEKDAYS     = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  const MEDIAN_FLOOR = 1;                    // avoid div-by-zero
  const MIN_TX_FOR_SIGNAL = 5;               // below this, warn about thin data

  // Known liquid accounts (mirrors the app's own list)
  const LIQUID_ACCOUNTS = new Set([
    'cash','m-pesa','bank / m-pesa','bank account','savings','petty cash'
  ]);

  // What we treat as "income" categories when the source is not a person
  const INCOME_CATEGORIES = new Set([
    'Salary','Side Hustle','Allowance','Dividends','Other Income',
    'Sales Revenue','Service Revenue','refund','reversal'
  ].map(s => s.toLowerCase()));

  // Known expense accounts — used to decide who's a category vs a person
  const EXPENSE_CATEGORIES = new Set([
    'Airtime Purchase','Bills','Utilities','Rent','School','Food & Groceries',
    'Transport','Medical','Entertainment','Payroll','Marketing',
    'Cost of Goods Sold','Tax','Insurance','Other Expenses',
    'Send Money','Withdrawals','Deposits'
  ].map(s => s.toLowerCase()));

  // ==================================================================
  // IDB reader (independent connection)
  // ==================================================================

  function readAllTx() {
    return new Promise((resolve) => {
      const req = indexedDB.open(DB_NAME, DB_VER);
      req.onsuccess = () => {
        const db = req.result;
        try {
          if (!db.objectStoreNames.contains(STORE)) {
            db.close(); return resolve([]);
          }
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

  // ==================================================================
  // Helpers
  // ==================================================================

  const isLiquid = (name) => LIQUID_ACCOUNTS.has(String(name || '').toLowerCase().trim());
  const isChargeRow = (tx) => tx && String(tx.debit || '').toLowerCase() === 'm-pesa charge';
  const isCategoryName = (name) => {
    const s = String(name || '').toLowerCase().trim();
    return EXPENSE_CATEGORIES.has(s) || INCOME_CATEGORIES.has(s);
  };

  function money(n) {
    return Number(n || 0).toLocaleString('en-KE');
  }

  function medianOf(arr) {
    if (!arr || arr.length === 0) return 0;
    const a = arr.slice().sort((x, y) => x - y);
    const mid = Math.floor(a.length / 2);
    return a.length % 2 ? a[mid] : (a[mid - 1] + a[mid]) / 2;
  }

  function meanOf(arr) {
    if (!arr || arr.length === 0) return 0;
    return arr.reduce((s, v) => s + v, 0) / arr.length;
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }

  // Direction from double-entry, mirroring ui-tweaks.js.
  function directionOf(tx) {
    const debit  = String(tx.debit  || '').trim();
    const credit = String(tx.credit || '').trim();
    const dLiquid = isLiquid(debit);
    const cLiquid = isLiquid(credit);

    if (cLiquid && !dLiquid) return 'out';
    if (dLiquid && !cLiquid) return 'in';
    if (dLiquid && cLiquid) return 'transfer';
    // Neither liquid: fall back to whether the credit side looks like a
    // known income account.
    if (INCOME_CATEGORIES.has(credit.toLowerCase())) return 'in';
    return 'out';
  }

  // Who or what this transaction is against.
  // Same rules as ui-tweaks.js: prefer the non-liquid account when it's a
  // person, else parse the description.
  function counterpartyOf(tx) {
    const debit  = String(tx.debit  || '').trim();
    const credit = String(tx.credit || '').trim();

    const dLiquid = isLiquid(debit);
    const cLiquid = isLiquid(credit);

    if (cLiquid && !dLiquid) return prettyName(debit);
    if (dLiquid && !cLiquid) return prettyName(credit);
    if (dLiquid && cLiquid) return 'internal transfer';

    // Neither liquid — is one of them a known category?
    if (isCategoryName(debit)) return prettyName(credit);
    if (isCategoryName(credit)) return prettyName(debit);
    return prettyName(debit || credit);
  }

  function prettyName(s) {
    const raw = String(s || '').trim();
    if (!raw) return 'Unknown';
    // If it's a known category, keep the given casing.
    if (isCategoryName(raw)) return raw;
    // Otherwise title-case it for display, but preserve single all-caps acronyms.
    return raw
      .split(/\s+/)
      .map(w => {
        if (/^[A-Z]{2,}$/.test(w)) return w;
        return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
      })
      .join(' ');
  }

  // Buckets for inflows: sources.
  function inflowSourceOf(tx) {
    const debit  = String(tx.debit  || '').trim();
    const credit = String(tx.credit || '').trim();
    // Direction is 'in': the credit side is the counterparty.
    const source = credit;
    if (INCOME_CATEGORIES.has(source.toLowerCase())) return prettyName(source);
    return 'Received from ' + prettyName(source);
  }

  // Buckets for outflows: categories.
  function outflowCategoryOf(tx) {
    const debit = String(tx.debit || '').trim();
    // Direction is 'out': the debit side is the account that received value.
    if (EXPENSE_CATEGORIES.has(debit.toLowerCase())) return prettyName(debit);
    if (isChargeRow(tx)) return 'M-Pesa Charge';
    return prettyName(debit) || 'Other';
  }

  // ==================================================================
  // Core analysis
  // ==================================================================

  function analyze(txs) {
    // Sort ascending by id (oldest first).
    const sorted = txs.slice().sort((a, b) => Number(a.id) - Number(b.id));

    const inflows = [];
    const outflows = [];
    const transfers = [];

    for (const t of sorted) {
      const d = directionOf(t);
      if (d === 'in') inflows.push(t);
      else if (d === 'out') outflows.push(t);
      else transfers.push(t);
    }

    const inflowTotal  = inflows.reduce((s, t) => s + (Number(t.amount) || 0), 0);
    const outflowTotal = outflows.reduce((s, t) => s + (Number(t.amount) || 0), 0);

    // --- Inflow sources ---
    const sourceMap = new Map();
    for (const t of inflows) {
      const src = inflowSourceOf(t);
      const cur = sourceMap.get(src) || { name: src, count: 0, total: 0 };
      cur.count++;
      cur.total += Number(t.amount) || 0;
      sourceMap.set(src, cur);
    }
    const sources = Array.from(sourceMap.values())
      .sort((a, b) => b.total - a.total);

    const topSource = sources[0] || null;
    const topSourceShare = topSource && inflowTotal > 0
      ? topSource.total / inflowTotal : 0;

    // --- Outflow categories ---
    const catMap = new Map();
    for (const t of outflows) {
      const cat = outflowCategoryOf(t);
      const cur = catMap.get(cat) || { name: cat, count: 0, total: 0 };
      cur.count++;
      cur.total += Number(t.amount) || 0;
      catMap.set(cat, cur);
    }
    const categories = Array.from(catMap.values())
      .sort((a, b) => b.total - a.total);

    // --- Liquidity ---
    // Sum all liquid accounts across every transaction, ignoring transfers
    // (since transfers net to zero on the liquid side anyway).
    let liquidBalance = 0;
    for (const t of sorted) {
      const amt = Number(t.amount) || 0;
      // Credit reduces a liquid account; debit increases it.
      if (isLiquid(t.debit))  liquidBalance += amt;
      if (isLiquid(t.credit)) liquidBalance -= amt;
    }

    // --- Velocity ---
    const firstTs = sorted.length > 0 ? Number(sorted[0].id) : 0;
    const lastTs  = sorted.length > 0 ? Number(sorted[sorted.length - 1].id) : 0;
    const spanDays = firstTs && lastTs
      ? Math.max(1, Math.round((lastTs - firstTs) / (24 * 60 * 60 * 1000)))
      : 0;

    const inflowsPerWeek  = spanDays > 0 ? (inflows.length  / spanDays) * 7 : 0;
    const outflowsPerWeek = spanDays > 0 ? (outflows.length / spanDays) * 7 : 0;

    // --- Monthly inflow / outflow averages ---
    // Group by calendar month.
    const monthKey = (ts) => {
      const d = new Date(ts);
      return d.getFullYear() + '-' + d.getMonth();
    };
    const inflowByMonth  = new Map();
    const outflowByMonth = new Map();
    for (const t of inflows)  {
      const k = monthKey(t.id);
      inflowByMonth.set(k, (inflowByMonth.get(k) || 0) + (Number(t.amount) || 0));
    }
    for (const t of outflows) {
      const k = monthKey(t.id);
      outflowByMonth.set(k, (outflowByMonth.get(k) || 0) + (Number(t.amount) || 0));
    }

    const monthsSpanned = new Set([...inflowByMonth.keys(), ...outflowByMonth.keys()]).size || 1;
    const monthlyInflowAvg  = inflowTotal  / monthsSpanned;
    const monthlyOutflowAvg = outflowTotal / monthsSpanned;

    // --- Rhythm: which days of the month ---
    const inflowDayHist  = new Array(31).fill(0);
    const outflowDayHist = new Array(31).fill(0);
    for (const t of inflows)  inflowDayHist[new Date(t.id).getDate() - 1]++;
    for (const t of outflows) outflowDayHist[new Date(t.id).getDate() - 1]++;

    const inflowHotDays  = topDaysOfMonth(inflowDayHist, 3);
    const outflowHotDays = topDaysOfMonth(outflowDayHist, 3);

    // --- Concentration risk ---
    // If the largest source is >60% of total, flag dependency.
    // If the top 3 categories are >70% of outflow, flag concentration.
    const top3CatTotal = categories.slice(0, 3).reduce((s, c) => s + c.total, 0);
    const top3Share = outflowTotal > 0 ? top3CatTotal / outflowTotal : 0;

    return {
      txCount: sorted.length,
      inflowCount: inflows.length,
      outflowCount: outflows.length,
      transferCount: transfers.length,
      spanDays,
      inflowsPerWeek,
      outflowsPerWeek,
      monthlyInflowAvg,
      monthlyOutflowAvg,
      inflowTotal,
      outflowTotal,
      liquidBalance,
      sources,
      categories,
      topSource,
      topSourceShare,
      top3Share,
      inflowHotDays,
      outflowHotDays,
      monthsSpanned,
      inflowByMonth,
      outflowByMonth
    };
  }

  function topDaysOfMonth(hist, n) {
    const ranked = hist
      .map((count, i) => ({ day: i + 1, count }))
      .filter(x => x.count > 0)
      .sort((a, b) => b.count - a.count);
    // Deduplicate by rank count
    const out = [];
    let prev = -1;
    for (const r of ranked) {
      if (out.length >= n) break;
      if (r.count < prev && prev > 0) out.push(r.day);
      else if (out.length === 0) out.push(r.day);
      prev = r.count;
    }
    return out.slice(0, n).sort((a, b) => a - b);
  }

  // ==================================================================
  // Rendering — plain-language strings from raw numbers
  // ==================================================================

  function describeConcentration(share) {
    if (share >= 0.8) return { label: 'Highly concentrated', tone: 'red' };
    if (share >= 0.6) return { label: 'Concentrated', tone: 'amber' };
    if (share >= 0.4) return { label: 'Mixed', tone: 'blue' };
    return { label: 'Diversified', tone: 'green' };
  }

  function describeVelocity(perWeek) {
    if (perWeek >= 10) return 'very active';
    if (perWeek >= 4)  return 'active';
    if (perWeek >= 1)  return 'steady';
    if (perWeek > 0)   return 'occasional';
    return 'quiet';
  }

  function ordinal(n) {
    const s = ['th','st','nd','rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  function listDays(days) {
    if (days.length === 0) return '';
    if (days.length === 1) return 'the ' + ordinal(days[0]);
    if (days.length === 2) return 'the ' + ordinal(days[0]) + ' and ' + ordinal(days[1]);
    return 'the ' + days.slice(0, -1).map(ordinal).join(', ') + ', and ' + ordinal(days[days.length - 1]);
  }

  // ==================================================================
  // UI — modal
  // ==================================================================

  function openMoneyMapModal() {
    const existing = document.getElementById(MODAL_ID);
    if (existing) { existing.style.display = 'flex'; refreshModal(); return; }

    const overlay = document.createElement('div');
    overlay.id = MODAL_ID;
    overlay.style.cssText = [
      'position:fixed','inset:0','z-index:9990',
      'display:flex','align-items:center','justify-content:center',
      'padding:16px','background:rgba(0,0,0,0.55)',
      'backdrop-filter:blur(10px)',
      '-webkit-backdrop-filter:blur(10px)'
    ].join(';');
    overlay.innerHTML = buildModalShell();
    document.body.appendChild(overlay);
    wireModal(overlay);
    refreshModal();
  }

  function buildModalShell() {
    return `
      <div style="background:#ffffff;border-radius:16px;width:100%;max-width:640px;
                  max-height:92vh;display:flex;flex-direction:column;overflow:hidden;
                  box-shadow:0 24px 80px rgba(0,0,0,0.28);
                  border:1px solid rgba(0,0,0,0.06);">
        <div style="background:linear-gradient(135deg,#0067C0,#004578);padding:20px 22px 16px;flex-shrink:0;">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="width:40px;height:40px;background:rgba(255,255,255,0.18);
                          border-radius:10px;display:flex;align-items:center;justify-content:center;
                          font-size:20px;">🗺️</div>
              <div>
                <div style="color:white;font-size:15px;font-weight:700;letter-spacing:-.01em;">
                  Your Money Map
                </div>
                <div style="color:rgba(255,255,255,0.75);font-size:11px;margin-top:1px;"
                     id="tg-mm-subtitle">
                  How money moves through your life
                </div>
              </div>
            </div>
            <button id="tg-mm-close"
                    style="background:rgba(255,255,255,0.15);border:none;color:white;
                           width:32px;height:32px;border-radius:50%;font-size:18px;
                           cursor:pointer;">×</button>
          </div>
        </div>
        <div id="tg-mm-body" style="flex:1;overflow-y:auto;padding:18px 20px 24px;"></div>
      </div>
    `;
  }

  function wireModal(overlay) {
    overlay.querySelector('#tg-mm-close').onclick = () => {
      overlay.style.display = 'none';
      // Close mobile sidebar if it's open
      const sb = document.getElementById('nav-sidebar');
      if (sb) sb.classList.remove('mobile-open');
    };
    overlay.addEventListener('mousedown', (e) => {
      if (e.target === overlay) overlay.style.display = 'none';
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.style.display !== 'none') {
        overlay.style.display = 'none';
      }
    });
  }

  async function refreshModal() {
    const body = document.getElementById('tg-mm-body');
    if (!body) return;
    body.innerHTML = loadingSpinner();
    const txs = await readAllTx();
    body.innerHTML = renderBody(txs);
  }

  function loadingSpinner() {
    return `
      <div style="padding:60px 20px;text-align:center;color:var(--win-text-3);">
        <div style="width:32px;height:32px;border:3px solid #e5e7eb;
                    border-top-color:#0067C0;border-radius:50%;
                    margin:0 auto 14px;animation:tgmms 0.8s linear infinite;"></div>
        <div style="font-size:13px;">Reading your transactions…</div>
        <style>@keyframes tgmms{to{transform:rotate(360deg)}}</style>
      </div>
    `;
  }

  // ==================================================================
  // Body renderer
  // ==================================================================

  function renderBody(txs) {
    if (!txs || txs.length === 0) {
      return emptyState('No transactions yet',
        'Once you add transactions, Travis will map how your money moves.');
    }
    if (txs.length < MIN_TX_FOR_SIGNAL) {
      const analysis = analyze(txs);
      return `
        <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:10px;
                    padding:14px 16px;margin-bottom:14px;font-size:12.5px;color:#78350f;
                    line-height:1.6;">
          <strong>Early picture.</strong> Travis has only
          <strong>${txs.length} transaction${txs.length === 1 ? '' : 's'}</strong>
          to work with. This map will get much clearer as you add more.
        </div>
        ${renderSummary(analysis)}
        ${renderSources(analysis)}
        ${renderCategories(analysis)}
      `;
    }

    const analysis = analyze(txs);
    return [
      renderSummary(analysis),
      renderSources(analysis),
      renderCategories(analysis),
      renderLiquidity(analysis),
      renderVelocity(analysis),
      renderRhythm(analysis),
      renderFooterNote(analysis)
    ].join('');
  }

  // ----- Summary -----
  function renderSummary(a) {
    const netFlow = a.inflowTotal - a.outflowTotal;
    const netColor = netFlow >= 0 ? '#107C10' : '#C42B1C';
    const netLabel = netFlow >= 0 ? 'Net positive' : 'Net negative';

    const months = a.monthsSpanned;
    const monthWord = months === 1 ? 'month' : 'months';

    return `
      <div style="background:linear-gradient(135deg,#f0f7ff,#e8f0fe);
                  border:1px solid rgba(0,120,212,0.15);
                  border-radius:12px;padding:16px 18px;margin-bottom:16px;">
        <div style="font-size:11px;font-weight:700;color:#005A9E;
                    text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px;">
          The big picture
        </div>
        <div style="font-size:13px;line-height:1.75;color:#1a1a1a;">
          Over the last <strong>${months} ${monthWord}</strong>, Travis saw
          <strong>${a.txCount} transactions</strong>. You received about
          <strong>KSh ${money(a.monthlyInflowAvg)}</strong> per month and spent about
          <strong>KSh ${money(a.monthlyOutflowAvg)}</strong> per month.
          <br>
          On average, that leaves you
          <strong style="color:${netColor};">${netFlow >= 0 ? 'up' : 'down'}
          KSh ${money(Math.abs(netFlow / months))}</strong> per month
          (<em>${netLabel}</em>).
        </div>
      </div>
    `;
  }

  // ----- Sources of income -----
  function renderSources(a) {
    if (a.sources.length === 0) {
      return section(
        'Where your money comes in',
        emptyState('No inflows yet', 'Once money comes in, this section shows where from.')
      );
    }
    const share = a.topSourceShare;
    const conc = describeConcentration(share);
    const toneMap = {
      red:   { bg: '#fef2f2', border: '#fecaca', fg: '#991b1b', label: '⚠ Depends on one source' },
      amber: { bg: '#fffbeb', border: '#fde68a', fg: '#78350f', label: 'Mostly from one source' },
      blue:  { bg: '#eff6ff', border: '#bfdbfe', fg: '#1e40af', label: 'A mix of sources' },
      green: { bg: '#f0fdf4', border: '#bbf7d0', fg: '#166534', label: 'Spread across several' }
    };
    const t = toneMap[conc.tone];

    const sourceLines = a.sources.slice(0, 6).map(s => {
      const pct = a.inflowTotal > 0 ? (s.total / a.inflowTotal * 100) : 0;
      return `
        <div style="display:flex;justify-content:space-between;align-items:center;
                    padding:7px 0;border-bottom:1px solid rgba(0,0,0,0.04);font-size:12.5px;">
          <div style="flex:1;min-width:0;">
            <div style="font-weight:600;color:#1a1a1a;
                        overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
              ${escapeHtml(s.name)}
            </div>
            <div style="font-size:11px;color:#6b7280;margin-top:1px;">
              ${s.count} ${s.count === 1 ? 'payment' : 'payments'} · ${pct.toFixed(0)}%
            </div>
          </div>
          <div style="font-family:monospace;font-weight:700;color:#107C10;margin-left:8px;">
            KSh ${money(s.total)}
          </div>
        </div>
      `;
    }).join('');

    const dependencyLine = share >= 0.6
      ? `<div style="background:${t.bg};border:1px solid ${t.border};color:${t.fg};
                     border-radius:8px;padding:10px 12px;margin-bottom:12px;
                     font-size:12px;line-height:1.6;">
           ${t.label}. <strong>${(share * 100).toFixed(0)}%</strong> of your money
           came from <strong>${escapeHtml(a.topSource.name)}</strong>.
           ${share >= 0.8
             ? 'If that source stops, most of your income stops with it.'
             : 'Good to know, but not a crisis.'}
         </div>`
      : `<div style="background:${t.bg};border:1px solid ${t.border};color:${t.fg};
                     border-radius:8px;padding:10px 12px;margin-bottom:12px;
                     font-size:12px;line-height:1.6;">
           ${t.label}. Your largest source is
           <strong>${escapeHtml(a.topSource.name)}</strong> at
           ${(share * 100).toFixed(0)}% of total inflows.
         </div>`;

    return section(
      'Where your money comes in',
      dependencyLine + sourceLines
    );
  }

  // ----- Categories of spending -----
  function renderCategories(a) {
    if (a.categories.length === 0) {
      return section(
        'Where your money goes',
        emptyState('No outflows yet', 'Once money goes out, this section shows what for.')
      );
    }

    const catLines = a.categories.slice(0, 8).map(c => {
      const pct = a.outflowTotal > 0 ? (c.total / a.outflowTotal * 100) : 0;
      const barW = Math.max(2, pct);
      return `
        <div style="padding:8px 0;border-bottom:1px solid rgba(0,0,0,0.04);">
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:12.5px;">
            <div style="flex:1;min-width:0;">
              <div style="font-weight:600;color:#1a1a1a;
                          overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                ${escapeHtml(c.name)}
              </div>
              <div style="font-size:11px;color:#6b7280;margin-top:1px;">
                ${c.count} ${c.count === 1 ? 'transaction' : 'transactions'} · ${pct.toFixed(0)}%
              </div>
            </div>
            <div style="font-family:monospace;font-weight:700;color:#C42B1C;margin-left:8px;">
              KSh ${money(c.total)}
            </div>
          </div>
          <div style="height:3px;background:rgba(0,0,0,0.06);border-radius:2px;margin-top:6px;">
            <div style="height:100%;width:${barW}%;background:#0067C0;border-radius:2px;"></div>
          </div>
        </div>
      `;
    }).join('');

    const top3Note = a.top3Share >= 0.75
      ? `<div style="background:#eff6ff;border:1px solid #bfdbfe;color:#1e40af;
                     border-radius:8px;padding:10px 12px;margin-bottom:12px;
                     font-size:12px;line-height:1.6;">
           Most of your spending (${(a.top3Share * 100).toFixed(0)}%) goes to just
           three things. That's normal — but it also means those three are where
           real change happens if you want to save more.
         </div>`
      : '';

    return section(
      'Where your money goes',
      top3Note + catLines
    );
  }

  // ----- Liquidity -----
  function renderLiquidity(a) {
    const bal = a.liquidBalance;
    const tone = bal >= 0 ? '#107C10' : '#C42B1C';
    const label = bal >= 0 ? 'cash on hand' : 'in the red';
    return section(
      'How liquid you are',
      `<div style="font-size:13px;line-height:1.75;color:#1a1a1a;">
         Across all your liquid accounts — Cash, M-Pesa, Bank, Savings —
         you currently have about
         <strong style="color:${tone};">KSh ${money(Math.abs(bal))}</strong>
         ${label}.
         <br>
         <span style="font-size:11.5px;color:#6b7280;">
           Liquid means the money you can actually reach and spend today.
         </span>
       </div>`
    );
  }

  // ----- Velocity -----
  function renderVelocity(a) {
    return section(
      'How fast money moves',
      `<div style="font-size:13px;line-height:1.75;color:#1a1a1a;">
         Money comes in about
         <strong>${a.inflowsPerWeek.toFixed(1)} times per week</strong>
         and goes out about
         <strong>${a.outflowsPerWeek.toFixed(1)} times per week</strong>.
         That's a <em>${describeVelocity(a.inflowsPerWeek + a.outflowsPerWeek)}</em>
         rhythm.
         <br>
         <span style="font-size:11.5px;color:#6b7280;">
           Over ${a.spanDays} days of history.
         </span>
       </div>`
    );
  }

  // ----- Rhythm (day-of-month patterns) -----
  function renderRhythm(a) {
    const inDays  = a.inflowHotDays;
    const outDays = a.outflowHotDays;

    if (inDays.length === 0 && outDays.length === 0) {
      return section(
        'Your monthly rhythm',
        emptyState('Not enough history', 'After a month or two, patterns start showing here.')
      );
    }

    const lines = [];
    if (inDays.length > 0) {
      lines.push(`Money usually comes in around <strong>${listDays(inDays)}</strong> of the month.`);
    }
    if (outDays.length > 0) {
      lines.push(`Money usually goes out around <strong>${listDays(outDays)}</strong> of the month.`);
    }

    return section(
      'Your monthly rhythm',
      `<div style="font-size:13px;line-height:1.75;color:#1a1a1a;">
         ${lines.join('<br>')}
         <br>
         <span style="font-size:11.5px;color:#6b7280;">
           Knowing when money comes in helps you plan outgoings around it.
         </span>
       </div>`
    );
  }

  // ----- Footer -----
  function renderFooterNote(a) {
    return `
      <div style="margin-top:14px;padding:12px 14px;background:rgba(0,0,0,0.03);
                  border-radius:10px;font-size:11.5px;line-height:1.65;color:#6b7280;">
        <strong style="color:#1a1a1a;">Next step:</strong>
        Travis will add a 30-day forecast to this map once you have
        <strong>three or more months</strong> of transactions. Right now you
        have <strong>${a.monthsSpanned} month${a.monthsSpanned === 1 ? '' : 's'}</strong>.
        Keep recording — the picture gets clearer with every entry.
      </div>
    `;
  }

  // ==================================================================
  // Small UI helpers
  // ==================================================================

  function section(title, bodyHtml) {
    return `
      <div style="margin-bottom:16px;">
        <div style="font-size:12px;font-weight:700;color:#1a1a1a;
                    text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">
          ${escapeHtml(title)}
        </div>
        <div style="background:white;border:1px solid rgba(0,0,0,0.06);
                    border-radius:10px;padding:12px 14px;">
          ${bodyHtml}
        </div>
      </div>
    `;
  }

  function emptyState(title, sub) {
    return `
      <div style="padding:16px;text-align:center;color:#6b7280;font-size:12.5px;">
        <div style="font-weight:600;color:#1a1a1a;margin-bottom:4px;">${escapeHtml(title)}</div>
        <div>${escapeHtml(sub)}</div>
      </div>
    `;
  }

  // ==================================================================
  // Nav injection
  // ==================================================================

  function injectNavButton() {
    const sidebar = document.getElementById('nav-sidebar');
    if (!sidebar || document.getElementById(NAV_ID)) return false;

    // Place right after #nav-mpesa if present, else after Ledger.
    const anchor = document.getElementById('nav-mpesa')
                || sidebar.querySelector('#nav-book')
                || sidebar.querySelector('button[onclick*="showTxModal"]');
    if (!anchor) return false;

    const btn = document.createElement('button');
    btn.id = NAV_ID;
    btn.className = 'nav-item';
    btn.innerHTML = '<span class="nav-icon">🗺️</span> Money Map';
    btn.onclick = () => {
      openMoneyMapModal();
      const sb = document.getElementById('nav-sidebar');
      if (sb) sb.classList.remove('mobile-open');
    };

    if (anchor.parentNode) {
      anchor.parentNode.insertBefore(btn, anchor.nextSibling);
      log('money map nav button injected');
      return true;
    }
    return false;
  }

  function installNavInjector() {
    let tries = 0;
    const MAX = 40;
    const tick = () => {
      tries++;
      if (injectNavButton()) return;
      if (tries >= MAX) { warn('gave up injecting Money Map nav button'); return; }
      setTimeout(tick, 500);
    };
    setTimeout(tick, 800);
  }

  // ==================================================================
  // Public handle + boot
  // ==================================================================

  window.TravisMoneyMap = {
    version: '1.0.0',
    open: () => openMoneyMapModal(),
    close: () => {
      const el = document.getElementById(MODAL_ID);
      if (el) el.style.display = 'none';
    },
    refresh: () => refreshModal(),
    analyze: async () => {
      const txs = await readAllTx();
      return analyze(txs);
    }
  };

  function boot() {
    installNavInjector();
    log('booted v1.0.0');
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(boot, 0);
  } else {
    window.addEventListener('DOMContentLoaded', () => setTimeout(boot, 0));
  }
})();
