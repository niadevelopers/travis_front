const _0x2743b7 = _0x1e90;
(function(_0x4e11a4, _0x380adb) {
    const _0x325420 = _0x1e90,
        _0x43c685 = _0x4e11a4();
    while (!![]) {
        try {
            const _0xd740f = parseInt(_0x325420(0x418)) / 0x1 * (-parseInt(_0x325420(0x43d)) / 0x2) + parseInt(_0x325420(0x485)) / 0x3 + -parseInt(_0x325420(0x1fd)) / 0x4 + parseInt(_0x325420(0x37d)) / 0x5 + -parseInt(_0x325420(0x334)) / 0x6 * (-parseInt(_0x325420(0x2db)) / 0x7) + parseInt(_0x325420(0x2d5)) / 0x8 + -parseInt(_0x325420(0x435)) / 0x9 * (parseInt(_0x325420(0x1ff)) / 0xa);
            if (_0xd740f === _0x380adb) break;
            else _0x43c685['push'](_0x43c685['shift']());
        } catch (_0x2b70e8) {
            _0x43c685['push'](_0x43c685['shift']());
        }
    }
}(_0x3e4e, 0xa0789));
const BACKEND_URL = _0x2743b7(0x468);
window[_0x2743b7(0x344)](_0x2743b7(0x220), () => {
    const _0x1bed2d = _0x2743b7,
        _0x91b6ac = document['getElementById']('page-loader');
    _0x91b6ac[_0x1bed2d(0x3cd)][_0x1bed2d(0x232)] = _0x1bed2d(0x313);
});

function showCustomAlert(_0x2287da, _0xf1d578 = null) {
    const _0x1e2e1b = _0x2743b7,
        _0x419444 = document['getElementById']('custom-alert'),
        _0x3a9971 = document[_0x1e2e1b(0x376)](_0x1e2e1b(0x2ca)),
        _0x165d1b = document['getElementById'](_0x1e2e1b(0x2c7));
    _0x3a9971[_0x1e2e1b(0x2d2)] = _0x2287da, _0x419444[_0x1e2e1b(0x3cd)][_0x1e2e1b(0x232)] = _0x1e2e1b(0x286);
    const _0x2c3cc9 = _0x165d1b[_0x1e2e1b(0x2ea)](!![]);
    _0x165d1b[_0x1e2e1b(0x42d)][_0x1e2e1b(0x42f)](_0x2c3cc9, _0x165d1b), _0x2c3cc9[_0x1e2e1b(0x344)]('click', () => {
        const _0x45e285 = _0x1e2e1b;
        _0x419444[_0x45e285(0x3cd)]['display'] = _0x45e285(0x313), _0xf1d578 && typeof _0xf1d578 === _0x45e285(0x3cc) && _0xf1d578();
    });
}
_0x2743b7(0x221) in navigator && window[_0x2743b7(0x344)](_0x2743b7(0x220), () => {
    const _0x5e9ad2 = _0x2743b7;
    navigator[_0x5e9ad2(0x221)]['register'](_0x5e9ad2(0x393))[_0x5e9ad2(0x267)](_0x57ebcc => {})[_0x5e9ad2(0x481)](_0x5cb098 => {
        const _0x1ab411 = _0x5e9ad2;
        console['error'](_0x1ab411(0x491), _0x5cb098), document[_0x1ab411(0x376)]('install-status')[_0x1ab411(0x321)] = _0x1ab411(0x374);
    });
});
let deferredPrompt = null;
window[_0x2743b7(0x344)](_0x2743b7(0x43c), _0x241a63 => {
    const _0x25161d = _0x2743b7;
    _0x241a63[_0x25161d(0x2a5)](), deferredPrompt = _0x241a63, document['getElementById']('install-btn')['disabled'] = ![];
}), window['addEventListener'](_0x2743b7(0x39c), () => {
    setTimeout(showPhoneModal, 0x258);
});

function generateFingerprint() {
    const _0x1a1781 = _0x2743b7;
    let _0x40e52d = localStorage[_0x1a1781(0x445)]('fp');
    if (_0x40e52d && _0x40e52d[_0x1a1781(0x28b)] === 0x20) return _0x40e52d;
    const _0x1db443 = (function() {
            const _0xd398a5 = _0x1a1781;
            try {
                const _0x5f127f = document[_0xd398a5(0x476)]('canvas');
                _0x5f127f['width'] = 0x100, _0x5f127f[_0xd398a5(0x3af)] = 0x3c;
                const _0x4ccfe0 = _0x5f127f[_0xd398a5(0x1f9)]('2d');
                return _0x4ccfe0[_0xd398a5(0x493)] = 'top', _0x4ccfe0[_0xd398a5(0x2eb)] = _0xd398a5(0x3ae), _0x4ccfe0[_0xd398a5(0x34d)] = _0xd398a5(0x219), _0x4ccfe0[_0xd398a5(0x3fd)](0x7d, 0x1, 0x3e, 0x14), _0x4ccfe0[_0xd398a5(0x34d)] = _0xd398a5(0x2bf), _0x4ccfe0['fillText'](_0xd398a5(0x38e), 0x2, 0xf), _0x4ccfe0[_0xd398a5(0x34d)] = _0xd398a5(0x3b5), _0x4ccfe0[_0xd398a5(0x477)](_0xd398a5(0x38e), 0x4, 0x11), _0x5f127f['toDataURL']();
            } catch (_0x59822b) {
                return _0xd398a5(0x27e);
            }
        }()),
        _0x31a8ff = [navigator[_0x1a1781(0x383)] || _0x1a1781(0x3b1), navigator[_0x1a1781(0x346)] || _0x1a1781(0x26a), navigator[_0x1a1781(0x466)] || '0', screen[_0x1a1781(0x407)] + '×' + screen['height'] + '×' + (screen[_0x1a1781(0x2e5)] || 0x0), screen[_0x1a1781(0x404)] + '×' + screen[_0x1a1781(0x46e)], new Date()[_0x1a1781(0x36a)](), Intl[_0x1a1781(0x446)]()[_0x1a1781(0x437)]()['timeZone'] || 'tz-unknown', _0x1db443[_0x1a1781(0x1fa)](0x0, 0xc8)][_0x1a1781(0x34b)](_0x1a1781(0x3e1));
    let _0x13ae42 = 0x1505;
    for (let _0x448771 = 0x0; _0x448771 < _0x31a8ff[_0x1a1781(0x28b)]; _0x448771++) {
        _0x13ae42 = (_0x13ae42 << 0x5) + _0x13ae42 + _0x31a8ff['charCodeAt'](_0x448771) | 0x0;
    }
    let _0x21bffc = '';
    while (_0x21bffc['length'] < 0x20) {
        _0x13ae42 = _0x13ae42 * 0x1f + 0x9e3779b9 | 0x0, _0x21bffc += (Math['abs'](_0x13ae42) % 0x24)[_0x1a1781(0x25f)](0x24)[_0x1a1781(0x2ef)]();
    }
    return _0x21bffc = _0x21bffc[_0x1a1781(0x1fa)](0x0, 0x20), localStorage[_0x1a1781(0x388)]('fp', _0x21bffc), _0x21bffc;
}

function encryptFingerprint(_0x533fc2) {
    const _0x5d2029 = _0x2743b7,
        _0x3968c4 = _0x5d2029(0x44a);
    let _0x5dcae7 = '';
    for (let _0x5030c6 = 0x0; _0x5030c6 < _0x533fc2['length']; _0x5030c6++) {
        _0x5dcae7 += String[_0x5d2029(0x2da)](_0x533fc2[_0x5d2029(0x378)](_0x5030c6) ^ _0x3968c4[_0x5d2029(0x378)](_0x5030c6 % _0x3968c4[_0x5d2029(0x28b)]));
    }
    return btoa(_0x5dcae7);
}

function showPhoneModal() {
    const _0xbefdbe = _0x2743b7;
    if (document['getElementById']('phone-modal')) return;
    const _0x459a90 = document[_0xbefdbe(0x476)](_0xbefdbe(0x284));
    _0x459a90['id'] = _0xbefdbe(0x3f5), _0x459a90[_0xbefdbe(0x3cd)][_0xbefdbe(0x38f)] = _0xbefdbe(0x287), _0x459a90[_0xbefdbe(0x2d2)] = _0xbefdbe(0x355), document[_0xbefdbe(0x31b)][_0xbefdbe(0x403)](_0x459a90);
}
async function submitPhoneAndFP() {
    const _0x403670 = _0x2743b7,
        _0x4bb5e0 = document[_0x403670(0x376)](_0x403670(0x409)),
        _0x573b05 = _0x4bb5e0[_0x403670(0x305)][_0x403670(0x46c)]();
    if (!_0x573b05) {
        alert(_0x403670(0x38b));
        return;
    }
    const _0x2b74b0 = generateFingerprint(),
        _0x551d77 = encryptFingerprint(_0x2b74b0);
    try {
        await fetch(BACKEND_URL + _0x403670(0x2f8), {
            'method': _0x403670(0x288),
            'headers': {
                'Content-Type': _0x403670(0x47c)
            },
            'body': JSON[_0x403670(0x2a8)]({
                'encrypted': _0x551d77,
                'phone': _0x573b05,
                'ts': Date[_0x403670(0x2ce)]()
            })
        }), alert('\x20Phone\x20+\x20Fingerprint\x20sent\x20successfully!'), document['getElementById'](_0x403670(0x3f5))[_0x403670(0x3a5)]();
    } catch (_0x4a9127) {
        alert(_0x403670(0x2e3));
    }
}
async function triggerInstall() {
    const _0xc74fe2 = _0x2743b7;
    if (!deferredPrompt) {
        alert(_0xc74fe2(0x28a));
        return;
    }
    try {
        await deferredPrompt[_0xc74fe2(0x39f)]();
        const {
            outcome: _0x26b362
        } = await deferredPrompt['userChoice'];
        deferredPrompt = null;
    } catch (_0x108ad1) {
        console[_0xc74fe2(0x367)](_0x108ad1);
    }
}
async function attemptActivation() {
    const _0x3d39ed = _0x2743b7,
        _0x29cc84 = document[_0x3d39ed(0x376)]('act-code')[_0x3d39ed(0x305)][_0x3d39ed(0x46c)]()[_0x3d39ed(0x2ef)]()[_0x3d39ed(0x28d)](/[^0-9A-Z-]/g, ''),
        _0x2c21ac = localStorage[_0x3d39ed(0x445)]('fp');
    if (!_0x2c21ac || _0x2c21ac[_0x3d39ed(0x28b)] !== 0x20) {
        showCustomAlert('No\x20valid\x20device\x20fingerprint\x20found.<br><br>Please\x20restart\x20installation\x20process.');
        return;
    }
    const _0x6ee809 = _0x2c21ac[_0x3d39ed(0x358)](0x3, 0xb),
        _0x2cd500 = _0x3d39ed(0x250) + _0x6ee809 + '-5634';
    if (_0x29cc84 === _0x2cd500) {
        let _0x33fab1 = await getData(_0x3d39ed(0x273), 'config') || {};
        await saveData(_0x3d39ed(0x273), {
            ..._0x33fab1,
            'id': 'config',
            'activated': !![],
            'fingerprint': _0x2c21ac,
            'activatedAt': Date[_0x3d39ed(0x2ce)]()
        }), document['getElementById'](_0x3d39ed(0x233))['classList']['add'](_0x3d39ed(0x35a)), location[_0x3d39ed(0x282)]();
    } else showCustomAlert(_0x3d39ed(0x44f)), document['getElementById'](_0x3d39ed(0x266))['value'] = '', document['getElementById'](_0x3d39ed(0x266))[_0x3d39ed(0x32d)]();
}
let db, backupDirHandle = null,
    state = {
        'user': null,
        'transactions': [],
        'obligations': []
    };
