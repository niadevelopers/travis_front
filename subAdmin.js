const _0x44ad09 = _0x3b69;
(function(_0x1030c6, _0x17680d) {
    const _0x2cc392 = _0x3b69,
        _0x5af151 = _0x1030c6();
    while (!![]) {
        try {
            const _0x1ff385 = parseInt(_0x2cc392(0xf7)) / 0x1 + -parseInt(_0x2cc392(0x110)) / 0x2 * (parseInt(_0x2cc392(0x118)) / 0x3) + -parseInt(_0x2cc392(0xe9)) / 0x4 + -parseInt(_0x2cc392(0x133)) / 0x5 * (parseInt(_0x2cc392(0x137)) / 0x6) + -parseInt(_0x2cc392(0xfa)) / 0x7 + -parseInt(_0x2cc392(0xfc)) / 0x8 * (-parseInt(_0x2cc392(0xf4)) / 0x9) + parseInt(_0x2cc392(0x13b)) / 0xa;
            if (_0x1ff385 === _0x17680d) break;
            else _0x5af151['push'](_0x5af151['shift']());
        } catch (_0x4f904b) {
            _0x5af151['push'](_0x5af151['shift']());
        }
    }
}(_0x128d, 0x88400));
const BACKEND_URL = _0x44ad09(0x101);
let currentToken = null;

function showButtonLoader(_0x54d276) {
    const _0x3ccc32 = _0x44ad09;
    if (!_0x54d276 || _0x54d276[_0x3ccc32(0x120)][_0x3ccc32(0x138)]) return;
    _0x54d276[_0x3ccc32(0x120)]['loading'] = _0x3ccc32(0x11b), _0x54d276['dataset']['originalText'] = _0x54d276['innerHTML'], _0x54d276[_0x3ccc32(0x140)] = !![], _0x54d276['style'][_0x3ccc32(0x139)] = _0x3ccc32(0xe8), _0x54d276['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22inline-flex\x20items-center\x20justify-center\x20gap-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22loader\x20w-5\x20h-5\x20border-3\x20border-white\x20border-t-transparent\x20rounded-full\x20animate-spin\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Processing...\x0a\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20';
}

function hideButtonLoader(_0x2f8e47) {
    const _0x4461b9 = _0x44ad09;
    if (!_0x2f8e47 || !_0x2f8e47['dataset']['loading']) return;
    _0x2f8e47[_0x4461b9(0x140)] = ![], _0x2f8e47[_0x4461b9(0x13f)]['pointerEvents'] = _0x4461b9(0x113), _0x2f8e47[_0x4461b9(0xf0)] = _0x2f8e47[_0x4461b9(0x120)][_0x4461b9(0x12c)] || _0x4461b9(0xfb), delete _0x2f8e47[_0x4461b9(0x120)][_0x4461b9(0x138)], delete _0x2f8e47[_0x4461b9(0x120)][_0x4461b9(0x12c)];
}

function injectLoaderStyles() {
    const _0x468a01 = _0x44ad09;
    if (document['getElementById'](_0x468a01(0xf2))) return;
    const _0x314f1d = document['createElement']('style');
    _0x314f1d['id'] = _0x468a01(0xf2), _0x314f1d[_0x468a01(0x130)] = _0x468a01(0x11e), document[_0x468a01(0x108)][_0x468a01(0xee)](_0x314f1d);
}
async function handleRegister(_0x325120) {
    const _0x1bdf62 = _0x44ad09;
    _0x325120[_0x1bdf62(0xf5)]();
    const _0x49ce67 = _0x325120[_0x1bdf62(0x11a)][_0x1bdf62(0x131)](_0x1bdf62(0x10c));
    if (_0x49ce67) showButtonLoader(_0x49ce67);
    const _0x151eba = {
        'fullName': document[_0x1bdf62(0x104)](_0x1bdf62(0x127))['value'][_0x1bdf62(0x11f)](),
        'location': document[_0x1bdf62(0x104)](_0x1bdf62(0x132))['value']['trim'](),
        'phone': document[_0x1bdf62(0x104)](_0x1bdf62(0x12e))[_0x1bdf62(0x12d)]['trim'](),
        'email': document[_0x1bdf62(0x104)](_0x1bdf62(0x106))['value'][_0x1bdf62(0x11f)]() || undefined,
        'password': document[_0x1bdf62(0x104)](_0x1bdf62(0xed))['value']
    };
    if (_0x151eba[_0x1bdf62(0xf6)] !== document[_0x1bdf62(0x104)](_0x1bdf62(0x136))[_0x1bdf62(0x12d)]) {
        alert(_0x1bdf62(0x12a));
        if (_0x49ce67) hideButtonLoader(_0x49ce67);
        return;
    }
    try {
        const _0x2a2afe = await fetch(BACKEND_URL + '/register', {
                'method': _0x1bdf62(0x11d),
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': JSON[_0x1bdf62(0x114)](_0x151eba)
            }),
            _0x3d7f73 = await _0x2a2afe[_0x1bdf62(0x109)]();
        _0x3d7f73[_0x1bdf62(0xfe)] ? alert(_0x3d7f73[_0x1bdf62(0xfe)]) : (alert(_0x1bdf62(0x13e)), showLoginForm());
    } catch (_0x3c1181) {
        alert('Registration\x20failed.\x20Please\x20check\x20your\x20connection.');
    } finally {
        if (_0x49ce67) hideButtonLoader(_0x49ce67);
    }
}
async function handleLogin(_0x49df0c) {
    const _0x592360 = _0x44ad09;
    _0x49df0c[_0x592360(0xf5)]();
    const _0x4f00cc = _0x49df0c[_0x592360(0x11a)][_0x592360(0x131)](_0x592360(0x10c));
    if (_0x4f00cc) showButtonLoader(_0x4f00cc);
    const _0x362fb6 = document['getElementById']('login-phone')[_0x592360(0x12d)][_0x592360(0x11f)](),
        _0x2fcfdd = document[_0x592360(0x104)]('login-password')[_0x592360(0x12d)];
    if (!_0x362fb6 || !_0x2fcfdd) {
        alert('Please\x20enter\x20phone\x20number\x20and\x20password');
        if (_0x4f00cc) hideButtonLoader(_0x4f00cc);
        return;
    }
    try {
        const _0x1f3928 = await fetch(BACKEND_URL + '/login', {
                'method': _0x592360(0x11d),
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': JSON[_0x592360(0x114)]({
                    'phone': _0x362fb6,
                    'password': _0x2fcfdd
                })
            }),
            _0x3308e9 = await _0x1f3928['json']();
        if (_0x3308e9[_0x592360(0xfe)]) {
            alert(_0x3308e9[_0x592360(0xfe)]);
            return;
        }
        currentToken = _0x3308e9[_0x592360(0x13a)], localStorage[_0x592360(0xfd)]('token', _0x3308e9[_0x592360(0x13a)]), alert(_0x592360(0x134)), hideAllSections(), document['getElementById']('dashboard')['classList'][_0x592360(0x10b)](_0x592360(0xf8)), renderNav(), loadDashboard();
    } catch (_0x3bc03f) {
        console['error'](_0x592360(0x10f), _0x3bc03f), alert(_0x592360(0x128));
    } finally {
        if (_0x4f00cc) hideButtonLoader(_0x4f00cc);
    }
}

