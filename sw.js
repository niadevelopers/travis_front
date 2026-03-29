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
  '/manifest.json'
];



const REMINDERS = [
  { hour: 19, minute: 0  },  
  { hour: 21, minute: 30 },   
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


self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
});

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
        scheduleNextReminder(); 
      })
  );
});

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

self.addEventListener('notificationclick', event => {
  event.notification.close();

  // 'Later' action — just dismiss, next reminder still fires tonight
  if (event.action === 'dismiss') return;

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

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'RESCHEDULE') {
    scheduleNextReminder();
  }
});

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
    scheduleNextReminder(); 
  }, minDiff);
}

async function maybeFireReminder() {
  const alreadyRecorded = await getTodayFlag();
  if (alreadyRecorded) return; // user was disciplined — stay quiet

  const msg = REMINDER_MESSAGES[new Date().getDate() % REMINDER_MESSAGES.length];

  await self.registration.showNotification(msg.title, {
    body:             msg.body,
    icon:             '/travis_192.png',  
    badge:            '/travis_192.png',   
    tag:              'travis-ledger-reminder', 
    renotify:         false,
    requireInteraction: false,
    silent:           false,
    data: {
      url: '/travis_core.html',           
    },
    actions: [
      { action: 'open',    title: 'Record now' },
      { action: 'dismiss', title: 'Later'      },
    ],
  });
}

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
