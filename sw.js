// sw.js - Service Worker Ringkas untuk Kebolehan Pemasangan (Installability)
const CACHE_NAME = 'krd-pdp-v1';

self.addEventListener('install', (event) => {
  // Service worker dipasang
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Diperlukan untuk PWA, boleh dibiarkan kosong untuk penggunaan asas
});
