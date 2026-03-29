const _0x1fa4b9 = _0xbbec;

function _0xbbec(_0x457f10, _0x16a319) {
    _0x457f10 = _0x457f10 - 0x1d7;
    const _0x2e0f0d = _0x2e0f();
    let _0xbbecd2 = _0x2e0f0d[_0x457f10];
    return _0xbbecd2;
}(function(_0x42b03c, _0x4a3bce) {
    const _0x39e365 = _0xbbec,
        _0x495e9d = _0x42b03c();
    while (!![]) {
        try {
            const _0x18b4b1 = parseInt(_0x39e365(0x205)) / 0x1 + parseInt(_0x39e365(0x20d)) / 0x2 * (parseInt(_0x39e365(0x22c)) / 0x3) + parseInt(_0x39e365(0x211)) / 0x4 + -parseInt(_0x39e365(0x227)) / 0x5 * (parseInt(_0x39e365(0x222)) / 0x6) + -parseInt(_0x39e365(0x1e1)) / 0x7 + -parseInt(_0x39e365(0x1e3)) / 0x8 * (-parseInt(_0x39e365(0x1e6)) / 0x9) + -parseInt(_0x39e365(0x22f)) / 0xa * (parseInt(_0x39e365(0x218)) / 0xb);
            if (_0x18b4b1 === _0x4a3bce) break;
            else _0x495e9d['push'](_0x495e9d['shift']());
        } catch (_0x238a89) {
            _0x495e9d['push'](_0x495e9d['shift']());
        }
    }
}(_0x2e0f, 0x6fa7a));
const BACKEND_URL = _0x1fa4b9(0x236);
let currentToken = null;

function showButtonLoader(_0x4e2df9) {
    const _0x2b146d = _0x1fa4b9;
    if (!_0x4e2df9 || _0x4e2df9['dataset'][_0x2b146d(0x229)]) return;
    _0x4e2df9[_0x2b146d(0x1eb)]['loading'] = _0x2b146d(0x204), _0x4e2df9['dataset'][_0x2b146d(0x212)] = _0x4e2df9[_0x2b146d(0x1d9)], _0x4e2df9[_0x2b146d(0x1fd)] = !![], _0x4e2df9[_0x2b146d(0x20f)]['pointerEvents'] = _0x2b146d(0x21f), _0x4e2df9['innerHTML'] = _0x2b146d(0x22d);
}

function hideButtonLoader(_0xc73cdf) {
    const _0x3793bc = _0x1fa4b9;
    if (!_0xc73cdf || !_0xc73cdf[_0x3793bc(0x1eb)][_0x3793bc(0x229)]) return;
    _0xc73cdf[_0x3793bc(0x1fd)] = ![], _0xc73cdf['style'][_0x3793bc(0x210)] = _0x3793bc(0x203), _0xc73cdf[_0x3793bc(0x1d9)] = _0xc73cdf[_0x3793bc(0x1eb)]['originalText'] || _0x3793bc(0x22b), delete _0xc73cdf['dataset'][_0x3793bc(0x229)], delete _0xc73cdf['dataset'][_0x3793bc(0x212)];
}

