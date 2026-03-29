const _0x570119 = _0x2323;
(function(_0x38778c, _0x1a59c8) {
    const _0x5c3e98 = _0x2323,
        _0x2fe8bd = _0x38778c();
    while (!![]) {
        try {
            const _0x3bfd25 = -parseInt(_0x5c3e98(0x9b)) / 0x1 * (-parseInt(_0x5c3e98(0x299)) / 0x2) + -parseInt(_0x5c3e98(0x2cd)) / 0x3 * (parseInt(_0x5c3e98(0x17b)) / 0x4) + -parseInt(_0x5c3e98(0x2fe)) / 0x5 * (-parseInt(_0x5c3e98(0x2b7)) / 0x6) + parseInt(_0x5c3e98(0x1c8)) / 0x7 + parseInt(_0x5c3e98(0x139)) / 0x8 + -parseInt(_0x5c3e98(0x8e)) / 0x9 * (-parseInt(_0x5c3e98(0x13a)) / 0xa) + -parseInt(_0x5c3e98(0x207)) / 0xb * (parseInt(_0x5c3e98(0x1a4)) / 0xc);
            if (_0x3bfd25 === _0x1a59c8) break;
            else _0x2fe8bd['push'](_0x2fe8bd['shift']());
        } catch (_0x2c7328) {
            _0x2fe8bd['push'](_0x2fe8bd['shift']());
        }
    }
}(_0x1d37, 0x9b218));
const BACKEND_URL = _0x570119(0x149);

function updateClock() {
    const _0x2de544 = _0x570119,
        _0x118147 = new Date();
    document['getElementById'](_0x2de544(0x2b9))[_0x2de544(0x144)] = _0x118147[_0x2de544(0x26e)]('en-KE', {
        'hour': _0x2de544(0x181),
        'minute': '2-digit'
    }), document[_0x2de544(0xba)](_0x2de544(0x2d8))[_0x2de544(0x144)] = _0x118147[_0x2de544(0x79)](_0x2de544(0xd1), {
        'weekday': _0x2de544(0x2c3),
        'day': _0x2de544(0xab),
        'month': _0x2de544(0x2c3)
    });
}
setInterval(updateClock, 0x3e8), updateClock();

function toggleMobileSidebar() {
    const _0x299af5 = _0x570119,
        _0x47e471 = document[_0x299af5(0xba)](_0x299af5(0x11a));
    _0x47e471['classList'][_0x299af5(0xad)](_0x299af5(0x19c));
}

function showCustomAlert(_0x51794a, _0x264c3e = null) {
    const _0x416551 = _0x570119,
        _0x5947ba = document['getElementById'](_0x416551(0xf6)),
        _0x4aa164 = document['getElementById']('custom-alert-message'),
        _0x3cea55 = document[_0x416551(0xba)](_0x416551(0x28c));
    _0x4aa164['innerHTML'] = _0x51794a, _0x5947ba[_0x416551(0x224)][_0x416551(0x7e)] = _0x416551(0x1c4);
    const _0x5d0baf = _0x3cea55['cloneNode'](!![]);
    _0x3cea55[_0x416551(0x13b)][_0x416551(0xc7)](_0x5d0baf, _0x3cea55), _0x5d0baf[_0x416551(0x27a)]('click', () => {
        const _0x4c8cf9 = _0x416551;
        _0x5947ba['style'][_0x4c8cf9(0x7e)] = 'none';
        if (_0x264c3e) _0x264c3e();
    });
}
_0x570119(0xcf) in navigator && window[_0x570119(0x27a)](_0x570119(0x2d4), () => {
    const _0x2a1879 = _0x570119;
    navigator[_0x2a1879(0xcf)][_0x2a1879(0x23a)](_0x2a1879(0x262))['catch'](_0xcc3c2e => {
        const _0x168c22 = _0x2a1879;
        document['getElementById']('install-status')[_0x168c22(0x1d9)] = _0x168c22(0x2b2);
    });
});
let deferredPrompt = null;
window[_0x570119(0x27a)](_0x570119(0x16b), _0x5d50d4 => {
    const _0x17742f = _0x570119;
    _0x5d50d4[_0x17742f(0x2f3)](), deferredPrompt = _0x5d50d4, document[_0x17742f(0xba)](_0x17742f(0x164))[_0x17742f(0x20c)] = ![], document[_0x17742f(0xba)]('install-status')[_0x17742f(0x1d9)] = _0x17742f(0xa6);
}), window[_0x570119(0x27a)](_0x570119(0x2dd), () => {
    setTimeout(showPhoneModal, 0x258);
});

function generateFingerprint() {
    const _0x495c9e = _0x570119;
    let _0x1ba0a2 = localStorage['getItem']('fp');
    if (_0x1ba0a2 && _0x1ba0a2[_0x495c9e(0xb4)] === 0x20) return _0x1ba0a2;
    const _0x57a06e = (function() {
            const _0x40ed63 = _0x495c9e;
            try {
                const _0x1f8da6 = document[_0x40ed63(0x17f)](_0x40ed63(0x205));
                _0x1f8da6[_0x40ed63(0x6d)] = 0x100, _0x1f8da6[_0x40ed63(0x266)] = 0x3c;
                const _0x3f587a = _0x1f8da6[_0x40ed63(0x24d)]('2d');
                return _0x3f587a[_0x40ed63(0x259)] = 'top', _0x3f587a[_0x40ed63(0x2d2)] = _0x40ed63(0x113), _0x3f587a[_0x40ed63(0x159)] = '#f60', _0x3f587a[_0x40ed63(0x2f4)](0x7d, 0x1, 0x3e, 0x14), _0x3f587a[_0x40ed63(0x159)] = _0x40ed63(0x18d), _0x3f587a[_0x40ed63(0x23b)]('TravisGuardian\x20•\x202026', 0x2, 0xf), _0x3f587a[_0x40ed63(0x159)] = 'rgba(102,204,0,0.7)', _0x3f587a[_0x40ed63(0x23b)]('TravisGuardian\x20•\x202026', 0x4, 0x11), _0x1f8da6[_0x40ed63(0x78)]();
            } catch (_0x3b346c) {
                return 'canvas-fail';
            }
        }()),
        _0x1bd3e6 = [navigator[_0x495c9e(0x134)] || _0x495c9e(0x2d7), navigator[_0x495c9e(0xb5)] || _0x495c9e(0xfb), navigator[_0x495c9e(0x1b0)] || '0', screen[_0x495c9e(0x6d)] + '×' + screen[_0x495c9e(0x266)] + '×' + (screen[_0x495c9e(0x2ae)] || 0x0), screen[_0x495c9e(0x93)] + '×' + screen[_0x495c9e(0x294)], new Date()[_0x495c9e(0x1c9)](), Intl[_0x495c9e(0xdb)]()[_0x495c9e(0xc0)]()[_0x495c9e(0x154)] || _0x495c9e(0xa1), _0x57a06e[_0x495c9e(0x2ba)](0x0, 0xc8)][_0x495c9e(0x1cd)](_0x495c9e(0x2da));
    let _0x2fc173 = 0x1505;
    for (let _0x55c94d = 0x0; _0x55c94d < _0x1bd3e6[_0x495c9e(0xb4)]; _0x55c94d++) {
        _0x2fc173 = (_0x2fc173 << 0x5) + _0x2fc173 + _0x1bd3e6[_0x495c9e(0x9e)](_0x55c94d) | 0x0;
    }
    let _0x27f5c5 = '';
    while (_0x27f5c5[_0x495c9e(0xb4)] < 0x20) {
        _0x2fc173 = _0x2fc173 * 0x1f + 0x9e3779b9 | 0x0, _0x27f5c5 += (Math[_0x495c9e(0x15a)](_0x2fc173) % 0x24)['toString'](0x24)[_0x495c9e(0xcd)]();
    }
    return _0x27f5c5 = _0x27f5c5['substring'](0x0, 0x20), localStorage[_0x495c9e(0x2a7)]('fp', _0x27f5c5), _0x27f5c5;
}

function encryptFingerprint(_0xac18f) {
    const _0x4531dc = _0x570119,
        _0x550ecf = 'TRAVIS-GUARDIAN-SECURE-2026-x7k9';
    let _0x4aa514 = '';
    for (let _0x13ad87 = 0x0; _0x13ad87 < _0xac18f['length']; _0x13ad87++) {
        _0x4aa514 += String[_0x4531dc(0x193)](_0xac18f[_0x4531dc(0x9e)](_0x13ad87) ^ _0x550ecf['charCodeAt'](_0x13ad87 % _0x550ecf[_0x4531dc(0xb4)]));
    }
    return btoa(_0x4aa514);
}

function showPhoneModal() {
    const _0x16020e = _0x570119;
    if (document[_0x16020e(0xba)](_0x16020e(0xb9))) return;
    const _0x3ae5d5 = document[_0x16020e(0x17f)](_0x16020e(0x268));
    _0x3ae5d5['id'] = 'phone-modal', _0x3ae5d5[_0x16020e(0x224)]['cssText'] = _0x16020e(0xc9), _0x3ae5d5['innerHTML'] = '<div\x20style=\x22background:white;padding:28px;border-radius:16px;max-width:400px;width:90%;\x22><h3\x20style=\x22color:var(--win-accent-light);margin:0\x200\x2016px;font-size:16px;\x22>Link\x20Device\x20Fingerprint</h3><input\x20id=\x22modal-phone\x22\x20type=\x22tel\x22\x20placeholder=\x22254712345678\x22\x20class=\x22win-input\x22\x20style=\x22width:100%;margin-bottom:16px;font-size:16px;\x22><button\x20onclick=\x22submitPhoneAndFP()\x22\x20class=\x22btn-accent\x22\x20style=\x22width:100%;padding:13px;\x22>Submit\x20Phone</button></div>', document[_0x16020e(0x25d)][_0x16020e(0x1ff)](_0x3ae5d5);
}
async function submitPhoneAndFP() {
    const _0x5a1aeb = _0x570119,
        _0x5054fe = document[_0x5a1aeb(0xba)](_0x5a1aeb(0x97))[_0x5a1aeb(0x111)][_0x5a1aeb(0x81)]();
    if (!_0x5054fe) {
        alert('Phone\x20number\x20is\x20required.');
        return;
    }
    const _0x1580fa = generateFingerprint(),
        _0x48f26f = encryptFingerprint(_0x1580fa);
    try {
        await fetch(BACKEND_URL + _0x5a1aeb(0x233), {
            'method': _0x5a1aeb(0x133),
            'headers': {
                'Content-Type': _0x5a1aeb(0x228)
            },
            'body': JSON['stringify']({
                'encrypted': _0x48f26f,
                'phone': _0x5054fe,
                'ts': Date[_0x5a1aeb(0x230)]()
            })
        }), alert(_0x5a1aeb(0x1d5)), document[_0x5a1aeb(0xba)](_0x5a1aeb(0xb9))[_0x5a1aeb(0xa8)]();
    } catch (_0x4c97f5) {
        alert(_0x5a1aeb(0x275));
    }
}
async function triggerInstall() {
    const _0x55652e = _0x570119;
    if (!deferredPrompt) {
        alert('Install\x20not\x20ready.\x20Refresh\x20the\x20page.');
        return;
    }
    try {
        await deferredPrompt[_0x55652e(0x155)]();
        const {
            outcome: _0x592185
        } = await deferredPrompt[_0x55652e(0x114)];
        deferredPrompt = null;
    } catch (_0x59cb05) {
        console[_0x55652e(0x206)](_0x59cb05);
    }
}
async function attemptActivation() {
    const _0x58820d = _0x570119,
        _0xb28305 = document[_0x58820d(0xba)](_0x58820d(0x29e))['value']['trim']()['toUpperCase']()[_0x58820d(0x265)](/[^0-9A-Z-]/g, ''),
        _0x4eb3fe = localStorage[_0x58820d(0x105)]('fp');
    if (!_0x4eb3fe || _0x4eb3fe[_0x58820d(0xb4)] !== 0x20) {
        showCustomAlert('No\x20valid\x20device\x20fingerprint\x20found.<br><br>Please\x20restart\x20installation\x20process.');
        return;
    }
    const _0x69f6d1 = _0x4eb3fe[_0x58820d(0xd8)](0x3, 0xb),
        _0x50989b = _0x58820d(0x174) + _0x69f6d1 + _0x58820d(0x9d);
    if (_0xb28305 === _0x50989b) {
        let _0x4f7526 = await getData('meta', _0x58820d(0x2a5)) || {};
        await saveData(_0x58820d(0xd3), {
            ..._0x4f7526,
            'id': _0x58820d(0x2a5),
            'activated': !![],
            'fingerprint': _0x4eb3fe,
            'activatedAt': Date[_0x58820d(0x230)]()
        }), document[_0x58820d(0xba)](_0x58820d(0x28e))[_0x58820d(0x1e9)][_0x58820d(0x276)](_0x58820d(0x1be)), location[_0x58820d(0x1ca)]();
    } else showCustomAlert(_0x58820d(0x119)), document['getElementById']('act-code')[_0x58820d(0x111)] = '', document[_0x58820d(0xba)](_0x58820d(0x29e))['focus']();
}
let db, backupDirHandle = null,
    state = {
        'user': null,
        'transactions': [],
        'obligations': []
    };
