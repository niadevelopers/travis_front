// ============================================================
// TRAVIS GUARDIAN — MONTHLY FINANCIAL AUDIT
// Deobfuscated from minified/obfuscated source
// ============================================================

'use strict';

// ─────────────────────────────────────────────
// 1. DATABASE HELPERS (IndexedDB)
// ─────────────────────────────────────────────

function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('TravisGuardian_v1.0', 1);

        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror  = (event) => reject(event.target.error);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('meta')) {
                db.createObjectStore('meta', { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains('tx')) {
                db.createObjectStore('tx', { keyPath: 'id' });
            }
        };
    });
}

function getAllFromStore(db, storeName) {
    return new Promise((resolve) => {
        try {
            const tx      = db.transaction(storeName, 'readonly');
            const store   = tx.objectStore(storeName);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result || []);
            request.onerror   = () => resolve([]);
        } catch (e) {
            resolve([]);
        }
    });
}

function getFromStore(db, storeName, key) {
    return new Promise((resolve) => {
        try {
            const tx      = db.transaction(storeName, 'readonly');
            const store   = tx.objectStore(storeName);
            const request = store.get(key);
            request.onsuccess = () => resolve(request.result || null);
            request.onerror   = () => resolve(null);
        } catch (e) {
            resolve(null);
        }
    });
}

async function loadAllData() {
    const db = await openDatabase();
    const [transactions, config] = await Promise.all([
        getAllFromStore(db, 'tx'),
        getFromStore(db, 'meta', 'config')
    ]);
    db.close();
    return {
        transactions: transactions.sort((a, b) => b.id - a.id),
        user:         config?.user        || {},
        obligations:  config?.obligations || []
    };
}

// ─────────────────────────────────────────────
// 2. CATEGORY MAPS
// ─────────────────────────────────────────────

const CATEGORY_TYPES = {
    'Cash':                             'liquid_asset',
    'M-Pesa':                           'liquid_asset',
    'Bank Account':                     'liquid_asset',
    'Savings':                          'liquid_asset',
    'Bank / M-Pesa':                    'liquid_asset',
    'Petty Cash':                       'liquid_asset',
    'Accounts Receivable':              'liquid_asset',
    'Inventory':                        'asset',
    'Fixed Assets':                     'asset',
    'Salary':                           'income',
    'Side Hustle':                      'income',
    'Allowance':                        'income',
    'Dividends':                        'income',
    'Other Income':                     'income',
    'Sales Revenue':                    'income',
    'Service Revenue':                  'income',
    'Other Revenue':                    'income',
    'Food & Groceries':                 'necessary_expense',
    'Rent':                             'necessary_expense',
    'Bills':                            'necessary_expense',
    'Transport':                        'necessary_expense',
    'Medical':                          'necessary_expense',
    'School':                           'necessary_expense',
    'Payroll':                          'necessary_expense',
    'Utilities':                        'necessary_expense',
    'Cost of Goods Sold':               'necessary_expense',
    'Tax':                              'necessary_expense',
    'Office Supplies':                  'necessary_expense',
    'Entertainment':                    'discretionary_expense',
    'Clothes':                          'discretionary_expense',
    'Travel (fun)':                     'discretionary_expense',
    'Other Fun Spending':               'discretionary_expense',
    'Marketing':                        'discretionary_expense',
    'Travel & Entertainment':           'discretionary_expense',
    'Professional Fees (if not critical)': 'discretionary_expense',
    'Loan Repayment':                   'liability',
    'Credit':                           'liability',
    'Accounts Payable':                 'liability',
    'Loans Payable':                    'liability'
};

const getCategoryType    = (cat) => CATEGORY_TYPES[cat] || 'unknown';
const isLiquidAsset      = (cat) => getCategoryType(cat) === 'liquid_asset';
const isIncome           = (cat) => getCategoryType(cat) === 'income';
const isExpense          = (cat) => getCategoryType(cat) === 'necessary_expense' || getCategoryType(cat) === 'discretionary_expense';
const isLiability        = (cat) => getCategoryType(cat) === 'liability';

// ─────────────────────────────────────────────
// 3. TRANSACTION FLOW CLASSIFIER
// ─────────────────────────────────────────────

function classifyTransaction(tx) {
    // Money received: liquid asset debited, income credited
    if (isLiquidAsset(tx.debit) && isIncome(tx.credit)) {
        return { flow: 'inflow', cat: tx.credit };
    }
    // Income realised into liquid asset
    if (isIncome(tx.debit) && isLiquidAsset(tx.credit)) {
        return { flow: 'inflow', cat: tx.debit };
    }
    // Transfer between liquid accounts
    if (isLiquidAsset(tx.debit) && isLiquidAsset(tx.credit)) {
        return { flow: 'transfer', cat: 'Internal Transfer' };
    }
    // Expense paid from liquid asset
    if (isExpense(tx.debit) && isLiquidAsset(tx.credit)) {
        return { flow: 'outflow', cat: tx.debit };
    }
    // Liability paid from liquid asset
    if (isLiability(tx.debit) && isLiquidAsset(tx.credit)) {
        return { flow: 'outflow', cat: tx.debit };
    }
    // Asset purchase from liquid asset
    if (getCategoryType(tx.debit) === 'asset' && isLiquidAsset(tx.credit)) {
        return { flow: 'outflow', cat: tx.debit };
    }
    // Liquid debited, expense credited (reverse entry)
    if (isLiquidAsset(tx.debit) && isExpense(tx.credit)) {
        return { flow: 'outflow', cat: tx.credit };
    }
    // Liquid credited, non-liquid debited
    if (isLiquidAsset(tx.credit) && !isLiquidAsset(tx.debit)) {
        return { flow: 'outflow', cat: tx.debit || 'Other Expense' };
    }
    // Liquid debited, non-liquid credited
    if (isLiquidAsset(tx.debit) && !isLiquidAsset(tx.credit)) {
        return { flow: 'inflow', cat: tx.credit || 'Other Income' };
    }
    return { flow: 'unknown', cat: (tx.debit || '') + ' / ' + (tx.credit || '') };
}

// ─────────────────────────────────────────────
// 4. FORMATTING HELPERS
// ─────────────────────────────────────────────

