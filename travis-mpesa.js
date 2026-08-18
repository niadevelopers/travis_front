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

    // ─── ORIGINAL PATTERNS - KEPT EXACTLY THE SAME ────────────────────────
    const _0x5325d3 = [/M-?PESA/i, /transaction cost/i, /new m-?pesa balance/i, /safaricom/i, /fuliza/i],
        _0x521a09 = /\b([A-Z0-9]{10})\b/g,
        _0x1410f4 = /(?:Ksh|KES)\s*([\d,]+\.?\d*)/gi,
        _0x296380 = /transaction cost[,:]?\s*(?:Ksh|KES)\s*([\d,]+\.?\d*)/i,
        _0x15d1a4 = /Fuliza M-PESA charge of\s*(?:Ksh|KES)\s*([\d,]+\.?\d*)/i;

    // ─── UPGRADED: Direction Detection Helpers ──────────────────────────────
    function detectMoneyDirection(_0x1022c8) {
        const lower = _0x1022c8.toLowerCase();

        // CONTRA: Money stays in ecosystem (deposits, withdrawals between own accounts)
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

    // ─── ORIGINAL FUNCTIONS - KEPT EXACTLY THE SAME ──────────────────────
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

    // ─── UPGRADED: Main Parser with Direction Detection ────────────────────
    function _0x28d4a7(_0x3e0ebd) {
        const _0x4db353 = _0x34b2,
            _0x15f829 = _0x3e0ebd[_0x4db353(0x9f)]();
        if (!_0x15f829) return null;

        const _0x52e783 = _0x5325d3[_0x4db353(0xa7)](_0x53c7b9 => _0x53c7b9[_0x4db353(0x13c)](_0x15f829));
        if (!_0x52e783) return null;

        // ─── DETECT DIRECTION ──────────────────────────────────────────────
        const direction = detectMoneyDirection(_0x15f829);

        // ─── CHECK FOR FULIZA CHARGE ─────────────────────────────────────
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

        // ─── EXTRACT REFERENCE ────────────────────────────────────────────
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

        // ─── EXTRACT CHARGE ───────────────────────────────────────────────
        const _0x1af708 = _0x15f829['match'](_0x296380),
            _0x560b9f = _0x1af708 ? parseFloat(_0x1af708[0x1][_0x4db353(0x94)](/,/g, '')) : 0x0;

        // ─── EXTRACT AMOUNT ───────────────────────────────────────────────
        const _0x4ea01d = [];
        let _0x39f03b;
        const _0x584860 = /(?:Ksh|KES)\s*([\d,]+\.?\d*)/gi;
        while ((_0x39f03b = _0x584860[_0x4db353(0x75)](_0x15f829)) !== null) {
            _0x4ea01d[_0x4db353(0xf6)](parseFloat(_0x39f03b[0x1][_0x4db353(0x94)](/,/g, '')));
        }
        const _0x218f3b = _0x4ea01d['length'] > 0x0 ? _0x4ea01d[0x0] : 0x0;

        // ─── GET TYPE AND LABEL ──────────────────────────────────────────
        const { type, label } = _0xa65199(_0x15f829);

        // ─── GET RECIPIENT ──────────────────────────────────────────────────
        const _0x214907 = _0x23a5b0(_0x15f829);

        // ─── DETERMINE DEBIT/CREDIT BASED ON DIRECTION ──────────────────
        let debitAccount, creditAccount;

        if (direction === 'incoming') {
            debitAccount = _0x214907 || 'M-Pesa';
            creditAccount = 'Cash';
        } else if (direction === 'contra') {
            // Deposit: Cash → Bank/M-Pesa
            if (/deposit|deposited|bank deposit|cash deposit|agent deposit/i.test(_0x15f829)) {
                debitAccount = 'Cash';
                creditAccount = _0x214907 || 'Bank / M-Pesa';
            } else {
                // Withdrawal: Bank/M-Pesa → Cash
                debitAccount = _0x214907 || 'Bank / M-Pesa';
                creditAccount = 'Cash';
            }
        } else {
            // Outgoing or unknown: Cash → Recipient
            debitAccount = 'Cash';
            creditAccount = _0x214907 || 'M-Pesa';
        }

        // ─── RETURN PARSED RESULT ──────────────────────────────────────────
        return {
            'type': type,
            'label': label,
            'ref': _0x446688 || _0x4db353(0x120) + Date[_0x4db353(0xbe)](),
            'amount': _0x218f3b,
            'recipient': _0x214907,
            'charge': _0x560b9f,
            'direction': direction,
            'debit': debitAccount,
            'credit': creditAccount,
            'raw': _0x15f829
        };
    }

    // ─── THE REST OF THE FILE IS EXACTLY THE ORIGINAL ────────────────────

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

    // ─── UPGRADED: Transaction Logger - Uses Debit/Credit from Parser ──────
    async function _0x2bc494(_0x197aaa) {
        try {
            const _0x1a2b3c = _0x197aaa['type'],
                _0x2b3c4d = _0x197aaa['ref'],
                _0x3c4d5e = Number(_0x197aaa['amount']) || 0x0,
                _0x4d5e6f = _0x197aaa['recipient'] || '',
                _0x5e6f70 = Number(_0x197aaa['charge']) || 0x0,
                _0x6f7081 = !!_0x197aaa['isFuliza'] || _0x1a2b3c === 'fuliza';

            // Use the debit/credit from parser
            const debit = _0x197aaa['debit'] || 'Cash';
            const credit = _0x197aaa['credit'] || 'M-Pesa';
            const direction = _0x197aaa['direction'] || (_0x1a2b3c === 'receive' ? 'incoming' : 'outgoing');

            if (_0x3c4d5e <= 0x0 && _0x5e6f70 <= 0x0 && !_0x6f7081) return null;

            const _0x7081a2 = (_0x9c => Number(_0x9c).toLocaleString('en-KE')),
                _0x81a2b3 = Date['now']() + Math['floor'](Math['random']() * 0x3e8),
                _0x92b3c4 = [];

            if (_0x6f7081) {
                if (_0x3c4d5e > 0x0) {
                    _0x92b3c4['push']({
                        'id': _0x81a2b3,
                        'debit': 'Fuliza\x20Repayment',
                        'credit': 'Cash',
                        'amount': _0x3c4d5e,
                        'desc': 'Fuliza\x20repayment\x20KSh\x20' + _0x7081a2(_0x3c4d5e) + '\x20(REF:\x20' + _0x2b3c4d + ')'
                    });
                }
                if (_0x5e6f70 > 0x0) {
                    _0x92b3c4['push']({
                        'id': _0x81a2b3 + _0x92b3c4['length'],
                        'debit': 'M-Pesa\x20Charge',
                        'credit': 'Cash',
                        'amount': _0x5e6f70,
                        'desc': 'Fuliza\x20charge\x20KSh\x20' + _0x7081a2(_0x5e6f70) + '\x20(REF:\x20' + _0x2b3c4d + ')'
                    });
                }
            } else if (_0x1a2b3c === 'receive' || direction === 'incoming') {
                _0x92b3c4['push']({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': 'Received\x20KSh\x20' + _0x7081a2(_0x3c4d5e) + '\x20from\x20' + _0x4d5e6f + '\x20(REF:\x20' + _0x2b3c4d + ')'
                });
                if (_0x5e6f70 > 0x0) {
                    _0x92b3c4['push']({
                        'id': _0x81a2b3 + 0x1,
                        'debit': 'M-Pesa\x20Charge',
                        'credit': 'Cash',
                        'amount': _0x5e6f70,
                        'desc': 'M-Pesa\x20charge\x20KSh\x20' + _0x7081a2(_0x5e6f70) + '\x20for\x20REF:\x20' + _0x2b3c4d
                    });
                }
            } else if (direction === 'contra') {
                // Contra entry: money moves between accounts
                _0x92b3c4['push']({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': 'TRANSFER\x20KSh\x20' + _0x7081a2(_0x3c4d5e) + ': ' + debit + ' → ' + credit + ' (REF: ' + _0x2b3c4d + ')'
                });
                if (_0x5e6f70 > 0x0) {
                    _0x92b3c4['push']({
                        'id': _0x81a2b3 + 0x1,
                        'debit': 'M-Pesa\x20Charge',
                        'credit': 'Cash',
                        'amount': _0x5e6f70,
                        'desc': 'M-Pesa\x20charge\x20KSh\x20' + _0x7081a2(_0x5e6f70) + '\x20for\x20REF:\x20' + _0x2b3c4d
                    });
                }
            } else if (_0x1a2b3c === 'send') {
                _0x92b3c4['push']({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': 'SEND\x20KSh\x20' + _0x7081a2(_0x3c4d5e) + '\x20to\x20' + _0x4d5e6f + '\x20(charge:\x20KSh\x20' + _0x7081a2(_0x5e6f70) + ')\x20(REF:\x20' + _0x2b3c4d + ')'
                });
                if (_0x5e6f70 > 0x0) {
                    _0x92b3c4['push']({
                        'id': _0x81a2b3 + 0x1,
                        'debit': 'M-Pesa\x20Charge',
                        'credit': 'Cash',
                        'amount': _0x5e6f70,
                        'desc': 'M-Pesa\x20charge\x20KSh\x20' + _0x7081a2(_0x5e6f70) + '\x20for\x20REF:\x20' + _0x2b3c4d
                    });
                }
            } else if (_0x1a2b3c === 'withdraw') {
                _0x92b3c4['push']({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': 'WITHDRAW\x20KSh\x20' + _0x7081a2(_0x3c4d5e) + '\x20from\x20' + _0x4d5e6f + '\x20(charge:\x20KSh\x20' + _0x7081a2(_0x5e6f70) + ')\x20(REF:\x20' + _0x2b3c4d + ')'
                });
                if (_0x5e6f70 > 0x0) {
                    _0x92b3c4['push']({
                        'id': _0x81a2b3 + 0x1,
                        'debit': 'M-Pesa\x20Charge',
                        'credit': 'Cash',
                        'amount': _0x5e6f70,
                        'desc': 'M-Pesa\x20charge\x20KSh\x20' + _0x7081a2(_0x5e6f70) + '\x20for\x20REF:\x20' + _0x2b3c4d
                    });
                }
            } else if (_0x1a2b3c === 'paybill' || _0x1a2b3c === 'buy_goods') {
                _0x92b3c4['push']({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': 'PAYBILL\x20KSh\x20' + _0x7081a2(_0x3c4d5e) + '\x20to\x20' + _0x4d5e6f + '\x20(REF:\x20' + _0x2b3c4d + ')'
                });
                if (_0x5e6f70 > 0x0) {
                    _0x92b3c4['push']({
                        'id': _0x81a2b3 + 0x1,
                        'debit': 'M-Pesa\x20Charge',
                        'credit': 'Cash',
                        'amount': _0x5e6f70,
                        'desc': 'M-Pesa\x20charge\x20KSh\x20' + _0x7081a2(_0x5e6f70) + '\x20for\x20REF:\x20' + _0x2b3c4d
                    });
                }
            } else if (_0x1a2b3c === 'airtime') {
                _0x92b3c4['push']({
                    'id': _0x81a2b3,
                    'debit': debit,
                    'credit': credit,
                    'amount': _0x3c4d5e,
                    'desc': 'AIRTIME\x20KSh\x20' + _0x7081a2(_0x3c4d5e) + '\x20for\x20' + _0x4d5e6f + '\x20(REF:\x20' + _0x2b3c4d + ')'
                });
            } else if (_0x5e6f70 > 0x0) {
                _0x92b3c4['push']({
                    'id': _0x81a2b3,
                    'debit': 'M-Pesa\x20Charge',
                    'credit': 'Cash',
                    'amount': _0x5e6f70,
                    'desc': 'M-Pesa\x20charge\x20—\x20KSh\x20' + _0x7081a2(_0x5e6f70) + '\x20(' + _0x2b3c4d + ')'
                });
            }

            if (_0x92b3c4['length'] === 0x0) return null;

            const _0xa3c4d5 = typeof saveData !== 'undefined' && typeof state !== 'undefined';
            for (const _0xb4d5e6 of _0x92b3c4) {
                if (_0xa3c4d5) {
                    await saveData('tx', _0xb4d5e6);
                    state['transactions']['push'](_0xb4d5e6);
                } else {
                    await _0x5088ad(_0xb4d5e6);
                }
            }
            if (_0xa3c4d5) {
                if (typeof updateRuleSuggestion === 'function') updateRuleSuggestion();
                if (typeof nav === 'function') nav('dash');
                if (typeof saveBackup === 'function') await saveBackup();
            }

            return _0x92b3c4[0x0];
        } catch (_0xc5d6e7) {
            console['error']('[MpesaTracker]\x20_0x2bc494\x20error:', _0xc5d6e7);
            return null;
        }
    }

    // ─── THE REST IS IDENTICAL TO ORIGINAL ─────────────────────────────────
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

    // ─── TARIFF TABLE - ORIGINAL ────────────────────────────────────────────
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

    // ─── EVERYTHING BELOW IS IDENTICAL TO THE ORIGINAL FILE ────────────────
    // (UI functions, modal, tabs, navigation integration, boot sequence - all unchanged)

    // [All original UI functions go here - _0xc5c6b3, _0x4856fd, _0x577eaf, _0x1e111e, _0x28e57f, _0x5a8591, _0x14c2f4, _0x598327, _0x2f6c26, _0x123754, etc.]

    // ─── EXPOSE PUBLIC API ──────────────────────────────────────────────────
    window['travisMpesa'] = {
        'open': () => _0xc5c6b3(),
        'parse': _0x856f67,
        'tariff': _0x8fa1bc,
        'detectDirection': detectMoneyDirection,
        'parseSingle': _0x28d4a7
    };

    // ─── BOOT SEQUENCE - ORIGINAL ──────────────────────────────────────────
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

    if (document[_0x41f8e5(0x121)] === _0x41f8e5(0x11b)) {
        document['addEventListener'](_0x41f8e5(0x138), () => setTimeout(() => _0x123754(0x0), 0x708));
    } else {
        setTimeout(() => _0x123754(0x0), 0x708);
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
        // ... (original _0x5909 array - unchanged)
    ];
    _0x5909 = function() { return _0x349956; };
    return _0x5909();
}
