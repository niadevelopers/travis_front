const _0x2bd4e0 = _0x42a1;
(function(_0x25b755, _0x311858) {
    const _0x1fafab = _0x42a1,
        _0x4ccef2 = _0x25b755();
    while (!![]) {
        try {
            const _0x380b89 = -parseInt(_0x1fafab(0x177)) / 0x1 * (parseInt(_0x1fafab(0x17a)) / 0x2) + parseInt(_0x1fafab(0x157)) / 0x3 + -parseInt(_0x1fafab(0x1a2)) / 0x4 + parseInt(_0x1fafab(0x18f)) / 0x5 + parseInt(_0x1fafab(0x152)) / 0x6 * (-parseInt(_0x1fafab(0x1bd)) / 0x7) + parseInt(_0x1fafab(0x163)) / 0x8 * (parseInt(_0x1fafab(0x17e)) / 0x9) + -parseInt(_0x1fafab(0x1ba)) / 0xa * (-parseInt(_0x1fafab(0x189)) / 0xb);
            if (_0x380b89 === _0x311858) break;
            else _0x4ccef2['push'](_0x4ccef2['shift']());
        } catch (_0x1bee4c) {
            _0x4ccef2['push'](_0x4ccef2['shift']());
        }
    }
}(_0x5a92, 0x76b78));
const BACKEND_URL = _0x2bd4e0(0x15a);
let currentToken = null;
const RATE_LIMIT = {
        'login': {
            'attempts': 0x0,
            'lastReset': Date[_0x2bd4e0(0x17f)]()
        },
        'register': {
            'attempts': 0x0,
            'lastReset': Date[_0x2bd4e0(0x17f)]()
        },
        'stk': {
            'attempts': 0x0,
            'lastReset': Date[_0x2bd4e0(0x17f)]()
        }
    },
    COOLDOWN_MS = 0xea60,
    MAX_ATTEMPTS = 0x3;

function canAttempt(_0x3cb122) {
    const _0x15dc6b = _0x2bd4e0,
        _0x500036 = Date[_0x15dc6b(0x17f)](),
        _0x1a9e02 = RATE_LIMIT[_0x3cb122];
    _0x500036 - _0x1a9e02['lastReset'] > COOLDOWN_MS && (_0x1a9e02['attempts'] = 0x0, _0x1a9e02[_0x15dc6b(0x171)] = _0x500036);
    if (_0x1a9e02[_0x15dc6b(0x18a)] >= MAX_ATTEMPTS) {
        const _0x6eded0 = Math[_0x15dc6b(0x1b8)]((_0x1a9e02['lastReset'] + COOLDOWN_MS - _0x500036) / 0x3e8);
        return alert(_0x15dc6b(0x1a1) + _0x6eded0 + _0x15dc6b(0x191)), ![];
    }
    return _0x1a9e02[_0x15dc6b(0x18a)]++, !![];
}

function sanitizePhone(_0x145ee1) {
    const _0x4c9958 = _0x2bd4e0;
    return _0x145ee1[_0x4c9958(0x19a)](/[^0-9+]/g, '')[_0x4c9958(0x1ab)]();
}

