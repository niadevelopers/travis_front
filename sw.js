const _0x44db3a = _0x383a;
(function(_0x4a3781, _0x1e46d2) {
    const _0x46e7b0 = _0x383a,
        _0x199ab0 = _0x4a3781();
    while (!![]) {
        try {
            const _0x3e0224 = -parseInt(_0x46e7b0(0x9c)) / 0x1 + parseInt(_0x46e7b0(0xbb)) / 0x2 * (-parseInt(_0x46e7b0(0x85)) / 0x3) + parseInt(_0x46e7b0(0xb2)) / 0x4 + parseInt(_0x46e7b0(0xbd)) / 0x5 + -parseInt(_0x46e7b0(0xaf)) / 0x6 * (parseInt(_0x46e7b0(0x68)) / 0x7) + parseInt(_0x46e7b0(0x81)) / 0x8 + parseInt(_0x46e7b0(0x8a)) / 0x9;
            if (_0x3e0224 === _0x1e46d2) break;
            else _0x199ab0['push'](_0x199ab0['shift']());
        } catch (_0x3c040f) {
            _0x199ab0['push'](_0x199ab0['shift']());
        }
    }
}(_0x102c, 0x1dbf5));
const CACHE_NAME = _0x44db3a(0x77),
    STATIC_ASSETS = ['/', _0x44db3a(0xb4), '/travis_core.html', '/Admin.html', _0x44db3a(0xb7), _0x44db3a(0x91), _0x44db3a(0x8d), _0x44db3a(0x84), _0x44db3a(0x74), _0x44db3a(0x6e), _0x44db3a(0x7b), _0x44db3a(0x9d), '/manifest.json'],
    REMINDERS = [{
        'hour': 0x13,
        'minute': 0x0
    }, {
        'hour': 0x15,
        'minute': 0x1e
    }],
    REMINDER_MESSAGES = [{
        'title': _0x44db3a(0x6c),
        'body': _0x44db3a(0x9e)
    }, {
        'title': _0x44db3a(0x72),
        'body': _0x44db3a(0x75)
    }, {
        'title': _0x44db3a(0x97),
        'body': 'Accurate\x20records\x20are\x20what\x20make\x20Travis\x27s\x20advice\x20useful.\x20Take\x20a\x20moment\x20to\x20log\x20today\x27s\x20transactions.'
    }, {
        'title': _0x44db3a(0x82),
        'body': _0x44db3a(0xc3)
    }, {
        'title': _0x44db3a(0x89),
        'body': 'Today\x27s\x20numbers\x20aren\x27t\x20in\x20yet.\x20The\x20more\x20current\x20your\x20records,\x20the\x20more\x20accurate\x20your\x20advice.\x20Tap\x20to\x20update\x20your\x20ledger.'
    }];

