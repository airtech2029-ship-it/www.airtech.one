const CACHE = 'airtech-v1';
const FILES = ['/', '/index.html', '/airtech-homepage.html', '/cart.html', '/login.html', '/search.html', '/product.html', '/tracking.html', '/checkout.html', '/vendor-login.html'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
