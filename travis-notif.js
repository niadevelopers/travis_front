const travisNotif = (() => {

  // ─────────────────────────────────────────────────────────────
  // Called by your app whenever the user saves a transaction.
  // Tells the SW to mark today as acknowledged so the 8 PM
  // follow-up stays silent (they recorded — mission accomplished).
  // ─────────────────────────────────────────────────────────────
  async function markTodayRecorded() {
    try {
      // Tell the service worker directly
      if ('serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.ready;
        if (reg.active) reg.active.postMessage({ type: 'USER_RECORDED' });
      }
    } catch (e) {
      console.warn('Travis: could not mark today as recorded', e);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // Permission banner — shown once, 8 seconds after page load,
  // only if permission is still 'default' (never asked before).
  // ─────────────────────────────────────────────────────────────
  function showBanner() {
    // Already granted or denied — no point showing the banner
    if (Notification.permission !== 'default') {
      // If already granted, make sure the SW schedule is running
      if (Notification.permission === 'granted') ensureSWScheduled();
      return;
    }

    // User dismissed this banner recently — respect the snooze
    const skipUntil = localStorage.getItem('travis-notif-skip');
    if (skipUntil && Date.now() < parseInt(skipUntil)) return;

    const banner = document.createElement('div');
    banner.id = 'travis-notif-banner';
    banner.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 40px);
      max-width: 420px;
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 14px;
      padding: 18px 20px;
      z-index: 9999;
      font-family: system-ui, sans-serif;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    `;
    banner.innerHTML = `
      <p style="font-size:14px;font-weight:700;color:#f1f5f9;margin:0 0 6px 0;letter-spacing:0.02em;">
        🔔 Never forget to update your ledger
      </p>
      <p style="font-size:13px;color:#94a3b8;line-height:1.6;margin:0 0 16px 0;">
        Travis will remind you at <strong style="color:#4ade80;">7:00 PM</strong> every day to record
        your transactions — with a follow-up at <strong style="color:#4ade80;">8:00 PM</strong> if
        you haven't logged in yet. Your advice stays accurate only when your ledger is current.
      </p>
      <div style="display:flex;gap:10px;justify-content:flex-end;">
        <button id="tn-skip" style="
          font-size:13px;padding:8px 16px;border-radius:8px;
          border:1px solid #334155;background:transparent;
          color:#64748b;cursor:pointer;font-family:inherit;">
          Not now
        </button>
        <button id="tn-allow" style="
          font-size:13px;padding:8px 16px;border-radius:8px;
          border:none;background:#4ade80;
          color:#020617;font-weight:700;cursor:pointer;font-family:inherit;">
          Allow reminders
        </button>
      </div>
    `;

    document.body.appendChild(banner);

    document.getElementById('tn-allow').onclick = async () => {
      banner.remove();
      const result = await Notification.requestPermission();
      if (result === 'granted') {
        await ensureSWScheduled();
        showToast('✅ Reminders set — Travis will check in at 7:00 PM daily');
      } else {
        showToast('Reminders blocked. Enable them in your browser or phone settings.');
      }
    };

    document.getElementById('tn-skip').onclick = () => {
      banner.remove();
      // Snooze for 3 days before asking again
      localStorage.setItem('travis-notif-skip', Date.now() + 3 * 24 * 60 * 60 * 1000);
    };
  }

  // ─────────────────────────────────────────────────────────────
  // Make sure the SW is registered and its schedule is running.
  // Safe to call multiple times.
  // ─────────────────────────────────────────────────────────────
  async function ensureSWScheduled() {
    if (!('serviceWorker' in navigator)) return;
    try {
      const reg = await navigator.serviceWorker.ready;
      // Send RESCHEDULE so the SW re-arms all timers immediately
      if (reg.active) reg.active.postMessage({ type: 'RESCHEDULE' });
    } catch (e) {
      console.warn('Travis: could not reach service worker', e);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // Toast helper
  // ─────────────────────────────────────────────────────────────
  function showToast(msg) {
    const t = document.createElement('div');
    t.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: #1e293b;
      color: #f1f5f9;
      border: 1px solid #334155;
      border-radius: 10px;
      padding: 10px 20px;
      font-size: 13px;
      font-family: system-ui, sans-serif;
      z-index: 9999;
      white-space: nowrap;
      opacity: 1;
      transition: opacity 0.4s;
    `;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 400);
    }, 3500);
  }

  // ─────────────────────────────────────────────────────────────
  // Listen for SW → app messages
  // ─────────────────────────────────────────────────────────────
  function listenForSW() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.addEventListener('message', e => {
      if (e.data && e.data.type === 'OPEN_LEDGER') {
        // Route to the ledger tab — hook this into your nav function
        if (typeof nav === 'function') nav('book');
      }
    });
  }

  // ─────────────────────────────────────────────────────────────
  // INIT — call once on page load
  // ─────────────────────────────────────────────────────────────
  function init() {
    listenForSW();

    // If permission is already granted, ensure the schedule is live
    // (covers the case where user cleared data but SW is still active)
    if (Notification.permission === 'granted') {
      ensureSWScheduled();
    }

    // Show the permission banner after 8 s so it doesn't interrupt load
    setTimeout(showBanner, 8000);
  }

  return { init, markTodayRecorded };
})();
