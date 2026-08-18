(function(_0x501889, _0xf8edc6) {
    const _0x2ee8af = _0x34b2,
        _0x37bd1d = _0x501889();
    while (!![]) {
        try {
            const _0x5d4e01 = -parseInt(_0x2ee8af(0xde)) / 0x1 * (-parseInt(_0x2ee8af(0xc6)) / 0x2) + -parseInt(_0x2ee8af(0x12a)) / 0x3 * (-parseInt(_0x2ee8af(0xef)) / 0x4) + parseInt(_0x2ee8af(0xd1)) / 0x5 * (-parseInt(_0x2ee8af(0xc0)) / 0x6) + -parseInt(_0x2ee8af(0xf2)) / 0x7 * (parseInt(_0x2ee8af(0xb9)) / 0x8) + -parseInt(_0x2ee8af(0x98)) / 0x9 + parseInt(_0x2ee8af(0x118)) / 0xa + parseInt(_0x2ee8af(0x9b)) / 0xb;
            if (_0x5d4e01 === _0xf8edc6) break;
            else _0x37bd1d['push'](_0x37bd1d['shift']());
        } catch (_0x55fa40) {
            _0x37bd1d['push'](_0x37bd1d['shift']());
        }
    }
}(_0x5909, 0x7e779), (function() {
    'use strict';
    const _0x41f8e5 = _0x34b2;

    // ─── KEYWORD DETECTION FOR MONEY DIRECTION ─────────────────────────────
    const DIRECTION_KEYWORDS = {
        // OUTGOING (Money LEAVING the user)
        OUTGOING: [
            /sent to/i,
            /paid to/i,
            /paid/i,
            /bought/i,
            /purchase/i,
            /purchased/i,
            /buy/i,
            /withdraw/i,
            /withdrew/i,
            /withdrawn/i,
            /transferred to/i,
            /transfer to/i,
            /gave to/i,
            /give to/i,
            /used to pay/i,
            /used to purchase/i,
            /used for/i,
            /spent on/i,
            /spent/i,
            /paying/i,
            /payment to/i,
            /payment for/i,
            /mpesa sent/i,
            /sent money to/i,
            /mobile money sent/i,
            /cash sent/i,
            /has been used/i,
            /fully paid/i,
            /partially paid/i,
            /paid using/i,
            /settled via/i,
            /airtime purchase/i,
            /airtime bought/i,
            /bought airtime/i
        ],
        // INCOMING (Money ARRIVING to user)
        INCOMING: [
            /received from/i,
            /received/i,
            /deposit/i,
            /deposited/i,
            /credited/i,
            /credit/i,
            /money received/i,
            /payment received/i,
            /cash received/i,
            /you have received/i,
            /you received/i,
            /incoming/i,
            /credited to you/i,
            /sent to you/i,
            /transfer from/i,
            /transferred from/i,
            /got from/i,
            /got/i
        ],
        // CONTRACEPTRIES (Money stays within user's accounts - just moving)
        CONTRAPARTY: [
            /withdraw to cash/i,
            /withdrew to cash/i,
            /cash withdrawal/i,
            /deposit to bank/i,
            /bank deposit/i,
            /mpesa to bank/i,
            /bank to mpesa/i,
            /moved to savings/i,
            /savings deposit/i,
            /transfer between accounts/i,
            /internal transfer/i,
            /self transfer/i
        ]
    };

    // ─── ACCOUNT MAPPING FOR DIRECTION DETECTION ──────────────────────────
    const ACCOUNT_MATCHERS = {
        'Bank / M-Pesa': [
            /bank/i, /mpesa/i, /m-pesa/i, /mobile/i, /safaricom/i, /agent/i
        ],
        'Cash': [
            /cash/i, /notes/i, /coins/i, /currency/i, /physical/i, /hand/i
        ],
        'Savings': [
            /savings/i, /save/i, /emergency/i, /sacco/i, /mmf/i, /money market/i
        ],
        'Mobile Money': [
            /fuliza/i, /m-shwari/i, /mshwari/i, /airtel/i, /telkom/i
        ],
        'M-Pesa Charge': [
            /transaction cost/i, /charge/i, /fee/i, /service fee/i, /mpesa charge/i
        ]
    };

    // ─── M-PESA MESSAGE DETECTION ──────────────────────────────────────────
    const _0x5325d3 = [
        /M-?PESA/i,
        /transaction cost/i,
        /new m-?pesa balance/i,
        /safaricom/i,
        /fuliza/i,
        /mpesa/i,
        /M-PESA/i,
        /Mpesa/i,
        /sent to/i,
        /received from/i,
        /withdraw/i,
        /paybill/i,
        /buy goods/i
    ];

    const _0x521a09 = /\b([A-Z0-9]{10})\b/g;
    const _0x1410f4 = /(?:Ksh|KES|KSh|ksh)\s*([\d,]+\.?\d*)/gi;
    const _0x296380 = /transaction cost[,:]?\s*(?:Ksh|KES|KSh|ksh)\s*([\d,]+\.?\d*)/i;
    const _0x15d1a4 = /Fuliza M-PESA charge of\s*(?:Ksh|KES|KSh|ksh)\s*([\d,]+\.?\d*)/i;

    // ─── DIRECTION DETECTION ENGINE ────────────────────────────────────────
    function detectDirection(_0x1022c8) {
        const _0x38da16 = _0x34b2;
        const _0x9c3e4c = _0x1022c8.toLowerCase();

        // Check outgoing keywords first (more specific)
        for (const pattern of DIRECTION_KEYWORDS.OUTGOING) {
            if (pattern.test(_0x9c3e4c)) {
                return 'outgoing';
            }
        }

        // Check incoming keywords
        for (const pattern of DIRECTION_KEYWORDS.INCOMING) {
            if (pattern.test(_0x9c3e4c)) {
                return 'incoming';
            }
        }

        // Check contra entries (money stays within user's ecosystem)
        for (const pattern of DIRECTION_KEYWORDS.CONTRAPARTY) {
            if (pattern.test(_0x9c3e4c)) {
                return 'contra';
            }
        }

        // Default: try to infer from transaction type
        return 'unknown';
    }

    // ─── SMART TRANSACTION TYPE DETECTION ─────────────────────────────────
    function _0xa65199(_0x1022c8) {
        const _0x38da16 = _0x34b2;
        const _0x9c3e4c = _0x1022c8.toLowerCase();

        // Check for Fuliza
        if (/fuliza/i.test(_0x1022c8)) {
            return { type: 'fuliza', label: 'Fuliza Charge' };
        }

        // Check for receive/deposit
        if (/you have received/i.test(_0x1022c8) || /received from/i.test(_0x1022c8) || /deposit/i.test(_0x1022c8)) {
            return { type: 'receive', label: 'Received' };
        }

        // Check for airtime
        if (/you have bought.*airtime|airtime.*you have bought|airtime purchase/i.test(_0x1022c8)) {
            return { type: 'airtime', label: 'Airtime Purchase' };
        }

        // Check for Paybill
        if (/paid\s+(?:Ksh|KES)[\d,\.]+ to\s+\d+/i.test(_0x1022c8)) {
            return { type: 'paybill', label: 'Paybill' };
        }

        // Check for Buy Goods (Till)
        if (/paid to.+till no|buy goods|till number/i.test(_0x1022c8)) {
            return { type: 'buy_goods', label: 'Buy Goods' };
        }

        // Check for general payment
        if (/paid to|payment to|paying/i.test(_0x1022c8)) {
            return { type: 'paybill', label: 'Payment' };
        }

        // Check for withdrawal
        if (/withdraw|withdrew|withdrawn/i.test(_0x1022c8)) {
            return { type: 'withdraw', label: 'Withdrawal' };
        }

        // Check for send
        if (/sent to|send to|transfer to|transferred to/i.test(_0x1022c8)) {
            return { type: 'send', label: 'Send Money' };
        }

        // Check for contra entries
        if (/deposit to bank|bank deposit|internal transfer|self transfer/i.test(_0x1022c8)) {
            return { type: 'contra', label: 'Internal Transfer' };
        }

        return { type: 'mpesa', label: 'M-Pesa Transaction' };
    }

    // ─── INTELLIGENT RECIPIENT EXTRACTION ──────────────────────────────────
    function _0x23a5b0(_0x134efc) {
        const _0x1b2238 = _0x34b2;
        let _0x18a2b4;

        // Pattern: sent to NAME on date
        _0x18a2b4 = _0x134efc.match(/sent to\s+(.+?)\s+(?:\d{7,}|on\s+[\d/])/i);
        if (_0x18a2b4) return _0x18a2b4[1].trim();

        // Pattern: sent to NAME for account
        _0x18a2b4 = _0x134efc.match(/sent to\s+(.+?)\s+for account/i);
        if (_0x18a2b4) return _0x18a2b4[1].trim();

        // Pattern: paid KSh X to PHONE - NAME on
        _0x18a2b4 = _0x134efc.match(/paid\s+(?:Ksh|KES)[\d,\.]+\s+to\s+\d+\s*[-–]\s*(.+?)\s+on\s/i);
        if (_0x18a2b4) return _0x18a2b4[1].trim();

        // Pattern: paid to NAME
        _0x18a2b4 = _0x134efc.match(/paid to\s+(.+?)(?:\.\s*(?:Till|on)|\.?\s*New M-?PESA|\s+on\s+[\d/])/i);
        if (_0x18a2b4) return _0x18a2b4[1].trim();

        // Pattern: from PHONE - NAME on
        _0x18a2b4 = _0x134efc.match(/from\s+\d+\s*[-–]\s*(.+?)\s+on\s/i);
        if (_0x18a2b4) return _0x18a2b4[1].trim();

        // Pattern: from PHONE - NAME New M-PESA
        _0x18a2b4 = _0x134efc.match(/from\s+\d+\s*[-–]\s*(.+?)\s*New M-?PESA/i);
        if (_0x18a2b4) return _0x18a2b4[1].trim();

        // Pattern: received KSh X from NAME on date
        _0x18a2b4 = _0x134efc.match(/received\s+(?:Ksh|KES)[\d,\.]+\s+from\s+(.+?)\s+(?:\d{7,}|on\s+[\d/])/i);
        if (_0x18a2b4) return _0x18a2b4[1].trim();

        // Pattern: from NAME
        _0x18a2b4 = _0x134efc.match(/from\s+([A-Za-z\s]+?)(?:\s+on|\s+at|\s*$)/i);
        if (_0x18a2b4) return _0x18a2b4[1].trim();

        // Pattern: paid to NAME
        _0x18a2b4 = _0x134efc.match(/paid\s+to\s+([A-Za-z\s]+?)(?:\s+for|\s+on|\s*$)/i);
        if (_0x18a2b4) return _0x18a2b4[1].trim();

        return '';
    }

    // ─── SMART AMOUNT EXTRACTION ──────────────────────────────────────────
    function extractAmounts(_0x3e0ebd) {
        const _0x4db353 = _0x34b2;
        const amounts = [];
        let match;
        const regex = /(?:Ksh|KES|KSh|ksh)\s*([\d,]+\.?\d*)/gi;
        while ((match = regex.exec(_0x3e0ebd)) !== null) {
            amounts.push(parseFloat(match[1].replace(/,/g, '')));
        }
        return amounts;
    }

    // ─── DEDUPLICATION ENGINE ──────────────────────────────────────────────
    async function _0xfe8e01() {
        return new Promise(_0x523738 => {
            const _0x3e9cef = _0x34b2;
            try {
                const _0x3bbca8 = indexedDB.open('TravisGuardian_v1.0', 1);
                _0x3bbca8.onsuccess = _0x24cdbe => {
                    const _0x3d423c = _0x3e9cef;
                    const _0x48cf29 = _0x24cdbe.target.result;
                    if (!_0x48cf29.objectStoreNames.contains('tx')) {
                        _0x48cf29.close();
                        _0x523738(new Set());
                        return;
                    }
                    const _0x4d77c0 = _0x48cf29.transaction('tx', 'readonly');
                    const _0x5e0b67 = _0x4d77c0.objectStore('tx');
                    const _0x47faf8 = _0x5e0b67.getAll();
                    _0x47faf8.onsuccess = () => {
                        _0x48cf29.close();
                        const _0x42b26e = new Set();
                        (_0x47faf8.result || []).forEach(tx => {
                            const ref = (tx.desc || '');
                            const refMatch = ref.match(/REF:\s*([A-Z0-9]{10})/);
                            if (refMatch) _0x42b26e.add(refMatch[1]);
                            // Also check for transaction ID patterns
                            const idMatch = ref.match(/\(([A-Z0-9]{10})\)/);
                            if (idMatch) _0x42b26e.add(idMatch[1]);
                        });
                        _0x523738(_0x42b26e);
                    };
                    _0x47faf8.onerror = () => {
                        _0x48cf29.close();
                        _0x523738(new Set());
                    };
                };
                _0x3bbca8.onerror = () => _0x523738(new Set());
            } catch (_0x35655b) {
                _0x523738(new Set());
            }
        });
    }

    // ─── ENHANCED TRANSACTION PARSER ──────────────────────────────────────
    function _0x28d4a7(_0x3e0ebd) {
        const _0x4db353 = _0x34b2;
        const _0x15f829 = _0x3e0ebd.trim();
        if (!_0x15f829) return null;

        // Check if it's an M-Pesa message
        const _0x52e783 = _0x5325d3.some(pattern => pattern.test(_0x15f829));
        if (!_0x52e783) return null;

        // Detect direction
        const direction = detectDirection(_0x15f829);

        // Get transaction type
        const { type, label } = _0xa65199(_0x15f829);

        // Extract reference
        const refMatch = _0x15f829.match(/\b([A-Z0-9]{10})\b/);
        let ref = refMatch ? refMatch[1] : null;
        if (!ref) {
            ref = 'MPESA-' + Date.now().toString(36).toUpperCase();
        }

        // Extract amounts
        const amounts = extractAmounts(_0x15f829);
        const mainAmount = amounts.length > 0 ? amounts[0] : 0;

        // Extract charge
        const chargeMatch = _0x15f829.match(_0x296380);
        let charge = chargeMatch ? parseFloat(chargeMatch[1].replace(/,/g, '')) : 0;

        // Special: Fuliza charge
        const fulizaMatch = _0x15f829.match(_0x15d1a4);
        if (fulizaMatch) {
            charge = parseFloat(fulizaMatch[1].replace(/,/g, ''));
        }

        // Extract recipient/sender
        const recipient = _0x23a5b0(_0x15f829);

        // Determine which account to use as debit/credit based on direction
        let debitAccount, creditAccount;

        if (direction === 'incoming') {
            debitAccount = recipient || 'M-Pesa'; // Money comes from
            creditAccount = 'Cash'; // Money goes to
        } else if (direction === 'outgoing') {
            debitAccount = 'Cash'; // Money comes from
            creditAccount = recipient || 'M-Pesa'; // Money goes to
        } else if (direction === 'contra') {
            // Contra entry: money stays within user's accounts
            if (/bank/i.test(_0x15f829) || /deposit to bank/i.test(_0x15f829)) {
                debitAccount = 'Cash';
                creditAccount = 'Bank / M-Pesa';
            } else if (/withdraw|withdrew|withdrawn/i.test(_0x15f829)) {
                debitAccount = 'Bank / M-Pesa';
                creditAccount = 'Cash';
            } else {
                debitAccount = 'Cash';
                creditAccount = 'Bank / M-Pesa';
            }
        } else {
            // Unknown direction - infer from transaction type
            if (type === 'receive') {
                debitAccount = recipient || 'M-Pesa';
                creditAccount = 'Cash';
            } else {
                debitAccount = 'Cash';
                creditAccount = recipient || 'M-Pesa';
            }
        }

        return {
            type: type,
            label: label,
            ref: ref,
            amount: mainAmount,
            recipient: recipient,
            charge: charge,
            direction: direction,
            debit: debitAccount,
            credit: creditAccount,
            raw: _0x15f829,
            isFuliza: type === 'fuliza'
        };
    }

    // ─── BATCH PARSER WITH DEDUPLICATION ──────────────────────────────────
    function _0x856f67(_0x20cbfd) {
        const _0x269779 = _0x34b2;
        // Split by multiple newlines or transaction boundaries
        const _0x20460f = _0x20cbfd
            .split(/\n{2,}|(?=[A-Z]{1}[A-Z0-9]{9}\s+Confirmed)|(?=Confirmed\.)/g)
            .map(s => s.trim())
            .filter(s => s.length > 10);

        const _0x510938 = [];
        const _0x18a3e1 = new Set();

        for (const _0x3e5027 of _0x20460f) {
            const _0x321556 = _0x28d4a7(_0x3e5027);
            if (!_0x321556) continue;

            // Build unique key for deduplication
            const key = _0x321556.ref && !_0x321556.ref.startsWith('MPESA-') ?
                _0x321556.ref :
                _0x321556.raw.slice(0, 60);

            if (_0x18a3e1.has(key)) continue;
            _0x18a3e1.add(key);

            _0x510938.push(_0x321556);
        }

        return _0x510938;
    }

    // ─── TRANSACTION LOGGER ────────────────────────────────────────────────
    async function _0x2bc494(_0x197aaa) {
        try {
            const _0x1a2b3c = _0x197aaa.type;
            const _0x2b3c4d = _0x197aaa.ref;
            const _0x3c4d5e = Number(_0x197aaa.amount) || 0;
            const _0x4d5e6f = _0x197aaa.recipient || '';
            const _0x5e6f70 = Number(_0x197aaa.charge) || 0;
            const _0x6f7081 = !!_0x197aaa.isFuliza || _0x1a2b3c === 'fuliza';
            const debit = _0x197aaa.debit || 'Cash';
            const credit = _0x197aaa.credit || 'M-Pesa';
            const direction = _0x197aaa.direction || (_0x1a2b3c === 'receive' ? 'incoming' : 'outgoing');

            if (_0x3c4d5e <= 0 && _0x5e6f70 <= 0 && !_0x6f7081) return null;

            const _0x7081a2 = (n) => Number(n).toLocaleString('en-KE');
            const _0x81a2b3 = Date.now() + Math.floor(Math.random() * 1000);
            const _0x92b3c4 = [];

            // ─── Direction-aware transaction generation ──────────────────
            if (_0x6f7081) {
                // Fuliza: separate repayment and charge
                if (_0x3c4d5e > 0) {
                    _0x92b3c4.push({
                        id: _0x81a2b3,
                        debit: 'Fuliza Repayment',
                        credit: 'Cash',
                        amount: _0x3c4d5e,
                        desc: `Fuliza repayment KSh ${_0x7081a2(_0x3c4d5e)} (REF: ${_0x2b3c4d})`
                    });
                }
                if (_0x5e6f70 > 0) {
                    _0x92b3c4.push({
                        id: _0x81a2b3 + _0x92b3c4.length,
                        debit: 'M-Pesa Charge',
                        credit: 'Cash',
                        amount: _0x5e6f70,
                        desc: `Fuliza charge KSh ${_0x7081a2(_0x5e6f70)} (REF: ${_0x2b3c4d})`
                    });
                }
            } else if (_0x1a2b3c === 'receive' || direction === 'incoming') {
                // INCOMING: Money arrives
                _0x92b3c4.push({
                    id: _0x81a2b3,
                    debit: debit, // From where (e.g., sender)
                    credit: credit, // To where (e.g., Cash)
                    amount: _0x3c4d5e,
                    desc: `Received KSh ${_0x7081a2(_0x3c4d5e)} from ${_0x4d5e6f || 'M-Pesa'} (REF: ${_0x2b3c4d})`
                });
                if (_0x5e6f70 > 0) {
                    _0x92b3c4.push({
                        id: _0x81a2b3 + 1,
                        debit: 'M-Pesa Charge',
                        credit: 'Cash',
                        amount: _0x5e6f70,
                        desc: `M-Pesa charge KSh ${_0x7081a2(_0x5e6f70)} for REF: ${_0x2b3c4d}`
                    });
                }
            } else if (_0x1a2b3c === 'contra' || direction === 'contra') {
                // CONTRA: Money moves between user's accounts
                _0x92b3c4.push({
                    id: _0x81a2b3,
                    debit: debit,
                    credit: credit,
                    amount: _0x3c4d5e,
                    desc: `TRANSFER KSh ${_0x7081a2(_0x3c4d5e)}: ${debit} → ${credit} (REF: ${_0x2b3c4d})`
                });
                if (_0x5e6f70 > 0) {
                    _0x92b3c4.push({
                        id: _0x81a2b3 + 1,
                        debit: 'M-Pesa Charge',
                        credit: 'Cash',
                        amount: _0x5e6f70,
                        desc: `M-Pesa charge KSh ${_0x7081a2(_0x5e6f70)} for REF: ${_0x2b3c4d}`
                    });
                }
            } else {
                // OUTGOING: Money leaves
                _0x92b3c4.push({
                    id: _0x81a2b3,
                    debit: debit, // From where (e.g., Cash)
                    credit: credit, // To where (e.g., Paybill)
                    amount: _0x3c4d5e,
                    desc: `${_0x1a2b3c.toUpperCase()} KSh ${_0x7081a2(_0x3c4d5e)} to ${_0x4d5e6f || 'M-Pesa'} (REF: ${_0x2b3c4d})`
                });
                if (_0x5e6f70 > 0) {
                    _0x92b3c4.push({
                        id: _0x81a2b3 + 1,
                        debit: 'M-Pesa Charge',
                        credit: 'Cash',
                        amount: _0x5e6f70,
                        desc: `M-Pesa charge KSh ${_0x7081a2(_0x5e6f70)} for REF: ${_0x2b3c4d}`
                    });
                }
            }

            if (_0x92b3c4.length === 0) return null;

            // ─── Save to ledger using main file's functions ────────────
            const _0xa3c4d5 = typeof saveData !== 'undefined' && typeof state !== 'undefined';

            for (const _0xb4d5e6 of _0x92b3c4) {
                if (_0xa3c4d5) {
                    // Use main file's saveData
                    await saveData('tx', _0xb4d5e6);
                    state.transactions.push(_0xb4d5e6);
                } else {
                    // Fallback direct IndexedDB
                    await _0x5088ad(_0xb4d5e6);
                }
            }

            // ─── Trigger UI updates from main file ─────────────────────
            if (_0xa3c4d5) {
                if (typeof updateRuleSuggestion === 'function') updateRuleSuggestion();
                if (typeof nav === 'function') nav('dash');
                if (typeof saveBackup === 'function') await saveBackup();
                if (typeof updateLiveHud === 'function') updateLiveHud();
            }

            return _0x92b3c4[0];

        } catch (_0xc5d6e7) {
            console.error('[MpesaTracker] Log error:', _0xc5d6e7);
            return null;
        }
    }

    // ─── DIRECT INDEXEDDB FALLBACK ────────────────────────────────────────
    function _0x5088ad(_0x548d18) {
        return new Promise((resolve, reject) => {
            const _0x1091a9 = _0x34b2;
            const _0x346a32 = indexedDB.open('TravisGuardian_v1.0', 1);
            _0x346a32.onsuccess = (e) => {
                const db = e.target.result;
                const tx = db.transaction('tx', 'readwrite');
                const store = tx.objectStore('tx');
                const req = store.put(_0x548d18);
                req.onsuccess = () => { db.close(); resolve(); };
                req.onerror = () => { db.close(); reject(req.error); };
            };
            _0x346a32.onerror = () => reject(_0x346a32.error);
        });
    }

    // ─── SAFARICOM TARIFF TABLE ────────────────────────────────────────────
    const _0xbeb8fc = {
        'send': [
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
        'withdraw': [
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
            { min: 20001, max: 25000, charge: 197 },
            { min: 25001, max: 35000, charge: 197 }
        ]
    };

    function _0x8fa1bc(_0x37e120, _0x15a100) {
        const _0x1a3d08 = _0x34b2;
        const table = _0x37e120 === 'withdraw' ? _0xbeb8fc.withdraw : _0xbeb8fc.send;
        const entry = table.find(r => _0x15a100 >= r.min && _0x15a100 <= r.max);
        return entry ? entry.charge : null;
    }

    // ─── UI FUNCTIONS (Modal, Tabs, etc.) ─────────────────────────────────
    function _0xc5c6b3() {
        const _0x55d415 = _0x34b2;
        const existing = document.getElementById('mpesa-modal');
        if (existing) {
            existing.style.display = 'flex';
            _0x14c2f4();
            return;
        }
        const modal = document.createElement('div');
        modal.id = 'mpesa-modal';
        modal.style.cssText = 'position:fixed;inset:0;z-index:7000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,0.55);backdrop-filter:blur(10px);';
        modal.innerHTML = MpesaModalHTML;
        document.body.appendChild(modal);
        _0x4856fd(modal);
        _0x14c2f4();
    }

    const MpesaModalHTML = `<div style="background:#ffffff;border-radius:16px;width:100%;max-width:560px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,0.25);border:1px solid rgba(0,0,0,0.08);">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#00a651,#007a3d);padding:20px 22px 16px;flex-shrink:0;">
            <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="display:flex;align-items:center;gap:12px;">
                    <div style="width:40px;height:40px;background:rgba(255,255,255,0.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;">📱</div>
                    <div>
                        <div style="color:white;font-size:15px;font-weight:700;letter-spacing:-.01em;">Online Charge Tracker</div>
                        <div style="color:rgba(255,255,255,0.75);font-size:11px;margin-top:1px;">Paste SMS · Extract charges · Auto-log to ledger</div>
                    </div>
                </div>
                <button id="mpesa-close" style="background:rgba(255,255,255,0.15);border:none;color:white;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;">×</button>
            </div>
            <div style="display:flex;gap:4px;margin-top:14px;background:rgba(0,0,0,0.15);border-radius:8px;padding:3px;">
                <button class="mpesa-tab active" data-tab="paste" style="flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:white;color:#007a3d;transition:all .15s;">📋 Paste SMS</button>
                <button class="mpesa-tab" data-tab="manual" style="flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:rgba(255,255,255,0.8);transition:all .15s;">✏️ Manual Entry</button>
                <button class="mpesa-tab" data-tab="tariff" style="flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:rgba(255,255,255,0.8);transition:all .15s;">📊 Tariff Table</button>
            </div>
        </div>
        <div style="flex:1;overflow-y:auto;padding:0;" id="mpesa-body">
            <!-- TAB: Paste SMS -->
            <div id="tab-paste" class="mpesa-tab-content" style="padding:18px;">
                <div style="background:#f0fdf4;border:1.5px dashed #86efac;border-radius:10px;padding:14px;margin-bottom:14px;">
                    <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#166534;">How to use:</p>
                    <ol style="margin:0;padding-left:18px;font-size:12px;color:#15803d;line-height:1.7;">
                        <li>Open your SMS app → find M-Pesa & Bank messages</li>
                        <li>Long-press → Copy the full message text</li>
                        <li>Paste one or multiple messages below</li>
                        <li>Travis extracts <strong>all</strong> charges (Send, Withdraw, Buy Goods, Paybill, Airtime, Fuliza…)</li>
                    </ol>
                </div>
                <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em;">Paste M-Pesa SMS Message(s)</label>
                <textarea id="mpesa-sms-input"
                    placeholder="Paste your M-Pesa SMS here…&#10;&#10;Works with ALL message types:&#10;• Send Money  • Withdraw  • Buy Goods  • Paybill  • Airtime  • Fuliza&#10;&#10;Example:&#10;QAB3X12345 Confirmed. Ksh1,500.00 sent to JOHN DOE on 1/6/25 at 3:45 PM. New M-PESA balance is Ksh3,200.00. Transaction cost, Ksh27.00."
                    style="width:100%;height:140px;border:1px solid #e5e7eb;border-radius:8px;padding:12px;font-size:12.5px;font-family:inherit;resize:vertical;outline:none;background:#fafafa;line-height:1.6;box-sizing:border-box;"></textarea>
                <div style="display:flex;gap:8px;margin-top:10px;">
                    <button id="mpesa-parse-btn" style="flex:1;background:#00a651;color:white;border:none;padding:12px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">Extract Charges</button>
                    <button id="mpesa-clear-btn" style="background:#f3f4f6;color:#6b7280;border:none;padding:12px 14px;border-radius:8px;font-size:13px;cursor:pointer;font-family:inherit;">Clear</button>
                </div>
                <div id="mpesa-results" style="margin-top:14px;display:none;">
                    <div id="mpesa-results-inner"></div>
                    <button id="mpesa-post-all" style="width:100%;background:linear-gradient(135deg,#00a651,#007a3d);color:white;border:none;padding:13px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;margin-top:10px;font-family:inherit;display:none;">Log All Charges to Ledger</button>
                </div>
            </div>
            <!-- TAB: Manual Entry -->
            <div id="tab-manual" class="mpesa-tab-content" style="padding:18px;display:none;">
                <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px;margin-bottom:16px;">
                    <p style="margin:0;font-size:12px;color:#92400e;line-height:1.6;">Use this when you know the transaction amount but don't have the SMS. Travis will calculate the Safaricom charge from the official tariff.</p>
                </div>
                <div style="display:grid;gap:12px;">
                    <div>
                        <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;">Transaction Type</label>
                        <select id="manual-type" style="width:100%;padding:9px 12px;border:1px solid #e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;background:white;">
                            <option value="send">Send Money (to M-Pesa number)</option>
                            <option value="paybill">Paybill / Till Number</option>
                            <option value="withdraw">Agent Withdrawal</option>
                            <option value="airtime">Airtime Purchase</option>
                            <option value="custom">Custom Charge Amount</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;">Amount Transacted (KSh)</label>
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
                        <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;">Description (optional)</label>
                        <input id="manual-desc" type="text" placeholder="e.g. Sent rent to landlord" style="width:100%;padding:9px 12px;border:1px solid #e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;">
                    </div>
                    <button id="manual-log-btn" style="background:#00a651;color:white;border:none;padding:13px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">Log This Charge</button>
                </div>
            </div>
            <!-- TAB: Tariff Table -->
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
                    <strong>Note:</strong> Buy Goods (Till) and Paybill transactions to most billers are <strong>free</strong> (KSh 0 charge). Airtime purchases are also free. Charges above are per the Safaricom official tariff.
                </div>
            </div>
        </div>
        <div id="mpesa-status" style="padding:10px 18px;background:#f9fafb;border-top:1px solid #f0f0f0;font-size:12px;color:#6b7280;display:none;"></div>
    </div>`;

    // ─── UI SETUP ───────────────────────────────────────────────────────────
    function _0x4856fd(_0x3223ca) {
        const _0x3d3367 = _0x34b2;

        // Close button
        _0x3223ca.querySelector('#mpesa-close').onclick = () => {
            _0x3223ca.style.display = 'none';
        };
        _0x3223ca.onclick = (e) => {
            if (e.target === _0x3223ca) _0x3223ca.style.display = 'none';
        };

        // Tabs
        _0x3223ca.querySelectorAll('.mpesa-tab').forEach(tab => {
            tab.onclick = () => {
                _0x3223ca.querySelectorAll('.mpesa-tab').forEach(t => {
                    t.style.background = 'transparent';
                    t.style.color = 'rgba(255,255,255,0.8)';
                });
                tab.style.background = 'white';
                tab.style.color = '#007a3d';
                const target = tab.dataset.tab;
                _0x3223ca.querySelectorAll('.mpesa-tab-content').forEach(c => c.style.display = 'none');
                const content = _0x3223ca.querySelector('#tab-' + target);
                if (content) content.style.display = 'block';
            };
        });

        // Clear button
        _0x3223ca.querySelector('#mpesa-clear-btn').onclick = () => {
            _0x3223ca.querySelector('#mpesa-sms-input').value = '';
            _0x3223ca.querySelector('#mpesa-results').style.display = 'none';
        };

        // Parse button
        _0x3223ca.querySelector('#mpesa-parse-btn').onclick = () => _0x577eaf(_0x3223ca);

        // Manual lookup
        _0x3223ca.querySelector('#manual-amount').oninput = () => _0x28e57f(_0x3223ca);
        _0x3223ca.querySelector('#manual-type').onchange = () => _0x28e57f(_0x3223ca);

        // Manual log button
        _0x3223ca.querySelector('#manual-log-btn').onclick = () => _0x5a8591(_0x3223ca);

        // Post all button
        _0x3223ca.querySelector('#mpesa-post-all').onclick = () => _0x1e111e(_0x3223ca);
    }

    // ─── PARSE AND DISPLAY RESULTS ─────────────────────────────────────────
    async function _0x577eaf(_0x46b0cd) {
        const _0x4380de = _0x34b2;
        const parseBtn = _0x46b0cd.querySelector('#mpesa-parse-btn');
        const smsInput = _0x46b0cd.querySelector('#mpesa-sms-input').value;
        const resultsDiv = _0x46b0cd.querySelector('#mpesa-results');
        const resultsInner = _0x46b0cd.querySelector('#mpesa-results-inner');
        const postAllBtn = _0x46b0cd.querySelector('#mpesa-post-all');

        parseBtn.textContent = '⏳ Checking…';
        parseBtn.disabled = true;

        // Check existing ledger entries for deduplication
        const existingRefs = await _0xfe8e01();

        parseBtn.textContent = '🔍 Extract Charges';
        parseBtn.disabled = false;

        if (smsInput.trim() && !_0x5325d3.some(p => p.test(smsInput))) {
            resultsInner.innerHTML = `<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:14px;text-align:center;">
                <div style="font-size:28px;margin-bottom:8px;">🚫</div>
                <div style="font-size:13px;font-weight:700;color:#991b1b;">This doesn't look like an M-Pesa message</div>
                <div style="font-size:12px;color:#b91c1c;margin-top:6px;line-height:1.7;">
                    Travis only processes Safaricom M-Pesa SMS messages.<br>
                    Please paste a genuine M-Pesa confirmation message.
                </div>
            </div>`;
            resultsDiv.style.display = 'block';
            postAllBtn.style.display = 'none';
            return;
        }

        const parsed = _0x856f67(smsInput);

        if (parsed.length === 0) {
            resultsInner.innerHTML = `<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:14px;text-align:center;">
                <div style="font-size:20px;margin-bottom:6px;">🤔</div>
                <div style="font-size:13px;font-weight:600;color:#991b1b;">No M-Pesa messages detected</div>
                <div style="font-size:12px;color:#b91c1c;margin-top:4px;line-height:1.6;">
                    Make sure you paste the <strong>full SMS text</strong>.<br>
                    Supported: Send Money, Withdraw, Buy Goods, Paybill, Airtime, Fuliza.
                </div>
            </div>`;
            resultsDiv.style.display = 'block';
            postAllBtn.style.display = 'none';
            return;
        }

        // Filter new transactions (not already in ledger)
        const newTx = parsed.filter(tx => tx.charge > 0 && !existingRefs.has(tx.ref));
        const duplicateTx = parsed.filter(tx => tx.charge > 0 && existingRefs.has(tx.ref));
        const zeroChargeTx = parsed.filter(tx => tx.charge === 0);

        let html = '';

        if (newTx.length > 0) {
            const totalCharge = newTx.reduce((sum, tx) => sum + tx.charge, 0);
            html += `<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px 14px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                    <div style="font-size:11px;font-weight:600;color:#166534;text-transform:uppercase;letter-spacing:.05em;">Total New Charges</div>
                    <div style="font-size:20px;font-weight:800;color:#15803d;">KSh ${totalCharge.toLocaleString('en-KE')}</div>
                </div>
                <div style="font-size:12px;color:#166534;">${newTx.length} new transaction${newTx.length !== 1 ? 's' : ''}</div>
            </div>`;

            newTx.forEach(tx => {
                const icon = {
                    'send': '📤',
                    'buy_goods': '🛒',
                    'paybill': '🧾',
                    'withdraw': '🏧',
                    'airtime': '📞',
                    'receive': '📥',
                    'fuliza': '⚡',
                    'mpesa': '📱'
                } [tx.type] || '📱';

                const dirLabel = tx.direction === 'incoming' ? '📥 INCOMING' :
                    tx.direction === 'outgoing' ? '📤 OUTGOING' :
                    tx.direction === 'contra' ? '🔄 TRANSFER' : '❓ UNKNOWN';

                html += `<div style="border:1px solid #e5e7eb;border-radius:8px;padding:11px 13px;margin-bottom:8px;background:white;">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                        <div style="flex:1;">
                            <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;">
                                <span style="font-size:14px;">${icon}</span>
                                <span style="font-size:13px;font-weight:600;color:#1a1a1a;">${tx.label}</span>
                                <span style="font-size:10px;font-weight:700;background:#dcfce7;color:#166534;padding:2px 7px;border-radius:20px;">${dirLabel}</span>
                                <span style="font-size:10px;color:#9ca3af;font-family:monospace;">${tx.ref}</span>
                            </div>
                            ${tx.recipient ? `<div style="font-size:12.5px;color:#374151;">To: ${tx.recipient}</div>` : ''}
                            ${tx.amount ? `<div style="font-size:11px;color:#6b7280;margin-top:2px;">Amount: KSh ${tx.amount.toLocaleString('en-KE')}</div>` : ''}
                        </div>
                        <div style="text-align:right;flex-shrink:0;">
                            <div style="font-size:11px;color:#6b7280;">Charge</div>
                            <div style="font-size:17px;font-weight:800;color:#dc2626;">KSh ${tx.charge.toLocaleString('en-KE')}</div>
                            <div style="font-size:10px;color:#6b7280;">${tx.debit} → ${tx.credit}</div>
                        </div>
                    </div>
                </div>`;
            });
        }

        // Show duplicates
        if (duplicateTx.length > 0) {
            html += `<div style="font-size:11px;font-weight:600;color:#92400e;margin:10px 0 6px;text-transform:uppercase;letter-spacing:.05em;">⚠️ Already in ledger — skipped</div>`;
            duplicateTx.forEach(tx => {
                html += `<div style="border:1px solid #fde68a;border-radius:8px;padding:9px 13px;margin-bottom:6px;background:#fffbeb;opacity:0.8;">
                    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
                        <div>
                            <span style="font-size:10px;font-weight:700;background:#fef3c7;color:#92400e;padding:2px 7px;border-radius:20px;">DUPLICATE</span>
                            <span style="font-size:12px;color:#1a1a1a;margin-left:6px;">${tx.label}</span>
                            <div style="font-size:11px;color:#92400e;margin-top:3px;">Duplicate — already logged, will not be re-imported</div>
                        </div>
                        <div style="font-size:15px;font-weight:700;color:#b45309;flex-shrink:0;">KSh ${tx.charge.toLocaleString('en-KE')}</div>
                    </div>
                </div>`;
            });
        }

        // Show zero-charge transactions
        if (zeroChargeTx.length > 0) {
            html += `<div style="font-size:11px;color:#9ca3af;padding:6px 2px;">
                ${zeroChargeTx.length} transaction${zeroChargeTx.length !== 1 ? 's' : ''} with zero charge (${zeroChargeTx.map(t => t.label).join(', ')}) — nothing to log.
            </div>`;
        }

        if (newTx.length === 0 && parsed.length > 0) {
            html += `<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px;text-align:center;margin-top:6px;">
                <div style="font-size:13px;font-weight:600;color:#92400e;">All transactions already logged</div>
                <div style="font-size:12px;color:#b45309;margin-top:3px;">No new charges to import.</div>
            </div>`;
        }

        resultsInner.innerHTML = html;
        resultsDiv.style.display = 'block';
        postAllBtn.style.display = newTx.length > 0 ? 'block' : 'none';
        postAllBtn.dataset.results = JSON.stringify(newTx);
    }

    // ─── LOG ALL CHARGES ────────────────────────────────────────────────────
    async function _0x1e111e(_0x557fdf) {
        const _0x2437c9 = _0x34b2;
        const btn = _0x557fdf.querySelector('#mpesa-post-all');
        const txList = JSON.parse(btn.dataset.results || '[]');

        if (txList.length === 0) return;

        btn.disabled = true;
        btn.textContent = 'Logging…';

        let logged = 0;
        let totalCharge = 0;

        for (const tx of txList) {
            try {
                await new Promise(r => setTimeout(r, 20));
                const result = await _0x2bc494(tx);
                if (result) {
                    logged++;
                    totalCharge += tx.charge;
                }
            } catch (e) {
                console.error('[MpesaTracker] Failed to log:', tx.ref, e);
            }
        }

        // Trigger UI updates
        if (typeof saveBackup === 'function') try { await saveBackup(); } catch (e) {}
        if (typeof nav === 'function') try { nav('dash'); } catch (e) {}
        if (typeof updateLiveHud === 'function') updateLiveHud();

        _0x598327(_0x557fdf, `✅ ${logged} charge${logged !== 1 ? 's' : ''} logged (KSh ${totalCharge.toLocaleString('en-KE')} total)`);
        btn.textContent = `${logged} Charge${logged !== 1 ? 's' : ''} Logged ✅`;
        btn.style.background = '#16a34a';
        btn.disabled = false;

        setTimeout(() => {
            _0x557fdf.querySelector('#mpesa-sms-input').value = '';
            _0x557fdf.querySelector('#mpesa-results').style.display = 'none';
            btn.textContent = 'Log All Charges to Ledger';
            btn.style.background = 'linear-gradient(135deg,#00a651,#007a3d)';
            btn.style.display = 'none';
        }, 3000);
    }

    // ─── MANUAL ENTRY LOGIC ─────────────────────────────────────────────────
    function _0x28e57f(_0x52bcc8) {
        const _0x185a40 = _0x34b2;
        const type = _0x52bcc8.querySelector('#manual-type').value;
        const amount = parseFloat(_0x52bcc8.querySelector('#manual-amount').value) || 0;
        const chargeRow = _0x52bcc8.querySelector('#manual-charge-row');
        const resultDiv = _0x52bcc8.querySelector('#manual-lookup-result');
        const resultVal = _0x52bcc8.querySelector('#manual-lookup-val');
        const resultNote = _0x52bcc8.querySelector('#manual-lookup-note');

        if (type === 'custom') {
            chargeRow.style.display = 'block';
            resultDiv.style.display = 'none';
            return;
        }
        chargeRow.style.display = 'none';

        if (amount <= 0) {
            resultDiv.style.display = 'none';
            return;
        }

        if (type === 'paybill' || type === 'airtime') {
            resultDiv.style.display = 'block';
            resultVal.textContent = 'KSh 0';
            resultNote.textContent = type === 'paybill' ? 'Most Paybill/Till transactions are free.' : 'Airtime purchases are free on M-Pesa.';
            return;
        }

        const charge = _0x8fa1bc(type === 'withdraw' ? 'withdraw' : 'send', amount);
        if (charge === null) {
            resultDiv.style.display = 'block';
            resultVal.textContent = '⚠️ Out of range';
            resultNote.textContent = '';
            return;
        }

        resultDiv.style.display = 'block';
        resultVal.textContent = `KSh ${charge.toLocaleString('en-KE')}`;
        resultNote.textContent = `Official tariff for KSh ${amount.toLocaleString('en-KE')} ${type === 'withdraw' ? 'withdrawal' : 'send'}`;
    }

    async function _0x5a8591(_0x5331b4) {
        const _0x340d9c = _0x34b2;
        const type = _0x5331b4.querySelector('#manual-type').value;
        const amount = parseFloat(_0x5331b4.querySelector('#manual-amount').value) || 0;
        const desc = _0x5331b4.querySelector('#manual-desc').value.trim() || 'M-Pesa transaction charge';
        const btn = _0x5331b4.querySelector('#manual-log-btn');

        let charge = 0;
        if (type === 'custom') {
            charge = parseFloat(_0x5331b4.querySelector('#manual-charge').value) || 0;
        } else if (type === 'paybill' || type === 'airtime') {
            charge = 0;
        } else {
            charge = _0x8fa1bc(type === 'withdraw' ? 'withdraw' : 'send', amount) || 0;
        }

        if (charge <= 0) {
            _0x598327(_0x5331b4, 'ℹ️ This transaction type has no charge — nothing to log.');
            return;
        }

        btn.disabled = true;
        btn.textContent = 'Logging…';

        const txData = {
            type: type,
            label: type === 'send' ? 'Send Money' :
                type === 'paybill' ? 'Paybill' :
                type === 'withdraw' ? 'Withdrawal' :
                type === 'airtime' ? 'Airtime Purchase' :
                'Custom',
            ref: 'MANUAL-' + Date.now().toString(36).toUpperCase(),
            amount: amount,
            recipient: desc,
            charge: charge,
            direction: type === 'receive' ? 'incoming' : 'outgoing',
            debit: type === 'receive' ? 'M-Pesa' : 'Cash',
            credit: type === 'receive' ? 'Cash' : 'M-Pesa'
        };

        try {
            await _0x2bc494(txData);
            if (typeof saveBackup === 'function') try { await saveBackup(); } catch (e) {}
            if (typeof nav === 'function') try { nav('dash'); } catch (e) {}
            if (typeof updateLiveHud === 'function') updateLiveHud();

            _0x598327(_0x5331b4, `✅ KSh ${charge.toLocaleString('en-KE')} charge logged!`);
            _0x5331b4.querySelector('#manual-amount').value = '';
            _0x5331b4.querySelector('#manual-desc').value = '';
            _0x5331b4.querySelector('#manual-lookup-result').style.display = 'none';
        } catch (err) {
            _0x598327(_0x5331b4, `❌ Failed to log: ${err.message}`);
        }

        btn.disabled = false;
        btn.textContent = 'Log This Charge';
    }

    // ─── STATUS DISPLAY ─────────────────────────────────────────────────────
    function _0x598327(_0x2a26cf, _0x28dece) {
        const _0x59271b = _0x34b2;
        const status = _0x2a26cf.querySelector('#mpesa-status');
        if (!status) return;
        status.textContent = _0x28dece;
        status.style.display = 'block';
        status.style.color = _0x28dece.startsWith('✅') ? '#16a34a' :
            _0x28dece.startsWith('❌') ? '#dc2626' :
            '#6b7280';
        status.style.background = _0x28dece.startsWith('✅') ? '#f0fdf4' :
            _0x28dece.startsWith('❌') ? '#fef2f2' :
            '#f9fafb';
    }

    // ─── TARIFF TABLE RENDERER ─────────────────────────────────────────────
    function _0x14c2f4() {
        const renderTable = (id, data) => {
            const el = document.getElementById(id);
            if (!el) return;
            let html = `<thead>
                <tr style="background:#f0fdf4;">
                    <th style="padding:5px 8px;text-align:left;font-size:10px;color:#166534;font-weight:700;border-bottom:1px solid #bbf7d0;">Range (KSh)</th>
                    <th style="padding:5px 8px;text-align:right;font-size:10px;color:#166534;font-weight:700;border-bottom:1px solid #bbf7d0;">Charge</th>
                </tr>
            </thead><tbody>`;
            data.forEach((row, i) => {
                const bg = i % 2 === 0 ? '#ffffff' : '#f9fafb';
                html += `<tr style="background:${bg};">
                    <td style="padding:5px 8px;font-size:11px;color:#374151;border-bottom:1px solid #f3f4f6;">${row.min.toLocaleString()}–${row.max.toLocaleString()}</td>
                    <td style="padding:5px 8px;font-size:11px;font-weight:700;color:${row.charge === 0 ? '#16a34a' : '#374151'};text-align:right;border-bottom:1px solid #f3f4f6;">KSh ${row.charge}</td>
                </tr>`;
            });
            html += `</tbody>`;
            el.innerHTML = html;
        };

        renderTable('tariff-send', _0xbeb8fc.send);
        renderTable('tariff-withdraw', _0xbeb8fc.withdraw);
    }

    // ─── NAVIGATION INTEGRATION ────────────────────────────────────────────
    function _0x2f6c26() {
        const _0x4a097b = _0x34b2;
        const sidebarFooter = document.querySelector('#nav-sidebar .sidebar-footer');
        if (sidebarFooter && !document.getElementById('nav-mpesa')) {
            const btn = document.createElement('button');
            btn.id = 'nav-mpesa';
            btn.className = 'nav-item';
            btn.style.cssText = 'width:100%;padding:8px 12px;border:none;background:transparent;color:#5a5a5a;cursor:pointer;font-family:inherit;font-size:13px;text-align:left;border-radius:6px;';
            btn.innerHTML = '📱 M-Pesa Charges';
            btn.onclick = () => {
                window.travisMpesa.open();
                document.getElementById('nav-sidebar').classList.remove('mobile-open');
            };
            sidebarFooter.appendChild(btn);
        }

        // Taskbar integration
        const taskbar = document.getElementById('taskbar');
        const existingBtn = document.getElementById('tb-mpesa');
        if (taskbar && !existingBtn) {
            const btn = document.createElement('button');
            btn.id = 'tb-mpesa';
            btn.className = 'taskbar-btn';
            btn.title = 'M-Pesa Charges';
            btn.textContent = '📱';
            btn.onclick = () => window.travisMpesa.open();
            const target = taskbar.querySelector('.taskbar-btn[title*="Settings"]');
            if (target && target.nextSibling) {
                taskbar.insertBefore(btn, target.nextSibling);
            } else {
                taskbar.appendChild(btn);
            }
        }
    }

    // ─── BOOT ───────────────────────────────────────────────────────────────
    function _0x123754(retries) {
        if (retries > 20) return;
        const ready = document.getElementById('mpesa-modal') && document.getElementById('nav-sidebar');
        if (ready) {
            _0x2f6c26();
        } else {
            setTimeout(() => _0x123754(retries + 1), 200);
        }
    }

    // ─── EXPOSE PUBLIC API ─────────────────────────────────────────────────
    window.travisMpesa = {
        open: () => _0xc5c6b3(),
        parse: _0x856f67,
        tariff: _0x8fa1bc,
        detectDirection: detectDirection,
        parseSingle: _0x28d4a7
    };

    // ─── BOOT ON DOM READY ─────────────────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(() => _0x123754(0), 1800));
    } else {
        setTimeout(() => _0x123754(0), 1800);
    }

}()));

