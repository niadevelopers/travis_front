function _0x53bc(_0x4cd3c2, _0x46ccc9) {
    _0x4cd3c2 = _0x4cd3c2 - 0x88;
    const _0x1c3653 = _0x1c36();
    let _0x53bcb3 = _0x1c3653[_0x4cd3c2];
    return _0x53bcb3;
}

function _0x1c36() {
    const _0x1b5fd5 = ['#cc5200', ';text-align:right;border-bottom:1px\x20solid\x20#f3f4f6;\x22>', 'TravisGuardian_v1.0', '#bank-manual-charge', '<option\x20value=\x22', '7eJNZcA', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em;\x22>Paste\x20Bank\x20SMS\x20Alert(s)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22bank-sms-input\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20placeholder=\x22Paste\x20your\x20bank\x20SMS\x20alert\x20here…&#10;&#10;Example\x20(Equity):&#10;Equity\x20Bank:\x20KShs\x205,000\x20withdrawn\x20from\x20your\x20account\x20XXXX1234\x20at\x20ATM\x20on\x2001/06/2025.\x20Charges:\x20KShs\x2034.00.\x20Available\x20balance:\x20KShs\x2012,450.00.\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:100%;height:140px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;padding:12px;font-size:12.5px;font-family:inherit;resize:vertical;outline:none;background:#fafafa;line-height:1.6;box-sizing:border-box;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20></textarea>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;gap:8px;margin-top:10px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bank-parse-btn\x22\x20style=\x22flex:1;background:#1e40af;color:white;border:none;padding:12px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Extract\x20Charges\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bank-clear-btn\x22\x20style=\x22background:#f3f4f6;color:#6b7280;border:none;padding:12px\x2014px;border-radius:8px;font-size:13px;cursor:pointer;font-family:inherit;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Clear\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22bank-results\x22\x20style=\x22margin-top:14px;display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22bank-results-inner\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bank-post-all\x22\x20style=\x22width:100%;background:linear-gradient(135deg,#1e40af,#1e3a8a);color:white;border:none;padding:13px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;margin-top:10px;font-family:inherit;display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20✅\x20Log\x20All\x20Charges\x20to\x20Ledger\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TAB:\x20Manual\x20Entry\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22bank-tab-manual\x22\x20class=\x22bank-tab-content\x22\x20style=\x22padding:18px;display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#eff6ff;border:1px\x20solid\x20#bfdbfe;border-radius:8px;padding:12px;margin-bottom:16px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:0;font-size:12px;color:#1e40af;line-height:1.6;\x22>Manually\x20log\x20a\x20bank\x20charge\x20when\x20you\x20don\x27t\x20have\x20the\x20SMS.\x20Select\x20your\x20bank\x20and\x20enter\x20the\x20charge\x20amount\x20directly.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:grid;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;\x22>Bank</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22bank-manual-bank\x22\x20style=\x22width:100%;padding:9px\x2012px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;background:white;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'button', 'toLocaleString', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22background:#f9fafb;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22padding:6px\x2010px;text-align:left;font-size:10px;color:#6b7280;font-weight:700;border-bottom:1px\x20solid\x20#f0f0f0;\x22>Transaction</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22padding:6px\x2010px;text-align:right;font-size:10px;color:#6b7280;font-weight:700;border-bottom:1px\x20solid\x20#f0f0f0;\x22>Typical\x20Charge</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22fee-body-', 'card', '3023160GqXkOt', '\x20KSh', '\x20charge\x20logged\x20as\x20Bills\x20expense.', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22background:', 'KSh\x20100–210', '.bank-chip', 'replace', 'nextSibling', 'NCBA\x20/\x20Loop', 'querySelectorAll', 'borderColor', 'getElementById', 'ATM\x20Withdrawal\x20(other)', 'onerror', 'forEach', 'Bank\x20charge\x20—\x20', 'length', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>', '#dc2626', 'querySelector', 'open', '#bank-post-all', 'color', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#92400e;margin-top:3px;\x22>Duplicate\x20—\x20already\x20logged,\x20will\x20not\x20be\x20re-imported</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:15px;font-weight:700;color:#b45309;\x22>KSh\x20', '\x20with\x20KSh\x200\x20charge\x20—\x20nothing\x20to\x20log.</div>', 'ref', 'disabled', 'dataset', 'transaction', 'MANUAL', '#0033a0', 'textContent', 'join', 'remove', '.bank-tab-content', 'flex', '#bank-manual-log-btn', 'KSh\x20500', 'add', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;\x22>Transaction\x20Type</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22bank-manual-type\x22\x20style=\x22width:100%;padding:9px\x2012px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;background:white;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22atm\x22>ATM\x20Withdrawal</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22transfer\x22>EFT\x20/\x20RTGS\x20/\x20Pesalink\x20Transfer</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22maintenance\x22>Monthly\x20Ledger\x20/\x20Maintenance\x20Fee</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22card\x22>Card\x20Transaction</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;\x22>Charge\x20Amount\x20(KSh)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22bank-manual-charge\x22\x20type=\x22number\x22\x20placeholder=\x22e.g.\x2035\x22\x20style=\x22width:100%;padding:9px\x2012px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;display:block;margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;\x22>Description\x20(optional)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22bank-manual-desc\x22\x20type=\x22text\x22\x20placeholder=\x22e.g.\x20Withdrew\x20cash\x20for\x20rent\x22\x20style=\x22width:100%;padding:9px\x2012px;border:1px\x20solid\x20#e5e7eb;border-radius:8px;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bank-manual-log-btn\x22\x20style=\x22background:#1e40af;color:white;border:none;padding:13px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20✅\x20Log\x20This\x20Charge\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TAB:\x20Bank\x20Fee\x20Reference\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22bank-tab-info\x22\x20class=\x22bank-tab-content\x22\x20style=\x22padding:18px;display:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:grid;gap:10px;\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '#f0fdf4', '✅\x20KSh\x20', 'button[onclick*=\x22showTxModal\x22]', 'style', '#a8001e', 'readonly', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fef2f2;border:1px\x20solid\x20#fecaca;border-radius:8px;padding:14px;text-align:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:20px;margin-bottom:6px;\x22>🤔</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:600;color:#991b1b;\x22>No\x20bank\x20alerts\x20detected</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:12px;color:#b91c1c;margin-top:4px;line-height:1.6;\x22>Make\x20sure\x20the\x20SMS\x20starts\x20with\x20the\x20bank\x20name\x20(e.g.\x20\x22Equity\x20Bank:\x22,\x20\x22KCB:\x22,\x20\x22Co-op\x20Bank:\x22)\x20and\x20includes\x20a\x20charge/fee\x20line.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#3b82f6;text-align:right;\x22>', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:10px;background:#f3f4f6;color:#6b7280;padding:2px\x207px;border-radius:20px;\x22>', '#004d32', 'filter', 'slice', 'Bank\x20Charges', 'Co-operative\x20Bank', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20style=\x22width:100%;border-collapse:collapse;font-size:11.5px;\x22\x20id=\x22fee-table-', '#bank-tab-', 'undefined', 'type', '434112cWaFnO', '#002580', '#bank-sms-input', 'desc', 'Card\x20Transaction', 'className', '#bank-manual-type', '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#f0fdf4;border-radius:8px;padding:10px;font-size:11px;color:#166534;line-height:1.7;margin-top:4px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Note:</strong>\x20Bank\x20charges\x20are\x20indicative.\x20Always\x20confirm\x20with\x20your\x20bank\x27s\x20official\x20tariff\x20guide\x20as\x20fees\x20are\x20updated\x20periodically.\x20ATM\x20charges\x20may\x20vary\x20by\x20ATM\x20network\x20(own\x20bank\x20vs.\x20other\x20bank).\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Status\x20bar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22bank-status\x22\x20style=\x22padding:10px\x2018px;background:#f9fafb;border-top:1px\x20solid\x20#f0f0f0;font-size:12px;color:#6b7280;display:none;\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', '#16a34a', 'readyState', 'getAll', 'cssText', 'EFT/Pesalink\x20Transfer', 'stanbic', 'KSh\x2035\x20+\x20KSh\x2030', 'DTB', 'groups', 'Service\x20Fee', 'coop', '50234sZGYhW', '#f9fafb', 'taskbar-clock', 'results', 'title', 'en-KE', '\x22\x20style=\x22padding:4px\x2012px;border:1.5px\x20solid\x20#e5e7eb;border-radius:20px;font-size:11px;font-weight:600;cursor:pointer;background:white;color:#374151;transition:all\x20.15s;\x22>', 'result', '2670280ESLZae', '3776742ZBUlku', 'random', '#005580', 'message', '\x20(KSh\x20', '#bank-parse-btn', 'absa', 'KSh\x20500–1,000', 'linear-gradient(135deg,#1e40af,#1e3a8a)', 'regex', 'entries', '#bank-close', '#c8102e', 'innerHTML', 'split', 'map', 'mobile-open', 'position:fixed;inset:0;z-index:7100;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,0.55);backdrop-filter:blur(10px);', '#f5f3ff', 'KSh\x2050', 'RTGS\x20Transfer', 'none', '</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', ';color:', 'Monthly\x20Account\x20Fee', 'display', '\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#ffffff;border-radius:16px;width:100%;max-width:580px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0\x2024px\x2080px\x20rgba(0,0,0,0.25);border:1px\x20solid\x20rgba(0,0,0,0.08);\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Header\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:linear-gradient(135deg,#1e3a8a,#1e40af);padding:20px\x2022px\x2016px;flex-shrink:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;justify-content:space-between;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:40px;height:40px;background:rgba(255,255,255,0.15);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;\x22>🏦</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22color:white;font-size:15px;font-weight:700;letter-spacing:-.01em;\x22>Bank\x20Charge\x20Tracker</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22color:rgba(255,255,255,0.75);font-size:11px;margin-top:1px;\x22>Equity\x20·\x20KCB\x20·\x20Co-op\x20·\x20NCBA\x20·\x20Absa\x20·\x20Stanbic\x20·\x20DTB</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22bank-close\x22\x20style=\x22background:rgba(255,255,255,0.15);border:none;color:white;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;\x22>×</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Tab\x20bar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;gap:4px;margin-top:14px;background:rgba(0,0,0,0.2);border-radius:8px;padding:3px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22bank-tab\x20active\x22\x20data-tab=\x22paste\x22\x20style=\x22flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:white;color:#1e3a8a;transition:all\x20.15s;\x22>📋\x20Paste\x20SMS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22bank-tab\x22\x20data-tab=\x22manual\x22\x20style=\x22flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:rgba(255,255,255,0.8);transition:all\x20.15s;\x22>✏️\x20Manual\x20Entry</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22bank-tab\x22\x20data-tab=\x22info\x22\x20style=\x22flex:1;padding:7px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:rgba(255,255,255,0.8);transition:all\x20.15s;\x22>ℹ️\x20Bank\x20Fees</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Body\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:1;overflow-y:auto;\x22\x20id=\x22bank-body\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20TAB:\x20Paste\x20SMS\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22bank-tab-paste\x22\x20class=\x22bank-tab-content\x22\x20style=\x22padding:18px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#eff6ff;border:1.5px\x20dashed\x20#93c5fd;border-radius:10px;padding:14px;margin-bottom:14px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:0\x200\x208px;font-size:12px;font-weight:600;color:#1e3a8a;\x22>How\x20to\x20use:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ol\x20style=\x22margin:0;padding-left:18px;font-size:12px;color:#1d4ed8;line-height:1.7;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Open\x20SMS\x20app\x20→\x20find\x20bank\x20alert\x20messages</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Long-press\x20→\x20Copy\x20the\x20full\x20alert\x20text</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Paste\x20one\x20or\x20multiple\x20alerts\x20below</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>Travis\x20extracts\x20the\x20charge\x20and\x20logs\x20it\x20instantly</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ol>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Bank\x20filter\x20chips\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;font-weight:600;color:#5a5a5a;text-transform:uppercase;letter-spacing:.06em;margin-bottom:7px;\x22>Filter\x20by\x20bank\x20(optional)</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;flex-wrap:wrap;gap:6px;\x22\x20id=\x22bank-chips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '#6d28d9', 'amount', 'Pesalink\x20Transfer', 'KSh\x2033\x20+\x20KSh\x2030', 'ncba', 'name', 'objectStore', 'transfer', '1qMEaAh', 'Logging…', '#eff8ff', 'Card\x20(domestic)', 'block', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border:1px\x20solid\x20#e5e7eb;border-radius:8px;padding:11px\x2013px;margin-bottom:8px;background:white;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:space-between;align-items:flex-start;gap:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex:1;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;align-items:center;gap:6px;margin-bottom:3px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:10px;font-weight:700;background:', 'bank-modal', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'readwrite', 'startsWith', '#006341', 'travisBanks', 'KSh\x20100–400', '\x20transaction', 'background', 'trim', 'KSh\x20100', 'atm', '<div\x20style=\x22font-size:11px;font-weight:600;color:#92400e;margin:10px\x200\x206px;text-transform:uppercase;letter-spacing:.05em;\x22>⚠️\x20Already\x20in\x20ledger\x20—\x20skipped</div>', 'KSh\x20300', 'kcb', 'active', 'parse', 'close', 'transactions', 'addEventListener', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border:1px\x20solid\x20#fde68a;border-radius:8px;padding:9px\x2013px;margin-bottom:6px;background:#fffbeb;opacity:0.8;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:space-between;align-items:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:10px;font-weight:700;background:#fef3c7;color:#92400e;padding:2px\x207px;border-radius:20px;\x22>', 'KSh\x2034–69\x20+\x20KSh\x2030\x20surcharge', '354208bxDvEh', 'reduce', 'insertBefore', 'taskbar-btn', '#991b1b', 'Free', 'Account\x20Fee', '\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'includes', '\x20—\x20', 'has', 'dash', 'Monthly\x20Maintenance', 'taskbar', '#bank-results', 'fee-body-', 'tb-banks', 'Bills', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22padding:5px\x2010px;font-size:11px;font-weight:700;color:', 'KSh\x2035', 'KSh\x20200', 'dtb', 'transparent', 'now', 'Monthly\x20Service\x20Fee', 'onclick', 'fee', 'target', 'RTGS/EFT\x20Transfer', 'Maintenance\x20Fee', '#5b21b6', 'push', '⏳\x20Checking…', '3270830shrnvv', 'bank', 'nav-sidebar', '33aonGlJ', 'match', '\x20new\x20transaction', 'div', '#374151', 'charge', '#fff0f2', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fffbeb;border:1px\x20solid\x20#fde68a;border-radius:8px;padding:12px;text-align:center;margin-top:6px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:13px;font-weight:600;color:#92400e;\x22>All\x20transactions\x20already\x20logged</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:12px;color:#b45309;margin-top:3px;\x22>No\x20new\x20charges\x20to\x20import.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'maintenance', '<div\x20style=\x22font-size:11px;color:#9ca3af;padding:6px\x202px;\x22>', 'equity', 'ATM\x20Withdrawal', '\x20Logged!', 'Monthly\x20Ledger\x20Fee', 'white', 'toString', 'nav-item', '#9b0c23', 'EFT\x20Transfer', 'feeIsAmount', '5EeuMyW', 'DOMContentLoaded', 'KSh\x2033', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'KSh\x20150', '<span\x20class=\x22nav-icon\x22>🏦</span>\x20Bank\x20Charges', '#1e3a8a', '#ff6600', 'Stanbic\x20Bank', 'label', 'ATM\x20Withdrawal\x20(own)', 'value', 'Absa\x20Bank', 'error', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22bank-chip\x22\x20data-bank=\x22', 'Ledger\x20Fee', 'tab', '#0072aa', '</option>', 'createElement', 'appendChild', ';padding:2px\x208px;border-radius:20px;border:1px\x20solid\x20', '#eff6ff', 'unshift', 'toUpperCase', ';padding:8px\x2012px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:white;font-size:12px;font-weight:700;\x22>', '#e5e7eb', 'function', 'KSh\x20210', 'onsuccess', 'loading', 'nav-banks'];
    _0x1c36 = function() {
        return _0x1b5fd5;
    };
    return _0x1c36();
}(function(_0x38a201, _0x45fec9) {
    const _0x3493ba = _0x53bc,
        _0x14886b = _0x38a201();
    while (!![]) {
        try {
            const _0x3d3d26 = parseInt(_0x3493ba(0x16c)) / 0x1 * (parseInt(_0x3493ba(0x140)) / 0x2) + parseInt(_0x3493ba(0x12d)) / 0x3 + -parseInt(_0x3493ba(0x90)) / 0x4 * (parseInt(_0x3493ba(0xc8)) / 0x5) + parseInt(_0x3493ba(0xf3)) / 0x6 + parseInt(_0x3493ba(0xed)) / 0x7 * (-parseInt(_0x3493ba(0x148)) / 0x8) + -parseInt(_0x3493ba(0x149)) / 0x9 + -parseInt(_0x3493ba(0xb1)) / 0xa * (-parseInt(_0x3493ba(0xb4)) / 0xb);
            if (_0x3d3d26 === _0x45fec9) break;
            else _0x14886b['push'](_0x14886b['shift']());
        } catch (_0x17a56a) {
            _0x14886b['push'](_0x14886b['shift']());
        }
    }
}(_0x1c36, 0xc679b), (function() {
    'use strict';
    const _0x1e3365 = _0x53bc;
    const _0x50f610 = {
            'equity': {
                'name': 'Equity\x20Bank',
                'color': _0x1e3365(0x155),
                'bg': _0x1e3365(0xba),
                'accent': _0x1e3365(0xc5)
            },
            'kcb': {
                'name': 'KCB',
                'color': _0x1e3365(0x176),
                'bg': _0x1e3365(0x11b),
                'accent': _0x1e3365(0x124)
            },
            'coop': {
                'name': _0x1e3365(0x128),
                'color': _0x1e3365(0x111),
                'bg': _0x1e3365(0xde),
                'accent': _0x1e3365(0x12e)
            },
            'ncba': {
                'name': _0x1e3365(0xfb),
                'color': _0x1e3365(0x164),
                'bg': _0x1e3365(0x15b),
                'accent': _0x1e3365(0xae)
            },
            'absa': {
                'name': _0x1e3365(0xd4),
                'color': '#dc0028',
                'bg': _0x1e3365(0xba),
                'accent': _0x1e3365(0x11f)
            },
            'stanbic': {
                'name': _0x1e3365(0xd0),
                'color': _0x1e3365(0xd9),
                'bg': _0x1e3365(0x16e),
                'accent': _0x1e3365(0x14b)
            },
            'dtb': {
                'name': _0x1e3365(0x13c),
                'color': _0x1e3365(0xcf),
                'bg': '#fff7ed',
                'accent': _0x1e3365(0xe8)
            }
        },
        _0x2f7460 = [{
            'bank': _0x1e3365(0xbe),
            'type': _0x1e3365(0x17d),
            'label': _0x1e3365(0xbf),
            'regex': /Equity Bank.*?KShs?\s*([\d,]+\.?\d*)\s+withdrawn.*?(?:Ref[:\s]+([A-Z0-9]+))?.*?Charges?[:\s]+KShs?\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0xbe),
            'type': 'transfer',
            'label': _0x1e3365(0x139),
            'regex': /Equity Bank.*?KShs?\s*([\d,]+\.?\d*)\s+transferred.*?Ref[:\s]+([A-Z0-9]+).*?Charges?[:\s]+KShs?\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0xbe),
            'type': _0x1e3365(0xf2),
            'label': _0x1e3365(0x131),
            'regex': /Equity Bank.*?Purchase of KShs?\s*([\d,]+\.?\d*).*?Card\s+([A-Z0-9X]+).*?Charges?[:\s]+KShs?\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0xbe),
            'type': _0x1e3365(0xbc),
            'label': 'Maintenance\x20Fee',
            'regex': /Equity Bank.*?(?:maintenance|ledger)\s+fee\s+of\s+KShs?\s*([\d,]+\.?\d*)\s+deducted.*?(?:on\s+([\d/]+))/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': null
            },
            'feeIsAmount': !![]
        }, {
            'bank': 'kcb',
            'type': 'atm',
            'label': _0x1e3365(0xbf),
            'regex': /KCB[:\s].*?Ksh\s*([\d,]+\.?\d*)\s+withdrawn.*?(?:TXN\s+ID[:\s]+([A-Z0-9]+))?.*?Charge\s+Ksh\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0x88),
            'type': _0x1e3365(0x16b),
            'label': _0x1e3365(0xc6),
            'regex': /KCB[:\s].*?Ksh\s*([\d,]+\.?\d*)\s+sent.*?TXN\s+ID[:\s]+([A-Z0-9]+).*?Charge\s+Ksh\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0x88),
            'type': _0x1e3365(0xf2),
            'label': 'Card\x20Transaction',
            'regex': /KCB[:\s].*?Ksh\s*([\d,]+\.?\d*)\s+spent.*?Card\s+([A-Z0-9X]+).*?Charge\s+Ksh\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0x88),
            'type': _0x1e3365(0xbc),
            'label': _0x1e3365(0xd7),
            'regex': /KCB[:\s].*?(?:ledger|maintenance)\s+fee\s+of\s+Ksh\s*([\d,]+\.?\d*)\s+deducted.*?(?:on\s+([\d\-/]+))/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': null
            },
            'feeIsAmount': !![]
        }, {
            'bank': _0x1e3365(0x13f),
            'type': _0x1e3365(0x17d),
            'label': _0x1e3365(0xbf),
            'regex': /Co-?op\s+Bank[:\s].*?Ksh\s*([\d,]+\.?\d*)\s+withdrawn.*?(?:Ref[:\s]+([A-Z0-9]+))?.*?Fee[:\s]+Ksh\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': 'coop',
            'type': _0x1e3365(0x16b),
            'label': 'EFT/Pesalink\x20Transfer',
            'regex': /Co-?op\s+Bank[:\s].*?Ksh\s*([\d,]+\.?\d*)\s+(?:transferred|sent).*?Ref[:\s]+([A-Z0-9]+).*?Fee[:\s]+Ksh\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0x13f),
            'type': _0x1e3365(0xf2),
            'label': 'Card\x20Transaction',
            'regex': /Co-?op\s+Bank[:\s].*?Purchase of Ksh\s*([\d,]+\.?\d*).*?Card ending\s+(\d+).*?Fee[:\s]+Ksh\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': 'coop',
            'type': 'maintenance',
            'label': 'Maintenance\x20Fee',
            'regex': /Co-?op\s+Bank[:\s].*?(?:maintenance|ledger)\s+fee\s+of\s+Ksh\s*([\d,]+\.?\d*)\s+deducted.*?(?:on\s+([\d/]+))/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': null
            },
            'feeIsAmount': !![]
        }, {
            'bank': _0x1e3365(0x168),
            'type': _0x1e3365(0x17d),
            'label': _0x1e3365(0xbf),
            'regex': /NCBA(?:\s+Loop)?[:\s].*?KES\s*([\d,]+\.?\d*)\s+withdrawn.*?(?:Ref[:\s]+([A-Z0-9]+))?.*?Charge[:\s]+KES\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': 'ncba',
            'type': _0x1e3365(0x16b),
            'label': 'EFT\x20Transfer',
            'regex': /NCBA(?:\s+(?:Bank|Loop))?[:\s].*?KES\s*([\d,]+\.?\d*)\s+transferred.*?Ref[:\s]+([A-Z0-9]+).*?Charge[:\s]+KES\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': 'ncba',
            'type': _0x1e3365(0xf2),
            'label': _0x1e3365(0x131),
            'regex': /NCBA(?:\s+Loop)?[:\s].*?KES\s*([\d,]+\.?\d*)\s+spent.*?Card\s+([A-Z0-9X]+).*?Charge[:\s]+KES\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0x168),
            'type': _0x1e3365(0xbc),
            'label': 'Maintenance\x20Fee',
            'regex': /NCBA(?:\s+Bank)?[:\s].*?(?:maintenance|ledger)\s+fee\s+of\s+KES\s*([\d,]+\.?\d*)\s+deducted.*?(?:on\s+([\d/]+))/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': null
            },
            'feeIsAmount': !![]
        }, {
            'bank': _0x1e3365(0x14f),
            'type': _0x1e3365(0x17d),
            'label': _0x1e3365(0xbf),
            'regex': /Absa\s+Bank[:\s].*?KES\s*([\d,]+\.?\d*)\s+withdrawn.*?(?:Ref[:\s]+([A-Z0-9]+))?.*?Charge[:\s]+KES\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0x14f),
            'type': _0x1e3365(0x16b),
            'label': _0x1e3365(0xac),
            'regex': /Absa\s+Bank[:\s].*?KES\s*([\d,]+\.?\d*)\s+(?:RTGS\s+transfer|transferred).*?Ref[:\s]+([A-Z0-9]+).*?Charge[:\s]+KES\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0x14f),
            'type': _0x1e3365(0xf2),
            'label': 'Card\x20Purchase',
            'regex': /Absa\s+Bank[:\s].*?Card purchase of KES\s*([\d,]+\.?\d*).*?Card\s+([A-Z0-9X]+).*?Charge[:\s]+KES\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0x14f),
            'type': _0x1e3365(0xbc),
            'label': _0x1e3365(0x96),
            'regex': /Absa\s+Bank[:\s].*?(?:account|monthly)\s+fee\s+of\s+KES\s*([\d,]+\.?\d*)\s+charged.*?(?:on\s+([\d/]+))/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': null
            },
            'feeIsAmount': !![]
        }, {
            'bank': _0x1e3365(0x13a),
            'type': _0x1e3365(0x17d),
            'label': 'ATM\x20Withdrawal',
            'regex': /Stanbic\s+Bank[:\s].*?Ksh\s*([\d,]+\.?\d*)\s+withdrawn.*?(?:Ref\s+([A-Z0-9]+))?.*?Fee\s+Ksh\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0x13a),
            'type': 'transfer',
            'label': _0x1e3365(0xc6),
            'regex': /Stanbic\s+Bank[:\s].*?Ksh\s*([\d,]+\.?\d*)\s+transferred.*?Ref\s+([A-Z0-9]+).*?Fee\s+Ksh\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0x13a),
            'type': _0x1e3365(0xf2),
            'label': 'Card\x20Transaction',
            'regex': /Stanbic\s+Bank[:\s].*?Ksh\s*([\d,]+\.?\d*)\s+charged.*?Card\s+\*?([0-9]+).*?Fee\s+Ksh\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0x13a),
            'type': _0x1e3365(0xbc),
            'label': _0x1e3365(0x13e),
            'regex': /Stanbic\s+Bank[:\s].*?(?:service|maintenance)\s+fee\s+of\s+Ksh\s*([\d,]+\.?\d*)\s+deducted.*?(?:on\s+([\d/]+))/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': null
            },
            'feeIsAmount': !![]
        }, {
            'bank': 'dtb',
            'type': 'atm',
            'label': _0x1e3365(0xbf),
            'regex': /DTB[:\s].*?KES\s*([\d,]+\.?\d*)\s+withdrawn.*?(?:Ref\s+([A-Z0-9]+))?.*?Charge\s+KES\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0xa5),
            'type': 'transfer',
            'label': 'EFT\x20Transfer',
            'regex': /DTB[:\s].*?KES\s*([\d,]+\.?\d*)\s+transferred.*?Ref\s+([A-Z0-9]+).*?Charge\s+KES\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0xa5),
            'type': _0x1e3365(0xf2),
            'label': _0x1e3365(0x131),
            'regex': /DTB[:\s].*?KES\s*([\d,]+\.?\d*)\s+spent.*?Card\s+([A-Z0-9X]+).*?Charge\s+KES\s*([\d,]+\.?\d*)/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': 0x3
            }
        }, {
            'bank': _0x1e3365(0xa5),
            'type': _0x1e3365(0xbc),
            'label': _0x1e3365(0xd7),
            'regex': /DTB[:\s].*?(?:ledger|maintenance)\s+fee\s+KES\s*([\d,]+\.?\d*)\s+deducted.*?(?:on\s+([\d/]+))/i,
            'groups': {
                'amount': 0x1,
                'ref': 0x2,
                'charge': null
            },
            'feeIsAmount': !![]
        }];

    function _0x541a08(_0x597fe9) {
        const _0x11f0c0 = _0x1e3365,
            _0x13cca8 = _0x597fe9['trim']();
        if (!_0x13cca8) return null;
        for (const _0x430e61 of _0x2f7460) {
            const _0x160d0b = _0x13cca8[_0x11f0c0(0xb5)](_0x430e61[_0x11f0c0(0x152)]);
            if (!_0x160d0b) continue;
            const _0x3cad53 = _0x430e61[_0x11f0c0(0x13d)],
                _0x2f37ae = parseFloat((_0x160d0b[_0x3cad53['amount']] || '0')[_0x11f0c0(0xf9)](/,/g, '')),
                _0x5a84b8 = _0x430e61[_0x11f0c0(0xc7)] ? _0x2f37ae : _0x3cad53[_0x11f0c0(0xb9)] && _0x160d0b[_0x3cad53['charge']] ? parseFloat(_0x160d0b[_0x3cad53[_0x11f0c0(0xb9)]][_0x11f0c0(0xf9)](/,/g, '')) : 0x0;
            let _0x2a4f39 = _0x3cad53[_0x11f0c0(0x10c)] && _0x160d0b[_0x3cad53[_0x11f0c0(0x10c)]] ? _0x160d0b[_0x3cad53['ref']][_0x11f0c0(0x17b)]() : null;
            if (!_0x2a4f39) {
                const _0x490723 = _0x13cca8[_0x11f0c0(0xb5)](/(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/),
                    _0x17257e = _0x490723 ? _0x490723[0x1][_0x11f0c0(0xf9)](/[\/\-]/g, '') : Date[_0x11f0c0(0xa7)]()[_0x11f0c0(0xc3)]()[_0x11f0c0(0x126)](-0x6);
                _0x2a4f39 = _0x430e61[_0x11f0c0(0xb2)][_0x11f0c0(0xe0)]() + '_' + _0x430e61['type'][_0x11f0c0(0xe0)]() + '_' + Math['round'](_0x2f37ae) + '_' + _0x17257e;
            }
            return {
                'bank': _0x430e61['bank'],
                'type': _0x430e61[_0x11f0c0(0x12c)],
                'label': _0x430e61['label'],
                'ref': _0x2a4f39,
                'amount': _0x2f37ae,
                'charge': _0x5a84b8,
                'raw': _0x13cca8
            };
        }
        return null;
    }

    function _0x3081f9(_0x380603) {
        const _0x4eb1a4 = _0x1e3365,
            _0xcf4416 = _0x380603[_0x4eb1a4(0x157)](/\n{2,}|(?=(?:Equity Bank|KCB|Co-?op\s+Bank|NCBA|Absa\s+Bank|Stanbic\s+Bank|DTB)[:\s])/gi)['map'](_0x2d04af => _0x2d04af['trim']())[_0x4eb1a4(0x125)](_0x2c7dc6 => _0x2c7dc6[_0x4eb1a4(0x103)] > 0xa),
            _0x2fb399 = [],
            _0x3aff6c = new Set();
        for (const _0xf8e977 of _0xcf4416) {
            const _0x31288a = _0x541a08(_0xf8e977);
            if (!_0x31288a) continue;
            if (_0x3aff6c[_0x4eb1a4(0x9a)](_0x31288a[_0x4eb1a4(0x10c)])) continue;
            _0x3aff6c[_0x4eb1a4(0x119)](_0x31288a['ref']), _0x2fb399[_0x4eb1a4(0xaf)](_0x31288a);
        }
        return _0x2fb399;
    }

    function _0x36efc7() {
        return new Promise(_0x1907e2 => {
            const _0x15086c = _0x53bc;
            try {
                const _0x1fb516 = indexedDB[_0x15086c(0x107)](_0x15086c(0xea), 0x1);
                _0x1fb516[_0x15086c(0xe5)] = _0x159329 => {
                    const _0x2f5c9a = _0x15086c,
                        _0x1aff1c = _0x159329[_0x2f5c9a(0xab)][_0x2f5c9a(0x147)];
                    if (!_0x1aff1c['objectStoreNames']['contains']('tx')) {
                        _0x1aff1c[_0x2f5c9a(0x8b)](), _0x1907e2(new Set());
                        return;
                    }
                    const _0x1a1cde = _0x1aff1c[_0x2f5c9a(0x10f)]('tx', _0x2f5c9a(0x120)),
                        _0x40d85c = _0x1a1cde[_0x2f5c9a(0x16a)]('tx'),
                        _0x35d2db = _0x40d85c[_0x2f5c9a(0x137)]();
                    _0x35d2db[_0x2f5c9a(0xe5)] = () => {
                        const _0x3bf376 = _0x2f5c9a;
                        _0x1aff1c[_0x3bf376(0x8b)]();
                        const _0x46d07e = new Set();
                        (_0x35d2db['result'] || [])[_0x3bf376(0x101)](_0x4ba556 => {
                            const _0xae788a = _0x3bf376,
                                _0x146af6 = (_0x4ba556[_0xae788a(0x130)] || '')[_0xae788a(0xb5)](/\(([A-Z0-9_]+)\)$/);
                            if (_0x146af6) _0x46d07e[_0xae788a(0x119)](_0x146af6[0x1]);
                        }), _0x1907e2(_0x46d07e);
                    }, _0x35d2db[_0x2f5c9a(0x100)] = () => {
                        _0x1aff1c['close'](), _0x1907e2(new Set());
                    };
                }, _0x1fb516[_0x15086c(0x100)] = () => _0x1907e2(new Set());
            } catch (_0x11b5af) {
                _0x1907e2(new Set());
            }
        });
    }
    async function _0x3ee6b8(_0x58f67b) {
        const _0x377d5b = _0x1e3365;
        if (_0x58f67b[_0x377d5b(0xb9)] <= 0x0) return null;
        const _0x52bf93 = _0x50f610[_0x58f67b['bank']] || {
                'name': _0x58f67b[_0x377d5b(0xb2)]
            },
            _0x2838d5 = _0x377d5b(0x102) + _0x52bf93['name'] + '\x20' + _0x58f67b[_0x377d5b(0xd1)] + _0x377d5b(0xf4) + _0x58f67b['amount']['toLocaleString'](_0x377d5b(0x145)) + '\x20(' + _0x58f67b[_0x377d5b(0x10c)] + ')',
            _0x58925e = {
                'id': Date[_0x377d5b(0xa7)]() + Math['floor'](Math[_0x377d5b(0x14a)]() * 0x3e8),
                'debit': _0x377d5b(0xa1),
                'credit': _0x52bf93[_0x377d5b(0x169)],
                'amount': _0x58f67b[_0x377d5b(0xb9)],
                'desc': _0x2838d5
            };
        return typeof saveData === _0x377d5b(0xe3) && typeof state !== _0x377d5b(0x12b) ? (await saveData('tx', _0x58925e), state['transactions'][_0x377d5b(0xdf)](_0x58925e)) : await _0x4d9e5a(_0x58925e), _0x58925e;
    }

    function _0x4d9e5a(_0x4b542c) {
        return new Promise((_0x1a886e, _0x19ec9f) => {
            const _0x3a7cfb = _0x53bc,
                _0x1a40cc = indexedDB['open'](_0x3a7cfb(0xea), 0x1);
            _0x1a40cc['onsuccess'] = _0x30a47a => {
                const _0x22bb9e = _0x3a7cfb,
                    _0x5e4b0f = _0x30a47a[_0x22bb9e(0xab)][_0x22bb9e(0x147)],
                    _0x9cdf78 = _0x5e4b0f[_0x22bb9e(0x10f)]('tx', _0x22bb9e(0x174)),
                    _0x35dac6 = _0x9cdf78['objectStore']('tx'),
                    _0x1372d2 = _0x35dac6['put'](_0x4b542c);
                _0x1372d2['onsuccess'] = () => {
                    const _0xdd5f3b = _0x22bb9e;
                    _0x5e4b0f[_0xdd5f3b(0x8b)](), _0x1a886e();
                }, _0x1372d2[_0x22bb9e(0x100)] = () => {
                    const _0x390e4b = _0x22bb9e;
                    _0x5e4b0f[_0x390e4b(0x8b)](), _0x19ec9f(_0x1372d2[_0x390e4b(0xd5)]);
                };
            }, _0x1a40cc[_0x3a7cfb(0x100)] = () => _0x19ec9f(_0x1a40cc[_0x3a7cfb(0xd5)]);
        });
    }

    function _0x446fd7() {
        const _0x38816c = _0x1e3365,
            _0x39968f = document[_0x38816c(0xfe)](_0x38816c(0x172));
        if (_0x39968f) {
            _0x39968f[_0x38816c(0x11e)][_0x38816c(0x162)] = _0x38816c(0x116);
            return;
        }
        const _0x50ee2f = document[_0x38816c(0xdb)](_0x38816c(0xb7));
        _0x50ee2f['id'] = _0x38816c(0x172), _0x50ee2f[_0x38816c(0x11e)][_0x38816c(0x138)] = _0x38816c(0x15a), _0x50ee2f['innerHTML'] = _0x38816c(0x163) + Object[_0x38816c(0x153)](_0x50f610)['map'](([_0x474208, _0x19120a]) => _0x38816c(0xd6) + _0x474208 + _0x38816c(0x146) + _0x19120a['name'] + _0x38816c(0x15f))[_0x38816c(0x113)]('') + _0x38816c(0xee) + Object[_0x38816c(0x153)](_0x50f610)[_0x38816c(0x158)](([_0x2697bc, _0x57cb08]) => _0x38816c(0xec) + _0x2697bc + '\x22>' + _0x57cb08['name'] + _0x38816c(0xda))[_0x38816c(0x113)]('') + _0x38816c(0x11a) + Object[_0x38816c(0x153)](_0x50f610)['map'](([_0x367ec6, _0x1cb2f7]) => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border:1px\x20solid\x20#e5e7eb;border-radius:10px;overflow:hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:' + _0x1cb2f7[_0x38816c(0x109)] + _0x38816c(0xe1) + _0x1cb2f7['name'] + _0x38816c(0x129) + _0x367ec6 + _0x38816c(0xf1) + _0x367ec6 + _0x38816c(0x97))['join']('') + _0x38816c(0x134), document['body'][_0x38816c(0xdc)](_0x50ee2f), _0x53f6c2(_0x50ee2f), _0x1dfb26();
    }

    function _0x53f6c2(_0x5bddfe) {
        const _0x14abda = _0x1e3365;
        _0x5bddfe[_0x14abda(0x106)](_0x14abda(0x154))[_0x14abda(0xa9)] = () => {
            const _0x593377 = _0x14abda;
            _0x5bddfe['style'][_0x593377(0x162)] = _0x593377(0x15e);
        }, _0x5bddfe['onclick'] = _0x43cbfc => {
            const _0xb6f73d = _0x14abda;
            if (_0x43cbfc[_0xb6f73d(0xab)] === _0x5bddfe) _0x5bddfe[_0xb6f73d(0x11e)]['display'] = _0xb6f73d(0x15e);
        }, _0x5bddfe[_0x14abda(0xfc)]('.bank-tab')['forEach'](_0x58e029 => {
            _0x58e029['onclick'] = () => {
                const _0x5b6be3 = _0x53bc;
                _0x5bddfe[_0x5b6be3(0xfc)]('.bank-tab')[_0x5b6be3(0x101)](_0x2b77b9 => {
                    const _0x382d5d = _0x5b6be3;
                    _0x2b77b9[_0x382d5d(0x11e)]['background'] = _0x382d5d(0xa6), _0x2b77b9[_0x382d5d(0x11e)][_0x382d5d(0x109)] = 'rgba(255,255,255,0.8)';
                }), _0x58e029['style'][_0x5b6be3(0x17a)] = _0x5b6be3(0xc2), _0x58e029[_0x5b6be3(0x11e)][_0x5b6be3(0x109)] = _0x5b6be3(0xce), _0x5bddfe[_0x5b6be3(0xfc)](_0x5b6be3(0x115))[_0x5b6be3(0x101)](_0x1104cd => _0x1104cd[_0x5b6be3(0x11e)][_0x5b6be3(0x162)] = 'none'), _0x5bddfe[_0x5b6be3(0x106)](_0x5b6be3(0x12a) + _0x58e029['dataset'][_0x5b6be3(0xd8)])[_0x5b6be3(0x11e)]['display'] = _0x5b6be3(0x170);
            };
        }), _0x5bddfe[_0x14abda(0xfc)](_0x14abda(0xf8))[_0x14abda(0x101)](_0x1f4160 => {
            const _0x35e58e = _0x14abda;
            _0x1f4160[_0x35e58e(0xa9)] = () => {
                const _0x1cbed0 = _0x35e58e,
                    _0x32c0a7 = _0x1f4160[_0x1cbed0(0x10e)][_0x1cbed0(0x89)] === '1';
                if (_0x32c0a7) _0x1f4160[_0x1cbed0(0x10e)][_0x1cbed0(0x89)] = '0', _0x1f4160['style'][_0x1cbed0(0x17a)] = _0x1cbed0(0xc2), _0x1f4160[_0x1cbed0(0x11e)]['color'] = _0x1cbed0(0xb8), _0x1f4160[_0x1cbed0(0x11e)][_0x1cbed0(0xfd)] = _0x1cbed0(0xe2);
                else {
                    const _0x30a6bd = _0x50f610[_0x1f4160[_0x1cbed0(0x10e)][_0x1cbed0(0xb2)]];
                    _0x1f4160[_0x1cbed0(0x10e)][_0x1cbed0(0x89)] = '1', _0x1f4160[_0x1cbed0(0x11e)][_0x1cbed0(0x17a)] = _0x30a6bd['color'], _0x1f4160[_0x1cbed0(0x11e)]['color'] = _0x1cbed0(0xc2), _0x1f4160['style'][_0x1cbed0(0xfd)] = _0x30a6bd[_0x1cbed0(0x109)];
                }
            };
        }), _0x5bddfe['querySelector']('#bank-clear-btn')[_0x14abda(0xa9)] = () => {
            const _0x3538af = _0x14abda;
            _0x5bddfe[_0x3538af(0x106)](_0x3538af(0x12f))['value'] = '', _0x5bddfe[_0x3538af(0x106)](_0x3538af(0x9e))[_0x3538af(0x11e)][_0x3538af(0x162)] = _0x3538af(0x15e);
        }, _0x5bddfe[_0x14abda(0x106)](_0x14abda(0x14e))[_0x14abda(0xa9)] = () => _0xcfd6d4(_0x5bddfe), _0x5bddfe[_0x14abda(0x106)](_0x14abda(0x108))[_0x14abda(0xa9)] = () => _0x429e4b(_0x5bddfe), _0x5bddfe['querySelector'](_0x14abda(0x117))['onclick'] = () => _0x4abaac(_0x5bddfe);
    }
    async function _0xcfd6d4(_0x143cc6) {
        const _0x245b0d = _0x1e3365,
            _0x17939c = _0x143cc6['querySelector'](_0x245b0d(0x14e)),
            _0x3ebbe5 = _0x143cc6['querySelector'](_0x245b0d(0x12f))[_0x245b0d(0xd3)],
            _0x2e6310 = _0x143cc6['querySelector'](_0x245b0d(0x9e)),
            _0x50250c = _0x143cc6[_0x245b0d(0x106)]('#bank-results-inner'),
            _0x4e99da = _0x143cc6[_0x245b0d(0x106)](_0x245b0d(0x108)),
            _0x5dbf9d = [..._0x143cc6[_0x245b0d(0xfc)]('.bank-chip[data-active=\x221\x22]')][_0x245b0d(0x158)](_0x9f83b8 => _0x9f83b8[_0x245b0d(0x10e)][_0x245b0d(0xb2)]);
        _0x17939c[_0x245b0d(0x112)] = _0x245b0d(0xb0), _0x17939c['disabled'] = !![];
        const _0x5751d1 = await _0x36efc7();
        _0x17939c[_0x245b0d(0x112)] = '🔍\x20Extract\x20Charges', _0x17939c[_0x245b0d(0x10d)] = ![];
        let _0x131785 = _0x3081f9(_0x3ebbe5);
        _0x5dbf9d[_0x245b0d(0x103)] > 0x0 && (_0x131785 = _0x131785[_0x245b0d(0x125)](_0x259afa => _0x5dbf9d[_0x245b0d(0x98)](_0x259afa[_0x245b0d(0xb2)])));
        if (_0x131785['length'] === 0x0) {
            _0x50250c['innerHTML'] = _0x245b0d(0x121), _0x2e6310[_0x245b0d(0x11e)][_0x245b0d(0x162)] = _0x245b0d(0x170), _0x4e99da[_0x245b0d(0x11e)]['display'] = 'none';
            return;
        }
        const _0x26a189 = _0x131785[_0x245b0d(0x125)](_0x2426b6 => _0x2426b6[_0x245b0d(0xb9)] > 0x0 && !_0x5751d1[_0x245b0d(0x9a)](_0x2426b6[_0x245b0d(0x10c)])),
            _0x2708d3 = _0x131785[_0x245b0d(0x125)](_0x119b6b => _0x119b6b[_0x245b0d(0xb9)] > 0x0 && _0x5751d1[_0x245b0d(0x9a)](_0x119b6b[_0x245b0d(0x10c)])),
            _0x374583 = _0x131785[_0x245b0d(0x125)](_0x3e6ee2 => _0x3e6ee2[_0x245b0d(0xb9)] === 0x0);
        let _0xa045af = '';
        if (_0x26a189['length'] > 0x0) {
            const _0x5a7d85 = _0x26a189[_0x245b0d(0x91)]((_0x947566, _0x52567d) => _0x947566 + _0x52567d[_0x245b0d(0xb9)], 0x0);
            _0xa045af += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#eff6ff;border:1px\x20solid\x20#bfdbfe;border-radius:8px;padding:10px\x2014px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;font-weight:600;color:#1e3a8a;text-transform:uppercase;letter-spacing:.05em;\x22>Total\x20New\x20Charges</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:20px;font-weight:800;color:#1d4ed8;\x22>KSh\x20' + _0x5a7d85[_0x245b0d(0xf0)](_0x245b0d(0x145)) + _0x245b0d(0x122) + _0x26a189[_0x245b0d(0x103)] + _0x245b0d(0xb6) + (_0x26a189[_0x245b0d(0x103)] !== 0x1 ? 's' : '') + _0x245b0d(0xcb);
        }
        _0x26a189[_0x245b0d(0x101)](_0x48acfb => {
            const _0xff183f = _0x245b0d,
                _0x4f7906 = _0x50f610[_0x48acfb[_0xff183f(0xb2)]] || {
                    'name': _0x48acfb[_0xff183f(0xb2)],
                    'color': _0xff183f(0xb8),
                    'bg': '#f9fafb'
                };
            _0xa045af += _0xff183f(0x171) + (_0x4f7906['bg'] || '#f0f0f0') + _0xff183f(0x160) + _0x4f7906[_0xff183f(0x109)] + _0xff183f(0xdd) + _0x4f7906['color'] + '20;\x22>' + _0x4f7906[_0xff183f(0x169)] + _0xff183f(0x123) + _0x48acfb['label'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#6b7280;margin-top:3px;font-family:monospace;\x22>' + _0x48acfb[_0xff183f(0x10c)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#6b7280;margin-top:1px;\x22>Transaction:\x20KSh\x20' + _0x48acfb[_0xff183f(0x165)][_0xff183f(0xf0)](_0xff183f(0x145)) + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:right;flex-shrink:0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:#6b7280;\x22>Charge</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:17px;font-weight:800;color:#dc2626;\x22>KSh\x20' + _0x48acfb[_0xff183f(0xb9)][_0xff183f(0xf0)](_0xff183f(0x145)) + _0xff183f(0x173);
        }), _0x2708d3[_0x245b0d(0x103)] > 0x0 && (_0xa045af += _0x245b0d(0x17e), _0x2708d3[_0x245b0d(0x101)](_0x78dcba => {
            const _0x278686 = _0x245b0d,
                _0x584de8 = _0x50f610[_0x78dcba['bank']] || {
                    'name': _0x78dcba['bank']
                };
            _0xa045af += _0x278686(0x8e) + _0x584de8[_0x278686(0x169)] + _0x278686(0x99) + _0x78dcba[_0x278686(0xd1)] + _0x278686(0x10a) + _0x78dcba[_0x278686(0xb9)]['toLocaleString'](_0x278686(0x145)) + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';
        })), _0x374583[_0x245b0d(0x103)] > 0x0 && (_0xa045af += _0x245b0d(0xbd) + _0x374583['length'] + _0x245b0d(0x179) + (_0x374583['length'] !== 0x1 ? 's' : '') + _0x245b0d(0x10b)), _0x26a189[_0x245b0d(0x103)] === 0x0 && _0x131785[_0x245b0d(0x103)] > 0x0 && (_0xa045af += _0x245b0d(0xbb)), _0x50250c['innerHTML'] = _0xa045af, _0x2e6310[_0x245b0d(0x11e)]['display'] = _0x245b0d(0x170), _0x4e99da['style'][_0x245b0d(0x162)] = _0x26a189[_0x245b0d(0x103)] > 0x0 ? _0x245b0d(0x170) : _0x245b0d(0x15e), _0x4e99da[_0x245b0d(0x10e)][_0x245b0d(0x143)] = JSON['stringify'](_0x26a189);
    }
    async function _0x429e4b(_0x4341a3) {
        const _0x24d225 = _0x1e3365,
            _0x4f07b7 = _0x4341a3[_0x24d225(0x106)]('#bank-post-all'),
            _0x307db8 = JSON[_0x24d225(0x8a)](_0x4f07b7['dataset'][_0x24d225(0x143)] || '[]');
        if (!_0x307db8['length']) return;
        _0x4f07b7[_0x24d225(0x10d)] = !![], _0x4f07b7[_0x24d225(0x112)] = _0x24d225(0x16d);
        let _0x31de1f = 0x0,
            _0x54dca8 = 0x0;
        for (const _0x23503f of _0x307db8) {
            try {
                await new Promise(_0x4acb3e => setTimeout(_0x4acb3e, 0x1e));
                const _0x16b134 = await _0x3ee6b8(_0x23503f);
                _0x16b134 && (_0x31de1f++, _0x54dca8 += _0x23503f[_0x24d225(0xb9)]);
            } catch (_0x48c1c5) {
                console['error']('[BankTracker]\x20Failed\x20to\x20log:', _0x23503f[_0x24d225(0x10c)], _0x48c1c5);
            }
        }
        if (typeof saveBackup === 'function') try {
            await saveBackup();
        } catch (_0x3104f5) {}
        if (typeof nav === _0x24d225(0xe3)) try {
            nav('dash');
        } catch (_0x2ea46f) {}
        _0x4b8cc7(_0x4341a3, '✅\x20' + _0x31de1f + '\x20charge' + (_0x31de1f !== 0x1 ? 's' : '') + _0x24d225(0x14d) + _0x54dca8[_0x24d225(0xf0)](_0x24d225(0x145)) + ')\x20logged\x20as\x20Bills\x20expenses.'), _0x4f07b7[_0x24d225(0x112)] = '✅\x20' + _0x31de1f + '\x20Charge' + (_0x31de1f !== 0x1 ? 's' : '') + _0x24d225(0xc0), _0x4f07b7[_0x24d225(0x11e)][_0x24d225(0x17a)] = _0x24d225(0xce), setTimeout(() => {
            const _0x5b1622 = _0x24d225;
            _0x4341a3[_0x5b1622(0x106)](_0x5b1622(0x12f))[_0x5b1622(0xd3)] = '', _0x4341a3[_0x5b1622(0x106)](_0x5b1622(0x9e))[_0x5b1622(0x11e)][_0x5b1622(0x162)] = _0x5b1622(0x15e), _0x4f07b7['textContent'] = '✅\x20Log\x20All\x20Charges\x20to\x20Ledger', _0x4f07b7['style'][_0x5b1622(0x17a)] = _0x5b1622(0x151), _0x4f07b7['style'][_0x5b1622(0x162)] = _0x5b1622(0x15e), _0x4f07b7[_0x5b1622(0x10d)] = ![];
        }, 0xbb8);
    }
    async function _0x4abaac(_0x421823) {
        const _0x3fe616 = _0x1e3365,
            _0x20bf61 = _0x421823[_0x3fe616(0x106)]('#bank-manual-bank')[_0x3fe616(0xd3)],
            _0x25af06 = _0x421823['querySelector'](_0x3fe616(0x133))['value'],
            _0x544177 = parseFloat(_0x421823['querySelector'](_0x3fe616(0xeb))[_0x3fe616(0xd3)]) || 0x0,
            _0x22bc38 = _0x421823['querySelector']('#bank-manual-desc')[_0x3fe616(0xd3)][_0x3fe616(0x17b)]() || '',
            _0x4c807d = _0x421823[_0x3fe616(0x106)]('#bank-manual-log-btn');
        if (_0x544177 <= 0x0) {
            _0x4b8cc7(_0x421823, 'ℹ️\x20Please\x20enter\x20a\x20charge\x20amount\x20greater\x20than\x200.');
            return;
        }
        _0x4c807d['disabled'] = !![], _0x4c807d[_0x3fe616(0x112)] = _0x3fe616(0x16d);
        const _0x4b566d = {
                'atm': 'ATM\x20Withdrawal',
                'transfer': _0x3fe616(0xc6),
                'maintenance': _0x3fe616(0xad),
                'card': _0x3fe616(0x131)
            },
            _0x19dcee = {
                'bank': _0x20bf61,
                'type': _0x25af06,
                'label': _0x4b566d[_0x25af06] || _0x25af06,
                'ref': _0x3fe616(0x110),
                'amount': 0x0,
                'charge': _0x544177
            },
            _0x94395 = _0x50f610[_0x20bf61] || {
                'name': _0x20bf61
            },
            _0x37f715 = 'Bank\x20charge\x20—\x20' + _0x94395[_0x3fe616(0x169)] + '\x20' + _0x19dcee[_0x3fe616(0xd1)] + (_0x22bc38 ? _0x3fe616(0x99) + _0x22bc38 : '') + '\x20(MANUAL)',
            _0x43bc6c = {
                'id': Date[_0x3fe616(0xa7)]() + Math['floor'](Math['random']() * 0x3e8),
                'debit': _0x3fe616(0xa1),
                'credit': _0x94395[_0x3fe616(0x169)],
                'amount': _0x544177,
                'desc': _0x37f715
            };
        try {
            typeof saveData === _0x3fe616(0xe3) && typeof state !== _0x3fe616(0x12b) ? (await saveData('tx', _0x43bc6c), state[_0x3fe616(0x8c)][_0x3fe616(0xdf)](_0x43bc6c)) : await _0x4d9e5a(_0x43bc6c);
            if (typeof saveBackup === _0x3fe616(0xe3)) try {
                await saveBackup();
            } catch (_0x3d5093) {}
            if (typeof nav === _0x3fe616(0xe3)) try {
                nav(_0x3fe616(0x9b));
            } catch (_0x203ddf) {}
            _0x4b8cc7(_0x421823, _0x3fe616(0x11c) + _0x544177 + _0x3fe616(0xf5)), _0x421823[_0x3fe616(0x106)]('#bank-manual-charge')[_0x3fe616(0xd3)] = '', _0x421823[_0x3fe616(0x106)]('#bank-manual-desc')['value'] = '';
        } catch (_0x351b32) {
            _0x4b8cc7(_0x421823, '❌\x20Failed\x20to\x20log:\x20' + _0x351b32[_0x3fe616(0x14c)]);
        }
        _0x4c807d[_0x3fe616(0x10d)] = ![], _0x4c807d['textContent'] = '✅\x20Log\x20This\x20Charge';
    }
    const _0x37e528 = {
        'equity': [{
            'tx': _0x1e3365(0xd2),
            'fee': 'KSh\x2034–69'
        }, {
            'tx': _0x1e3365(0xff),
            'fee': _0x1e3365(0x8f)
        }, {
            'tx': 'EFT\x20Transfer',
            'fee': 'KSh\x20100–400'
        }, {
            'tx': 'Pesalink\x20Transfer',
            'fee': _0x1e3365(0x15c)
        }, {
            'tx': _0x1e3365(0x9c),
            'fee': _0x1e3365(0xa4)
        }, {
            'tx': _0x1e3365(0x16f),
            'fee': _0x1e3365(0x95)
        }],
        'kcb': [{
            'tx': _0x1e3365(0xd2),
            'fee': 'KSh\x2033'
        }, {
            'tx': _0x1e3365(0xff),
            'fee': _0x1e3365(0x167)
        }, {
            'tx': _0x1e3365(0xc6),
            'fee': _0x1e3365(0x178)
        }, {
            'tx': _0x1e3365(0x166),
            'fee': _0x1e3365(0x15c)
        }, {
            'tx': 'Monthly\x20Ledger\x20Fee',
            'fee': 'KSh\x20100'
        }, {
            'tx': _0x1e3365(0x16f),
            'fee': 'Free'
        }],
        'coop': [{
            'tx': _0x1e3365(0xd2),
            'fee': 'KSh\x2033'
        }, {
            'tx': _0x1e3365(0xff),
            'fee': 'KSh\x2033\x20+\x20KSh\x2030'
        }, {
            'tx': _0x1e3365(0xc6),
            'fee': _0x1e3365(0xf7)
        }, {
            'tx': _0x1e3365(0x166),
            'fee': _0x1e3365(0x15c)
        }, {
            'tx': _0x1e3365(0x9c),
            'fee': _0x1e3365(0x17c)
        }, {
            'tx': _0x1e3365(0x16f),
            'fee': 'Free'
        }],
        'ncba': [{
            'tx': 'ATM\x20Withdrawal\x20(own)',
            'fee': _0x1e3365(0xa3)
        }, {
            'tx': _0x1e3365(0xff),
            'fee': 'KSh\x2035\x20+\x20KSh\x2030'
        }, {
            'tx': 'EFT\x20Transfer',
            'fee': _0x1e3365(0xe4)
        }, {
            'tx': 'RTGS\x20Transfer',
            'fee': _0x1e3365(0x150)
        }, {
            'tx': _0x1e3365(0x9c),
            'fee': 'KSh\x20250'
        }, {
            'tx': _0x1e3365(0x16f),
            'fee': _0x1e3365(0x95)
        }],
        'absa': [{
            'tx': 'ATM\x20Withdrawal\x20(own)',
            'fee': _0x1e3365(0xca)
        }, {
            'tx': 'ATM\x20Withdrawal\x20(other)',
            'fee': _0x1e3365(0x167)
        }, {
            'tx': _0x1e3365(0xc6),
            'fee': _0x1e3365(0x178)
        }, {
            'tx': _0x1e3365(0x15d),
            'fee': 'KSh\x20500'
        }, {
            'tx': _0x1e3365(0x161),
            'fee': _0x1e3365(0x17f)
        }, {
            'tx': _0x1e3365(0x16f),
            'fee': _0x1e3365(0x95)
        }],
        'stanbic': [{
            'tx': 'ATM\x20Withdrawal\x20(own)',
            'fee': _0x1e3365(0xa3)
        }, {
            'tx': _0x1e3365(0xff),
            'fee': _0x1e3365(0x13b)
        }, {
            'tx': 'EFT\x20Transfer',
            'fee': 'KSh\x20200'
        }, {
            'tx': 'RTGS\x20Transfer',
            'fee': 'KSh\x20500–1,500'
        }, {
            'tx': _0x1e3365(0xa8),
            'fee': 'KSh\x20350'
        }, {
            'tx': _0x1e3365(0x16f),
            'fee': _0x1e3365(0x95)
        }],
        'dtb': [{
            'tx': _0x1e3365(0xd2),
            'fee': 'KSh\x2033'
        }, {
            'tx': _0x1e3365(0xff),
            'fee': _0x1e3365(0x167)
        }, {
            'tx': _0x1e3365(0xc6),
            'fee': 'KSh\x20150'
        }, {
            'tx': _0x1e3365(0x15d),
            'fee': _0x1e3365(0x118)
        }, {
            'tx': _0x1e3365(0xc1),
            'fee': _0x1e3365(0xcc)
        }, {
            'tx': 'Card\x20(domestic)',
            'fee': _0x1e3365(0x95)
        }]
    };

    function _0x1dfb26() {
        const _0x2924d0 = _0x1e3365;
        Object[_0x2924d0(0x153)](_0x37e528)[_0x2924d0(0x101)](([_0x2e1538, _0x13a7ee]) => {
            const _0x2178c7 = _0x2924d0,
                _0xae2605 = document[_0x2178c7(0xfe)](_0x2178c7(0x9f) + _0x2e1538);
            if (!_0xae2605) return;
            _0xae2605[_0x2178c7(0x156)] = _0x13a7ee[_0x2178c7(0x158)]((_0x3a9001, _0x5758a9) => _0x2178c7(0xf6) + (_0x5758a9 % 0x2 === 0x0 ? _0x2178c7(0xc2) : _0x2178c7(0x141)) + ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22padding:5px\x2010px;font-size:11px;color:#374151;border-bottom:1px\x20solid\x20#f3f4f6;\x22>' + _0x3a9001['tx'] + _0x2178c7(0xa2) + (_0x3a9001[_0x2178c7(0xaa)] === 'Free' ? _0x2178c7(0x135) : _0x2178c7(0x105)) + _0x2178c7(0xe9) + _0x3a9001[_0x2178c7(0xaa)] + _0x2178c7(0x104))[_0x2178c7(0x113)]('');
        });
    }

    function _0x4b8cc7(_0x257c0b, _0x3be330) {
        const _0x18da0f = _0x1e3365,
            _0xd7621f = _0x257c0b['querySelector']('#bank-status');
        if (!_0xd7621f) return;
        _0xd7621f[_0x18da0f(0x112)] = _0x3be330, _0xd7621f[_0x18da0f(0x11e)]['display'] = _0x18da0f(0x170), _0xd7621f[_0x18da0f(0x11e)][_0x18da0f(0x109)] = _0x3be330[_0x18da0f(0x175)]('✅') ? '#166534' : _0x3be330[_0x18da0f(0x175)]('❌') ? _0x18da0f(0x94) : '#6b7280', _0xd7621f['style'][_0x18da0f(0x17a)] = _0x3be330['startsWith']('✅') ? '#f0fdf4' : _0x3be330[_0x18da0f(0x175)]('❌') ? '#fef2f2' : _0x18da0f(0x141);
    }
    window[_0x1e3365(0x177)] = {
        'open': () => _0x446fd7(),
        'parse': _0x3081f9
    };

    function _0x4ded1f() {
        const _0x39ad0d = _0x1e3365,
            _0x279bd3 = document[_0x39ad0d(0x106)]('#nav-sidebar\x20>\x20div[style*=\x22overflow\x22]');
        if (_0x279bd3 && !document['getElementById'](_0x39ad0d(0xe7))) {
            const _0x5bf6e8 = document['createElement'](_0x39ad0d(0xef));
            _0x5bf6e8['id'] = 'nav-banks', _0x5bf6e8[_0x39ad0d(0x132)] = _0x39ad0d(0xc4), _0x5bf6e8[_0x39ad0d(0x156)] = _0x39ad0d(0xcd), _0x5bf6e8[_0x39ad0d(0xa9)] = () => {
                const _0x1e425e = _0x39ad0d;
                window[_0x1e425e(0x177)][_0x1e425e(0x107)](), document[_0x1e425e(0xfe)]('nav-sidebar')['classList'][_0x1e425e(0x114)](_0x1e425e(0x159));
            };
            const _0x57a335 = document['getElementById']('nav-mpesa') || _0x279bd3[_0x39ad0d(0x106)](_0x39ad0d(0x11d));
            _0x57a335 && _0x57a335[_0x39ad0d(0xfa)] ? _0x279bd3[_0x39ad0d(0x92)](_0x5bf6e8, _0x57a335['nextSibling']) : _0x279bd3[_0x39ad0d(0xdc)](_0x5bf6e8);
        }
        const _0x18e6b1 = document[_0x39ad0d(0xfe)]('taskbar'),
            _0xf885c6 = document[_0x39ad0d(0xfe)](_0x39ad0d(0x142));
        if (_0x18e6b1 && _0xf885c6 && !document['getElementById'](_0x39ad0d(0xa0))) {
            const _0x15b1cd = document['createElement'](_0x39ad0d(0xef));
            _0x15b1cd['id'] = _0x39ad0d(0xa0), _0x15b1cd[_0x39ad0d(0x132)] = _0x39ad0d(0x93), _0x15b1cd[_0x39ad0d(0x144)] = _0x39ad0d(0x127), _0x15b1cd[_0x39ad0d(0x112)] = '🏦', _0x15b1cd[_0x39ad0d(0xa9)] = () => window[_0x39ad0d(0x177)][_0x39ad0d(0x107)](), _0x18e6b1[_0x39ad0d(0x92)](_0x15b1cd, _0xf885c6);
        }
    }

    function _0x463004(_0x118706) {
        const _0x2ef4e8 = _0x1e3365;
        if (_0x118706 > 0x14) return;
        const _0x463247 = document[_0x2ef4e8(0xfe)](_0x2ef4e8(0xb3)) && document[_0x2ef4e8(0xfe)](_0x2ef4e8(0x9d));
        _0x463247 ? _0x4ded1f() : setTimeout(() => _0x463004(_0x118706 + 0x1), 0x1f4);
    }
    document[_0x1e3365(0x136)] === _0x1e3365(0xe6) ? document[_0x1e3365(0x8d)](_0x1e3365(0xc9), () => setTimeout(() => _0x463004(0x0), 0x7d0)) : setTimeout(() => _0x463004(0x0), 0x7d0);
}()));
