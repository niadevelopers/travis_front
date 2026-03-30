const BACKEND_URL = "https://travis-j1w9.onrender.com";
let currentToken = null;


const RATE_LIMIT = {
  login:    { attempts: 0, lastReset: Date.now() },
  register: { attempts: 0, lastReset: Date.now() },
  stk:      { attempts: 0, lastReset: Date.now() }
};

const COOLDOWN_MS = 60000;
const MAX_ATTEMPTS = 3;

function canAttempt(action) {
  const now = Date.now();
  const data = RATE_LIMIT[action];

  if (now - data.lastReset > COOLDOWN_MS) {
    data.attempts = 0;
    data.lastReset = now;
  }

  if (data.attempts >= MAX_ATTEMPTS) {
    const remaining = Math.ceil((data.lastReset + COOLDOWN_MS - now) / 1000);
    alert(`Too many attempts. Please wait ${remaining} seconds before trying again.`);
    return false;
  }

  data.attempts++;
  return true;
}


function sanitizePhone(phone) {
  return phone.replace(/[^0-9+]/g, '').trim();
}

function sanitizeText(text) {
  return text.trim().replace(/[<>"/\\]/g, '');
}

function isValidKenyanPhone(phone) {
  const cleaned = sanitizePhone(phone);
  return /^(\+?254|0)[17]\d{8}$/.test(cleaned) && cleaned.length >= 10;
}

function isValidPassword(password) {
  return password.length >= 6;
}

function showLoader(btn) {
  if (!btn) return;

  btn.dataset.originalText = btn.innerHTML;
  btn.disabled = true;

  btn.innerHTML = `
    <span class="inline-block animate-spin mr-2">⟳</span>
    Processing...
  `;
  btn.style.opacity = "0.75";
}

function hideLoader(btn) {
  if (!btn || !btn.dataset.originalText) return;

  btn.innerHTML = btn.dataset.originalText;
  btn.disabled = false;
  btn.style.opacity = "1";
  delete btn.dataset.originalText;
}


function togglePassword(icon) {
  const input = icon.previousElementSibling;
  if (!input) return;

  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}


async function handleRegister(e) {
  e.preventDefault();

  const btn = document.querySelector('#register-form button[type="submit"]') || 
              document.querySelector('#register-form button');

  if (!canAttempt('register')) return;

  showLoader(btn);

  const payload = {
    fullName: sanitizeText(document.getElementById('reg-fullname').value),
    location: sanitizeText(document.getElementById('reg-location').value),
    phone: sanitizePhone(document.getElementById('reg-phone').value),
    email: document.getElementById('reg-email').value.trim() || undefined,
    password: document.getElementById('reg-password').value
  };

  if (!payload.fullName || !payload.phone || !payload.password) {
    alert("Please fill all required fields (Full Name, Phone, Password)");
    hideLoader(btn);
    return;
  }
  if (!isValidKenyanPhone(payload.phone)) {
    alert("Please enter a valid Kenyan phone number (e.g. 0712345678)");
    hideLoader(btn);
    return;
  }
  if (!isValidPassword(payload.password)) {
    alert("Password must be at least 6 characters long");
    hideLoader(btn);
    return;
  }
  if (payload.password !== document.getElementById('reg-confirm').value) {
    alert("Passwords do not match");
    hideLoader(btn);
    return;
  }

  try {
    const res = await fetch(`${BACKEND_URL}/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (data.error) {
      alert(data.error);
    } else {
      alert("Account created successfully! Please login now.");
      showLoginForm();
    }
  } catch (err) {
    alert("Registration failed. Please check your connection.");
  } finally {
    hideLoader(btn);
  }
}


async function handleLogin(e) {
  e.preventDefault();

  const btn = document.querySelector('#login-form button[type="submit"]') || 
              document.querySelector('#login-form button');

  if (!canAttempt('login')) return;

  showLoader(btn);

  const phone = sanitizePhone(document.getElementById('login-phone').value);
  const password = document.getElementById('login-password').value;

  if (!phone || !password) {
    alert("Please enter phone number and password");
    hideLoader(btn);
    return;
  }
  if (!isValidKenyanPhone(phone)) {
    alert("Please enter a valid Kenyan phone number");
    hideLoader(btn);
    return;
  }
  if (!isValidPassword(password)) {
    alert("Password is too short");
    hideLoader(btn);
    return;
  }

  try {
    const res = await fetch(`${BACKEND_URL}/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ phone, password })
    });

    const data = await res.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    currentToken = data.token;
    localStorage.setItem('token', data.token);

    alert("Login successful! Welcome to your dashboard.");

    hideAllSections();
    document.getElementById('dashboard').classList.remove('hidden');

    renderNav();
    loadDashboard();

  } catch (err) {
    console.error("Login error:", err);
    alert("Login failed. Please check your connection.");
  } finally {
    hideLoader(btn);
  }
}


