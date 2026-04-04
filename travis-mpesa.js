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

    function _0x28d4a7(_0x3e0ebd) {
        const _0x4db353 = _0x34b2,
            _0x15f829 = _0x3e0ebd[_0x4db353(0x9f)]();
        if (!_0x15f829) return null;
        const _0x52e783 = _0x5325d3[_0x4db353(0xa7)](_0x53c7b9 => _0x53c7b9[_0x4db353(0x13c)](_0x15f829));
        if (!_0x52e783) return null;
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
                label: _0x2b61f0
            } = _0xa65199(_0x15f829);
        if (_0x13e39a === 'receive') return {
            'type': _0x13e39a,
            'label': _0x2b61f0,
            'ref': _0x446688,
            'amount': _0x218f3b,
            'recipient': _0x23a5b0(_0x15f829),
            'charge': 0x0,
            'raw': _0x15f829
        };
        const _0x214907 = _0x23a5b0(_0x15f829);
        return {
            'type': _0x13e39a,
            'label': _0x2b61f0,
            'ref': _0x446688 || _0x4db353(0x120) + Date[_0x4db353(0xbe)](),
            'amount': _0x218f3b,
            'recipient': _0x214907,
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
        const _0x3b25b6 = _0x34b2;
        if (_0x197aaa[_0x3b25b6(0x12b)] <= 0x0) return null;
        const _0x23367b = _0x3b25b6(0xfc) + _0x197aaa[_0x3b25b6(0xa4)] + (_0x197aaa[_0x3b25b6(0x113)] ? _0x3b25b6(0xda) + _0x197aaa[_0x3b25b6(0x113)] : '') + '\x20(' + _0x197aaa[_0x3b25b6(0xf1)] + ')',
            _0x35518e = {
                'id': Date['now']() + Math[_0x3b25b6(0xc3)](Math[_0x3b25b6(0x13e)]() * 0x3e8),
                'debit': _0x3b25b6(0xfb),
                'credit': _0x3b25b6(0x146),
                'amount': _0x197aaa[_0x3b25b6(0x12b)],
                'desc': _0x23367b
            };
        return typeof saveData === _0x3b25b6(0x82) && typeof state !== _0x3b25b6(0xae) ? (await saveData('tx', _0x35518e), state[_0x3b25b6(0x7d)][_0x3b25b6(0xdf)](_0x35518e)) : await _0x5088ad(_0x35518e), _0x35518e;
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
        const _0x2fc50a = _0x44895c['filter'](_0x58c29a => _0x58c29a[_0x4380de(0x12b)] > 0x0 && !_0x477c0d['has'](_0x58c29a[_0x4380de(0xf1)])),
            _0x15bd5d = _0x44895c[_0x4380de(0xd0)](_0x4697f1 => _0x4697f1['charge'] > 0x0 && _0x477c0d[_0x4380de(0xe8)](_0x4697f1[_0x4380de(0xf1)])),
            _0x368772 = _0x44895c[_0x4380de(0xd0)](_0x4044bc => _0x4044bc[_0x4380de(0x12b)] === 0x0);
        let _0x41b3dc = '';
        if (_0x2fc50a[_0x4380de(0xed)] > 0x0) {
            const _0x2f0f7c = _0x2fc50a[_0x4380de(0x91)]((_0xc59697, _0x2c4605) => _0xc59697 + _0x2c4605[_0x4380de(0x12b)], 0x0);
            _0x41b3dc += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#f0fdf4;border:1px\x20solid\x20#86efac;border-radius:8px;padding:10px\x2014px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;font-weight:600;color:#166534;text-transform:uppercase;letter-spacing:.05em;\x22>Total\x20New\x20Charges</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:20px;font-weight:800;color:#15803d;\x22>KSh\x20' + _0x2f0f7c[_0x4380de(0xd3)](_0x4380de(0xfe)) + _0x4380de(0x142) + _0x2fc50a[_0x4380de(0xed)] + '\x20new\x20transaction' + (_0x2fc50a[_0x4380de(0xed)] !== 0x1 ? 's' : '') + _0x4380de(0x93);
        }
        _0x2fc50a[_0x4380de(0xe3)](_0x32e0cd => {
            const _0x3b44c3 = _0x4380de,
                _0x17e273 = _0x1487e6[_0x32e0cd[_0x3b44c3(0xf0)]] || '📱';
            _0x41b3dc += _0x3b44c3(0xa0) + _0x17e273 + _0x3b44c3(0xa6) + _0x32e0cd[_0x3b44c3(0xa4)][_0x3b44c3(0x139)]() + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:10px;color:#9ca3af;font-family:monospace;\x22>' + _0x32e0cd[_0x3b44c3(0xf1)] + _0x3b44c3(0x126) + (_0x32e0cd[_0x3b44c3(0x113)] ? _0x3b44c3(0xe6) + _0x32e0cd['recipient'] + _0x3b44c3(0xd4) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x32e0cd['amount'] ? '<div\x20style=\x22font-size:11px;color:#6b7280;margin-top:2px;\x22>Amount:\x20KSh\x20' + _0x32e0cd[_0x3b44c3(0x124)][_0x3b44c3(0xd3)](_0x3b44c3(0xfe)) + '</div>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:right;flex-shrink:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#6b7280;\x22>Charge</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:17px;font-weight:800;color:#dc2626;\x22>KSh\x20' + _0x32e0cd['charge'][_0x3b44c3(0xd3)](_0x3b44c3(0xfe)) + _0x3b44c3(0x88);
        }), _0x15bd5d[_0x4380de(0xed)] > 0x0 && (_0x41b3dc += '<div\x20style=\x22font-size:11px;font-weight:600;color:#92400e;margin:10px\x200\x206px;text-transform:uppercase;letter-spacing:.05em;\x22>⚠️\x20Already\x20in\x20ledger\x20—\x20skipped</div>', _0x15bd5d[_0x4380de(0xe3)](_0x52333f => {
            const _0x48d929 = _0x4380de;
            _0x41b3dc += _0x48d929(0x134) + _0x52333f[_0x48d929(0xa4)][_0x48d929(0x139)]() + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:10px;color:#b45309;font-family:monospace;margin-left:6px;\x22>' + _0x52333f[_0x48d929(0xf1)] + _0x48d929(0x101) + _0x52333f[_0x48d929(0x12b)]['toLocaleString'](_0x48d929(0xfe)) + _0x48d929(0xac);
        })), _0x368772['length'] > 0x0 && (_0x41b3dc += _0x4380de(0x129) + _0x368772['length'] + _0x4380de(0xa3) + (_0x368772[_0x4380de(0xed)] !== 0x1 ? 's' : '') + _0x4380de(0xf9) + _0x368772['map'](_0x5834ab => _0x5834ab[_0x4380de(0xa4)])['join'](',\x20') + ')\x20—\x20nothing\x20to\x20log.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>'), _0x2fc50a[_0x4380de(0xed)] === 0x0 && _0x44895c[_0x4380de(0xed)] > 0x0 && (_0x41b3dc += _0x4380de(0x74)), _0xc856ea[_0x4380de(0xf7)] = _0x41b3dc, _0xa40f77[_0x4380de(0x141)][_0x4380de(0x9a)] = _0x4380de(0x9d), _0x162ad5['style'][_0x4380de(0x9a)] = _0x2fc50a[_0x4380de(0xed)] > 0x0 ? _0x4380de(0x9d) : 'none', _0x162ad5['dataset']['results'] = JSON[_0x4380de(0x79)](_0x2fc50a);
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
        _0x598327(_0x557fdf, '\x20' + _0x501fa8 + _0x2437c9(0x95) + (_0x501fa8 !== 0x1 ? 's' : '') + _0x2437c9(0xbd) + _0x8d4114[_0x2437c9(0xd3)](_0x2437c9(0xfe)) + _0x2437c9(0x144)), _0xbf873a['textContent'] = _0x501fa8 + '\x20Charge' + (_0x501fa8 !== 0x1 ? 's' : '') + _0x2437c9(0x133), _0xbf873a[_0x2437c9(0x141)]['background'] = _0x2437c9(0x8e), _0xbf873a[_0x2437c9(0x109)] = ![], setTimeout(() => {
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
        _0x12aa43['style'][_0x185a40(0x9a)] = _0x185a40(0x9d), _0x20d913[_0x185a40(0xfa)] = _0x185a40(0x115) + _0x304106[_0x185a40(0xd3)](_0x185a40(0xfe)), _0x58e862[_0x185a40(0xfa)] = 'Official\x20tariff\x20for\x20KSh\x20' + _0xbaf290[_0x185a40(0xd3)](_0x185a40(0xfe)) + '\x20' + (_0x48a75c === _0x185a40(0x81) ? _0x185a40(0x8f) : _0x185a40(0xcf));
    }
    async function _0x5a8591(_0x5331b4) {
        const _0x340d9c = _0x34b2,
            _0x102bc3 = _0x5331b4[_0x340d9c(0x7a)]('#manual-type')[_0x340d9c(0xcd)],
            _0x30aa97 = parseFloat(_0x5331b4[_0x340d9c(0x7a)](_0x340d9c(0xbf))[_0x340d9c(0xcd)]) || 0x0,
            _0x102c02 = _0x5331b4[_0x340d9c(0x7a)](_0x340d9c(0x99))['value'][_0x340d9c(0x9f)]() || 'M-Pesa\x20transaction\x20charge',
            _0x26cea5 = _0x5331b4['querySelector'](_0x340d9c(0xb4));
        let _0x5cec01 = 0x0;
        if (_0x102bc3 === 'custom') _0x5cec01 = parseFloat(_0x5331b4[_0x340d9c(0x7a)](_0x340d9c(0x145))[_0x340d9c(0xcd)]) || 0x0;
        else _0x102bc3 === _0x340d9c(0xfd) || _0x102bc3 === _0x340d9c(0x108) ? _0x5cec01 = 0x0 : _0x5cec01 = _0x8fa1bc(_0x102bc3 === _0x340d9c(0x81) ? _0x340d9c(0x81) : _0x340d9c(0xba), _0x30aa97) || 0x0;
        if (_0x5cec01 <= 0x0) {
            _0x598327(_0x5331b4, 'ℹ️\x20This\x20transaction\x20type\x20has\x20no\x20charge\x20—\x20nothing\x20to\x20log.');
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
        _0x26cea5[_0x340d9c(0x109)] = ![], _0x26cea5['textContent'] = 'Log\x20This\x20Charge';
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
        'tariff': _0x8fa1bc
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
