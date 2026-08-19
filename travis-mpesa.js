/* ============================================================================
   TRAVIS GUARDIAN — M-PESA SMS TRACKER (mpesa.js)
   ----------------------------------------------------------------------------
   Understands raw M-Pesa / bank SMS text, classifies the direction and nature
   of the money movement, and posts ledger entries using the SAME storage
   pipeline as the main app (saveData / state.transactions / saveBackup / nav).

   MONEY-MOVEMENT MODEL
   ---------------------
   - EXPENSE  : money leaves the system entirely (sent to a person, paid a
                bill, bought goods, purchased airtime, loan/Fuliza repayment).
                Debits an expense/person account, credits the wallet.
   - INCOME   : money enters the system (received from someone, credited).
                Debits the wallet, credits the source.
   - CONTRA   : money simply changes FORM — cash withdrawn from the wallet
                into your pocket, or cash deposited back into the wallet.
                Net worth is unchanged; this moves value between the
                liquid "Cash" account and the M-Pesa "wallet" account.
   - CHARGE   : Safaricom transaction cost / Fuliza interest. Always logged
                as its own "M-Pesa Charge" expense line, on top of whatever
                the parent transaction was.

   The "wallet" account name matches whatever the main app's own dropdown
   already uses for this profile type, so balances stay consistent with
   manually-entered transactions:
       personal profile -> "M-Pesa"
       business profile -> "Bank / M-Pesa"
   ============================================================================ */

