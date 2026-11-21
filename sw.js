
self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", event => {
  let data = {};

  if (event.data) {
    data = event.data.json();
  }

  event.waitUntil(
    self.registration.showNotification(
      data.title || "KickOff ⚽",
      {
        body: data.body || "Ada pembaruan pertandingan!",
        icon: "/favicon.ico",
        badge: "/favicon.ico",
        tag: data.tag || "kickoff-update",
        data: {
          url: data.url || "/"
        }
      }
    )
  );
});

self.addEventListener("notificationclick", event => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(
      event.notification.data.url || "/"
    )
  );
});
