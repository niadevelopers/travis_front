// ─────────────────────────────────────────────────────────────
// Travis Guardian — Notification Manager
// No server. No subscriptions. No environment variables.
// Just open the app once — the OS handles the rest.
// ─────────────────────────────────────────────────────────────

const travisNotif = (() => {

  // ─────────────────────────────────────────────────────────────
  // Tell the SW to schedule today's reminders.
  // Called every time the app opens — this is what keeps the
  // SW alive and the timers fresh.
  // ─────────────────────────────────────────────────────────────
  async function scheduleReminders() {
    if (!('serviceWorker' in navigator)) return;
    try {
      const reg = await navigator.serviceWorker.ready;
      if (reg.active) {
        reg.active.postMessage({ type: 'SCHEDULE_REMINDERS' });
      }
    } catch(e) {
      console.warn('[Travis] Could not reach service worker:', e.message);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // Permission banner
  // Shown once, 8 seconds after first page load.
  // After permission is granted it is never shown again —
  // scheduleReminders() runs silently on every subsequent visit.
  // ─────────────────────────────────────────────────────────────
  function showBanner() {
    if (Notification.permission === 'granted') {
      // Already have permission — just schedule quietly
      scheduleReminders();
      return;
    }

    if (Notification.permission === 'denied') return;

    // Respect snooze if user tapped "Not now" recently
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
      padding: 20px;
      z-index: 9999;
      font-family: system-ui, sans-serif;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
      animation: travis-slide-up 0.3s ease;
    `;

    // Inject keyframe animation once
    if (!document.getElementById('travis-notif-style')) {
      const style = document.createElement('style');
      style.id = 'travis-notif-style';
      style.textContent = `
        @keyframes travis-slide-up {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0);    }
        }
      `;
      document.head.appendChild(style);
    }

    banner.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <div style="
          width:40px;height:40px;background:#4ade80;border-radius:10px;
          display:flex;align-items:center;justify-content:center;
          font-size:20px;flex-shrink:0;">⏰</div>
        <div>
          <p style="font-size:14px;font-weight:700;color:#f1f5f9;margin:0;letter-spacing:0.02em;">
            Daily ledger reminders
          </p>
          <p style="font-size:11px;color:#4ade80;margin:2px 0 0 0;font-weight:600;">
            7:00 PM &nbsp;·&nbsp; 8:00 PM &nbsp;·&nbsp; every day
          </p>
        </div>
      </div>
      <p style="font-size:13px;color:#94a3b8;line-height:1.65;margin:0 0 16px 0;">
        Travis will buzz your phone at <strong style="color:#f1f5f9;">7 PM</strong> and again
        at <strong style="color:#f1f5f9;">8 PM</strong> each day as a reminder to review your
        transactions — so your ledger stays current and your advice stays sharp.
        Works even when your phone is locked.
      </p>
      <div style="display:flex;gap:10px;justify-content:flex-end;">
        <button id="tn-skip" style="
          font-size:13px;padding:9px 18px;border-radius:8px;
          border:1px solid #334155;background:transparent;
          color:#64748b;cursor:pointer;font-family:inherit;
          transition:border-color 0.2s;">
          Not now
        </button>
        <button id="tn-allow" style="
          font-size:13px;padding:9px 18px;border-radius:8px;
          border:none;background:#4ade80;
          color:#020617;font-weight:700;cursor:pointer;
          font-family:inherit;letter-spacing:0.02em;
          transition:opacity 0.2s;">
          Turn on reminders
        </button>
      </div>
    `;

    document.body.appendChild(banner);

    document.getElementById('tn-allow').onclick = async () => {
      banner.remove();
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        await scheduleReminders();
        showToast('✅ Reminders on — Travis will buzz you at 7 PM and 8 PM daily');
      } else {
        showToast(
          'Notifications blocked. To enable: phone Settings → Apps → Chrome → Notifications.'
        );
      }
    };

    document.getElementById('tn-skip').onclick = () => {
      banner.remove();
      // Ask again in 3 days
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
      padding: 11px 22px; font-size: 13px;
      font-family: system-ui, sans-serif;
      z-index: 9999; white-space: nowrap;
      opacity: 1; transition: opacity 0.4s;
      box-shadow: 0 4px 16px rgba(0,0,0,0.4);
    `;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 400);
    }, 4000);
  }

  // ─────────────────────────────────────────────────────────────
  // Listen for SW → app messages
  // ─────────────────────────────────────────────────────────────
  function listenForSW() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.addEventListener('message', e => {
      if (e.data && e.data.type === 'OPEN_LEDGER') {
        // Hook into your existing nav function
        if (typeof nav === 'function') nav('book');
      }
    });
  }

  // ─────────────────────────────────────────────────────────────
  // INIT — call once on every page load
  //
  // This single call does everything:
  //   1. Listens for SW messages
  //   2. If permission already granted → silently reschedules
  //      today's reminders (handles cleared browser data)
  //   3. If permission not yet granted → shows the banner
  //      after 8 s so it doesn't interrupt page load
  // ─────────────────────────────────────────────────────────────
  function init() {
    listenForSW();

    if (Notification.permission === 'granted') {
      // Schedule quietly — no banner, no toast
      scheduleReminders();
    } else {
      // Show the permission banner after 8 seconds
      setTimeout(showBanner, 8000);
    }
  }

  return { init };

})();
