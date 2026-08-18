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

    // ─── DIRECTION DETECTION ──────────────────────────────────────────────
    function detectMoneyDirection(_0x1022c8) {
        const lower = _0x1022c8.toLowerCase();

        // CONTRA: Money stays in ecosystem (deposits, withdrawals)
        const contraKeywords = [
            /deposit/i, /deposited/i, /cash deposit/i, /bank deposit/i,
            /agent deposit/i, /withdraw to cash/i, /withdrew to cash/i,
            /cash withdrawal/i, /deposit to bank/i, /mpesa to bank/i,
            /bank to mpesa/i, /internal transfer/i, /self transfer/i
        ];
        for (const pattern of contraKeywords) {
            if (pattern.test(lower)) return 'contra';
        }

        // OUTGOING: Money leaves the user
        const outgoingKeywords = [
            /sent to/i, /paid to/i, /paid/i, /bought/i, /purchase/i,
            /purchased/i, /buy/i, /withdraw/i, /withdrew/i, /withdrawn/i,
            /transferred to/i, /transfer to/i, /gave to/i, /give to/i,
            /used to pay/i, /used to purchase/i, /used for/i, /spent on/i,
            /spent/i, /paying/i, /payment to/i, /payment for/i, /mpesa sent/i,
            /sent money to/i, /cash sent/i, /has been used/i, /fully paid/i,
            /partially paid/i, /paid using/i, /settled via/i, /airtime purchase/i,
            /airtime bought/i, /bought airtime/i, /paybill/i, /till number/i,
            /buy goods/i, /withdrawal/i
        ];
        for (const pattern of outgoingKeywords) {
            if (pattern.test(lower)) return 'outgoing';
        }

        // INCOMING: Money arrives to user
        const incomingKeywords = [
            /received from/i, /received/i, /credited/i, /credit/i,
            /money received/i, /payment received/i, /cash received/i,
            /you have received/i, /you received/i, /incoming/i,
            /credited to you/i, /sent to you/i, /transfer from/i,
            /transferred from/i, /got from/i, /got/i
        ];
        for (const pattern of incomingKeywords) {
            if (pattern.test(lower)) return 'incoming';
        }

        return 'unknown';
    }

    function _0xa65199(_0x1022c8) {
        const _0x38da16 = _0x34b2,
            _0x9c3e4c = _0x1022c8[_0x38da16(0xa9)]();
        if (/fuliza/i ['test'](_0x1022c8)) return {
            'type': _0x38da16(0x125),
            'label': _0x38da16(0x8d)
        };
        if (/you have received/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': _0x38da16(0xf3),
            'label': _0x38da16(0xb7)
        };
        if (/you have bought.*airtime|airtime.*you have bought/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': 'airtime',
            'label': _0x38da16(0xd7)
        };
        if (/paid\s+(?:Ksh|KES)[\d,\.]+ to\s+\d+/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': _0x38da16(0xfd),
            'label': _0x38da16(0xe2)
        };
        if (/paid to.+till no/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': 'buy_goods',
            'label': _0x38da16(0x13a)
        };
        if (/paid to/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': _0x38da16(0x13b),
            'label': 'Buy\x20Goods'
        };
        if (/withdraw/i ['test'](_0x1022c8)) return {
            'type': _0x38da16(0x81),
            'label': _0x38da16(0x128)
        };
        if (/sent to/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': _0x38da16(0xba),
            'label': _0x38da16(0x136)
        };
        if (/give.*to|give/i [_0x38da16(0x13c)](_0x1022c8)) return {
            'type': 'send',
            'label': _0x38da16(0x136)
        };
        return {
            'type': _0x38da16(0x10e),
            'label': _0x38da16(0xe0)
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

    // ─── MAIN PARSER - Fixed to ignore balance ──────────────────────────
    function _0x28d4a7(_0x3e0ebd) {
        const _0x4db353 = _0x34b2,
            _0x15f829 = _0x3e0ebd[_0x4db353(0x9f)]();
        if (!_0x15f829) return null;

        const _0x52e783 = _0x5325d3[_0x4db353(0xa7)](_0x53c7b9 => _0x53c7b9[_0x4db353(0x13c)](_0x15f829));
        if (!_0x52e783) return null;

        const direction = detectMoneyDirection(_0x15f829);

        // Check for Fuliza charge
        const _0x1e50bf = _0x15f829[_0x4db353(0xad)](_0x15d1a4);
        if (_0x1e50bf) {
            const _0x23ac4d = parseFloat(_0x1e50bf[0x1][_0x4db353(0x94)](/,/g, ''));
            if (_0x23ac4d > 0x0) return {
                'type': _0x4db353(0x125),
                'label': _0x4db353(0x8d),
                'ref': _0x4db353(0xdd) + Date[_0x4db353(0xbe)](),
                'amount': 0x0,
                'recipient': _0x4db353(0x149),
                'charge': _0x23ac4d,
                'direction': direction,
                'raw': _0x15f829
            };
        }

        // Extract reference
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

        // ─── EXTRACT CHARGE (Transaction Cost) ─────────────────────────────
        const chargeMatch = _0x15f829['match'](_0x296380);
        let charge = chargeMatch ? parseFloat(chargeMatch[0x1][_0x4db353(0x94)](/,/g, '')) : 0;

        // ─── EXTRACT ALL AMOUNTS ────────────────────────────────────────────
        const allAmounts = [];
        let match;
        const amountRegex = /(?:Ksh|KES)\s*([\d,]+\.?\d*)/gi;
        while ((match = amountRegex.exec(_0x15f829)) !== null) {
            allAmounts.push(parseFloat(match[1].replace(/,/g, '')));
        }

        // ─── FIND THE BALANCE (should be ignored) ──────────────────────────
        // Pattern: "New M-PESA balance is Ksh X" or "New M-PESA balance is KshX"
        const balanceMatch = _0x15f829.match(/New\s+M-?PESA\s+balance\s+is\s+(?:Ksh|KES)\s*([\d,]+\.?\d*)/i);
        let balance = balanceMatch ? parseFloat(balanceMatch[1].replace(/,/g, '')) : 0;

        // ─── DETERMINE MAIN AMOUNT ──────────────────────────────────────────
        // Main amount is the amount that is NOT the balance and NOT the charge
        let mainAmount = 0;
        for (const amt of allAmounts) {
            // Skip if this is the balance
            if (balance > 0 && Math.abs(amt - balance) < 0.01) continue;
            // Skip if this is the charge (already captured separately)
            if (charge > 0 && Math.abs(amt - charge) < 0.01) continue;
            // First non-balance, non-charge amount is the main amount
            if (mainAmount === 0) {
                mainAmount = amt;
            }
        }

        // If we still don't have a main amount, use the first amount that's not the charge
        if (mainAmount === 0 && allAmounts.length > 0) {
            for (const amt of allAmounts) {
                if (charge === 0 || Math.abs(amt - charge) >= 0.01) {
                    mainAmount = amt;
                    break;
                }
            }
        }

        const { type, label } = _0xa65199(_0x15f829);
        const recipient = _0x23a5b0(_0x15f829);

        // Determine debit/credit based on direction
        let debitAccount, creditAccount;

        if (direction === 'incoming') {
            debitAccount = recipient || 'M-Pesa';
            creditAccount = 'Cash';
        } else if (direction === 'contra') {
            if (/deposit|deposited|bank deposit|cash deposit|agent deposit/i.test(_0x15f829)) {
                debitAccount = 'Cash';
                creditAccount = 'Bank / M-Pesa';
            } else {
                debitAccount = 'Bank / M-Pesa';
                creditAccount = 'Cash';
            }
        } else {
            debitAccount = 'Cash';
            creditAccount = recipient || 'M-Pesa';
        }

        return {
            'type': type,
            'label': label,
            'ref': _0x446688 || 'MPESA-' + Date.now().toString(36).toUpperCase(),
            'amount': mainAmount,
            'recipient': recipient,
            'charge': charge,
            'direction': direction,
            'debit': debitAccount,
            'credit': creditAccount,
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

    // ─── TRANSACTION LOGGER ──────────────────────────────────────────────
    async function _0x2bc494(_0x197aaa) {
        try {
            const _0x1a2b3c = _0x197aaa['type'];
            const _0x2b3c4d = _0x197aaa['ref'];
            const _0x3c4d5e = Number(_0x197aaa['amount']) || 0;
            const _0x4d5e6f = _0x197aaa['recipient'] || '';
            const _0x5e6f70 = Number(_0x197aaa['charge']) || 0;
            const _0x6f7081 = !!_0x197aaa['isFuliza'] || _0x1a2b3c === 'fuliza';

            const debit = _0x197aaa['debit'] || 'Cash';
            const credit = _0x197aaa['credit'] || 'M-Pesa';
            const direction = _0x197aaa['direction'] || (_0x1a2b3c === 'receive' ? 'incoming' : 'outgoing');

            if (_0x3c4d5e <= 0 && _0x5e6f70 <= 0 && !_0x6f7081) return null;

            const _0x7081a2 = (n) => Number(n).toLocaleString('en-KE');
            const _0x81a2b3 = Date.now() + Math.floor(Math.random() * 1000);
            const transactions = [];

            // ─── Main transaction ───────────────────────────────────────────
            if (_0x3c4d5e > 0) {
                let desc = '';
                if (_0x1a2b3c === 'receive' || direction === 'incoming') {
                    desc = `Received KSh ${_0x7081a2(_0x3c4d5e)} from ${_0x4d5e6f || 'M-Pesa'} (REF: ${_0x2b3c4d})`;
                } else if (direction === 'contra') {
                    desc = `TRANSFER KSh ${_0x7081a2(_0x3c4d5e)}: ${debit} → ${credit} (REF: ${_0x2b3c4d})`;
                } else if (_0x1a2b3c === 'airtime') {
                    desc = `AIRTIME KSh ${_0x7081a2(_0x3c4d5e)} for ${_0x4d5e6f || 'phone'} (REF: ${_0x2b3c4d})`;
                } else if (_0x1a2b3c === 'send') {
                    desc = `SEND KSh ${_0x7081a2(_0x3c4d5e)} to ${_0x4d5e6f} (REF: ${_0x2b3c4d})`;
                } else if (_0x1a2b3c === 'paybill' || _0x1a2b3c === 'buy_goods') {
                    desc = `PAYBILL KSh ${_0x7081a2(_0x3c4d5e)} to ${_0x4d5e6f || 'Paybill'} (REF: ${_0x2b3c4d})`;
                } else if (_0x1a2b3c === 'withdraw') {
                    desc = `WITHDRAW KSh ${_0x7081a2(_0x3c4d5e)} from ${_0x4d5e6f || 'M-Pesa'} (REF: ${_0x2b3c4d})`;
                } else {
                    desc = `${_0x1a2b3c.toUpperCase()} KSh ${_0x7081a2(_0x3c4d5e)} (REF: ${_0x2b3c4d})`;
                }

                transactions.push({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': desc
                });
            }

            // ─── Charge transaction ─────────────────────────────────────────
            if (_0x5e6f70 > 0) {
                transactions.push({
                    'id': _0x81a2b3 + transactions.length,
                    'debit': 'M-Pesa Charge',
                    'credit': 'Cash',
                    'amount': _0x5e6f70,
                    'desc': `M-Pesa charge KSh ${_0x7081a2(_0x5e6f70)} (REF: ${_0x2b3c4d})`
                });
            }

            if (transactions.length === 0) return null;

            const useMainFile = typeof saveData !== 'undefined' && typeof state !== 'undefined';

            for (const tx of transactions) {
                if (useMainFile) {
                    await saveData('tx', tx);
                    state.transactions.push(tx);
                } else {
                    await _0x5088ad(tx);
                }
            }

            if (useMainFile) {
                if (typeof updateRuleSuggestion === 'function') updateRuleSuggestion();
                if (typeof nav === 'function') nav('dash');
                if (typeof saveBackup === 'function') await saveBackup();
                if (typeof updateLiveHud === 'function') updateLiveHud();
            }

            return transactions[0];
        } catch (_0xc5d6e7) {
            console['error']('[MpesaTracker] Log error:', _0xc5d6e7);
            return null;
        }
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

    // [The rest of the UI functions remain exactly the same as your original file]
    // ... (all the way to the end)

    window['travisMpesa'] = {
        'open': () => _0xc5c6b3(),
        'parse': _0x856f67,
        'tariff': _0x8fa1bc,
        'detectDirection': detectMoneyDirection
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
    const _0x349956 = ['MPESA-', 'readyState', '\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#ffffff;border-radius:16px;width:100%;max-width:560px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0\x2024px\x2080px\x20rgba(0,0,0,0.25);border:1px\x20solid\x20rgba(0,0,0,0.08);\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Header\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:linear-gradient(135deg,#00a651,#007a3d);padding:20px\x2022px\x2016px;flex-shrink:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;justify-content:space-between;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:40px;height:40px;background:rgba(255,255,255,0.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;\x22>📱</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22color:white;font-size:15px;font-weight:700;letter-spacing:-.01em;\x22>Online\x20Charge\x20Tracker</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22color:rgba(255,255,255,0.75);font-size:11px;margin-top:1px;\x22>Paste\x20SMS\x20·\x20Extract\x20charges\x20·\x20Auto-log\x20to\x20ledger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22mpesa-close\x22\x20style=\x22background:rgba(255,255,255,0.15);border:none;color:white;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;\x22>×</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Tab\x20bar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;gap:4px;margin-top:14px;background:rgba(0,0,0,0.15);border-radius:8px;padding:3px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22mpesa-tab\x20active\x22\x20data-tab=\x22paste\x22\x20style=\x22flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:white;color:#007a3d;transition:all\x20.15s;\x22>📋\x20Paste\x20SMS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22mpesa-tab\x22\x20data-tab=\x22manual\x22\x20style=\x22flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:rgba(255,255,255,0.8);transition:all\x20.15s;\x22>✏️\x20Manual\x20Entry</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22mpesa-tab\x22\x20data-tab=\x22tariff\x22\x20style=\x22flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:rgba(255,255,255,0.8);transition:all\x20.15s;\x22>📊\x20Tariff\x20Table</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Body\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:1;overflow-y:auto;padding:0;\x22\x20id=\x22mpesa-body\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TAB:\x20Paste\x20SMS\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22tab-paste\x22\x20class=\x22mpesa-tab-content\x22\x20style=\x22padding:18px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#f0fdf4;border:1.5px\x20dashed\x20#86efac;border-radius:10px;padding:14px;margin-bottom:14px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:0\x200\x208px;font-size:12px;font-weight:600;color:#166534;\x22>How\x20to\x20use:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ol\x20style=\x22margin:0;padding-left:18px;font-size:12px;color:#15803d;line-height:1.7;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Open\x20your\x20SMS\x20app\x20→\x20find\x20M-Pesa\x20&\x20Bank\x20messages</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Long-press\x20→\x20Copy\x20the\x20full\x20message\x20text</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Paste\x20one\x20or\x20multiple\x20messages\x20below</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Travis\x20extracts\x20<strong>all</strong>\x20charges\x20(Send,\x20Withdraw,\x20Buy\x20Goods,\x20Paybill,\x20Airtime,\x20Fuliza…)</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ol>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em;\x22>Paste\x20M-Pesa\x20SMS\x20Message(s)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22mpesa-sms-input\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20placeholder=\x22Paste\x20your\x20M-Pesa\x20SMS\x20here…&#10;&#10;Works\x20with\x20ALL\x20message\x20types:&#10;•\x20Send\x20Money\x20\x20•\x20Withdraw\x20\x20•\x20Buy\x20Goods\x20\x20•\x20Paybill\x20\x20•\x20Airtime\x20\x20•\x20Fuliza&#10;&#10;Example:&#10;QAB3X12345\x20Confirmed.\x20Ksh1,500.00\x20sent\x20to\x20JOHN\x20DOE\x20on\x201/6/25\x20at\x203:45\x20PM.\x20New\x20M-PESA\x20balance\x20is\x20Ksh3,200.00.\x20Transaction\x20cost,\x20Ksh27.00.\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:100%;height:140px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;padding:12px;font-size:12.5px;font-family:inherit;resize:vertical;outline:none;background:#fafafa;line-height:1.6;box-sizing:border-box;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;gap:8px;margin-top:10px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22mpesa-parse-btn\x22\x20style=\x22flex:1;background:#00a651;color:white;border:none;padding:12px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Extract\x20Charges\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22mpesa-clear-btn\x22\x20style=\x22background:#f3f4f6;color:#6b7280;border:none;padding:12px\x2014px;border-radius:8px;font-size:13px;cursor:pointer;font-family:inherit;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Clear\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Results\x20area\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22mpesa-results\x22\x20style=\x22margin-top:14px;display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22mpesa-results-inner\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22mpesa-post-all\x22\x20style=\x22width:100%;background:linear-gradient(135deg,#00a651,#007a3d);color:white;border:none;padding:13px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;margin-top:10px;font-family:inherit;display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Log\x20All\x20Charges\x20to\x20Ledger\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TAB:\x20Manual\x20Entry\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22tab-manual\x22\x20class=\x22mpesa-tab-content\x22\x20style=\x22padding:18px;display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fffbeb;border:1px\x20solid\x20#fde68a;border-radius:8px;padding:12px;margin-bottom:16px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:0;font-size:12px;color:#92400e;line-height:1.6;\x22>Use\x20this\x20when\x20you\x20know\x20the\x20transaction\x20amount\x20but\x20don\x27t\x20have\x20the\x20SMS.\x20Travis\x20will\x20calculate\x20the\x20Safaricom\x20charge\x20from\x20the\x20official\x20tariff.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:grid;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;\x22>Transaction\x20Type</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22manual-type\x22\x20style=\x22width:100%;padding:9px\x2012px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;background:white;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22send\x22>Send\x20Money\x20(to\x20M-Pesa\x20number)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22paybill\x22>Paybill\x20/\x20Till\x20Number</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22withdraw\x22>Agent\x20Withdrawal</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22airtime\x22>Airtime\x20Purchase</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22custom\x22>Custom\x20Charge\x20Amount</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;\x22>Amount\x20Transacted\x20(KSh)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22manual-amount\x22\x20type=\x22number\x22\x20placeholder=\x22e.g.\x202500\x22\x20style=\x22width:100%;padding:9px\x2012px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22manual-charge-row\x22\x20style=\x22display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;\x22>Charge\x20Amount\x20(KSh)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22manual-charge\x22\x20type=\x22number\x22\x20placeholder=\x22e.g.\x2033\x22\x20style=\x22width:100%;padding:9px\x2012px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22manual-lookup-result\x22\x20style=\x22display:none;background:#f0fdf4;border:1px\x20solid\x20#86efac;border-radius:8px;padding:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#166534;font-weight:600;text-transform:uppercase;letter-spacing:.05em;\x22>Safaricom\x20Charge</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22manual-lookup-val\x22\x20style=\x22font-size:22px;font-weight:800;color:#15803d;margin-top:2px;\x22>KSh\x200</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22manual-lookup-note\x22\x20style=\x22font-size:11px;color:#4ade80;margin-top:2px;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;\x22>Description\x20(optional)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22manual-desc\x22\x20type=\x22text\x22\x20placeholder=\x22e.g.\x20Sent\x20rent\x20to\x20landlord\x22\x20style=\x22width:100%;padding:9px\x2012px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22manual-log-btn\x22\x20style=\x22background:#00a651;color:white;border:none;padding:13px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Log\x20This\x20Charge\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TAB:\x20Tariff\x20Table\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22tab-tariff\x22\x20class=\x22mpesa-tab-content\x22\x20style=\x22padding:18px;display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:grid;grid-template-columns:1fr\x201fr;gap:10px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:12px;font-weight:700;color:#166534;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;\x22>📤\x20Send\x20Money</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20style=\x22width:100%;border-collapse:collapse;font-size:11.5px;\x22\x20id=\x22tariff-send\x22></table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:12px;font-weight:700;color:#166534;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;\x22>🏧\x20Withdrawal</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20style=\x22width:100%;border-collapse:collapse;font-size:11.5px;\x22\x20id=\x22tariff-withdraw\x22></table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:12px;background:#f0fdf4;border-radius:8px;padding:10px;font-size:11px;color:#166534;line-height:1.6;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Note:</strong>\x20Buy\x20Goods\x20(Till)\x20and\x20Paybill\x20transactions\x20to\x20most\x20billers\x20are\x20<strong>free</strong>\x20(KSh\x200\x20charge).\x20Airtime\x20purchases\x20are\x20also\x20free.\x20Charges\x20above\x20are\x20per\x20the\x20Safaricom\x20official\x20tariff.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Status\x20bar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22mpesa-status\x22\x20style=\x22padding:10px\x2018px;background:#f9fafb;border-top:1px\x20solid\x20#f0f0f0;font-size:12px;color:#6b7280;display:none;\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'onerror', 'amount', 'fuliza', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'title', 'Withdrawal', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#9ca3af;padding:6px\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '17733GgCtsR', 'charge', '#manual-lookup-val', 'error', 'taskbar-clock', 'nav-item', 'custom', '#mpesa-post-all', '<span\x20class=\x22nav-icon\x22>📱</span>\x20M-Pesa\x20Charges', '\x20Logged!', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border:1px\x20solid\x20#fde68a;border-radius:8px;padding:9px\x2013px;margin-bottom:6px;background:#fffbeb;opacity:0.8;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:space-between;align-items:center;gap:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:10px;font-weight:700;background:#fef3c7;color:#92400e;padding:2px\x207px;border-radius:20px;\x22>', 'className', 'Send\x20Money', 'Logging…', 'DOMContentLoaded', 'toUpperCase', 'Buy\x20Goods', 'buy_goods', 'test', 'nextSibling', 'random', '#manual-lookup-note', '#mpesa-clear-btn', 'style', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#4ade80;text-align:right;\x22>', 'TRANSACTION', ')\x20logged\x20to\x20your\x20ledger\x20as\x20Bills\x20expenses.', '#manual-charge', 'M-Pesa', '#dc2626', 'nav-sidebar', 'Fuliza\x20M-PESA', 'taskbar-btn', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fffbeb;border:1px\x20solid\x20#fde68a;border-radius:8px;padding:12px;text-align:center;margin-top:6px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:600;color:#92400e;\x22>All\x20transactions\x20already\x20logged</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:12px;color:#b45309;margin-top:3px;\x22>No\x20new\x20charges\x20to\x20import.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'exec', 'join', 'getAll', '#f9fafb', 'stringify', 'querySelector', 'raw', 'split', 'transactions', 'taskbar', '#tab-', 'mpesa-modal', 'withdraw', 'function', 'color', '.mpesa-tab', 'desc', 'nav-mpesa', 'position:fixed;inset:0;z-index:7000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,0.55);backdrop-filter:blur(10px);', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'Most\x20Paybill/Till\x20transactions\x20are\x20free.', 'slice', '#16a34a', 'max', 'Fuliza\x20Charge', '#166534', 'withdrawal', 'oninput', 'reduce', 'Log\x20All\x20Charges\x20to\x20Ledger', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'replace', '\x20charge', 'classList', 'tab', '731736EAqlnQ', '#manual-desc', 'display', '5492619CwlGZY', 'MANUAL', 'block', 'map', 'trim', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border:1px\x20solid\x20#e5e7eb;border-radius:8px;padding:11px\x2013px;margin-bottom:8px;background:white;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:space-between;align-items:flex-start;gap:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:1;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:6px;margin-bottom:3px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:14px;\x22>', '#mpesa-parse-btn', '#fef2f2', '\x20transaction', 'label', 'startsWith', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:10px;font-weight:700;background:#dcfce7;color:#166534;padding:2px\x207px;border-radius:20px;\x22>', 'some', 'objectStore', 'toLowerCase', 'parse', 'button', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'match', 'undefined', '#nav-sidebar\x20.sidebar-footer', 'onchange', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fef2f2;border:1px\x20solid\x20#fecaca;border-radius:8px;padding:14px;text-align:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:20px;margin-bottom:6px;\x22>🤔</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:600;color:#991b1b;\x22>No\x20M-Pesa\x20messages\x20detected</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:12px;color:#b91c1c;margin-top:4px;line-height:1.6;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Make\x20sure\x20you\x20paste\x20the\x20<strong>full\x20SMS\x20text</strong>.<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Supported:\x20Send\x20Money,\x20Withdraw,\x20Buy\x20Goods,\x20Paybill,\x20Airtime,\x20Fuliza.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'none', '#mpesa-status', '#manual-log-btn', 'appendChild', '#f0fdf4', 'Received', 'Failed\x20to\x20log:\x20', '273696odedOI', 'send', 'transaction', 'createElement', '\x20(KSh\x20', 'now', '#manual-amount', '190494QVAgdw', 'target', 'results', 'floor', 'message', '[MpesaTracker]\x20Failed\x20to\x20log:', '756748NoofRy', '#mpesa-results-inner', 'min', 'Amount\x20out\x20of\x20range', 'getElementById', '#991b1b', 'querySelectorAll', 'value', 'dataset', 'transfer', 'filter', '5DsWUBC', '\x20charge\x20logged\x20as\x20Bills\x20expense.', 'toLocaleString', '</div>', 'rgba(255,255,255,0.8)', 'contains', 'Airtime', '#mpesa-results', 'add', '\x20to\x20', 'cssText', 'flex', 'FULIZA-', '1bpvVwm', 'unshift', 'M-Pesa\x20Transaction', '#mpesa-sms-input', 'Paybill', 'forEach', 'readonly', 'linear-gradient(135deg,#00a651,#007a3d)', '<div\x20style=\x22font-size:12.5px;color:#374151;\x22>To:\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22background:', 'has', 'onsuccess', 'onclick', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>', 'white', 'length', 'travisMpesa', '344ydwfoc', 'type', 'ref', '168LGFDPc', 'receive', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22background:#f0fdf4;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22padding:5px\x208px;text-align:left;font-size:10px;color:#166534;font-weight:700;border-bottom:1px\x20solid\x20#bbf7d0;\x22>Range\x20(KSh)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22padding:5px\x208px;text-align:right;font-size:10px;color:#166534;font-weight:700;border-bottom:1px\x20solid\x20#bbf7d0;\x22>Charge</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22padding:5px\x208px;font-size:11px;font-weight:700;color:', 'push', 'innerHTML', '.mpesa-tab-content', '\x20with\x20KSh\x200\x20charge\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(', 'textContent', 'Bills', 'M-Pesa\x20charge\x20—\x20', 'paybill', 'en-KE', 'insertBefore', 'background', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#92400e;margin-top:3px;\x22>Duplicate\x20—\x20already\x20logged,\x20will\x20not\x20be\x20re-imported</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:15px;font-weight:700;color:#b45309;flex-shrink:0;\x22>KSh\x20', 'button[onclick*=\x22showTxModal\x22]', 'put', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tbody>', 'TravisGuardian_v1.0', 'tariff-send', 'open', 'airtime', 'disabled', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fef2f2;border:1px\x20solid\x20#fecaca;border-radius:8px;padding:14px;text-align:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:28px;margin-bottom:8px;\x22>🚫</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:700;color:#991b1b;\x22>This\x20doesn\x27t\x20look\x20like\x20an\x20M-Pesa\x20message</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:12px;color:#b91c1c;margin-top:6px;line-height:1.7;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Travis\x20only\x20processes\x20Safaricom\x20M-Pesa\x20SMS\x20messages.<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20paste\x20a\x20genuine\x20M-Pesa\x20confirmation\x20message.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'tb-mpesa', 'readwrite', 'NEWMPESA', 'mpesa', 'objectStoreNames', 'Airtime\x20purchases\x20are\x20free\x20on\x20M-Pesa.', 'tariff-withdraw', 'result', 'recipient', '#6b7280', 'KSh\x20', '#manual-lookup-result', '#nav-sidebar\x20>\x20div[style*=\x22overflow\x22]', '661010cCIbXr', 'KSh\x200', '#mpesa-close', 'loading', 'dash', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22padding:5px\x208px;font-size:11px;color:#374151;border-bottom:1px\x20solid\x20#f3f4f6;\x22>', 'close', '#manual-type'];
    _0x5909 = function() {
        return _0x349956;
    };
    return _0x5909();
}
