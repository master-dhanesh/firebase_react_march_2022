let CACHE_NAME = "REACT:PWA:VERSION:1";

const self = this;

self.addEventListener("install", (event) => {
  event.waitUntill(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll([
        "/css/bootstrap.min.css",
        "/static/js/bundle.js",
        "/manifest.json",
        "/logo192.png",
        "/logo512.png",
        "/favicon.ico",
        "/index.html",
        "/",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) return response;
      })
    );
  }
});

self.addEventListener("activate", (event) => {
  const cacheList = [];
  cacheList.push(CACHE_NAME);

  event.waitUntill(
    caches.keys().then((cacheName) =>
      Promise.all(
        cacheName.map((cacheName) => {
          if (!cacheList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