function formatKsh(amount) {
    return 'KSh ' + Math.abs(amount).toLocaleString('en-KE');
}

function getMonthName(monthIndex) {
    return ['January','February','March','April','May','June',
            'July','August','September','October','November','December'][monthIndex];
}

function getLastDayOfCurrentMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

// ─────────────────────────────────────────────
// 5. AUDIT COMPUTATION ENGINE
// ─────────────────────────────────────────────

function computeAudit(data) {
    const { transactions, user, obligations } = data;
    const now          = new Date();
    const currentYear  = now.getFullYear();
    const currentMonth = now.getMonth();

    // Filter to this month's transactions only
    const monthTx = transactions.filter((tx) => {
        const d = new Date(Number(tx.id));
        return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
    });

    let totalInflow  = 0;
    let totalOutflow = 0;

    const spendByCategory  = {};   // outflow categories
    const incomeByCategory = {};   // inflow categories
    const outflowByDay     = {};   // daily outflow totals
    const inflowByDay      = {};   // daily inflow totals

    let necessaryTotal    = 0;
    let discretionaryTotal = 0;
    let liabilityTotal    = 0;

    monthTx.forEach((tx) => {
        const classified = classifyTransaction(tx);
        const dateLabel  = new Date(Number(tx.id)).toLocaleDateString('en-KE');

        if (classified.flow === 'inflow') {
            totalInflow += tx.amount;
            incomeByCategory[classified.cat] = (incomeByCategory[classified.cat] || 0) + tx.amount;
            inflowByDay[dateLabel] = (inflowByDay[dateLabel] || 0) + tx.amount;
        }

        if (classified.flow === 'outflow') {
            totalOutflow += tx.amount;
            spendByCategory[classified.cat] = (spendByCategory[classified.cat] || 0) + tx.amount;
            outflowByDay[dateLabel] = (outflowByDay[dateLabel] || 0) + tx.amount;

            // Sub-classify outflow type
            const subType = getCategoryType(tx.debit) !== 'unknown'
                ? getCategoryType(tx.debit)
                : getCategoryType(tx.credit);

            if (subType === 'necessary_expense')    necessaryTotal     += tx.amount;
            else if (subType === 'discretionary_expense') discretionaryTotal += tx.amount;
            else if (subType === 'liability')        liabilityTotal     += tx.amount;
        }
    });

    const netPosition  = totalInflow - totalOutflow;
    const savingsRate  = totalInflow > 0 ? Math.round(netPosition / totalInflow * 100) : 0;

    const sortedSpend  = Object.entries(spendByCategory).sort((a, b) => b[1] - a[1]);
    const sortedIncome = Object.entries(incomeByCategory).sort((a, b) => b[1] - a[1]);
    const worstDay     = Object.entries(outflowByDay).sort((a, b) => b[1] - a[1])[0] || ['—', 0];
    const bestDay      = Object.entries(inflowByDay).sort((a, b) => b[1] - a[1])[0]  || ['—', 0];

    // Obligations compliance
    const obligationReport = (obligations || []).map((ob) => {
        let paid = 0;
        monthTx.forEach((tx) => {
            if (
                (tx.desc && tx.desc.toLowerCase().includes(ob.label.toLowerCase())) ||
                tx.debit === ob.label ||
                tx.credit === ob.label
            ) {
                paid += tx.amount;
            }
        });
        return {
            label:    ob.label,
            budget:   ob.amount,
            paid:     paid,
            variance: paid - ob.amount,
            met:      paid >= ob.amount
        };
    });

    const obligationsMet   = obligationReport.filter((o) => o.met).length;
    const obligationsTotal = obligationReport.length;
    const overBudget       = obligationReport.filter((o) => o.variance > 0);

    // ── DISCIPLINE SCORE ──
    let score = 50; // base

    // Savings rate contribution
    if      (savingsRate >= 20) score += 25;
    else if (savingsRate >= 15) score += 20;
    else if (savingsRate >= 10) score += 12;
    else if (savingsRate >= 5)  score += 6;
    else if (savingsRate < 0)   score -= 20;

    // Obligations contribution
    score += obligationsTotal > 0
        ? Math.round(obligationsMet / obligationsTotal * 20)
        : 10;
    score -= overBudget.length * 5;

    // Discretionary ratio penalty
    if (totalOutflow > 0) {
        const discRatio = discretionaryTotal / totalOutflow;
        if      (discRatio > 0.5) score -= 10;
        else if (discRatio > 0.3) score -= 5;
    }

    // Transaction logging bonus/penalty
    if      (monthTx.length >= 10) score += 5;
    else if (monthTx.length === 0)  score -= 10;

    score = Math.max(0, Math.min(100, score));

    const scoreLabel = score >= 80 ? 'EXCELLENT'
                     : score >= 65 ? 'GOOD'
                     : score >= 45 ? 'NEEDS ATTENTION'
                     : 'CRITICAL';

    const auditCore = {
        user, netPosition, totalInflow, totalOutflow,
        savingsRate, score, scoreLabel,
        sortedSpend, sortedIncome,
        obligationsMet, obligationsTotal,
        overBudget, obligationReport,
        worstDay, bestDay, monthTx,
        m: currentMonth, y: currentYear,
        necessaryTotal, discretionaryTotal, liabilityTotal
    };

    return {
        month:              getMonthName(currentMonth) + ' ' + currentYear,
        user,
        totalInflow,
        totalOutflow,
        netPosition,
        savingsRate,
        score,
        scoreLabel,
        txCount:            monthTx.length,
        monthTx,
        sortedSpend,
        sortedIncome,
        obligationReport,
        obligationsMet,
        obligationsTotal,
        overBudget,
        worstDay,
        bestDay,
        necessaryTotal,
        discretionaryTotal,
        liabilityTotal,
        narrative:          buildNarrative(auditCore),
        recommendations:    buildRecommendations(auditCore)
    };
}

// ─────────────────────────────────────────────
// 6. NARRATIVE BUILDER
// ─────────────────────────────────────────────

