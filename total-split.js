/* ============================================================================
   TRAVIS GUARDIAN — TOTAL MONEY SPLIT (total-split.js)
   ----------------------------------------------------------------------------
   Standalone add-on. Does NOT touch the main app's JS or HTML beyond adding
   one <script> tag. Its only job is to look at the "Total Money You Have"
   metric card in the header and rewrite it in place so the user can see the
   Cash total and the M-Pesa/Bank total side by side, without adding a new
   card or clogging the UI.

   How it works
   ------------
   - Waits for the main app to boot and render at least one .metric-card.
   - Discovers the metrics container by walking up from that card (no
     hardcoded container id needed).
   - Rewrites ONLY the first .metric-card (the "Total Money You Have" one).
   - Uses the main app's own globals (getBalance, getFin, state, nav) so
     values always match what the rest of the app shows.
   - Re-applies automatically whenever the main app rewrites the header,
     via a MutationObserver.
   - Self-disables silently on any error. Never throws, never blocks the
     main app, never modifies anything except that one card's innerHTML.

   Account buckets
   ---------------
     Cash side : 'Cash', 'Petty Cash'
     Bank side : 'M-Pesa', 'Bank Account', 'Bank / M-Pesa', 'Savings'
     Excluded  : 'Accounts Receivable' (money owed to you, not money on hand)
   ============================================================================ */

(function () {
    'use strict';

    // ---- Config: which accounts belong to which side ----------------------
    const CASH_ACCOUNTS = ['Cash', 'Petty Cash'];
    const BANK_ACCOUNTS = ['M-Pesa', 'Bank Account', 'Bank / M-Pesa', 'Savings'];

    // A marker we put on the card once we've split it, so we don't loop.
    const SPLIT_MARK = 'data-total-split-applied';

    // ---- Small helpers ----------------------------------------------------
    function money(n) {
        const v = Number(n || 0);
        return v.toLocaleString('en-KE');
    }

    function safeBalance(accountName) {
        try {
            if (typeof window.getBalance === 'function') {
                const b = window.getBalance(accountName);
                return isFinite(b) ? b : 0;
            }
        } catch (e) { /* ignore */ }
        return 0;
    }

    function sumAccounts(list) {
        let total = 0;
        for (const name of list) total += safeBalance(name);
        return total;
    }

    // ---- Find the metrics container (robustly, at runtime) ----------------
    function findMetricsContainer() {
        // The main app uses .metric-card inside a grid; walk up from the
        // first card we can find.
        const firstCard = document.querySelector('.metric-card');
        if (!firstCard) return null;
        return firstCard.parentElement || null;
    }

    function findTotalCard() {
        // The "Total Money You Have" card is the first metric card.
        const container = findMetricsContainer();
        if (!container) return null;
        return container.querySelector('.metric-card');
    }

    // ---- Rewrite the total card as a two-column split ---------------------
    function applySplit() {
        try {
            const card = findTotalCard();
            if (!card) return;

            // Already applied? Nothing to do unless values changed.
            const cash = sumAccounts(CASH_ACCOUNTS);
            const bank = sumAccounts(BANK_ACCOUNTS);
            const signature = cash + '|' + bank;

            if (card.getAttribute(SPLIT_MARK) === signature) return;

            // Preserve the original accent bar colour if there is one.
            const accent = card.querySelector('.metric-accent');
            const accentBg = accent ? accent.style.background : '#0078D4';
            const icon = card.querySelector('.metric-icon');
            const iconText = icon ? icon.textContent : '💰';

            card.innerHTML = `
                <div class="metric-accent" style="background:${accentBg};"></div>
                <div class="metric-label" style="display:flex;align-items:center;gap:6px;">
                    <span>${iconText}</span><span>Money You Have</span>
                </div>
                <div style="display:flex;align-items:stretch;gap:0;margin-top:6px;">
                    <div style="flex:1;min-width:0;padding-right:10px;">
                        <div style="font-size:10px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.05em;">Cash</div>
                        <div class="metric-value" style="font-size:16px;font-weight:800;color:#107C10;line-height:1.25;word-break:break-all;">KSh ${money(cash)}</div>
                    </div>
                    <div style="width:1px;background:#e5e7eb;flex-shrink:0;"></div>
                    <div style="flex:1;min-width:0;padding-left:10px;">
                        <div style="font-size:10px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.05em;">M-Pesa / Bank</div>
                        <div class="metric-value" style="font-size:16px;font-weight:800;color:#0078D4;line-height:1.25;word-break:break-all;">KSh ${money(bank)}</div>
                    </div>
                </div>
            `;

            card.setAttribute(SPLIT_MARK, signature);
        } catch (e) {
            // Silent — never break the main app.
        }
    }

    // ---- Observer: re-apply whenever the header is re-rendered -----------
    let observer = null;

    function attachObserver() {
        const container = findMetricsContainer();
        if (!container || observer) return;

        observer = new MutationObserver(() => {
            // Debounce into the next tick so we don't fight the main app's
            // own synchronous write.
            setTimeout(applySplit, 0);
        });

        observer.observe(container, { childList: true, subtree: true });
    }

    // ---- Boot: wait for the app to render, then split --------------------
    let attempts = 0;
    const MAX_ATTEMPTS = 40; // 40 × 250ms = 10s

    function boot() {
        attempts++;

        const ready =
            typeof window.getBalance === 'function' &&
            document.querySelector('.metric-card');

        if (ready) {
            applySplit();
            attachObserver();
            // Safety net: run a few more times over the next couple of
            // seconds in case the app re-renders late.
            let extra = 0;
            const extraTimer = setInterval(() => {
                applySplit();
                if (++extra >= 8) clearInterval(extraTimer);
            }, 400);
            return;
        }

        if (attempts >= MAX_ATTEMPTS) return; // give up quietly
        setTimeout(boot, 250);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(boot, 800));
    } else {
        setTimeout(boot, 800);
    }
}());