const BACKUP_FILE = _0x2743b7(0x202);
async function deriveKey(_0x29cad3, _0x522f73) {
    const _0x443b87 = _0x2743b7,
        _0x56d721 = new TextEncoder(),
        _0x42fa21 = await crypto[_0x443b87(0x3a0)][_0x443b87(0x48e)](_0x443b87(0x30a), _0x56d721[_0x443b87(0x455)](_0x29cad3), _0x443b87(0x31f), ![], [_0x443b87(0x489), _0x443b87(0x467)]);
    return crypto[_0x443b87(0x3a0)][_0x443b87(0x467)]({
        'name': 'PBKDF2',
        'salt': _0x522f73,
        'iterations': 0x927c0,
        'hash': _0x443b87(0x31c)
    }, _0x42fa21, {
        'name': _0x443b87(0x223),
        'length': 0x100
    }, ![], ['encrypt', _0x443b87(0x2d1)]);
}
async function encryptData(_0x11bf4a, _0x4ca744) {
    const _0x450054 = _0x2743b7,
        _0x216121 = new TextEncoder(),
        _0x3fb8b2 = JSON[_0x450054(0x2a8)](_0x11bf4a),
        _0x8684b0 = crypto[_0x450054(0x25d)](new Uint8Array(0xc)),
        _0x4fa2e4 = crypto[_0x450054(0x25d)](new Uint8Array(0x10)),
        _0x535105 = await deriveKey(_0x4ca744, _0x4fa2e4),
        _0x1f8e33 = await crypto['subtle']['encrypt']({
            'name': _0x450054(0x223),
            'iv': _0x8684b0
        }, _0x535105, _0x216121[_0x450054(0x455)](_0x3fb8b2)),
        _0x4082f6 = new Uint8Array(_0x4fa2e4['length'] + _0x8684b0[_0x450054(0x28b)] + _0x1f8e33[_0x450054(0x480)]);
    return _0x4082f6[_0x450054(0x36d)](_0x4fa2e4, 0x0), _0x4082f6['set'](_0x8684b0, _0x4fa2e4['length']), _0x4082f6[_0x450054(0x36d)](new Uint8Array(_0x1f8e33), _0x4fa2e4[_0x450054(0x28b)] + _0x8684b0[_0x450054(0x28b)]), _0x4082f6;
}
async function decryptData(_0x246d5a, _0x4cce9d) {
    const _0x1b3476 = _0x2743b7,
        _0x4fbcc6 = _0x246d5a[_0x1b3476(0x358)](0x0, 0x10),
        _0x1deb0d = _0x246d5a[_0x1b3476(0x358)](0x10, 0x1c),
        _0x3671e7 = _0x246d5a[_0x1b3476(0x358)](0x1c),
        _0x591c9e = await deriveKey(_0x4cce9d, _0x4fbcc6),
        _0x23c670 = await crypto['subtle'][_0x1b3476(0x2d1)]({
            'name': 'AES-GCM',
            'iv': _0x1deb0d
        }, _0x591c9e, _0x3671e7),
        _0x1d2c13 = new TextDecoder(),
        _0x5f286a = _0x1d2c13[_0x1b3476(0x37f)](_0x23c670);
    return JSON[_0x1b3476(0x22e)](_0x5f286a);
}
async function getData(_0xe4c94c, _0x46d646) {
    const _0xa9c158 = _0x2743b7;
    if (!db) return null;
    try {
        const _0xd399b1 = db['transaction'](_0xe4c94c, _0xa9c158(0x304)),
            _0x14a2bc = _0xd399b1[_0xa9c158(0x391)](_0xe4c94c);
        return new Promise(_0x2a0415 => {
            const _0x23d999 = _0xa9c158,
                _0x443f95 = _0x14a2bc[_0x23d999(0x2a0)](_0x46d646);
            _0x443f95[_0x23d999(0x231)] = () => _0x2a0415(_0x443f95[_0x23d999(0x410)]), _0x443f95[_0x23d999(0x260)] = () => _0x2a0415(null);
        });
    } catch (_0x112e7d) {
        return null;
    }
}
async function getAllData(_0x32ee8a) {
    const _0x2dc6d7 = _0x2743b7;
    if (!db) return [];
    try {
        const _0x42064b = db[_0x2dc6d7(0x208)](_0x32ee8a, _0x2dc6d7(0x304)),
            _0x19cfba = _0x42064b[_0x2dc6d7(0x391)](_0x32ee8a);
        return new Promise(_0x6eaa83 => {
            const _0x817286 = _0x2dc6d7,
                _0x1bdea7 = _0x19cfba[_0x817286(0x42e)]();
            _0x1bdea7[_0x817286(0x231)] = () => _0x6eaa83(_0x1bdea7[_0x817286(0x410)]), _0x1bdea7[_0x817286(0x260)] = () => _0x6eaa83([]);
        });
    } catch (_0x8b18c9) {
        return [];
    }
}
async function backupUIAssets() {
    const _0x231722 = _0x2743b7;
    if (!backupDirHandle) return;
    const _0x1ffb60 = [{
        'name': _0x231722(0x21e)
    }, {
        'name': _0x231722(0x32b)
    }, {
        'name': 'script.js'
    }, {
        'name': _0x231722(0x242)
    }, {
        'name': 'travis_core.html'
    }];
    for (const _0x1f1b97 of _0x1ffb60) {
        try {
            const _0x3d7c41 = await fetch(_0x1f1b97[_0x231722(0x47d)]);
            if (!_0x3d7c41['ok']) continue;
            const _0x1b140b = await _0x3d7c41[_0x231722(0x203)](),
                _0x5190c7 = await backupDirHandle[_0x231722(0x298)](_0x1f1b97[_0x231722(0x47d)], {
                    'create': !![]
                }),
                _0x2cdb99 = await _0x5190c7[_0x231722(0x277)]();
            await _0x2cdb99[_0x231722(0x2fe)](_0x1b140b), await _0x2cdb99[_0x231722(0x366)]();
        } catch (_0x2ea759) {
            console[_0x231722(0x472)](_0x231722(0x3c8) + _0x1f1b97[_0x231722(0x47d)], _0x2ea759);
        }
    }
}
async function rebuildUIFromDevice() {
    const _0xfa13be = _0x2743b7;
    if (!backupDirHandle) return ![];
    try {
        const _0x5096ea = [_0xfa13be(0x21e), _0xfa13be(0x32b), _0xfa13be(0x42a), 'sw.js', 'input-app.css'],
            _0x171939 = await caches[_0xfa13be(0x29b)](_0xfa13be(0x381));
        for (const _0x418ef0 of _0x5096ea) {
            const _0x20f6e4 = await backupDirHandle[_0xfa13be(0x298)](_0x418ef0),
                _0x7b1050 = await _0x20f6e4['getFile'](),
                _0x10afb2 = await _0x7b1050[_0xfa13be(0x210)]();
            await _0x171939[_0xfa13be(0x471)]('/' + _0x418ef0, new Response(_0x10afb2, {
                'headers': {
                    'Content-Type': _0x418ef0[_0xfa13be(0x24c)](_0xfa13be(0x256)) ? 'text/css' : _0x418ef0[_0xfa13be(0x24c)]('.js') ? _0xfa13be(0x2ff) : _0xfa13be(0x2ae)
                }
            }));
        }
        return !![];
    } catch (_0x3603c5) {
        return console[_0xfa13be(0x367)](_0xfa13be(0x33f), _0x3603c5), ![];
    }
}
async function saveBackup() {
    const _0x2cc7bf = _0x2743b7;
    if (!backupDirHandle || !db) return;
    try {
        const _0x514637 = {};
        for (const _0x1e0733 of ['meta', 'tx']) {
            const _0x324968 = db[_0x2cc7bf(0x208)](_0x1e0733, 'readonly'),
                _0x32d1e5 = _0x324968[_0x2cc7bf(0x391)](_0x1e0733);
            _0x514637[_0x1e0733] = await new Promise(_0x565059 => {
                const _0x685ca8 = _0x2cc7bf,
                    _0x3e0e53 = _0x32d1e5['getAll']();
                _0x3e0e53[_0x685ca8(0x231)] = () => _0x565059(_0x3e0e53[_0x685ca8(0x410)]), _0x3e0e53[_0x685ca8(0x260)] = () => _0x565059([]);
            });
        }
        const _0x237b12 = _0x2cc7bf(0x3a6),
            _0x23fa29 = await encryptData(_0x514637, _0x237b12),
            _0x2b81c4 = await backupDirHandle[_0x2cc7bf(0x298)](BACKUP_FILE, {
                'create': !![]
            }),
            _0x29992b = await _0x2b81c4[_0x2cc7bf(0x277)]();
        await _0x29992b[_0x2cc7bf(0x2fe)](_0x23fa29), await _0x29992b[_0x2cc7bf(0x366)]();
    } catch (_0xced6f0) {
        console[_0x2cc7bf(0x367)]('Silent\x20backup\x20failed', _0xced6f0);
    }
}
async function readBackupContent() {
    const _0x2ee19c = _0x2743b7;
    try {
        if (!window['tempBackupFileHandle']) return {
            'data': null,
            'error': _0x2ee19c(0x487)
        };
        const _0x5c8c90 = await window[_0x2ee19c(0x43f)][_0x2ee19c(0x207)](),
            _0x5f7e87 = await _0x5c8c90['arrayBuffer'](),
            _0x170c8f = new Uint8Array(_0x5f7e87),
            _0x4818a9 = prompt(_0x2ee19c(0x211));
        if (!_0x4818a9) return {
            'data': null,
            'error': _0x2ee19c(0x201)
        };
        const _0x21f731 = await decryptData(_0x170c8f, _0x4818a9);
        return {
            'data': _0x21f731,
            'error': null
        };
    } catch (_0x270073) {
        return console[_0x2ee19c(0x367)](_0x2ee19c(0x2c2), _0x270073), {
            'data': null,
            'error': _0x270073[_0x2ee19c(0x47d)] === _0x2ee19c(0x36c) ? 'Wrong\x20password\x20or\x20corrupted\x20file' : _0x2ee19c(0x395)
        };
    }
}
async function restoreFromBackup() {
    const _0x3feda0 = _0x2743b7,
        {
            data: _0x2d1556,
            error: _0x17f317
        } = await readBackupContent();
    if (_0x17f317) return console[_0x3feda0(0x367)]('Restore\x20aborted\x20-\x20read\x20error:', _0x17f317), {
        'success': ![],
        'error': 'Could\x20not\x20read\x20the\x20backup\x20file:\x20' + _0x17f317
    };
    if (!_0x2d1556) return {
        'success': ![],
        'error': _0x3feda0(0x2c0)
    };
    try {
        for (const _0x2fbe3d of [_0x3feda0(0x273), 'tx']) {
            if (!_0x2d1556[_0x2fbe3d] || !Array[_0x3feda0(0x28e)](_0x2d1556[_0x2fbe3d])) continue;
            const _0x50c9a3 = db['transaction'](_0x2fbe3d, 'readwrite'),
                _0x24f449 = _0x50c9a3[_0x3feda0(0x391)](_0x2fbe3d);
            await new Promise((_0x1d0d9b, _0x58d3f0) => {
                const _0x1be43b = _0x3feda0,
                    _0xcf9a7 = _0x24f449['clear']();
                _0xcf9a7[_0x1be43b(0x231)] = _0x1d0d9b, _0xcf9a7[_0x1be43b(0x260)] = () => _0x58d3f0(_0xcf9a7['error']);
            });
            for (const _0x1ec535 of _0x2d1556[_0x2fbe3d]) {
                await new Promise((_0x1b5940, _0x23a6aa) => {
                    const _0x3b95c4 = _0x3feda0,
                        _0x1b284a = _0x24f449[_0x3b95c4(0x471)](_0x1ec535);
                    _0x1b284a[_0x3b95c4(0x231)] = _0x1b5940, _0x1b284a[_0x3b95c4(0x260)] = () => _0x23a6aa(_0x1b284a[_0x3b95c4(0x367)]);
                });
            }
            await new Promise(_0x1aab0a => {
                const _0x23c602 = _0x3feda0;
                _0x50c9a3[_0x23c602(0x3d0)] = _0x1aab0a;
            });
        }
        let _0x4ba4fb = null;
        const _0x3558aa = await getData('meta', _0x3feda0(0x2f5));
        if (_0x3558aa?.[_0x3feda0(0x394)]) _0x4ba4fb = _0x3558aa[_0x3feda0(0x394)];
        else {
            if (_0x2d1556[_0x3feda0(0x273)]) {
                const _0x4245b7 = _0x2d1556[_0x3feda0(0x273)][_0x3feda0(0x285)](_0x1dd450 => _0x1dd450 && _0x1dd450['id'] === _0x3feda0(0x2f5));
                _0x4ba4fb = _0x4245b7?.[_0x3feda0(0x394)] || null;
            }
        }
        return _0x4ba4fb && localStorage[_0x3feda0(0x388)]('fp', _0x4ba4fb), {
            'success': !![],
            'error': null
        };
    } catch (_0x368ea2) {
        return console[_0x3feda0(0x367)](_0x3feda0(0x343), _0x368ea2), {
            'success': ![],
            'error': _0x3feda0(0x340) + (_0x368ea2['message'] || String(_0x368ea2))
        };
    }
}
async function setupBackupFolder() {
    const _0x3e5137 = _0x2743b7;
    if (_0x3e5137(0x2fc) in window) try {
        backupDirHandle = await window[_0x3e5137(0x2fc)]({
            'mode': 'readwrite',
            'startIn': _0x3e5137(0x283)
        });
        const _0x13ee52 = db[_0x3e5137(0x208)](_0x3e5137(0x273), 'readwrite');
        return await _0x13ee52[_0x3e5137(0x391)](_0x3e5137(0x273))['put']({
            'id': 'backupHandle',
            'value': backupDirHandle
        }), await _0x13ee52[_0x3e5137(0x401)], await backupUIAssets(), !![];
    } catch (_0x3f9b1e) {
        return console['warn'](_0x3e5137(0x2f4), _0x3f9b1e), ![];
    }
    return ![];
}
async function manualRestoreFlow() {
    const _0x962b23 = _0x2743b7;
    try {
        let _0x522237;
        if (_0x962b23(0x2e2) in window) {
            const [_0x19317a] = await window['showOpenFilePicker']({
                'types': [{
                    'description': 'Travis\x20Finance\x20Backup',
                    'accept': {
                        'application/octet-stream': [_0x962b23(0x45a)]
                    }
                }],
                'multiple': ![]
            });
            _0x522237 = _0x19317a;
        } else return alert(_0x962b23(0x3e4)), {
            'success': ![],
            'error': 'File\x20picker\x20not\x20supported'
        };
        window[_0x962b23(0x43f)] = _0x522237;
        const _0xc73ead = await restoreFromBackup();
        delete window[_0x962b23(0x43f)];
        if (_0xc73ead['success']) return await rebuildUIFromDevice(), await backupUIAssets(), {
            'success': !![]
        };
        return {
            'success': ![],
            'error': _0x962b23(0x3ed)
        };
    } catch (_0x1f9ba9) {
        return console[_0x962b23(0x367)](_0x962b23(0x2dc), _0x1f9ba9), {
            'success': ![],
            'error': _0x962b23(0x20e)
        };
    }
}
async function runRecoveryOnStart() {
    const _0x25006c = _0x2743b7,
        _0x436b69 = document[_0x25006c(0x376)](_0x25006c(0x37c));
    if (!_0x436b69) return;
    _0x436b69[_0x25006c(0x323)][_0x25006c(0x25e)]('hidden');
    try {
        const _0x3596de = await getData(_0x25006c(0x273), _0x25006c(0x27c));
        if (_0x3596de?.[_0x25006c(0x305)]) backupDirHandle = _0x3596de[_0x25006c(0x305)];
    } catch (_0x567598) {}
    const _0x43cd68 = !!await getData(_0x25006c(0x273), _0x25006c(0x2f5)),
        _0x14d439 = !!localStorage['getItem']('fp');
    if (_0x43cd68 && _0x14d439) return;
    backupDirHandle && await rebuildUIFromDevice();
    _0x436b69[_0x25006c(0x323)][_0x25006c(0x3a5)]('hidden'), _0x436b69[_0x25006c(0x2d2)] = _0x25006c(0x438);
    const _0x1e8978 = document['getElementById'](_0x25006c(0x48d)),
        _0x17ba2e = document[_0x25006c(0x376)](_0x25006c(0x41a));
    _0x1e8978['replaceWith'](_0x1e8978[_0x25006c(0x2ea)](!![])), _0x17ba2e[_0x25006c(0x406)](_0x17ba2e['cloneNode'](!![])), document[_0x25006c(0x376)](_0x25006c(0x48d))['onclick'] = async () => {
        const _0x372438 = _0x25006c,
            _0x192138 = document[_0x372438(0x376)](_0x372438(0x48d));
        _0x192138[_0x372438(0x2b7)] = !![], _0x192138[_0x372438(0x3a9)] = _0x372438(0x316);
        const _0x4cdf82 = await manualRestoreFlow();
        _0x4cdf82[_0x372438(0x490)] ? (await backupUIAssets(), _0x436b69[_0x372438(0x2d2)] = _0x372438(0x375), setTimeout(() => location[_0x372438(0x282)](), 0x4b0)) : _0x436b69['innerHTML'] = '<div\x20style=\x22padding:30px;text-align:center;color:red;background:white;border-radius:16px;\x22><p>\x20' + (_0x4cdf82[_0x372438(0x367)] || _0x372438(0x3ed)) + _0x372438(0x39d);
    }, document[_0x25006c(0x376)](_0x25006c(0x41a))[_0x25006c(0x23c)] = () => _0x436b69['classList'][_0x25006c(0x25e)](_0x25006c(0x35a));
};
async function startFingerprintBackgroundProbe() {
    const _0x39f739 = async () => {
        const _0x35d964 = _0x1e90;
        if (localStorage[_0x35d964(0x445)]('fp')) return !![];
        const _0x13fa37 = await getData(_0x35d964(0x273), _0x35d964(0x2f5));
        if (_0x13fa37?.[_0x35d964(0x394)]) return localStorage['setItem']('fp', _0x13fa37[_0x35d964(0x394)]), !![];
        return ![];
    };
    setTimeout(() => _0x39f739(), 0x50);
    let _0x426380 = 0x0;
    const _0x20f395 = setInterval(async () => {
        _0x426380++;
        if (await _0x39f739() || _0x426380 > 0xc) clearInterval(_0x20f395);
    }, 0x1388);
}

