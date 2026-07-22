// ─────────────────────────────────────────────────────────────
// TRAVIS M-PESA PARSER - Complete Edition
// Handles ALL M-PESA transaction types with proper accounting
// Integrates with TravisGuardian ledger system
// ─────────────────────────────────────────────────────────────

(function() {
    'use strict';

    // ─── Configuration ────────────────────────────────────────
    const CONFIG = {
        // Account names matching your ledger
        ACCOUNTS: {
            MPESA: 'Bank / M-PESA',    // Your M-PESA account
            CASH: 'Cash',              // Physical cash account
            BILLS: 'Bills',            // Expense account for charges, airtime, fuliza
            SHOPPING: 'Bills',         // Shopping expenses (Paybill, Buy Goods)
            INCOME: 'Salary'           // Default income account for deposits/receives
        },
        
        // Minimum amount to consider as a transaction
        MIN_AMOUNT: 1,
        
        // SMS patterns for detection
        PATTERNS: {
            MPESA: /M-?PESA/i,
            CONFIRMED: /confirmed/i,
            RECEIVED: /received/i,
            SENT: /sent to/i,
            WITHDRAW: /withdraw/i,
            DEPOSIT: /deposited/i,
            PAYBILL: /paid to.+till no|paybill/i,
            BUY_GOODS: /buy goods|till no/i,
            AIRTIME: /bought.*airtime|airtime.*bought/i,
            FULIZA: /fuliza/i,
            TRANSACTION_COST: /transaction cost[,:]?\s*(?:Ksh|KES)\s*([\d,]+\.?\d*)/i,
            FULIZA_CHARGE: /Fuliza M-PESA charge of\s*(?:Ksh|KES)\s*([\d,]+\.?\d*)/i,
            REFERENCE: /\b([A-Z]{2}[A-Z0-9]{8})\b/g
        }
    };

    // ─── M-PESA Tariff Tables ─────────────────────────────────
    const TARIFFS = {
        send: [
            { min: 1, max: 49, charge: 0 },
            { min: 50, max: 100, charge: 0 },
            { min: 101, max: 500, charge: 7 },
            { min: 501, max: 1000, charge: 13 },
            { min: 1001, max: 1500, charge: 23 },
            { min: 1501, max: 2500, charge: 33 },
            { min: 2501, max: 3500, charge: 53 },
            { min: 3501, max: 5000, charge: 57 },
            { min: 5001, max: 7500, charge: 78 },
            { min: 7501, max: 10000, charge: 90 },
            { min: 10001, max: 15000, charge: 100 },
            { min: 15001, max: 20000, charge: 105 },
            { min: 20001, max: 25000, charge: 108 },
            { min: 25001, max: 30000, charge: 108 },
            { min: 30001, max: 35000, charge: 108 },
            { min: 35001, max: 40000, charge: 108 },
            { min: 40001, max: 45000, charge: 108 },
            { min: 45001, max: 50000, charge: 108 },
            { min: 50001, max: 70000, charge: 108 }
        ],
        withdraw: [
            { min: 50, max: 100, charge: 11 },
            { min: 101, max: 500, charge: 29 },
            { min: 501, max: 1000, charge: 29 },
            { min: 1001, max: 1500, charge: 29 },
            { min: 1501, max: 2500, charge: 29 },
            { min: 2501, max: 3500, charge: 52 },
            { min: 3501, max: 5000, charge: 69 },
            { min: 5001, max: 7500, charge: 87 },
            { min: 7501, max: 10000, charge: 115 },
            { min: 10001, max: 15000, charge: 167 },
            { min: 15001, max: 20000, charge: 185 },
            { min: 20001, max: 35000, charge: 197 }
        ]
    };

    // ─── Utility Functions ────────────────────────────────────
    function extractAmount(text) {
        const matches = text.match(/(?:Ksh|KES)\s*([\d,]+\.?\d*)/gi);
        if (!matches || matches.length === 0) return 0;
        
        // Get the first amount (usually the transaction amount)
        const first = matches[0];
        const value = parseFloat(first.replace(/[^0-9.]/g, ''));
        return isNaN(value) ? 0 : value;
    }

    function extractCharge(text) {
        // Try transaction cost pattern first
        let match = text.match(CONFIG.PATTERNS.TRANSACTION_COST);
        if (match) {
            const value = parseFloat(match[1].replace(/,/g, ''));
            return isNaN(value) ? 0 : value;
        }
        
        // Try Fuliza charge pattern
        match = text.match(CONFIG.PATTERNS.FULIZA_CHARGE);
        if (match) {
            const value = parseFloat(match[1].replace(/,/g, ''));
            return isNaN(value) ? 0 : value;
        }
        
        return 0;
    }

    function extractReference(text) {
        const codes = [];
        let match;
        while ((match = CONFIG.PATTERNS.REFERENCE.exec(text)) !== null) {
            const code = match[1];
            // Skip common words that aren't transaction codes
            if (!['CONFIRMED', 'TRANSACTION', 'NEWMPESA', 'FULIZA', 'MPESA'].includes(code.toUpperCase())) {
                codes.push(code);
            }
        }
        return codes.length > 0 ? codes[0] : null;
    }

    function extractRecipient(text) {
        // Try various patterns to extract recipient name
        let match;
        
        // Pattern: sent to [name] phone
        match = text.match(/sent to\s+(.+?)\s+(?:\d{7,}|on\s+[\d/])/i);
        if (match) return match[1].trim();
        
        // Pattern: sent to [name] for account
        match = text.match(/sent to\s+(.+?)\s+for account/i);
        if (match) return match[1].trim();
        
        // Pattern: paid [amount] to [name] on
        match = text.match(/paid\s+(?:Ksh|KES)[\d,\.]+\s+to\s+\d+\s*[-–]\s*(.+?)\s+on\s/i);
        if (match) return match[1].trim();
        
        // Pattern: paid to [name]
        match = text.match(/paid to\s+(.+?)(?:\.\s*(?:Till|on)|\.?\s*New M-?PESA|\s+on\s+[\d/])/i);
        if (match) return match[1].trim();
        
        // Pattern: received from [name]
        match = text.match(/received\s+(?:Ksh|KES)[\d,\.]+\s+from\s+(.+?)\s+(?:\d{7,}|on\s+[\d/])/i);
        if (match) return match[1].trim();
        
        return 'Unknown';
    }

    function extractSender(text) {
        // For receive transactions
        const match = text.match(/received\s+(?:Ksh|KES)[\d,\.]+\s+from\s+(.+?)\s+(?:\d{7,}|on\s+[\d/])/i);
        if (match) return match[1].trim();
        return 'Unknown';
    }

    function extractDate(text) {
        // Try to extract date from SMS
        const match = text.match(/on\s+(\d{1,2}\/\d{1,2}\/\d{2,4})/i);
        if (match) {
            const parts = match[1].split('/');
            if (parts.length === 3) {
                // Handle 2-digit year
                let year = parseInt(parts[2]);
                if (year < 100) year += 2000;
                const date = new Date(year, parseInt(parts[1]) - 1, parseInt(parts[0]));
                if (!isNaN(date.getTime())) return date;
            }
        }
        return new Date(); // Fallback to now
    }

    function getTariff(type, amount) {
        const tariffTable = type === 'withdraw' ? TARIFFS.withdraw : TARIFFS.send;
        const entry = tariffTable.find(t => amount >= t.min && amount <= t.max);
        return entry ? entry.charge : null;
    }

    // ─── Transaction Type Detection ──────────────────────────
    function detectTransactionType(text) {
        const lower = text.toLowerCase();
        
        // Check for Fuliza first (special case)
        if (CONFIG.PATTERNS.FULIZA.test(text)) {
            return {
                type: 'fuliza',
                label: 'Fuliza Payment',
                direction: 'expense',
                account: CONFIG.ACCOUNTS.BILLS
            };
        }
        
        // Check for receive
        if (CONFIG.PATTERNS.RECEIVED.test(lower)) {
            return {
                type: 'receive',
                label: 'Received Money',
                direction: 'in',
                account: CONFIG.ACCOUNTS.MPESA
            };
        }
        
        // Check for airtime
        if (CONFIG.PATTERNS.AIRTIME.test(lower)) {
            return {
                type: 'airtime',
                label: 'Airtime Purchase',
                direction: 'expense',
                account: CONFIG.ACCOUNTS.BILLS
            };
        }
        
        // Check for withdraw
        if (CONFIG.PATTERNS.WITHDRAW.test(lower)) {
            return {
                type: 'withdraw',
                label: 'Withdrawal',
                direction: 'transfer',
                account: CONFIG.ACCOUNTS.CASH
            };
        }
        
        // Check for paybill
        if (CONFIG.PATTERNS.PAYBILL.test(lower)) {
            return {
                type: 'paybill',
                label: 'Paybill',
                direction: 'expense',
                account: CONFIG.ACCOUNTS.SHOPPING
            };
        }
        
        // Check for buy goods
        if (CONFIG.PATTERNS.BUY_GOODS.test(lower)) {
            return {
                type: 'buy_goods',
                label: 'Buy Goods',
                direction: 'expense',
                account: CONFIG.ACCOUNTS.SHOPPING
            };
        }
        
        // Check for send (default)
        if (CONFIG.PATTERNS.SENT.test(lower)) {
            return {
                type: 'send',
                label: 'Send Money',
                direction: 'out',
                account: CONFIG.ACCOUNTS.MPESA
            };
        }
        
        // Default: treat as send
        return {
            type: 'send',
            label: 'Send Money',
            direction: 'out',
            account: CONFIG.ACCOUNTS.MPESA
        };
    }

    // ─── Main Parser Function ──────────────────────────────────
    function parseMpesaSMS(text) {
        const cleanText = text.trim();
        if (!cleanText || cleanText.length < 10) return null;
        
        // Check if it's an M-PESA message
        if (!CONFIG.PATTERNS.MPESA.test(cleanText)) {
            return null;
        }
        
        // Extract transaction details
        const ref = extractReference(cleanText);
        const amount = extractAmount(cleanText);
        const charge = extractCharge(cleanText);
        const transactionInfo = detectTransactionType(cleanText);
        const date = extractDate(cleanText);
        
        // Special handling for Fuliza
        let fulizaAmount = 0;
        if (transactionInfo.type === 'fuliza') {
            // For Fuliza, the amount is the charge/repayment
            const fulizaMatch = cleanText.match(/Ksh\s*([\d,]+\.?\d*)\s*(?:from your M-PESA has been used|used to pay|for your Fuliza)/i);
            if (fulizaMatch) {
                fulizaAmount = parseFloat(fulizaMatch[1].replace(/,/g, ''));
            }
        }
        
        // Skip if no valid transaction
        if (amount === 0 && transactionInfo.type !== 'fuliza') return null;
        if (amount === 0 && fulizaAmount === 0) return null;
        
        // Build transaction object
        const transaction = {
            ref: ref || `MPESA-${Date.now()}`,
            type: transactionInfo.type,
            label: transactionInfo.label,
            direction: transactionInfo.direction,
            amount: transactionInfo.type === 'fuliza' ? fulizaAmount : amount,
            charge: transactionInfo.type === 'fuliza' ? 0 : charge,
            recipient: transactionInfo.type === 'receive' ? extractSender(cleanText) : extractRecipient(cleanText),
            date: date,
            raw: cleanText,
            account: transactionInfo.account
        };
        
        // If transaction has no charge, try to calculate from tariff
        if (transaction.charge === 0 && (transaction.type === 'send' || transaction.type === 'withdraw')) {
            const tariffCharge = getTariff(transaction.type, transaction.amount);
            if (tariffCharge !== null && tariffCharge > 0) {
                // Only use tariff if SMS didn't specify charge
                // (SMS charge is more accurate)
                transaction.charge = tariffCharge;
            }
        }
        
        return transaction;
    }

    // ─── Ledger Entry Generator ──────────────────────────────
    function generateLedgerEntries(transaction) {
        if (!transaction) return [];
        
        const entries = [];
        const timestamp = Date.now();
        const baseId = timestamp;
        let idCounter = 0;
        
        switch (transaction.type) {
            case 'send':
                // Main transaction: Credit M-PESA
                if (transaction.amount > 0) {
                    entries.push({
                        id: baseId + idCounter++,
                        debit: '0',
                        credit: CONFIG.ACCOUNTS.MPESA,
                        amount: transaction.amount,
                        desc: `Sent Ksh${transaction.amount.toLocaleString()} to ${transaction.recipient}`
                    });
                }
                // Charge: Expense
                if (transaction.charge > 0) {
                    entries.push({
                        id: baseId + idCounter++,
                        debit: CONFIG.ACCOUNTS.BILLS,
                        credit: CONFIG.ACCOUNTS.MPESA,
                        amount: transaction.charge,
                        desc: `M-PESA send charge (${transaction.recipient})`
                    });
                }
                break;
                
            case 'receive':
                entries.push({
                    id: baseId + idCounter++,
                    debit: CONFIG.ACCOUNTS.MPESA,
                    credit: '0',
                    amount: transaction.amount,
                    desc: `Received Ksh${transaction.amount.toLocaleString()} from ${transaction.recipient}`
                });
                break;
                
            case 'withdraw':
                // Transfer: M-PESA → Cash
                if (transaction.amount > 0) {
                    entries.push({
                        id: baseId + idCounter++,
                        debit: CONFIG.ACCOUNTS.CASH,
                        credit: CONFIG.ACCOUNTS.MPESA,
                        amount: transaction.amount,
                        desc: `Withdrew Ksh${transaction.amount.toLocaleString()} from M-PESA`
                    });
                }
                // Charge: Expense
                if (transaction.charge > 0) {
                    entries.push({
                        id: baseId + idCounter++,
                        debit: CONFIG.ACCOUNTS.BILLS,
                        credit: CONFIG.ACCOUNTS.MPESA,
                        amount: transaction.charge,
                        desc: `M-PESA withdrawal charge (Ksh${transaction.amount.toLocaleString()})`
                    });
                }
                break;
                
            case 'paybill':
            case 'buy_goods':
                // Shopping expense
                if (transaction.amount > 0) {
                    entries.push({
                        id: baseId + idCounter++,
                        debit: CONFIG.ACCOUNTS.SHOPPING,
                        credit: CONFIG.ACCOUNTS.MPESA,
                        amount: transaction.amount,
                        desc: `${transaction.label}: Ksh${transaction.amount.toLocaleString()} to ${transaction.recipient}`
                    });
                }
                // Charge: Expense (if any)
                if (transaction.charge > 0) {
                    entries.push({
                        id: baseId + idCounter++,
                        debit: CONFIG.ACCOUNTS.BILLS,
                        credit: CONFIG.ACCOUNTS.MPESA,
                        amount: transaction.charge,
                        desc: `M-PESA ${transaction.label} charge`
                    });
                }
                break;
                
            case 'airtime':
                // Airtime expense
                if (transaction.amount > 0) {
                    entries.push({
                        id: baseId + idCounter++,
                        debit: CONFIG.ACCOUNTS.BILLS,
                        credit: CONFIG.ACCOUNTS.MPESA,
                        amount: transaction.amount,
                        desc: `Airtime purchase: Ksh${transaction.amount.toLocaleString()}`
                    });
                }
                break;
                
            case 'fuliza':
                // Fuliza repayment/expense
                if (transaction.amount > 0) {
                    entries.push({
                        id: baseId + idCounter++,
                        debit: CONFIG.ACCOUNTS.BILLS,
                        credit: CONFIG.ACCOUNTS.MPESA,
                        amount: transaction.amount,
                        desc: `Fuliza M-PESA payment: Ksh${transaction.amount.toLocaleString()}`
                    });
                }
                break;
                
            default:
                // Unknown transaction type - treat as expense
                if (transaction.amount > 0) {
                    entries.push({
                        id: baseId + idCounter++,
                        debit: CONFIG.ACCOUNTS.BILLS,
                        credit: CONFIG.ACCOUNTS.MPESA,
                        amount: transaction.amount,
                        desc: `M-PESA transaction: Ksh${transaction.amount.toLocaleString()}`
                    });
                }
        }
        
        return entries;
    }

    // ─── SMS Splitter ──────────────────────────────────────────
    function splitSMSMessages(text) {
        // Split by common M-PESA message boundaries
        const messages = [];
        const lines = text.split(/\n{2,}|(?=[A-Z]{2}[A-Z0-9]{8}\s+Confirmed)|(?=Confirmed\.)/g);
        
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.length > 20 && CONFIG.PATTERNS.MPESA.test(trimmed)) {
                messages.push(trimmed);
            }
        }
        
        return messages;
    }

    // ─── Main Processing Function ─────────────────────────────
    function processSMS(text, existingRefs = new Set()) {
        const messages = splitSMSMessages(text);
        const results = [];
        const processedRefs = new Set();
        
        for (const message of messages) {
            // Parse the message
            const transaction = parseMpesaSMS(message);
            if (!transaction) continue;
            
            // Check for duplicate (by reference)
            if (transaction.ref) {
                if (existingRefs.has(transaction.ref) || processedRefs.has(transaction.ref)) {
                    transaction.isDuplicate = true;
                    results.push(transaction);
                    continue;
                }
                processedRefs.add(transaction.ref);
            }
            
            // Generate ledger entries
            const entries = generateLedgerEntries(transaction);
            transaction.entries = entries;
            
            results.push(transaction);
        }
        
        return results;
    }

    // ─── Save to Ledger ────────────────────────────────────────
    async function saveToLedger(transaction) {
        if (!transaction || !transaction.entries || transaction.entries.length === 0) {
            return { success: false, error: 'No entries to save' };
        }
        
        if (transaction.isDuplicate) {
            return { success: false, error: 'Duplicate transaction', isDuplicate: true };
        }
        
        let saved = 0;
        const errors = [];
        
        for (const entry of transaction.entries) {
            try {
                // Check if entry already exists (by id)
                const existing = await getData('tx', entry.id);
                if (!existing) {
                    await saveData('tx', entry);
                    saved++;
                }
            } catch (error) {
                errors.push(`Failed to save entry ${entry.id}: ${error.message}`);
            }
        }
        
        // Save backup if available
        if (typeof saveBackup === 'function') {
            try {
                await saveBackup();
            } catch (error) {
                errors.push(`Backup failed: ${error.message}`);
            }
        }
        
        return {
            success: saved > 0,
            saved: saved,
            total: transaction.entries.length,
            errors: errors.length > 0 ? errors : null,
            isDuplicate: false
        };
    }

    async function saveMultipleToLedger(transactions) {
        const results = [];
        let totalSaved = 0;
        let duplicateCount = 0;
        
        for (const transaction of transactions) {
            const result = await saveToLedger(transaction);
            results.push({ transaction, result });
            if (result.success) totalSaved += result.saved;
            if (result.isDuplicate) duplicateCount++;
        }
        
        return {
            total: transactions.length,
            saved: totalSaved,
            duplicates: duplicateCount,
            details: results
        };
    }

    // ─── Batch Processing with UI ─────────────────────────────
    function formatTransactionHTML(transaction) {
        if (!transaction) return '';
        
        const typeIcons = {
            send: '📤',
            receive: '📥',
            withdraw: '🏧',
            paybill: '🧾',
            buy_goods: '🛒',
            airtime: '📞',
            fuliza: '⚡'
        };
        
        const icon = typeIcons[transaction.type] || '📱';
        const colorClass = transaction.isDuplicate ? 'duplicate' : 'new';
        const chargeDisplay = transaction.charge > 0 ? `KSh ${transaction.charge.toLocaleString()}` : 'KSh 0';
        
        let html = `
            <div class="mpesa-transaction ${colorClass}" style="
                border: 1px solid ${transaction.isDuplicate ? '#fde68a' : '#e5e7eb'};
                border-radius: 8px;
                padding: 11px 13px;
                margin-bottom: 8px;
                background: ${transaction.isDuplicate ? '#fffbeb' : 'white'};
                opacity: ${transaction.isDuplicate ? '0.8' : '1'};
            ">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 3px;">
                            <span style="font-size: 14px;">${icon}</span>
                            <span style="font-size: 13px; font-weight: 600; color: #1a1a1a;">
                                ${transaction.label}
                            </span>
                            ${transaction.isDuplicate ? '<span style="font-size: 10px; font-weight: 700; background: #fef3c7; color: #92400e; padding: 2px 7px; border-radius: 20px;">⏳ Already Logged</span>' : ''}
                            ${transaction.ref ? `<span style="font-size: 10px; color: #9ca3af; font-family: monospace; margin-left: 6px;">${transaction.ref}</span>` : ''}
                        </div>
                        
                        ${transaction.recipient ? `
                            <div style="font-size: 12px; color: #374151;">
                                ${transaction.type === 'receive' ? 'From:' : 'To:'} ${transaction.recipient}
                            </div>
                        ` : ''}
                        
                        ${transaction.amount > 0 ? `
                            <div style="font-size: 11px; color: #6b7280; margin-top: 2px;">
                                Amount: KSh ${transaction.amount.toLocaleString()}
                            </div>
                        ` : ''}
                        
                        ${transaction.entries && transaction.entries.length > 0 ? `
                            <div style="font-size: 10px; color: #6b7280; margin-top: 2px; font-family: monospace;">
                                ${transaction.entries.length} ledger entr${transaction.entries.length > 1 ? 'ies' : 'y'}
                            </div>
                        ` : ''}
                    </div>
                    
                    <div style="text-align: right; flex-shrink: 0;">
                        ${!transaction.isDuplicate ? `
                            <div style="font-size: 11px; color: #6b7280;">Charge</div>
                            <div style="font-size: 17px; font-weight: 800; ${transaction.charge > 0 ? 'color: #dc2626;' : 'color: #6b7280;'}">
                                ${chargeDisplay}
                            </div>
                        ` : `
                            <div style="font-size: 11px; color: #92400e;">Already in ledger</div>
                            <div style="font-size: 12px; font-weight: 700; color: #b45309;">Skipped</div>
                        `}
                    </div>
                </div>
            </div>
        `;
        
        return html;
    }

    // ─── UI Components ─────────────────────────────────────────
    function createModal() {
        // Check if modal already exists
        if (document.getElementById('mpesa-modal')) return;
        
        const modal = document.createElement('div');
        modal.id = 'mpesa-modal';
        modal.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 7000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            background: rgba(0, 0, 0, 0.55);
            backdrop-filter: blur(10px);
        `;
        modal.innerHTML = `
            <div style="
                background: #ffffff;
                border-radius: 16px;
                width: 100%;
                max-width: 600px;
                max-height: 90vh;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                box-shadow: 0 24px 80px rgba(0,0,0,0.25);
                border: 1px solid rgba(0,0,0,0.08);
            ">
                <!-- Header -->
                <div style="
                    background: linear-gradient(135deg, #00a651, #007a3d);
                    padding: 20px 22px 16px;
                    flex-shrink: 0;
                ">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="
                                width: 40px;
                                height: 40px;
                                background: rgba(255,255,255,0.2);
                                border-radius: 10px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 20px;
                            ">📱</div>
                            <div>
                                <div style="color: white; font-size: 15px; font-weight: 700; letter-spacing: -.01em;">
                                    M-PESA Transaction Parser
                                </div>
                                <div style="color: rgba(255,255,255,0.75); font-size: 11px; margin-top: 1px;">
                                    Extract & log all M-PESA transaction charges
                                </div>
                            </div>
                        </div>
                        <button id="mpesa-close-btn" style="
                            background: rgba(255,255,255,0.15);
                            border: none;
                            color: white;
                            width: 32px;
                            height: 32px;
                            border-radius: 50%;
                            font-size: 18px;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            line-height: 1;
                        ">×</button>
                    </div>
                </div>
                
                <!-- Body -->
                <div style="flex: 1; overflow-y: auto; padding: 18px;">
                    <!-- Input Area -->
                    <div style="background: #f0fdf4; border: 1.5px dashed #86efac; border-radius: 10px; padding: 14px; margin-bottom: 14px;">
                        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; color: #166534;">
                            📋 Paste M-PESA SMS Messages
                        </p>
                        <ol style="margin: 0; padding-left: 18px; font-size: 12px; color: #15803d; line-height: 1.7;">
                            <li>Copy one or multiple M-PESA SMS messages</li>
                            <li>Paste them in the text area below</li>
                            <li>Click <strong>Extract & Log</strong> to process all transactions</li>
                        </ol>
                    </div>
                    
                    <textarea id="mpesa-sms-input" 
                        placeholder="Paste your M-PESA SMS messages here...
                        
                        Examples:
                        UGM6F01G8B Confirmed. Ksh120.00 sent to emilly otieno on 22/7/26 at 8:46 AM. Transaction cost, Ksh7.00.
                        UGLMW012RP Confirmed. You have received Ksh3,052.00 from KEVIN JUMA on 21/7/26 at 9:44 PM.
                        
                        Supports: Send, Receive, Withdraw, Paybill, Buy Goods, Airtime, Fuliza"
                        style="
                            width: 100%;
                            height: 160px;
                            border: 1px solid #e5e7eb;
                            border-radius: 8px;
                            padding: 12px;
                            font-size: 12.5px;
                            font-family: inherit;
                            resize: vertical;
                            outline: none;
                            background: #fafafa;
                            line-height: 1.6;
                            box-sizing: border-box;
                        "
                    ></textarea>
                    
                    <div style="display: flex; gap: 8px; margin-top: 10px;">
                        <button id="mpesa-process-btn" style="
                            flex: 1;
                            background: linear-gradient(135deg, #00a651, #007a3d);
                            color: white;
                            border: none;
                            padding: 12px;
                            border-radius: 8px;
                            font-size: 13px;
                            font-weight: 700;
                            cursor: pointer;
                            font-family: inherit;
                        ">
                            📊 Extract & Log Charges
                        </button>
                        <button id="mpesa-clear-btn" style="
                            background: #f3f4f6;
                            color: #6b7280;
                            border: none;
                            padding: 12px 14px;
                            border-radius: 8px;
                            font-size: 13px;
                            cursor: pointer;
                            font-family: inherit;
                        ">
                            ✕ Clear
                        </button>
                    </div>
                    
                    <!-- Results -->
                    <div id="mpesa-results" style="margin-top: 14px; display: none;">
                        <div id="mpesa-results-inner"></div>
                        <button id="mpesa-log-all-btn" style="
                            width: 100%;
                            background: linear-gradient(135deg, #00a651, #007a3d);
                            color: white;
                            border: none;
                            padding: 13px;
                            border-radius: 8px;
                            font-size: 13px;
                            font-weight: 700;
                            cursor: pointer;
                            margin-top: 10px;
                            font-family: inherit;
                            display: none;
                        ">
                            ✅ Log All New Charges to Ledger
                        </button>
                    </div>
                </div>
                
                <!-- Status Bar -->
                <div id="mpesa-status" style="
                    padding: 10px 18px;
                    background: #f9fafb;
                    border-top: 1px solid #f0f0f0;
                    font-size: 12px;
                    color: #6b7280;
                    display: none;
                "></div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // ── Event Listeners ──
        
        // Close modal
        document.getElementById('mpesa-close-btn').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        
        // Process button
        document.getElementById('mpesa-process-btn').addEventListener('click', handleProcess);
        
        // Clear button
        document.getElementById('mpesa-clear-btn').addEventListener('click', () => {
            document.getElementById('mpesa-sms-input').value = '';
            document.getElementById('mpesa-results').style.display = 'none';
            document.getElementById('mpesa-status').style.display = 'none';
        });
        
        // Log all button
        document.getElementById('mpesa-log-all-btn').addEventListener('click', handleLogAll);
    }

    function closeModal() {
        const modal = document.getElementById('mpesa-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    function openModal() {
        let modal = document.getElementById('mpesa-modal');
        if (!modal) {
            createModal();
            modal = document.getElementById('mpesa-modal');
        }
        modal.style.display = 'flex';
        updateExistingRefs();
    }

    // ─── Get Existing References from Ledger ──────────────────
    async function updateExistingRefs() {
        try {
            const transactions = await getAllData('tx');
            const refs = new Set();
            
            for (const tx of transactions) {
                // Extract reference from description
                const match = tx.desc.match(/\(([A-Z]{2}[A-Z0-9]{8})\)/);
                if (match) {
                    refs.add(match[1]);
                }
            }
            
            return refs;
        } catch (error) {
            console.error('Failed to get existing refs:', error);
            return new Set();
        }
    }

    // ─── Main Process Handler ──────────────────────────────────
    let pendingTransactions = [];
    let existingRefs = new Set();

    async function handleProcess() {
        const input = document.getElementById('mpesa-sms-input');
        const resultsDiv = document.getElementById('mpesa-results');
        const resultsInner = document.getElementById('mpesa-results-inner');
        const logAllBtn = document.getElementById('mpesa-log-all-btn');
        const statusDiv = document.getElementById('mpesa-status');
        const processBtn = document.getElementById('mpesa-process-btn');
        
        const text = input.value.trim();
        if (!text) {
            showStatus('Please paste M-PESA SMS messages first.', 'warning');
            return;
        }
        
        // Update existing refs
        existingRefs = await updateExistingRefs();
        
        // Process
        processBtn.disabled = true;
        processBtn.textContent = '⏳ Processing...';
        showStatus('Analyzing messages...', 'info');
        
        try {
            const results = processSMS(text, existingRefs);
            pendingTransactions = results;
            
            if (results.length === 0) {
                resultsInner.innerHTML = `
                    <div style="
                        background: #fef2f2;
                        border: 1px solid #fecaca;
                        border-radius: 8px;
                        padding: 14px;
                        text-align: center;
                    ">
                        <div style="font-size: 20px; margin-bottom: 6px;">🤔</div>
                        <div style="font-size: 13px; font-weight: 600; color: #991b1b;">
                            No M-PESA messages detected
                        </div>
                        <div style="font-size: 12px; color: #b91c1c; margin-top: 4px; line-height: 1.6;">
                            Make sure you paste the <strong>full SMS text</strong>.<br>
                            Supported: Send, Receive, Withdraw, Paybill, Buy Goods, Airtime, Fuliza.
                        </div>
                    </div>
                `;
                logAllBtn.style.display = 'none';
                resultsDiv.style.display = 'block';
                showStatus('No valid M-PESA messages found.', 'error');
                processBtn.disabled = false;
                processBtn.textContent = '📊 Extract & Log Charges';
                return;
            }
            
            // Display results
            let html = '';
            let newCount = 0;
            let duplicateCount = 0;
            
            for (const tx of results) {
                html += formatTransactionHTML(tx);
                if (tx.isDuplicate) {
                    duplicateCount++;
                } else if (tx.entries && tx.entries.length > 0) {
                    newCount++;
                }
            }
            
            // Summary
            const total = results.length;
            const totalCharge = results
                .filter(tx => !tx.isDuplicate)
                .reduce((sum, tx) => sum + tx.charge, 0);
            
            html = `
                <div style="
                    background: #f0fdf4;
                    border: 1px solid #86efac;
                    border-radius: 8px;
                    padding: 10px 14px;
                    margin-bottom: 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <div>
                        <div style="font-size: 11px; font-weight: 600; color: #166534; text-transform: uppercase; letter-spacing: .05em;">
                            Summary
                        </div>
                        <div style="font-size: 13px; color: #15803d;">
                            ${newCount} new transaction${newCount !== 1 ? 's' : ''}
                            ${duplicateCount > 0 ? `, ${duplicateCount} duplicate${duplicateCount !== 1 ? 's' : ''} skipped` : ''}
                        </div>
                    </div>
                    ${newCount > 0 ? `
                        <div style="text-align: right;">
                            <div style="font-size: 11px; color: #166534;">Total Charges</div>
                            <div style="font-size: 20px; font-weight: 800; color: #15803d;">KSh ${totalCharge.toLocaleString()}</div>
                        </div>
                    ` : ''}
                </div>
                ${html}
            `;
            
            resultsInner.innerHTML = html;
            
            // Show/hide log all button
            logAllBtn.style.display = newCount > 0 ? 'block' : 'none';
            if (newCount === 0 && total > 0) {
                resultsInner.innerHTML += `
                    <div style="
                        background: #fffbeb;
                        border: 1px solid #fde68a;
                        border-radius: 8px;
                        padding: 12px;
                        text-align: center;
                        margin-top: 6px;
                    ">
                        <div style="font-size: 13px; font-weight: 600; color: #92400e;">
                            All transactions already logged
                        </div>
                        <div style="font-size: 12px; color: #b45309; margin-top: 3px;">
                            No new charges to import.
                        </div>
                    </div>
                `;
            }
            
            resultsDiv.style.display = 'block';
            showStatus(`Found ${total} transaction${total !== 1 ? 's' : ''}. ${newCount} new, ${duplicateCount} duplicates skipped.`, 'success');
            
        } catch (error) {
            console.error('Processing error:', error);
            showStatus(`Error: ${error.message}`, 'error');
        } finally {
            processBtn.disabled = false;
            processBtn.textContent = '📊 Extract & Log Charges';
        }
    }

    // ─── Log All Handler ──────────────────────────────────────
    async function handleLogAll() {
        const logAllBtn = document.getElementById('mpesa-log-all-btn');
        const statusDiv = document.getElementById('mpesa-status');
        
        const toLog = pendingTransactions.filter(tx => !tx.isDuplicate && tx.entries && tx.entries.length > 0);
        
        if (toLog.length === 0) {
            showStatus('No new transactions to log.', 'info');
            return;
        }
        
        logAllBtn.disabled = true;
        logAllBtn.textContent = '⏳ Logging...';
        showStatus(`Logging ${toLog.length} transaction${toLog.length !== 1 ? 's' : ''}...`, 'info');
        
        let saved = 0;
        let errors = [];
        
        for (const tx of toLog) {
            try {
                const result = await saveToLedger(tx);
                if (result.success) {
                    saved += result.saved;
                } else if (result.errors) {
                    errors.push(...result.errors);
                }
            } catch (error) {
                errors.push(`Failed to log ${tx.ref || 'unknown'}: ${error.message}`);
            }
        }
        
        // Refresh ledger display if available
        if (typeof nav === 'function') {
            try {
                nav('dash');
            } catch (e) {}
        }
        
        // Update status
        if (errors.length === 0) {
            showStatus(`✅ Successfully logged ${saved} entry${saved !== 1 ? 's' : ''} to ledger!`, 'success');
            document.getElementById('mpesa-log-all-btn').style.display = 'none';
            
            // Clear input on success
            setTimeout(() => {
                document.getElementById('mpesa-sms-input').value = '';
                document.getElementById('mpesa-results').style.display = 'none';
            }, 3000);
        } else {
            showStatus(`⚠️ ${saved} entry${saved !== 1 ? 's' : ''} logged, but ${errors.length} error${errors.length !== 1 ? 's' : ''} occurred.`, 'warning');
            console.error('Logging errors:', errors);
        }
        
        logAllBtn.disabled = false;
        logAllBtn.textContent = '✅ Log All New Charges to Ledger';
    }

    // ─── Status Display ──────────────────────────────────────
    function showStatus(message, type = 'info') {
        const statusDiv = document.getElementById('mpesa-status');
        if (!statusDiv) return;
        
        statusDiv.style.display = 'block';
        statusDiv.textContent = message;
        
        const colors = {
            info: '#6b7280',
            success: '#166534',
            warning: '#92400e',
            error: '#991b1b'
        };
        
        const bgColors = {
            info: '#f9fafb',
            success: '#f0fdf4',
            warning: '#fffbeb',
            error: '#fef2f2'
        };
        
        statusDiv.style.color = colors[type] || colors.info;
        statusDiv.style.background = bgColors[type] || bgColors.info;
    }

    // ─── Public API ────────────────────────────────────────────
    window.travisMpesa = {
        // Open the modal
        open: openModal,
        
        // Close the modal
        close: closeModal,
        
        // Parse SMS text without saving
        parse: (text) => {
            const messages = splitSMSMessages(text);
            return messages.map(msg => parseMpesaSMS(msg)).filter(tx => tx !== null);
        },
        
        // Process and save to ledger
        process: async (text) => {
            const refs = await updateExistingRefs();
            const results = processSMS(text, refs);
            const result = await saveMultipleToLedger(results.filter(tx => !tx.isDuplicate));
            return result;
        },
        
        // Get tariff for a given amount
        tariff: (type, amount) => {
            return getTariff(type, amount);
        },
        
        // Get existing references
        getExistingRefs: updateExistingRefs,
        
        // Format transaction for display
        format: formatTransactionHTML
    };

    // ─── Auto-inject Styles ──────────────────────────────────
    function injectStyles() {
        if (document.getElementById('mpesa-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'mpesa-styles';
        style.textContent = `
            .mpesa-transaction.duplicate {
                opacity: 0.8;
            }
            .mpesa-transaction .chip {
                display: inline-block;
                padding: 2px 8px;
                border-radius: 20px;
                font-size: 10px;
                font-weight: 600;
            }
            .mpesa-transaction .chip-warning {
                background: #fef3c7;
                color: #92400e;
            }
        `;
        document.head.appendChild(style);
    }
    
    injectStyles();

    // ─── Integration with Travis ─────────────────────────────
    // Add to navbar if Travis is loaded
    function addToNavbar() {
        // Wait for Travis to be ready
        const checkTravis = setInterval(() => {
            if (document.getElementById('nav-sidebar')) {
                clearInterval(checkTravis);
                
                const sidebar = document.getElementById('nav-sidebar');
                const existingBtn = document.getElementById('nav-mpesa');
                if (existingBtn) return;
                
                // Find a good place to insert
                const insertBefore = sidebar.querySelector('.sidebar-footer') || sidebar.querySelector('button:last-child');
                
                const btn = document.createElement('button');
                btn.id = 'nav-mpesa';
                btn.className = 'nav-item';
                btn.innerHTML = '📱 M-PESA Charges';
                btn.onclick = () => {
                    window.travisMpesa.open();
                    // Close mobile sidebar if open
                    if (document.getElementById('nav-sidebar').classList.contains('mobile-open')) {
                        document.getElementById('nav-sidebar').classList.remove('mobile-open');
                    }
                };
                
                if (insertBefore) {
                    sidebar.insertBefore(btn, insertBefore);
                } else {
                    sidebar.appendChild(btn);
                }
            }
        }, 500);
    }

    // ─── Initialize ──────────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            createModal();
            addToNavbar();
        });
    } else {
        createModal();
        addToNavbar();
    }

    // Also handle case when Travis loads after
    setTimeout(addToNavbar, 2000);

    console.log('📱 M-PESA Parser v2.0 loaded successfully!');
    console.log('🔹 Open with: travisMpesa.open()');
    console.log('🔹 Parse SMS: travisMpesa.parse(text)');
    console.log('🔹 Process & save: travisMpesa.process(text)');
})();
