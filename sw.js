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
  // jspdf.umd.min.js removed — no longer needed
];

// ─────────────────────────────────────────────────────────────
// REMINDER SCHEDULE
// 7:00 PM  — primary reminder (always fires)
// 8:00 PM  — follow-up (only fires if user has NOT tapped
//             "Record now" on the 7 PM notification)
// ─────────────────────────────────────────────────────────────
const REMINDERS = [
  { hour: 19, minute: 0,  id: 'primary',  followUp: false },
  { hour: 20, minute: 0,  id: 'followup', followUp: true  },
];

// Rotating messages so it never feels like a broken record
const PRIMARY_MESSAGES = [
  {
    title: '⏰ Ledger check-in — 7 PM',
    body:  "Time to record today's transactions. It takes under a minute and keeps your Travis advice accurate.",
  },
  {
    title: '⏰ Travis reminder',
    body:  "What came in and went out today? Log it now while it's fresh — your end-of-month audit depends on it.",
  },
  {
    title: '⏰ Daily record time',
    body:  "One small habit: record today's transactions. The more complete your ledger, the sharper your financial picture.",
  },
  {
    title: '⏰ Your ledger needs today',
    body:  "Travis is ready for today's numbers. Tap to open your ledger and log what happened today.",
  },
  {
    title: '⏰ End-of-day check-in',
    body:  "Before the day closes out — have you recorded every transaction? Tap to make sure nothing slips through.",
  },
];

const FOLLOWUP_MESSAGES = [
  {
    title: '🔔 Still waiting on today',
    body:  "You haven't logged today's transactions yet. Your 7 PM reminder went unanswered — tap now before you forget.",
  },
  {
    title: '🔔 Last call for today',
    body:  "It's 8 PM and today's ledger is still empty. One minute now saves a headache at month-end.",
  },
  {
    title: '🔔 Travis follow-up',
    body:  "Today's transactions still aren't recorded. This is your final reminder for today — tap to log them now.",
  },
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
      .then(() => {
        self.clients.claim();
        scheduleAllReminders(); // start the clock
      })
  );
});

// ─────────────────────────────────────────────────────────────
// FETCH  (unchanged from your original)
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

  if (event.action === 'dismiss') {
    // User tapped "Later" — mark that they acknowledged it
    // so the follow-up at 8 PM still fires (they didn't record)
    return;
  }

  // User tapped "Record now" or tapped the notification body
  // Mark as acknowledged so the 8 PM follow-up stays quiet
  event.waitUntil(
    setAcknowledgedFlag().then(() => {
      return clients
        .matchAll({ type: 'window', includeUncontrolled: true })
        .then(windowClients => {
          for (const client of windowClients) {
            if (client.url.includes(self.location.origin) && 'focus' in client) {
              client.focus();
              client.postMessage({ type: 'OPEN_LEDGER' });
              return;
            }
          }
          if (clients.openWindow) return clients.openWindow('/travis_core.html');
        });
    })
  );
});

// ─────────────────────────────────────────────────────────────
// MESSAGES FROM THE APP
// ─────────────────────────────────────────────────────────────
self.addEventListener('message', event => {
  if (!event.data) return;

  // App tells SW the user saved a transaction → restart schedule
  if (event.data.type === 'RESCHEDULE') {
    scheduleAllReminders();
  }

  // App tells SW user tapped "Record now" from within the app
  if (event.data.type === 'USER_RECORDED') {
    setAcknowledgedFlag();
  }
});

// ─────────────────────────────────────────────────────────────
// SCHEDULER
// Sets an independent setTimeout for every reminder slot.
// Each slot fires once, then re-arms itself for the next day.
// ─────────────────────────────────────────────────────────────
const _timers = {}; // keyed by reminder id so we can cancel/replace

function scheduleAllReminders() {
  for (const reminder of REMINDERS) {
    scheduleReminder(reminder);
  }
}

