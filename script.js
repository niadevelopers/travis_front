const _0xad7134 = _0x9f28;
(function(_0x94d187, _0x3d9f3d) {
    const _0xbeef9d = _0x9f28,
        _0x51e79e = _0x94d187();
    while (!![]) {
        try {
            const _0x22980a = parseInt(_0xbeef9d(0x27d)) / 0x1 + -parseInt(_0xbeef9d(0x208)) / 0x2 * (parseInt(_0xbeef9d(0x2b3)) / 0x3) + parseInt(_0xbeef9d(0x39d)) / 0x4 * (parseInt(_0xbeef9d(0x260)) / 0x5) + -parseInt(_0xbeef9d(0x3d1)) / 0x6 * (-parseInt(_0xbeef9d(0x355)) / 0x7) + -parseInt(_0xbeef9d(0x2ef)) / 0x8 + parseInt(_0xbeef9d(0x20f)) / 0x9 * (parseInt(_0xbeef9d(0x2b4)) / 0xa) + -parseInt(_0xbeef9d(0x3d3)) / 0xb * (parseInt(_0xbeef9d(0x25e)) / 0xc);
            if (_0x22980a === _0x3d9f3d) break;
            else _0x51e79e['push'](_0x51e79e['shift']());
        } catch (_0x5adb38) {
            _0x51e79e['push'](_0x51e79e['shift']());
        }
    }
}(_0x5a88, 0x7332f), function injectStyles() {
    const _0x49b79b = _0x9f28;
    if (document[_0x49b79b(0x3e3)]('travis-ripple-styles')) return;
    const _0x24d2b2 = document['createElement'](_0x49b79b(0x3c4));
    _0x24d2b2['id'] = _0x49b79b(0x309), _0x24d2b2[_0x49b79b(0x378)] = _0x49b79b(0x3c3), document[_0x49b79b(0x3ee)][_0x49b79b(0x2fb)](_0x24d2b2);
}());
const BACKEND_URL = 'https://travis-j1w9.onrender.com',
    WEALTH_TIERS = {
        'DESTITUTE': {
            'minDailyCap': 0x0,
            'maxDailyCap': 0x64,
            'label': _0xad7134(0x402),
            'displayName': 'Emergency',
            'color': _0xad7134(0x229),
            'adviceStyle': _0xad7134(0x239),
            'humanDescription': _0xad7134(0x3b5),
            'priority': _0xad7134(0x1ee),
            'dailyCapHuman': _0x4f5635 => _0xad7134(0x1e8) + Math[_0xad7134(0x437)](_0x4f5635) + _0xad7134(0x40e),
            'bufferHuman': (_0x17dd65, _0x54a499) => _0xad7134(0x245) + _0x17dd65 + _0xad7134(0x3da) + _0x54a499 + _0xad7134(0x445)
        },
        'SURVIVAL': {
            'minDailyCap': 0x65,
            'maxDailyCap': 0x12c,
            'label': _0xad7134(0x1fd),
            'displayName': _0xad7134(0x3b1),
            'color': _0xad7134(0x226),
            'adviceStyle': _0xad7134(0x239),
            'humanDescription': _0xad7134(0x26a),
            'priority': _0xad7134(0x2ff),
            'dailyCapHuman': _0x406947 => _0xad7134(0x1e8) + Math[_0xad7134(0x437)](_0x406947) + '\x20shillings\x20per\x20day.\x20Enough\x20for\x20basic\x20food\x20but\x20nothing\x20more.',
            'bufferHuman': (_0x49c68f, _0x492041) => _0xad7134(0x245) + _0x49c68f + _0xad7134(0x34b) + _0x492041 + _0xad7134(0x213)
        },
        'STRUGGLING': {
            'minDailyCap': 0x12d,
            'maxDailyCap': 0x320,
            'label': _0xad7134(0x3f3),
            'displayName': 'Leveling',
            'color': '#F39C12',
            'adviceStyle': _0xad7134(0x220),
            'humanDescription': _0xad7134(0x363),
            'priority': _0xad7134(0x3d0),
            'dailyCapHuman': _0x3e4a99 => 'You\x20have\x20about\x20' + Math[_0xad7134(0x437)](_0x3e4a99) + _0xad7134(0x449),
            'bufferHuman': (_0x431482, _0xaa6676) => _0xad7134(0x245) + _0x431482 + _0xad7134(0x424) + _0xaa6676 + '\x20days.\x20You\x27re\x20getting\x20by\x20but\x20not\x20thriving.'
        },
        'STABLE': {
            'minDailyCap': 0x321,
            'maxDailyCap': 0xbb8,
            'label': _0xad7134(0x43f),
            'displayName': _0xad7134(0x22e),
            'color': _0xad7134(0x20c),
            'adviceStyle': 'balanced',
            'humanDescription': _0xad7134(0x3fc),
            'priority': _0xad7134(0x1de),
            'dailyCapHuman': _0x2522a7 => _0xad7134(0x1e8) + Math[_0xad7134(0x437)](_0x2522a7) + _0xad7134(0x2c6),
            'bufferHuman': (_0x5b37ac, _0x1cd41d) => _0xad7134(0x245) + _0x5b37ac + _0xad7134(0x433) + _0x1cd41d + _0xad7134(0x374)
        },
        'AFFLUENT': {
            'minDailyCap': 0xbb9,
            'maxDailyCap': 0x3a98,
            'label': 'AFFLUENT',
            'displayName': _0xad7134(0x2b8),
            'color': _0xad7134(0x40a),
            'adviceStyle': _0xad7134(0x24a),
            'humanDescription': 'You\x20have\x20significant\x20disposable\x20income.',
            'priority': 'Grow\x20wealth,\x20invest,\x20diversify.',
            'dailyCapHuman': _0x1c9ac1 => _0xad7134(0x1e8) + Math[_0xad7134(0x437)](_0x1c9ac1) + _0xad7134(0x446),
            'bufferHuman': (_0x381de4, _0x2ae36b) => _0xad7134(0x245) + _0x381de4 + _0xad7134(0x295)
        },
        'WEALTHY': {
            'minDailyCap': 0x3a99,
            'maxDailyCap': 0xc350,
            'label': _0xad7134(0x26c),
            'displayName': _0xad7134(0x42e),
            'color': _0xad7134(0x2c8),
            'adviceStyle': 'preservation',
            'humanDescription': 'You\x20have\x20substantial\x20wealth.',
            'priority': _0xad7134(0x1d6),
            'dailyCapHuman': _0x41510e => _0xad7134(0x245) + Math[_0xad7134(0x437)](_0x41510e) + _0xad7134(0x41d),
            'bufferHuman': (_0x25ec1e, _0x48dd75) => _0xad7134(0x245) + _0x25ec1e + _0xad7134(0x2c3)
        },
        'ELITE': {
            'minDailyCap': 0xc351,
            'maxDailyCap': Infinity,
            'label': _0xad7134(0x1f0),
            'displayName': _0xad7134(0x3dc),
            'color': _0xad7134(0x311),
            'adviceStyle': _0xad7134(0x33b),
            'humanDescription': _0xad7134(0x247),
            'priority': _0xad7134(0x2e1),
            'dailyCapHuman': _0x21e3be => 'Your\x20daily\x20spending\x20capacity\x20exceeds\x20' + Math[_0xad7134(0x437)](_0x21e3be)['toLocaleString']() + _0xad7134(0x27f),
            'bufferHuman': (_0x52dc36, _0x24381d) => _0xad7134(0x216) + _0x52dc36[_0xad7134(0x44a)]() + '\x20shillings.\x20Elite\x20level.'
        }
    },
    KNBS_BENCHMARKS = {
        'minimumWage': {
            'urban': 0x3ef2,
            'rural': 0x34bc,
            'agricultural': 0x2ee0,
            'domestic': 0x2710
        },
        'povertyLine': {
            'foodPoor': 0xc4c,
            'overallPoor': 0x1557,
            'extremePoor': 0x929
        },
        'livingWage': {
            'urbanSingle': 0x61a8,
            'urbanFamily': 0xafc8,
            'ruralSingle': 0x4650,
            'ruralFamily': 0x7d00
        },
        'foodBasket': {
            'dailyMinimum': 0x96,
            'monthlyMinimum': 0x1194,
            'description': 'Basic\x20food\x20basket\x20(unga,\x20sukuma,\x20onions,\x20tomatoes)'
        }
    };
let conversationState = {
    'pendingClarification': null,
    'lastResponse': null,
    'conversationHistory': [],
    'currentTopic': null
};

function setPendingClarification(_0x517645, _0x53c7f5, _0x330127) {
    const _0x25dfb8 = _0xad7134;
    conversationState[_0x25dfb8(0x3fb)] = {
        'originalIntent': _0x517645,
        'originalQuestion': _0x53c7f5,
        'expectedType': _0x330127,
        'timestamp': Date[_0x25dfb8(0x250)]()
    };
}

function clearPendingClarification() {
    const _0x122001 = _0xad7134;
    conversationState[_0x122001(0x3fb)] = null;
}

function hasPendingClarification() {
    return conversationState['pendingClarification'] !== null;
}

function getUserWealthTier(_0x5191a4, _0x3bea0b) {
    const _0x336d03 = _0xad7134;
    if (_0x3bea0b < 0x0) return {
        'name': _0x336d03(0x402),
        ...WEALTH_TIERS[_0x336d03(0x402)],
        'displayName': _0x336d03(0x1fa),
        'humanDescription': _0x336d03(0x3b9) + Math[_0x336d03(0x35f)](_0x3bea0b)[_0x336d03(0x44a)]() + _0x336d03(0x3e8)
    };
    for (const [_0x164d06, _0x5a2097] of Object['entries'](WEALTH_TIERS)) {
        if (_0x5191a4 >= _0x5a2097['minDailyCap'] && _0x5191a4 <= _0x5a2097['maxDailyCap']) return {
            'name': _0x164d06,
            ..._0x5a2097
        };
    }
    return {
        'name': _0x336d03(0x3f3),
        ...WEALTH_TIERS['STRUGGLING']
    };
}

function humanReadableStatus(_0x2d6cb9, _0x28a79b, _0x5e8be2, _0x379417) {
    const _0x285e8d = _0xad7134;
    if (_0x379417[_0x285e8d(0x379)] === _0x285e8d(0x239)) {
        if (_0x28a79b < 0x64) return 'EMERGENCY:\x20You\x20have\x20only\x20' + _0x2d6cb9 + _0x285e8d(0x1d9) + _0x5e8be2 + _0x285e8d(0x257) + Math['floor'](_0x28a79b) + _0x285e8d(0x333);
        else return _0x28a79b < 0x12c ? _0x285e8d(0x2b7) + _0x2d6cb9 + '\x20shillings\x20must\x20last\x20' + _0x5e8be2 + _0x285e8d(0x299) + Math[_0x285e8d(0x437)](_0x28a79b) + '\x20shillings\x20per\x20day.\x20Enough\x20for\x20unga\x20and\x20sukuma,\x20but\x20nothing\x20extra.' : _0x285e8d(0x418) + _0x2d6cb9 + _0x285e8d(0x424) + _0x5e8be2 + _0x285e8d(0x246) + Math[_0x285e8d(0x437)](_0x28a79b) + _0x285e8d(0x430);
    } else {
        if (_0x379417['adviceStyle'] === _0x285e8d(0x220)) return _0x285e8d(0x436) + _0x2d6cb9 + _0x285e8d(0x3da) + _0x5e8be2 + '\x20days.\x20That\x27s\x20about\x20' + Math[_0x285e8d(0x437)](_0x28a79b) + _0x285e8d(0x265);
        else return _0x379417[_0x285e8d(0x379)] === 'balanced' ? 'You\x20have\x20' + _0x2d6cb9 + '\x20shillings\x20for\x20' + _0x5e8be2 + '\x20days.\x20About\x20' + Math['floor'](_0x28a79b) + _0x285e8d(0x24b) : '💎\x20You\x20have\x20' + _0x2d6cb9[_0x285e8d(0x44a)]() + _0x285e8d(0x1da) + Math[_0x285e8d(0x437)](_0x28a79b)[_0x285e8d(0x44a)]() + _0x285e8d(0x1d5);
    }
}

function humanReadableAdvice(_0x542b5b, _0x6e8832, _0x1a954c, _0x94236e, _0x1e65a0, _0x56e04c) {
    const _0x17f790 = _0xad7134,
        _0x1333d7 = _0x542b5b[_0x17f790(0x379)];
    if (_0x6e8832 === _0x17f790(0x398)) {
        if (_0x1333d7 === _0x17f790(0x239)) {
            if (_0x1a954c > _0x94236e) return _0x17f790(0x3b8) + _0x94236e + _0x17f790(0x319);
            else {
                if (_0x1a954c > _0x1e65a0) {
                    const _0x2c4c49 = Math['ceil'](_0x1a954c / _0x1e65a0);
                    return 'This\x20costs\x20' + _0x1a954c + _0x17f790(0x3c9) + Math[_0x17f790(0x437)](_0x1e65a0) + _0x17f790(0x2a9) + _0x2c4c49 + _0x17f790(0x278);
                } else {
                    const _0x5d9c31 = _0x94236e - _0x1a954c,
                        _0x417d4e = _0x5d9c31 / _0x56e04c;
                    return _0x17f790(0x384) + _0x5d9c31 + _0x17f790(0x1d9) + _0x56e04c + _0x17f790(0x257) + Math[_0x17f790(0x437)](_0x417d4e) + _0x17f790(0x3cb);
                }
            }
        } else {
            if (_0x1333d7 === _0x17f790(0x220)) {
                const _0x4a0525 = Math['round'](_0x1a954c / _0x94236e * 0x64);
                return _0x4a0525 > 0x1e ? _0x17f790(0x3b0) + _0x1a954c + _0x17f790(0x2de) + _0x4a0525 + _0x17f790(0x403) : 'This\x20costs\x20' + _0x1a954c + '\x20shillings.\x20That\x27s\x20reasonable\x20for\x20your\x20situation.\x20Go\x20ahead\x20but\x20track\x20it.';
            } else {
                if (_0x1333d7 === _0x17f790(0x395)) {
                    const _0x39ff16 = Math[_0x17f790(0x1f7)](_0x1a954c / _0x94236e * 0x64);
                    return _0x39ff16 > 0x32 ? _0x17f790(0x211) + _0x1a954c + '\x20shillings\x20(' + _0x39ff16 + _0x17f790(0x352) : 'This\x20fits\x20your\x20budget\x20comfortably.\x20Enjoy.';
                } else return _0x17f790(0x251) + _0x1a954c + _0x17f790(0x3b2);
            }
        }
    }
    if (_0x6e8832 === _0x17f790(0x2dd)) {
        if (_0x1333d7 === _0x17f790(0x239)) return _0x17f790(0x20d);
        else {
            if (_0x1333d7 === _0x17f790(0x220)) {
                const _0x564942 = Math[_0x17f790(0x1f7)](_0x1a954c * 0.15);
                return _0x17f790(0x1f5) + _0x1a954c + _0x17f790(0x3b4) + _0x564942 + _0x17f790(0x29d);
            } else return _0x17f790(0x303);
        }
    }
    if (_0x6e8832 === _0x17f790(0x40b)) {
        if (_0x1333d7 === _0x17f790(0x239)) return _0x17f790(0x23d);
        else {
            if (_0x1333d7 === _0x17f790(0x220)) {
                const _0x2f3e4a = Math[_0x17f790(0x437)](_0x94236e * 0.25);
                return _0x17f790(0x2d8) + _0x2f3e4a + _0x17f790(0x34c);
            } else return _0x17f790(0x241);
        }
    }
    return null;
}

function updateClock() {
    const _0x3e9d53 = _0xad7134,
        _0x4efff1 = new Date();
    document[_0x3e9d53(0x3e3)](_0x3e9d53(0x270))['textContent'] = _0x4efff1[_0x3e9d53(0x443)]('en-KE', {
        'hour': _0x3e9d53(0x3d7),
        'minute': '2-digit'
    }), document[_0x3e9d53(0x3e3)](_0x3e9d53(0x3e7))[_0x3e9d53(0x378)] = _0x4efff1[_0x3e9d53(0x32e)](_0x3e9d53(0x32a), {
        'weekday': _0x3e9d53(0x298),
        'day': 'numeric',
        'month': _0x3e9d53(0x298)
    });
}
setInterval(updateClock, 0x3e8), updateClock();

function toggleMobileSidebar() {
    const _0x449b4f = _0xad7134,
        _0x3d8807 = document['getElementById']('nav-sidebar');
    _0x3d8807[_0x449b4f(0x34f)]['toggle'](_0x449b4f(0x21d));
}

function showCustomAlert(_0x36ad2e, _0x1c812f = null) {
    const _0x26d1d1 = _0xad7134,
        _0x3803eb = document[_0x26d1d1(0x3e3)](_0x26d1d1(0x228)),
        _0x2ba205 = document['getElementById'](_0x26d1d1(0x346)),
        _0x2693d6 = document['getElementById'](_0x26d1d1(0x262));
    _0x2ba205[_0x26d1d1(0x368)] = _0x36ad2e, _0x3803eb[_0x26d1d1(0x3c4)][_0x26d1d1(0x434)] = _0x26d1d1(0x380);
    const _0x2a88b2 = _0x2693d6[_0x26d1d1(0x37a)](!![]);
    _0x2693d6['parentNode'][_0x26d1d1(0x347)](_0x2a88b2, _0x2693d6), _0x2a88b2[_0x26d1d1(0x231)](_0x26d1d1(0x2bd), () => {
        const _0x18fa8a = _0x26d1d1;
        _0x3803eb[_0x18fa8a(0x3c4)][_0x18fa8a(0x434)] = 'none';
        if (_0x1c812f) _0x1c812f();
    });
}
_0xad7134(0x30e) in navigator && window[_0xad7134(0x231)](_0xad7134(0x204), () => {
    const _0x2617f7 = _0xad7134;
    navigator[_0x2617f7(0x30e)][_0x2617f7(0x2e0)](_0x2617f7(0x376))['catch'](_0x3f1587 => {
        const _0x243165 = _0x2617f7;
        document[_0x243165(0x3e3)](_0x243165(0x359))['innerText'] = _0x243165(0x3de);
    });
});
let deferredPrompt = null;
window[_0xad7134(0x231)]('beforeinstallprompt', _0x22c964 => {
    const _0x49f4ba = _0xad7134;
    _0x22c964[_0x49f4ba(0x26f)](), deferredPrompt = _0x22c964, document[_0x49f4ba(0x3e3)](_0x49f4ba(0x264))['disabled'] = ![], document[_0x49f4ba(0x3e3)](_0x49f4ba(0x359))[_0x49f4ba(0x44b)] = _0x49f4ba(0x2a3);
}), window['addEventListener'](_0xad7134(0x2e5), () => {
    setTimeout(showPhoneModal, 0x258);
});

