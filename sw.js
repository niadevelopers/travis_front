const CACHE_NAME = 'Travis_guardian-v1_0';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/travis_core.html',
  '/Admin.html',
  '/input-app.css',
  '/input-landing.css',
  '/script.js',
  '/subAdmin.js',
  '/landing.js',
  '/antiDev.js',
  '/tailwind-app.css',
  '/tailwind-landing.css',
  '/manifest.json',
];

const PRIMARY_MESSAGES = [
  { title: '⏰ Ledger check-in — 7 PM', body: "Time to record today's transactions. It takes under a minute and keeps your Travis advice accurate." },
  { title: '⏰ Travis reminder', body: "What came in and went out today? Log it now while it's fresh — your end-of-month audit depends on it." },
  { title: '⏰ Daily record time', body: "One small habit: record today's transactions. The more complete your ledger, the sharper your financial picture." },
  { title: '⏰ Your ledger needs today', body: "Travis is ready for today's numbers. Tap to open your ledger and log what happened today." },
  { title: '⏰ End-of-day check-in', body: "Before the day closes out — have you recorded every transaction? Tap to make sure nothing slips through." },
];

const FOLLOWUP_MESSAGES = [
  { title: '🔔 Still waiting on today', body: "You haven't logged today's transactions yet. Your 7 PM reminder went unanswered — tap now before you forget." },
  { title: '🔔 Last call for today', body: "It's 8 PM and today's ledger is still empty. One minute now saves a headache at month-end." },
  { title: '🔔 Travis follow-up', body: "Today's transactions still aren't recorded. This is your final reminder for today — tap to log them now." },
];

// ─────────────────────────────────────────────────────────────
// INSTALL
// ─────────────────────────────────────────────────────────────
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
});

// ─────────────────────────────────────────────────────────────
// ACTIVATE
// ─────────────────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names =>
        Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
      )
      .then(() => self.clients.claim())
  );
});

// ─────────────────────────────────────────────────────────────
// FETCH
// ─────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.url.includes('/activate-fingerprint')) {
    event.respondWith(fetch(req));
    return;
  }
  if (req.destination === 'script' || req.destination === 'document') {
    event.respondWith(
      fetch(req)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (!res || res.status !== 200) return res;
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
        return res;
      });
    })
  );
});

// ─────────────────────────────────────────────────────────────
// NOTIFICATION CLICK
// ─────────────────────────────────────────────────────────────
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'dismiss') return;

  // User tapped "Record now" — suppress tonight's follow-up
  event.waitUntil(
    setAcknowledgedFlag().then(() =>
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
        for (const c of list) {
          if (c.url.includes(self.location.origin) && 'focus' in c) {
            c.focus();
            c.postMessage({ type: 'OPEN_LEDGER' });
            return;
          }
        }
        if (clients.openWindow) return clients.openWindow('/travis_core.html');
      })
    )
  );
});

// ─────────────────────────────────────────────────────────────
// MESSAGES FROM APP
// ─────────────────────────────────────────────────────────────
self.addEventListener('message', event => {
  if (!event.data) return;

  if (event.data.type === 'SCHEDULE_REMINDERS') {
    // App sends this on every page load — we schedule/refresh notifications
    event.waitUntil(scheduleTriggeredNotifications());
  }

  if (event.data.type === 'USER_RECORDED') {
    event.waitUntil(setAcknowledgedFlag());
  }
});

// ─────────────────────────────────────────────────────────────
// NOTIFICATION TRIGGER SCHEDULING
// Uses the Notification Triggers API (showTrigger) — the OS
// holds the schedule, not a JS timer. Fires even if Chrome
// is killed or the phone is locked.
// Falls back to a keepalive periodic-sync approach on older Chrome.
// ─────────────────────────────────────────────────────────────
async function scheduleTriggeredNotifications() {
  try {
    // Cancel all previously scheduled Travis notifications first
    const scheduled = await self.registration.getNotifications({ tag: 'travis-7pm' });
    scheduled.forEach(n => n.close());
    const scheduled2 = await self.registration.getNotifications({ tag: 'travis-8pm' });
    scheduled2.forEach(n => n.close());

    const supportsShowTrigger = 'showTrigger' in Notification.prototype ||
                                'showTrigger' in ServiceWorkerRegistration.prototype;

    if (supportsShowTrigger) {
      await scheduleWithTriggerAPI();
    } else {
      // Fallback: use periodic background sync if available
      await scheduleWithPeriodicSync();
    }
  } catch (e) {
    console.warn('[Travis SW] scheduleTriggeredNotifications error:', e);
  }
}