function injectLoaderStyles() {
    const _0x344fdf = _0x1fa4b9;
    if (document['getElementById'](_0x344fdf(0x1db))) return;
    const _0x3b215b = document[_0x344fdf(0x1e8)](_0x344fdf(0x20f));
    _0x3b215b['id'] = _0x344fdf(0x1db), _0x3b215b[_0x344fdf(0x1ed)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.loader\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20spin\x201s\x20linear\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20spin\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20transform:\x20rotate(360deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20', document[_0x344fdf(0x20c)][_0x344fdf(0x1f7)](_0x3b215b);
}
async function handleRegister(_0x3d69fe) {
    const _0x40dda2 = _0x1fa4b9;
    _0x3d69fe[_0x40dda2(0x1f1)]();
    const _0x20be8a = _0x3d69fe[_0x40dda2(0x22e)][_0x40dda2(0x1dc)]('button[type=\x22submit\x22]');
    if (_0x20be8a) showButtonLoader(_0x20be8a);
    const _0x3b1460 = {
        'fullName': document[_0x40dda2(0x1e2)](_0x40dda2(0x213))[_0x40dda2(0x206)][_0x40dda2(0x228)](),
        'location': document[_0x40dda2(0x1e2)]('reg-location')[_0x40dda2(0x206)][_0x40dda2(0x228)](),
        'phone': document[_0x40dda2(0x1e2)](_0x40dda2(0x220))['value'][_0x40dda2(0x228)](),
        'email': document['getElementById']('reg-email')['value'][_0x40dda2(0x228)]() || undefined,
        'password': document[_0x40dda2(0x1e2)](_0x40dda2(0x1de))[_0x40dda2(0x206)]
    };
    if (_0x3b1460[_0x40dda2(0x1f8)] !== document[_0x40dda2(0x1e2)]('reg-confirm')[_0x40dda2(0x206)]) {
        alert(_0x40dda2(0x214));
        if (_0x20be8a) hideButtonLoader(_0x20be8a);
        return;
    }
    try {
        const _0x18483a = await fetch(BACKEND_URL + _0x40dda2(0x1ee), {
                'method': _0x40dda2(0x219),
                'headers': {
                    'Content-Type': _0x40dda2(0x1fb)
                },
                'body': JSON[_0x40dda2(0x221)](_0x3b1460)
            }),
            _0x249b64 = await _0x18483a[_0x40dda2(0x20e)]();
        _0x249b64['error'] ? alert(_0x249b64[_0x40dda2(0x1e5)]) : (alert(_0x40dda2(0x223)), showLoginForm());
    } catch (_0x459aef) {
        alert(_0x40dda2(0x208));
    } finally {
        if (_0x20be8a) hideButtonLoader(_0x20be8a);
    }
}
async function handleLogin(_0x5b7b3f) {
    const _0x4a2fa3 = _0x1fa4b9;
    _0x5b7b3f[_0x4a2fa3(0x1f1)]();
    const _0x3186ec = _0x5b7b3f[_0x4a2fa3(0x22e)][_0x4a2fa3(0x1dc)](_0x4a2fa3(0x21e));
    if (_0x3186ec) showButtonLoader(_0x3186ec);
    const _0x1f50c6 = document[_0x4a2fa3(0x1e2)](_0x4a2fa3(0x1f5))[_0x4a2fa3(0x206)][_0x4a2fa3(0x228)](),
        _0x1dacaa = document[_0x4a2fa3(0x1e2)](_0x4a2fa3(0x225))[_0x4a2fa3(0x206)];
    if (!_0x1f50c6 || !_0x1dacaa) {
        alert(_0x4a2fa3(0x21d));
        if (_0x3186ec) hideButtonLoader(_0x3186ec);
        return;
    }
    try {
        const _0x5e33e8 = await fetch(BACKEND_URL + _0x4a2fa3(0x1ec), {
                'method': _0x4a2fa3(0x219),
                'headers': {
                    'Content-Type': _0x4a2fa3(0x1fb)
                },
                'body': JSON['stringify']({
                    'phone': _0x1f50c6,
                    'password': _0x1dacaa
                })
            }),
            _0x159a73 = await _0x5e33e8[_0x4a2fa3(0x20e)]();
        if (_0x159a73['error']) {
            alert(_0x159a73[_0x4a2fa3(0x1e5)]);
            return;
        }
        currentToken = _0x159a73[_0x4a2fa3(0x202)], localStorage[_0x4a2fa3(0x209)](_0x4a2fa3(0x202), _0x159a73[_0x4a2fa3(0x202)]), alert(_0x4a2fa3(0x1dd)), hideAllSections(), document[_0x4a2fa3(0x1e2)](_0x4a2fa3(0x217))[_0x4a2fa3(0x21b)]['remove'](_0x4a2fa3(0x1e4)), renderNav(), loadDashboard();
    } catch (_0x3eec6c) {
        console[_0x4a2fa3(0x1e5)](_0x4a2fa3(0x1fc), _0x3eec6c), alert(_0x4a2fa3(0x20a));
    } finally {
        if (_0x3186ec) hideButtonLoader(_0x3186ec);
    }
}
async function initiateQuery() {
    const _0x2ef643 = _0x1fa4b9,
        _0xb3ee34 = document[_0x2ef643(0x1dc)](_0x2ef643(0x226));
    if (_0xb3ee34) showButtonLoader(_0xb3ee34);
    const _0x1490a7 = document['getElementById'](_0x2ef643(0x1d8))[_0x2ef643(0x206)][_0x2ef643(0x228)](),
        _0x468a27 = document[_0x2ef643(0x1e2)](_0x2ef643(0x1ef))[_0x2ef643(0x206)][_0x2ef643(0x228)]();
    if (!_0x1490a7 || !_0x468a27) {
        alert(_0x2ef643(0x1f3));
        if (_0xb3ee34) hideButtonLoader(_0xb3ee34);
        return;
    }
    try {
        const _0x369755 = await fetch(BACKEND_URL + _0x2ef643(0x1f0), {
                'method': _0x2ef643(0x219),
                'headers': {
                    'Content-Type': _0x2ef643(0x1fb),
                    'Authorization': _0x2ef643(0x21c) + currentToken
                },
                'body': JSON[_0x2ef643(0x221)]({
                    'targetPhone': _0x1490a7,
                    'payerMsisdn': _0x468a27
                })
            }),
            _0x5d9f1d = await _0x369755[_0x2ef643(0x20e)]();
        alert(_0x5d9f1d[_0x2ef643(0x1f4)] || _0x5d9f1d[_0x2ef643(0x1e5)] || _0x2ef643(0x215)), !_0x5d9f1d[_0x2ef643(0x1e5)] && setTimeout(loadMyQueries, 0x1f40);
    } catch (_0x441a29) {
        console['error'](_0x441a29), alert(_0x2ef643(0x20b));
    } finally {
        if (_0xb3ee34) hideButtonLoader(_0xb3ee34);
    }
}

function logout() {
    const _0x5b9d69 = _0x1fa4b9;
    localStorage[_0x5b9d69(0x1da)](_0x5b9d69(0x202)), currentToken = null, renderNav(), hideAllSections(), showLoginForm();
}

function renderNav() {
    const _0x1cc911 = _0x1fa4b9,
        _0x446a87 = document['getElementById']('nav-buttons');
    currentToken ? _0x446a87['innerHTML'] = _0x1cc911(0x230) : _0x446a87['innerHTML'] = '';
}

function _0x2e0f() {
    const _0x4d0e46 = ['innerHTML', 'removeItem', 'inline-loader-style', 'querySelector', 'Login\x20successful!\x20Welcome\x20to\x20your\x20dashboard.', 'reg-password', 'queriedAt', 'failure-count', '2136239CkDwbj', 'getElementById', '8HYJxgV', 'hidden', 'error', '4165947xfAovQ', 'register-form', 'createElement', 'Failed\x20to\x20load\x20queries', 'remove', 'dataset', '/login', 'textContent', '/register', 'payer-msisdn', '/initiate-stk', 'preventDefault', 'queries-list', 'Please\x20fill\x20both\x20phone\x20numbers', 'message', 'login-phone', 'Dashboard\x20load\x20error:', 'appendChild', 'password', 'length', 'onload', 'application/json', 'Login\x20error:', 'disabled', 'getItem', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22w-full\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22border-b\x20border-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20text-left\x22>Target\x20Phone</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20text-left\x22>Revealed\x20Fingerprint</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20text-left\x22>Receipt</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20text-left\x22>Date</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'targetPhone', '</tbody></table>', 'token', 'auto', 'true', '847147zrhMSA', 'value', '/me', 'Registration\x20failed.\x20Please\x20check\x20your\x20connection.', 'setItem', 'Login\x20failed.\x20Please\x20check\x20your\x20connection.', 'Failed\x20to\x20initiate\x20payment.\x20Please\x20try\x20again.', 'head', '106466OUKfTG', 'json', 'style', 'pointerEvents', '2969264hWDBYC', 'originalText', 'reg-fullname', 'Passwords\x20do\x20not\x20match', 'STK\x20Push\x20sent.\x20Check\x20your\x20phone.', 'receipt', 'dashboard', '23455949ohQzzo', 'POST', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x20text-sm\x22>', 'classList', 'Bearer\x20', 'Please\x20enter\x20phone\x20number\x20and\x20password', 'button[type=\x22submit\x22]', 'none', 'reg-phone', 'stringify', '374598GNzxxj', 'Account\x20created\x20successfully!\x20Please\x20login\x20now.', 'login-form', 'login-password', 'button[onclick*=\x22initiateQuery\x22]', '5cqDgaC', 'trim', 'loading', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x22>', '▶\x20&nbsp;Authenticate', '51qPPDHU', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22inline-flex\x20items-center\x20justify-center\x20gap-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22loader\x20w-5\x20h-5\x20border-3\x20border-white\x20border-t-transparent\x20rounded-full\x20animate-spin\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Processing...\x0a\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20', 'target', '10efoYnf', '<button\x20onclick=\x22logout()\x22\x20class=\x22px-6\x20py-2\x20bg-red-600\x20hover:bg-red-500\x20rounded-2xl\x22>Logout</button>', 'success-count', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'add', 'successQueries', '/my-queries', 'https://travis-j1w9.onrender.com', 'auth-section', 'target-phone'];
    _0x2e0f = function() {
        return _0x4d0e46;
    };
    return _0x2e0f();
}

function showLoginForm() {
    const _0x371e8a = _0x1fa4b9;
    hideAllSections(), document[_0x371e8a(0x1e2)](_0x371e8a(0x1d7))[_0x371e8a(0x21b)][_0x371e8a(0x1ea)](_0x371e8a(0x1e4)), document[_0x371e8a(0x1e2)](_0x371e8a(0x224))['classList'][_0x371e8a(0x1ea)]('hidden'), document[_0x371e8a(0x1e2)](_0x371e8a(0x1e7))[_0x371e8a(0x21b)][_0x371e8a(0x233)](_0x371e8a(0x1e4));
}

function showRegisterForm() {
    const _0x7a8377 = _0x1fa4b9;
    hideAllSections(), document[_0x7a8377(0x1e2)]('auth-section')[_0x7a8377(0x21b)][_0x7a8377(0x1ea)]('hidden'), document['getElementById'](_0x7a8377(0x1e7))['classList'][_0x7a8377(0x1ea)](_0x7a8377(0x1e4)), document[_0x7a8377(0x1e2)](_0x7a8377(0x224))[_0x7a8377(0x21b)]['add'](_0x7a8377(0x1e4));
}

function hideAllSections() {
    const _0x54e19b = _0x1fa4b9;
    document[_0x54e19b(0x1e2)](_0x54e19b(0x1d7))[_0x54e19b(0x21b)][_0x54e19b(0x233)]('hidden'), document[_0x54e19b(0x1e2)](_0x54e19b(0x217))[_0x54e19b(0x21b)][_0x54e19b(0x233)]('hidden');
}
async function loadDashboard() {
    const _0x4ad69c = _0x1fa4b9;
    hideAllSections(), document['getElementById']('dashboard')[_0x4ad69c(0x21b)][_0x4ad69c(0x1ea)](_0x4ad69c(0x1e4));
    try {
        const _0x396ee4 = await fetch(BACKEND_URL + _0x4ad69c(0x207), {
                'headers': {
                    'Authorization': _0x4ad69c(0x21c) + currentToken
                }
            }),
            _0x3789c9 = await _0x396ee4['json']();
        document[_0x4ad69c(0x1e2)](_0x4ad69c(0x231))[_0x4ad69c(0x1ed)] = _0x3789c9[_0x4ad69c(0x234)] || 0x0, document[_0x4ad69c(0x1e2)](_0x4ad69c(0x1e0))['textContent'] = _0x3789c9['failureQueries'] || 0x0, await loadMyQueries();
    } catch (_0x4c5d7d) {
        console[_0x4ad69c(0x1e5)](_0x4ad69c(0x1f6), _0x4c5d7d);
    }
}
async function loadMyQueries() {
    const _0x4152ce = _0x1fa4b9;
    if (!currentToken) return;
    try {
        const _0x32065c = await fetch(BACKEND_URL + _0x4152ce(0x235), {
            'headers': {
                'Authorization': 'Bearer\x20' + currentToken
            }
        });
        if (!_0x32065c['ok']) throw new Error(_0x4152ce(0x1e9));
        const _0x2e5ba9 = await _0x32065c[_0x4152ce(0x20e)](),
            _0x1c46c4 = document[_0x4152ce(0x1e2)](_0x4152ce(0x1f2));
        if (_0x2e5ba9[_0x4152ce(0x1f9)] === 0x0) {
            _0x1c46c4[_0x4152ce(0x1d9)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22empty-state\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22empty-icon\x22>▒▒▒</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>NO\x20RECORDS\x20FOUND<br>Make\x20a\x20successful\x20payment\x20to\x20reveal\x20fingerprints.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            return;
        }
        let _0x24b20e = _0x4152ce(0x1ff);
        _0x2e5ba9['forEach'](_0x444f42 => {
            const _0x2977f9 = _0x4152ce;
            _0x24b20e += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22border-t\x20border-gray-800\x20hover:bg-gray-800\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x22>' + _0x444f42[_0x2977f9(0x200)] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x20font-mono\x20text-emerald-400\x20text-lg\x22>' + _0x444f42['formattedFP'] + _0x2977f9(0x22a) + (_0x444f42[_0x2977f9(0x216)] || '-') + _0x2977f9(0x21a) + new Date(_0x444f42[_0x2977f9(0x1df)])['toLocaleString']() + _0x2977f9(0x232);
        }), _0x24b20e += _0x4152ce(0x201), _0x1c46c4[_0x4152ce(0x1d9)] = _0x24b20e;
    } catch (_0x3ab51f) {
        console[_0x4152ce(0x1e5)]('Failed\x20to\x20load\x20queries:', _0x3ab51f), document[_0x4152ce(0x1e2)](_0x4152ce(0x1f2))['innerHTML'] = '<p\x20class=\x22text-center\x20text-red-400\x20py-8\x22>Failed\x20to\x20load\x20revealed\x20fingerprints.</p>';
    }
}
window[_0x1fa4b9(0x1fa)] = () => {
    const _0x7f4061 = _0x1fa4b9;
    injectLoaderStyles(), currentToken = localStorage[_0x7f4061(0x1fe)](_0x7f4061(0x202)), renderNav(), currentToken ? (hideAllSections(), document[_0x7f4061(0x1e2)](_0x7f4061(0x217))['classList']['remove'](_0x7f4061(0x1e4)), loadDashboard()) : showLoginForm();
};
