const _0x1e67ff = _0x6036;
(function(_0x1937b6, _0x44affc) {
    const _0x4bc9a9 = _0x6036,
        _0x1bc896 = _0x1937b6();
    while (!![]) {
        try {
            const _0x53a508 = parseInt(_0x4bc9a9(0x2ee)) / 0x1 + parseInt(_0x4bc9a9(0x1b9)) / 0x2 * (parseInt(_0x4bc9a9(0x1f9)) / 0x3) + parseInt(_0x4bc9a9(0x1cf)) / 0x4 * (parseInt(_0x4bc9a9(0x1d8)) / 0x5) + -parseInt(_0x4bc9a9(0x289)) / 0x6 * (-parseInt(_0x4bc9a9(0x3ea)) / 0x7) + -parseInt(_0x4bc9a9(0x1f2)) / 0x8 + -parseInt(_0x4bc9a9(0x406)) / 0x9 * (-parseInt(_0x4bc9a9(0x205)) / 0xa) + parseInt(_0x4bc9a9(0x279)) / 0xb * (-parseInt(_0x4bc9a9(0x304)) / 0xc);
            if (_0x53a508 === _0x44affc) break;
            else _0x1bc896['push'](_0x1bc896['shift']());
        } catch (_0x1e6fa3) {
            _0x1bc896['push'](_0x1bc896['shift']());
        }
    }
}(_0x5258, 0x4d061), function injectStyles() {
    const _0x15a840 = _0x6036;
    if (document['getElementById'](_0x15a840(0x2db))) return;
    const _0x30a565 = document[_0x15a840(0x30e)](_0x15a840(0x2cd));
    _0x30a565['id'] = _0x15a840(0x2db), _0x30a565[_0x15a840(0x38d)] = _0x15a840(0x3bc), document[_0x15a840(0x22a)][_0x15a840(0x26d)](_0x30a565);
}());
const BACKEND_URL = 'https://travis-j1w9.onrender.com',
    WEALTH_TIERS = {
        'DESTITUTE': {
            'minDailyCap': 0x0,
            'maxDailyCap': 0x64,
            'label': _0x1e67ff(0x2bd),
            'displayName': _0x1e67ff(0x329),
            'color': _0x1e67ff(0x275),
            'adviceStyle': _0x1e67ff(0x372),
            'humanDescription': _0x1e67ff(0x3e1),
            'priority': _0x1e67ff(0x269),
            'dailyCapHuman': _0xd26c81 => 'You\x20have\x20about\x20' + Math[_0x1e67ff(0x3d0)](_0xd26c81) + _0x1e67ff(0x1f4),
            'bufferHuman': (_0x4f1282, _0x5e8c15) => 'You\x20have\x20' + _0x4f1282 + _0x1e67ff(0x3e5) + _0x5e8c15 + '\x20days.\x20That\x27s\x20very\x20little.'
        },
        'SURVIVAL': {
            'minDailyCap': 0x65,
            'maxDailyCap': 0x12c,
            'label': _0x1e67ff(0x38f),
            'displayName': _0x1e67ff(0x2d1),
            'color': _0x1e67ff(0x23b),
            'adviceStyle': 'survival',
            'humanDescription': _0x1e67ff(0x268),
            'priority': _0x1e67ff(0x3d5),
            'dailyCapHuman': _0x69671c => 'You\x20have\x20about\x20' + Math['floor'](_0x69671c) + _0x1e67ff(0x35a),
            'bufferHuman': (_0x3d03f4, _0x55ea2e) => 'You\x20have\x20' + _0x3d03f4 + _0x1e67ff(0x415) + _0x55ea2e + _0x1e67ff(0x237)
        },
        'STRUGGLING': {
            'minDailyCap': 0x12d,
            'maxDailyCap': 0x320,
            'label': _0x1e67ff(0x288),
            'displayName': _0x1e67ff(0x3fa),
            'color': '#F39C12',
            'adviceStyle': _0x1e67ff(0x2f0),
            'humanDescription': _0x1e67ff(0x3a3),
            'priority': _0x1e67ff(0x40a),
            'dailyCapHuman': _0x112b3d => _0x1e67ff(0x405) + Math['floor'](_0x112b3d) + _0x1e67ff(0x380),
            'bufferHuman': (_0x3f65d6, _0xa4fd71) => 'You\x20have\x20' + _0x3f65d6 + _0x1e67ff(0x390) + _0xa4fd71 + _0x1e67ff(0x25b)
        },
        'STABLE': {
            'minDailyCap': 0x321,
            'maxDailyCap': 0xbb8,
            'label': 'STABLE',
            'displayName': _0x1e67ff(0x352),
            'color': _0x1e67ff(0x1ec),
            'adviceStyle': _0x1e67ff(0x232),
            'humanDescription': _0x1e67ff(0x360),
            'priority': _0x1e67ff(0x20f),
            'dailyCapHuman': _0x1f185a => _0x1e67ff(0x405) + Math['floor'](_0x1f185a) + _0x1e67ff(0x3e0),
            'bufferHuman': (_0x4359de, _0x8a8353) => _0x1e67ff(0x1fb) + _0x4359de + _0x1e67ff(0x2bb) + _0x8a8353 + _0x1e67ff(0x215)
        },
        'AFFLUENT': {
            'minDailyCap': 0xbb9,
            'maxDailyCap': 0x3a98,
            'label': _0x1e67ff(0x3b8),
            'displayName': _0x1e67ff(0x3cb),
            'color': _0x1e67ff(0x26f),
            'adviceStyle': _0x1e67ff(0x35f),
            'humanDescription': _0x1e67ff(0x308),
            'priority': _0x1e67ff(0x28b),
            'dailyCapHuman': _0x193322 => _0x1e67ff(0x405) + Math[_0x1e67ff(0x3d0)](_0x193322) + _0x1e67ff(0x312),
            'bufferHuman': (_0x1d7ce4, _0x1c7638) => 'You\x20have\x20' + _0x1d7ce4 + _0x1e67ff(0x1f1)
        },
        'WEALTHY': {
            'minDailyCap': 0x3a99,
            'maxDailyCap': 0xc350,
            'label': _0x1e67ff(0x2cf),
            'displayName': '💎\x20Wealthy',
            'color': _0x1e67ff(0x3da),
            'adviceStyle': 'preservation',
            'humanDescription': _0x1e67ff(0x26c),
            'priority': _0x1e67ff(0x385),
            'dailyCapHuman': _0x627256 => 'You\x20have\x20' + Math[_0x1e67ff(0x3d0)](_0x627256) + _0x1e67ff(0x330),
            'bufferHuman': (_0x154998, _0x1c41e6) => 'You\x20have\x20' + _0x154998 + '\x20shillings\x20in\x20liquid\x20assets.\x20Wealth\x20is\x20preserved.'
        },
        'ELITE': {
            'minDailyCap': 0xc351,
            'maxDailyCap': Infinity,
            'label': _0x1e67ff(0x2b1),
            'displayName': '👑\x20Elite',
            'color': _0x1e67ff(0x23e),
            'adviceStyle': _0x1e67ff(0x361),
            'humanDescription': 'You\x20are\x20in\x20the\x20top\x20tier\x20of\x20wealth\x20in\x20Kenya.',
            'priority': _0x1e67ff(0x315),
            'dailyCapHuman': _0x3e73ec => _0x1e67ff(0x2a3) + Math[_0x1e67ff(0x3d0)](_0x3e73ec)['toLocaleString']() + _0x1e67ff(0x1e7),
            'bufferHuman': (_0x5def0a, _0x3aeb0c) => _0x1e67ff(0x26a) + _0x5def0a[_0x1e67ff(0x3c9)]() + _0x1e67ff(0x266)
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
            'description': _0x1e67ff(0x3f2)
        }
    };
let conversationState = {
    'pendingClarification': null,
    'lastResponse': null,
    'conversationHistory': [],
    'currentTopic': null
};

function setPendingClarification(_0x159a27, _0x3a10af, _0x266f6e) {
    const _0x25a839 = _0x1e67ff;
    conversationState['pendingClarification'] = {
        'originalIntent': _0x159a27,
        'originalQuestion': _0x3a10af,
        'expectedType': _0x266f6e,
        'timestamp': Date[_0x25a839(0x354)]()
    };
}

function clearPendingClarification() {
    const _0x19a169 = _0x1e67ff;
    conversationState[_0x19a169(0x3ce)] = null;
}

function hasPendingClarification() {
    const _0x1e5814 = _0x1e67ff;
    return conversationState[_0x1e5814(0x3ce)] !== null;
}

function getUserWealthTier(_0x11d5da, _0x39c208) {
    const _0x1f52b5 = _0x1e67ff;
    if (_0x39c208 < 0x0) return {
        'name': _0x1f52b5(0x2bd),
        ...WEALTH_TIERS[_0x1f52b5(0x2bd)],
        'displayName': _0x1f52b5(0x30a),
        'humanDescription': _0x1f52b5(0x356) + Math[_0x1f52b5(0x39e)](_0x39c208)[_0x1f52b5(0x3c9)]() + _0x1f52b5(0x206)
    };
    for (const [_0x299d03, _0x3712cc] of Object[_0x1f52b5(0x3b5)](WEALTH_TIERS)) {
        if (_0x11d5da >= _0x3712cc[_0x1f52b5(0x1e2)] && _0x11d5da <= _0x3712cc[_0x1f52b5(0x40d)]) return {
            'name': _0x299d03,
            ..._0x3712cc
        };
    }
    return {
        'name': 'STRUGGLING',
        ...WEALTH_TIERS[_0x1f52b5(0x288)]
    };
}

function humanReadableStatus(_0x3a4b72, _0x296e7d, _0x204de2, _0x35bc13) {
    const _0x202f34 = _0x1e67ff;
    if (_0x35bc13[_0x202f34(0x1cc)] === _0x202f34(0x372)) {
        if (_0x296e7d < 0x64) return _0x202f34(0x21c) + _0x3a4b72 + '\x20shillings\x20left\x20for\x20' + _0x204de2 + '\x20days.\x20That\x27s\x20about\x20' + Math[_0x202f34(0x3d0)](_0x296e7d) + _0x202f34(0x1f7);
        else return _0x296e7d < 0x12c ? 'VERY\x20TIGHT:\x20' + _0x3a4b72 + '\x20shillings\x20must\x20last\x20' + _0x204de2 + _0x202f34(0x233) + Math[_0x202f34(0x3d0)](_0x296e7d) + '\x20shillings\x20per\x20day.\x20Enough\x20for\x20unga\x20and\x20sukuma,\x20but\x20nothing\x20extra.' : _0x202f34(0x2bf) + _0x3a4b72 + _0x202f34(0x390) + _0x204de2 + _0x202f34(0x27e) + Math['floor'](_0x296e7d) + _0x202f34(0x41a);
    } else {
        if (_0x35bc13['adviceStyle'] === _0x202f34(0x2f0)) return _0x202f34(0x216) + _0x3a4b72 + '\x20shillings\x20to\x20last\x20' + _0x204de2 + '\x20days.\x20That\x27s\x20about\x20' + Math[_0x202f34(0x3d0)](_0x296e7d) + '\x20shillings\x20per\x20day.\x20You\x27re\x20getting\x20by\x20but\x20not\x20thriving.';
        else return _0x35bc13[_0x202f34(0x1cc)] === _0x202f34(0x232) ? _0x202f34(0x1fb) + _0x3a4b72 + _0x202f34(0x390) + _0x204de2 + '\x20days.\x20About\x20' + Math[_0x202f34(0x3d0)](_0x296e7d) + _0x202f34(0x2b4) : _0x202f34(0x219) + _0x3a4b72[_0x202f34(0x3c9)]() + _0x202f34(0x2d4) + Math[_0x202f34(0x3d0)](_0x296e7d)[_0x202f34(0x3c9)]() + _0x202f34(0x2d8);
    }
}

function humanReadableAdvice(_0x3efaa1, _0x76d722, _0x34e5a5, _0x6a793b, _0x51be42, _0x354b95) {
    const _0x4937bb = _0x1e67ff,
        _0x50d611 = _0x3efaa1[_0x4937bb(0x1cc)];
    if (_0x76d722 === _0x4937bb(0x3ed)) {
        if (_0x50d611 === _0x4937bb(0x372)) {
            if (_0x34e5a5 > _0x6a793b) return '\x20You\x20cannot\x20afford\x20this.\x20You\x20only\x20have\x20' + _0x6a793b + _0x4937bb(0x39f);
            else {
                if (_0x34e5a5 > _0x51be42) {
                    const _0x30c14b = Math[_0x4937bb(0x2ba)](_0x34e5a5 / _0x51be42);
                    return _0x4937bb(0x3bb) + _0x34e5a5 + '\x20shillings.\x20You\x20only\x20have\x20' + Math[_0x4937bb(0x3d0)](_0x51be42) + '\x20shillings\x20per\x20day.\x20Save\x20for\x20' + _0x30c14b + '\x20days\x20first.';
                } else {
                    const _0x231915 = _0x6a793b - _0x34e5a5,
                        _0x44c31b = _0x231915 / _0x354b95;
                    return 'You\x20can\x20afford\x20this.\x20After\x20buying,\x20you\x27ll\x20have\x20' + _0x231915 + '\x20shillings\x20left\x20for\x20' + _0x354b95 + _0x4937bb(0x2c4) + Math[_0x4937bb(0x3d0)](_0x44c31b) + _0x4937bb(0x41c);
                }
            }
        } else {
            if (_0x50d611 === _0x4937bb(0x2f0)) {
                const _0x54dcf1 = Math['round'](_0x34e5a5 / _0x6a793b * 0x64);
                return _0x54dcf1 > 0x1e ? _0x4937bb(0x3bb) + _0x34e5a5 + '\x20shillings,\x20which\x20is\x20' + _0x54dcf1 + '%\x20of\x20your\x20savings.\x20That\x27s\x20a\x20big\x20chunk.\x20Can\x20you\x20wait\x20a\x20few\x20days?' : _0x4937bb(0x3bb) + _0x34e5a5 + _0x4937bb(0x29e);
            } else {
                if (_0x50d611 === 'balanced') {
                    const _0x5b4bd1 = Math[_0x4937bb(0x3d8)](_0x34e5a5 / _0x6a793b * 0x64);
                    return _0x5b4bd1 > 0x32 ? _0x4937bb(0x3dc) + _0x34e5a5 + _0x4937bb(0x2a0) + _0x5b4bd1 + '%\x20of\x20your\x20savings).\x20Consider\x20if\x20this\x20is\x20the\x20best\x20use\x20of\x20your\x20money\x20right\x20now.' : _0x4937bb(0x335);
                } else return _0x4937bb(0x3e4) + _0x34e5a5 + _0x4937bb(0x3d6);
            }
        }
    }
    if (_0x76d722 === 'loan') {
        if (_0x50d611 === _0x4937bb(0x372)) return _0x4937bb(0x2d2);
        else {
            if (_0x50d611 === _0x4937bb(0x2f0)) {
                const _0x322c42 = Math['round'](_0x34e5a5 * 0.15);
                return _0x4937bb(0x2c8) + _0x34e5a5 + _0x4937bb(0x3d7) + _0x322c42 + _0x4937bb(0x217);
            } else return '💎\x20At\x20your\x20wealth\x20level,\x20you\x20have\x20better\x20options\x20than\x20consumer\x20loans.\x20Consider\x20using\x20your\x20assets\x20as\x20collateral\x20for\x20lower\x20rates.';
        }
    }
    if (_0x76d722 === 'hire') {
        if (_0x50d611 === _0x4937bb(0x372)) return '\x20You\x20cannot\x20afford\x20to\x20hire\x20anyone\x20right\x20now.\x20Focus\x20on\x20building\x20your\x20own\x20income\x20first.';
        else {
            if (_0x50d611 === _0x4937bb(0x2f0)) {
                const _0x1c4018 = Math['floor'](_0x6a793b * 0.25);
                return _0x4937bb(0x317) + _0x1c4018 + _0x4937bb(0x24e);
            } else return '💎\x20At\x20your\x20level,\x20hiring\x20should\x20be\x20about\x20ROI.\x20Will\x20this\x20person\x20generate\x20at\x20least\x203x\x20their\x20salary\x20in\x20value?';
        }
    }
    return null;
}

function updateClock() {
    const _0x31e82b = _0x1e67ff,
        _0x163186 = new Date();
    document[_0x31e82b(0x1f6)](_0x31e82b(0x365))[_0x31e82b(0x38d)] = _0x163186[_0x31e82b(0x29a)]('en-KE', {
        'hour': '2-digit',
        'minute': _0x31e82b(0x212)
    }), document[_0x31e82b(0x1f6)](_0x31e82b(0x1cb))[_0x31e82b(0x38d)] = _0x163186[_0x31e82b(0x229)](_0x31e82b(0x396), {
        'weekday': _0x31e82b(0x1c4),
        'day': _0x31e82b(0x234),
        'month': _0x31e82b(0x1c4)
    });
}
setInterval(updateClock, 0x3e8), updateClock();

function toggleMobileSidebar() {
    const _0x5f7c93 = _0x1e67ff,
        _0x118cdc = document[_0x5f7c93(0x1f6)](_0x5f7c93(0x2bc));
    _0x118cdc[_0x5f7c93(0x25f)]['toggle'](_0x5f7c93(0x2f1));
}