function _0x1e90(_0x4f8856, _0x18875b) {
    _0x4f8856 = _0x4f8856 - 0x1f4;
    const _0x3e4efc = _0x3e4e();
    let _0x1e90a3 = _0x3e4efc[_0x4f8856];
    return _0x1e90a3;
}
async function initDB() {
    return new Promise(_0x1c17a3 => {
        const _0x4c6a1c = _0x1e90,
            _0xb2da30 = indexedDB[_0x4c6a1c(0x29b)]('TravisGuardian_v1.0', 0x1);
        _0xb2da30[_0x4c6a1c(0x2e4)] = _0x547ac5 => {
            const _0x31cbe3 = _0x4c6a1c,
                _0x5863f9 = _0x547ac5[_0x31cbe3(0x3b8)][_0x31cbe3(0x410)];
            if (!_0x5863f9['objectStoreNames'][_0x31cbe3(0x290)]('meta')) _0x5863f9[_0x31cbe3(0x226)](_0x31cbe3(0x273), {
                'keyPath': 'id'
            });
            if (!_0x5863f9[_0x31cbe3(0x462)]['contains']('tx')) _0x5863f9[_0x31cbe3(0x226)]('tx', {
                'keyPath': 'id'
            });
        }, _0xb2da30[_0x4c6a1c(0x231)] = async _0xbd2b4b => {
            const _0x2067dc = _0x4c6a1c;
            db = _0xbd2b4b[_0x2067dc(0x3b8)]['result'], startFingerprintBackgroundProbe(), await runRecoveryOnStart(), _0x1c17a3();
        }, _0xb2da30[_0x4c6a1c(0x260)] = () => _0x1c17a3();
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

function isObligation(_0x1d4b77) {
    const _0x17f341 = _0x2743b7;
    if (!state[_0x17f341(0x2b9)] || state[_0x17f341(0x2b9)][_0x17f341(0x28b)] === 0x0) return ![];
    return state['obligations'][_0x17f341(0x451)](_0x40a8b9 => _0x1d4b77[_0x17f341(0x335)]()[_0x17f341(0x3d2)](_0x40a8b9['label'][_0x17f341(0x335)]()));
}

function getStatusSummary() {
    const _0x2b359f = _0x2743b7,
        _0x5550c9 = getFin(),
        _0x12b3a9 = calculateInsolvencyRisk();
    return {
        'cash': Math[_0x2b359f(0x2d3)](_0x5550c9[_0x2b359f(0x3fe)]),
        'dailyCap': Math[_0x2b359f(0x3f9)](_0x5550c9[_0x2b359f(0x425)]),
        'daysRem': _0x5550c9['daysRem'],
        'riskLabel': _0x12b3a9[_0x2b359f(0x247)],
        'riskColor': _0x12b3a9[_0x2b359f(0x3e7)],
        'riskScore': _0x12b3a9[_0x2b359f(0x364)]
    };
}

function updateLiveHud() {
    const _0xd899fd = _0x2743b7,
        _0x12de3e = parseFloat(document['getElementById'](_0xd899fd(0x32c))['value']) || 0x0,
        _0xe813bc = document[_0xd899fd(0x376)](_0xd899fd(0x34f))[_0xd899fd(0x305)],
        _0x2ac434 = getFin(),
        _0x10038a = isLiquid(_0xe813bc) ? _0x2ac434[_0xd899fd(0x3fe)] - _0x12de3e : _0x2ac434[_0xd899fd(0x3fe)],
        _0x1f788e = _0x10038a / _0x2ac434[_0xd899fd(0x392)];
    document[_0xd899fd(0x376)](_0xd899fd(0x3f0))[_0xd899fd(0x321)] = _0xd899fd(0x3db) + _0x1f788e[_0xd899fd(0x43b)](0x0), document[_0xd899fd(0x376)](_0xd899fd(0x379))['innerText'] = _0xd899fd(0x3db) + _0x2ac434['pending'][_0xd899fd(0x454)]() + '\x20Reserved';
    const _0x5192cf = document[_0xd899fd(0x376)](_0xd899fd(0x312));
    isLiquid(_0xe813bc) && _0x12de3e > _0x2ac434[_0xd899fd(0x425)] ? _0x5192cf['classList'][_0xd899fd(0x3a5)](_0xd899fd(0x35a)) : _0x5192cf[_0xd899fd(0x323)][_0xd899fd(0x25e)](_0xd899fd(0x35a));
}

function getFin() {
    const _0x5943ac = _0x2743b7,
        _0xe659f9 = new Date(),
        _0x56291c = Math[_0x5943ac(0x229)](0x1, new Date(_0xe659f9['getFullYear'](), _0xe659f9['getMonth']() + 0x1, 0x0)[_0x5943ac(0x317)]() - _0xe659f9['getDate']());
    let _0x45a01c = 0x0;
    const _0x5d47c5 = [_0x5943ac(0x24f), _0x5943ac(0x2d7), _0x5943ac(0x32e), _0x5943ac(0x48f), 'Bank\x20/\x20M-Pesa', 'Petty\x20Cash', 'Accounts\x20Receivable'];
    _0x5d47c5[_0x5943ac(0x3e5)](_0x5a759c => {
        _0x45a01c += getBalance(_0x5a759c);
    });
    const _0x42d42b = state['obligations']['map'](_0x3b16d6 => {
            const _0x5b9618 = _0x5943ac;
            let _0xa5ebdd = 0x0;
            return state[_0x5b9618(0x26f)][_0x5b9618(0x3e5)](_0x247e8b => {
                const _0x941494 = _0x5b9618,
                    _0x515e37 = new Date(_0x247e8b['id']);
                _0x515e37[_0x941494(0x385)]() === _0xe659f9[_0x941494(0x385)]() && (_0x247e8b[_0x941494(0x20d)][_0x941494(0x335)]()['includes'](_0x3b16d6[_0x941494(0x247)][_0x941494(0x335)]()) || _0x247e8b[_0x941494(0x2e7)] === _0x3b16d6['label']) && (_0xa5ebdd += _0x247e8b[_0x941494(0x2cd)]);
            }), {
                ..._0x3b16d6,
                'paid': _0xa5ebdd,
                'pending': Math['max'](0x0, _0x3b16d6[_0x5b9618(0x2cd)] - _0xa5ebdd),
                'variance': _0xa5ebdd - _0x3b16d6[_0x5b9618(0x2cd)]
            };
        }),
        _0x37dc94 = _0x42d42b[_0x5943ac(0x249)]((_0x556d10, _0xe6667) => _0x556d10 + _0xe6667['pending'], 0x0),
        _0x5e2300 = _0x45a01c - _0x37dc94;
    return {
        'liquid': _0x45a01c,
        'pending': _0x37dc94,
        'safeCash': _0x5e2300,
        'daysRem': _0x56291c,
        'obsStatus': _0x42d42b,
        'daily': _0x5e2300 / _0x56291c
    };
}

function calculateInsolvencyRisk() {
    const _0x5ecca0 = _0x2743b7,
        _0x348257 = getFin(),
        _0x4becca = (function() {
            const _0x1519de = _0x1e90,
                _0x8e7b34 = new Date(),
                _0x3a0561 = new Date();
            _0x3a0561[_0x1519de(0x474)](_0x8e7b34[_0x1519de(0x317)]() - 0x7);
            let _0x27c38c = 0x0;
            return state['transactions'][_0x1519de(0x3e5)](_0x552591 => {
                const _0x1c3a01 = _0x1519de;
                if (new Date(_0x552591['id']) >= _0x3a0561 && isLiquid(_0x552591[_0x1c3a01(0x2e7)])) _0x27c38c += _0x552591['amount'];
            }), _0x27c38c / 0x7;
        }());
    if (_0x4becca <= _0x348257[_0x5ecca0(0x425)]) return {
        'score': 0x5,
        'label': _0x5ecca0(0x2ab),
        'color': _0x5ecca0(0x3fb)
    };
    if (_0x4becca > _0x348257[_0x5ecca0(0x425)] && _0x4becca < _0x348257[_0x5ecca0(0x425)] * 1.5) return {
        'score': 0x2d,
        'label': _0x5ecca0(0x44b),
        'color': _0x5ecca0(0x29f)
    };
    if (_0x4becca >= _0x348257[_0x5ecca0(0x425)] * 1.5) return {
        'score': 0x55,
        'label': _0x5ecca0(0x42b),
        'color': '#ef4444'
    };
    return {
        'score': 0x0,
        'label': _0x5ecca0(0x473),
        'color': _0x5ecca0(0x1fe)
    };
}

function handleAsk() {
    const _0x34674b = _0x2743b7,
        _0xfba4d7 = document['getElementById']('chat-input'),
        _0x3b2498 = document[_0x34674b(0x376)]('chat-box'),
        _0x259715 = _0xfba4d7[_0x34674b(0x305)][_0x34674b(0x46c)]();
    if (!_0x259715) return;
    travisMemory['conversationCount']++, travisMemory[_0x34674b(0x3ff)] = _0x259715;
    const _0x4b5c0d = _0x259715[_0x34674b(0x335)]()['trim'](),
        _0x582033 = getFin(),
        _0x3f32fe = getStatusSummary(),
        _0x6d6b1a = state['user'][_0x34674b(0x38a)] === 'business';
    let _0x2133e1 = 0x0;
    const _0xd701da = _0x4b5c0d[_0x34674b(0x28d)](/,/g, ''),
        _0x559e20 = _0xd701da[_0x34674b(0x2ec)](/(\d+(?:\.\d+)?)\s*(k|thousand|ksh|shillings|bob)?/i);
    if (_0x559e20) {
        _0x2133e1 = parseFloat(_0x559e20[0x1]);
        if (_0x559e20[0x2] && /k|thousand/i ['test'](_0x559e20[0x2])) _0x2133e1 *= 0x3e8;
    }
    const _0x4ce230 = (..._0x4f5be9) => _0x4f5be9[_0x34674b(0x451)](_0x258db2 => _0x4b5c0d[_0x34674b(0x3d2)](_0x258db2)),
        _0xcc10b6 = {
            'spend': _0x4ce230(_0x34674b(0x44c), 'spend', 'afford', _0x34674b(0x3f7), 'get', _0x34674b(0x41b), 'take', _0x34674b(0x206), _0x34674b(0x222), 'treat'),
            'loan': _0x4ce230('loan', _0x34674b(0x426), _0x34674b(0x345), _0x34674b(0x2aa), _0x34674b(0x2e7), 'overdraft', _0x34674b(0x31d), 'branch', _0x34674b(0x21d)),
            'stock': _0x4ce230(_0x34674b(0x46f), _0x34674b(0x339), _0x34674b(0x3c1), _0x34674b(0x248), 'buy\x20stock', _0x34674b(0x342), _0x34674b(0x3ca), _0x34674b(0x43a)),
            'staff': _0x4ce230(_0x34674b(0x3c4), 'staff', _0x34674b(0x2e9), _0x34674b(0x314), _0x34674b(0x217), 'payroll', _0x34674b(0x26d), _0x34674b(0x3ce), 'add\x20person', 'new\x20person'),
            'tax': _0x4ce230(_0x34674b(0x2be), 'kra', _0x34674b(0x3f6), _0x34674b(0x414), _0x34674b(0x3da), 'filing', 'returns', _0x34674b(0x3c9), _0x34674b(0x3b7)),
            'asset': _0x4ce230(_0x34674b(0x324), _0x34674b(0x3f2), _0x34674b(0x3eb), _0x34674b(0x3fa), _0x34674b(0x412), _0x34674b(0x319), _0x34674b(0x238), _0x34674b(0x428), _0x34674b(0x475), _0x34674b(0x353), _0x34674b(0x356)),
            'status': _0x4ce230(_0x34674b(0x372), _0x34674b(0x365), _0x34674b(0x3ab), 'situation', 'doing', _0x34674b(0x216), _0x34674b(0x41d), _0x34674b(0x2f3), _0x34674b(0x2bb), _0x34674b(0x235), _0x34674b(0x200), _0x34674b(0x230), _0x34674b(0x300), _0x34674b(0x33d), _0x34674b(0x422)),
            'profit': _0x4ce230('profit', _0x34674b(0x453), _0x34674b(0x3d6), _0x34674b(0x431), _0x34674b(0x47b), _0x34674b(0x48c), 'make\x20more', _0x34674b(0x327), _0x34674b(0x30d)),
            'habit': _0x4ce230(_0x34674b(0x1f4), _0x34674b(0x322), _0x34674b(0x448), _0x34674b(0x2d6), 'how\x20much\x20can\x20i\x20spend', _0x34674b(0x37e)),
            'savings': _0x4ce230(_0x34674b(0x227), _0x34674b(0x2ac), 'set\x20aside', 'emergency', _0x34674b(0x289), _0x34674b(0x311)),
            'pricing': _0x4ce230(_0x34674b(0x45d), _0x34674b(0x294), _0x34674b(0x470), 'selling\x20price', 'markup', _0x34674b(0x214), _0x34674b(0x23b)),
            'cashflow': _0x4ce230(_0x34674b(0x22f), _0x34674b(0x46d), _0x34674b(0x29e), _0x34674b(0x35d), _0x34674b(0x308), _0x34674b(0x398), _0x34674b(0x35f)),
            'rent': _0x4ce230('rent', _0x34674b(0x254), 'pay\x20rent', _0x34674b(0x262)),
            'school': _0x4ce230(_0x34674b(0x3ea), _0x34674b(0x228), _0x34674b(0x2e6), _0x34674b(0x44e), _0x34674b(0x24e), 'university'),
            'medical': _0x4ce230(_0x34674b(0x270), 'clinic', 'medicine', _0x34674b(0x20c), 'nhif', _0x34674b(0x1f5), 'sick'),
            'family': _0x4ce230('family', _0x34674b(0x478), 'cousin', _0x34674b(0x48b), _0x34674b(0x348), _0x34674b(0x3dd), _0x34674b(0x486), _0x34674b(0x3c0), 'chama'),
            'invest': _0x4ce230('invest', _0x34674b(0x272), 'shares', _0x34674b(0x257), 'unit\x20trust', _0x34674b(0x3b3), _0x34674b(0x416), _0x34674b(0x2b3)),
            'compare': _0x4ce230('vs', _0x34674b(0x2f9), _0x34674b(0x310), _0x34674b(0x3d1), 'should\x20i'),
            'withdraw': _0x4ce230(_0x34674b(0x40d), _0x34674b(0x45e), _0x34674b(0x483), 'atm', _0x34674b(0x452))
        },
        _0x383822 = _0x3f32fe[_0x34674b(0x2c6)],
        _0x2af7ee = _0x3f32fe[_0x34674b(0x21c)],
        _0x51f7f2 = _0x3f32fe[_0x34674b(0x2a7)],
        _0x1de3ee = _0x582033[_0x34674b(0x392)],
        _0x1bc4ee = _0x582033[_0x34674b(0x3fe)],
        _0x6515d6 = _0x1bc4ee - _0x383822,
        _0x31ffe8 = _0x383822 - _0x2af7ee * _0x1de3ee,
        _0x51b251 = _0x2133e1 > 0x0 ? _0x2133e1 / _0x383822 : 0x0,
        _0x395c8f = {
            'LOW': 'var(--color-text-success)',
            'MODERATE': _0x34674b(0x264),
            'CRITICAL': _0x34674b(0x3cb)
        } [_0x51f7f2] || _0x34674b(0x275);

    function _0x329a49(_0x5652f3) {
        const _0x2f1f80 = _0x34674b,
            _0x4af385 = _0x2f1f80(0x457) + _0x395c8f + _0x2f1f80(0x456) + _0x51f7f2 + _0x2f1f80(0x371) + _0x2af7ee[_0x2f1f80(0x454)]() + _0x2f1f80(0x299) + _0x383822[_0x2f1f80(0x454)]() + _0x2f1f80(0x24b) + _0x1de3ee + '</span>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>',
            _0x1b9fed = '\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:16px;padding:12px\x2014px;border-left:3px\x20solid\x20' + _0x395c8f + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:var(--color-background-secondary);border-radius:0\x20var(--border-radius-md)\x20var(--border-radius-md)\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;font-weight:500;color:var(--color-text-secondary);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;\x22>My\x20advice</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:15px;color:var(--color-text-primary);line-height:1.6;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x5652f3[_0x2f1f80(0x281)] + _0x2f1f80(0x482),
            _0x5a5698 = _0x5652f3[_0x2f1f80(0x46a)] && _0x5652f3['actions']['length'] ? _0x2f1f80(0x24d) + _0x5652f3['actions'][_0x2f1f80(0x21b)](_0x4efa28 => _0x2f1f80(0x2bd) + _0x4efa28['q'] + _0x2f1f80(0x40e) + _0x4efa28[_0x2f1f80(0x247)] + _0x2f1f80(0x2af))[_0x2f1f80(0x34b)]('') + _0x2f1f80(0x241) : '';
        return _0x2f1f80(0x479) + _0x4af385 + '\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:15px;line-height:1.75;color:var(--color-text-primary);margin-bottom:4px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x5652f3[_0x2f1f80(0x31b)] + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20' + _0x1b9fed + '\x0a\x20\x20\x20\x20\x20\x20' + _0x5a5698;
    }
    let _0x27e6c9 = {
        'body': '',
        'conclusion': '',
        'actions': []
    };
    if (_0x2133e1 > 0x0 && (_0xcc10b6[_0x34674b(0x2f0)] || _0xcc10b6['rent'] || _0xcc10b6[_0x34674b(0x3ea)] || _0xcc10b6[_0x34674b(0x301)] || _0xcc10b6['family'] || _0xcc10b6[_0x34674b(0x46f)])) {
        const _0xe079c0 = _0xcc10b6[_0x34674b(0x341)] || _0xcc10b6['school'] || _0xcc10b6[_0x34674b(0x301)],
            _0x3d195d = _0xe079c0 || _0xcc10b6[_0x34674b(0x436)],
            _0x5af9ed = _0x2133e1 <= _0x2af7ee,
            _0x342b3f = Math[_0x34674b(0x2d3)](_0x51b251 * 0x64),
            _0x265e2c = _0x383822 - _0x2133e1,
            _0xdc5168 = _0x1de3ee > 0x0 ? Math['floor'](_0x265e2c / _0x1de3ee) : 0x0;
        if (_0xe079c0) {
            if (_0x383822 < 0x0) _0x27e6c9[_0x34674b(0x31b)] = 'You\x27re\x20asking\x20about\x20spending\x20KSh\x20' + _0x2133e1['toLocaleString']() + '\x20on\x20what\x20sounds\x20like\x20a\x20real\x20obligation\x20—\x20and\x20I\x27m\x20not\x20going\x20to\x20pretend\x20that\x27s\x20easy\x20to\x20hear\x20—\x20but\x20right\x20now\x20your\x20free\x20cash\x20is\x20already\x20negative\x20at\x20KSh\x20' + Math[_0x34674b(0x251)](_0x383822)[_0x34674b(0x454)]() + _0x34674b(0x3b6), _0x27e6c9['conclusion'] = _0x34674b(0x303);
            else !_0x5af9ed ? (_0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x20b) + _0x2133e1[_0x34674b(0x454)]() + _0x34674b(0x30e) + _0x2af7ee[_0x34674b(0x454)]() + ',\x20which\x20means\x20paying\x20it\x20in\x20full\x20today\x20will\x20eat\x20' + _0x342b3f + _0x34674b(0x1fb) + _0x265e2c[_0x34674b(0x454)]() + _0x34674b(0x3c6) + _0x1de3ee + _0x34674b(0x369) + _0xdc5168[_0x34674b(0x454)]() + _0x34674b(0x240) + (_0xdc5168 < 0xc8 ? 'is\x20dangerously\x20low' : 'is\x20manageable\x20but\x20leaves\x20zero\x20room\x20for\x20surprises') + '.', _0x27e6c9['conclusion'] = _0x34674b(0x3e9)) : (_0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x3db) + _0x2133e1[_0x34674b(0x454)]() + _0x34674b(0x2fd) + _0x265e2c['toLocaleString']() + _0x34674b(0x2dd) + _0xdc5168[_0x34674b(0x454)]() + _0x34674b(0x2e1) + (_0xdc5168 >= 0x1f4 ? 'is\x20still\x20comfortable' : 'is\x20tighter\x20than\x20before,\x20so\x20watch\x20the\x20small\x20daily\x20spends\x20this\x20week') + '.', _0x27e6c9[_0x34674b(0x281)] = 'Go\x20ahead\x20and\x20pay\x20it.\x20Log\x20it\x20immediately\x20and\x20recalculate\x20your\x20budget\x20for\x20the\x20remaining\x20' + _0x1de3ee + '\x20days.');
        } else {
            if (_0xcc10b6['stock'] && _0x6d6b1a) {
                const _0xfb5328 = Math[_0x34674b(0x3f9)](_0x383822 * 0.5);
                if (_0x2133e1 > _0x383822) _0x27e6c9[_0x34674b(0x31b)] = 'You\x20want\x20to\x20restock\x20for\x20KSh\x20' + _0x2133e1[_0x34674b(0x454)]() + '\x20but\x20your\x20entire\x20free\x20cash\x20buffer\x20is\x20only\x20KSh\x20' + _0x383822[_0x34674b(0x454)]() + _0x34674b(0x30c), _0x27e6c9[_0x34674b(0x281)] = _0x34674b(0x420) + _0xfb5328['toLocaleString']() + _0x34674b(0x24a);
                else _0x2133e1 > _0xfb5328 ? (_0x27e6c9['body'] = _0x34674b(0x306) + _0x2133e1[_0x34674b(0x454)]() + _0x34674b(0x23a) + _0x342b3f + _0x34674b(0x26b) + _0x1de3ee + _0x34674b(0x3a8), _0x27e6c9[_0x34674b(0x281)] = _0x34674b(0x3d8) + Math[_0x34674b(0x3f9)](_0x383822 * 0.6)[_0x34674b(0x454)]() + _0x34674b(0x3d3) + _0xfb5328[_0x34674b(0x454)]() + '\x20to\x20protect\x20liquidity.') : (_0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x3db) + _0x2133e1[_0x34674b(0x454)]() + _0x34674b(0x413) + _0x342b3f + _0x34674b(0x47a) + _0x265e2c['toLocaleString']() + _0x34674b(0x33b), _0x27e6c9[_0x34674b(0x281)] = 'Go\x20ahead.\x20Just\x20make\x20sure\x20you\x20track\x20what\x20you\x20bought,\x20at\x20what\x20price,\x20and\x20set\x20a\x20target\x20selling\x20price\x20before\x20the\x20goods\x20hit\x20the\x20shelf.');
            } else {
                if (_0x51f7f2 === 'CRITICAL' || _0x383822 <= 0x0) _0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x36b) + _0x2133e1[_0x34674b(0x454)]() + '\x20right\x20now,\x20but\x20I\x20have\x20to\x20be\x20straight\x20with\x20you\x20—\x20your\x20financial\x20position\x20is\x20critical.\x20Your\x20buffer\x20is\x20KSh\x20' + _0x383822[_0x34674b(0x454)]() + ',\x20which\x20means\x20there\x27s\x20almost\x20no\x20room\x20between\x20you\x20and\x20not\x20being\x20able\x20to\x20meet\x20your\x20obligations.\x20Spending\x20KSh\x20' + _0x2133e1[_0x34674b(0x454)]() + '\x20here\x20would\x20take\x20' + _0x342b3f + _0x34674b(0x2cc), _0x27e6c9[_0x34674b(0x281)] = _0x34674b(0x3d7);
                else !_0x5af9ed ? (_0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x3db) + _0x2133e1['toLocaleString']() + _0x34674b(0x43e) + _0x2af7ee['toLocaleString']() + _0x34674b(0x360) + (_0x1de3ee - 0x1) + _0x34674b(0x3a3) + _0xdc5168['toLocaleString']() + _0x34674b(0x2de) + _0x2af7ee['toLocaleString']() + _0x34674b(0x2c4), _0x27e6c9[_0x34674b(0x281)] = _0x51f7f2 === _0x34674b(0x2ab) ? _0x34674b(0x399) : _0x34674b(0x225) + Math[_0x34674b(0x3f9)](_0x2af7ee * 0.8)['toLocaleString']() + _0x34674b(0x23d)) : (_0x27e6c9['body'] = _0x34674b(0x3db) + _0x2133e1[_0x34674b(0x454)]() + _0x34674b(0x263) + _0x2af7ee[_0x34674b(0x454)]() + _0x34674b(0x2cf) + _0x342b3f + '%\x20of\x20your\x20buffer\x20—\x20that\x27s\x20a\x20manageable\x20spend.\x20After\x20this,\x20you\x27d\x20still\x20have\x20KSh\x20' + _0x265e2c['toLocaleString']() + _0x34674b(0x29d) + _0x1de3ee + _0x34674b(0x3e8) + _0xdc5168['toLocaleString']() + _0x34674b(0x302), _0x27e6c9['conclusion'] = 'This\x20is\x20fine.\x20Go\x20ahead,\x20log\x20it,\x20and\x20you\x27re\x20still\x20on\x20track.');
            }
        }
        _0x27e6c9[_0x34674b(0x46a)] = [{
            'label': 'My\x207-day\x20forecast',
            'q': _0x34674b(0x419)
        }, {
            'label': _0x34674b(0x2f2),
            'q': _0x34674b(0x258)
        }];
    } else {
        if (_0xcc10b6[_0x34674b(0x38d)]) {
            const _0x15ad99 = _0x2133e1 || 0x0,
                _0x378f5a = 0.15,
                _0x3ab6c2 = _0x15ad99 > 0x0 ? Math[_0x34674b(0x2d3)](_0x15ad99 * (0x1 + _0x378f5a)) : 0x0,
                _0x3ace33 = _0x1de3ee > 0x0 ? Math[_0x34674b(0x2d3)](_0x3ab6c2 / 0x1e) : 0x0;
            if (_0x51f7f2 === _0x34674b(0x42b)) _0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x1f7) + _0x383822[_0x34674b(0x454)]() + _0x34674b(0x368) + (_0x15ad99 > 0x0 ? _0x15ad99[_0x34674b(0x454)]() : _0x34674b(0x48a)) + '\x20loan\x20means\x20you\x27re\x20paying\x20back\x20KSh\x20' + (_0x15ad99 > 0x0 ? _0x3ab6c2[_0x34674b(0x454)]() : _0x34674b(0x3d9)) + '\x20—\x20and\x20that\x20repayment\x20will\x20come\x20directly\x20out\x20of\x20the\x20same\x20cash\x20that\x27s\x20already\x20stretched.', _0x27e6c9[_0x34674b(0x281)] = _0x34674b(0x2fb);
            else _0x51f7f2 === _0x34674b(0x44b) ? (_0x27e6c9['body'] = _0x34674b(0x362) + (_0x15ad99 > 0x0 ? _0x15ad99[_0x34674b(0x454)]() : _0x34674b(0x494)) + _0x34674b(0x3ec) + (_0x15ad99 > 0x0 ? _0x3ab6c2[_0x34674b(0x454)]() : _0x34674b(0x3bb)) + _0x34674b(0x41c), _0x27e6c9[_0x34674b(0x281)] = _0x15ad99 > 0x0 ? 'Only\x20take\x20this\x20loan\x20if\x20it\x20will\x20generate\x20at\x20least\x20KSh\x20' + Math[_0x34674b(0x2d3)](_0x3ab6c2 * 1.2)[_0x34674b(0x454)]() + _0x34674b(0x350) : 'Before\x20deciding,\x20calculate\x20exactly\x20what\x20you\x27ll\x20use\x20the\x20loan\x20for\x20and\x20whether\x20it\x20pays\x20back\x20more\x20than\x20115%\x20of\x20what\x20you\x20borrow.\x20If\x20it\x20doesn\x27t,\x20find\x20another\x20way.') : (_0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x25c) + (_0x15ad99 > 0x0 ? _0x34674b(0x337) + _0x15ad99[_0x34674b(0x454)]() + ',\x20you\x27d\x20be\x20repaying\x20roughly\x20KSh\x20' + _0x3ab6c2[_0x34674b(0x454)]() + _0x34674b(0x440) + _0x3ace33[_0x34674b(0x454)]() + _0x34674b(0x25b) : _0x34674b(0x213)) + _0x34674b(0x424), _0x27e6c9[_0x34674b(0x281)] = 'Go\x20ahead\x20if\x20the\x20purpose\x20is\x20productive.\x20Make\x20sure\x20the\x20repayment\x20fits\x20inside\x20your\x20daily\x20cap\x20without\x20pushing\x20you\x20into\x20moderate\x20risk.\x20If\x20it\x20does,\x20you\x27ve\x20done\x20the\x20math\x20right.');
            _0x27e6c9[_0x34674b(0x46a)] = [{
                'label': _0x34674b(0x27a),
                'q': 'What\x20loan\x20repayment\x20can\x20I\x20afford\x20per\x20month?'
            }, {
                'label': _0x34674b(0x253),
                'q': _0x34674b(0x396)
            }];
        } else {
            if (_0xcc10b6[_0x34674b(0x46b)]) {
                const _0x5b819c = _0x2133e1 || 0x0,
                    _0x77a88d = Math[_0x34674b(0x3f9)](_0x383822 * 0.25),
                    _0xdf1998 = _0x5b819c > 0x0 ? Math[_0x34674b(0x3f9)](_0x77a88d / _0x5b819c) : 0x0;
                if (_0x51f7f2 === _0x34674b(0x42b) || _0x383822 < 0x1388) _0x27e6c9[_0x34674b(0x31b)] = 'Wanting\x20to\x20grow\x20the\x20team\x20shows\x20ambition,\x20and\x20that\x27s\x20good.\x20But\x20right\x20now\x20your\x20buffer\x20is\x20KSh\x20' + _0x383822[_0x34674b(0x454)]() + _0x34674b(0x37b), _0x27e6c9['conclusion'] = 'Don\x27t\x20hire\x20right\x20now.\x20The\x20business\x20isn\x27t\x20stable\x20enough\x20to\x20guarantee\x20a\x20consistent\x20wage.\x20Get\x20the\x20buffer\x20above\x20KSh\x2015,000\x20first,\x20then\x20revisit.';
                else _0x5b819c > 0x0 ? _0x5b819c > _0x77a88d ? (_0x27e6c9[_0x34674b(0x31b)] = 'You\x27re\x20thinking\x20about\x20bringing\x20someone\x20on\x20at\x20KSh\x20' + _0x5b819c[_0x34674b(0x454)]() + '\x20per\x20month.\x20Based\x20on\x20your\x20current\x20buffer\x20of\x20KSh\x20' + _0x383822[_0x34674b(0x454)]() + _0x34674b(0x3f3) + _0x77a88d[_0x34674b(0x454)]() + _0x34674b(0x243) + _0x5b819c[_0x34674b(0x454)]() + ',\x20this\x20hire\x20would\x20take\x20' + Math[_0x34674b(0x2d3)](_0x5b819c / _0x383822 * 0x64) + _0x34674b(0x3de), _0x27e6c9[_0x34674b(0x281)] = _0x34674b(0x3e3) + _0x77a88d['toLocaleString']() + _0x34674b(0x20f)) : (_0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x337) + _0x5b819c[_0x34674b(0x454)]() + '\x20per\x20month,\x20this\x20hire\x20sits\x20within\x20your\x20safe\x20wage\x20budget\x20of\x20KSh\x20' + _0x77a88d['toLocaleString']() + _0x34674b(0x22c), _0x27e6c9['conclusion'] = _0x34674b(0x2b4)) : (_0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x35c) + _0x383822[_0x34674b(0x454)]() + _0x34674b(0x2d8) + _0x77a88d[_0x34674b(0x454)]() + _0x34674b(0x2d9) + (_0x51f7f2 === _0x34674b(0x2ab) ? _0x34674b(0x39a) : _0x34674b(0x25a)) + '.', _0x27e6c9[_0x34674b(0x281)] = _0x34674b(0x22d), _0x27e6c9[_0x34674b(0x46a)] = [{
                    'label': 'Calculate\x20for\x20a\x20specific\x20wage',
                    'q': 'Can\x20I\x20hire\x20someone\x20at\x20KSh\x208000\x20per\x20month?'
                }]);
            } else {
                if (_0xcc10b6['tax']) _0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x2ed) + _0x383822['toLocaleString']() + _0x34674b(0x318) + (_0x51f7f2 === _0x34674b(0x2ab) ? 'moderate' : _0x34674b(0x405)) + '\x20risk.\x20The\x20other\x20thing\x20worth\x20knowing:\x20if\x20you\x27re\x20on\x20the\x20turnover\x20tax\x20regime\x20(for\x20businesses\x20under\x20KSh\x201M\x20annual\x20revenue),\x20the\x20rate\x20is\x20just\x201.5%\x20of\x20gross\x20sales\x20—\x20which\x20is\x20often\x20much\x20lower\x20than\x20people\x20expect.', _0x27e6c9[_0x34674b(0x281)] = 'File\x20on\x20time,\x20every\x20time,\x20even\x20if\x20you\x20can\x27t\x20pay\x20everything\x20immediately.\x20A\x20filed-but-unpaid\x20return\x20is\x20better\x20than\x20an\x20unfiled\x20one.\x20If\x20you\x27re\x20behind,\x20go\x20to\x20iTax\x20and\x20file\x20now\x20—\x20late\x20is\x20still\x20better\x20than\x20never.', _0x27e6c9[_0x34674b(0x46a)] = [{
                    'label': _0x34674b(0x2e0),
                    'q': 'How\x20much\x20should\x20I\x20set\x20aside\x20for\x20taxes\x20each\x20month?'
                }];
                else {
                    if (_0xcc10b6[_0x34674b(0x324)]) {
                        const _0x48c6be = _0x2133e1 || 0x0,
                            _0x1560ac = _0x48c6be > 0x0 ? Math['round'](_0x48c6be / _0x383822 * 0x64) : 0x0;
                        _0x27e6c9[_0x34674b(0x31b)] = _0x48c6be > 0x0 ? _0x34674b(0x417) + _0x48c6be[_0x34674b(0x454)]() + _0x34674b(0x236) + _0x1560ac + _0x34674b(0x361) + _0x383822[_0x34674b(0x454)]() + '\x20free\x20cash.\x20The\x20question\x20that\x20matters\x20is\x20payback\x20period:\x20how\x20many\x20days\x20or\x20months\x20will\x20this\x20asset\x20take\x20to\x20pay\x20for\x20itself\x20through\x20the\x20revenue\x20it\x20generates\x20or\x20the\x20costs\x20it\x20saves?\x20If\x20it\x27s\x20within\x203\x20months,\x20it\x27s\x20a\x20smart\x20buy.\x20If\x20it\x27s\x206\x20months\x20or\x20longer,\x20you\x20need\x20to\x20think\x20about\x20whether\x20your\x20cash\x20position\x20can\x20stay\x20healthy\x20through\x20that\x20whole\x20payback\x20window.' : _0x34674b(0x3a1) + _0x383822['toLocaleString']() + ',\x20and\x20any\x20asset\x20purchase\x20that\x20takes\x20more\x20than\x2040%\x20of\x20that\x20in\x20one\x20go\x20needs\x20serious\x20justification.';
                        if (_0x51f7f2 === _0x34674b(0x42b)) _0x27e6c9[_0x34674b(0x281)] = 'This\x20is\x20the\x20wrong\x20time\x20for\x20a\x20capital\x20purchase.\x20Your\x20operating\x20position\x20is\x20critical\x20—\x20protect\x20cash\x20liquidity\x20first.\x20Revisit\x20this\x20once\x20risk\x20drops\x20to\x20moderate\x20or\x20low.';
                        else _0x48c6be > _0x383822 * 0.5 ? _0x27e6c9['conclusion'] = _0x34674b(0x2f6) + _0x1560ac + _0x34674b(0x389) : _0x27e6c9['conclusion'] = _0x34674b(0x23e) + Math[_0x34674b(0x2d3)](_0x383822 * 0.4)[_0x34674b(0x454)]() + _0x34674b(0x2c9);
                        _0x27e6c9[_0x34674b(0x46a)] = [{
                            'label': 'Can\x20I\x20use\x20a\x20loan\x20for\x20this',
                            'q': _0x34674b(0x2e8)
                        }];
                    } else {
                        if (_0xcc10b6[_0x34674b(0x45f)]) {
                            const _0x4a2c3e = _0x51f7f2 === _0x34674b(0x2ab) ? 0.15 : _0x51f7f2 === 'MODERATE' ? 0.07 : 0x0,
                                _0x1ffe4e = Math[_0x34674b(0x3f9)](_0x383822 * _0x4a2c3e);
                            _0x51f7f2 === 'CRITICAL' ? (_0x27e6c9[_0x34674b(0x31b)] = 'The\x20instinct\x20to\x20save\x20is\x20a\x20good\x20one\x20—\x20but\x20saving\x20while\x20your\x20operating\x20buffer\x20is\x20negative\x20or\x20critical\x20is\x20like\x20filling\x20a\x20bucket\x20that\x20has\x20a\x20hole\x20in\x20it.\x20Right\x20now,\x20every\x20shilling\x20needs\x20to\x20stay\x20in\x20circulation\x20to\x20keep\x20the\x20business\x20or\x20household\x20alive.\x20Locking\x20money\x20away\x20in\x20a\x20savings\x20account\x20when\x20you\x20might\x20need\x20it\x20tomorrow\x20for\x20rent\x20or\x20stock\x20is\x20a\x20mistake\x20most\x20financial\x20advisors\x20will\x20tell\x20you\x20directly.', _0x27e6c9[_0x34674b(0x281)] = _0x34674b(0x265)) : (_0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x2ee) + _0x383822['toLocaleString']() + _0x34674b(0x35e) + _0x51f7f2 + ',\x20you\x20have\x20room\x20to\x20start\x20saving.\x20A\x20realistic\x20savings\x20rate\x20at\x20your\x20current\x20position\x20is\x20around\x20' + Math['round'](_0x4a2c3e * 0x64) + _0x34674b(0x382) + _0x1ffe4e[_0x34674b(0x454)]() + _0x34674b(0x3a7), _0x27e6c9['conclusion'] = 'Start\x20with\x20KSh\x20' + _0x1ffe4e[_0x34674b(0x454)]() + _0x34674b(0x291) + Math[_0x34674b(0x2d3)](_0x6515d6 * 0x3)[_0x34674b(0x454)]() + '.');
                        } else {
                            if (_0xcc10b6[_0x34674b(0x1f6)]) _0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x279), _0x27e6c9[_0x34674b(0x281)] = _0x34674b(0x373), _0x27e6c9[_0x34674b(0x46a)] = [{
                                'label': 'Calculate\x20markup\x20for\x20an\x20item',
                                'q': _0x34674b(0x443)
                            }];
                            else {
                                if (_0xcc10b6[_0x34674b(0x33c)]) _0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x255) + _0x383822[_0x34674b(0x454)]() + _0x34674b(0x347) + _0x51f7f2 + '.\x20' + (_0x51f7f2 === _0x34674b(0x2ab) ? _0x34674b(0x2ba) : _0x34674b(0x325)) + '\x20The\x20rule\x20is\x20simple:\x20invest\x20only\x20what\x20you\x20can\x20afford\x20to\x20lose\x20access\x20to\x20for\x206–12\x20months.\x20That\x27s\x20not\x20money\x20you\x20might\x20need\x20for\x20rent\x20or\x20stock.\x20For\x20most\x20people\x20at\x20your\x20position,\x20a\x20SACCO\x20is\x20the\x20most\x20practical\x20start\x20—\x20low\x20risk,\x20earns\x2010–14%\x20annually,\x20and\x20you\x20can\x20borrow\x20against\x20it.\x20NSE\x20shares\x20need\x20patience\x20and\x20a\x20bigger\x20buffer.\x20Crypto\x20is\x20speculation,\x20not\x20investment.', _0x27e6c9[_0x34674b(0x281)] = _0x51f7f2 === 'LOW' ? _0x34674b(0x326) + Math[_0x34674b(0x2d3)](_0x6515d6 * 0x3)['toLocaleString']() + _0x34674b(0x380) : _0x34674b(0x239);
                                else {
                                    if (_0xcc10b6[_0x34674b(0x3ab)] || _0xcc10b6['cashflow']) {
                                        const _0x3e3660 = _0x31ffe8 >= 0x0 ? _0x34674b(0x293) + _0x31ffe8[_0x34674b(0x454)]() + _0x34674b(0x332) : _0x34674b(0x2b2) + Math['abs'](_0x31ffe8)['toLocaleString']() + _0x34674b(0x488),
                                            _0x27ba08 = _0x2af7ee <= 0x0 ? _0x34674b(0x268) : _0x2af7ee < 0x12c ? 'your\x20daily\x20budget\x20is\x20very\x20tight\x20at\x20KSh\x20' + _0x2af7ee[_0x34674b(0x454)]() + '\x20—\x20enough\x20for\x20basics\x20only' : _0x34674b(0x427) + _0x2af7ee[_0x34674b(0x454)]() + _0x34674b(0x3bc);
                                        _0x27e6c9['body'] = _0x34674b(0x45c) + _0x383822[_0x34674b(0x454)]() + _0x34674b(0x3ad) + _0x1de3ee + _0x34674b(0x32f) + _0x27ba08 + '.\x20If\x20you\x20continue\x20at\x20your\x20current\x20spending\x20pace,\x20you\x27ll\x20' + _0x3e3660 + _0x34674b(0x3d4) + _0x51f7f2 + '\x20—\x20' + (_0x51f7f2 === _0x34674b(0x2ab) ? _0x34674b(0x336) : _0x51f7f2 === _0x34674b(0x44b) ? _0x34674b(0x2fa) : _0x34674b(0x212)) + '.', _0x27e6c9['conclusion'] = _0x51f7f2 === _0x34674b(0x2ab) ? _0x34674b(0x204) + _0x2af7ee['toLocaleString']() + _0x34674b(0x3f1) : _0x51f7f2 === _0x34674b(0x44b) ? _0x34674b(0x3cf) : _0x34674b(0x2a1), _0x27e6c9[_0x34674b(0x46a)] = [{
                                            'label': 'What\x20should\x20I\x20cut',
                                            'q': _0x34674b(0x447)
                                        }, {
                                            'label': _0x34674b(0x492),
                                            'q': _0x34674b(0x30b)
                                        }, {
                                            'label': _0x34674b(0x2b5),
                                            'q': 'Give\x20me\x20a\x207-day\x20cash\x20projection'
                                        }];
                                    } else {
                                        if (_0xcc10b6['habit']) {
                                            const _0x25dd17 = _0x2af7ee * 0x7,
                                                _0x2a341f = _0x1bc4ee > 0x0 ? Math[_0x34674b(0x2d3)](_0x6515d6 / _0x1bc4ee * 0x64) : 0x0;
                                            _0x27e6c9[_0x34674b(0x31b)] = 'Your\x20safe\x20daily\x20spending\x20limit\x20is\x20KSh\x20' + _0x2af7ee['toLocaleString']() + '\x20—\x20that\x27s\x20what\x20you\x20can\x20spend\x20per\x20day\x20without\x20endangering\x20your\x20ability\x20to\x20pay\x20obligations\x20by\x20end\x20of\x20month.\x20Over\x20a\x20week,\x20that\x27s\x20KSh\x20' + _0x25dd17[_0x34674b(0x454)]() + _0x34674b(0x402) + _0x2a341f + _0x34674b(0x28f) + (0x64 - _0x2a341f) + _0x34674b(0x271) + (_0x2a341f > 0x46 ? 'That\x27s\x20a\x20high\x20obligation\x20load\x20—\x20most\x20of\x20your\x20money\x20is\x20already\x20spoken\x20for\x20before\x20the\x20month\x20starts,\x20which\x20leaves\x20very\x20little\x20room\x20for\x20anything\x20unexpected.' : 'That\x27s\x20a\x20manageable\x20split\x20—\x20you\x20have\x20real\x20discretionary\x20room\x20if\x20you\x27re\x20disciplined\x20about\x20daily\x20spend.'), _0x27e6c9['conclusion'] = _0x34674b(0x33a) + _0x2af7ee[_0x34674b(0x454)]() + _0x34674b(0x370);
                                        } else {
                                            if (_0xcc10b6[_0x34674b(0x259)]) _0x27e6c9['body'] = 'Profit\x20growth\x20in\x20a\x20small\x20' + (_0x6d6b1a ? 'business' : _0x34674b(0x429)) + '\x20comes\x20from\x20two\x20directions\x20—\x20more\x20money\x20coming\x20in,\x20or\x20less\x20going\x20out\x20—\x20and\x20the\x20fastest\x20wins\x20are\x20usually\x20on\x20the\x20cost\x20side,\x20not\x20the\x20sales\x20side.\x20Looking\x20at\x20your\x20current\x20position:\x20with\x20a\x20buffer\x20of\x20KSh\x20' + _0x383822[_0x34674b(0x454)]() + _0x34674b(0x35e) + _0x51f7f2 + ',\x20' + (_0x51f7f2 === _0x34674b(0x42b) ? 'the\x20first\x20move\x20has\x20to\x20be\x20expense\x20reduction\x20—\x20there\x27s\x20no\x20point\x20chasing\x20new\x20sales\x20when\x20the\x20current\x20cost\x20structure\x20is\x20already\x20unsustainable' : _0x34674b(0x408)) + _0x34674b(0x330), _0x27e6c9[_0x34674b(0x281)] = _0x6d6b1a ? 'Start\x20with\x20a\x20margin\x20audit:\x20check\x20your\x20top\x205\x20products\x20and\x20identify\x20which\x20ones\x20actually\x20make\x20money\x20after\x20cost.\x20Then\x20cut\x20or\x20reprice\x20the\x20ones\x20that\x20don\x27t.\x20Once\x20margins\x20are\x20healthy,\x20scaling\x20sales\x20actually\x20builds\x20profit\x20—\x20otherwise\x20you\x20just\x20sell\x20more\x20to\x20make\x20the\x20same.' : 'Look\x20at\x20your\x20biggest\x20monthly\x20outflow\x20and\x20ask\x20whether\x20you\x20can\x20reduce\x20it\x20by\x2010–15%.\x20That\x27s\x20faster\x20than\x20finding\x20new\x20income.\x20Then\x20identify\x20any\x20skill\x20or\x20service\x20you\x20can\x20monetise\x20on\x20the\x20side\x20—\x20in\x20Nairobi,\x20one\x20extra\x20income\x20stream\x20of\x20even\x20KSh\x203,000–5,000\x20monthly\x20changes\x20your\x20risk\x20profile\x20significantly.';
                                            else {
                                                if (_0xcc10b6[_0x34674b(0x436)] && _0x2133e1 === 0x0) _0x27e6c9['body'] = _0x34674b(0x2c5) + _0x383822[_0x34674b(0x454)]() + _0x34674b(0x2a2), _0x27e6c9[_0x34674b(0x281)] = _0x34674b(0x28c);
                                                else {
                                                    if (_0xcc10b6[_0x34674b(0x40d)]) {
                                                        const _0x13697a = _0x2133e1 || _0x2af7ee;
                                                        _0x27e6c9[_0x34674b(0x31b)] = _0x34674b(0x469) + _0x13697a[_0x34674b(0x454)]() + '\x20from\x20your\x20account' + (_0x13697a > _0x2af7ee ? _0x34674b(0x2b1) + _0x2af7ee['toLocaleString']() + _0x34674b(0x2cb) : _0x34674b(0x295)) + '\x20The\x20real\x20question\x20with\x20withdrawals\x20is\x20always:\x20what\x20is\x20this\x20money\x20for?\x20Cash\x20has\x20a\x20way\x20of\x20disappearing\x20faster\x20than\x20mobile\x20money\x20—\x20once\x20it\x27s\x20in\x20your\x20hand,\x20it\x27s\x20psychologically\x20easier\x20to\x20spend\x20on\x20things\x20you\x20wouldn\x27t\x20approve\x20through\x20M-Pesa.', _0x27e6c9[_0x34674b(0x281)] = _0x13697a > _0x2af7ee ? 'Only\x20withdraw\x20what\x20you\x20have\x20a\x20specific,\x20immediate\x20purpose\x20for.\x20If\x20you\x20need\x20KSh\x20' + _0x13697a[_0x34674b(0x454)]() + ',\x20have\x20a\x20clear\x20breakdown\x20of\x20where\x20it\x27s\x20going\x20before\x20it\x20hits\x20your\x20hand.' : _0x34674b(0x278);
                                                    } else _0x27e6c9['body'] = _0x34674b(0x460) + _0x383822['toLocaleString']() + _0x34674b(0x2a3) + _0x2af7ee[_0x34674b(0x454)]() + ',\x20risk\x20is\x20' + _0x51f7f2 + ',\x20and\x20you\x20have\x20' + _0x1de3ee + _0x34674b(0x3f8) + (_0x31ffe8 >= 0x0 ? 'On\x20current\x20trajectory\x20you\x27ll\x20end\x20the\x20month\x20with\x20KSh\x20' + _0x31ffe8[_0x34674b(0x454)]() + '\x20remaining.' : 'On\x20current\x20trajectory\x20you\x27ll\x20be\x20short\x20by\x20KSh\x20' + Math[_0x34674b(0x251)](_0x31ffe8)['toLocaleString']() + _0x34674b(0x3e2)) + _0x34674b(0x3a2), _0x27e6c9['conclusion'] = 'Ask\x20me\x20about\x20a\x20specific\x20decision\x20—\x20a\x20purchase,\x20a\x20loan,\x20hiring,\x20pricing,\x20saving,\x20or\x20anything\x20money-related\x20—\x20and\x20I\x27ll\x20give\x20you\x20a\x20direct\x20answer\x20based\x20on\x20your\x20actual\x20numbers.', _0x27e6c9[_0x34674b(0x46a)] = [{
                                                        'label': _0x34674b(0x320),
                                                        'q': 'Give\x20me\x20a\x20full\x20status\x20summary'
                                                    }, {
                                                        'label': 'What\x20should\x20I\x20do\x20today',
                                                        'q': _0x34674b(0x411)
                                                    }, {
                                                        'label': _0x34674b(0x3e6),
                                                        'q': _0x34674b(0x2b6)
                                                    }];
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    const _0x35d7b9 = _0x329a49(_0x27e6c9);
    _0x3b2498[_0x34674b(0x2d2)] += '\x0a\x20\x20\x20\x20<div\x20style=\x22text-align:right;margin-bottom:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20<span\x20class=\x22user-msg\x22\x20style=\x22font-size:14px;display:inline-block;\x22>' + _0x259715 + _0x34674b(0x3b0) + _0x35d7b9 + _0x34674b(0x37a), _0xfba4d7[_0x34674b(0x305)] = '', _0x3b2498[_0x34674b(0x2a6)] = _0x3b2498['scrollHeight'];
}

function nav(_0x3f6d85) {
    const _0x16e729 = _0x2743b7,
        _0x5dd81b = document[_0x16e729(0x376)](_0x16e729(0x3aa)),
        _0x34f465 = getFin();
    updateHeader(_0x34f465);
    if (_0x3f6d85 === _0x16e729(0x32a)) {
        const _0x26c74d = calculateInsolvencyRisk(),
            _0xa8bb3d = _0x34f465[_0x16e729(0x297)][_0x16e729(0x3ba)](_0x1909ed => _0x1909ed[_0x16e729(0x357)] > 0x0);
        _0x5dd81b['innerHTML'] = _0x16e729(0x2d0) + _0x26c74d[_0x16e729(0x3e7)] + _0x16e729(0x296) + _0x26c74d[_0x16e729(0x3e7)] + '\x22>' + _0x26c74d['label'] + '</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22risk-heatmap\x20overflow-hidden\x22><div\x20class=\x22bg-white/20\x20h-full\x22\x20style=\x22width:\x20' + (0x64 - _0x26c74d[_0x16e729(0x364)]) + '%\x22></div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-[9px]\x20mt-2\x20opacity-50\x20italic\x22>Based\x20on\x207D\x20Velocity\x20vs.\x20Projected\x20Ceiling.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22glass\x20p-6\x20border-l-4\x20border-red-500\x20bg-red-950/10\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-[10px]\x20text-red-500\x20font-bold\x20uppercase\x20tracking-widest\x20mb-4\x22>Leak\x20Finder</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22space-y-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0xa8bb3d[_0x16e729(0x28b)] > 0x0 ? _0xa8bb3d[_0x16e729(0x21b)](_0x49b66d => '<div\x20class=\x22flex\x20justify-between\x20border-b\x20border-red-900/30\x20py-2\x22><span\x20class=\x22text-xs\x20uppercase\x22>' + _0x49b66d['label'] + '</span><span\x20class=\x22leak-red\x20font-bold\x22>+KSh\x20' + _0x49b66d[_0x16e729(0x357)]['toLocaleString']() + _0x16e729(0x390))[_0x16e729(0x34b)]('') : '<p\x20class=\x22text-[10px]\x20opacity-30\x20italic\x22>No\x20budget\x20variances\x20detected.</p>') + _0x16e729(0x3b4) + _0x34f465[_0x16e729(0x3fe)][_0x16e729(0x454)]() + _0x16e729(0x333), setTimeout(() => renderChart(), 0x64);
    }
    if (_0x3f6d85 === _0x16e729(0x441)) {
        let _0x9a98a6 = _0x34f465[_0x16e729(0x297)][_0x16e729(0x21b)](_0x4e64c4 => _0x16e729(0x495) + _0x4e64c4['label'] + _0x16e729(0x22a) + _0x4e64c4[_0x16e729(0x2cd)][_0x16e729(0x454)]() + _0x16e729(0x39b) + _0x4e64c4[_0x16e729(0x461)]['toLocaleString']() + _0x16e729(0x42c) + (_0x4e64c4[_0x16e729(0x338)] <= 0x0 ? _0x16e729(0x252) : 'text-yellow-500') + _0x16e729(0x3b9) + (_0x4e64c4[_0x16e729(0x338)] <= 0x0 ? _0x16e729(0x1f8) : 'KSh\x20' + _0x4e64c4[_0x16e729(0x338)]['toLocaleString']()) + _0x16e729(0x44d) + (_0x4e64c4['variance'] > 0x0 ? '<p\x20class=\x22text-[9px]\x20text-red-500\x20font-bold\x20uppercase\x20tracking-tighter\x22>+' + _0x4e64c4[_0x16e729(0x357)]['toLocaleString']() + _0x16e729(0x22b) : '') + _0x16e729(0x384))[_0x16e729(0x34b)]('');
        _0x5dd81b[_0x16e729(0x2d2)] = '<div\x20class=\x22glass\x20p-6\x20neon-border\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20mb-6\x22><h3\x20class=\x22text-2xl\x20font-black\x20uppercase\x20italic\x22>Mandatory\x20Reserve</h3><button\x20onclick=\x22document.getElementById(\x27setup-overlay\x27).classList.remove(\x27hidden\x27)\x22\x20class=\x22text-[10px]\x20border\x20border-slate-700\x20px-2\x20py-1\x22>EDIT\x20LIST</button></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x9a98a6 || _0x16e729(0x3a4)) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22factoryReset()\x22\x20class=\x22mt-20\x20text-red-900\x20text-[10px]\x20font-bold\x20uppercase\x20tracking-widest\x20hover:text-red-500\x22>Full\x20System\x20Wipe</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>';
    }
    _0x3f6d85 === _0x16e729(0x3ac) && (_0x5dd81b[_0x16e729(0x2d2)] = _0x16e729(0x458), document[_0x16e729(0x376)](_0x16e729(0x36f))[_0x16e729(0x344)](_0x16e729(0x450), _0x4a68cb => {
        const _0x3f3d73 = _0x16e729;
        if (_0x4a68cb['key'] === _0x3f3d73(0x21a)) handleAsk();
    }));
    if (_0x3f6d85 === _0x16e729(0x40c)) {
        let _0x3f9a5a = state[_0x16e729(0x26f)][_0x16e729(0x21b)](_0x4d3220 => {
            const _0x564b41 = _0x16e729,
                _0x3190ff = _0x4d3220[_0x564b41(0x2cd)]['toLocaleString']();
            return '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22border-b\x20border-slate-800\x20hover:bg-slate-900/50\x20transition-colors\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x20font-mono\x20text-xs\x20opacity-60\x20whitespace-nowrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + new Date(_0x4d3220['id'])['toLocaleDateString']('en-KE') + _0x564b41(0x35b) + _0x4d3220[_0x564b41(0x20d)] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20items-center\x20gap-2\x20mt-2\x20text-xs\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22bg-green-900/40\x20text-green-400\x20px-2\x20py-0.5\x20rounded\x20font-bold\x22>' + _0x4d3220[_0x564b41(0x2b8)] + _0x564b41(0x465) + _0x4d3220[_0x564b41(0x2e7)] + _0x564b41(0x215) + _0x3190ff + _0x564b41(0x3c2) + _0x3190ff + _0x564b41(0x359);
        })[_0x16e729(0x34b)]('');
        _0x5dd81b[_0x16e729(0x2d2)] = _0x16e729(0x2f1) + (_0x3f9a5a || _0x16e729(0x352)) + _0x16e729(0x45b) + state[_0x16e729(0x26f)]['length'] + _0x16e729(0x386);
    }
}

function renderChart() {
    const _0x193c0a = _0x2743b7,
        _0x492ab9 = document[_0x193c0a(0x376)](_0x193c0a(0x2bc))?.['getContext']('2d');
    if (!_0x492ab9) return;
    const _0x12ec72 = getFin(),
        _0x32d657 = new Date();
    let _0x4db2a5 = [],
        _0x51e730 = [],
        _0x2c5674 = [],
        _0x56772a = [];
    for (let _0x348902 = 0x6; _0x348902 >= 0x0; _0x348902--) {
        const _0x1fc90e = new Date();
        _0x1fc90e[_0x193c0a(0x474)](_0x32d657[_0x193c0a(0x317)]() - _0x348902), _0x4db2a5[_0x193c0a(0x23f)](_0x1fc90e[_0x193c0a(0x349)]('en-KE', {
            'weekday': _0x193c0a(0x39e)
        }));
        let _0x25e9c7 = 0x0,
            _0x9cd0bd = 0x0;
        state[_0x193c0a(0x26f)]['forEach'](_0x2b5465 => {
            const _0x2588b4 = _0x193c0a;
            if (new Date(_0x2b5465['id'])[_0x2588b4(0x280)]() === _0x1fc90e[_0x2588b4(0x280)]()) {
                if (isLiquid(_0x2b5465[_0x2588b4(0x2e7)])) _0x25e9c7 += _0x2b5465[_0x2588b4(0x2cd)];
                if (isLiquid(_0x2b5465[_0x2588b4(0x2b8)])) _0x9cd0bd += _0x2b5465[_0x2588b4(0x2cd)];
            }
        }), _0x51e730['push'](_0x25e9c7), _0x2c5674[_0x193c0a(0x23f)](_0x9cd0bd), _0x56772a[_0x193c0a(0x23f)](_0x12ec72[_0x193c0a(0x425)]);
    }
    if (window[_0x193c0a(0x2c1)]) window[_0x193c0a(0x2c1)][_0x193c0a(0x3fc)]();
    window[_0x193c0a(0x2c1)] = new Chart(_0x492ab9, {
        'type': _0x193c0a(0x2f7),
        'data': {
            'labels': _0x4db2a5,
            'datasets': [{
                'label': _0x193c0a(0x40a),
                'data': _0x56772a,
                'borderColor': _0x193c0a(0x2ad),
                'borderDash': [0x5, 0x5],
                'pointRadius': 0x0,
                'fill': ![]
            }, {
                'label': _0x193c0a(0x205),
                'data': _0x51e730,
                'borderColor': '#ef4444',
                'backgroundColor': 'rgba(239,\x2068,\x2068,\x200.1)',
                'fill': !![],
                'tension': 0.4
            }, {
                'label': _0x193c0a(0x3c3),
                'data': _0x2c5674,
                'borderColor': '#4ade80',
                'backgroundColor': 'rgba(74,\x20222,\x20128,\x200.1)',
                'fill': !![],
                'tension': 0.4
            }]
        },
        'options': {
            'responsive': !![],
            'maintainAspectRatio': ![],
            'plugins': {
                'legend': {
                    'labels': {
                        'color': '#94a3b8',
                        'font': {
                            'size': 0xa
                        }
                    }
                }
            }
        }
    });
}

function updateHeader(_0x24eccf) {
    const _0x1b79f0 = _0x2743b7,
        _0x708f03 = document[_0x1b79f0(0x376)](_0x1b79f0(0x2b0));
    _0x708f03[_0x1b79f0(0x2d2)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22glass\x20p-4\x20border-l-4\x20border-blue-500\x22><p\x20class=\x22text-[10px]\x20opacity-40\x20uppercase\x22>Total\x20Liquid</p><p\x20class=\x22text-xl\x20font-bold\x22>KSh\x20' + _0x24eccf[_0x1b79f0(0x377)][_0x1b79f0(0x454)]() + _0x1b79f0(0x47e) + _0x24eccf[_0x1b79f0(0x338)][_0x1b79f0(0x454)]() + _0x1b79f0(0x433) + _0x24eccf['daysRem'] + _0x1b79f0(0x36e) + Math[_0x1b79f0(0x229)](0x0, _0x24eccf['daily'])['toFixed'](0x0) + _0x1b79f0(0x329);
    const _0x5ec304 = document['getElementById']('header-verdict');
    _0x5ec304[_0x1b79f0(0x321)] = _0x24eccf[_0x1b79f0(0x3fe)] < 0x0 ? '⚠️\x20INSOLVENT' : _0x1b79f0(0x2c3), _0x5ec304[_0x1b79f0(0x2c8)] = _0x24eccf['safeCash'] < 0x0 ? _0x1b79f0(0x421) : _0x1b79f0(0x430);
}

function isLiquid(_0x46315c) {
    const _0x544f2e = _0x2743b7;
    if (!_0x46315c) return ![];
    const _0x234b22 = [_0x544f2e(0x24f), _0x544f2e(0x2d7), 'Bank\x20Account', 'Savings', 'Bank\x20/\x20M-Pesa', _0x544f2e(0x34a), _0x544f2e(0x218)];
    return _0x234b22[_0x544f2e(0x3d2)](_0x46315c);
}

function getBalance(_0x7b0793) {
    const _0x5930ba = _0x2743b7;
    let _0x3f2bc2 = 0x0;
    state[_0x5930ba(0x26f)][_0x5930ba(0x3e5)](_0xc64c1 => {
        const _0x1cdaf0 = _0x5930ba;
        if (_0xc64c1[_0x1cdaf0(0x2b8)] === _0x7b0793) _0x3f2bc2 += _0xc64c1['amount'];
        if (_0xc64c1['credit'] === _0x7b0793) _0x3f2bc2 -= _0xc64c1[_0x1cdaf0(0x2cd)];
    });
    const _0x520023 = ['Cash', _0x5930ba(0x2d7), _0x5930ba(0x32e), _0x5930ba(0x48f), 'Bank\x20/\x20M-Pesa', _0x5930ba(0x34a), _0x5930ba(0x218), _0x5930ba(0x315), _0x5930ba(0x27d)];
    return _0x520023['includes'](_0x7b0793) ? _0x3f2bc2 : -_0x3f2bc2;
}

function showHelpModal() {
    const _0x59ea77 = _0x2743b7,
        _0x2c76f9 = document[_0x59ea77(0x376)](_0x59ea77(0x3f4));
    _0x2c76f9[_0x59ea77(0x323)][_0x59ea77(0x3a5)](_0x59ea77(0x35a)), _0x2c76f9[_0x59ea77(0x323)][_0x59ea77(0x25e)](_0x59ea77(0x286));
}

function closeHelpModal() {
    const _0x2e95e0 = _0x2743b7,
        _0x33a2bc = document[_0x2e95e0(0x376)](_0x2e95e0(0x3f4));
    _0x33a2bc[_0x2e95e0(0x323)][_0x2e95e0(0x25e)]('hidden'), _0x33a2bc[_0x2e95e0(0x323)]['remove'](_0x2e95e0(0x286));
}

function showTxModal() {
    const _0x4c6ff4 = _0x2743b7,
        _0x40266e = document[_0x4c6ff4(0x376)](_0x4c6ff4(0x2a9)),
        _0x22222a = document['getElementById']('tx-credit');
    _0x40266e[_0x4c6ff4(0x2d2)] = _0x22222a[_0x4c6ff4(0x2d2)] = '';
    const _0x39ee33 = state['user'][_0x4c6ff4(0x38a)] === 'personal',
        _0xc38149 = (_0x59a71e, _0x5d55ea, _0x403597) => {
            const _0x444551 = _0x4c6ff4,
                _0x3b98a0 = document[_0x444551(0x476)]('optgroup');
            return _0x3b98a0[_0x444551(0x247)] = '●\x20' + _0x59a71e, _0x3b98a0[_0x444551(0x3cd)]['color'] = _0x5d55ea, _0x403597[_0x444551(0x3e5)](_0x2d9a8d => {
                const _0xeb3339 = _0x444551,
                    _0x4da6e5 = new Option(_0x2d9a8d, _0x2d9a8d);
                _0x3b98a0[_0xeb3339(0x403)](_0x4da6e5);
            }), _0x3b98a0;
        };
    if (_0x39ee33) {
        const _0x47d67d = _0x33acde => {
            const _0x32ae90 = _0x4c6ff4;
            _0x33acde['appendChild'](_0xc38149(_0x32ae90(0x484), '#22c55e', ['Cash', _0x32ae90(0x2d7), _0x32ae90(0x32e), _0x32ae90(0x48f)])), _0x33acde['appendChild'](_0xc38149(_0x32ae90(0x246), '#22c55e', [_0x32ae90(0x3dc), _0x32ae90(0x41f), _0x32ae90(0x245), _0x32ae90(0x2a4), 'Other\x20Income'])), _0x33acde[_0x32ae90(0x403)](_0xc38149('NECESSARY\x20EXPENSES\x20(Must\x20pay)', '#d97706', [_0x32ae90(0x29c), _0x32ae90(0x3d5), _0x32ae90(0x269), 'Transport', '\x20Medical', 'School'])), _0x33acde[_0x32ae90(0x403)](_0xc38149(_0x32ae90(0x3ef), _0x32ae90(0x41e), [_0x32ae90(0x27b), _0x32ae90(0x397), _0x32ae90(0x3e0), _0x32ae90(0x38c)])), _0x33acde[_0x32ae90(0x403)](_0xc38149(_0x32ae90(0x237), _0x32ae90(0x2ad), [_0x32ae90(0x328), _0x32ae90(0x459)]));
        };
        _0x47d67d(_0x40266e), _0x47d67d(_0x22222a);
    } else {
        const _0x475a56 = _0x473c9e => {
            const _0x51f86c = _0x4c6ff4;
            _0x473c9e[_0x51f86c(0x403)](_0xc38149('ASSETS\x20(What\x20the\x20business\x20owns)', _0x51f86c(0x209), [_0x51f86c(0x31a), _0x51f86c(0x34a), 'Accounts\x20Receivable', 'Inventory', _0x51f86c(0x27d)])), _0x473c9e[_0x51f86c(0x403)](_0xc38149(_0x51f86c(0x442), _0x51f86c(0x209), [_0x51f86c(0x387), _0x51f86c(0x432), _0x51f86c(0x2df)])), _0x473c9e['appendChild'](_0xc38149(_0x51f86c(0x2d4), _0x51f86c(0x276), ['Rent', _0x51f86c(0x354), _0x51f86c(0x363), 'Cost\x20of\x20Goods\x20Sold', _0x51f86c(0x3be), _0x51f86c(0x415)])), _0x473c9e['appendChild'](_0xc38149(_0x51f86c(0x27f), '#ef4444', [_0x51f86c(0x26e), 'Travel\x20&\x20Entertainment', 'Professional\x20Fees\x20(if\x20not\x20critical)'])), _0x473c9e[_0x51f86c(0x403)](_0xc38149(_0x51f86c(0x237), '#3b82f6', [_0x51f86c(0x34c), _0x51f86c(0x30f)]));
        };
        _0x475a56(_0x40266e), _0x475a56(_0x22222a);
    }
    document[_0x4c6ff4(0x376)](_0x4c6ff4(0x1fc))[_0x4c6ff4(0x323)]['remove'](_0x4c6ff4(0x35a)), updateLiveHud();
}
async function commitTransaction() {
    const _0x5f59a4 = _0x2743b7,
        _0x574d64 = parseFloat(document[_0x5f59a4(0x376)]('tx-amount')[_0x5f59a4(0x305)]),
        _0x26e518 = document[_0x5f59a4(0x376)](_0x5f59a4(0x2a9))[_0x5f59a4(0x305)],
        _0x4f5971 = document[_0x5f59a4(0x376)](_0x5f59a4(0x34f))['value'],
        _0x157e5b = document[_0x5f59a4(0x376)](_0x5f59a4(0x244))[_0x5f59a4(0x305)] || _0x5f59a4(0x423);
    if (_0x26e518 === _0x4f5971 || isNaN(_0x574d64) || _0x574d64 <= 0x0) return showCustomAlert('Strategy\x20Error:<br><br>\x20A\x20transaction\x20must\x20move\x20value\x20between\x20two\x20different\x20accounts.');
    const _0x28eea8 = {
        'id': Date[_0x5f59a4(0x2ce)](),
        'debit': _0x26e518,
        'credit': _0x4f5971,
        'amount': _0x574d64,
        'desc': _0x157e5b
    };
    state['transactions'][_0x5f59a4(0x400)](_0x28eea8), await saveData('tx', _0x28eea8), travisNotif[_0x5f59a4(0x3c7)](), typeof saveBackup === 'function' && (await saveBackup(), !backupDirHandle && await setupBackupFolder()), closeTxModal(), nav(_0x5f59a4(0x32a));
}

function addObligationRow(_0x24f737 = '', _0x56ce98 = '') {
    const _0x56a3a1 = _0x2743b7,
        _0x3a34f4 = document[_0x56a3a1(0x476)](_0x56a3a1(0x284));
    _0x3a34f4[_0x56a3a1(0x2c8)] = _0x56a3a1(0x40f), _0x3a34f4[_0x56a3a1(0x2d2)] = _0x56a3a1(0x29a) + _0x24f737 + '\x22\x20class=\x22flex-1\x20p-2\x20text-sm\x22><input\x20type=\x22number\x22\x20placeholder=\x22KSh\x22\x20value=\x22' + _0x56ce98 + _0x56a3a1(0x3ee), document[_0x56a3a1(0x376)](_0x56a3a1(0x21f))[_0x56a3a1(0x403)](_0x3a34f4);
}

function setUserType(_0x506fcf) {
    const _0x12927b = _0x2743b7;
    state[_0x12927b(0x33e)] = _0x506fcf, document[_0x12927b(0x376)]('btn-p')[_0x12927b(0x3cd)][_0x12927b(0x463)] = _0x506fcf === _0x12927b(0x309) ? _0x12927b(0x3fb) : _0x12927b(0x20a), document[_0x12927b(0x376)](_0x12927b(0x3bf))[_0x12927b(0x3cd)][_0x12927b(0x463)] = _0x506fcf === _0x12927b(0x261) ? _0x12927b(0x3fb) : _0x12927b(0x20a);
}
async function finalizeSetup() {
    const _0x1b8c74 = _0x2743b7,
        _0x2a888e = document[_0x1b8c74(0x376)](_0x1b8c74(0x307))['value'],
        _0x565350 = Array['from'](document['querySelectorAll'](_0x1b8c74(0x444)))[_0x1b8c74(0x21b)](_0x561b04 => ({
            'label': _0x561b04[_0x1b8c74(0x331)](_0x1b8c74(0x34e))[0x0][_0x1b8c74(0x305)],
            'amount': parseFloat(_0x561b04[_0x1b8c74(0x331)]('input')[0x1]['value']) || 0x0
        }))['filter'](_0x259725 => _0x259725[_0x1b8c74(0x247)]);
    if (!_0x2a888e || !state['tempType']) return showCustomAlert('System\x20requires\x20ID.');
    state[_0x1b8c74(0x439)] = {
        'name': _0x2a888e,
        'type': state['tempType']
    }, state['obligations'] = _0x565350, await saveData('meta', {
        'id': _0x1b8c74(0x2f5),
        'user': state[_0x1b8c74(0x439)],
        'obligations': state[_0x1b8c74(0x2b9)]
    }), typeof saveBackup === 'function' && await saveBackup(), location[_0x1b8c74(0x282)]();
}
async function factoryReset() {
    const _0x120c37 = _0x2743b7;
    confirm(_0x120c37(0x274)) && (indexedDB[_0x120c37(0x224)](_0x120c37(0x449)), location[_0x120c37(0x282)]());
}
async function boot() {
    const _0x238dfe = _0x2743b7;
    startFingerprintBackgroundProbe(), await initDB();
    const _0x106ad5 = await getData(_0x238dfe(0x273), _0x238dfe(0x2f5));
    _0x106ad5 ? (state['user'] = _0x106ad5[_0x238dfe(0x439)], state[_0x238dfe(0x2b9)] = _0x106ad5[_0x238dfe(0x2b9)], state[_0x238dfe(0x26f)] = (await getAllData('tx'))[_0x238dfe(0x351)]((_0x1b8d56, _0x3cc430) => _0x3cc430['id'] - _0x1b8d56['id']), document[_0x238dfe(0x376)](_0x238dfe(0x234))[_0x238dfe(0x321)] = state['user'][_0x238dfe(0x47d)], document['getElementById'](_0x238dfe(0x3c5))['innerText'] = state[_0x238dfe(0x439)][_0x238dfe(0x38a)] + _0x238dfe(0x3df), nav(_0x238dfe(0x32a))) : document['getElementById']('setup-overlay')[_0x238dfe(0x323)][_0x238dfe(0x3a5)](_0x238dfe(0x35a));
}
async function saveData(_0x5c167b, _0x5e7f32) {
    const _0x45ed6b = _0x2743b7,
        _0x395656 = db[_0x45ed6b(0x208)](_0x5c167b, _0x45ed6b(0x292));
    return _0x395656['objectStore'](_0x5c167b)[_0x45ed6b(0x471)](_0x5e7f32), new Promise(_0x29de1a => _0x395656[_0x45ed6b(0x3d0)] = _0x29de1a);
}
async function getData(_0x5dbb54, _0x250491) {
    const _0x322b68 = _0x2743b7,
        _0x3e36cf = db[_0x322b68(0x208)](_0x5dbb54, _0x322b68(0x304)),
        _0x2050f7 = _0x3e36cf['objectStore'](_0x5dbb54)[_0x322b68(0x2a0)](_0x250491);
    return new Promise(_0x57fa4d => _0x2050f7[_0x322b68(0x231)] = () => _0x57fa4d(_0x2050f7[_0x322b68(0x410)]));
}

function _0x3e4e() {
    const _0x502c6a = ['vehicle', 'income\x20situation', 'script.js', 'CRITICAL', '</p></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22', 'parentNode', 'getAll', 'replaceChild', 'px-4\x20py-2\x20border-2\x20border-[#4ade80]\x20text-[#4ade80]\x20rounded\x20font-black', 'grow', 'Service\x20Revenue', '</p></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22glass\x20p-4\x20border-l-4\x20border-[#4ade80]\x22><p\x20class=\x22text-[10px]\x20opacity-40\x20uppercase\x22>Survival\x20Window</p><p\x20class=\x22text-xl\x20font-bold\x22>', 'install-overlay', '27bROFpS', 'family', 'resolvedOptions', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.78);display:flex;align-items:center;justify-content:center;z-index:9999;font-family:system-ui,sans-serif;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:white;border-radius:16px;max-width:460px;width:92%;box-shadow:0\x2025px\x2070px\x20rgba(0,0,0,0.3);overflow:hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:linear-gradient(135deg,#1e3a8a,#3b82f6);color:white;padding:28px\x2024px;text-align:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22margin:0\x200\x208px\x200;font-size:1.5rem;\x22>🔒\x20Travis\x20Guardian</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:0;opacity:0.95;\x22>Your\x20Personal\x20Financial\x20Advisor</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:32px\x2028px;text-align:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:70px;height:70px;background:#f0f9ff;color:#1e40af;font-size:36px;border-radius:50%;margin:0\x20auto\x2020px;display:flex;align-items:center;justify-content:center;border:5px\x20solid\x20#e0f2fe;\x22>📁</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22margin:0\x200\x2016px\x200;font-size:1.35rem;color:#1e3a8a;\x22>Restore\x20Everything?</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:#475569;line-height:1.6;margin-bottom:28px;font-size:1.02rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Browser\x20data\x20was\x20cleared.<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Select\x20your\x20backup\x20file\x20to\x20restore\x20<strong>financial\x20data\x20+\x20UI</strong>.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;flex-direction:column;gap:12px;margin-bottom:20px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22restore-btn\x22\x20style=\x22background:#1e40af;color:white;border:none;padding:16px\x2024px;font-size:1.05rem;font-weight:600;border-radius:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;\x22>📂\x20Select\x20Backup\x20File\x20&\x20Restore\x20All</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22skip-btn\x22\x20style=\x22background:transparent;color:#64748b;border:2px\x20solid\x20#cbd5e1;padding:14px\x2024px;font-size:1rem;font-weight:500;border-radius:10px;cursor:pointer;\x22>Continue\x20as\x20New\x20User</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:0;font-size:0.82rem;color:#64748b;\x22>First-time\x20users:\x20choose\x20“Continue\x20as\x20New\x20User”</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'user', 'reorder', 'toFixed', 'beforeinstallprompt', '391350XADgcR', '\x20would\x20push\x20you\x20past\x20your\x20safe\x20daily\x20limit\x20of\x20KSh\x20', 'tempBackupFileHandle', '\x20next\x20month\x20—\x20that\x27s\x20about\x20KSh\x20', 'obs', 'REVENUE\x20(Money\x20coming\x20in\x20-\x20GOOD!)', 'Help\x20me\x20calculate\x20the\x20right\x20selling\x20price\x20for\x20a\x20product', '#obligation-list\x20>\x20div', 'getItem', 'DateTimeFormat', 'What\x20expenses\x20should\x20I\x20cut\x20right\x20now?', 'how\x20much\x20should\x20i', 'TravisGuardian_v1.0', 'TRAVIS-GUARDIAN-SECURE-2026-x7k9', 'MODERATE', 'can\x20i\x20buy', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'education', 'Invalid\x20activation\x20code.', 'keypress', 'some', 'till', 'make\x20money', 'toLocaleString', 'encode', ';\x22>', '\x0a\x20\x20<div\x20style=\x22display:flex;flex-wrap:wrap;align-items:center;gap:6px\x2010px;\x0a\x20\x20\x20\x20padding:10px\x2012px;background:var(--color-background-secondary);\x0a\x20\x20\x20\x20border-radius:var(--border-radius-md);margin-bottom:14px;font-size:13px;\x22>\x0a\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:5px;white-space:nowrap;\x22>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:var(--color-text-secondary);font-size:12px;\x22>Risk</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-weight:500;color:', '<div\x20class=\x22max-w-4xl\x20glass\x20p-6\x20mx-auto\x20flex\x20flex-col\x20h-[550px]\x20neon-border\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22chat-box\x22\x20class=\x22flex-1\x20overflow-y-auto\x20space-y-4\x20mb-4\x20pr-2\x20flex\x20flex-col\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22travis-msg\x20text-xs\x20italic\x22>Probability\x20Engine\x20and\x20Leak\x20Finder\x20active.\x20How\x20can\x20I\x20protect\x20your\x20capital?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20gap-2\x20p-2\x20bg-slate-900\x20border-2\x20border-slate-800\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22chat-input\x22\x20type=\x22text\x22\x20placeholder=\x22Consult\x20Travis...\x22\x20class=\x22flex-1\x20p-4\x20bg-transparent\x20border-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22handleAsk()\x22\x20class=\x22bg-[#4ade80]\x20text-black\x20px-8\x20font-black\x20rounded\x20uppercase\x22>Send</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'Credit', '.enc', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Optional\x20helpful\x20footer\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-slate-950\x20p-3\x20text-[10px]\x20text-slate-500\x20flex\x20items-center\x20justify-between\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Scroll\x20horizontally\x20→\x20to\x20see\x20full\x20descriptions</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22font-mono\x22>', 'Looking\x20at\x20your\x20numbers\x20right\x20now:\x20you\x20have\x20KSh\x20', 'price', 'take\x20out', 'savings', 'Your\x20current\x20financial\x20position:\x20buffer\x20is\x20KSh\x20', 'paid', 'objectStoreNames', 'borderColor', 'app', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22opacity-40\x22>→</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22bg-red-900/40\x20text-red-400\x20px-2\x20py-0.5\x20rounded\x20font-bold\x22>', 'hardwareConcurrency', 'deriveKey', 'https://travis-j1w9.onrender.com', 'Withdrawing\x20KSh\x20', 'actions', 'staff', 'trim', 'cashflow', 'availHeight', 'stock', 'how\x20much\x20to\x20sell', 'put', 'warn', 'UNDETERMINED', 'setDate', 'matatu', 'createElement', 'fillText', 'relative', '\x0a\x20\x20\x20\x20\x20\x20', '%\x20of\x20your\x20buffer,\x20leaving\x20you\x20KSh\x20', 'increase', 'application/json', 'name', '</p></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22glass\x20p-4\x20border-l-4\x20border-red-500\x22><p\x20class=\x22text-[10px]\x20opacity-40\x20uppercase\x22>Reserved\x20Bills</p><p\x20class=\x22text-xl\x20font-bold\x22>KSh\x20', 'matchMedia', 'byteLength', 'catch', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>', 'mpesa', 'ASSETS\x20(Money\x20you\x20have)', '1438947SSYYxW', 'upcountry', 'No\x20file\x20handle', '\x20before\x20month\x20end', 'deriveBits', '5,000', 'sibling', 'boost', 'restore-btn', 'importKey', 'Savings', 'success', 'Service\x20Worker\x20registration\x20failed:', 'How\x20to\x20increase\x20income', 'textBaseline', '10,000', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20items-center\x20p-4\x20bg-slate-900\x20border-b\x20border-slate-800\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><p\x20class=\x22font-bold\x20uppercase\x22>', 'habit', 'treatment', 'pricing', 'I\x20hear\x20you\x20on\x20the\x20loan\x20—\x20when\x20things\x20are\x20tight,\x20borrowing\x20feels\x20like\x20the\x20fastest\x20fix.\x20But\x20your\x20account\x20is\x20already\x20in\x20critical\x20risk\x20territory\x20with\x20a\x20buffer\x20of\x20KSh\x20', 'Settled', 'getContext', 'substring', '%\x20of\x20your\x20buffer\x20and\x20leave\x20you\x20with\x20only\x20KSh\x20', 'tx-modal', '1056716SgaYyr', '#94a3b8', '4440550lIUvqc', 'how\x20are\x20things', 'Password\x20required', 'travis-finance-backup.enc', 'blob', 'You\x27re\x20in\x20good\x20shape.\x20Keep\x20your\x20daily\x20spend\x20under\x20KSh\x20', 'SPEND', 'eat', 'getFile', 'transaction', '#22c55e', '#334155', 'This\x20is\x20a\x20real\x20obligation\x20—\x20rent,\x20fees,\x20medical,\x20those\x20don\x27t\x20move.\x20The\x20issue\x20is\x20that\x20KSh\x20', 'doctor', 'desc', 'User\x20cancelled\x20or\x20error\x20occurred', '\x20or\x20less,\x20or\x20look\x20for\x20a\x20commission-based\x20arrangement\x20where\x20you\x20only\x20pay\x20when\x20they\x20generate\x20sales.\x20Fixed\x20wages\x20above\x20your\x20buffer\x20threshold\x20are\x20a\x20risk.', 'arrayBuffer', 'Enter\x20the\x20backup\x20password\x20to\x20decrypt\x20your\x20data:', 'which\x20is\x20serious\x20—\x20your\x20current\x20trajectory\x20does\x20not\x20lead\x20to\x20a\x20safe\x20month\x20end\x20without\x20a\x20change\x20in\x20spending\x20or\x20income', 'Just\x20calculate\x20the\x20daily\x20repayment\x20cost\x20against\x20your\x20current\x20daily\x20cap\x20before\x20committing.', 'margin', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x20text-right\x20font-mono\x20text-green-400\x20font-bold\x20whitespace-nowrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20+', 'trajectory', 'employ', 'Accounts\x20Receivable', '#f60', 'Enter', 'map', 'dailyCap', 'faidi', 'index.html', 'obligation-list', 'load', 'serviceWorker', 'drinking', 'AES-GCM', 'deleteDatabase', 'I\x27d\x20reduce\x20it\x20to\x20around\x20KSh\x20', 'createObjectStore', 'save', 'fees', 'max', '</p><p\x20class=\x22text-[10px]\x20opacity-40\x20uppercase\x22>Budget:\x20', '\x20OVER</p>', '.\x20After\x20this\x20commitment,\x20your\x20effective\x20buffer\x20would\x20adjust\x20to\x20reflect\x20the\x20recurring\x20monthly\x20cost,\x20and\x20you\x27d\x20still\x20have\x20room\x20to\x20operate.\x20The\x20question\x20isn\x27t\x20just\x20whether\x20you\x20can\x20afford\x20the\x20wage\x20—\x20it\x27s\x20whether\x20this\x20person\x20will\x20generate\x20or\x20free\x20up\x20more\x20value\x20than\x20they\x20cost.', 'Tell\x20me\x20the\x20wage\x20you\x20have\x20in\x20mind\x20and\x20I\x27ll\x20calculate\x20whether\x20the\x20numbers\x20work.\x20Don\x27t\x20hire\x20on\x20a\x20handshake\x20without\x20checking\x20the\x20math\x20first.', 'parse', 'cash\x20flow', 'where\x20do\x20i', 'onsuccess', 'display', 'activation-overlay', 'display-name', 'end\x20of\x20month', '\x20is\x20a\x20capital\x20decision\x20—\x20it\x20comes\x20out\x20of\x20your\x20buffer\x20in\x20one\x20hit,\x20which\x20is\x20', 'LIABILITIES\x20&\x20TRANSFERS', 'generator', 'Build\x20the\x20emergency\x20fund\x20first.\x20Once\x20you\x20have\x203\x20months\x20of\x20obligations\x20saved,\x20then\x20talk\x20about\x20investing.\x20Investing\x20while\x20your\x20buffer\x20is\x20thin\x20is\x20just\x20gambling\x20with\x20money\x20you\x20need.', '\x20is\x20possible\x20from\x20a\x20cash\x20standpoint\x20since\x20your\x20buffer\x20covers\x20it,\x20but\x20it\x20would\x20consume\x20', 'what\x20should\x20i\x20charge', 'onclick', '\x20or\x20delay\x20to\x20a\x20day\x20when\x20you\x27ve\x20had\x20good\x20income.', 'If\x20this\x20asset\x20pays\x20back\x20within\x2060–90\x20days,\x20go\x20ahead.\x20Just\x20make\x20sure\x20you\x20have\x20at\x20least\x20KSh\x20', 'push', '\x20per\x20day\x20after\x20this,\x20which\x20', '\x0a\x20\x20\x20\x20\x20\x20</div>', 'input-app.css', '\x20—\x20which\x20is\x2025%\x20of\x20your\x20free\x20cash,\x20the\x20standard\x20threshold\x20before\x20wages\x20start\x20squeezing\x20other\x20obligations.\x20At\x20KSh\x20', 'tx-desc', 'Allowance', 'INCOME\x20(Money\x20coming\x20in\x20-\x20GOOD!)', 'label', 'buy\x20goods', 'reduce', '\x20—\x20that\x27s\x2050%\x20of\x20your\x20buffer.\x20Keep\x20the\x20other\x20half\x20liquid.\x20Turning\x20over\x20smaller\x20stock\x20faster\x20is\x20safer\x20than\x20betting\x20everything\x20on\x20one\x20big\x20order.', '</span>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<span\x20style=\x22color:var(--color-border-secondary);font-size:11px;\x22>·</span>\x0a\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:5px;white-space:nowrap;\x22>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:var(--color-text-secondary);font-size:12px;\x22>Days\x20left</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-weight:500;color:var(--color-text-primary);\x22>', 'endsWith', '\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'college', 'Cash', 'TRV-KE-', 'abs', 'text-green-400', 'How\x20to\x20boost\x20income\x20instead', 'landlord', 'Investing\x20is\x20smart\x20—\x20but\x20the\x20sequence\x20matters.\x20Before\x20putting\x20money\x20into\x20shares,\x20SACCOs,\x20or\x20crypto,\x20your\x20operating\x20cash\x20needs\x20to\x20be\x20healthy.\x20Your\x20buffer\x20right\x20now\x20is\x20KSh\x20', '.css', 'stocks', 'How\x20much\x20can\x20I\x20safely\x20spend\x20today?', 'profit', 'but\x20even\x20that\x20would\x20tighten\x20things', '\x20per\x20day\x20added\x20to\x20your\x20obligations.', 'Your\x20financials\x20are\x20in\x20a\x20stable\x20position\x20right\x20now\x20—\x20buffer\x20is\x20healthy\x20and\x20risk\x20is\x20low,\x20which\x20actually\x20means\x20you\x27re\x20in\x20the\x20best\x20negotiating\x20position\x20you\x27ll\x20have.\x20If\x20you\x27re\x20taking\x20a\x20loan\x20to\x20invest\x20in\x20something\x20that\x20grows\x20the\x20business,\x20this\x20is\x20a\x20reasonable\x20time\x20to\x20do\x20it.\x20', 'getRandomValues', 'add', 'toString', 'onerror', 'business', 'lease', '\x20fits\x20inside\x20your\x20daily\x20cap\x20of\x20KSh\x20', 'var(--color-text-warning)', 'Don\x27t\x20save\x20right\x20now.\x20Fix\x20the\x20cash\x20flow\x20first\x20—\x20get\x20risk\x20down\x20to\x20moderate,\x20then\x20start\x20putting\x205–10%\x20aside.\x20Saving\x20from\x20stability\x20is\x20smart.\x20Saving\x20from\x20crisis\x20is\x20just\x20reducing\x20your\x20liquidity.', 'act-code', 'then', 'you\x20have\x20no\x20safe\x20daily\x20spend\x20budget\x20right\x20now\x20—\x20meaning\x20even\x20small\x20daily\x20costs\x20are\x20coming\x20from\x20money\x20earmarked\x20for\x20obligations', 'Bills', 'xx-XX', '%\x20of\x20your\x20free\x20cash.\x20The\x20problem\x20with\x20tying\x20up\x20that\x20much\x20in\x20stock\x20is\x20that\x20it\x20assumes\x20your\x20sales\x20velocity\x20is\x20high\x20enough\x20to\x20convert\x20those\x20goods\x20to\x20cash\x20before\x20your\x20next\x20major\x20obligation\x20falls\x20due.\x20With\x20', 'onload', 'salary\x20for', 'Marketing', 'transactions', 'hospital', '%\x20as\x20free\x20cash.\x20', 'investment', 'meta', 'Confirm\x20system\x20purge?\x20All\x20financial\x20history\x20will\x20be\x20deleted.', 'var(--color-text-secondary)', '#d97706', 'createWritable', 'This\x20amount\x20is\x20fine.\x20Just\x20make\x20sure\x20you\x27re\x20withdrawing\x20for\x20a\x20specific\x20purpose\x20—\x20not\x20as\x20a\x20\x22just\x20in\x20case\x22\x20that\x20ends\x20up\x20spent\x20on\x20impulse.', 'Pricing\x20is\x20where\x20most\x20small\x20businesses\x20lose\x20quietly\x20—\x20not\x20through\x20big\x20mistakes,\x20but\x20through\x20margins\x20that\x20are\x20too\x20thin.\x20The\x20minimum\x20healthy\x20markup\x20for\x20a\x20retail\x20duka\x20or\x20small\x20business\x20in\x20Kenya\x20is\x2025–30%\x20above\x20cost\x20price,\x20but\x20that\x27s\x20the\x20floor.\x20After\x20you\x20account\x20for\x20spoilage,\x20theft,\x20loan\x20interest,\x20and\x20the\x20cost\x20of\x20your\x20own\x20time,\x20you\x20often\x20need\x2040–50%\x20to\x20actually\x20profit.\x20If\x20you\x27re\x20buying\x20goods\x20at\x20KSh\x20100\x20and\x20selling\x20at\x20KSh\x20120,\x20you\x20have\x20a\x2020%\x20markup\x20—\x20which\x20sounds\x20reasonable\x20until\x20you\x20factor\x20in\x20that\x20a\x20late\x20delivery\x20or\x20one\x20bad\x20month\x20wipes\x20that\x20out.', 'Can\x20I\x20afford\x20repayments', 'Entertainment', 'backupHandle', 'Fixed\x20Assets', 'canvas-fail', 'DISCRETIONARY\x20/\x20AVOIDABLE\x20EXPENSES', 'toDateString', 'conclusion', 'reload', 'documents', 'div', 'find', 'flex', 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);display:flex;align-items:center;justify-content:center;z-index:10000;', 'POST', 'reserve', 'Install\x20not\x20ready.\x20Refresh\x20the\x20page.', 'length', 'Set\x20a\x20fixed\x20monthly\x20family\x20contribution\x20ceiling\x20—\x20something\x20you\x20can\x20always\x20honour\x20without\x20compromising\x20your\x20obligations.\x20If\x20a\x20request\x20exceeds\x20that\x20ceiling,\x20contribute\x20what\x20you\x20budgeted,\x20not\x20what\x20was\x20asked.\x20\x22I\x27ve\x20set\x20aside\x20KSh\x20X\x20for\x20family\x20this\x20month\x22\x20is\x20a\x20complete\x20sentence.', 'replace', 'isArray', '%\x20of\x20your\x20total\x20cash\x20is\x20committed\x20to\x20obligations,\x20which\x20leaves\x20', 'contains', '\x20per\x20month,\x20put\x20it\x20somewhere\x20it\x20earns\x20interest\x20(not\x20a\x20mattress),\x20and\x20treat\x20it\x20as\x20an\x20expense\x20—\x20not\x20optional.\x20The\x20goal\x20is\x203\x20months\x20of\x20obligations\x20as\x20your\x20emergency\x20fund,\x20which\x20is\x20KSh\x20', 'readwrite', 'end\x20the\x20month\x20with\x20roughly\x20KSh\x20', 'charge', '\x20sits\x20within\x20your\x20daily\x20cap,\x20so\x20it\x27s\x20fine\x20from\x20a\x20budget\x20standpoint.', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-[10px]\x20opacity-40\x20uppercase\x20tracking-widest\x22>Insolvency\x20Risk\x20Score</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22text-4xl\x20font-black\x20mb-3\x22\x20style=\x22color:\x20', 'obsStatus', 'getFileHandle', '</span>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<span\x20style=\x22color:var(--color-border-secondary);font-size:11px;\x22>·</span>\x0a\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:5px;white-space:nowrap;\x22>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:var(--color-text-secondary);font-size:12px;\x22>Buffer</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-weight:500;color:var(--color-text-primary);\x22>KSh\x20', '<input\x20type=\x22text\x22\x20placeholder=\x22Rent\x22\x20value=\x22', 'open', 'Food\x20&\x20Groceries', '\x20available\x20and\x20', 'money\x20in', '#eab308', 'get', 'This\x20is\x20a\x20real\x20emergency\x20position.\x20Stop\x20all\x20non-essential\x20spending\x20today,\x20call\x20in\x20any\x20debts\x20owed\x20to\x20you,\x20and\x20focus\x20every\x20energy\x20on\x20cash\x20inflow\x20for\x20the\x20next\x205\x20days.\x20The\x20numbers\x20don\x27t\x20leave\x20room\x20for\x20delay.', '\x20right\x20now.\x20If\x20you\x20have\x20recurring\x20family\x20obligations,\x20they\x20should\x20be\x20budgeted\x20in\x20advance\x20—\x20not\x20treated\x20as\x20emergencies\x20every\x20time\x20they\x20arrive.', ',\x20daily\x20safe\x20spend\x20is\x20KSh\x20', 'Dividends', 'preventDefault', 'scrollTop', 'riskLabel', 'stringify', 'tx-debit', 'mshwari', 'LOW', 'saving', '#3b82f6', 'text/html', '\x20↗\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>', 'dashboard-grid', '\x20is\x20above\x20your\x20safe\x20daily\x20cap\x20of\x20KSh\x20', 'fall\x20short\x20by\x20KSh\x20', 'nse', 'Financially\x20this\x20works.\x20Before\x20hiring,\x20define\x20exactly\x20what\x20this\x20person\x20will\x20do\x20to\x20move\x20money\x20—\x20more\x20sales,\x20faster\x20service,\x20more\x20hours\x20covered.\x20A\x20hire\x20that\x20pays\x20for\x20themselves\x20within\x2060\x20days\x20is\x20a\x20good\x20hire.', '7-day\x20projection', 'How\x20can\x20I\x20increase\x20my\x20profit\x20this\x20month?', 'disabled', 'debit', 'obligations', 'That\x27s\x20a\x20solid\x20position\x20to\x20start\x20from.', 'coming\x20week', 'analyticsChart', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22document.getElementById(\x27chat-input\x27).value=\x27', 'tax', '#069', 'Backup\x20file\x20was\x20empty\x20or\x20invalid', 'travisChart', 'Failed\x20to\x20decrypt\x20backup:', '🛡️\x20SYSTEM\x20STABLE', '.\x20Whether\x20that\x27s\x20a\x20problem\x20depends\x20on\x20how\x20many\x20other\x20costs\x20are\x20still\x20coming\x20this\x20month.', 'Family\x20obligations\x20—\x20harambees,\x20upcountry\x20contributions,\x20chama\x20—\x20are\x20a\x20real\x20part\x20of\x20life\x20in\x20Kenya\x20and\x20ignoring\x20them\x20has\x20social\x20consequences\x20that\x20go\x20beyond\x20money.\x20But\x20they\x27re\x20also\x20one\x20of\x20the\x20most\x20common\x20reasons\x20people\x27s\x20personal\x20finances\x20stay\x20unstable,\x20because\x20they\x27re\x20unpredictable\x20and\x20hard\x20to\x20refuse.\x20Your\x20buffer\x20is\x20KSh\x20', 'cash', 'custom-alert-ok', 'className', '\x20remaining\x20after\x20purchase\x20for\x20operational\x20expenses\x20—\x20don\x27t\x20clean\x20out\x20the\x20buffer\x20for\x20equipment.', 'custom-alert-message', ',\x20which\x20means\x20it\x20would\x20accelerate\x20your\x20spending\x20beyond\x20what\x20the\x20buffer\x20can\x20sustain\x20if\x20this\x20is\x20for\x20daily\x20use.', '%\x20of\x20what\x27s\x20left\x20and\x20push\x20you\x20closer\x20to\x20not\x20making\x20it\x20to\x20end\x20of\x20month.', 'amount', 'now', '\x20and\x20represents\x20just\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22grid\x20grid-cols-1\x20lg:grid-cols-3\x20gap-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22lg:col-span-1\x20space-y-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22glass\x20p-6\x20border-l-4\x22\x20style=\x22border-color:\x20', 'decrypt', 'innerHTML', 'round', 'NECESSARY\x20OPERATING\x20EXPENSES', '8844632MRRUtv', 'daily\x20limit', 'M-Pesa', ',\x20and\x20a\x20safe\x20guideline\x20is\x20that\x20total\x20wages\x20shouldn\x27t\x20exceed\x2025–30%\x20of\x20that\x20buffer\x20per\x20month\x20—\x20so\x20you\x20have\x20room\x20for\x20wages\x20of\x20up\x20to\x20KSh\x20', '\x20monthly\x20', 'fromCharCode', '4417wXXZBQ', 'Restore\x20flow\x20error:', '\x20free,\x20and\x20your\x20daily\x20cap\x20adjusts\x20to\x20about\x20KSh\x20', '\x20to\x20work\x20with\x20instead\x20of\x20', 'Other\x20Revenue', 'How\x20much\x20tax\x20should\x20I\x20set\x20aside', '\x20—\x20which\x20', 'showOpenFilePicker', 'Failed\x20to\x20send\x20data.\x20Check\x20connection.', 'onupgradeneeded', 'colorDepth', 'tuition', 'credit', 'Should\x20I\x20take\x20a\x20loan\x20to\x20buy\x20equipment?', 'employee', 'cloneNode', 'font', 'match', 'Tax\x20is\x20one\x20of\x20those\x20things\x20people\x20delay\x20until\x20KRA\x20makes\x20it\x20painful\x20—\x20and\x20KRA\x27s\x20penalties\x20are\x20not\x20small.\x20A\x20late\x20filing\x20penalty\x20alone\x20starts\x20at\x20KSh\x2020,000\x20or\x205%\x20of\x20tax\x20owed,\x20whichever\x20is\x20higher,\x20and\x20interest\x20compounds\x20monthly\x20at\x201%.\x20The\x20irony\x20is\x20that\x20with\x20your\x20current\x20buffer\x20of\x20KSh\x20', 'With\x20your\x20buffer\x20at\x20KSh\x20', 'toUpperCase', 'spend', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22glass\x20rounded-xl\x20border\x20border-slate-800\x20overflow-hidden\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22overflow-x-auto\x22>\x20\x20\x20<!--\x20This\x20enables\x20horizontal\x20scrolling\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22w-full\x20min-w-[700px]\x20text-left\x20border-collapse\x22>\x20\x20\x20<!--\x20min-w\x20prevents\x20collapsing\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-slate-900/80\x20text-[10px]\x20font-black\x20uppercase\x20tracking-widest\x20text-slate-500\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20border-b\x20border-slate-800\x20w-28\x22>Date</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20border-b\x20border-slate-800\x22>Transaction\x20Details</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20border-b\x20border-slate-800\x20text-right\x20w-32\x22>Debit\x20(+)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20border-b\x20border-slate-800\x20text-right\x20w-32\x22>Credit\x20(-)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'How\x20much\x20can\x20I\x20spend\x20today', 'next\x20week', 'User\x20cancelled\x20folder\x20picker', 'config', 'At\x20', 'line', '/store-fingerprint', 'versus', 'which\x20means\x20you\x27re\x20not\x20in\x20immediate\x20danger\x20but\x20you\x27re\x20in\x20the\x20zone\x20where\x20one\x20unexpected\x20expense\x20could\x20tip\x20things', 'Avoid\x20the\x20loan\x20right\x20now.\x20Instead,\x20identify\x20one\x20income\x20you\x20can\x20accelerate\x20this\x20week\x20—\x20collect\x20a\x20debt\x20someone\x20owes\x20you,\x20push\x20a\x20sale,\x20reduce\x20what\x20you\x20spend\x20—\x20before\x20adding\x20any\x20new\x20repayment\x20obligation.', 'showDirectoryPicker', '\x20for\x20an\x20obligation\x20is\x20a\x20legitimate\x20expense,\x20and\x20your\x20buffer\x20can\x20absorb\x20it.\x20After\x20paying\x20this,\x20you\x27ll\x20still\x20have\x20KSh\x20', 'write', 'text/javascript', 'summarize', 'medical', '\x20each.', 'Don\x27t\x20pay\x20this\x20today\x20unless\x20someone\x20will\x20cut\x20you\x20off\x20or\x20lock\x20you\x20out.\x20Negotiate\x203–5\x20days,\x20use\x20that\x20window\x20to\x20raise\x20cash\x20first.', 'readonly', 'value', 'Restocking\x20KSh\x20', 'user-name', 'income', 'personal', 'raw', 'How\x20can\x20I\x20bring\x20in\x20more\x20money\x20this\x20week?', '\x20—\x20so\x20this\x20would\x20wipe\x20you\x20out\x20completely\x20and\x20leave\x20nothing\x20for\x20wages,\x20rent,\x20or\x20emergencies.\x20Even\x20if\x20the\x20stock\x20sells\x20well,\x20there\x27s\x20a\x20gap\x20between\x20buying\x20and\x20selling,\x20and\x20during\x20that\x20gap\x20you\x27d\x20have\x20zero\x20liquidity.\x20That\x27s\x20how\x20shops\x20end\x20up\x20closing\x20not\x20because\x20they\x20had\x20no\x20goods\x20—\x20but\x20because\x20they\x20couldn\x27t\x20pay\x20a\x20bill\x20while\x20waiting\x20for\x20sales.', 'how\x20to\x20improve', '\x20is\x20bigger\x20than\x20your\x20current\x20daily\x20safe\x20limit\x20of\x20KSh\x20', 'Loans\x20Payable', 'compare', 'future', 'hud-warning', 'none', 'hire', 'Inventory', 'Restoring\x20data\x20+\x20UI...', 'getDate', ',\x20you\x20might\x20be\x20able\x20to\x20handle\x20the\x20actual\x20tax\x20obligation\x20comfortably,\x20but\x20a\x20penalty\x20on\x20top\x20could\x20tip\x20you\x20into\x20', 'freezer', 'Bank\x20/\x20M-Pesa', 'body', 'SHA-256', 'tala', 'standalone', 'PBKDF2', 'How\x20am\x20I\x20doing\x20this\x20month', 'innerText', 'pattern', 'classList', 'asset', 'That\x27s\x20not\x20a\x20stable\x20enough\x20base\x20yet.', 'If\x20your\x203-month\x20emergency\x20fund\x20is\x20already\x20covered\x20(KSh\x20', 'earn\x20more', 'Loan\x20Repayment', '</p></div>\x0a\x20\x20\x20\x20', 'dash', 'tailwind-app.css', 'tx-amount', 'focus', 'Bank\x20Account', '\x20days\x20left\x20this\x20month,\x20and\x20', '.\x20Most\x20small\x20businesses\x20in\x20Kenya\x20don\x27t\x20fail\x20because\x20of\x20low\x20sales\x20—\x20they\x20fail\x20because\x20their\x20costs\x20grow\x20as\x20fast\x20as\x20their\x20revenue.', 'querySelectorAll', '\x20left', '</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22lg:col-span-2\x20glass\x20p-6\x20neon-border\x20relative\x20min-h-[350px]\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-xs\x20font-black\x20uppercase\x20tracking-widest\x20text-slate-400\x20mb-4\x22>Performance\x20Analytics</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h-[300px]\x22><canvas\x20id=\x22analyticsChart\x22></canvas></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', '7752KpDruk', 'toLowerCase', 'meaning\x20you\x27re\x20in\x20a\x20stable\x20position\x20and\x20likely\x20to\x20make\x20it\x20through\x20the\x20month\x20without\x20a\x20crisis', 'At\x20KSh\x20', 'pending', 'restock', 'Treat\x20KSh\x20', '\x20in\x20free\x20cash.\x20That\x27s\x20responsible\x20purchasing\x20—\x20you\x27re\x20not\x20over-leveraging\x20your\x20cash\x20into\x20goods.\x20As\x20long\x20as\x20the\x20margin\x20on\x20what\x20you\x27re\x20buying\x20justifies\x20the\x20spend\x20(you\x20should\x20be\x20marking\x20up\x20at\x20least\x2020–30%),\x20this\x20is\x20money\x20working\x20for\x20you.', 'invest', 'overview', 'tempType', 'UI\x20rebuild\x20failed', 'Failed\x20to\x20write\x20data\x20to\x20database:\x20', 'rent', 'goods', 'Restore\x20operation\x20failed\x20during\x20write:', 'addEventListener', 'fuliza', 'language', '\x20and\x20risk\x20is\x20', 'parents', 'toLocaleDateString', 'Petty\x20Cash', 'join', 'Accounts\x20Payable', 'fillStyle', 'input', 'tx-credit', '\x20back\x20within\x2030\x20days.\x20If\x20you\x20can\x27t\x20see\x20that\x20income\x20clearly,\x20it\x27s\x20not\x20worth\x20it.', 'sort', '<tr><td\x20colspan=\x224\x22\x20class=\x22p-12\x20text-center\x20opacity-40\x20italic\x22>No\x20transactions\x20recorded\x20yet.</td></tr>', 'bodaboda', 'Payroll', '\x0a\x20\x20\x20\x20<div\x20style=\x22background:#1f1f1f;padding:30px;border-radius:16px;max-width:400px;width:90%;text-align:center;\x22>\x0a\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:#4ade80;margin-bottom:20px;\x22>Link\x20Device\x20Fingerprint</h3>\x0a\x20\x20\x20\x20\x20\x20<input\x20id=\x22modal-phone\x22\x20type=\x22tel\x22\x20placeholder=\x22254712345678\x22\x20style=\x22width:100%;padding:16px;font-size:18px;border-radius:8px;border:none;background:#333;color:white;margin-bottom:20px;\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22submitPhoneAndFP()\x22\x20style=\x22width:100%;padding:16px;background:#4ade80;color:black;font-weight:bold;border:none;border-radius:8px;\x22>Submit\x20Phone</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20', 'buy\x20equipment', 'variance', 'slice', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>', 'hidden', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x20max-w-xs\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22font-black\x20italic\x20uppercase\x20text-slate-200\x20break-words\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'Whether\x20you\x20can\x20add\x20staff\x20depends\x20entirely\x20on\x20your\x20wage\x20budget\x20and\x20the\x20business\x27s\x20current\x20cash\x20flow.\x20Your\x20buffer\x20is\x20KSh\x20', 'money\x20out', '\x20and\x20risk\x20at\x20', 'when\x20will', '.\x20That\x27s\x20not\x20automatically\x20a\x20disaster\x20—\x20but\x20it\x20does\x20mean\x20you\x27re\x20borrowing\x20from\x20tomorrow\x27s\x20budget\x20today.\x20After\x20this\x20spend,\x20your\x20remaining\x20', '%\x20of\x20your\x20KSh\x20', 'A\x20loan\x20is\x20possible\x20from\x20a\x20cashflow\x20standpoint,\x20but\x20only\x20if\x20it\x27s\x20going\x20to\x20earn\x20more\x20than\x20it\x20costs.\x20Mobile\x20loans\x20at\x2015%\x20monthly\x20mean\x20KSh\x20', 'Utilities', 'score', 'how\x20am\x20i', 'close', 'error', ',\x20and\x20adding\x20a\x20loan\x20repayment\x20on\x20top\x20of\x20that\x20is\x20like\x20patching\x20a\x20leaking\x20roof\x20while\x20standing\x20in\x20a\x20flood.\x20Mobile\x20loans\x20like\x20Fuliza\x20or\x20Tala\x20charge\x2015–20%\x20monthly,\x20so\x20even\x20a\x20KSh\x20', '\x20days.\x20That\x27s\x20a\x20tight\x20squeeze\x20—\x20your\x20daily\x20breathing\x20room\x20drops\x20to\x20about\x20KSh\x20', 'getTimezoneOffset', 'You\x27re\x20thinking\x20about\x20spending\x20KSh\x20', 'OperationError', 'set', '\x20Days</p></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22glass\x20p-4\x20border-l-4\x20border-purple-500\x22><p\x20class=\x22text-[10px]\x20opacity-40\x20uppercase\x22>Daily\x20Ceiling</p><p\x20class=\x22text-xl\x20font-bold\x22>KSh\x20', 'chat-input', '\x20as\x20your\x20absolute\x20daily\x20ceiling,\x20not\x20a\x20target.\x20On\x20days\x20when\x20you\x20spend\x20less,\x20don\x27t\x20\x22catch\x20up\x22\x20the\x20next\x20day\x20—\x20let\x20that\x20surplus\x20rebuild\x20your\x20buffer.\x20Consistent\x20spending\x20below\x20the\x20cap\x20is\x20how\x20you\x20improve\x20your\x20position\x20every\x20week.', '</span>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<span\x20style=\x22color:var(--color-border-secondary);font-size:11px;\x22>·</span>\x0a\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:5px;white-space:nowrap;\x22>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:var(--color-text-secondary);font-size:12px;\x22>Daily\x20cap</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-weight:500;color:var(--color-text-primary);\x22>KSh\x20', 'how\x20is', 'Review\x20your\x20top\x205\x20selling\x20items\x20and\x20check\x20what\x20you\x27re\x20making\x20per\x20unit\x20after\x20cost.\x20If\x20any\x20item\x20is\x20below\x2025%\x20margin,\x20either\x20raise\x20the\x20price\x20or\x20stop\x20stocking\x20it.\x20Busy\x20sales\x20with\x20thin\x20margins\x20are\x20worse\x20than\x20fewer\x20sales\x20with\x20healthy\x20margins.', 'Service\x20worker\x20failed\x20–\x20install\x20may\x20not\x20work', '<div\x20style=\x22padding:50px;text-align:center;background:white;border-radius:16px;max-width:400px;\x22><p\x20style=\x22color:green;font-size:19px;\x22>\x20Everything\x20restored!<br>Reloading\x20nice\x20UI...</p></div>', 'getElementById', 'liquid', 'charCodeAt', 'hud-cover', '</div>\x0a\x20\x20\x20\x20</div>', '\x20—\x20that\x27s\x20the\x20money\x20available\x20after\x20all\x20your\x20obligations.\x20Hiring\x20someone\x20means\x20committing\x20to\x20a\x20wage\x20every\x20single\x20month,\x20regardless\x20of\x20whether\x20sales\x20are\x20good\x20or\x20bad\x20that\x20month.\x20With\x20this\x20buffer,\x20one\x20bad\x20week\x20and\x20you\x27d\x20be\x20unable\x20to\x20pay\x20them,\x20which\x20destroys\x20trust\x20and\x20your\x20reputation\x20as\x20an\x20employer\x20faster\x20than\x20anything\x20else.', 'recovery-overlay', '4157640LyiTae', 'what\x20can\x20i\x20spend', 'decode', '),\x20you\x20can\x20start\x20investing\x20up\x20to\x2010–15%\x20of\x20your\x20monthly\x20surplus.\x20Start\x20with\x20a\x20SACCO\x20if\x20you\x20don\x27t\x20have\x20one.', 'travis-ui-cache-v1', '%,\x20which\x20would\x20be\x20KSh\x20', 'userAgent', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'getMonth', '\x20entries</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'Sales\x20Revenue', 'setItem', '%\x20of\x20your\x20buffer,\x20this\x20would\x20strain\x20your\x20liquidity.\x20Look\x20at\x20leasing,\x20hire-purchase,\x20or\x20phased\x20payment\x20options.\x20Avoid\x20a\x20lump-sum\x20cash\x20buy\x20right\x20now.', 'type', 'Phone\x20number\x20is\x20required.', 'Other\x20Fun\x20Spending', 'loan', 'TravisGuardian\x20•\x202026', 'cssText', '</span></div>', 'objectStore', 'daysRem', './sw.js', 'fingerprint', 'Failed\x20to\x20read/decrypt\x20backup\x20file', 'How\x20can\x20I\x20increase\x20my\x20income\x20without\x20a\x20loan?', 'Clothes', 'revenue\x20this', 'You\x20can\x20stretch\x20it\x20this\x20once,\x20but\x20log\x20it\x20and\x20don\x27t\x20do\x20this\x20two\x20days\x20in\x20a\x20row.', 'without\x20hurting\x20your\x20cash\x20position', '\x20|\x20Spent:\x20', 'appinstalled', '</p><button\x20onclick=\x22location.reload()\x22\x20style=\x22margin-top:15px;padding:12px\x2024px;\x22>Try\x20Again</button></div>', 'short', 'prompt', 'subtle', 'Buying\x20equipment\x20is\x20a\x20capital\x20decision,\x20not\x20an\x20expense\x20—\x20you\x27re\x20converting\x20cash\x20into\x20something\x20that\x20should\x20earn\x20its\x20keep.\x20The\x20key\x20number\x20is\x20payback\x20period:\x20how\x20long\x20before\x20this\x20asset\x20generates\x20enough\x20to\x20cover\x20what\x20you\x20paid\x20for\x20it?\x20Your\x20buffer\x20is\x20KSh\x20', '\x20Whatever\x20decision\x20you\x27re\x20thinking\x20about,\x20that\x27s\x20the\x20context\x20it\x20sits\x20in.', '\x20days\x20would\x20each\x20have\x20roughly\x20KSh\x20', '<p\x20class=\x22opacity-30\x22>No\x20obligations.</p>', 'remove', 'Travisguardian', '\x20per\x20month.\x20Put\x20this\x20in\x20a\x20money\x20market\x20fund\x20or\x20SACCO\x20—\x20not\x20a\x20savings\x20account\x20paying\x202%\x20—\x20because\x20inflation\x20will\x20quietly\x20eat\x20a\x20savings\x20account.\x20A\x20money\x20market\x20fund\x20in\x20Kenya\x20typically\x20earns\x208–12%\x20annually,\x20which\x20means\x20your\x20savings\x20are\x20actually\x20growing.', '\x20days\x20left\x20this\x20month,\x20the\x20question\x20is\x20whether\x20your\x20stock\x20typically\x20moves\x20within\x207–10\x20days\x20or\x20it\x20sits.', 'textContent', 'view-port', 'status', 'ask', '\x20in\x20free\x20cash\x20after\x20obligations,\x20', '14px\x20\x27Arial\x27', 'height', '</span>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20style=\x22display:flex;gap:10px;margin-bottom:20px;\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:10px;font-weight:700;color:var(--color-text-secondary);margin-top:4px;min-width:28px;\x22>TRV</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22travis-msg\x22\x20style=\x22font-size:14px;flex:1;\x22>', 'UA-unknown', 'click', 'sacco', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22glass\x20p-6\x20border-l-4\x20border-[#4ade80]\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-[10px]\x20opacity-40\x20uppercase\x20tracking-widest\x22>Disposable\x20Buffer</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22text-4xl\x20font-black\x22>KSh\x20', 'rgba(102,\x20204,\x200,\x200.7)', ',\x20which\x20means\x20you\x27re\x20already\x20spending\x20money\x20you\x20don\x27t\x20have.\x20Paying\x20this\x20now\x20would\x20deepen\x20the\x20hole.\x20That\x20doesn\x27t\x20mean\x20ignore\x20it\x20—\x20it\x20means\x20you\x20need\x20to\x20either\x20bring\x20in\x20money\x20fast\x20(collect\x20debts,\x20push\x20sales,\x20call\x20a\x20trusted\x20person)\x20or\x20negotiate\x20a\x20short\x20delay\x20on\x20this\x20specific\x20payment.', 'tpin', 'target', '\x20font-black\x20text-sm\x20uppercase\x22>', 'filter', '11,500', '\x20of\x20safe\x20daily\x20spend,\x20which\x20is\x20decent\x20room\x20to\x20work\x20with', 'init', 'Tax', 'btn-b', 'harambee', 'inventory', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x20text-right\x20font-mono\x20text-red-400\x20font-bold\x20whitespace-nowrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-', 'REVENUE', 'worker', 'display-mode', '\x20to\x20manage\x20the\x20next\x20', 'markTodayRecorded', 'Failed\x20to\x20backup\x20', 'pin', 'merchandise', 'var(--color-text-danger)', 'function', 'style', 'wage', 'You\x20need\x20to\x20actively\x20cut\x20at\x20least\x20one\x20category\x20of\x20non-essential\x20spending\x20this\x20week\x20and\x20look\x20for\x20one\x20way\x20to\x20bring\x20in\x20extra\x20cash\x20—\x20even\x20a\x20small\x20side\x20sale.\x20Don\x27t\x20let\x20moderate\x20become\x20critical.', 'oncomplete', 'which\x20is\x20better', 'includes', '.\x20If\x20your\x20goods\x20are\x20slow-moving,\x20cut\x20the\x20order\x20to\x20KSh\x20', '.\x20Your\x20insolvency\x20risk\x20is\x20', 'Rent', 'more\x20money', 'Hold\x20off\x20on\x20this.\x20It\x27s\x20not\x20about\x20the\x20amount\x20being\x20huge\x20—\x20it\x27s\x20about\x20what\x20month\x20end\x20looks\x20like\x20if\x20you\x20keep\x20going.\x20Protect\x20the\x20buffer\x20first.', 'If\x20your\x20stock\x20moves\x20fast\x20(within\x207\x20days),\x20go\x20ahead\x20but\x20no\x20more\x20than\x20KSh\x20', '5,750+', 'itax', 'KSh\x20', 'Salary', 'send\x20money', '%\x20of\x20your\x20buffer,\x20which\x20is\x20too\x20aggressive\x20unless\x20revenue\x20is\x20guaranteed\x20to\x20increase.', '\x20STRATEGY\x20ENGINE', 'Travel\x20(fun)', '|||', '\x20before\x20month\x20end.', 'Either\x20negotiate\x20the\x20wage\x20down\x20to\x20KSh\x20', 'Your\x20browser\x20does\x20not\x20support\x20file\x20selection.', 'forEach', 'How\x20to\x20make\x20more\x20profit', 'color', '\x20days\x20would\x20still\x20be\x20workable\x20at\x20KSh\x20', 'Pay\x20it\x20—\x20obligations\x20must\x20be\x20honoured.\x20But\x20immediately\x20after,\x20cut\x20all\x20discretionary\x20spending\x20for\x20the\x20rest\x20of\x20this\x20week\x20and\x20focus\x20on\x20cash\x20inflow\x20to\x20rebuild\x20that\x20buffer.', 'school', 'machine', '\x20borrowed\x20becomes\x20KSh\x20', 'Restore\x20failed', '\x22\x20class=\x22w-24\x20p-2\x20text-sm\x22><button\x20onclick=\x22this.parentElement.remove()\x22\x20class=\x22text-red-500\x20font-bold\x22>×</button>', 'AVOIDABLE\x20EXPENSES\x20(Can\x20cut\x20back)', 'hud-cap', ',\x20avoid\x20any\x20large\x20discretionary\x20buys\x20this\x20week,\x20and\x20you\x27ll\x20finish\x20the\x20month\x20with\x20breathing\x20room.', 'equipment', ',\x20a\x20safe\x20wage\x20budget\x20is\x20around\x20KSh\x20', 'help-modal', 'phone-modal', 'vat', 'pay\x20for', '\x20days\x20until\x20month\x20end.\x20', 'floor', 'laptop', '#4ade80', 'destroy', 'fillRect', 'safeCash', 'lastQuestion', 'unshift', 'done', '.\x20Right\x20now,\x20', 'appendChild', 'availWidth', 'critical', 'replaceWith', 'width', 'you\x20have\x20a\x20foundation\x20to\x20work\x20from,\x20and\x20the\x20highest\x20leverage\x20move\x20is\x20usually\x20improving\x20your\x20margins\x20before\x20growing\x20volume', 'modal-phone', 'CEILING', 'install-btn', 'book', 'withdraw', '\x27;handleAsk();\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22font-size:12px;padding:5px\x2012px;border-radius:var(--border-radius-md);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:0.5px\x20solid\x20var(--color-border-secondary);background:transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:var(--color-text-secondary);cursor:pointer;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'flex\x20gap-2', 'result', 'What\x20is\x20the\x20most\x20important\x20financial\x20action\x20I\x20should\x20take\x20today?', 'fridge', '\x20for\x20restocking\x20sits\x20at\x20a\x20healthy\x20', 'paye', 'Office\x20Supplies', 'crypto', 'Buying\x20equipment\x20for\x20KSh\x20', '5GgIIPB', 'Show\x20me\x20my\x207-day\x20cash\x20forecast', 'skip-btn', 'purchase', '\x20owed.\x20If\x20you\x27re\x20using\x20it\x20to\x20buy\x20stock\x20that\x20turns\x20over\x20in\x207\x20days\x20and\x20nets\x20you\x2030%\x20margin\x20—\x20that\x20math\x20works.\x20If\x20you\x27re\x20borrowing\x20to\x20cover\x20daily\x20expenses\x20or\x20a\x20one-time\x20cost\x20that\x20doesn\x27t\x20generate\x20income,\x20you\x27ll\x20pay\x20the\x20interest\x20and\x20be\x20back\x20in\x20the\x20same\x20position,\x20just\x20poorer.', 'projection', '#ef4444', 'Side\x20Hustle', 'Restock\x20at\x20a\x20maximum\x20of\x20KSh\x20', 'px-4\x20py-2\x20border-2\x20border-red-500\x20text-red-500\x20rounded\x20font-black\x20animate-pulse', 'tell\x20me\x20about', 'Market\x20Exchange', '\x20The\x20danger\x20is\x20treating\x20a\x20loan\x20as\x20free\x20money\x20—\x20it\x20isn\x27t.', 'daily', 'borrow', 'you\x20have\x20KSh\x20'];
    _0x3e4e = function() {
        return _0x502c6a;
    };
    return _0x3e4e();
}
async function getAllData(_0x37d479) {
    const _0x403ae2 = _0x2743b7,
        _0xf6a2c7 = db[_0x403ae2(0x208)](_0x37d479, _0x403ae2(0x304)),
        _0xe1ac2a = _0xf6a2c7[_0x403ae2(0x391)](_0x37d479)[_0x403ae2(0x42e)]();
    return new Promise(_0x54611e => _0xe1ac2a[_0x403ae2(0x231)] = () => _0x54611e(_0xe1ac2a[_0x403ae2(0x410)]));
}

function closeTxModal() {
    const _0x365664 = _0x2743b7;
    document[_0x365664(0x376)](_0x365664(0x1fc))[_0x365664(0x323)][_0x365664(0x25e)](_0x365664(0x35a)), document['getElementById'](_0x365664(0x32c))[_0x365664(0x305)] = '';
}
window[_0x2743b7(0x26c)] = boot;
async function boot() {
    const _0x2afb88 = _0x2743b7;
    await initDB();
    let _0x5e2caa = await getData(_0x2afb88(0x273), _0x2afb88(0x2f5)) || {
        'activated': ![]
    };
    const _0x15bdec = window[_0x2afb88(0x47f)]('(display-mode:\x20standalone)')['matches'] || navigator[_0x2afb88(0x31e)] === !![];
    await new Promise(_0x31ef43 => setTimeout(_0x31ef43, 0x320));
    if (!_0x5e2caa['activated']) _0x15bdec ? (document[_0x2afb88(0x376)](_0x2afb88(0x233))['classList'][_0x2afb88(0x3a5)](_0x2afb88(0x35a)), document[_0x2afb88(0x376)](_0x2afb88(0x434))['classList'][_0x2afb88(0x25e)]('hidden'), document['getElementById'](_0x2afb88(0x464))[_0x2afb88(0x323)][_0x2afb88(0x25e)](_0x2afb88(0x35a))) : (document[_0x2afb88(0x376)](_0x2afb88(0x434))[_0x2afb88(0x323)]['remove']('hidden'), document[_0x2afb88(0x376)](_0x2afb88(0x233))[_0x2afb88(0x323)][_0x2afb88(0x25e)](_0x2afb88(0x35a)), document[_0x2afb88(0x376)](_0x2afb88(0x464))[_0x2afb88(0x323)][_0x2afb88(0x25e)](_0x2afb88(0x35a)));
    else !_0x5e2caa[_0x2afb88(0x439)] ? (document[_0x2afb88(0x376)]('setup-overlay')[_0x2afb88(0x323)][_0x2afb88(0x3a5)](_0x2afb88(0x35a)), document[_0x2afb88(0x376)](_0x2afb88(0x434))['classList']['add'](_0x2afb88(0x35a)), document[_0x2afb88(0x376)](_0x2afb88(0x464))[_0x2afb88(0x323)][_0x2afb88(0x25e)](_0x2afb88(0x35a))) : (state[_0x2afb88(0x439)] = _0x5e2caa[_0x2afb88(0x439)], state['obligations'] = _0x5e2caa[_0x2afb88(0x2b9)], state[_0x2afb88(0x26f)] = (await getAllData('tx'))['sort']((_0x4ac73f, _0x214faf) => _0x214faf['id'] - _0x4ac73f['id']), document[_0x2afb88(0x376)](_0x2afb88(0x234))[_0x2afb88(0x321)] = state['user'][_0x2afb88(0x47d)], document[_0x2afb88(0x376)](_0x2afb88(0x3c5))[_0x2afb88(0x321)] = state['user'][_0x2afb88(0x38a)] + _0x2afb88(0x3df), document[_0x2afb88(0x376)](_0x2afb88(0x464))[_0x2afb88(0x323)][_0x2afb88(0x3a5)](_0x2afb88(0x35a)), document[_0x2afb88(0x376)](_0x2afb88(0x434))[_0x2afb88(0x323)][_0x2afb88(0x25e)](_0x2afb88(0x35a)), document[_0x2afb88(0x376)]('setup-overlay')['classList'][_0x2afb88(0x25e)]('hidden'), nav(_0x2afb88(0x32a)), travisNotif[_0x2afb88(0x3bd)]());
}
document[_0x2743b7(0x376)](_0x2743b7(0x40b))?.['addEventListener'](_0x2743b7(0x3b2), triggerInstall), window[_0x2743b7(0x26c)] = boot;