function generateFingerprint() {
    const _0x2f26fa = _0xad7134;
    let _0x59cfa7 = localStorage['getItem']('fp');
    if (_0x59cfa7 && _0x59cfa7[_0x2f26fa(0x3c6)] === 0x20) return _0x59cfa7;
    const _0x34c759 = (function() {
            const _0x565bd5 = _0x2f26fa;
            try {
                const _0x582203 = document['createElement'](_0x565bd5(0x36c));
                _0x582203['width'] = 0x100, _0x582203['height'] = 0x3c;
                const _0x419165 = _0x582203['getContext']('2d');
                return _0x419165['textBaseline'] = _0x565bd5(0x343), _0x419165['font'] = _0x565bd5(0x230), _0x419165[_0x565bd5(0x206)] = _0x565bd5(0x3be), _0x419165[_0x565bd5(0x272)](0x7d, 0x1, 0x3e, 0x14), _0x419165[_0x565bd5(0x206)] = _0x565bd5(0x3ca), _0x419165[_0x565bd5(0x3d9)](_0x565bd5(0x3cf), 0x2, 0xf), _0x419165[_0x565bd5(0x206)] = _0x565bd5(0x2cf), _0x419165['fillText'](_0x565bd5(0x3cf), 0x4, 0x11), _0x582203[_0x565bd5(0x253)]();
            } catch (_0xa87bec) {
                return 'canvas-fail';
            }
        }()),
        _0x4daa19 = [navigator[_0x2f26fa(0x1e2)] || _0x2f26fa(0x297), navigator['language'] || 'xx-XX', navigator[_0x2f26fa(0x267)] || '0', screen[_0x2f26fa(0x432)] + '×' + screen['height'] + '×' + (screen[_0x2f26fa(0x3bd)] || 0x0), screen[_0x2f26fa(0x362)] + '×' + screen[_0x2f26fa(0x23e)], new Date()[_0x2f26fa(0x406)](), Intl[_0x2f26fa(0x2d6)]()['resolvedOptions']()[_0x2f26fa(0x3e9)] || _0x2f26fa(0x2f0), _0x34c759['substring'](0x0, 0xc8)][_0x2f26fa(0x400)](_0x2f26fa(0x249));
    let _0x5a325a = 0x1505;
    for (let _0x1259bc = 0x0; _0x1259bc < _0x4daa19['length']; _0x1259bc++) {
        _0x5a325a = (_0x5a325a << 0x5) + _0x5a325a + _0x4daa19[_0x2f26fa(0x24c)](_0x1259bc) | 0x0;
    }
    let _0x571ddf = '';
    while (_0x571ddf[_0x2f26fa(0x3c6)] < 0x20) {
        _0x5a325a = _0x5a325a * 0x1f + 0x9e3779b9 | 0x0, _0x571ddf += (Math[_0x2f26fa(0x35f)](_0x5a325a) % 0x24)['toString'](0x24)[_0x2f26fa(0x2a6)]();
    }
    return _0x571ddf = _0x571ddf[_0x2f26fa(0x3e2)](0x0, 0x20), localStorage[_0x2f26fa(0x321)]('fp', _0x571ddf), _0x571ddf;
}

function encryptFingerprint(_0x16e0f6) {
    const _0x456d3f = _0xad7134,
        _0x28bbee = _0x456d3f(0x238);
    let _0x4bdbfa = '';
    for (let _0x3fa683 = 0x0; _0x3fa683 < _0x16e0f6[_0x456d3f(0x3c6)]; _0x3fa683++) {
        _0x4bdbfa += String['fromCharCode'](_0x16e0f6[_0x456d3f(0x24c)](_0x3fa683) ^ _0x28bbee[_0x456d3f(0x24c)](_0x3fa683 % _0x28bbee['length']));
    }
    return btoa(_0x4bdbfa);
}

function showPhoneModal() {
    const _0x4982fd = _0xad7134;
    if (document['getElementById'](_0x4982fd(0x3ea))) return;
    const _0x139320 = document[_0x4982fd(0x39b)](_0x4982fd(0x399));
    _0x139320['id'] = _0x4982fd(0x3ea), _0x139320[_0x4982fd(0x3c4)][_0x4982fd(0x291)] = _0x4982fd(0x23a), _0x139320[_0x4982fd(0x368)] = _0x4982fd(0x41f), document[_0x4982fd(0x268)]['appendChild'](_0x139320);
    const _0x322287 = document['getElementById'](_0x4982fd(0x340));
    _0x322287[_0x4982fd(0x275)] = function() {
        const _0x2b596e = _0x4982fd;
        if (_0x322287['disabled']) return;
        const _0xcbfdfb = _0x322287['textContent'];
        _0x322287[_0x2b596e(0x237)] = !![], _0x322287[_0x2b596e(0x3c4)][_0x2b596e(0x3d6)] = _0x2b596e(0x1ec), _0x322287[_0x2b596e(0x3c4)][_0x2b596e(0x30b)] = _0x2b596e(0x307), _0x322287['textContent'] = _0x2b596e(0x31d), submitPhoneAndFP(), setTimeout(() => {
            const _0x1b8eab = _0x2b596e;
            _0x322287[_0x1b8eab(0x237)] && (_0x322287[_0x1b8eab(0x237)] = ![], _0x322287[_0x1b8eab(0x3c4)]['opacity'] = '1', _0x322287[_0x1b8eab(0x3c4)][_0x1b8eab(0x30b)] = _0x1b8eab(0x34d), _0x322287[_0x1b8eab(0x378)] = _0xcbfdfb);
        }, 0x1f40);
    };
}
async function submitPhoneAndFP() {
    const _0x14d2e6 = _0xad7134,
        _0x52e4ce = document[_0x14d2e6(0x3e3)](_0x14d2e6(0x2c0))[_0x14d2e6(0x2fc)][_0x14d2e6(0x397)]();
    if (!_0x52e4ce) {
        alert(_0x14d2e6(0x3eb));
        return;
    }
    const _0x6da660 = generateFingerprint(),
        _0x1b8a9c = encryptFingerprint(_0x6da660);
    try {
        await fetch(BACKEND_URL + _0x14d2e6(0x215), {
            'method': 'POST',
            'headers': {
                'Content-Type': _0x14d2e6(0x2c1)
            },
            'body': JSON['stringify']({
                'encrypted': _0x1b8a9c,
                'phone': _0x52e4ce,
                'ts': Date['now']()
            })
        }), alert(_0x14d2e6(0x243)), document[_0x14d2e6(0x3e3)](_0x14d2e6(0x3ea))['remove']();
    } catch (_0x48bd4f) {
        alert(_0x14d2e6(0x350));
    }
}

