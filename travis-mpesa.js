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

        const contraKeywords = [
            /deposit/i, /deposited/i, /cash deposit/i, /bank deposit/i,
            /agent deposit/i, /withdraw to cash/i, /withdrew to cash/i,
            /cash withdrawal/i, /deposit to bank/i, /mpesa to bank/i,
            /bank to mpesa/i, /internal transfer/i, /self transfer/i
        ];
        for (const pattern of contraKeywords) {
            if (pattern.test(lower)) return 'contra';
        }

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

        const chargeMatch = _0x15f829['match'](_0x296380);
        let charge = chargeMatch ? parseFloat(chargeMatch[0x1][_0x4db353(0x94)](/,/g, '')) : 0;

        const allAmounts = [];
        let match;
        const amountRegex = /(?:Ksh|KES)\s*([\d,]+\.?\d*)/gi;
        while ((match = amountRegex.exec(_0x15f829)) !== null) {
            allAmounts.push(parseFloat(match[1].replace(/,/g, '')));
        }

        const balanceMatch = _0x15f829.match(/New\s+M-?PESA\s+balance\s+is\s+(?:Ksh|KES)\s*([\d,]+\.?\d*)/i);
        let balance = balanceMatch ? parseFloat(balanceMatch[1].replace(/,/g, '')) : 0;

        let mainAmount = 0;
        for (const amt of allAmounts) {
            if (balance > 0 && Math.abs(amt - balance) < 0.01) continue;
            if (charge > 0 && Math.abs(amt - charge) < 0.01) continue;
            if (mainAmount === 0) {
                mainAmount = amt;
            }
        }

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

    async function _0x2bc494(_0x197aaa) {
        try {
            const _0x1a2b3c = _0x197aaa['type'];
            const _0x2b3c4d = _0x197aaa['ref'];
            const _0x3c4d5e = Number(_0x197aaa['amount']) || 0;
            const _0x4d5e6f = _0x197aaa['recipient'] || '';
            const _0x5e6f70 = Number(_0x197aaa['charge']) || 0;
            const _0x6f7081 = !!_0x197aaa['isFuliza'] || _0x1a2b3c === 'fuliza';

            // Use the debit/credit from parser
            const debit = _0x197aaa['debit'] || 'Cash';
            const credit = _0x197aaa['credit'] || 'M-Pesa';
            const direction = _0x197aaa['direction'] || (_0x1a2b3c === 'receive' ? 'incoming' : 'outgoing');

            if (!_0x197aaa['direction']) {
                _0x197aaa['direction'] = _0x1a2b3c === 'receive' ? 'incoming' : 'outgoing';
            }

            if (_0x3c4d5e <= 0 && _0x5e6f70 <= 0 && !_0x6f7081) return null;

            const _0x7081a2 = (n) => Number(n).toLocaleString('en-KE');
            const _0x81a2b3 = Date.now() + Math.floor(Math.random() * 1000);
            const transactions = [];

            if (_0x6f7081) {
                if (_0x3c4d5e > 0) {
                    transactions.push({
                        'id': _0x81a2b3,
                        'debit': 'Fuliza Repayment',
                        'credit': 'Cash',
                        'amount': _0x3c4d5e,
                        'desc': 'Fuliza repayment KSh ' + _0x7081a2(_0x3c4d5e) + ' (REF: ' + _0x2b3c4d + ')'
                    });
                }
                if (_0x5e6f70 > 0) {
                    transactions.push({
                        'id': _0x81a2b3 + transactions.length,
                        'debit': 'M-Pesa Charge',
                        'credit': 'Cash',
                        'amount': _0x5e6f70,
                        'desc': 'Fuliza charge KSh ' + _0x7081a2(_0x5e6f70) + ' (REF: ' + _0x2b3c4d + ')'
                    });
                }
            } else if (_0x1a2b3c === 'receive' || direction === 'incoming') {
                transactions.push({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': 'Received KSh ' + _0x7081a2(_0x3c4d5e) + ' from ' + (_0x4d5e6f || 'M-Pesa') + ' (REF: ' + _0x2b3c4d + ')'
                });
                if (_0x5e6f70 > 0) {
                    transactions.push({
                        'id': _0x81a2b3 + transactions.length,
                        'debit': 'M-Pesa Charge',
                        'credit': 'Cash',
                        'amount': _0x5e6f70,
                        'desc': 'M-Pesa charge KSh ' + _0x7081a2(_0x5e6f70) + ' for REF: ' + _0x2b3c4d
                    });
                }
            } else if (direction === 'contra') {
                transactions.push({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': 'TRANSFER KSh ' + _0x7081a2(_0x3c4d5e) + ': ' + debit + ' → ' + credit + ' (REF: ' + _0x2b3c4d + ')'
                });
                if (_0x5e6f70 > 0) {
                    transactions.push({
                        'id': _0x81a2b3 + transactions.length,
                        'debit': 'M-Pesa Charge',
                        'credit': 'Cash',
                        'amount': _0x5e6f70,
                        'desc': 'M-Pesa charge KSh ' + _0x7081a2(_0x5e6f70) + ' for REF: ' + _0x2b3c4d
                    });
                }
            } else if (_0x1a2b3c === 'send') {
                transactions.push({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': 'SEND KSh ' + _0x7081a2(_0x3c4d5e) + ' to ' + _0x4d5e6f + ' (charge: KSh ' + _0x7081a2(_0x5e6f70) + ') (REF: ' + _0x2b3c4d + ')'
                });
                if (_0x5e6f70 > 0) {
                    transactions.push({
                        'id': _0x81a2b3 + transactions.length,
                        'debit': 'M-Pesa Charge',
                        'credit': 'Cash',
                        'amount': _0x5e6f70,
                        'desc': 'M-Pesa charge KSh ' + _0x7081a2(_0x5e6f70) + ' for REF: ' + _0x2b3c4d
                    });
                }
            } else if (_0x1a2b3c === 'withdraw') {
                transactions.push({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': 'WITHDRAW KSh ' + _0x7081a2(_0x3c4d5e) + ' from ' + _0x4d5e6f + ' (charge: KSh ' + _0x7081a2(_0x5e6f70) + ') (REF: ' + _0x2b3c4d + ')'
                });
                if (_0x5e6f70 > 0) {
                    transactions.push({
                        'id': _0x81a2b3 + transactions.length,
                        'debit': 'M-Pesa Charge',
                        'credit': 'Cash',
                        'amount': _0x5e6f70,
                        'desc': 'M-Pesa charge KSh ' + _0x7081a2(_0x5e6f70) + ' for REF: ' + _0x2b3c4d
                    });
                }
            } else if (_0x1a2b3c === 'paybill' || _0x1a2b3c === 'buy_goods') {
                transactions.push({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': 'PAYBILL KSh ' + _0x7081a2(_0x3c4d5e) + ' to ' + (_0x4d5e6f || 'Paybill') + ' (REF: ' + _0x2b3c4d + ')'
                });
                if (_0x5e6f70 > 0) {
                    transactions.push({
                        'id': _0x81a2b3 + transactions.length,
                        'debit': 'M-Pesa Charge',
                        'credit': 'Cash',
                        'amount': _0x5e6f70,
                        'desc': 'M-Pesa charge KSh ' + _0x7081a2(_0x5e6f70) + ' for REF: ' + _0x2b3c4d
                    });
                }
            } else if (_0x1a2b3c === 'airtime') {
                transactions.push({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': 'AIRTIME KSh ' + _0x7081a2(_0x3c4d5e) + ' for ' + _0x4d5e6f + ' (REF: ' + _0x2b3c4d + ')'
                });
            } else if (_0x5e6f70 > 0) {
                transactions.push({
                    'id': _0x81a2b3,
                    'debit': 'M-Pesa Charge',
                    'credit': 'Cash',
                    'amount': _0x5e6f70,
                    'desc': 'M-Pesa charge — KSh ' + _0x7081a2(_0x5e6f70) + ' (' + _0x2b3c4d + ')'
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
            console.error('[MpesaTracker] Log error:', _0xc5d6e7);
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

    async function _0x577eaf(_0x46b0cd) {
        const _0x4380de = _0x34b2,
            _0x55476b = _0x46b0cd[_0x4380de(0x7a)](_0x4380de(0xa1)),
            _0x137c56 = _0x46b0cd[_0x4380de(0x7a)](_0x4380de(0xe1))[_0x4380de(0xcd)],
            _0xa40f77 = _0x46b0cd[_0x4380de(0x7a)](_0x4380de(0xd8)),
            _0xc856ea = _0x46b0cd[_0x4380de(0x7a)](_0x4380de(0xc7)),
            _0x162ad5 = _0x46b0cd['querySelector']('#mpesa-post-all');
        _0x55476b['textContent'] = '⏳ Checking…', _0x55476b[_0x4380de(0x109)] = !![];
        const _0x477c0d = await _0xfe8e01();
        _0x55476b[_0x4380de(0xfa)] = '🔍 Extract Charges', _0x55476b['disabled'] = ![];
        if (_0x137c56['trim']() && !_0x5325d3[_0x4380de(0xa7)](_0x248a6e => _0x248a6e[_0x4380de(0x13c)](_0x137c56))) {
            _0xc856ea[_0x4380de(0xf7)] = _0x4380de(0x10a), _0xa40f77['style'][_0x4380de(0x9a)] = _0x4380de(0x9d), _0x162ad5[_0x4380de(0x141)][_0x4380de(0x9a)] = _0x4380de(0xb2);
            return;
        }
        const _0x44895c = _0x856f67(_0x137c56);
        if (_0x44895c['length'] === 0x0) {
            _0xc856ea[_0x4380de(0xf7)] = _0x4380de(0xb1), _0xa40f77[_0x4380de(0x141)][_0x4380de(0x9a)] = 'block', _0x162ad5[_0x4380de(0x141)]['display'] = _0x4380de(0xb2);
            return;
        }
        const _0x2fc50a = _0x44895c['filter'](_0x58c29a => _0x58c29a[_0x4380de(0x12b)] > 0x0 && !_0x477c0d['has'](_0x58c29a[_0x4380de(0xf1)])),
            _0x15bd5d = _0x44895c[_0x4380de(0xd0)](_0x4697f1 => _0x4697f1['charge'] > 0x0 && _0x477c0d[_0x4380de(0xe8)](_0x4697f1[_0x4380de(0xf1)])),
            _0x368772 = _0x44895c[_0x4380de(0xd0)](_0x4044bc => _0x4044bc[_0x4380de(0x12b)] === 0x0);
        let _0x41b3dc = '';
        if (_0x2fc50a[_0x4380de(0xed)] > 0x0) {
            const _0x2f0f7c = _0x2fc50a[_0x4380de(0x91)]((_0xc59697, _0x2c4605) => _0xc59697 + _0x2c4605[_0x4380de(0x12b)], 0x0);
            _0x41b3dc += '\n        <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px 14px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;">\n          <div>\n            <div style="font-size:11px;font-weight:600;color:#166534;text-transform:uppercase;letter-spacing:.05em;">Total New Charges</div>\n            <div style="font-size:20px;font-weight:800;color:#15803d;">KSh ' + _0x2f0f7c[_0x4380de(0xd3)](_0x4380de(0xfe)) + '</div>\n          </div>\n          <div style="font-size:12px;color:#166534;">' + _0x2fc50a[_0x4380de(0xed)] + ' new transaction' + (_0x2fc50a[_0x4380de(0xed)] !== 0x1 ? 's' : '') + '</div>\n        </div>';
        }
        _0x2fc50a[_0x4380de(0xe3)](_0x32e0cd => {
            const _0x3b44c3 = _0x4380de,
                _0x17e273 = _0x1487e6[_0x32e0cd[_0x3b44c3(0xf0)]] || '📱';
            _0x41b3dc += _0x3b44c3(0xa0) + _0x17e273 + _0x3b44c3(0xa6) + _0x32e0cd[_0x3b44c3(0xa4)][_0x3b44c3(0x139)]() + '</span>\n                <span style="font-size:10px;color:#9ca3af;font-family:monospace;">' + _0x32e0cd[_0x3b44c3(0xf1)] + '</span>\n                ' + (_0x32e0cd[_0x3b44c3(0x113)] ? '<div style="font-size:12.5px;color:#374151;">To: ' + _0x32e0cd['recipient'] + '</div>' : '') + '\n                ' + (_0x32e0cd['amount'] ? '<div style="font-size:11px;color:#6b7280;margin-top:2px;">Amount: KSh ' + _0x32e0cd[_0x3b44c3(0x124)][_0x3b44c3(0xd3)](_0x3b44c3(0xfe)) + '</div>' : '') + '\n              </div>\n              <div style="text-align:right;flex-shrink:0;">\n                <div style="font-size:11px;color:#6b7280;">Charge</div>\n                <div style="font-size:17px;font-weight:800;color:#dc2626;">KSh ' + _0x32e0cd['charge'][_0x3b44c3(0xd3)](_0x3b44c3(0xfe)) + '</div>\n              </div>\n            </div>\n          </div>';
        }), _0x15bd5d[_0x4380de(0xed)] > 0x0 && (_0x41b3dc += '<div style="font-size:11px;font-weight:600;color:#92400e;margin:10px 0 6px;text-transform:uppercase;letter-spacing:.05em;">⚠️ Already in ledger — skipped</div>', _0x15bd5d[_0x4380de(0xe3)](_0x52333f => {
            const _0x48d929 = _0x4380de;
            _0x41b3dc += _0x48d929(0x134) + _0x52333f[_0x48d929(0xa4)][_0x48d929(0x139)]() + '</span>\n                <span style="font-size:10px;color:#b45309;font-family:monospace;margin-left:6px;">' + _0x52333f[_0x48d929(0xf1)] + '</span>\n                <div style="font-size:11px;color:#92400e;margin-top:3px;">Duplicate — already logged, will not be re-imported</div>\n              </div>\n              <div style="font-size:15px;font-weight:700;color:#b45309;flex-shrink:0;">KSh ' + _0x52333f[_0x48d929(0x12b)]['toLocaleString'](_0x48d929(0xfe)) + '</div>\n            </div>\n          </div>';
        })), _0x368772['length'] > 0x0 && (_0x41b3dc += '<div style="font-size:11px;color:#9ca3af;padding:6px 2px;">\n            ' + _0x368772['length'] + ' transaction' + (_0x368772[_0x4380de(0xed)] !== 0x1 ? 's' : '') + ' with zero charge (' + _0x368772['map'](_0x5834ab => _0x5834ab[_0x4380de(0xa4)])['join'](', ') + ') — nothing to log.\n          </div>'), _0x2fc50a[_0x4380de(0xed)] === 0x0 && _0x44895c[_0x4380de(0xed)] > 0x0 && (_0x41b3dc += '<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px;text-align:center;margin-top:6px;">\n            <div style="font-size:13px;font-weight:600;color:#92400e;">All transactions already logged</div>\n            <div style="font-size:12px;color:#b45309;margin-top:3px;">No new charges to import.</div>\n          </div>'), _0xc856ea[_0x4380de(0xf7)] = _0x41b3dc, _0xa40f77[_0x4380de(0x141)][_0x4380de(0x9a)] = _0x4380de(0x9d), _0x162ad5['style'][_0x4380de(0x9a)] = _0x2fc50a[_0x4380de(0xed)] > 0x0 ? _0x4380de(0x9d) : 'none', _0x162ad5['dataset']['results'] = JSON[_0x4380de(0x79)](_0x2fc50a);
    }

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
                _0x416442 && (_0x501fa8++, _0x8d4114 += _0x2992dc[_0x2437c9(0x12b)]);
            } catch (_0x38ff5f) {
                console['error'](_0x2437c9(0xc5), _0x2992dc[_0x2437c9(0xf1)], _0x38ff5f);
            }
        }
        if (typeof saveBackup === _0x2437c9(0x82)) try {
            await saveBackup();
        } catch (_0x26ffae) {}
        if (typeof nav === _0x2437c9(0x82)) try {
            nav(_0x2437c9(0x11c));
        } catch (_0x35f3ac) {}
        _0x598327(_0x557fdf, ' ' + _0x501fa8 + _0x2437c9(0x95) + (_0x501fa8 !== 0x1 ? 's' : '') + _0x2437c9(0xbd) + _0x8d4114[_0x2437c9(0xd3)](_0x2437c9(0xfe)) + _0x2437c9(0x144)), _0xbf873a['textContent'] = _0x501fa8 + ' Charge' + (_0x501fa8 !== 0x1 ? 's' : '') + _0x2437c9(0x133), _0xbf873a[_0x2437c9(0x141)]['background'] = _0x2437c9(0x8e), _0xbf873a[_0x2437c9(0x109)] = ![], setTimeout(() => {
            const _0x3d46fa = _0x2437c9;
            _0x557fdf[_0x3d46fa(0x7a)](_0x3d46fa(0xe1))[_0x3d46fa(0xcd)] = '', _0x557fdf['querySelector'](_0x3d46fa(0xd8))[_0x3d46fa(0x141)][_0x3d46fa(0x9a)] = 'none', _0xbf873a['textContent'] = _0x3d46fa(0x92), _0xbf873a['style'][_0x3d46fa(0x100)] = _0x3d46fa(0xe5), _0xbf873a[_0x3d46fa(0x141)][_0x3d46fa(0x9a)] = _0x3d46fa(0xb2);
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
        _0x12aa43['style'][_0x185a40(0x9a)] = _0x185a40(0x9d), _0x20d913[_0x185a40(0xfa)] = _0x185a40(0x115) + _0x304106[_0x185a40(0xd3)](_0x185a40(0xfe)), _0x58e862[_0x185a40(0xfa)] = 'Official tariff for KSh ' + _0xbaf290[_0x185a40(0xd3)](_0x185a40(0xfe)) + ' ' + (_0x48a75c === _0x185a40(0x81) ? _0x185a40(0x8f) : _0x185a40(0xcf));
    }

    async function _0x5a8591(_0x5331b4) {
        const _0x340d9c = _0x34b2,
            _0x102bc3 = _0x5331b4[_0x340d9c(0x7a)]('#manual-type')[_0x340d9c(0xcd)],
            _0x30aa97 = parseFloat(_0x5331b4[_0x340d9c(0x7a)](_0x340d9c(0xbf))[_0x340d9c(0xcd)]) || 0x0,
            _0x102c02 = _0x5331b4['querySelector'](_0x340d9c(0x99))['value'][_0x340d9c(0x9f)]() || 'M-Pesa transaction charge',
            _0x26cea5 = _0x5331b4['querySelector'](_0x340d9c(0xb4));
        let _0x5cec01 = 0x0;
        if (_0x102bc3 === 'custom') _0x5cec01 = parseFloat(_0x5331b4[_0x340d9c(0x7a)](_0x340d9c(0x145))[_0x340d9c(0xcd)]) || 0x0;
        else _0x102bc3 === _0x340d9c(0xfd) || _0x102bc3 === _0x340d9c(0x108) ? _0x5cec01 = 0x0 : _0x5cec01 = _0x8fa1bc(_0x102bc3 === _0x340d9c(0x81) ? _0x340d9c(0x81) : _0x340d9c(0xba), _0x30aa97) || 0x0;
        if (_0x5cec01 <= 0x0) {
            _0x598327(_0x5331b4, 'ℹ️ This transaction type has no charge — nothing to log.');
            return;
        }
        _0x26cea5['disabled'] = !![], _0x26cea5[_0x340d9c(0xfa)] = 'Logging…';
        const _0x282a22 = {
                'send': _0x340d9c(0x136),
                'paybill': _0x340d9c(0xe2),
                'withdraw': _0x340d9c(0x128),
                'airtime': _0x340d9c(0xd7),
                'custom': _0x340d9c(0x146)
            },
            _0x376aa5 = {
                'type': _0x102bc3,
                'label': _0x282a22[_0x102bc3] || _0x340d9c(0x146),
                'ref': _0x340d9c(0x9c),
                'amount': _0x30aa97,
                'recipient': _0x102c02,
                'charge': _0x5cec01
            };
        try {
            await _0x2bc494(_0x376aa5);
            if (typeof saveBackup === _0x340d9c(0x82)) try {
                await saveBackup();
            } catch (_0x55b2af) {}
            if (typeof nav === _0x340d9c(0x82)) try {
                nav(_0x340d9c(0x11c));
            } catch (_0x567321) {}
            _0x598327(_0x5331b4, _0x340d9c(0x115) + _0x5cec01 + _0x340d9c(0xd2)), _0x5331b4[_0x340d9c(0x7a)](_0x340d9c(0xbf))[_0x340d9c(0xcd)] = '', _0x5331b4[_0x340d9c(0x7a)](_0x340d9c(0x99))[_0x340d9c(0xcd)] = '', _0x5331b4[_0x340d9c(0x7a)]('#manual-lookup-result')[_0x340d9c(0x141)][_0x340d9c(0x9a)] = _0x340d9c(0xb2);
        } catch (_0x27f3dd) {
            _0x598327(_0x5331b4, _0x340d9c(0xb8) + _0x27f3dd[_0x340d9c(0xc4)]);
        }
        _0x26cea5[_0x340d9c(0x109)] = ![], _0x26cea5['textContent'] = 'Log This Charge';
    }

    function _0x14c2f4() {
        const _0x2381f1 = _0x34b2,
            _0x27647d = (_0x532c1f, _0x570a02) => {
                const _0xae9ed7 = _0x34b2;
                if (!_0x532c1f) return;
                _0x532c1f[_0xae9ed7(0xf7)] = _0xae9ed7(0xf4) + _0x570a02[_0xae9ed7(0x9e)]((_0x31065e, _0x46ab88) => _0xae9ed7(0xe7) + (_0x46ab88 % 0x2 === 0x0 ? _0xae9ed7(0xec) : _0xae9ed7(0x78)) + _0xae9ed7(0x11d) + _0x31065e[_0xae9ed7(0xc8)][_0xae9ed7(0xd3)]() + '–' + _0x31065e['max']['toLocaleString']() + _0xae9ed7(0xf5) + (_0x31065e[_0xae9ed7(0x12b)] === 0x0 ? _0xae9ed7(0x8b) : _0xae9ed7(0x147)) + ';text-align:right;border-bottom:1px solid #f3f4f6;">KSh ' + _0x31065e['charge'] + _0xae9ed7(0xeb))[_0xae9ed7(0x76)]('') + _0xae9ed7(0x104);
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
            _0x233bd1['id'] = _0x4a097b(0x10b), _0x233bd1[_0x4a097b(0x135)] = _0x4a097b(0x73), _0x233bd1[_0x4a097b(0x127)] = 'M-Pesa Charges', _0x233bd1[_0x4a097b(0xfa)] = '📱', _0x233bd1['onclick'] = () => window[_0x4a097b(0xee)]['open'](), _0x4367a2[_0x4a097b(0xff)](_0x233bd1, _0x174d70);
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
    const _0x349956 = ['MPESA-', 'readyState', '\n      <div style="background:#ffffff;border-radius:16px;width:100%;max-width:560px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,0.25);border:1px solid rgba(0,0,0,0.08);">\n        <!-- Header -->\n        <div style="background:linear-gradient(135deg,#00a651,#007a3d);padding:20px 22px 16px;flex-shrink:0;">\n          <div style="display:flex;align-items:center;justify-content:space-between;">\n            <div style="display:flex;align-items:center;gap:12px;">\n              <div style="width:40px;height:40px;background:rgba(255,255,255,0.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;">📱</div>\n              <div>\n                <div style="color:white;font-size:15px;font-weight:700;letter-spacing:-.01em;">Online Charge Tracker</div>\n                <div style="color:rgba(255,255,255,0.75);font-size:11px;margin-top:1px;">Paste SMS · Extract charges · Auto-log to ledger</div>\n              </div>\n            </div>\n            <button id="mpesa-close" style="background:rgba(255,255,255,0.15);border:none;color:white;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;">×</button>\n          </div>\n          <div style="display:flex;gap:4px;margin-top:14px;background:rgba(0,0,0,0.15);border-radius:8px;padding:3px;">\n            <button class="mpesa-tab active" data-tab="paste" style="flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:white;color:#007a3d;transition:all .15s;">📋 Paste SMS</button>\n            <button class="mpesa-tab" data-tab="manual" style="flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:rgba(255,255,255,0.8);transition:all .15s;">✏️ Manual Entry</button>\n            <button class="mpesa-tab" data-tab="tariff" style="flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:rgba(255,255,255,0.8);transition:all .15s;">📊 Tariff Table</button>\n          </div>\n        </div>\n        <div style="flex:1;overflow-y:auto;padding:0;" id="mpesa-body">\n          <!-- TAB: Paste SMS -->\n          <div id="tab-paste" class="mpesa-tab-content" style="padding:18px;">\n            <div style="background:#f0fdf4;border:1.5px dashed #86efac;border-radius:10px;padding:14px;margin-bottom:14px;">\n              <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#166534;">How to use:</p>\n              <ol style="margin:0;padding-left:18px;font-size:12px;color:#15803d;line-height:1.7;">\n                <li>Open your SMS app → find M-Pesa & Bank messages</li>\n                <li>Long-press → Copy the full message text</li>\n                <li>Paste one or multiple messages below</li>\n                <li>Travis extracts <strong>all</strong> charges (Send, Withdraw, Buy Goods, Paybill, Airtime, Fuliza…)</li>\n              </ol>\n            </div>\n            <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em;">Paste M-Pesa SMS Message(s)</label>\n            <textarea id="mpesa-sms-input" placeholder="Paste your M-Pesa SMS here…\n\nWorks with ALL message types:\n• Send Money  • Withdraw  • Buy Goods  • Paybill  • Airtime  • Fuliza\n\nExample:\nQAB3X12345 Confirmed. Ksh1,500.00 sent to JOHN DOE on 1/6/25 at 3:45 PM. New M-PESA balance is Ksh3,200.00. Transaction cost, Ksh27.00." style="width:100%;height:140px;border:1px solid #e5e7eb;border-radius:8px;padding:12px;font-size:12.5px;font-family:inherit;resize:vertical;outline:none;background:#fafafa;line-height:1.6;box-sizing:border-box;"></textarea>\n            <div style="display:flex;gap:8px;margin-top:10px;">\n              <button id="mpesa-parse-btn" style="flex:1;background:#00a651;color:white;border:none;padding:12px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">Extract Charges</button>\n              <button id="mpesa-clear-btn" style="background:#f3f4f6;color:#6b7280;border:none;padding:12px 14px;border-radius:8px;font-size:13px;cursor:pointer;font-family:inherit;">Clear</button>\n            </div>\n            <div id="mpesa-results" style="margin-top:14px;display:none;">\n              <div id="mpesa-results-inner"></div>\n              <button id="mpesa-post-all" style="width:100%;background:linear-gradient(135deg,#00a651,#007a3d);color:white;border:none;padding:13px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;margin-top:10px;font-family:inherit;display:none;">Log All Charges to Ledger</button>\n            </div>\n          </div>\n          <!-- TAB: Manual Entry -->\n          <div id="tab-manual" class="mpesa-tab-content" style="padding:18px;display:none;">\n            <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px;margin-bottom:16px;">\n              <p style="margin:0;font-size:12px;color:#92400e;line-height:1.6;">Use this when you know the transaction amount but don't have the SMS. Travis will calculate the Safaricom charge from the official tariff.</p>\n            </div>\n            <div style="display:grid;gap:12px;">\n              <div>\n                <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;">Transaction Type</label>\n                <select id="manual-type" style="width:100%;padding:9px 12px;border:1px solid #e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;background:white;">\n                  <option value="send">Send Money (to M-Pesa number)</option>\n                  <option value="paybill">Paybill / Till Number</option>\n                  <option value="withdraw">Agent Withdrawal</option>\n                  <option value="airtime">Airtime Purchase</option>\n                  <option value="custom">Custom Charge Amount</option>\n                </select>\n              </div>\n              <div>\n                <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;">Amount Transacted (KSh)</label>\n                <input id="manual-amount" type="number" placeholder="e.g. 2500" style="width:100%;padding:9px 12px;border:1px solid #e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;">\n              </div>\n              <div id="manual-charge-row" style="display:none;">\n                <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;">Charge Amount (KSh)</label>\n                <input id="manual-charge" type="number" placeholder="e.g. 33" style="width:100%;padding:9px 12px;border:1px solid #e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;">\n              </div>\n              <div id="manual-lookup-result" style="display:none;background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:12px;">\n                <div style="font-size:11px;color:#166534;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Safaricom Charge</div>\n                <div id="manual-lookup-val" style="font-size:22px;font-weight:800;color:#15803d;margin-top:2px;">KSh 0</div>\n                <div id="manual-lookup-note" style="font-size:11px;color:#4ade80;margin-top:2px;"></div>\n              </div>\n              <div>\n                <label style="font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;">Description (optional)</label>\n                <input id="manual-desc" type="text" placeholder="e.g. Sent rent to landlord" style="width:100%;padding:9px 12px;border:1px solid #e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;">\n              </div>\n              <button id="manual-log-btn" style="background:#00a651;color:white;border:none;padding:13px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">Log This Charge</button>\n            </div>\n          </div>\n          <!-- TAB: Tariff Table -->\n          <div id="tab-tariff" class="mpesa-tab-content" style="padding:18px;display:none;">\n            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">\n              <div>\n                <div style="font-size:12px;font-weight:700;color:#166534;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;">📤 Send Money</div>\n                <table style="width:100%;border-collapse:collapse;font-size:11.5px;" id="tariff-send"></table>\n              </div>\n              <div>\n                <div style="font-size:12px;font-weight:700;color:#166534;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;">🏧 Withdrawal</div>\n                <table style="width:100%;border-collapse:collapse;font-size:11.5px;" id="tariff-withdraw"></table>\n              </div>\n            </div>\n            <div style="margin-top:12px;background:#f0fdf4;border-radius:8px;padding:10px;font-size:11px;color:#166534;line-height:1.6;">\n              <strong>Note:</strong> Buy Goods (Till) and Paybill transactions to most billers are <strong>free</strong> (KSh 0 charge). Airtime purchases are also free. Charges above are per the Safaricom official tariff.\n            </div>\n          </div>\n        </div>\n        <div id="mpesa-status" style="padding:10px 18px;background:#f9fafb;border-top:1px solid #f0f0f0;font-size:12px;color:#6b7280;display:none;"></div>\n      </div>', 'onerror', 'amount', 'fuliza', '</span>\n              </div>\n            </div>\n          </div>', 'title', 'Withdrawal', '\n        <div style="font-size:11px;color:#9ca3af;padding:6px 2px;">\n          ', '17733GgCtsR', 'charge', '#manual-lookup-val', 'error', 'taskbar-clock', 'nav-item', 'custom', '#mpesa-post-all', '<span class="nav-icon">📱</span> M-Pesa Charges', ' Logged!', '\n          <div style="border:1px solid #fde68a;border-radius:8px;padding:9px 13px;margin-bottom:6px;background:#fffbeb;opacity:0.8;">\n            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">\n              <div>\n                <span style="font-size:10px;font-weight:700;background:#fef3c7;color:#92400e;padding:2px 7px;border-radius:20px;">', 'className', 'Send Money', 'Logging…', 'DOMContentLoaded', 'toUpperCase', 'Buy Goods', 'buy_goods', 'test', 'nextSibling', 'random', '#manual-lookup-note', '#mpesa-clear-btn', 'style', '</div>\n          </div>\n          <div style="font-size:11px;color:#4ade80;text-align:right;">', 'TRANSACTION', ') logged to your ledger as Bills expenses.', '#manual-charge', 'M-Pesa', '#dc2626', 'nav-sidebar', 'Fuliza M-PESA', 'taskbar-btn', '\n        <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px;text-align:center;margin-top:6px;">\n          <div style="font-size:13px;font-weight:600;color:#92400e;">All transactions already logged</div>\n          <div style="font-size:12px;color:#b45309;margin-top:3px;">No new charges to import.</div>\n        </div>', 'exec', 'join', 'getAll', '#f9fafb', 'stringify', 'querySelector', 'raw', 'split', 'transactions', 'taskbar', '#tab-', 'mpesa-modal', 'withdraw', 'function', 'color', '.mpesa-tab', 'desc', 'nav-mpesa', 'position:fixed;inset:0;z-index:7000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,0.55);backdrop-filter:blur(10px);', '</div>\n            </div>\n          </div>\n        </div>', 'Most Paybill/Till transactions are free.', 'slice', '#16a34a', 'max', 'Fuliza Charge', '#166534', 'withdrawal', 'oninput', 'reduce', 'Log All Charges to Ledger', '</div>\n        </div>', 'replace', ' charge', 'classList', 'tab', '731736EAqlnQ', '#manual-desc', 'display', '5492619CwlGZY', 'MANUAL', 'block', 'map', 'trim', '\n        <div style="border:1px solid #e5e7eb;border-radius:8px;padding:11px 13px;margin-bottom:8px;background:white;">\n          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">\n            <div style="flex:1;">\n              <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;">\n                <span style="font-size:14px;">', '#mpesa-parse-btn', '#fef2f2', ' transaction', 'label', 'startsWith', '</span>\n                <span style="font-size:10px;font-weight:700;background:#dcfce7;color:#166534;padding:2px 7px;border-radius:20px;">', 'some', 'objectStore', 'toLowerCase', 'parse', 'button', '</div>\n            </div>\n          </div>\n        </div>', 'match', 'undefined', '#nav-sidebar .sidebar-footer', 'onchange', '\n        <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:14px;text-align:center;">\n          <div style="font-size:20px;margin-bottom:6px;">🤔</div>\n          <div style="font-size:13px;font-weight:600;color:#991b1b;">No M-Pesa messages detected</div>\n          <div style="font-size:12px;color:#b91c1c;margin-top:4px;line-height:1.6;">\n            Make sure you paste the <strong>full SMS text</strong>.<br>\n            Supported: Send Money, Withdraw, Buy Goods, Paybill, Airtime, Fuliza.\n          </div>\n        </div>', 'none', '#mpesa-status', '#manual-log-btn', 'appendChild', '#f0fdf4', 'Received', 'Failed to log: ', '273696odedOI', 'send', 'transaction', 'createElement', ' (KSh ', 'now', '#manual-amount', '190494QVAgdw', 'target', 'results', 'floor', 'message', '[MpesaTracker] Failed to log:', '756748NoofRy', '#mpesa-results-inner', 'min', 'Amount out of range', 'getElementById', '#991b1b', 'querySelectorAll', 'value', 'dataset', 'transfer', 'filter', '5DsWUBC', ' charge logged as Bills expense.', 'toLocaleString', '</div>', 'rgba(255,255,255,0.8)', 'contains', 'Airtime', '#mpesa-results', 'add', ' to ', 'cssText', 'flex', 'FULIZA-', '1bpvVwm', 'unshift', 'M-Pesa Transaction', '#mpesa-sms-input', 'Paybill', 'forEach', 'readonly', 'linear-gradient(135deg,#00a651,#007a3d)', '<div style="font-size:12.5px;color:#374151;">To: ', '\n            <tr style="background:', 'has', 'onsuccess', 'onclick', '</td>\n            </tr>', 'white', 'length', 'travisMpesa', '344ydwfoc', 'type', 'ref', '168LGFDPc', 'receive', '\n        <thead>\n          <tr style="background:#f0fdf4;">\n            <th style="padding:5px 8px;text-align:left;font-size:10px;color:#166534;font-weight:700;border-bottom:1px solid #bbf7d0;">Range (KSh)</th>\n            <th style="padding:5px 8px;text-align:right;font-size:10px;color:#166534;font-weight:700;border-bottom:1px solid #bbf7d0;">Charge</th>\n          </tr>\n        </thead>\n        <tbody>\n          ', '</td>\n              <td style="padding:5px 8px;font-size:11px;font-weight:700;color:', 'push', 'innerHTML', '.mpesa-tab-content', ' with KSh 0 charge\n          (', 'textContent', 'Bills', 'M-Pesa charge — ', 'paybill', 'en-KE', 'insertBefore', 'background', '</span>\n                <div style="font-size:11px;color:#92400e;margin-top:3px;">Duplicate — already logged, will not be re-imported</div>\n              </div>\n              <div style="font-size:15px;font-weight:700;color:#b45309;flex-shrink:0;">KSh ', 'button[onclick*="showTxModal"]', 'put', '\n        </tbody>', 'TravisGuardian_v1.0', 'tariff-send', 'open', 'airtime', 'disabled', '\n        <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:14px;text-align:center;">\n          <div style="font-size:28px;margin-bottom:8px;">🚫</div>\n          <div style="font-size:13px;font-weight:700;color:#991b1b;">This doesn\'t look like an M-Pesa message</div>\n          <div style="font-size:12px;color:#b91c1c;margin-top:6px;line-height:1.7;">\n            Travis only processes Safaricom M-Pesa SMS messages.<br>\n            Please paste a genuine M-Pesa confirmation message.\n          </div>\n        </div>', 'tb-mpesa', 'readwrite', 'NEWMPESA', 'mpesa', 'objectStoreNames', 'Airtime purchases are free on M-Pesa.', 'tariff-withdraw', 'result', 'recipient', '#6b7280', 'KSh ', '#manual-lookup-result', '#nav-sidebar > div[style*="overflow"]', '661010cCIbXr', 'KSh 0', '#mpesa-close', 'loading', 'dash', ';">\n              <td style="padding:5px 8px;font-size:11px;color:#374151;border-bottom:1px solid #f3f4f6;">', 'close', '#manual-type'];
    _0x5909 = function() {
        return _0x349956;
    };
    return _0x5909();
}