function buildNarrative(d) {
    const parts      = [];
    const clientName = d.user?.name || 'Client';
    const monthLabel = getMonthName(d.m) + ' ' + d.y;

    parts.push(clientName + "'s financial audit for " + monthLabel +
               " produces a discipline score of " + d.score + "/100 — rated " + d.scoreLabel + '.');

    if (d.netPosition > 0) {
        parts.push('The month ended with a positive net position of ' + formatKsh(d.netPosition) +
                   ', meaning more money came in than went out.');
    } else if (d.netPosition === 0) {
        parts.push('The month broke exactly even at ' + formatKsh(d.totalInflow) + '.');
    } else {
        parts.push('The month closed in deficit: ' + formatKsh(d.totalOutflow) +
                   ' went out against ' + formatKsh(d.totalInflow) +
                   ' in — a shortfall of ' + formatKsh(Math.abs(d.netPosition)) + '.');
    }

    if (d.totalInflow === 0) {
        parts.push('No income was recorded this month — a critical record-keeping gap.');
    } else if (d.savingsRate >= 20) {
        parts.push('A savings rate of ' + d.savingsRate + '% was achieved — well above the 15% healthy floor.');
    } else if (d.savingsRate >= 10) {
        parts.push('The savings rate of ' + d.savingsRate + '% is acceptable, though there is room to push toward 15-20%.');
    } else if (d.savingsRate >= 0) {
        parts.push('A savings rate of only ' + d.savingsRate + '% leaves no cushion. Target 10% next month by cutting the lowest-value discretionary spend first.');
    } else {
        parts.push('The savings rate was negative at ' + d.savingsRate + '%, confirming spending exceeded income.');
    }

    if (d.sortedSpend.length > 0) {
        const [topCat, topAmt] = d.sortedSpend[0];
        const pct = d.totalOutflow > 0 ? Math.round(topAmt / d.totalOutflow * 100) : 0;
        parts.push('The largest outflow category was ' + topCat + ' at ' + formatKsh(topAmt) +
                   ', representing ' + pct + '% of total spending.');
        if (d.sortedSpend.length > 1) {
            parts.push('Second largest: ' + d.sortedSpend[1][0] + ' at ' + formatKsh(d.sortedSpend[1][1]) + '.');
        }
    }

    if (d.totalOutflow > 0 && d.discretionaryTotal > 0) {
        const discPct = Math.round(d.discretionaryTotal / d.totalOutflow * 100);
        parts.push(
            discPct > 30
                ? 'Discretionary spending was ' + discPct + '% of outflows (' + formatKsh(d.discretionaryTotal) + ') — first place to cut if position tightens.'
                : 'Discretionary spending was well-contained at ' + discPct + '% of outflows (' + formatKsh(d.discretionaryTotal) + ').'
        );
    }

    if (d.obligationsTotal > 0) {
        if (d.obligationsMet === d.obligationsTotal && d.overBudget.length === 0) {
            parts.push('All ' + d.obligationsTotal + ' mandatory obligation' +
                       (d.obligationsTotal > 1 ? 's were' : ' was') + ' settled within budget.');
        } else if (d.overBudget.length > 0) {
            const worst = [...d.overBudget].sort((a, b) => b.variance - a.variance)[0];
            parts.push('"' + worst.label + '" ran ' + formatKsh(worst.variance) +
                       ' over budget — the most significant variance this month.');
        } else if (d.obligationsMet < d.obligationsTotal) {
            parts.push((d.obligationsTotal - d.obligationsMet) +
                       ' of ' + d.obligationsTotal + ' obligations were not fully settled.');
        }
    }

    if (d.worstDay[1] > 0) {
        parts.push('Highest single-day outflow: ' + formatKsh(d.worstDay[1]) + ' on ' + d.worstDay[0] + '.');
    }

    parts.push(
        d.monthTx.length < 5
            ? 'Only ' + d.monthTx.length + ' transaction' +
              (d.monthTx.length !== 1 ? 's' : '') + ' recorded — sparse logging reduces audit accuracy.'
            : d.monthTx.length + ' transactions recorded — ' +
              (d.monthTx.length >= 10 ? 'solid' : 'reasonable') + ' data foundation.'
    );

    return parts.join(' ');
}

// ─────────────────────────────────────────────
// 7. RECOMMENDATIONS BUILDER
// ─────────────────────────────────────────────

function buildRecommendations(d) {
    const recs         = [];
    const isBusiness   = d.user?.type === 'business';

    // Net position
    if (d.netPosition < 0) {
        recs.push({
            priority: 'CRITICAL',
            area:     'Cash Flow',
            advice:   'You spent ' + formatKsh(Math.abs(d.netPosition)) +
                      ' more than you earned. Identify one expense to cut 20% and one income channel to increase before next month.'
        });
    } else if (d.savingsRate < 5 && d.totalInflow > 0) {
        recs.push({
            priority: 'HIGH',
            area:     'Savings Buffer',
            advice:   'Savings rate of ' + d.savingsRate + '% leaves no cushion. Target 10% next month by cutting the lowest-value discretionary spend first.'
        });
    } else if (d.savingsRate >= 15) {
        recs.push({
            priority: 'KEEP UP',
            area:     'Savings Discipline',
            advice:   'Your ' + d.savingsRate + '% savings rate is above the healthy threshold. Pay yourself first — transfer savings on the day income arrives.'
        });
    }

    // Top spend category
    if (d.sortedSpend.length > 0) {
        const [topCat, topAmt] = d.sortedSpend[0];
        const pct = d.totalOutflow > 0 ? Math.round(topAmt / d.totalOutflow * 100) : 0;
        if (pct >= 35) {
            recs.push({
                priority: 'HIGH',
                area:     topCat,
                advice:   topCat + ' absorbed ' + pct + '% of spending at ' + formatKsh(topAmt) +
                          '. A 15% reduction here would materially improve your net position.'
            });
        }
    }

    // Discretionary ratio
    if (d.totalOutflow > 0) {
        const discPct = Math.round(d.discretionaryTotal / d.totalOutflow * 100);
        if (discPct > 30) {
            recs.push({
                priority: 'HIGH',
                area:     'Discretionary Spending',
                advice:   'Non-essential spending was ' + discPct + '% of outflows (' +
                          formatKsh(d.discretionaryTotal) + '). Set a ceiling before next month starts.'
            });
        } else if (discPct <= 15 && d.discretionaryTotal > 0) {
            recs.push({
                priority: 'KEEP UP',
                area:     'Discretionary Control',
                advice:   'Discretionary spending at only ' + discPct + '% of outflows — very well controlled. Maintain this.'
            });
        }
    }

    // Over-budget obligations
    d.overBudget.forEach((ob) => {
        recs.push({
            priority: 'HIGH',
            area:     ob.label,
            advice:   '"' + ob.label + '" exceeded budget by ' + formatKsh(ob.variance) +
                      ' (budgeted ' + formatKsh(ob.budget) + ', spent ' + formatKsh(ob.paid) +
                      '). Fix the ceiling or the budget.'
        });
    });

    // Unsettled obligations
    if (d.obligationsMet < d.obligationsTotal) {
        const unsettled = d.obligationReport.filter((o) => !o.met);
        recs.push({
            priority: 'CRITICAL',
            area:     'Unpaid Obligations',
            advice:   'Unsettled: ' +
                      unsettled.map((o) => o.label + ' (short ' + formatKsh(o.budget - o.paid) + ')').join(', ') +
                      '. Pay these first next month before any discretionary spending.'
        });
    }

    // No income
    if (d.totalInflow === 0) {
        recs.push({
            priority: 'CRITICAL',
            area:     'Income Logging',
            advice:   'No income recorded. Log every transaction the same day it happens. If genuinely zero, an urgent recovery plan is needed.'
        });
    }

    // Wealth building opportunity
    if (d.savingsRate > 20 && d.netPosition > 0 && d.obligationsMet === d.obligationsTotal) {
        recs.push({
            priority: 'OPPORTUNITY',
            area:     isBusiness ? 'Reinvestment' : 'Wealth Building',
            advice:   isBusiness
                ? 'Strong month. Allocate surplus toward inventory or marketing with a clear return within 60 days.'
                : 'Strong month. Move surplus into a money market fund or SACCO where it earns interest.'
        });
    }

    // Sparse logging
    if (d.monthTx.length < 5 && d.monthTx.length > 0) {
        recs.push({
            priority: 'HIGH',
            area:     'Transaction Logging',
            advice:   'Only ' + d.monthTx.length + ' transactions recorded — sparse logging reduces audit accuracy.'
        });
    }

    return recs;
}

