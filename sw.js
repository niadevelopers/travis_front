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
  '/backup-reconcile.js',
  '/total-split.js',
  '/ui-tweaks.js',
  '/manifest.json',
  '/jspdf.umd.min.js'
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
      .then(() => self.clients.claim())
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

self.addEventListener('push', event => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) {}

  const title = data.title || 'Travis Guardian';
  const body  = data.body  || 'Time to record your transactions.';

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon:  '/travis_192.png',
      badge: '/travis_192.png',
      tag:   'travis-ledger-reminder',
      renotify: true,
      vibrate: [200, 100, 200, 100, 200],
      data: { url: '/travis_core.html' },
      actions: [
        { action: 'open',    title: 'Record now' },
        { action: 'dismiss', title: 'Later'      }
      ]
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();

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
});
