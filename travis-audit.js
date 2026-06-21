(function () {
  'use strict';

  // ─────────────────────────────────────────────────────────────
  // 1. DATABASE HELPERS
  // ─────────────────────────────────────────────────────────────

  function openDatabase() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('TravisGuardian_v1.0', 1);
      req.onsuccess = (e) => resolve(e.target.result);
      req.onerror   = (e) => reject(e.target.error);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta', { keyPath: 'id' });
        if (!db.objectStoreNames.contains('tx'))   db.createObjectStore('tx',   { keyPath: 'id' });
      };
    });
  }

  function getAllFromStore(db, storeName) {
    return new Promise((resolve) => {
      try {
        const tx  = db.transaction(storeName, 'readonly');
        const st  = tx.objectStore(storeName);
        const req = st.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror   = () => resolve([]);
      } catch (e) { resolve([]); }
    });
  }

  function getFromStore(db, storeName, key) {
    return new Promise((resolve) => {
      try {
        const tx  = db.transaction(storeName, 'readonly');
        const st  = tx.objectStore(storeName);
        const req = st.get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror   = () => resolve(null);
      } catch (e) { resolve(null); }
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

  // ─────────────────────────────────────────────────────────────
  // 2. CATEGORY CLASSIFICATION
  // ─────────────────────────────────────────────────────────────

  const CATEGORY_TYPES = {
    'Cash':'liquid_asset','M-Pesa':'liquid_asset','Bank Account':'liquid_asset',
    'Savings':'liquid_asset','Bank / M-Pesa':'liquid_asset','Petty Cash':'liquid_asset',
    'Accounts Receivable':'liquid_asset','Inventory':'asset','Fixed Assets':'asset',
    'Salary':'income','Side Hustle':'income','Allowance':'income','Dividends':'income',
    'Other Income':'income','Sales Revenue':'income','Service Revenue':'income','Other Revenue':'income',
    'Food & Groceries':'necessary_expense','Rent':'necessary_expense','Bills':'necessary_expense',
    'Transport':'necessary_expense','Medical':'necessary_expense','School':'necessary_expense',
    'Payroll':'necessary_expense','Utilities':'necessary_expense',
    'Cost of Goods Sold':'necessary_expense','Tax':'necessary_expense',
    'Office Supplies':'necessary_expense','Entertainment':'discretionary_expense',
    'Clothes':'discretionary_expense','Travel (fun)':'discretionary_expense',
    'Other Fun Spending':'discretionary_expense','Marketing':'discretionary_expense',
    'Travel & Entertainment':'discretionary_expense',
    'Professional Fees (if not critical)':'discretionary_expense',
    'Loan Repayment':'liability','Credit':'liability',
    'Accounts Payable':'liability','Loans Payable':'liability'
  };

  const getCatType   = (c) => CATEGORY_TYPES[c] || 'unknown';
  const isLiquid     = (c) => getCatType(c) === 'liquid_asset';
  const isIncome     = (c) => getCatType(c) === 'income';
  const isExpense    = (c) => getCatType(c) === 'necessary_expense' || getCatType(c) === 'discretionary_expense';
  const isLiability  = (c) => getCatType(c) === 'liability';

  function classifyTx(tx) {
    if (isLiquid(tx.debit)  && isIncome(tx.credit))   return { flow: 'inflow',   cat: tx.credit };
    if (isIncome(tx.debit)  && isLiquid(tx.credit))   return { flow: 'inflow',   cat: tx.debit  };
    if (isLiquid(tx.debit)  && isLiquid(tx.credit))   return { flow: 'transfer', cat: 'Internal Transfer' };
    if (isExpense(tx.debit) && isLiquid(tx.credit))   return { flow: 'outflow',  cat: tx.debit  };
    if (isLiability(tx.debit) && isLiquid(tx.credit)) return { flow: 'outflow',  cat: tx.debit  };
    if (getCatType(tx.debit) === 'asset' && isLiquid(tx.credit)) return { flow: 'outflow', cat: tx.debit };
    if (isLiquid(tx.debit)  && isExpense(tx.credit))  return { flow: 'outflow',  cat: tx.credit };
    if (isLiquid(tx.credit) && !isLiquid(tx.debit))   return { flow: 'outflow',  cat: tx.debit  || 'Other Expense' };
    if (isLiquid(tx.debit)  && !isLiquid(tx.credit))  return { flow: 'inflow',   cat: tx.credit || 'Other Income'  };
    return { flow: 'unknown', cat: (tx.debit || '') + ' / ' + (tx.credit || '') };
  }

  // ─────────────────────────────────────────────────────────────
  // 3. HELPERS
  // ─────────────────────────────────────────────────────────────

  const MONTHS = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];

  const ksh = (n) => 'KSh ' + Math.abs(n).toLocaleString('en-KE');

  function lastDayOfMonth() {
    const n = new Date();
    return new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
  }

  // ─────────────────────────────────────────────────────────────
  // 4. AUDIT ENGINE
  // ─────────────────────────────────────────────────────────────

  function computeAudit(data) {
    const { transactions, user, obligations } = data;
    const now   = new Date();
    const year  = now.getFullYear();
    const month = now.getMonth();

    const monthTx = transactions.filter((tx) => {
      const d = new Date(Number(tx.id));
      return d.getFullYear() === year && d.getMonth() === month;
    });

    let totalIn = 0, totalOut = 0;
    const spendCat = {}, incomeCat = {}, outByDay = {}, inByDay = {};
    let necessary = 0, discretionary = 0, liabilities = 0;

    monthTx.forEach((tx) => {
      const c   = classifyTx(tx);
      const day = new Date(Number(tx.id)).toLocaleDateString('en-KE');

      if (c.flow === 'inflow') {
        totalIn += tx.amount;
        incomeCat[c.cat] = (incomeCat[c.cat] || 0) + tx.amount;
        inByDay[day]     = (inByDay[day]     || 0) + tx.amount;
      }
      if (c.flow === 'outflow') {
        totalOut += tx.amount;
        spendCat[c.cat] = (spendCat[c.cat] || 0) + tx.amount;
        outByDay[day]   = (outByDay[day]   || 0) + tx.amount;
        const sub = getCatType(tx.debit) !== 'unknown' ? getCatType(tx.debit) : getCatType(tx.credit);
        if      (sub === 'necessary_expense')    necessary    += tx.amount;
        else if (sub === 'discretionary_expense') discretionary += tx.amount;
        else if (sub === 'liability')             liabilities  += tx.amount;
      }
    });

    const net         = totalIn - totalOut;
    const savingsRate = totalIn > 0 ? Math.round(net / totalIn * 100) : 0;
    const sortedSpend  = Object.entries(spendCat).sort((a,b)=>b[1]-a[1]);
    const sortedIncome = Object.entries(incomeCat).sort((a,b)=>b[1]-a[1]);
    const worstDay     = Object.entries(outByDay).sort((a,b)=>b[1]-a[1])[0] || ['—',0];
    const bestDay      = Object.entries(inByDay).sort((a,b)=>b[1]-a[1])[0]  || ['—',0];

    const obligationReport = (obligations||[]).map((ob) => {
      let paid = 0;
      monthTx.forEach((tx) => {
        if ((tx.desc && tx.desc.toLowerCase().includes(ob.label.toLowerCase()))
            || tx.debit === ob.label || tx.credit === ob.label) paid += tx.amount;
      });
      return { label: ob.label, budget: ob.amount, paid, variance: paid - ob.amount, met: paid >= ob.amount };
    });

    const obligationsMet   = obligationReport.filter(o=>o.met).length;
    const obligationsTotal = obligationReport.length;
    const overBudget       = obligationReport.filter(o=>o.variance>0);

    // Score
    let score = 50;
    if      (savingsRate >= 20) score += 25;
    else if (savingsRate >= 15) score += 20;
    else if (savingsRate >= 10) score += 12;
    else if (savingsRate >= 5)  score += 6;
    else if (savingsRate < 0)   score -= 20;
    score += obligationsTotal > 0 ? Math.round(obligationsMet/obligationsTotal*20) : 10;
    score -= overBudget.length * 5;
    if (totalOut > 0) {
      const dr = discretionary / totalOut;
      if (dr > 0.5) score -= 10; else if (dr > 0.3) score -= 5;
    }
    if (monthTx.length >= 10) score += 5; else if (monthTx.length === 0) score -= 10;
    score = Math.max(0, Math.min(100, score));

    const scoreLabel = score>=80?'EXCELLENT':score>=65?'GOOD':score>=45?'NEEDS ATTENTION':'CRITICAL';

    const core = { user, net, totalIn, totalOut, savingsRate, score, scoreLabel,
                   sortedSpend, sortedIncome, obligationsMet, obligationsTotal,
                   overBudget, obligationReport, worstDay, bestDay, monthTx,
                   m: month, y: year, necessary, discretionary, liabilities };

    return {
      month: MONTHS[month] + ' ' + year, user,
      totalIn, totalOut, net, savingsRate, score, scoreLabel,
      txCount: monthTx.length, monthTx, sortedSpend, sortedIncome,
      obligationReport, obligationsMet, obligationsTotal, overBudget,
      worstDay, bestDay, necessary, discretionary, liabilities,
      narrative:       buildNarrative(core),
      recommendations: buildRecommendations(core)
    };
  }

  // ─────────────────────────────────────────────────────────────
  // 5. NARRATIVE
  // ─────────────────────────────────────────────────────────────

  function buildNarrative(d) {
    const p    = [];
    const name = d.user?.name || 'Client';
    p.push(`${name}'s financial audit for ${MONTHS[d.m]} ${d.y} produces a discipline score of ${d.score}/100 — rated ${d.scoreLabel}.`);
    if      (d.net > 0) p.push(`The month ended with a positive net position of ${ksh(d.net)}, meaning more money came in than went out.`);
    else if (d.net === 0) p.push(`The month broke exactly even at ${ksh(d.totalIn)}.`);
    else p.push(`The month closed in deficit: ${ksh(d.totalOut)} went out against ${ksh(d.totalIn)} in — a shortfall of ${ksh(Math.abs(d.net))}.`);
    if (d.totalIn === 0) p.push(`No income was recorded this month — a critical record-keeping gap.`);
    else if (d.savingsRate >= 20) p.push(`A savings rate of ${d.savingsRate}% was achieved — well above the 15% healthy floor.`);
    else if (d.savingsRate >= 10) p.push(`The savings rate of ${d.savingsRate}% is acceptable, though there is room to push toward 15–20%.`);
    else if (d.savingsRate >= 0)  p.push(`A savings rate of only ${d.savingsRate}% leaves no cushion. Target 10% next month by cutting the lowest-value discretionary spend first.`);
    else p.push(`The savings rate was negative at ${d.savingsRate}%, confirming spending exceeded income.`);
    if (d.sortedSpend.length > 0) {
      const [cat, amt] = d.sortedSpend[0];
      const pct = d.totalOut > 0 ? Math.round(amt/d.totalOut*100) : 0;
      p.push(`The largest outflow category was ${cat} at ${ksh(amt)}, representing ${pct}% of total spending.`);
      if (d.sortedSpend.length > 1) p.push(`Second largest: ${d.sortedSpend[1][0]} at ${ksh(d.sortedSpend[1][1])}.`);
    }
    if (d.totalOut > 0 && d.discretionary > 0) {
      const pct = Math.round(d.discretionary/d.totalOut*100);
      p.push(pct > 30
        ? `Discretionary spending was ${pct}% of outflows (${ksh(d.discretionary)}) — first place to cut if position tightens.`
        : `Discretionary spending was well-contained at ${pct}% of outflows (${ksh(d.discretionary)}).`);
    }
    if (d.obligationsTotal > 0) {
      if (d.obligationsMet === d.obligationsTotal && d.overBudget.length === 0) {
        p.push(`All ${d.obligationsTotal} mandatory obligation${d.obligationsTotal>1?'s were':' was'} settled within budget.`);
      } else if (d.overBudget.length > 0) {
        const w = [...d.overBudget].sort((a,b)=>b.variance-a.variance)[0];
        p.push(`"${w.label}" ran ${ksh(w.variance)} over budget — the most significant variance this month.`);
      } else if (d.obligationsMet < d.obligationsTotal) {
        p.push(`${d.obligationsTotal-d.obligationsMet} of ${d.obligationsTotal} obligations were not fully settled.`);
      }
    }
    if (d.worstDay[1] > 0) p.push(`Highest single-day outflow: ${ksh(d.worstDay[1])} on ${d.worstDay[0]}.`);
    p.push(d.monthTx.length < 5
      ? `Only ${d.monthTx.length} transaction${d.monthTx.length!==1?'s':''} recorded — sparse logging reduces audit accuracy.`
      : `${d.monthTx.length} transactions recorded — ${d.monthTx.length>=10?'solid':'reasonable'} data foundation.`);
    return p.join(' ');
  }

  // ─────────────────────────────────────────────────────────────
  // 6. RECOMMENDATIONS
  // ─────────────────────────────────────────────────────────────

  function buildRecommendations(d) {
    const r  = [];
    const biz = d.user?.type === 'business';
    if (d.net < 0) {
      r.push({ priority:'CRITICAL', area:'Cash Flow', advice:`You spent ${ksh(Math.abs(d.net))} more than you earned. Identify one expense to cut 20% and one income channel to increase before next month.` });
    } else if (d.savingsRate < 5 && d.totalIn > 0) {
      r.push({ priority:'HIGH', area:'Savings Buffer', advice:`Savings rate of ${d.savingsRate}% leaves no cushion. Target 10% next month by cutting the lowest-value discretionary spend first.` });
    } else if (d.savingsRate >= 15) {
      r.push({ priority:'KEEP UP', area:'Savings Discipline', advice:`Your ${d.savingsRate}% savings rate is above the healthy threshold. Pay yourself first — transfer savings on the day income arrives.` });
    }
    if (d.sortedSpend.length > 0) {
      const [cat, amt] = d.sortedSpend[0];
      const pct = d.totalOut > 0 ? Math.round(amt/d.totalOut*100) : 0;
      if (pct >= 35) r.push({ priority:'HIGH', area:cat, advice:`${cat} absorbed ${pct}% of spending at ${ksh(amt)}. A 15% reduction here would materially improve your net position.` });
    }
    if (d.totalOut > 0) {
      const pct = Math.round(d.discretionary/d.totalOut*100);
      if (pct > 30) r.push({ priority:'HIGH', area:'Discretionary Spending', advice:`Non-essential spending was ${pct}% of outflows (${ksh(d.discretionary)}). Set a ceiling before next month starts.` });
      else if (pct <= 15 && d.discretionary > 0) r.push({ priority:'KEEP UP', area:'Discretionary Control', advice:`Discretionary spending at only ${pct}% of outflows — very well controlled. Maintain this.` });
    }
    d.overBudget.forEach((ob) => {
      r.push({ priority:'HIGH', area:ob.label, advice:`"${ob.label}" exceeded budget by ${ksh(ob.variance)} (budgeted ${ksh(ob.budget)}, spent ${ksh(ob.paid)}). Fix the ceiling or the budget.` });
    });
    if (d.obligationsMet < d.obligationsTotal) {
      const unsettled = d.obligationReport.filter(o=>!o.met);
      r.push({ priority:'CRITICAL', area:'Unpaid Obligations', advice:`Unsettled: ${unsettled.map(o=>`${o.label} (short ${ksh(o.budget-o.paid)})`).join(', ')}. Pay these first next month before any discretionary spending.` });
    }
    if (d.totalIn === 0) r.push({ priority:'CRITICAL', area:'Income Logging', advice:'No income recorded. Log every transaction the same day it happens. If genuinely zero, an urgent recovery plan is needed.' });
    if (d.savingsRate > 20 && d.net > 0 && d.obligationsMet === d.obligationsTotal) {
      r.push({ priority:'OPPORTUNITY', area: biz?'Reinvestment':'Wealth Building', advice: biz
        ? 'Strong month. Allocate surplus toward inventory or marketing with a clear return within 60 days.'
        : 'Strong month. Move surplus into a money market fund or SACCO where it earns interest.' });
    }
    if (d.monthTx.length < 5 && d.monthTx.length > 0) {
      r.push({ priority:'HIGH', area:'Transaction Logging', advice:`Only ${d.monthTx.length} transactions recorded — sparse logging reduces audit accuracy.` });
    }
    return r;
  }

  // ─────────────────────────────────────────────────────────────
  // 7. HTML REPORT BUILDER  (self-contained, no dependencies)
  // ─────────────────────────────────────────────────────────────

  function buildHTMLReport(audit) {
    const scoreColor = audit.score >= 80 ? '#4ade80' : audit.score >= 65 ? '#eab308' : '#ef4444';
    const netColor   = audit.net   >= 0  ? '#4ade80' : '#ef4444';
    const netSign    = audit.net   >= 0  ? '+' : '-';

    /* ── bar chart helper (inline SVG bar) ── */
    const bar = (pct, color) =>
      `<div style="background:#1e293b;border-radius:4px;height:8px;margin-top:4px;">
         <div style="width:${Math.min(pct,100)}%;background:${color};height:8px;border-radius:4px;"></div>
       </div>`;

    /* ── priority badge colour ── */
    const badgeColor = (p) =>
      p==='CRITICAL'?'#ef4444':p==='HIGH'?'#eab308':p==='KEEP UP'?'#4ade80':p==='OPPORTUNITY'?'#3b82f6':'#64748b';

    /* ── obligation rows ── */
    const obRows = audit.obligationReport.map((ob, i) => `
      <tr style="background:${i%2===0?'#0f172a':'#1e293b'};">
        <td style="padding:8px 10px;">${ob.label}</td>
        <td style="padding:8px 10px;text-align:right;">${ksh(ob.budget)}</td>
        <td style="padding:8px 10px;text-align:right;">${ksh(ob.paid)}</td>
        <td style="padding:8px 10px;text-align:right;color:${ob.variance>0?'#ef4444':ob.variance<0?'#4ade80':'#94a3b8'};">
          ${ob.variance>0?'+':''}${ksh(ob.variance)}</td>
        <td style="padding:8px 10px;text-align:center;">
          <span style="background:${ob.met?'#4ade80':'#ef4444'};color:#020617;padding:2px 10px;border-radius:20px;font-size:11px;font-weight:700;">
            ${ob.met?'SETTLED':'UNPAID'}</span></td>
      </tr>`).join('');

    /* ── transaction rows ── */
    const txRows = audit.monthTx.slice(0,100).map((tx, i) => {
      const c       = classifyTx(tx);
      const dateStr = new Date(Number(tx.id)).toLocaleDateString('en-KE',{day:'2-digit',month:'short',year:'numeric'});
      const color   = c.flow==='inflow'?'#4ade80':c.flow==='outflow'?'#ef4444':'#94a3b8';
      return `
      <tr style="background:${i%2===0?'#0f172a':'#1e293b'};">
        <td style="padding:7px 10px;color:#94a3b8;white-space:nowrap;">${dateStr}</td>
        <td style="padding:7px 10px;">${(tx.desc||'No description').substring(0,40)}</td>
        <td style="padding:7px 10px;color:#64748b;">${tx.credit||''}</td>
        <td style="padding:7px 10px;color:#64748b;">${tx.debit||''}</td>
        <td style="padding:7px 10px;text-align:right;font-weight:700;color:${color};">
          ${c.flow==='inflow'?'+':''}${ksh(tx.amount)}</td>
      </tr>`;
    }).join('');

    /* ── spend breakdown rows ── */
    const spendRows = audit.sortedSpend.map(([cat, amt]) => {
      const pct  = audit.totalOut > 0 ? Math.round(amt/audit.totalOut*100) : 0;
      const col  = pct>40?'#ef4444':pct>20?'#eab308':'#3b82f6';
      return `
      <div style="margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span style="color:#e2e8f0;font-size:13px;">${cat}</span>
          <span style="color:#94a3b8;font-size:12px;margin-left:8px;">${pct}% &nbsp;
            <strong style="color:#f1f5f9;">${ksh(amt)}</strong></span>
        </div>
        ${bar(pct, col)}
      </div>`;
    }).join('');

    /* ── income breakdown rows ── */
    const incomeRows = audit.sortedIncome.map(([src, amt]) => {
      const pct = audit.totalIn > 0 ? Math.round(amt/audit.totalIn*100) : 0;
      return `
      <div style="margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span style="color:#e2e8f0;font-size:13px;">${src}</span>
          <span style="color:#94a3b8;font-size:12px;margin-left:8px;">${pct}% &nbsp;
            <strong style="color:#4ade80;">${ksh(amt)}</strong></span>
        </div>
        ${bar(pct, '#4ade80')}
      </div>`;
    }).join('');

    /* ── recommendations ── */
    const recCards = audit.recommendations.map((rec) => `
      <div style="border-left:4px solid ${badgeColor(rec.priority)};background:#1e293b;border-radius:0 8px 8px 0;padding:14px 16px;margin-bottom:12px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
          <span style="background:${badgeColor(rec.priority)};color:#020617;font-size:10px;font-weight:800;padding:2px 10px;border-radius:20px;letter-spacing:0.05em;">
            ${rec.priority}</span>
          <span style="color:#f1f5f9;font-weight:700;font-size:14px;">${rec.area}</span>
        </div>
        <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin:0;">${rec.advice}</p>
      </div>`).join('');

    /* ── expense type mini-cards ── */
    const expPct = (v) => audit.totalOut > 0 ? Math.round(v/audit.totalOut*100) : 0;

    const generatedDate = new Date().toLocaleString('en-KE');

    // ── FULL HTML ──
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Travis Guardian — ${audit.month} Financial Audit</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:#020617;color:#e2e8f0;font-family:system-ui,-apple-system,sans-serif;font-size:14px;line-height:1.5;}
  h2{color:#f8fafc;font-size:15px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:16px;padding-bottom:8px;border-bottom:1px solid #1e293b;}
  .section{background:#0f172a;border-radius:12px;padding:20px;margin:0 12px 16px;}
  table{width:100%;border-collapse:collapse;font-size:12px;}
  th{background:#020617;color:#4ade80;font-size:11px;font-weight:700;text-transform:uppercase;padding:8px 10px;text-align:left;letter-spacing:0.05em;}
  td{color:#cbd5e1;border-bottom:1px solid #1e293b;}
  @media(max-width:500px){.hide-mobile{display:none;}}
  @media print{body{background:#fff;color:#000;} .section{background:#f8fafc;border:1px solid #e2e8f0;} h2{color:#1e293b;border-color:#cbd5e1;} th{background:#e2e8f0;color:#1e293b;} td{color:#374151;border-color:#e2e8f0;} .no-print{display:none;}}
</style>
</head>
<body>

<!-- ══ HEADER ══ -->
<div style="background:linear-gradient(135deg,#020617 0%,#0f172a 100%);padding:28px 16px 20px;border-bottom:2px solid #4ade80;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;max-width:700px;margin:0 auto;">
    <div>
      <div style="font-size:11px;color:#4ade80;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:4px;">Monthly Financial Audit</div>
      <div style="font-size:28px;font-weight:900;letter-spacing:-0.02em;">
        <span style="color:#f8fafc;">TRAVIS </span><span style="color:#4ade80;">GUARDIAN</span>
      </div>
      <div style="color:#94a3b8;font-size:13px;margin-top:6px;">${audit.month.toUpperCase()}
        ${audit.user?.name ? ' &nbsp;·&nbsp; ' + audit.user.name.toUpperCase() : ''}
        ${audit.user?.type ? ' &nbsp;·&nbsp; ' + audit.user.type.toUpperCase() : ''}
      </div>
      <div style="color:#475569;font-size:11px;margin-top:4px;">Generated: ${generatedDate}</div>
    </div>
    <div style="background:${scoreColor};border-radius:12px;padding:12px 16px;text-align:center;min-width:70px;flex-shrink:0;">
      <div style="font-size:30px;font-weight:900;color:#020617;line-height:1;">${audit.score}</div>
      <div style="font-size:9px;font-weight:800;color:#020617;letter-spacing:0.08em;">SCORE</div>
      <div style="font-size:9px;font-weight:700;color:#020617;margin-top:2px;">${audit.scoreLabel}</div>
    </div>
  </div>
</div>

<!-- ══ KPI CARDS ══ -->
<div style="padding:16px 12px 0;max-width:700px;margin:0 auto;">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
    <div style="background:#0f172a;border-radius:10px;padding:14px;border-top:3px solid #4ade80;">
      <div style="color:#64748b;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Total Inflow</div>
      <div style="color:#4ade80;font-size:18px;font-weight:800;margin-top:4px;">${ksh(audit.totalIn)}</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:14px;border-top:3px solid #ef4444;">
      <div style="color:#64748b;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Total Outflow</div>
      <div style="color:#ef4444;font-size:18px;font-weight:800;margin-top:4px;">${ksh(audit.totalOut)}</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:14px;border-top:3px solid ${netColor};">
      <div style="color:#64748b;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Net Position</div>
      <div style="color:${netColor};font-size:18px;font-weight:800;margin-top:4px;">${netSign}${ksh(audit.net)}</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:14px;border-top:3px solid ${audit.savingsRate>=10?'#4ade80':'#ef4444'};">
      <div style="color:#64748b;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Savings Rate</div>
      <div style="color:${audit.savingsRate>=10?'#4ade80':'#ef4444'};font-size:18px;font-weight:800;margin-top:4px;">${audit.savingsRate}%</div>
    </div>
  </div>

  <!-- Expense type mini-cards -->
  ${audit.totalOut > 0 ? `
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px;">
    <div style="background:#0f172a;border-radius:8px;padding:10px;border-top:2px solid #3b82f6;">
      <div style="color:#64748b;font-size:9px;font-weight:700;text-transform:uppercase;">Necessary</div>
      <div style="color:#3b82f6;font-size:13px;font-weight:800;margin-top:2px;">${ksh(audit.necessary)}</div>
      <div style="color:#475569;font-size:10px;">${expPct(audit.necessary)}% of spend</div>
    </div>
    <div style="background:#0f172a;border-radius:8px;padding:10px;border-top:2px solid #eab308;">
      <div style="color:#64748b;font-size:9px;font-weight:700;text-transform:uppercase;">Discretionary</div>
      <div style="color:#eab308;font-size:13px;font-weight:800;margin-top:2px;">${ksh(audit.discretionary)}</div>
      <div style="color:#475569;font-size:10px;">${expPct(audit.discretionary)}% of spend</div>
    </div>
    <div style="background:#0f172a;border-radius:8px;padding:10px;border-top:2px solid #ef4444;">
      <div style="color:#64748b;font-size:9px;font-weight:700;text-transform:uppercase;">Liabilities</div>
      <div style="color:#ef4444;font-size:13px;font-weight:800;margin-top:2px;">${ksh(audit.liabilities)}</div>
      <div style="color:#475569;font-size:10px;">${expPct(audit.liabilities)}% of spend</div>
    </div>
  </div>` : ''}
</div>

<div style="max-width:700px;margin:0 auto;">

<!-- ══ NARRATIVE ══ -->
<div class="section">
  <h2>📋 Auditor's Narrative</h2>
  <p style="color:#94a3b8;font-size:13px;line-height:1.75;">${audit.narrative}</p>
</div>

<!-- ══ RECOMMENDATIONS ══ -->
<div class="section">
  <h2>🎯 Recommendations for Next Month</h2>
  ${recCards || '<p style="color:#475569;">No recommendations generated.</p>'}
</div>

<!-- ══ SPENDING BREAKDOWN ══ -->
${audit.sortedSpend.length > 0 ? `
<div class="section">
  <h2>💸 Spending Breakdown</h2>
  ${spendRows}
</div>` : ''}

<!-- ══ INCOME SOURCES ══ -->
${audit.sortedIncome.length > 0 ? `
<div class="section">
  <h2>💰 Income Sources</h2>
  ${incomeRows}
</div>` : ''}

<!-- ══ OBLIGATIONS ══ -->
${audit.obligationReport.length > 0 ? `
<div class="section">
  <h2>✅ Mandatory Obligations Compliance</h2>
  <div style="overflow-x:auto;">
    <table>
      <thead><tr>
        <th>Obligation</th><th style="text-align:right;">Budgeted</th>
        <th style="text-align:right;">Paid</th><th style="text-align:right;">Variance</th>
        <th style="text-align:center;">Status</th>
      </tr></thead>
      <tbody>${obRows}</tbody>
    </table>
  </div>
  <div style="margin-top:12px;background:#020617;border-radius:8px;padding:10px 14px;display:flex;justify-content:space-between;">
    <span style="color:#64748b;font-size:12px;">Obligations met</span>
    <span style="color:#4ade80;font-weight:700;font-size:13px;">${audit.obligationsMet} / ${audit.obligationsTotal}
      &nbsp;·&nbsp; ${Math.round(audit.obligationsMet/Math.max(audit.obligationsTotal,1)*100)}% compliance</span>
  </div>
</div>` : ''}

<!-- ══ TRANSACTION LOG ══ -->
${audit.txCount > 0 ? `
<div class="section">
  <h2>📒 Transaction Log — ${audit.txCount} entries</h2>
  <div style="overflow-x:auto;">
    <table>
      <thead><tr>
        <th>Date</th><th>Description</th>
        <th class="hide-mobile">Credit (From)</th>
        <th class="hide-mobile">Debit (To)</th>
        <th style="text-align:right;">Amount</th>
      </tr></thead>
      <tbody>${txRows}</tbody>
    </table>
  </div>
  ${audit.txCount > 100 ? `<p style="color:#475569;font-size:12px;margin-top:10px;text-align:center;">
    … ${audit.txCount-100} more transactions — view full ledger in the app.</p>` : ''}
</div>` : ''}

<!-- ══ FOOTER ══ -->
<div style="text-align:center;padding:24px 16px 32px;color:#1e293b;font-size:11px;">
  Travis Guardian &nbsp;·&nbsp; Confidential Financial Audit &nbsp;·&nbsp; ${audit.month}<br>
  Generated ${generatedDate} &nbsp;·&nbsp; Source: IndexedDB (TravisGuardian_v1.0)
</div>

</div><!-- /max-width -->
</body>
</html>`;
  }

  // ─────────────────────────────────────────────────────────────
  // 8. SAVE AS HTML FILE  (no dependencies — pure Blob + <a>)
  // ─────────────────────────────────────────────────────────────

  async function saveHTMLReport(htmlString, filename) {
    const blob = new Blob([htmlString], { type: 'text/html;charset=utf-8' });

    // Try File System Access API first (desktop Chrome/Edge)
    if (window.showSaveFilePicker) {
      try {
        const handle   = await window.showSaveFilePicker({
          suggestedName: filename,
          types: [{ description: 'HTML Report', accept: { 'text/html': ['.html'] } }],
          startIn: 'documents'
        });
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        return { method: 'picker' };
      } catch (e) {
        if (e.name === 'AbortError') return { method: 'cancelled' };
      }
    }

    // Universal fallback — works on Android Chrome, iOS Safari, all browsers
    const url = URL.createObjectURL(blob);
    const a   = document.createElement('a');
    a.href     = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 3000);
    return { method: 'download' };
  }

  // ─────────────────────────────────────────────────────────────
  // 9. AUDIT MODAL
  // ─────────────────────────────────────────────────────────────

  async function showAuditModal() {
    if (document.getElementById('travis-audit-overlay')) return;

    const now        = new Date();
    const monthLabel = MONTHS[now.getMonth()] + ' ' + now.getFullYear();

    const overlay       = document.createElement('div');
    overlay.id          = 'travis-audit-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(2,6,23,0.93);backdrop-filter:blur(14px);display:flex;align-items:center;justify-content:center;z-index:99999;font-family:system-ui,sans-serif;padding:16px;';

    overlay.innerHTML = `
      <div style="background:#0f172a;border:2px solid #4ade80;box-shadow:0 0 50px rgba(74,222,128,0.2);border-radius:16px;max-width:480px;width:100%;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#020617,#0f172a);padding:24px 24px 18px;">
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px;">
            <div style="width:44px;height:44px;background:#4ade80;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">📊</div>
            <div>
              <div style="color:#4ade80;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">End-of-Month Audit</div>
              <div style="color:#f8fafc;font-size:18px;font-weight:800;">${monthLabel} Report Ready</div>
            </div>
          </div>
          <p style="color:#94a3b8;font-size:12px;line-height:1.6;margin:0;">Travis reads directly from your on-device database — no uploads, no internet needed.</p>
        </div>
        <div style="padding:18px 24px 24px;">
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:16px;">
            <div style="background:#1e293b;border-radius:8px;padding:12px 8px;text-align:center;">
              <div id="akpi-tx"    style="color:#94a3b8;font-weight:700;font-size:16px;">…</div>
              <div style="color:#475569;font-size:9px;text-transform:uppercase;letter-spacing:0.07em;margin-top:2px;">Transactions</div>
            </div>
            <div style="background:#1e293b;border-radius:8px;padding:12px 8px;text-align:center;">
              <div id="akpi-net"   style="font-weight:700;font-size:12px;color:#94a3b8;">…</div>
              <div style="color:#475569;font-size:9px;text-transform:uppercase;letter-spacing:0.07em;margin-top:2px;">Net Position</div>
            </div>
            <div style="background:#1e293b;border-radius:8px;padding:12px 8px;text-align:center;">
              <div id="akpi-score" style="font-weight:700;font-size:16px;color:#94a3b8;">…</div>
              <div style="color:#475569;font-size:9px;text-transform:uppercase;letter-spacing:0.07em;margin-top:2px;">Score</div>
            </div>
          </div>
          <button id="audit-gen-btn" style="width:100%;background:#4ade80;color:#020617;border:none;padding:15px;font-size:14px;font-weight:800;border-radius:10px;cursor:pointer;letter-spacing:0.04em;text-transform:uppercase;">
            📄 Generate &amp; Save Report
          </button>
          <div id="audit-progress" style="margin-top:12px;display:none;">
            <div style="height:5px;background:#1e293b;border-radius:3px;overflow:hidden;">
              <div id="audit-bar" style="height:100%;width:0%;background:#4ade80;border-radius:3px;transition:width 0.4s ease;"></div>
            </div>
            <p id="audit-prog-txt" style="color:#94a3b8;font-size:12px;margin-top:6px;text-align:center;">Preparing…</p>
          </div>
          <button id="audit-skip-btn" style="width:100%;background:transparent;color:#475569;border:none;padding:12px;font-size:12px;cursor:pointer;margin-top:4px;">
            Remind me in 1 hour
          </button>
        </div>
      </div>`;

    document.body.appendChild(overlay);

    // Pre-load KPI preview
    try {
      const data  = await loadAllData();
      const audit = computeAudit(data);
      document.getElementById('akpi-tx').textContent    = audit.txCount;
      const netEl = document.getElementById('akpi-net');
      netEl.textContent = (audit.net >= 0 ? '+' : '-') + ksh(audit.net);
      netEl.style.color = audit.net >= 0 ? '#4ade80' : '#ef4444';
      const scoreEl = document.getElementById('akpi-score');
      scoreEl.textContent = audit.score + '/100';
      scoreEl.style.color = audit.score>=65?'#4ade80':audit.score>=45?'#eab308':'#ef4444';
    } catch(e) {
      document.getElementById('akpi-tx').textContent = '?';
    }

    // Generate button handler
    document.getElementById('audit-gen-btn').onclick = async () => {
      const genBtn  = document.getElementById('audit-gen-btn');
      const bar     = document.getElementById('audit-bar');
      const txt     = document.getElementById('audit-prog-txt');

      genBtn.disabled    = true;
      genBtn.textContent = 'Generating…';
      document.getElementById('audit-progress').style.display = 'block';

      const step = (w, msg) => { bar.style.width = w; txt.textContent = msg; };

      try {
        step('15%', 'Opening database…');
        await new Promise(r => setTimeout(r, 150));
        step('35%', 'Reading transactions…');
        await new Promise(r => setTimeout(r, 150));

        const data  = await loadAllData();
        step('55%', `Classifying ${data.transactions.length} entries…`);
        await new Promise(r => setTimeout(r, 150));

        const audit = computeAudit(data);
        step('75%', 'Building report…');
        await new Promise(r => setTimeout(r, 150));

        const html  = buildHTMLReport(audit);
        step('90%', 'Saving file…');
        await new Promise(r => setTimeout(r, 150));

        const now      = new Date();
        const filename = `Travis-Audit-${MONTHS[now.getMonth()]}-${now.getFullYear()}.html`;
        const result   = await saveHTMLReport(html, filename);

        if (result.method === 'cancelled') {
          step('0%', 'Save cancelled.');
          genBtn.disabled    = false;
          genBtn.textContent = '📄 Generate & Save Report';
          return;
        }

        step('100%', `✓ Done — ${audit.txCount} transactions · ${ksh(audit.totalIn)} inflow · ${ksh(audit.totalOut)} outflow`);
        bar.style.background = '#4ade80';

        try { localStorage.setItem('travis_audit_done', now.getFullYear() + '-' + now.getMonth()); } catch(e) {}
        setTimeout(() => overlay.remove(), 3500);

      } catch(err) {
        bar.style.background = '#ef4444';
        txt.textContent      = 'Error: ' + (err.message || 'Unknown error');
        console.error('[TravisAudit]', err);
        genBtn.disabled    = false;
        genBtn.textContent = '📄 Try Again';
      }
    };

    document.getElementById('audit-skip-btn').onclick = () => {
      overlay.remove();
      setTimeout(checkAndTrigger, 60 * 60 * 1000);
    };
  }

  // ─────────────────────────────────────────────────────────────
  // 10. AUTO-TRIGGER  (last day of month, after 13:30)
  // ─────────────────────────────────────────────────────────────

  function checkAndTrigger() {
    const now = new Date();
    if (now.getDate() !== lastDayOfMonth()) return;
    if (!(now.getHours() > 13 || (now.getHours() === 13 && now.getMinutes() >= 30))) return;
    try { if (localStorage.getItem('travis_audit_done') === now.getFullYear() + '-' + now.getMonth()) return; } catch(e) {}
    showAuditModal();
  }

  // ─────────────────────────────────────────────────────────────
  // 11. PUBLIC API
  // ─────────────────────────────────────────────────────────────

  window.travisAudit = {
    showNow: showAuditModal,
    buildAudit: async () => { const d = await loadAllData(); return computeAudit(d); },
    generateAndSave: async () => {
      const d    = await loadAllData();
      const a    = computeAudit(d);
      const html = buildHTMLReport(a);
      const now  = new Date();
      await saveHTMLReport(html, `Travis-Audit-${MONTHS[now.getMonth()]}-${now.getFullYear()}.html`);
    }
  };

  // ─────────────────────────────────────────────────────────────
  // 12. BOOT  (polls until user data ready, max 20 attempts)
  // ─────────────────────────────────────────────────────────────

  async function boot(attempt) {
    if (attempt > 20) return;
    try {
      const db     = await openDatabase();
      const config = await getFromStore(db, 'meta', 'config');
      db.close();
      if (config && config.user) {
        checkAndTrigger();
        setInterval(checkAndTrigger, 60 * 1000);
      } else {
        setTimeout(() => boot(attempt + 1), 800);
      }
    } catch(e) {
      setTimeout(() => boot(attempt + 1), 800);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(() => boot(0), 1500));
  } else {
    setTimeout(() => boot(0), 1500);
  }

})();