function _0x3b69(_0x5532ba, _0x23e68d) {
    _0x5532ba = _0x5532ba - 0xe8;
    const _0x128d68 = _0x128d();
    let _0x3b69e6 = _0x128d68[_0x5532ba];
    return _0x3b69e6;
}
async function initiateQuery() {
    const _0x34b8ad = _0x44ad09,
        _0xce339c = document[_0x34b8ad(0x131)](_0x34b8ad(0x103));
    if (_0xce339c) showButtonLoader(_0xce339c);
    const _0x4246c8 = document['getElementById'](_0x34b8ad(0x115))['value'][_0x34b8ad(0x11f)](),
        _0x16c89f = document[_0x34b8ad(0x104)](_0x34b8ad(0x116))[_0x34b8ad(0x12d)][_0x34b8ad(0x11f)]();
    if (!_0x4246c8 || !_0x16c89f) {
        alert(_0x34b8ad(0x11c));
        if (_0xce339c) hideButtonLoader(_0xce339c);
        return;
    }
    try {
        const _0xa18989 = await fetch(BACKEND_URL + _0x34b8ad(0xf3), {
                'method': _0x34b8ad(0x11d),
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': _0x34b8ad(0x119) + currentToken
                },
                'body': JSON[_0x34b8ad(0x114)]({
                    'targetPhone': _0x4246c8,
                    'payerMsisdn': _0x16c89f
                })
            }),
            _0x128a72 = await _0xa18989[_0x34b8ad(0x109)]();
        alert(_0x128a72[_0x34b8ad(0x129)] || _0x128a72[_0x34b8ad(0xfe)] || 'STK\x20Push\x20sent.\x20Check\x20your\x20phone.'), !_0x128a72[_0x34b8ad(0xfe)] && setTimeout(loadMyQueries, 0x1f40);
    } catch (_0x3cf20e) {
        console['error'](_0x3cf20e), alert(_0x34b8ad(0x135));
    } finally {
        if (_0xce339c) hideButtonLoader(_0xce339c);
    }
}