function sanitizeText(_0x4e0903) {
    const _0x530869 = _0x2bd4e0;
    return _0x4e0903[_0x530869(0x1ab)]()[_0x530869(0x19a)](/[<>"/\\]/g, '');
}

function isValidKenyanPhone(_0x2e8b98) {
    const _0x21c3ba = _0x2bd4e0,
        _0x92deeb = sanitizePhone(_0x2e8b98);
    return /^(\+?254|0)[17]\d{8}$/ [_0x21c3ba(0x154)](_0x92deeb) && _0x92deeb[_0x21c3ba(0x159)] >= 0xa;
}

function isValidPassword(_0x266d70) {
    return _0x266d70['length'] >= 0x6;
}

function showLoader(_0x538895) {
    const _0x426485 = _0x2bd4e0;
    if (!_0x538895) return;
    _0x538895[_0x426485(0x1aa)][_0x426485(0x1b6)] = _0x538895[_0x426485(0x187)], _0x538895[_0x426485(0x185)] = !![], _0x538895[_0x426485(0x187)] = _0x426485(0x176), _0x538895[_0x426485(0x172)][_0x426485(0x195)] = _0x426485(0x17c);
}

function hideLoader(_0x12ba02) {
    const _0x2bd7d5 = _0x2bd4e0;
    if (!_0x12ba02 || !_0x12ba02[_0x2bd7d5(0x1aa)][_0x2bd7d5(0x1b6)]) return;
    _0x12ba02['innerHTML'] = _0x12ba02['dataset'][_0x2bd7d5(0x1b6)], _0x12ba02[_0x2bd7d5(0x185)] = ![], _0x12ba02[_0x2bd7d5(0x172)][_0x2bd7d5(0x195)] = '1', delete _0x12ba02[_0x2bd7d5(0x1aa)]['originalText'];
}

function togglePassword(_0x941391) {
    const _0x4db6cf = _0x2bd4e0,
        _0x1ffabf = _0x941391['previousElementSibling'];
    if (!_0x1ffabf) return;
    _0x1ffabf['type'] === _0x4db6cf(0x173) ? (_0x1ffabf['type'] = _0x4db6cf(0x167), _0x941391[_0x4db6cf(0x160)]['remove'](_0x4db6cf(0x18d)), _0x941391[_0x4db6cf(0x160)]['add']('fa-eye-slash')) : (_0x1ffabf[_0x4db6cf(0x18c)] = _0x4db6cf(0x173), _0x941391[_0x4db6cf(0x160)]['remove']('fa-eye-slash'), _0x941391[_0x4db6cf(0x160)][_0x4db6cf(0x19d)](_0x4db6cf(0x18d)));
}
async function handleRegister(_0x20ac17) {
    const _0x4160dc = _0x2bd4e0;
    _0x20ac17[_0x4160dc(0x158)]();
    const _0x18ffea = document['querySelector']('#register-form\x20button[type=\x22submit\x22]') || document[_0x4160dc(0x15b)]('#register-form\x20button');
    if (!canAttempt(_0x4160dc(0x1a5))) return;
    showLoader(_0x18ffea);
    const _0x5d6a06 = {
        'fullName': sanitizeText(document['getElementById'](_0x4160dc(0x1b5))[_0x4160dc(0x19f)]),
        'location': sanitizeText(document[_0x4160dc(0x179)](_0x4160dc(0x169))[_0x4160dc(0x19f)]),
        'phone': sanitizePhone(document[_0x4160dc(0x179)](_0x4160dc(0x155))[_0x4160dc(0x19f)]),
        'email': document[_0x4160dc(0x179)](_0x4160dc(0x166))[_0x4160dc(0x19f)][_0x4160dc(0x1ab)]() || undefined,
        'password': document[_0x4160dc(0x179)](_0x4160dc(0x1b1))[_0x4160dc(0x19f)]
    };
    if (!_0x5d6a06['fullName'] || !_0x5d6a06[_0x4160dc(0x175)] || !_0x5d6a06['password']) {
        alert('Please\x20fill\x20all\x20required\x20fields\x20(Full\x20Name,\x20Phone,\x20Password)'), hideLoader(_0x18ffea);
        return;
    }
    if (!isValidKenyanPhone(_0x5d6a06['phone'])) {
        alert(_0x4160dc(0x170)), hideLoader(_0x18ffea);
        return;
    }
    if (!isValidPassword(_0x5d6a06[_0x4160dc(0x173)])) {
        alert(_0x4160dc(0x165)), hideLoader(_0x18ffea);
        return;
    }
    if (_0x5d6a06[_0x4160dc(0x173)] !== document[_0x4160dc(0x179)](_0x4160dc(0x168))['value']) {
        alert('Passwords\x20do\x20not\x20match'), hideLoader(_0x18ffea);
        return;
    }
    try {
        const _0xc7ae38 = await fetch(BACKEND_URL + _0x4160dc(0x1bc), {
                'method': _0x4160dc(0x192),
                'headers': {
                    'Content-Type': _0x4160dc(0x1b0)
                },
                'body': JSON[_0x4160dc(0x15c)](_0x5d6a06)
            }),
            _0x591423 = await _0xc7ae38[_0x4160dc(0x15f)]();
        _0x591423[_0x4160dc(0x162)] ? alert(_0x591423[_0x4160dc(0x162)]) : (alert('Account\x20created\x20successfully!\x20Please\x20login\x20now.'), showLoginForm());
    } catch (_0x408ef0) {
        alert(_0x4160dc(0x180));
    } finally {
        hideLoader(_0x18ffea);
    }
}
async function handleLogin(_0xe29b18) {
    const _0x42331c = _0x2bd4e0;
    _0xe29b18[_0x42331c(0x158)]();
    const _0x222f64 = document[_0x42331c(0x15b)](_0x42331c(0x153)) || document['querySelector'](_0x42331c(0x181));
    if (!canAttempt('login')) return;
    showLoader(_0x222f64);
    const _0x3277be = sanitizePhone(document[_0x42331c(0x179)](_0x42331c(0x16c))[_0x42331c(0x19f)]),
        _0x5f3b5b = document[_0x42331c(0x179)]('login-password')[_0x42331c(0x19f)];
    if (!_0x3277be || !_0x5f3b5b) {
        alert('Please\x20enter\x20phone\x20number\x20and\x20password'), hideLoader(_0x222f64);
        return;
    }
    if (!isValidKenyanPhone(_0x3277be)) {
        alert(_0x42331c(0x17d)), hideLoader(_0x222f64);
        return;
    }
    if (!isValidPassword(_0x5f3b5b)) {
        alert(_0x42331c(0x16a)), hideLoader(_0x222f64);
        return;
    }
    try {
        const _0x1f1639 = await fetch(BACKEND_URL + _0x42331c(0x15e), {
                'method': _0x42331c(0x192),
                'headers': {
                    'Content-Type': _0x42331c(0x1b0)
                },
                'body': JSON[_0x42331c(0x15c)]({
                    'phone': _0x3277be,
                    'password': _0x5f3b5b
                })
            }),
            _0xcdd55 = await _0x1f1639[_0x42331c(0x15f)]();
        if (_0xcdd55[_0x42331c(0x162)]) {
            alert(_0xcdd55[_0x42331c(0x162)]);
            return;
        }
        currentToken = _0xcdd55[_0x42331c(0x1af)], localStorage[_0x42331c(0x16f)](_0x42331c(0x1af), _0xcdd55[_0x42331c(0x1af)]), alert('Login\x20successful!\x20Welcome\x20to\x20your\x20dashboard.'), hideAllSections(), document[_0x42331c(0x179)](_0x42331c(0x193))[_0x42331c(0x160)][_0x42331c(0x18e)](_0x42331c(0x19b)), renderNav(), loadDashboard();
    } catch (_0x36de94) {
        console['error'](_0x42331c(0x190), _0x36de94), alert(_0x42331c(0x19e));
    } finally {
        hideLoader(_0x222f64);
    }
}
async function initiateQuery() {
    const _0x4047e8 = _0x2bd4e0,
        _0x290cca = document['querySelector'](_0x4047e8(0x14e)) || document[_0x4047e8(0x179)]('initiate-stk-btn');
    if (!canAttempt(_0x4047e8(0x1ad))) return;
    showLoader(_0x290cca);
    const _0x19e34c = sanitizePhone(document[_0x4047e8(0x179)](_0x4047e8(0x182))[_0x4047e8(0x19f)]),
        _0x4219fd = sanitizePhone(document[_0x4047e8(0x179)](_0x4047e8(0x1a7))[_0x4047e8(0x19f)]);
    if (!_0x19e34c || !_0x4219fd) {
        alert(_0x4047e8(0x164)), hideLoader(_0x290cca);
        return;
    }
    if (!isValidKenyanPhone(_0x19e34c)) {
        alert(_0x4047e8(0x18b)), hideLoader(_0x290cca);
        return;
    }
    if (!isValidKenyanPhone(_0x4219fd)) {
        alert(_0x4047e8(0x1a0)), hideLoader(_0x290cca);
        return;
    }
    try {
        const _0x599a82 = await fetch(BACKEND_URL + '/initiate-stk', {
                'method': _0x4047e8(0x192),
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': _0x4047e8(0x197) + currentToken
                },
                'body': JSON[_0x4047e8(0x15c)]({
                    'targetPhone': _0x19e34c,
                    'payerMsisdn': _0x4219fd
                })
            }),
            _0x142e44 = await _0x599a82[_0x4047e8(0x15f)]();
        alert(_0x142e44[_0x4047e8(0x14f)] || _0x142e44['error'] || 'STK\x20Push\x20sent.\x20Check\x20your\x20phone.'), !_0x142e44[_0x4047e8(0x162)] && setTimeout(loadMyQueries, 0x1f40);
    } catch (_0xdf6eb1) {
        console[_0x4047e8(0x162)](_0xdf6eb1), alert(_0x4047e8(0x17b));
    } finally {
        hideLoader(_0x290cca);
    }
}

function logout() {
    const _0x3eaacf = _0x2bd4e0;
    localStorage[_0x3eaacf(0x1a6)]('token'), currentToken = null, renderNav(), hideAllSections(), showLoginForm();
}

function renderNav() {
    const _0x39b6ba = _0x2bd4e0,
        _0x8dd1dc = document[_0x39b6ba(0x179)]('nav-buttons');
    currentToken ? _0x8dd1dc['innerHTML'] = _0x39b6ba(0x161) : _0x8dd1dc[_0x39b6ba(0x187)] = '';
}

function _0x5a92() {
    const _0x313eff = ['hidden', 'maskedPhone', 'add', 'Login\x20failed.\x20Please\x20check\x20your\x20connection.', 'value', 'Payer\x20phone\x20number\x20is\x20not\x20valid', 'Too\x20many\x20attempts.\x20Please\x20wait\x20', '1711516eEZToH', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x22>', '<p\x20class=\x22text-center\x20text-gray-400\x20py-12\x22>No\x20revealed\x20fingerprints\x20yet.<br>Make\x20a\x20successful\x20payment\x20to\x20see\x20results\x20here.</p>', 'register', 'removeItem', 'payer-msisdn', 'toLowerCase', 'successQueries', 'dataset', 'trim', 'query-search', 'stk', 'none', 'token', 'application/json', 'reg-password', '<p\x20class=\x22text-center\x20text-red-400\x20py-8\x22>Failed\x20to\x20load\x20revealed\x20fingerprints.</p>', 'login-form', 'register-form', 'reg-fullname', 'originalText', '</tbody></table>', 'ceil', 'Failed\x20to\x20load\x20queries:', '370kSnIvN', 'queriedAt', '/register', '52262eOTxwM', 'Failed\x20to\x20load\x20queries', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x20font-mono\x20text-emerald-400\x20text-lg\x22>', '#dashboard\x20button[onclick=\x22initiateQuery()\x22]', 'message', 'cells', 'tbody\x20tr', '660JlwJCN', '#login-form\x20button[type=\x22submit\x22]', 'test', 'reg-phone', '/my-queries', '2890149igrIPk', 'preventDefault', 'length', 'https://travis-j1w9.onrender.com', 'querySelector', 'stringify', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20', '/login', 'json', 'classList', '<button\x20onclick=\x22logout()\x22\x20class=\x22px-6\x20py-2\x20bg-red-600\x20hover:bg-red-500\x20rounded-2xl\x22>Logout</button>', 'error', '1763592ZSzRXL', 'Please\x20fill\x20both\x20phone\x20numbers', 'Password\x20must\x20be\x20at\x20least\x206\x20characters\x20long', 'reg-email', 'text', 'reg-confirm', 'reg-location', 'Password\x20is\x20too\x20short', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x20text-sm\x22>', 'login-phone', '/me', 'failure-count', 'setItem', 'Please\x20enter\x20a\x20valid\x20Kenyan\x20phone\x20number\x20(e.g.\x200712345678)', 'lastReset', 'style', 'password', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22border-t\x20border-gray-800\x20hover:bg-gray-800\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22p-4\x22>', 'phone', '\x0a\x20\x20\x20\x20<span\x20class=\x22inline-block\x20animate-spin\x20mr-2\x22>⟳</span>\x0a\x20\x20\x20\x20Processing...\x0a\x20\x20', '62vKViea', '\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22text\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22query-search\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20placeholder=\x22Search\x20target\x20number\x20(e.g.\x200722222\x20or\x20072222222XXX)\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22w-full\x20px-4\x20py-3\x20bg-gray-900\x20border\x20border-gray-700\x20rounded-2xl\x20text-white\x20focus:outline-none\x20focus:border-emerald-500\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<table\x20class=\x22w-full\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22border-b\x20border-gray-700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20text-left\x22>Target\x20Phone</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20text-left\x22>Revealed\x20Fingerprint</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20text-left\x22>Receipt</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22p-4\x20text-left\x22>Date</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20', 'getElementById', '12602dscRMD', 'Failed\x20to\x20initiate\x20payment.\x20Please\x20try\x20again.', '0.75', 'Please\x20enter\x20a\x20valid\x20Kenyan\x20phone\x20number', '27MruXqP', 'now', 'Registration\x20failed.\x20Please\x20check\x20your\x20connection.', '#login-form\x20button', 'target-phone', 'textContent', 'getItem', 'disabled', 'display', 'innerHTML', 'addEventListener', '57662aYpUoA', 'attempts', 'Target\x20phone\x20number\x20is\x20not\x20valid', 'type', 'fa-eye', 'remove', '1536905uktMjd', 'Login\x20error:', '\x20seconds\x20before\x20trying\x20again.', 'POST', 'dashboard', 'forEach', 'opacity', 'auth-section', 'Bearer\x20', 'queries-list', 'input', 'replace'];
    _0x5a92 = function() {
        return _0x313eff;
    };
    return _0x5a92();
}

function showLoginForm() {
    const _0x378a52 = _0x2bd4e0;
    hideAllSections(), document[_0x378a52(0x179)](_0x378a52(0x196))['classList'][_0x378a52(0x18e)](_0x378a52(0x19b)), document[_0x378a52(0x179)](_0x378a52(0x1b3))[_0x378a52(0x160)]['remove'](_0x378a52(0x19b)), document['getElementById']('register-form')[_0x378a52(0x160)]['add']('hidden');
}

function showRegisterForm() {
    const _0x3aa1b8 = _0x2bd4e0;
    hideAllSections(), document[_0x3aa1b8(0x179)](_0x3aa1b8(0x196))[_0x3aa1b8(0x160)][_0x3aa1b8(0x18e)](_0x3aa1b8(0x19b)), document[_0x3aa1b8(0x179)](_0x3aa1b8(0x1b4))[_0x3aa1b8(0x160)][_0x3aa1b8(0x18e)](_0x3aa1b8(0x19b)), document[_0x3aa1b8(0x179)]('login-form')['classList'][_0x3aa1b8(0x19d)](_0x3aa1b8(0x19b));
}

function hideAllSections() {
    const _0x4f81ac = _0x2bd4e0;
    document[_0x4f81ac(0x179)](_0x4f81ac(0x196))[_0x4f81ac(0x160)][_0x4f81ac(0x19d)](_0x4f81ac(0x19b)), document[_0x4f81ac(0x179)]('dashboard')[_0x4f81ac(0x160)][_0x4f81ac(0x19d)](_0x4f81ac(0x19b));
}
async function loadDashboard() {
    const _0x5074e3 = _0x2bd4e0;
    hideAllSections(), document['getElementById'](_0x5074e3(0x193))['classList'][_0x5074e3(0x18e)](_0x5074e3(0x19b));
    try {
        const _0x507987 = await fetch(BACKEND_URL + _0x5074e3(0x16d), {
                'headers': {
                    'Authorization': _0x5074e3(0x197) + currentToken
                }
            }),
            _0x345391 = await _0x507987[_0x5074e3(0x15f)]();
        document[_0x5074e3(0x179)]('success-count')[_0x5074e3(0x183)] = _0x345391[_0x5074e3(0x1a9)] || 0x0, document['getElementById'](_0x5074e3(0x16e))[_0x5074e3(0x183)] = _0x345391['failureQueries'] || 0x0, await loadMyQueries();
    } catch (_0x2cf842) {
        console[_0x5074e3(0x162)]('Dashboard\x20load\x20error:', _0x2cf842);
    }
}
async function loadMyQueries() {
    const _0x8c31b5 = _0x2bd4e0;
    if (!currentToken) return;
    try {
        const _0x19b02b = await fetch(BACKEND_URL + _0x8c31b5(0x156), {
            'headers': {
                'Authorization': _0x8c31b5(0x197) + currentToken
            }
        });
        if (!_0x19b02b['ok']) throw new Error(_0x8c31b5(0x14c));
        const _0x223bae = await _0x19b02b[_0x8c31b5(0x15f)](),
            _0x146c80 = document[_0x8c31b5(0x179)](_0x8c31b5(0x198));
        if (_0x223bae['length'] === 0x0) {
            _0x146c80['innerHTML'] = _0x8c31b5(0x1a4);
            return;
        }
        let _0x5e85d4 = _0x8c31b5(0x178);
        _0x223bae[_0x8c31b5(0x194)](_0x18ecfb => {
            const _0xaead56 = _0x8c31b5;
            _0x5e85d4 += _0xaead56(0x174) + _0x18ecfb[_0xaead56(0x19c)] + _0xaead56(0x14d) + _0x18ecfb['formattedFP'] + _0xaead56(0x1a3) + (_0x18ecfb['receipt'] || '-') + _0xaead56(0x16b) + new Date(_0x18ecfb[_0xaead56(0x1bb)])['toLocaleString']() + _0xaead56(0x15d);
        }), _0x5e85d4 += _0x8c31b5(0x1b7), _0x146c80[_0x8c31b5(0x187)] = _0x5e85d4;
        const _0x2657f3 = document[_0x8c31b5(0x179)](_0x8c31b5(0x1ac));
        _0x2657f3 && _0x2657f3[_0x8c31b5(0x188)](_0x8c31b5(0x199), () => {
            const _0xa4b231 = _0x8c31b5,
                _0x4503da = _0x2657f3['value'][_0xa4b231(0x1a8)]()[_0xa4b231(0x1ab)](),
                _0x49b9b5 = _0x146c80['querySelectorAll'](_0xa4b231(0x151));
            _0x49b9b5[_0xa4b231(0x194)](_0x24f443 => {
                const _0x4807e6 = _0xa4b231,
                    _0x34411b = _0x24f443[_0x4807e6(0x150)][0x0][_0x4807e6(0x183)][_0x4807e6(0x1a8)]();
                _0x24f443['style'][_0x4807e6(0x186)] = _0x34411b['includes'](_0x4503da) ? '' : _0x4807e6(0x1ae);
            });
        });
    } catch (_0x4835f8) {
        console[_0x8c31b5(0x162)](_0x8c31b5(0x1b9), _0x4835f8), document[_0x8c31b5(0x179)](_0x8c31b5(0x198))['innerHTML'] = _0x8c31b5(0x1b2);
    }
}

function _0x42a1(_0x59f965, _0x627c3f) {
    _0x59f965 = _0x59f965 - 0x14c;
    const _0x5a928f = _0x5a92();
    let _0x42a193 = _0x5a928f[_0x59f965];
    return _0x42a193;
}
window['onload'] = () => {
    const _0x2fd6f3 = _0x2bd4e0;
    currentToken = localStorage[_0x2fd6f3(0x184)](_0x2fd6f3(0x1af)), renderNav(), currentToken ? (hideAllSections(), document['getElementById'](_0x2fd6f3(0x193))[_0x2fd6f3(0x160)]['remove'](_0x2fd6f3(0x19b)), loadDashboard()) : showLoginForm();
};
