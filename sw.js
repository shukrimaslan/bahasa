// ─────────────────────────────────────────────────────────────
//  BMvocab — Service Worker
//  Strategy: Cache-first for app shell, network-first for Firebase
//
//  HOW TO UPDATE: bump CACHE_VERSION whenever you change HTML/JS/CSS.
//  The old cache is deleted automatically on the next visit.
// ─────────────────────────────────────────────────────────────

const CACHE_VERSION = "bmvocab-v4";

// Files that make up the app shell — cached on install.
// Users can play flashcards and quiz offline with these cached.
const APP_SHELL = [
  "./",
  "./index.html",
  "./bm-words.js",
  "./manifest.json",
  // Google Fonts (pre-cached so the app looks right offline)
  "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Baloo+2:wght@400;600;700;800&display=swap",
];

// Domains that should always go to the network (Firebase, fonts content)
const NETWORK_ONLY_HOSTS = [
  "firestore.googleapis.com",
  "identitytoolkit.googleapis.com",
  "securetoken.googleapis.com",
  "www.gstatic.com",          // Firebase SDK CDN
];

// ── Install: cache the app shell ─────────────────────────────
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      // addAll fails silently for non-critical assets (fonts CDN may vary)
      return cache.addAll(APP_SHELL).catch(err => {
        console.warn("[SW] Some shell files failed to cache:", err);
      });
    }).then(() => self.skipWaiting())  // activate immediately, don't wait
  );
});

// ── Activate: delete old caches ───────────────────────────────
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_VERSION)
          .map(key => {
            console.log("[SW] Deleting old cache:", key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())  // take control of all open tabs
  );
});

// ── Fetch: cache-first for shell, network-first for Firebase ──
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Always go to network for Firebase & auth calls
  if (NETWORK_ONLY_HOSTS.some(host => url.hostname.includes(host))) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Cache-first for everything else (app shell, words file, fonts)
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Not in cache — fetch from network and cache the response
      return fetch(event.request).then(response => {
        // Only cache valid GET responses
        if (
          !response ||
          response.status !== 200 ||
          response.type === "opaque" ||
          event.request.method !== "GET"
        ) {
          return response;
        }

        const toCache = response.clone();
        caches.open(CACHE_VERSION).then(cache => {
          cache.put(event.request, toCache);
        });

        return response;
      }).catch(() => {
        // Network failed and nothing in cache —
        // return a simple offline page for navigation requests
        if (event.request.mode === "navigate") {
          return caches.match("./");
        }
      });
    })
  );
});
