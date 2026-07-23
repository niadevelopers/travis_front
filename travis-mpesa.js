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
    const _0x5325d3 = [/M-?PESA/i, /transaction cost/i, /new m-?pesa balance/i, /safaricom/i, /fuliza/i],
        _0x521a09 = /\b([A-Z0-9]{10})\b/g,
        _0x1410f4 = /(?:Ksh|KES)\s*([\d,]+\.?\d*)/gi,
        _0x296380 = /transaction cost[,:]?\s*(?:Ksh|KES)\s*([\d,]+\.?\d*)/i,
        _0x15d1a4 = /Fuliza M-PESA charge of\s*(?:Ksh|KES)\s*([\d,]+\.?\d*)/i;

    function _0xa65199(_0x1022c8) {
        const _0x38da16 = _0x34b2,
            _0x9c3e4c = _0x1022c8[_0x38da16(0xa9)]();
        if (/fuliza/i ['test'](_0x1022c8)) return {
            'type': _0x38da16(0x125),
            'label': _0x38da16(0x8d),
            'direction': 'outgoing'
        };
        if (/you have received/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': _0x38da16(0xf3),
            'label': _0x38da16(0xb7),
            'direction': 'incoming'
        };
        if (/you have bought.*airtime|airtime.*you have bought/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': 'airtime',
            'label': _0x38da16(0xd7),
            'direction': 'outgoing'
        };
        if (/paid\s+(?:Ksh|KES)[\d,\.]+ to\s+\d+/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': _0x38da16(0xfd),
            'label': _0x38da16(0xe2),
            'direction': 'outgoing'
        };
        if (/paid to.+till no/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': 'buy_goods',
            'label': _0x38da16(0x13a),
            'direction': 'outgoing'
        };
        if (/paid to/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': _0x38da16(0x13b),
            'label': 'Buy\x20Goods',
            'direction': 'outgoing'
        };
        if (/withdraw/i ['test'](_0x1022c8)) return {
            'type': _0x38da16(0x81),
            'label': _0x38da16(0x128),
            'direction': 'outgoing'
        };
        if (/sent to/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': _0x38da16(0xba),
            'label': _0x38da16(0x136),
            'direction': 'outgoing'
        };
        if (/give.*to|give/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': 'send',
            'label': _0x38da16(0x136),
            'direction': 'outgoing'
        };
        return {
            'type': _0x38da16(0x10e),
            'label': _0x38da16(0xe0),
            'direction': 'unknown'
        };
    }

    function _0x23a5b0(_0x134efc) {
        const _0x1b2238 = _0x34b2;
        let _0x18a2b4;
        _0x18a2b4 = _0x134efc[_0x1b2238(0xad)](/sent to\s+(.+?)\s+(?:\d{7,}|on\s+[\d/])/i);
        if (_0x18a2b4) return _0x18a2b4[0x1][_0x1b2238(0x9f)]();
        _0x18a2b4 = _0x134efc['match'](/sent to\s+(.+?)\s+for account/i);
        if (_0x18a2b4) return _0x18a2b4[0x1][_0x1b2238(0x9f)]();
        _0x18a2b4 = _0x134efc[_0x1b2238(0xad)](/paid\s+(?:Ksh|KES)[\d,\.]+\s+to\s+\d+\s*[-–]\s*(.+?)\s+on\s/i);
        if (_0x18a2b4) return _0x18a2b4[0x1][_0x1b2238(0x9f)]();
        _0x18a2b4 = _0x134efc[_0x1b2238(0xad)](/paid to\s+(.+?)(?:\.\s*(?:Till|on)|\.?\s*New M-?PESA|\s+on\s+[\d/])/i);
        if (_0x18a2b4) return _0x18a2b4[0x1][_0x1b2238(0x9f)]();
        _0x18a2b4 = _0x134efc[_0x1b2238(0xad)](/from\s+\d+\s*[-–]\s*(.+?)\s+on\s/i);
        if (_0x18a2b4) return _0x18a2b4[0x1][_0x1b2238(0x9f)]();
        _0x18a2b4 = _0x134efc[_0x1b2238(0xad)](/from\s+\d+\s*[-–]\s*(.+?)\s*New M-?PESA/i);
        if (_0x18a2b4) return _0x18a2b4[0x1][_0x1b2238(0x9f)]();
        _0x18a2b4 = _0x134efc[_0x1b2238(0xad)](/received\s+(?:Ksh|KES)[\d,\.]+\s+from\s+(.+?)\s+(?:\d{7,}|on\s+[\d/])/i);
        if (_0x18a2b4) return _0x18a2b4[0x1][_0x1b2238(0x9f)]();
        return '';
    }

    function _0x28d4a7(_0x3e0ebd) {
        const _0x4db353 = _0x34b2,
            _0x15f829 = _0x3e0ebd[_0x4db353(0x9f)]();
        if (!_0x15f829) return null;
        const _0x52e783 = _0x5325d3[_0x4db353(0xa7)](_0x53c7b9 => _0x53c7b9[_0x4db353(0x13c)](_0x15f829));
        if (!_0x52e783) return null;
        
        // Extract Fuliza charge
        const _0x1e50bf = _0x15f829[_0x4db353(0xad)](_0x15d1a4);
        if (_0x1e50bf) {
            const _0x23ac4d = parseFloat(_0x1e50bf[0x1][_0x4db353(0x94)](/,/g, ''));
            if (_0x23ac4d > 0x0) return {
                'type': _0x4db353(0x125),
                'label': _0x4db353(0x8d),
                'direction': 'outgoing',
                'ref': _0x4db353(0xdd) + Date[_0x4db353(0xbe)](),
                'amount': 0x0,
                'recipient': _0x4db353(0x149),
                'charge': _0x23ac4d,
                'raw': _0x15f829,
                'isFuliza': true
            };
        }
        
        const _0x34b93a = new Set(['CONFIRMED', _0x4db353(0x143), _0x4db353(0x10d)]);
        let _0x446688 = '';
        const _0x2e0d26 = /\b([A-Z0-9]{10})\b/g;
        let _0x5ead85;
        while ((_0x5ead85 = _0x2e0d26[_0x4db353(0x75)](_0x15f829)) !== null) {
            if (!_0x34b93a['has'](_0x5ead85[0x1][_0x4db353(0x139)]())) {
                _0x446688 = _0x5ead85[0x1];
                break;
            }
        }
        
        const _0x1af708 = _0x15f829['match'](_0x296380),
            _0x560b9f = _0x1af708 ? parseFloat(_0x1af708[0x1][_0x4db353(0x94)](/,/g, '')) : 0x0,
            _0x4ea01d = [];
        let _0x39f03b;
        const _0x584860 = /(?:Ksh|KES)\s*([\d,]+\.?\d*)/gi;
        while ((_0x39f03b = _0x584860[_0x4db353(0x75)](_0x15f829)) !== null) {
            _0x4ea01d[_0x4db353(0xf6)](parseFloat(_0x39f03b[0x1][_0x4db353(0x94)](/,/g, '')));
        }
        const _0x218f3b = _0x4ea01d['length'] > 0x0 ? _0x4ea01d[0x0] : 0x0,
            {
                type: _0x13e39a,
                label: _0x2b61f0,
                direction: _0x576a4d
            } = _0xa65199(_0x15f829);
        
        // For incoming money (receive)
        if (_0x13e39a === 'receive') {
            // Extract the sender/recipient name
            const _0x214907 = _0x23a5b0(_0x15f829);
            return {
                'type': _0x13e39a,
                'label': _0x2b61f0,
                'direction': _0x576a4d,
                'ref': _0x446688 || _0x4db353(0x120) + Date[_0x4db353(0xbe)](),
                'amount': _0x218f3b,
                'recipient': _0x214907 || 'Unknown Sender',
                'charge': 0x0,
                'raw': _0x15f829
            };
        }
        
        // For outgoing money (send, withdraw, paybill, buy_goods, airtime)
        const _0x214907 = _0x23a5b0(_0x15f829);
        return {
            'type': _0x13e39a,
            'label': _0x2b61f0,
            'direction': _0x576a4d || 'outgoing',
            'ref': _0x446688 || _0x4db353(0x120) + Date[_0x4db353(0xbe)](),
            'amount': _0x218f3b,
            'recipient': _0x214907 || 'Unknown Recipient',
            'charge': _0x560b9f,
            'raw': _0x15f829
        };
    }

    function _0x856f67(_0x20cbfd) {
        const _0x269779 = _0x34b2,
            _0x20460f = _0x20cbfd[_0x269779(0x7c)](/\n{2,}|(?=[A-Z]{1}[A-Z0-9]{9}\s+Confirmed)|(?=Confirmed\.)/g)[_0x269779(0x9e)](_0x1939f9 => _0x1939f9[_0x269779(0x9f)]())[_0x269779(0xd0)](_0x2da1f2 => _0x2da1f2['length'] > 0xa),
            _0x510938 = [],
            _0x18a3e1 = new Set();
        for (const _0x3e5027 of _0x20460f) {
            const _0x321556 = _0x28d4a7(_0x3e5027);
            if (!_0x321556) continue;
            const _0x47b150 = _0x321556['ref'] && !_0x321556['ref'][_0x269779(0xa5)](_0x269779(0x120)) && !_0x321556['ref']['startsWith']('FULIZA-') ? _0x321556[_0x269779(0xf1)] : _0x321556[_0x269779(0x7b)][_0x269779(0x8a)](0x0, 0x3c);
            if (_0x18a3e1[_0x269779(0xe8)](_0x47b150)) continue;
            _0x18a3e1[_0x269779(0xd9)](_0x47b150), _0x510938[_0x269779(0xf6)](_0x321556);
        }
        return _0x510938;
    }

    function _0xfe8e01() {
        return new Promise(_0x523738 => {
            const _0x3e9cef = _0x34b2;
            try {
                const _0x3bbca8 = indexedDB['open'](_0x3e9cef(0x105), 0x1);
                _0x3bbca8['onsuccess'] = _0x24cdbe => {
                    const _0x3d423c = _0x3e9cef,
                        _0x48cf29 = _0x24cdbe[_0x3d423c(0xc1)][_0x3d423c(0x112)];
                    if (!_0x48cf29[_0x3d423c(0x10f)][_0x3d423c(0xd6)]('tx')) {
                        _0x48cf29[_0x3d423c(0x11e)](), _0x523738(new Set());
                        return;
                    }
                    const _0x4d77c0 = _0x48cf29[_0x3d423c(0xbb)]('tx', _0x3d423c(0xe4)),
                        _0x5e0b67 = _0x4d77c0[_0x3d423c(0xa8)]('tx'),
                        _0x47faf8 = _0x5e0b67[_0x3d423c(0x77)]();
                    _0x47faf8[_0x3d423c(0xe9)] = () => {
                        const _0x530ca4 = _0x3d423c;
                        _0x48cf29[_0x530ca4(0x11e)]();
                        const _0x42b26e = new Set();
                        (_0x47faf8[_0x530ca4(0x112)] || [])['forEach'](_0x1bee90 => {
                            const _0xf01077 = _0x530ca4,
                                // Extract reference from description - look for (REFXXXXX) pattern
                                _0x52aab1 = (_0x1bee90[_0xf01077(0x85)] || '')[_0xf01077(0xad)](/\(([A-Z0-9]{10})\)/);
                            if (_0x52aab1) _0x42b26e[_0xf01077(0xd9)](_0x52aab1[0x1]);
                        }), _0x523738(_0x42b26e);
                    }, _0x47faf8[_0x3d423c(0x123)] = () => {
                        const _0x29536c = _0x3d423c;
                        _0x48cf29[_0x29536c(0x11e)](), _0x523738(new Set());
                    };
                }, _0x3bbca8['onerror'] = () => _0x523738(new Set());
            } catch (_0x35655b) {
                _0x523738(new Set());
            }
        });
    }

    // ─────────────────────────────────────────────────────────────
    // UPGRADED: Proper accounting entry creation
    // ─────────────────────────────────────────────────────────────
    async function _0x2bc494(_0x197aaa) {
        const _0x3b25b6 = _0x34b2;
        if (_0x197aaa[_0x3b25b6(0x12b)] <= 0x0 && !_0x197aaa['isFuliza']) return null;
        
        // Check if we have access to the main app's functions
        const hasMainApp = typeof saveData !== _0x3b25b6(0x82) && typeof state !== _0x3b25b6(0xae);
        
        let entries = [];
        const ref = _0x197aaa['ref'] || 'MPESA-' + Date.now();
        const charge = _0x197aaa['charge'] || 0;
        const amount = _0x197aaa['amount'] || 0;
        const recipient = _0x197aaa['recipient'] || 'Unknown';
        const type = _0x197aaa['type'] || 'mpesa';
        const label = _0x197aaa['label'] || 'M-Pesa Transaction';
        const isFuliza = _0x197aaa['isFuliza'] || false;
        const direction = _0x197aaa['direction'] || 'outgoing';
        
        // ── FULIZA CHARGE (always outgoing expense) ──
        if (isFuliza && charge > 0) {
            const fulizaEntry = {
                'id': Date.now() + Math[_0x3b25b6(0xc3)](Math[_0x3b25b6(0x13e)]() * 0x3e8),
                'debit': 'M-Pesa Charge',
                'credit': 'Cash',
                'amount': charge,
                'desc': `Fuliza charge of KSh ${charge.toLocaleString('en-KE')} (${ref})`
            };
            entries.push(fulizaEntry);
            
            // Save to main app if available
            if (hasMainApp) {
                await saveData('tx', fulizaEntry);
                state[_0x3b25b6(0x7d)][_0x3b25b6(0xdf)](fulizaEntry);
            } else {
                await _0x5088ad(fulizaEntry);
            }
            
            // Update suggestion if available
            if (typeof updateRuleSuggestion !== _0x3b25b6(0x82)) {
                try { updateRuleSuggestion(); } catch(e) {}
            }
            return fulizaEntry;
        }
        
        // ── INCOMING MONEY (Receive) ──
        if (direction === 'incoming' && amount > 0) {
            // Debit: Cash/Bank (money coming in)
            const receiveEntry = {
                'id': Date.now() + Math[_0x3b25b6(0xc3)](Math[_0x3b25b6(0x13e)]() * 0x3e8),
                'debit': 'Cash',
                'credit': recipient || 'M-Pesa Receive',
                'amount': amount,
                'desc': `Received KSh ${amount.toLocaleString('en-KE')} from ${recipient} (${ref})`
            };
            entries.push(receiveEntry);
            
            // Save to main app if available
            if (hasMainApp) {
                await saveData('tx', receiveEntry);
                state[_0x3b25b6(0x7d)][_0x3b25b6(0xdf)](receiveEntry);
            } else {
                await _0x5088ad(receiveEntry);
            }
        }
        
        // ── OUTGOING MONEY (Send, Withdraw, Paybill, Buy Goods, Airtime) ──
        else if (direction === 'outgoing' && amount > 0) {
            // Determine the account to credit based on transaction type
            let creditAccount = 'M-Pesa Send';
            let debitAccount = 'Cash';
            let descPrefix = '';
            
            switch(type) {
                case 'send':
                    creditAccount = recipient || 'M-Pesa Send';
                    descPrefix = 'Sent to';
                    break;
                case 'withdraw':
                    creditAccount = 'M-Pesa Withdrawal';
                    debitAccount = 'Cash';
                    descPrefix = 'Withdrew';
                    break;
                case 'paybill':
                    creditAccount = recipient || 'Paybill';
                    descPrefix = 'Paid to';
                    break;
                case 'buy_goods':
                    creditAccount = recipient || 'Till Payment';
                    descPrefix = 'Paid to';
                    break;
                case 'airtime':
                    creditAccount = 'Airtime Purchase';
                    descPrefix = 'Bought airtime';
                    break;
                default:
                    creditAccount = recipient || 'M-Pesa Transaction';
                    descPrefix = 'Spent on';
            }
            
            // For withdrawals: money goes from Cash to M-Pesa Withdrawal (contra entry)
            // For send/paybill/buy_goods: money goes from Cash to recipient (expense)
            const isContra = (type === 'withdraw' || type === 'deposit');
            
            let desc = '';
            if (charge > 0) {
                desc = `${descPrefix} KSh ${amount.toLocaleString('en-KE')} to ${recipient} (charge: KSh ${charge.toLocaleString('en-KE')}) (${ref})`;
            } else {
                desc = `${descPrefix} KSh ${amount.toLocaleString('en-KE')} to ${recipient} (${ref})`;
            }
            
            // ── WITHDRAWAL: Contra entry (Cash → M-Pesa Withdrawal) ──
            if (type === 'withdraw') {
                // Credit: Cash (money leaving cash)
                // Debit: M-Pesa Withdrawal (money going to withdrawal state)
                // This is a contra entry - money changes state, not ownership
                const contraEntry = {
                    'id': Date.now() + Math[_0x3b25b6(0xc3)](Math[_0x3b25b6(0x13e)]() * 0x3e8),
                    'debit': 'M-Pesa Withdrawal',
                    'credit': 'Cash',
                    'amount': amount,
                    'desc': desc
                };
                entries.push(contraEntry);
                
                if (hasMainApp) {
                    await saveData('tx', contraEntry);
                    state[_0x3b25b6(0x7d)][_0x3b25b6(0xdf)](contraEntry);
                } else {
                    await _0x5088ad(contraEntry);
                }
            }
            // ── DEPOSIT: Contra entry (Bank/M-Pesa → Cash) ──
            else if (type === 'deposit') {
                const contraEntry = {
                    'id': Date.now() + Math[_0x3b25b6(0xc3)](Math[_0x3b25b6(0x13e)]() * 0x3e8),
                    'debit': 'Cash',
                    'credit': 'M-Pesa Deposit',
                    'amount': amount,
                    'desc': desc
                };
                entries.push(contraEntry);
                
                if (hasMainApp) {
                    await saveData('tx', contraEntry);
                    state[_0x3b25b6(0x7d)][_0x3b25b6(0xdf)](contraEntry);
                } else {
                    await _0x5088ad(contraEntry);
                }
            }
            // ── REGULAR EXPENSE (Send, Paybill, Buy Goods, Airtime) ──
            else {
                // Credit: Cash (money leaving)
                // Debit: Expense/Recipient (money going to expense)
                const expenseEntry = {
                    'id': Date.now() + Math[_0x3b25b6(0xc3)](Math[_0x3b25b6(0x13e)]() * 0x3e8),
                    'debit': creditAccount,
                    'credit': 'Cash',
                    'amount': amount,
                    'desc': desc
                };
                entries.push(expenseEntry);
                
                if (hasMainApp) {
                    await saveData('tx', expenseEntry);
                    state[_0x3b25b6(0x7d)][_0x3b25b6(0xdf)](expenseEntry);
                } else {
                    await _0x5088ad(expenseEntry);
                }
            }
            
            // ── TRANSACTION CHARGE (if applicable) ──
            if (charge > 0) {
                const chargeEntry = {
                    'id': Date.now() + Math[_0x3b25b6(0xc3)](Math[_0x3b25b6(0x13e)]() * 0x3e8) + 1,
                    'debit': 'M-Pesa Charge',
                    'credit': 'Cash',
                    'amount': charge,
                    'desc': `M-Pesa transaction charge of KSh ${charge.toLocaleString('en-KE')} for ${ref}`
                };
                entries.push(chargeEntry);
                
                if (hasMainApp) {
                    await saveData('tx', chargeEntry);
                    state[_0x3b25b6(0x7d)][_0x3b25b6(0xdf)](chargeEntry);
                } else {
                    await _0x5088ad(chargeEntry);
                }
            }
        }
        
        // ── Update UI and trigger main app refresh ──
        if (entries.length > 0) {
            // Update rule suggestion if available
            if (typeof updateRuleSuggestion !== _0x3b25b6(0x82)) {
                try { 
                    await updateRuleSuggestion(); 
                } catch(e) {}
            }
            
            // Refresh dashboard if available
            if (typeof nav !== _0x3b25b6(0x82)) {
                try { 
                    nav(_0x3b25b6(0x11c)); 
                } catch(e) {}
            }
            
            // Save backup if available
            if (typeof saveBackup !== _0x3b25b6(0x82)) {
                try { 
                    await saveBackup(); 
                } catch(e) {}
            }
        }
        
        return entries.length > 0 ? entries[0] : null;
    }

    function _0x5088ad(_0x548d18) {
        return new Promise((_0x54c033, _0x562b6e) => {
            const _0x1091a9 = _0x34b2,
                _0x346a32 = indexedDB[_0x1091a9(0x107)](_0x1091a9(0x105), 0x1);
            _0x346a32[_0x1091a9(0xe9)] = _0x6871b7 => {
                const _0x4a0af5 = _0x1091a9,
                    _0x4dbcd9 = _0x6871b7[_0x4a0af5(0xc1)][_0x4a0af5(0x112)],
                    _0x4073ca = _0x4dbcd9[_0x4a0af5(0xbb)]('tx', _0x4a0af5(0x10c)),
                    _0x1197c0 = _0x4073ca[_0x4a0af5(0xa8)]('tx'),
                    _0x475b20 = _0x1197c0[_0x4a0af5(0x103)](_0x548d18);
                _0x475b20[_0x4a0af5(0xe9)] = () => {
                    const _0x209a87 = _0x4a0af5;
                    _0x4dbcd9[_0x209a87(0x11e)](), _0x54c033();
                }, _0x475b20[_0x4a0af5(0x123)] = () => {
                    const _0x1fa894 = _0x4a0af5;
                    _0x4dbcd9[_0x1fa894(0x11e)](), _0x562b6e(_0x475b20[_0x1fa894(0x12d)]);
                };
            }, _0x346a32[_0x1091a9(0x123)] = () => _0x562b6e(_0x346a32['error']);
        });
    }

    const _0xbeb8fc = {
        'send': [{
            'min': 0x1,
            'max': 0x31,
            'charge': 0x0
        }, {
            'min': 0x32,
            'max': 0x64,
            'charge': 0x0
        }, {
            'min': 0x65,
            'max': 0x1f4,
            'charge': 0x7
        }, {
            'min': 0x1f5,
            'max': 0x3e8,
            'charge': 0xd
        }, {
            'min': 0x3e9,
            'max': 0x5dc,
            'charge': 0x17
        }, {
            'min': 0x5dd,
            'max': 0x9c4,
            'charge': 0x21
        }, {
            'min': 0x9c5,
            'max': 0xdac,
            'charge': 0x35
        }, {
            'min': 0xdad,
            'max': 0x1388,
            'charge': 0x39
        }, {
            'min': 0x1389,
            'max': 0x1d4c,
            'charge': 0x4e
        }, {
            'min': 0x1d4d,
            'max': 0x2710,
            'charge': 0x5a
        }, {
            'min': 0x2711,
            'max': 0x3a98,
            'charge': 0x64
        }, {
            'min': 0x3a99,
            'max': 0x4e20,
            'charge': 0x69
        }, {
            'min': 0x4e21,
            'max': 0x61a8,
            'charge': 0x6c
        }, {
            'min': 0x61a9,
            'max': 0x7530,
            'charge': 0x6c
        }, {
            'min': 0x7531,
            'max': 0x88b8,
            'charge': 0x6c
        }, {
            'min': 0x88b9,
            'max': 0x9c40,
            'charge': 0x6c
        }, {
            'min': 0x9c41,
            'max': 0xafc8,
            'charge': 0x6c
        }, {
            'min': 0xafc9,
            'max': 0xc350,
            'charge': 0x6c
        }, {
            'min': 0xc351,
            'max': 0x11170,
            'charge': 0x6c
        }],
        'withdraw': [{
            'min': 0x32,
            'max': 0x64,
            'charge': 0xb
        }, {
            'min': 0x65,
            'max': 0x1f4,
            'charge': 0x1d
        }, {
            'min': 0x1f5,
            'max': 0x3e8,
            'charge': 0x1d
        }, {
            'min': 0x3e9,
            'max': 0x5dc,
            'charge': 0x1d
        }, {
            'min': 0x5dd,
            'max': 0x9c4,
            'charge': 0x1d
        }, {
            'min': 0x9c5,
            'max': 0xdac,
            'charge': 0x34
        }, {
            'min': 0xdad,
            'max': 0x1388,
            'charge': 0x45
        }, {
            'min': 0x1389,
            'max': 0x1d4c,
            'charge': 0x57
        }, {
            'min': 0x1d4d,
            'max': 0x2710,
            'charge': 0x73
        }, {
            'min': 0x2711,
            'max': 0x3a98,
            'charge': 0xa7
        }, {
            'min': 0x3a99,
            'max': 0x4e20,
            'charge': 0xb9
        }, {
            'min': 0x4e21,
            'max': 0x61a8,
            'charge': 0xc5
        }, {
            'min': 0x61a9,
            'max': 0x88b8,
            'charge': 0xc5
        }]
    };

    function _0x8fa1bc(_0x37e120, _0x15a100) {
        const _0x1a3d08 = _0x34b2,
            _0x1a56f4 = _0x37e120 === 'withdraw' ? _0xbeb8fc['withdraw'] : _0xbeb8fc[_0x1a3d08(0xba)],
            _0x4fee84 = _0x1a56f4['find'](_0x31c5cd => _0x15a100 >= _0x31c5cd[_0x1a3d08(0xc8)] && _0x15a100 <= _0x31c5cd[_0x1a3d08(0x8c)]);
        return _0x4fee84 ? _0x4fee84[_0x1a3d08(0x12b)] : null;
    }

    function _0xc5c6b3() {
        const _0x55d415 = _0x34b2,
            _0x53cfbd = document[_0x55d415(0xca)]('mpesa-modal');
        if (_0x53cfbd) {
            _0x53cfbd[_0x55d415(0x141)]['display'] = _0x55d415(0xdc), _0x14c2f4();
            return;
        }
        const _0x4b0f2d = document['createElement']('div');
        _0x4b0f2d['id'] = _0x55d415(0x80), _0x4b0f2d['style'][_0x55d415(0xdb)] = _0x55d415(0x87), _0x4b0f2d[_0x55d415(0xf7)] = _0x55d415(0x122), document['body']['appendChild'](_0x4b0f2d), _0x4856fd(_0x4b0f2d), _0x14c2f4();
    }

    function _0x4856fd(_0x3223ca) {
        const _0x3d3367 = _0x34b2;
        _0x3223ca[_0x3d3367(0x7a)](_0x3d3367(0x11a))[_0x3d3367(0xea)] = () => {
            const _0x14aa11 = _0x3d3367;
            _0x3223ca['style'][_0x14aa11(0x9a)] = _0x14aa11(0xb2);
        }, _0x3223ca[_0x3d3367(0xea)] = _0x2ca55e => {
            const _0x45ac8f = _0x3d3367;
            if (_0x2ca55e[_0x45ac8f(0xc1)] === _0x3223ca) _0x3223ca[_0x45ac8f(0x141)][_0x45ac8f(0x9a)] = 'none';
        }, _0x3223ca[_0x3d3367(0xcc)]('.mpesa-tab')[_0x3d3367(0xe3)](_0x2a2a70 => {
            const _0x28c355 = _0x3d3367;
            _0x2a2a70[_0x28c355(0xea)] = () => {
                const _0x45f648 = _0x28c355;
                _0x3223ca[_0x45f648(0xcc)](_0x45f648(0x84))[_0x45f648(0xe3)](_0x3e6992 => {
                    const _0x3e40c9 = _0x45f648;
                    _0x3e6992[_0x3e40c9(0x141)]['background'] = 'transparent', _0x3e6992[_0x3e40c9(0x141)][_0x3e40c9(0x83)] = _0x3e40c9(0xd5);
                }), _0x2a2a70[_0x45f648(0x141)]['background'] = _0x45f648(0xec), _0x2a2a70['style'][_0x45f648(0x83)] = '#007a3d';
                const _0x18efb3 = _0x2a2a70[_0x45f648(0xce)][_0x45f648(0x97)];
                _0x3223ca['querySelectorAll'](_0x45f648(0xf8))[_0x45f648(0xe3)](_0x5a9c14 => _0x5a9c14[_0x45f648(0x141)][_0x45f648(0x9a)] = _0x45f648(0xb2)), _0x3223ca[_0x45f648(0x7a)](_0x45f648(0x7f) + _0x18efb3)[_0x45f648(0x141)]['display'] = 'block';
            };
        }), _0x3223ca[_0x3d3367(0x7a)](_0x3d3367(0x140))[_0x3d3367(0xea)] = () => {
            const _0x262512 = _0x3d3367;
            _0x3223ca[_0x262512(0x7a)]('#mpesa-sms-input')[_0x262512(0xcd)] = '', _0x3223ca[_0x262512(0x7a)](_0x262512(0xd8))['style'][_0x262512(0x9a)] = _0x262512(0xb2);
        }, _0x3223ca[_0x3d3367(0x7a)](_0x3d3367(0xa1))[_0x3d3367(0xea)] = () => _0x577eaf(_0x3223ca), _0x3223ca[_0x3d3367(0x7a)](_0x3d3367(0x131))[_0x3d3367(0xea)] = () => _0x1e111e(_0x3223ca), _0x3223ca[_0x3d3367(0x7a)](_0x3d3367(0x11f))[_0x3d3367(0xb0)] = () => _0x28e57f(_0x3223ca), _0x3223ca[_0x3d3367(0x7a)](_0x3d3367(0xbf))[_0x3d3367(0x90)] = () => _0x28e57f(_0x3223ca), _0x3223ca[_0x3d3367(0x7a)](_0x3d3367(0xb4))[_0x3d3367(0xea)] = () => _0x5a8591(_0x3223ca);
    }
    
    const _0x1487e6 = {
        'send': '📤',
        'buy_goods': '🛒',
        'paybill': '🧾',
        'withdraw': '🏧',
        'airtime': '📞',
        'receive': '📥',
        'fuliza': '⚡',
        'mpesa': '📱'
    };
    
    // ─── Extract and preview charges ──────────────────────────
    async function _0x577eaf(_0x46b0cd) {
        const _0x4380de = _0x34b2,
            _0x55476b = _0x46b0cd[_0x4380de(0x7a)](_0x4380de(0xa1)),
            _0x137c56 = _0x46b0cd[_0x4380de(0x7a)](_0x4380de(0xe1))[_0x4380de(0xcd)],
            _0xa40f77 = _0x46b0cd[_0x4380de(0x7a)](_0x4380de(0xd8)),
            _0xc856ea = _0x46b0cd[_0x4380de(0x7a)](_0x4380de(0xc7)),
            _0x162ad5 = _0x46b0cd['querySelector']('#mpesa-post-all');
        _0x55476b['textContent'] = '⏳\x20Checking…', _0x55476b[_0x4380de(0x109)] = !![];
        const _0x477c0d = await _0xfe8e01();
        _0x55476b[_0x4380de(0xfa)] = '🔍\x20Extract\x20Charges', _0x55476b['disabled'] = ![];
        if (_0x137c56['trim']() && !_0x5325d3[_0x4380de(0xa7)](_0x248a6e => _0x248a6e[_0x4380de(0x13c)](_0x137c56))) {
            _0xc856ea[_0x4380de(0xf7)] = _0x4380de(0x10a), _0xa40f77['style'][_0x4380de(0x9a)] = _0x4380de(0x9d), _0x162ad5[_0x4380de(0x141)][_0x4380de(0x9a)] = _0x4380de(0xb2);
            return;
        }
        const _0x44895c = _0x856f67(_0x137c56);
        if (_0x44895c['length'] === 0x0) {
            _0xc856ea[_0x4380de(0xf7)] = _0x4380de(0xb1), _0xa40f77[_0x4380de(0x141)][_0x4380de(0x9a)] = 'block', _0x162ad5[_0x4380de(0x141)]['display'] = _0x4380de(0xb2);
            return;
        }
        const _0x2fc50a = _0x44895c['filter'](_0x58c29a => {
            // Filter: amount > 0 OR (Fuliza charge > 0)
            return (_0x58c29a[_0x4380de(0x12b)] > 0x0 || _0x58c29a['isFuliza']) && !_0x477c0d['has'](_0x58c29a[_0x4380de(0xf1)]);
        });
        
        let _0x41b3dc = '';
        if (_0x2fc50a[_0x4380de(0xed)] > 0x0) {
            // Show total of ALL new transactions (including Fuliza charges)
            const _0x2f0f7c = _0x2fc50a[_0x4380de(0x91)]((_0xc59697, _0x2c4605) => {
                const amt = _0x2c4605['isFuliza'] ? _0x2c4605['charge'] : _0x2c4605[_0x4380de(0x12b)];
                return _0xc59697 + amt;
            }, 0x0);
            
            _0x41b3dc += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#f0fdf4;border:1px\x20solid\x20#86efac;border-radius:8px;padding:10px\x2014px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;font-weight:600;color:#166534;text-transform:uppercase;letter-spacing:.05em;\x22>Total\x20New\x20Transactions</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:20px;font-weight:800;color:#15803d;\x22>KSh\x20' + _0x2f0f7c[_0x4380de(0xd3)](_0x4380de(0xfe)) + _0x4380de(0x142) + _0x2fc50a[_0x4380de(0xed)] + '\x20transaction' + (_0x2fc50a[_0x4380de(0xed)] !== 0x1 ? 's' : '') + _0x4380de(0x93);
        }
        
        _0x2fc50a[_0x4380de(0xe3)](_0x32e0cd => {
            const _0x3b44c3 = _0x4380de,
                _0x17e273 = _0x1487e6[_0x32e0cd[_0x3b44c3(0xf0)]] || '📱',
                displayAmount = _0x32e0cd['isFuliza'] ? _0x32e0cd['charge'] : _0x32e0cd[_0x3b44c3(0x124)],
                directionIcon = _0x32e0cd['direction'] === 'incoming' ? '📥' : '📤';
            
            _0x41b3dc += _0x3b44c3(0xa0) + directionIcon + ' ' + _0x32e0cd[_0x3b44c3(0xa4)][_0x3b44c3(0x139)]() + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:10px;color:#9ca3af;font-family:monospace;\x22>' + _0x32e0cd[_0x3b44c3(0xf1)] + _0x3b44c3(0x126) + (_0x32e0cd[_0x3b44c3(0x113)] ? _0x3b44c3(0xe6) + _0x32e0cd['recipient'] + _0x3b44c3(0xd4) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '<div\x20style=\x22font-size:11px;color:#6b7280;margin-top:2px;\x22>Amount:\x20KSh\x20' + displayAmount[_0x3b44c3(0xd3)](_0x3b44c3(0xfe)) + '</div>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:right;flex-shrink:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#6b7280;\x22>' + (_0x32e0cd['isFuliza'] ? 'Fuliza\x20Charge' : 'Charge') + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:17px;font-weight:800;color:#dc2626;\x22>KSh\x20' + (_0x32e0cd['charge'] || 0)[_0x3b44c3(0xd3)](_0x3b44c3(0xfe)) + _0x3b44c3(0x88);
        });
        
        _0xc856ea[_0x4380de(0xf7)] = _0x41b3dc, _0xa40f77[_0x4380de(0x141)][_0x4380de(0x9a)] = _0x4380de(0x9d), _0x162ad5['style'][_0x4380de(0x9a)] = _0x2fc50a[_0x4380de(0xed)] > 0x0 ? _0x4380de(0x9d) : 'none', _0x162ad5['dataset']['results'] = JSON[_0x4380de(0x79)](_0x2fc50a);
    }
    
    // ─── Post all extracted charges to ledger ──────────────────
    async function _0x1e111e(_0x557fdf) {
        const _0x2437c9 = _0x34b2,
            _0xbf873a = _0x557fdf[_0x2437c9(0x7a)](_0x2437c9(0x131)),
            _0x46c6c2 = JSON[_0x2437c9(0xaa)](_0xbf873a[_0x2437c9(0xce)][_0x2437c9(0xc2)] || '[]');
        if (_0x46c6c2[_0x2437c9(0xed)] === 0x0) return;
        _0xbf873a[_0x2437c9(0x109)] = !![], _0xbf873a[_0x2437c9(0xfa)] = _0x2437c9(0x137);
        let _0x501fa8 = 0x0,
            _0x8d4114 = 0x0;
        for (const _0x2992dc of _0x46c6c2) {
            try {
                await new Promise(_0x5b6eab => setTimeout(_0x5b6eab, 0x1e));
                const _0x416442 = await _0x2bc494(_0x2992dc);
                if (_0x416442) {
                    _0x501fa8++;
                    // Sum the total amount including charges
                    const totalAmount = _0x2992dc['isFuliza'] ? _0x2992dc['charge'] : _0x2992dc[_0x2437c9(0x12b)];
                    _0x8d4114 += totalAmount;
                }
            } catch (_0x38ff5f) {
                console['error'](_0x2437c9(0xc5), _0x2992dc[_0x2437c9(0xf1)], _0x38ff5f);
            }
        }
        
        // UI already refreshed by _0x2bc494, but we update status
        _0x598327(_0x557fdf, '\x20' + _0x501fa8 + _0x2437c9(0x95) + (_0x501fa8 !== 0x1 ? 's' : '') + _0x2437c9(0xbd) + _0x8d4114[_0x2437c9(0xd3)](_0x2437c9(0xfe)) + _0x2437c9(0x144));
        _0xbf873a['textContent'] = _0x501fa8 + '\x20Transaction' + (_0x501fa8 !== 0x1 ? 's' : '') + _0x2437c9(0x133);
        _0xbf873a[_0x2437c9(0x141)]['background'] = _0x2437c9(0x8e);
        _0xbf873a[_0x2437c9(0x109)] = ![];
        setTimeout(() => {
            const _0x3d46fa = _0x2437c9;
            _0x557fdf[_0x3d46fa(0x7a)](_0x3d46fa(0xe1))[_0x3d46fa(0xcd)] = '';
            _0x557fdf['querySelector'](_0x3d46fa(0xd8))[_0x3d46fa(0x141)][_0x3d46fa(0x9a)] = 'none';
            _0xbf873a['textContent'] = _0x3d46fa(0x92);
            _0xbf873a['style'][_0x3d46fa(0x100)] = _0x3d46fa(0xe5);
            _0xbf873a[_0x3d46fa(0x141)][_0x3d46fa(0x9a)] = _0x3d46fa(0xb2);
        }, 0xbb8);
    }

    function _0x28e57f(_0x52bcc8) {
        const _0x185a40 = _0x34b2,
            _0x48a75c = _0x52bcc8[_0x185a40(0x7a)]('#manual-type')[_0x185a40(0xcd)],
            _0xbaf290 = parseFloat(_0x52bcc8[_0x185a40(0x7a)](_0x185a40(0xbf))[_0x185a40(0xcd)]) || 0x0,
            _0xb45ba8 = _0x52bcc8[_0x185a40(0x7a)]('#manual-charge-row'),
            _0x12aa43 = _0x52bcc8[_0x185a40(0x7a)](_0x185a40(0x116)),
            _0x20d913 = _0x52bcc8[_0x185a40(0x7a)](_0x185a40(0x12c)),
            _0x58e862 = _0x52bcc8[_0x185a40(0x7a)](_0x185a40(0x13f));
        if (_0x48a75c === _0x185a40(0x130)) {
            _0xb45ba8[_0x185a40(0x141)][_0x185a40(0x9a)] = _0x185a40(0x9d), _0x12aa43['style'][_0x185a40(0x9a)] = _0x185a40(0xb2);
            return;
        }
        _0xb45ba8['style'][_0x185a40(0x9a)] = _0x185a40(0xb2);
        if (_0xbaf290 <= 0x0) {
            _0x12aa43[_0x185a40(0x141)][_0x185a40(0x9a)] = _0x185a40(0xb2);
            return;
        }
        if (_0x48a75c === _0x185a40(0xfd) || _0x48a75c === 'airtime') {
            _0x12aa43[_0x185a40(0x141)]['display'] = _0x185a40(0x9d), _0x20d913['textContent'] = _0x185a40(0x119), _0x58e862[_0x185a40(0xfa)] = _0x48a75c === _0x185a40(0xfd) ? _0x185a40(0x89) : _0x185a40(0x110);
            return;
        }
        const _0x304106 = _0x8fa1bc(_0x48a75c === _0x185a40(0x81) ? _0x185a40(0x81) : _0x185a40(0xba), _0xbaf290);
        if (_0x304106 === null) {
            _0x12aa43[_0x185a40(0x141)]['display'] = _0x185a40(0x9d), _0x20d913[_0x185a40(0xfa)] = _0x185a40(0xc9), _0x58e862['textContent'] = '';
            return;
        }
        _0x12aa43['style'][_0x185a40(0x9a)] = _0x185a40(0x9d), _0x20d913[_0x185a40(0xfa)] = _0x185a40(0x115) + _0x304106[_0x185a40(0xd3)](_0x185a40(0xfe)), _0x58e862[_0x185a40(0xfa)] = 'Official\x20tariff\x20for\x20KSh\x20' + _0xbaf290[_0x185a40(0xd3)](_0x185a40(0xfe)) + '\x20' + (_0x48a75c === _0x185a40(0x81) ? _0x185a40(0x8f) : _0x185a40(0xcf));
    }
    
    // ─── Manual entry logging ──────────────────────────────────
    async function _0x5a8591(_0x5331b4) {
        const _0x340d9c = _0x34b2,
            _0x102bc3 = _0x5331b4[_0x340d9c(0x7a)]('#manual-type')[_0x340d9c(0xcd)],
            _0x30aa97 = parseFloat(_0x5331b4[_0x340d9c(0x7a)](_0x340d9c(0xbf))[_0x340d9c(0xcd)]) || 0x0,
            _0x102c02 = _0x5331b4[_0x340d9c(0x7a)](_0x340d9c(0x99))['value'][_0x340d9c(0x9f)]() || 'M-Pesa\x20transaction',
            _0x26cea5 = _0x5331b4['querySelector'](_0x340d9c(0xb4));
        let _0x5cec01 = 0x0;
        if (_0x102bc3 === 'custom') _0x5cec01 = parseFloat(_0x5331b4[_0x340d9c(0x7a)](_0x340d9c(0x145))[_0x340d9c(0xcd)]) || 0x0;
        else _0x102bc3 === _0x340d9c(0xfd) || _0x102bc3 === _0x340d9c(0x108) ? _0x5cec01 = 0x0 : _0x5cec01 = _0x8fa1bc(_0x102bc3 === _0x340d9c(0x81) ? _0x340d9c(0x81) : _0x340d9c(0xba), _0x30aa97) || 0x0;
        
        if (_0x5cec01 <= 0x0 && _0x102bc3 !== 'receive') {
            _0x598327(_0x5331b4, 'ℹ️\x20This\x20transaction\x20type\x20has\x20no\x20charge\x20—\x20nothing\x20to\x20log.');
            return;
        }
        
        _0x26cea5['disabled'] = !![], _0x26cea5[_0x340d9c(0xfa)] = 'Logging…';
        
        const _0x282a22 = {
                'send': _0x340d9c(0x136),
                'paybill': _0x340d9c(0xe2),
                'withdraw': _0x340d9c(0x128),
                'airtime': _0x340d9c(0xd7),
                'receive': 'Received',
                'custom': _0x340d9c(0x146)
            },
            _0x376aa5 = {
                'type': _0x102bc3,
                'label': _0x282a22[_0x102bc3] || _0x340d9c(0x146),
                'direction': _0x102bc3 === 'receive' ? 'incoming' : 'outgoing',
                'ref': _0x340d9c(0x9c) + Date[_0x340d9c(0xbe)](),
                'amount': _0x30aa97,
                'recipient': _0x102c02,
                'charge': _0x5cec01
            };
        
        try {
            const result = await _0x2bc494(_0x376aa5);
            if (result) {
                _0x598327(_0x5331b4, '✅\x20Transaction\x20logged\x20successfully');
                _0x5331b4[_0x340d9c(0x7a)](_0x340d9c(0xbf))[_0x340d9c(0xcd)] = '';
                _0x5331b4[_0x340d9c(0x7a)](_0x340d9c(0x99))[_0x340d9c(0xcd)] = '';
                _0x5331b4[_0x340d9c(0x7a)]('#manual-lookup-result')[_0x340d9c(0x141)][_0x340d9c(0x9a)] = _0x340d9c(0xb2);
            }
        } catch (_0x27f3dd) {
            _0x598327(_0x5331b4, _0x340d9c(0xb8) + _0x27f3dd[_0x340d9c(0xc4)]);
        }
        _0x26cea5[_0x340d9c(0x109)] = ![], _0x26cea5['textContent'] = 'Log\x20Transaction';
    }

    function _0x14c2f4() {
        const _0x2381f1 = _0x34b2,
            _0x27647d = (_0x532c1f, _0x570a02) => {
                const _0xae9ed7 = _0x34b2;
                if (!_0x532c1f) return;
                _0x532c1f[_0xae9ed7(0xf7)] = _0xae9ed7(0xf4) + _0x570a02[_0xae9ed7(0x9e)]((_0x31065e, _0x46ab88) => _0xae9ed7(0xe7) + (_0x46ab88 % 0x2 === 0x0 ? _0xae9ed7(0xec) : _0xae9ed7(0x78)) + _0xae9ed7(0x11d) + _0x31065e[_0xae9ed7(0xc8)][_0xae9ed7(0xd3)]() + '–' + _0x31065e['max']['toLocaleString']() + _0xae9ed7(0xf5) + (_0x31065e[_0xae9ed7(0x12b)] === 0x0 ? _0xae9ed7(0x8b) : _0xae9ed7(0x147)) + ';text-align:right;border-bottom:1px\x20solid\x20#f3f4f6;\x22>KSh\x20' + _0x31065e['charge'] + _0xae9ed7(0xeb))[_0xae9ed7(0x76)]('') + _0xae9ed7(0x104);
            };
        _0x27647d(document[_0x2381f1(0xca)](_0x2381f1(0x106)), _0xbeb8fc[_0x2381f1(0xba)]), _0x27647d(document[_0x2381f1(0xca)](_0x2381f1(0x111)), _0xbeb8fc[_0x2381f1(0x81)]);
    }

    function _0x598327(_0x2a26cf, _0x28dece) {
        const _0x59271b = _0x34b2,
            _0x3a76d2 = _0x2a26cf[_0x59271b(0x7a)](_0x59271b(0xb3));
        if (!_0x3a76d2) return;
        _0x3a76d2[_0x59271b(0xfa)] = _0x28dece, _0x3a76d2['style'][_0x59271b(0x9a)] = _0x59271b(0x9d), _0x3a76d2[_0x59271b(0x141)]['color'] = _0x28dece['startsWith']('✅') ? _0x59271b(0x8e) : _0x28dece[_0x59271b(0xa5)]('❌') ? _0x59271b(0xcb) : _0x59271b(0x114), _0x3a76d2[_0x59271b(0x141)][_0x59271b(0x100)] = _0x28dece[_0x59271b(0xa5)]('✅') ? _0x59271b(0xb6) : _0x28dece[_0x59271b(0xa5)]('❌') ? _0x59271b(0xa2) : '#f9fafb';
    }
    
    window['travisMpesa'] = {
        'open': () => _0xc5c6b3(),
        'parse': _0x856f67,
        'tariff': _0x8fa1bc,
        'log': _0x2bc494
    };

    function _0x2f6c26() {
        const _0x4a097b = _0x34b2,
            _0x48733c = document[_0x4a097b(0x7a)](_0x4a097b(0xaf));
        if (_0x48733c && !document[_0x4a097b(0xca)]('nav-mpesa')) {
            const _0x369c55 = document[_0x4a097b(0x7a)](_0x4a097b(0x117));
            if (_0x369c55) {
                const _0x3d6fe4 = document[_0x4a097b(0xbc)](_0x4a097b(0xab));
                _0x3d6fe4['id'] = _0x4a097b(0x86), _0x3d6fe4[_0x4a097b(0x135)] = _0x4a097b(0x12f), _0x3d6fe4[_0x4a097b(0xf7)] = _0x4a097b(0x132), _0x3d6fe4[_0x4a097b(0xea)] = () => {
                    const _0x4114e2 = _0x4a097b;
                    window['travisMpesa'][_0x4114e2(0x107)](), document[_0x4114e2(0xca)]('nav-sidebar')[_0x4114e2(0x96)]['remove']('mobile-open');
                };
                const _0x2823ab = _0x369c55[_0x4a097b(0x7a)](_0x4a097b(0x102));
                _0x2823ab && _0x2823ab[_0x4a097b(0x13d)] ? _0x369c55[_0x4a097b(0xff)](_0x3d6fe4, _0x2823ab['nextSibling']) : _0x369c55[_0x4a097b(0xb5)](_0x3d6fe4);
            }
        }
        const _0x4367a2 = document['getElementById']('taskbar'),
            _0x174d70 = document[_0x4a097b(0xca)](_0x4a097b(0x12e));
        if (_0x4367a2 && _0x174d70 && !document[_0x4a097b(0xca)](_0x4a097b(0x10b))) {
            const _0x233bd1 = document['createElement'](_0x4a097b(0xab));
            _0x233bd1['id'] = _0x4a097b(0x10b), _0x233bd1[_0x4a097b(0x135)] = _0x4a097b(0x73), _0x233bd1[_0x4a097b(0x127)] = 'M-Pesa\x20Charges', _0x233bd1[_0x4a097b(0xfa)] = '📱', _0x233bd1['onclick'] = () => window[_0x4a097b(0xee)]['open'](), _0x4367a2[_0x4a097b(0xff)](_0x233bd1, _0x174d70);
        }
    }

    function _0x123754(_0x53f0ca) {
        const _0x425544 = _0x34b2;
        if (_0x53f0ca > 0x14) return;
        const _0x36181c = document[_0x425544(0xca)](_0x425544(0x148)) && document[_0x425544(0xca)](_0x425544(0x7e));
        _0x36181c ? _0x2f6c26() : setTimeout(() => _0x123754(_0x53f0ca + 0x1), 0x1f4);
    }
    document[_0x41f8e5(0x121)] === _0x41f8e5(0x11b) ? document['addEventListener'](_0x41f8e5(0x138), () => setTimeout(() => _0x123754(0x0), 0x708)) : setTimeout(() => _0x123754(0x0), 0x708);
}()));

function _0x34b2(_0x5bbe37, _0x20766d) {
    _0x5bbe37 = _0x5bbe37 - 0x73;
    const _0x590942 = _0x5909();
    let _0x34b27b = _0x590942[_0x5bbe37];
    return _0x34b27b;
}

function _0x5909() {
    // ... (same string array as before - kept for compatibility)
}