async function initiateQuery() {
  const btn = document.querySelector('#dashboard button[onclick="initiateQuery()"]') || 
              document.getElementById('initiate-stk-btn'); // fallback if you add id later

  if (!canAttempt('stk')) return;

  showLoader(btn);

  const targetPhone = sanitizePhone(document.getElementById('target-phone').value);
  const payerMsisdn = sanitizePhone(document.getElementById('payer-msisdn').value);

  if (!targetPhone || !payerMsisdn) {
    alert("Please fill both phone numbers");
    hideLoader(btn);
    return;
  }
  if (!isValidKenyanPhone(targetPhone)) {
    alert("Target phone number is not valid");
    hideLoader(btn);
    return;
  }
  if (!isValidKenyanPhone(payerMsisdn)) {
    alert("Payer phone number is not valid");
    hideLoader(btn);
    return;
  }

  try {
    const res = await fetch(`${BACKEND_URL}/initiate-stk`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify({ targetPhone, payerMsisdn })
    });

    const data = await res.json();

    alert(data.message || data.error || "STK Push sent. Check your phone.");

    if (!data.error) {
      setTimeout(loadMyQueries, 8000);
    }
  } catch (err) {
    console.error(err);
    alert("Failed to initiate payment. Please try again.");
  } finally {
    hideLoader(btn);
  }
}


function logout() {
  localStorage.removeItem('token');
  currentToken = null;
  renderNav();
  hideAllSections();
  showLoginForm();
}

function renderNav() {
  const container = document.getElementById('nav-buttons');
  if (currentToken) {
    container.innerHTML = `<button onclick="logout()" class="px-6 py-2 bg-red-600 hover:bg-red-500 rounded-2xl">Logout</button>`;
  } else {
    container.innerHTML = '';
  }
}

function showLoginForm() {
  hideAllSections();
  document.getElementById('auth-section').classList.remove('hidden');
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('register-form').classList.add('hidden');
}

function showRegisterForm() {
  hideAllSections();
  document.getElementById('auth-section').classList.remove('hidden');
  document.getElementById('register-form').classList.remove('hidden');
  document.getElementById('login-form').classList.add('hidden');
}

function hideAllSections() {
  document.getElementById('auth-section').classList.add('hidden');
  document.getElementById('dashboard').classList.add('hidden');
}

async function loadDashboard() {
  hideAllSections();
  document.getElementById('dashboard').classList.remove('hidden');

  try {
    const res = await fetch(`${BACKEND_URL}/me`, {
      headers: { Authorization: `Bearer ${currentToken}` }
    });
    const user = await res.json();

    document.getElementById('success-count').textContent = user.successQueries || 0;
    document.getElementById('failure-count').textContent = user.failureQueries || 0;

    await loadMyQueries();
  } catch (err) {
    console.error("Dashboard load error:", err);
  }
}

async function loadMyQueries() {
  if (!currentToken) return;

  try {
    const res = await fetch(`${BACKEND_URL}/my-queries`, {
      headers: { Authorization: `Bearer ${currentToken}` }
    });

    if (!res.ok) throw new Error("Failed to load queries");

    const logs = await res.json();

    const container = document.getElementById('queries-list');

    if (logs.length === 0) {
      container.innerHTML = `<p class="text-center text-gray-400 py-12">No revealed fingerprints yet.<br>Make a successful payment to see results here.</p>`;
      return;
    }

    let html = `
      <table class="w-full">
        <thead>
          <tr class="border-b border-gray-700">
            <th class="p-4 text-left">Target Phone</th>
            <th class="p-4 text-left">Revealed Fingerprint</th>
            <th class="p-4 text-left">Receipt</th>
            <th class="p-4 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
    `;

    logs.forEach(log => {
      html += `
        <tr class="border-t border-gray-800 hover:bg-gray-800">
          <td class="p-4">${log.targetPhone}</td>
          <td class="p-4 font-mono text-emerald-400 text-lg">${log.formattedFP}</td>
          <td class="p-4">${log.receipt || '-'}</td>
          <td class="p-4 text-sm">${new Date(log.queriedAt).toLocaleString()}</td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;

  } catch (err) {
    console.error("Failed to load queries:", err);
    document.getElementById('queries-list').innerHTML = 
      `<p class="text-center text-red-400 py-8">Failed to load revealed fingerprints.</p>`;
  }
}

window.onload = () => {
  currentToken = localStorage.getItem('token');
  renderNav();
  if (currentToken) {
    hideAllSections();
    document.getElementById('dashboard').classList.remove('hidden');
    loadDashboard();
  } else {
    showLoginForm();
  }
};
