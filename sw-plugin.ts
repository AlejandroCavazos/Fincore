import type { Plugin } from 'vite'

/**
 * Emits `sw.js` at build time with the exact list of generated assets to precache,
 * so the whole app (all lessons, exercises and tools) works offline after the first visit.
 * Strategy: precache on install; cache-first for same-origin assets; network-first for
 * navigations with the cached index.html as offline fallback. Old caches are removed on activate.
 */
export function serviceWorkerPlugin(): Plugin {
  return {
    name: 'fincore-sw',
    apply: 'build',
    generateBundle(_opts, bundle) {
      const files = Object.keys(bundle).filter((f) => !f.endsWith('.map'))
      const statics = ['favicon.svg', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png', 'icons/apple-touch-icon.png']
      const precache = Array.from(new Set(['./', ...files, ...statics].map((f) => (f === './' ? f : `./${f}`))))
      const version = Date.now().toString(36)
      const source = `/* FINCORE service worker — generated at build time */
const CACHE = 'fincore-${version}';
const PRECACHE = ${JSON.stringify(precache, null, 0)};
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('fincore-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put('./', copy));
      return res;
    }).catch(() => caches.match('./', { ignoreVary: true }).then((r) => r || caches.match('./index.html', { ignoreVary: true }))));
    return;
  }
  e.respondWith(caches.match(req, { ignoreVary: true }).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  })));
});
`
      this.emitFile({ type: 'asset', fileName: 'sw.js', source })
    },
  }
}