// ─────────────────────────────────────────────
// 8. LOAD jsPDF
// ─────────────────────────────────────────────

async function loadJsPDF() {
    if (window.jspdf && window.jspdf.jsPDF) return window.jspdf.jsPDF;
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src   = 'jspdf.umd.min.js';
        script.onload = () => resolve(window.jspdf.jsPDF);
        script.onerror = () => reject(new Error('jsPDF failed to load'));
        document.head.appendChild(script);
    });
}

// ─────────────────────────────────────────────
// 9. PDF GENERATOR
// ─────────────────────────────────────────────

async function generatePDF(audit) {
    const JsPDF   = await loadJsPDF();
    const doc     = new JsPDF({ unit: 'mm', format: 'a4' });

    const PAGE_W  = 210;
    const PAGE_H  = 297;
    const MARGIN_L = 16;
    const MARGIN_R = 16;
    const CONTENT_W = PAGE_W - MARGIN_L - MARGIN_R;

    let y = 18; // current Y cursor

    // Colour palette
    const C = {
        dark:    [2,   6,   23],
        green:   [74,  222, 128],
        white:   [255, 255, 255],
        slate:   [100, 116, 139],
        red:     [239, 68,  68],
        yellow:  [234, 179, 8],
        blue:    [59,  130, 246],
        bgLight: [245, 248, 255],
        border:  [220, 226, 236],
        text:    [30,  40,  60],
        sub:     [80,  90,  110]
    };

    // ── Page-break guard ──
    function checkPageBreak(neededHeight) {
        if (y + (neededHeight || 20) > PAGE_H - 14) {
            doc.addPage();
            y = 18;
            drawPageHeader();
        }
    }

    // ── Repeating page header ──
    function drawPageHeader() {
        doc.setFillColor(...C.dark);
        doc.rect(0, 0, PAGE_W, 10, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(...C.white);
        doc.text('TRAVIS GUARDIAN  ·  MONTHLY FINANCIAL AUDIT', MARGIN_L, 7);
        doc.setTextColor(...C.text);
        doc.text(
            audit.month.toUpperCase() + '  ·  ' + (audit.user?.name || '').toUpperCase(),
            PAGE_W - MARGIN_R, 7,
            { align: 'right' }
        );
    }

    // ── Section heading ──
    function drawSectionHeading(title) {
        checkPageBreak(14);
        doc.setFillColor(...C.dark);
        doc.roundedRect(MARGIN_L, y, CONTENT_W, 8, 2, 2, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(...C.white);
        doc.text(title, MARGIN_L + 4, y + 5.5);
        y += 13;
    }

    // ══════════════════════════════════════════
    // COVER / HEADER BLOCK
    // ══════════════════════════════════════════
    doc.setFillColor(...C.dark);
    doc.rect(0, 0, PAGE_W, 55, 'F');
    doc.setFillColor(...C.white);
    doc.rect(0, 55, PAGE_W, 2, 'F');

    // Logo text
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(32);
    doc.setTextColor(...C.white);
    doc.text('TRAVIS', MARGIN_L, 26);
    doc.setTextColor(...C.green);        // "GUARDIAN" in green
    doc.text('GUARDIAN', MARGIN_L + 52, 26);

    // Subtitle lines
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(160, 180, 210);
    doc.text('MONTHLY FINANCIAL AUDIT REPORT', MARGIN_L, 35);
    doc.text(
        audit.month.toUpperCase() + '  ·  ' +
        (audit.user?.name || '').toUpperCase() + '  ·  ' +
        (audit.user?.type || 'PERSONAL').toUpperCase(),
        MARGIN_L, 43
    );
    doc.text('Generated: ' + new Date().toLocaleString('en-KE'), MARGIN_L, 49);

    // Transaction count teaser (green)
    doc.setFontSize(7.5);
    doc.setTextColor(...C.green);
    doc.text('Transactions this month: ' + audit.txCount + '  |  Source: IndexedDB (TravisGuardian_v1.0)', MARGIN_L, 55);

    // ── Score badge (top-right) ──
    const badgeColor = audit.score >= 80 ? C.green : audit.score >= 65 ? C.yellow : C.red;
    doc.setFillColor(...badgeColor);
    doc.roundedRect(PAGE_W - MARGIN_R - 40, 14, 40, 32, 3, 3, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.setTextColor(...C.dark);
    doc.text(String(audit.score), PAGE_W - MARGIN_R - 20, 34, { align: 'center' });
    doc.setFontSize(6.5);
    doc.text('DISCIPLINE', PAGE_W - MARGIN_R - 20, 40, { align: 'center' });
    doc.text('SCORE',      PAGE_W - MARGIN_R - 20, 44, { align: 'center' });
    doc.text(audit.scoreLabel, PAGE_W - MARGIN_R - 20, 49, { align: 'center' });

    y = 67;
    drawPageHeader();

    // ══════════════════════════════════════════
    // KPI CARDS ROW  (Inflow / Outflow / Net / Savings)
    // ══════════════════════════════════════════
    const kpiCards = [
        { label: 'Total Inflow',   value: formatKsh(audit.totalInflow),   bar: C.green },
        { label: 'Total Outflow',  value: formatKsh(audit.totalOutflow),  bar: C.red   },
        {
            label: 'Net Position',
            value: (audit.netPosition >= 0 ? '+' : '-') + formatKsh(audit.netPosition),
            bar:   audit.netPosition >= 0 ? C.green : C.red
        },
        {
            label: 'Savings Rate',
            value: audit.savingsRate + '%',
            bar:   audit.savingsRate >= 10 ? C.green : C.red
        }
    ];

    const cardW = (CONTENT_W - 9) / 4;
    kpiCards.forEach((card, i) => {
        const x = MARGIN_L + i * (cardW + 3);
        doc.setFillColor(...C.bgLight);
        doc.roundedRect(x, y, cardW, 20, 2, 2, 'F');
        doc.setFillColor(...card.bar);
        doc.roundedRect(x, y, cardW, 2.5, 1, 1, 'F');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(...C.slate);
        doc.text(card.label.toUpperCase(), x + cardW / 2, y + 9, { align: 'center' });
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(...C.text);
        doc.text(card.value, x + cardW / 2, y + 16, { align: 'center' });
    });
    y += 28;

    // ══════════════════════════════════════════
    // EXPENSE BREAKDOWN BY TYPE
    // ══════════════════════════════════════════
    if (audit.totalOutflow > 0) {
        checkPageBreak(18);
        const expBreakdown = [
            { label: 'Necessary',     val: audit.necessaryTotal,     col: C.blue   },
            { label: 'Discretionary', val: audit.discretionaryTotal, col: C.yellow },
            { label: 'Liabilities',   val: audit.liabilityTotal,     col: C.red    }
        ];
        const segW = (CONTENT_W - 6) / 3;
        expBreakdown.forEach((seg, i) => {
            const x   = MARGIN_L + i * (segW + 3);
            const pct = Math.round(seg.val / audit.totalOutflow * 100);
            doc.setFillColor(248, 250, 255);
            doc.roundedRect(x, y, segW, 14, 2, 2, 'F');
            doc.setFillColor(...seg.col);
            doc.roundedRect(x, y, Math.max(segW * (pct / 100), 0.5), 2, 1, 1, 'F');
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(6.5);
            doc.setTextColor(...C.text);
            doc.text(seg.label.toUpperCase() + ' EXPENSES', x + 4, y + 7);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(8);
            doc.setTextColor(...C.text);
            doc.text(formatKsh(seg.val) + '  (' + pct + '%)', x + 4, y + 12);
        });
        y += 20;
    }

    // ══════════════════════════════════════════
    // AUDITOR'S NARRATIVE
    // ══════════════════════════════════════════
    checkPageBreak(35);
    drawSectionHeading("AUDITOR'S NARRATIVE");
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...C.sub);
    doc.splitTextToSize(audit.narrative, CONTENT_W).forEach((line) => {
        checkPageBreak(7);
        doc.text(line, MARGIN_L, y);
        y += 5.5;
    });
    y += 6;

    // ══════════════════════════════════════════
    // TRANSACTION LOG
    // ══════════════════════════════════════════
    if (audit.txCount > 0) {
        checkPageBreak(40);
        drawSectionHeading('TRANSACTION LOG — ' + audit.txCount + ' ENTRIES THIS MONTH');

        // Table header
        doc.setFillColor(...C.dark);
        doc.rect(MARGIN_L, y, CONTENT_W, 8, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(...C.green);
        doc.text('DATE',          MARGIN_L + 2,   y + 5.5);
        doc.text('DESCRIPTION',   MARGIN_L + 26,  y + 5.5);
        doc.text('CREDIT (FROM)', MARGIN_L + 88,  y + 5.5);
        doc.text('DEBIT (TO)',    MARGIN_L + 130,  y + 5.5);
        doc.text('AMOUNT',        PAGE_W - MARGIN_R - 2, y + 5.5, { align: 'right' });
        y += 10;

        const displayTx = audit.monthTx.slice(0, 50);
        displayTx.forEach((tx, idx) => {
            checkPageBreak(10);

            // Alternating row background
            if (idx % 2 === 0) {
                doc.setFillColor(248, 250, 255);
                doc.rect(MARGIN_L, y - 1, CONTENT_W, 9, 'F');
            }

            const classified = classifyTransaction(tx);
            const dateStr    = new Date(Number(tx.id)).toLocaleDateString('en-KE', { day: '2-digit', month: 'short' });
            const amtColor   = classified.flow === 'inflow'  ? C.green
                             : classified.flow === 'outflow' ? C.red
                             : C.slate;

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(7.5);
            doc.setTextColor(...C.text);
            doc.text(dateStr,                               MARGIN_L + 2,  y + 5);
            doc.setTextColor(...C.text);
            doc.text((tx.desc || 'No description').substring(0, 26), MARGIN_L + 26, y + 5);
            doc.setTextColor(...C.text);
            doc.text((tx.credit || '').substring(0, 18),  MARGIN_L + 88, y + 5);
            doc.text((tx.debit  || '').substring(0, 16),  MARGIN_L + 130, y + 5);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...amtColor);
            doc.text(formatKsh(tx.amount), PAGE_W - MARGIN_R - 2, y + 5, { align: 'right' });
            y += 9;
        });

        if (audit.txCount > 50) {
            checkPageBreak(8);
            doc.setFont('helvetica', 'italic');
            doc.setFontSize(7.5);
            doc.setTextColor(...C.slate);
            doc.text('… ' + (audit.txCount - 50) + ' more transactions — view full ledger in the app.', MARGIN_L + 2, y + 4);
            y += 10;
        }
        y += 6;
    }

    // ══════════════════════════════════════════
    // SPENDING BREAKDOWN
    // ══════════════════════════════════════════
    if (audit.sortedSpend.length > 0) {
        checkPageBreak(40);
        drawSectionHeading('SPENDING BREAKDOWN');
        const maxSpend = audit.sortedSpend[0][1];

        audit.sortedSpend.forEach(([cat, amt]) => {
            checkPageBreak(14);
            const pct    = audit.totalOutflow > 0 ? Math.round(amt / audit.totalOutflow * 100) : 0;
            const barW   = maxSpend > 0 ? (amt / maxSpend) * (CONTENT_W - 58) : 0;
            const barCol = pct > 40 ? C.red : pct > 20 ? C.yellow : C.blue;

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8.5);
            doc.setTextColor(...C.text);
            doc.text(cat, MARGIN_L, y + 4);
            doc.setTextColor(...C.slate);
            doc.text(pct + '%', PAGE_W - MARGIN_R - 24, y + 4, { align: 'right' });
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...C.text);
            doc.text(formatKsh(amt), PAGE_W - MARGIN_R, y + 4, { align: 'right' });

            // Bar (background then filled)
            doc.setFillColor(...C.border);
            doc.roundedRect(MARGIN_L, y + 6, CONTENT_W - 58, 3.5, 1, 1, 'F');
            if (barW > 0) {
                doc.setFillColor(...barCol);
                doc.roundedRect(MARGIN_L, y + 6, barW, 3.5, 1, 1, 'F');
            }
            y += 14;
        });
        y += 4;
    }

    // ══════════════════════════════════════════
    // INCOME SOURCES
    // ══════════════════════════════════════════
    if (audit.sortedIncome.length > 0) {
        checkPageBreak(30);
        drawSectionHeading('INCOME SOURCES');
        audit.sortedIncome.forEach(([src, amt]) => {
            checkPageBreak(10);
            const pct  = audit.totalInflow > 0 ? Math.round(amt / audit.totalInflow * 100) : 0;
            const barW = audit.totalInflow > 0 ? (amt / audit.totalInflow) * (CONTENT_W - 58) : 0;

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8.5);
            doc.setTextColor(...C.text);
            doc.text(src, MARGIN_L, y);
            doc.setTextColor(...C.slate);
            doc.text(pct + '%', PAGE_W - MARGIN_R - 24, y, { align: 'right' });
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...C.green);
            doc.text(formatKsh(amt), PAGE_W - MARGIN_R, y, { align: 'right' });

            doc.setFillColor(220, 252, 231);
            doc.roundedRect(MARGIN_L, y + 2, CONTENT_W - 58, 2.5, 1, 1, 'F');
            if (barW > 0) {
                doc.setFillColor(...C.green);
                doc.roundedRect(MARGIN_L, y + 2, barW, 2.5, 1, 1, 'F');
            }
            y += 10;
        });
        y += 4;
    }

    // ══════════════════════════════════════════
    // MANDATORY OBLIGATIONS COMPLIANCE
    // ══════════════════════════════════════════
    if (audit.obligationReport.length > 0) {
        checkPageBreak(50);
        drawSectionHeading('MANDATORY OBLIGATIONS COMPLIANCE');

        // Table header
        doc.setFillColor(...C.dark);
        doc.rect(MARGIN_L, y, CONTENT_W, 8, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(...C.white);
        doc.text('OBLIGATION', MARGIN_L + 2,   y + 5.5);
        doc.text('BUDGETED',   MARGIN_L + 60,  y + 5.5);
        doc.text('PAID',       MARGIN_L + 92,  y + 5.5);
        doc.text('VARIANCE',   MARGIN_L + 124, y + 5.5);
        doc.text('STATUS',     MARGIN_L + 156, y + 5.5);
        y += 10;

        audit.obligationReport.forEach((ob, idx) => {
            checkPageBreak(10);
            if (idx % 2 === 0) {
                doc.setFillColor(248, 250, 255);
                doc.rect(MARGIN_L, y - 1, CONTENT_W, 10, 'F');
            }
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
            doc.setTextColor(...C.text);
            doc.text(ob.label.substring(0, 26),   MARGIN_L + 2,   y + 5);
            doc.text(formatKsh(ob.budget),          MARGIN_L + 60,  y + 5);
            doc.text(formatKsh(ob.paid),            MARGIN_L + 92,  y + 5);

            // Variance colour
            doc.setTextColor(...(ob.variance > 0 ? C.red : ob.variance < 0 ? C.text : C.green));
            doc.text((ob.variance > 0 ? '+' : '') + formatKsh(ob.variance), MARGIN_L + 124, y + 5);

            // Status badge
            doc.setFillColor(...(ob.met ? C.green : C.red));
            doc.roundedRect(MARGIN_L + 154, y + 1, 26, 7, 2, 2, 'F');
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(6.5);
            doc.setTextColor(...C.dark);
            doc.text(ob.met ? 'SETTLED' : 'UNPAID', MARGIN_L + 167, y + 6, { align: 'center' });
            y += 11;
        });

        checkPageBreak(10);
        const compliancePct = Math.round(audit.obligationsMet / Math.max(audit.obligationsTotal, 1) * 100);
        doc.setFillColor(...C.dark);
        doc.rect(MARGIN_L, y, CONTENT_W, 8, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(...C.green);
        doc.text(
            audit.obligationsMet + ' of ' + audit.obligationsTotal +
            ' settled  ·  Compliance: ' + compliancePct + '%',
            MARGIN_L + 4, y + 5.5
        );
        y += 14;
    }

    // ══════════════════════════════════════════
    // RECOMMENDATIONS
    // ══════════════════════════════════════════
    checkPageBreak(40);
    drawSectionHeading('RECOMMENDATIONS FOR NEXT MONTH');

    audit.recommendations.forEach((rec, idx) => {
        checkPageBreak(32);
        const priorityColor = rec.priority === 'CRITICAL'    ? C.red
                            : rec.priority === 'HIGH'        ? C.yellow
                            : rec.priority === 'KEEP UP'     ? C.green
                            : C.blue;

        // Priority badge
        doc.setFillColor(...priorityColor);
        doc.roundedRect(MARGIN_L, y, 30, 6.5, 2, 2, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6);
        doc.setTextColor(...C.dark);
        doc.text(rec.priority, MARGIN_L + 15, y + 4.5, { align: 'center' });

        // Area label
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(...C.text);
        doc.text(rec.area, MARGIN_L + 34, y + 4.5);
        y += 10;

        // Advice text (word-wrapped)
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(...C.sub);
        doc.splitTextToSize(rec.advice, CONTENT_W - 4).forEach((line) => {
            checkPageBreak(7);
            doc.text(line, MARGIN_L + 2, y);
            y += 5.5;
        });

        // Divider between items
        if (idx < audit.recommendations.length - 1) {
            checkPageBreak(5);
            doc.setDrawColor(...C.border);
            doc.line(MARGIN_L, y + 3, PAGE_W - MARGIN_R, y + 3);
            y += 9;
        } else {
            y += 5;
        }
    });

    // ── Page footers ──
    const totalPages = doc.getNumberOfPages();
    for (let p = 1; p <= totalPages; p++) {
        doc.setPage(p);
        doc.setFillColor(...C.dark);
        doc.rect(0, PAGE_H - 10, PAGE_W, 10, 'F');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(...C.text);
        doc.text('Travis Guardian  ·  Confidential Financial Audit  ·  ' + audit.month, MARGIN_L, PAGE_H - 4);
        doc.text('Page ' + p + ' of ' + totalPages, PAGE_W - MARGIN_R, PAGE_H - 4, { align: 'right' });
    }

    return doc;
}

// ─────────────────────────────────────────────
// 10. SAVE PDF (File System API → fallback link)
// ─────────────────────────────────────────────

async function savePDF(doc, filename) {
    const blob = doc.output('blob');

    if (window.showSaveFilePicker) {
        try {
            const handle      = await window.showSaveFilePicker({
                suggestedName: filename,
                types: [{ description: 'PDF', accept: { 'application/pdf': ['.pdf'] } }],
                startIn: 'documents'
            });
            const writable = await handle.createWritable();
            await writable.write(blob);
            await writable.close();
            return { method: 'picker' };
        } catch (err) {
            if (err.name === 'AbortError') return { method: 'cancelled' };
        }
    }

    // Fallback: auto-download via <a>
    const url = URL.createObjectURL(blob);
    const a   = document.createElement('a');
    a.href     = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 2000);
    return { method: 'download' };
}