function _0x383a(_0x1d1e57, _0x15a13e) {
    _0x1d1e57 = _0x1d1e57 - 0x68;
    const _0x102c4f = _0x102c();
    let _0x383a51 = _0x102c4f[_0x1d1e57];
    return _0x383a51;
}
self[_0x44db3a(0x7d)]('install', _0x280c56 => {
    const _0x51cb98 = _0x44db3a;
    self[_0x51cb98(0xb1)](), _0x280c56[_0x51cb98(0x70)](caches[_0x51cb98(0x6a)](CACHE_NAME)[_0x51cb98(0x96)](_0x5e5cf4 => _0x5e5cf4[_0x51cb98(0xb3)](STATIC_ASSETS)));
}), self[_0x44db3a(0x7d)](_0x44db3a(0x90), _0x1e1139 => {
    const _0x571d2d = _0x44db3a;
    _0x1e1139[_0x571d2d(0x70)](caches[_0x571d2d(0x8f)]()['then'](_0x2646bd => Promise[_0x571d2d(0xc2)](_0x2646bd[_0x571d2d(0xae)](_0x4732bb => _0x4732bb !== CACHE_NAME)[_0x571d2d(0x95)](_0x1af6ef => caches[_0x571d2d(0x78)](_0x1af6ef))))[_0x571d2d(0x96)](() => {
        const _0x3c085e = _0x571d2d;
        self[_0x3c085e(0xa0)][_0x3c085e(0x6d)](), scheduleNextReminder();
    }));
}), self['addEventListener'](_0x44db3a(0x80), _0xe2b4d2 => {
    const _0x44cc60 = _0x44db3a,
        _0x84c549 = _0xe2b4d2[_0x44cc60(0xc4)];
    if (_0x84c549[_0x44cc60(0xb8)]['includes'](_0x44cc60(0xac))) {
        _0xe2b4d2[_0x44cc60(0x86)](fetch(_0x84c549));
        return;
    }
    if (_0x84c549[_0x44cc60(0x92)] === _0x44cc60(0x73) || _0x84c549[_0x44cc60(0x92)] === _0x44cc60(0xc1)) {
        _0xe2b4d2[_0x44cc60(0x86)](fetch(_0x84c549)['then'](_0x56b3d2 => {
            const _0x427f51 = _0x44cc60,
                _0x4e3a4e = _0x56b3d2[_0x427f51(0x99)]();
            return caches[_0x427f51(0x6a)](CACHE_NAME)[_0x427f51(0x96)](_0x4b270e => _0x4b270e['put'](_0x84c549, _0x4e3a4e)), _0x56b3d2;
        })[_0x44cc60(0x98)](() => caches[_0x44cc60(0xa1)](_0x84c549)));
        return;
    }
    _0xe2b4d2[_0x44cc60(0x86)](caches[_0x44cc60(0xa1)](_0x84c549)[_0x44cc60(0x96)](_0x2ce994 => {
        const _0x34d05e = _0x44cc60;
        if (_0x2ce994) return _0x2ce994;
        return fetch(_0x84c549)[_0x34d05e(0x96)](_0x4ffb2f => {
            const _0x610ca4 = _0x34d05e;
            if (!_0x4ffb2f || _0x4ffb2f[_0x610ca4(0x8c)] !== 0xc8) return _0x4ffb2f;
            const _0x215a18 = _0x4ffb2f[_0x610ca4(0x99)]();
            return caches[_0x610ca4(0x6a)](CACHE_NAME)[_0x610ca4(0x96)](_0x33523e => _0x33523e[_0x610ca4(0xa2)](_0x84c549, _0x215a18)), _0x4ffb2f;
        });
    }));
}), self[_0x44db3a(0x7d)](_0x44db3a(0x9f), _0x292fdd => {
    const _0x1d6fd4 = _0x44db3a;
    _0x292fdd[_0x1d6fd4(0x87)][_0x1d6fd4(0xc0)]();
    if (_0x292fdd['action'] === 'dismiss') return;
    const _0x4fc8e4 = _0x292fdd[_0x1d6fd4(0x87)]['data'] && _0x292fdd[_0x1d6fd4(0x87)]['data']['url'] || '/travis_core.html';
    _0x292fdd[_0x1d6fd4(0x70)](clients['matchAll']({
        'type': _0x1d6fd4(0xa8),
        'includeUncontrolled': !![]
    })[_0x1d6fd4(0x96)](_0x36088c => {
        const _0x3bd163 = _0x1d6fd4;
        for (const _0x2b5950 of _0x36088c) {
            if (_0x2b5950[_0x3bd163(0xb8)][_0x3bd163(0x79)](self[_0x3bd163(0xa5)][_0x3bd163(0xa6)]) && _0x3bd163(0x8b) in _0x2b5950) {
                _0x2b5950[_0x3bd163(0x8b)](), _0x2b5950[_0x3bd163(0xc5)]({
                    'type': _0x3bd163(0x83)
                });
                return;
            }
        }
        if (clients[_0x3bd163(0xc6)]) return clients[_0x3bd163(0xc6)](_0x4fc8e4);
    })), scheduleNextReminder();
}), self[_0x44db3a(0x7d)](_0x44db3a(0x7e), _0x39e527 => {
    const _0x29a16d = _0x44db3a;
    _0x39e527[_0x29a16d(0xb5)] && _0x39e527[_0x29a16d(0xb5)][_0x29a16d(0x7c)] === _0x29a16d(0x76) && scheduleNextReminder();
});

function scheduleNextReminder() {
    const _0x3e9527 = _0x44db3a,
        _0x1fe318 = new Date();
    let _0x569803 = null,
        _0x5a9196 = Infinity;
    for (const _0x1b10b9 of REMINDERS) {
        const _0x23ec0c = new Date(_0x1fe318);
        _0x23ec0c['setHours'](_0x1b10b9[_0x3e9527(0xbf)], _0x1b10b9[_0x3e9527(0xad)], 0x0, 0x0);
        if (_0x23ec0c <= _0x1fe318) _0x23ec0c[_0x3e9527(0x93)](_0x23ec0c[_0x3e9527(0x7a)]() + 0x1);
        const _0x2133b6 = _0x23ec0c - _0x1fe318;
        _0x2133b6 < _0x5a9196 && (_0x5a9196 = _0x2133b6, _0x569803 = {
            'target': _0x23ec0c,
            'hour': _0x1b10b9['hour'],
            'minute': _0x1b10b9['minute']
        });
    }
    if (!_0x569803) return;
    setTimeout(async () => {
        await maybeFireReminder(), scheduleNextReminder();
    }, _0x5a9196);
}

