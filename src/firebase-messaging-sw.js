importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCWGCl7A6RSpvMAtiNT3Dgh8-52lZYH8Ns",
  authDomain: "messaging-fb.firebaseapp.com",
  projectId: "messaging-fb",
  storageBucket: "messaging-fb.appspot.com",
  messagingSenderId: "633110447760",
  appId: "1:633110447760:web:23d74b1e5ed68681a63a15"
});

const messaging = firebase.messaging();

// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
//   // ...
// });

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

// import { initializeApp } from "firebase/app";
// import { getMessaging, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//     apiKey: "AIzaSyCWGCl7A6RSpvMAtiNT3Dgh8-52lZYH8Ns",
//     authDomain: "messaging-fb.firebaseapp.com",
//     projectId: "messaging-fb",
//     storageBucket: "messaging-fb.appspot.com",
//     messagingSenderId: "633110447760",
//     appId: "1:633110447760:web:23d74b1e5ed68681a63a15"
// };

// const app = initializeApp(firebaseConfig);

// const messaging = getMessaging(app);

// onMessage(messaging, (payload) => {
//   console.log('Message received. ', payload);
//   // ...
// });