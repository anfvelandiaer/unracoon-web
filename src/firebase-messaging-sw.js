importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyDosGLagxaFgF54t8NBGCVwiGzJpZanCQw",
    authDomain: "unraccon.firebaseapp.com",
    databaseURL: "https://unraccon.firebaseio.com",
    projectId: "unraccon",
    storageBucket: "unraccon.appspot.com",
    messagingSenderId: "1014466017802",
    appId: "1:1014466017802:web:c1ba54664f6dea96c83df3",
    measurementId: "G-8QX09PE4XN"
});
const messaging = firebase.messaging();