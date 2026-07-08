const _0x1e67ff = _0x6036;
(function(_0x1937b6, _0x44affc) {
    const _0x4bc9a9 = _0x6036,
        _0x1bc896 = _0x1937b6();
    while (!![]) {
        try {
            const _0x53a508 = parseInt(_0x4bc9a9(0x2ee)) / 0x1 + parseInt(_0x4bc9a9(0x1b9)) / 0x2 * (parseInt(_0x4bc9a9(0x1f9)) / 0x3) + parseInt(_0x4bc9a9(0x1cf)) / 0x4 * (parseInt(_0x4bc9a9(0x1d8)) / 0x5) + -parseInt(_0x4bc9a9(0x289)) / 0x6 * (-parseInt(_0x4bc9a9(0x3ea)) / 0x7) + -parseInt(_0x4bc9a9(0x1f2)) / 0x8 + -parseInt(_0x4bc9a9(0x406)) / 0x9 * (-parseInt(_0x4bc9a9(0x205)) / 0xa) + parseInt(_0x4bc9a9(0x279)) / 0xb * (-parseInt(_0x4bc9a9(0x304)) / 0xc);
            if (_0x53a508 === _0x44affc) break;
            else _0x1bc896['push'](_0x1bc896['shift']());
        } catch (_0x1e6fa3) {
            _0x1bc896['push'](_0x1bc896['shift']());
        }
    }
}(_0x5258, 0x4d061), function injectStyles() {
    const _0x15a840 = _0x6036;
    if (document['getElementById'](_0x15a840(0x2db))) return;
    const _0x30a565 = document[_0x15a840(0x30e)](_0x15a840(0x2cd));
    _0x30a565['id'] = _0x15a840(0x2db), _0x30a565[_0x15a840(0x38d)] = _0x15a840(0x3bc), document[_0x15a840(0x22a)][_0x15a840(0x26d)](_0x30a565);
}());
const BACKEND_URL = 'https://travis-j1w9.onrender.com';

// ============================================================
// PERSONAL FINANCE TIERS (Monthly Income Based)
// ============================================================
const WEALTH_TIERS = {
    'DESTITUTE': {
        'minMonthlyIncome': 0,
        'maxMonthlyIncome': 10000,
        'label': 'DESTITUTE',
        'displayName': '⚠️ Destitute',
        'color': '#C42B1C',
        'adviceStyle': 'survival',
        'humanDescription': 'You are in a very difficult financial situation. Basic needs are a challenge.',
        'priority': 1,
        'monthlyCapHuman': (income) => 'Your monthly income is about KSh ' + Math.floor(income).toLocaleString() + '. Very tight.',
        'bufferHuman': (income, expenses) => 'You earn KSh ' + income.toLocaleString() + ' and spend KSh ' + expenses.toLocaleString() + '. You need to increase income.'
    },
    'SURVIVAL': {
        'minMonthlyIncome': 10001,
        'maxMonthlyIncome': 30000,
        'label': 'SURVIVAL',
        'displayName': '🔶 Survival',
        'color': '#F39C12',
        'adviceStyle': 'survival',
        'humanDescription': 'You can meet basic needs but have little left over.',
        'priority': 2,
        'monthlyCapHuman': (income) => 'Your monthly income is about KSh ' + Math.floor(income).toLocaleString() + '. You can cover basics.',
        'bufferHuman': (income, expenses) => 'You earn KSh ' + income.toLocaleString() + ' and spend KSh ' + expenses.toLocaleString() + '. Look to reduce expenses.'
    },
    'STRUGGLING': {
        'minMonthlyIncome': 30001,
        'maxMonthlyIncome': 60000,
        'label': 'STRUGGLING',
        'displayName': '🟡 Struggling',
        'color': '#E67E22',
        'adviceStyle': 'conservative',
        'humanDescription': 'You can meet your needs and save a little each month.',
        'priority': 3,
        'monthlyCapHuman': (income) => 'Your monthly income is about KSh ' + Math.floor(income).toLocaleString() + '. Some room to save.',
        'bufferHuman': (income, expenses) => 'You earn KSh ' + income.toLocaleString() + ' and spend KSh ' + expenses.toLocaleString() + '. Aim to save 10-20%.'
    },
    'STABLE': {
        'minMonthlyIncome': 60001,
        'maxMonthlyIncome': 150000,
        'label': 'STABLE',
        'displayName': '🟢 Stable',
        'color': '#27AE60',
        'adviceStyle': 'balanced',
        'humanDescription': 'You have substantial disposable income and can build wealth.',
        'priority': 4,
        'monthlyCapHuman': (income) => 'Your monthly income is about KSh ' + Math.floor(income).toLocaleString() + '. Strong financial position.',
        'bufferHuman': (income, expenses) => 'You earn KSh ' + income.toLocaleString() + ' and spend KSh ' + expenses.toLocaleString() + '. Focus on investing.'
    },
    'AFFLUENT': {
        'minMonthlyIncome': 150001,
        'maxMonthlyIncome': 500000,
        'label': 'AFFLUENT',
        'displayName': '💎 Affluent',
        'color': '#8E44AD',
        'adviceStyle': 'growth',
        'humanDescription': 'You have significant wealth and multiple income streams.',
        'priority': 5,
        'monthlyCapHuman': (income) => 'Your monthly income is about KSh ' + Math.floor(income).toLocaleString() + '. Excellent position.',
        'bufferHuman': (income, expenses) => 'You earn KSh ' + income.toLocaleString() + ' and spend KSh ' + expenses.toLocaleString() + '. Focus on wealth preservation.'
    },
    'ELITE': {
        'minMonthlyIncome': 500001,
        'maxMonthlyIncome': Infinity,
        'label': 'ELITE',
        'displayName': '👑 Elite',
        'color': '#9B59B6',
        'adviceStyle': 'preservation',
        'humanDescription': 'You are in the top tier of wealth in Kenya.',
        'priority': 6,
        'monthlyCapHuman': (income) => 'Your monthly income is about KSh ' + Math.floor(income).toLocaleString() + '. Elite level.',
        'bufferHuman': (income, expenses) => 'You earn KSh ' + income.toLocaleString() + ' and spend KSh ' + expenses.toLocaleString() + '. Preserve and grow wealth.'
    }
};

// ============================================================
// BUSINESS REVENUE ALLOCATION FRAMEWORK
// ============================================================
const BUSINESS_BENCHMARKS = {
    'RETALL': {
        'cogs': 0.50,
        'operating': 0.25,
        'ownerDraw': 0.12,
        'taxReserve': 0.08,
        'reinvestment': 0.05,
        'description': 'Physical stores, kiosks, shops'
    },
    'SERVICES': {
        'cogs': 0.20,
        'operating': 0.30,
        'ownerDraw': 0.25,
        'taxReserve': 0.15,
        'reinvestment': 0.10,
        'description': 'Salons, repair shops, consulting'
    },
    'FOOD': {
        'cogs': 0.35,
        'operating': 0.30,
        'ownerDraw': 0.18,
        'taxReserve': 0.10,
        'reinvestment': 0.07,
        'description': 'Restaurants, cafes, food vendors'
    },
    'TRANSPORT': {
        'cogs': 0.40,
        'operating': 0.28,
        'ownerDraw': 0.15,
        'taxReserve': 0.10,
        'reinvestment': 0.07,
        'description': 'Logistics, delivery, matatus'
    },
    'FREELANCE': {
        'cogs': 0.08,
        'operating': 0.20,
        'ownerDraw': 0.42,
        'taxReserve': 0.20,
        'reinvestment': 0.10,
        'description': 'Freelancers, consultants, creatives'
    },
    'GENERAL': {
        'cogs': 0.35,
        'operating': 0.28,
        'ownerDraw': 0.20,
        'taxReserve': 0.10,
        'reinvestment': 0.07,
        'description': 'General business benchmark'
    }
};

// ============================================================
// KNBS BENCHMARKS (Monthly)
// ============================================================
const KNBS_BENCHMARKS = {
    'minimumWage': {
        'urban': 30000,
        'rural': 25000,
        'agricultural': 22000,
        'domestic': 18000
    },
    'povertyLine': {
        'foodPoor': 5000,
        'overallPoor': 7000,
        'extremePoor': 4000
    },
    'livingWage': {
        'urbanSingle': 48000,
        'urbanFamily': 88000,
        'ruralSingle': 32000,
        'ruralFamily': 60000
    },
    'foodBasket': {
        'dailyMinimum': 300,
        'monthlyMinimum': 9000,
        'description': 'Basic food basket (unga, sukuma, onions, tomatoes)'
    }
};

// ============================================================
// STATE & CONVERSATION MANAGEMENT
// ============================================================
let conversationState = {
    'pendingClarification': null,
    'lastResponse': null,
    'conversationHistory': [],
    'currentTopic': null
};

function setPendingClarification(intent, question, type) {
    conversationState.pendingClarification = {
        'originalIntent': intent,
        'originalQuestion': question,
        'expectedType': type,
        'timestamp': Date.now()
    };
}

function clearPendingClarification() {
    conversationState.pendingClarification = null;
}

function hasPendingClarification() {
    return conversationState.pendingClarification !== null;
}

// ============================================================
// USER TYPE DETECTION & TIER CALCULATION
// ============================================================
function getUserWealthTier(monthlyIncome, totalCash) {
    const isBusiness = state.user?.type === 'business';
    
    if (isBusiness) {
        // For businesses, use different metrics
        return getBusinessHealthTier(totalCash, monthlyIncome);
    }
    
    // Personal: Use income-based tiers
    if (totalCash < 0) {
        return {
            'name': 'DESTITUTE',
            ...WEALTH_TIERS['DESTITUTE'],
            'displayName': '⚠️ IN DEBT',
            'humanDescription': 'You are in debt by KSh ' + Math.abs(totalCash).toLocaleString()
        };
    }
    
    for (const [name, tier] of Object.entries(WEALTH_TIERS)) {
        if (monthlyIncome >= tier.minMonthlyIncome && monthlyIncome <= tier.maxMonthlyIncome) {
            return {
                'name': name,
                ...tier
            };
        }
    }
    
    return {
        'name': 'STRUGGLING',
        ...WEALTH_TIERS['STRUGGLING']
    };
}

function getBusinessHealthTier(cash, monthlyRevenue) {
    // Calculate cash runway in months
    const monthlyExpenses = getMonthlyExpenses();
    const cashRunway = monthlyExpenses > 0 ? cash / monthlyExpenses : 0;
    const profitMargin = monthlyRevenue > 0 ? (monthlyRevenue - monthlyExpenses) / monthlyRevenue : 0;
    
    if (cashRunway < 1) {
        return {
            'name': 'CRITICAL',
            'displayName': '🔴 Critical',
            'color': '#C42B1C',
            'adviceStyle': 'survival',
            'humanDescription': 'Your business has less than 1 month of cash runway. Urgent action needed.',
            'priority': 1
        };
    } else if (cashRunway < 3) {
        return {
            'name': 'STRUGGLING',
            'displayName': '🟡 Struggling',
            'color': '#F39C12',
            'adviceStyle': 'conservative',
            'humanDescription': 'Your business has ' + Math.floor(cashRunway) + ' months of cash runway. Focus on cash flow.',
            'priority': 2
        };
    } else if (cashRunway < 6) {
        return {
            'name': 'STABLE',
            'displayName': '🟢 Stable',
            'color': '#27AE60',
            'adviceStyle': 'balanced',
            'humanDescription': 'Your business has ' + Math.floor(cashRunway) + ' months of cash runway. Good position.',
            'priority': 3
        };
    } else {
        return {
            'name': 'THRIVING',
            'displayName': '💎 Thriving',
            'color': '#8E44AD',
            'adviceStyle': 'growth',
            'humanDescription': 'Your business is well-capitalized with ' + Math.floor(cashRunway) + ' months of runway.',
            'priority': 4
        };
    }
}

