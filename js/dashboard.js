// ==========================================
// GERBOO TRADING ACADEMY
// Dashboard JavaScript
// ==========================================

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import { auth } from "./firebase.js";


// ==========================================
// GET ELEMENTS
// ==========================================

const userName = document.getElementById("userName");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const userAvatar = document.getElementById("userAvatar");
const logoutBtn = document.getElementById("logoutBtn");


// ==========================================
// CHECK AUTHENTICATION
// ==========================================

onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log("Logged-in user:", user);

        // ------------------------------------------
        // USER NAME
        // ------------------------------------------

        const displayName =
            user.displayName || "Trader";


        userName.textContent = displayName;

        profileName.textContent = displayName;


        // ------------------------------------------
        // USER EMAIL
        // ------------------------------------------

        profileEmail.textContent =
            user.email || "No email";


        // ------------------------------------------
        // USER AVATAR
        // ------------------------------------------

        const firstLetter =
            displayName.charAt(0).toUpperCase();


        userAvatar.textContent =
            firstLetter;

    } else {

        // ------------------------------------------
        // USER NOT LOGGED IN
        // ------------------------------------------

        console.log("No authenticated user.");

        window.location.href = "login.html";

    }

});


// ==========================================
// LOGOUT
// ==========================================

if (logoutBtn) {

    logoutBtn.addEventListener("click", async () => {

        try {

            await signOut(auth);

            console.log("User logged out.");

            window.location.href = "login.html";

        } catch (error) {

            console.error(
                "Logout error:",
                error
            );

            alert(
                "Unable to logout. Please try again."
            );

        }

    });

}