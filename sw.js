const CACHE_NAME = 'Travis_guardian-v1_0';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/travis_core.html',
  '/input-app.css',
  '/input-landing.css',
  '/script.js',
  '/tailwind-app.css',
  '/tailwind-landing.css',
  '/manifest.json'
];

// ============================================================
//  TRAVIS — Daily Ledger Reminder
//  Change these two times to suit your users.
//  Hour is 24-hour format. Both fire only if user hasn't
//  recorded a transaction that day.
// ============================================================

const REMINDERS = [
  { hour: 19, minute: 0  },   // 7:00 PM  — primary reminder
  { hour: 21, minute: 30 },   // 9:30 PM  — fallback if still unrecorded
];

const REMINDER_MESSAGES = [
  {
    title: 'Hey, quick check-in',
    body:  "Have you recorded today's transactions? Travis needs them to keep your advice accurate — it takes under a minute.",
  },
  {
    title: 'Your ledger is waiting',
    body:  "A day without entries means Travis is working with yesterday's numbers. Tap to log what came in and went out today.",
  },
  {
    title: "Don't let today slip by",
    body:  "Accurate records are what make Travis's advice useful. Take a moment to log today's transactions.",
  },
  {
    title: 'One small habit, big difference',
    body:  "Recording today's transactions keeps your financial picture sharp. It only takes a moment — tap to open Travis.",
  },
  {
    title: 'Travis reminder',
    body:  "Today's numbers aren't in yet. The more current your records, the more accurate your advice. Tap to update your ledger.",
  },
];

// ============================================================
//  INSTALL — cache static assets (your original logic, unchanged)
// ============================================================

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
});

// ============================================================
//  ACTIVATE — clear old caches + start notification scheduler
// ============================================================

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names =>
        Promise.all(
          names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
        )
      )
      .then(() => {
        self.clients.claim();
        scheduleNextReminder(); // ← notification engine starts here
      })
  );
});

// ============================================================
//  FETCH — your original strategy, unchanged
// ============================================================

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

// ============================================================
//  NOTIFICATION CLICK — tap opens app to ledger
// ============================================================

self.addEventListener('notificationclick', event => {
  event.notification.close();

  // 'Later' action — just dismiss, next reminder still fires tonight
  if (event.action === 'dismiss') return;

  // Tap on body or 'Record now' — open or focus the app
  const targetUrl = (event.notification.data && event.notification.data.url) || '/travis_core.html';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(windowClients => {
        for (const client of windowClients) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            client.focus();
            client.postMessage({ type: 'OPEN_LEDGER' });
            return;
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(targetUrl);
        }
      })
  );

  scheduleNextReminder();
});

// ============================================================
//  MESSAGE FROM APP
//  App sends RESCHEDULE after user saves a transaction —
//  this suppresses the 9:30 PM fallback if 7 PM already fired.
// ============================================================

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'RESCHEDULE') {
    scheduleNextReminder();
  }
});

// ============================================================
//  SCHEDULER — finds the nearest upcoming reminder time
//  and sets a setTimeout chain. Re-arms itself every cycle
//  so it keeps running day after day.
// ============================================================

function scheduleNextReminder() {
  const now     = new Date();
  let nearest   = null;
  let minDiff   = Infinity;

  for (const r of REMINDERS) {
    const target = new Date(now);
    target.setHours(r.hour, r.minute, 0, 0);

    // If this slot already passed today, push to tomorrow
    if (target <= now) target.setDate(target.getDate() + 1);

    const diff = target - now;
    if (diff < minDiff) {
      minDiff = diff;
      nearest = { target, hour: r.hour, minute: r.minute };
    }
  }

  if (!nearest) return;

  setTimeout(async () => {
    await maybeFireReminder();
    scheduleNextReminder(); // chain — keeps going every day
  }, minDiff);
}

// ============================================================
//  FIRE LOGIC — checks if user already recorded today
//  before showing the notification. Silent if they did.
// ============================================================

async function maybeFireReminder() {
  const alreadyRecorded = await getTodayFlag();
  if (alreadyRecorded) return; // user was disciplined — stay quiet

  const msg = REMINDER_MESSAGES[new Date().getDate() % REMINDER_MESSAGES.length];

  await self.registration.showNotification(msg.title, {
    body:             msg.body,
    icon:             '/icons/icon-192x192.png',  // update to your actual icon path
    badge:            '/icons/badge-72x72.png',   // small monochrome icon for Android status bar
    tag:              'travis-ledger-reminder',   // replaces previous unread reminder
    renotify:         false,
    requireInteraction: false,
    silent:           false,
    data: {
      url: '/travis_core.html',                   // deep-links into your main app
    },
    actions: [
      { action: 'open',    title: 'Record now' },
      { action: 'dismiss', title: 'Later'      },
    ],
  });
}

// ============================================================
//  IDB BRIDGE
//  Reads the "today recorded" flag that travis-notif.js writes
//  when the user saves a transaction.
// ============================================================

function getTodayFlag() {
  return new Promise(resolve => {
    const req = indexedDB.open('travis-notif-db', 1);

    req.onupgradeneeded = e => {
      e.target.result.createObjectStore('flags', { keyPath: 'key' });
    };

    req.onsuccess = e => {
      const db    = e.target.result;
      const tx    = db.transaction('flags', 'readonly');
      const store = tx.objectStore('flags');
      const get   = store.get('today-recorded');

      get.onsuccess = () => {
        const rec = get.result;
        if (!rec) { resolve(false); return; }
        // Only valid if the flag was written today
        resolve(rec.date === new Date().toDateString());
      };
      get.onerror = () => resolve(false);
    };

    req.onerror = () => resolve(false);
  });
}