function getMonthlyExpenses() {
    const transactions = state.transactions || [];
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    
    let totalExpenses = 0;
    transactions.forEach(tx => {
        const txDate = new Date(tx.id);
        if (txDate >= monthStart && txDate < monthEnd) {
            // Check if it's an expense (credit account is an expense account)
            const expenseAccounts = ['Rent', 'Payroll', 'Utilities', 'Food & Groceries', 'Transport', 
                                    'School', 'Medical', 'Office Supplies', 'Marketing', 'Travel', 
                                    'Professional Fees', 'Tax', 'Insurance', 'Clothes', 
                                    'Travel & Entertainment', 'Other Fun Spending'];
            if (expenseAccounts.includes(tx.credit)) {
                totalExpenses += tx.amount;
            }
        }
    });
    return totalExpenses;
}

function getMonthlyRevenue() {
    const transactions = state.transactions || [];
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    
    let totalRevenue = 0;
    transactions.forEach(tx => {
        const txDate = new Date(tx.id);
        if (txDate >= monthStart && txDate < monthEnd) {
            // Check if it's income (debit account is an income account)
            const incomeAccounts = ['Salary', 'M-Pesa', 'Cash', 'Bank Account', 'Sales Revenue', 
                                   'Service Revenue', 'Other Revenue', 'Side Hustle', 'Allowance'];
            if (incomeAccounts.includes(tx.debit)) {
                totalRevenue += tx.amount;
            }
        }
    });
    return totalRevenue;
}

// ============================================================
// HUMAN READABLE STATUS FUNCTIONS
// ============================================================
function humanReadableStatus(cash, dailyCap, daysRem, tier) {
    const isBusiness = state.user?.type === 'business';
    
    if (isBusiness) {
        return humanReadableBusinessStatus(cash);
    }
    
    // Personal: Use the 50/30/20 framework
    return humanReadablePersonalStatus(cash, dailyCap, daysRem, tier);
}

function humanReadablePersonalStatus(cash, dailyCap, daysRem, tier) {
    const monthlyIncome = getMonthlyIncome();
    const monthlyExpenses = getMonthlyExpenses();
    const savings = monthlyIncome - monthlyExpenses;
    
    let needs = monthlyIncome * 0.5;
    let wants = monthlyIncome * 0.3;
    let savingsAllocation = monthlyIncome * 0.2;
    
    if (tier.adviceStyle === 'survival') {
        needs = monthlyIncome * 0.7;
        wants = monthlyIncome * 0.15;
        savingsAllocation = monthlyIncome * 0.15;
    } else if (tier.adviceStyle === 'conservative') {
        needs = monthlyIncome * 0.6;
        wants = monthlyIncome * 0.25;
        savingsAllocation = monthlyIncome * 0.15;
    } else if (tier.adviceStyle === 'balanced') {
        needs = monthlyIncome * 0.5;
        wants = monthlyIncome * 0.3;
        savingsAllocation = monthlyIncome * 0.2;
    } else if (tier.adviceStyle === 'growth') {
        needs = monthlyIncome * 0.45;
        wants = monthlyIncome * 0.25;
        savingsAllocation = monthlyIncome * 0.3;
    }
    
    let status = '📊 Monthly Financial Report:\n';
    status += '━━━━━━━━━━━━━━━━━━━━━━━\n';
    status += '💰 Income: KSh ' + Math.floor(monthlyIncome).toLocaleString() + '\n';
    status += '💸 Expenses: KSh ' + Math.floor(monthlyExpenses).toLocaleString() + '\n';
    status += '💾 Savings: KSh ' + Math.floor(savings).toLocaleString() + '\n';
    status += '\n';
    status += '📋 50/30/20 Allocation:\n';
    status += '├── Needs (50%): KSh ' + Math.floor(needs).toLocaleString() + '\n';
    status += '├── Wants (30%): KSh ' + Math.floor(wants).toLocaleString() + '\n';
    status += '└── Savings (20%): KSh ' + Math.floor(savingsAllocation).toLocaleString() + '\n';
    status += '\n';
    status += '💡 Advice: ' + tier.humanDescription;
    
    return status;
}

function humanReadableBusinessStatus(cash) {
    const monthlyRevenue = getMonthlyRevenue();
    const monthlyExpenses = getMonthlyExpenses();
    const cashRunway = monthlyExpenses > 0 ? cash / monthlyExpenses : 0;
    const profit = monthlyRevenue - monthlyExpenses;
    const profitMargin = monthlyRevenue > 0 ? (profit / monthlyRevenue) * 100 : 0;
    
    let status = '📊 Business Monthly Report:\n';
    status += '━━━━━━━━━━━━━━━━━━━━━━━\n';
    status += '💰 Revenue: KSh ' + Math.floor(monthlyRevenue).toLocaleString() + '\n';
    status += '💸 Expenses: KSh ' + Math.floor(monthlyExpenses).toLocaleString() + '\n';
    status += '💾 Profit: KSh ' + Math.floor(profit).toLocaleString() + '\n';
    status += '📈 Profit Margin: ' + profitMargin.toFixed(1) + '%\n';
    status += '⏳ Cash Runway: ' + Math.floor(cashRunway) + ' months\n';
    
    if (cashRunway < 1) {
        status += '\n🔴 CRITICAL: Less than 1 month of cash runway.';
    } else if (cashRunway < 3) {
        status += '\n🟡 WARNING: Only ' + Math.floor(cashRunway) + ' months of cash runway.';
    } else if (cashRunway < 6) {
        status += '\n🟢 OK: ' + Math.floor(cashRunway) + ' months of cash runway.';
    } else {
        status += '\n💎 EXCELLENT: ' + Math.floor(cashRunway) + ' months of cash runway.';
    }
    
    return status;
}

function getMonthlyIncome() {
    const transactions = state.transactions || [];
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    
    let totalIncome = 0;
    transactions.forEach(tx => {
        const txDate = new Date(tx.id);
        if (txDate >= monthStart && txDate < monthEnd) {
            const incomeAccounts = ['Salary', 'M-Pesa', 'Cash', 'Bank Account', 'Sales Revenue', 
                                   'Service Revenue', 'Other Revenue', 'Side Hustle', 'Allowance'];
            if (incomeAccounts.includes(tx.debit)) {
                totalIncome += tx.amount;
            }
        }
    });
    return totalIncome;
}

// ============================================================
// UPDATE FUNCTIONS
// ============================================================
function updateClock() {
    const now = new Date();
    document.getElementById('clock-time').textContent = now.toLocaleTimeString('en-KE', {
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById('clock-date').textContent = now.toLocaleDateString('en-KE', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    });
}
setInterval(updateClock, 1000);
updateClock();

function toggleMobileSidebar() {
    const sidebar = document.getElementById('nav-sidebar');
    sidebar.classList.toggle('mobile-open');
}

function showCustomAlert(message, callback = null) {
    const alert = document.getElementById('custom-alert');
    const messageEl = document.getElementById('custom-alert-message');
    const okBtn = document.getElementById('custom-alert-ok');
    messageEl.textContent = message;
    alert.style.display = 'flex';
    const newOk = okBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOk, okBtn);
    newOk.addEventListener('click', () => {
        alert.style.display = 'none';
        if (callback) callback();
    });
}