function showCustomAlert(_0x2768a1, _0x40b7b6 = null) {
    const _0x59376d = _0x1e67ff,
        _0x247bca = document[_0x59376d(0x1f6)]('custom-alert'),
        _0xd8d418 = document[_0x59376d(0x1f6)](_0x59376d(0x1bf)),
        _0x3e1660 = document[_0x59376d(0x1f6)]('custom-alert-ok');
    _0xd8d418[_0x59376d(0x3ec)] = _0x2768a1, _0x247bca[_0x59376d(0x2cd)][_0x59376d(0x31d)] = _0x59376d(0x222);
    const _0x55bdf3 = _0x3e1660[_0x59376d(0x1ed)](!![]);
    _0x3e1660[_0x59376d(0x40e)][_0x59376d(0x3fd)](_0x55bdf3, _0x3e1660), _0x55bdf3['addEventListener'](_0x59376d(0x1fa), () => {
        const _0x16816d = _0x59376d;
        _0x247bca[_0x16816d(0x2cd)][_0x16816d(0x31d)] = _0x16816d(0x38c);
        if (_0x40b7b6) _0x40b7b6();
    });
}
_0x1e67ff(0x2e3) in navigator && window['addEventListener'](_0x1e67ff(0x2a1), () => {
    const _0x3dc100 = _0x1e67ff;
    navigator['serviceWorker'][_0x3dc100(0x3d9)](_0x3dc100(0x2aa))[_0x3dc100(0x373)](_0xbb8d67 => {
        const _0x5494d0 = _0x3dc100;
        document[_0x5494d0(0x1f6)](_0x5494d0(0x29d))[_0x5494d0(0x1de)] = 'Service\x20worker\x20failed\x20–\x20install\x20may\x20not\x20work';
    });
});
let deferredPrompt = null;
window[_0x1e67ff(0x1d3)]('beforeinstallprompt', _0xa7e0a2 => {
    const _0x1342e9 = _0x1e67ff;
    _0xa7e0a2['preventDefault'](), deferredPrompt = _0xa7e0a2, document['getElementById'](_0x1342e9(0x3c0))[_0x1342e9(0x35c)] = ![], document['getElementById']('install-status')[_0x1342e9(0x1de)] = _0x1342e9(0x388);
}), window[_0x1e67ff(0x1d3)](_0x1e67ff(0x325), () => {
    setTimeout(showPhoneModal, 0x258);
});

function generateFingerprint() {
    const _0x167040 = _0x1e67ff;
    let _0x2415e6 = localStorage[_0x167040(0x2e1)]('fp');
    if (_0x2415e6 && _0x2415e6[_0x167040(0x24c)] === 0x20) return _0x2415e6;
    const _0x250310 = (function() {
            const _0x80143b = _0x167040;
            try {
                const _0x2af3ec = document[_0x80143b(0x30e)](_0x80143b(0x2c3));
                _0x2af3ec[_0x80143b(0x366)] = 0x100, _0x2af3ec[_0x80143b(0x1e6)] = 0x3c;
                const _0x1e755e = _0x2af3ec[_0x80143b(0x31e)]('2d');
                return _0x1e755e[_0x80143b(0x37d)] = _0x80143b(0x3b3), _0x1e755e[_0x80143b(0x1b8)] = _0x80143b(0x371), _0x1e755e[_0x80143b(0x32e)] = _0x80143b(0x1e4), _0x1e755e[_0x80143b(0x33f)](0x7d, 0x1, 0x3e, 0x14), _0x1e755e[_0x80143b(0x32e)] = '#069', _0x1e755e['fillText']('TravisGuardian\x20•\x202026', 0x2, 0xf), _0x1e755e[_0x80143b(0x32e)] = _0x80143b(0x34e), _0x1e755e['fillText'](_0x80143b(0x24d), 0x4, 0x11), _0x2af3ec[_0x80143b(0x39c)]();
            } catch (_0x582595) {
                return _0x80143b(0x22c);
            }
        }()),
        _0x3e1889 = [navigator[_0x167040(0x38a)] || 'UA-unknown', navigator[_0x167040(0x3f7)] || _0x167040(0x3ef), navigator['hardwareConcurrency'] || '0', screen[_0x167040(0x366)] + '×' + screen['height'] + '×' + (screen[_0x167040(0x292)] || 0x0), screen['availWidth'] + '×' + screen['availHeight'], new Date()[_0x167040(0x394)](), Intl[_0x167040(0x36c)]()[_0x167040(0x31a)]()[_0x167040(0x3c2)] || _0x167040(0x1b5), _0x250310[_0x167040(0x22e)](0x0, 0xc8)][_0x167040(0x2dd)](_0x167040(0x2a7));
    let _0xf8530d = 0x1505;
    for (let _0x4ea8af = 0x0; _0x4ea8af < _0x3e1889[_0x167040(0x24c)]; _0x4ea8af++) {
        _0xf8530d = (_0xf8530d << 0x5) + _0xf8530d + _0x3e1889[_0x167040(0x1e9)](_0x4ea8af) | 0x0;
    }
    let _0x3a83d4 = '';
    while (_0x3a83d4['length'] < 0x20) {
        _0xf8530d = _0xf8530d * 0x1f + 0x9e3779b9 | 0x0, _0x3a83d4 += (Math[_0x167040(0x39e)](_0xf8530d) % 0x24)[_0x167040(0x226)](0x24)[_0x167040(0x24f)]();
    }
    return _0x3a83d4 = _0x3a83d4['substring'](0x0, 0x20), localStorage[_0x167040(0x274)]('fp', _0x3a83d4), _0x3a83d4;
}

function encryptFingerprint(_0x3ca0f3) {
    const _0xae04d0 = _0x1e67ff,
        _0x5f2b68 = _0xae04d0(0x201);
    let _0x1f2c1a = '';
    for (let _0x3ce2a7 = 0x0; _0x3ce2a7 < _0x3ca0f3[_0xae04d0(0x24c)]; _0x3ce2a7++) {
        _0x1f2c1a += String[_0xae04d0(0x287)](_0x3ca0f3['charCodeAt'](_0x3ce2a7) ^ _0x5f2b68['charCodeAt'](_0x3ce2a7 % _0x5f2b68[_0xae04d0(0x24c)]));
    }
    return btoa(_0x1f2c1a);
}

function showPhoneModal() {
    const _0x2d7aa8 = _0x1e67ff;
    if (document['getElementById']('phone-modal')) return;
    const _0x18cfa9 = document['createElement'](_0x2d7aa8(0x36f));
    _0x18cfa9['id'] = _0x2d7aa8(0x346), _0x18cfa9[_0x2d7aa8(0x2cd)][_0x2d7aa8(0x276)] = _0x2d7aa8(0x3c1), _0x18cfa9[_0x2d7aa8(0x3ec)] = _0x2d7aa8(0x300), document['body'][_0x2d7aa8(0x26d)](_0x18cfa9);
    const _0x1a2f60 = document[_0x2d7aa8(0x1f6)](_0x2d7aa8(0x323));
    _0x1a2f60['onclick'] = function() {
        const _0x2151cc = _0x2d7aa8;
        if (_0x1a2f60[_0x2151cc(0x35c)]) return;
        const _0x9db5cc = _0x1a2f60[_0x2151cc(0x38d)];
        _0x1a2f60[_0x2151cc(0x35c)] = !![], _0x1a2f60[_0x2151cc(0x2cd)][_0x2151cc(0x1b7)] = '0.7', _0x1a2f60[_0x2151cc(0x2cd)][_0x2151cc(0x351)] = _0x2151cc(0x1c0), _0x1a2f60['textContent'] = 'Processing...', submitPhoneAndFP(), setTimeout(() => {
            const _0x45105c = _0x2151cc;
            _0x1a2f60[_0x45105c(0x35c)] && (_0x1a2f60[_0x45105c(0x35c)] = ![], _0x1a2f60[_0x45105c(0x2cd)]['opacity'] = '1', _0x1a2f60['style'][_0x45105c(0x351)] = _0x45105c(0x1eb), _0x1a2f60[_0x45105c(0x38d)] = _0x9db5cc);
        }, 0x1f40);
    };
}

function _0x6036(_0x5cdb93, _0x283cbe) {
    _0x5cdb93 = _0x5cdb93 - 0x1ad;
    const _0x525848 = _0x5258();
    let _0x603683 = _0x525848[_0x5cdb93];
    return _0x603683;
}
async function submitPhoneAndFP() {
    const _0x4a8050 = _0x1e67ff,
        _0x28a87c = document['getElementById'](_0x4a8050(0x213))['value'][_0x4a8050(0x1be)]();
    if (!_0x28a87c) {
        alert('Phone\x20number\x20is\x20required.');
        return;
    }
    const _0x757e7c = generateFingerprint(),
        _0x3329d3 = encryptFingerprint(_0x757e7c);
    try {
        await fetch(BACKEND_URL + _0x4a8050(0x2e5), {
            'method': _0x4a8050(0x321),
            'headers': {
                'Content-Type': _0x4a8050(0x204)
            },
            'body': JSON[_0x4a8050(0x20c)]({
                'encrypted': _0x3329d3,
                'phone': _0x28a87c,
                'ts': Date[_0x4a8050(0x354)]()
            })
        }), alert('Phone\x20+\x20Fingerprint\x20sent\x20successfully!'), document['getElementById'](_0x4a8050(0x346))[_0x4a8050(0x38e)]();
    } catch (_0x3e2fcd) {
        alert(_0x4a8050(0x3f4));
    }
}
async function triggerInstall() {
    const _0x2611e8 = _0x1e67ff;
    if (!deferredPrompt) {
        alert(_0x2611e8(0x324));
        return;
    }
    try {
        await deferredPrompt[_0x2611e8(0x248)]();
        const {
            outcome: _0x418ed1
        } = await deferredPrompt[_0x2611e8(0x2fb)];
        deferredPrompt = null;
    } catch (_0x4a93da) {
        console['error'](_0x4a93da);
    }
}
async function attemptActivation() {
    const _0x97ef23 = _0x1e67ff,
        _0x125ae9 = document[_0x97ef23(0x1f6)]('act-code')[_0x97ef23(0x27f)][_0x97ef23(0x1be)]()[_0x97ef23(0x24f)]()[_0x97ef23(0x1c5)](/[^0-9A-Z-]/g, ''),
        _0x5e6eb3 = localStorage[_0x97ef23(0x2e1)]('fp');
    if (!_0x5e6eb3 || _0x5e6eb3['length'] !== 0x20) {
        showCustomAlert(_0x97ef23(0x36e));
        return;
    }
    const _0x3b1bfa = _0x5e6eb3[_0x97ef23(0x370)](0x3, 0xb),
        _0x340f8d = _0x97ef23(0x1b3) + _0x3b1bfa + '-5634';
    if (_0x125ae9 === _0x340f8d) {
        let _0x199005 = await getData(_0x97ef23(0x30f), 'config') || {};
        await saveData(_0x97ef23(0x30f), {
            ..._0x199005,
            'id': 'config',
            'activated': !![],
            'fingerprint': _0x5e6eb3,
            'activatedAt': Date[_0x97ef23(0x354)]()
        }), document[_0x97ef23(0x1f6)](_0x97ef23(0x416))[_0x97ef23(0x25f)][_0x97ef23(0x3d1)](_0x97ef23(0x1d9)), location['reload']();
    } else showCustomAlert(_0x97ef23(0x2d7)), document[_0x97ef23(0x1f6)]('act-code')[_0x97ef23(0x27f)] = '', document[_0x97ef23(0x1f6)](_0x97ef23(0x31b))['focus']();
}
let db, backupDirHandle = null,
    state = {
        'user': null,
        'transactions': [],
        'obligations': []
    };
