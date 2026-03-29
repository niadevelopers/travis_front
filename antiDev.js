const _0x50a4b3 = _0x57b7;
(function(_0x2d89ef, _0x32c5eb) {
    const _0x294929 = _0x57b7,
        _0x3adafc = _0x2d89ef();
    while (!![]) {
        try {
            const _0x57f434 = parseInt(_0x294929(0x1d2)) / 0x1 * (-parseInt(_0x294929(0x1bb)) / 0x2) + -parseInt(_0x294929(0x1b1)) / 0x3 + parseInt(_0x294929(0x1c5)) / 0x4 + -parseInt(_0x294929(0x1b0)) / 0x5 + parseInt(_0x294929(0x1af)) / 0x6 * (parseInt(_0x294929(0x1c1)) / 0x7) + -parseInt(_0x294929(0x1cb)) / 0x8 * (-parseInt(_0x294929(0x1d6)) / 0x9) + parseInt(_0x294929(0x1b7)) / 0xa * (parseInt(_0x294929(0x1d1)) / 0xb);
            if (_0x57f434 === _0x32c5eb) break;
            else _0x3adafc['push'](_0x3adafc['shift']());
        } catch (_0x3f77ef) {
            _0x3adafc['push'](_0x3adafc['shift']());
        }
    }
}(_0x5cf7, 0x8f935));
const CONFIG = {
    'title': _0x50a4b3(0x1b4),
    'body': 'This\x20action\x20is\x20not\x20allowed\x20on\x20our\x20platform.<br><br>Our\x20security\x20policies\x20strictly\x20prohibit\x20the\x20use\x20of\x20developer\x20tools,\x20element\x20inspection,\x20or\x20viewing\x20source\x20code.',
    'buttonText': _0x50a4b3(0x1cf),
    'checkInterval': 0x12c,
    'threshold': 0x8c,
    'maxChecksBeforeOverlay': 0x3
};
let protectionActive = ![],
    detectionCount = 0x0;

function _0x57b7(_0x361d8e, _0xcc9b72) {
    _0x361d8e = _0x361d8e - 0x1ac;
    const _0x5cf796 = _0x5cf7();
    let _0x57b79e = _0x5cf796[_0x361d8e];
    return _0x57b79e;
}