// ============================================================
// TRANSACTION FUNCTIONS
// ============================================================
function showTxModal() {
    // Remove any existing modal
    const existingModal = document.getElementById('custom-tx-modal');
    if (existingModal) {
        existingModal.parentNode.removeChild(existingModal);
    }
    
    const isBusiness = state.user?.type === 'business';
    
    // Build account options
    let debitOptions = '';
    let creditOptions = '';
    
    if (isBusiness) {
        debitOptions = `
            <optgroup label="REVENUE">
                <option value="Sales Revenue">Sales Revenue</option>
                <option value="Service Revenue">Service Revenue</option>
                <option value="Other Revenue">Other Revenue</option>
            </optgroup>
            <optgroup label="ASSETS">
                <option value="Cash">Cash</option>
                <option value="Bank / M-Pesa">Bank / M-Pesa</option>
                <option value="Accounts Receivable">Accounts Receivable</option>
            </optgroup>
        `;
        creditOptions = `
            <optgroup label="OPERATING EXPENSES">
                <option value="Rent">Rent</option>
                <option value="Payroll">Payroll</option>
                <option value="Utilities">Utilities</option>
                <option value="Office Supplies">Office Supplies</option>
                <option value="Marketing">Marketing</option>
                <option value="Travel">Travel</option>
                <option value="Insurance">Insurance</option>
                <option value="Tax">Tax</option>
            </optgroup>
            <optgroup label="LIABILITIES">
                <option value="Loan Repayment">Loan Repayment</option>
                <option value="Accounts Payable">Accounts Payable</option>
            </optgroup>
            <optgroup label="OWNER">
                <option value="Owner's Draw">Owner's Draw</option>
                <option value="Tax Reserve">Tax Reserve</option>
                <option value="Reinvestment">Reinvestment</option>
            </optgroup>
        `;
    } else {
        debitOptions = `
            <optgroup label="INCOME">
                <option value="Salary">Salary</option>
                <option value="M-Pesa">M-Pesa</option>
                <option value="Cash">Cash</option>
                <option value="Bank Account">Bank Account</option>
                <option value="Side Hustle">Side Hustle</option>
                <option value="Allowance">Allowance</option>
            </optgroup>
        `;
        creditOptions = `
            <optgroup label="NECESSARY EXPENSES (50%)">
                <option value="Rent">Rent</option>
                <option value="Food & Groceries">Food & Groceries</option>
                <option value="Transport">Transport</option>
                <option value="School">School</option>
                <option value="Medical">Medical</option>
                <option value="Utilities">Utilities</option>
            </optgroup>
            <optgroup label="WANTS (30%)">
                <option value="Travel & Entertainment">Travel & Entertainment</option>
                <option value="Clothes">Clothes</option>
                <option value="Other Fun Spending">Other Fun Spending</option>
            </optgroup>
            <optgroup label="SAVINGS/DEBT (20%)">
                <option value="Savings">Savings</option>
                <option value="Loan Repayment">Loan Repayment</option>
                <option value="Emergency Fund">Emergency Fund</option>
                <option value="Investment">Investment</option>
            </optgroup>
        `;
    }
    
    const modalHTML = `
        <div id="custom-tx-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:99999;animation:fadeIn 0.2s ease;">
            <div style="background:white;border-radius:16px;max-width:520px;width:95%;max-height:90vh;overflow-y:auto;box-shadow:0 25px 60px rgba(0,0,0,0.3);padding:0;animation:slideUp 0.3s ease;">
                <div style="background:linear-gradient(135deg,#0078D4,#005A9E);padding:20px 24px;border-radius:16px 16px 0 0;display:flex;justify-content:space-between;align-items:center;">
                    <div>
                        <h3 style="margin:0;color:white;font-size:18px;font-weight:600;">${isBusiness ? '💼 Business' : '💰 Personal'} Transaction</h3>
                        <div style="color:rgba(255,255,255,0.7);font-size:12px;margin-top:2px;">${isBusiness ? 'Record business revenue or expense' : 'Record your monthly income or expense'}</div>
                    </div>
                    <button onclick="closeCustomTxModal()" style="background:rgba(255,255,255,0.2);border:none;color:white;font-size:24px;cursor:pointer;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">✕</button>
                </div>
                <div style="padding:24px;">
                    <div style="margin-bottom:14px;">
                        <label style="display:block;font-size:13px;font-weight:600;color:#333;margin-bottom:5px;">From (Income/Asset)</label>
                        <select id="custom-tx-debit" style="width:100%;padding:10px 12px;border:2px solid #e0e0e0;border-radius:8px;font-size:14px;font-family:inherit;background:white;outline:none;transition:border-color 0.2s;" onfocus="this.style.borderColor='#0078D4'" onblur="this.style.borderColor='#e0e0e0'">
                            ${debitOptions}
                        </select>
                    </div>
                    <div style="margin-bottom:14px;">
                        <label style="display:block;font-size:13px;font-weight:600;color:#333;margin-bottom:5px;">To (Expense/Asset)</label>
                        <select id="custom-tx-credit" style="width:100%;padding:10px 12px;border:2px solid #e0e0e0;border-radius:8px;font-size:14px;font-family:inherit;background:white;outline:none;transition:border-color 0.2s;" onfocus="this.style.borderColor='#0078D4'" onblur="this.style.borderColor='#e0e0e0'">
                            ${creditOptions}
                        </select>
                    </div>
                    <div style="margin-bottom:14px;">
                        <label style="display:block;font-size:13px;font-weight:600;color:#333;margin-bottom:5px;">Amount (KSh)</label>
                        <input id="custom-tx-amount" type="number" step="1" min="1" placeholder="Enter amount..." style="width:100%;padding:10px 12px;border:2px solid #e0e0e0;border-radius:8px;font-size:16px;font-family:inherit;outline:none;transition:border-color 0.2s;" onfocus="this.style.borderColor='#0078D4'" onblur="this.style.borderColor='#e0e0e0'">
                    </div>
                    <div style="margin-bottom:20px;">
                        <label style="display:block;font-size:13px;font-weight:600;color:#333;margin-bottom:5px;">Description (optional)</label>
                        <input id="custom-tx-desc" type="text" placeholder="${isBusiness ? 'e.g., Monthly sales, Stock purchase...' : 'e.g., Salary, Rent payment...'}" style="width:100%;padding:10px 12px;border:2px solid #e0e0e0;border-radius:8px;font-size:14px;font-family:inherit;outline:none;transition:border-color 0.2s;" onfocus="this.style.borderColor='#0078D4'" onblur="this.style.borderColor='#e0e0e0'">
                    </div>
                    <div style="display:flex;gap:10px;">
                        <button onclick="closeCustomTxModal()" style="flex:1;padding:12px;border:2px solid #e0e0e0;border-radius:8px;background:white;color:#555;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.2s;font-family:inherit;" onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='white'">Cancel</button>
                        <button id="custom-tx-submit" onclick="submitCustomTx()" style="flex:2;padding:12px;border:none;border-radius:8px;background:linear-gradient(135deg,#0078D4,#005A9E);color:white;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.2s;font-family:inherit;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">📝 Post to Ledger</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = modalHTML;
    document.body.appendChild(wrapper.firstElementChild);
    
    setTimeout(() => {
        const amountField = document.getElementById('custom-tx-amount');
        if (amountField) amountField.focus();
    }, 100);
    
    document.getElementById('custom-tx-amount').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') submitCustomTx();
    });
    document.getElementById('custom-tx-desc').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') submitCustomTx();
    });
}

function closeCustomTxModal() {
    const modal = document.getElementById('custom-tx-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.2s ease';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 200);
    }
}

async function submitCustomTx() {
    const amount = parseFloat(document.getElementById('custom-tx-amount').value);
    const debit = document.getElementById('custom-tx-debit').value;
    const credit = document.getElementById('custom-tx-credit').value;
    const desc = document.getElementById('custom-tx-desc').value || 'Transaction';
    
    if (debit === credit) {
        showCustomAlert('❌ Error: From and To accounts must be different.');
        return;
    }
    
    if (isNaN(amount) || amount <= 0) {
        showCustomAlert('❌ Error: Please enter a valid amount.');
        return;
    }
    
    const submitBtn = document.getElementById('custom-tx-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Recording...';
    submitBtn.style.opacity = '0.7';
    
    try {
        const transaction = {
            'id': Date.now(),
            'debit': debit,
            'credit': credit,
            'amount': amount,
            'desc': desc
        };
        
        state.transactions.push(transaction);
        await saveData('tx', transaction);
        
        if (typeof saveBackup === 'function') {
            await saveBackup();
            if (!backupDirHandle) await setupBackupFolder();
        }
        
        if (typeof travisNotif !== 'undefined' && travisNotif.refresh) {
            travisNotif.refresh();
        }
        
        closeCustomTxModal();
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        submitBtn.style.opacity = '1';
        
        // Refresh the UI
        const finance = getFin();
        updateHeader(finance);
        
        const activeNav = document.querySelector('.nav-item.active');
        if (activeNav) {
            const navId = activeNav.id.replace('nav-', '');
            nav(navId);
        } else {
            nav('dash');
        }
        
        showCustomAlert('✅ Transaction recorded successfully!');
        
    } catch (error) {
        console.error('Transaction error:', error);
        showCustomAlert('❌ Error: Could not save transaction. Please try again.');
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        submitBtn.style.opacity = '1';
    }
}

// ============================================================
// NAVIGATION & UI UPDATES
// ============================================================
function navClick(view) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const navItem = document.getElementById('nav-' + view);
    if (navItem) navItem.classList.add('active');
    document.querySelectorAll('.taskbar-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('nav-sidebar').classList.remove('mobile-open');
    nav(view);
}

function nav(view) {
    const content = document.getElementById('app-content');
    const finance = getFin();
    updateHeader(finance);
    
    if (view === 'dash') {
        renderDashboard(finance);
    } else if (view === 'obs') {
        renderObligations(finance);
    } else if (view === 'ask') {
        renderAskView();
    } else if (view === 'ledger') {
        renderLedger(finance);
    } else if (view === 'settings') {
        renderSettings(finance);
    }
}

function renderDashboard(finance) {
    const isBusiness = state.user?.type === 'business';
    const content = document.getElementById('app-content');
    const tier = getUserWealthTier(finance.monthlyIncome || getMonthlyIncome(), finance.safeCash);
    
    let html = `
        <div class="dashboard-grid">
            <div class="win-card">
                <div class="win-card-header">
                    <div class="win-card-title">${isBusiness ? 'Business Health' : 'Financial Health'}</div>
                    <span class="chip" style="background:${tier.color};color:white;">${tier.displayName}</span>
                </div>
                <div class="win-card-body">
                    <div style="font-size:13px;margin-bottom:12px;">${tier.humanDescription}</div>
                    <div style="font-size:12px;color:var(--win-text-3);">
                        ${isBusiness ? getBusinessMetricsHTML(finance) : getPersonalMetricsHTML(finance)}
                    </div>
                </div>
            </div>
            
            <div class="win-card">
                <div class="win-card-header">
                    <div class="win-card-title">📋 Monthly Summary</div>
                </div>
                <div class="win-card-body">
                    ${isBusiness ? getBusinessSummaryHTML(finance) : getPersonalSummaryHTML(finance)}
                </div>
            </div>
            
            <div class="win-card" style="min-height:340px;">
                <div class="win-card-header">
                    <div class="win-card-title">📊 Spending Trend</div>
                    <div style="font-size:11px;color:var(--win-text-3);">Last 7 days</div>
                </div>
                <div class="win-card-body" style="height:300px;">
                    <canvas id="analyticsChart"></canvas>
                </div>
            </div>
        </div>
    `;
    
    content.innerHTML = html;
    setTimeout(() => renderChart(), 100);
}

function getPersonalMetricsHTML(finance) {
    const monthlyIncome = getMonthlyIncome();
    const monthlyExpenses = getMonthlyExpenses();
    const savings = monthlyIncome - monthlyExpenses;
    const savingsRate = monthlyIncome > 0 ? (savings / monthlyIncome) * 100 : 0;
    
    return `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div><strong>Monthly Income:</strong> KSh ${Math.floor(monthlyIncome).toLocaleString()}</div>
            <div><strong>Monthly Expenses:</strong> KSh ${Math.floor(monthlyExpenses).toLocaleString()}</div>
            <div><strong>Monthly Savings:</strong> KSh ${Math.floor(savings).toLocaleString()}</div>
            <div><strong>Savings Rate:</strong> ${savingsRate.toFixed(1)}%</div>
            <div style="grid-column:span 2;"><strong>Cash Reserve:</strong> KSh ${Math.floor(finance.safeCash).toLocaleString()}</div>
        </div>
    `;
}

function getBusinessMetricsHTML(finance) {
    const monthlyRevenue = getMonthlyRevenue();
    const monthlyExpenses = getMonthlyExpenses();
    const profit = monthlyRevenue - monthlyExpenses;
    const profitMargin = monthlyRevenue > 0 ? (profit / monthlyRevenue) * 100 : 0;
    const cashRunway = monthlyExpenses > 0 ? finance.safeCash / monthlyExpenses : 0;
    
    return `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div><strong>Revenue:</strong> KSh ${Math.floor(monthlyRevenue).toLocaleString()}</div>
            <div><strong>Expenses:</strong> KSh ${Math.floor(monthlyExpenses).toLocaleString()}</div>
            <div><strong>Profit:</strong> KSh ${Math.floor(profit).toLocaleString()}</div>
            <div><strong>Profit Margin:</strong> ${profitMargin.toFixed(1)}%</div>
            <div style="grid-column:span 2;"><strong>Cash Runway:</strong> ${cashRunway.toFixed(1)} months</div>
        </div>
    `;
}

function getPersonalSummaryHTML(finance) {
    const monthlyIncome = getMonthlyIncome();
    const monthlyExpenses = getMonthlyExpenses();
    const savings = monthlyIncome - monthlyExpenses;
    
    const needs = monthlyIncome * 0.5;
    const wants = monthlyIncome * 0.3;
    const savingsAlloc = monthlyIncome * 0.2;
    
    return `
        <div style="font-size:13px;">
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--win-border);">
                <span>💰 Income</span>
                <span style="font-weight:600;">KSh ${Math.floor(monthlyIncome).toLocaleString()}</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--win-border);">
                <span>💸 Expenses</span>
                <span style="font-weight:600;">KSh ${Math.floor(monthlyExpenses).toLocaleString()}</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--win-border);">
                <span>💾 Savings</span>
                <span style="font-weight:600;color:#27AE60;">KSh ${Math.floor(savings).toLocaleString()}</span>
            </div>
            <div style="margin-top:12px;padding:12px;background:#f8f9fa;border-radius:8px;font-size:12px;">
                <div style="font-weight:600;margin-bottom:6px;">📋 50/30/20 Rule</div>
                <div>Needs (50%): KSh ${Math.floor(needs).toLocaleString()}</div>
                <div>Wants (30%): KSh ${Math.floor(wants).toLocaleString()}</div>
                <div>Savings (20%): KSh ${Math.floor(savingsAlloc).toLocaleString()}</div>
            </div>
        </div>
    `;
}

function getBusinessSummaryHTML(finance) {
    const monthlyRevenue = getMonthlyRevenue();
    const monthlyExpenses = getMonthlyExpenses();
    const profit = monthlyRevenue - monthlyExpenses;
    const profitMargin = monthlyRevenue > 0 ? (profit / monthlyRevenue) * 100 : 0;
    const cashRunway = monthlyExpenses > 0 ? finance.safeCash / monthlyExpenses : 0;
    
    return `
        <div style="font-size:13px;">
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--win-border);">
                <span>💰 Revenue</span>
                <span style="font-weight:600;">KSh ${Math.floor(monthlyRevenue).toLocaleString()}</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--win-border);">
                <span>💸 Operating Costs</span>
                <span style="font-weight:600;">KSh ${Math.floor(monthlyExpenses).toLocaleString()}</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--win-border);">
                <span>💾 Profit</span>
                <span style="font-weight:600;color:${profit >= 0 ? '#27AE60' : '#C42B1C'};">KSh ${Math.floor(profit).toLocaleString()}</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--win-border);">
                <span>📈 Profit Margin</span>
                <span style="font-weight:600;">${profitMargin.toFixed(1)}%</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:6px 0;">
                <span>⏳ Cash Runway</span>
                <span style="font-weight:600;">${cashRunway.toFixed(1)} months</span>
            </div>
        </div>
    `;
}

function renderObligations(finance) {
    const content = document.getElementById('app-content');
    let html = `
        <div class="win-card">
            <div class="win-card-header">
                <div class="win-card-title">${state.user?.type === 'business' ? 'Business Expenses' : 'Monthly Bills'}</div>
                <button onclick="document.getElementById('setup-overlay').classList.remove('hidden')" class="btn-secondary" style="font-size:11px;padding:5px 10px;">Edit List</button>
            </div>
            <div>
    `;
    
    const obs = finance.obsStatus || [];
    if (obs.length === 0) {
        html += `<div style="padding:24px;text-align:center;color:var(--win-text-3);">No bills configured. Add rent, school fees, loans, etc.</div>`;
    } else {
        obs.forEach(ob => {
            html += `
                <div class="obs-row">
                    <div>
                        <div style="font-size:13px;font-weight:600;">${ob.label}</div>
                        <div style="font-size:11px;color:var(--win-text-3);">Budget: KSh ${ob.amount.toLocaleString()} · Paid: KSh ${ob.paid.toLocaleString()}</div>
                        <div style="margin-top:6px;">
                            <div class="progress-track" style="height:4px;width:120px;">
                                <div class="progress-fill" style="width:${Math.min(100, (ob.paid / ob.amount) * 100)}%;background:${ob.pending <= 0 ? '#107C10' : '#f60'};"></div>
                            </div>
                        </div>
                    </div>
                    <div style="text-align:right;">
                        ${ob.pending <= 0 ? '<span class="chip chip-green">✓ Settled</span>' : `<div style="font-size:14px;font-weight:700;color:var(--win-yellow);">KSh ${ob.pending.toLocaleString()} remaining</div>`}
                        ${ob.variance > 0 ? `<div style="font-size:10px;color:var(--win-red);font-weight:700;margin-top:2px;">+KSh ${ob.variance.toLocaleString()} over</div>` : ''}
                    </div>
                </div>
            `;
        });
    }
    
    html += `
            </div>
            <div style="padding:16px;border-top:1px solid var(--win-border);">
                <button onclick="factoryReset()" style="font-size:11px;color:var(--win-red);background:none;border:none;cursor:pointer;font-family:inherit;">Reset All Data</button>
            </div>
        </div>
    `;
    content.innerHTML = html;
}

function renderAskView() {
    const content = document.getElementById('app-content');
    content.innerHTML = `
        <div class="win-card" style="height:520px;display:flex;flex-direction:column;">
            <div class="win-card-header" style="flex-shrink:0;">
                <div style="display:flex;align-items:center;gap:10px;">
                    <div style="width:32px;height:32px;background:linear-gradient(135deg,#0078D4,#005A9E);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;">🤖</div>
                    <div>
                        <div class="win-card-title">Travis - Your Financial Advisor</div>
                        <div class="win-card-sub">Powered by KNBS Kenya Data</div>
                    </div>
                </div>
                <span class="chip chip-green" style="font-size:10px;">● Online</span>
            </div>
            <div id="chat-box" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:var(--win-bg);">
                <div class="travis-label"><span>🤖</span> Travis</div>
                <div class="chat-bubble-ai" style="font-size:13px;">
                    Habari. I'm Travis. I analyze your finances and give you straight talk.
                    ${state.user?.type === 'business' ? 
                        'I help you manage your business cash flow, expenses, and financial health.' :
                        'Ask me anything about your money - spending, saving, or financial decisions.'}
                </div>
            </div>
            <div style="padding:10px 14px;border-top:1px solid var(--win-border);background:white;display:flex;gap:8px;align-items:center;">
                <input id="chat-input" type="text" placeholder="Ask me anything..." class="win-input" style="flex:1;">
                <button onclick="handleAsk()" class="btn-accent" style="padding:9px 18px;font-size:13px;">Send ↗</button>
            </div>
        </div>
    `;
    document.getElementById('chat-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAsk();
    });
}

function renderLedger(finance) {
    const content = document.getElementById('app-content');
    let rows = '';
    
    const sortedTx = [...(state.transactions || [])].sort((a, b) => b.id - a.id);
    
    if (sortedTx.length === 0) {
        rows = `<tr><td colspan="4" style="padding:32px;text-align:center;color:var(--win-text-3);">No transactions recorded yet.</td></tr>`;
    } else {
        sortedTx.forEach(tx => {
            const date = new Date(tx.id);
            rows += `
                <tr>
                    <td style="font-family:monospace;font-size:11px;color:var(--win-text-3);white-space:nowrap;">
                        ${date.toLocaleDateString('en-KE')}
                        <div style="font-size:10px;">${date.toLocaleTimeString('en-KE')}</div>
                    </td>
                    <td>
                        <div style="font-size:13px;font-weight:500;">${tx.desc}</div>
                        <div style="display:flex;gap:6px;margin-top:4px;">
                            <span class="chip chip-green" style="font-size:10px;">${tx.debit}</span>
                            <span style="color:var(--win-text-3);font-size:10px;">→</span>
                            <span class="chip chip-red" style="font-size:10px;">${tx.credit}</span>
                        </div>
                    </td>
                    <td style="text-align:right;font-family:monospace;color:var(--win-green);font-weight:600;white-space:nowrap;">+KSh ${tx.amount.toLocaleString()}</td>
                    <td style="text-align:right;font-family:monospace;color:var(--win-red);font-weight:600;white-space:nowrap;">-KSh ${tx.amount.toLocaleString()}</td>
                </tr>
            `;
        });
    }
    
    content.innerHTML = `
        <div class="win-card">
            <div class="win-card-header">
                <div class="win-card-title">General Ledger</div>
                <div style="font-size:11px;color:var(--win-text-3);">${sortedTx.length} entries</div>
            </div>
            <div style="overflow-x:auto;">
                <table class="win-table" style="min-width:600px;">
                    <thead><tr><th>Date</th><th>Transaction</th><th style="text-align:right;">Debit (+)</th><th style="text-align:right;">Credit (-)</th></tr></thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderSettings(finance) {
    const content = document.getElementById('app-content');
    const isBusiness = state.user?.type === 'business';
    const tier = getUserWealthTier(finance.monthlyIncome || getMonthlyIncome(), finance.safeCash);
    
    content.innerHTML = `
        <div class="win-card">
            <div class="win-card-header"><div class="win-card-title">Settings</div></div>
            <div class="win-card-body" style="display:grid;gap:12px;">
                <div class="setup-step">
                    <div class="setup-step-title">👤 Your Profile</div>
                    <div style="font-size:13px;color:var(--win-text-2);">
                        Name: <strong>${state.user?.name || '—'}</strong>
                    </div>
                    <div style="font-size:13px;color:var(--win-text-2);margin-top:4px;">
                        Type: <strong style="text-transform:capitalize;">${state.user?.type || '—'}</strong>
                    </div>
                    <div style="font-size:13px;color:var(--win-text-2);margin-top:4px;">
                        Wealth Level: <strong style="color:${tier.color};">${tier.displayName}</strong>
                    </div>
                </div>
                <div class="setup-step">
                    <div class="setup-step-title">🗂 Backup & Data</div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;">
                        <button onclick="setupBackupFolder()" class="btn-primary">Setup Backup Folder</button>
                        <button onclick="saveBackup()" class="btn-secondary">Save Backup Now</button>
                        <button onclick="factoryReset()" class="btn-secondary" style="color:var(--win-red);border-color:rgba(196,43,28,0.3);">Factory Reset</button>
                    </div>
                </div>
                <div class="setup-step">
                    <div class="setup-step-title">📊 Monthly Report</div>
                    <div style="font-size:13px;color:var(--win-text-2);margin-bottom:8px;">Auto-generates at month end. You can also generate manually.</div>
                    <button onclick="window.travisAudit && window.travisAudit.showNow()" class="btn-primary">Generate Report Now</button>
                </div>
            </div>
        </div>
    `;
}

