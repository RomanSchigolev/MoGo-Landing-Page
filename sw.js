self.addEventListener('install', event => {
  event.waitUntil(
    caches.open("static")
      .then(cache => cache.addAll(["./", "./styles/main.css", "./styles/media.css", "./img/ipad.png"]))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});