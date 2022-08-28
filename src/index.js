import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCWGCl7A6RSpvMAtiNT3Dgh8-52lZYH8Ns",
    authDomain: "messaging-fb.firebaseapp.com",
    projectId: "messaging-fb",
    storageBucket: "messaging-fb.appspot.com",
    messagingSenderId: "633110447760",
    appId: "1:633110447760:web:23d74b1e5ed68681a63a15"
};

const notifBtn = document.querySelector('.notif-btn');

notifBtn.addEventListener('click', requestPermission)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getToken(messaging, {vapidKey: "BIOQobLWJszJNVdH3szVLR0Vx9hfDnwsl3QFl3SKHo6B9NSAXZ_ACQDWzmwZGVum0vtfm7F85UjggFfBH9RLONw"})
        .then((currentToken) => {
            if (currentToken) {
                console.log(currentToken);
            } else {
              // Show permission request UI
              console.log('No registration token available. Request permission to generate one.');
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
          });

      }
    })

}