function logout() {
    const _0x204a66 = _0x44ad09;
    localStorage[_0x204a66(0xf9)]('token'), currentToken = null, renderNav(), hideAllSections(), showLoginForm();
}

function renderNav() {
    const _0x18ab39 = _0x44ad09,
        _0x371369 = document['getElementById']('nav-buttons');
    currentToken ? _0x371369[_0x18ab39(0xf0)] = _0x18ab39(0x124) : _0x371369[_0x18ab39(0xf0)] = '';
}

function showLoginForm() {
    const _0x4d33a5 = _0x44ad09;
    hideAllSections(), document[_0x4d33a5(0x104)](_0x4d33a5(0x10e))[_0x4d33a5(0x13c)][_0x4d33a5(0x10b)](_0x4d33a5(0xf8)), document[_0x4d33a5(0x104)]('login-form')[_0x4d33a5(0x13c)]['remove'](_0x4d33a5(0xf8)), document[_0x4d33a5(0x104)](_0x4d33a5(0x10d))[_0x4d33a5(0x13c)]['add'](_0x4d33a5(0xf8));
}

function showRegisterForm() {
    const _0x3dc917 = _0x44ad09;
    hideAllSections(), document[_0x3dc917(0x104)](_0x3dc917(0x10e))[_0x3dc917(0x13c)][_0x3dc917(0x10b)](_0x3dc917(0xf8)), document[_0x3dc917(0x104)](_0x3dc917(0x10d))[_0x3dc917(0x13c)][_0x3dc917(0x10b)](_0x3dc917(0xf8)), document[_0x3dc917(0x104)](_0x3dc917(0x125))[_0x3dc917(0x13c)]['add'](_0x3dc917(0xf8));
}

function hideAllSections() {
    const _0x45281d = _0x44ad09;
    document['getElementById'](_0x45281d(0x10e))['classList'][_0x45281d(0x117)](_0x45281d(0xf8)), document[_0x45281d(0x104)]('dashboard')[_0x45281d(0x13c)]['add'](_0x45281d(0xf8));
}
async function loadDashboard() {
    const _0x40e1e1 = _0x44ad09;
    hideAllSections(), document[_0x40e1e1(0x104)]('dashboard')[_0x40e1e1(0x13c)][_0x40e1e1(0x10b)]('hidden');
    try {
        const _0x5ab3e8 = await fetch(BACKEND_URL + '/me', {
                'headers': {
                    'Authorization': _0x40e1e1(0x119) + currentToken
                }
            }),
            _0x4ac3c8 = await _0x5ab3e8['json']();
        document[_0x40e1e1(0x104)](_0x40e1e1(0xff))[_0x40e1e1(0x130)] = _0x4ac3c8['successQueries'] || 0x0, document[_0x40e1e1(0x104)]('failure-count')['textContent'] = _0x4ac3c8[_0x40e1e1(0x123)] || 0x0, await loadMyQueries();
    } catch (_0x2d1ec8) {
        console[_0x40e1e1(0xfe)](_0x40e1e1(0x121), _0x2d1ec8);
    }
}

