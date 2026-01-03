const CACHE_NAME = 'dashboard-pwa-v4';
const ASSETS = [
  '/',
  '/index.html',
  '/pwa/manifest.json',
  '/assets/icons/icon.svg',
  '/apps/dalnice.html',
  '/apps/lol.html',
  '/apps/Odstavky.html',
  '/apps/Parametry_site.html',
  '/apps/prepocet_i.html',
  '/apps/work.html',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;500;600;800&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});