// ── Method 1: Notification Triggers API ──────────────────────
// Chrome Android 80+. The OS delivers the notification at the
// exact timestamp — completely independent of the SW lifecycle.
async function scheduleWithTriggerAPI() {
  const today = new Date();
  const day   = today.getDay(); // rotate message by day of week

  // Build today's 7 PM trigger
  const sevenPM = new Date(today);
  sevenPM.setHours(19, 0, 0, 0);
  if (sevenPM <= today) sevenPM.setDate(sevenPM.getDate() + 1); // push to tomorrow if passed

  // Build today's 8 PM trigger
  const eightPM = new Date(today);
  eightPM.setHours(20, 0, 0, 0);
  if (eightPM <= today) eightPM.setDate(eightPM.getDate() + 1);

  const msg7  = PRIMARY_MESSAGES[day % PRIMARY_MESSAGES.length];
  const msg8  = FOLLOWUP_MESSAGES[day % FOLLOWUP_MESSAGES.length];

  // Schedule 7 PM
  await self.registration.showNotification(msg7.title, {
    body:    msg7.body,
    icon:    '/travis_192.png',
    badge:   '/travis_192.png',
    tag:     'travis-7pm',
    renotify: true,
    requireInteraction: true,
    silent:  false,
    vibrate: [300, 100, 300, 100, 600],
    data:    { url: '/travis_core.html', slot: '7pm' },
    actions: [
      { action: 'open',    title: '📒 Record now' },
      { action: 'dismiss', title: 'Later'          },
    ],
    showTrigger: new TimestampTrigger(sevenPM.getTime())
  });

  // Schedule 8 PM — always schedule it; we check the flag at fire time
  await self.registration.showNotification(msg8.title, {
    body:    msg8.body,
    icon:    '/travis_192.png',
    badge:   '/travis_192.png',
    tag:     'travis-8pm',
    renotify: true,
    requireInteraction: true,
    silent:  false,
    vibrate: [500, 100, 500, 100, 800],
    data:    { url: '/travis_core.html', slot: '8pm' },
    actions: [
      { action: 'open',    title: '📒 Record now' },
      { action: 'dismiss', title: 'Later'          },
    ],
    showTrigger: new TimestampTrigger(eightPM.getTime())
  });

  console.log('[Travis SW] Notifications scheduled via Trigger API:', sevenPM, eightPM);
}

// ── Method 2: Periodic Background Sync fallback ───────────────
// For browsers that don't support Notification Triggers.
// Registers a periodic sync that wakes the SW periodically.
async function scheduleWithPeriodicSync() {
  try {
    await self.registration.periodicSync.register('travis-reminder-check', {
      minInterval: 30 * 60 * 1000 // wake up at most every 30 minutes
    });
    console.log('[Travis SW] Periodic sync registered as fallback');
  } catch(e) {
    console.warn('[Travis SW] Periodic sync not supported either:', e);
  }
}

// ── Periodic sync handler ─────────────────────────────────────
self.addEventListener('periodicsync', event => {
  if (event.tag === 'travis-reminder-check') {
    event.waitUntil(checkAndFireFallback());
  }
});

async function checkAndFireFallback() {
  const now     = new Date();
  const hour    = now.getHours();
  const minute  = now.getMinutes();
  const day     = now.getDay();

  // Fire at 7 PM window (19:00–19:30)
  if (hour === 19 && minute < 30) {
    const msg = PRIMARY_MESSAGES[day % PRIMARY_MESSAGES.length];
    await self.registration.showNotification(msg.title, {
      body: msg.body, icon: '/travis_192.png', badge: '/travis_192.png',
      tag: 'travis-7pm-fallback', renotify: true, requireInteraction: true,
      silent: false, vibrate: [300, 100, 300, 100, 600],
      data: { url: '/travis_core.html' },
      actions: [{ action: 'open', title: '📒 Record now' }, { action: 'dismiss', title: 'Later' }],
    });
  }

  // Fire at 8 PM window (20:00–20:30) only if not acknowledged
  if (hour === 20 && minute < 30) {
    const acknowledged = await getAcknowledgedFlag();
    if (!acknowledged) {
      const msg = FOLLOWUP_MESSAGES[day % FOLLOWUP_MESSAGES.length];
      await self.registration.showNotification(msg.title, {
        body: msg.body, icon: '/travis_192.png', badge: '/travis_192.png',
        tag: 'travis-8pm-fallback', renotify: true, requireInteraction: true,
        silent: false, vibrate: [500, 100, 500, 100, 800],
        data: { url: '/travis_core.html' },
        actions: [{ action: 'open', title: '📒 Record now' }, { action: 'dismiss', title: 'Later' }],
      });
    }
  }
}

// ─────────────────────────────────────────────────────────────
// INDEXEDDB FLAG HELPERS
// ─────────────────────────────────────────────────────────────
function openFlagDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('travis-notif-db', 2);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('flags')) {
        db.createObjectStore('flags', { keyPath: 'key' });
      }
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror   = e => reject(e.target.error);
  });
}

async function getAcknowledgedFlag() {
  try {
    const db  = await openFlagDB();
    const tx  = db.transaction('flags', 'readonly');
    const rec = await new Promise(res => {
      const r = tx.objectStore('flags').get('acknowledged');
      r.onsuccess = () => res(r.result);
      r.onerror   = () => res(null);
    });
    db.close();
    if (!rec) return false;
    return rec.date === new Date().toDateString();
  } catch(e) { return false; }
}

async function setAcknowledgedFlag() {
  try {
    const db = await openFlagDB();
    const tx = db.transaction('flags', 'readwrite');
    await new Promise((res, rej) => {
      const r = tx.objectStore('flags').put({ key: 'acknowledged', date: new Date().toDateString() });
      r.onsuccess = () => res();
      r.onerror   = () => rej(r.error);
    });
    db.close();
  } catch(e) { /* non-fatal */ }
}