function _0x128d() {
    const _0x17c3d3 = ['dashboard', 'reg-email', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22empty-state\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22empty-icon\x22>▒▒▒</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>NO\x20RECORDS\x20FOUND<br>Make\x20a\x20successful\x20payment\x20to\x20reveal\x20fingerprints.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'head', 'json', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x20text-sm\x22>', 'remove', 'button[type=\x22submit\x22]', 'register-form', 'auth-section', 'Login\x20error:', '1735094JBAHtA', 'forEach', 'onload', 'auto', 'stringify', 'target-phone', 'payer-msisdn', 'add', '3EBtKjS', 'Bearer\x20', 'target', 'true', 'Please\x20fill\x20both\x20phone\x20numbers', 'POST', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.loader\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20spin\x201s\x20linear\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20spin\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20transform:\x20rotate(360deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20', 'trim', 'dataset', 'Dashboard\x20load\x20error:', 'toLocaleString', 'failureQueries', '<button\x20onclick=\x22logout()\x22\x20class=\x22px-6\x20py-2\x20bg-red-600\x20hover:bg-red-500\x20rounded-2xl\x22>Logout</button>', 'login-form', '<p\x20class=\x22text-center\x20text-red-400\x20py-8\x22>Failed\x20to\x20load\x20revealed\x20fingerprints.</p>', 'reg-fullname', 'Login\x20failed.\x20Please\x20check\x20your\x20connection.', 'message', 'Passwords\x20do\x20not\x20match', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22border-t\x20border-gray-800\x20hover:bg-gray-800\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x22>', 'originalText', 'value', 'reg-phone', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x20font-mono\x20text-emerald-400\x20text-lg\x22>', 'textContent', 'querySelector', 'reg-location', '4598740EanpyN', '✅\x20Login\x20successful!\x20Welcome\x20to\x20your\x20dashboard.', 'Failed\x20to\x20initiate\x20payment.\x20Please\x20try\x20again.', 'reg-confirm', '6qnNENe', 'loading', 'pointerEvents', 'token', '21818520oJhEga', 'classList', 'getItem', '✅\x20Account\x20created\x20successfully!\x20Please\x20login\x20now.', 'style', 'disabled', 'Failed\x20to\x20load\x20queries:', 'none', '249632DwQrfM', 'targetPhone', 'queriedAt', 'Failed\x20to\x20load\x20queries', 'reg-password', 'appendChild', 'queries-list', 'innerHTML', 'receipt', 'inline-loader-style', '/initiate-stk', '955143yjYCaL', 'preventDefault', 'password', '770945UdRSRs', 'hidden', 'removeItem', '6786654HNPNoC', '▶\x20&nbsp;Authenticate', '32MAtJzr', 'setItem', 'error', 'success-count', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x22>', 'https://travis-j1w9.onrender.com', 'formattedFP', 'button[onclick*=\x22initiateQuery\x22]', 'getElementById'];
    _0x128d = function() {
        return _0x17c3d3;
    };
    return _0x128d();
}
async function loadMyQueries() {
    const _0x3a1433 = _0x44ad09;
    if (!currentToken) return;
    try {
        const _0x205c13 = await fetch(BACKEND_URL + '/my-queries', {
            'headers': {
                'Authorization': _0x3a1433(0x119) + currentToken
            }
        });
        if (!_0x205c13['ok']) throw new Error(_0x3a1433(0xec));
        const _0x389638 = await _0x205c13['json'](),
            _0x47341b = document['getElementById'](_0x3a1433(0xef));
        if (_0x389638['length'] === 0x0) {
            _0x47341b[_0x3a1433(0xf0)] = _0x3a1433(0x107);
            return;
        }
        let _0x23b6f2 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22w-full\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22border-b\x20border-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20text-left\x22>Target\x20Phone</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20text-left\x22>Revealed\x20Fingerprint</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20text-left\x22>Receipt</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20text-left\x22>Date</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
        _0x389638[_0x3a1433(0x111)](_0x231fb5 => {
            const _0x33a1f1 = _0x3a1433;
            _0x23b6f2 += _0x33a1f1(0x12b) + _0x231fb5[_0x33a1f1(0xea)] + _0x33a1f1(0x12f) + _0x231fb5[_0x33a1f1(0x102)] + _0x33a1f1(0x100) + (_0x231fb5[_0x33a1f1(0xf1)] || '-') + _0x33a1f1(0x10a) + new Date(_0x231fb5[_0x33a1f1(0xeb)])[_0x33a1f1(0x122)]() + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
        }), _0x23b6f2 += '</tbody></table>', _0x47341b[_0x3a1433(0xf0)] = _0x23b6f2;
    } catch (_0x3d3362) {
        console[_0x3a1433(0xfe)](_0x3a1433(0x141), _0x3d3362), document['getElementById'](_0x3a1433(0xef))[_0x3a1433(0xf0)] = _0x3a1433(0x126);
    }
}
window[_0x44ad09(0x112)] = () => {
    const _0x2a0179 = _0x44ad09;
    injectLoaderStyles(), currentToken = localStorage[_0x2a0179(0x13d)](_0x2a0179(0x13a)), renderNav(), currentToken ? (hideAllSections(), document['getElementById'](_0x2a0179(0x105))['classList'][_0x2a0179(0x10b)](_0x2a0179(0xf8)), loadDashboard()) : showLoginForm();
};