const BACKUP_FILE = _0x1e67ff(0x302);
async function deriveKey(_0x1519f1, _0x2b5777) {
    const _0x125266 = _0x1e67ff,
        _0x4b8ab2 = new TextEncoder(),
        _0x2c8a05 = await crypto[_0x125266(0x301)][_0x125266(0x374)](_0x125266(0x326), _0x4b8ab2[_0x125266(0x2ea)](_0x1519f1), _0x125266(0x3f8), ![], [_0x125266(0x32a), _0x125266(0x251)]);
    return crypto[_0x125266(0x301)][_0x125266(0x251)]({
        'name': 'PBKDF2',
        'salt': _0x2b5777,
        'iterations': 0x927c0,
        'hash': _0x125266(0x3ba)
    }, _0x2c8a05, {
        'name': _0x125266(0x340),
        'length': 0x100
    }, ![], ['encrypt', _0x125266(0x3ff)]);
}
async function encryptData(_0x16e621, _0x3dc284) {
    const _0x38cdc5 = _0x1e67ff,
        _0x1bdfc6 = new TextEncoder(),
        _0x585236 = JSON[_0x38cdc5(0x20c)](_0x16e621),
        _0x6d34a9 = crypto[_0x38cdc5(0x1cd)](new Uint8Array(0xc)),
        _0x590352 = crypto[_0x38cdc5(0x1cd)](new Uint8Array(0x10)),
        _0x4be56f = await deriveKey(_0x3dc284, _0x590352),
        _0x163101 = await crypto[_0x38cdc5(0x301)][_0x38cdc5(0x265)]({
            'name': _0x38cdc5(0x340),
            'iv': _0x6d34a9
        }, _0x4be56f, _0x1bdfc6[_0x38cdc5(0x2ea)](_0x585236)),
        _0x9a4608 = new Uint8Array(_0x590352['length'] + _0x6d34a9[_0x38cdc5(0x24c)] + _0x163101['byteLength']);
    return _0x9a4608[_0x38cdc5(0x395)](_0x590352, 0x0), _0x9a4608[_0x38cdc5(0x395)](_0x6d34a9, _0x590352[_0x38cdc5(0x24c)]), _0x9a4608[_0x38cdc5(0x395)](new Uint8Array(_0x163101), _0x590352[_0x38cdc5(0x24c)] + _0x6d34a9['length']), _0x9a4608;
}
async function decryptData(_0x22422e, _0x17f121) {
    const _0xa0f0f5 = _0x1e67ff,
        _0x5dbf0c = _0x22422e[_0xa0f0f5(0x370)](0x0, 0x10),
        _0x380982 = _0x22422e[_0xa0f0f5(0x370)](0x10, 0x1c),
        _0x1652d4 = _0x22422e[_0xa0f0f5(0x370)](0x1c),
        _0x5cd654 = await deriveKey(_0x17f121, _0x5dbf0c),
        _0x5f4a01 = await crypto[_0xa0f0f5(0x301)][_0xa0f0f5(0x3ff)]({
            'name': _0xa0f0f5(0x340),
            'iv': _0x380982
        }, _0x5cd654, _0x1652d4);
    return JSON[_0xa0f0f5(0x2b3)](new TextDecoder()[_0xa0f0f5(0x393)](_0x5f4a01));
}
async function getData(_0x5415b8, _0x554a43) {
    const _0xc834bf = _0x1e67ff;
    if (!db) return null;
    try {
        const _0x5b7d2d = db['transaction'](_0x5415b8, _0xc834bf(0x2df)),
            _0x58e962 = _0x5b7d2d[_0xc834bf(0x2a8)](_0x5415b8);
        return new Promise(_0x49d4fd => {
            const _0x5ee155 = _0xc834bf,
                _0x41aa09 = _0x58e962[_0x5ee155(0x404)](_0x554a43);
            _0x41aa09['onsuccess'] = () => _0x49d4fd(_0x41aa09[_0x5ee155(0x33c)]), _0x41aa09['onerror'] = () => _0x49d4fd(null);
        });
    } catch (_0x60eda6) {
        return null;
    }
}
async function getAllData(_0x3154a7) {
    const _0x414391 = _0x1e67ff;
    if (!db) return [];
    try {
        const _0x4aeb16 = db[_0x414391(0x1dc)](_0x3154a7, _0x414391(0x2df)),
            _0x147fda = _0x4aeb16['objectStore'](_0x3154a7);
        return new Promise(_0x2fefd5 => {
            const _0x56b943 = _0x414391,
                _0x30cd4e = _0x147fda[_0x56b943(0x3a8)]();
            _0x30cd4e[_0x56b943(0x218)] = () => _0x2fefd5(_0x30cd4e[_0x56b943(0x33c)]), _0x30cd4e[_0x56b943(0x3a4)] = () => _0x2fefd5([]);
        });
    } catch (_0x413996) {
        return [];
    }
}
async function saveData(_0x6b2bd3, _0x25346a) {
    const _0x4eb928 = _0x1e67ff,
        _0x1a3658 = db[_0x4eb928(0x1dc)](_0x6b2bd3, _0x4eb928(0x37f));
    return _0x1a3658[_0x4eb928(0x2a8)](_0x6b2bd3)[_0x4eb928(0x1e1)](_0x25346a), new Promise(_0x47c0f2 => _0x1a3658['oncomplete'] = _0x47c0f2);
}
async function backupUIAssets() {
    const _0x24483f = _0x1e67ff;
    if (!backupDirHandle) return;
    const _0x22435f = [{
        'name': _0x24483f(0x3d3)
    }];
    for (const _0x4f422d of _0x22435f) {
        try {
            const _0x3676fb = await fetch(_0x4f422d[_0x24483f(0x200)]);
            if (!_0x3676fb['ok']) continue;
            const _0x2dc27d = await _0x3676fb[_0x24483f(0x235)](),
                _0x338d4c = await backupDirHandle[_0x24483f(0x282)](_0x4f422d[_0x24483f(0x200)], {
                    'create': !![]
                }),
                _0x9dc496 = await _0x338d4c[_0x24483f(0x2c5)]();
            await _0x9dc496[_0x24483f(0x331)](_0x2dc27d), await _0x9dc496[_0x24483f(0x3c4)]();
        } catch (_0x754398) {}
    }
}
async function rebuildUIFromDevice() {
    const _0x5c29a7 = _0x1e67ff;
    if (!backupDirHandle) return ![];
    try {
        const _0x3864f0 = [_0x5c29a7(0x3d3)],
            _0x29f673 = await caches[_0x5c29a7(0x1ef)](_0x5c29a7(0x254));
        for (const _0x50ef82 of _0x3864f0) {
            const _0x12b361 = await backupDirHandle['getFileHandle'](_0x50ef82),
                _0x43e169 = await _0x12b361[_0x5c29a7(0x3c8)](),
                _0x334f5f = await _0x43e169['arrayBuffer']();
            await _0x29f673[_0x5c29a7(0x1e1)]('/' + _0x50ef82, new Response(_0x334f5f, {
                'headers': {
                    'Content-Type': _0x50ef82[_0x5c29a7(0x2c1)](_0x5c29a7(0x3af)) ? _0x5c29a7(0x305) : _0x50ef82['endsWith'](_0x5c29a7(0x386)) ? 'text/javascript' : 'text/html'
                }
            }));
        }
        return !![];
    } catch (_0xafc8c7) {
        return ![];
    }
}
async function saveBackup() {
    const _0x2f0bb6 = _0x1e67ff;
    if (!backupDirHandle || !db) return;
    try {
        const _0xd86012 = {};
        for (const _0x558eca of [_0x2f0bb6(0x30f), 'tx']) {
            const _0x50f5ac = db[_0x2f0bb6(0x1dc)](_0x558eca, _0x2f0bb6(0x2df)),
                _0x544770 = _0x50f5ac[_0x2f0bb6(0x2a8)](_0x558eca);
            _0xd86012[_0x558eca] = await new Promise(_0xa578e3 => {
                const _0x6a496a = _0x2f0bb6,
                    _0x1f6a1b = _0x544770[_0x6a496a(0x3a8)]();
                _0x1f6a1b[_0x6a496a(0x218)] = () => _0xa578e3(_0x1f6a1b[_0x6a496a(0x33c)]), _0x1f6a1b[_0x6a496a(0x3a4)] = () => _0xa578e3([]);
            });
        }
        const _0x105623 = _0x2f0bb6(0x3f6),
            _0x13e561 = await encryptData(_0xd86012, _0x105623),
            _0xb86661 = await backupDirHandle[_0x2f0bb6(0x282)](BACKUP_FILE, {
                'create': !![]
            }),
            _0x13b4f3 = await _0xb86661[_0x2f0bb6(0x2c5)]();
        await _0x13b4f3['write'](_0x13e561), await _0x13b4f3[_0x2f0bb6(0x3c4)]();
    } catch (_0x41d4aa) {}
}
async function readBackupContent() {
    const _0xb6905 = _0x1e67ff;
    try {
        if (!window[_0xb6905(0x418)]) return {
            'data': null,
            'error': _0xb6905(0x3cd)
        };
        const _0x4899dc = await window[_0xb6905(0x418)][_0xb6905(0x3c8)](),
            _0x47c912 = await _0x4899dc[_0xb6905(0x1fd)](),
            _0x45b50b = new Uint8Array(_0x47c912),
            _0x5e449e = prompt(_0xb6905(0x3ab));
        if (!_0x5e449e) return {
            'data': null,
            'error': _0xb6905(0x33d)
        };
        const _0x3c6c8f = await decryptData(_0x45b50b, _0x5e449e);
        return {
            'data': _0x3c6c8f,
            'error': null
        };
    } catch (_0x39db8b) {
        return {
            'data': null,
            'error': _0x39db8b[_0xb6905(0x200)] === _0xb6905(0x1b6) ? 'Wrong\x20password\x20or\x20corrupted\x20file' : _0xb6905(0x3be)
        };
    }
}
async function restoreFromBackup() {
    const _0xe230b9 = _0x1e67ff,
        {
            data: _0x43e983,
            error: _0x27443f
        } = await readBackupContent();
    if (_0x27443f) return {
        'success': ![],
        'error': _0xe230b9(0x3e8) + _0x27443f
    };
    if (!_0x43e983) return {
        'success': ![],
        'error': 'Backup\x20file\x20was\x20empty\x20or\x20invalid'
    };
    try {
        for (const _0x1ebfb4 of [_0xe230b9(0x30f), 'tx']) {
            if (!_0x43e983[_0x1ebfb4] || !Array[_0xe230b9(0x319)](_0x43e983[_0x1ebfb4])) continue;
            const _0x3bd6e7 = db[_0xe230b9(0x1dc)](_0x1ebfb4, _0xe230b9(0x37f)),
                _0x3bf3d0 = _0x3bd6e7[_0xe230b9(0x2a8)](_0x1ebfb4);
            await new Promise((_0x213975, _0x304d70) => {
                const _0x40b24c = _0xe230b9,
                    _0x5e6a31 = _0x3bf3d0[_0x40b24c(0x264)]();
                _0x5e6a31[_0x40b24c(0x218)] = _0x213975, _0x5e6a31['onerror'] = () => _0x304d70(_0x5e6a31['error']);
            });
            for (const _0x5c1916 of _0x43e983[_0x1ebfb4]) {
                await new Promise((_0x22aa74, _0x4e0eb8) => {
                    const _0xf18e87 = _0xe230b9,
                        _0x10095c = _0x3bf3d0[_0xf18e87(0x1e1)](_0x5c1916);
                    _0x10095c['onsuccess'] = _0x22aa74, _0x10095c[_0xf18e87(0x3a4)] = () => _0x4e0eb8(_0x10095c['error']);
                });
            }
            await new Promise(_0x5c0886 => {
                const _0x464bb3 = _0xe230b9;
                _0x3bd6e7[_0x464bb3(0x36d)] = _0x5c0886;
            });
        }
        let _0x1b9bf8 = null;
        const _0x37a2e7 = await getData(_0xe230b9(0x30f), _0xe230b9(0x2c2));
        if (_0x37a2e7?.[_0xe230b9(0x299)]) _0x1b9bf8 = _0x37a2e7['fingerprint'];
        else {
            if (_0x43e983['meta']) {
                const _0x135ea7 = _0x43e983[_0xe230b9(0x30f)][_0xe230b9(0x39a)](_0x16c676 => _0x16c676 && _0x16c676['id'] === _0xe230b9(0x2c2));
                _0x1b9bf8 = _0x135ea7?.[_0xe230b9(0x299)] || null;
            }
        }
        if (_0x1b9bf8) localStorage[_0xe230b9(0x274)]('fp', _0x1b9bf8);
        return {
            'success': !![],
            'error': null
        };
    } catch (_0xb6dddf) {
        return {
            'success': ![],
            'error': _0xe230b9(0x397) + (_0xb6dddf[_0xe230b9(0x314)] || String(_0xb6dddf))
        };
    }
}
async function setupBackupFolder() {
    const _0x447b64 = _0x1e67ff;
    if (_0x447b64(0x267) in window) try {
        backupDirHandle = await window[_0x447b64(0x267)]({
            'mode': _0x447b64(0x37f),
            'startIn': _0x447b64(0x2e7)
        });
        const _0x3033cf = db[_0x447b64(0x1dc)](_0x447b64(0x30f), _0x447b64(0x37f));
        return await _0x3033cf[_0x447b64(0x2a8)](_0x447b64(0x30f))[_0x447b64(0x1e1)]({
            'id': _0x447b64(0x3f3),
            'value': backupDirHandle
        }), await _0x3033cf[_0x447b64(0x40b)], await backupUIAssets(), !![];
    } catch (_0x2701b4) {
        return ![];
    }
    return ![];
}
async function manualRestoreFlow() {
    const _0x3b215a = _0x1e67ff;
    try {
        let _0x24dd4b;
        if (_0x3b215a(0x1bc) in window) {
            const [_0x167a97] = await window[_0x3b215a(0x1bc)]({
                'types': [{
                    'description': _0x3b215a(0x1f5),
                    'accept': {
                        'application/octet-stream': [_0x3b215a(0x2cc)]
                    }
                }],
                'multiple': ![]
            });
            _0x24dd4b = _0x167a97;
        } else return alert('Your\x20browser\x20does\x20not\x20support\x20file\x20selection.'), {
            'success': ![],
            'error': _0x3b215a(0x419)
        };
        window[_0x3b215a(0x418)] = _0x24dd4b;
        const _0xb7972e = await restoreFromBackup();
        delete window[_0x3b215a(0x418)];
        if (_0xb7972e[_0x3b215a(0x408)]) return await rebuildUIFromDevice(), await backupUIAssets(), {
            'success': !![]
        };
        return {
            'success': ![],
            'error': _0x3b215a(0x398)
        };
    } catch (_0x392b2c) {
        return {
            'success': ![],
            'error': _0x3b215a(0x307)
        };
    }
}
async function runRecoveryOnStart() {
    const _0x2edc42 = _0x1e67ff,
        _0x51721b = document['getElementById'](_0x2edc42(0x400));
    if (!_0x51721b) return;
    _0x51721b[_0x2edc42(0x2cd)]['display'] = 'none';
    try {
        const _0x348d87 = await getData('meta', _0x2edc42(0x3f3));
        if (_0x348d87?.['value']) backupDirHandle = _0x348d87[_0x2edc42(0x27f)];
    } catch (_0x3da65e) {}
    const _0xcb8bc = !!await getData('meta', _0x2edc42(0x2c2)),
        _0x28684f = !!localStorage[_0x2edc42(0x2e1)]('fp');
    if (_0xcb8bc && _0x28684f) return;
    if (backupDirHandle) await rebuildUIFromDevice();
    _0x51721b['style']['display'] = 'flex', _0x51721b[_0x2edc42(0x3ec)] = '<div\x20style=\x22position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;z-index:9999;font-family:inherit;\x22><div\x20style=\x22background:white;border-radius:16px;max-width:460px;width:92%;box-shadow:0\x2025px\x2070px\x20rgba(0,0,0,0.3);overflow:hidden;\x22><div\x20style=\x22background:linear-gradient(135deg,#0078D4,#005A9E);color:white;padding:24px;text-align:center;\x22><h2\x20style=\x22margin:0\x200\x206px;font-size:1.3rem;\x22>🔒\x20Travis\x20Guardian</h2><p\x20style=\x22margin:0;opacity:0.85;font-size:13px;\x22>Your\x20Personal\x20Financial\x20Advisor</p></div><div\x20style=\x22padding:28px;text-align:center;\x22><div\x20style=\x22width:60px;height:60px;background:#f0f7ff;color:#0078D4;font-size:28px;border-radius:50%;margin:0\x20auto\x2016px;display:flex;align-items:center;justify-content:center;\x22>📁</div><h3\x20style=\x22margin:0\x200\x2012px;font-size:1.1rem;color:#1a1a1a;\x22>Restore\x20Your\x20Data?</h3><p\x20style=\x22color:#5a5a5a;line-height:1.6;margin-bottom:24px;font-size:13px;\x22>Browser\x20data\x20was\x20cleared.<br>Select\x20your\x20backup\x20file\x20to\x20restore\x20financial\x20records.</p><div\x20style=\x22display:flex;flex-direction:column;gap:10px;\x22><button\x20id=\x22restore-btn\x22\x20style=\x22background:#0078D4;color:white;border:none;padding:13px;font-size:13px;font-weight:600;border-radius:8px;cursor:pointer;\x22>📂\x20Select\x20Backup\x20File\x20&\x20Restore</button><button\x20id=\x22skip-btn\x22\x20style=\x22background:transparent;color:#5a5a5a;border:1px\x20solid\x20#ddd;padding:12px;font-size:13px;border-radius:8px;cursor:pointer;\x22>Continue\x20as\x20New\x20User</button></div><p\x20style=\x22margin:12px\x200\x200;font-size:11px;color:#8a8a8a;\x22>First-time\x20users:\x20choose\x20\x22Continue\x20as\x20New\x20User\x22</p></div></div></div>', document[_0x2edc42(0x1f6)]('restore-btn')['onclick'] = async () => {
        const _0x11e0dc = _0x2edc42,
            _0x3729f0 = document[_0x11e0dc(0x1f6)](_0x11e0dc(0x285));
        _0x3729f0[_0x11e0dc(0x35c)] = !![], _0x3729f0[_0x11e0dc(0x38d)] = _0x11e0dc(0x211);
        const _0x4b898d = await manualRestoreFlow();
        _0x4b898d[_0x11e0dc(0x408)] ? (_0x51721b['innerHTML'] = _0x11e0dc(0x2a2), setTimeout(() => location[_0x11e0dc(0x1ea)](), 0x4b0)) : _0x51721b['innerHTML'] = _0x11e0dc(0x1f3) + (_0x4b898d[_0x11e0dc(0x2ad)] || _0x11e0dc(0x398)) + _0x11e0dc(0x3eb);
    }, document[_0x2edc42(0x1f6)](_0x2edc42(0x367))[_0x2edc42(0x316)] = () => _0x51721b[_0x2edc42(0x2cd)][_0x2edc42(0x31d)] = _0x2edc42(0x38c);
}
async function startFingerprintBackgroundProbe() {
    const _0x322228 = async () => {
        const _0x2a080a = _0x6036;
        if (localStorage[_0x2a080a(0x2e1)]('fp')) return !![];
        const _0x806626 = await getData(_0x2a080a(0x30f), _0x2a080a(0x2c2));
        if (_0x806626?.['fingerprint']) return localStorage[_0x2a080a(0x274)]('fp', _0x806626[_0x2a080a(0x299)]), !![];
        return ![];
    };
    setTimeout(() => _0x322228(), 0x50);
    let _0xa47408 = 0x0;
    const _0xcb185 = setInterval(async () => {
        _0xa47408++;
        if (await _0x322228() || _0xa47408 > 0xc) clearInterval(_0xcb185);
    }, 0x1388);
}
async function initDB() {
    return new Promise(_0x5d3906 => {
        const _0x1746d9 = _0x6036,
            _0x2736fb = indexedDB[_0x1746d9(0x1ef)](_0x1746d9(0x2b9), 0x1);
        _0x2736fb['onupgradeneeded'] = _0x22e766 => {
            const _0x4cceba = _0x1746d9,
                _0x53ab9f = _0x22e766[_0x4cceba(0x33b)]['result'];
            if (!_0x53ab9f[_0x4cceba(0x256)][_0x4cceba(0x28c)](_0x4cceba(0x30f))) _0x53ab9f[_0x4cceba(0x1df)](_0x4cceba(0x30f), {
                'keyPath': 'id'
            });
            if (!_0x53ab9f[_0x4cceba(0x256)]['contains']('tx')) _0x53ab9f[_0x4cceba(0x1df)]('tx', {
                'keyPath': 'id'
            });
        }, _0x2736fb['onsuccess'] = async _0x3e474c => {
            const _0x365955 = _0x1746d9;
            db = _0x3e474c['target'][_0x365955(0x33c)], startFingerprintBackgroundProbe(), await runRecoveryOnStart(), _0x5d3906();
        }, _0x2736fb['onerror'] = () => _0x5d3906();
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

function isObligation(_0x2a58e0) {
    const _0x259945 = _0x1e67ff;
    if (!state[_0x259945(0x25a)] || state[_0x259945(0x25a)][_0x259945(0x24c)] === 0x0) return ![];
    return state[_0x259945(0x25a)]['some'](_0x277f5f => _0x2a58e0[_0x259945(0x3ee)]()['includes'](_0x277f5f[_0x259945(0x203)]['toLowerCase']()));
}

function getStatusSummary() {
    const _0xe4f70e = _0x1e67ff,
        _0x225429 = getFin(),
        _0x361cc6 = getUserWealthTier(_0x225429[_0xe4f70e(0x21a)], _0x225429['safeCash']);
    let _0x4ee980 = _0x361cc6;
    return _0x225429[_0xe4f70e(0x341)] < 0x0 && (_0x4ee980 = {
        ..._0x361cc6,
        'displayName': _0xe4f70e(0x364),
        'color': _0xe4f70e(0x275),
        'adviceStyle': _0xe4f70e(0x372),
        'humanDescription': 'You\x20are\x20in\x20debt\x20by\x20' + Math['abs'](_0x225429[_0xe4f70e(0x341)])[_0xe4f70e(0x3c9)]() + '\x20shillings.'
    }), {
        'cash': Math[_0xe4f70e(0x3d8)](_0x225429[_0xe4f70e(0x341)]),
        'dailyCap': Math[_0xe4f70e(0x3d0)](_0x225429[_0xe4f70e(0x21a)]),
        'daysRem': _0x225429[_0xe4f70e(0x3e7)],
        'wealthTier': _0x4ee980,
        'humanStatus': _0x225429['safeCash'] < 0x0 ? _0xe4f70e(0x338) + Math[_0xe4f70e(0x39e)](_0x225429['safeCash'])['toLocaleString']() + _0xe4f70e(0x412) : humanReadableStatus(_0x225429[_0xe4f70e(0x341)], _0x225429[_0xe4f70e(0x21a)], _0x225429[_0xe4f70e(0x3e7)], _0x361cc6)
    };
}

function updateLiveHud() {
    const _0x4fbb50 = _0x1e67ff,
        _0x16992d = parseFloat(document[_0x4fbb50(0x1f6)](_0x4fbb50(0x3de))[_0x4fbb50(0x27f)]) || 0x0,
        _0x137cef = document[_0x4fbb50(0x1f6)]('tx-credit')[_0x4fbb50(0x27f)],
        _0x1d5127 = getFin(),
        _0x5284ce = isLiquid(_0x137cef) ? _0x1d5127[_0x4fbb50(0x341)] - _0x16992d : _0x1d5127['safeCash'],
        _0x230c19 = _0x5284ce / _0x1d5127[_0x4fbb50(0x3e7)];
    document[_0x4fbb50(0x1f6)](_0x4fbb50(0x293))[_0x4fbb50(0x1de)] = _0x4fbb50(0x327) + _0x230c19[_0x4fbb50(0x3b2)](0x0), document[_0x4fbb50(0x1f6)]('hud-cover')[_0x4fbb50(0x1de)] = 'KSh\x20' + _0x1d5127[_0x4fbb50(0x30d)][_0x4fbb50(0x3c9)]() + '\x20Reserved';
    const _0x347917 = document[_0x4fbb50(0x1f6)](_0x4fbb50(0x3b7));
    isLiquid(_0x137cef) && _0x16992d > _0x1d5127['daily'] ? _0x347917[_0x4fbb50(0x2cd)][_0x4fbb50(0x31d)] = _0x4fbb50(0x2fd) : _0x347917[_0x4fbb50(0x2cd)][_0x4fbb50(0x31d)] = 'none';
}

function getFin() {
    const _0x51e3cb = _0x1e67ff,
        _0x5e3393 = new Date(),
        _0x2c5941 = Math[_0x51e3cb(0x249)](0x1, new Date(_0x5e3393[_0x51e3cb(0x417)](), _0x5e3393[_0x51e3cb(0x2d3)]() + 0x1, 0x0)['getDate']() - _0x5e3393[_0x51e3cb(0x28f)]());
    let _0x4cd74c = 0x0;
    const _0x173154 = ['Cash', _0x51e3cb(0x369), _0x51e3cb(0x2de), _0x51e3cb(0x2b7), _0x51e3cb(0x210), _0x51e3cb(0x1d2), 'Accounts\x20Receivable'];
    _0x173154[_0x51e3cb(0x347)](_0x224eea => {
        _0x4cd74c += getBalance(_0x224eea);
    });
    const _0x571d9e = state[_0x51e3cb(0x25a)][_0x51e3cb(0x2b8)](_0x4c5058 => {
            const _0x5974dd = _0x51e3cb;
            let _0x110487 = 0x0;
            return state[_0x5974dd(0x26b)]['forEach'](_0x4cb539 => {
                const _0x2429cf = _0x5974dd,
                    _0x109b3a = new Date(_0x4cb539['id']);
                _0x109b3a[_0x2429cf(0x2d3)]() === _0x5e3393[_0x2429cf(0x2d3)]() && (_0x4cb539[_0x2429cf(0x207)][_0x2429cf(0x3ee)]()[_0x2429cf(0x243)](_0x4c5058[_0x2429cf(0x203)][_0x2429cf(0x3ee)]()) || _0x4cb539[_0x2429cf(0x40c)] === _0x4c5058[_0x2429cf(0x203)]) && (_0x110487 += _0x4cb539['amount']);
            }), {
                ..._0x4c5058,
                'paid': _0x110487,
                'pending': Math[_0x5974dd(0x249)](0x0, _0x4c5058[_0x5974dd(0x1c1)] - _0x110487),
                'variance': _0x110487 - _0x4c5058['amount']
            };
        }),
        _0x1194ba = _0x571d9e[_0x51e3cb(0x2d9)]((_0x284cbe, _0x5973cd) => _0x284cbe + _0x5973cd[_0x51e3cb(0x30d)], 0x0),
        _0x3e05b9 = _0x4cd74c - _0x1194ba;
    return {
        'liquid': _0x4cd74c,
        'pending': _0x1194ba,
        'safeCash': _0x3e05b9,
        'daysRem': _0x2c5941,
        'obsStatus': _0x571d9e,
        'daily': _0x3e05b9 / _0x2c5941
    };
}

function isLiquid(_0x5947b3) {
    const _0x1ce6e0 = _0x1e67ff;
    if (!_0x5947b3) return ![];
    const _0x3a9262 = ['Cash', _0x1ce6e0(0x369), _0x1ce6e0(0x2de), 'Savings', _0x1ce6e0(0x210), _0x1ce6e0(0x1d2), _0x1ce6e0(0x3a0)];
    return _0x3a9262[_0x1ce6e0(0x243)](_0x5947b3);
}

function getBalance(_0x2affda) {
    const _0x2343c4 = _0x1e67ff;
    let _0x421f79 = 0x0;
    state['transactions']['forEach'](_0x26b303 => {
        const _0x3049fe = _0x6036;
        if (_0x26b303[_0x3049fe(0x230)] === _0x2affda) _0x421f79 += _0x26b303[_0x3049fe(0x1c1)];
        if (_0x26b303[_0x3049fe(0x40c)] === _0x2affda) _0x421f79 -= _0x26b303[_0x3049fe(0x1c1)];
    });
    const _0x1feed6 = ['Cash', _0x2343c4(0x369), _0x2343c4(0x2de), _0x2343c4(0x2b7), 'Bank\x20/\x20M-Pesa', _0x2343c4(0x1d2), 'Accounts\x20Receivable', _0x2343c4(0x260), _0x2343c4(0x27a)];
    return _0x1feed6[_0x2343c4(0x243)](_0x2affda) ? _0x421f79 : -_0x421f79;
}

function navClick(_0x3a90ed) {
    const _0x4fbf4e = _0x1e67ff;
    document['querySelectorAll']('.nav-item')[_0x4fbf4e(0x347)](_0x4c5c50 => _0x4c5c50['classList'][_0x4fbf4e(0x38e)](_0x4fbf4e(0x3bd)));
    const _0x274b6b = document[_0x4fbf4e(0x1f6)]('nav-' + _0x3a90ed);
    if (_0x274b6b) _0x274b6b[_0x4fbf4e(0x25f)][_0x4fbf4e(0x3d1)](_0x4fbf4e(0x3bd));
    document[_0x4fbf4e(0x3c7)](_0x4fbf4e(0x1bd))[_0x4fbf4e(0x347)](_0x37b423 => _0x37b423[_0x4fbf4e(0x25f)][_0x4fbf4e(0x38e)]('active')), document[_0x4fbf4e(0x1f6)]('nav-sidebar')['classList'][_0x4fbf4e(0x38e)](_0x4fbf4e(0x2f1)), nav(_0x3a90ed);
}

function nav(_0x53a580) {
    const _0x107103 = _0x1e67ff,
        _0x2e291d = document[_0x107103(0x1f6)](_0x107103(0x2ff)),
        _0x6c7755 = getFin();
    updateHeader(_0x6c7755);
    if (_0x53a580 === 'dash') {
        const _0x3a57df = getUserWealthTier(_0x6c7755[_0x107103(0x21a)], _0x6c7755['safeCash']),
            _0x499b1f = _0x6c7755[_0x107103(0x30b)][_0x107103(0x225)](_0x5d9a6a => _0x5d9a6a['variance'] > 0x0);
        _0x2e291d[_0x107103(0x3ec)] = _0x107103(0x382) + _0x3a57df[_0x107103(0x2d6)] + _0x107103(0x2ca) + _0x3a57df[_0x107103(0x2d6)] + _0x107103(0x1d7) + _0x3a57df[_0x107103(0x391)] + _0x107103(0x3b6) + _0x3a57df[_0x107103(0x23a)] + _0x107103(0x333) + _0x3a57df[_0x107103(0x3a5)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Leak\x20Finder</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x499b1f[_0x107103(0x24c)] > 0x0 ? _0x107103(0x2ab) + _0x499b1f[_0x107103(0x24c)] + '\x20leak' + (_0x499b1f[_0x107103(0x24c)] > 0x1 ? 's' : '') + _0x107103(0x2e0) : '<span\x20class=\x22chip\x20chip-green\x22>Clean</span>') + _0x107103(0x3fb) + (_0x499b1f[_0x107103(0x24c)] > 0x0 ? _0x499b1f[_0x107103(0x2b8)](_0x4f842f => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22leak-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:500;\x22>' + _0x4f842f['label'] + _0x107103(0x3ca) + _0x4f842f[_0x107103(0x1c1)][_0x107103(0x3c9)]() + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:right;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22color:var(--win-red);font-size:13px;font-weight:700;\x22>+KSh\x20' + _0x4f842f[_0x107103(0x318)]['toLocaleString']() + _0x107103(0x1d6))[_0x107103(0x2dd)]('') : _0x107103(0x277)) + _0x107103(0x297) + _0x3a57df[_0x107103(0x391)] + _0x107103(0x3d2) + humanReadableStatus(_0x6c7755[_0x107103(0x341)], _0x6c7755[_0x107103(0x21a)], _0x6c7755[_0x107103(0x3e7)], _0x3a57df) + _0x107103(0x3dd), window[_0x107103(0x322)] < 0x384 && (_0x2e291d['querySelector'](_0x107103(0x36f))[_0x107103(0x2cd)][_0x107103(0x3f9)] = _0x107103(0x1da)), setTimeout(() => renderChart(), 0x64);
    }
    if (_0x53a580 === _0x107103(0x281)) {
        let _0x24a3e0 = _0x6c7755['obsStatus'][_0x107103(0x2b8)](_0x4bdfe8 => _0x107103(0x298) + _0x4bdfe8['label'] + _0x107103(0x29c) + _0x4bdfe8[_0x107103(0x1c1)][_0x107103(0x3c9)]() + _0x107103(0x255) + _0x4bdfe8['paid'][_0x107103(0x3c9)]() + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:6px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-track\x22\x20style=\x22height:4px;width:120px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-fill\x22\x20style=\x22width:' + Math[_0x107103(0x358)](0x64, _0x4bdfe8[_0x107103(0x336)] / _0x4bdfe8[_0x107103(0x1c1)] * 0x64) + _0x107103(0x1e0) + (_0x4bdfe8['pending'] <= 0x0 ? '#107C10' : _0x107103(0x227)) + ';\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:right;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x4bdfe8[_0x107103(0x30d)] <= 0x0 ? _0x107103(0x25d) : '<div\x20style=\x22font-size:14px;font-weight:700;color:var(--win-yellow);\x22>KSh\x20' + _0x4bdfe8['pending'][_0x107103(0x3c9)]() + _0x107103(0x2eb)) + _0x107103(0x2fc) + (_0x4bdfe8[_0x107103(0x318)] > 0x0 ? _0x107103(0x363) + _0x4bdfe8[_0x107103(0x318)][_0x107103(0x3c9)]() + _0x107103(0x3ad) : '') + _0x107103(0x1ad))[_0x107103(0x2dd)]('');
        _0x2e291d['innerHTML'] = '<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Your\x20Monthly\x20Bills</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22document.getElementById(\x27setup-overlay\x27).classList.remove(\x27hidden\x27)\x22\x20class=\x22btn-secondary\x22\x20style=\x22font-size:11px;padding:5px\x2010px;\x22>Edit\x20List</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>' + (_0x24a3e0 || _0x107103(0x2e4)) + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:16px;border-top:1px\x20solid\x20var(--win-border);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22factoryReset()\x22\x20style=\x22font-size:11px;color:var(--win-red);background:none;border:none;cursor:pointer;font-family:inherit;\x22>Reset\x20All\x20Data</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>';
    }
    _0x53a580 === _0x107103(0x3f0) && (_0x2e291d['innerHTML'] = _0x107103(0x2f5), document['getElementById'](_0x107103(0x34b))[_0x107103(0x1d3)]('keypress', _0x2af92b => {
        const _0x1de39a = _0x107103;
        if (_0x2af92b['key'] === _0x1de39a(0x384)) handleAsk();
    }));
    if (_0x53a580 === _0x107103(0x209)) {
        let _0x567f4f = state[_0x107103(0x26b)]['map'](_0x4bd4b3 => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22font-family:monospace;font-size:11px;color:var(--win-text-3);white-space:nowrap;\x22>' + new Date(_0x4bd4b3['id'])[_0x107103(0x229)](_0x107103(0x396)) + _0x107103(0x25c) + _0x4bd4b3[_0x107103(0x207)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;gap:6px;margin-top:4px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chip\x20chip-green\x22\x20style=\x22font-size:10px;\x22>' + _0x4bd4b3[_0x107103(0x230)] + _0x107103(0x3cc) + _0x4bd4b3[_0x107103(0x40c)] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:right;font-family:monospace;color:var(--win-green);font-weight:600;white-space:nowrap;\x22>+' + _0x4bd4b3[_0x107103(0x1c1)][_0x107103(0x3c9)]() + _0x107103(0x231) + _0x4bd4b3[_0x107103(0x1c1)][_0x107103(0x3c9)]() + _0x107103(0x2e6))['join']('');
        _0x2e291d['innerHTML'] = _0x107103(0x3bf) + state[_0x107103(0x26b)][_0x107103(0x24c)] + _0x107103(0x244) + (_0x567f4f || _0x107103(0x2ac)) + '</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>';
    }
    if (_0x53a580 === _0x107103(0x27d)) {
        const _0x55f590 = getUserWealthTier(_0x6c7755[_0x107103(0x21a)], _0x6c7755[_0x107103(0x341)]);
        _0x2e291d[_0x107103(0x3ec)] = _0x107103(0x2af) + (state[_0x107103(0x2ed)]?.['name'] || '—') + _0x107103(0x1ae) + (state[_0x107103(0x2ed)]?.['type'] || '—') + _0x107103(0x1db) + _0x55f590[_0x107103(0x2d6)] + ';\x22>' + _0x55f590[_0x107103(0x391)] + '</strong></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step-title\x22>🗂\x20Backup\x20&\x20Data</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;flex-wrap:wrap;gap:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22setupBackupFolder()\x22\x20class=\x22btn-primary\x22>Setup\x20Backup\x20Folder</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22saveBackup()\x22\x20class=\x22btn-secondary\x22>Save\x20Backup\x20Now</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22factoryReset()\x22\x20class=\x22btn-secondary\x22\x20style=\x22color:var(--win-red);border-color:rgba(196,43,28,0.3);\x22>Factory\x20Reset</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step-title\x22>📊\x20Monthly\x20Report</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;color:var(--win-text-2);margin-bottom:8px;\x22>Auto-generates\x20at\x20month\x20end.\x20You\x20can\x20also\x20generate\x20manually.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22window.travisAudit\x20&&\x20window.travisAudit.showNow()\x22\x20class=\x22btn-primary\x22>Generate\x20Report\x20Now</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>';
    }
}

function renderChart() {
    const _0x3e0bd8 = _0x1e67ff,
        _0x1e978e = document[_0x3e0bd8(0x1f6)]('analyticsChart')?.[_0x3e0bd8(0x31e)]('2d');
    if (!_0x1e978e) return;
    const _0x36489e = getFin(),
        _0x26016b = new Date();
    let _0x54a350 = [],
        _0xd78014 = [],
        _0x192d33 = [],
        _0x583fde = [];
    for (let _0x92b9d0 = 0x6; _0x92b9d0 >= 0x0; _0x92b9d0--) {
        const _0x3e2a91 = new Date();
        _0x3e2a91[_0x3e0bd8(0x402)](_0x26016b[_0x3e0bd8(0x28f)]() - _0x92b9d0), _0x54a350['push'](_0x3e2a91[_0x3e0bd8(0x229)](_0x3e0bd8(0x396), {
            'weekday': _0x3e0bd8(0x1c4)
        }));
        let _0x334bab = 0x0,
            _0x41ff12 = 0x0;
        state[_0x3e0bd8(0x26b)][_0x3e0bd8(0x347)](_0x549c83 => {
            const _0x28fd6e = _0x3e0bd8;
            if (new Date(_0x549c83['id'])[_0x28fd6e(0x24a)]() === _0x3e2a91[_0x28fd6e(0x24a)]()) {
                if (isLiquid(_0x549c83[_0x28fd6e(0x40c)])) _0x334bab += _0x549c83[_0x28fd6e(0x1c1)];
                if (isLiquid(_0x549c83[_0x28fd6e(0x230)])) _0x41ff12 += _0x549c83[_0x28fd6e(0x1c1)];
            }
        }), _0xd78014[_0x3e0bd8(0x2fa)](_0x334bab), _0x192d33['push'](_0x41ff12), _0x583fde[_0x3e0bd8(0x2fa)](_0x36489e[_0x3e0bd8(0x21a)]);
    }
    if (window[_0x3e0bd8(0x39b)]) window['travisChart']['destroy']();
    window[_0x3e0bd8(0x39b)] = new Chart(_0x1e978e, {
        'type': _0x3e0bd8(0x2a5),
        'data': {
            'labels': _0x54a350,
            'datasets': [{
                'label': _0x3e0bd8(0x284),
                'data': _0x583fde,
                'borderColor': _0x3e0bd8(0x227),
                'borderDash': [0x6, 0x3],
                'pointRadius': 0x0,
                'fill': ![],
                'borderWidth': 0x2
            }, {
                'label': _0x3e0bd8(0x28e),
                'data': _0xd78014,
                'borderColor': _0x3e0bd8(0x275),
                'backgroundColor': _0x3e0bd8(0x208),
                'fill': !![],
                'tension': 0.4,
                'borderWidth': 0x2,
                'pointBackgroundColor': _0x3e0bd8(0x275),
                'pointRadius': 0x3
            }, {
                'label': 'What\x20You\x20Earned',
                'data': _0x192d33,
                'borderColor': _0x3e0bd8(0x202),
                'backgroundColor': _0x3e0bd8(0x2f2),
                'fill': !![],
                'tension': 0.4,
                'borderWidth': 0x2,
                'pointBackgroundColor': '#107C10',
                'pointRadius': 0x3
            }]
        },
        'options': {
            'responsive': !![],
            'maintainAspectRatio': ![],
            'plugins': {
                'legend': {
                    'labels': {
                        'color': '#5a5a5a',
                        'font': {
                            'size': 0xb,
                            'family': _0x3e0bd8(0x37b)
                        },
                        'boxWidth': 0x14
                    }
                }
            },
            'scales': {
                'x': {
                    'grid': {
                        'color': 'rgba(0,0,0,0.04)'
                    },
                    'ticks': {
                        'color': _0x3e0bd8(0x2f8),
                        'font': {
                            'size': 0xa
                        }
                    }
                },
                'y': {
                    'grid': {
                        'color': _0x3e0bd8(0x3df)
                    },
                    'ticks': {
                        'color': _0x3e0bd8(0x2f8),
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

function updateHeader(_0x5a58f5) {
    const _0x22db41 = _0x1e67ff,
        _0x155eb7 = document[_0x22db41(0x1f6)](_0x22db41(0x320)),
        _0x216c0d = getUserWealthTier(_0x5a58f5[_0x22db41(0x21a)], _0x5a58f5['safeCash']),
        _0x349330 = [{
            'label': 'Total\x20Money\x20You\x20Have',
            'value': _0x22db41(0x327) + _0x5a58f5[_0x22db41(0x263)][_0x22db41(0x3c9)](),
            'color': _0x22db41(0x227),
            'icon': '💰'
        }, {
            'label': _0x22db41(0x414),
            'value': 'KSh\x20' + _0x5a58f5[_0x22db41(0x30d)]['toLocaleString'](),
            'color': _0x22db41(0x275),
            'icon': '📋'
        }, {
            'label': _0x22db41(0x32f),
            'value': _0x5a58f5['daysRem'] + _0x22db41(0x2e8),
            'color': '#107C10',
            'icon': '📅'
        }, {
            'label': _0x22db41(0x294),
            'value': _0x22db41(0x327) + Math[_0x22db41(0x249)](0x0, _0x5a58f5['daily'])[_0x22db41(0x3b2)](0x0),
            'color': _0x216c0d['color'],
            'icon': '📊'
        }];
    _0x155eb7[_0x22db41(0x2cd)][_0x22db41(0x3f9)] = _0x22db41(0x1ca);
    window[_0x22db41(0x322)] < 0x258 && (_0x155eb7[_0x22db41(0x2cd)][_0x22db41(0x3f9)] = _0x22db41(0x3a6));
    window[_0x22db41(0x322)] < 0x190 && (_0x155eb7['style'][_0x22db41(0x3f9)] = _0x22db41(0x1da));
    _0x155eb7[_0x22db41(0x3ec)] = _0x349330[_0x22db41(0x2b8)](_0x56fb2b => _0x22db41(0x250) + _0x56fb2b[_0x22db41(0x2d6)] + _0x22db41(0x1fe) + _0x56fb2b[_0x22db41(0x3b1)] + '\x20' + _0x56fb2b[_0x22db41(0x203)] + '</div><div\x20class=\x22metric-value\x22>' + _0x56fb2b[_0x22db41(0x27f)] + '</div></div>')[_0x22db41(0x2dd)]('');
    const _0x2f2a31 = document[_0x22db41(0x1f6)]('header-verdict-badge');
    if (_0x5a58f5[_0x22db41(0x341)] < 0x0) _0x2f2a31['className'] = 'chip\x20chip-red', _0x2f2a31[_0x22db41(0x38d)] = _0x22db41(0x29b);
    else {
        if (_0x5a58f5['daily'] < 0x64) _0x2f2a31[_0x22db41(0x2f9)] = _0x22db41(0x34a), _0x2f2a31['textContent'] = _0x22db41(0x329);
        else {
            if (_0x5a58f5[_0x22db41(0x21a)] < 0x12c) _0x2f2a31[_0x22db41(0x2f9)] = 'chip\x20chip-red', _0x2f2a31[_0x22db41(0x38d)] = '⚠\x20Very\x20Tight';
            else _0x5a58f5[_0x22db41(0x21a)] < 0x320 ? (_0x2f2a31[_0x22db41(0x2f9)] = 'chip\x20chip-yellow', _0x2f2a31[_0x22db41(0x38d)] = _0x22db41(0x3fa)) : (_0x2f2a31[_0x22db41(0x2f9)] = _0x22db41(0x214), _0x2f2a31[_0x22db41(0x38d)] = 'Stable');
        }
    }
}

function showTxModal() {
    const _0x444f3e = _0x1e67ff,
        _0x41731d = document['getElementById'](_0x444f3e(0x1ba)),
        _0x57f376 = document['getElementById'](_0x444f3e(0x32d));
    _0x41731d[_0x444f3e(0x3ec)] = _0x57f376[_0x444f3e(0x3ec)] = '';
    const _0x310ed1 = state[_0x444f3e(0x2ed)][_0x444f3e(0x2a9)] === 'personal',
        _0x1116d8 = (_0x63bd8f, _0x115972, _0x1108e1) => {
            const _0x68ae0e = _0x444f3e,
                _0x46eaca = document[_0x68ae0e(0x30e)](_0x68ae0e(0x3c6));
            return _0x46eaca['label'] = '●\x20' + _0x63bd8f, _0x46eaca[_0x68ae0e(0x2cd)][_0x68ae0e(0x2d6)] = _0x115972, _0x1108e1[_0x68ae0e(0x347)](_0x5f0662 => {
                _0x46eaca['appendChild'](new Option(_0x5f0662, _0x5f0662));
            }), _0x46eaca;
        };
    if (_0x310ed1) {
        const _0x143dd3 = _0x3eda0c => {
            const _0xfc6fcb = _0x444f3e;
            _0x3eda0c[_0xfc6fcb(0x26d)](_0x1116d8(_0xfc6fcb(0x32c), _0xfc6fcb(0x202), [_0xfc6fcb(0x2b2), _0xfc6fcb(0x369), _0xfc6fcb(0x2de), _0xfc6fcb(0x2b7)])), _0x3eda0c[_0xfc6fcb(0x26d)](_0x1116d8(_0xfc6fcb(0x272), '#107C10', [_0xfc6fcb(0x36b), _0xfc6fcb(0x1c7), _0xfc6fcb(0x1e8), _0xfc6fcb(0x368), 'Other\x20Income'])), _0x3eda0c['appendChild'](_0x1116d8('NECESSARY\x20EXPENSES', _0xfc6fcb(0x35b), [_0xfc6fcb(0x3f5), _0xfc6fcb(0x381), _0xfc6fcb(0x22b), _0xfc6fcb(0x359), _0xfc6fcb(0x252), _0xfc6fcb(0x1c2)])), _0x3eda0c[_0xfc6fcb(0x26d)](_0x1116d8('DISCRETIONARY', '#C42B1C', [_0xfc6fcb(0x1fc), 'Clothes', _0xfc6fcb(0x34c), _0xfc6fcb(0x2e9)])), _0x3eda0c[_0xfc6fcb(0x26d)](_0x1116d8(_0xfc6fcb(0x343), '#0078D4', ['Loan\x20Repayment', _0xfc6fcb(0x2c7)]));
        };
        _0x143dd3(_0x41731d), _0x143dd3(_0x57f376);
    } else {
        const _0x53dca6 = _0x4e7b75 => {
            const _0x16a497 = _0x444f3e;
            _0x4e7b75[_0x16a497(0x26d)](_0x1116d8('ASSETS', _0x16a497(0x202), [_0x16a497(0x210), _0x16a497(0x1d2), _0x16a497(0x3a0), _0x16a497(0x260), _0x16a497(0x27a)])), _0x4e7b75[_0x16a497(0x26d)](_0x1116d8(_0x16a497(0x223), _0x16a497(0x202), ['Sales\x20Revenue', _0x16a497(0x3e9), _0x16a497(0x21e)])), _0x4e7b75['appendChild'](_0x1116d8('OPERATING\x20EXPENSES', _0x16a497(0x35b), [_0x16a497(0x381), _0x16a497(0x33a), 'Utilities', _0x16a497(0x22d), 'Tax', _0x16a497(0x29f)])), _0x4e7b75[_0x16a497(0x26d)](_0x1116d8(_0x16a497(0x33e), _0x16a497(0x275), ['Marketing', _0x16a497(0x278), 'Professional\x20Fees'])), _0x4e7b75[_0x16a497(0x26d)](_0x1116d8(_0x16a497(0x343), '#0078D4', [_0x16a497(0x1c8), _0x16a497(0x309)]));
        };
        _0x53dca6(_0x41731d), _0x53dca6(_0x57f376);
    }
    document['getElementById'](_0x444f3e(0x2ec))[_0x444f3e(0x25f)]['add'](_0x444f3e(0x311)), updateLiveHud();
}
async function commitTransaction() {
    const _0x3d76ba = _0x1e67ff,
        _0x45fc82 = parseFloat(document[_0x3d76ba(0x1f6)](_0x3d76ba(0x3de))[_0x3d76ba(0x27f)]),
        _0x266bcf = document[_0x3d76ba(0x1f6)](_0x3d76ba(0x1ba))[_0x3d76ba(0x27f)],
        _0x1e752d = document[_0x3d76ba(0x1f6)](_0x3d76ba(0x32d))[_0x3d76ba(0x27f)],
        _0x1ce6e4 = document[_0x3d76ba(0x1f6)](_0x3d76ba(0x35d))['value'] || 'Market\x20Exchange';
    if (_0x266bcf === _0x1e752d || isNaN(_0x45fc82) || _0x45fc82 <= 0x0) return showCustomAlert('Error:\x20Transaction\x20must\x20move\x20money\x20between\x20two\x20different\x20accounts.');
    const _0x1e04d7 = {
        'id': Date[_0x3d76ba(0x354)](),
        'debit': _0x266bcf,
        'credit': _0x1e752d,
        'amount': _0x45fc82,
        'desc': _0x1ce6e4
    };
    state[_0x3d76ba(0x26b)][_0x3d76ba(0x3e6)](_0x1e04d7), await saveData('tx', _0x1e04d7);
    if (typeof travisNotif !== _0x3d76ba(0x3a2)) travisNotif[_0x3d76ba(0x3c5)]();
    if (typeof saveBackup === _0x3d76ba(0x257)) {
        await saveBackup();
        if (!backupDirHandle) await setupBackupFolder();
    }
    closeTxModal(), nav('dash');
}

function closeTxModal() {
    const _0x2d2dde = _0x1e67ff;
    document['getElementById'](_0x2d2dde(0x2ec))[_0x2d2dde(0x25f)][_0x2d2dde(0x38e)](_0x2d2dde(0x311)), document[_0x2d2dde(0x1f6)](_0x2d2dde(0x3de))['value'] = '';
}

function addObligationRow(_0x19dd2a = '', _0x206219 = '') {
    const _0x91983e = _0x1e67ff,
        _0x3d5670 = document['createElement'](_0x91983e(0x36f));
    _0x3d5670['style'][_0x91983e(0x276)] = _0x91983e(0x2c6), _0x3d5670[_0x91983e(0x3ec)] = '<input\x20type=\x22text\x22\x20placeholder=\x22e.g.\x20Rent\x22\x20value=\x22' + _0x19dd2a + '\x22\x20class=\x22win-input\x22\x20style=\x22flex:1;\x22><input\x20type=\x22number\x22\x20placeholder=\x22Amount\x22\x20value=\x22' + _0x206219 + _0x91983e(0x401), document[_0x91983e(0x1f6)](_0x91983e(0x245))['appendChild'](_0x3d5670);
}

function setUserType(_0x513f3e) {
    const _0x2ca396 = _0x1e67ff;
    state[_0x2ca396(0x355)] = _0x513f3e, document[_0x2ca396(0x1f6)](_0x2ca396(0x220))[_0x2ca396(0x2f9)] = _0x2ca396(0x2ef) + (_0x513f3e === _0x2ca396(0x2c0) ? _0x2ca396(0x357) : ''), document[_0x2ca396(0x1f6)](_0x2ca396(0x37c))[_0x2ca396(0x2f9)] = _0x2ca396(0x2ef) + (_0x513f3e === _0x2ca396(0x310) ? _0x2ca396(0x357) : '');
}
async function finalizeSetup() {
    const _0x5f48df = _0x1e67ff,
        _0x5be8aa = document['getElementById']('user-name')[_0x5f48df(0x27f)],
        _0x4b6d45 = Array['from'](document['querySelectorAll'](_0x5f48df(0x1f8)))[_0x5f48df(0x2b8)](_0x416d18 => ({
            'label': _0x416d18[_0x5f48df(0x3c7)](_0x5f48df(0x247))[0x0][_0x5f48df(0x27f)],
            'amount': parseFloat(_0x416d18[_0x5f48df(0x3c7)]('input')[0x1]['value']) || 0x0
        }))[_0x5f48df(0x225)](_0x1900eb => _0x1900eb[_0x5f48df(0x203)]);
    if (!_0x5be8aa || !state['tempType']) return showCustomAlert('Please\x20enter\x20your\x20name\x20and\x20select\x20profile\x20type.');
    state[_0x5f48df(0x2ed)] = {
        'name': _0x5be8aa,
        'type': state[_0x5f48df(0x355)]
    }, state[_0x5f48df(0x25a)] = _0x4b6d45, await saveData(_0x5f48df(0x30f), {
        'id': _0x5f48df(0x2c2),
        'user': state[_0x5f48df(0x2ed)],
        'obligations': state[_0x5f48df(0x25a)]
    });
    if (typeof saveBackup === _0x5f48df(0x257)) await saveBackup();
    location[_0x5f48df(0x1ea)]();
}
async function factoryReset() {
    const _0x41962e = _0x1e67ff;
    confirm(_0x41962e(0x23d)) && (indexedDB['deleteDatabase'](_0x41962e(0x2b9)), location['reload']());
}

function showHelpModal() {
    const _0x25eacd = _0x1e67ff,
        _0x73049f = document[_0x25eacd(0x1f6)](_0x25eacd(0x348));
    _0x73049f[_0x25eacd(0x2cd)][_0x25eacd(0x31d)] = 'flex';
}

function closeHelpModal() {
    const _0x1279c4 = _0x1e67ff,
        _0x1d55e8 = document[_0x1279c4(0x1f6)](_0x1279c4(0x348));
    _0x1d55e8[_0x1279c4(0x2cd)]['display'] = _0x1279c4(0x38c);
}
async function handleAsk() {
    const _0x1e2f7a = _0x1e67ff,
        _0x250c06 = document[_0x1e2f7a(0x1f6)](_0x1e2f7a(0x34b)),
        _0x4cbe05 = document[_0x1e2f7a(0x1f6)](_0x1e2f7a(0x399)),
        _0x1c411a = _0x250c06[_0x1e2f7a(0x27f)][_0x1e2f7a(0x1be)]();
    if (!_0x1c411a) return;
    _0x4cbe05['innerHTML'] += _0x1e2f7a(0x2b5) + escapeHtml(_0x1c411a) + _0x1e2f7a(0x221), _0x250c06[_0x1e2f7a(0x27f)] = '', _0x4cbe05[_0x1e2f7a(0x24b)] = _0x4cbe05[_0x1e2f7a(0x286)];
    const _0x392027 = document[_0x1e2f7a(0x30e)](_0x1e2f7a(0x36f));
    _0x392027['innerHTML'] = _0x1e2f7a(0x36a), _0x4cbe05[_0x1e2f7a(0x26d)](_0x392027), _0x4cbe05[_0x1e2f7a(0x24b)] = _0x4cbe05[_0x1e2f7a(0x286)], await new Promise(_0x1f6942 => setTimeout(_0x1f6942, 0x258 + Math[_0x1e2f7a(0x3aa)]() * 0x1f4)), _0x392027['remove']();
    if (hasPendingClarification()) {
        const _0xcd2970 = conversationState['pendingClarification'],
            _0x112dfb = _0x1c411a[_0x1e2f7a(0x313)](/(\d+(?:,\d+)?(?:\s*k|\s*thousand|\s*million)?)/i);
        let _0x1b7721 = 0x0;
        if (_0x112dfb) {
            let _0x118560 = _0x112dfb[0x1]['replace'](/,/g, '');
            if (_0x118560[_0x1e2f7a(0x3ee)]()[_0x1e2f7a(0x243)]('k')) _0x118560 = parseFloat(_0x118560) * 0x3e8;
            else {
                if (_0x118560[_0x1e2f7a(0x3ee)]()[_0x1e2f7a(0x243)](_0x1e2f7a(0x2da))) _0x118560 = parseFloat(_0x118560) * 0xf4240;
            }
            _0x1b7721 = parseFloat(_0x118560);
        }
        if (!isNaN(_0x1b7721) && _0x1b7721 > 0x0) {
            const _0x4b6515 = getFin(),
                _0x17b735 = getStatusSummary(),
                _0x70bc39 = _0x17b735['wealthTier'],
                _0x1349ed = _0x17b735[_0x1e2f7a(0x3c3)],
                _0x586347 = _0x17b735[_0x1e2f7a(0x2be)],
                _0x1ab91d = _0x17b735[_0x1e2f7a(0x3e7)];
            let _0x482ec3 = '',
                _0x15184e = '';
            if (_0xcd2970[_0x1e2f7a(0x1e3)] === _0x1e2f7a(0x3ed)) {
                if (_0x70bc39[_0x1e2f7a(0x1cc)] === _0x1e2f7a(0x372)) {
                    if (_0x1b7721 > _0x1349ed) _0x482ec3 = _0x1e2f7a(0x3ac) + _0x1b7721 + _0x1e2f7a(0x392) + _0xcd2970[_0x1e2f7a(0x1ce)] + _0x1e2f7a(0x2e2) + _0x1349ed + '\x20shillings\x20TOTAL\x20for\x20the\x20next\x20' + _0x1ab91d + _0x1e2f7a(0x303), _0x15184e = 'Do\x20not\x20buy\x20this.\x20Focus\x20only\x20on\x20food\x20and\x20rent.';
                    else {
                        if (_0x1b7721 > _0x586347) {
                            const _0x4f09f1 = Math[_0x1e2f7a(0x2ba)](_0x1b7721 / _0x586347);
                            _0x482ec3 = _0xcd2970[_0x1e2f7a(0x1ce)] + _0x1e2f7a(0x1d4) + _0x1b7721 + _0x1e2f7a(0x30c) + Math['floor'](_0x586347) + _0x1e2f7a(0x41c), _0x15184e = _0x1e2f7a(0x26e) + _0x4f09f1 + _0x1e2f7a(0x362) + (_0x4f09f1 > 0x1 ? 's' : '') + _0x1e2f7a(0x389);
                        } else {
                            const _0x40bd03 = _0x1349ed - _0x1b7721,
                                _0x5007eb = _0x40bd03 / _0x1ab91d;
                            _0x482ec3 = '\x20' + _0xcd2970[_0x1e2f7a(0x1ce)] + _0x1e2f7a(0x1d4) + _0x1b7721 + _0x1e2f7a(0x242) + _0x40bd03 + _0x1e2f7a(0x28a) + _0x1ab91d + _0x1e2f7a(0x31c), _0x15184e = _0x1e2f7a(0x3e3) + Math[_0x1e2f7a(0x3d0)](_0x5007eb) + _0x1e2f7a(0x246);
                        }
                    }
                } else {
                    if (_0x70bc39['adviceStyle'] === _0x1e2f7a(0x2f0)) {
                        const _0x3170e2 = Math[_0x1e2f7a(0x3d8)](_0x1b7721 / _0x1349ed * 0x64);
                        _0x3170e2 > 0x1e ? (_0x482ec3 = _0x1e2f7a(0x409) + _0xcd2970[_0x1e2f7a(0x1ce)] + _0x1e2f7a(0x1d4) + _0x1b7721 + _0x1e2f7a(0x410) + _0x3170e2 + _0x1e2f7a(0x2c9), _0x15184e = 'That\x27s\x20a\x20big\x20chunk.\x20Can\x20you\x20wait\x20a\x20few\x20days\x20or\x20find\x20a\x20cheaper\x20option?') : (_0x482ec3 = '\x20' + _0xcd2970[_0x1e2f7a(0x1ce)] + _0x1e2f7a(0x1d4) + _0x1b7721 + _0x1e2f7a(0x3e2), _0x15184e = _0x1e2f7a(0x273));
                    } else _0x482ec3 = _0x1e2f7a(0x2f7) + _0xcd2970[_0x1e2f7a(0x1ce)] + '\x20costs\x20' + _0x1b7721 + _0x1e2f7a(0x403), _0x15184e = _0x1e2f7a(0x41b);
                }
            } else {
                if (_0xcd2970[_0x1e2f7a(0x1e3)] === 'loan') {
                    if (_0x70bc39[_0x1e2f7a(0x1cc)] === _0x1e2f7a(0x372)) _0x482ec3 = _0x1e2f7a(0x345) + _0x1b7721 + '\x20shilling\x20loan.\x20With\x20your\x20current\x20situation,\x20any\x20loan\x20is\x20dangerous.', _0x15184e = _0x1e2f7a(0x2fe);
                    else {
                        const _0x1139cd = Math['round'](_0x1b7721 * 0.15);
                        _0x482ec3 = _0x1e2f7a(0x2c8) + _0x1b7721 + '\x20shilling\x20loan\x20would\x20cost\x20about\x20' + _0x1139cd + '\x20shillings\x20per\x20month\x20in\x20interest.', _0x15184e = _0x1e2f7a(0x411) + _0x1139cd + _0x1e2f7a(0x3fc);
                    }
                }
            }
            const _0x2e61c2 = _0x482ec3 + _0x1e2f7a(0x290) + _0x15184e,
                _0x3b7db1 = _0x564ef0(_0x2e61c2, _0x70bc39, _0x586347, _0x1349ed, _0x1ab91d);
            _0x4cbe05[_0x1e2f7a(0x3ec)] += '<div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>' + _0x3b7db1 + _0x1e2f7a(0x221), _0x4cbe05['scrollTop'] = _0x4cbe05[_0x1e2f7a(0x286)], clearPendingClarification();
            return;
        } else {
            const _0x5a5705 = 'I\x20need\x20the\x20amount\x20to\x20give\x20you\x20accurate\x20advice.\x20How\x20many\x20shillings\x20are\x20we\x20talking\x20about?',
                _0x2c952f = _0x564ef0(_0x5a5705, getStatusSummary()[_0x1e2f7a(0x37e)], 0x0, 0x0, 0x0);
            _0x4cbe05['innerHTML'] += '<div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>' + _0x2c952f + _0x1e2f7a(0x221), _0x4cbe05[_0x1e2f7a(0x24b)] = _0x4cbe05[_0x1e2f7a(0x286)];
            return;
        }
    }
    const _0x128690 = _0x1c411a['toLowerCase']()[_0x1e2f7a(0x1be)](),
        _0x233e85 = getFin(),
        _0x57a6ad = getStatusSummary(),
        _0x1b43e4 = state['user']?.[_0x1e2f7a(0x2a9)] === 'business',
        _0xddfb89 = _0x57a6ad[_0x1e2f7a(0x37e)],
        _0x24136c = _0x57a6ad[_0x1e2f7a(0x3c3)],
        _0x12f9e8 = _0x57a6ad[_0x1e2f7a(0x2be)],
        _0xa6adc0 = _0x57a6ad[_0x1e2f7a(0x3e7)];
    let _0x3898ea = 0x0;
    const _0x3a4eea = _0x128690[_0x1e2f7a(0x1c5)](/,/g, ''),
        _0x1e2f98 = _0x3a4eea['match'](/(\d+(?:\.\d+)?)\s*(k|thousand|ksh|shillings|bob|million)?/i);
    if (_0x1e2f98) {
        _0x3898ea = parseFloat(_0x1e2f98[0x1]);
        if (_0x1e2f98[0x2] && /k|thousand/i [_0x1e2f7a(0x20e)](_0x1e2f98[0x2])) _0x3898ea *= 0x3e8;
        if (_0x1e2f98[0x2] && /million/i ['test'](_0x1e2f98[0x2])) _0x3898ea *= 0xf4240;
    }
    const _0x400464 = (..._0x46f6a4) => _0x46f6a4[_0x1e2f7a(0x32b)](_0x310753 => _0x128690[_0x1e2f7a(0x243)](_0x310753)),
        _0x3fd775 = {
            'spend': _0x400464(_0x1e2f7a(0x241), 'spend', _0x1e2f7a(0x1e5), _0x1e2f7a(0x1bb), _0x1e2f7a(0x404), _0x1e2f7a(0x1d1), _0x1e2f7a(0x283), _0x1e2f7a(0x337), _0x1e2f7a(0x306), 'sugar', _0x1e2f7a(0x377), _0x1e2f7a(0x20b), 'milk', _0x1e2f7a(0x258), 'chocolate', 'soda', _0x1e2f7a(0x262), _0x1e2f7a(0x1dd)),
            'loan': _0x400464('loan', _0x1e2f7a(0x1b0), _0x1e2f7a(0x21b), 'fuliza', 'mshwari', _0x1e2f7a(0x40c), _0x1e2f7a(0x328), _0x1e2f7a(0x1f0)),
            'status': _0x400464(_0x1e2f7a(0x38b), _0x1e2f7a(0x270), 'days\x20time', _0x1e2f7a(0x239), 'doing', _0x1e2f7a(0x407), _0x1e2f7a(0x23c), 'summary', _0x1e2f7a(0x28d)),
            'hiring': _0x400464('hire', _0x1e2f7a(0x1af), _0x1e2f7a(0x27c), _0x1e2f7a(0x20a), _0x1e2f7a(0x383), _0x1e2f7a(0x39d), _0x1e2f7a(0x34f)),
            'saving': _0x400464('save', _0x1e2f7a(0x2b6), 'emergency', _0x1e2f7a(0x379), 'set\x20aside'),
            'profit': _0x400464(_0x1e2f7a(0x291), _0x1e2f7a(0x228), _0x1e2f7a(0x40f), 'allowance', _0x1e2f7a(0x34d), _0x1e2f7a(0x334), _0x1e2f7a(0x387)),
            'habit': _0x400464(_0x1e2f7a(0x238), _0x1e2f7a(0x259), _0x1e2f7a(0x1c6))
        };

    function _0x564ef0(_0x1b9feb, _0x55922d, _0x405ead, _0x176d0e, _0x16ca77) {
        const _0x3268c7 = _0x1e2f7a,
            _0x258da6 = _0x55922d['color'],
            _0x1a9f3d = _0x55922d[_0x3268c7(0x391)],
            _0x5e9eb3 = _0x405ead > 0x0 ? _0x3268c7(0x327) + Math['floor'](_0x405ead)[_0x3268c7(0x3c9)]() : _0x3268c7(0x413),
            _0x27c0cf = _0x176d0e > 0x0 ? 'KSh\x20' + _0x176d0e[_0x3268c7(0x3c9)]() : _0x3268c7(0x2ce),
            _0x280e21 = '<div\x20style=\x22display:flex;flex-wrap:wrap;align-items:center;gap:6px\x2010px;padding:10px\x2012px;background:var(--color-background-secondary);border-radius:var(--border-radius-md);margin-bottom:14px;font-size:13px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:5px;\x22><span\x20style=\x22color:var(--color-text-secondary);\x22>Status</span><span\x20style=\x22font-weight:500;color:' + _0x258da6 + _0x3268c7(0x1d7) + _0x1a9f3d + _0x3268c7(0x1ee) + _0x5e9eb3 + _0x3268c7(0x2d5) + _0x27c0cf + '</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x16ca77 > 0x0 ? _0x3268c7(0x21f) + _0x16ca77 + _0x3268c7(0x2a6) : '') + _0x3268c7(0x1b2),
            _0x244c13 = '<div\x20style=\x22margin-top:16px;padding:12px\x2014px;border-left:3px\x20solid\x20' + _0x258da6 + _0x3268c7(0x3d4) + _0x1b9feb + _0x3268c7(0x221);
        return '' + _0x280e21 + _0x244c13;
    }
    let _0x51cada = '';
    if (_0x3fd775[_0x1e2f7a(0x270)]) {
        _0x51cada = humanReadableStatus(_0x24136c, _0x12f9e8, _0xa6adc0, _0xddfb89);
        if (_0xddfb89[_0x1e2f7a(0x1cc)] === _0x1e2f7a(0x372)) _0x51cada += _0x1e2f7a(0x1b1) + _0xddfb89[_0x1e2f7a(0x3a5)];
        else _0xddfb89['adviceStyle'] === _0x1e2f7a(0x2f0) ? _0x51cada += _0x1e2f7a(0x271) : _0x51cada += '<br><br><strong>Suggestion:</strong>\x20Consider\x20saving\x20' + Math['floor'](_0x24136c * 0.1)['toLocaleString']() + _0x1e2f7a(0x3ae);
        const _0x4ba549 = _0x564ef0(_0x51cada, _0xddfb89, _0x12f9e8, _0x24136c, _0xa6adc0);
        _0x4cbe05[_0x1e2f7a(0x3ec)] += '<div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>' + _0x4ba549 + _0x1e2f7a(0x221), _0x4cbe05[_0x1e2f7a(0x24b)] = _0x4cbe05[_0x1e2f7a(0x286)];
        return;
    }
    if (_0x3fd775[_0x1e2f7a(0x3ed)]) {
        if (_0x3898ea === 0x0) {
            const _0x4ee6f9 = _0x128690[_0x1e2f7a(0x313)](/(?:buy|get|spend on|purchase)\s+([a-z\s]+)/i),
                _0x18c745 = _0x4ee6f9 ? _0x4ee6f9[0x1][_0x1e2f7a(0x1be)]() : _0x1e2f7a(0x3a1);
            setPendingClarification(_0x1e2f7a(0x3ed), _0x18c745, 'amount'), _0x51cada = 'To\x20give\x20you\x20straight\x20advice,\x20I\x20need\x20to\x20know:\x20How\x20many\x20shillings\x20does\x20' + _0x18c745 + '\x20cost\x20in\x20your\x20area?';
            const _0x63d695 = _0x564ef0(_0x51cada, _0xddfb89, _0x12f9e8, _0x24136c, _0xa6adc0);
            _0x4cbe05[_0x1e2f7a(0x3ec)] += _0x1e2f7a(0x1c3) + _0x63d695 + _0x1e2f7a(0x221), _0x4cbe05['scrollTop'] = _0x4cbe05[_0x1e2f7a(0x286)];
            return;
        }
        if (_0x24136c < 0x0) {
            _0x51cada = _0x1e2f7a(0x353) + Math['abs'](_0x24136c)[_0x1e2f7a(0x3c9)]() + '\x20shillings.\x20You\x20cannot\x20afford\x20to\x20spend\x20ANY\x20money\x20right\x20now\x20-\x20not\x20even\x20' + _0x3898ea + _0x1e2f7a(0x23f);
            const _0x5dad20 = _0x564ef0(_0x51cada, _0xddfb89, _0x12f9e8, _0x24136c, _0xa6adc0);
            _0x4cbe05[_0x1e2f7a(0x3ec)] += _0x1e2f7a(0x1c3) + _0x5dad20 + _0x1e2f7a(0x221), _0x4cbe05[_0x1e2f7a(0x24b)] = _0x4cbe05['scrollHeight'];
            return;
        }
        if (_0xddfb89[_0x1e2f7a(0x1cc)] === 'survival') {
            if (_0x3898ea > _0x24136c) _0x51cada = _0x1e2f7a(0x3cf) + _0x3898ea + _0x1e2f7a(0x3b9) + _0x24136c + _0x1e2f7a(0x342) + _0xa6adc0 + _0x1e2f7a(0x303);
            else {
                if (_0x3898ea > _0x12f9e8) {
                    const _0x58fbec = Math[_0x1e2f7a(0x2ba)](_0x3898ea / _0x12f9e8);
                    _0x51cada = _0x1e2f7a(0x236) + _0x3898ea + _0x1e2f7a(0x2b0) + Math[_0x1e2f7a(0x3d0)](_0x12f9e8) + _0x1e2f7a(0x3a7) + _0x58fbec + _0x1e2f7a(0x362) + (_0x58fbec > 0x1 ? 's' : '') + _0x1e2f7a(0x2f6);
                } else {
                    const _0x155b80 = _0x24136c - _0x3898ea,
                        _0x3d2565 = _0x155b80 / _0xa6adc0;
                    _0x51cada = _0x1e2f7a(0x31f) + _0x155b80 + _0x1e2f7a(0x28a) + _0xa6adc0 + _0x1e2f7a(0x2c4) + Math['floor'](_0x3d2565) + _0x1e2f7a(0x20d);
                }
            }
        } else {
            if (_0xddfb89[_0x1e2f7a(0x1cc)] === _0x1e2f7a(0x2f0)) {
                const _0x305593 = Math[_0x1e2f7a(0x3d8)](_0x3898ea / _0x24136c * 0x64);
                _0x305593 > 0x1e ? _0x51cada = _0x1e2f7a(0x236) + _0x3898ea + '\x20shillings,\x20which\x20is\x20' + _0x305593 + '%\x20of\x20your\x20savings.\x20That\x27s\x20significant.\x20Can\x20you\x20wait\x20a\x20few\x20days?' : _0x51cada = '\x20' + _0x3898ea + '\x20shillings\x20is\x20reasonable\x20for\x20your\x20situation.\x20Go\x20ahead\x20but\x20track\x20it.';
            } else {
                if (_0xddfb89[_0x1e2f7a(0x1cc)] === _0x1e2f7a(0x232)) {
                    const _0x8e43bf = Math[_0x1e2f7a(0x3d8)](_0x3898ea / _0x24136c * 0x64);
                    _0x8e43bf > 0x32 ? _0x51cada = 'This\x20costs\x20' + _0x3898ea + _0x1e2f7a(0x2a0) + _0x8e43bf + _0x1e2f7a(0x2dc) : _0x51cada = _0x1e2f7a(0x335);
                } else _0x51cada = '💎\x20At\x20your\x20wealth\x20level,\x20' + _0x3898ea + _0x1e2f7a(0x378);
            }
        }
        const _0x52605d = _0x564ef0(_0x51cada, _0xddfb89, _0x12f9e8, _0x24136c, _0xa6adc0);
        _0x4cbe05['innerHTML'] += _0x1e2f7a(0x1c3) + _0x52605d + '</div></div>', _0x4cbe05[_0x1e2f7a(0x24b)] = _0x4cbe05[_0x1e2f7a(0x286)];
        return;
    }
    if (_0x3fd775['loan']) {
        if (_0x3898ea === 0x0) {
            setPendingClarification(_0x1e2f7a(0x240), _0x1e2f7a(0x240), _0x1e2f7a(0x1c1)), _0x51cada = _0x1e2f7a(0x3f1);
            const _0x21770e = _0x564ef0(_0x51cada, _0xddfb89, _0x12f9e8, _0x24136c, _0xa6adc0);
            _0x4cbe05[_0x1e2f7a(0x3ec)] += '<div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>' + _0x21770e + _0x1e2f7a(0x221), _0x4cbe05['scrollTop'] = _0x4cbe05['scrollHeight'];
            return;
        }
        if (_0xddfb89[_0x1e2f7a(0x1cc)] === _0x1e2f7a(0x372)) _0x51cada = 'Do\x20not\x20borrow\x20' + _0x3898ea + _0x1e2f7a(0x25e);
        else {
            if (_0xddfb89[_0x1e2f7a(0x1cc)] === 'conservative') {
                const _0x29498c = Math[_0x1e2f7a(0x3d8)](_0x3898ea * 0.15);
                _0x51cada = _0x1e2f7a(0x349) + _0x3898ea + _0x1e2f7a(0x3d7) + _0x29498c + '\x20shillings\x20per\x20month\x20in\x20interest.\x20Only\x20borrow\x20if\x20absolutely\x20necessary.';
            } else {
                const _0x4efe36 = Math['round'](_0x3898ea * 0.12);
                _0x51cada = '💎\x20A\x20' + _0x3898ea + _0x1e2f7a(0x3b4) + _0x4efe36 + _0x1e2f7a(0x375);
            }
        }
        const _0x349584 = _0x564ef0(_0x51cada, _0xddfb89, _0x12f9e8, _0x24136c, _0xa6adc0);
        _0x4cbe05[_0x1e2f7a(0x3ec)] += '<div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>' + _0x349584 + '</div></div>', _0x4cbe05[_0x1e2f7a(0x24b)] = _0x4cbe05[_0x1e2f7a(0x286)];
        return;
    }
    if (_0x3fd775[_0x1e2f7a(0x27b)]) {
        if (_0xddfb89['adviceStyle'] === _0x1e2f7a(0x372)) _0x51cada = _0x1e2f7a(0x2f4);
        else {
            if (_0xddfb89[_0x1e2f7a(0x1cc)] === _0x1e2f7a(0x2f0)) {
                const _0x497de6 = Math[_0x1e2f7a(0x3d0)](_0x24136c * 0.25);
                _0x51cada = _0x1e2f7a(0x3fe) + _0x497de6[_0x1e2f7a(0x3c9)]() + '\x20shillings.\x20Can\x20you\x20pay\x20that\x20consistently?\x20If\x20yes,\x20consider\x20a\x20part-time\x20person\x20first.';
            } else _0x51cada = '💎\x20At\x20your\x20wealth\x20level,\x20hiring\x20decisions\x20should\x20be\x20about\x20ROI.\x20A\x20good\x20hire\x20should\x20generate\x20at\x20least\x203x\x20their\x20salary\x20in\x20value.\x20What\x20role\x20are\x20you\x20considering?';
        }
        const _0x10d637 = _0x564ef0(_0x51cada, _0xddfb89, _0x12f9e8, _0x24136c, _0xa6adc0);
        _0x4cbe05[_0x1e2f7a(0x3ec)] += '<div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>' + _0x10d637 + _0x1e2f7a(0x221), _0x4cbe05['scrollTop'] = _0x4cbe05['scrollHeight'];
        return;
    }
    if (_0x3fd775[_0x1e2f7a(0x2b6)]) {
        if (_0xddfb89['adviceStyle'] === _0x1e2f7a(0x372)) _0x51cada = _0x1e2f7a(0x1ff);
        else {
            if (_0xddfb89[_0x1e2f7a(0x1cc)] === _0x1e2f7a(0x2f0)) {
                const _0x2509ab = Math[_0x1e2f7a(0x3d0)](_0x24136c * 0.07);
                _0x51cada = 'Try\x20to\x20save\x20' + _0x2509ab[_0x1e2f7a(0x3c9)]() + _0x1e2f7a(0x339);
            } else {
                const _0x517880 = Math[_0x1e2f7a(0x3d0)](_0x24136c * 0.15);
                _0x51cada = _0x1e2f7a(0x2f3) + _0x517880[_0x1e2f7a(0x3c9)]() + _0x1e2f7a(0x376);
            }
        }
        const _0x1b0672 = _0x564ef0(_0x51cada, _0xddfb89, _0x12f9e8, _0x24136c, _0xa6adc0);
        _0x4cbe05[_0x1e2f7a(0x3ec)] += _0x1e2f7a(0x1c3) + _0x1b0672 + '</div></div>', _0x4cbe05[_0x1e2f7a(0x24b)] = _0x4cbe05[_0x1e2f7a(0x286)];
        return;
    }
    if (_0x3fd775[_0x1e2f7a(0x291)] || _0x3fd775[_0x1e2f7a(0x238)]) {
        const _0x26093c = _0x233e85[_0x1e2f7a(0x30b)]['filter'](_0x489b54 => _0x489b54[_0x1e2f7a(0x318)] > 0x0);
        if (_0x26093c['length'] > 0x0) {
            const _0x2373ae = _0x26093c[0x0];
            _0x51cada = '\x20I\x20found\x20a\x20leak:\x20You\x20spent\x20' + _0x2373ae[_0x1e2f7a(0x318)][_0x1e2f7a(0x3c9)]() + _0x1e2f7a(0x2d0) + _0x2373ae[_0x1e2f7a(0x203)] + _0x1e2f7a(0x295);
        } else _0x51cada = _0x1e2f7a(0x1b4) + (_0x233e85['obsStatus'][_0x1e2f7a(0x344)]((_0x37f1d8, _0x7dc8c3) => _0x7dc8c3[_0x1e2f7a(0x336)] - _0x37f1d8[_0x1e2f7a(0x336)])[0x0]?.[_0x1e2f7a(0x203)] || _0x1e2f7a(0x3a9)) + '\x20at\x20' + Math[_0x1e2f7a(0x249)](..._0x233e85[_0x1e2f7a(0x30b)][_0x1e2f7a(0x2b8)](_0x26b430 => _0x26b430[_0x1e2f7a(0x336)]))['toLocaleString']() + '\x20shillings.\x20Can\x20you\x20reduce\x20that\x20by\x2010%?';
        const _0x5c1ed0 = _0x564ef0(_0x51cada, _0xddfb89, _0x12f9e8, _0x24136c, _0xa6adc0);
        _0x4cbe05[_0x1e2f7a(0x3ec)] += '<div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>' + _0x5c1ed0 + _0x1e2f7a(0x221), _0x4cbe05['scrollTop'] = _0x4cbe05[_0x1e2f7a(0x286)];
        return;
    }
    _0x51cada = _0x1e2f7a(0x21d);
    const _0xbe0eb7 = _0x564ef0(_0x51cada, _0xddfb89, _0x12f9e8, _0x24136c, _0xa6adc0);
    _0x4cbe05[_0x1e2f7a(0x3ec)] += _0x1e2f7a(0x1c3) + _0xbe0eb7 + _0x1e2f7a(0x221), _0x4cbe05[_0x1e2f7a(0x24b)] = _0x4cbe05[_0x1e2f7a(0x286)];
}

function escapeHtml(_0x35ae84) {
    const _0x192cea = _0x1e67ff;
    if (!_0x35ae84) return '';
    return _0x35ae84[_0x192cea(0x1c5)](/[&<>]/g, function(_0x170a76) {
        const _0x7275d7 = _0x192cea;
        if (_0x170a76 === '&') return _0x7275d7(0x261);
        if (_0x170a76 === '<') return _0x7275d7(0x350);
        if (_0x170a76 === '>') return _0x7275d7(0x22f);
        return _0x170a76;
    });
}
window[_0x1e67ff(0x1d3)](_0x1e67ff(0x2ae), () => {
    const _0x4dd7d2 = _0x1e67ff,
        _0x5bf9d2 = document[_0x4dd7d2(0x1f6)](_0x4dd7d2(0x320));
    if (!_0x5bf9d2) return;
    if (window['innerWidth'] < 0x258) _0x5bf9d2[_0x4dd7d2(0x2cd)]['gridTemplateColumns'] = _0x4dd7d2(0x3a6);
    else window[_0x4dd7d2(0x322)] < 0x384 ? _0x5bf9d2[_0x4dd7d2(0x2cd)]['gridTemplateColumns'] = _0x4dd7d2(0x3a6) : _0x5bf9d2[_0x4dd7d2(0x2cd)][_0x4dd7d2(0x3f9)] = _0x4dd7d2(0x1ca);
});
async function boot() {
    const _0x10f6b5 = _0x1e67ff;
    await initDB();
    let _0x31db53 = await getData(_0x10f6b5(0x30f), _0x10f6b5(0x2c2)) || {
        'activated': ![]
    };
    const _0x78025b = window[_0x10f6b5(0x2a4)](_0x10f6b5(0x1c9))[_0x10f6b5(0x1d0)] || navigator[_0x10f6b5(0x332)] === !![];
    await new Promise(_0x52fff4 => setTimeout(_0x52fff4, 0x190));
    if (!_0x31db53[_0x10f6b5(0x280)]) {
        _0x78025b ? (document[_0x10f6b5(0x1f6)](_0x10f6b5(0x416))['classList'][_0x10f6b5(0x38e)](_0x10f6b5(0x1d9)), document['getElementById'](_0x10f6b5(0x296))[_0x10f6b5(0x2cd)][_0x10f6b5(0x31d)] = _0x10f6b5(0x38c)) : document['getElementById'](_0x10f6b5(0x296))[_0x10f6b5(0x2cd)][_0x10f6b5(0x31d)] = 'flex';
        return;
    }
    if (!_0x31db53[_0x10f6b5(0x2ed)]) {
        document[_0x10f6b5(0x1f6)](_0x10f6b5(0x2cb))[_0x10f6b5(0x25f)]['remove']('hidden'), document[_0x10f6b5(0x1f6)](_0x10f6b5(0x296))[_0x10f6b5(0x2cd)][_0x10f6b5(0x31d)] = 'none';
        return;
    }
    state[_0x10f6b5(0x2ed)] = _0x31db53[_0x10f6b5(0x2ed)], state[_0x10f6b5(0x25a)] = _0x31db53[_0x10f6b5(0x25a)] || [], state[_0x10f6b5(0x26b)] = (await getAllData('tx'))[_0x10f6b5(0x344)]((_0x1968af, _0x1f7cae) => _0x1f7cae['id'] - _0x1968af['id']), document['getElementById'](_0x10f6b5(0x3db))[_0x10f6b5(0x1de)] = state['user'][_0x10f6b5(0x200)], document[_0x10f6b5(0x1f6)](_0x10f6b5(0x224))['innerText'] = state['user'][_0x10f6b5(0x2a9)]['toUpperCase']() + '\x20ADVISOR', document[_0x10f6b5(0x1f6)](_0x10f6b5(0x3b0))['innerText'] = state[_0x10f6b5(0x2ed)][_0x10f6b5(0x200)], document[_0x10f6b5(0x1f6)]('sidebar-type')[_0x10f6b5(0x1de)] = state[_0x10f6b5(0x2ed)][_0x10f6b5(0x2a9)][_0x10f6b5(0x253)](0x0)['toUpperCase']() + state['user'][_0x10f6b5(0x2a9)][_0x10f6b5(0x370)](0x1), document[_0x10f6b5(0x1f6)](_0x10f6b5(0x37a))[_0x10f6b5(0x1de)] = state[_0x10f6b5(0x2ed)][_0x10f6b5(0x200)][_0x10f6b5(0x253)](0x0)[_0x10f6b5(0x24f)](), document[_0x10f6b5(0x1f6)](_0x10f6b5(0x296))[_0x10f6b5(0x2cd)][_0x10f6b5(0x31d)] = _0x10f6b5(0x38c), nav('dash');
    if (typeof travisNotif !== _0x10f6b5(0x3a2)) travisNotif[_0x10f6b5(0x35e)]();
}

function _0x5258() {
    const _0x21cb55 = ['\x20entries</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22overflow-x:auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22win-table\x22\x20style=\x22min-width:600px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead><tr><th>Date</th><th>Transaction</th><th\x20style=\x22text-align:right;\x22>Debit\x20(+)</th><th\x20style=\x22text-align:right;\x22>Credit\x20(-)</th></tr></thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>', 'obligation-list', '\x20shillings\x20per\x20day.\x20You\x20can\x20buy\x20it,\x20but\x20be\x20careful\x20with\x20the\x20rest\x20of\x20the\x20week.', 'input', 'prompt', 'max', 'toDateString', 'scrollTop', 'length', 'TravisGuardian\x20•\x202026', '\x20shillings\x20per\x20month.\x20Can\x20you\x20pay\x20that?', 'toUpperCase', '<div\x20class=\x22metric-card\x22><div\x20class=\x22metric-accent\x22\x20style=\x22background:', 'deriveKey', 'Medical', 'charAt', 'travis-ui-cache-v1', '\x20·\x20Spent:\x20KSh\x20', 'objectStoreNames', 'function', 'soap', 'spending\x20habit', 'obligations', '\x20days.\x20You\x27re\x20getting\x20by\x20but\x20not\x20thriving.', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:500;\x22>', '<span\x20class=\x22chip\x20chip-green\x22>✓\x20Settled</span>', '\x20shillings.\x20You\x20cannot\x20afford\x20loan\x20repayments\x20right\x20now.\x20Focus\x20on\x20increasing\x20your\x20income\x20first.', 'classList', 'Inventory', '&amp;', 'beer', 'liquid', 'clear', 'encrypt', '\x20shillings.\x20Elite\x20level.', 'showDirectoryPicker', 'You\x20can\x20barely\x20meet\x20your\x20basic\x20needs\x20each\x20day.', 'Food,\x20water,\x20shelter\x20only.\x20Nothing\x20else.', 'Your\x20liquid\x20reserves\x20are\x20', 'transactions', 'You\x20have\x20substantial\x20wealth.', 'appendChild', 'Save\x20for\x20', '#2ECC71', 'status', '<br><br><strong>Next\x20step:</strong>\x20Look\x20at\x20your\x20biggest\x20expense\x20this\x20week.\x20Can\x20you\x20reduce\x20it\x20by\x2010%?', 'INCOME', 'Go\x20ahead\x20but\x20track\x20it.\x20Every\x20shilling\x20counts.', 'setItem', '#C42B1C', 'cssText', '<div\x20style=\x22padding:8px\x200;text-align:center;color:var(--win-text-3);font-size:13px;\x22>No\x20budget\x20variances\x20detected.\x20Good\x20job!</div>', 'Travel\x20&\x20Entertainment', '2024oYhitg', 'Fixed\x20Assets', 'hiring', 'staff', 'settings', '\x20days.\x20About\x20', 'value', 'activated', 'obs', 'getFileHandle', 'meat', 'Your\x20Daily\x20Limit', 'restore-btn', 'scrollHeight', 'fromCharCode', 'STRUGGLING', '861834stgCly', '\x20shillings\x20left\x20for\x20', 'Grow\x20wealth,\x20invest,\x20diversify.', 'contains', 'overview', 'What\x20You\x20Spent', 'getDate', '<br><br><strong>My\x20advice:</strong>\x20', 'profit', 'colorDepth', 'hud-cap', 'Your\x20Daily\x20Budget', '.\x20That\x27s\x20money\x20leaving\x20without\x20you\x20noticing.', 'install-overlay', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>What\x20This\x20Means\x20For\x20You</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:14px;font-weight:500;margin-bottom:8px;\x22>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22obs-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:600;\x22>', 'fingerprint', 'toLocaleTimeString', '⚠\x20You\x20are\x20in\x20debt', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>Budget:\x20KSh\x20', 'install-status', '\x20shillings.\x20That\x27s\x20reasonable\x20for\x20your\x20situation.\x20Go\x20ahead\x20but\x20track\x20it.', 'Office\x20Supplies', '\x20shillings\x20(', 'load', '<div\x20style=\x22padding:40px;text-align:center;background:white;border-radius:16px;max-width:360px;\x22><p\x20style=\x22color:green;font-size:16px;\x22>\x20Everything\x20restored!\x20Reloading…</p></div>', 'Your\x20daily\x20spending\x20capacity\x20exceeds\x20', 'matchMedia', 'line', '</span></div>', '|||', 'objectStore', 'type', './sw.js', '<span\x20class=\x22chip\x20chip-red\x22>', '<tr><td\x20colspan=\x224\x22\x20style=\x22padding:32px;text-align:center;color:var(--win-text-3);\x22>No\x20transactions\x20recorded\x20yet.</td></tr>', 'error', 'resize', '<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>Settings</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22\x20style=\x22display:grid;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step-title\x22>👤\x20Your\x20Profile</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;color:var(--win-text-2);\x22>Name:\x20<strong>', '\x20shillings.\x20You\x20only\x20have\x20about\x20', 'ELITE', 'Cash', 'parse', '\x20shillings\x20per\x20day.\x20You\x27re\x20in\x20a\x20stable\x20position.', '<div\x20style=\x22text-align:right;\x22><div\x20class=\x22chat-bubble-user\x22>', 'saving', 'Savings', 'map', 'TravisGuardian_v1.0', 'ceil', '\x20shillings\x20saved\x20up\x20for\x20the\x20next\x20', 'nav-sidebar', 'DESTITUTE', 'dailyCap', 'TIGHT\x20BUT\x20POSSIBLE:\x20', 'personal', 'endsWith', 'config', 'canvas', '\x20days.\x20That\x27s\x20about\x20', 'createWritable', 'display:flex;gap:8px;align-items:center;', 'Credit', '\x20A\x20', '%\x20of\x20your\x20savings.', '20;color:', 'setup-overlay', '.enc', 'style', 'KSh\x200', 'WEALTHY', '\x20shillings\x20more\x20than\x20your\x20budget\x20on\x20', 'Survival', '\x20Do\x20not\x20take\x20any\x20loan\x20right\x20now.\x20You\x20cannot\x20afford\x20repayments.\x20Focus\x20on\x20increasing\x20your\x20income\x20first.', 'getMonth', '\x20shillings\x20in\x20reserve.\x20Your\x20daily\x20spending\x20capacity\x20is\x20about\x20', '</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:var(--color-border-secondary);\x22>·</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:5px;\x22><span\x20style=\x22color:var(--color-text-secondary);\x22>Savings</span><span\x20style=\x22font-weight:500;\x22>', 'color', 'Invalid\x20activation\x20code.', '\x20shillings.\x20Strong\x20financial\x20position.', 'reduce', 'million', 'travis-ripple-styles', '%\x20of\x20your\x20savings).\x20Consider\x20if\x20this\x20is\x20the\x20best\x20use\x20of\x20your\x20money\x20right\x20now.', 'join', 'Bank\x20Account', 'readonly', '</span>', 'getItem', '.\x20But\x20you\x20only\x20have\x20', 'serviceWorker', '<div\x20style=\x22padding:24px;text-align:center;color:var(--win-text-3);\x22>No\x20bills\x20configured.\x20Add\x20rent,\x20school\x20fees,\x20loans,\x20etc.</div>', '/store-fingerprint', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>', 'documents', '\x20days', 'Other\x20Fun\x20Spending', 'encode', '</div><div\x20style=\x22font-size:10px;color:var(--win-text-3);\x22>remaining</div>', 'tx-modal', 'user', '139084NJFmmK', 'seg-btn', 'conservative', 'mobile-open', 'rgba(16,124,16,0.08)', '💎\x20At\x20your\x20level,\x20aim\x20to\x20save\x20', 'You\x20cannot\x20afford\x20to\x20hire\x20anyone\x20right\x20now.\x20Your\x20priority\x20is\x20building\x20your\x20own\x20income\x20first.\x20Get\x20your\x20daily\x20budget\x20above\x20800\x20shillings\x20per\x20day\x20before\x20considering\x20staff.', '<div\x20class=\x22win-card\x22\x20style=\x22height:520px;display:flex;flex-direction:column;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22\x20style=\x22flex-shrink:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:10px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:32px;height:32px;background:linear-gradient(135deg,#0078D4,#005A9E);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;\x22>🤖</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Travis\x20-\x20Your\x20Financial\x20Advisor</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-sub\x22>Powered\x20by\x20KNBS\x20Kenya\x20Data</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chip\x20chip-green\x22\x20style=\x22font-size:10px;\x22>●\x20Online</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22chat-box\x22\x20style=\x22flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:var(--win-bg);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-bubble-ai\x22\x20style=\x22font-size:13px;\x22>Habari.\x20I\x27m\x20Travis.\x20I\x20analyze\x20your\x20finances\x20and\x20give\x20you\x20straight\x20talk.\x20Ask\x20me\x20anything\x20about\x20your\x20money.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:10px\x2014px;border-top:1px\x20solid\x20var(--win-border);background:white;display:flex;gap:8px;align-items:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22chat-input\x22\x20type=\x22text\x22\x20placeholder=\x22Ask\x20me\x20anything...\x20e.g.,\x20\x27Can\x20I\x20buy\x20meat?\x27\x20or\x20\x27How\x20am\x20I\x20doing?\x27\x22\x20class=\x22win-input\x22\x20style=\x22flex:1;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22handleAsk()\x22\x20class=\x22btn-accent\x22\x20style=\x22padding:9px\x2018px;font-size:13px;\x22>Send\x20↗</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', '\x20first.', '💎\x20', '#8a8a8a', 'className', 'push', 'userChoice', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'block', 'Do\x20not\x20borrow.\x20Focus\x20on\x20increasing\x20your\x20income\x20first.', 'view-port', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:white;padding:28px;border-radius:16px;max-width:400px;width:90%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:var(--win-accent-light);margin:0\x200\x2016px;font-size:16px;\x22>Link\x20Device\x20Fingerprint</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22modal-phone\x22\x20type=\x22tel\x22\x20placeholder=\x22254712345678\x22\x20class=\x22win-input\x22\x20style=\x22width:100%;margin-bottom:16px;font-size:16px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22submit-phone-btn\x22\x20class=\x22btn-accent\x22\x20style=\x22width:100%;padding:13px;\x22>Submit\x20Phone</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'subtle', 'travis-finance-backup.enc', '\x20days.\x20You\x20cannot\x20afford\x20this.', '47580woFRCi', 'text/css', 'eggs', 'User\x20cancelled\x20or\x20error\x20occurred', 'You\x20have\x20significant\x20disposable\x20income.', 'Loans\x20Payable', '\x20IN\x20DEBT', 'obsStatus', '\x20shillings.\x20You\x20only\x20have\x20', 'pending', 'createElement', 'meta', 'business', 'show', '\x20shillings\x20per\x20day\x20to\x20spend\x20or\x20invest.', 'match', 'message', 'Asset\x20allocation,\x20wealth\x20transfer,\x20impact\x20investing.', 'onclick', '\x20Based\x20on\x20your\x20savings,\x20a\x20safe\x20wage\x20is\x20about\x20', 'variance', 'isArray', 'resolvedOptions', 'act-code', '\x20days.', 'display', 'getContext', 'You\x20can\x20afford\x20this.\x20After\x20buying,\x20you\x27ll\x20have\x20', 'dashboard-grid', 'POST', 'innerWidth', 'submit-phone-btn', 'Install\x20not\x20ready.\x20Refresh\x20the\x20page.', 'appinstalled', 'raw', 'KSh\x20', 'tala', 'Emergency', 'deriveBits', 'some', 'ASSETS', 'tx-credit', 'fillStyle', 'Days\x20Until\x20Month\x20End', '\x20shillings\x20per\x20day\x20of\x20spending\x20power.', 'write', 'standalone', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>', 'grow', 'This\x20fits\x20your\x20budget\x20comfortably.\x20Enjoy.', 'paid', 'unga', 'EMERGENCY:\x20You\x20are\x20in\x20debt\x20by\x20', '\x20shillings\x20this\x20month.\x20Start\x20with\x20a\x20simple\x20savings\x20group\x20or\x20MMF.\x20Even\x20small\x20amounts\x20add\x20up.', 'Payroll', 'target', 'result', 'Password\x20required', 'DISCRETIONARY\x20EXPENSES', 'fillRect', 'AES-GCM', 'safeCash', '\x20shillings\x20TOTAL\x20for\x20the\x20next\x20', 'LIABILITIES', 'sort', '\x20You\x20asked\x20about\x20a\x20', 'phone-modal', 'forEach', 'help-modal', '⚠️\x20A\x20', 'chip\x20chip-red', 'chat-input', 'Travel', 'gift', 'rgba(102,204,0,0.7)', 'wage', '&lt;', 'cursor', 'Stable', 'You\x20are\x20already\x20in\x20debt\x20by\x20', 'now', 'tempType', 'You\x20owe\x20', '\x20active', 'min', 'Transport', '\x20shillings\x20per\x20day.\x20Enough\x20for\x20basic\x20food\x20but\x20nothing\x20more.', '#9D5D00', 'disabled', 'tx-desc', 'init', 'growth', 'You\x20can\x20meet\x20your\x20needs\x20and\x20save\x20a\x20little\x20each\x20month.', 'optimization', '\x20day', '<div\x20style=\x22font-size:10px;color:var(--win-red);font-weight:700;margin-top:2px;\x22>+', 'IN\x20DEBT', 'clock-time', 'width', 'skip-btn', 'Dividends', 'M-Pesa', '<div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22\x20id=\x22thinking-bubble\x22><div\x20class=\x22travis-ripple\x22><div\x20class=\x22ripple-ball\x20ball-r\x22></div><div\x20class=\x22ripple-ball\x20ball-g\x22></div><div\x20class=\x22ripple-ball\x20ball-b\x22></div></div></div>', 'Salary', 'DateTimeFormat', 'oncomplete', 'No\x20valid\x20device\x20fingerprint\x20found.<br><br>Please\x20restart\x20installation\x20process.', 'div', 'slice', '14px\x20\x27Arial\x27', 'survival', 'catch', 'importKey', '\x20shillings\x20monthly.\x20Will\x20this\x20loan\x20generate\x20more\x20than\x20that\x20in\x20value?\x20If\x20yes,\x20consider\x20it.\x20If\x20not,\x20avoid\x20it.', '\x20shillings\x20monthly.\x20Diversify:\x20SACCO,\x20MMF,\x20and\x20maybe\x20stocks.\x20Build\x20a\x206-month\x20emergency\x20fund\x20first.', 'rice', '\x20shillings\x20is\x20manageable.\x20The\x20real\x20question:\x20does\x20this\x20purchase\x20align\x20with\x20your\x20goals\x20and\x20bring\x20you\x20value?', 'future', 'sidebar-avatar', 'Segoe\x20UI', 'btn-b', 'textBaseline', 'wealthTier', 'readwrite', '\x20shillings\x20per\x20day.\x20You\x20can\x20cover\x20essentials\x20and\x20maybe\x20a\x20small\x20treat.', 'Rent', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:grid;grid-template-columns:300px\x201fr;gap:16px;align-items:start;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;flex-direction:column;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Your\x20Financial\x20Health</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chip\x22\x20style=\x22background:', 'pay', 'Enter', 'Preserve\x20capital,\x20optimize\x20taxes,\x20plan\x20legacy.', '.js', 'more\x20money', 'Ready\x20to\x20install', '\x20first.\x20Don\x27t\x20buy\x20today.', 'userAgent', 'how\x20am\x20i', 'none', 'textContent', 'remove', 'SURVIVAL', '\x20shillings\x20for\x20', 'displayName', '\x20shillings\x20on\x20', 'decode', 'getTimezoneOffset', 'set', 'en-KE', 'Failed\x20to\x20write\x20data\x20to\x20database:\x20', 'Restore\x20failed', 'chat-box', 'find', 'travisChart', 'toDataURL', 'salary', 'abs', '\x20shillings\x20total.\x20This\x20would\x20leave\x20you\x20with\x20nothing.', 'Accounts\x20Receivable', 'this\x20item', 'undefined', 'You\x20can\x20meet\x20basic\x20needs\x20but\x20have\x20little\x20left\x20over.', 'onerror', 'priority', 'repeat(2,1fr)', '\x20shillings\x20per\x20day.\x20Save\x20for\x20', 'getAll', 'something', 'random', 'Enter\x20the\x20backup\x20password\x20to\x20decrypt\x20your\x20data:', 'You\x20asked\x20about\x20spending\x20', '\x20over</div>', '\x20shillings\x20this\x20month\x20for\x20emergencies.', '.css', 'sidebar-name', 'icon', 'toFixed', 'top', '\x20shilling\x20loan\x20at\x20typical\x20rates\x20costs\x20', 'entries', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;margin-bottom:12px;\x22>', 'hud-warning', 'AFFLUENT', '\x20shillings,\x20but\x20you\x20only\x20have\x20', 'SHA-256', 'This\x20costs\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.travis-ripple\x20{\x20display:\x20flex;\x20gap:\x206px;\x20align-items:\x20center;\x20padding:\x208px\x200;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.ripple-ball\x20{\x20width:\x208px;\x20height:\x208px;\x20border-radius:\x2050%;\x20animation:\x20travis-ripple\x201.4s\x20infinite\x20ease-in-out;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.ball-r\x20{\x20background:\x20#ff4d4d;\x20animation-delay:\x20-0.32s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.ball-g\x20{\x20background:\x20#2ecc71;\x20animation-delay:\x20-0.16s;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.ball-b\x20{\x20background:\x20#3498db;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20travis-ripple\x20{\x200%,\x2080%,\x20100%\x20{\x20transform:\x20scale(0);\x20opacity:\x200.3;\x20}\x2040%\x20{\x20transform:\x20scale(1);\x20opacity:\x201;\x20}\x20}\x0a\x20\x20\x20\x20', 'active', 'Failed\x20to\x20read/decrypt\x20backup\x20file', '<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>General\x20Ledger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>', 'install-btn', 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:10000;', 'timeZone', 'cash', 'close', 'markTodayRecorded', 'optgroup', 'querySelectorAll', 'getFile', 'toLocaleString', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>Budget:\x20KSh\x20', '💰\x20Affluent', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:var(--win-text-3);font-size:10px;\x22>→</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chip\x20chip-red\x22\x20style=\x22font-size:10px;\x22>', 'No\x20file\x20handle', 'pendingClarification', 'You\x20want\x20to\x20spend\x20', 'floor', 'add', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;line-height:1.6;\x22>', 'index.html', ';background:var(--color-background-secondary);border-radius:0\x20var(--border-radius-md)\x20var(--border-radius-md)\x200;\x22><div\x20style=\x22font-size:11px;font-weight:500;color:var(--color-text-secondary);text-transform:uppercase;margin-bottom:4px;\x22>Travis\x20Says</div><div\x20style=\x22font-size:15px;line-height:1.6;\x22>', 'Food,\x20rent,\x20transport\x20to\x20work.\x20Nothing\x20extra.', '\x20shillings\x20is\x20manageable.\x20The\x20question\x20is:\x20does\x20this\x20purchase\x20align\x20with\x20your\x20goals?', '\x20shilling\x20loan\x20would\x20cost\x20about\x20', 'round', 'register', '#1ABC9C', 'display-name', '\x20This\x20costs\x20', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22\x20style=\x22min-height:340px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Your\x20Spending\x20Trend</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>Last\x207\x20days</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22\x20style=\x22height:300px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22analyticsChart\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'tx-amount', 'rgba(0,0,0,0.04)', '\x20shillings\x20per\x20day.\x20You\x27re\x20comfortable.', 'You\x20are\x20in\x20a\x20financial\x20emergency.\x20Every\x20shilling\x20counts.', '\x20shillings.\x20That\x27s\x20reasonable\x20for\x20your\x20situation.', 'That\x27s\x20about\x20', '💎\x20At\x20your\x20wealth\x20level,\x20', '\x20shillings\x20to\x20last\x20', 'unshift', 'daysRem', 'Could\x20not\x20read\x20the\x20backup\x20file:\x20', 'Service\x20Revenue', '14AQRzVw', '</p><button\x20onclick=\x22location.reload()\x22\x20style=\x22margin-top:12px;padding:10px\x2020px;border-radius:8px;border:none;background:#0078D4;color:white;cursor:pointer;\x22>Try\x20Again</button></div>', 'innerHTML', 'spend', 'toLowerCase', 'xx-XX', 'ask', 'How\x20many\x20shillings\x20are\x20you\x20thinking\x20of\x20borrowing?', 'Basic\x20food\x20basket\x20(unga,\x20sukuma,\x20onions,\x20tomatoes)', 'backupHandle', 'Failed\x20to\x20send\x20data.\x20Check\x20connection.', 'Food\x20&\x20Groceries', 'Travisguardian', 'language', 'PBKDF2', 'gridTemplateColumns', 'Leveling', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22\x20style=\x22padding-top:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x20shillings\x20per\x20month.', 'replaceChild', '\x20Based\x20on\x20your\x20savings,\x20a\x20safe\x20monthly\x20wage\x20is\x20about\x20', 'decrypt', 'recovery-overlay', '\x22\x20class=\x22win-input\x22\x20style=\x22width:110px;\x22><button\x20onclick=\x22this.parentElement.remove()\x22\x20style=\x22width:28px;height:28px;border-radius:50%;border:1px\x20solid\x20rgba(196,43,28,0.3);background:rgba(196,43,28,0.05);color:var(--win-red);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;\x22>×</button>', 'setDate', '\x20shillings.\x20At\x20your\x20wealth\x20level,\x20affordability\x20isn\x27t\x20the\x20question.', 'get', 'You\x20have\x20about\x20', '2174823uLxNRK', 'how\x20is', 'success', '⚠️\x20', 'Essentials\x20first.\x20Small\x20treats\x20occasionally.', 'done', 'credit', 'maxDailyCap', 'parentNode', 'increase', '\x20shillings,\x20which\x20is\x20', 'Only\x20borrow\x20if\x20this\x20money\x20will\x20earn\x20you\x20more\x20than\x20', '\x20shillings.\x20You\x20cannot\x20spend\x20any\x20money\x20until\x20you\x20earn\x20enough\x20to\x20clear\x20this\x20debt.', 'calculating...', 'Bills\x20You\x20Must\x20Pay', '\x20shillings\x20to\x20stretch\x20over\x20', 'activation-overlay', 'getFullYear', 'tempBackupFileHandle', 'File\x20picker\x20not\x20supported', '\x20shillings\x20per\x20day.\x20You\x20can\x20eat\x20basic\x20meals\x20but\x20watch\x20every\x20shilling.', 'Does\x20this\x20purchase\x20align\x20with\x20your\x20goals\x20and\x20bring\x20you\x20value?\x20If\x20yes,\x20enjoy.', '\x20shillings\x20per\x20day.', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', '</strong></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;color:var(--win-text-2);margin-top:4px;\x22>Type:\x20<strong\x20style=\x22text-transform:capitalize;\x22>', 'employee', 'borrow', '<br><br><strong>What\x20you\x20should\x20do:</strong>\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'TRV-KE-', 'Your\x20biggest\x20expense\x20this\x20month\x20is\x20', 'tz-unknown', 'OperationError', 'opacity', 'font', '2578MfFCHa', 'tx-debit', 'afford', 'showOpenFilePicker', '.taskbar-btn', 'trim', 'custom-alert-message', 'not-allowed', 'amount', 'School', '<div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>', 'short', 'replace', 'where\x20does\x20my\x20money\x20go', 'Side\x20Hustle', 'Accounts\x20Payable', '(display-mode:\x20standalone)', 'repeat(4,1fr)', 'clock-date', 'adviceStyle', 'getRandomValues', 'originalQuestion', '2248QFMMpc', 'matches', 'purchase', 'Petty\x20Cash', 'addEventListener', '\x20costs\x20', 'onload', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:10px;color:var(--win-red);\x22>Over\x20budget</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', ';\x22>', '3620prjHCV', 'hidden', '1fr', '</strong></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;color:var(--win-text-2);margin-top:4px;\x22>Wealth\x20Level:\x20<strong\x20style=\x22color:', 'transaction', 'champagne', 'innerText', 'createObjectStore', '%;background:', 'put', 'minDailyCap', 'originalIntent', '#f60', 'rent', 'height', '\x20shillings.', 'Allowance', 'charCodeAt', 'reload', 'pointer', '#27AE60', 'cloneNode', '</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:var(--color-border-secondary);\x22>·</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:5px;\x22><span\x20style=\x22color:var(--color-text-secondary);\x22>Daily</span><span\x20style=\x22font-weight:500;\x22>', 'open', 'branch', '\x20shillings\x20in\x20reserve.\x20Strong\x20financial\x20position.', '1744336DkFcRP', '<div\x20style=\x22padding:28px;text-align:center;color:red;background:white;border-radius:16px;\x22><p>', '\x20shillings\x20per\x20day.\x20That\x27s\x20less\x20than\x20a\x20loaf\x20of\x20bread.', 'Travis\x20Finance\x20Backup', 'getElementById', '\x20shillings\x20per\x20day.\x20You\x20cannot\x20afford\x20anything\x20beyond\x20basic\x20food.', '#obligation-list\x20>\x20div', '438dkfWXO', 'click', 'You\x20have\x20', 'Entertainment', 'arrayBuffer', ';\x22></div><div\x20class=\x22metric-label\x22>', '⚠️\x20Right\x20now,\x20focus\x20on\x20survival.\x20Once\x20your\x20daily\x20budget\x20is\x20above\x20300\x20shillings\x20per\x20day,\x20then\x20start\x20saving\x205%\x20of\x20anything\x20extra.', 'name', 'TRAVIS-GUARDIAN-SECURE-2026-x7k9', '#107C10', 'label', 'application/json', '10RviuvN', '\x20shillings.\x20No\x20spending\x20until\x20debt\x20is\x20cleared.', 'desc', 'rgba(196,43,28,0.08)', 'book', 'worker', 'bread', 'stringify', '\x20shillings\x20per\x20day.\x20Be\x20careful.', 'test', 'Budget,\x20save,\x20invest\x20small\x20amounts.', 'Bank\x20/\x20M-Pesa', 'Restoring…', '2-digit', 'modal-phone', 'chip\x20chip-green', '\x20days.\x20Good\x20position.', '\x20You\x20have\x20', '\x20shillings\x20per\x20month\x20in\x20interest.\x20Only\x20borrow\x20if\x20absolutely\x20necessary.', 'onsuccess', '💎\x20You\x20have\x20', 'daily', 'zenka', 'EMERGENCY:\x20You\x20have\x20only\x20', 'I\x27m\x20here\x20to\x20help\x20with\x20your\x20money\x20decisions.\x20Ask\x20me:\x0a•\x20\x22Can\x20I\x20buy\x20meat\x20for\x20500?\x22\x0a•\x20\x22How\x20am\x20I\x20doing\x20financially?\x22\x0a•\x20\x22Should\x20I\x20take\x20a\x20loan?\x22\x0a•\x20\x22How\x20can\x20I\x20save\x20more?\x22\x0aJust\x20tell\x20me\x20what\x20you\x27re\x20thinking\x20about\x20spending\x20or\x20saving.', 'Other\x20Revenue', '<span\x20style=\x22color:var(--color-border-secondary);\x22>·</span><div\x20style=\x22display:flex;align-items:center;gap:5px;\x22><span\x20style=\x22color:var(--color-text-secondary);\x22>Days\x20left</span><span\x20style=\x22font-weight:500;\x22>', 'btn-p', '</div></div>', 'flex', 'REVENUE', 'display-mode', 'filter', 'toString', '#0078D4', 'make\x20money', 'toLocaleDateString', 'head', 'Bills', 'canvas-fail', 'Cost\x20of\x20Goods\x20Sold', 'substring', '&gt;', 'debit', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:right;font-family:monospace;color:var(--win-red);font-weight:600;white-space:nowrap;\x22>-', 'balanced', '\x20days.\x20That\x27s\x20', 'numeric', 'blob', '⚠️\x20This\x20costs\x20', '\x20days.\x20Be\x20very\x20careful.', 'habit', 'situation', 'humanDescription', '#E67E22', 'tell\x20me\x20about', 'WARNING:\x20This\x20will\x20delete\x20ALL\x20your\x20financial\x20data.\x20Cannot\x20undo.\x20Continue?', '#9B59B6', '\x20shillings.\x20Your\x20only\x20priority\x20is\x20to\x20earn\x20money\x20to\x20get\x20out\x20of\x20debt.', 'loan', 'buy', '\x20shillings.\x20After\x20buying,\x20you\x27ll\x20have\x20', 'includes'];
    _0x5258 = function() {
        return _0x21cb55;
    };
    return _0x5258();
}
document[_0x1e67ff(0x1f6)]('install-btn')?.[_0x1e67ff(0x1d3)]('click', triggerInstall), window[_0x1e67ff(0x1d5)] = boot;
