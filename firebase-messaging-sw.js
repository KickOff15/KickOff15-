
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDhU-NVL2w4KnDl8dspiVgWpAwFaHEUPGM"
  authDomain: "kickoff15-8451f.firebaseapp.com",
  projectId: "kickoff15-8451f",
  storageBucket: "kickoff15-8451f.firebasestorage.app",
  messagingSenderId: "893793531490",
  appId: "1:893793531490:web:b43f89d68903e3fa39433b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title || "KickOff",
    {
      body: payload.notification.body || "Ada pembaruan pertandingan!",
      icon: "/favicon.ico"
    }
  );
});