function renderChart() {
    const canvas = document.getElementById('analyticsChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const finance = getFin();
    const now = new Date();
    let labels = [];
    let incomeData = [];
    let expenseData = [];
    let balanceData = [];
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(now.getDate() - i);
        labels.push(date.toLocaleDateString('en-KE', { weekday: 'short' }));
        
        let income = 0;
        let expenses = 0;
        
        state.transactions.forEach(tx => {
            const txDate = new Date(tx.id);
            if (txDate.toDateString() === date.toDateString()) {
                const incomeAccounts = ['Salary', 'M-Pesa', 'Cash', 'Bank Account', 'Sales Revenue', 'Service Revenue', 'Other Revenue', 'Side Hustle', 'Allowance'];
                const expenseAccounts = ['Rent', 'Payroll', 'Utilities', 'Food & Groceries', 'Transport', 'School', 'Medical', 'Office Supplies', 'Marketing', 'Travel', 'Professional Fees', 'Tax', 'Insurance', 'Clothes', 'Travel & Entertainment', 'Other Fun Spending', 'Owner\'s Draw', 'Tax Reserve', 'Reinvestment'];
                
                if (incomeAccounts.includes(tx.debit)) income += tx.amount;
                if (expenseAccounts.includes(tx.credit)) expenses += tx.amount;
            }
        });
        
        incomeData.push(income);
        expenseData.push(expenses);
        balanceData.push(income - expenses);
    }
    
    if (window.travisChart) window.travisChart.destroy();
    
    window.travisChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Income',
                    data: incomeData,
                    borderColor: '#107C10',
                    backgroundColor: 'rgba(16,124,16,0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 3,
                    pointBackgroundColor: '#107C10'
                },
                {
                    label: 'Expenses',
                    data: expenseData,
                    borderColor: '#C42B1C',
                    backgroundColor: 'rgba(196,43,28,0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 3,
                    pointBackgroundColor: '#C42B1C'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#5a5a5a',
                        font: { size: 11, family: 'Segoe UI' },
                        boxWidth: 14
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(0,0,0,0.04)' },
                    ticks: { color: '#8a8a8a', font: { size: 10 } }
                },
                y: {
                    grid: { color: 'rgba(0,0,0,0.04)' },
                    ticks: { color: '#8a8a8a', font: { size: 10 } },
                    beginAtZero: true
                }
            }
        }
    });
}