// ─────────────────────────────────────────────
// 11. AUDIT MODAL (UI overlay)
// ─────────────────────────────────────────────

async function showAuditModal() {
    // Only one modal at a time
    if (document.getElementById('travis-audit-overlay')) return;

    const now       = new Date();
    const monthLabel = getMonthName(now.getMonth()) + ' ' + now.getFullYear();

    const overlay   = document.createElement('div');
    overlay.id      = 'travis-audit-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(2,6,23,0.93);backdrop-filter:blur(14px);display:flex;align-items:center;justify-content:center;z-index:99999;font-family:system-ui,sans-serif;padding:16px;';

    overlay.innerHTML = `
      <div style="background:#0f172a;border:2px solid #4ade80;box-shadow:0 0 50px rgba(74,222,128,0.2);border-radius:16px;max-width:500px;width:100%;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#020617,#0f172a);padding:28px 28px 20px;">
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">
            <div style="width:48px;height:48px;background:#4ade80;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;">📊</div>
            <div>
              <div style="color:#4ade80;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">End-of-Month Audit</div>
              <div style="color:#f8fafc;font-size:20px;font-weight:800;line-height:1.2;">${monthLabel} Report Ready</div>
            </div>
          </div>
          <p style="color:#94a3b8;font-size:13px;line-height:1.65;margin:0;">Travis reads directly from your secure on-device database — no intermediate state, no guesswork.</p>
        </div>
        <div style="padding:20px 28px 28px;">
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px;">
            <div style="background:#1e293b;border-radius:10px;padding:14px 10px;text-align:center;">
              <div id="akpi-tx"    style="color:#94a3b8;font-weight:700;font-size:17px;">…</div>
              <div style="color:#475569;font-size:10px;text-transform:uppercase;letter-spacing:0.07em;margin-top:3px;">Transactions</div>
            </div>
            <div style="background:#1e293b;border-radius:10px;padding:14px 10px;text-align:center;">
              <div id="akpi-net"   style="font-weight:700;font-size:13px;color:#94a3b8;">…</div>
              <div style="color:#475569;font-size:10px;text-transform:uppercase;letter-spacing:0.07em;margin-top:3px;">Net Position</div>
            </div>
            <div style="background:#1e293b;border-radius:10px;padding:14px 10px;text-align:center;">
              <div id="akpi-score" style="font-weight:700;font-size:17px;color:#94a3b8;">…</div>
              <div style="color:#475569;font-size:10px;text-transform:uppercase;letter-spacing:0.07em;margin-top:3px;">Score</div>
            </div>
          </div>
          <button id="audit-gen-btn" style="width:100%;background:#4ade80;color:#020617;border:none;padding:17px;font-size:15px;font-weight:800;border-radius:10px;cursor:pointer;letter-spacing:0.04em;text-transform:uppercase;">
            📄 Generate &amp; Save Report
          </button>
          <div id="audit-progress" style="margin-top:14px;display:none;">
            <div style="height:5px;background:#1e293b;border-radius:3px;overflow:hidden;">
              <div id="audit-bar" style="height:100%;width:0%;background:#4ade80;border-radius:3px;transition:width 0.4s ease;"></div>
            </div>
            <p id="audit-prog-txt" style="color:#94a3b8;font-size:12px;margin-top:8px;text-align:center;">Preparing…</p>
          </div>
          <button id="audit-skip-btn" style="width:100%;background:transparent;color:#475569;border:none;padding:13px;font-size:13px;cursor:pointer;margin-top:6px;">
            Remind me in 1 hour
          </button>
        </div>
      </div>`;

    document.body.appendChild(overlay);

    // ── Pre-load KPI preview ──
    try {
        const data  = await loadAllData();
        const audit = computeAudit(data);

        document.getElementById('akpi-tx').textContent    = audit.txCount;

        const netEl = document.getElementById('akpi-net');
        netEl.textContent = (audit.netPosition >= 0 ? '+' : '-') + formatKsh(audit.netPosition);
        netEl.style.color = audit.netPosition >= 0 ? '#4ade80' : '#ef4444';

        const scoreEl = document.getElementById('akpi-score');
        scoreEl.textContent = audit.score + '/100';
        scoreEl.style.color = audit.score >= 65 ? '#4ade80' : audit.score >= 45 ? '#eab308' : '#ef4444';
    } catch (e) {
        document.getElementById('akpi-tx').textContent = '?';
    }

    // ── Generate button ──
    document.getElementById('audit-gen-btn').onclick = async () => {
        const genBtn   = document.getElementById('audit-gen-btn');
        const progBar  = document.getElementById('audit-bar');
        const progTxt  = document.getElementById('audit-prog-txt');

        genBtn.disabled    = true;
        genBtn.textContent = 'Generating…';
        document.getElementById('audit-progress').style.display = 'block';

        try {
            progBar.style.width = '15%';
            progTxt.textContent = 'Opening database…';
            await new Promise(r => setTimeout(r, 180));

            progBar.style.width = '35%';
            progTxt.textContent = 'Reading all transactions from IndexedDB…';
            await new Promise(r => setTimeout(r, 180));

            const data    = await loadAllData();
            const txCount = data.transactions.filter((tx) => {
                const d = new Date(Number(tx.id));
                const n = new Date();
                return d.getFullYear() === n.getFullYear() && d.getMonth() === n.getMonth();
            }).length;

            progBar.style.width = '55%';
            progTxt.textContent = 'Classifying ' + txCount + ' entries this month…';
            await new Promise(r => setTimeout(r, 180));

            const audit = computeAudit(data);

            progBar.style.width = '72%';
            progTxt.textContent = 'Writing narrative & recommendations…';
            await new Promise(r => setTimeout(r, 180));

            progBar.style.width = '88%';
            progTxt.textContent = 'Rendering PDF pages…';
            await new Promise(r => setTimeout(r, 180));

            const doc = await generatePDF(audit);

            progBar.style.width = '97%';
            progTxt.textContent = 'Saving…';
            await new Promise(r => setTimeout(r, 150));

            const now      = new Date();
            const filename = 'Travis-Audit-' + getMonthName(now.getMonth()) + '-' + now.getFullYear() + '.pdf';
            const result   = await savePDF(doc, filename);

            progBar.style.width = '100%';

            if (result.method === 'cancelled') {
                progTxt.textContent      = 'Save cancelled. Click to try again.';
                genBtn.disabled          = false;
                genBtn.textContent       = '📄 Generate & Save Report';
                progBar.style.width      = '0%';
                return;
            }

            progBar.style.background = '#4ade80';
            progTxt.textContent =
                '✓ Done — ' + audit.txCount + ' transactions · ' +
                formatKsh(audit.totalInflow) + ' inflow · ' +
                formatKsh(audit.totalOutflow) + ' outflow';

            try { localStorage.setItem('travis_audit_done', now.getFullYear() + '-' + now.getMonth()); } catch(e) {}

            setTimeout(() => overlay.remove(), 3000);

        } catch (err) {
            progBar.style.background = '#ef4444';
            progTxt.textContent      = 'Error: ' + (err.message || 'Unknown error');
            console.error('[TravisAudit]', err);
            genBtn.disabled    = false;
            genBtn.textContent = '📄 Try Again';
        }
    };

    // ── Skip button ──
    document.getElementById('audit-skip-btn').onclick = () => {
        overlay.remove();
        setTimeout(checkAndTriggerAudit, 60 * 60 * 1000); // remind in 1 hour
    };
}

