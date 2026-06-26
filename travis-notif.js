const travisNotif = (() => {

  // ─────────────────────────────────────────────────────────────
  // Called every time the user saves a transaction.
  // Tells SW to suppress tonight's 8 PM follow-up.
  // ─────────────────────────────────────────────────────────────
  async function markTodayRecorded() {
    try {
      if ('serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.ready;
        if (reg.active) reg.active.postMessage({ type: 'USER_RECORDED' });
      }
    } catch(e) {
      console.warn('Travis: could not mark today as recorded', e);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // Core: request permission then schedule notifications via SW.
  // Called on permission grant AND on every page load (to keep
  // the schedule fresh — Trigger API schedules day by day).
  // ─────────────────────────────────────────────────────────────
  async function scheduleReminders() {
    if (!('serviceWorker' in navigator)) return;
    try {
      const reg = await navigator.serviceWorker.ready;
      if (reg.active) {
        reg.active.postMessage({ type: 'SCHEDULE_REMINDERS' });
      }

      // Also register periodic background sync as a fallback
      // (Chrome asks for permission automatically alongside notifs)
      if ('periodicSync' in reg) {
        try {
          const status = await navigator.permissions.query({ name: 'periodic-background-sync' });
          if (status.state === 'granted') {
            await reg.periodicSync.register('travis-reminder-check', {
              minInterval: 30 * 60 * 1000
            });
          }
        } catch(e) { /* not supported on this browser, that's fine */ }
      }
    } catch(e) {
      console.warn('Travis: could not schedule reminders', e);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // Permission banner
  // ─────────────────────────────────────────────────────────────
  function showBanner() {
    if (Notification.permission !== 'default') {
      // Already granted — just make sure schedule is live
      if (Notification.permission === 'granted') scheduleReminders();
      return;
    }

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
      <p style="font-size:13px;color:#94a3b8;line-height:1.6;margin:0 0 4px 0;">
        Travis will remind you at <strong style="color:#4ade80;">7:00 PM</strong> every day
        to record your transactions, with a follow-up at
        <strong style="color:#4ade80;">8:00 PM</strong> if needed.
      </p>
      <p style="font-size:12px;color:#475569;line-height:1.5;margin:0 0 16px 0;">
        These fire even when your phone is locked or the app is closed —
        like an alarm. Your advice stays accurate only when your ledger is current.
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
        await scheduleReminders();
        showToast('✅ Reminders set — Travis will alert you at 7 PM and 8 PM daily');
      } else {
        showToast('Reminders blocked. Go to phone Settings → Apps → Chrome → Notifications to enable.');
      }
    };

    document.getElementById('tn-skip').onclick = () => {
      banner.remove();
      localStorage.setItem('travis-notif-skip', Date.now() + 3 * 24 * 60 * 60 * 1000);
    };
  }

  // ─────────────────────────────────────────────────────────────
  // Toast
  // ─────────────────────────────────────────────────────────────
  function showToast(msg) {
    const t = document.createElement('div');
    t.style.cssText = `
      position: fixed; bottom: 24px; left: 50%;
      transform: translateX(-50%);
      background: #1e293b; color: #f1f5f9;
      border: 1px solid #334155; border-radius: 10px;
      padding: 10px 20px; font-size: 13px;
      font-family: system-ui, sans-serif;
      z-index: 9999; white-space: nowrap;
      opacity: 1; transition: opacity 0.4s;
    `;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 400); }, 3500);
  }

  // ─────────────────────────────────────────────────────────────
  // Listen for SW → app messages
  // ─────────────────────────────────────────────────────────────
  function listenForSW() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.addEventListener('message', e => {
      if (e.data && e.data.type === 'OPEN_LEDGER') {
        if (typeof nav === 'function') nav('book');
      }
    });
  }

  // ─────────────────────────────────────────────────────────────
  // INIT — call once on every page load
  // ─────────────────────────────────────────────────────────────
  function init() {
    listenForSW();

    if (Notification.permission === 'granted') {
      // Permission already exists — refresh the schedule
      // (this is what keeps it working after clearing browser data)
      scheduleReminders();
    }

    // Show banner after 8 s to not interrupt page load
    setTimeout(showBanner, 8000);
  }

  return { init, markTodayRecorded };
})();