function scheduleReminder(reminder) {
  // Cancel any existing timer for this slot
  if (_timers[reminder.id]) {
    clearTimeout(_timers[reminder.id]);
    delete _timers[reminder.id];
  }

  const now    = new Date();
  const target = new Date(now);
  target.setHours(reminder.hour, reminder.minute, 0, 0);

  // If the time already passed today, push to tomorrow
  if (target <= now) target.setDate(target.getDate() + 1);

  const delay = target - now;

  _timers[reminder.id] = setTimeout(async () => {
    delete _timers[reminder.id];
    await fireReminder(reminder);
    // Re-arm for the same slot tomorrow
    scheduleReminder(reminder);
  }, delay);
}

// ─────────────────────────────────────────────────────────────
// FIRE A REMINDER
// Primary (7 PM) — ALWAYS fires, no conditions.
// Follow-up (8 PM) — fires ONLY if user has NOT tapped
//   "Record now" since the 7 PM notification.
// ─────────────────────────────────────────────────────────────
async function fireReminder(reminder) {
  // For the follow-up, check whether user already opened the ledger
  if (reminder.followUp) {
    const acknowledged = await getAcknowledgedFlag();
    if (acknowledged) {
      // They tapped "Record now" earlier — clear the flag and stay quiet
      await clearAcknowledgedFlag();
      return;
    }
  } else {
    // Primary reminder — always clear any stale acknowledged flag from yesterday
    await clearAcknowledgedFlag();
  }

  const pool = reminder.followUp ? FOLLOWUP_MESSAGES : PRIMARY_MESSAGES;
  const msg  = pool[new Date().getDate() % pool.length];

  // Close any existing Travis notification so the new one
  // always triggers sound + vibration (renotify:true needs a unique tag each time
  // OR closing the old one first)
  const existing = await self.registration.getNotifications({ tag: 'travis-ledger-reminder' });
  existing.forEach(n => n.close());

  await self.registration.showNotification(msg.title, {
    body:    msg.body,
    icon:    '/travis_192.png',
    badge:   '/travis_192.png',

    // Use a timestamped tag so each notification is treated as new
    // → always triggers vibration + sound on Android
    tag:     'travis-ledger-reminder-' + Date.now(),

    // renotify:true — forces sound + vibration even if a notification
    // with the same tag was already shown
    renotify: true,

    // requireInteraction:true — notification stays on screen until
    // the user explicitly taps it (no auto-dismiss on Android)
    requireInteraction: true,

    // silent:false — explicitly request sound (respects system DND)
    silent: false,

    vibrate: [300, 100, 300, 100, 600], // buzz pattern in ms

    data: { url: '/travis_core.html', reminderId: reminder.id },

    actions: [
      { action: 'open',    title: '📒 Record now' },
      { action: 'dismiss', title: 'Later'          },
    ],
  });
}

// ─────────────────────────────────────────────────────────────
// INDEXEDDB FLAG HELPERS
// "acknowledged" = user tapped "Record now" on the 7 PM notif.
// Cleared at 7 PM each day so the cycle resets cleanly.
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
    const rec = await new Promise((res, rej) => {
      const req  = tx.objectStore('flags').get('acknowledged');
      req.onsuccess = () => res(req.result);
      req.onerror   = () => res(null);
    });
    db.close();
    if (!rec) return false;
    // Flag only counts if set today
    return rec.date === new Date().toDateString();
  } catch (e) { return false; }
}

async function setAcknowledgedFlag() {
  try {
    const db = await openFlagDB();
    const tx = db.transaction('flags', 'readwrite');
    await new Promise((res, rej) => {
      const req = tx.objectStore('flags').put({ key: 'acknowledged', date: new Date().toDateString() });
      req.onsuccess = () => res();
      req.onerror   = () => rej(req.error);
    });
    db.close();
  } catch (e) { /* non-fatal */ }
}

async function clearAcknowledgedFlag() {
  try {
    const db = await openFlagDB();
    const tx = db.transaction('flags', 'readwrite');
    await new Promise((res) => {
      const req = tx.objectStore('flags').delete('acknowledged');
      req.onsuccess = () => res();
      req.onerror   = () => res();
    });
    db.close();
  } catch (e) { /* non-fatal */ }
}