function updateHeader(finance) {
    const metrics = document.getElementById('dashboard-grid');
    if (!metrics) return;
    
    const isBusiness = state.user?.type === 'business';
    const tier = getUserWealthTier(finance.monthlyIncome || getMonthlyIncome(), finance.safeCash);
    const monthlyIncome = getMonthlyIncome();
    const monthlyExpenses = getMonthlyExpenses();
    const savings = monthlyIncome - monthlyExpenses;
    
    let html = '';
    
    if (isBusiness) {
        const profit = monthlyIncome - monthlyExpenses;
        const profitMargin = monthlyIncome > 0 ? (profit / monthlyIncome) * 100 : 0;
        const cashRunway = monthlyExpenses > 0 ? finance.safeCash / monthlyExpenses : 0;
        
        html = `
            <div class="metric-card"><div class="metric-accent" style="background:#0078D4;"></div><div class="metric-label">💰 Revenue</div><div class="metric-value">KSh ${Math.floor(monthlyIncome).toLocaleString()}</div></div>
            <div class="metric-card"><div class="metric-accent" style="background:#C42B1C;"></div><div class="metric-label">💸 Expenses</div><div class="metric-value">KSh ${Math.floor(monthlyExpenses).toLocaleString()}</div></div>
            <div class="metric-card"><div class="metric-accent" style="background:${profit >= 0 ? '#107C10' : '#C42B1C'};"></div><div class="metric-label">💾 Profit</div><div class="metric-value">KSh ${Math.floor(profit).toLocaleString()}</div></div>
            <div class="metric-card"><div class="metric-accent" style="background:${tier.color};"></div><div class="metric-label">⏳ Runway</div><div class="metric-value">${cashRunway.toFixed(1)} months</div></div>
            <div class="metric-card"><div class="metric-accent" style="background:#8E44AD;"></div><div class="metric-label">📈 Margin</div><div class="metric-value">${profitMargin.toFixed(1)}%</div></div>
        `;
    } else {
        const savingsRate = monthlyIncome > 0 ? (savings / monthlyIncome) * 100 : 0;
        const needs = monthlyIncome * 0.5;
        const wants = monthlyIncome * 0.3;
        const savingsAlloc = monthlyIncome * 0.2;
        
        html = `
            <div class="metric-card"><div class="metric-accent" style="background:#107C10;"></div><div class="metric-label">💰 Income</div><div class="metric-value">KSh ${Math.floor(monthlyIncome).toLocaleString()}</div></div>
            <div class="metric-card"><div class="metric-accent" style="background:#C42B1C;"></div><div class="metric-label">💸 Expenses</div><div class="metric-value">KSh ${Math.floor(monthlyExpenses).toLocaleString()}</div></div>
            <div class="metric-card"><div class="metric-accent" style="background:#27AE60;"></div><div class="metric-label">💾 Savings</div><div class="metric-value">KSh ${Math.floor(savings).toLocaleString()}</div></div>
            <div class="metric-card"><div class="metric-accent" style="background:${tier.color};"></div><div class="metric-label">📈 Savings Rate</div><div class="metric-value">${savingsRate.toFixed(1)}%</div></div>
            <div class="metric-card"><div class="metric-accent" style="background:#8E44AD;"></div><div class="metric-label">💰 Reserve</div><div class="metric-value">KSh ${Math.floor(finance.safeCash).toLocaleString()}</div></div>
        `;
    }
    
    metrics.innerHTML = html;
    
    // Update verdict badge
    const badge = document.getElementById('header-verdict-badge');
    if (badge) {
        badge.className = 'chip';
        if (isBusiness) {
            const cashRunway = monthlyExpenses > 0 ? finance.safeCash / monthlyExpenses : 0;
            if (cashRunway < 1) {
                badge.className += ' chip-red';
                badge.textContent = '🔴 Critical';
            } else if (cashRunway < 3) {
                badge.className += ' chip-yellow';
                badge.textContent = '🟡 Tight';
            } else {
                badge.className += ' chip-green';
                badge.textContent = '🟢 Healthy';
            }
        } else {
            const savingsRate = monthlyIncome > 0 ? ((monthlyIncome - monthlyExpenses) / monthlyIncome) * 100 : 0;
            if (savingsRate < 0) {
                badge.className += ' chip-red';
                badge.textContent = '⚠️ In Debt';
            } else if (savingsRate < 10) {
                badge.className += ' chip-yellow';
                badge.textContent = '🟡 Low Savings';
            } else {
                badge.className += ' chip-green';
                badge.textContent = '🟢 On Track';
            }
        }
    }
}

// ============================================================
// GET FINANCIAL DATA
// ============================================================
function getFin() {
    const transactions = state.transactions || [];
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const daysRem = Math.ceil((monthEnd - now) / (1000 * 60 * 60 * 24));
    
    let liquid = 0;
    let pending = 0;
    let monthlyIncome = 0;
    let monthlyExpenses = 0;
    
    transactions.forEach(tx => {
        const txDate = new Date(tx.id);
        if (txDate >= monthStart && txDate < monthEnd) {
            const incomeAccounts = ['Salary', 'M-Pesa', 'Cash', 'Bank Account', 'Sales Revenue', 'Service Revenue', 'Other Revenue', 'Side Hustle', 'Allowance'];
            const expenseAccounts = ['Rent', 'Payroll', 'Utilities', 'Food & Groceries', 'Transport', 'School', 'Medical', 'Office Supplies', 'Marketing', 'Travel', 'Professional Fees', 'Tax', 'Insurance', 'Clothes', 'Travel & Entertainment', 'Other Fun Spending', 'Owner\'s Draw', 'Tax Reserve', 'Reinvestment'];
            
            if (incomeAccounts.includes(tx.debit)) monthlyIncome += tx.amount;
            if (expenseAccounts.includes(tx.credit)) monthlyExpenses += tx.amount;
        }
        
        // Liquid assets
        const liquidAccounts = ['Cash', 'Bank / M-Pesa', 'Bank Account', 'M-Pesa', 'Savings'];
        if (liquidAccounts.includes(tx.debit)) liquid += tx.amount;
        if (liquidAccounts.includes(tx.credit)) liquid -= tx.amount;
    });
    
    const safeCash = liquid - pending;
    
    // Calculate obligations
    const obsStatus = state.obligations ? state.obligations.map(ob => {
        let paid = 0;
        transactions.forEach(tx => {
            const txDate = new Date(tx.id);
            if (txDate >= monthStart && txDate < monthEnd) {
                if (tx.credit === ob.label || tx.debit === ob.label) {
                    paid += tx.amount;
                }
            }
        });
        return {
            ...ob,
            paid: paid,
            pending: Math.max(0, ob.amount - paid),
            variance: paid - ob.amount
        };
    }) : [];
    
    return {
        liquid: liquid,
        pending: pending,
        safeCash: safeCash,
        daysRem: daysRem,
        obsStatus: obsStatus,
        daily: safeCash / daysRem,
        monthlyIncome: monthlyIncome,
        monthlyExpenses: monthlyExpenses
    };
}

// ============================================================
// CHAT / TRAVIS CONVERSATION
// ============================================================
async function handleAsk() {
    const input = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const question = input.value.trim();
    
    if (!question) return;
    
    // Show user message
    chatBox.innerHTML += `<div><div class="chat-bubble-user">${escapeHtml(question)}</div></div>`;
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Show thinking indicator
    const thinking = document.createElement('div');
    thinking.innerHTML = `
        <div class="travis-label"><span>🤖</span> Travis</div>
        <div class="chat-bubble-ai" id="thinking-bubble">
            <div class="travis-ripple"><div class="ripple-ball ball-r"></div><div class="ripple-ball ball-g"></div><div class="ripple-ball ball-b"></div></div>
        </div>
    `;
    chatBox.appendChild(thinking);
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Wait for response
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 500));
    thinking.remove();
    
    // Process question
    const response = await processQuestion(question);
    chatBox.innerHTML += `<div><div class="travis-label"><span>🤖</span> Travis</div><div class="chat-bubble-ai">${response}</div></div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processQuestion(question) {
    const lower = question.toLowerCase().trim();
    const isBusiness = state.user?.type === 'business';
    const finance = getFin();
    const tier = getUserWealthTier(finance.monthlyIncome || getMonthlyIncome(), finance.safeCash);
    const monthlyIncome = getMonthlyIncome();
    const monthlyExpenses = getMonthlyExpenses();
    const savings = monthlyIncome - monthlyExpenses;
    
    // Check if asking about status
    if (lower.includes('how am i') || lower.includes('how is') || lower.includes('status') || lower.includes('summary')) {
        return isBusiness ? getBusinessStatusResponse(finance) : getPersonalStatusResponse(finance);
    }
    
    // Check if asking about 50/30/20
    if (lower.includes('50/30/20') || lower.includes('50 30 20') || lower.includes('rule')) {
        return getRuleExplanation(isBusiness);
    }
    
    // Check if asking about spending
    if (lower.includes('can i') || lower.includes('spend') || lower.includes('buy') || lower.includes('afford')) {
        const amount = extractAmount(lower);
        if (amount > 0) {
            return isBusiness ? getBusinessSpendingAdvice(amount, finance) : getPersonalSpendingAdvice(amount, finance);
        }
        return "How much are you planning to spend? Tell me the amount so I can give you proper advice.";
    }
    
    // Check if asking about loan
    if (lower.includes('loan') || lower.includes('borrow')) {
        const amount = extractAmount(lower);
        if (amount > 0) {
            return isBusiness ? getBusinessLoanAdvice(amount, finance) : getPersonalLoanAdvice(amount, finance);
        }
        return "How much are you thinking of borrowing? Tell me the amount so I can give you proper advice.";
    }
    
    // Check if asking about saving
    if (lower.includes('save') || lower.includes('saving') || lower.includes('emergency')) {
        return isBusiness ? getBusinessSavingAdvice(finance) : getPersonalSavingAdvice(finance);
    }
    
    // Default response
    return getDefaultResponse(isBusiness);
}

function extractAmount(text) {
    const matches = text.match(/(\d+(?:,\d+)?(?:\s*k|\s*thousand|\s*million)?)/i);
    if (!matches) return 0;
    
    let amount = parseFloat(matches[1].replace(/,/g, ''));
    if (matches[1].toLowerCase().includes('k') || matches[1].toLowerCase().includes('thousand')) amount *= 1000;
    if (matches[1].toLowerCase().includes('million')) amount *= 1000000;
    return amount;
}

function getPersonalStatusResponse(finance) {
    const monthlyIncome = getMonthlyIncome();
    const monthlyExpenses = getMonthlyExpenses();
    const savings = monthlyIncome - monthlyExpenses;
    const savingsRate = monthlyIncome > 0 ? (savings / monthlyIncome) * 100 : 0;
    const tier = getUserWealthTier(monthlyIncome, finance.safeCash);
    
    let response = `📊 <strong>Your Monthly Financial Status</strong><br><br>`;
    response += `💰 Income: <strong>KSh ${Math.floor(monthlyIncome).toLocaleString()}</strong><br>`;
    response += `💸 Expenses: <strong>KSh ${Math.floor(monthlyExpenses).toLocaleString()}</strong><br>`;
    response += `💾 Savings: <strong>KSh ${Math.floor(savings).toLocaleString()}</strong><br>`;
    response += `📈 Savings Rate: <strong>${savingsRate.toFixed(1)}%</strong><br>`;
    response += `💵 Cash Reserve: <strong>KSh ${Math.floor(finance.safeCash).toLocaleString()}</strong><br>`;
    response += `⏳ Days Left in Month: <strong>${finance.daysRem}</strong><br><br>`;
    
    // 50/30/20 breakdown
    const needs = monthlyIncome * 0.5;
    const wants = monthlyIncome * 0.3;
    const savingsAlloc = monthlyIncome * 0.2;
    
    response += `📋 <strong>50/30/20 Rule</strong><br>`;
    response += `├── Needs (50%): KSh ${Math.floor(needs).toLocaleString()}<br>`;
    response += `├── Wants (30%): KSh ${Math.floor(wants).toLocaleString()}<br>`;
    response += `└── Savings (20%): KSh ${Math.floor(savingsAlloc).toLocaleString()}<br><br>`;
    
    response += `💡 <strong>Advice:</strong> ${tier.humanDescription}`;
    
    if (savingsRate < 10 && monthlyIncome > 0) {
        response += `<br><br>⚠️ Your savings rate is low. Try to increase it to at least 10-20% of your income.`;
    } else if (savingsRate > 30) {
        response += `<br><br>🌟 Excellent savings rate! Consider investing some of your savings for better returns.`;
    }
    
    return response;
}

function getBusinessStatusResponse(finance) {
    const monthlyRevenue = getMonthlyRevenue();
    const monthlyExpenses = getMonthlyExpenses();
    const profit = monthlyRevenue - monthlyExpenses;
    const profitMargin = monthlyRevenue > 0 ? (profit / monthlyRevenue) * 100 : 0;
    const cashRunway = monthlyExpenses > 0 ? finance.safeCash / monthlyExpenses : 0;
    const tier = getUserWealthTier(monthlyRevenue, finance.safeCash);
    
    let response = `📊 <strong>Your Business Monthly Report</strong><br><br>`;
    response += `💰 Revenue: <strong>KSh ${Math.floor(monthlyRevenue).toLocaleString()}</strong><br>`;
    response += `💸 Operating Costs: <strong>KSh ${Math.floor(monthlyExpenses).toLocaleString()}</strong><br>`;
    response += `💾 Profit: <strong>KSh ${Math.floor(profit).toLocaleString()}</strong><br>`;
    response += `📈 Profit Margin: <strong>${profitMargin.toFixed(1)}%</strong><br>`;
    response += `⏳ Cash Runway: <strong>${cashRunway.toFixed(1)} months</strong><br>`;
    response += `💵 Cash Reserve: <strong>KSh ${Math.floor(finance.safeCash).toLocaleString()}</strong><br><br>`;
    
    // Business health assessment
    response += `💡 <strong>Business Health:</strong><br>`;
    if (cashRunway < 1) {
        response += `🔴 <strong>CRITICAL:</strong> Less than 1 month of cash runway. Need urgent action!<br>`;
        response += `→ Cut unnecessary expenses immediately<br>`;
        response += `→ Focus on generating more revenue<br>`;
        response += `→ Consider a business loan or injection of capital<br><br>`;
    } else if (cashRunway < 3) {
        response += `🟡 <strong>WARNING:</strong> Only ${cashRunway.toFixed(1)} months of cash runway.<br>`;
        response += `→ Review your operating costs<br>`;
        response += `→ Look for ways to increase revenue<br>`;
        response += `→ Build a cash reserve<br><br>`;
    } else if (cashRunway < 6) {
        response += `🟢 <strong>OK:</strong> ${cashRunway.toFixed(1)} months of cash runway.<br>`;
        response += `→ Good position<br>`;
        response += `→ Focus on growth and efficiency<br>`;
        response += `→ Consider reinvesting in the business<br><br>`;
    } else {
        response += `💎 <strong>EXCELLENT:</strong> ${cashRunway.toFixed(1)} months of cash runway.<br>`;
        response += `→ Strong financial position<br>`;
        response += `→ Consider expansion opportunities<br>`;
        response += `→ Look at investment options<br><br>`;
    }
    
    // Industry benchmark comparison
    const benchmark = getIndustryBenchmark();
    if (benchmark) {
        response += `📊 <strong>Industry Benchmark (${state.user?.industry || 'General'}):</strong><br>`;
        response += `├── COGS: ${(benchmark.cogs * 100).toFixed(0)}% of revenue (benchmark)<br>`;
        response += `├── Operating: ${(benchmark.operating * 100).toFixed(0)}% (benchmark)<br>`;
        response += `├── Owner's Draw: ${(benchmark.ownerDraw * 100).toFixed(0)}%<br>`;
        response += `└── Reinvestment: ${(benchmark.reinvestment * 100).toFixed(0)}%<br>`;
    }
    
    return response;
}

