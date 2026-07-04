const CACHE_NAME = 'Travis_guardian-v1_1';

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

// ─────────────────────────────────────────────────────────────
// MESSAGES
// Written so they feel relevant whether or not the user
// already recorded something today — a gentle nudge, not
// an accusation.
// ─────────────────────────────────────────────────────────────
const SEVEN_PM_MESSAGES = [
  {
    title: '⏰ Travis — end of day check-in',
    body:  'Take a moment to review today\'s transactions. Even one missed entry can affect your monthly picture — a quick glance now keeps everything accurate.'
  },
  {
    title: '⏰ Daily financial check-in',
    body:  'Your ledger is most powerful when it\'s current. Tap to review today\'s transactions and make sure nothing was missed.'
  },
  {
    title: '⏰ One minute for your finances',
    body:  'A quick end-of-day review keeps your records sharp. Open Travis to confirm today\'s transactions are all captured.'
  },
  {
    title: '⏰ Travis daily reminder',
    body:  'The best financial records are built one day at a time. Take a moment to review what came in and went out today.'
  },
  {
    title: '⏰ Check in with Travis',
    body:  'Your end-of-month audit is only as good as your daily entries. A quick review now means better advice later.'
  },
];

const EIGHT_PM_MESSAGES = [
  {
    title: '🔔 Travis — evening follow-up',
    body:  'Before the day ends, it\'s worth a final look at your ledger. Any transaction — big or small — recorded today keeps your financial picture complete.'
  },
  {
    title: '🔔 Final check for today',
    body:  'Day\'s almost done. Open Travis for a last review of today\'s entries — even a single missed transaction is worth catching now rather than at month-end.'
  },
  {
    title: '🔔 Travis evening reminder',
    body:  'Good records come from consistent daily habits. Take 60 seconds before bed to confirm today\'s transactions are all in your ledger.'
  },
  {
    title: '🔔 Wrap up today with Travis',
    body:  'Your financial story is built entry by entry. A quick check before the day closes keeps every chapter accurate.'
  },
  {
    title: '🔔 One last look for today',
    body:  'Travis works best with complete records. A moment now to review today\'s transactions means sharper advice all month long.'
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
      .then(() => self.clients.claim())
  );
});