function _0x102c() {
    const _0x4a96b4 = ['respondWith', 'notification', 'Later', 'Travis\x20reminder', '1428489FiiXrE', 'focus', 'status', '/script.js', 'target', 'keys', 'activate', '/input-landing.css', 'destination', 'setDate', 'onerror', 'map', 'then', 'Don\x27t\x20let\x20today\x20slip\x20by', 'catch', 'clone', 'result', 'travis-notif-db', '11793ljgifh', '/tailwind-landing.css', 'Have\x20you\x20recorded\x20today\x27s\x20transactions?\x20Travis\x20needs\x20them\x20to\x20keep\x20your\x20advice\x20accurate\x20—\x20it\x20takes\x20under\x20a\x20minute.', 'notificationclick', 'clients', 'match', 'put', 'flags', 'dismiss', 'location', 'origin', 'key', 'window', 'title', 'Record\x20now', 'registration', '/activate-fingerprint', 'minute', 'filter', '2292hBenlf', 'today-recorded', 'skipWaiting', '457932LacnIY', 'addAll', '/index.html', 'data', '/travis_192.png', '/input-app.css', 'url', 'onsuccess', 'readonly', '5446BdwTOz', 'date', '588430AGlTGA', 'onupgradeneeded', 'hour', 'close', 'document', 'all', 'Recording\x20today\x27s\x20transactions\x20keeps\x20your\x20financial\x20picture\x20sharp.\x20It\x20only\x20takes\x20a\x20moment\x20—\x20tap\x20to\x20open\x20Travis.', 'request', 'postMessage', 'openWindow', '3059cBFCSO', 'transaction', 'open', 'objectStore', 'Hey,\x20quick\x20check-in', 'claim', '/antiDev.js', 'length', 'waitUntil', 'createObjectStore', 'Your\x20ledger\x20is\x20waiting', 'script', '/landing.js', 'A\x20day\x20without\x20entries\x20means\x20Travis\x20is\x20working\x20with\x20yesterday\x27s\x20numbers.\x20Tap\x20to\x20log\x20what\x20came\x20in\x20and\x20went\x20out\x20today.', 'RESCHEDULE', 'Travis_guardian-v1_0', 'delete', 'includes', 'getDate', '/tailwind-app.css', 'type', 'addEventListener', 'message', 'showNotification', 'fetch', '562712UzBrrw', 'One\x20small\x20habit,\x20big\x20difference', 'OPEN_LEDGER', '/subAdmin.js', '177MqVocB'];
    _0x102c = function() {
        return _0x4a96b4;
    };
    return _0x102c();
}
async function maybeFireReminder() {
    const _0x2f7ac1 = _0x44db3a,
        _0x269076 = await getTodayFlag();
    if (_0x269076) return;
    const _0x41567a = REMINDER_MESSAGES[new Date()['getDate']() % REMINDER_MESSAGES[_0x2f7ac1(0x6f)]];
    await self[_0x2f7ac1(0xab)][_0x2f7ac1(0x7f)](_0x41567a[_0x2f7ac1(0xa9)], {
        'body': _0x41567a['body'],
        'icon': _0x2f7ac1(0xb6),
        'badge': _0x2f7ac1(0xb6),
        'tag': 'travis-ledger-reminder',
        'renotify': ![],
        'requireInteraction': ![],
        'silent': ![],
        'data': {
            'url': '/travis_core.html'
        },
        'actions': [{
            'action': _0x2f7ac1(0x6a),
            'title': _0x2f7ac1(0xaa)
        }, {
            'action': _0x2f7ac1(0xa4),
            'title': _0x2f7ac1(0x88)
        }]
    });
}

function getTodayFlag() {
    return new Promise(_0x73ea25 => {
        const _0x488053 = _0x383a,
            _0x5b19a1 = indexedDB[_0x488053(0x6a)](_0x488053(0x9b), 0x1);
        _0x5b19a1[_0x488053(0xbe)] = _0xd43065 => {
            const _0x3b94a7 = _0x488053;
            _0xd43065[_0x3b94a7(0x8e)][_0x3b94a7(0x9a)][_0x3b94a7(0x71)](_0x3b94a7(0xa3), {
                'keyPath': _0x3b94a7(0xa7)
            });
        }, _0x5b19a1[_0x488053(0xb9)] = _0x414ee3 => {
            const _0x43a3cb = _0x488053,
                _0x4dd59e = _0x414ee3[_0x43a3cb(0x8e)][_0x43a3cb(0x9a)],
                _0x820929 = _0x4dd59e[_0x43a3cb(0x69)]('flags', _0x43a3cb(0xba)),
                _0x328e31 = _0x820929[_0x43a3cb(0x6b)](_0x43a3cb(0xa3)),
                _0x4d74e1 = _0x328e31['get'](_0x43a3cb(0xb0));
            _0x4d74e1[_0x43a3cb(0xb9)] = () => {
                const _0x33fdda = _0x43a3cb,
                    _0x47eb7f = _0x4d74e1[_0x33fdda(0x9a)];
                if (!_0x47eb7f) {
                    _0x73ea25(![]);
                    return;
                }
                _0x73ea25(_0x47eb7f[_0x33fdda(0xbc)] === new Date()['toDateString']());
            }, _0x4d74e1['onerror'] = () => _0x73ea25(![]);
        }, _0x5b19a1[_0x488053(0x94)] = () => _0x73ea25(![]);
    });
}