function getIndustryBenchmark() {
    const industry = state.user?.industry || 'GENERAL';
    return BUSINESS_BENCHMARKS[industry] || BUSINESS_BENCHMARKS['GENERAL'];
}

function getRuleExplanation(isBusiness) {
    if (isBusiness) {
        return `
            <strong>📊 Business Revenue Allocation Framework</strong><br><br>
            For businesses, we use a different model than the personal 50/30/20 rule:<br><br>
            <strong>Revenue Allocation Model:</strong><br>
            1. <strong>COGS (Cost of Goods Sold):</strong> 35-50% - What you pay for products<br>
            2. <strong>Operating Costs:</strong> 20-30% - Rent, salaries, utilities, marketing<br>
            3. <strong>Owner's Draw:</strong> 15-25% - What you pay yourself<br>
            4. <strong>Tax Reserve:</strong> 10-15% - Set aside for taxes<br>
            5. <strong>Reinvestment:</strong> 5-10% - Growth, equipment, emergency<br><br>
            This varies by industry. What type of business do you have?
        `;
    } else {
        return `
            <strong>📋 The 50/30/20 Rule</strong><br><br>
            This is a simple personal finance framework:<br><br>
            <strong>50% - Needs</strong><br>
            Essential expenses: rent/mortgage, food, utilities, transport, school fees, medical<br><br>
            <strong>30% - Wants</strong><br>
            Discretionary spending: entertainment, dining out, shopping, travel, hobbies<br><br>
            <strong>20% - Savings & Debt</strong><br>
            Emergency fund, investments, loan repayments, retirement savings<br><br>
            Your monthly income should be allocated across these three categories.
        `;
    }
}

function getPersonalSpendingAdvice(amount, finance) {
    const monthlyIncome = getMonthlyIncome();
    const monthlyExpenses = getMonthlyExpenses();
    const savings = monthlyIncome - monthlyExpenses;
    const needs = monthlyIncome * 0.5;
    const wants = monthlyIncome * 0.3;
    const savingsAlloc = monthlyIncome * 0.2;
    
    // Check if amount is within wants budget
    const currentWants = state.transactions
        .filter(tx => {
            const txDate = new Date(tx.id);
            const now = new Date();
            const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
            return txDate >= monthStart && ['Travel & Entertainment', 'Clothes', 'Other Fun Spending'].includes(tx.credit);
        })
        .reduce((sum, tx) => sum + tx.amount, 0);
    
    const wantsRemaining = wants - currentWants;
    
    let response = `💸 <strong>Spending Advice for KSh ${amount.toLocaleString()}</strong><br><br>`;
    
    if (finance.safeCash < 0) {
        response += `🔴 <strong>EMERGENCY:</strong> You are in debt by KSh ${Math.abs(finance.safeCash).toLocaleString()}. You cannot afford to spend any money right now.<br><br>`;
        response += `Focus on increasing your income and clearing your debt first.`;
        return response;
    }
    
    if (amount > wantsRemaining) {
        response += `⚠️ This would exceed your "Wants" budget (30%) for this month.<br>`;
        response += `├── Available for wants: KSh ${Math.floor(wantsRemaining).toLocaleString()}<br>`;
        response += `└── Your monthly wants budget: KSh ${Math.floor(wants).toLocaleString()}<br><br>`;
        response += `💡 Consider waiting until next month or finding a cheaper alternative.`;
    } else {
        response += `✅ This fits within your "Wants" budget (30%).<br>`;
        response += `├── Wants remaining this month: KSh ${Math.floor(wantsRemaining - amount).toLocaleString()}<br>`;
        response += `└── Monthly wants budget: KSh ${Math.floor(wants).toLocaleString()}<br><br>`;
        response += `💡 Go ahead, but track your spending to stay within your budget.`;
    }
    
    return response;
}

function getBusinessSpendingAdvice(amount, finance) {
    const monthlyRevenue = getMonthlyRevenue();
    const monthlyExpenses = getMonthlyExpenses();
    const profit = monthlyRevenue - monthlyExpenses;
    const cashRunway = monthlyExpenses > 0 ? finance.safeCash / monthlyExpenses : 0;
    const newRunway = monthlyExpenses > 0 ? (finance.safeCash - amount) / monthlyExpenses : 0;
    
    let response = `💸 <strong>Business Spending Advice for KSh ${amount.toLocaleString()}</strong><br><br>`;
    
    if (finance.safeCash < 0) {
        response += `🔴 <strong>EMERGENCY:</strong> Your business is in debt. Focus on generating revenue first.<br>`;
        return response;
    }
    
    if (amount > finance.safeCash * 0.3) {
        response += `⚠️ This would use ${((amount / finance.safeCash) * 100).toFixed(1)}% of your cash reserve.<br>`;
        response += `├── Current cash: KSh ${Math.floor(finance.safeCash).toLocaleString()}<br>`;
        response += `└── Remaining after: KSh ${Math.floor(finance.safeCash - amount).toLocaleString()}<br><br>`;
        response += `📊 Impact on cash runway:<br>`;
        response += `├── Current runway: ${cashRunway.toFixed(1)} months<br>`;
        response += `└── New runway: ${newRunway.toFixed(1)} months<br><br>`;
        
        if (newRunway < 1) {
            response += `🔴 <strong>WARNING:</strong> This would leave you with less than 1 month of cash runway.`;
        } else if (newRunway < 3) {
            response += `🟡 Consider if this purchase is essential or if it can be delayed.`;
        } else {
            response += `🟢 While this is a significant expense, you would still have ${newRunway.toFixed(1)} months of runway.`;
        }
    } else {
        response += `✅ This expense is manageable.<br>`;
        response += `├── Current cash: KSh ${Math.floor(finance.safeCash).toLocaleString()}<br>`;
        response += `└── Remaining after: KSh ${Math.floor(finance.safeCash - amount).toLocaleString()}<br><br>`;
        response += `💡 This won't significantly impact your cash runway. Go ahead if it's a good business decision.`;
    }
    
    return response;
}

function getPersonalLoanAdvice(amount, finance) {
    const monthlyIncome = getMonthlyIncome();
    const monthlyExpenses = getMonthlyExpenses();
    const savings = monthlyIncome - monthlyExpenses;
    const monthlyPayment = amount * 0.15; // 15% monthly payment estimate
    
    let response = `🏦 <strong>Loan Advice for KSh ${amount.toLocaleString()}</strong><br><br>`;
    
    if (monthlyPayment > savings && savings > 0) {
        response += `⚠️ This loan would require monthly payments of about KSh ${Math.floor(monthlyPayment).toLocaleString()}.<br>`;
        response += `Your current monthly savings are KSh ${Math.floor(savings).toLocaleString()}.<br><br>`;
        response += `🔴 This would consume more than your monthly savings. Consider:<br>`;
        response += `→ Borrowing a smaller amount<br>`;
        response += `→ Finding a loan with lower interest<br>`;
        response += `→ Increasing your income first`;
    } else if (monthlyPayment <= savings * 0.5) {
        response += `✅ This loan is affordable.<br>`;
        response += `├── Monthly payment: KSh ${Math.floor(monthlyPayment).toLocaleString()}<br>`;
        response += `└── Your monthly savings: KSh ${Math.floor(savings).toLocaleString()}<br><br>`;
        response += `💡 The payment would use ${((monthlyPayment / savings) * 100).toFixed(1)}% of your monthly savings. This is manageable.`;
    } else {
        response += `🟡 This loan would use ${((monthlyPayment / savings) * 100).toFixed(1)}% of your monthly savings.<br><br>`;
        response += `Consider if this loan is absolutely necessary or if you can find alternative financing.`;
    }
    
    return response;
}

function getBusinessLoanAdvice(amount, finance) {
    const monthlyRevenue = getMonthlyRevenue();
    const monthlyExpenses = getMonthlyExpenses();
    const profit = monthlyRevenue - monthlyExpenses;
    const monthlyPayment = amount * 0.15;
    const newRunway = monthlyExpenses > 0 ? (finance.safeCash + amount) / monthlyExpenses : 0;
    
    let response = `🏦 <strong>Business Loan Advice for KSh ${amount.toLocaleString()}</strong><br><br>`;
    
    response += `📊 Impact on your business:<br>`;
    response += `├── Monthly payment: KSh ${Math.floor(monthlyPayment).toLocaleString()}<br>`;
    response += `├── Monthly profit: KSh ${Math.floor(profit).toLocaleString()}<br>`;
    response += `├── Current cash runway: ${(finance.safeCash / monthlyExpenses).toFixed(1)} months<br>`;
    response += `└── With loan: ${newRunway.toFixed(1)} months<br><br>`;
    
    if (monthlyPayment > profit * 0.5) {
        response += `⚠️ The monthly payment would use ${((monthlyPayment / profit) * 100).toFixed(1)}% of your monthly profit.<br>`;
        response += `This is high. Consider:<br>`;
        response += `→ Borrowing less<br>`;
        response += `→ Finding a loan with better terms<br>`;
        response += `→ Ensuring the loan will generate more than ${Math.floor(monthlyPayment).toLocaleString()} in additional monthly revenue`;
    } else {
        response += `✅ This loan is manageable.<br>`;
        response += `The payment would use ${((monthlyPayment / profit) * 100).toFixed(1)}% of your monthly profit.<br><br>`;
        response += `💡 Make sure this loan will generate more revenue than it costs. What will you use the loan for?`;
    }
    
    return response;
}

