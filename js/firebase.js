// ==========================================
// GERBOO TRADING ACADEMY
// Firebase Configuration
// ==========================================

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import { getAuth } from
    "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


// ==========================================
// FIREBASE CONFIGURATION
// ==========================================

const firebaseConfig = {

    apiKey: "AIzaSyBsNniApE7DPt4EwDyRWig_kVYI9vCsKH0",

    authDomain: "trading-academy-facee.firebaseapp.com",

    projectId: "trading-academy-facee",

    storageBucket: "trading-academy-facee.firebasestorage.app",

    messagingSenderId: "581626681282",

    appId: "1:581626681282:web:cd0c8959e11771f033a85b",

    measurementId: "G-KZ5WF23SE3"

};


// ==========================================
// INITIALIZE FIREBASE
// ==========================================

const app = initializeApp(firebaseConfig);


// ==========================================
// INITIALIZE AUTHENTICATION
// ==========================================

const auth = getAuth(app);


// Export Firebase Authentication

export { auth };