function _0x34b2(_0x5bbe37, _0x20766d) {
    _0x5bbe37 = _0x5bbe37 - 0x73;
    const _0x590942 = _0x5909();
    let _0x34b27b = _0x590942[_0x5bbe37];
    return _0x34b27b;
}

function _0x5909() {
    const _0x349956 = [
        'MPESA-', 'readyState', '...', 'position:fixed;inset:0;z-index:7000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,0.55);backdrop-filter:blur(10px);', 'Airtime', 'Sent', 'objectStore', 'paid to', 'send', 'title', 'querySelector', 'withdraw', 'function', 'color', '.mpesa-tab', 'desc', 'nav-mpesa', 'style', '</span>', 'KSh', 'transaction', 'from', 'filter', 'length', 'travisMpesa', 'type', 'ref', '320ZqPGKJ', 'receive', 'now', 'Failed to log:', 'button[onclick*="showTxModal"]', 'tariff-withdraw', 'target', 'result', 'querySelectorAll', 'open', 'airtime', 'disabled', 'contains', 'objectStoreNames', 'onerror', 'readwrite', 'test', 'ondblclick', 'Tariff Table', 'manual', 'classList', 'tab', 'key', 'innerHTML', 'textContent', 'map', 'toUpperCase', 'getElementById', 'add', 'trim', 'none', 'flex', 'load', 'M-Pesa Charge', 'M-Pesa', 'replace', 'charge', 'toLocaleString', 'Buy Goods', 'Paybill', 'forEach', 'readonly', 'linear-gradient(135deg,#00a651,#007a3d)', 'has', 'onsuccess', 'onclick', '</td>', 'white', 'exec', 'join', 'getAll', '#f9fafb', 'stringify', '#tab-', 'mpesa-modal', 'withdraw', 'push', 'raw', 'split', 'transactions', 'taskbar', 'querySelectorAll', 'DOMContentLoaded', 'toLowerCase', 'button', 'createElement', '#dc2626', 'Fuliza Charge', '#166534', 'withdrawal', 'oninput', 'reduce', 'Log All Charges to Ledger', 'replace', 'charge', 'classList', 'tab', 'block', 'display', 'map', 'trim', '...', 'Add description', 'style', 'contains', 'Fuliza', 'label', 'startsWith', 'some', 'toLowerCase', 'parse', 'button', '</div>', 'match', 'undefined', 'onchange', 'innerHTML', 'onclick', 'textContent', 'disabled', 'open', 'airtime', 'test', 'nextSibling', 'random', 'style', 'none', 'block', 'M-Pesa', 'Tariff Table', 'manual', 'classList', 'tab', 'key', 'innerHTML', 'textContent', 'map', 'toUpperCase', 'getElementById', 'add', 'trim', 'none', 'flex', 'load', 'M-Pesa Charge', 'M-Pesa', 'replace', 'charge', 'toLocaleString', 'Buy Goods', 'Paybill', 'forEach', 'readonly', 'linear-gradient(135deg,#00a651,#007a3d)', 'has', 'onsuccess', 'onclick', 'white', 'exec', 'join', 'getAll', '#f9fafb', 'stringify', '#tab-', 'mpesa-modal', 'withdraw', 'push', 'raw', 'split', 'transactions', 'taskbar', 'querySelectorAll', 'DOMContentLoaded', 'toLowerCase', 'button', 'createElement', '#dc2626', 'Fuliza Charge', '#166534', 'withdrawal', 'oninput', 'reduce', 'Log All Charges to Ledger', 'replace', 'charge', 'classList', 'tab', 'block', 'display', 'map', 'trim', 'Add description', 'style', 'contains', 'Fuliza', 'label', 'startsWith', 'some', 'toLowerCase', 'parse', 'button', '</div>', 'match', 'undefined', 'onchange', 'innerHTML', 'onclick', 'textContent', 'disabled', 'open', 'airtime', 'test', 'nextSibling', 'random'
    ];
    _0x5909 = function() { return _0x349956; };
    return _0x5909();
}
