import 'regenerator-runtime'; /* for async await transpile */
import CacheHelper from './utils/cache-helper';

const { assets } = [
  './',
  './incons/favicon-72x72.png',
  './incons/favicon-96x96.png',
  './incons/favicon-128x128.png',
  './incons/favicon-144x144.png',
  './incons/favicon-152x152.png',
  './incons/favicon-192x192.png',
  './incons/favicon-384x384.png',
  './incons/favicon-512x512.png',
  './favicon.png',
  './index.html',
  './app.bundle.js',
  './sw.bundle.js',
  './manifest.json',
  './api-endpoint.js',
  './config.js',
];

// implementasi service worker lifecycle
self.addEventListener('install', (event) => {
  console.log('Installing service worker...');
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  console.log('Activating service worker...');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching...', event.request.url);
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
