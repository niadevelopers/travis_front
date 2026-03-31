function _0x4388(_0xd9b68c, _0x4acd51) {
    _0xd9b68c = _0xd9b68c - 0x8d;
    const _0x308491 = _0x3084();
    let _0x4388f8 = _0x308491[_0xd9b68c];
    return _0x4388f8;
}(function(_0x464b29, _0x527f79) {
    const _0x3e2fbf = _0x4388,
        _0x328981 = _0x464b29();
    while (!![]) {
        try {
            const _0x1f36c8 = -parseInt(_0x3e2fbf(0xba)) / 0x1 + parseInt(_0x3e2fbf(0xf8)) / 0x2 + -parseInt(_0x3e2fbf(0xc2)) / 0x3 + parseInt(_0x3e2fbf(0x11f)) / 0x4 * (-parseInt(_0x3e2fbf(0x8d)) / 0x5) + parseInt(_0x3e2fbf(0x141)) / 0x6 + parseInt(_0x3e2fbf(0xea)) / 0x7 + parseInt(_0x3e2fbf(0xd7)) / 0x8 * (parseInt(_0x3e2fbf(0x117)) / 0x9);
            if (_0x1f36c8 === _0x527f79) break;
            else _0x328981['push'](_0x328981['shift']());
        } catch (_0x5578f7) {
            _0x328981['push'](_0x328981['shift']());
        }
    }
}(_0x3084, 0x33e16), (function() {
    'use strict';
    const _0x327685 = _0x4388;
    const _0x16e096 = [{
        'type': _0x327685(0x11e),
        'label': _0x327685(0xa6),
        'regex': /([A-Z0-9]{10})\s+Confirmed\.\s+Ksh([\d,]+\.?\d*)\s+sent to\s+(.+?)\s+(?:\d{10,}\s+)?on\s+[\d/]+\s+at\s+[\d:]+\s+[AP]M\..*?Transaction cost,\s+Ksh([\d,]+\.?\d*)/i,
        'groups': {
            'ref': 0x1,
            'amount': 0x2,
            'recipient': 0x3,
            'charge': 0x4
        }
    }, {
        'type': _0x327685(0xee),
        'label': _0x327685(0xe4),
        'regex': /([A-Z0-9]{10})\s+Confirmed\.\s+Ksh([\d,]+\.?\d*)\s+paid to\s+(.+?)\.\s+on\s+[\d/]+\s+at\s+[\d:]+\s+[AP]M\..*?Transaction cost,\s+Ksh([\d,]+\.?\d*)/i,
        'groups': {
            'ref': 0x1,
            'amount': 0x2,
            'recipient': 0x3,
            'charge': 0x4
        }
    }, {
        'type': _0x327685(0xd9),
        'label': _0x327685(0x104),
        'regex': /([A-Z0-9]{10})\s+Confirmed\.\s+Ksh([\d,]+\.?\d*)\s+sent to\s+(.+?)\s+for account\s+.+?\s+on\s+[\d/]+\s+at\s+[\d:]+\s+[AP]M\..*?Transaction cost,\s+Ksh([\d,]+\.?\d*)/i,
        'groups': {
            'ref': 0x1,
            'amount': 0x2,
            'recipient': 0x3,
            'charge': 0x4
        }
    }, {
        'type': _0x327685(0x108),
        'label': 'Withdrawal',
        'regex': /([A-Z0-9]{10})\s+Confirmed on\s+[\d/]+\s+at\s+[\d:]+\s+[AP]M\.\s+Withdraw\s+Ksh([\d,]+\.?\d*)\s+from\s+\d+\s*-\s*(.+?)\s+New M-PESA.*?Transaction cost,\s+Ksh([\d,]+\.?\d*)/i,
        'groups': {
            'ref': 0x1,
            'amount': 0x2,
            'recipient': 0x3,
            'charge': 0x4
        }
    }, {
        'type': _0x327685(0x133),
        'label': _0x327685(0x13a),
        'regex': /([A-Z0-9]{10})\s+Confirmed\.\s+You have bought\s+Ksh([\d,]+\.?\d*)\s+of airtime\s+on\s+[\d/]+\s+at\s+[\d:]+\s+[AP]M\..*?Transaction cost,\s+Ksh([\d,]+\.?\d*)/i,
        'groups': {
            'ref': 0x1,
            'amount': 0x2,
            'recipient': null,
            'charge': 0x3
        }
    }, {
        'type': 'receive',
        'label': _0x327685(0xe8),
        'regex': /([A-Z0-9]{10})\s+Confirmed\.\s+You have received\s+Ksh([\d,]+\.?\d*)\s+from\s+(.+?)\s+(?:\d{10,}\s+)?on\s+[\d/]+\s+at\s+[\d:]+\s+[AP]M\./i,
        'groups': {
            'ref': 0x1,
            'amount': 0x2,
            'recipient': 0x3,
            'charge': null
        }
    }, {
        'type': _0x327685(0x10c),
        'label': 'Fuliza\x20Charge',
        'regex': /Fuliza M-PESA charge of\s+Ksh([\d,]+\.?\d*)/i,
        'groups': {
            'charge': 0x1
        },
        'chargeOnly': !![]
    }];

    function _0x54dd3e(_0x367ad5) {
        const _0x28ba7f = _0x327685,
            _0x5f24ee = _0x367ad5['trim']();
        if (!_0x5f24ee) return null;
        for (const _0x179307 of _0x16e096) {
            const _0x4b0720 = _0x5f24ee[_0x28ba7f(0xe9)](_0x179307[_0x28ba7f(0x9f)]);
            if (!_0x4b0720) continue;
            const _0x59dddf = _0x179307[_0x28ba7f(0x12e)];
            if (_0x179307[_0x28ba7f(0x124)]) {
                const _0x3f8132 = parseFloat((_0x4b0720[_0x59dddf['charge']] || '0')[_0x28ba7f(0x130)](/,/g, ''));
                if (_0x3f8132 <= 0x0) return null;
                return {
                    'type': _0x179307[_0x28ba7f(0xac)],
                    'label': _0x179307[_0x28ba7f(0x115)],
                    'ref': _0x28ba7f(0xb8),
                    'amount': 0x0,
                    'recipient': _0x28ba7f(0xed),
                    'charge': _0x3f8132,
                    'raw': _0x5f24ee
                };
            }
            const _0x3ca43f = parseFloat((_0x4b0720[_0x59dddf[_0x28ba7f(0xad)]] || '0')['replace'](/,/g, '')),
                _0x5e5809 = _0x59dddf[_0x28ba7f(0x94)] ? parseFloat((_0x4b0720[_0x59dddf['charge']] || '0')[_0x28ba7f(0x130)](/,/g, '')) : 0x0,
                _0x255c27 = _0x59dddf['ref'] ? _0x4b0720[_0x59dddf[_0x28ba7f(0x102)]] : '',
                _0x102f36 = _0x59dddf[_0x28ba7f(0x10a)] ? _0x4b0720[_0x59dddf[_0x28ba7f(0x10a)]][_0x28ba7f(0xc7)]() : '';
            return {
                'type': _0x179307[_0x28ba7f(0xac)],
                'label': _0x179307[_0x28ba7f(0x115)],
                'ref': _0x255c27[_0x28ba7f(0xc7)](),
                'amount': _0x3ca43f,
                'recipient': _0x102f36,
                'charge': _0x5e5809,
                'raw': _0x5f24ee
            };
        }
        return null;
    }

    function _0x435db7(_0x596e51) {
        const _0x1f9398 = _0x327685,
            _0x2960db = _0x596e51[_0x1f9398(0xbf)](/\n{2,}|(?=[A-Z]{1}[A-Z0-9]{9}\s+Confirmed)/g)[_0x1f9398(0xf0)](_0x1ebd7d => _0x1ebd7d[_0x1f9398(0xc7)]())['filter'](_0x19a304 => _0x19a304['length'] > 0xa),
            _0x407edc = [],
            _0xa06b13 = new Set();
        for (const _0x59ba37 of _0x2960db) {
            const _0x1cf434 = _0x54dd3e(_0x59ba37);
            if (!_0x1cf434) continue;
            if (_0xa06b13[_0x1f9398(0xc3)](_0x1cf434[_0x1f9398(0x102)])) continue;
            _0xa06b13['add'](_0x1cf434[_0x1f9398(0x102)]), _0x407edc[_0x1f9398(0xf7)](_0x1cf434);
        }
        return _0x407edc;
    }

    function _0x16ef2e() {
        return new Promise(_0x4b048b => {
            const _0x115d62 = _0x4388;
            try {
                const _0x495001 = indexedDB['open'](_0x115d62(0x96), 0x1);
                _0x495001[_0x115d62(0xa3)] = _0x1288a1 => {
                    const _0x3cf480 = _0x115d62,
                        _0x2117f0 = _0x1288a1[_0x3cf480(0x137)]['result'];
                    if (!_0x2117f0[_0x3cf480(0xca)]['contains']('tx')) {
                        _0x2117f0[_0x3cf480(0x9a)](), _0x4b048b(new Set());
                        return;
                    }
                    const _0x3347dd = _0x2117f0['transaction']('tx', _0x3cf480(0x113)),
                        _0xff13ab = _0x3347dd[_0x3cf480(0xaa)]('tx'),
                        _0x4c822f = _0xff13ab['getAll']();
                    _0x4c822f['onsuccess'] = () => {
                        const _0x57d53f = _0x3cf480;
                        _0x2117f0['close']();
                        const _0x432e54 = new Set();
                        (_0x4c822f[_0x57d53f(0xfe)] || [])[_0x57d53f(0x14c)](_0x400695 => {
                            const _0x2dd8af = _0x57d53f,
                                _0xdabcf5 = (_0x400695[_0x2dd8af(0xf9)] || '')[_0x2dd8af(0xe9)](/\(([A-Z0-9]{10})\)/);
                            if (_0xdabcf5) _0x432e54[_0x2dd8af(0xf5)](_0xdabcf5[0x1]);
                        }), _0x4b048b(_0x432e54);
                    }, _0x4c822f[_0x3cf480(0x134)] = () => {
                        const _0x14b677 = _0x3cf480;
                        _0x2117f0[_0x14b677(0x9a)](), _0x4b048b(new Set());
                    };
                }, _0x495001[_0x115d62(0x134)] = () => _0x4b048b(new Set());
            } catch (_0x509cad) {
                _0x4b048b(new Set());
            }
        });
    }
    async function _0x18df35(_0x3dacc2) {
        const _0x4ce6c6 = _0x327685;
        if (_0x3dacc2[_0x4ce6c6(0x94)] <= 0x0) return null;
        const _0x1a7501 = _0x4ce6c6(0x95) + _0x3dacc2[_0x4ce6c6(0x115)] + (_0x3dacc2[_0x4ce6c6(0x10a)] ? _0x4ce6c6(0xef) + _0x3dacc2[_0x4ce6c6(0x10a)] : '') + '\x20(' + _0x3dacc2[_0x4ce6c6(0x102)] + ')',
            _0x38b786 = {
                'id': Date[_0x4ce6c6(0xcd)]() + Math[_0x4ce6c6(0xe3)](Math[_0x4ce6c6(0x11b)]() * 0x3e8),
                'debit': _0x4ce6c6(0xbb),
                'credit': _0x4ce6c6(0x109),
                'amount': _0x3dacc2[_0x4ce6c6(0x94)],
                'desc': _0x1a7501
            };
        return typeof saveData === _0x4ce6c6(0xa1) && typeof state !== _0x4ce6c6(0xe1) ? (await saveData('tx', _0x38b786), state[_0x4ce6c6(0xb9)][_0x4ce6c6(0xbe)](_0x38b786)) : await _0x20de86(_0x38b786), _0x38b786;
    }

    function _0x20de86(_0x10405d) {
        return new Promise((_0x3e4b27, _0x3a082c) => {
            const _0xb31f19 = _0x4388,
                _0x24ab15 = indexedDB[_0xb31f19(0xab)](_0xb31f19(0x96), 0x1);
            _0x24ab15[_0xb31f19(0xa3)] = _0x136e49 => {
                const _0x5019c2 = _0xb31f19,
                    _0x10dc2e = _0x136e49[_0x5019c2(0x137)][_0x5019c2(0xfe)],
                    _0x5770f0 = _0x10dc2e[_0x5019c2(0xe0)]('tx', 'readwrite'),
                    _0x3eaff4 = _0x5770f0['objectStore']('tx'),
                    _0x26c128 = _0x3eaff4['put'](_0x10405d);
                _0x26c128[_0x5019c2(0xa3)] = () => {
                    const _0x141b34 = _0x5019c2;
                    _0x10dc2e[_0x141b34(0x9a)](), _0x3e4b27();
                }, _0x26c128['onerror'] = () => {
                    const _0x4736b7 = _0x5019c2;
                    _0x10dc2e[_0x4736b7(0x9a)](), _0x3a082c(_0x26c128[_0x4736b7(0x138)]);
                };
            }, _0x24ab15[_0xb31f19(0x134)] = () => _0x3a082c(_0x24ab15[_0xb31f19(0x138)]);
        });
    }
    const _0x208288 = {
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

    function _0x27cc42(_0xba2870, _0x1adc2d) {
        const _0x21f049 = _0x327685,
            _0x3cc2a1 = _0xba2870 === _0x21f049(0x108) ? _0x208288[_0x21f049(0x108)] : _0x208288[_0x21f049(0x110)],
            _0x2d2de5 = _0x3cc2a1[_0x21f049(0x14f)](_0xfb0167 => _0x1adc2d >= _0xfb0167[_0x21f049(0x12a)] && _0x1adc2d <= _0xfb0167['max']);
        return _0x2d2de5 ? _0x2d2de5[_0x21f049(0x94)] : null;
    }

    function _0xda8165() {
        const _0x2ed888 = _0x327685,
            _0x237fc6 = document['getElementById'](_0x2ed888(0xfc));
        if (_0x237fc6) {
            _0x237fc6[_0x2ed888(0x10f)][_0x2ed888(0x91)] = _0x2ed888(0xda), _0x4d7063();
            return;
        }
        const _0x109b71 = document['createElement'](_0x2ed888(0x11c));
        _0x109b71['id'] = _0x2ed888(0xfc), _0x109b71[_0x2ed888(0x10f)][_0x2ed888(0xf4)] = 'position:fixed;inset:0;z-index:7000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,0.55);backdrop-filter:blur(10px);', _0x109b71['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#ffffff;border-radius:16px;width:100%;max-width:560px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0\x2024px\x2080px\x20rgba(0,0,0,0.25);border:1px\x20solid\x20rgba(0,0,0,0.08);\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Header\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:linear-gradient(135deg,#00a651,#007a3d);padding:20px\x2022px\x2016px;flex-shrink:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;justify-content:space-between;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:40px;height:40px;background:rgba(255,255,255,0.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;\x22>📱</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22color:white;font-size:15px;font-weight:700;letter-spacing:-.01em;\x22>M-Pesa\x20Charge\x20Tracker</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22color:rgba(255,255,255,0.75);font-size:11px;margin-top:1px;\x22>Paste\x20SMS\x20·\x20Extract\x20charges\x20·\x20Auto-log\x20to\x20ledger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22mpesa-close\x22\x20style=\x22background:rgba(255,255,255,0.15);border:none;color:white;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;\x22>×</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Tab\x20bar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;gap:4px;margin-top:14px;background:rgba(0,0,0,0.15);border-radius:8px;padding:3px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22mpesa-tab\x20active\x22\x20data-tab=\x22paste\x22\x20style=\x22flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:white;color:#007a3d;transition:all\x20.15s;\x22>📋\x20Paste\x20SMS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22mpesa-tab\x22\x20data-tab=\x22manual\x22\x20style=\x22flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:rgba(255,255,255,0.8);transition:all\x20.15s;\x22>✏️\x20Manual\x20Entry</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22mpesa-tab\x22\x20data-tab=\x22tariff\x22\x20style=\x22flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:rgba(255,255,255,0.8);transition:all\x20.15s;\x22>📊\x20Tariff\x20Table</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Body\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:1;overflow-y:auto;padding:0;\x22\x20id=\x22mpesa-body\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TAB:\x20Paste\x20SMS\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22tab-paste\x22\x20class=\x22mpesa-tab-content\x22\x20style=\x22padding:18px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#f0fdf4;border:1.5px\x20dashed\x20#86efac;border-radius:10px;padding:14px;margin-bottom:14px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:0\x200\x208px;font-size:12px;font-weight:600;color:#166534;\x22>How\x20to\x20use:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ol\x20style=\x22margin:0;padding-left:18px;font-size:12px;color:#15803d;line-height:1.7;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Open\x20your\x20SMS\x20app\x20→\x20find\x20M-Pesa\x20messages</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Long-press\x20→\x20Copy\x20the\x20full\x20message\x20text</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Paste\x20one\x20or\x20multiple\x20messages\x20below</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Travis\x20extracts\x20charges\x20and\x20logs\x20them\x20instantly</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ol>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em;\x22>Paste\x20M-Pesa\x20SMS\x20Message(s)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22mpesa-sms-input\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20placeholder=\x22Paste\x20your\x20M-Pesa\x20SMS\x20here…&#10;&#10;Example:&#10;QAB3X12345\x20Confirmed.\x20Ksh1,500.00\x20sent\x20to\x20JOHN\x20DOE\x20on\x201/6/25\x20at\x203:45\x20PM.\x20New\x20M-PESA\x20balance\x20is\x20Ksh3,200.00.\x20Transaction\x20cost,\x20Ksh27.00.\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:100%;height:140px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;padding:12px;font-size:12.5px;font-family:inherit;resize:vertical;outline:none;background:#fafafa;line-height:1.6;box-sizing:border-box;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;gap:8px;margin-top:10px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22mpesa-parse-btn\x22\x20style=\x22flex:1;background:#00a651;color:white;border:none;padding:12px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Extract\x20Charges\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22mpesa-clear-btn\x22\x20style=\x22background:#f3f4f6;color:#6b7280;border:none;padding:12px\x2014px;border-radius:8px;font-size:13px;cursor:pointer;font-family:inherit;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Clear\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Results\x20area\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22mpesa-results\x22\x20style=\x22margin-top:14px;display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22mpesa-results-inner\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22mpesa-post-all\x22\x20style=\x22width:100%;background:linear-gradient(135deg,#00a651,#007a3d);color:white;border:none;padding:13px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;margin-top:10px;font-family:inherit;display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20✅\x20Log\x20All\x20Charges\x20to\x20Ledger\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TAB:\x20Manual\x20Entry\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22tab-manual\x22\x20class=\x22mpesa-tab-content\x22\x20style=\x22padding:18px;display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fffbeb;border:1px\x20solid\x20#fde68a;border-radius:8px;padding:12px;margin-bottom:16px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:0;font-size:12px;color:#92400e;line-height:1.6;\x22>Use\x20this\x20when\x20you\x20know\x20the\x20transaction\x20amount\x20but\x20don\x27t\x20have\x20the\x20SMS.\x20Travis\x20will\x20calculate\x20the\x20Safaricom\x20charge\x20from\x20the\x20official\x20tariff.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:grid;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;\x22>Transaction\x20Type</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22manual-type\x22\x20style=\x22width:100%;padding:9px\x2012px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;background:white;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22send\x22>Send\x20Money\x20(to\x20M-Pesa\x20number)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22paybill\x22>Paybill\x20/\x20Till\x20Number</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22withdraw\x22>Agent\x20Withdrawal</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22airtime\x22>Airtime\x20Purchase</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22custom\x22>Custom\x20Charge\x20Amount</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;\x22>Amount\x20Transacted\x20(KSh)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22manual-amount\x22\x20type=\x22number\x22\x20placeholder=\x22e.g.\x202500\x22\x20style=\x22width:100%;padding:9px\x2012px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22manual-charge-row\x22\x20style=\x22display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;\x22>Charge\x20Amount\x20(KSh)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22manual-charge\x22\x20type=\x22number\x22\x20placeholder=\x22e.g.\x2033\x22\x20style=\x22width:100%;padding:9px\x2012px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22manual-lookup-result\x22\x20style=\x22display:none;background:#f0fdf4;border:1px\x20solid\x20#86efac;border-radius:8px;padding:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#166534;font-weight:600;text-transform:uppercase;letter-spacing:.05em;\x22>Safaricom\x20Charge</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22manual-lookup-val\x22\x20style=\x22font-size:22px;font-weight:800;color:#15803d;margin-top:2px;\x22>KSh\x200</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22manual-lookup-note\x22\x20style=\x22font-size:11px;color:#4ade80;margin-top:2px;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;\x22>Description\x20(optional)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22manual-desc\x22\x20type=\x22text\x22\x20placeholder=\x22e.g.\x20Sent\x20rent\x20to\x20landlord\x22\x20style=\x22width:100%;padding:9px\x2012px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22manual-log-btn\x22\x20style=\x22background:#00a651;color:white;border:none;padding:13px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20✅\x20Log\x20This\x20Charge\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TAB:\x20Tariff\x20Table\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22tab-tariff\x22\x20class=\x22mpesa-tab-content\x22\x20style=\x22padding:18px;display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:grid;grid-template-columns:1fr\x201fr;gap:10px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:12px;font-weight:700;color:#166534;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;\x22>📤\x20Send\x20Money</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20style=\x22width:100%;border-collapse:collapse;font-size:11.5px;\x22\x20id=\x22tariff-send\x22></table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:12px;font-weight:700;color:#166534;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;\x22>🏧\x20Withdrawal</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20style=\x22width:100%;border-collapse:collapse;font-size:11.5px;\x22\x20id=\x22tariff-withdraw\x22></table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:12px;background:#f0fdf4;border-radius:8px;padding:10px;font-size:11px;color:#166534;line-height:1.6;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Note:</strong>\x20Buy\x20Goods\x20(Till)\x20and\x20Paybill\x20transactions\x20to\x20most\x20billers\x20are\x20<strong>free</strong>\x20(KSh\x200\x20charge).\x20Airtime\x20purchases\x20are\x20also\x20free.\x20Charges\x20above\x20are\x20per\x20the\x20Safaricom\x20official\x20tariff.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Status\x20bar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22mpesa-status\x22\x20style=\x22padding:10px\x2018px;background:#f9fafb;border-top:1px\x20solid\x20#f0f0f0;font-size:12px;color:#6b7280;display:none;\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', document['body']['appendChild'](_0x109b71), _0x4a812c(_0x109b71), _0x4d7063();
    }

    function _0x4a812c(_0x579063) {
        const _0x287cf0 = _0x327685;
        _0x579063[_0x287cf0(0x142)](_0x287cf0(0xa4))[_0x287cf0(0xc6)] = () => {
            const _0x389d48 = _0x287cf0;
            _0x579063[_0x389d48(0x10f)][_0x389d48(0x91)] = _0x389d48(0xd8);
        }, _0x579063['onclick'] = _0xc6c67d => {
            const _0x4723da = _0x287cf0;
            if (_0xc6c67d[_0x4723da(0x137)] === _0x579063) _0x579063[_0x4723da(0x10f)][_0x4723da(0x91)] = _0x4723da(0xd8);
        }, _0x579063['querySelectorAll'](_0x287cf0(0xfa))[_0x287cf0(0x14c)](_0x4d0b56 => {
            const _0x21bffc = _0x287cf0;
            _0x4d0b56[_0x21bffc(0xc6)] = () => {
                const _0x2b5ebf = _0x21bffc;
                _0x579063['querySelectorAll'](_0x2b5ebf(0xfa))[_0x2b5ebf(0x14c)](_0x1fd956 => {
                    const _0x354ea4 = _0x2b5ebf;
                    _0x1fd956[_0x354ea4(0x10f)]['background'] = _0x354ea4(0x97), _0x1fd956[_0x354ea4(0x10f)][_0x354ea4(0xdb)] = _0x354ea4(0x90);
                }), _0x4d0b56[_0x2b5ebf(0x10f)][_0x2b5ebf(0xce)] = _0x2b5ebf(0x9b), _0x4d0b56['style'][_0x2b5ebf(0xdb)] = '#007a3d';
                const _0x87916 = _0x4d0b56[_0x2b5ebf(0xf1)][_0x2b5ebf(0xdc)];
                _0x579063[_0x2b5ebf(0x116)](_0x2b5ebf(0x144))[_0x2b5ebf(0x14c)](_0x5b9097 => _0x5b9097[_0x2b5ebf(0x10f)][_0x2b5ebf(0x91)] = _0x2b5ebf(0xd8)), _0x579063['querySelector'](_0x2b5ebf(0xfd) + _0x87916)['style'][_0x2b5ebf(0x91)] = _0x2b5ebf(0xfb);
            };
        }), _0x579063['querySelector']('#mpesa-clear-btn')[_0x287cf0(0xc6)] = () => {
            const _0x508b42 = _0x287cf0;
            _0x579063[_0x508b42(0x142)](_0x508b42(0xa8))[_0x508b42(0x9e)] = '', _0x579063['querySelector'](_0x508b42(0xc5))['style']['display'] = _0x508b42(0xd8);
        }, _0x579063['querySelector'](_0x287cf0(0x114))['onclick'] = () => _0x160009(_0x579063), _0x579063[_0x287cf0(0x142)]('#mpesa-post-all')[_0x287cf0(0xc6)] = () => _0x4b164f(_0x579063), _0x579063[_0x287cf0(0x142)](_0x287cf0(0xc4))[_0x287cf0(0xb6)] = () => _0x2a93b4(_0x579063), _0x579063[_0x287cf0(0x142)](_0x287cf0(0xe7))[_0x287cf0(0xe6)] = () => _0x2a93b4(_0x579063), _0x579063[_0x287cf0(0x142)](_0x287cf0(0x140))['onclick'] = () => _0x1ada51(_0x579063);
    }
    async function _0x160009(_0x118d50) {
        const _0x41b438 = _0x327685,
            _0x22b4b5 = _0x118d50[_0x41b438(0x142)](_0x41b438(0x114)),
            _0x6db9d4 = _0x118d50[_0x41b438(0x142)](_0x41b438(0xa8))[_0x41b438(0x9e)],
            _0x4a8751 = _0x118d50[_0x41b438(0x142)]('#mpesa-results'),
            _0x2d433e = _0x118d50['querySelector'](_0x41b438(0x12b)),
            _0x11b3d0 = _0x118d50[_0x41b438(0x142)](_0x41b438(0x118));
        _0x22b4b5[_0x41b438(0x13f)] = _0x41b438(0x13e), _0x22b4b5[_0x41b438(0xbd)] = !![];
        const _0x2979a7 = await _0x16ef2e();
        _0x22b4b5[_0x41b438(0x13f)] = _0x41b438(0xd6), _0x22b4b5['disabled'] = ![];
        const _0x205d63 = _0x435db7(_0x6db9d4);
        if (_0x205d63[_0x41b438(0x147)] === 0x0) {
            _0x2d433e[_0x41b438(0x99)] = _0x41b438(0x14d), _0x4a8751[_0x41b438(0x10f)]['display'] = _0x41b438(0xfb), _0x11b3d0[_0x41b438(0x10f)]['display'] = _0x41b438(0xd8);
            return;
        }
        const _0x12cfed = _0x205d63[_0x41b438(0x112)](_0x17ef39 => _0x17ef39[_0x41b438(0x94)] > 0x0 && !_0x2979a7[_0x41b438(0xc3)](_0x17ef39[_0x41b438(0x102)])),
            _0x40fa2a = _0x205d63['filter'](_0x2bf744 => _0x2bf744['charge'] > 0x0 && _0x2979a7['has'](_0x2bf744[_0x41b438(0x102)])),
            _0xfa34ff = _0x205d63[_0x41b438(0x112)](_0xd4e619 => _0xd4e619['charge'] === 0x0);
        let _0x15b660 = '';
        if (_0x12cfed[_0x41b438(0x147)] > 0x0) {
            const _0x2eb6ee = _0x12cfed[_0x41b438(0x143)]((_0x50e9da, _0x1fd25a) => _0x50e9da + _0x1fd25a[_0x41b438(0x94)], 0x0);
            _0x15b660 += _0x41b438(0x129) + _0x2eb6ee[_0x41b438(0xb5)]('en-KE') + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#4ade80;text-align:right;\x22>' + _0x12cfed[_0x41b438(0x147)] + _0x41b438(0x120) + (_0x12cfed[_0x41b438(0x147)] !== 0x1 ? 's' : '') + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>';
        }
        _0x12cfed[_0x41b438(0x14c)](_0x322270 => {
            const _0x2a40fc = _0x41b438;
            _0x15b660 += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border:1px\x20solid\x20#e5e7eb;border-radius:8px;padding:11px\x2013px;margin-bottom:8px;background:white;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:space-between;align-items:flex-start;gap:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:1;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:6px;margin-bottom:3px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:10px;font-weight:700;background:#dcfce7;color:#166534;padding:2px\x207px;border-radius:20px;\x22>' + _0x322270[_0x2a40fc(0x115)][_0x2a40fc(0x119)]() + _0x2a40fc(0x123) + _0x322270[_0x2a40fc(0x102)] + _0x2a40fc(0xb7) + (_0x322270[_0x2a40fc(0x10a)] ? _0x2a40fc(0x103) + _0x322270[_0x2a40fc(0x10a)] : '') + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#6b7280;margin-top:2px;\x22>Amount:\x20KSh\x20' + _0x322270[_0x2a40fc(0xad)][_0x2a40fc(0xb5)](_0x2a40fc(0xd1)) + _0x2a40fc(0xd3) + _0x322270[_0x2a40fc(0x94)]['toLocaleString'](_0x2a40fc(0xd1)) + _0x2a40fc(0xc9);
        }), _0x40fa2a[_0x41b438(0x147)] > 0x0 && (_0x15b660 += _0x41b438(0x145), _0x40fa2a[_0x41b438(0x14c)](_0x3670e1 => {
            const _0x36e6ea = _0x41b438;
            _0x15b660 += _0x36e6ea(0xf3) + _0x3670e1[_0x36e6ea(0x115)][_0x36e6ea(0x119)]() + _0x36e6ea(0xcb) + _0x3670e1[_0x36e6ea(0x102)] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#92400e;margin-top:3px;\x22>Duplicate\x20—\x20already\x20logged,\x20will\x20not\x20be\x20re-imported</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:15px;font-weight:700;color:#b45309;flex-shrink:0;\x22>KSh\x20' + _0x3670e1[_0x36e6ea(0x94)][_0x36e6ea(0xb5)](_0x36e6ea(0xd1)) + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';
        })), _0xfa34ff['length'] > 0x0 && (_0x15b660 += _0x41b438(0x13c) + _0xfa34ff['length'] + _0x41b438(0x127) + (_0xfa34ff[_0x41b438(0x147)] !== 0x1 ? 's' : '') + '\x20with\x20KSh\x200\x20charge\x20(' + _0xfa34ff[_0x41b438(0xf0)](_0x40d96e => _0x40d96e[_0x41b438(0x115)])['join'](',\x20') + _0x41b438(0xa9)), _0x12cfed[_0x41b438(0x147)] === 0x0 && _0x205d63['length'] > 0x0 && (_0x15b660 += _0x41b438(0x11d)), _0x2d433e['innerHTML'] = _0x15b660, _0x4a8751[_0x41b438(0x10f)][_0x41b438(0x91)] = _0x41b438(0xfb), _0x11b3d0[_0x41b438(0x10f)]['display'] = _0x12cfed[_0x41b438(0x147)] > 0x0 ? 'block' : _0x41b438(0xd8), _0x11b3d0[_0x41b438(0xf1)]['results'] = JSON['stringify'](_0x12cfed);
    }
    async function _0x4b164f(_0x3cb5e0) {
        const _0x232e73 = _0x327685,
            _0x282fe2 = _0x3cb5e0[_0x232e73(0x142)](_0x232e73(0x118)),
            _0x316cfb = JSON['parse'](_0x282fe2[_0x232e73(0xf1)][_0x232e73(0xd5)] || '[]');
        if (_0x316cfb['length'] === 0x0) return;
        _0x282fe2[_0x232e73(0xbd)] = !![], _0x282fe2[_0x232e73(0x13f)] = _0x232e73(0x10b);
        let _0x50c011 = 0x0,
            _0x1d4831 = 0x0;
        for (const _0x23bfaa of _0x316cfb) {
            try {
                await new Promise(_0xfa62e1 => setTimeout(_0xfa62e1, 0x1e));
                const _0x24e688 = await _0x18df35(_0x23bfaa);
                _0x24e688 && (_0x50c011++, _0x1d4831 += _0x23bfaa['charge']);
            } catch (_0x9c33aa) {
                console[_0x232e73(0x138)](_0x232e73(0xb1), _0x23bfaa[_0x232e73(0x102)], _0x9c33aa);
            }
        }
        if (typeof saveBackup === _0x232e73(0xa1)) try {
            await saveBackup();
        } catch (_0x245109) {}
        if (typeof nav === _0x232e73(0xa1)) try {
            nav(_0x232e73(0xaf));
        } catch (_0x676495) {}
        _0x2bd446(_0x3cb5e0, '✅\x20' + _0x50c011 + _0x232e73(0x14e) + (_0x50c011 !== 0x1 ? 's' : '') + '\x20(KSh\x20' + _0x1d4831['toLocaleString'](_0x232e73(0xd1)) + _0x232e73(0xcf)), _0x282fe2[_0x232e73(0x13f)] = '✅\x20' + _0x50c011 + _0x232e73(0x148) + (_0x50c011 !== 0x1 ? 's' : '') + _0x232e73(0xc8), _0x282fe2[_0x232e73(0x10f)][_0x232e73(0xce)] = '#166534', _0x282fe2[_0x232e73(0xbd)] = ![], setTimeout(() => {
            const _0x516a7f = _0x232e73;
            _0x3cb5e0[_0x516a7f(0x142)](_0x516a7f(0xa8))[_0x516a7f(0x9e)] = '', _0x3cb5e0[_0x516a7f(0x142)](_0x516a7f(0xc5))[_0x516a7f(0x10f)][_0x516a7f(0x91)] = _0x516a7f(0xd8), _0x282fe2['textContent'] = '✅\x20Log\x20All\x20Charges\x20to\x20Ledger', _0x282fe2[_0x516a7f(0x10f)]['background'] = _0x516a7f(0xec), _0x282fe2[_0x516a7f(0x10f)][_0x516a7f(0x91)] = _0x516a7f(0xd8);
        }, 0xbb8);
    }

    function _0x2a93b4(_0x337034) {
        const _0x580db4 = _0x327685,
            _0x424fed = _0x337034['querySelector'](_0x580db4(0xc4))['value'],
            _0xdaf958 = parseFloat(_0x337034[_0x580db4(0x142)]('#manual-amount')['value']) || 0x0,
            _0x8774ce = _0x337034['querySelector'](_0x580db4(0x101)),
            _0x17ac8b = _0x337034[_0x580db4(0x142)]('#manual-lookup-result'),
            _0x18ea39 = _0x337034[_0x580db4(0x142)]('#manual-lookup-val'),
            _0x25d09e = _0x337034[_0x580db4(0x142)]('#manual-lookup-note');
        if (_0x424fed === _0x580db4(0x131)) {
            _0x8774ce['style'][_0x580db4(0x91)] = _0x580db4(0xfb), _0x17ac8b['style'][_0x580db4(0x91)] = _0x580db4(0xd8);
            return;
        }
        _0x8774ce[_0x580db4(0x10f)]['display'] = _0x580db4(0xd8);
        if (_0xdaf958 <= 0x0) {
            _0x17ac8b['style'][_0x580db4(0x91)] = 'none';
            return;
        }
        if (_0x424fed === _0x580db4(0xd9) || _0x424fed === _0x580db4(0x133)) {
            _0x17ac8b[_0x580db4(0x10f)][_0x580db4(0x91)] = _0x580db4(0xfb), _0x18ea39[_0x580db4(0x13f)] = _0x580db4(0xbc), _0x25d09e['textContent'] = _0x424fed === _0x580db4(0xd9) ? _0x580db4(0x14b) : 'Airtime\x20purchases\x20are\x20free\x20on\x20M-Pesa.';
            return;
        }
        const _0x5abd8d = _0x27cc42(_0x424fed === _0x580db4(0x108) ? _0x580db4(0x108) : _0x580db4(0x110), _0xdaf958);
        if (_0x5abd8d === null) {
            _0x17ac8b[_0x580db4(0x10f)][_0x580db4(0x91)] = 'block', _0x18ea39[_0x580db4(0x13f)] = _0x580db4(0x107), _0x25d09e['textContent'] = '';
            return;
        }
        _0x17ac8b['style'][_0x580db4(0x91)] = 'block', _0x18ea39[_0x580db4(0x13f)] = _0x580db4(0xdd) + _0x5abd8d[_0x580db4(0xb5)](_0x580db4(0xd1)), _0x25d09e[_0x580db4(0x13f)] = 'Official\x20tariff\x20for\x20KSh\x20' + _0xdaf958[_0x580db4(0xb5)](_0x580db4(0xd1)) + '\x20' + (_0x424fed === _0x580db4(0x108) ? _0x580db4(0x10e) : _0x580db4(0x146));
    }
    async function _0x1ada51(_0x53a886) {
        const _0x48c462 = _0x327685,
            _0x25938b = _0x53a886[_0x48c462(0x142)](_0x48c462(0xc4))[_0x48c462(0x9e)],
            _0x331ff2 = parseFloat(_0x53a886[_0x48c462(0x142)](_0x48c462(0xe7))['value']) || 0x0,
            _0x378261 = _0x53a886['querySelector']('#manual-desc')[_0x48c462(0x9e)][_0x48c462(0xc7)]() || _0x48c462(0x8f),
            _0x6d0b08 = _0x53a886['querySelector'](_0x48c462(0x140));
        let _0x1cb463 = 0x0;
        if (_0x25938b === _0x48c462(0x131)) _0x1cb463 = parseFloat(_0x53a886[_0x48c462(0x142)](_0x48c462(0x122))[_0x48c462(0x9e)]) || 0x0;
        else _0x25938b === _0x48c462(0xd9) || _0x25938b === _0x48c462(0x133) ? _0x1cb463 = 0x0 : _0x1cb463 = _0x27cc42(_0x25938b === _0x48c462(0x108) ? _0x48c462(0x108) : 'send', _0x331ff2) || 0x0;
        if (_0x1cb463 <= 0x0) {
            _0x2bd446(_0x53a886, _0x48c462(0xf2));
            return;
        }
        _0x6d0b08[_0x48c462(0xbd)] = !![], _0x6d0b08[_0x48c462(0x13f)] = _0x48c462(0x10b);
        const _0xb8a252 = {
                'send': 'Send\x20Money',
                'paybill': 'Paybill',
                'withdraw': _0x48c462(0x125),
                'airtime': _0x48c462(0x13a),
                'custom': 'M-Pesa'
            },
            _0x255d99 = {
                'type': _0x25938b,
                'label': _0xb8a252[_0x25938b] || _0x48c462(0x109),
                'ref': 'MANUAL',
                'amount': _0x331ff2,
                'recipient': _0x378261,
                'charge': _0x1cb463
            };
        try {
            await _0x18df35(_0x255d99);
            if (typeof saveBackup === _0x48c462(0xa1)) try {
                await saveBackup();
            } catch (_0x3e84df) {}
            if (typeof nav === _0x48c462(0xa1)) try {
                nav('dash');
            } catch (_0x595672) {}
            _0x2bd446(_0x53a886, _0x48c462(0xff) + _0x1cb463 + _0x48c462(0xc0)), _0x53a886[_0x48c462(0x142)]('#manual-amount')[_0x48c462(0x9e)] = '', _0x53a886[_0x48c462(0x142)]('#manual-desc')[_0x48c462(0x9e)] = '', _0x53a886[_0x48c462(0x142)]('#manual-lookup-result')[_0x48c462(0x10f)][_0x48c462(0x91)] = _0x48c462(0xd8);
        } catch (_0xf72597) {
            _0x2bd446(_0x53a886, _0x48c462(0x92) + _0xf72597[_0x48c462(0xd4)]);
        }
        _0x6d0b08[_0x48c462(0xbd)] = ![], _0x6d0b08[_0x48c462(0x13f)] = _0x48c462(0xc1);
    }

    function _0x4d7063() {
        const _0x3007f7 = _0x327685,
            _0x3eebca = (_0x494080, _0x5c9d01) => {
                const _0x4cd77b = _0x4388;
                if (!_0x494080) return;
                _0x494080['innerHTML'] = _0x4cd77b(0xb0) + _0x5c9d01[_0x4cd77b(0xf0)]((_0x1cf5d1, _0x821e74) => _0x4cd77b(0xdf) + (_0x821e74 % 0x2 === 0x0 ? 'white' : _0x4cd77b(0x139)) + ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22padding:5px\x208px;font-size:11px;color:#374151;border-bottom:1px\x20solid\x20#f3f4f6;\x22>' + _0x1cf5d1[_0x4cd77b(0x12a)][_0x4cd77b(0xb5)]() + '–' + _0x1cf5d1[_0x4cd77b(0x13b)][_0x4cd77b(0xb5)]() + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22padding:5px\x208px;font-size:11px;font-weight:700;color:' + (_0x1cf5d1[_0x4cd77b(0x94)] === 0x0 ? '#16a34a' : _0x4cd77b(0x149)) + _0x4cd77b(0x126) + _0x1cf5d1['charge'] + _0x4cd77b(0xde))[_0x4cd77b(0x121)]('') + _0x4cd77b(0xa7);
            };
        _0x3eebca(document[_0x3007f7(0xd2)](_0x3007f7(0x93)), _0x208288['send']), _0x3eebca(document[_0x3007f7(0xd2)](_0x3007f7(0x13d)), _0x208288[_0x3007f7(0x108)]);
    }

    function _0x2bd446(_0x230c2c, _0x4427d4) {
        const _0x3d1f64 = _0x327685,
            _0x387d5d = _0x230c2c[_0x3d1f64(0x142)]('#mpesa-status');
        if (!_0x387d5d) return;
        _0x387d5d[_0x3d1f64(0x13f)] = _0x4427d4, _0x387d5d[_0x3d1f64(0x10f)][_0x3d1f64(0x91)] = _0x3d1f64(0xfb), _0x387d5d[_0x3d1f64(0x10f)][_0x3d1f64(0xdb)] = _0x4427d4[_0x3d1f64(0xcc)]('✅') ? _0x3d1f64(0x135) : _0x4427d4['startsWith']('❌') ? _0x3d1f64(0x11a) : _0x3d1f64(0xf6), _0x387d5d[_0x3d1f64(0x10f)][_0x3d1f64(0xce)] = _0x4427d4['startsWith']('✅') ? _0x3d1f64(0x106) : _0x4427d4[_0x3d1f64(0xcc)]('❌') ? _0x3d1f64(0x12f) : _0x3d1f64(0x139);
    }
    window[_0x327685(0xa2)] = {
        'open': () => _0xda8165(),
        'parse': _0x435db7,
        'tariff': _0x27cc42
    };

    function _0x3649c1() {
        const _0x590181 = _0x327685,
            _0xc472cc = document[_0x590181(0x142)](_0x590181(0xe5));
        if (_0xc472cc && !document[_0x590181(0xd2)]('nav-mpesa')) {
            const _0x3ebdab = document['querySelector'](_0x590181(0x132));
            if (_0x3ebdab) {
                const _0x41fd6b = document[_0x590181(0xa0)](_0x590181(0x8e));
                _0x41fd6b['id'] = _0x590181(0x105), _0x41fd6b['className'] = _0x590181(0xa5), _0x41fd6b[_0x590181(0x99)] = _0x590181(0xb4), _0x41fd6b[_0x590181(0xc6)] = () => {
                    const _0x45f0b3 = _0x590181;
                    window['travisMpesa'][_0x45f0b3(0xab)](), document[_0x45f0b3(0xd2)](_0x45f0b3(0x128))[_0x45f0b3(0x100)][_0x45f0b3(0x111)]('mobile-open');
                };
                const _0x561a55 = _0x3ebdab[_0x590181(0x142)](_0x590181(0xae));
                _0x561a55 && _0x561a55['nextSibling'] ? _0x3ebdab[_0x590181(0x12d)](_0x41fd6b, _0x561a55[_0x590181(0xe2)]) : _0x3ebdab[_0x590181(0xb2)](_0x41fd6b);
            }
        }
        const _0x49c71f = document[_0x590181(0xd2)]('taskbar'),
            _0x54b4a5 = document[_0x590181(0xd2)](_0x590181(0x9d));
        if (_0x49c71f && _0x54b4a5 && !document[_0x590181(0xd2)](_0x590181(0x98))) {
            const _0x33c6a4 = document[_0x590181(0xa0)](_0x590181(0x8e));
            _0x33c6a4['id'] = 'tb-mpesa', _0x33c6a4[_0x590181(0x14a)] = 'taskbar-btn', _0x33c6a4[_0x590181(0xb3)] = _0x590181(0xeb), _0x33c6a4[_0x590181(0x13f)] = '📱', _0x33c6a4[_0x590181(0xc6)] = () => window[_0x590181(0xa2)]['open'](), _0x49c71f[_0x590181(0x12d)](_0x33c6a4, _0x54b4a5);
        }
    }

    function _0x32d1be(_0x40a5d6) {
        const _0x51b1e2 = _0x327685;
        if (_0x40a5d6 > 0x14) return;
        const _0x39f6f5 = document[_0x51b1e2(0xd2)](_0x51b1e2(0x128)) && document[_0x51b1e2(0xd2)](_0x51b1e2(0xd0));
        _0x39f6f5 ? _0x3649c1() : setTimeout(() => _0x32d1be(_0x40a5d6 + 0x1), 0x1f4);
    }
    document[_0x327685(0x136)] === _0x327685(0x10d) ? document[_0x327685(0x12c)](_0x327685(0x9c), () => setTimeout(() => _0x32d1be(0x0), 0x708)) : setTimeout(() => _0x32d1be(0x0), 0x708);
}()));

function _0x3084() {
    const _0xaac595 = ['floor', 'Buy\x20Goods', '#nav-sidebar\x20.sidebar-footer', 'oninput', '#manual-amount', 'Received', 'match', '2354961hFEdrl', 'M-Pesa\x20Charges', 'linear-gradient(135deg,#00a651,#007a3d)', 'Fuliza\x20M-PESA', 'buy_goods', '\x20to\x20', 'map', 'dataset', 'ℹ️\x20This\x20transaction\x20type\x20has\x20no\x20charge\x20—\x20nothing\x20to\x20log.', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border:1px\x20solid\x20#fde68a;border-radius:8px;padding:9px\x2013px;margin-bottom:6px;background:#fffbeb;opacity:0.8;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:space-between;align-items:center;gap:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:10px;font-weight:700;background:#fef3c7;color:#92400e;padding:2px\x207px;border-radius:20px;\x22>', 'cssText', 'add', '#6b7280', 'push', '455838ACZcvR', 'desc', '.mpesa-tab', 'block', 'mpesa-modal', '#tab-', 'result', '✅\x20KSh\x20', 'classList', '#manual-charge-row', 'ref', 'To:\x20', 'Paybill', 'nav-mpesa', '#f0fdf4', 'Amount\x20out\x20of\x20range', 'withdraw', 'M-Pesa', 'recipient', 'Logging…', 'fuliza', 'loading', 'withdrawal', 'style', 'send', 'remove', 'filter', 'readonly', '#mpesa-parse-btn', 'label', 'querySelectorAll', '9tMYRDQ', '#mpesa-post-all', 'toUpperCase', '#991b1b', 'random', 'div', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fffbeb;border:1px\x20solid\x20#fde68a;border-radius:8px;padding:12px;text-align:center;margin-top:6px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:600;color:#92400e;\x22>All\x20transactions\x20already\x20logged</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:12px;color:#b45309;margin-top:3px;\x22>No\x20new\x20charges\x20to\x20import.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'send_money', '4XdWRpT', '\x20new\x20transaction', 'join', '#manual-charge', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:10px;color:#9ca3af;font-family:monospace;\x22>', 'chargeOnly', 'Withdrawal', ';text-align:right;border-bottom:1px\x20solid\x20#f3f4f6;\x22>KSh\x20', '\x20transaction', 'nav-sidebar', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#f0fdf4;border:1px\x20solid\x20#86efac;border-radius:8px;padding:10px\x2014px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;font-weight:600;color:#166534;text-transform:uppercase;letter-spacing:.05em;\x22>Total\x20New\x20Charges</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:20px;font-weight:800;color:#15803d;\x22>KSh\x20', 'min', '#mpesa-results-inner', 'addEventListener', 'insertBefore', 'groups', '#fef2f2', 'replace', 'custom', '#nav-sidebar\x20>\x20div[style*=\x22overflow\x22]', 'airtime', 'onerror', '#166534', 'readyState', 'target', 'error', '#f9fafb', 'Airtime', 'max', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#9ca3af;padding:6px\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'tariff-withdraw', '⏳\x20Checking…', 'textContent', '#manual-log-btn', '82836ZzntWD', 'querySelector', 'reduce', '.mpesa-tab-content', '<div\x20style=\x22font-size:11px;font-weight:600;color:#92400e;margin:10px\x200\x206px;text-transform:uppercase;letter-spacing:.05em;\x22>⚠️\x20Already\x20in\x20ledger\x20—\x20skipped</div>', 'transfer', 'length', '\x20Charge', '#dc2626', 'className', 'Most\x20Paybill/Till\x20transactions\x20are\x20free.', 'forEach', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fef2f2;border:1px\x20solid\x20#fecaca;border-radius:8px;padding:14px;text-align:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:20px;margin-bottom:6px;\x22>🤔</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:600;color:#991b1b;\x22>No\x20M-Pesa\x20messages\x20detected</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:12px;color:#b91c1c;margin-top:4px;line-height:1.6;\x22>Make\x20sure\x20you\x20paste\x20the\x20full\x20SMS\x20text\x20including\x20the\x20reference\x20code\x20(e.g.\x20QAB3X12345)\x20and\x20\x22Transaction\x20cost\x22\x20line.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', '\x20charge', 'find', '1153755sZoPmC', 'button', 'M-Pesa\x20transaction\x20charge', 'rgba(255,255,255,0.8)', 'display', '❌\x20Failed\x20to\x20log:\x20', 'tariff-send', 'charge', 'M-Pesa\x20charge\x20—\x20', 'TravisGuardian_v1.0', 'transparent', 'tb-mpesa', 'innerHTML', 'close', 'white', 'DOMContentLoaded', 'taskbar-clock', 'value', 'regex', 'createElement', 'function', 'travisMpesa', 'onsuccess', '#mpesa-close', 'nav-item', 'Send\x20Money', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tbody>', '#mpesa-sms-input', ')\x20—\x20nothing\x20to\x20log.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'objectStore', 'open', 'type', 'amount', 'button[onclick*=\x22showTxModal\x22]', 'dash', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22background:#f0fdf4;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22padding:5px\x208px;text-align:left;font-size:10px;color:#166534;font-weight:700;border-bottom:1px\x20solid\x20#bbf7d0;\x22>Range\x20(KSh)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22padding:5px\x208px;text-align:right;font-size:10px;color:#166534;font-weight:700;border-bottom:1px\x20solid\x20#bbf7d0;\x22>Charge</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[MpesaTracker]\x20Failed\x20to\x20log:', 'appendChild', 'title', '<span\x20class=\x22nav-icon\x22>📱</span>\x20M-Pesa\x20Charges', 'toLocaleString', 'onchange', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:12.5px;color:#374151;\x22>', 'FULIZA', 'transactions', '251483pvctIf', 'Bills', 'KSh\x200', 'disabled', 'unshift', 'split', '\x20charge\x20logged\x20as\x20Bills\x20expense.', '✅\x20Log\x20This\x20Charge', '7899WWNQse', 'has', '#manual-type', '#mpesa-results', 'onclick', 'trim', '\x20Logged!', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'objectStoreNames', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:10px;color:#b45309;font-family:monospace;margin-left:6px;\x22>', 'startsWith', 'now', 'background', ')\x20logged\x20to\x20your\x20ledger\x20as\x20Bills\x20expenses.', 'taskbar', 'en-KE', 'getElementById', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:right;flex-shrink:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#6b7280;\x22>Charge</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:17px;font-weight:800;color:#dc2626;\x22>KSh\x20', 'message', 'results', '🔍\x20Extract\x20Charges', '953768JlurHU', 'none', 'paybill', 'flex', 'color', 'tab', 'KSh\x20', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22background:', 'transaction', 'undefined', 'nextSibling'];
    _0x3084 = function() {
        return _0xaac595;
    };
    return _0x3084();
}