const BACKUP_FILE = _0x570119(0x1c2);
async function deriveKey(_0x204701, _0x6cb55d) {
    const _0x7e3f76 = _0x570119,
        _0x54cea1 = new TextEncoder(),
        _0x2b5bec = await crypto[_0x7e3f76(0x304)][_0x7e3f76(0x17e)](_0x7e3f76(0x132), _0x54cea1[_0x7e3f76(0x128)](_0x204701), _0x7e3f76(0x176), ![], [_0x7e3f76(0x2af), _0x7e3f76(0x290)]);
    return crypto[_0x7e3f76(0x304)][_0x7e3f76(0x290)]({
        'name': _0x7e3f76(0x176),
        'salt': _0x6cb55d,
        'iterations': 0x927c0,
        'hash': _0x7e3f76(0xbc)
    }, _0x2b5bec, {
        'name': _0x7e3f76(0x248),
        'length': 0x100
    }, ![], [_0x7e3f76(0x24e), _0x7e3f76(0x107)]);
}
async function encryptData(_0x37b72d, _0x24528e) {
    const _0x3b1c33 = _0x570119,
        _0x2d3c1f = new TextEncoder(),
        _0x150022 = JSON[_0x3b1c33(0x19f)](_0x37b72d),
        _0x52e37c = crypto[_0x3b1c33(0x1a0)](new Uint8Array(0xc)),
        _0x36b8e9 = crypto['getRandomValues'](new Uint8Array(0x10)),
        _0x13ed38 = await deriveKey(_0x24528e, _0x36b8e9),
        _0x17ea00 = await crypto[_0x3b1c33(0x304)][_0x3b1c33(0x24e)]({
            'name': _0x3b1c33(0x248),
            'iv': _0x52e37c
        }, _0x13ed38, _0x2d3c1f[_0x3b1c33(0x128)](_0x150022)),
        _0x1fc753 = new Uint8Array(_0x36b8e9['length'] + _0x52e37c[_0x3b1c33(0xb4)] + _0x17ea00[_0x3b1c33(0x22c)]);
    return _0x1fc753[_0x3b1c33(0x231)](_0x36b8e9, 0x0), _0x1fc753[_0x3b1c33(0x231)](_0x52e37c, _0x36b8e9[_0x3b1c33(0xb4)]), _0x1fc753[_0x3b1c33(0x231)](new Uint8Array(_0x17ea00), _0x36b8e9[_0x3b1c33(0xb4)] + _0x52e37c[_0x3b1c33(0xb4)]), _0x1fc753;
}
async function decryptData(_0xf554a2, _0x3d01bf) {
    const _0x44d2a7 = _0x570119,
        _0x3e41df = _0xf554a2[_0x44d2a7(0xd8)](0x0, 0x10),
        _0x53d50b = _0xf554a2['slice'](0x10, 0x1c),
        _0x4c3631 = _0xf554a2[_0x44d2a7(0xd8)](0x1c),
        _0x31a4d6 = await deriveKey(_0x3d01bf, _0x3e41df),
        _0x193304 = await crypto[_0x44d2a7(0x304)][_0x44d2a7(0x107)]({
            'name': 'AES-GCM',
            'iv': _0x53d50b
        }, _0x31a4d6, _0x4c3631);
    return JSON[_0x44d2a7(0x180)](new TextDecoder()[_0x44d2a7(0x1f8)](_0x193304));
}
async function getData(_0x2ee6d4, _0x5356d1) {
    const _0x3cf83c = _0x570119;
    if (!db) return null;
    try {
        const _0x55f78c = db[_0x3cf83c(0x2fc)](_0x2ee6d4, _0x3cf83c(0x28f)),
            _0x320fbd = _0x55f78c[_0x3cf83c(0x94)](_0x2ee6d4);
        return new Promise(_0x182496 => {
            const _0x349599 = _0x3cf83c,
                _0x50bf2e = _0x320fbd[_0x349599(0x295)](_0x5356d1);
            _0x50bf2e[_0x349599(0x16c)] = () => _0x182496(_0x50bf2e[_0x349599(0x163)]), _0x50bf2e[_0x349599(0x13d)] = () => _0x182496(null);
        });
    } catch (_0x5bd40a) {
        return null;
    }
}
async function getAllData(_0x16bc7c) {
    const _0x5a9e26 = _0x570119;
    if (!db) return [];
    try {
        const _0x51bd9d = db[_0x5a9e26(0x2fc)](_0x16bc7c, _0x5a9e26(0x28f)),
            _0x525a86 = _0x51bd9d[_0x5a9e26(0x94)](_0x16bc7c);
        return new Promise(_0x21b476 => {
            const _0x1f70e3 = _0x5a9e26,
                _0x3ed126 = _0x525a86[_0x1f70e3(0x1ea)]();
            _0x3ed126[_0x1f70e3(0x16c)] = () => _0x21b476(_0x3ed126[_0x1f70e3(0x163)]), _0x3ed126['onerror'] = () => _0x21b476([]);
        });
    } catch (_0x137c1d) {
        return [];
    }
}
async function saveData(_0x53ecb2, _0x4c6ada) {
    const _0x3163f2 = _0x570119,
        _0x77fad3 = db[_0x3163f2(0x2fc)](_0x53ecb2, _0x3163f2(0x1bc));
    return _0x77fad3['objectStore'](_0x53ecb2)[_0x3163f2(0x292)](_0x4c6ada), new Promise(_0x1690f4 => _0x77fad3[_0x3163f2(0xa9)] = _0x1690f4);
}
async function backupUIAssets() {
    const _0x3346c8 = _0x570119;
    if (!backupDirHandle) return;
    const _0x151c13 = [{
        'name': _0x3346c8(0x1f3)
    }, {
        'name': _0x3346c8(0x2f2)
    }, {
        'name': _0x3346c8(0x1ee)
    }, {
        'name': _0x3346c8(0x236)
    }, {
        'name': _0x3346c8(0x15c)
    }, {
        'name': _0x3346c8(0x1ef)
    }];
    for (const _0x2ff6fe of _0x151c13) {
        try {
            const _0x311794 = await fetch(_0x2ff6fe['name']);
            if (!_0x311794['ok']) continue;
            const _0x4f1d1b = await _0x311794[_0x3346c8(0x1f7)](),
                _0x57daf1 = await backupDirHandle[_0x3346c8(0x15f)](_0x2ff6fe['name'], {
                    'create': !![]
                }),
                _0x47b25f = await _0x57daf1[_0x3346c8(0x1ab)]();
            await _0x47b25f['write'](_0x4f1d1b), await _0x47b25f['close']();
        } catch (_0x4d6dd9) {}
    }
}
async function rebuildUIFromDevice() {
    const _0x4fbd92 = _0x570119;
    if (!backupDirHandle) return ![];
    try {
        const _0x3c1d33 = [_0x4fbd92(0x1f3), _0x4fbd92(0x2f2), _0x4fbd92(0x1ee), _0x4fbd92(0x236), 'input-app.css'],
            _0x3622c6 = await caches[_0x4fbd92(0x22a)](_0x4fbd92(0x199));
        for (const _0x1fdab7 of _0x3c1d33) {
            const _0x5ecb30 = await backupDirHandle[_0x4fbd92(0x15f)](_0x1fdab7),
                _0x59761f = await _0x5ecb30[_0x4fbd92(0x1d7)](),
                _0x3b3682 = await _0x59761f[_0x4fbd92(0x170)]();
            await _0x3622c6[_0x4fbd92(0x292)]('/' + _0x1fdab7, new Response(_0x3b3682, {
                'headers': {
                    'Content-Type': _0x1fdab7[_0x4fbd92(0x29c)](_0x4fbd92(0x24b)) ? 'text/css' : _0x1fdab7[_0x4fbd92(0x29c)]('.js') ? _0x4fbd92(0x161) : 'text/html'
                }
            }));
        }
        return !![];
    } catch (_0x1172ca) {
        return ![];
    }
}
async function saveBackup() {
    const _0x42f436 = _0x570119;
    if (!backupDirHandle || !db) return;
    try {
        const _0x5e4588 = {};
        for (const _0x1afaf5 of ['meta', 'tx']) {
            const _0x2f202b = db[_0x42f436(0x2fc)](_0x1afaf5, _0x42f436(0x28f)),
                _0x17cb88 = _0x2f202b[_0x42f436(0x94)](_0x1afaf5);
            _0x5e4588[_0x1afaf5] = await new Promise(_0xfd6a0f => {
                const _0x2acefe = _0x42f436,
                    _0x4310fd = _0x17cb88[_0x2acefe(0x1ea)]();
                _0x4310fd[_0x2acefe(0x16c)] = () => _0xfd6a0f(_0x4310fd[_0x2acefe(0x163)]), _0x4310fd[_0x2acefe(0x13d)] = () => _0xfd6a0f([]);
            });
        }
        const _0x270c49 = _0x42f436(0x14b),
            _0xb8b0ef = await encryptData(_0x5e4588, _0x270c49),
            _0xc61142 = await backupDirHandle[_0x42f436(0x15f)](BACKUP_FILE, {
                'create': !![]
            }),
            _0x2462cc = await _0xc61142['createWritable']();
        await _0x2462cc[_0x42f436(0x195)](_0xb8b0ef), await _0x2462cc[_0x42f436(0x21a)]();
    } catch (_0x2ca69c) {}
}
async function readBackupContent() {
    const _0x520fd9 = _0x570119;
    try {
        if (!window[_0x520fd9(0x24a)]) return {
            'data': null,
            'error': 'No\x20file\x20handle'
        };
        const _0x3b9216 = await window[_0x520fd9(0x24a)]['getFile'](),
            _0x4423e9 = await _0x3b9216[_0x520fd9(0x170)](),
            _0x143ae9 = new Uint8Array(_0x4423e9),
            _0x674c8b = prompt('Enter\x20the\x20backup\x20password\x20to\x20decrypt\x20your\x20data:');
        if (!_0x674c8b) return {
            'data': null,
            'error': _0x520fd9(0x6f)
        };
        const _0x265f2c = await decryptData(_0x143ae9, _0x674c8b);
        return {
            'data': _0x265f2c,
            'error': null
        };
    } catch (_0xc1f27e) {
        return {
            'data': null,
            'error': _0xc1f27e[_0x520fd9(0x142)] === 'OperationError' ? _0x520fd9(0x2e8) : _0x520fd9(0x238)
        };
    }
}
async function restoreFromBackup() {
    const _0x57ded1 = _0x570119,
        {
            data: _0x19b7c1,
            error: _0x29359b
        } = await readBackupContent();
    if (_0x29359b) return {
        'success': ![],
        'error': _0x57ded1(0x14a) + _0x29359b
    };
    if (!_0x19b7c1) return {
        'success': ![],
        'error': _0x57ded1(0x308)
    };
    try {
        for (const _0x5809f4 of [_0x57ded1(0xd3), 'tx']) {
            if (!_0x19b7c1[_0x5809f4] || !Array[_0x57ded1(0x2a4)](_0x19b7c1[_0x5809f4])) continue;
            const _0x3eccdb = db[_0x57ded1(0x2fc)](_0x5809f4, _0x57ded1(0x1bc)),
                _0x215689 = _0x3eccdb[_0x57ded1(0x94)](_0x5809f4);
            await new Promise((_0xdcf0c4, _0x3794dc) => {
                const _0x384dd4 = _0x57ded1,
                    _0x31d0d8 = _0x215689['clear']();
                _0x31d0d8[_0x384dd4(0x16c)] = _0xdcf0c4, _0x31d0d8[_0x384dd4(0x13d)] = () => _0x3794dc(_0x31d0d8[_0x384dd4(0x206)]);
            });
            for (const _0x381917 of _0x19b7c1[_0x5809f4]) {
                await new Promise((_0x31ab79, _0x508ed7) => {
                    const _0x307d00 = _0x57ded1,
                        _0x54bcd1 = _0x215689[_0x307d00(0x292)](_0x381917);
                    _0x54bcd1[_0x307d00(0x16c)] = _0x31ab79, _0x54bcd1[_0x307d00(0x13d)] = () => _0x508ed7(_0x54bcd1[_0x307d00(0x206)]);
                });
            }
            await new Promise(_0x1dd90b => {
                const _0x2b1a5b = _0x57ded1;
                _0x3eccdb[_0x2b1a5b(0xa9)] = _0x1dd90b;
            });
        }
        let _0x20047a = null;
        const _0x3b2911 = await getData(_0x57ded1(0xd3), _0x57ded1(0x2a5));
        if (_0x3b2911?.['fingerprint']) _0x20047a = _0x3b2911['fingerprint'];
        else {
            if (_0x19b7c1[_0x57ded1(0xd3)]) {
                const _0x4d3727 = _0x19b7c1[_0x57ded1(0xd3)][_0x57ded1(0x222)](_0x2e6ba9 => _0x2e6ba9 && _0x2e6ba9['id'] === _0x57ded1(0x2a5));
                _0x20047a = _0x4d3727?.['fingerprint'] || null;
            }
        }
        if (_0x20047a) localStorage[_0x57ded1(0x2a7)]('fp', _0x20047a);
        return {
            'success': !![],
            'error': null
        };
    } catch (_0x2c77a3) {
        return {
            'success': ![],
            'error': 'Failed\x20to\x20write\x20data\x20to\x20database:\x20' + (_0x2c77a3[_0x57ded1(0x104)] || String(_0x2c77a3))
        };
    }
}
async function setupBackupFolder() {
    const _0x2fc7a7 = _0x570119;
    if (_0x2fc7a7(0x70) in window) try {
        backupDirHandle = await window[_0x2fc7a7(0x70)]({
            'mode': _0x2fc7a7(0x1bc),
            'startIn': _0x2fc7a7(0x21f)
        });
        const _0x5681af = db[_0x2fc7a7(0x2fc)]('meta', _0x2fc7a7(0x1bc));
        return await _0x5681af[_0x2fc7a7(0x94)](_0x2fc7a7(0xd3))[_0x2fc7a7(0x292)]({
            'id': _0x2fc7a7(0x2c7),
            'value': backupDirHandle
        }), await _0x5681af[_0x2fc7a7(0x2b0)], await backupUIAssets(), !![];
    } catch (_0x1fad9a) {
        return ![];
    }
    return ![];
}
async function manualRestoreFlow() {
    const _0x1185e2 = _0x570119;
    try {
        let _0x416269;
        if ('showOpenFilePicker' in window) {
            const [_0x4fcdf3] = await window[_0x1185e2(0x89)]({
                'types': [{
                    'description': 'Travis\x20Finance\x20Backup',
                    'accept': {
                        'application/octet-stream': [_0x1185e2(0x249)]
                    }
                }],
                'multiple': ![]
            });
            _0x416269 = _0x4fcdf3;
        } else return alert(_0x1185e2(0x116)), {
            'success': ![],
            'error': 'File\x20picker\x20not\x20supported'
        };
        window[_0x1185e2(0x24a)] = _0x416269;
        const _0x3f73d5 = await restoreFromBackup();
        delete window[_0x1185e2(0x24a)];
        if (_0x3f73d5[_0x1185e2(0x1aa)]) return await rebuildUIFromDevice(), await backupUIAssets(), {
            'success': !![]
        };
        return {
            'success': ![],
            'error': _0x1185e2(0x2eb)
        };
    } catch (_0x52706c) {
        return {
            'success': ![],
            'error': 'User\x20cancelled\x20or\x20error\x20occurred'
        };
    }
}
async function runRecoveryOnStart() {
    const _0x4c081c = _0x570119,
        _0x54400f = document['getElementById'](_0x4c081c(0x216));
    if (!_0x54400f) return;
    _0x54400f[_0x4c081c(0x224)][_0x4c081c(0x7e)] = _0x4c081c(0x2c2);
    try {
        const _0x14fbe4 = await getData(_0x4c081c(0xd3), 'backupHandle');
        if (_0x14fbe4?.[_0x4c081c(0x111)]) backupDirHandle = _0x14fbe4[_0x4c081c(0x111)];
    } catch (_0x55c1ee) {}
    const _0x4335f6 = !!await getData(_0x4c081c(0xd3), _0x4c081c(0x2a5)),
        _0x5b696d = !!localStorage[_0x4c081c(0x105)]('fp');
    if (_0x4335f6 && _0x5b696d) return;
    if (backupDirHandle) await rebuildUIFromDevice();
    _0x54400f['style']['display'] = 'flex', _0x54400f[_0x4c081c(0x120)] = '<div\x20style=\x22position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;z-index:9999;font-family:inherit;\x22><div\x20style=\x22background:white;border-radius:16px;max-width:460px;width:92%;box-shadow:0\x2025px\x2070px\x20rgba(0,0,0,0.3);overflow:hidden;\x22><div\x20style=\x22background:linear-gradient(135deg,#0078D4,#005A9E);color:white;padding:24px;text-align:center;\x22><h2\x20style=\x22margin:0\x200\x206px;font-size:1.3rem;\x22>🔒\x20Travis\x20Guardian</h2><p\x20style=\x22margin:0;opacity:0.85;font-size:13px;\x22>Your\x20Personal\x20Financial\x20Advisor</p></div><div\x20style=\x22padding:28px;text-align:center;\x22><div\x20style=\x22width:60px;height:60px;background:#f0f7ff;color:#0078D4;font-size:28px;border-radius:50%;margin:0\x20auto\x2016px;display:flex;align-items:center;justify-content:center;\x22>📁</div><h3\x20style=\x22margin:0\x200\x2012px;font-size:1.1rem;color:#1a1a1a;\x22>Restore\x20Your\x20Data?</h3><p\x20style=\x22color:#5a5a5a;line-height:1.6;margin-bottom:24px;font-size:13px;\x22>Browser\x20data\x20was\x20cleared.<br>Select\x20your\x20backup\x20file\x20to\x20restore\x20financial\x20records.</p><div\x20style=\x22display:flex;flex-direction:column;gap:10px;\x22><button\x20id=\x22restore-btn\x22\x20style=\x22background:#0078D4;color:white;border:none;padding:13px;font-size:13px;font-weight:600;border-radius:8px;cursor:pointer;\x22>📂\x20Select\x20Backup\x20File\x20&\x20Restore</button><button\x20id=\x22skip-btn\x22\x20style=\x22background:transparent;color:#5a5a5a;border:1px\x20solid\x20#ddd;padding:12px;font-size:13px;border-radius:8px;cursor:pointer;\x22>Continue\x20as\x20New\x20User</button></div><p\x20style=\x22margin:12px\x200\x200;font-size:11px;color:#8a8a8a;\x22>First-time\x20users:\x20choose\x20\x22Continue\x20as\x20New\x20User\x22</p></div></div></div>', document[_0x4c081c(0xba)](_0x4c081c(0x110))['onclick'] = async () => {
        const _0x3d428c = _0x4c081c,
            _0x13dd2a = document[_0x3d428c(0xba)]('restore-btn');
        _0x13dd2a[_0x3d428c(0x20c)] = !![], _0x13dd2a['textContent'] = _0x3d428c(0x1df);
        const _0x20edfb = await manualRestoreFlow();
        _0x20edfb[_0x3d428c(0x1aa)] ? (_0x54400f[_0x3d428c(0x120)] = _0x3d428c(0x169), setTimeout(() => location['reload'](), 0x4b0)) : _0x54400f[_0x3d428c(0x120)] = _0x3d428c(0x103) + (_0x20edfb[_0x3d428c(0x206)] || _0x3d428c(0x2eb)) + '</p><button\x20onclick=\x22location.reload()\x22\x20style=\x22margin-top:12px;padding:10px\x2020px;border-radius:8px;border:none;background:#0078D4;color:white;cursor:pointer;\x22>Try\x20Again</button></div>';
    }, document['getElementById'](_0x4c081c(0x264))['onclick'] = () => _0x54400f[_0x4c081c(0x224)][_0x4c081c(0x7e)] = 'none';
}
async function startFingerprintBackgroundProbe() {
    const _0x55135a = async () => {
        const _0x51e142 = _0x2323;
        if (localStorage[_0x51e142(0x105)]('fp')) return !![];
        const _0x275477 = await getData(_0x51e142(0xd3), _0x51e142(0x2a5));
        if (_0x275477?.[_0x51e142(0x1d8)]) return localStorage[_0x51e142(0x2a7)]('fp', _0x275477[_0x51e142(0x1d8)]), !![];
        return ![];
    };
    setTimeout(() => _0x55135a(), 0x50);
    let _0x51b485 = 0x0;
    const _0x28b85c = setInterval(async () => {
        _0x51b485++;
        if (await _0x55135a() || _0x51b485 > 0xc) clearInterval(_0x28b85c);
    }, 0x1388);
}
async function initDB() {
    return new Promise(_0x413ae7 => {
        const _0x2bdb9b = _0x2323,
            _0x46d1ab = indexedDB[_0x2bdb9b(0x22a)](_0x2bdb9b(0x200), 0x1);
        _0x46d1ab[_0x2bdb9b(0x223)] = _0x171fe3 => {
            const _0x2a28aa = _0x2bdb9b,
                _0x26331d = _0x171fe3[_0x2a28aa(0x286)][_0x2a28aa(0x163)];
            if (!_0x26331d[_0x2a28aa(0x1e2)][_0x2a28aa(0x2ca)](_0x2a28aa(0xd3))) _0x26331d['createObjectStore'](_0x2a28aa(0xd3), {
                'keyPath': 'id'
            });
            if (!_0x26331d['objectStoreNames'][_0x2a28aa(0x2ca)]('tx')) _0x26331d['createObjectStore']('tx', {
                'keyPath': 'id'
            });
        }, _0x46d1ab['onsuccess'] = async _0x4a9da5 => {
            const _0x4b1572 = _0x2bdb9b;
            db = _0x4a9da5[_0x4b1572(0x286)]['result'], startFingerprintBackgroundProbe(), await runRecoveryOnStart(), _0x413ae7();
        }, _0x46d1ab[_0x2bdb9b(0x13d)] = () => _0x413ae7();
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

function isObligation(_0x3839d6) {
    const _0xb77018 = _0x570119;
    if (!state[_0xb77018(0x92)] || state[_0xb77018(0x92)][_0xb77018(0xb4)] === 0x0) return ![];
    return state[_0xb77018(0x92)]['some'](_0x28e8c0 => _0x3839d6['toLowerCase']()['includes'](_0x28e8c0[_0xb77018(0xd5)]['toLowerCase']()));
}

function getStatusSummary() {
    const _0x12f81d = _0x570119,
        _0x433b26 = getFin(),
        _0x2ce118 = calculateInsolvencyRisk();
    return {
        'cash': Math[_0x12f81d(0x10a)](_0x433b26[_0x12f81d(0x7d)]),
        'dailyCap': Math[_0x12f81d(0x2b3)](_0x433b26['daily']),
        'daysRem': _0x433b26[_0x12f81d(0x297)],
        'riskLabel': _0x2ce118[_0x12f81d(0xd5)],
        'riskColor': _0x2ce118['color'],
        'riskScore': _0x2ce118[_0x12f81d(0x2e9)]
    };
}

function updateLiveHud() {
    const _0xd1b617 = _0x570119,
        _0x4bbf79 = parseFloat(document[_0xd1b617(0xba)](_0xd1b617(0x7b))[_0xd1b617(0x111)]) || 0x0,
        _0x20635b = document[_0xd1b617(0xba)](_0xd1b617(0x23e))[_0xd1b617(0x111)],
        _0x27fc07 = getFin(),
        _0x236af2 = isLiquid(_0x20635b) ? _0x27fc07['safeCash'] - _0x4bbf79 : _0x27fc07[_0xd1b617(0x7d)],
        _0x265708 = _0x236af2 / _0x27fc07['daysRem'];
    document[_0xd1b617(0xba)](_0xd1b617(0x29b))[_0xd1b617(0x1d9)] = _0xd1b617(0x2bc) + _0x265708[_0xd1b617(0x85)](0x0), document[_0xd1b617(0xba)](_0xd1b617(0xac))['innerText'] = _0xd1b617(0x2bc) + _0x27fc07[_0xd1b617(0x1f4)][_0xd1b617(0x10c)]() + _0xd1b617(0x2d0);
    const _0x14c9b0 = document['getElementById']('hud-warning');
    isLiquid(_0x20635b) && _0x4bbf79 > _0x27fc07['daily'] ? _0x14c9b0[_0xd1b617(0x224)][_0xd1b617(0x7e)] = 'block' : _0x14c9b0['style'][_0xd1b617(0x7e)] = _0xd1b617(0x2c2);
}

function getFin() {
    const _0x3ac13e = _0x570119,
        _0x513d0d = new Date(),
        _0x164f3f = Math['max'](0x1, new Date(_0x513d0d[_0x3ac13e(0x209)](), _0x513d0d['getMonth']() + 0x1, 0x0)[_0x3ac13e(0x234)]() - _0x513d0d[_0x3ac13e(0x234)]());
    let _0x5ea92b = 0x0;
    const _0x2d55c9 = ['Cash', 'M-Pesa', _0x3ac13e(0xa4), _0x3ac13e(0x25e), _0x3ac13e(0x171), _0x3ac13e(0x2a9), _0x3ac13e(0x121)];
    _0x2d55c9[_0x3ac13e(0x19a)](_0x44306b => {
        _0x5ea92b += getBalance(_0x44306b);
    });
    const _0x5063f4 = state[_0x3ac13e(0x92)][_0x3ac13e(0x146)](_0x37d18c => {
            const _0x536d7d = _0x3ac13e;
            let _0x45b136 = 0x0;
            return state[_0x536d7d(0x166)][_0x536d7d(0x19a)](_0x482d01 => {
                const _0x2638e3 = _0x536d7d,
                    _0x7a2a4e = new Date(_0x482d01['id']);
                _0x7a2a4e[_0x2638e3(0x20b)]() === _0x513d0d[_0x2638e3(0x20b)]() && (_0x482d01[_0x2638e3(0x158)][_0x2638e3(0x2fa)]()[_0x2638e3(0x1b3)](_0x37d18c['label']['toLowerCase']()) || _0x482d01['credit'] === _0x37d18c[_0x2638e3(0xd5)]) && (_0x45b136 += _0x482d01[_0x2638e3(0x82)]);
            }), {
                ..._0x37d18c,
                'paid': _0x45b136,
                'pending': Math[_0x536d7d(0x10f)](0x0, _0x37d18c[_0x536d7d(0x82)] - _0x45b136),
                'variance': _0x45b136 - _0x37d18c[_0x536d7d(0x82)]
            };
        }),
        _0x3c7ed8 = _0x5063f4['reduce']((_0x1aca89, _0x1640f8) => _0x1aca89 + _0x1640f8[_0x3ac13e(0x1f4)], 0x0),
        _0x5da69d = _0x5ea92b - _0x3c7ed8;
    return {
        'liquid': _0x5ea92b,
        'pending': _0x3c7ed8,
        'safeCash': _0x5da69d,
        'daysRem': _0x164f3f,
        'obsStatus': _0x5063f4,
        'daily': _0x5da69d / _0x164f3f
    };
}

function calculateInsolvencyRisk() {
    const _0x542b89 = _0x570119,
        _0x2e378f = getFin(),
        _0x25983e = (function() {
            const _0x5c8f83 = _0x2323,
                _0x27af4e = new Date(),
                _0x35a79c = new Date();
            _0x35a79c[_0x5c8f83(0xd9)](_0x27af4e['getDate']() - 0x7);
            let _0x26cf9d = 0x0;
            return state['transactions'][_0x5c8f83(0x19a)](_0x4c35af => {
                const _0x31d915 = _0x5c8f83;
                if (new Date(_0x4c35af['id']) >= _0x35a79c && isLiquid(_0x4c35af[_0x31d915(0xe5)])) _0x26cf9d += _0x4c35af[_0x31d915(0x82)];
            }), _0x26cf9d / 0x7;
        }());
    if (_0x25983e <= _0x2e378f['daily']) return {
        'score': 0x5,
        'label': _0x542b89(0x1ed),
        'color': _0x542b89(0x1d6)
    };
    if (_0x25983e > _0x2e378f[_0x542b89(0x273)] && _0x25983e < _0x2e378f[_0x542b89(0x273)] * 1.5) return {
        'score': 0x2d,
        'label': _0x542b89(0x1dd),
        'color': '#9D5D00'
    };
    if (_0x25983e >= _0x2e378f[_0x542b89(0x273)] * 1.5) return {
        'score': 0x55,
        'label': _0x542b89(0xa5),
        'color': '#C42B1C'
    };
    return {
        'score': 0x0,
        'label': _0x542b89(0x2c6),
        'color': _0x542b89(0x215)
    };
}

function _0x1d37() {
    const _0x30fd4e = ['hud-cap', 'endsWith', 'Show\x20me\x20my\x207-day\x20cash\x20forecast', 'act-code', 'loan', '</div><div\x20style=\x22font-size:10px;color:var(--win-text-3);\x22>remaining</div>', '.taskbar-btn', 'buy\x20stock', 'How\x20much\x20can\x20I\x20safely\x20spend\x20today?', 'isArray', 'config', 'active', 'setItem', 'Restock\x20at\x20a\x20maximum\x20of\x20KSh\x20', 'Petty\x20Cash', 'riskLabel', 'What\x20should\x20I\x20cut', 'wage', 'querySelector', 'colorDepth', 'deriveBits', 'done', '<div\x20style=\x22font-size:15px;line-height:1.75;color:var(--color-text-primary);margin-bottom:4px;\x22>', 'Service\x20worker\x20failed\x20–\x20install\x20may\x20not\x20work', 'floor', 'Restocking\x20KSh\x20', 'display-mode', 'Give\x20me\x20a\x20full\x20status\x20summary', '846YvdPKv', 'toDateString', 'clock-time', 'substring', 'unit\x20trust', 'KSh\x20', 'fall\x20short\x20by\x20KSh\x20', 'key', 'You\x27re\x20thinking\x20about\x20spending\x20KSh\x20', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22metric-value\x22>', 'destroy', 'none', 'short', 'rgba(196,43,28,0.08)', '\x20—\x20that\x27s\x20the\x20money\x20available\x20after\x20all\x20your\x20obligations.\x20Hiring\x20someone\x20means\x20committing\x20to\x20a\x20wage\x20every\x20single\x20month.', 'UNDETERMINED', 'backupHandle', 'school', '\x20and\x20represents\x20just\x20', 'contains', 'var(--color-text-danger)', '<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>General\x20Ledger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>', '6TfNaLc', 'sacco', 'buy\x20goods', '\x20Reserved', 'saving', 'font', 'is\x20dangerously\x20low', 'load', '\x20or\x20less,\x20or\x20look\x20for\x20a\x20commission-based\x20arrangement\x20where\x20you\x20only\x20pay\x20when\x20they\x20generate\x20sales.', 'var(--color-text-secondary)', 'UA-unknown', 'clock-date', 'investment', '|||', 'medical', 'Review\x20your\x20top\x205\x20selling\x20items\x20and\x20check\x20what\x20you\x27re\x20making\x20per\x20unit\x20after\x20cost.\x20If\x20any\x20item\x20is\x20below\x2025%\x20margin,\x20either\x20raise\x20the\x20price\x20or\x20stop\x20stocking\x20it.', 'appinstalled', 'Start\x20with\x20KSh\x20', 'how\x20much\x20can\x20i\x20spend', 'icon', 'This\x20is\x20fine.\x20Go\x20ahead,\x20log\x20it,\x20and\x20you\x27re\x20still\x20on\x20track.', 'trajectory', 'OPERATING\x20EXPENSES', ';\x22>', 'how\x20is', 'revenue\x20this', 'relative', 'Wrong\x20password\x20or\x20corrupted\x20file', 'score', '\x20days.', 'Restore\x20failed', 'tx-desc', '<tr><td\x20colspan=\x224\x22\x20style=\x22padding:32px;text-align:center;color:var(--win-text-3);\x22>No\x20transactions\x20recorded\x20yet.</td></tr>', 'chip\x20chip-green', 'goods', 'you\x20have\x20no\x20safe\x20daily\x20spend\x20budget\x20right\x20now', 'Calculate\x20markup\x20for\x20an\x20item', 'tailwind-app.css', 'preventDefault', 'fillRect', 'vehicle', '\x20but\x20your\x20entire\x20free\x20cash\x20buffer\x20is\x20only\x20KSh\x20', 'Daily\x20Ceiling', 'Family\x20obligations\x20—\x20harambees,\x20upcountry\x20contributions,\x20chama\x20—\x20are\x20a\x20real\x20part\x20of\x20life\x20in\x20Kenya\x20and\x20ignoring\x20them\x20has\x20social\x20consequences\x20that\x20go\x20beyond\x20money.\x20Your\x20buffer\x20is\x20KSh\x20', '</strong></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step-title\x22>🗂\x20Data\x20Management</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;flex-wrap:wrap;gap:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22setupBackupFolder()\x22\x20class=\x22btn-primary\x22>Setup\x20Backup\x20Folder</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22saveBackup()\x22\x20class=\x22btn-secondary\x22>Save\x20Backup\x20Now</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22factoryReset()\x22\x20class=\x22btn-secondary\x22\x20style=\x22color:var(--win-red);border-color:rgba(196,43,28,0.3);\x22>Factory\x20Reset</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'toLowerCase', 'How\x20am\x20I\x20doing\x20this\x20month', 'transaction', ';\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:space-between;font-size:10px;color:var(--win-text-3);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Low</span><span>Moderate</span><span>Critical</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Leak\x20Finder\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Leak\x20Finder</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '12515Rtpgvv', '%\x20of\x20your\x20buffer\x20and\x20leave\x20you\x20with\x20only\x20KSh\x20', 'rgba(0,0,0,0.04)', 'buy\x20equipment', 'className', 'worker', 'subtle', 'dash', 'Wanting\x20to\x20grow\x20the\x20team\x20shows\x20ambition,\x20and\x20that\x27s\x20good.\x20But\x20right\x20now\x20your\x20buffer\x20is\x20KSh\x20', '\x20active', 'Backup\x20file\x20was\x20empty\x20or\x20invalid', '\x20is\x20bigger\x20than\x20your\x20current\x20daily\x20safe\x20limit\x20of\x20KSh\x20', 'How\x20much\x20can\x20I\x20spend\x20today', 'drinking', 'generator', 'sick', 'width', ';\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:right;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'Password\x20required', 'showDirectoryPicker', 'harambee', '\x20from\x20your\x20account', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:grid;grid-template-columns:300px\x201fr;gap:16px;align-items:start;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Left\x20Column\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;flex-direction:column;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Risk\x20Card\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Insolvency\x20Risk</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chip\x20', 'you\x20have\x20KSh\x20', 'staff', '\x20↗</button>', ';\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22metric-label\x22>', 'toDataURL', 'toLocaleDateString', '\x20and\x20risk\x20is\x20', 'tx-amount', 'cashflow', 'safeCash', 'display', '\x20—\x20that\x27s\x20what\x20you\x20can\x20spend\x20per\x20day\x20without\x20endangering\x20your\x20ability\x20to\x20pay\x20obligations\x20by\x20end\x20of\x20month.\x20Over\x20a\x20week,\x20that\x27s\x20KSh\x20', 'conclusion', 'trim', 'amount', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:500;\x22>', 'laptop', 'toFixed', 'cssText', 'obligation-list', '</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'showOpenFilePicker', '\x20is\x20a\x20capital\x20decision\x20—\x20it\x20comes\x20out\x20of\x20your\x20buffer\x20in\x20one\x20hit,\x20which\x20is\x20', 'var(--color-text-warning)', 'Your\x20safe\x20daily\x20spending\x20limit\x20is\x20KSh\x20', '\x20per\x20month.', '531Gzxjrv', 'itax', '\x20to\x20manage\x20the\x20next\x20', '\x20for\x20restocking\x20sits\x20at\x20a\x20healthy\x20', 'obligations', 'availWidth', 'objectStore', '</div></div><div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>', '%\x20of\x20your\x20buffer,\x20leaving\x20you\x20KSh\x20', 'modal-phone', 'stock', 'filter', 'min', '40571AsyTCw', '\x20Cash\x20has\x20a\x20way\x20of\x20disappearing\x20faster\x20than\x20mobile\x20money.', '-5634', 'charCodeAt', 'input', 'filing', 'tz-unknown', '</div></div>', 'What\x20is\x20the\x20most\x20important\x20financial\x20action\x20I\x20should\x20take\x20today?', 'Bank\x20Account', 'CRITICAL', 'Ready\x20to\x20install', 'payroll', 'remove', 'oncomplete', '</span></div><span\x20style=\x22color:var(--color-border-secondary);font-size:11px;\x22>·</span><div\x20style=\x22display:flex;align-items:center;gap:5px;white-space:nowrap;\x22><span\x20style=\x22color:var(--color-text-secondary);font-size:12px;\x22>Days\x20left</span><span\x20style=\x22font-weight:500;color:var(--color-text-primary);\x22>', 'numeric', 'hud-cover', 'toggle', 'chama', 'end\x20of\x20month', '</span></div><span\x20style=\x22color:var(--color-border-secondary);font-size:11px;\x22>·</span><div\x20style=\x22display:flex;align-items:center;gap:5px;white-space:nowrap;\x22><span\x20style=\x22color:var(--color-text-secondary);font-size:12px;\x22>Buffer</span><span\x20style=\x22font-weight:500;color:var(--color-text-primary);\x22>KSh\x20', 'habit', '\x20fits\x20inside\x20your\x20daily\x20cap\x20of\x20KSh\x20', 'save', 'length', 'language', 'seg-btn', '\x22\x20class=\x22win-input\x22\x20style=\x22flex:1;\x22><input\x20type=\x22number\x22\x20placeholder=\x22Amount\x22\x20value=\x22', 'This\x20amount\x20is\x20fine.\x20Just\x20make\x20sure\x20you\x27re\x20withdrawing\x20for\x20a\x20specific\x20purpose\x20—\x20not\x20as\x20a\x20\x22just\x20in\x20case\x22.', 'phone-modal', 'getElementById', 'shares', 'SHA-256', 'overview', 'Confirm\x20system\x20purge?\x20All\x20financial\x20history\x20will\x20be\x20permanently\x20deleted.', 'lease', 'resolvedOptions', 'charge', 'user', 'medicine', '\x20days\x20would\x20each\x20have\x20roughly\x20KSh\x20', 'Inventory', 'var(--color-text-success)', 'replaceChild', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:10px;color:var(--win-red);\x22>Over\x20budget</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:10000;', '\x20to\x20protect\x20liquidity.', '\x20over</div>', 'faidi', 'toUpperCase', 'If\x20your\x203-month\x20emergency\x20fund\x20is\x20already\x20covered,\x20you\x20can\x20start\x20investing\x20up\x20to\x2010–15%\x20of\x20your\x20monthly\x20surplus.\x20Start\x20with\x20a\x20SACCO\x20if\x20you\x20don\x27t\x20have\x20one.', 'serviceWorker', 'nse', 'en-KE', 'employee', 'meta', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:16px;border-top:1px\x20solid\x20var(--win-border);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22factoryReset()\x22\x20style=\x22font-size:11px;color:var(--win-red);background:none;border:none;cursor:pointer;font-family:inherit;\x22>Full\x20System\x20Wipe</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'label', 'Go\x20ahead.\x20Just\x20make\x20sure\x20you\x20track\x20what\x20you\x20bought,\x20at\x20what\x20price,\x20and\x20set\x20a\x20target\x20selling\x20price\x20before\x20the\x20goods\x20hit\x20the\x20shelf.', 'till', 'slice', 'setDate', 'borrow', 'DateTimeFormat', ',\x20daily\x20safe\x20spend\x20is\x20KSh\x20', 'activated', 'matches', 'pay\x20for', '\x20each.', '<div\x20style=\x22padding:24px;text-align:center;color:var(--win-text-3);\x22>No\x20obligations\x20configured.</div>', '\x20to\x20work\x20with\x20instead\x20of\x20', 'chip-yellow', 'At\x20KSh\x20', 'credit', '\x20and\x20risk\x20at\x20', ';\x22>KSh\x20', 'How\x20can\x20I\x20increase\x20my\x20profit\x20this\x20month?', '#5a5a5a', '\x20monthly.', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:right;font-family:monospace;color:var(--win-red);font-weight:600;white-space:nowrap;\x22>-', 'business', 'match', '\x20per\x20month.\x20Based\x20on\x20your\x20current\x20buffer\x20of\x20KSh\x20', 'How\x20can\x20I\x20increase\x20my\x20income\x20without\x20a\x20loan?', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);margin-bottom:8px;\x22>Based\x20on\x207-day\x20velocity\x20vs\x20projected\x20ceiling</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-track\x22\x20style=\x22height:6px;margin-bottom:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-fill\x22\x20style=\x22width:', 'set\x20aside', '%;background:', ',\x20you\x20have\x20room\x20to\x20start\x20saving.\x20A\x20realistic\x20savings\x20rate\x20at\x20your\x20current\x20position\x20is\x20around\x20', '\x20is\x20possible\x20from\x20a\x20cash\x20standpoint\x20since\x20your\x20buffer\x20covers\x20it,\x20but\x20it\x20would\x20consume\x20', 'take', 'custom-alert', 'The\x20instinct\x20to\x20save\x20is\x20a\x20good\x20one\x20—\x20but\x20saving\x20while\x20your\x20operating\x20buffer\x20is\x20negative\x20or\x20critical\x20is\x20like\x20filling\x20a\x20bucket\x20that\x20has\x20a\x20hole\x20in\x20it.', 'paid', 'Only\x20take\x20this\x20loan\x20if\x20it\x20will\x20generate\x20at\x20least\x20KSh\x20', 'Travel\x20&\x20Entertainment', 'xx-XX', '\x20comes\x20from\x20two\x20directions\x20—\x20more\x20money\x20coming\x20in,\x20or\x20less\x20going\x20out.\x20Most\x20small\x20businesses\x20in\x20Kenya\x20don\x27t\x20fail\x20because\x20of\x20low\x20sales\x20—\x20they\x20fail\x20because\x20their\x20costs\x20grow\x20as\x20fast\x20as\x20their\x20revenue.', '\x20back\x20within\x2030\x20days.', 'dashboard-grid', 'A\x20loan\x20is\x20possible\x20from\x20a\x20cashflow\x20standpoint,\x20but\x20only\x20if\x20it\x27s\x20going\x20to\x20earn\x20more\x20than\x20it\x20costs.\x20Mobile\x20loans\x20at\x2015%\x20monthly\x20mean\x20KSh\x20', 'cousin', 'personal', 'undefined', '<div\x20style=\x22padding:28px;text-align:center;color:red;background:white;border-radius:16px;\x22><p>', 'message', 'getItem', 'restock', 'decrypt', 'income', 'querySelectorAll', 'round', 'college', 'toLocaleString', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>Budget:\x20KSh\x20', '\x20—\x20which\x20', 'max', 'restore-btn', 'value', 'Service\x20Revenue', '14px\x20\x27Arial\x27', 'userChoice', 'mpesa', 'Your\x20browser\x20does\x20not\x20support\x20file\x20selection.', 'Marketing', 'price', 'Invalid\x20activation\x20code.', 'nav-sidebar', 'Rent', 'rgba(16,124,16,0.08)', 'pay\x20rent', 'stocks', 'Look\x20at\x20your\x20biggest\x20monthly\x20outflow\x20and\x20ask\x20whether\x20you\x20can\x20reduce\x20it\x20by\x2010–15%.', 'innerHTML', 'Accounts\x20Receivable', '\x20—\x20that\x27s\x2050%\x20of\x20your\x20buffer.\x20Keep\x20the\x20other\x20half\x20liquid.\x20Turning\x20over\x20smaller\x20stock\x20faster\x20is\x20safer\x20than\x20betting\x20everything\x20on\x20one\x20big\x20order.', 'end\x20the\x20month\x20with\x20roughly\x20KSh\x20', '\x20per\x20day\x20added\x20to\x20your\x20obligations.', '<span\x20class=\x22chip\x20chip-red\x22>', '<div\x20style=\x22font-size:10px;color:var(--win-red);font-weight:700;margin-top:2px;\x22>+', 'sidebar-avatar', 'encode', 'kra', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22obs-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:600;\x22>', 'make\x20money', 'Credit', 'Please\x20enter\x20a\x20name\x20and\x20select\x20a\x20profile\x20type.', '🛡\x20STABLE', '\x20—\x20which\x20is\x2025%\x20of\x20your\x20free\x20cash.', '\x20borrowed\x20becomes\x20KSh\x20', 'which\x20is\x20better', 'raw', 'POST', 'userAgent', 'salary\x20for', 'Start\x20with\x20a\x20margin\x20audit:\x20check\x20your\x20top\x205\x20products\x20and\x20identify\x20which\x20ones\x20actually\x20make\x20money\x20after\x20cost.', '%\x20of\x20your\x20free\x20cash.\x20The\x20problem\x20with\x20tying\x20up\x20that\x20much\x20in\x20stock\x20is\x20that\x20it\x20assumes\x20your\x20sales\x20velocity\x20is\x20high\x20enough\x20to\x20convert\x20those\x20goods\x20to\x20cash\x20before\x20your\x20next\x20major\x20obligation\x20falls\x20due.', 'savings', '7363120gillxR', '132260epRRCh', 'parentNode', 'gridTemplateColumns', 'onerror', 'repeat(2,1fr)', 'Revenue', 'money\x20in', 'landlord', 'name', 'emergency', 'textContent', 'when\x20will', 'map', 'grow', 'How\x20to\x20boost\x20income\x20instead', 'https://travis-j1w9.onrender.com', 'Could\x20not\x20read\x20the\x20backup\x20file:\x20', 'Travisguardian', 'DISCRETIONARY\x20EXPENSES', 'INCOME', 'Professional\x20Fees\x20(if\x20not\x20critical)', 'keypress', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22leak-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:500;\x22>', '\x20days\x20until\x20month\x20end.', 'hire', 'setup-overlay', 'timeZone', 'prompt', 'Buying\x20equipment\x20is\x20a\x20capital\x20decision,\x20not\x20an\x20expense\x20—\x20you\x27re\x20converting\x20cash\x20into\x20something\x20that\x20should\x20earn\x20its\x20keep.\x20Your\x20buffer\x20is\x20KSh\x20', 'analyticsChart', 'desc', 'fillStyle', 'abs', '\x20right\x20now,\x20but\x20I\x20have\x20to\x20be\x20straight\x20with\x20you\x20—\x20your\x20financial\x20position\x20is\x20critical.\x20Your\x20buffer\x20is\x20KSh\x20', 'input-app.css', '11,500', 'invest', 'getFileHandle', 'doctor', 'text/javascript', '</strong></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;color:var(--win-text-2);margin-top:4px;\x22>Type:\x20<strong\x20style=\x22text-transform:capitalize;\x22>', 'result', 'install-btn', '\x20per\x20month,\x20put\x20it\x20somewhere\x20it\x20earns\x20interest\x20(money\x20market\x20fund,\x20SACCO),\x20and\x20treat\x20it\x20as\x20a\x20fixed\x20expense.', 'transactions', 'chat-box', 'Avoid\x20the\x20loan\x20right\x20now.\x20Instead,\x20identify\x20one\x20income\x20you\x20can\x20accelerate\x20this\x20week\x20—\x20collect\x20a\x20debt\x20someone\x20owes\x20you,\x20push\x20a\x20sale,\x20reduce\x20what\x20you\x20spend\x20—\x20before\x20adding\x20any\x20new\x20repayment\x20obligation.', '<div\x20style=\x22padding:40px;text-align:center;background:white;border-radius:16px;max-width:360px;\x22><p\x20style=\x22color:green;font-size:16px;\x22>\x20Everything\x20restored!\x20Reloading…</p></div>', '1fr', 'beforeinstallprompt', 'onsuccess', 'innerWidth', 'repeat(4,1fr)', 'Hold\x20off\x20on\x20this.\x20It\x27s\x20not\x20about\x20the\x20amount\x20being\x20huge\x20—\x20it\x27s\x20about\x20what\x20month\x20end\x20looks\x20like\x20if\x20you\x20keep\x20going.\x20Protect\x20the\x20buffer\x20first.', 'arrayBuffer', 'Bank\x20/\x20M-Pesa', 'tuition', 'Payroll', 'TRV-KE-', 'Go\x20ahead\x20if\x20the\x20purpose\x20is\x20productive.\x20Make\x20sure\x20the\x20repayment\x20fits\x20inside\x20your\x20daily\x20cap\x20without\x20pushing\x20you\x20into\x20moderate\x20risk.', 'PBKDF2', 'user-name', 'increase', 'liquid', 'I\x27d\x20reduce\x20it\x20to\x20around\x20KSh\x20', '2468604hojVfC', 'education', '\x22\x20class=\x22win-input\x22\x20style=\x22width:110px;\x22><button\x20onclick=\x22this.parentElement.remove()\x22\x20style=\x22width:28px;height:28px;border-radius:50%;border:1px\x20solid\x20rgba(196,43,28,0.3);background:rgba(196,43,28,0.05);color:var(--win-red);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;\x22>×</button>', 'importKey', 'createElement', 'parse', '2-digit', ',\x20you\x27d\x20be\x20repaying\x20roughly\x20KSh\x20', '%\x20of\x20your\x20buffer\x20—\x20that\x27s\x20a\x20manageable\x20spend.\x20After\x20this,\x20you\x27d\x20still\x20have\x20KSh\x20', 'Dividends', 'is\x20tighter\x20than\x20before,\x20so\x20watch\x20the\x20small\x20daily\x20spends\x20this\x20week', 'Other\x20Revenue', 'chip-green', 'how\x20much\x20to\x20sell', 'If\x20your\x20stock\x20moves\x20fast\x20(within\x207\x20days),\x20go\x20ahead\x20but\x20no\x20more\x20than\x20KSh\x20', 'tpin', 'what\x20can\x20i\x20spend', 'What\x20loan\x20repayment\x20can\x20I\x20afford\x20per\x20month?', '#069', '\x20would\x20push\x20you\x20past\x20your\x20safe\x20daily\x20limit\x20of\x20KSh\x20', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22width:6px;height:6px;border-radius:50%;background:', 'rent', '\x20per\x20month,\x20this\x20hire\x20sits\x20within\x20your\x20safe\x20wage\x20budget\x20of\x20KSh\x20', 'header-verdict-badge', 'fromCharCode', 'book', 'write', '\x20sits\x20within\x20your\x20daily\x20cap,\x20so\x20it\x27s\x20fine\x20from\x20a\x20budget\x20standpoint.', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22font-family:monospace;font-size:11px;color:var(--win-text-3);white-space:nowrap;\x22>', 'Financially\x20this\x20works.\x20Before\x20hiring,\x20define\x20exactly\x20what\x20this\x20person\x20will\x20do\x20to\x20move\x20money\x20—\x20more\x20sales,\x20faster\x20service,\x20more\x20hours\x20covered.', 'travis-ui-cache-v1', 'forEach', 'tempType', 'mobile-open', 'mshwari', 'markTodayRecorded', 'stringify', 'getRandomValues', '\x20in\x20free\x20cash\x20after\x20obligations,\x20', 'REVENUE', '\x20Days', '23376QnTjAf', 'You\x20need\x20to\x20actively\x20cut\x20at\x20least\x20one\x20category\x20of\x20non-essential\x20spending\x20this\x20week\x20and\x20look\x20for\x20one\x20way\x20to\x20bring\x20in\x20extra\x20cash.', 'chat-input', 'spend', 'Office\x20Supplies', '.nav-item', 'success', 'createWritable', 'ASSETS', 'var(--win-text)', 'where\x20do\x20i', 'treat', 'hardwareConcurrency', '</span>', 'function', 'includes', 'cash\x20flow', '\x20days\x20left\x20this\x20month,\x20and\x20', 'asset', 'bodaboda', '\x20per\x20day\x20after\x20this,\x20which\x20', '<div\x20style=\x22display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;\x22>', 'reserve', 'send\x20money', 'readwrite', 'I\x20hear\x20you\x20on\x20the\x20loan\x20—\x20when\x20things\x20are\x20tight,\x20borrowing\x20feels\x20like\x20the\x20fastest\x20fix.\x20But\x20your\x20account\x20is\x20already\x20in\x20critical\x20risk\x20territory\x20with\x20a\x20buffer\x20of\x20KSh\x20', 'hidden', 'eat', 'DISCRETIONARY', 'scrollHeight', 'travis-finance-backup.enc', 'Enter', 'flex', '\x20free,\x20and\x20your\x20daily\x20cap\x20adjusts\x20to\x20about\x20KSh\x20', 'Utilities', 'returns', '6692952xutBVq', 'getTimezoneOffset', 'reload', 'unshift', '<div\x20style=\x22padding:8px\x200;text-align:center;color:var(--win-text-3);font-size:13px;\x22>No\x20budget\x20variances\x20detected</div>', 'join', 'color', ',\x20avoid\x20any\x20large\x20discretionary\x20buys\x20this\x20week.', 'tala', '\x20days\x20would\x20still\x20be\x20workable\x20at\x20KSh\x20', 'Help\x20me\x20calculate\x20the\x20right\x20selling\x20price\x20for\x20a\x20product', 'tax', 'LIABILITIES', '✅\x20Phone\x20+\x20Fingerprint\x20sent\x20successfully!', '#107C10', 'getFile', 'fingerprint', 'innerText', 'install-overlay', 'make\x20more', ',\x20which\x20means\x20there\x27s\x20almost\x20no\x20room\x20between\x20you\x20and\x20not\x20being\x20able\x20to\x20meet\x20your\x20obligations.', 'MODERATE', 'actions', 'Restoring…', 'profit', 'charAt', 'objectStoreNames', ';display:inline-block;\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'is\x20still\x20comfortable', 'Cost\x20of\x20Goods\x20Sold', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22\x20style=\x22padding-top:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'Only\x20withdraw\x20what\x20you\x20have\x20a\x20specific,\x20immediate\x20purpose\x20for.', 'NECESSARY\x20EXPENSES', 'classList', 'getAll', 'optgroup', 'Travel\x20(fun)', 'LOW', 'script.js', 'sub-admins.html', 'Tax\x20is\x20one\x20of\x20those\x20things\x20people\x20delay\x20until\x20KRA\x20makes\x20it\x20painful\x20—\x20and\x20KRA\x27s\x20penalties\x20are\x20not\x20small.\x20A\x20late\x20filing\x20penalty\x20alone\x20starts\x20at\x20KSh\x2020,000\x20or\x205%\x20of\x20tax\x20owed,\x20whichever\x20is\x20higher,\x20and\x20interest\x20compounds\x20monthly\x20at\x201%.', 'scrollTop', 'some', 'index.html', 'pending', 'Treat\x20KSh\x20', 'Calculate\x20for\x20a\x20specific\x20wage', 'blob', 'decode', 'Ask\x20me\x20about\x20a\x20specific\x20decision\x20—\x20a\x20purchase,\x20a\x20loan,\x20hiring,\x20pricing,\x20saving,\x20or\x20anything\x20money-related\x20—\x20and\x20I\x27ll\x20give\x20you\x20a\x20direct\x20answer\x20based\x20on\x20your\x20actual\x20numbers.', 'lastQuestion', 'You\x20want\x20to\x20restock\x20for\x20KSh\x20', 'status', 'type', 'pattern', 'appendChild', 'TravisGuardian_v1.0', 'display:flex;gap:8px;align-items:center;', 'Don\x27t\x20pay\x20this\x20today\x20unless\x20someone\x20will\x20cut\x20you\x20off\x20or\x20lock\x20you\x20out.\x20Negotiate\x203–5\x20days,\x20use\x20that\x20window\x20to\x20raise\x20cash\x20first.', '</div>', 'You\x20can\x20stretch\x20it\x20this\x20once,\x20but\x20log\x20it\x20and\x20don\x27t\x20do\x20this\x20two\x20days\x20in\x20a\x20row.', 'canvas', 'error', '9416wqGkeC', 'withdraw', 'getFullYear', 'init', 'getMonth', 'disabled', 'selling\x20price', '\x20left', 'sort', 'nav-', '\x20in\x20free\x20cash.\x20That\x27s\x20responsible\x20purchasing\x20—\x20you\x27re\x20not\x20over-leveraging\x20your\x20cash\x20into\x20goods.', 'School', 'inventory', 'debit', '#8a8a8a', 'recovery-overlay', '\x20·\x20Spent:\x20KSh\x20', '\x20for\x20an\x20obligation\x20is\x20a\x20legitimate\x20expense,\x20and\x20your\x20buffer\x20can\x20absorb\x20it.\x20After\x20paying\x20this,\x20you\x27ll\x20still\x20have\x20KSh\x20', '#9D5D00', 'close', 'Should\x20I\x20take\x20a\x20loan\x20to\x20buy\x20equipment?', '</span></div></div>', 'doing', 'Go\x20ahead\x20and\x20pay\x20it.\x20Log\x20it\x20immediately\x20and\x20recalculate\x20your\x20budget\x20for\x20the\x20remaining\x20', 'documents', 'dailyCap', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);margin-top:4px;\x22>Available\x20after\x20all\x20obligations</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Right\x20Column:\x20Chart\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22\x20style=\x22min-height:340px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Performance\x20Analytics</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>Last\x207\x20days</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22\x20style=\x22height:300px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22analyticsChart\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'find', 'onupgradeneeded', 'style', '\x20next\x20month\x20—\x20that\x27s\x20about\x20KSh\x20', 'markup', '#0078D4', 'application/json', 'Tax', 'open', 'upcountry', 'byteLength', 'onload', 'parents', 'branch', 'now', 'set', 'test', '/store-fingerprint', 'getDate', 'money\x20out', 'sw.js', '\x20leak', 'Failed\x20to\x20read/decrypt\x20backup\x20file', 'Market\x20Exchange', 'register', 'fillText', 'hospital', '<div\x20style=\x22text-align:right;\x22><div\x20class=\x22chat-bubble-user\x22>', 'tx-credit', 'How\x20much\x20should\x20I\x20set\x20aside\x20for\x20taxes\x20each\x20month?', 'boost', 'clinic', 'This\x20is\x20a\x20real\x20obligation\x20—\x20rent,\x20fees,\x20medical,\x20those\x20don\x27t\x20move.\x20The\x20issue\x20is\x20that\x20KSh\x20', 'Cash', 'Accounts\x20Payable', 'Transport', '\x20on\x20what\x20sounds\x20like\x20a\x20real\x20obligation\x20—\x20and\x20I\x27m\x20not\x20going\x20to\x20pretend\x20that\x27s\x20easy\x20to\x20hear\x20—\x20but\x20right\x20now\x20your\x20free\x20cash\x20is\x20already\x20negative\x20at\x20KSh\x20', 'overdraft', 'AES-GCM', '.enc', 'tempBackupFileHandle', '.css', '\x20—\x20so\x20this\x20would\x20wipe\x20you\x20out\x20completely\x20and\x20leave\x20nothing\x20for\x20wages,\x20rent,\x20or\x20emergencies.\x20Even\x20if\x20the\x20stock\x20sells\x20well,\x20there\x27s\x20a\x20gap\x20between\x20buying\x20and\x20selling,\x20and\x20during\x20that\x20gap\x20you\x27d\x20have\x20zero\x20liquidity.', 'getContext', 'encrypt', '\x20available\x20and\x20', 'daily\x20limit', 'projection', 'Either\x20negotiate\x20the\x20wage\x20down\x20to\x20KSh\x20', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:var(--win-text-3);font-size:10px;\x22>→</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chip\x20chip-red\x22\x20style=\x22font-size:10px;\x22>', 'Side\x20Hustle', 'Other\x20Fun\x20Spending', 'versus', 'reorder', 'your\x20daily\x20budget\x20is\x20very\x20tight\x20at\x20KSh\x20', 'textBaseline', 'situation', 'purchase', 'university', 'body', 'Savings', 'can\x20i\x20buy', 'paye', 'help-modal', './sw.js', 'income\x20situation', 'skip-btn', 'replace', 'height', 'pin', 'div', 'treatment', 'travisChart', 'Before\x20deciding,\x20calculate\x20exactly\x20what\x20you\x27ll\x20use\x20the\x20loan\x20for\x20and\x20whether\x20it\x20pays\x20back\x20more\x20than\x20115%\x20of\x20what\x20you\x20borrow.', 'should\x20i', 'display-name', 'toLocaleTimeString', 'compare', '#C42B1C', 'how\x20are\x20things', 'summarize', 'daily', 'nhif', 'Failed\x20to\x20send\x20data.\x20Check\x20connection.', 'add', 'Loans\x20Payable', 'Loan\x20Repayment', 'ask', 'addEventListener', '\x20days.\x20That\x27s\x20a\x20tight\x20squeeze\x20—\x20your\x20daily\x20breathing\x20room\x20drops\x20to\x20about\x20KSh\x20', 'show', '%\x20of\x20your\x20KSh\x20', 'earn\x20more', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'Segoe\x20UI', 'sidebar-type', 'new\x20person', 'add\x20person', 'push', '\x20remaining\x20after\x20purchase.', 'target', 'btn-b', '.\x20If\x20you\x20continue\x20at\x20your\x20current\x20spending\x20pace,\x20you\x27ll\x20', 'obsStatus', 'crypto', 'How\x20to\x20make\x20more\x20profit', 'custom-alert-ok', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:right;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22color:var(--win-red);font-size:13px;font-weight:700;\x22>+KSh\x20', 'activation-overlay', 'readonly', 'deriveKey', 'family', 'put', 'M-Pesa', 'availHeight', 'get', 'variance', 'daysRem', 'deleteDatabase', '26LlBYBm', 'Pay\x20it\x20—\x20obligations\x20must\x20be\x20honoured.\x20But\x20immediately\x20after,\x20cut\x20all\x20discretionary\x20spending\x20for\x20the\x20rest\x20of\x20this\x20week\x20and\x20focus\x20on\x20cash\x20inflow\x20to\x20rebuild\x20that\x20buffer.'];
    _0x1d37 = function() {
        return _0x30fd4e;
    };
    return _0x1d37();
}

function isLiquid(_0x296732) {
    const _0x7db0a2 = _0x570119;
    if (!_0x296732) return ![];
    const _0x4a02c0 = [_0x7db0a2(0x243), _0x7db0a2(0x293), _0x7db0a2(0xa4), _0x7db0a2(0x25e), _0x7db0a2(0x171), _0x7db0a2(0x2a9), _0x7db0a2(0x121)];
    return _0x4a02c0[_0x7db0a2(0x1b3)](_0x296732);
}

function getBalance(_0x24f952) {
    const _0x507f35 = _0x570119;
    let _0x5ae0cd = 0x0;
    state[_0x507f35(0x166)]['forEach'](_0x537514 => {
        const _0x29ae17 = _0x507f35;
        if (_0x537514['debit'] === _0x24f952) _0x5ae0cd += _0x537514[_0x29ae17(0x82)];
        if (_0x537514[_0x29ae17(0xe5)] === _0x24f952) _0x5ae0cd -= _0x537514['amount'];
    });
    const _0x3842fa = ['Cash', _0x507f35(0x293), 'Bank\x20Account', _0x507f35(0x25e), _0x507f35(0x171), _0x507f35(0x2a9), _0x507f35(0x121), _0x507f35(0xc5), 'Fixed\x20Assets'];
    return _0x3842fa[_0x507f35(0x1b3)](_0x24f952) ? _0x5ae0cd : -_0x5ae0cd;
}

function navClick(_0x578642) {
    const _0x569e68 = _0x570119;
    document[_0x569e68(0x109)](_0x569e68(0x1a9))[_0x569e68(0x19a)](_0x562ea7 => _0x562ea7[_0x569e68(0x1e9)]['remove'](_0x569e68(0x2a6)));
    const _0x22489c = document[_0x569e68(0xba)](_0x569e68(0x210) + _0x578642);
    if (_0x22489c) _0x22489c[_0x569e68(0x1e9)][_0x569e68(0x276)]('active');
    document[_0x569e68(0x109)](_0x569e68(0x2a1))[_0x569e68(0x19a)](_0x5dd7dd => _0x5dd7dd[_0x569e68(0x1e9)][_0x569e68(0xa8)](_0x569e68(0x2a6))), document['getElementById'](_0x569e68(0x11a))[_0x569e68(0x1e9)]['remove'](_0x569e68(0x19c)), nav(_0x578642);
}

function nav(_0x5a90cc) {
    const _0x29c7fa = _0x570119,
        _0x45978a = document[_0x29c7fa(0xba)]('view-port'),
        _0x3b369b = getFin();
    updateHeader(_0x3b369b);
    if (_0x5a90cc === _0x29c7fa(0x305)) {
        const _0x11f7cb = calculateInsolvencyRisk(),
            _0x21e932 = _0x3b369b[_0x29c7fa(0x289)][_0x29c7fa(0x99)](_0x75022d => _0x75022d[_0x29c7fa(0x296)] > 0x0),
            _0x2c724f = _0x11f7cb[_0x29c7fa(0xd5)] === _0x29c7fa(0x1ed) ? _0x29c7fa(0x187) : _0x11f7cb[_0x29c7fa(0xd5)] === 'MODERATE' ? _0x29c7fa(0xe3) : 'chip-red',
            _0x14b06e = _0x11f7cb[_0x29c7fa(0xd5)] === _0x29c7fa(0x1ed) ? _0x29c7fa(0x1d6) : _0x11f7cb[_0x29c7fa(0xd5)] === _0x29c7fa(0x1dd) ? _0x29c7fa(0x219) : _0x29c7fa(0x270);
        _0x45978a['innerHTML'] = _0x29c7fa(0x73) + _0x2c724f + _0x29c7fa(0x18f) + _0x14b06e + _0x29c7fa(0x1e3) + _0x11f7cb[_0x29c7fa(0xd5)] + _0x29c7fa(0xf0) + _0x11f7cb['score'] + _0x29c7fa(0xf2) + _0x14b06e + _0x29c7fa(0x2fd) + (_0x21e932[_0x29c7fa(0xb4)] > 0x0 ? _0x29c7fa(0x125) + _0x21e932[_0x29c7fa(0xb4)] + _0x29c7fa(0x237) + (_0x21e932[_0x29c7fa(0xb4)] > 0x1 ? 's' : '') + _0x29c7fa(0x1b1) : '<span\x20class=\x22chip\x20chip-green\x22>Clean</span>') + _0x29c7fa(0x1e6) + (_0x21e932[_0x29c7fa(0xb4)] > 0x0 ? _0x21e932[_0x29c7fa(0x146)](_0x1c8b3e => _0x29c7fa(0x150) + _0x1c8b3e[_0x29c7fa(0xd5)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>Budget:\x20KSh\x20' + _0x1c8b3e[_0x29c7fa(0x82)][_0x29c7fa(0x10c)]() + _0x29c7fa(0x28d) + _0x1c8b3e['variance']['toLocaleString']() + _0x29c7fa(0xc8))[_0x29c7fa(0x1cd)]('') : _0x29c7fa(0x1cc)) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Disposable\x20Buffer\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>Disposable\x20Buffer</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:28px;font-weight:700;color:' + (_0x3b369b[_0x29c7fa(0x7d)] < 0x0 ? 'var(--win-red)' : _0x29c7fa(0x1ad)) + _0x29c7fa(0xe7) + _0x3b369b[_0x29c7fa(0x7d)][_0x29c7fa(0x10c)]() + _0x29c7fa(0x221), window['innerWidth'] < 0x384 && (_0x45978a[_0x29c7fa(0x2ad)](_0x29c7fa(0x268))[_0x29c7fa(0x224)][_0x29c7fa(0x13c)] = _0x29c7fa(0x16a)), setTimeout(() => renderChart(), 0x64);
    }
    if (_0x5a90cc === 'obs') {
        let _0x44f6ff = _0x3b369b['obsStatus']['map'](_0x3e8cb6 => _0x29c7fa(0x12a) + _0x3e8cb6[_0x29c7fa(0xd5)] + _0x29c7fa(0x10d) + _0x3e8cb6[_0x29c7fa(0x82)]['toLocaleString']() + _0x29c7fa(0x217) + _0x3e8cb6[_0x29c7fa(0xf8)][_0x29c7fa(0x10c)]() + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:6px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-track\x22\x20style=\x22height:4px;width:120px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-fill\x22\x20style=\x22width:' + Math[_0x29c7fa(0x9a)](0x64, _0x3e8cb6['paid'] / _0x3e8cb6[_0x29c7fa(0x82)] * 0x64) + '%;background:' + (_0x3e8cb6['pending'] <= 0x0 ? _0x29c7fa(0x1d6) : _0x29c7fa(0x227)) + _0x29c7fa(0x6e) + (_0x3e8cb6['pending'] <= 0x0 ? '<span\x20class=\x22chip\x20chip-green\x22>✓\x20Settled</span>' : '<div\x20style=\x22font-size:14px;font-weight:700;color:var(--win-yellow);\x22>KSh\x20' + _0x3e8cb6['pending'][_0x29c7fa(0x10c)]() + _0x29c7fa(0x2a0)) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x3e8cb6['variance'] > 0x0 ? _0x29c7fa(0x126) + _0x3e8cb6[_0x29c7fa(0x296)]['toLocaleString']() + _0x29c7fa(0xcb) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>')[_0x29c7fa(0x1cd)]('');
        _0x45978a['innerHTML'] = '<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Mandatory\x20Reserve\x20Schedule</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22document.getElementById(\x27setup-overlay\x27).classList.remove(\x27hidden\x27)\x22\x20class=\x22btn-secondary\x22\x20style=\x22font-size:11px;padding:5px\x2010px;\x22>Edit\x20List</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>' + (_0x44f6ff || _0x29c7fa(0xe1)) + _0x29c7fa(0xd4);
    }
    _0x5a90cc === _0x29c7fa(0x279) && (_0x45978a[_0x29c7fa(0x120)] = '<div\x20class=\x22win-card\x22\x20style=\x22height:520px;display:flex;flex-direction:column;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22\x20style=\x22flex-shrink:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:10px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:32px;height:32px;background:linear-gradient(135deg,#0078D4,#005A9E);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;\x22>🤖</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-title\x22>Travis\x20AI\x20Advisor</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-sub\x22>Probability\x20engine\x20&\x20leak\x20finder\x20active</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chip\x20chip-green\x22\x20style=\x22font-size:10px;\x22>●\x20Online</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22chat-box\x22\x20style=\x22flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:var(--win-bg);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-bubble-ai\x22\x20style=\x22font-size:13px;\x22>Probability\x20Engine\x20and\x20Leak\x20Finder\x20active.\x20How\x20can\x20I\x20protect\x20your\x20capital\x20today?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:10px\x2014px;border-top:1px\x20solid\x20var(--win-border);background:white;display:flex;gap:8px;align-items:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22chat-input\x22\x20type=\x22text\x22\x20placeholder=\x22Ask\x20Travis\x20anything\x20about\x20your\x20finances…\x22\x20class=\x22win-input\x22\x20style=\x22flex:1;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22handleAsk()\x22\x20class=\x22btn-accent\x22\x20style=\x22padding:9px\x2018px;font-size:13px;\x22>Send\x20↗</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', document['getElementById'](_0x29c7fa(0x1a6))['addEventListener'](_0x29c7fa(0x14f), _0x98fdf3 => {
        const _0x2beaeb = _0x29c7fa;
        if (_0x98fdf3[_0x2beaeb(0x2be)] === _0x2beaeb(0x1c3)) handleAsk();
    }));
    if (_0x5a90cc === _0x29c7fa(0x194)) {
        let _0x2ff5be = state[_0x29c7fa(0x166)]['map'](_0x3c49bf => _0x29c7fa(0x197) + new Date(_0x3c49bf['id'])['toLocaleDateString'](_0x29c7fa(0xd1)) + _0x29c7fa(0x83) + _0x3c49bf[_0x29c7fa(0x158)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;gap:6px;margin-top:4px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22chip\x20chip-green\x22\x20style=\x22font-size:10px;\x22>' + _0x3c49bf[_0x29c7fa(0x214)] + _0x29c7fa(0x253) + _0x3c49bf[_0x29c7fa(0xe5)] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:right;font-family:monospace;color:var(--win-green);font-weight:600;white-space:nowrap;\x22>+' + _0x3c49bf[_0x29c7fa(0x82)][_0x29c7fa(0x10c)]() + _0x29c7fa(0xeb) + _0x3c49bf[_0x29c7fa(0x82)]['toLocaleString']() + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>')[_0x29c7fa(0x1cd)]('');
        _0x45978a['innerHTML'] = _0x29c7fa(0x2cc) + state[_0x29c7fa(0x166)]['length'] + '\x20entries</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22overflow-x:auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22win-table\x22\x20style=\x22min-width:600px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead><tr><th>Date</th><th>Transaction</th><th\x20style=\x22text-align:right;\x22>Debit\x20(+)</th><th\x20style=\x22text-align:right;\x22>Credit\x20(-)</th></tr></thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>' + (_0x2ff5be || _0x29c7fa(0x2ed)) + _0x29c7fa(0x88);
    }
    _0x5a90cc === 'settings' && (_0x45978a['innerHTML'] = '<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>Settings\x20&\x20Profile</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22\x20style=\x22display:grid;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setup-step-title\x22>👤\x20Profile\x20Information</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;color:var(--win-text-2);\x22>Name:\x20<strong>' + (state[_0x29c7fa(0xc2)]?.['name'] || '—') + _0x29c7fa(0x162) + (state['user']?.[_0x29c7fa(0x1fd)] || '—') + _0x29c7fa(0x2f9));
}

function renderChart() {
    const _0x121518 = _0x570119,
        _0x32d83e = document[_0x121518(0xba)](_0x121518(0x157))?.[_0x121518(0x24d)]('2d');
    if (!_0x32d83e) return;
    const _0x5e7bdc = getFin(),
        _0x3a9d0b = new Date();
    let _0x27fb62 = [],
        _0x361ef1 = [],
        _0x5272d4 = [],
        _0x114b3a = [];
    for (let _0x524075 = 0x6; _0x524075 >= 0x0; _0x524075--) {
        const _0x4e8edb = new Date();
        _0x4e8edb[_0x121518(0xd9)](_0x3a9d0b['getDate']() - _0x524075), _0x27fb62['push'](_0x4e8edb[_0x121518(0x79)]('en-KE', {
            'weekday': _0x121518(0x2c3)
        }));
        let _0x433cbc = 0x0,
            _0x51bc66 = 0x0;
        state['transactions'][_0x121518(0x19a)](_0x5a913d => {
            const _0x339a0a = _0x121518;
            if (new Date(_0x5a913d['id'])['toDateString']() === _0x4e8edb[_0x339a0a(0x2b8)]()) {
                if (isLiquid(_0x5a913d[_0x339a0a(0xe5)])) _0x433cbc += _0x5a913d[_0x339a0a(0x82)];
                if (isLiquid(_0x5a913d[_0x339a0a(0x214)])) _0x51bc66 += _0x5a913d['amount'];
            }
        }), _0x361ef1['push'](_0x433cbc), _0x5272d4[_0x121518(0x284)](_0x51bc66), _0x114b3a[_0x121518(0x284)](_0x5e7bdc[_0x121518(0x273)]);
    }
    if (window['travisChart']) window[_0x121518(0x26a)][_0x121518(0x2c1)]();
    window[_0x121518(0x26a)] = new Chart(_0x32d83e, {
        'type': 'line',
        'data': {
            'labels': _0x27fb62,
            'datasets': [{
                'label': _0x121518(0x2f7),
                'data': _0x114b3a,
                'borderColor': '#0078D4',
                'borderDash': [0x6, 0x3],
                'pointRadius': 0x0,
                'fill': ![],
                'borderWidth': 0x2
            }, {
                'label': 'Spend',
                'data': _0x361ef1,
                'borderColor': _0x121518(0x270),
                'backgroundColor': _0x121518(0x2c4),
                'fill': !![],
                'tension': 0.4,
                'borderWidth': 0x2,
                'pointBackgroundColor': _0x121518(0x270),
                'pointRadius': 0x3
            }, {
                'label': _0x121518(0x13f),
                'data': _0x5272d4,
                'borderColor': _0x121518(0x1d6),
                'backgroundColor': _0x121518(0x11c),
                'fill': !![],
                'tension': 0.4,
                'borderWidth': 0x2,
                'pointBackgroundColor': _0x121518(0x1d6),
                'pointRadius': 0x3
            }]
        },
        'options': {
            'responsive': !![],
            'maintainAspectRatio': ![],
            'plugins': {
                'legend': {
                    'labels': {
                        'color': _0x121518(0xe9),
                        'font': {
                            'size': 0xb,
                            'family': _0x121518(0x280)
                        },
                        'boxWidth': 0x14
                    }
                }
            },
            'scales': {
                'x': {
                    'grid': {
                        'color': _0x121518(0x300)
                    },
                    'ticks': {
                        'color': _0x121518(0x215),
                        'font': {
                            'size': 0xa
                        }
                    }
                },
                'y': {
                    'grid': {
                        'color': _0x121518(0x300)
                    },
                    'ticks': {
                        'color': _0x121518(0x215),
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

function updateHeader(_0x4bcffd) {
    const _0x16daec = _0x570119,
        _0x349d0f = document[_0x16daec(0xba)](_0x16daec(0xfe)),
        _0x9035ff = [{
            'label': 'Total\x20Liquid',
            'value': _0x16daec(0x2bc) + _0x4bcffd[_0x16daec(0x179)]['toLocaleString'](),
            'color': _0x16daec(0x227),
            'icon': '💰'
        }, {
            'label': 'Reserved\x20Bills',
            'value': _0x16daec(0x2bc) + _0x4bcffd[_0x16daec(0x1f4)][_0x16daec(0x10c)](),
            'color': '#C42B1C',
            'icon': '📋'
        }, {
            'label': 'Survival\x20Window',
            'value': _0x4bcffd['daysRem'] + _0x16daec(0x1a3),
            'color': _0x16daec(0x1d6),
            'icon': '📅'
        }, {
            'label': _0x16daec(0x2f7),
            'value': _0x16daec(0x2bc) + Math[_0x16daec(0x10f)](0x0, _0x4bcffd[_0x16daec(0x273)])[_0x16daec(0x85)](0x0),
            'color': '#6B46C1',
            'icon': '📊'
        }];
    _0x349d0f[_0x16daec(0x224)]['gridTemplateColumns'] = _0x16daec(0x16e);
    window[_0x16daec(0x16d)] < 0x258 && (_0x349d0f[_0x16daec(0x224)][_0x16daec(0x13c)] = 'repeat(2,1fr)');
    window[_0x16daec(0x16d)] < 0x190 && (_0x349d0f['style'][_0x16daec(0x13c)] = _0x16daec(0x16a));
    _0x349d0f[_0x16daec(0x120)] = _0x9035ff[_0x16daec(0x146)](_0x4ceb6b => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22metric-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22metric-accent\x22\x20style=\x22background:' + _0x4ceb6b[_0x16daec(0x1ce)] + _0x16daec(0x77) + _0x4ceb6b[_0x16daec(0x2e0)] + '\x20' + _0x4ceb6b[_0x16daec(0xd5)] + _0x16daec(0x2c0) + _0x4ceb6b[_0x16daec(0x111)] + _0x16daec(0x27f))[_0x16daec(0x1cd)]('');
    const _0x46d6ca = document['getElementById'](_0x16daec(0x192));
    _0x4bcffd['safeCash'] < 0x0 ? (_0x46d6ca[_0x16daec(0x302)] = 'chip\x20chip-red', _0x46d6ca[_0x16daec(0x144)] = '⚠\x20INSOLVENT') : (_0x46d6ca[_0x16daec(0x302)] = _0x16daec(0x2ee), _0x46d6ca[_0x16daec(0x144)] = _0x16daec(0x12e));
}

function showTxModal() {
    const _0x590c04 = _0x570119,
        _0x2ae880 = document[_0x590c04(0xba)]('tx-debit'),
        _0x280d2c = document[_0x590c04(0xba)](_0x590c04(0x23e));
    _0x2ae880[_0x590c04(0x120)] = _0x280d2c[_0x590c04(0x120)] = '';
    const _0x2b69da = state[_0x590c04(0xc2)][_0x590c04(0x1fd)] === _0x590c04(0x101),
        _0x3b3ea5 = (_0x2740b0, _0x448f2c, _0x281ca0) => {
            const _0x181132 = _0x590c04,
                _0x3454a9 = document[_0x181132(0x17f)](_0x181132(0x1eb));
            return _0x3454a9['label'] = '●\x20' + _0x2740b0, _0x3454a9[_0x181132(0x224)][_0x181132(0x1ce)] = _0x448f2c, _0x281ca0[_0x181132(0x19a)](_0x3727 => {
                const _0x51013f = _0x181132;
                _0x3454a9[_0x51013f(0x1ff)](new Option(_0x3727, _0x3727));
            }), _0x3454a9;
        };
    if (_0x2b69da) {
        const _0x229831 = _0x43fcd8 => {
            const _0xadb3b9 = _0x590c04;
            _0x43fcd8['appendChild'](_0x3b3ea5(_0xadb3b9(0x1ac), _0xadb3b9(0x1d6), [_0xadb3b9(0x243), _0xadb3b9(0x293), _0xadb3b9(0xa4), _0xadb3b9(0x25e)])), _0x43fcd8['appendChild'](_0x3b3ea5(_0xadb3b9(0x14d), _0xadb3b9(0x1d6), ['Salary', _0xadb3b9(0x254), 'Allowance', _0xadb3b9(0x184), 'Other\x20Income'])), _0x43fcd8['appendChild'](_0x3b3ea5(_0xadb3b9(0x1e8), _0xadb3b9(0x219), ['Food\x20&\x20Groceries', _0xadb3b9(0x11b), 'Bills', _0xadb3b9(0x245), 'Medical', _0xadb3b9(0x212)])), _0x43fcd8[_0xadb3b9(0x1ff)](_0x3b3ea5(_0xadb3b9(0x1c0), _0xadb3b9(0x270), ['Entertainment', 'Clothes', _0xadb3b9(0x1ec), _0xadb3b9(0x255)])), _0x43fcd8[_0xadb3b9(0x1ff)](_0x3b3ea5(_0xadb3b9(0x1d4), _0xadb3b9(0x227), [_0xadb3b9(0x278), _0xadb3b9(0x12c)]));
        };
        _0x229831(_0x2ae880), _0x229831(_0x280d2c);
    } else {
        const _0x58ade3 = _0x41d000 => {
            const _0x48b675 = _0x590c04;
            _0x41d000[_0x48b675(0x1ff)](_0x3b3ea5(_0x48b675(0x1ac), '#107C10', [_0x48b675(0x171), _0x48b675(0x2a9), _0x48b675(0x121), 'Inventory', 'Fixed\x20Assets'])), _0x41d000[_0x48b675(0x1ff)](_0x3b3ea5(_0x48b675(0x1a2), _0x48b675(0x1d6), ['Sales\x20Revenue', _0x48b675(0x112), _0x48b675(0x186)])), _0x41d000['appendChild'](_0x3b3ea5(_0x48b675(0x2e3), _0x48b675(0x219), [_0x48b675(0x11b), _0x48b675(0x173), _0x48b675(0x1c6), _0x48b675(0x1e5), _0x48b675(0x229), _0x48b675(0x1a8)])), _0x41d000[_0x48b675(0x1ff)](_0x3b3ea5(_0x48b675(0x14c), _0x48b675(0x270), [_0x48b675(0x117), _0x48b675(0xfa), _0x48b675(0x14e)])), _0x41d000[_0x48b675(0x1ff)](_0x3b3ea5('LIABILITIES', '#0078D4', [_0x48b675(0x244), _0x48b675(0x277)]));
        };
        _0x58ade3(_0x2ae880), _0x58ade3(_0x280d2c);
    }
    document[_0x590c04(0xba)]('tx-modal')[_0x590c04(0x1e9)]['add'](_0x590c04(0x27c)), updateLiveHud();
}

function _0x2323(_0x19ae71, _0x39bc31) {
    _0x19ae71 = _0x19ae71 - 0x6a;
    const _0x1d370d = _0x1d37();
    let _0x2323e3 = _0x1d370d[_0x19ae71];
    return _0x2323e3;
}
async function commitTransaction() {
    const _0x45704b = _0x570119,
        _0x57bec1 = parseFloat(document[_0x45704b(0xba)](_0x45704b(0x7b))[_0x45704b(0x111)]),
        _0x59f76b = document[_0x45704b(0xba)]('tx-debit')[_0x45704b(0x111)],
        _0x5366ef = document[_0x45704b(0xba)](_0x45704b(0x23e))[_0x45704b(0x111)],
        _0x5817a3 = document[_0x45704b(0xba)](_0x45704b(0x2ec))[_0x45704b(0x111)] || _0x45704b(0x239);
    if (_0x59f76b === _0x5366ef || isNaN(_0x57bec1) || _0x57bec1 <= 0x0) return showCustomAlert('Strategy\x20Error:<br><br>A\x20transaction\x20must\x20move\x20value\x20between\x20two\x20different\x20accounts.');
    const _0x143f49 = {
        'id': Date[_0x45704b(0x230)](),
        'debit': _0x59f76b,
        'credit': _0x5366ef,
        'amount': _0x57bec1,
        'desc': _0x5817a3
    };
    state[_0x45704b(0x166)][_0x45704b(0x1cb)](_0x143f49), await saveData('tx', _0x143f49);
    if (typeof travisNotif !== _0x45704b(0x102)) travisNotif[_0x45704b(0x19e)]();
    if (typeof saveBackup === _0x45704b(0x1b2)) {
        await saveBackup();
        if (!backupDirHandle) await setupBackupFolder();
    }
    closeTxModal(), nav(_0x45704b(0x305));
}

function closeTxModal() {
    const _0x5aa9a8 = _0x570119;
    document[_0x5aa9a8(0xba)]('tx-modal')['classList']['remove'](_0x5aa9a8(0x27c)), document[_0x5aa9a8(0xba)](_0x5aa9a8(0x7b))[_0x5aa9a8(0x111)] = '';
}

function addObligationRow(_0xe789e1 = '', _0x3d4c80 = '') {
    const _0xc3a9c1 = _0x570119,
        _0x3b0be9 = document['createElement'](_0xc3a9c1(0x268));
    _0x3b0be9['style'][_0xc3a9c1(0x86)] = _0xc3a9c1(0x201), _0x3b0be9['innerHTML'] = '<input\x20type=\x22text\x22\x20placeholder=\x22e.g.\x20Rent\x22\x20value=\x22' + _0xe789e1 + _0xc3a9c1(0xb7) + _0x3d4c80 + _0xc3a9c1(0x17d), document[_0xc3a9c1(0xba)](_0xc3a9c1(0x87))[_0xc3a9c1(0x1ff)](_0x3b0be9);
}

function setUserType(_0x45a142) {
    const _0x3c9805 = _0x570119;
    state[_0x3c9805(0x19b)] = _0x45a142, document[_0x3c9805(0xba)]('btn-p')[_0x3c9805(0x302)] = _0x3c9805(0xb6) + (_0x45a142 === _0x3c9805(0x101) ? _0x3c9805(0x307) : ''), document[_0x3c9805(0xba)](_0x3c9805(0x287))[_0x3c9805(0x302)] = _0x3c9805(0xb6) + (_0x45a142 === _0x3c9805(0xec) ? _0x3c9805(0x307) : '');
}
async function finalizeSetup() {
    const _0x255a09 = _0x570119,
        _0x45b9a6 = document[_0x255a09(0xba)](_0x255a09(0x177))[_0x255a09(0x111)],
        _0x468cf1 = Array['from'](document[_0x255a09(0x109)]('#obligation-list\x20>\x20div'))['map'](_0x3da860 => ({
            'label': _0x3da860[_0x255a09(0x109)](_0x255a09(0x9f))[0x0][_0x255a09(0x111)],
            'amount': parseFloat(_0x3da860[_0x255a09(0x109)](_0x255a09(0x9f))[0x1]['value']) || 0x0
        }))[_0x255a09(0x99)](_0x1c66ac => _0x1c66ac['label']);
    if (!_0x45b9a6 || !state['tempType']) return showCustomAlert(_0x255a09(0x12d));
    state['user'] = {
        'name': _0x45b9a6,
        'type': state[_0x255a09(0x19b)]
    }, state[_0x255a09(0x92)] = _0x468cf1, await saveData('meta', {
        'id': _0x255a09(0x2a5),
        'user': state[_0x255a09(0xc2)],
        'obligations': state[_0x255a09(0x92)]
    });
    if (typeof saveBackup === _0x255a09(0x1b2)) await saveBackup();
    location[_0x255a09(0x1ca)]();
}
async function factoryReset() {
    const _0x25b760 = _0x570119;
    confirm(_0x25b760(0xbe)) && (indexedDB[_0x25b760(0x298)](_0x25b760(0x200)), location[_0x25b760(0x1ca)]());
}

function showHelpModal() {
    const _0x5b7878 = _0x570119,
        _0x5cc181 = document[_0x5b7878(0xba)](_0x5b7878(0x261));
    _0x5cc181[_0x5b7878(0x224)][_0x5b7878(0x7e)] = _0x5b7878(0x1c4);
}

function closeHelpModal() {
    const _0x97c15e = _0x570119,
        _0x15d309 = document[_0x97c15e(0xba)](_0x97c15e(0x261));
    _0x15d309[_0x97c15e(0x224)][_0x97c15e(0x7e)] = _0x97c15e(0x2c2);
}

function handleAsk() {
    const _0xb567dc = _0x570119,
        _0x38e8ff = document[_0xb567dc(0xba)](_0xb567dc(0x1a6)),
        _0x5ee050 = document[_0xb567dc(0xba)](_0xb567dc(0x167)),
        _0x32f6cb = _0x38e8ff[_0xb567dc(0x111)][_0xb567dc(0x81)]();
    if (!_0x32f6cb) return;
    travisMemory['conversationCount']++, travisMemory[_0xb567dc(0x1fa)] = _0x32f6cb;
    const _0x1237e5 = _0x32f6cb[_0xb567dc(0x2fa)]()[_0xb567dc(0x81)](),
        _0x3a87a2 = getFin(),
        _0x262a6b = getStatusSummary(),
        _0x56d304 = state['user'][_0xb567dc(0x1fd)] === 'business';
    let _0x5a88f6 = 0x0;
    const _0x5d7972 = _0x1237e5[_0xb567dc(0x265)](/,/g, ''),
        _0x2375e2 = _0x5d7972[_0xb567dc(0xed)](/(\d+(?:\.\d+)?)\s*(k|thousand|ksh|shillings|bob)?/i);
    if (_0x2375e2) {
        _0x5a88f6 = parseFloat(_0x2375e2[0x1]);
        if (_0x2375e2[0x2] && /k|thousand/i [_0xb567dc(0x232)](_0x2375e2[0x2])) _0x5a88f6 *= 0x3e8;
    }
    const _0x228409 = (..._0x4a8c50) => _0x4a8c50[_0xb567dc(0x1f2)](_0x329595 => _0x1237e5[_0xb567dc(0x1b3)](_0x329595)),
        _0x5236a0 = {
            'spend': _0x228409(_0xb567dc(0x25f), _0xb567dc(0x1a7), 'afford', _0xb567dc(0xdf), 'get', _0xb567dc(0x25b), _0xb567dc(0xf5), _0xb567dc(0x1bf), _0xb567dc(0x6a), _0xb567dc(0x1af)),
            'loan': _0x228409(_0xb567dc(0x29f), _0xb567dc(0xda), 'fuliza', _0xb567dc(0x19d), _0xb567dc(0xe5), _0xb567dc(0x247), _0xb567dc(0x1d0), _0xb567dc(0x22f), _0xb567dc(0xcc)),
            'stock': _0x228409(_0xb567dc(0x98), _0xb567dc(0x106), _0xb567dc(0x213), _0xb567dc(0x2cf), _0xb567dc(0x2a2), _0xb567dc(0x2ef), 'merchandise', _0xb567dc(0x257)),
            'staff': _0x228409(_0xb567dc(0x303), _0xb567dc(0x75), _0xb567dc(0xd2), _0xb567dc(0x152), 'employ', _0xb567dc(0xa7), _0xb567dc(0x135), _0xb567dc(0x2ac), _0xb567dc(0x283), _0xb567dc(0x282)),
            'tax': _0x228409(_0xb567dc(0x1d3), _0xb567dc(0x129), 'vat', _0xb567dc(0x260), _0xb567dc(0x8f), _0xb567dc(0xa0), _0xb567dc(0x1c7), _0xb567dc(0x267), _0xb567dc(0x18a)),
            'asset': _0x228409(_0xb567dc(0x1b6), 'equipment', 'machine', _0xb567dc(0x84), 'fridge', 'freezer', _0xb567dc(0x6b), _0xb567dc(0x2f5), 'matatu', _0xb567dc(0x1b7), _0xb567dc(0x301)),
            'status': _0x228409(_0xb567dc(0x2e5), 'how\x20am\x20i', _0xb567dc(0x1fc), _0xb567dc(0x25a), _0xb567dc(0x21d), _0xb567dc(0x2e2), _0xb567dc(0x251), 'next\x20week', 'coming\x20week', _0xb567dc(0xaf), _0xb567dc(0x271), _0xb567dc(0x1ae), _0xb567dc(0x272), _0xb567dc(0xbd), 'tell\x20me\x20about'),
            'profit': _0x228409(_0xb567dc(0x1e0), _0xb567dc(0x12b), 'more\x20money', _0xb567dc(0x147), _0xb567dc(0x178), _0xb567dc(0x240), _0xb567dc(0x1db), _0xb567dc(0x27e), 'how\x20to\x20improve'),
            'habit': _0x228409(_0xb567dc(0xb1), _0xb567dc(0x1fe), 'how\x20much\x20should\x20i', _0xb567dc(0x250), _0xb567dc(0x2df), _0xb567dc(0x18b)),
            'savings': _0x228409(_0xb567dc(0xb3), _0xb567dc(0x2d1), _0xb567dc(0xf1), _0xb567dc(0x143), _0xb567dc(0x1ba), 'future'),
            'pricing': _0x228409(_0xb567dc(0x118), _0xb567dc(0xc1), _0xb567dc(0x188), _0xb567dc(0x20d), _0xb567dc(0x226), 'margin', 'what\x20should\x20i\x20charge'),
            'cashflow': _0x228409(_0xb567dc(0x1b4), _0xb567dc(0x7c), _0xb567dc(0x140), _0xb567dc(0x235), _0xb567dc(0x108), _0xb567dc(0x2e6), _0xb567dc(0x145)),
            'rent': _0x228409('rent', _0xb567dc(0x141), _0xb567dc(0x11d), _0xb567dc(0xbf)),
            'school': _0x228409(_0xb567dc(0x2c8), 'fees', _0xb567dc(0x172), _0xb567dc(0x17c), _0xb567dc(0x10b), _0xb567dc(0x25c)),
            'medical': _0x228409(_0xb567dc(0x23c), _0xb567dc(0x241), _0xb567dc(0xc3), _0xb567dc(0x160), _0xb567dc(0x274), _0xb567dc(0x269), _0xb567dc(0x6c)),
            'family': _0x228409(_0xb567dc(0x291), _0xb567dc(0x2e7), _0xb567dc(0x100), 'sibling', _0xb567dc(0x22e), _0xb567dc(0x1bb), _0xb567dc(0x22b), _0xb567dc(0x71), _0xb567dc(0xae)),
            'invest': _0x228409('invest', _0xb567dc(0x2d9), _0xb567dc(0xbb), _0xb567dc(0x11e), _0xb567dc(0x2bb), _0xb567dc(0x2ce), _0xb567dc(0x28a), _0xb567dc(0xd0)),
            'compare': _0x228409('vs', _0xb567dc(0x256), _0xb567dc(0x26f), _0xb567dc(0x131), _0xb567dc(0x26c)),
            'withdraw': _0x228409(_0xb567dc(0x208), 'take\x20out', _0xb567dc(0x115), 'atm', _0xb567dc(0xd7))
        },
        _0x19d741 = _0x262a6b['cash'],
        _0x306c1c = _0x262a6b[_0xb567dc(0x220)],
        _0x3e2fcb = _0x262a6b[_0xb567dc(0x2aa)],
        _0x14bbe2 = _0x3a87a2[_0xb567dc(0x297)],
        _0xfd6410 = _0x3a87a2['safeCash'],
        _0x1731f6 = _0xfd6410 - _0x19d741,
        _0x3b040a = _0x19d741 - _0x306c1c * _0x14bbe2,
        _0x419357 = _0x5a88f6 > 0x0 ? _0x5a88f6 / _0x19d741 : 0x0,
        _0x53e75d = {
            'LOW': _0xb567dc(0xc6),
            'MODERATE': _0xb567dc(0x8b),
            'CRITICAL': _0xb567dc(0x2cb)
        } [_0x3e2fcb] || _0xb567dc(0x2d6);

    function _0x6f7cac(_0x11c3b5) {
        const _0x5a3fcc = _0xb567dc,
            _0x24a77f = '<div\x20style=\x22display:flex;flex-wrap:wrap;align-items:center;gap:6px\x2010px;padding:10px\x2012px;background:var(--color-background-secondary);border-radius:var(--border-radius-md);margin-bottom:14px;font-size:13px;\x22><div\x20style=\x22display:flex;align-items:center;gap:5px;white-space:nowrap;\x22><span\x20style=\x22color:var(--color-text-secondary);font-size:12px;\x22>Risk</span><span\x20style=\x22font-weight:500;color:' + _0x53e75d + _0x5a3fcc(0x2e4) + _0x3e2fcb + '</span></div><span\x20style=\x22color:var(--color-border-secondary);font-size:11px;\x22>·</span><div\x20style=\x22display:flex;align-items:center;gap:5px;white-space:nowrap;\x22><span\x20style=\x22color:var(--color-text-secondary);font-size:12px;\x22>Daily\x20cap</span><span\x20style=\x22font-weight:500;color:var(--color-text-primary);\x22>KSh\x20' + _0x306c1c[_0x5a3fcc(0x10c)]() + _0x5a3fcc(0xb0) + _0x19d741[_0x5a3fcc(0x10c)]() + _0x5a3fcc(0xaa) + _0x14bbe2 + _0x5a3fcc(0x21c),
            _0x5fb1eb = '<div\x20style=\x22margin-top:16px;padding:12px\x2014px;border-left:3px\x20solid\x20' + _0x53e75d + ';background:var(--color-background-secondary);border-radius:0\x20var(--border-radius-md)\x20var(--border-radius-md)\x200;\x22><div\x20style=\x22font-size:11px;font-weight:500;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;\x22>My\x20advice</div><div\x20style=\x22font-size:15px;color:var(--color-text-primary);line-height:1.6;\x22>' + _0x11c3b5[_0x5a3fcc(0x80)] + _0x5a3fcc(0xa2),
            _0x1ed7a7 = _0x11c3b5[_0x5a3fcc(0x1de)] && _0x11c3b5[_0x5a3fcc(0x1de)]['length'] ? _0x5a3fcc(0x1b9) + _0x11c3b5[_0x5a3fcc(0x1de)][_0x5a3fcc(0x146)](_0x2c0784 => '<button\x20onclick=\x22document.getElementById(\x27chat-input\x27).value=\x27' + _0x2c0784['q'] + '\x27;handleAsk();\x22\x20style=\x22font-size:12px;padding:5px\x2012px;border-radius:var(--border-radius-md);border:0.5px\x20solid\x20var(--color-border-secondary);background:transparent;color:var(--color-text-secondary);cursor:pointer;\x22>' + _0x2c0784['label'] + _0x5a3fcc(0x76))[_0x5a3fcc(0x1cd)]('') + _0x5a3fcc(0x203) : '';
        return _0x24a77f + _0x5a3fcc(0x2b1) + _0x11c3b5[_0x5a3fcc(0x25d)] + _0x5a3fcc(0x203) + _0x5fb1eb + _0x1ed7a7;
    }
    let _0x4b8921 = {
        'body': '',
        'conclusion': '',
        'actions': []
    };
    if (_0x5a88f6 > 0x0 && (_0x5236a0['spend'] || _0x5236a0[_0xb567dc(0x190)] || _0x5236a0[_0xb567dc(0x2c8)] || _0x5236a0['medical'] || _0x5236a0[_0xb567dc(0x291)] || _0x5236a0[_0xb567dc(0x98)])) {
        const _0x49ca41 = _0x5236a0[_0xb567dc(0x190)] || _0x5236a0[_0xb567dc(0x2c8)] || _0x5236a0[_0xb567dc(0x2db)],
            _0x55c835 = _0x49ca41 || _0x5236a0[_0xb567dc(0x291)],
            _0x1859c2 = _0x5a88f6 <= _0x306c1c,
            _0x4145cf = Math[_0xb567dc(0x10a)](_0x419357 * 0x64),
            _0x30dafe = _0x19d741 - _0x5a88f6,
            _0x2d3d08 = _0x14bbe2 > 0x0 ? Math[_0xb567dc(0x2b3)](_0x30dafe / _0x14bbe2) : 0x0;
        if (_0x49ca41) {
            if (_0x19d741 < 0x0) _0x4b8921[_0xb567dc(0x25d)] = 'You\x27re\x20asking\x20about\x20spending\x20KSh\x20' + _0x5a88f6[_0xb567dc(0x10c)]() + _0xb567dc(0x246) + Math['abs'](_0x19d741)['toLocaleString']() + ',\x20which\x20means\x20you\x27re\x20already\x20spending\x20money\x20you\x20don\x27t\x20have.\x20Paying\x20this\x20now\x20would\x20deepen\x20the\x20hole.\x20That\x20doesn\x27t\x20mean\x20ignore\x20it\x20—\x20it\x20means\x20you\x20need\x20to\x20either\x20bring\x20in\x20money\x20fast\x20(collect\x20debts,\x20push\x20sales,\x20call\x20a\x20trusted\x20person)\x20or\x20negotiate\x20a\x20short\x20delay\x20on\x20this\x20specific\x20payment.', _0x4b8921[_0xb567dc(0x80)] = _0xb567dc(0x202);
            else !_0x1859c2 ? (_0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0x242) + _0x5a88f6['toLocaleString']() + _0xb567dc(0x309) + _0x306c1c[_0xb567dc(0x10c)]() + ',\x20which\x20means\x20paying\x20it\x20in\x20full\x20today\x20will\x20eat\x20' + _0x4145cf + _0xb567dc(0x2ff) + _0x30dafe[_0xb567dc(0x10c)]() + _0xb567dc(0x90) + _0x14bbe2 + _0xb567dc(0x27b) + _0x2d3d08[_0xb567dc(0x10c)]() + _0xb567dc(0x1b8) + (_0x2d3d08 < 0xc8 ? _0xb567dc(0x2d3) : 'is\x20manageable\x20but\x20leaves\x20zero\x20room\x20for\x20surprises') + '.', _0x4b8921[_0xb567dc(0x80)] = _0xb567dc(0x29a)) : (_0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0x2bc) + _0x5a88f6[_0xb567dc(0x10c)]() + _0xb567dc(0x218) + _0x30dafe[_0xb567dc(0x10c)]() + _0xb567dc(0x1c5) + _0x2d3d08[_0xb567dc(0x10c)]() + _0xb567dc(0x10e) + (_0x2d3d08 >= 0x1f4 ? _0xb567dc(0x1e4) : _0xb567dc(0x185)) + '.', _0x4b8921['conclusion'] = _0xb567dc(0x21e) + _0x14bbe2 + _0xb567dc(0x2ea));
        } else {
            if (_0x5236a0['stock'] && _0x56d304) {
                const _0x3c1d9c = Math[_0xb567dc(0x2b3)](_0x19d741 * 0.5);
                if (_0x5a88f6 > _0x19d741) _0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0x1fb) + _0x5a88f6[_0xb567dc(0x10c)]() + _0xb567dc(0x2f6) + _0x19d741[_0xb567dc(0x10c)]() + _0xb567dc(0x24c), _0x4b8921[_0xb567dc(0x80)] = _0xb567dc(0x2a8) + _0x3c1d9c[_0xb567dc(0x10c)]() + _0xb567dc(0x122);
                else _0x5a88f6 > _0x3c1d9c ? (_0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0x2b4) + _0x5a88f6[_0xb567dc(0x10c)]() + _0xb567dc(0xf4) + _0x4145cf + _0xb567dc(0x137), _0x4b8921[_0xb567dc(0x80)] = _0xb567dc(0x189) + Math['floor'](_0x19d741 * 0.6)[_0xb567dc(0x10c)]() + '.\x20If\x20your\x20goods\x20are\x20slow-moving,\x20cut\x20the\x20order\x20to\x20KSh\x20' + _0x3c1d9c[_0xb567dc(0x10c)]() + _0xb567dc(0xca)) : (_0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0x2bc) + _0x5a88f6[_0xb567dc(0x10c)]() + _0xb567dc(0x91) + _0x4145cf + _0xb567dc(0x96) + _0x30dafe[_0xb567dc(0x10c)]() + _0xb567dc(0x211), _0x4b8921[_0xb567dc(0x80)] = _0xb567dc(0xd6));
            } else {
                if (_0x3e2fcb === _0xb567dc(0xa5) || _0x19d741 <= 0x0) _0x4b8921['body'] = _0xb567dc(0x2bf) + _0x5a88f6[_0xb567dc(0x10c)]() + _0xb567dc(0x15b) + _0x19d741[_0xb567dc(0x10c)]() + _0xb567dc(0x1dc), _0x4b8921['conclusion'] = _0xb567dc(0x16f);
                else !_0x1859c2 ? (_0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0x2bc) + _0x5a88f6['toLocaleString']() + _0xb567dc(0x18e) + _0x306c1c[_0xb567dc(0x10c)]() + '.\x20That\x27s\x20not\x20automatically\x20a\x20disaster\x20—\x20but\x20it\x20does\x20mean\x20you\x27re\x20borrowing\x20from\x20tomorrow\x27s\x20budget\x20today.\x20After\x20this\x20spend,\x20your\x20remaining\x20' + (_0x14bbe2 - 0x1) + _0xb567dc(0xc4) + _0x2d3d08[_0xb567dc(0x10c)]() + _0xb567dc(0xe2) + _0x306c1c['toLocaleString']() + '.', _0x4b8921['conclusion'] = _0x3e2fcb === _0xb567dc(0x1ed) ? _0xb567dc(0x204) : _0xb567dc(0x17a) + Math[_0xb567dc(0x2b3)](_0x306c1c * 0.8)[_0xb567dc(0x10c)]() + '\x20or\x20delay\x20to\x20a\x20day\x20when\x20you\x27ve\x20had\x20good\x20income.') : (_0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0x2bc) + _0x5a88f6[_0xb567dc(0x10c)]() + _0xb567dc(0xb2) + _0x306c1c[_0xb567dc(0x10c)]() + _0xb567dc(0x2c9) + _0x4145cf + _0xb567dc(0x183) + _0x30dafe[_0xb567dc(0x10c)]() + _0xb567dc(0x24f) + _0x14bbe2 + _0xb567dc(0x1d1) + _0x2d3d08['toLocaleString']() + _0xb567dc(0xe0), _0x4b8921[_0xb567dc(0x80)] = _0xb567dc(0x2e1));
            }
        }
        _0x4b8921[_0xb567dc(0x1de)] = [{
            'label': 'My\x207-day\x20forecast',
            'q': _0xb567dc(0x29d)
        }, {
            'label': _0xb567dc(0x30a),
            'q': _0xb567dc(0x2a3)
        }];
    } else {
        if (_0x5236a0[_0xb567dc(0x29f)]) {
            const _0x2bd757 = _0x5a88f6 || 0x0,
                _0x1c72b0 = 0.15,
                _0x1cbe4e = _0x2bd757 > 0x0 ? Math[_0xb567dc(0x10a)](_0x2bd757 * (0x1 + _0x1c72b0)) : 0x0,
                _0x46594e = _0x14bbe2 > 0x0 ? Math[_0xb567dc(0x10a)](_0x1cbe4e / 0x1e) : 0x0;
            if (_0x3e2fcb === _0xb567dc(0xa5)) _0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0x1bd) + _0x19d741[_0xb567dc(0x10c)]() + ',\x20and\x20adding\x20a\x20loan\x20repayment\x20on\x20top\x20of\x20that\x20is\x20like\x20patching\x20a\x20leaking\x20roof\x20while\x20standing\x20in\x20a\x20flood.', _0x4b8921['conclusion'] = _0xb567dc(0x168);
            else _0x3e2fcb === _0xb567dc(0x1dd) ? (_0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0xff) + (_0x2bd757 > 0x0 ? _0x2bd757['toLocaleString']() : '10,000') + _0xb567dc(0x130) + (_0x2bd757 > 0x0 ? _0x1cbe4e[_0xb567dc(0x10c)]() : _0xb567dc(0x15d)) + '\x20owed.', _0x4b8921[_0xb567dc(0x80)] = _0x2bd757 > 0x0 ? _0xb567dc(0xf9) + Math['round'](_0x1cbe4e * 1.2)['toLocaleString']() + _0xb567dc(0xfd) : _0xb567dc(0x26b)) : (_0x4b8921[_0xb567dc(0x25d)] = 'Your\x20financials\x20are\x20in\x20a\x20stable\x20position\x20right\x20now\x20—\x20buffer\x20is\x20healthy\x20and\x20risk\x20is\x20low,\x20which\x20actually\x20means\x20you\x27re\x20in\x20the\x20best\x20negotiating\x20position\x20you\x27ll\x20have.\x20' + (_0x2bd757 > 0x0 ? _0xb567dc(0xe4) + _0x2bd757['toLocaleString']() + _0xb567dc(0x182) + _0x1cbe4e[_0xb567dc(0x10c)]() + _0xb567dc(0x225) + _0x46594e['toLocaleString']() + _0xb567dc(0x124) : 'Just\x20calculate\x20the\x20daily\x20repayment\x20cost\x20against\x20your\x20current\x20daily\x20cap\x20before\x20committing.'), _0x4b8921[_0xb567dc(0x80)] = _0xb567dc(0x175));
            _0x4b8921[_0xb567dc(0x1de)] = [{
                'label': 'Can\x20I\x20afford\x20repayments',
                'q': _0xb567dc(0x18c)
            }, {
                'label': _0xb567dc(0x148),
                'q': _0xb567dc(0xef)
            }];
        } else {
            if (_0x5236a0[_0xb567dc(0x75)]) {
                const _0x495963 = _0x5a88f6 || 0x0,
                    _0x4c037e = Math['floor'](_0x19d741 * 0.25),
                    _0x203551 = _0x495963 > 0x0 ? Math[_0xb567dc(0x2b3)](_0x4c037e / _0x495963) : 0x0;
                if (_0x3e2fcb === 'CRITICAL' || _0x19d741 < 0x1388) _0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0x306) + _0x19d741[_0xb567dc(0x10c)]() + _0xb567dc(0x2c5), _0x4b8921[_0xb567dc(0x80)] = 'Don\x27t\x20hire\x20right\x20now.\x20The\x20business\x20isn\x27t\x20stable\x20enough\x20to\x20guarantee\x20a\x20consistent\x20wage.\x20Get\x20the\x20buffer\x20above\x20KSh\x2015,000\x20first,\x20then\x20revisit.';
                else _0x495963 > 0x0 ? _0x495963 > _0x4c037e ? (_0x4b8921[_0xb567dc(0x25d)] = 'You\x27re\x20thinking\x20about\x20bringing\x20someone\x20on\x20at\x20KSh\x20' + _0x495963[_0xb567dc(0x10c)]() + _0xb567dc(0xee) + _0x19d741['toLocaleString']() + ',\x20a\x20safe\x20wage\x20budget\x20is\x20around\x20KSh\x20' + _0x4c037e['toLocaleString']() + _0xb567dc(0x12f), _0x4b8921[_0xb567dc(0x80)] = _0xb567dc(0x252) + _0x4c037e[_0xb567dc(0x10c)]() + _0xb567dc(0x2d5)) : (_0x4b8921['body'] = 'At\x20KSh\x20' + _0x495963[_0xb567dc(0x10c)]() + _0xb567dc(0x191) + _0x4c037e[_0xb567dc(0x10c)]() + '.', _0x4b8921[_0xb567dc(0x80)] = _0xb567dc(0x198)) : (_0x4b8921[_0xb567dc(0x25d)] = 'Whether\x20you\x20can\x20add\x20staff\x20depends\x20entirely\x20on\x20your\x20wage\x20budget\x20and\x20the\x20business\x27s\x20current\x20cash\x20flow.\x20Your\x20buffer\x20is\x20KSh\x20' + _0x19d741[_0xb567dc(0x10c)]() + ',\x20and\x20a\x20safe\x20guideline\x20is\x20that\x20total\x20wages\x20shouldn\x27t\x20exceed\x2025–30%\x20of\x20that\x20buffer\x20per\x20month\x20—\x20so\x20you\x20have\x20room\x20for\x20wages\x20of\x20up\x20to\x20KSh\x20' + _0x4c037e[_0xb567dc(0x10c)]() + _0xb567dc(0xea), _0x4b8921[_0xb567dc(0x80)] = 'Tell\x20me\x20the\x20wage\x20you\x20have\x20in\x20mind\x20and\x20I\x27ll\x20calculate\x20whether\x20the\x20numbers\x20work.', _0x4b8921[_0xb567dc(0x1de)] = [{
                    'label': _0xb567dc(0x1f6),
                    'q': 'Can\x20I\x20hire\x20someone\x20at\x20KSh\x208000\x20per\x20month?'
                }]);
            } else {
                if (_0x5236a0[_0xb567dc(0x1d3)]) _0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0x1f0), _0x4b8921[_0xb567dc(0x80)] = 'File\x20on\x20time,\x20every\x20time,\x20even\x20if\x20you\x20can\x27t\x20pay\x20everything\x20immediately.\x20A\x20filed-but-unpaid\x20return\x20is\x20better\x20than\x20an\x20unfiled\x20one.', _0x4b8921['actions'] = [{
                    'label': 'How\x20much\x20tax\x20should\x20I\x20set\x20aside',
                    'q': _0xb567dc(0x23f)
                }];
                else {
                    if (_0x5236a0[_0xb567dc(0x1b6)]) {
                        const _0x2d8ccd = _0x5a88f6 || 0x0,
                            _0x4f2351 = _0x2d8ccd > 0x0 ? Math[_0xb567dc(0x10a)](_0x2d8ccd / _0x19d741 * 0x64) : 0x0;
                        _0x4b8921[_0xb567dc(0x25d)] = _0x2d8ccd > 0x0 ? 'Buying\x20equipment\x20for\x20KSh\x20' + _0x2d8ccd['toLocaleString']() + _0xb567dc(0x8a) + _0x4f2351 + _0xb567dc(0x27d) + _0x19d741[_0xb567dc(0x10c)]() + '\x20free\x20cash.' : _0xb567dc(0x156) + _0x19d741[_0xb567dc(0x10c)]() + '.';
                        if (_0x3e2fcb === _0xb567dc(0xa5)) _0x4b8921[_0xb567dc(0x80)] = 'This\x20is\x20the\x20wrong\x20time\x20for\x20a\x20capital\x20purchase.\x20Your\x20operating\x20position\x20is\x20critical\x20—\x20protect\x20cash\x20liquidity\x20first.';
                        else _0x2d8ccd > _0x19d741 * 0.5 ? _0x4b8921[_0xb567dc(0x80)] = 'At\x20' + _0x4f2351 + '%\x20of\x20your\x20buffer,\x20this\x20would\x20strain\x20your\x20liquidity.\x20Look\x20at\x20leasing,\x20hire-purchase,\x20or\x20phased\x20payment\x20options.' : _0x4b8921[_0xb567dc(0x80)] = 'If\x20this\x20asset\x20pays\x20back\x20within\x2060–90\x20days,\x20go\x20ahead.\x20Just\x20make\x20sure\x20you\x20have\x20at\x20least\x20KSh\x20' + Math[_0xb567dc(0x10a)](_0x19d741 * 0.4)[_0xb567dc(0x10c)]() + _0xb567dc(0x285);
                        _0x4b8921[_0xb567dc(0x1de)] = [{
                            'label': 'Can\x20I\x20use\x20a\x20loan\x20for\x20this',
                            'q': _0xb567dc(0x21b)
                        }];
                    } else {
                        if (_0x5236a0[_0xb567dc(0x138)]) {
                            const _0x3efbeb = _0x3e2fcb === _0xb567dc(0x1ed) ? 0.15 : _0x3e2fcb === _0xb567dc(0x1dd) ? 0.07 : 0x0,
                                _0x217939 = Math[_0xb567dc(0x2b3)](_0x19d741 * _0x3efbeb);
                            _0x3e2fcb === _0xb567dc(0xa5) ? (_0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0xf7), _0x4b8921[_0xb567dc(0x80)] = 'Don\x27t\x20save\x20right\x20now.\x20Fix\x20the\x20cash\x20flow\x20first\x20—\x20get\x20risk\x20down\x20to\x20moderate,\x20then\x20start\x20putting\x205–10%\x20aside.') : (_0x4b8921[_0xb567dc(0x25d)] = 'With\x20your\x20buffer\x20at\x20KSh\x20' + _0x19d741[_0xb567dc(0x10c)]() + _0xb567dc(0xe6) + _0x3e2fcb + _0xb567dc(0xf3) + Math[_0xb567dc(0x10a)](_0x3efbeb * 0x64) + '%,\x20which\x20would\x20be\x20KSh\x20' + _0x217939[_0xb567dc(0x10c)]() + _0xb567dc(0x8d), _0x4b8921['conclusion'] = _0xb567dc(0x2de) + _0x217939[_0xb567dc(0x10c)]() + _0xb567dc(0x165));
                        } else {
                            if (_0x5236a0['pricing']) _0x4b8921[_0xb567dc(0x25d)] = 'Pricing\x20is\x20where\x20most\x20small\x20businesses\x20lose\x20quietly\x20—\x20not\x20through\x20big\x20mistakes,\x20but\x20through\x20margins\x20that\x20are\x20too\x20thin.\x20The\x20minimum\x20healthy\x20markup\x20for\x20a\x20retail\x20duka\x20or\x20small\x20business\x20in\x20Kenya\x20is\x2025–30%\x20above\x20cost\x20price.', _0x4b8921[_0xb567dc(0x80)] = _0xb567dc(0x2dc), _0x4b8921[_0xb567dc(0x1de)] = [{
                                'label': _0xb567dc(0x2f1),
                                'q': _0xb567dc(0x1d2)
                            }];
                            else {
                                if (_0x5236a0[_0xb567dc(0x15e)]) _0x4b8921[_0xb567dc(0x25d)] = 'Investing\x20is\x20smart\x20—\x20but\x20the\x20sequence\x20matters.\x20Before\x20putting\x20money\x20into\x20shares,\x20SACCOs,\x20or\x20crypto,\x20your\x20operating\x20cash\x20needs\x20to\x20be\x20healthy.\x20Your\x20buffer\x20right\x20now\x20is\x20KSh\x20' + _0x19d741[_0xb567dc(0x10c)]() + _0xb567dc(0x7a) + _0x3e2fcb + '.', _0x4b8921['conclusion'] = _0x3e2fcb === _0xb567dc(0x1ed) ? _0xb567dc(0xce) : 'Build\x20the\x20emergency\x20fund\x20first.\x20Once\x20you\x20have\x203\x20months\x20of\x20obligations\x20saved,\x20then\x20talk\x20about\x20investing.';
                                else {
                                    if (_0x5236a0['status'] || _0x5236a0[_0xb567dc(0x7c)]) {
                                        const _0x3bc332 = _0x3b040a >= 0x0 ? _0xb567dc(0x123) + _0x3b040a[_0xb567dc(0x10c)]() + _0xb567dc(0x20e) : _0xb567dc(0x2bd) + Math[_0xb567dc(0x15a)](_0x3b040a)[_0xb567dc(0x10c)]() + '\x20before\x20month\x20end',
                                            _0x3d7677 = _0x306c1c <= 0x0 ? _0xb567dc(0x2f0) : _0x306c1c < 0x12c ? _0xb567dc(0x258) + _0x306c1c[_0xb567dc(0x10c)]() : _0xb567dc(0x74) + _0x306c1c[_0xb567dc(0x10c)]() + '\x20of\x20safe\x20daily\x20spend';
                                        _0x4b8921[_0xb567dc(0x25d)] = 'Looking\x20at\x20your\x20numbers\x20right\x20now:\x20you\x20have\x20KSh\x20' + _0x19d741[_0xb567dc(0x10c)]() + _0xb567dc(0x1a1) + _0x14bbe2 + _0xb567dc(0x1b5) + _0x3d7677 + _0xb567dc(0x288) + _0x3bc332 + '.\x20Your\x20insolvency\x20risk\x20is\x20' + _0x3e2fcb + '.', _0x4b8921[_0xb567dc(0x80)] = _0x3e2fcb === _0xb567dc(0x1ed) ? 'You\x27re\x20in\x20good\x20shape.\x20Keep\x20your\x20daily\x20spend\x20under\x20KSh\x20' + _0x306c1c[_0xb567dc(0x10c)]() + _0xb567dc(0x1cf) : _0x3e2fcb === _0xb567dc(0x1dd) ? _0xb567dc(0x1a5) : 'This\x20is\x20a\x20real\x20emergency\x20position.\x20Stop\x20all\x20non-essential\x20spending\x20today,\x20call\x20in\x20any\x20debts\x20owed\x20to\x20you.', _0x4b8921['actions'] = [{
                                            'label': _0xb567dc(0x2ab),
                                            'q': 'What\x20expenses\x20should\x20I\x20cut\x20right\x20now?'
                                        }, {
                                            'label': 'How\x20to\x20increase\x20income',
                                            'q': 'How\x20can\x20I\x20bring\x20in\x20more\x20money\x20this\x20week?'
                                        }];
                                    } else {
                                        if (_0x5236a0[_0xb567dc(0xb1)]) {
                                            const _0x502e72 = _0x306c1c * 0x7,
                                                _0x1ab754 = _0xfd6410 > 0x0 ? Math['round'](_0x1731f6 / _0xfd6410 * 0x64) : 0x0;
                                            _0x4b8921['body'] = _0xb567dc(0x8c) + _0x306c1c[_0xb567dc(0x10c)]() + _0xb567dc(0x7f) + _0x502e72[_0xb567dc(0x10c)]() + '.', _0x4b8921[_0xb567dc(0x80)] = _0xb567dc(0x1f5) + _0x306c1c[_0xb567dc(0x10c)]() + '\x20as\x20your\x20absolute\x20daily\x20ceiling,\x20not\x20a\x20target.\x20On\x20days\x20when\x20you\x20spend\x20less,\x20don\x27t\x20\x22catch\x20up\x22\x20the\x20next\x20day\x20—\x20let\x20that\x20surplus\x20rebuild\x20your\x20buffer.';
                                        } else {
                                            if (_0x5236a0[_0xb567dc(0x1e0)]) _0x4b8921[_0xb567dc(0x25d)] = 'Profit\x20growth\x20in\x20a\x20small\x20' + (_0x56d304 ? _0xb567dc(0xec) : _0xb567dc(0x263)) + _0xb567dc(0xfc), _0x4b8921[_0xb567dc(0x80)] = _0x56d304 ? _0xb567dc(0x136) : _0xb567dc(0x11f);
                                            else {
                                                if (_0x5236a0[_0xb567dc(0x291)] && _0x5a88f6 === 0x0) _0x4b8921[_0xb567dc(0x25d)] = _0xb567dc(0x2f8) + _0x19d741[_0xb567dc(0x10c)]() + '\x20right\x20now.', _0x4b8921['conclusion'] = 'Set\x20a\x20fixed\x20monthly\x20family\x20contribution\x20ceiling\x20—\x20something\x20you\x20can\x20always\x20honour\x20without\x20compromising\x20your\x20obligations.\x20\x22I\x27ve\x20set\x20aside\x20KSh\x20X\x20for\x20family\x20this\x20month\x22\x20is\x20a\x20complete\x20sentence.';
                                                else {
                                                    if (_0x5236a0[_0xb567dc(0x208)]) {
                                                        const _0x536650 = _0x5a88f6 || _0x306c1c;
                                                        _0x4b8921['body'] = 'Withdrawing\x20KSh\x20' + _0x536650['toLocaleString']() + _0xb567dc(0x72) + (_0x536650 > _0x306c1c ? '\x20is\x20above\x20your\x20safe\x20daily\x20cap\x20of\x20KSh\x20' + _0x306c1c[_0xb567dc(0x10c)]() + '.' : _0xb567dc(0x196)) + _0xb567dc(0x9c), _0x4b8921['conclusion'] = _0x536650 > _0x306c1c ? _0xb567dc(0x1e7) : _0xb567dc(0xb8);
                                                    } else _0x4b8921[_0xb567dc(0x25d)] = 'Your\x20current\x20financial\x20position:\x20buffer\x20is\x20KSh\x20' + _0x19d741['toLocaleString']() + _0xb567dc(0xdc) + _0x306c1c[_0xb567dc(0x10c)]() + ',\x20risk\x20is\x20' + _0x3e2fcb + ',\x20and\x20you\x20have\x20' + _0x14bbe2 + _0xb567dc(0x151), _0x4b8921[_0xb567dc(0x80)] = _0xb567dc(0x1f9), _0x4b8921[_0xb567dc(0x1de)] = [{
                                                        'label': _0xb567dc(0x2fb),
                                                        'q': _0xb567dc(0x2b6)
                                                    }, {
                                                        'label': 'What\x20should\x20I\x20do\x20today',
                                                        'q': _0xb567dc(0xa3)
                                                    }, {
                                                        'label': _0xb567dc(0x28b),
                                                        'q': _0xb567dc(0xe8)
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
    const _0x49d534 = _0x6f7cac(_0x4b8921);
    _0x5ee050['innerHTML'] += _0xb567dc(0x23d) + _0x32f6cb + _0xb567dc(0x95) + _0x49d534 + _0xb567dc(0xa2), _0x38e8ff[_0xb567dc(0x111)] = '', _0x5ee050[_0xb567dc(0x1f1)] = _0x5ee050[_0xb567dc(0x1c1)];
}
window[_0x570119(0x27a)]('resize', () => {
    const _0x4a9977 = _0x570119,
        _0x2ae720 = document[_0x4a9977(0xba)]('dashboard-grid');
    if (!_0x2ae720) return;
    if (window[_0x4a9977(0x16d)] < 0x258) _0x2ae720['style'][_0x4a9977(0x13c)] = _0x4a9977(0x13e);
    else window[_0x4a9977(0x16d)] < 0x384 ? _0x2ae720[_0x4a9977(0x224)][_0x4a9977(0x13c)] = _0x4a9977(0x13e) : _0x2ae720['style'][_0x4a9977(0x13c)] = _0x4a9977(0x16e);
});
async function boot() {
    const _0x1eba38 = _0x570119;
    await initDB();
    let _0x95d02c = await getData(_0x1eba38(0xd3), _0x1eba38(0x2a5)) || {
        'activated': ![]
    };
    const _0x3ece9d = window['matchMedia']('(display-mode:\x20standalone)')[_0x1eba38(0xde)] || navigator['standalone'] === !![];
    await new Promise(_0x2b196c => setTimeout(_0x2b196c, 0x190));
    if (!_0x95d02c[_0x1eba38(0xdd)]) {
        _0x3ece9d ? (document['getElementById']('activation-overlay')[_0x1eba38(0x1e9)][_0x1eba38(0xa8)]('hidden'), document[_0x1eba38(0xba)](_0x1eba38(0x1da))[_0x1eba38(0x224)][_0x1eba38(0x7e)] = 'none') : document['getElementById'](_0x1eba38(0x1da))[_0x1eba38(0x224)][_0x1eba38(0x7e)] = _0x1eba38(0x1c4);
        return;
    }
    if (!_0x95d02c['user']) {
        document[_0x1eba38(0xba)](_0x1eba38(0x153))['classList'][_0x1eba38(0xa8)]('hidden'), document[_0x1eba38(0xba)](_0x1eba38(0x1da))[_0x1eba38(0x224)][_0x1eba38(0x7e)] = _0x1eba38(0x2c2);
        return;
    }
    state[_0x1eba38(0xc2)] = _0x95d02c['user'], state[_0x1eba38(0x92)] = _0x95d02c[_0x1eba38(0x92)] || [], state[_0x1eba38(0x166)] = (await getAllData('tx'))[_0x1eba38(0x20f)]((_0x3c1029, _0x523c4c) => _0x523c4c['id'] - _0x3c1029['id']), document[_0x1eba38(0xba)](_0x1eba38(0x26d))[_0x1eba38(0x1d9)] = state['user']['name'], document[_0x1eba38(0xba)](_0x1eba38(0x2b5))[_0x1eba38(0x1d9)] = state[_0x1eba38(0xc2)][_0x1eba38(0x1fd)][_0x1eba38(0xcd)]() + '\x20STRATEGY\x20ENGINE', document['getElementById']('sidebar-name')['innerText'] = state['user'][_0x1eba38(0x142)], document['getElementById'](_0x1eba38(0x281))[_0x1eba38(0x1d9)] = state[_0x1eba38(0xc2)][_0x1eba38(0x1fd)]['charAt'](0x0)[_0x1eba38(0xcd)]() + state['user'][_0x1eba38(0x1fd)][_0x1eba38(0xd8)](0x1), document[_0x1eba38(0xba)](_0x1eba38(0x127))[_0x1eba38(0x1d9)] = state[_0x1eba38(0xc2)][_0x1eba38(0x142)][_0x1eba38(0x1e1)](0x0)[_0x1eba38(0xcd)](), document[_0x1eba38(0xba)](_0x1eba38(0x1da))[_0x1eba38(0x224)]['display'] = _0x1eba38(0x2c2), nav('dash');
    if (typeof travisNotif !== _0x1eba38(0x102)) travisNotif[_0x1eba38(0x20a)]();
}
document[_0x570119(0xba)](_0x570119(0x164))?.[_0x570119(0x27a)]('click', triggerInstall), window[_0x570119(0x22d)] = boot;