function getPersonalSavingAdvice(finance) {
    const monthlyIncome = getMonthlyIncome();
    const monthlyExpenses = getMonthlyExpenses();
    const savings = monthlyIncome - monthlyExpenses;
    const savingsRate = monthlyIncome > 0 ? (savings / monthlyIncome) * 100 : 0;
    const emergencyFund = finance.safeCash;
    const targetEmergency = monthlyExpenses * 3;
    
    let response = `💾 <strong>Saving Advice</strong><br><br>`;
    response += `📊 Current status:<br>`;
    response += `├── Monthly income: KSh ${Math.floor(monthlyIncome).toLocaleString()}<br>`;
    response += `├── Monthly expenses: KSh ${Math.floor(monthlyExpenses).toLocaleString()}<br>`;
    response += `├── Monthly savings: KSh ${Math.floor(savings).toLocaleString()}<br>`;
    response += `└── Savings rate: ${savingsRate.toFixed(1)}%<br><br>`;
    
    response += `🏦 Emergency Fund:<br>`;
    response += `├── Current: KSh ${Math.floor(emergencyFund).toLocaleString()}<br>`;
    response += `└── Target (3 months): KSh ${Math.floor(targetEmergency).toLocaleString()}<br><br>`;
    
    if (emergencyFund < targetEmergency) {
        const needed = targetEmergency - emergencyFund;
        const months = savings > 0 ? needed / savings : Infinity;
        response += `🟡 You need KSh ${Math.floor(needed).toLocaleString()} more for your emergency fund.<br>`;
        response += `At your current savings rate, this will take ${Math.ceil(months)} months.<br><br>`;
        response += `💡 Try to increase your savings rate to 20% of your income.`;
    } else {
        response += `✅ You have a fully funded emergency fund!<br><br>`;
        response += `💡 Consider investing your extra savings in:<br>`;
        response += `→ Money Market Funds<br>`;
        response += `→ SACCOS<br>`;
        response += `→ Stocks or Bonds<br>`;
        response += `→ Real estate (for larger amounts)`;
    }
    
    return response;
}

function getBusinessSavingAdvice(finance) {
    const monthlyRevenue = getMonthlyRevenue();
    const monthlyExpenses = getMonthlyExpenses();
    const profit = monthlyRevenue - monthlyExpenses;
    const profitMargin = monthlyRevenue > 0 ? (profit / monthlyRevenue) * 100 : 0;
    const cashRunway = monthlyExpenses > 0 ? finance.safeCash / monthlyExpenses : 0;
    const targetRunway = 6;
    
    let response = `💾 <strong>Business Cash Management</strong><br><br>`;
    response += `📊 Current status:<br>`;
    response += `├── Revenue: KSh ${Math.floor(monthlyRevenue).toLocaleString()}<br>`;
    response += `├── Expenses: KSh ${Math.floor(monthlyExpenses).toLocaleString()}<br>`;
    response += `├── Profit: KSh ${Math.floor(profit).toLocaleString()}<br>`;
    response += `└── Profit Margin: ${profitMargin.toFixed(1)}%<br><br>`;
    
    response += `⏳ Cash Runway:<br>`;
    response += `├── Current: ${cashRunway.toFixed(1)} months<br>`;
    response += `└── Target (${targetRunway} months): ${targetRunway} months<br><br>`;
    
    if (cashRunway < targetRunway) {
        const needed = (targetRunway * monthlyExpenses) - finance.safeCash;
        response += `🟡 You need KSh ${Math.floor(needed).toLocaleString()} more to reach your target runway of ${targetRunway} months.<br><br>`;
        response += `💡 To improve your cash position:<br>`;
        response += `→ Reduce operating costs by ${Math.floor(monthlyExpenses * 0.1).toLocaleString()} per month<br>`;
        response += `→ Increase revenue by ${Math.floor(monthlyRevenue * 0.1).toLocaleString()} per month<br>`;
        response += `→ Set aside ${Math.floor(monthlyRevenue * 0.1).toLocaleString()} each month for cash reserve`;
    } else {
        response += `✅ You have excellent cash runway!<br><br>`;
        response += `💡 Consider using your strong position to:<br>`;
        response += `→ Expand your business<br>`;
        response += `→ Invest in equipment or technology<br>`;
        response += `→ Hire additional staff<br>`;
        response += `→ Explore new markets`;
    }
    
    return response;
}

function getDefaultResponse(isBusiness) {
    if (isBusiness) {
        return `
            🤖 I'm here to help with your business finances. Ask me about:<br><br>
            • "How am I doing?" - Business health check<br>
            • "Can I spend KSh X on Y?" - Spending advice<br>
            • "Should I take a loan of KSh X?" - Loan advice<br>
            • "How can I save more?" - Cash management<br>
            • "What's my cash runway?" - Cash flow analysis<br><br>
            Be specific with amounts so I can give you accurate advice.
        `;
    } else {
        return `
            🤖 I'm here to help with your personal finances. Ask me about:<br><br>
            • "How am I doing?" - Financial health check<br>
            • "Can I spend KSh X on Y?" - Spending advice<br>
            • "Should I take a loan of KSh X?" - Loan advice<br>
            • "How can I save more?" - Saving advice<br>
            • "What is 50/30/20?" - Rule explanation<br><br>
            Be specific with amounts so I can give you accurate advice.
        `;
    }
}

function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/[&<>]/g, function(match) {
        if (match === '&') return '&amp;';
        if (match === '<') return '&lt;';
        if (match === '>') return '&gt;';
        return match;
    });
}

// ============================================================
// DATABASE FUNCTIONS
// ============================================================
let db, backupDirHandle = null;
const state = {
    user: null,
    transactions: [],
    obligations: []
};
const BACKUP_FILE = 'travis-finance-backup.enc';

async function initDB() {
    return new Promise(resolve => {
        const request = indexedDB.open('TravisGuardian_v1.0', 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('meta')) {
                db.createObjectStore('meta', { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains('tx')) {
                db.createObjectStore('tx', { keyPath: 'id' });
            }
        };
        request.onsuccess = async (e) => {
            db = e.target.result;
            await runRecoveryOnStart();
            resolve();
        };
        request.onerror = () => resolve();
    });
}

async function getData(store, id) {
    if (!db) return null;
    try {
        const tx = db.transaction(store, 'readonly');
        const obj = tx.objectStore(store);
        return new Promise(resolve => {
            const req = obj.get(id);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => resolve(null);
        });
    } catch {
        return null;
    }
}

async function getAllData(store) {
    if (!db) return [];
    try {
        const tx = db.transaction(store, 'readonly');
        const obj = tx.objectStore(store);
        return new Promise(resolve => {
            const req = obj.getAll();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => resolve([]);
        });
    } catch {
        return [];
    }
}

async function saveData(store, data) {
    if (!db) return;
    const tx = db.transaction(store, 'readwrite');
    const obj = tx.objectStore(store);
    obj.put(data);
    return new Promise(resolve => tx.oncomplete = resolve);
}

async function setupBackupFolder() {
    if ('showDirectoryPicker' in window) {
        try {
            backupDirHandle = await window.showDirectoryPicker({
                mode: 'readwrite',
                startIn: 'documents'
            });
            const tx = db.transaction('meta', 'readwrite');
            const obj = tx.objectStore('meta');
            obj.put({ id: 'backupHandle', value: backupDirHandle });
            await backupUIAssets();
            return true;
        } catch {
            return false;
        }
    }
    return false;
}

async function saveBackup() {
    if (!backupDirHandle || !db) return;
    try {
        const data = {};
        for (const store of ['meta', 'tx']) {
            const tx = db.transaction(store, 'readonly');
            const obj = tx.objectStore(store);
            data[store] = await new Promise(resolve => {
                const req = obj.getAll();
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => resolve([]);
            });
        }
        const password = 'TRAVIS-GUARDIAN-SECURE-2026-x7k9';
        const encrypted = await encryptData(data, password);
        const file = await backupDirHandle.getFileHandle(BACKUP_FILE, { create: true });
        const writable = await file.createWritable();
        await writable.write(encrypted);
        await writable.close();
    } catch {}
}

async function encryptData(data, password) {
    const encoder = new TextEncoder();
    const encoded = encoder.encode(JSON.stringify(data));
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    
    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(password),
        'PBKDF2',
        false,
        ['deriveBits', 'deriveKey']
    );
    
    const key = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt: salt, iterations: 100000, hash: 'SHA-256' },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
    );
    
    const encrypted = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: iv },
        key,
        encoded
    );
    
    const result = new Uint8Array(salt.length + iv.length + encrypted.byteLength);
    result.set(salt, 0);
    result.set(iv, salt.length);
    result.set(new Uint8Array(encrypted), salt.length + iv.length);
    return result;
}

async function backupUIAssets() {
    if (!backupDirHandle) return;
    try {
        const files = ['index.html'];
        for (const file of files) {
            const response = await fetch(file);
            if (!response.ok) continue;
            const blob = await response.blob();
            const handle = await backupDirHandle.getFileHandle(file, { create: true });
            const writable = await handle.createWritable();
            await writable.write(blob);
            await writable.close();
        }
    } catch {}
}