// ─────────────────────────────────────────────────────────────
// FETCH - UPDATED to always fetch fresh scripts and documents
// ─────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const req = event.request;

  if (req.url.includes('/activate-fingerprint')) {
    event.respondWith(fetch(req));
    return;
  }

  // Force fresh fetch for script files (always get latest)
  if (req.destination === 'script') {
    event.respondWith(
      fetch(req, { cache: 'no-store' })
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Force fresh fetch for HTML documents
  if (req.destination === 'document') {
    event.respondWith(
      fetch(req, { cache: 'no-store' })
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // For everything else (images, css, etc.), try cache first, then network
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
// MESSAGE FROM APP
// App sends SCHEDULE_REMINDERS every time it opens.
// We cancel any existing timers and set fresh ones so the
// countdown always starts from the current moment.
// ─────────────────────────────────────────────────────────────
self.addEventListener('message', event => {
  if (!event.data) return;

  if (event.data.type === 'SCHEDULE_REMINDERS') {
    scheduleReminders();
  }

  if (event.data.type === 'OPEN_LEDGER') {
    clients.matchAll({ type: 'window' }).then(list => {
      list.forEach(c => c.postMessage({ type: 'OPEN_LEDGER' }));
    });
  }
});

// ─────────────────────────────────────────────────────────────
// NOTIFICATION CLICK
// ─────────────────────────────────────────────────────────────
self.addEventListener('notificationclick', event => {
  event.notification.close();

  // "Later" — just dismiss
  if (event.action === 'dismiss') return;

  // "Review now" or body tap — open the app to the ledger
  const url = (event.notification.data && event.notification.data.url)
    || '/travis_core.html';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const c of list) {
        if (c.url.includes(self.location.origin) && 'focus' in c) {
          c.focus();
          c.postMessage({ type: 'OPEN_LEDGER' });
          return;
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// ─────────────────────────────────────────────────────────────
// SCHEDULER
// Called every time the app opens.
// Works out how many milliseconds until 7 PM and 8 PM today
// (or tomorrow if those times already passed) and sets a
// setTimeout for each. The OS keeps the SW alive long enough
// to fire them even with the screen locked.
//
// Why this works now when it didn't before:
// Previously the SW was idle and the OS killed it.
// Now the app pings the SW every time it opens, which resets
// the SW keep-alive timer. As long as the user opened the app
// at any point during the day, the SW stays warm enough to
// fire the 7 PM and 8 PM alarms.
// ─────────────────────────────────────────────────────────────

// Store timer IDs so we can cancel and replace them each time
// the app opens (prevents duplicate notifications)
const _timers = {};

function scheduleReminders() {
  // Cancel any existing timers first
  Object.keys(_timers).forEach(id => {
    clearTimeout(_timers[id]);
    delete _timers[id];
  });

  const slots = [
    { id: 'seven', hour: 19, minute: 0,  messages: SEVEN_PM_MESSAGES },
    { id: 'eight', hour: 20, minute: 0,  messages: EIGHT_PM_MESSAGES },
  ];

  slots.forEach(slot => {
    const now    = new Date();
    const target = new Date(now);
    target.setHours(slot.hour, slot.minute, 0, 0);

    // If the time already passed today push to tomorrow
    if (target <= now) target.setDate(target.getDate() + 1);

    const delay = target - now;

    // Pick a message that rotates by day of week so it never
    // feels like the exact same notification every day
    const msg = slot.messages[now.getDay() % slot.messages.length];

    _timers[slot.id] = setTimeout(() => {
      delete _timers[slot.id];
      fireNotification(slot.id, msg);
    }, delay);

    console.log(
      `[Travis SW] ${slot.id} reminder scheduled in ${Math.round(delay/1000/60)} minutes`
    );
  });
}

// ─────────────────────────────────────────────────────────────
// FIRE NOTIFICATION
// ─────────────────────────────────────────────────────────────
async function fireNotification(slotId, msg) {
  // Close any previous Travis notification with the same slot
  // tag so the new one always triggers sound + vibration
  const existing = await self.registration.getNotifications({
    tag: 'travis-' + slotId
  });
  existing.forEach(n => n.close());

  await self.registration.showNotification(msg.title, {
    body:    msg.body,
    icon:    '/travis_192.png',
    badge:   '/travis_192.png',

    // Unique tag per slot — ensures each slot has its own
    // notification entry in the shade and always makes sound
    tag:     'travis-' + slotId,
    renotify: true,

    // Stays on screen until user taps — does not auto-dismiss
    requireInteraction: true,

    // Explicitly request sound (honours system DND settings)
    silent: false,

    // Vibration pattern — short-long-short like a gentle alarm
    vibrate: slotId === 'eight'
      ? [400, 150, 400, 150, 800]   // slightly more insistent at 8 PM
      : [300, 100, 300, 100, 600],  // gentle at 7 PM

    data: { url: '/travis_core.html', slot: slotId },

    actions: [
      { action: 'open',    title: '📒 Review ledger' },
      { action: 'dismiss', title: 'Dismiss'           },
    ],
  });

  // After firing, re-schedule for the same slot tomorrow
  // so the cycle continues without needing the app to open again
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const target   = new Date(tomorrow);
  target.setHours(slotId === 'eight' ? 20 : 19, 0, 0, 0);
  const delay    = target - new Date();

  const allMessages = slotId === 'eight' ? EIGHT_PM_MESSAGES : SEVEN_PM_MESSAGES;
  const nextMsg     = allMessages[tomorrow.getDay() % allMessages.length];

  _timers[slotId + '_tomorrow'] = setTimeout(() => {
    delete _timers[slotId + '_tomorrow'];
    fireNotification(slotId, nextMsg);
  }, delay);
}
