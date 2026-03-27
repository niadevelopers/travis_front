const travisNotif = (() => {

  async function markTodayRecorded() {
    try {
      await saveData("meta", {
        id:   "notif-recorded",
        date: new Date().toDateString()
      });
      const reg = await navigator.serviceWorker.ready;
      if (reg.active) reg.active.postMessage({ type: 'RESCHEDULE' });
    } catch (e) {
      console.warn('Travis: could not mark today as recorded', e);
    }
  }

  function showBanner() {
    if (Notification.permission !== 'default') return;

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
      max-width: 400px;
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
        Never forget to update your ledger
      </p>
      <p style="font-size:13px;color:#94a3b8;line-height:1.6;margin:0 0 16px 0;">
        Travis will remind you at 7:00 PM every day to record
        your transactions — so your advice stays accurate.
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
          border:1px solid #4ade80;background:transparent;
          color:#4ade80;font-weight:700;cursor:pointer;font-family:inherit;">
          Allow reminders
        </button>
      </div>
    `;

    document.body.appendChild(banner);

    document.getElementById('tn-allow').onclick = async () => {
      banner.remove();
      const result = await Notification.requestPermission();
      if (result === 'granted') {  
        await navigator.serviceWorker.ready;
        showToast('Reminders set — Travis will check in at 7:00 PM daily');
      } else {
        showToast('Reminders blocked. You can enable them in browser settings.');
      }
    };

    document.getElementById('tn-skip').onclick = () => {
      banner.remove();
      localStorage.setItem('travis-notif-skip', Date.now() + 3 * 24 * 60 * 60 * 1000);
    };
  }

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
      transition: opacity 0.4s;
    `;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 400);
    }, 3000);
  }

  function listenForSW() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.addEventListener('message', e => {
      if (e.data && e.data.type === 'OPEN_LEDGER') {
        nav('book'); 
      }
    });
  }

  function init() {
    listenForSW();
    setTimeout(showBanner, 8000);
  }

  return { init, markTodayRecorded };

})();