async function runRecoveryOnStart() {
    const overlay = document.getElementById('recovery-overlay');
    if (!overlay) return;
    overlay.style.display = 'none';
    
    try {
        const backupHandle = await getData('meta', 'backupHandle');
        if (backupHandle?.value) backupDirHandle = backupHandle.value;
    } catch {}
    
    const hasMeta = !!await getData('meta', 'config');
    const hasFingerprint = !!localStorage.getItem('fp');
    
    if (hasMeta && hasFingerprint) return;
    if (backupDirHandle) await rebuildUIFromDevice();
    
    overlay.style.display = 'flex';
    overlay.innerHTML = `
        <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;z-index:9999;font-family:inherit;">
            <div style="background:white;border-radius:16px;max-width:460px;width:92%;box-shadow:0 25px 70px rgba(0,0,0,0.3);overflow:hidden;">
                <div style="background:linear-gradient(135deg,#0078D4,#005A9E);color:white;padding:24px;text-align:center;">
                    <h2 style="margin:0 0 6px;font-size:1.3rem;">🔒 Travis Guardian</h2>
                    <p style="margin:0;opacity:0.85;font-size:13px;">Your Personal Financial Advisor</p>
                </div>
                <div style="padding:28px;text-align:center;">
                    <div style="width:60px;height:60px;background:#f0f7ff;color:#0078D4;font-size:28px;border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">📁</div>
                    <h3 style="margin:0 0 12px;font-size:1.1rem;color:#1a1a1a;">Restore Your Data?</h3>
                    <p style="color:#5a5a5a;line-height:1.6;margin-bottom:24px;font-size:13px;">Browser data was cleared.<br>Select your backup file to restore financial records.</p>
                    <div style="display:flex;flex-direction:column;gap:10px;">
                        <button id="restore-btn" style="background:#0078D4;color:white;border:none;padding:13px;font-size:13px;font-weight:600;border-radius:8px;cursor:pointer;">📂 Select Backup File & Restore</button>
                        <button id="skip-btn" style="background:transparent;color:#5a5a5a;border:1px solid #ddd;padding:12px;font-size:13px;border-radius:8px;cursor:pointer;">Continue as New User</button>
                    </div>
                    <p style="margin:12px 0 0;font-size:11px;color:#8a8a8a;">First-time users: choose "Continue as New User"</p>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('restore-btn').onclick = async () => {
        const btn = document.getElementById('restore-btn');
        btn.disabled = true;
        btn.textContent = 'Restoring...';
        const result = await manualRestoreFlow();
        if (result.success) {
            overlay.innerHTML = '<div style="padding:40px;text-align:center;background:white;border-radius:16px;max-width:360px;"><p style="color:green;font-size:16px;">✅ Everything restored! Reloading…</p></div>';
            setTimeout(() => location.reload(), 1200);
        } else {
            overlay.innerHTML = `<div style="padding:28px;text-align:center;color:red;background:white;border-radius:16px;"><p>${result.error || 'Restore failed'}</p><button onclick="location.reload()" style="margin-top:12px;padding:10px 20px;border-radius:8px;border:none;background:#0078D4;color:white;cursor:pointer;">Try Again</button></div>`;
        }
    };
    
    document.getElementById('skip-btn').onclick = () => {
        overlay.style.display = 'none';
    };
}

async function rebuildUIFromDevice() {
    if (!backupDirHandle) return false;
    try {
        const cache = await caches.open('travis-ui-cache-v1');
        const files = ['index.html'];
        for (const file of files) {
            const handle = await backupDirHandle.getFileHandle(file);
            const fileObj = await handle.getFile();
            const buffer = await fileObj.arrayBuffer();
            await cache.put('/' + file, new Response(buffer, {
                headers: {
                    'Content-Type': file.endsWith('.css') ? 'text/css' : 
                               file.endsWith('.js') ? 'text/javascript' : 'text/html'
                }
            }));
        }
        return true;
    } catch {
        return false;
    }
}

async function manualRestoreFlow() {
    try {
        let fileHandle;
        if ('showOpenFilePicker' in window) {
            [fileHandle] = await window.showOpenFilePicker({
                types: [{
                    description: 'Travis Finance Backup',
                    accept: { 'application/octet-stream': ['.enc'] }
                }],
                multiple: false
            });
        } else {
            return { success: false, error: 'File picker not supported' };
        }
        window.tempBackupFileHandle = fileHandle;
        const result = await restoreFromBackup();
        delete window.tempBackupFileHandle;
        if (result.success) {
            await rebuildUIFromDevice();
            await backupUIAssets();
            return { success: true };
        }
        return { success: false, error: result.error || 'Restore failed' };
    } catch {
        return { success: false, error: 'User cancelled or error occurred' };
    }
}

async function restoreFromBackup() {
    const { data, error } = await readBackupContent();
    if (error) return { success: false, error: 'Could not read backup file: ' + error };
    if (!data) return { success: false, error: 'Backup file was empty or invalid' };
    
    try {
        for (const store of ['meta', 'tx']) {
            if (!data[store] || !Array.isArray(data[store])) continue;
            const tx = db.transaction(store, 'readwrite');
            const obj = tx.objectStore(store);
            await new Promise(resolve => {
                const req = obj.clear();
                req.onsuccess = resolve;
                req.onerror = resolve;
            });
            for (const item of data[store]) {
                await new Promise(resolve => {
                    const req = obj.put(item);
                    req.onsuccess = resolve;
                    req.onerror = resolve;
                });
            }
            await new Promise(resolve => tx.oncomplete = resolve);
        }
        
        let fingerprint = null;
        const meta = await getData('meta', 'config');
        if (meta?.fingerprint) fingerprint = meta.fingerprint;
        else if (data.meta) {
            const config = data.meta.find(m => m && m.id === 'config');
            fingerprint = config?.fingerprint || null;
        }
        if (fingerprint) localStorage.setItem('fp', fingerprint);
        
        return { success: true, error: null };
    } catch (e) {
        return { success: false, error: 'Failed to write data to database: ' + (e.message || String(e)) };
    }
}

async function readBackupContent() {
    try {
        if (!window.tempBackupFileHandle) {
            return { data: null, error: 'No file handle' };
        }
        const fileObj = await window.tempBackupFileHandle.getFile();
        const buffer = await fileObj.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        const password = prompt('Enter the backup password to decrypt your data:');
        if (!password) return { data: null, error: 'Password required' };
        const decrypted = await decryptData(bytes, password);
        return { data: decrypted, error: null };
    } catch (e) {
        return { data: null, error: e.name === 'OperationError' ? 'Wrong password or corrupted file' : 'Failed to read/decrypt backup file' };
    }
}

async function decryptData(data, password) {
    const salt = data.slice(0, 16);
    const iv = data.slice(16, 28);
    const encrypted = data.slice(28);
    const encoder = new TextEncoder();
    
    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(password),
        'PBKDF2',
        false,
        ['deriveBits', 'deriveKey']
    );
    
    const key = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt: salt, iterations: 100000, hash: 'SHA-256' },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
    );
    
    const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        key,
        encrypted
    );
    
    return JSON.parse(new TextDecoder().decode(decrypted));
}

function factoryReset() {
    if (confirm('WARNING: This will delete ALL your financial data. Cannot undo. Continue?')) {
        indexedDB.deleteDatabase('TravisGuardian_v1.0');
        localStorage.removeItem('fp');
        location.reload();
    }
}

// ============================================================
// STUB FUNCTIONS FOR COMPATIBILITY
// ============================================================
function generateFingerprint() {
    let fp = localStorage.getItem('fp');
    if (fp && fp.length === 32) return fp;
    fp = 'TRV-KE-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    fp = fp.substring(0, 32);
    localStorage.setItem('fp', fp);
    return fp;
}

function encryptFingerprint(fp) { return btoa(fp + 'encrypted'); }

function showPhoneModal() {}
function submitPhoneAndFP() {}

function triggerInstall() {
    if (!deferredPrompt) {
        alert('Install not ready. Refresh the page.');
        return;
    }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => deferredPrompt = null);
}

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('install-status').textContent = 'Ready to install';
});

// ============================================================
// BOOT FUNCTION
// ============================================================
async function boot() {
    await initDB();
    
    let meta = await getData('meta', 'config') || { activated: false };
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
    await new Promise(resolve => setTimeout(resolve, 400));
    
    if (!meta.activated) {
        if (isStandalone) {
            document.getElementById('activation-overlay').classList.remove('hidden');
            document.getElementById('install-overlay').style.display = 'none';
        } else {
            document.getElementById('install-overlay').style.display = 'flex';
        }
        return;
    }
    
    if (!meta.user) {
        document.getElementById('setup-overlay').classList.remove('hidden');
        document.getElementById('install-overlay').style.display = 'none';
        return;
    }
    
    state.user = meta.user;
    state.obligations = meta.obligations || [];
    state.transactions = (await getAllData('tx')).sort((a, b) => b.id - a.id);
    
    document.getElementById('install-overlay').style.display = 'none';
    document.getElementById('sidebar-name').textContent = state.user.name;
    document.getElementById('sidebar-type').textContent = state.user.type.toUpperCase() + ' ADVISOR';
    document.getElementById('display-name').textContent = state.user.name;
    document.getElementById('sidebar-avatar').textContent = state.user.name.charAt(0).toUpperCase();
    
    nav('dash');
}

// ============================================================
// CSS STYLES
// ============================================================
const style = document.createElement('style');
style.textContent = `
    /* Base styles */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; background: #f5f6fa; color: #1a1a1a; }
    
    /* Windows-like cards */
    .win-card { background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); overflow: hidden; }
    .win-card-header { padding: 14px 18px; border-bottom: 1px solid #e8e8e8; display: flex; justify-content: space-between; align-items: center; }
    .win-card-title { font-size: 14px; font-weight: 600; color: #1a1a1a; }
    .win-card-sub { font-size: 11px; color: #8a8a8a; }
    .win-card-body { padding: 16px 18px; }
    
    /* Metrics */
    .metric-card { background: white; padding: 14px 16px; border-radius: 8px; border-left: 3px solid #0078D4; }
    .metric-accent { width: 3px; height: 30px; border-radius: 2px; }
    .metric-label { font-size: 11px; color: #8a8a8a; margin-top: 4px; }
    .metric-value { font-size: 16px; font-weight: 600; color: #1a1a1a; }
    
    /* Dashboard grid */
    .dashboard-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
    
    /* Buttons */
    .btn-primary { background: #0078D4; color: white; border: none; padding: 8px 16px; border-radius: 4px; font-size: 12px; cursor: pointer; font-family: inherit; }
    .btn-secondary { background: transparent; color: #1a1a1a; border: 1px solid #d0d0d0; padding: 8px 16px; border-radius: 4px; font-size: 12px; cursor: pointer; font-family: inherit; }
    .btn-accent { background: linear-gradient(135deg,#0078D4,#005A9E); color: white; border: none; padding: 8px 16px; border-radius: 4px; font-size: 12px; cursor: pointer; font-family: inherit; }
    
    /* Chips */
    .chip { display: inline-block; padding: 2px 10px; border-radius: 12px; font-size: 11px; font-weight: 500; }
    .chip-green { background: #e8f5e9; color: #2e7d32; }
    .chip-red { background: #ffebee; color: #c62828; }
    .chip-yellow { background: #fff3e0; color: #e65100; }
    
    /* Inputs */
    .win-input { padding: 8px 12px; border: 1px solid #d0d0d0; border-radius: 4px; font-size: 13px; font-family: inherit; outline: none; }
    .win-input:focus { border-color: #0078D4; box-shadow: 0 0 0 2px rgba(0,120,212,0.1); }
    
    /* Tables */
    .win-table { width: 100%; border-collapse: collapse; font-size: 13px; }
    .win-table th { text-align: left; padding: 10px 12px; background: #f8f9fa; font-weight: 600; color: #5a5a5a; border-bottom: 1px solid #e8e8e8; }
    .win-table td { padding: 10px 12px; border-bottom: 1px solid #f0f0f0; }
    
    /* Chat */
    .chat-bubble-user { background: #e3f2fd; padding: 10px 14px; border-radius: 12px 12px 4px 12px; max-width: 80%; margin-left: auto; font-size: 13px; }
    .chat-bubble-ai { background: #f5f5f5; padding: 10px 14px; border-radius: 12px 12px 12px 4px; max-width: 80%; font-size: 13px; line-height: 1.6; }
    .travis-label { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600; color: #5a5a5a; }
    
    /* Progress */
    .progress-track { background: #e8e8e8; border-radius: 2px; overflow: hidden; height: 4px; }
    .progress-fill { height: 100%; transition: width 0.3s ease; }
    
    /* Obligations */
    .obs-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #f0f0f0; }
    
    /* Setup steps */
    .setup-step { padding: 16px; background: #f8f9fa; border-radius: 8px; }
    .setup-step-title { font-size: 14px; font-weight: 600; margin-bottom: 8px; }
    
    /* Hidden */
    .hidden { display: none !important; }
    
    /* Responsive */
    @media (max-width: 768px) {
        .dashboard-grid { grid-template-columns: 1fr 1fr; }
        .win-table { font-size: 11px; }
        .win-card-header { flex-wrap: wrap; gap: 8px; }
    }
    @media (max-width: 480px) {
        .dashboard-grid { grid-template-columns: 1fr; }
    }
    
    /* Custom modal animations */
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
    @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    
    /* Ripple loader */
    .travis-ripple { display: flex; gap: 6px; align-items: center; padding: 8px 0; }
    .ripple-ball { width: 8px; height: 8px; border-radius: 50%; animation: travis-ripple 1.4s infinite ease-in-out; }
    .ball-r { background: #ff4d4d; animation-delay: -0.32s; }
    .ball-g { background: #2ecc71; animation-delay: -0.16s; }
    .ball-b { background: #3498db; }
    @keyframes travis-ripple { 0%,80%,100% { transform: scale(0); opacity: 0.3; } 40% { transform: scale(1); opacity: 1; } }
`;
document.head.appendChild(style);

// ============================================================
// INITIALIZE
// ============================================================
window.onload = boot;