(function () {
    'use strict';

    const DB_NAME = 'TravisGuardian_v1.0';
    const DB_VERSION = 1; // unchanged — this module never alters the schema

    // ------------------------------------------------------------------------
    // 1. NUMBER / TEXT HELPERS
    // ------------------------------------------------------------------------

    function toNumber(str) {
        if (str === undefined || str === null) return 0;
        const n = parseFloat(String(str).replace(/,/g, ''));
        return isNaN(n) ? 0 : n;
    }

    function money(n) {
        return Number(n || 0).toLocaleString('en-KE');
    }

    // Small, fast, deterministic string hash (for messages with no clean ref code)
    function hashString(str) {
        let h = 0x811c9dc5;
        for (let i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            h = Math.imul(h, 0x01000193);
        }
        return (h >>> 0).toString(36).toUpperCase();
    }

    // ------------------------------------------------------------------------
    // 2. MESSAGE-LOOKS-LIKE-MPESA GATE
    // ------------------------------------------------------------------------

    const LOOKS_LIKE_MPESA = [
        /M-?PESA/i,
        /transaction cost/i,
        /new m-?pesa balance/i,
        /safaricom/i,
        /fuliza/i,
        /m-?shwari/i,
        /confirmed\./i
    ];

    function looksLikeMpesaMessage(text) {
        const clean = text.trim();
        if (!clean) return false;
        return LOOKS_LIKE_MPESA.some(rx => rx.test(clean));
    }

    // ------------------------------------------------------------------------
    // 3. DIRECTION / TYPE CLASSIFICATION
    //    Checked in priority order — most specific patterns first, so that
    //    e.g. a Fuliza repayment message doesn't get mis-read as a generic
    //    "paid" expense, and a deposit doesn't get mis-read as "received".
    // ------------------------------------------------------------------------

    const PATTERNS = {
        fulizaCharge: /fuliza m-?pesa charge of\s*(?:Ksh|KES)\s*[\d,]+\.?\d*/i,
        fulizaRepay: /(fuliza)/i,
        usedToPay: /(?:has been used to|you have used)\s*(?:ksh|kes)?[\d,.\s]*\s*to\s+(fully|partially)\s+pay/i,
        loanKeyword: /(loan|m-?shwari|kcb)/i,
        deposit: /\b(cash )?deposit(ed)?\b/i,
        withdraw: /\bwithdraw(n|al)?\b/i,
        airtime: /(you have bought.*airtime|airtime.*you have bought|bought.*airtime)/i,
        paybillAccount: /paid\s+(?:Ksh|KES)[\d,.]+\s+to\s+\d+.*for account/i,
        paybillGeneric: /paid\s+(?:Ksh|KES)[\d,.]+\s+to\s+\d+/i,
        buyGoodsTill: /paid to.+till no/i,
        buyGoodsGeneric: /\bpaid to\b/i,
        receive: /\byou have received\b|\breceived\s+(?:Ksh|KES)/i,
        bankCredited: /\b(has been )?credited\b/i,
        sentTo: /\bsent to\b/i,
        purchased: /\b(purchased|purchase of)\b/i,
        bought: /\bbought\b/i,
        give: /\bgive\b/i,
        reversal: /\breversed\b/i
    };

    /**
     * Determine WHAT the message is and its financial NATURE.
     * nature: 'income' | 'expense' | 'contra' | 'charge_only' | 'unknown'
     */
    function classifyMessage(text) {
        const t = text.trim();

        // --- Fuliza: charge notice ---
        if (PATTERNS.fulizaCharge.test(t)) {
            return { type: 'fuliza_charge', nature: 'charge_only', label: 'Fuliza Charge', icon: '⚡' };
        }

        // --- "has been used to fully/partially pay ..." (Fuliza or loan repayment) ---
        if (PATTERNS.usedToPay.test(t)) {
            if (PATTERNS.fulizaRepay.test(t)) {
                return { type: 'fuliza_repayment', nature: 'expense', label: 'Fuliza Repayment', icon: '⚡' };
            }
            return { type: 'loan_repayment', nature: 'expense', label: 'Loan Repayment', icon: '💳' };
        }

        // --- Fuliza repayment mentioned without "used to pay" phrasing ---
        if (PATTERNS.fulizaRepay.test(t) && /(pay|repay|clear)/i.test(t)) {
            return { type: 'fuliza_repayment', nature: 'expense', label: 'Fuliza Repayment', icon: '⚡' };
        }

        // --- Contra: deposit / withdraw (self-transfer, not income/expense) ---
        if (PATTERNS.deposit.test(t)) {
            return { type: 'deposit', nature: 'contra', label: 'Cash Deposit', icon: '🔁' };
        }
        if (PATTERNS.withdraw.test(t)) {
            return { type: 'withdraw', nature: 'contra', label: 'Withdrawal', icon: '🏧' };
        }

        // --- Reversal ---
        if (PATTERNS.reversal.test(t)) {
            return { type: 'reversal', nature: 'contra', label: 'Reversal', icon: '↩️' };
        }

        // --- Airtime ---
        if (PATTERNS.airtime.test(t)) {
            return { type: 'airtime', nature: 'expense', label: 'Airtime', icon: '📞' };
        }

        // --- Paybill (with or without an account number) ---
        if (PATTERNS.paybillAccount.test(t) || PATTERNS.paybillGeneric.test(t)) {
            return { type: 'paybill', nature: 'expense', label: 'Paybill', icon: '🧾' };
        }

        // --- Buy Goods / Till ---
        if (PATTERNS.buyGoodsTill.test(t) || PATTERNS.buyGoodsGeneric.test(t)) {
            return { type: 'buy_goods', nature: 'expense', label: 'Buy Goods', icon: '🛒' };
        }

        // --- Receive (external inflow) ---
        if (PATTERNS.receive.test(t)) {
            return { type: 'receive', nature: 'income', label: 'Received', icon: '📥' };
        }

        // --- Bank credit alert not already caught above ---
        if (PATTERNS.bankCredited.test(t)) {
            return { type: 'bank_credit', nature: 'income', label: 'Bank Credit', icon: '📥' };
        }

        // --- Generic outgoing: sent to / purchased / bought / give ---
        if (PATTERNS.sentTo.test(t) || PATTERNS.purchased.test(t) || PATTERNS.bought.test(t) || PATTERNS.give.test(t)) {
            return { type: 'send', nature: 'expense', label: 'Sent Money', icon: '📤' };
        }

        return { type: 'unknown', nature: 'unknown', label: 'M-Pesa Transaction', icon: '📱' };
    }

    // ------------------------------------------------------------------------
    // 4. FIELD EXTRACTION
    // ------------------------------------------------------------------------

    function extractRef(text) {
        const RESERVED = new Set(['CONFIRMED', 'MPESA', 'TRANSACTION']);
        const rx = /\b([A-Z0-9]{10})\b/g;
        let match;
        while ((match = rx.exec(text)) !== null) {
            if (!RESERVED.has(match[1].toUpperCase())) return match[1];
        }
        return null;
    }

    /**
     * Pulls the principal transacted amount and the Safaricom charge out of
     * the message, deliberately stripping "transaction cost" / "new balance"
     * / "Fuliza limit" figures first so they can't be mistaken for the
     * principal amount.
     */
    function extractAmounts(text) {
        let working = text;

        const costMatch = working.match(/transaction cost[,:]?\s*(?:Ksh|KES)\s*([\d,]+\.?\d*)/i);
        const charge = costMatch ? toNumber(costMatch[1]) : 0;
        if (costMatch) working = working.replace(costMatch[0], '');

        const fulizaChargeMatch = working.match(/fuliza m-?pesa charge of\s*(?:Ksh|KES)\s*([\d,]+\.?\d*)/i);
        const fulizaCharge = fulizaChargeMatch ? toNumber(fulizaChargeMatch[1]) : 0;
        if (fulizaChargeMatch) working = working.replace(fulizaChargeMatch[0], '');

        const balanceMatch = working.match(/new\s+(?:m-?pesa\s+)?balance\s+is\s*(?:Ksh|KES)\s*([\d,]+\.?\d*)/i);
        if (balanceMatch) working = working.replace(balanceMatch[0], '');

        const limitMatch = working.match(/(?:fuliza\s+)?limit\s+is\s*(?:Ksh|KES)\s*([\d,]+\.?\d*)/i);
        if (limitMatch) working = working.replace(limitMatch[0], '');

        const remaining = [...working.matchAll(/(?:Ksh|KES)\s*([\d,]+\.?\d*)/gi)].map(m => toNumber(m[1]));
        const principal = remaining.length > 0 ? remaining[0] : 0;

        return { principal, charge: charge || fulizaCharge };
    }

    function extractRecipient(text) {
        const patterns = [
            /sent to\s+(.+?)\s+(?:\d{7,}|on\s+[\d/])/i,
            /sent to\s+(.+?)\s+for account/i,
            /paid\s+(?:Ksh|KES)[\d,.]+\s+to\s+\d+\s*[-–]\s*(.+?)\s+on\s/i,
            /paid to\s+(.+?)(?:\.\s*(?:Till|on)|\.?\s*New M-?PESA|\s+on\s+[\d/])/i,
            /from\s+\d+\s*[-–]\s*(.+?)\s+on\s/i,
            /from\s+\d+\s*[-–]\s*(.+?)\s*New M-?PESA/i,
            /received\s+(?:Ksh|KES)[\d,.]+\s+from\s+(.+?)\s+(?:\d{7,}|on\s+[\d/])/i,
            /credited\s+with\s+(?:Ksh|KES)[\d,.]+\s+from\s+(.+)/i
        ];
        for (const rx of patterns) {
            const m = text.match(rx);
            if (m) return m[1].trim();
        }
        return '';
    }

    /**
     * Full parse of a single message chunk into a structured record.
     * Returns null if the chunk doesn't look like an M-Pesa/bank message.
     */
    function parseOne(rawText) {
        const clean = rawText.trim();
        if (!looksLikeMpesaMessage(clean)) return null;

        const classified = classifyMessage(clean);
        const { principal, charge } = extractAmounts(clean);
        const recipient = extractRecipient(clean);
        const explicitRef = extractRef(clean);
        const ref = explicitRef || (classified.type + '-' + hashString(clean));

        // Nothing usable in this message at all
        if (principal <= 0 && charge <= 0) return null;

        return {
            type: classified.type,
            nature: classified.nature,
            label: classified.label,
            icon: classified.icon,
            ref,
            hasExplicitRef: !!explicitRef,
            amount: principal,
            charge,
            recipient,
            raw: clean
        };
    }

    // ------------------------------------------------------------------------
    // 5. SPLITTING A BULK PASTE INTO INDIVIDUAL MESSAGES + IN-BATCH DEDUPE
    //    FIXED: Uses the unique 10-char alphanumeric code as the definitive
    //    message delimiter. Every M-Pesa message starts with this code.
    // ------------------------------------------------------------------------

    function splitMessages(bulkText) {
        // Each M-Pesa message starts with a 10-character alphanumeric code
        // Pattern: exactly 10 uppercase alphanumeric characters, followed by space or newline
        const messageStartPattern = /\b([A-Z0-9]{10})\s+(?:Confirmed\.|You have|New M-PESA|received|paid|sent|deposited|withdrawn|bought|purchased|used|Fuliza|Loan|M-Shwari|KCB|Safaricom)/gi;
        
        // Find all message starts with their codes
        const starts = [];
        let match;
        while ((match = messageStartPattern.exec(bulkText)) !== null) {
            starts.push({
                index: match.index,
                code: match[1],
                length: match[0].length
            });
        }
        
        // If no message starts found, try fallback to split by double newlines or "Confirmed."
        if (starts.length === 0) {
            // Try alternative splitting methods as fallback
            const chunks = bulkText.split(/\n{2,}|(?=Confirmed\.)/g)
                .map(s => s.trim())
                .filter(s => s.length > 10);
            
            // Verify each chunk has a valid code
            const validChunks = chunks.filter(chunk => {
                const code = extractRef(chunk);
                return code !== null;
            });
            
            if (validChunks.length > 0) {
                return validChunks;
            }
            
            // Last resort: split by lines and try to reconstruct
            const lines = bulkText.split('\n').filter(s => s.trim().length > 0);
            const reconstructed = [];
            let currentChunk = '';
            
            for (const line of lines) {
                const code = extractRef(line);
                if (code !== null && currentChunk.length > 0) {
                    reconstructed.push(currentChunk.trim());
                    currentChunk = line;
                } else {
                    currentChunk += ' ' + line;
                }
            }
            if (currentChunk.length > 0) {
                reconstructed.push(currentChunk.trim());
            }
            
            return reconstructed.filter(chunk => {
                const code = extractRef(chunk);
                return code !== null && chunk.length > 10;
            });
        }
        
        // Extract each message using the start positions
        const messages = [];
        for (let i = 0; i < starts.length; i++) {
            const start = starts[i];
            const end = i < starts.length - 1 ? starts[i + 1].index : bulkText.length;
            const messageText = bulkText.substring(start.index, end).trim();
            if (messageText.length > 10) {
                messages.push(messageText);
            }
        }
        
        return messages;
    }

    function parseBulk(bulkText) {
        const chunks = splitMessages(bulkText);
        const results = [];
        const seenInBatch = new Set();

        for (const chunk of chunks) {
            const parsed = parseOne(chunk);
            if (!parsed) continue;
            // Always use the explicit ref for dedupe if available
            const dedupeKey = parsed.hasExplicitRef ? parsed.ref : parsed.raw.slice(0, 60);
            if (seenInBatch.has(dedupeKey)) continue;
            seenInBatch.add(dedupeKey);
            results.push(parsed);
        }
        return results;
    }

    // ------------------------------------------------------------------------
    // 6. DUPLICATE PROTECTION (two independent layers)
    // ------------------------------------------------------------------------

    const LOCAL_SEEN_KEY = 'travis_mpesa_seen_refs';

    function getLocalSeenRefs() {
        try {
            const raw = localStorage.getItem(LOCAL_SEEN_KEY);
            return raw ? new Set(JSON.parse(raw)) : new Set();
        } catch (e) {
            return new Set();
        }
    }

    function rememberRefLocally(ref) {
        try {
            const set = getLocalSeenRefs();
            set.add(ref);
            // Keep the local cache bounded
            const arr = Array.from(set).slice(-5000);
            localStorage.setItem(LOCAL_SEEN_KEY, JSON.stringify(arr));
        } catch (e) { /* non-fatal */ }
    }

    // Scans the actual ledger for refs already embedded in transaction
    // descriptions. This is the layer that survives backup/restore, since
    // localStorage doesn't travel with the encrypted backup file.
    function getLedgerSeenRefs() {
        return new Promise(resolve => {
            try {
                const req = indexedDB.open(DB_NAME, DB_VERSION);
                req.onsuccess = event => {
                    const dbRef = event.target.result;
                    if (!dbRef.objectStoreNames.contains('tx')) {
                        dbRef.close();
                        resolve(new Set());
                        return;
                    }
                    const store = dbRef.transaction('tx', 'readonly').objectStore('tx');
                    const getAllReq = store.getAll();
                    getAllReq.onsuccess = () => {
                        dbRef.close();
                        const refs = new Set();
                        (getAllReq.result || []).forEach(row => {
                            const desc = row.desc || '';
                            // current tag format
                            const tagged = desc.match(/\[REF:([A-Z0-9-]+)\]/);
                            if (tagged) refs.add(tagged[1]);
                            // legacy format from the previous version of this module
                            const legacy = desc.match(/\(REF:\s*([A-Z0-9-]+)\)/);
                            if (legacy) refs.add(legacy[1]);
                        });
                        resolve(refs);
                    };
                    getAllReq.onerror = () => { dbRef.close(); resolve(new Set()); };
                };
                req.onerror = () => resolve(new Set());
            } catch (e) {
                resolve(new Set());
            }
        });
    }

    async function getAllSeenRefs() {
        const [local, ledger] = await Promise.all([
            Promise.resolve(getLocalSeenRefs()),
            getLedgerSeenRefs()
        ]);
        return new Set([...local, ...ledger]);
    }

    // ------------------------------------------------------------------------
    // 7. LEDGER ENTRY CONSTRUCTION (this is where the contra fix lives)
    // ------------------------------------------------------------------------

    function getWalletAccountName() {
        const isBusiness = typeof state !== 'undefined' && state && state.user && state.user.type === 'business';
        return isBusiness ? 'Bank / M-Pesa' : 'M-Pesa';
    }

    function refTag(ref) {
        return '[REF:' + ref + ']';
    }

    /**
     * Turns one parsed message into one or more ledger entries in the exact
     * shape the main app expects: {id, debit, credit, amount, desc}.
     */
    function buildLedgerEntries(parsed) {
        const wallet = getWalletAccountName();
        const baseId = Date.now() + Math.floor(Math.random() * 1000);
        const entries = [];
        let seq = 0;
        const nextId = () => baseId + seq++;

        const tag = refTag(parsed.ref);

        switch (parsed.type) {

            case 'fuliza_charge':
                if (parsed.charge > 0) {
                    entries.push({
                        id: nextId(), debit: 'M-Pesa Charge', credit: wallet, amount: parsed.charge,
                        desc: 'Fuliza charge KSh ' + money(parsed.charge) + ' ' + tag
                    });
                }
                break;

            case 'fuliza_repayment':
            case 'loan_repayment':
                if (parsed.amount > 0) {
                    entries.push({
                        id: nextId(),
                        debit: parsed.type === 'fuliza_repayment' ? 'Fuliza Repayment' : 'Loan Repayment',
                        credit: wallet,
                        amount: parsed.amount,
                        desc: parsed.label + ' KSh ' + money(parsed.amount) + ' ' + tag
                    });
                }
                break;

            case 'deposit':
                // CONTRA: physical cash -> wallet. Net worth unchanged.
                if (parsed.amount > 0) {
                    entries.push({
                        id: nextId(), debit: wallet, credit: 'Cash', amount: parsed.amount,
                        desc: 'Deposit KSh ' + money(parsed.amount) + ' into ' + wallet + ' ' + tag
                    });
                }
                break;

            case 'withdraw':
                // CONTRA: wallet -> physical cash. Net worth unchanged.
                if (parsed.amount > 0) {
                    entries.push({
                        id: nextId(), debit: 'Cash', credit: wallet, amount: parsed.amount,
                        desc: 'Withdrawal KSh ' + money(parsed.amount) + ' from ' + wallet + ' ' + tag
                    });
                }
                break;

            case 'reversal':
                // Best-effort: treat as a contra credit back into the wallet.
                if (parsed.amount > 0) {
                    entries.push({
                        id: nextId(), debit: wallet, credit: 'Cash', amount: parsed.amount,
                        desc: 'Reversal KSh ' + money(parsed.amount) + ' ' + tag
                    });
                }
                break;

            case 'receive':
            case 'bank_credit':
                if (parsed.amount > 0) {
                    entries.push({
                        id: nextId(), debit: wallet, credit: parsed.recipient || 'Other Income', amount: parsed.amount,
                        desc: 'Received KSh ' + money(parsed.amount) + ' from ' + (parsed.recipient || 'unknown sender') + ' ' + tag
                    });
                }
                break;

            case 'airtime':
                if (parsed.amount > 0) {
                    entries.push({
                        id: nextId(), debit: 'Airtime Purchase', credit: wallet, amount: parsed.amount,
                        desc: 'Airtime KSh ' + money(parsed.amount) + ' ' + tag
                    });
                }
                break;

            case 'paybill':
            case 'buy_goods':
                if (parsed.amount > 0) {
                    entries.push({
                        id: nextId(), debit: parsed.recipient || 'Bills', credit: wallet, amount: parsed.amount,
                        desc: (parsed.type === 'paybill' ? 'Paybill' : 'Buy Goods') + ' KSh ' + money(parsed.amount) +
                              ' to ' + (parsed.recipient || 'merchant') + ' ' + tag
                    });
                }
                break;

            case 'send':
                if (parsed.amount > 0) {
                    entries.push({
                        id: nextId(), debit: parsed.recipient || 'Send Money', credit: wallet, amount: parsed.amount,
                        desc: 'Sent KSh ' + money(parsed.amount) + ' to ' + (parsed.recipient || 'unknown') + ' ' + tag
                    });
                }
                break;

            default:
                // Unknown type — if there's a charge we can still log that.
                break;
        }

        // Any transaction cost, regardless of the parent type, gets logged
        // as its own expense line (except fuliza_charge, which already IS
        // the charge above).
        if (parsed.type !== 'fuliza_charge' && parsed.charge > 0) {
            entries.push({
                id: nextId(), debit: 'M-Pesa Charge', credit: wallet, amount: parsed.charge,
                desc: 'M-Pesa charge KSh ' + money(parsed.charge) + ' ' + tag
            });
        }

        return entries;
    }

    // ------------------------------------------------------------------------
    // 8. POSTING TO THE LEDGER (reuses the main app's own save pipeline)
    // ------------------------------------------------------------------------

    function saveTransactionDirect(tx) {
        return new Promise((resolve, reject) => {
            const req = indexedDB.open(DB_NAME, DB_VERSION);
            req.onsuccess = event => {
                const dbRef = event.target.result;
                const store = dbRef.transaction('tx', 'readwrite').objectStore('tx');
                const putReq = store.put(tx);
                putReq.onsuccess = () => { dbRef.close(); resolve(); };
                putReq.onerror = () => { dbRef.close(); reject(putReq.error); };
            };
            req.onerror = () => reject(req.error);
        });
    }

    /**
     * Posts a single parsed message to the ledger, using the main app's
     * saveData/state/nav/saveBackup hooks when available (i.e. when this
     * module is running inside the loaded app), falling back to a direct
     * IndexedDB write otherwise.
     */
    async function postParsedTransaction(parsed) {
        const entries = buildLedgerEntries(parsed);
        if (entries.length === 0) return null;

        const usingMainApp = typeof saveData !== 'undefined' && typeof state !== 'undefined';

        for (const entry of entries) {
            if (usingMainApp) {
                await saveData('tx', entry);
                state.transactions.push(entry);
            } else {
                await saveTransactionDirect(entry);
            }
        }

        rememberRefLocally(parsed.ref);

        if (usingMainApp) {
            if (typeof updateRuleSuggestion === 'function') updateRuleSuggestion();
            if (typeof nav === 'function') nav('dash');
            if (typeof saveBackup === 'function') await saveBackup();
        }

        return entries[0];
    }

    // ------------------------------------------------------------------------
    // 9. SAFARICOM TARIFF TABLES
    // ------------------------------------------------------------------------

    const TARIFFS = {
        send: [
            { min: 1, max: 49, charge: 0 }, { min: 50, max: 100, charge: 0 },
            { min: 101, max: 500, charge: 7 }, { min: 501, max: 1000, charge: 13 },
            { min: 1001, max: 1500, charge: 23 }, { min: 1501, max: 2500, charge: 33 },
            { min: 2501, max: 3500, charge: 53 }, { min: 3501, max: 5000, charge: 57 },
            { min: 5001, max: 7500, charge: 78 }, { min: 7501, max: 10000, charge: 90 },
            { min: 10001, max: 15000, charge: 100 }, { min: 15001, max: 20000, charge: 105 },
            { min: 20001, max: 25000, charge: 108 }, { min: 25001, max: 30000, charge: 108 },
            { min: 30001, max: 35000, charge: 108 }, { min: 35001, max: 40000, charge: 108 },
            { min: 40001, max: 45000, charge: 108 }, { min: 45001, max: 50000, charge: 108 },
            { min: 50001, max: 70000, charge: 108 }
        ],
        withdraw: [
            { min: 50, max: 100, charge: 11 }, { min: 101, max: 500, charge: 29 },
            { min: 501, max: 1000, charge: 29 }, { min: 1001, max: 1500, charge: 29 },
            { min: 1501, max: 2500, charge: 29 }, { min: 2501, max: 3500, charge: 52 },
            { min: 3501, max: 5000, charge: 69 }, { min: 5001, max: 7500, charge: 87 },
            { min: 7501, max: 10000, charge: 115 }, { min: 10001, max: 15000, charge: 167 },
            { min: 15001, max: 20000, charge: 185 }, { min: 20001, max: 25000, charge: 197 },
            { min: 25001, max: 35000, charge: 197 }
        ]
    };

    function lookupTariff(kind, amount) {
        const table = kind === 'withdraw' ? TARIFFS.withdraw : TARIFFS.send;
        const tier = table.find(t => amount >= t.min && amount <= t.max);
        return tier ? tier.charge : null;
    }

    // ------------------------------------------------------------------------
    // 10. MODAL UI
    // ------------------------------------------------------------------------

    const TYPE_ICON = {
        send: '📤', buy_goods: '🛒', paybill: '🧾', withdraw: '🏧', deposit: '🔁',
        airtime: '📞', receive: '📥', bank_credit: '📥', fuliza_charge: '⚡',
        fuliza_repayment: '⚡', loan_repayment: '💳', reversal: '↩️', unknown: '📱'
    };

    const NATURE_BADGE = {
        income: { text: 'Income', bg: '#dcfce7', fg: '#166534' },
        expense: { text: 'Expense', bg: '#fef2f2', fg: '#991b1b' },
        contra: { text: 'Transfer', bg: '#eff6ff', fg: '#1d4ed8' },
        charge_only: { text: 'Charge', bg: '#fef2f2', fg: '#991b1b' },
        unknown: { text: 'Unclassified', bg: '#f3f4f6', fg: '#374151' }
    };

    function openMpesaModal() {
        const existing = document.getElementById('mpesa-modal');
        if (existing) {
            existing.style.display = 'flex';
            renderTariffTables();
            return;
        }
        const overlay = document.createElement('div');
        overlay.id = 'mpesa-modal';
        overlay.style.cssText = 'position:fixed;inset:0;z-index:7000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,0.55);backdrop-filter:blur(10px);';
        overlay.innerHTML = buildModalHtml();
        document.body.appendChild(overlay);
        wireModalEvents(overlay);
        renderTariffTables();
    }

    function buildModalHtml() {
        return `
        <div style="background:#ffffff;border-radius:16px;width:100%;max-width:560px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,0.25);border:1px solid rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00a651,#007a3d);padding:20px 22px 16px;flex-shrink:0;">
                <div style="display:flex;align-items:center;justify-content:space-between;">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <div style="width:40px;height:40px;background:rgba(255,255,255,0.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;">📱</div>
                        <div>
                            <div style="color:white;font-size:15px;font-weight:700;letter-spacing:-.01em;">M-Pesa Message Tracker</div>
                            <div style="color:rgba(255,255,255,0.75);font-size:11px;margin-top:1px;">Paste SMS · Understands direction · Auto-logs to ledger</div>
                        </div>
                    </div>
                    <button id="mpesa-close" style="background:rgba(255,255,255,0.15);border:none;color:white;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;">×</button>
                </div>
                <div style="display:flex;gap:4px;margin-top:14px;background:rgba(0,0,0,0.15);border-radius:8px;padding:3px;">
                    <button class="mpesa-tab active" data-tab="paste" style="flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:white;color:#007a3d;">📋 Paste SMS</button>
                    <button class="mpesa-tab" data-tab="manual" style="flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:rgba(255,255,255,0.8);">✏️ Manual Entry</button>
                    <button class="mpesa-tab" data-tab="tariff" style="flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:rgba(255,255,255,0.8);">📊 Tariff Table</button>
                </div>
            </div>

            <div style="flex:1;overflow-y:auto;padding:0;">

                <div id="tab-paste" class="mpesa-tab-content" style="padding:18px;">
                    <div style="background:#f0fdf4;border:1.5px dashed #86efac;border-radius:10px;padding:14px;margin-bottom:14px;">
                        <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#166534;">How this works:</p>
                        <ol style="margin:0;padding-left:18px;font-size:12px;color:#15803d;line-height:1.7;">
                            <li>Copy one or more M-Pesa / bank SMS messages</li>
                            <li>Paste them below — any mix of send, receive, paybill, withdraw, deposit, Fuliza, etc.</li>
                            <li>Travis works out the direction of each and shows you before posting anything</li>
                            <li>Deposits and withdrawals are logged as transfers, not spending — your total balance won't change</li>
                        </ol>
                    </div>
                    <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em;">Paste M-Pesa SMS Message(s)</label>
                    <textarea id="mpesa-sms-input" placeholder="Paste your M-Pesa or bank SMS here..." style="width:100%;height:140px;border:1px solid #e5e7eb;border-radius:8px;padding:12px;font-size:12.5px;font-family:inherit;resize:vertical;outline:none;background:#fafafa;line-height:1.6;box-sizing:border-box;"></textarea>
                    <div style="display:flex;gap:8px;margin-top:10px;">
                        <button id="mpesa-parse-btn" style="flex:1;background:#00a651;color:white;border:none;padding:12px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">Understand Messages</button>
                        <button id="mpesa-clear-btn" style="background:#f3f4f6;color:#6b7280;border:none;padding:12px 14px;border-radius:8px;font-size:13px;cursor:pointer;font-family:inherit;">Clear</button>
                    </div>
                    <div id="mpesa-results" style="margin-top:14px;display:none;">
                        <div id="mpesa-results-inner"></div>
                        <button id="mpesa-post-all" style="width:100%;background:linear-gradient(135deg,#00a651,#007a3d);color:white;border:none;padding:13px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;margin-top:10px;font-family:inherit;display:none;">Log All to Ledger</button>
                    </div>
                </div>

                <div id="tab-manual" class="mpesa-tab-content" style="padding:18px;display:none;">
                    <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px;margin-bottom:16px;">
                        <p style="margin:0;font-size:12px;color:#92400e;line-height:1.6;">Use this when you know the amount but don't have the SMS. Travis calculates the Safaricom charge from the official tariff.</p>
                    </div>
                    <div style="display:grid;gap:12px;">
                        <div>
                            <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;">Transaction Type</label>
                            <select id="manual-type" style="width:100%;padding:9px 12px;border:1px solid #e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;background:white;">
                                <option value="send">Send Money (to M-Pesa number)</option>
                                <option value="paybill">Paybill / Till Number</option>
                                <option value="withdraw">Agent Withdrawal (Wallet → Cash)</option>
                                <option value="deposit">Cash Deposit (Cash → Wallet)</option>
                                <option value="airtime">Airtime Purchase</option>
                                <option value="custom">Custom Charge Amount</option>
                            </select>
                        </div>
                        <div>
                            <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;">Amount (KSh)</label>
                            <input id="manual-amount" type="number" placeholder="e.g. 2500" style="width:100%;padding:9px 12px;border:1px solid #e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;">
                        </div>
                        <div id="manual-charge-row" style="display:none;">
                            <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;">Charge Amount (KSh)</label>
                            <input id="manual-charge" type="number" placeholder="e.g. 33" style="width:100%;padding:9px 12px;border:1px solid #e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;">
                        </div>
                        <div id="manual-lookup-result" style="display:none;background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:12px;">
                            <div style="font-size:11px;color:#166534;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Safaricom Charge</div>
                            <div id="manual-lookup-val" style="font-size:22px;font-weight:800;color:#15803d;margin-top:2px;">KSh 0</div>
                            <div id="manual-lookup-note" style="font-size:11px;color:#4ade80;margin-top:2px;"></div>
                        </div>
                        <div>
                            <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;">Description / Recipient (optional)</label>
                            <input id="manual-desc" type="text" placeholder="e.g. Sent rent to landlord" style="width:100%;padding:9px 12px;border:1px solid #e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;">
                        </div>
                        <button id="manual-log-btn" style="background:#00a651;color:white;border:none;padding:13px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">Log This Transaction</button>
                    </div>
                </div>

                <div id="tab-tariff" class="mpesa-tab-content" style="padding:18px;display:none;">
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                        <div>
                            <div style="font-size:12px;font-weight:700;color:#166534;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;">📤 Send Money</div>
                            <table style="width:100%;border-collapse:collapse;font-size:11.5px;" id="tariff-send"></table>
                        </div>
                        <div>
                            <div style="font-size:12px;font-weight:700;color:#166534;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;">🏧 Withdrawal</div>
                            <table style="width:100%;border-collapse:collapse;font-size:11.5px;" id="tariff-withdraw"></table>
                        </div>
                    </div>
                    <div style="margin-top:12px;background:#f0fdf4;border-radius:8px;padding:10px;font-size:11px;color:#166534;line-height:1.6;">
                        <strong>Note:</strong> Buy Goods (Till) and Paybill transactions to most billers are usually <strong>free</strong>. Airtime purchases are free. Charges above are per the Safaricom official tariff.
                    </div>
                </div>

            </div>

            <div id="mpesa-status" style="padding:10px 18px;background:#f9fafb;border-top:1px solid #f0f0f0;font-size:12px;color:#6b7280;display:none;"></div>
        </div>`;
    }

    function wireModalEvents(overlay) {
        overlay.querySelector('#mpesa-close').onclick = () => { overlay.style.display = 'none'; };
        overlay.onclick = e => { if (e.target === overlay) overlay.style.display = 'none'; };

        overlay.querySelectorAll('.mpesa-tab').forEach(btn => {
            btn.onclick = () => {
                overlay.querySelectorAll('.mpesa-tab').forEach(b => {
                    b.style.background = 'transparent';
                    b.style.color = 'rgba(255,255,255,0.8)';
                });
                btn.style.background = 'white';
                btn.style.color = '#007a3d';
                const tabName = btn.dataset.tab;
                overlay.querySelectorAll('.mpesa-tab-content').forEach(c => (c.style.display = 'none'));
                overlay.querySelector('#tab-' + tabName).style.display = 'block';
            };
        });

        overlay.querySelector('#mpesa-clear-btn').onclick = () => {
            overlay.querySelector('#mpesa-sms-input').value = '';
            overlay.querySelector('#mpesa-results').style.display = 'none';
        };

        overlay.querySelector('#mpesa-parse-btn').onclick = () => handleExtract(overlay);
        overlay.querySelector('#mpesa-post-all').onclick = () => handlePostAll(overlay);
        overlay.querySelector('#manual-type').onchange = () => handleManualTypeChange(overlay);
        overlay.querySelector('#manual-amount').oninput = () => handleManualTypeChange(overlay);
        overlay.querySelector('#manual-log-btn').onclick = () => handleManualLog(overlay);
    }

    async function handleExtract(overlay) {
        const btn = overlay.querySelector('#mpesa-parse-btn');
        const smsText = overlay.querySelector('#mpesa-sms-input').value;
        const resultsBox = overlay.querySelector('#mpesa-results');
        const resultsInner = overlay.querySelector('#mpesa-results-inner');
        const postAllBtn = overlay.querySelector('#mpesa-post-all');

        btn.textContent = '⏳ Checking…';
        btn.disabled = true;
        const seenRefs = await getAllSeenRefs();
        btn.textContent = 'Understand Messages';
        btn.disabled = false;

        if (!smsText.trim() || !looksLikeMpesaMessage(smsText)) {
            resultsInner.innerHTML = `
            <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:14px;text-align:center;">
                <div style="font-size:28px;margin-bottom:8px;">🚫</div>
                <div style="font-size:13px;font-weight:700;color:#991b1b;">This doesn't look like an M-Pesa message</div>
                <div style="font-size:12px;color:#b91c1c;margin-top:6px;line-height:1.7;">Paste a genuine M-Pesa or bank confirmation message.</div>
            </div>`;
            resultsBox.style.display = 'block';
            postAllBtn.style.display = 'none';
            return;
        }

        const parsedAll = parseBulk(smsText);
        if (parsedAll.length === 0) {
            resultsInner.innerHTML = `
            <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:14px;text-align:center;">
                <div style="font-size:20px;margin-bottom:6px;">🤔</div>
                <div style="font-size:13px;font-weight:600;color:#991b1b;">Nothing usable found in that text</div>
                <div style="font-size:12px;color:#b91c1c;margin-top:4px;line-height:1.6;">Make sure the full SMS text was pasted.</div>
            </div>`;
            resultsBox.style.display = 'block';
            postAllBtn.style.display = 'none';
            return;
        }

        const fresh = parsedAll.filter(p => !seenRefs.has(p.ref));
        const duplicates = parsedAll.filter(p => seenRefs.has(p.ref));

        let html = '';

        if (fresh.length > 0) {
            const totalCharges = fresh.reduce((sum, p) => sum + p.charge, 0);
            html += `
            <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px 14px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                    <div style="font-size:11px;font-weight:600;color:#166534;text-transform:uppercase;letter-spacing:.05em;">New Transactions Found</div>
                    <div style="font-size:20px;font-weight:800;color:#15803d;">${fresh.length} message${fresh.length !== 1 ? 's' : ''}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:11px;color:#166534;">Total charges</div>
                    <div style="font-size:16px;font-weight:800;color:#dc2626;">KSh ${money(totalCharges)}</div>
                </div>
            </div>`;
        }

        fresh.forEach(p => {
            const badge = NATURE_BADGE[p.nature] || NATURE_BADGE.unknown;
            html += `
            <div style="border:1px solid #e5e7eb;border-radius:8px;padding:11px 13px;margin-bottom:8px;background:white;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                    <div style="flex:1;">
                        <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;flex-wrap:wrap;">
                            <span style="font-size:14px;">${p.icon}</span>
                            <span style="font-size:13px;font-weight:700;color:#166534;">${p.label}</span>
                            <span style="font-size:10px;font-weight:700;background:${badge.bg};color:${badge.fg};padding:2px 7px;border-radius:20px;">${badge.text}</span>
                        </div>
                        ${p.recipient ? `<div style="font-size:12.5px;color:#374151;">${p.type === 'receive' || p.type === 'bank_credit' ? 'From' : 'To'}: ${p.recipient}</div>` : ''}
                        ${p.amount ? `<div style="font-size:11px;color:#6b7280;margin-top:2px;">Amount: KSh ${money(p.amount)}</div>` : ''}
                        <div style="font-size:10px;color:#9ca3af;font-family:monospace;margin-top:2px;">${p.ref}</div>
                    </div>
                    ${p.charge > 0 ? `
                    <div style="text-align:right;flex-shrink:0;">
                        <div style="font-size:11px;color:#6b7280;">Charge</div>
                        <div style="font-size:17px;font-weight:800;color:#dc2626;">KSh ${money(p.charge)}</div>
                    </div>` : ''}
                </div>
            </div>`;
        });

        if (duplicates.length > 0) {
            html += `<div style="font-size:11px;font-weight:600;color:#92400e;margin:10px 0 6px;text-transform:uppercase;letter-spacing:.05em;">⚠️ Already in ledger — skipped</div>`;
            duplicates.forEach(p => {
                html += `
                <div style="border:1px solid #fde68a;border-radius:8px;padding:9px 13px;margin-bottom:6px;background:#fffbeb;opacity:0.8;">
                    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
                        <div>
                            <span style="font-size:10px;font-weight:700;background:#fef3c7;color:#92400e;padding:2px 7px;border-radius:20px;">DUPLICATE</span>
                            <span style="font-size:12px;color:#92400e;margin-left:6px;">${p.label}</span>
                        </div>
                        <div style="font-size:11px;color:#b45309;font-family:monospace;">${p.ref}</div>
                    </div>
                </div>`;
            });
        }

        if (fresh.length === 0 && parsedAll.length > 0) {
            html += `
            <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px;text-align:center;margin-top:6px;">
                <div style="font-size:13px;font-weight:600;color:#92400e;">All transactions already logged</div>
                <div style="font-size:12px;color:#b45309;margin-top:3px;">No new charges to import.</div>
            </div>`;
        }

        resultsInner.innerHTML = html;
        resultsBox.style.display = 'block';
        postAllBtn.style.display = fresh.length > 0 ? 'block' : 'none';
        postAllBtn.dataset.results = JSON.stringify(fresh);
    }

    async function handlePostAll(overlay) {
        const btn = overlay.querySelector('#mpesa-post-all');
        const parsedList = JSON.parse(btn.dataset.results || '[]');
        if (parsedList.length === 0) return;

        btn.disabled = true;
        btn.textContent = 'Logging…';

        let posted = 0;
        let totalCharges = 0;

        for (const parsed of parsedList) {
            try {
                await new Promise(r => setTimeout(r, 15));
                const result = await postParsedTransaction(parsed);
                if (result) {
                    posted++;
                    totalCharges += parsed.charge;
                }
            } catch (err) {
                console.error('[MpesaTracker] Failed to log:', parsed.ref, err);
            }
        }

        showStatus(overlay, `✅ ${posted} transaction${posted !== 1 ? 's' : ''} logged (KSh ${money(totalCharges)} in charges).`);
        btn.textContent = `✓ ${posted} Logged`;
        btn.style.background = '#16a34a';
        btn.disabled = false;

        setTimeout(() => {
            overlay.querySelector('#mpesa-sms-input').value = '';
            overlay.querySelector('#mpesa-results').style.display = 'none';
            btn.textContent = 'Log All to Ledger';
            btn.style.background = 'linear-gradient(135deg,#00a651,#007a3d)';
            btn.style.display = 'none';
        }, 3000);
    }

    function handleManualTypeChange(overlay) {
        const type = overlay.querySelector('#manual-type').value;
        const amount = toNumber(overlay.querySelector('#manual-amount').value);
        const chargeRow = overlay.querySelector('#manual-charge-row');
        const lookupBox = overlay.querySelector('#manual-lookup-result');
        const lookupVal = overlay.querySelector('#manual-lookup-val');
        const lookupNote = overlay.querySelector('#manual-lookup-note');

        if (type === 'custom') {
            chargeRow.style.display = 'block';
            lookupBox.style.display = 'none';
            return;
        }
        chargeRow.style.display = 'none';

        if (amount <= 0) {
            lookupBox.style.display = 'none';
            return;
        }

        if (type === 'paybill' || type === 'airtime' || type === 'deposit') {
            lookupBox.style.display = 'block';
            lookupVal.textContent = 'KSh 0';
            lookupNote.textContent = type === 'deposit'
                ? 'Deposits are usually free and don\u2019t change your total balance.'
                : 'Most Paybill/Till and airtime transactions are free.';
            return;
        }

        const tariffKind = type === 'withdraw' ? 'withdraw' : 'send';
        const charge = lookupTariff(tariffKind, amount);
        if (charge === null) {
            lookupBox.style.display = 'block';
            lookupVal.textContent = 'Amount out of range';
            lookupNote.textContent = '';
            return;
        }
        lookupBox.style.display = 'block';
        lookupVal.textContent = 'KSh ' + money(charge);
        lookupNote.textContent = 'Official tariff for KSh ' + money(amount) + ' ' + (type === 'withdraw' ? 'withdrawal' : 'transfer');
    }

    async function handleManualLog(overlay) {
        const type = overlay.querySelector('#manual-type').value;
        const amount = toNumber(overlay.querySelector('#manual-amount').value);
        const desc = overlay.querySelector('#manual-desc').value.trim();
        const btn = overlay.querySelector('#manual-log-btn');

        if (amount <= 0) {
            showStatus(overlay, '❌ Enter an amount first.');
            return;
        }

        let charge = 0;
        if (type === 'custom') {
            charge = toNumber(overlay.querySelector('#manual-charge').value);
        } else if (type === 'paybill' || type === 'airtime' || type === 'deposit') {
            charge = 0;
        } else {
            charge = lookupTariff(type === 'withdraw' ? 'withdraw' : 'send', amount) || 0;
        }

        const labelMap = {
            send: 'Sent Money', paybill: 'Paybill', withdraw: 'Withdrawal',
            deposit: 'Cash Deposit', airtime: 'Airtime', custom: 'M-Pesa Charge'
        };
        const typeMap = {
            send: 'send', paybill: 'paybill', withdraw: 'withdraw',
            deposit: 'deposit', airtime: 'airtime', custom: 'fuliza_charge' // custom = charge-only entry
        };

        const parsed = {
            type: typeMap[type] || 'send',
            nature: type === 'withdraw' || type === 'deposit' ? 'contra' : (type === 'custom' ? 'charge_only' : 'expense'),
            label: labelMap[type] || 'M-Pesa Transaction',
            icon: TYPE_ICON[typeMap[type]] || '📱',
            ref: 'MANUAL-' + Date.now(),
            hasExplicitRef: false,
            amount: type === 'custom' ? 0 : amount,
            charge: type === 'custom' ? charge : charge,
            recipient: desc,
            raw: 'MANUAL ENTRY'
        };

        btn.disabled = true;
        btn.textContent = 'Logging…';
        try {
            await postParsedTransaction(parsed);
            showStatus(overlay, '✅ Logged to your ledger.');
            overlay.querySelector('#manual-amount').value = '';
            overlay.querySelector('#manual-desc').value = '';
            overlay.querySelector('#manual-lookup-result').style.display = 'none';
        } catch (err) {
            showStatus(overlay, '❌ Failed to log: ' + err.message);
        }
        btn.disabled = false;
        btn.textContent = 'Log This Transaction';
    }

    function renderTariffTables() {
        const renderTable = (el, rows) => {
            if (!el) return;
            el.innerHTML = `
            <thead><tr style="background:#f0fdf4;">
                <th style="padding:5px 8px;text-align:left;font-size:10px;color:#166534;font-weight:700;border-bottom:1px solid #bbf7d0;">Range (KSh)</th>
                <th style="padding:5px 8px;text-align:right;font-size:10px;color:#166534;font-weight:700;border-bottom:1px solid #bbf7d0;">Charge</th>
            </tr></thead>
            <tbody>${rows.map((r, i) => `
                <tr style="background:${i % 2 === 0 ? 'white' : '#f9fafb'};">
                    <td style="padding:5px 8px;font-size:11px;color:#374151;border-bottom:1px solid #f3f4f6;">${money(r.min)}–${money(r.max)}</td>
                    <td style="padding:5px 8px;font-size:11px;font-weight:700;color:${r.charge === 0 ? '#16a34a' : '#dc2626'};text-align:right;border-bottom:1px solid #f3f4f6;">KSh ${r.charge}</td>
                </tr>`).join('')}</tbody>`;
        };
        renderTable(document.getElementById('tariff-send'), TARIFFS.send);
        renderTable(document.getElementById('tariff-withdraw'), TARIFFS.withdraw);
    }

    function showStatus(overlay, message) {
        const bar = overlay.querySelector('#mpesa-status');
        if (!bar) return;
        bar.textContent = message;
        bar.style.display = 'block';
        bar.style.color = message.startsWith('✅') ? '#166534' : message.startsWith('❌') ? '#991b1b' : '#6b7280';
        bar.style.background = message.startsWith('✅') ? '#f0fdf4' : message.startsWith('❌') ? '#fef2f2' : '#f9fafb';
    }

    // ------------------------------------------------------------------------
    // 11. UI INJECTION (nav sidebar + taskbar) — unchanged integration points
    // ------------------------------------------------------------------------

    function injectEntryPoints() {
        const sidebar = document.getElementById('nav-sidebar');
        if (sidebar && !document.getElementById('nav-mpesa')) {
            const footer = sidebar.querySelector('#nav-sidebar .sidebar-footer') || sidebar.querySelector('button[onclick*="showTxModal"]');
            if (footer) {
                const navBtn = document.createElement('button');
                navBtn.id = 'nav-mpesa';
                navBtn.className = 'nav-item';
                navBtn.innerHTML = '<span class="nav-icon">📱</span> M-Pesa Charges';
                navBtn.onclick = () => {
                    openMpesaModal();
                    const sb = document.getElementById('nav-sidebar');
                    if (sb) sb.classList.remove('mobile-open');
                };
                const anchor = footer.querySelector ? footer.querySelector('button[onclick*="showTxModal"]') : footer;
                if (anchor && anchor.nextSibling) footer.insertBefore(navBtn, anchor.nextSibling);
                else footer.appendChild(navBtn);
            }
        }

        const taskbar = document.getElementById('taskbar');
        const clock = document.getElementById('taskbar-clock');
        if (taskbar && clock && !document.getElementById('tb-mpesa')) {
            const tbBtn = document.createElement('button');
            tbBtn.id = 'tb-mpesa';
            tbBtn.className = 'taskbar-btn';
            tbBtn.title = 'M-Pesa Charges';
            tbBtn.textContent = '📱';
            tbBtn.onclick = () => window.travisMpesa.open();
            taskbar.insertBefore(tbBtn, clock);
        }
    }

    function waitForAppShellThenInject(attempt) {
        if (attempt > 20) return;
        const shellReady = document.getElementById('nav-sidebar') && document.getElementById('taskbar');
        if (shellReady) injectEntryPoints();
        else setTimeout(() => waitForAppShellThenInject(attempt + 1), 500);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(() => waitForAppShellThenInject(0), 1800));
    } else {
        setTimeout(() => waitForAppShellThenInject(0), 1800);
    }

    // ------------------------------------------------------------------------
    // 12. PUBLIC API
    // ------------------------------------------------------------------------

    window.travisMpesa = {
        open: () => openMpesaModal(),
        parse: parseBulk,
        classify: classifyMessage,
        tariff: lookupTariff
    };

}());