function _0x5a88() {
    const _0x15a749 = ['rice', 'KSh\x200', '\x20shillings\x20per\x20day.\x20Save\x20for\x20', '</div><div\x20style=\x22font-size:10px;color:var(--win-text-3);\x22>remaining</div>', 'none', 'beer', 'School', 'sort', 'onerror', '\x20shillings.\x20You\x20cannot\x20afford\x20to\x20spend\x20ANY\x20money\x20right\x20now\x20-\x20not\x20even\x20', 'restore-btn', 'install-overlay', '316839Eylvrs', '10qwbeqB', 'onupgradeneeded', 'What\x20You\x20Spent', 'VERY\x20TIGHT:\x20', '💰\x20Affluent', 'Savings', 'getAll', 'tell\x20me\x20about', '<div\x20style=\x22position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;z-index:9999;font-family:inherit;\x22><div\x20style=\x22background:white;border-radius:16px;max-width:460px;width:92%;box-shadow:0\x2025px\x2070px\x20rgba(0,0,0,0.3);overflow:hidden;\x22><div\x20style=\x22background:linear-gradient(135deg,#0078D4,#005A9E);color:white;padding:24px;text-align:center;\x22><h2\x20style=\x22margin:0\x200\x206px;font-size:1.3rem;\x22>🔒\x20Travis\x20Guardian</h2><p\x20style=\x22margin:0;opacity:0.85;font-size:13px;\x22>Your\x20Personal\x20Financial\x20Advisor</p></div><div\x20style=\x22padding:28px;text-align:center;\x22><div\x20style=\x22width:60px;height:60px;background:#f0f7ff;color:#0078D4;font-size:28px;border-radius:50%;margin:0\x20auto\x2016px;display:flex;align-items:center;justify-content:center;\x22>📁</div><h3\x20style=\x22margin:0\x200\x2012px;font-size:1.1rem;color:#1a1a1a;\x22>Restore\x20Your\x20Data?</h3><p\x20style=\x22color:#5a5a5a;line-height:1.6;margin-bottom:24px;font-size:13px;\x22>Browser\x20data\x20was\x20cleared.<br>Select\x20your\x20backup\x20file\x20to\x20restore\x20financial\x20records.</p><div\x20style=\x22display:flex;flex-direction:column;gap:10px;\x22><button\x20id=\x22restore-btn\x22\x20style=\x22background:#0078D4;color:white;border:none;padding:13px;font-size:13px;font-weight:600;border-radius:8px;cursor:pointer;\x22>📂\x20Select\x20Backup\x20File\x20&\x20Restore</button><button\x20id=\x22skip-btn\x22\x20style=\x22background:transparent;color:#5a5a5a;border:1px\x20solid\x20#ddd;padding:12px;font-size:13px;border-radius:8px;cursor:pointer;\x22>Continue\x20as\x20New\x20User</button></div><p\x20style=\x22margin:12px\x200\x200;font-size:11px;color:#8a8a8a;\x22>First-time\x20users:\x20choose\x20\x22Continue\x20as\x20New\x20User\x22</p></div></div></div>', 'click', 'undefined', 'Your\x20browser\x20does\x20not\x20support\x20file\x20selection.', 'modal-phone', 'application/json', 'AES-GCM', '\x20shillings\x20in\x20liquid\x20assets.\x20Wealth\x20is\x20preserved.', '\x20shillings.\x20Can\x20you\x20pay\x20that\x20consistently?\x20If\x20yes,\x20consider\x20a\x20part-time\x20person\x20first.', 'Sales\x20Revenue', '\x20shillings\x20per\x20day.\x20You\x27re\x20comfortable.', 'Your\x20Daily\x20Budget', '#1ABC9C', 'M-Pesa', 'Your\x20biggest\x20expense\x20this\x20month\x20is\x20', ';\x22>', 'Try\x20to\x20save\x20', 'ASSETS', 'travisChart', 'rgba(102,204,0,0.7)', '<div\x20class=\x22metric-card\x22><div\x20class=\x22metric-accent\x22\x20style=\x22background:', '.taskbar-btn', 'show', 'dashboard-grid', 'importKey', 'Travisguardian', 'DateTimeFormat', 'debit', '\x20Based\x20on\x20your\x20savings,\x20a\x20safe\x20wage\x20is\x20about\x20', 'get', '<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Your\x20Monthly\x20Bills</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22document.getElementById(\x27setup-overlay\x27).classList.remove(\x27hidden\x27)\x22\x20class=\x22btn-secondary\x22\x20style=\x22font-size:11px;padding:5px\x2010px;\x22>Edit\x20List</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>', 'config', 'Invalid\x20activation\x20code.', 'loan', '\x20shillings,\x20which\x20is\x20', 'rgba(16,124,16,0.08)', 'register', 'Asset\x20allocation,\x20wealth\x20transfer,\x20impact\x20investing.', 'from', 'sw.js', 'find', 'appinstalled', 'travis-ui-cache-v1', 'million', 'rgba(196,43,28,0.08)', 'name', 'wage', 'Fixed\x20Assets', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:500;\x22>', 'clear', '\x20shillings.\x20You\x20cannot\x20spend\x20any\x20money\x20until\x20you\x20earn\x20enough\x20to\x20clear\x20this\x20debt.', '4755944gYmKlK', 'tz-unknown', 'readwrite', '1fr', '\x20shillings\x20this\x20month.\x20Start\x20with\x20a\x20simple\x20savings\x20group\x20or\x20MMF.\x20Even\x20small\x20amounts\x20add\x20up.', 'purchase', 'className', 'afford', 'parse', '<input\x20type=\x22text\x22\x20placeholder=\x22e.g.\x20Rent\x22\x20value=\x22', 'getItem', '#5a5a5a', 'appendChild', 'value', 'rgba(0,0,0,0.04)', 'Accounts\x20Receivable', 'Food,\x20rent,\x20transport\x20to\x20work.\x20Nothing\x20extra.', 'chip\x20chip-yellow', 'standalone', '(display-mode:\x20standalone)', '💎\x20At\x20your\x20wealth\x20level,\x20you\x20have\x20better\x20options\x20than\x20consumer\x20loans.\x20Consider\x20using\x20your\x20assets\x20as\x20collateral\x20for\x20lower\x20rates.', '&gt;', 'future', 'line', 'not-allowed', '#0078D4', 'travis-ripple-styles', '\x20shillings.\x20That\x27s\x20reasonable\x20for\x20your\x20situation.', 'cursor', 'mshwari', 'header-verdict-badge', 'serviceWorker', 'Other\x20Revenue', 'Install\x20not\x20ready.\x20Refresh\x20the\x20page.', '#9B59B6', 'Your\x20Daily\x20Limit', 'endsWith', 'activated', 'chip\x20chip-green', 'I\x20need\x20the\x20amount\x20to\x20give\x20you\x20accurate\x20advice.\x20How\x20many\x20shillings\x20are\x20we\x20talking\x20about?', 'KSh\x20', '#8a8a8a', '\x20shillings\x20total.\x20This\x20would\x20leave\x20you\x20with\x20nothing.', ';\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:right;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'filter', 'how\x20am\x20i', 'Processing...', 'Enter\x20the\x20backup\x20password\x20to\x20decrypt\x20your\x20data:', '<br><br><strong>What\x20you\x20should\x20do:</strong>\x20', 'skip-btn', 'setItem', 'close', 'TravisGuardian_v1.0', 'Allowance', 'hidden', 'dash', 'You\x20want\x20to\x20spend\x20', 'This\x20fits\x20your\x20budget\x20comfortably.\x20Enjoy.', 'displayName', 'en-KE', 'index.html', 'querySelector', 'obsStatus', 'toLocaleDateString', 'matches', 'zenka', 'deriveKey', '\x20Reserved', '\x20shillings\x20per\x20day.\x20You\x20cannot\x20afford\x20anything\x20beyond\x20basic\x20food.', '\x20shillings,\x20but\x20you\x20only\x20have\x20', 'allowance', 'You\x20are\x20in\x20debt\x20by\x20', 'priority', 'forEach', 'put', '\x20·\x20Spent:\x20KSh\x20', 'optimization', 'business', '\x20shillings.\x20Can\x20you\x20reduce\x20that\x20by\x2010%?', 'Loan\x20Repayment', 'reduce', 'submit-phone-btn', '\x20entries</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22overflow-x:auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22win-table\x22\x20style=\x22min-width:600px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead><tr><th>Date</th><th>Transaction</th><th\x20style=\x22text-align:right;\x22>Debit\x20(+)</th><th\x20style=\x22text-align:right;\x22>Credit\x20(-)</th></tr></thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>', 'meta', 'top', 'type', '<br><br><strong>Suggestion:</strong>\x20Consider\x20saving\x20', 'custom-alert-message', 'replaceChild', 'Failed\x20to\x20read/decrypt\x20backup\x20file', 'map', 'Bank\x20/\x20M-Pesa', '\x20shillings\x20to\x20stretch\x20over\x20', '\x20shillings\x20per\x20month.\x20Can\x20you\x20pay\x20that?', 'pointer', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:10px;color:var(--win-red);\x22>Over\x20budget</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'classList', 'Failed\x20to\x20send\x20data.\x20Check\x20connection.', '<div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22\x20id=\x22thinking-bubble\x22><div\x20class=\x22travis-ripple\x22><div\x20class=\x22ripple-ball\x20ball-r\x22></div><div\x20class=\x22ripple-ball\x20ball-g\x22></div><div\x20class=\x22ripple-ball\x20ball-b\x22></div></div></div>', '%\x20of\x20your\x20savings).\x20Consider\x20if\x20this\x20is\x20the\x20best\x20use\x20of\x20your\x20money\x20right\x20now.', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:16px;border-top:1px\x20solid\x20var(--win-border);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22factoryReset()\x22\x20style=\x22font-size:11px;color:var(--win-red);background:none;border:none;cursor:pointer;font-family:inherit;\x22>Reset\x20All\x20Data</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'target', '2360323QTijjj', 'act-code', '\x20days.', 'Total\x20Money\x20You\x20Have', 'install-status', 'obligation-list', 'originalQuestion', 'result', '</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:var(--color-border-secondary);\x22>·</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:5px;\x22><span\x20style=\x22color:var(--color-text-secondary);\x22>Daily</span><span\x20style=\x22font-weight:500;\x22>', 'set', 'abs', 'variance', '\x20Based\x20on\x20your\x20savings,\x20a\x20safe\x20monthly\x20wage\x20is\x20about\x20', 'availWidth', 'You\x20can\x20meet\x20basic\x20needs\x20but\x20have\x20little\x20left\x20over.', 'deriveBits', 'wealthTier', '</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:var(--color-border-secondary);\x22>·</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:5px;\x22><span\x20style=\x22color:var(--color-text-secondary);\x22>Savings</span><span\x20style=\x22font-weight:500;\x22>', 'Cash', 'innerHTML', 'Restore\x20failed', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>', 'Wrong\x20password\x20or\x20corrupted\x20file', 'canvas', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>', 'scrollTop', 'error', 'more\x20money', '\x20shillings\x20per\x20day.\x20You\x20can\x20buy\x20it,\x20but\x20be\x20careful\x20with\x20the\x20rest\x20of\x20the\x20week.', 'slice', 'seg-btn', '\x20days.\x20Good\x20position.', 'Bills', './sw.js', '.js', 'textContent', 'adviceStyle', 'cloneNode', 'daily', 'add', 'grow', 'rent', 'match', 'flex', 'getFileHandle', 'dailyCap', 'objectStoreNames', 'You\x20can\x20afford\x20this.\x20After\x20buying,\x20you\x27ll\x20have\x20', 'transactions', '\x20shillings\x20monthly.\x20Will\x20this\x20loan\x20generate\x20more\x20than\x20that\x20in\x20value?\x20If\x20yes,\x20consider\x20it.\x20If\x20not,\x20avoid\x20it.', '20;color:', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22\x20style=\x22min-height:340px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Your\x20Spending\x20Trend</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>Last\x207\x20days</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22\x20style=\x22height:300px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22analyticsChart\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'includes', 'decrypt', '<div\x20style=\x22font-size:14px;font-weight:700;color:var(--win-yellow);\x22>KSh\x20', 'recovery-overlay', 'getContext', 'You\x20asked\x20about\x20spending\x20', 'obligations', '#9D5D00', 'sidebar-type', 'createObjectStore', 'nav-sidebar', 'open', 'balanced', 'success', 'trim', 'spend', 'div', 'Bank\x20Account', 'createElement', 'paid', '12qFujbB', 'toLowerCase', 'saving', '\x20shilling\x20loan\x20at\x20typical\x20rates\x20costs\x20', 'user', 'display-mode', 'SHA-256', 'querySelectorAll', 'make\x20money', 'Service\x20Revenue', 'max', 'Backup\x20file\x20was\x20empty\x20or\x20invalid', 'tx-desc', 'blob', 'getDate', 'min', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:right;font-family:monospace;color:var(--win-red);font-weight:600;white-space:nowrap;\x22>-', '#107C10', 'keypress', 'This\x20costs\x20', 'Survival', '\x20shillings\x20is\x20manageable.\x20The\x20question\x20is:\x20does\x20this\x20purchase\x20align\x20with\x20your\x20goals?', 'status', '\x20shilling\x20loan\x20would\x20cost\x20about\x20', 'You\x20are\x20in\x20a\x20financial\x20emergency.\x20Every\x20shilling\x20counts.', 'userChoice', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:6px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-track\x22\x20style=\x22height:4px;width:120px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-fill\x22\x20style=\x22width:', '\x20You\x20cannot\x20afford\x20this.\x20You\x20only\x20have\x20', 'You\x20owe\x20', '</strong></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;color:var(--win-text-2);margin-top:4px;\x22>Wealth\x20Level:\x20<strong\x20style=\x22color:', 'fuliza', 'habit', 'colorDepth', '#f60', '\x20costs\x20', 'fingerprint', 'setup-overlay', 'Credit', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.travis-ripple\x20{\x20display:\x20flex;\x20gap:\x206px;\x20align-items:\x20center;\x20padding:\x208px\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.ripple-ball\x20{\x20width:\x208px;\x20height:\x208px;\x20border-radius:\x2050%;\x20animation:\x20travis-ripple\x201.4s\x20infinite\x20ease-in-out;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.ball-r\x20{\x20background:\x20#ff4d4d;\x20animation-delay:\x20-0.32s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.ball-g\x20{\x20background:\x20#2ecc71;\x20animation-delay:\x20-0.16s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.ball-b\x20{\x20background:\x20#3498db;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20travis-ripple\x20{\x200%,\x2080%,\x20100%\x20{\x20transform:\x20scale(0);\x20opacity:\x200.3;\x20}\x2040%\x20{\x20transform:\x20scale(1);\x20opacity:\x201;\x20}\x20}\x0a\x20\x20\x20\x20', 'style', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22obs-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:600;\x22>', 'length', 'prompt', 'daysRem', '\x20shillings.\x20You\x20only\x20have\x20', '#069', '\x20shillings\x20per\x20day.', 'destroy', 'chip\x20chip-red', 'Leveling', 'TravisGuardian\x20•\x202026', 'Essentials\x20first.\x20Small\x20treats\x20occasionally.', '12OqJyHX', 'milk', '307538PlSCfj', '<div\x20style=\x22padding:28px;text-align:center;color:red;background:white;border-radius:16px;\x22><p>', 'analyticsChart', 'opacity', '2-digit', 'getMonth', 'fillText', '\x20shillings\x20to\x20last\x20', '%;background:', '👑\x20Elite', 'tempBackupFileHandle', 'Service\x20worker\x20failed\x20–\x20install\x20may\x20not\x20work', 'REVENUE', 'increase', '<div\x20style=\x22font-size:10px;color:var(--win-red);font-weight:700;margin-top:2px;\x22>+', 'substring', 'getElementById', 'Dividends', 'encode', 'transaction', 'clock-date', '\x20shillings.\x20No\x20spending\x20until\x20debt\x20is\x20cleared.', 'timeZone', 'phone-modal', 'Phone\x20number\x20is\x20required.', 'Payroll', 'situation', 'head', 'Transport', '</span>', 'chat-input', '\x20You\x20asked\x20about\x20a\x20', 'STRUGGLING', 'originalIntent', 'Accounts\x20Payable', '.nav-item', 'unshift', 'oncomplete', 'repeat(2,1fr)', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'pendingClarification', 'You\x20can\x20meet\x20your\x20needs\x20and\x20save\x20a\x20little\x20each\x20month.', '\x20I\x20found\x20a\x20leak:\x20You\x20spent\x20', 'Go\x20ahead\x20but\x20track\x20it.\x20Every\x20shilling\x20counts.', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;margin-bottom:12px;\x22>', 'join', 'btn-p', 'DESTITUTE', '%\x20of\x20your\x20savings.\x20That\x27s\x20a\x20big\x20chunk.\x20Can\x20you\x20wait\x20a\x20few\x20days?', 'Travel\x20&\x20Entertainment', 'some', 'getTimezoneOffset', 'toFixed', 'backupHandle', 'isArray', '#2ECC71', 'hire', 'decode', 'Rent', '\x20shillings\x20per\x20day.\x20That\x27s\x20less\x20than\x20a\x20loaf\x20of\x20bread.', 'Restoring…', 'focus', 'borrow', 'help-modal', 'bread', 'hiring', 'Marketing', 'showOpenFilePicker', 'block', 'TIGHT\x20BUT\x20POSSIBLE:\x20', 'travis-finance-backup.enc', 'worker', 'push', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22leak-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:500;\x22>', '\x20shillings\x20per\x20day\x20of\x20spending\x20power.', 'Do\x20not\x20borrow.\x20Focus\x20on\x20increasing\x20your\x20income\x20first.', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:white;padding:28px;border-radius:16px;max-width:400px;width:90%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:var(--win-accent-light);margin:0\x200\x2016px;font-size:16px;\x22>Link\x20Device\x20Fingerprint</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22modal-phone\x22\x20type=\x22tel\x22\x20placeholder=\x22254712345678\x22\x20class=\x22win-input\x22\x20style=\x22width:100%;margin-bottom:16px;font-size:16px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22submit-phone-btn\x22\x20class=\x22btn-accent\x22\x20style=\x22width:100%;padding:13px;\x22>Submit\x20Phone</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'Only\x20borrow\x20if\x20this\x20money\x20will\x20earn\x20you\x20more\x20than\x20', 'LIABILITIES', '\x20over</div>', '⚠\x20Very\x20Tight', '\x20shillings\x20for\x20', 'subtle', '<div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'reload', 'book', 'deleteDatabase', '</div></div>', 'Tax', 'ask', '💎\x20Wealthy', 'Password\x20required', '\x20shillings\x20per\x20day.\x20You\x20can\x20eat\x20basic\x20meals\x20but\x20watch\x20every\x20shilling.', ';background:var(--color-background-secondary);border-radius:0\x20var(--border-radius-md)\x20var(--border-radius-md)\x200;\x22><div\x20style=\x22font-size:11px;font-weight:500;color:var(--color-text-secondary);text-transform:uppercase;margin-bottom:4px;\x22>Travis\x20Says</div><div\x20style=\x22font-size:15px;line-height:1.6;\x22>', 'width', '\x20shillings\x20saved\x20up\x20for\x20the\x20next\x20', 'display', 'sub-admins.html', '\x20You\x20have\x20', 'floor', 'showDirectoryPicker', 'markTodayRecorded', 'init', 'To\x20give\x20you\x20straight\x20advice,\x20I\x20need\x20to\x20know:\x20How\x20many\x20shillings\x20does\x20', 'function', 'scrollHeight', 'innerWidth', 'STABLE', 'getRandomValues', 'view-port', '.\x20But\x20you\x20only\x20have\x20', 'toLocaleTimeString', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Leak\x20Finder</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x20days.\x20That\x27s\x20very\x20little.', '\x20shillings\x20per\x20day\x20to\x20spend\x20or\x20invest.', '<div\x20style=\x22padding:24px;text-align:center;color:var(--win-text-3);\x22>No\x20bills\x20configured.\x20Add\x20rent,\x20school\x20fees,\x20loans,\x20etc.</div>', '\x20days', '\x20shillings\x20per\x20day.\x20You\x20can\x20cover\x20essentials\x20and\x20maybe\x20a\x20small\x20treat.', 'toLocaleString', 'innerText', '\x20shillings.\x20Strong\x20financial\x20position.', 'Preserve\x20capital,\x20optimize\x20taxes,\x20plan\x20legacy.', 'gridTemplateColumns', '.\x20That\x27s\x20money\x20leaving\x20without\x20you\x20noticing.', '\x20shillings\x20left\x20for\x20', '\x20shillings\x20in\x20reserve.\x20Your\x20daily\x20spending\x20capacity\x20is\x20about\x20', '\x20shillings\x20on\x20', 'Could\x20not\x20read\x20the\x20backup\x20file:\x20', 'What\x20You\x20Earned', 'Budget,\x20save,\x20invest\x20small\x20amounts.', 'user-name', 'profit', 'repeat(4,1fr)', 'userAgent', 'charAt', '</strong></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step-title\x22>🗂\x20Backup\x20&\x20Data</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;flex-wrap:wrap;gap:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22setupBackupFolder()\x22\x20class=\x22btn-primary\x22>Setup\x20Backup\x20Folder</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22saveBackup()\x22\x20class=\x22btn-secondary\x22>Save\x20Backup\x20Now</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22factoryReset()\x22\x20class=\x22btn-secondary\x22\x20style=\x22color:var(--win-red);border-color:rgba(196,43,28,0.3);\x22>Factory\x20Reset</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step-title\x22>📊\x20Monthly\x20Report</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;color:var(--win-text-2);margin-bottom:8px;\x22>Auto-generates\x20at\x20month\x20end.\x20You\x20can\x20also\x20generate\x20manually.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22window.travisAudit\x20&&\x20window.travisAudit.showNow()\x22\x20class=\x22btn-primary\x22>Generate\x20Report\x20Now</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'input', 'liquid', 'gift', 'You\x20have\x20about\x20', 'Do\x20not\x20borrow\x20', '%\x20of\x20your\x20savings.\x20That\x27s\x20significant.\x20Can\x20you\x20wait\x20a\x20few\x20days?', 'random', '0.7', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:var(--win-text-3);font-size:10px;\x22>→</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chip\x20chip-red\x22\x20style=\x22font-size:10px;\x22>', 'Food,\x20water,\x20shelter\x20only.\x20Nothing\x20else.', '<div\x20style=\x22display:flex;flex-wrap:wrap;align-items:center;gap:6px\x2010px;padding:10px\x2012px;background:var(--color-background-secondary);border-radius:var(--border-radius-md);margin-bottom:14px;font-size:13px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:5px;\x22><span\x20style=\x22color:var(--color-text-secondary);\x22>Status</span><span\x20style=\x22font-weight:500;color:', 'ELITE', '</strong></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;color:var(--win-text-2);margin-top:4px;\x22>Type:\x20<strong\x20style=\x22text-transform:capitalize;\x22>', 'text/css', 'display:flex;gap:8px;align-items:center;', 'documents', '\x20A\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22\x20style=\x22padding-top:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'round', 'onload', '\x20cost\x20in\x20your\x20area?', '\x20IN\x20DEBT', 'Clothes', 'onsuccess', 'SURVIVAL', 'ceil', 'Food\x20&\x20Groceries', 'That\x27s\x20about\x20', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>Budget:\x20KSh\x20', 'pending', 'champagne', 'load', '⚠️\x20Right\x20now,\x20focus\x20on\x20survival.\x20Once\x20your\x20daily\x20budget\x20is\x20above\x20300\x20shillings\x20per\x20day,\x20then\x20start\x20saving\x205%\x20of\x20anything\x20extra.', 'fillStyle', '<span\x20class=\x22chip\x20chip-red\x22>', '10JEuWnX', 'pay', 'You\x20cannot\x20afford\x20to\x20hire\x20anyone\x20right\x20now.\x20Your\x20priority\x20is\x20building\x20your\x20own\x20income\x20first.\x20Get\x20your\x20daily\x20budget\x20above\x20800\x20shillings\x20per\x20day\x20before\x20considering\x20staff.', 'icon', '#27AE60', '\x20Do\x20not\x20take\x20any\x20loan\x20right\x20now.\x20You\x20cannot\x20afford\x20repayments.\x20Focus\x20on\x20increasing\x20your\x20income\x20first.', 'Save\x20for\x20', '3901068yUWXBx', '\x22\x20class=\x22win-input\x22\x20style=\x22flex:1;\x22><input\x20type=\x22number\x22\x20placeholder=\x22Amount\x22\x20value=\x22', '\x20This\x20costs\x20', 'tx-amount', '\x20days.\x20Be\x20very\x20careful.', 'tx-debit', '/store-fingerprint', 'Your\x20liquid\x20reserves\x20are\x20', '\x20shillings.\x20After\x20buying,\x20you\x27ll\x20have\x20', '<div\x20class=\x22win-card\x22\x20style=\x22height:520px;display:flex;flex-direction:column;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22\x20style=\x22flex-shrink:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:10px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:32px;height:32px;background:linear-gradient(135deg,#0078D4,#005A9E);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;\x22>🤖</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Travis\x20-\x20Your\x20Financial\x20Advisor</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-sub\x22>Powered\x20by\x20KNBS\x20Kenya\x20Data</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chip\x20chip-green\x22\x20style=\x22font-size:10px;\x22>●\x20Online</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22chat-box\x22\x20style=\x22flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:var(--win-bg);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-bubble-ai\x22\x20style=\x22font-size:13px;\x22>Habari.\x20I\x27m\x20Travis.\x20I\x20analyze\x20your\x20finances\x20and\x20give\x20you\x20straight\x20talk.\x20Ask\x20me\x20anything\x20about\x20your\x20money.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:10px\x2014px;border-top:1px\x20solid\x20var(--win-border);background:white;display:flex;gap:8px;align-items:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22chat-input\x22\x20type=\x22text\x22\x20placeholder=\x22Ask\x20me\x20anything...\x20e.g.,\x20\x27Can\x20I\x20buy\x20meat?\x27\x20or\x20\x27How\x20am\x20I\x20doing?\x27\x22\x20class=\x22win-input\x22\x20style=\x22flex:1;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22handleAsk()\x22\x20class=\x22btn-accent\x22\x20style=\x22padding:9px\x2018px;font-size:13px;\x22>Send\x20↗</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', '</div><div\x20class=\x22metric-value\x22>', 'matchMedia', 'message', 'I\x27m\x20here\x20to\x20help\x20with\x20your\x20money\x20decisions.\x20Ask\x20me:\x0a•\x20\x22Can\x20I\x20buy\x20meat\x20for\x20500?\x22\x0a•\x20\x22How\x20am\x20I\x20doing\x20financially?\x22\x0a•\x20\x22Should\x20I\x20take\x20a\x20loan?\x22\x0a•\x20\x22How\x20can\x20I\x20save\x20more?\x22\x0aJust\x20tell\x20me\x20what\x20you\x27re\x20thinking\x20about\x20spending\x20or\x20saving.', 'mobile-open', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>What\x20This\x20Means\x20For\x20You</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:14px;font-weight:500;margin-bottom:8px;\x22>', 'replace', 'conservative', '💎\x20A\x20', 'label', 'Enter', 'Professional\x20Fees', 'input-app.css', '#E67E22', 'personal', 'custom-alert', '#C42B1C', '</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'calculating...', 'hud-warning', '\x20shillings\x20TOTAL\x20for\x20the\x20next\x20', 'Stable', 'soda', '14px\x20\x27Arial\x27', 'addEventListener', 'text/javascript', 'meat', '<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>Settings</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22\x20style=\x22display:grid;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step-title\x22>👤\x20Your\x20Profile</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;color:var(--win-text-2);\x22>Name:\x20<strong>', '<div\x20style=\x22padding:8px\x200;text-align:center;color:var(--win-text-3);font-size:13px;\x22>No\x20budget\x20variances\x20detected.\x20Good\x20job!</div>', 'write', 'disabled', 'TRAVIS-GUARDIAN-SECURE-2026-x7k9', 'survival', 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:10000;', '\x20active', 'Cost\x20of\x20Goods\x20Sold', '\x20You\x20cannot\x20afford\x20to\x20hire\x20anyone\x20right\x20now.\x20Focus\x20on\x20building\x20your\x20own\x20income\x20first.', 'availHeight', 'something', '⚠️\x20This\x20costs\x20', '💎\x20At\x20your\x20level,\x20hiring\x20should\x20be\x20about\x20ROI.\x20Will\x20this\x20person\x20generate\x20at\x20least\x203x\x20their\x20salary\x20in\x20value?', 'soap', 'Phone\x20+\x20Fingerprint\x20sent\x20successfully!', 'getFullYear', 'You\x20have\x20', '\x20days.\x20About\x20', 'You\x20are\x20in\x20the\x20top\x20tier\x20of\x20wealth\x20in\x20Kenya.', 'humanDescription', '|||', 'growth', '\x20shillings\x20per\x20day.\x20You\x27re\x20in\x20a\x20stable\x20position.', 'charCodeAt', 'arrayBuffer', 'days\x20time', '<div\x20style=\x22text-align:right;\x22><div\x20class=\x22chat-bubble-user\x22>', 'now', '💎\x20At\x20your\x20wealth\x20level,\x20', 'credit', 'toDataURL', 'PBKDF2', 'DISCRETIONARY\x20EXPENSES', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;line-height:1.6;\x22>', '\x20days.\x20That\x27s\x20about\x20', 'objectStore', 'createWritable', 'Travis\x20Finance\x20Backup', '💎\x20At\x20your\x20wealth\x20level,\x20hiring\x20decisions\x20should\x20be\x20about\x20ROI.\x20A\x20good\x20hire\x20should\x20generate\x20at\x20least\x203x\x20their\x20salary\x20in\x20value.\x20What\x20role\x20are\x20you\x20considering?', '.css', 'safeCash', '372ZpERJD', 'toDateString', '1272865ZVnBpb', 'readonly', 'custom-alert-ok', 'Petty\x20Cash', 'install-btn', '\x20shillings\x20per\x20day.\x20You\x27re\x20getting\x20by\x20but\x20not\x20thriving.', 'Days\x20Until\x20Month\x20End', 'hardwareConcurrency', 'body', '\x20shillings\x20per\x20month\x20in\x20interest.', 'You\x20can\x20barely\x20meet\x20your\x20basic\x20needs\x20each\x20day.', 'Travel', 'WEALTHY', '⚠️\x20A\x20', '\x20day', 'preventDefault', 'clock-time', 'desc', 'fillRect', 'User\x20cancelled\x20or\x20error\x20occurred', '\x20shillings\x20(', 'onclick', 'employee', 'sidebar-avatar', '\x20days\x20first.', '&lt;', 'chocolate', 'Segoe\x20UI', '<span\x20style=\x22color:var(--color-border-secondary);\x22>·</span><div\x20style=\x22display:flex;align-items:center;gap:5px;\x22><span\x20style=\x22color:var(--color-text-secondary);\x22>Days\x20left</span><span\x20style=\x22font-weight:500;\x22>', '589562KNpDXB', 'color', '\x20shillings.', 'activation-overlay', 'script.js', 'overview', 'DISCRETIONARY', 'tala', 'Salary', '<br><br><strong>My\x20advice:</strong>\x20', 'EMERGENCY:\x20You\x20are\x20in\x20debt\x20by\x20', '\x20at\x20', '\x20shillings\x20per\x20day.\x20Be\x20careful.', 'NECESSARY\x20EXPENSES', 'Office\x20Supplies', 'salary', '\x20shillings.\x20You\x20only\x20have\x20about\x20', '⚠️\x20', 'hud-cap', 'contains', 'cssText', 'That\x27s\x20a\x20big\x20chunk.\x20Can\x20you\x20wait\x20a\x20few\x20days\x20or\x20find\x20a\x20cheaper\x20option?', '\x20shillings\x20per\x20month.', '\x20ADVISOR', '\x20shillings\x20in\x20reserve.\x20Strong\x20financial\x20position.', 'chat-box', 'UA-unknown', 'short', '\x20days.\x20That\x27s\x20', 'where\x20does\x20my\x20money\x20go', 'how\x20is', '-5634', '\x20shillings\x20per\x20month\x20in\x20interest.\x20Only\x20borrow\x20if\x20absolutely\x20necessary.', 'Utilities', 'remove', 'amount', '</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'obs', 'Ready\x20to\x20install', 'sugar', 'Emergency', 'toUpperCase'];
    _0x5a88 = function() {
        return _0x15a749;
    };
    return _0x5a88();
}
async function triggerInstall() {
    const _0x563f1f = _0xad7134;
    if (!deferredPrompt) {
        alert(_0x563f1f(0x310));
        return;
    }
    try {
        await deferredPrompt[_0x563f1f(0x3c7)]();
        const {
            outcome: _0x14ce7f
        } = await deferredPrompt[_0x563f1f(0x3b6)];
        deferredPrompt = null;
    } catch (_0x589045) {
        console[_0x563f1f(0x36f)](_0x589045);
    }
}
async function attemptActivation() {
    const _0x5b6601 = _0xad7134,
        _0x18e120 = document[_0x5b6601(0x3e3)](_0x5b6601(0x356))[_0x5b6601(0x2fc)][_0x5b6601(0x397)]()[_0x5b6601(0x2a6)]()[_0x5b6601(0x21f)](/[^0-9A-Z-]/g, ''),
        _0x4c9e92 = localStorage[_0x5b6601(0x2f9)]('fp');
    if (!_0x4c9e92 || _0x4c9e92[_0x5b6601(0x3c6)] !== 0x20) {
        showCustomAlert('No\x20valid\x20device\x20fingerprint\x20found.<br><br>Please\x20restart\x20installation\x20process.');
        return;
    }
    const _0x2371b3 = _0x4c9e92[_0x5b6601(0x372)](0x3, 0xb),
        _0x16aee4 = 'TRV-KE-' + _0x2371b3 + _0x5b6601(0x29c);
    if (_0x18e120 === _0x16aee4) {
        let _0x350015 = await getData(_0x5b6601(0x342), _0x5b6601(0x2db)) || {};
        await saveData('meta', {
            ..._0x350015,
            'id': _0x5b6601(0x2db),
            'activated': !![],
            'fingerprint': _0x4c9e92,
            'activatedAt': Date[_0x5b6601(0x250)]()
        }), document[_0x5b6601(0x3e3)](_0x5b6601(0x280))[_0x5b6601(0x34f)]['add'](_0x5b6601(0x325)), location[_0x5b6601(0x428)]();
    } else showCustomAlert(_0x5b6601(0x2dc)), document['getElementById'](_0x5b6601(0x356))['value'] = '', document['getElementById'](_0x5b6601(0x356))[_0x5b6601(0x410)]();
}
let db, backupDirHandle = null,
    state = {
        'user': null,
        'transactions': [],
        'obligations': []
    };
const BACKUP_FILE = _0xad7134(0x419);
async function deriveKey(_0x46777d, _0x4aa060) {
    const _0x3d3eb3 = _0xad7134,
        _0x2f3474 = new TextEncoder(),
        _0x1664a6 = await crypto[_0x3d3eb3(0x425)][_0x3d3eb3(0x2d4)]('raw', _0x2f3474['encode'](_0x46777d), _0x3d3eb3(0x254), ![], [_0x3d3eb3(0x364), _0x3d3eb3(0x331)]);
    return crypto[_0x3d3eb3(0x425)]['deriveKey']({
        'name': _0x3d3eb3(0x254),
        'salt': _0x4aa060,
        'iterations': 0x927c0,
        'hash': _0x3d3eb3(0x3a3)
    }, _0x1664a6, {
        'name': 'AES-GCM',
        'length': 0x100
    }, ![], ['encrypt', _0x3d3eb3(0x38a)]);
}
async function encryptData(_0x47c4ad, _0x3e215f) {
    const _0x596bf1 = _0xad7134,
        _0x48618a = new TextEncoder(),
        _0x2aebfc = JSON['stringify'](_0x47c4ad),
        _0x41b2b1 = crypto[_0x596bf1(0x440)](new Uint8Array(0xc)),
        _0x317064 = crypto[_0x596bf1(0x440)](new Uint8Array(0x10)),
        _0x5d0ed4 = await deriveKey(_0x3e215f, _0x317064),
        _0x5cd574 = await crypto[_0x596bf1(0x425)]['encrypt']({
            'name': _0x596bf1(0x2c2),
            'iv': _0x41b2b1
        }, _0x5d0ed4, _0x48618a[_0x596bf1(0x3e5)](_0x2aebfc)),
        _0x2dbcdc = new Uint8Array(_0x317064[_0x596bf1(0x3c6)] + _0x41b2b1[_0x596bf1(0x3c6)] + _0x5cd574['byteLength']);
    return _0x2dbcdc[_0x596bf1(0x35e)](_0x317064, 0x0), _0x2dbcdc[_0x596bf1(0x35e)](_0x41b2b1, _0x317064[_0x596bf1(0x3c6)]), _0x2dbcdc[_0x596bf1(0x35e)](new Uint8Array(_0x5cd574), _0x317064['length'] + _0x41b2b1[_0x596bf1(0x3c6)]), _0x2dbcdc;
}
async function decryptData(_0x533798, _0x4c70be) {
    const _0x533132 = _0xad7134,
        _0x3fa27d = _0x533798[_0x533132(0x372)](0x0, 0x10),
        _0x496537 = _0x533798['slice'](0x10, 0x1c),
        _0x4f8517 = _0x533798[_0x533132(0x372)](0x1c),
        _0x4d61f4 = await deriveKey(_0x4c70be, _0x3fa27d),
        _0x38021a = await crypto[_0x533132(0x425)]['decrypt']({
            'name': _0x533132(0x2c2),
            'iv': _0x496537
        }, _0x4d61f4, _0x4f8517);
    return JSON[_0x533132(0x2f7)](new TextDecoder()[_0x533132(0x40c)](_0x38021a));
}
async function getData(_0x1ad959, _0x251e26) {
    const _0x2fa380 = _0xad7134;
    if (!db) return null;
    try {
        const _0x5866c7 = db[_0x2fa380(0x3e6)](_0x1ad959, _0x2fa380(0x261)),
            _0x43cdf2 = _0x5866c7[_0x2fa380(0x258)](_0x1ad959);
        return new Promise(_0x66c52c => {
            const _0x486ebf = _0x2fa380,
                _0x1e3073 = _0x43cdf2[_0x486ebf(0x2d9)](_0x251e26);
            _0x1e3073[_0x486ebf(0x1fc)] = () => _0x66c52c(_0x1e3073[_0x486ebf(0x35c)]), _0x1e3073[_0x486ebf(0x2af)] = () => _0x66c52c(null);
        });
    } catch (_0x1acfa7) {
        return null;
    }
}
async function getAllData(_0x3d5d4e) {
    const _0x10d4c7 = _0xad7134;
    if (!db) return [];
    try {
        const _0x2115b6 = db[_0x10d4c7(0x3e6)](_0x3d5d4e, _0x10d4c7(0x261)),
            _0x579ba9 = _0x2115b6['objectStore'](_0x3d5d4e);
        return new Promise(_0x4e0385 => {
            const _0x40fe56 = _0x10d4c7,
                _0x4f6fd8 = _0x579ba9[_0x40fe56(0x2ba)]();
            _0x4f6fd8[_0x40fe56(0x1fc)] = () => _0x4e0385(_0x4f6fd8[_0x40fe56(0x35c)]), _0x4f6fd8[_0x40fe56(0x2af)] = () => _0x4e0385([]);
        });
    } catch (_0x418db0) {
        return [];
    }
}
async function saveData(_0x229bac, _0x13a2a8) {
    const _0x4c6f7e = _0xad7134,
        _0x301df3 = db[_0x4c6f7e(0x3e6)](_0x229bac, 'readwrite');
    return _0x301df3[_0x4c6f7e(0x258)](_0x229bac)[_0x4c6f7e(0x339)](_0x13a2a8), new Promise(_0x1ba333 => _0x301df3[_0x4c6f7e(0x3f8)] = _0x1ba333);
}
async function backupUIAssets() {
    const _0x5ca2de = _0xad7134;
    if (!backupDirHandle) return;
    const _0x47995c = [{
        'name': _0x5ca2de(0x32b)
    }, {
        'name': 'tailwind-app.css'
    }, {
        'name': 'script.js'
    }, {
        'name': _0x5ca2de(0x2e3)
    }, {
        'name': _0x5ca2de(0x225)
    }, {
        'name': _0x5ca2de(0x435)
    }];
    for (const _0x4a2c64 of _0x47995c) {
        try {
            const _0x412cb8 = await fetch(_0x4a2c64[_0x5ca2de(0x2e9)]);
            if (!_0x412cb8['ok']) continue;
            const _0x3397f6 = await _0x412cb8[_0x5ca2de(0x3aa)](),
                _0xf382d = await backupDirHandle['getFileHandle'](_0x4a2c64[_0x5ca2de(0x2e9)], {
                    'create': !![]
                }),
                _0x54691c = await _0xf382d[_0x5ca2de(0x259)]();
            await _0x54691c['write'](_0x3397f6), await _0x54691c[_0x5ca2de(0x322)]();
        } catch (_0x1e9567) {}
    }
}
async function rebuildUIFromDevice() {
    const _0xaaac1a = _0xad7134;
    if (!backupDirHandle) return ![];
    try {
        const _0x933bcd = [_0xaaac1a(0x32b), 'tailwind-app.css', _0xaaac1a(0x281), _0xaaac1a(0x2e3), 'input-app.css'],
            _0x14e131 = await caches[_0xaaac1a(0x394)](_0xaaac1a(0x2e6));
        for (const _0x5b0889 of _0x933bcd) {
            const _0x500768 = await backupDirHandle[_0xaaac1a(0x381)](_0x5b0889),
                _0x4beb65 = await _0x500768['getFile'](),
                _0x1ed01f = await _0x4beb65[_0xaaac1a(0x24d)]();
            await _0x14e131['put']('/' + _0x5b0889, new Response(_0x1ed01f, {
                'headers': {
                    'Content-Type': _0x5b0889[_0xaaac1a(0x313)](_0xaaac1a(0x25c)) ? _0xaaac1a(0x1f2) : _0x5b0889[_0xaaac1a(0x313)](_0xaaac1a(0x377)) ? _0xaaac1a(0x232) : 'text/html'
                }
            }));
        }
        return !![];
    } catch (_0x4ce653) {
        return ![];
    }
}
async function saveBackup() {
    const _0x9f77c5 = _0xad7134;
    if (!backupDirHandle || !db) return;
    try {
        const _0x3de4ce = {};
        for (const _0x101f70 of [_0x9f77c5(0x342), 'tx']) {
            const _0x576091 = db[_0x9f77c5(0x3e6)](_0x101f70, _0x9f77c5(0x261)),
                _0x37f2eb = _0x576091['objectStore'](_0x101f70);
            _0x3de4ce[_0x101f70] = await new Promise(_0x447385 => {
                const _0x123e40 = _0x9f77c5,
                    _0x17e0ed = _0x37f2eb['getAll']();
                _0x17e0ed[_0x123e40(0x1fc)] = () => _0x447385(_0x17e0ed['result']), _0x17e0ed[_0x123e40(0x2af)] = () => _0x447385([]);
            });
        }
        const _0x5ac160 = _0x9f77c5(0x2d5),
            _0x3527af = await encryptData(_0x3de4ce, _0x5ac160),
            _0x15008d = await backupDirHandle[_0x9f77c5(0x381)](BACKUP_FILE, {
                'create': !![]
            }),
            _0x2c01de = await _0x15008d[_0x9f77c5(0x259)]();
        await _0x2c01de[_0x9f77c5(0x236)](_0x3527af), await _0x2c01de[_0x9f77c5(0x322)]();
    } catch (_0x330959) {}
}
async function readBackupContent() {
    const _0x242934 = _0xad7134;
    try {
        if (!window[_0x242934(0x3dd)]) return {
            'data': null,
            'error': 'No\x20file\x20handle'
        };
        const _0x5cad1a = await window[_0x242934(0x3dd)]['getFile'](),
            _0x454701 = await _0x5cad1a[_0x242934(0x24d)](),
            _0x301b6d = new Uint8Array(_0x454701),
            _0xeb1654 = prompt(_0x242934(0x31e));
        if (!_0xeb1654) return {
            'data': null,
            'error': _0x242934(0x42f)
        };
        const _0xb533f9 = await decryptData(_0x301b6d, _0xeb1654);
        return {
            'data': _0xb533f9,
            'error': null
        };
    } catch (_0x2f436e) {
        return {
            'data': null,
            'error': _0x2f436e[_0x242934(0x2e9)] === 'OperationError' ? _0x242934(0x36b) : _0x242934(0x348)
        };
    }
}
async function restoreFromBackup() {
    const _0x3fba1b = _0xad7134,
        {
            data: _0x4cb7e7,
            error: _0xf019d0
        } = await readBackupContent();
    if (_0xf019d0) return {
        'success': ![],
        'error': _0x3fba1b(0x1dc) + _0xf019d0
    };
    if (!_0x4cb7e7) return {
        'success': ![],
        'error': _0x3fba1b(0x3a8)
    };
    try {
        for (const _0x30fc11 of ['meta', 'tx']) {
            if (!_0x4cb7e7[_0x30fc11] || !Array[_0x3fba1b(0x409)](_0x4cb7e7[_0x30fc11])) continue;
            const _0x2ae013 = db['transaction'](_0x30fc11, _0x3fba1b(0x2f1)),
                _0x34e8f0 = _0x2ae013[_0x3fba1b(0x258)](_0x30fc11);
            await new Promise((_0x596aea, _0x342e53) => {
                const _0x2c6043 = _0x3fba1b,
                    _0xb80075 = _0x34e8f0[_0x2c6043(0x2ed)]();
                _0xb80075[_0x2c6043(0x1fc)] = _0x596aea, _0xb80075[_0x2c6043(0x2af)] = () => _0x342e53(_0xb80075[_0x2c6043(0x36f)]);
            });
            for (const _0x526e57 of _0x4cb7e7[_0x30fc11]) {
                await new Promise((_0x3a37e7, _0x689e7e) => {
                    const _0x32e29c = _0x3fba1b,
                        _0x4f9ae0 = _0x34e8f0['put'](_0x526e57);
                    _0x4f9ae0[_0x32e29c(0x1fc)] = _0x3a37e7, _0x4f9ae0[_0x32e29c(0x2af)] = () => _0x689e7e(_0x4f9ae0[_0x32e29c(0x36f)]);
                });
            }
            await new Promise(_0x339639 => {
                _0x2ae013['oncomplete'] = _0x339639;
            });
        }
        let _0x2e222a = null;
        const _0x2f96e = await getData(_0x3fba1b(0x342), _0x3fba1b(0x2db));
        if (_0x2f96e?.[_0x3fba1b(0x3c0)]) _0x2e222a = _0x2f96e[_0x3fba1b(0x3c0)];
        else {
            if (_0x4cb7e7[_0x3fba1b(0x342)]) {
                const _0x4ff028 = _0x4cb7e7[_0x3fba1b(0x342)][_0x3fba1b(0x2e4)](_0x5df353 => _0x5df353 && _0x5df353['id'] === _0x3fba1b(0x2db));
                _0x2e222a = _0x4ff028?.[_0x3fba1b(0x3c0)] || null;
            }
        }
        if (_0x2e222a) localStorage[_0x3fba1b(0x321)]('fp', _0x2e222a);
        return {
            'success': !![],
            'error': null
        };
    } catch (_0x308351) {
        return {
            'success': ![],
            'error': 'Failed\x20to\x20write\x20data\x20to\x20database:\x20' + (_0x308351[_0x3fba1b(0x21b)] || String(_0x308351))
        };
    }
}
async function setupBackupFolder() {
    const _0x5e9be9 = _0xad7134;
    if ('showDirectoryPicker' in window) try {
        backupDirHandle = await window[_0x5e9be9(0x438)]({
            'mode': _0x5e9be9(0x2f1),
            'startIn': _0x5e9be9(0x1f4)
        });
        const _0x1831cd = db[_0x5e9be9(0x3e6)](_0x5e9be9(0x342), 'readwrite');
        return await _0x1831cd['objectStore'](_0x5e9be9(0x342))[_0x5e9be9(0x339)]({
            'id': 'backupHandle',
            'value': backupDirHandle
        }), await _0x1831cd['done'], await backupUIAssets(), !![];
    } catch (_0x40c68b) {
        return ![];
    }
    return ![];
}
async function manualRestoreFlow() {
    const _0x211a54 = _0xad7134;
    try {
        let _0x4a7ff3;
        if (_0x211a54(0x416) in window) {
            const [_0x12930f] = await window['showOpenFilePicker']({
                'types': [{
                    'description': _0x211a54(0x25a),
                    'accept': {
                        'application/octet-stream': ['.enc']
                    }
                }],
                'multiple': ![]
            });
            _0x4a7ff3 = _0x12930f;
        } else return alert(_0x211a54(0x2bf)), {
            'success': ![],
            'error': 'File\x20picker\x20not\x20supported'
        };
        window[_0x211a54(0x3dd)] = _0x4a7ff3;
        const _0x499fd6 = await restoreFromBackup();
        delete window[_0x211a54(0x3dd)];
        if (_0x499fd6['success']) return await rebuildUIFromDevice(), await backupUIAssets(), {
            'success': !![]
        };
        return {
            'success': ![],
            'error': 'Restore\x20failed'
        };
    } catch (_0x491458) {
        return {
            'success': ![],
            'error': _0x211a54(0x273)
        };
    }
}
async function runRecoveryOnStart() {
    const _0x4df643 = _0xad7134,
        _0x303c60 = document[_0x4df643(0x3e3)](_0x4df643(0x38c));
    if (!_0x303c60) return;
    _0x303c60[_0x4df643(0x3c4)]['display'] = 'none';
    try {
        const _0x450dbc = await getData('meta', _0x4df643(0x408));
        if (_0x450dbc?.[_0x4df643(0x2fc)]) backupDirHandle = _0x450dbc[_0x4df643(0x2fc)];
    } catch (_0x59150f) {}
    const _0x27ba6e = !!await getData(_0x4df643(0x342), 'config'),
        _0x321272 = !!localStorage[_0x4df643(0x2f9)]('fp');
    if (_0x27ba6e && _0x321272) return;
    if (backupDirHandle) await rebuildUIFromDevice();
    _0x303c60[_0x4df643(0x3c4)][_0x4df643(0x434)] = 'flex', _0x303c60[_0x4df643(0x368)] = _0x4df643(0x2bc), document[_0x4df643(0x3e3)](_0x4df643(0x2b1))[_0x4df643(0x275)] = async () => {
        const _0x38575b = _0x4df643,
            _0x3d35f3 = document['getElementById'](_0x38575b(0x2b1));
        _0x3d35f3['disabled'] = !![], _0x3d35f3[_0x38575b(0x378)] = _0x38575b(0x40f);
        const _0x353fe3 = await manualRestoreFlow();
        _0x353fe3[_0x38575b(0x396)] ? (_0x303c60[_0x38575b(0x368)] = '<div\x20style=\x22padding:40px;text-align:center;background:white;border-radius:16px;max-width:360px;\x22><p\x20style=\x22color:green;font-size:16px;\x22>\x20Everything\x20restored!\x20Reloading…</p></div>', setTimeout(() => location[_0x38575b(0x428)](), 0x4b0)) : _0x303c60[_0x38575b(0x368)] = _0x38575b(0x3d4) + (_0x353fe3['error'] || _0x38575b(0x369)) + '</p><button\x20onclick=\x22location.reload()\x22\x20style=\x22margin-top:12px;padding:10px\x2020px;border-radius:8px;border:none;background:#0078D4;color:white;cursor:pointer;\x22>Try\x20Again</button></div>';
    }, document[_0x4df643(0x3e3)](_0x4df643(0x320))['onclick'] = () => _0x303c60[_0x4df643(0x3c4)][_0x4df643(0x434)] = _0x4df643(0x2ab);
}
async function startFingerprintBackgroundProbe() {
    const _0x8ba2f5 = async () => {
        const _0x192497 = _0x9f28;
        if (localStorage[_0x192497(0x2f9)]('fp')) return !![];
        const _0x1b3863 = await getData(_0x192497(0x342), _0x192497(0x2db));
        if (_0x1b3863?.['fingerprint']) return localStorage[_0x192497(0x321)]('fp', _0x1b3863['fingerprint']), !![];
        return ![];
    };
    setTimeout(() => _0x8ba2f5(), 0x50);
    let _0x27eb1b = 0x0;
    const _0x4c903a = setInterval(async () => {
        _0x27eb1b++;
        if (await _0x8ba2f5() || _0x27eb1b > 0xc) clearInterval(_0x4c903a);
    }, 0x1388);
}
async function initDB() {
    return new Promise(_0x417398 => {
        const _0x1acaa1 = _0x9f28,
            _0x2c96c6 = indexedDB['open'](_0x1acaa1(0x323), 0x1);
        _0x2c96c6[_0x1acaa1(0x2b5)] = _0x439bae => {
            const _0x23192b = _0x1acaa1,
                _0x2c237c = _0x439bae[_0x23192b(0x354)][_0x23192b(0x35c)];
            if (!_0x2c237c[_0x23192b(0x383)][_0x23192b(0x290)](_0x23192b(0x342))) _0x2c237c[_0x23192b(0x392)](_0x23192b(0x342), {
                'keyPath': 'id'
            });
            if (!_0x2c237c[_0x23192b(0x383)][_0x23192b(0x290)]('tx')) _0x2c237c[_0x23192b(0x392)]('tx', {
                'keyPath': 'id'
            });
        }, _0x2c96c6[_0x1acaa1(0x1fc)] = async _0x5f3a56 => {
            const _0x5d3fce = _0x1acaa1;
            db = _0x5f3a56[_0x5d3fce(0x354)][_0x5d3fce(0x35c)], startFingerprintBackgroundProbe(), await runRecoveryOnStart(), _0x417398();
        }, _0x2c96c6[_0x1acaa1(0x2af)] = () => _0x417398();
    });
}
let travisMemory = {
    'conversationCount': 0x0,
    'lastQuestion': '',
    'lastPurpose': '',
    'lastVerdict': '',
    'chatContext': {
        'pendingClarification': null,
        'lastTopic': null,
        'providedData': {}
    }
};

function isObligation(_0xef5134) {
    const _0x2f730c = _0xad7134;
    if (!state[_0x2f730c(0x38f)] || state[_0x2f730c(0x38f)][_0x2f730c(0x3c6)] === 0x0) return ![];
    return state['obligations'][_0x2f730c(0x405)](_0x571bc0 => _0xef5134[_0x2f730c(0x39e)]()[_0x2f730c(0x389)](_0x571bc0[_0x2f730c(0x222)][_0x2f730c(0x39e)]()));
}

function getStatusSummary() {
    const _0x454510 = _0xad7134,
        _0x66ceba = getFin(),
        _0x33500a = getUserWealthTier(_0x66ceba['daily'], _0x66ceba['safeCash']);
    let _0x20038a = _0x33500a;
    return _0x66ceba[_0x454510(0x25d)] < 0x0 && (_0x20038a = {
        ..._0x33500a,
        'displayName': 'IN\x20DEBT',
        'color': _0x454510(0x229),
        'adviceStyle': _0x454510(0x239),
        'humanDescription': _0x454510(0x336) + Math[_0x454510(0x35f)](_0x66ceba[_0x454510(0x25d)])[_0x454510(0x44a)]() + _0x454510(0x27f)
    }), {
        'cash': Math[_0x454510(0x1f7)](_0x66ceba[_0x454510(0x25d)]),
        'dailyCap': Math[_0x454510(0x437)](_0x66ceba[_0x454510(0x37b)]),
        'daysRem': _0x66ceba[_0x454510(0x3c8)],
        'wealthTier': _0x20038a,
        'humanStatus': _0x66ceba[_0x454510(0x25d)] < 0x0 ? _0x454510(0x287) + Math[_0x454510(0x35f)](_0x66ceba[_0x454510(0x25d)])['toLocaleString']() + _0x454510(0x2ee) : humanReadableStatus(_0x66ceba['safeCash'], _0x66ceba[_0x454510(0x37b)], _0x66ceba['daysRem'], _0x33500a)
    };
}

function updateLiveHud() {
    const _0xe8cf47 = _0xad7134,
        _0x487929 = parseFloat(document[_0xe8cf47(0x3e3)]('tx-amount')['value']) || 0x0,
        _0x1936af = document['getElementById']('tx-credit')[_0xe8cf47(0x2fc)],
        _0x1adfbc = getFin(),
        _0xf65597 = isLiquid(_0x1936af) ? _0x1adfbc[_0xe8cf47(0x25d)] - _0x487929 : _0x1adfbc[_0xe8cf47(0x25d)],
        _0x20ae87 = _0xf65597 / _0x1adfbc[_0xe8cf47(0x3c8)];
    document['getElementById'](_0xe8cf47(0x28f))[_0xe8cf47(0x44b)] = _0xe8cf47(0x317) + _0x20ae87[_0xe8cf47(0x407)](0x0), document[_0xe8cf47(0x3e3)]('hud-cover')[_0xe8cf47(0x44b)] = _0xe8cf47(0x317) + _0x1adfbc[_0xe8cf47(0x202)][_0xe8cf47(0x44a)]() + _0xe8cf47(0x332);
    const _0x3635b0 = document['getElementById'](_0xe8cf47(0x22c));
    isLiquid(_0x1936af) && _0x487929 > _0x1adfbc[_0xe8cf47(0x37b)] ? _0x3635b0[_0xe8cf47(0x3c4)][_0xe8cf47(0x434)] = _0xe8cf47(0x417) : _0x3635b0[_0xe8cf47(0x3c4)][_0xe8cf47(0x434)] = _0xe8cf47(0x2ab);
}

function getFin() {
    const _0xf5b374 = _0xad7134,
        _0x555635 = new Date(),
        _0x2626ae = Math[_0xf5b374(0x3a7)](0x1, new Date(_0x555635[_0xf5b374(0x244)](), _0x555635[_0xf5b374(0x3d8)]() + 0x1, 0x0)[_0xf5b374(0x3ab)]() - _0x555635['getDate']());
    let _0x31d7c8 = 0x0;
    const _0x2cd12e = ['Cash', _0xf5b374(0x2c9), _0xf5b374(0x39a), 'Savings', _0xf5b374(0x34a), _0xf5b374(0x263), _0xf5b374(0x2fe)];
    _0x2cd12e[_0xf5b374(0x338)](_0x327384 => {
        _0x31d7c8 += getBalance(_0x327384);
    });
    const _0x4e8fe1 = state[_0xf5b374(0x38f)][_0xf5b374(0x349)](_0x3907bb => {
            const _0xcc0577 = _0xf5b374;
            let _0xb9cad1 = 0x0;
            return state[_0xcc0577(0x385)][_0xcc0577(0x338)](_0x5dfa2a => {
                const _0x199555 = _0xcc0577,
                    _0x4c949f = new Date(_0x5dfa2a['id']);
                _0x4c949f['getMonth']() === _0x555635[_0x199555(0x3d8)]() && (_0x5dfa2a['desc']['toLowerCase']()[_0x199555(0x389)](_0x3907bb[_0x199555(0x222)][_0x199555(0x39e)]()) || _0x5dfa2a[_0x199555(0x252)] === _0x3907bb[_0x199555(0x222)]) && (_0xb9cad1 += _0x5dfa2a['amount']);
            }), {
                ..._0x3907bb,
                'paid': _0xb9cad1,
                'pending': Math[_0xcc0577(0x3a7)](0x0, _0x3907bb[_0xcc0577(0x2a0)] - _0xb9cad1),
                'variance': _0xb9cad1 - _0x3907bb[_0xcc0577(0x2a0)]
            };
        }),
        _0x1202e0 = _0x4e8fe1[_0xf5b374(0x33f)]((_0x40d01f, _0x36c20a) => _0x40d01f + _0x36c20a[_0xf5b374(0x202)], 0x0),
        _0x3c858c = _0x31d7c8 - _0x1202e0;
    return {
        'liquid': _0x31d7c8,
        'pending': _0x1202e0,
        'safeCash': _0x3c858c,
        'daysRem': _0x2626ae,
        'obsStatus': _0x4e8fe1,
        'daily': _0x3c858c / _0x2626ae
    };
}

function isLiquid(_0x243c16) {
    const _0x43ad85 = _0xad7134;
    if (!_0x243c16) return ![];
    const _0x3a70bf = [_0x43ad85(0x367), _0x43ad85(0x2c9), _0x43ad85(0x39a), _0x43ad85(0x2b9), _0x43ad85(0x34a), _0x43ad85(0x263), 'Accounts\x20Receivable'];
    return _0x3a70bf[_0x43ad85(0x389)](_0x243c16);
}

function getBalance(_0x1df037) {
    const _0x44c57e = _0xad7134;
    let _0x3ca4dd = 0x0;
    state[_0x44c57e(0x385)][_0x44c57e(0x338)](_0x3e2b5c => {
        const _0x41d9bc = _0x44c57e;
        if (_0x3e2b5c[_0x41d9bc(0x2d7)] === _0x1df037) _0x3ca4dd += _0x3e2b5c[_0x41d9bc(0x2a0)];
        if (_0x3e2b5c[_0x41d9bc(0x252)] === _0x1df037) _0x3ca4dd -= _0x3e2b5c[_0x41d9bc(0x2a0)];
    });
    const _0x1c201a = [_0x44c57e(0x367), _0x44c57e(0x2c9), _0x44c57e(0x39a), _0x44c57e(0x2b9), 'Bank\x20/\x20M-Pesa', _0x44c57e(0x263), _0x44c57e(0x2fe), 'Inventory', _0x44c57e(0x2eb)];
    return _0x1c201a[_0x44c57e(0x389)](_0x1df037) ? _0x3ca4dd : -_0x3ca4dd;
}

function navClick(_0x50b203) {
    const _0x1a1cfd = _0xad7134;
    document[_0x1a1cfd(0x3a4)](_0x1a1cfd(0x3f6))[_0x1a1cfd(0x338)](_0x5121f2 => _0x5121f2[_0x1a1cfd(0x34f)][_0x1a1cfd(0x29f)]('active'));
    const _0x46f8bd = document[_0x1a1cfd(0x3e3)]('nav-' + _0x50b203);
    if (_0x46f8bd) _0x46f8bd['classList']['add']('active');
    document['querySelectorAll'](_0x1a1cfd(0x2d1))[_0x1a1cfd(0x338)](_0x1be439 => _0x1be439[_0x1a1cfd(0x34f)][_0x1a1cfd(0x29f)]('active')), document[_0x1a1cfd(0x3e3)](_0x1a1cfd(0x393))[_0x1a1cfd(0x34f)][_0x1a1cfd(0x29f)]('mobile-open'), nav(_0x50b203);
}

function nav(_0x4edb4f) {
    const _0x384b15 = _0xad7134,
        _0x63796f = document[_0x384b15(0x3e3)](_0x384b15(0x441)),
        _0x1a2ab5 = getFin();
    updateHeader(_0x1a2ab5);
    if (_0x4edb4f === _0x384b15(0x326)) {
        const _0x3ddac9 = getUserWealthTier(_0x1a2ab5[_0x384b15(0x37b)], _0x1a2ab5[_0x384b15(0x25d)]),
            _0x3c5efb = _0x1a2ab5[_0x384b15(0x32d)][_0x384b15(0x31b)](_0x49c9a2 => _0x49c9a2['variance'] > 0x0);
        _0x63796f[_0x384b15(0x368)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:grid;grid-template-columns:300px\x201fr;gap:16px;align-items:start;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;flex-direction:column;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Your\x20Financial\x20Health</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chip\x22\x20style=\x22background:' + _0x3ddac9[_0x384b15(0x27e)] + _0x384b15(0x387) + _0x3ddac9[_0x384b15(0x27e)] + ';\x22>' + _0x3ddac9[_0x384b15(0x329)] + _0x384b15(0x3ff) + _0x3ddac9[_0x384b15(0x248)] + _0x384b15(0x36a) + _0x3ddac9[_0x384b15(0x337)] + _0x384b15(0x444) + (_0x3c5efb[_0x384b15(0x3c6)] > 0x0 ? _0x384b15(0x207) + _0x3c5efb[_0x384b15(0x3c6)] + '\x20leak' + (_0x3c5efb[_0x384b15(0x3c6)] > 0x1 ? 's' : '') + _0x384b15(0x3f0) : '<span\x20class=\x22chip\x20chip-green\x22>Clean</span>') + _0x384b15(0x1f6) + (_0x3c5efb[_0x384b15(0x3c6)] > 0x0 ? _0x3c5efb['map'](_0x3cfe1b => _0x384b15(0x41c) + _0x3cfe1b[_0x384b15(0x222)] + _0x384b15(0x201) + _0x3cfe1b[_0x384b15(0x2a0)][_0x384b15(0x44a)]() + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:right;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22color:var(--win-red);font-size:13px;font-weight:700;\x22>+KSh\x20' + _0x3cfe1b[_0x384b15(0x360)][_0x384b15(0x44a)]() + _0x384b15(0x34e))[_0x384b15(0x400)]('') : _0x384b15(0x235)) + _0x384b15(0x21e) + _0x3ddac9[_0x384b15(0x329)] + _0x384b15(0x256) + humanReadableStatus(_0x1a2ab5[_0x384b15(0x25d)], _0x1a2ab5['daily'], _0x1a2ab5[_0x384b15(0x3c8)], _0x3ddac9) + _0x384b15(0x388), window[_0x384b15(0x43e)] < 0x384 && (_0x63796f[_0x384b15(0x32c)](_0x384b15(0x399))[_0x384b15(0x3c4)]['gridTemplateColumns'] = '1fr'), setTimeout(() => renderChart(), 0x64);
    }
    if (_0x4edb4f === _0x384b15(0x2a2)) {
        let _0x24dc0c = _0x1a2ab5[_0x384b15(0x32d)]['map'](_0x34c8a7 => _0x384b15(0x3c5) + _0x34c8a7['label'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>Budget:\x20KSh\x20' + _0x34c8a7[_0x384b15(0x2a0)][_0x384b15(0x44a)]() + _0x384b15(0x33a) + _0x34c8a7[_0x384b15(0x39c)][_0x384b15(0x44a)]() + _0x384b15(0x3b7) + Math[_0x384b15(0x3ac)](0x64, _0x34c8a7[_0x384b15(0x39c)] / _0x34c8a7[_0x384b15(0x2a0)] * 0x64) + _0x384b15(0x3db) + (_0x34c8a7[_0x384b15(0x202)] <= 0x0 ? _0x384b15(0x3ae) : _0x384b15(0x308)) + _0x384b15(0x31a) + (_0x34c8a7['pending'] <= 0x0 ? '<span\x20class=\x22chip\x20chip-green\x22>✓\x20Settled</span>' : _0x384b15(0x38b) + _0x34c8a7[_0x384b15(0x202)][_0x384b15(0x44a)]() + _0x384b15(0x2aa)) + _0x384b15(0x427) + (_0x34c8a7[_0x384b15(0x360)] > 0x0 ? _0x384b15(0x3e1) + _0x34c8a7[_0x384b15(0x360)][_0x384b15(0x44a)]() + _0x384b15(0x422) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>')[_0x384b15(0x400)]('');
        _0x63796f[_0x384b15(0x368)] = _0x384b15(0x2da) + (_0x24dc0c || _0x384b15(0x447)) + _0x384b15(0x353);
    }
    _0x4edb4f === _0x384b15(0x42d) && (_0x63796f[_0x384b15(0x368)] = _0x384b15(0x218), document[_0x384b15(0x3e3)](_0x384b15(0x3f1))[_0x384b15(0x231)](_0x384b15(0x3af), _0x54540f => {
        const _0xf088b4 = _0x384b15;
        if (_0x54540f['key'] === _0xf088b4(0x223)) handleAsk();
    }));
    if (_0x4edb4f === _0x384b15(0x429)) {
        let _0x3a5321 = state[_0x384b15(0x385)][_0x384b15(0x349)](_0x34e109 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22font-family:monospace;font-size:11px;color:var(--win-text-3);white-space:nowrap;\x22>' + new Date(_0x34e109['id'])[_0x384b15(0x32e)](_0x384b15(0x32a)) + _0x384b15(0x2ec) + _0x34e109[_0x384b15(0x271)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;gap:6px;margin-top:4px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chip\x20chip-green\x22\x20style=\x22font-size:10px;\x22>' + _0x34e109[_0x384b15(0x2d7)] + _0x384b15(0x1ed) + _0x34e109['credit'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:right;font-family:monospace;color:var(--win-green);font-weight:600;white-space:nowrap;\x22>+' + _0x34e109[_0x384b15(0x2a0)][_0x384b15(0x44a)]() + _0x384b15(0x3ad) + _0x34e109[_0x384b15(0x2a0)][_0x384b15(0x44a)]() + _0x384b15(0x36d))[_0x384b15(0x400)]('');
        _0x63796f[_0x384b15(0x368)] = '<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>General\x20Ledger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>' + state[_0x384b15(0x385)][_0x384b15(0x3c6)] + _0x384b15(0x341) + (_0x3a5321 || '<tr><td\x20colspan=\x224\x22\x20style=\x22padding:32px;text-align:center;color:var(--win-text-3);\x22>No\x20transactions\x20recorded\x20yet.</td></tr>') + _0x384b15(0x22a);
    }
    if (_0x4edb4f === 'settings') {
        const _0x4d3d37 = getUserWealthTier(_0x1a2ab5[_0x384b15(0x37b)], _0x1a2ab5[_0x384b15(0x25d)]);
        _0x63796f['innerHTML'] = _0x384b15(0x234) + (state[_0x384b15(0x3a1)]?.[_0x384b15(0x2e9)] || '—') + _0x384b15(0x1f1) + (state[_0x384b15(0x3a1)]?.[_0x384b15(0x344)] || '—') + _0x384b15(0x3ba) + _0x4d3d37[_0x384b15(0x27e)] + ';\x22>' + _0x4d3d37['displayName'] + _0x384b15(0x1e4);
    }
}

function renderChart() {
    const _0x3e52c0 = _0xad7134,
        _0x9bedac = document['getElementById'](_0x3e52c0(0x3d5))?.[_0x3e52c0(0x38d)]('2d');
    if (!_0x9bedac) return;
    const _0x208b84 = getFin(),
        _0x366604 = new Date();
    let _0x29e501 = [],
        _0x4a510a = [],
        _0x7da24c = [],
        _0x59c6a7 = [];
    for (let _0x4c3d31 = 0x6; _0x4c3d31 >= 0x0; _0x4c3d31--) {
        const _0x1efd2d = new Date();
        _0x1efd2d['setDate'](_0x366604[_0x3e52c0(0x3ab)]() - _0x4c3d31), _0x29e501[_0x3e52c0(0x41b)](_0x1efd2d['toLocaleDateString'](_0x3e52c0(0x32a), {
            'weekday': 'short'
        }));
        let _0x29d404 = 0x0,
            _0x2f3d8a = 0x0;
        state[_0x3e52c0(0x385)][_0x3e52c0(0x338)](_0xd8a7a => {
            const _0x4f3d69 = _0x3e52c0;
            if (new Date(_0xd8a7a['id'])['toDateString']() === _0x1efd2d[_0x4f3d69(0x25f)]()) {
                if (isLiquid(_0xd8a7a[_0x4f3d69(0x252)])) _0x29d404 += _0xd8a7a[_0x4f3d69(0x2a0)];
                if (isLiquid(_0xd8a7a['debit'])) _0x2f3d8a += _0xd8a7a[_0x4f3d69(0x2a0)];
            }
        }), _0x4a510a[_0x3e52c0(0x41b)](_0x29d404), _0x7da24c[_0x3e52c0(0x41b)](_0x2f3d8a), _0x59c6a7[_0x3e52c0(0x41b)](_0x208b84[_0x3e52c0(0x37b)]);
    }
    if (window[_0x3e52c0(0x2ce)]) window['travisChart'][_0x3e52c0(0x3cc)]();
    window[_0x3e52c0(0x2ce)] = new Chart(_0x9bedac, {
        'type': _0x3e52c0(0x306),
        'data': {
            'labels': _0x29e501,
            'datasets': [{
                'label': _0x3e52c0(0x312),
                'data': _0x59c6a7,
                'borderColor': _0x3e52c0(0x308),
                'borderDash': [0x6, 0x3],
                'pointRadius': 0x0,
                'fill': ![],
                'borderWidth': 0x2
            }, {
                'label': _0x3e52c0(0x2b6),
                'data': _0x4a510a,
                'borderColor': _0x3e52c0(0x229),
                'backgroundColor': _0x3e52c0(0x2e8),
                'fill': !![],
                'tension': 0.4,
                'borderWidth': 0x2,
                'pointBackgroundColor': _0x3e52c0(0x229),
                'pointRadius': 0x3
            }, {
                'label': _0x3e52c0(0x1dd),
                'data': _0x7da24c,
                'borderColor': _0x3e52c0(0x3ae),
                'backgroundColor': _0x3e52c0(0x2df),
                'fill': !![],
                'tension': 0.4,
                'borderWidth': 0x2,
                'pointBackgroundColor': _0x3e52c0(0x3ae),
                'pointRadius': 0x3
            }]
        },
        'options': {
            'responsive': !![],
            'maintainAspectRatio': ![],
            'plugins': {
                'legend': {
                    'labels': {
                        'color': _0x3e52c0(0x2fa),
                        'font': {
                            'size': 0xb,
                            'family': _0x3e52c0(0x27b)
                        },
                        'boxWidth': 0x14
                    }
                }
            },
            'scales': {
                'x': {
                    'grid': {
                        'color': _0x3e52c0(0x2fd)
                    },
                    'ticks': {
                        'color': _0x3e52c0(0x318),
                        'font': {
                            'size': 0xa
                        }
                    }
                },
                'y': {
                    'grid': {
                        'color': _0x3e52c0(0x2fd)
                    },
                    'ticks': {
                        'color': _0x3e52c0(0x318),
                        'font': {
                            'size': 0xa
                        }
                    },
                    'beginAtZero': !![]
                }
            }
        }
    });
}

function updateHeader(_0x43069) {
    const _0x17d099 = _0xad7134,
        _0x2d6488 = document[_0x17d099(0x3e3)](_0x17d099(0x2d3)),
        _0x55ddda = getUserWealthTier(_0x43069[_0x17d099(0x37b)], _0x43069[_0x17d099(0x25d)]),
        _0x3e4af5 = [{
            'label': _0x17d099(0x358),
            'value': 'KSh\x20' + _0x43069[_0x17d099(0x1e6)][_0x17d099(0x44a)](),
            'color': '#0078D4',
            'icon': '💰'
        }, {
            'label': 'Bills\x20You\x20Must\x20Pay',
            'value': 'KSh\x20' + _0x43069[_0x17d099(0x202)][_0x17d099(0x44a)](),
            'color': '#C42B1C',
            'icon': '📋'
        }, {
            'label': _0x17d099(0x266),
            'value': _0x43069[_0x17d099(0x3c8)] + _0x17d099(0x448),
            'color': _0x17d099(0x3ae),
            'icon': '📅'
        }, {
            'label': _0x17d099(0x2c7),
            'value': _0x17d099(0x317) + Math[_0x17d099(0x3a7)](0x0, _0x43069[_0x17d099(0x37b)])['toFixed'](0x0),
            'color': _0x55ddda[_0x17d099(0x27e)],
            'icon': '📊'
        }];
    _0x2d6488[_0x17d099(0x3c4)][_0x17d099(0x1d7)] = 'repeat(4,1fr)';
    window[_0x17d099(0x43e)] < 0x258 && (_0x2d6488[_0x17d099(0x3c4)][_0x17d099(0x1d7)] = _0x17d099(0x3f9));
    window[_0x17d099(0x43e)] < 0x190 && (_0x2d6488[_0x17d099(0x3c4)]['gridTemplateColumns'] = _0x17d099(0x2f2));
    _0x2d6488['innerHTML'] = _0x3e4af5[_0x17d099(0x349)](_0x346f68 => _0x17d099(0x2d0) + _0x346f68[_0x17d099(0x27e)] + ';\x22></div><div\x20class=\x22metric-label\x22>' + _0x346f68[_0x17d099(0x20b)] + '\x20' + _0x346f68['label'] + _0x17d099(0x219) + _0x346f68[_0x17d099(0x2fc)] + '</div></div>')[_0x17d099(0x400)]('');
    const _0x2f0e06 = document[_0x17d099(0x3e3)](_0x17d099(0x30d));
    if (_0x43069[_0x17d099(0x25d)] < 0x0) _0x2f0e06[_0x17d099(0x2f5)] = _0x17d099(0x3cd), _0x2f0e06[_0x17d099(0x378)] = '⚠\x20You\x20are\x20in\x20debt';
    else {
        if (_0x43069[_0x17d099(0x37b)] < 0x64) _0x2f0e06[_0x17d099(0x2f5)] = _0x17d099(0x3cd), _0x2f0e06[_0x17d099(0x378)] = _0x17d099(0x2a5);
        else {
            if (_0x43069['daily'] < 0x12c) _0x2f0e06[_0x17d099(0x2f5)] = 'chip\x20chip-red', _0x2f0e06[_0x17d099(0x378)] = _0x17d099(0x423);
            else _0x43069[_0x17d099(0x37b)] < 0x320 ? (_0x2f0e06[_0x17d099(0x2f5)] = _0x17d099(0x300), _0x2f0e06['textContent'] = _0x17d099(0x3ce)) : (_0x2f0e06['className'] = _0x17d099(0x315), _0x2f0e06[_0x17d099(0x378)] = _0x17d099(0x22e));
        }
    }
}

function showTxModal() {
    const _0x2e5aa2 = _0xad7134,
        _0x2e2a47 = document[_0x2e5aa2(0x3e3)](_0x2e5aa2(0x214)),
        _0x4c7929 = document[_0x2e5aa2(0x3e3)]('tx-credit');
    _0x2e2a47[_0x2e5aa2(0x368)] = _0x4c7929['innerHTML'] = '';
    const _0x56dcd6 = state[_0x2e5aa2(0x3a1)][_0x2e5aa2(0x344)] === _0x2e5aa2(0x227),
        _0x26be84 = (_0x5d13cf, _0x2bf3fa, _0x6f3f7f) => {
            const _0x408931 = _0x2e5aa2,
                _0x15e513 = document[_0x408931(0x39b)]('optgroup');
            return _0x15e513[_0x408931(0x222)] = '●\x20' + _0x5d13cf, _0x15e513[_0x408931(0x3c4)][_0x408931(0x27e)] = _0x2bf3fa, _0x6f3f7f['forEach'](_0x3486a1 => {
                _0x15e513['appendChild'](new Option(_0x3486a1, _0x3486a1));
            }), _0x15e513;
        };
    if (_0x56dcd6) {
        const _0x6697e9 = _0xa131b1 => {
            const _0x309b33 = _0x2e5aa2;
            _0xa131b1['appendChild'](_0x26be84(_0x309b33(0x2cd), _0x309b33(0x3ae), [_0x309b33(0x367), _0x309b33(0x2c9), _0x309b33(0x39a), _0x309b33(0x2b9)])), _0xa131b1[_0x309b33(0x2fb)](_0x26be84('INCOME', '#107C10', [_0x309b33(0x285), 'Side\x20Hustle', _0x309b33(0x324), _0x309b33(0x3e4), 'Other\x20Income'])), _0xa131b1[_0x309b33(0x2fb)](_0x26be84(_0x309b33(0x28a), _0x309b33(0x390), [_0x309b33(0x1ff), _0x309b33(0x40d), _0x309b33(0x375), _0x309b33(0x3ef), 'Medical', _0x309b33(0x2ad)])), _0xa131b1[_0x309b33(0x2fb)](_0x26be84(_0x309b33(0x283), _0x309b33(0x229), ['Entertainment', _0x309b33(0x1fb), _0x309b33(0x26b), 'Other\x20Fun\x20Spending'])), _0xa131b1[_0x309b33(0x2fb)](_0x26be84(_0x309b33(0x421), _0x309b33(0x308), [_0x309b33(0x33e), _0x309b33(0x3c2)]));
        };
        _0x6697e9(_0x2e2a47), _0x6697e9(_0x4c7929);
    } else {
        const _0x53f87d = _0x4872c6 => {
            const _0x4df0ee = _0x2e5aa2;
            _0x4872c6['appendChild'](_0x26be84(_0x4df0ee(0x2cd), _0x4df0ee(0x3ae), ['Bank\x20/\x20M-Pesa', _0x4df0ee(0x263), 'Accounts\x20Receivable', 'Inventory', _0x4df0ee(0x2eb)])), _0x4872c6[_0x4df0ee(0x2fb)](_0x26be84(_0x4df0ee(0x3df), _0x4df0ee(0x3ae), [_0x4df0ee(0x2c5), _0x4df0ee(0x3a6), _0x4df0ee(0x30f)])), _0x4872c6['appendChild'](_0x26be84('OPERATING\x20EXPENSES', _0x4df0ee(0x390), [_0x4df0ee(0x40d), _0x4df0ee(0x3ec), _0x4df0ee(0x29e), _0x4df0ee(0x23c), _0x4df0ee(0x42c), _0x4df0ee(0x28b)])), _0x4872c6[_0x4df0ee(0x2fb)](_0x26be84(_0x4df0ee(0x255), _0x4df0ee(0x229), [_0x4df0ee(0x415), _0x4df0ee(0x404), _0x4df0ee(0x224)])), _0x4872c6[_0x4df0ee(0x2fb)](_0x26be84(_0x4df0ee(0x421), '#0078D4', [_0x4df0ee(0x3f5), 'Loans\x20Payable']));
        };
        _0x53f87d(_0x2e2a47), _0x53f87d(_0x4c7929);
    }
    document[_0x2e5aa2(0x3e3)]('tx-modal')[_0x2e5aa2(0x34f)][_0x2e5aa2(0x37c)]('show'), updateLiveHud();
}
async function commitTransaction() {
    const _0xb878ae = _0xad7134,
        _0x520369 = parseFloat(document[_0xb878ae(0x3e3)](_0xb878ae(0x212))[_0xb878ae(0x2fc)]),
        _0xc737aa = document['getElementById'](_0xb878ae(0x214))[_0xb878ae(0x2fc)],
        _0x5bcf24 = document['getElementById']('tx-credit')[_0xb878ae(0x2fc)],
        _0x4b237b = document[_0xb878ae(0x3e3)](_0xb878ae(0x3a9))[_0xb878ae(0x2fc)] || 'Market\x20Exchange';
    if (_0xc737aa === _0x5bcf24 || isNaN(_0x520369) || _0x520369 <= 0x0) return showCustomAlert('Error:\x20Transaction\x20must\x20move\x20money\x20between\x20two\x20different\x20accounts.');
    const _0x45a1c6 = {
        'id': Date[_0xb878ae(0x250)](),
        'debit': _0xc737aa,
        'credit': _0x5bcf24,
        'amount': _0x520369,
        'desc': _0x4b237b
    };
    state[_0xb878ae(0x385)][_0xb878ae(0x3f7)](_0x45a1c6), await saveData('tx', _0x45a1c6);
    if (typeof travisNotif !== _0xb878ae(0x2be)) travisNotif[_0xb878ae(0x439)]();
    if (typeof saveBackup === _0xb878ae(0x43c)) {
        await saveBackup();
        if (!backupDirHandle) await setupBackupFolder();
    }
    closeTxModal(), nav(_0xb878ae(0x326));
}

function closeTxModal() {
    const _0x2862f2 = _0xad7134;
    document['getElementById']('tx-modal')['classList'][_0x2862f2(0x29f)](_0x2862f2(0x2d2)), document[_0x2862f2(0x3e3)]('tx-amount')[_0x2862f2(0x2fc)] = '';
}

function _0x9f28(_0x517144, _0x19bb16) {
    _0x517144 = _0x517144 - 0x1d5;
    const _0x5a8858 = _0x5a88();
    let _0x9f28f5 = _0x5a8858[_0x517144];
    return _0x9f28f5;
}

function addObligationRow(_0x81d0dc = '', _0x1d0b91 = '') {
    const _0x312ac3 = _0xad7134,
        _0x20ffc2 = document[_0x312ac3(0x39b)](_0x312ac3(0x399));
    _0x20ffc2[_0x312ac3(0x3c4)][_0x312ac3(0x291)] = _0x312ac3(0x1f3), _0x20ffc2[_0x312ac3(0x368)] = _0x312ac3(0x2f8) + _0x81d0dc + _0x312ac3(0x210) + _0x1d0b91 + '\x22\x20class=\x22win-input\x22\x20style=\x22width:110px;\x22><button\x20onclick=\x22this.parentElement.remove()\x22\x20style=\x22width:28px;height:28px;border-radius:50%;border:1px\x20solid\x20rgba(196,43,28,0.3);background:rgba(196,43,28,0.05);color:var(--win-red);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;\x22>×</button>', document[_0x312ac3(0x3e3)](_0x312ac3(0x35a))[_0x312ac3(0x2fb)](_0x20ffc2);
}

function setUserType(_0x10e149) {
    const _0x14e669 = _0xad7134;
    state['tempType'] = _0x10e149, document[_0x14e669(0x3e3)](_0x14e669(0x401))['className'] = _0x14e669(0x373) + (_0x10e149 === _0x14e669(0x227) ? _0x14e669(0x23b) : ''), document['getElementById']('btn-b')[_0x14e669(0x2f5)] = 'seg-btn' + (_0x10e149 === 'business' ? _0x14e669(0x23b) : '');
}
async function finalizeSetup() {
    const _0x5a788b = _0xad7134,
        _0x52e1fc = document[_0x5a788b(0x3e3)](_0x5a788b(0x1df))[_0x5a788b(0x2fc)],
        _0x16e43d = Array[_0x5a788b(0x2e2)](document[_0x5a788b(0x3a4)]('#obligation-list\x20>\x20div'))[_0x5a788b(0x349)](_0x98cd25 => ({
            'label': _0x98cd25['querySelectorAll']('input')[0x0][_0x5a788b(0x2fc)],
            'amount': parseFloat(_0x98cd25[_0x5a788b(0x3a4)](_0x5a788b(0x1e5))[0x1]['value']) || 0x0
        }))[_0x5a788b(0x31b)](_0x5741a4 => _0x5741a4[_0x5a788b(0x222)]);
    if (!_0x52e1fc || !state['tempType']) return showCustomAlert('Please\x20enter\x20your\x20name\x20and\x20select\x20profile\x20type.');
    state['user'] = {
        'name': _0x52e1fc,
        'type': state['tempType']
    }, state['obligations'] = _0x16e43d, await saveData(_0x5a788b(0x342), {
        'id': _0x5a788b(0x2db),
        'user': state['user'],
        'obligations': state[_0x5a788b(0x38f)]
    });
    if (typeof saveBackup === 'function') await saveBackup();
    location[_0x5a788b(0x428)]();
}
async function factoryReset() {
    const _0x17380f = _0xad7134;
    confirm('WARNING:\x20This\x20will\x20delete\x20ALL\x20your\x20financial\x20data.\x20Cannot\x20undo.\x20Continue?') && (indexedDB[_0x17380f(0x42a)](_0x17380f(0x323)), location[_0x17380f(0x428)]());
}

function showHelpModal() {
    const _0x34c5c0 = _0xad7134,
        _0x191635 = document[_0x34c5c0(0x3e3)](_0x34c5c0(0x412));
    _0x191635[_0x34c5c0(0x3c4)][_0x34c5c0(0x434)] = _0x34c5c0(0x380);
}

function closeHelpModal() {
    const _0x52fb18 = _0xad7134,
        _0x1c67eb = document[_0x52fb18(0x3e3)]('help-modal');
    _0x1c67eb[_0x52fb18(0x3c4)]['display'] = _0x52fb18(0x2ab);
}
async function handleAsk() {
    const _0x6ced3e = _0xad7134,
        _0x2aef52 = document[_0x6ced3e(0x3e3)](_0x6ced3e(0x3f1)),
        _0x17e80f = document[_0x6ced3e(0x3e3)](_0x6ced3e(0x296)),
        _0x4dd8bc = _0x2aef52['value']['trim']();
    if (!_0x4dd8bc) return;
    _0x17e80f[_0x6ced3e(0x368)] += _0x6ced3e(0x24f) + escapeHtml(_0x4dd8bc) + _0x6ced3e(0x42b), _0x2aef52[_0x6ced3e(0x2fc)] = '', _0x17e80f[_0x6ced3e(0x36e)] = _0x17e80f[_0x6ced3e(0x43d)];
    const _0x3b871b = document['createElement']('div');
    _0x3b871b['innerHTML'] = _0x6ced3e(0x351), _0x17e80f[_0x6ced3e(0x2fb)](_0x3b871b), _0x17e80f[_0x6ced3e(0x36e)] = _0x17e80f['scrollHeight'], await new Promise(_0xc60a32 => setTimeout(_0xc60a32, 0x258 + Math[_0x6ced3e(0x1eb)]() * 0x1f4)), _0x3b871b[_0x6ced3e(0x29f)]();
    if (hasPendingClarification()) {
        const _0x5ece32 = conversationState[_0x6ced3e(0x3fb)],
            _0x26cb1a = _0x4dd8bc[_0x6ced3e(0x37f)](/(\d+(?:,\d+)?(?:\s*k|\s*thousand|\s*million)?)/i);
        let _0x2a09ae = 0x0;
        if (_0x26cb1a) {
            let _0x17050a = _0x26cb1a[0x1][_0x6ced3e(0x21f)](/,/g, '');
            if (_0x17050a['toLowerCase']()[_0x6ced3e(0x389)]('k')) _0x17050a = parseFloat(_0x17050a) * 0x3e8;
            else {
                if (_0x17050a['toLowerCase']()[_0x6ced3e(0x389)](_0x6ced3e(0x2e7))) _0x17050a = parseFloat(_0x17050a) * 0xf4240;
            }
            _0x2a09ae = parseFloat(_0x17050a);
        }
        if (!isNaN(_0x2a09ae) && _0x2a09ae > 0x0) {
            const _0x46714a = getFin(),
                _0x5051fa = getStatusSummary(),
                _0x2890b2 = _0x5051fa[_0x6ced3e(0x365)],
                _0x37fd9f = _0x5051fa['cash'],
                _0x50576d = _0x5051fa[_0x6ced3e(0x382)],
                _0x1bbd82 = _0x5051fa[_0x6ced3e(0x3c8)];
            let _0x20e768 = '',
                _0xff6e44 = '';
            if (_0x5ece32[_0x6ced3e(0x3f4)] === _0x6ced3e(0x398)) {
                if (_0x2890b2['adviceStyle'] === 'survival') {
                    if (_0x2a09ae > _0x37fd9f) _0x20e768 = _0x6ced3e(0x38e) + _0x2a09ae + _0x6ced3e(0x1db) + _0x5ece32[_0x6ced3e(0x35b)] + _0x6ced3e(0x442) + _0x37fd9f + '\x20shillings\x20TOTAL\x20for\x20the\x20next\x20' + _0x1bbd82 + '\x20days.\x20You\x20cannot\x20afford\x20this.', _0xff6e44 = 'Do\x20not\x20buy\x20this.\x20Focus\x20only\x20on\x20food\x20and\x20rent.';
                    else {
                        if (_0x2a09ae > _0x50576d) {
                            const _0x387734 = Math[_0x6ced3e(0x1fe)](_0x2a09ae / _0x50576d);
                            _0x20e768 = _0x5ece32['originalQuestion'] + '\x20costs\x20' + _0x2a09ae + _0x6ced3e(0x3c9) + Math[_0x6ced3e(0x437)](_0x50576d) + _0x6ced3e(0x3cb), _0xff6e44 = _0x6ced3e(0x20e) + _0x387734 + _0x6ced3e(0x26e) + (_0x387734 > 0x1 ? 's' : '') + '\x20first.\x20Don\x27t\x20buy\x20today.';
                        } else {
                            const _0x3d5ba9 = _0x37fd9f - _0x2a09ae,
                                _0x46cbf0 = _0x3d5ba9 / _0x1bbd82;
                            _0x20e768 = '\x20' + _0x5ece32[_0x6ced3e(0x35b)] + _0x6ced3e(0x3bf) + _0x2a09ae + _0x6ced3e(0x217) + _0x3d5ba9 + _0x6ced3e(0x1d9) + _0x1bbd82 + _0x6ced3e(0x357), _0xff6e44 = _0x6ced3e(0x200) + Math[_0x6ced3e(0x437)](_0x46cbf0) + _0x6ced3e(0x371);
                        }
                    }
                } else {
                    if (_0x2890b2[_0x6ced3e(0x379)] === 'conservative') {
                        const _0x58c73f = Math['round'](_0x2a09ae / _0x37fd9f * 0x64);
                        _0x58c73f > 0x1e ? (_0x20e768 = _0x6ced3e(0x28e) + _0x5ece32[_0x6ced3e(0x35b)] + '\x20costs\x20' + _0x2a09ae + _0x6ced3e(0x2de) + _0x58c73f + '%\x20of\x20your\x20savings.', _0xff6e44 = _0x6ced3e(0x292)) : (_0x20e768 = '\x20' + _0x5ece32[_0x6ced3e(0x35b)] + '\x20costs\x20' + _0x2a09ae + _0x6ced3e(0x30a), _0xff6e44 = _0x6ced3e(0x3fe));
                    } else _0x20e768 = '💎\x20' + _0x5ece32['originalQuestion'] + _0x6ced3e(0x3bf) + _0x2a09ae + '\x20shillings.\x20At\x20your\x20wealth\x20level,\x20affordability\x20isn\x27t\x20the\x20question.', _0xff6e44 = 'Does\x20this\x20purchase\x20align\x20with\x20your\x20goals\x20and\x20bring\x20you\x20value?\x20If\x20yes,\x20enjoy.';
                }
            } else {
                if (_0x5ece32[_0x6ced3e(0x3f4)] === _0x6ced3e(0x2dd)) {
                    if (_0x2890b2[_0x6ced3e(0x379)] === _0x6ced3e(0x239)) _0x20e768 = _0x6ced3e(0x3f2) + _0x2a09ae + '\x20shilling\x20loan.\x20With\x20your\x20current\x20situation,\x20any\x20loan\x20is\x20dangerous.', _0xff6e44 = _0x6ced3e(0x41e);
                    else {
                        const _0x4c0c10 = Math[_0x6ced3e(0x1f7)](_0x2a09ae * 0.15);
                        _0x20e768 = _0x6ced3e(0x1f5) + _0x2a09ae + _0x6ced3e(0x3b4) + _0x4c0c10 + _0x6ced3e(0x269), _0xff6e44 = _0x6ced3e(0x420) + _0x4c0c10 + _0x6ced3e(0x293);
                    }
                }
            }
            const _0x3a9d0f = _0x20e768 + _0x6ced3e(0x286) + _0xff6e44,
                _0x93db10 = _0x573fbb(_0x3a9d0f, _0x2890b2, _0x50576d, _0x37fd9f, _0x1bbd82);
            _0x17e80f[_0x6ced3e(0x368)] += _0x6ced3e(0x426) + _0x93db10 + _0x6ced3e(0x42b), _0x17e80f[_0x6ced3e(0x36e)] = _0x17e80f[_0x6ced3e(0x43d)], clearPendingClarification();
            return;
        } else {
            const _0x2fae4a = _0x6ced3e(0x316),
                _0x153d3a = _0x573fbb(_0x2fae4a, getStatusSummary()[_0x6ced3e(0x365)], 0x0, 0x0, 0x0);
            _0x17e80f[_0x6ced3e(0x368)] += _0x6ced3e(0x426) + _0x153d3a + _0x6ced3e(0x42b), _0x17e80f[_0x6ced3e(0x36e)] = _0x17e80f[_0x6ced3e(0x43d)];
            return;
        }
    }
    const _0x3cc9b0 = _0x4dd8bc[_0x6ced3e(0x39e)]()[_0x6ced3e(0x397)](),
        _0x384191 = getFin(),
        _0x49eb76 = getStatusSummary(),
        _0x4188b7 = state[_0x6ced3e(0x3a1)]?.[_0x6ced3e(0x344)] === _0x6ced3e(0x33c),
        _0x13d8d9 = _0x49eb76[_0x6ced3e(0x365)],
        _0x3f630a = _0x49eb76['cash'],
        _0x3c490f = _0x49eb76[_0x6ced3e(0x382)],
        _0x12c2f2 = _0x49eb76['daysRem'];
    let _0x5818c3 = 0x0;
    const _0x4be3f8 = _0x3cc9b0['replace'](/,/g, ''),
        _0x58bb4a = _0x4be3f8[_0x6ced3e(0x37f)](/(\d+(?:\.\d+)?)\s*(k|thousand|ksh|shillings|bob|million)?/i);
    if (_0x58bb4a) {
        _0x5818c3 = parseFloat(_0x58bb4a[0x1]);
        if (_0x58bb4a[0x2] && /k|thousand/i ['test'](_0x58bb4a[0x2])) _0x5818c3 *= 0x3e8;
        if (_0x58bb4a[0x2] && /million/i ['test'](_0x58bb4a[0x2])) _0x5818c3 *= 0xf4240;
    }
    const _0x3a0ffe = (..._0x3381e7) => _0x3381e7[_0x6ced3e(0x405)](_0x42d67e => _0x3cc9b0['includes'](_0x42d67e)),
        _0x49845e = {
            'spend': _0x3a0ffe('buy', 'spend', _0x6ced3e(0x37e), _0x6ced3e(0x2f6), _0x6ced3e(0x2d9), _0x6ced3e(0x2f4), _0x6ced3e(0x233), 'unga', 'eggs', _0x6ced3e(0x2a4), _0x6ced3e(0x2a7), _0x6ced3e(0x413), _0x6ced3e(0x3d2), _0x6ced3e(0x242), _0x6ced3e(0x27a), _0x6ced3e(0x22f), _0x6ced3e(0x2ac), _0x6ced3e(0x203)),
            'loan': _0x3a0ffe(_0x6ced3e(0x2dd), _0x6ced3e(0x411), _0x6ced3e(0x330), _0x6ced3e(0x3bb), _0x6ced3e(0x30c), _0x6ced3e(0x252), _0x6ced3e(0x284), 'branch'),
            'status': _0x3a0ffe(_0x6ced3e(0x31c), _0x6ced3e(0x3b3), _0x6ced3e(0x24e), _0x6ced3e(0x3ed), 'doing', _0x6ced3e(0x29b), _0x6ced3e(0x2bb), 'summary', _0x6ced3e(0x282)),
            'hiring': _0x3a0ffe(_0x6ced3e(0x40b), _0x6ced3e(0x276), 'staff', _0x6ced3e(0x41a), _0x6ced3e(0x209), _0x6ced3e(0x28c), _0x6ced3e(0x2ea)),
            'saving': _0x3a0ffe('save', 'saving', 'emergency', _0x6ced3e(0x305), 'set\x20aside'),
            'profit': _0x3a0ffe('profit', _0x6ced3e(0x3a5), _0x6ced3e(0x3e0), _0x6ced3e(0x335), _0x6ced3e(0x1e7), _0x6ced3e(0x37d), _0x6ced3e(0x370)),
            'habit': _0x3a0ffe(_0x6ced3e(0x3bc), 'spending\x20habit', _0x6ced3e(0x29a))
        };

    function _0x573fbb(_0x324040, _0x4beb7e, _0x4463d7, _0x17adcd, _0x2fbc34) {
        const _0x323c38 = _0x6ced3e,
            _0xb60d56 = _0x4beb7e[_0x323c38(0x27e)],
            _0x3ae2bf = _0x4beb7e[_0x323c38(0x329)],
            _0x111238 = _0x4463d7 > 0x0 ? _0x323c38(0x317) + Math[_0x323c38(0x437)](_0x4463d7)[_0x323c38(0x44a)]() : _0x323c38(0x22b),
            _0x3d53c3 = _0x17adcd > 0x0 ? 'KSh\x20' + _0x17adcd[_0x323c38(0x44a)]() : _0x323c38(0x2a8),
            _0x44223e = _0x323c38(0x1ef) + _0xb60d56 + _0x323c38(0x2cb) + _0x3ae2bf + _0x323c38(0x35d) + _0x111238 + _0x323c38(0x366) + _0x3d53c3 + _0x323c38(0x2a1) + (_0x2fbc34 > 0x0 ? _0x323c38(0x27c) + _0x2fbc34 + '</span></div>' : '') + _0x323c38(0x3fa),
            _0x13aa28 = '<div\x20style=\x22margin-top:16px;padding:12px\x2014px;border-left:3px\x20solid\x20' + _0xb60d56 + _0x323c38(0x431) + _0x324040 + _0x323c38(0x42b);
        return '' + _0x44223e + _0x13aa28;
    }
    let _0xb1306d = '';
    if (_0x49845e[_0x6ced3e(0x3b3)]) {
        _0xb1306d = humanReadableStatus(_0x3f630a, _0x3c490f, _0x12c2f2, _0x13d8d9);
        if (_0x13d8d9[_0x6ced3e(0x379)] === 'survival') _0xb1306d += _0x6ced3e(0x31f) + _0x13d8d9['priority'];
        else _0x13d8d9['adviceStyle'] === _0x6ced3e(0x220) ? _0xb1306d += '<br><br><strong>Next\x20step:</strong>\x20Look\x20at\x20your\x20biggest\x20expense\x20this\x20week.\x20Can\x20you\x20reduce\x20it\x20by\x2010%?' : _0xb1306d += _0x6ced3e(0x345) + Math[_0x6ced3e(0x437)](_0x3f630a * 0.1)['toLocaleString']() + '\x20shillings\x20this\x20month\x20for\x20emergencies.';
        const _0x2d0145 = _0x573fbb(_0xb1306d, _0x13d8d9, _0x3c490f, _0x3f630a, _0x12c2f2);
        _0x17e80f[_0x6ced3e(0x368)] += _0x6ced3e(0x426) + _0x2d0145 + '</div></div>', _0x17e80f['scrollTop'] = _0x17e80f[_0x6ced3e(0x43d)];
        return;
    }
    if (_0x49845e[_0x6ced3e(0x398)]) {
        if (_0x5818c3 === 0x0) {
            const _0x4ee439 = _0x3cc9b0[_0x6ced3e(0x37f)](/(?:buy|get|spend on|purchase)\s+([a-z\s]+)/i),
                _0x8c38a3 = _0x4ee439 ? _0x4ee439[0x1][_0x6ced3e(0x397)]() : 'this\x20item';
            setPendingClarification(_0x6ced3e(0x398), _0x8c38a3, _0x6ced3e(0x2a0)), _0xb1306d = _0x6ced3e(0x43b) + _0x8c38a3 + _0x6ced3e(0x1f9);
            const _0x49da76 = _0x573fbb(_0xb1306d, _0x13d8d9, _0x3c490f, _0x3f630a, _0x12c2f2);
            _0x17e80f[_0x6ced3e(0x368)] += _0x6ced3e(0x426) + _0x49da76 + _0x6ced3e(0x42b), _0x17e80f[_0x6ced3e(0x36e)] = _0x17e80f['scrollHeight'];
            return;
        }
        if (_0x3f630a < 0x0) {
            _0xb1306d = 'You\x20are\x20already\x20in\x20debt\x20by\x20' + Math[_0x6ced3e(0x35f)](_0x3f630a)[_0x6ced3e(0x44a)]() + _0x6ced3e(0x2b0) + _0x5818c3 + '\x20shillings.\x20Your\x20only\x20priority\x20is\x20to\x20earn\x20money\x20to\x20get\x20out\x20of\x20debt.';
            const _0x8c34b = _0x573fbb(_0xb1306d, _0x13d8d9, _0x3c490f, _0x3f630a, _0x12c2f2);
            _0x17e80f[_0x6ced3e(0x368)] += _0x6ced3e(0x426) + _0x8c34b + '</div></div>', _0x17e80f['scrollTop'] = _0x17e80f[_0x6ced3e(0x43d)];
            return;
        }
        if (_0x13d8d9['adviceStyle'] === _0x6ced3e(0x239)) {
            if (_0x5818c3 > _0x3f630a) _0xb1306d = _0x6ced3e(0x327) + _0x5818c3 + _0x6ced3e(0x334) + _0x3f630a + _0x6ced3e(0x22d) + _0x12c2f2 + '\x20days.\x20You\x20cannot\x20afford\x20this.';
            else {
                if (_0x5818c3 > _0x3c490f) {
                    const _0x5a0b60 = Math[_0x6ced3e(0x1fe)](_0x5818c3 / _0x3c490f);
                    _0xb1306d = _0x6ced3e(0x240) + _0x5818c3 + _0x6ced3e(0x28d) + Math['floor'](_0x3c490f) + '\x20shillings\x20per\x20day.\x20Save\x20for\x20' + _0x5a0b60 + '\x20day' + (_0x5a0b60 > 0x1 ? 's' : '') + '\x20first.';
                } else {
                    const _0x235757 = _0x3f630a - _0x5818c3,
                        _0x35d751 = _0x235757 / _0x12c2f2;
                    _0xb1306d = _0x6ced3e(0x384) + _0x235757 + _0x6ced3e(0x1d9) + _0x12c2f2 + '\x20days.\x20That\x27s\x20about\x20' + Math[_0x6ced3e(0x437)](_0x35d751) + _0x6ced3e(0x289);
                }
            }
        } else {
            if (_0x13d8d9['adviceStyle'] === _0x6ced3e(0x220)) {
                const _0x239c5c = Math[_0x6ced3e(0x1f7)](_0x5818c3 / _0x3f630a * 0x64);
                _0x239c5c > 0x1e ? _0xb1306d = _0x6ced3e(0x240) + _0x5818c3 + _0x6ced3e(0x2de) + _0x239c5c + _0x6ced3e(0x1ea) : _0xb1306d = '\x20' + _0x5818c3 + '\x20shillings\x20is\x20reasonable\x20for\x20your\x20situation.\x20Go\x20ahead\x20but\x20track\x20it.';
            } else {
                if (_0x13d8d9[_0x6ced3e(0x379)] === _0x6ced3e(0x395)) {
                    const _0x4dfc2e = Math[_0x6ced3e(0x1f7)](_0x5818c3 / _0x3f630a * 0x64);
                    _0x4dfc2e > 0x32 ? _0xb1306d = _0x6ced3e(0x3b0) + _0x5818c3 + _0x6ced3e(0x274) + _0x4dfc2e + _0x6ced3e(0x352) : _0xb1306d = _0x6ced3e(0x328);
                } else _0xb1306d = '💎\x20At\x20your\x20wealth\x20level,\x20' + _0x5818c3 + '\x20shillings\x20is\x20manageable.\x20The\x20real\x20question:\x20does\x20this\x20purchase\x20align\x20with\x20your\x20goals\x20and\x20bring\x20you\x20value?';
            }
        }
        const _0x282d37 = _0x573fbb(_0xb1306d, _0x13d8d9, _0x3c490f, _0x3f630a, _0x12c2f2);
        _0x17e80f[_0x6ced3e(0x368)] += _0x6ced3e(0x426) + _0x282d37 + _0x6ced3e(0x42b), _0x17e80f[_0x6ced3e(0x36e)] = _0x17e80f[_0x6ced3e(0x43d)];
        return;
    }
    if (_0x49845e[_0x6ced3e(0x2dd)]) {
        if (_0x5818c3 === 0x0) {
            setPendingClarification(_0x6ced3e(0x2dd), _0x6ced3e(0x2dd), _0x6ced3e(0x2a0)), _0xb1306d = 'How\x20many\x20shillings\x20are\x20you\x20thinking\x20of\x20borrowing?';
            const _0xfc2100 = _0x573fbb(_0xb1306d, _0x13d8d9, _0x3c490f, _0x3f630a, _0x12c2f2);
            _0x17e80f[_0x6ced3e(0x368)] += _0x6ced3e(0x426) + _0xfc2100 + _0x6ced3e(0x42b), _0x17e80f[_0x6ced3e(0x36e)] = _0x17e80f[_0x6ced3e(0x43d)];
            return;
        }
        if (_0x13d8d9['adviceStyle'] === _0x6ced3e(0x239)) _0xb1306d = _0x6ced3e(0x1e9) + _0x5818c3 + '\x20shillings.\x20You\x20cannot\x20afford\x20loan\x20repayments\x20right\x20now.\x20Focus\x20on\x20increasing\x20your\x20income\x20first.';
        else {
            if (_0x13d8d9['adviceStyle'] === _0x6ced3e(0x220)) {
                const _0x53e593 = Math[_0x6ced3e(0x1f7)](_0x5818c3 * 0.15);
                _0xb1306d = _0x6ced3e(0x26d) + _0x5818c3 + _0x6ced3e(0x3b4) + _0x53e593 + '\x20shillings\x20per\x20month\x20in\x20interest.\x20Only\x20borrow\x20if\x20absolutely\x20necessary.';
            } else {
                const _0x4702ee = Math['round'](_0x5818c3 * 0.12);
                _0xb1306d = _0x6ced3e(0x221) + _0x5818c3 + _0x6ced3e(0x3a0) + _0x4702ee + _0x6ced3e(0x386);
            }
        }
        const _0x22432c = _0x573fbb(_0xb1306d, _0x13d8d9, _0x3c490f, _0x3f630a, _0x12c2f2);
        _0x17e80f[_0x6ced3e(0x368)] += _0x6ced3e(0x426) + _0x22432c + _0x6ced3e(0x42b), _0x17e80f['scrollTop'] = _0x17e80f[_0x6ced3e(0x43d)];
        return;
    }
    if (_0x49845e[_0x6ced3e(0x414)]) {
        if (_0x13d8d9[_0x6ced3e(0x379)] === _0x6ced3e(0x239)) _0xb1306d = _0x6ced3e(0x20a);
        else {
            if (_0x13d8d9[_0x6ced3e(0x379)] === 'conservative') {
                const _0x3fe43b = Math[_0x6ced3e(0x437)](_0x3f630a * 0.25);
                _0xb1306d = _0x6ced3e(0x361) + _0x3fe43b[_0x6ced3e(0x44a)]() + _0x6ced3e(0x2c4);
            } else _0xb1306d = _0x6ced3e(0x25b);
        }
        const _0x95d345 = _0x573fbb(_0xb1306d, _0x13d8d9, _0x3c490f, _0x3f630a, _0x12c2f2);
        _0x17e80f['innerHTML'] += _0x6ced3e(0x426) + _0x95d345 + _0x6ced3e(0x42b), _0x17e80f[_0x6ced3e(0x36e)] = _0x17e80f[_0x6ced3e(0x43d)];
        return;
    }
    if (_0x49845e[_0x6ced3e(0x39f)]) {
        if (_0x13d8d9[_0x6ced3e(0x379)] === _0x6ced3e(0x239)) _0xb1306d = _0x6ced3e(0x205);
        else {
            if (_0x13d8d9['adviceStyle'] === _0x6ced3e(0x220)) {
                const _0x24ecf6 = Math[_0x6ced3e(0x437)](_0x3f630a * 0.07);
                _0xb1306d = _0x6ced3e(0x2cc) + _0x24ecf6[_0x6ced3e(0x44a)]() + _0x6ced3e(0x2f3);
            } else {
                const _0xb8c9e8 = Math[_0x6ced3e(0x437)](_0x3f630a * 0.15);
                _0xb1306d = '💎\x20At\x20your\x20level,\x20aim\x20to\x20save\x20' + _0xb8c9e8[_0x6ced3e(0x44a)]() + '\x20shillings\x20monthly.\x20Diversify:\x20SACCO,\x20MMF,\x20and\x20maybe\x20stocks.\x20Build\x20a\x206-month\x20emergency\x20fund\x20first.';
            }
        }
        const _0x58d921 = _0x573fbb(_0xb1306d, _0x13d8d9, _0x3c490f, _0x3f630a, _0x12c2f2);
        _0x17e80f[_0x6ced3e(0x368)] += _0x6ced3e(0x426) + _0x58d921 + _0x6ced3e(0x42b), _0x17e80f['scrollTop'] = _0x17e80f[_0x6ced3e(0x43d)];
        return;
    }
    if (_0x49845e[_0x6ced3e(0x1e0)] || _0x49845e['habit']) {
        const _0x414630 = _0x384191[_0x6ced3e(0x32d)]['filter'](_0x472c61 => _0x472c61[_0x6ced3e(0x360)] > 0x0);
        if (_0x414630[_0x6ced3e(0x3c6)] > 0x0) {
            const _0x267ddf = _0x414630[0x0];
            _0xb1306d = _0x6ced3e(0x3fd) + _0x267ddf[_0x6ced3e(0x360)]['toLocaleString']() + '\x20shillings\x20more\x20than\x20your\x20budget\x20on\x20' + _0x267ddf[_0x6ced3e(0x222)] + _0x6ced3e(0x1d8);
        } else _0xb1306d = _0x6ced3e(0x2ca) + (_0x384191[_0x6ced3e(0x32d)][_0x6ced3e(0x2ae)]((_0x128bcc, _0x487a79) => _0x487a79[_0x6ced3e(0x39c)] - _0x128bcc[_0x6ced3e(0x39c)])[0x0]?.[_0x6ced3e(0x222)] || _0x6ced3e(0x23f)) + _0x6ced3e(0x288) + Math[_0x6ced3e(0x3a7)](..._0x384191[_0x6ced3e(0x32d)]['map'](_0x1a2092 => _0x1a2092[_0x6ced3e(0x39c)]))[_0x6ced3e(0x44a)]() + _0x6ced3e(0x33d);
        const _0x54ef70 = _0x573fbb(_0xb1306d, _0x13d8d9, _0x3c490f, _0x3f630a, _0x12c2f2);
        _0x17e80f[_0x6ced3e(0x368)] += '<div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>' + _0x54ef70 + '</div></div>', _0x17e80f[_0x6ced3e(0x36e)] = _0x17e80f[_0x6ced3e(0x43d)];
        return;
    }
    _0xb1306d = _0x6ced3e(0x21c);
    const _0x17c8d1 = _0x573fbb(_0xb1306d, _0x13d8d9, _0x3c490f, _0x3f630a, _0x12c2f2);
    _0x17e80f['innerHTML'] += '<div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>' + _0x17c8d1 + _0x6ced3e(0x42b), _0x17e80f[_0x6ced3e(0x36e)] = _0x17e80f['scrollHeight'];
}

function escapeHtml(_0x23a955) {
    const _0x3a857d = _0xad7134;
    if (!_0x23a955) return '';
    return _0x23a955[_0x3a857d(0x21f)](/[&<>]/g, function(_0x15d491) {
        const _0x16cdd7 = _0x3a857d;
        if (_0x15d491 === '&') return '&amp;';
        if (_0x15d491 === '<') return _0x16cdd7(0x279);
        if (_0x15d491 === '>') return _0x16cdd7(0x304);
        return _0x15d491;
    });
}
window[_0xad7134(0x231)]('resize', () => {
    const _0x48b3fa = _0xad7134,
        _0x20747c = document[_0x48b3fa(0x3e3)](_0x48b3fa(0x2d3));
    if (!_0x20747c) return;
    if (window[_0x48b3fa(0x43e)] < 0x258) _0x20747c[_0x48b3fa(0x3c4)][_0x48b3fa(0x1d7)] = 'repeat(2,1fr)';
    else window[_0x48b3fa(0x43e)] < 0x384 ? _0x20747c[_0x48b3fa(0x3c4)][_0x48b3fa(0x1d7)] = _0x48b3fa(0x3f9) : _0x20747c[_0x48b3fa(0x3c4)]['gridTemplateColumns'] = _0x48b3fa(0x1e1);
});
async function boot() {
    const _0xae128d = _0xad7134;
    await initDB();
    let _0x59a57e = await getData('meta', 'config') || {
        'activated': ![]
    };
    const _0x2e9ab7 = window[_0xae128d(0x21a)](_0xae128d(0x302))[_0xae128d(0x32f)] || navigator[_0xae128d(0x301)] === !![];
    await new Promise(_0x1c1ecc => setTimeout(_0x1c1ecc, 0x190));
    if (!_0x59a57e[_0xae128d(0x314)]) {
        _0x2e9ab7 ? (document[_0xae128d(0x3e3)](_0xae128d(0x280))[_0xae128d(0x34f)][_0xae128d(0x29f)](_0xae128d(0x325)), document[_0xae128d(0x3e3)](_0xae128d(0x2b2))[_0xae128d(0x3c4)][_0xae128d(0x434)] = 'none') : document['getElementById'](_0xae128d(0x2b2))[_0xae128d(0x3c4)][_0xae128d(0x434)] = _0xae128d(0x380);
        return;
    }
    if (!_0x59a57e[_0xae128d(0x3a1)]) {
        document[_0xae128d(0x3e3)](_0xae128d(0x3c1))['classList'][_0xae128d(0x29f)]('hidden'), document[_0xae128d(0x3e3)](_0xae128d(0x2b2))[_0xae128d(0x3c4)]['display'] = 'none';
        return;
    }
    state[_0xae128d(0x3a1)] = _0x59a57e[_0xae128d(0x3a1)], state[_0xae128d(0x38f)] = _0x59a57e['obligations'] || [], state[_0xae128d(0x385)] = (await getAllData('tx'))['sort']((_0x270b97, _0x58326b) => _0x58326b['id'] - _0x270b97['id']), document[_0xae128d(0x3e3)]('display-name')['innerText'] = state[_0xae128d(0x3a1)][_0xae128d(0x2e9)], document[_0xae128d(0x3e3)](_0xae128d(0x3a2))[_0xae128d(0x44b)] = state[_0xae128d(0x3a1)]['type'][_0xae128d(0x2a6)]() + _0xae128d(0x294), document[_0xae128d(0x3e3)]('sidebar-name')['innerText'] = state['user'][_0xae128d(0x2e9)], document['getElementById'](_0xae128d(0x391))[_0xae128d(0x44b)] = state[_0xae128d(0x3a1)]['type']['charAt'](0x0)[_0xae128d(0x2a6)]() + state['user'][_0xae128d(0x344)][_0xae128d(0x372)](0x1), document[_0xae128d(0x3e3)](_0xae128d(0x277))[_0xae128d(0x44b)] = state['user'][_0xae128d(0x2e9)][_0xae128d(0x1e3)](0x0)[_0xae128d(0x2a6)](), document[_0xae128d(0x3e3)](_0xae128d(0x2b2))[_0xae128d(0x3c4)][_0xae128d(0x434)] = _0xae128d(0x2ab), nav('dash');
    if (typeof travisNotif !== _0xae128d(0x2be)) travisNotif[_0xae128d(0x43a)]();
}
document[_0xad7134(0x3e3)](_0xad7134(0x264))?.['addEventListener'](_0xad7134(0x2bd), triggerInstall), window[_0xad7134(0x1f8)] = boot;