function showProfessionalOverlay() {
    const _0x127bdc = _0x50a4b3;
    if (protectionActive) return;
    protectionActive = !![];
    const _0x157f06 = document['createElement']('div');
    _0x157f06['id'] = _0x127bdc(0x1c9), _0x157f06['style']['cssText'] = _0x127bdc(0x1ba), _0x157f06[_0x127bdc(0x1b2)] = _0x127bdc(0x1bc) + CONFIG['title'] + _0x127bdc(0x1be) + CONFIG['body'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22window.retryProtectionCheck()\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22background:#ff4d4d;\x20color:#fff;\x20border:none;\x20padding:16px\x2036px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:1.15rem;\x20border-radius:8px;\x20cursor:pointer;\x20font-weight:600;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + CONFIG['buttonText'] + _0x127bdc(0x1d4), document[_0x127bdc(0x1b8)][_0x127bdc(0x1c0)](_0x157f06);
    if (document[_0x127bdc(0x1d0)]) document[_0x127bdc(0x1d0)]['style'][_0x127bdc(0x1d5)] = _0x127bdc(0x1c2);
}

function isDevToolsLikelyOpen() {
    const _0x2c650f = _0x50a4b3,
        _0x1288d1 = CONFIG[_0x2c650f(0x1ce)],
        _0x36c471 = Math[_0x2c650f(0x1cc)](window['outerWidth'] - window['innerWidth']) > _0x1288d1,
        _0x5c9aec = Math[_0x2c650f(0x1cc)](window['outerHeight'] - window[_0x2c650f(0x1c8)]) > _0x1288d1;
    return _0x36c471 || _0x5c9aec;
}

function startDevToolsMonitoring() {
    const _0x562772 = _0x50a4b3;
    let _0x155d02 = 0x0;
    const _0x516955 = () => {
        const _0x5f2e22 = _0x57b7;
        if (protectionActive) return;
        isDevToolsLikelyOpen() ? (_0x155d02++, _0x155d02 >= CONFIG[_0x5f2e22(0x1bd)] && showProfessionalOverlay()) : _0x155d02 = 0x0;
    };
    _0x516955(), setInterval(_0x516955, CONFIG[_0x562772(0x1b9)]), setTimeout(_0x516955, 0x32), setTimeout(_0x516955, 0x96), setTimeout(_0x516955, 0x190);
}

function _0x5cf7() {
    const _0x267d76 = ['152hVFqap', 'abs', 'ctrlKey', 'threshold', 'I\x20Understand\x20–\x20Close\x20Developer\x20Tools', 'body', '330uZceJY', '1073038ukCXrx', 'visible', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin-top:\x2035px;\x20color:#aaa;\x20font-size:0.95rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20fully\x20close\x20the\x20Developer\x20Tools\x20panel\x20to\x20continue\x20using\x20the\x20application.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'visibility', '491418REOcrW', 'remove', 'load', 'retryProtectionCheck', 'F12', 'contextmenu', '18efPaxN', '3790270hFMRZo', '3208803QZXZhz', 'innerHTML', 'shiftKey', 'Developer\x20Tools\x20Access\x20Prohibited', 'toUpperCase', 'keydown', '601780ieAEEs', 'documentElement', 'checkInterval', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x20top:\x200;\x20left:\x200;\x20width:\x20100vw;\x20height:\x20100vh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.98);\x20color:\x20#fff;\x20z-index:\x202147483647;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20system-ui,\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20', '2AUxCET', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22max-width:\x20640px;\x20padding:\x2040px\x2030px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22color:\x20#ff4d4d;\x20font-size:\x202.3rem;\x20margin-bottom:\x2024px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'maxChecksBeforeOverlay', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22font-size:\x201.22rem;\x20line-height:\x201.75;\x20margin-bottom:\x2035px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'style', 'appendChild', '479479bwulNU', 'hidden', 'getElementById', 'addEventListener', '1762036oVwIKq', 'includes', 'key', 'innerHeight', 'devtools-protection-overlay', 'preventDefault'];
    _0x5cf7 = function() {
        return _0x267d76;
    };
    return _0x5cf7();
}
document[_0x50a4b3(0x1c4)](_0x50a4b3(0x1ae), _0x19d853 => {
    const _0x1182b5 = _0x50a4b3;
    return _0x19d853[_0x1182b5(0x1ca)](), showProfessionalOverlay(), ![];
}), document['addEventListener'](_0x50a4b3(0x1b6), _0x5bda72 => {
    const _0xa6cc1c = _0x50a4b3;
    if (_0x5bda72[_0xa6cc1c(0x1c7)] === _0xa6cc1c(0x1ad) || _0x5bda72[_0xa6cc1c(0x1cd)] && _0x5bda72[_0xa6cc1c(0x1b3)] && ['I', 'J', 'C'][_0xa6cc1c(0x1c6)](_0x5bda72[_0xa6cc1c(0x1c7)][_0xa6cc1c(0x1b5)]()) || _0x5bda72['metaKey'] && _0x5bda72['altKey'] && ['I', 'J', 'C'][_0xa6cc1c(0x1c6)](_0x5bda72[_0xa6cc1c(0x1c7)][_0xa6cc1c(0x1b5)]()) || _0x5bda72['ctrlKey'] && ['u', 'U'][_0xa6cc1c(0x1c6)](_0x5bda72[_0xa6cc1c(0x1c7)]) || _0x5bda72['metaKey'] && ['u', 'U'][_0xa6cc1c(0x1c6)](_0x5bda72['key'])) return _0x5bda72['preventDefault'](), showProfessionalOverlay(), ![];
}), window[_0x50a4b3(0x1ac)] = function() {
    const _0x3c2386 = _0x50a4b3;
    if (isDevToolsLikelyOpen()) return;
    const _0x3ba36e = document[_0x3c2386(0x1c3)](_0x3c2386(0x1c9));
    if (_0x3ba36e) {
        _0x3ba36e[_0x3c2386(0x1d7)](), protectionActive = ![];
        if (document[_0x3c2386(0x1d0)]) document[_0x3c2386(0x1d0)][_0x3c2386(0x1bf)]['visibility'] = _0x3c2386(0x1d3);
    }
    detectionCount = 0x0;
};

function init() {
    const _0x4163ba = _0x50a4b3;
    startDevToolsMonitoring(), window['addEventListener'](_0x4163ba(0x1d8), () => {
        setTimeout(() => {
            !protectionActive && isDevToolsLikelyOpen() && showProfessionalOverlay();
        }, 0x320);
    });
}
init();