// ─────────────────────────────────────────────
// 12. AUTO-TRIGGER LOGIC
// (last day of month, after 13:30)
// ─────────────────────────────────────────────

function checkAndTriggerAudit() {
    const now     = new Date();
    const year    = now.getFullYear();
    const month   = now.getMonth();
    const day     = now.getDate();
    const hours   = now.getHours();
    const minutes = now.getMinutes();

    // Must be the last day of the month
    if (day !== getLastDayOfCurrentMonth()) return;

    // Must be after 13:30
    if (!(hours > 13 || (hours === 13 && minutes >= 30))) return;

    // Don't show if already done this month
    try {
        if (localStorage.getItem('travis_audit_done') === year + '-' + month) return;
    } catch(e) {}

    showAuditModal();
}

// ─────────────────────────────────────────────
// 13. PUBLIC API  (window.travisAudit)
// ─────────────────────────────────────────────

window.travisAudit = {
    showNow: showAuditModal,

    buildAudit: async () => {
        const data = await loadAllData();
        return computeAudit(data);
    },

    generateAndSave: async () => {
        const data     = await loadAllData();
        const audit    = computeAudit(data);
        const doc      = await generatePDF(audit);
        const now      = new Date();
        await savePDF(doc, 'Travis-Audit-' + getMonthName(now.getMonth()) + '-' + now.getFullYear() + '.pdf');
    }
};

// ─────────────────────────────────────────────
// 14. BOOT — wait for user data to be ready
//     (polls IndexedDB up to 20 times, 800ms apart)
// ─────────────────────────────────────────────

async function bootWithRetry(attempt) {
    if (attempt > 20) return;
    try {
        const db     = await openDatabase();
        const config = await getFromStore(db, 'meta', 'config');
        db.close();

        if (config && config.user) {
            // User data exists — start the hourly trigger check
            checkAndTriggerAudit();
            setInterval(checkAndTriggerAudit, 60 * 1000);
        } else {
            // Not ready yet — retry
            setTimeout(() => bootWithRetry(attempt + 1), 800);
        }
    } catch(e) {
        setTimeout(() => bootWithRetry(attempt + 1), 800);
    }
}

// Entry point — wait 1.5 s after DOM ready before first check
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(() => bootWithRetry(0), 1500));
} else {
    setTimeout(() => bootWithRetry(0), 1500);
}
