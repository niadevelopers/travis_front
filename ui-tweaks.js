/**
 * ui-tweaks.js
 * ------------------------------------------------------------------
 * Two standalone DOM tweaks for Travis Guardian. Zero coupling with the
 * main app — nothing in script.js / travis-mpesa.js / index.html is
 * modified. This file observes the DOM and reshapes it after the app
 * renders.
 *
 *   1. Ledger shows only the current month's transactions, with a
 *      small filter bar above the table and a toggle to reveal all.
 *
 *   2. The "M-Pesa Charges" nav button, which travis-mpesa.js wrongly
 *      injects into the sidebar FOOTER (next to the user tile), is
 *      relocated into the Finance section of the sidebar, right after
 *      the "New Entry" button.
 *
 * Load order: include AFTER script.js, travis-mpesa.js, backup-reconcile.js
 *   <script src="ui-tweaks.js"></script>
 * ------------------------------------------------------------------
 */
(function () {
  'use strict';

  const LOG = '[UITweaks]';
  const log  = (...a) => console.log(LOG, ...a);
  const warn = (...a) => console.warn(LOG, ...a);

  // ==================================================================
  // 1. LEDGER — filter to current month
  // ==================================================================

  const LEDGER_VIEW_ID   = 'view-port';           // where nav('book') writes
  const FILTER_BAR_ID    = 'tg-ledger-filter-bar';
  const ROW_ATTR         = 'data-tg-month-row';   // marks rows we've classified
  const STORAGE_KEY      = 'travis_ledger_filter_showall';
  const MONTH_NAMES      = ['Jan','Feb','Mar','Apr','May','Jun',
                            'Jul','Aug','Sep','Oct','Nov','Dec'];

  // "Show all" is sticky per browser. Default: current month only.
  let showAll = false;
  try { showAll = localStorage.getItem(STORAGE_KEY) === '1'; } catch (_) {}

  function currentMonthLabel() {
    const d = new Date();
    return MONTH_NAMES[d.getMonth()] + ' ' + d.getFullYear();
  }

  function isSameMonth(date) {
    const now = new Date();
    return date.getFullYear() === now.getFullYear()
        && date.getMonth()    === now.getMonth();
  }

  // Best-effort: figure out if a transaction id/date falls in current month.
  // Ledger rows are built from state.transactions entries with .id = Date.now().
  function rowMatchesCurrentMonth(row, txIndex) {
    // Strategy A: match the row to an actual transaction by amount + desc,
    // then use the tx id (numeric ms). Robust against locale quirks.
    try {
      const cells = row.querySelectorAll('td');
      if (cells.length >= 4 && txIndex && txIndex.length) {
        // Find a tx whose amount + desc appear in this row.
        // The table's "Transaction" cell usually contains desc + account chips.
        const txnCell = cells[1] ? cells[1].textContent || '' : '';
        const amtCell = cells[2].textContent || '';
        const amtTxt  = (amtCell + ' ' + (cells[3].textContent || ''))
                          .replace(/[^\d.]/g, '');
        const amtNum  = parseFloat(amtTxt);
        if (!isNaN(amtNum)) {
          const hit = txIndex.find(t =>
            Math.round(Number(t.amount)) === Math.round(amtNum) &&
            txnCell.indexOf(String(t.desc || '').slice(0, 12)) !== -1
          );
          if (hit && typeof hit.id === 'number') {
            return isSameMonth(new Date(hit.id));
          }
        }
      }
    } catch (_) { /* fall through to B */ }

    // Strategy B: parse the visible date cell. en-KE gives "28 Mar 2026",
    // which Date() parses reliably in V8.
    try {
      const dateTxt = (row.querySelector('td') || {}).textContent || '';
      const d = new Date(dateTxt);
      if (!isNaN(d.getTime())) return isSameMonth(d);
    } catch (_) {}

    // If we can't tell, don't hide the row (safer than hiding real data).
    return true;
  }

  function readStateTransactions() {
    // state is a top-level `let` in the main script, so window.state works.
    try {
      if (window.state && Array.isArray(window.state.transactions)) {
        return window.state.transactions;
      }
    } catch (_) {}
    return null;
  }

  function applyLedgerFilter() {
    const view = document.getElementById(LEDGER_VIEW_ID);
    if (!view) return;

    // Ledger view must be the one currently mounted, and must contain a table.
    const table = view.querySelector('table.win-table');
    if (!table) {
      // Remove our bar if the user navigated away from the ledger.
      const stale = document.getElementById(FILTER_BAR_ID);
      if (stale) stale.remove();
      return;
    }

    const tbody = table.querySelector('tbody');
    if (!tbody) return;

    const txIndex = readStateTransactions();
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Skip the "no transactions recorded" placeholder row.
    const realRows = rows.filter(r => !r.querySelector('td[colspan]'));

    // Classify once per render. We re-run on every mutation so this stays
    // in sync when a new transaction is posted (commitTransaction -> nav('dash')
    // -> nav('book') re-renders the table).
    let visibleCount = 0;
    for (const row of realRows) {
      const inMonth = rowMatchesCurrentMonth(row, txIndex);
      row.setAttribute(ROW_ATTR, inMonth ? 'in' : 'out');
      if (showAll || inMonth) {
        row.style.display = '';
        visibleCount++;
      } else {
        row.style.display = 'none';
      }
    }

    // If nothing visible after filtering, show a friendly empty-state row.
    let emptyRow = tbody.querySelector('tr[data-tg-empty]');
    const placeholder = rows.find(r => r.querySelector('td[colspan]'));
    if (visibleCount === 0 && realRows.length > 0 && !showAll) {
      if (placeholder) placeholder.style.display = 'none';
      if (!emptyRow) {
        emptyRow = document.createElement('tr');
        emptyRow.setAttribute('data-tg-empty', '1');
        const td = document.createElement('td');
        td.colSpan = 4;
        td.style.cssText = 'padding:28px;text-align:center;color:var(--win-text-3);font-size:13px;';
        td.innerHTML =
          'No transactions this month. ' +
          '<a href="#" data-tg-show-all ' +
          'style="color:var(--win-accent-light);text-decoration:underline;cursor:pointer;">Show all</a>';
        td.querySelector('[data-tg-show-all]').onclick = (e) => {
          e.preventDefault();
          setShowAll(true);
        };
        emptyRow.appendChild(td);
        tbody.appendChild(emptyRow);
      } else {
        emptyRow.style.display = '';
      }
    } else if (emptyRow) {
      emptyRow.style.display = 'none';
      if (placeholder) placeholder.style.display = '';
    } else if (placeholder && visibleCount > 0) {
      placeholder.style.display = 'none';
    }

    ensureFilterBar(table);
  }

  function ensureFilterBar(table) {
    // Insert (or move) a small bar directly above the table.
    let bar = document.getElementById(FILTER_BAR_ID);
    const wrap = table.parentElement;               // scroll wrapper
    const anchor = wrap && wrap.parentElement;      // card body

    if (!anchor) return;

    if (!bar) {
      bar = document.createElement('div');
      bar.id = FILTER_BAR_ID;
      bar.style.cssText = [
        'display:flex','align-items:center','justify-content:space-between',
        'gap:8px','padding:8px 14px','margin-bottom:8px',
        'background:rgba(0,120,212,0.06)',
        'border:1px solid rgba(0,120,212,0.15)',
        'border-radius:8px','font-size:12px',
        'color:var(--win-text-2)'
      ].join(';');
      bar.innerHTML =
        '<span id="tg-ledger-label"></span>' +
        '<button id="tg-ledger-toggle" type="button" ' +
        'style="background:transparent;border:1px solid var(--win-border-2);' +
        'padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600;' +
        'cursor:pointer;color:var(--win-accent-light);font-family:inherit;">' +
        '</button>';
      bar.querySelector('#tg-ledger-toggle').onclick = () => {
        setShowAll(!showAll);
      };
      anchor.insertBefore(bar, wrap);
    }

    const label  = bar.querySelector('#tg-ledger-label');
    const toggle = bar.querySelector('#tg-ledger-toggle');
    label.textContent = showAll
      ? 'Showing: All time'
      : 'Showing: ' + currentMonthLabel();
    toggle.textContent = showAll ? 'This month' : 'Show all';
  }

  function setShowAll(v) {
    showAll = !!v;
    try { localStorage.setItem(STORAGE_KEY, showAll ? '1' : '0'); } catch (_) {}
    applyLedgerFilter();
  }

  // Watch for view-port rewrites (nav('book') rebuilds the table each time).
  function installLedgerObserver() {
    const view = document.getElementById(LEDGER_VIEW_ID);
    if (!view) {
      // Try again shortly — the app may still be booting.
      return setTimeout(installLedgerObserver, 500);
    }
    let scheduled = false;
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      // requestAnimationFrame so we run after the current innerHTML swap.
      requestAnimationFrame(() => {
        scheduled = false;
        applyLedgerFilter();
      });
    };
    const obs = new MutationObserver(schedule);
    obs.observe(view, { childList: true, subtree: true });
    log('ledger observer installed');
    // First pass in case the ledger is already mounted.
    schedule();
  }

  // ==================================================================
  // 2. Relocate #nav-mpesa from sidebar-footer to Finance section
  // ==================================================================

  function relocateMpesaButton() {
    const btn = document.getElementById('nav-mpesa');
    if (!btn) return false;

    // Already in the right place? The Finance section's scroll container
    // is the div[style*="overflow-y:auto"] holding nav items.
    const sidebar = document.getElementById('nav-sidebar');
    if (!sidebar) return false;

    const newEntryBtn = sidebar.querySelector('button[onclick*="showTxModal"]');
    if (!newEntryBtn) return false;

    // If the button already sits right after "New Entry", we're done.
    if (newEntryBtn.nextElementSibling === btn) return true;

    // Move it. appendChild on an existing node relocates it, preserving
    // its click handler and id.
    if (newEntryBtn.parentNode) {
      newEntryBtn.parentNode.insertBefore(btn, newEntryBtn.nextSibling);
      log('relocated #nav-mpesa under Finance section');
      return true;
    }
    return false;
  }

  function installMpesaRelocator() {
    // travis-mpesa.js injects #nav-mpesa roughly 1.8s after DOMContentLoaded
    // with a retry loop up to 10s. Rather than race it, we poll for the
    // button's existence and relocate the moment it appears.
    let tries = 0;
    const MAX_TRIES = 40;    // ~20s total
    const tick = () => {
      tries++;
      if (relocateMpesaButton()) {
        log('mpesa button placed (attempt ' + tries + ')');
        return;
      }
      if (tries >= MAX_TRIES) {
        warn('gave up waiting for #nav-mpesa after ' + MAX_TRIES + ' tries');
        return;
      }
      setTimeout(tick, 500);
    };
    setTimeout(tick, 300);
  }

  // ==================================================================
  // 3. Public handle for debugging
  // ==================================================================

  window.TravisUITweaks = {
    version: '1.0.0',
    showAll:   () => setShowAll(true),
    thisMonth: () => setShowAll(false),
    status: () => ({
      showAll,
      mpesaInFinanceSection: (() => {
        const btn = document.getElementById('nav-mpesa');
        const newEntry = document.querySelector('#nav-sidebar button[onclick*="showTxModal"]');
        return !!(btn && newEntry && newEntry.nextElementSibling === btn);
      })(),
      filterBarPresent: !!document.getElementById(FILTER_BAR_ID)
    }),
    rerun: () => { applyLedgerFilter(); relocateMpesaButton(); }
  };

  // ==================================================================
  // 4. Boot
  // ==================================================================

  function boot() {
    installLedgerObserver();
    installMpesaRelocator();
    // Also reapply whenever the user navigates (navClick rewrites view-port).
    document.addEventListener('click', (e) => {
      const t = e.target && e.target.closest && e.target.closest('.nav-item, .taskbar-btn');
      if (t) setTimeout(applyLedgerFilter, 60);
    });
    log('booted');
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(boot, 0);
  } else {
    window.addEventListener('DOMContentLoaded', () => setTimeout(boot, 0));
  }
})();
