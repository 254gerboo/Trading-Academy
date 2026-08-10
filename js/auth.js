// ==========================================
// GERBOO TRADING ACADEMY
// Authentication
// ==========================================

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import { auth } from "./firebase.js";


document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // PASSWORD TOGGLE
    // ==========================================

    function setupPasswordToggle(button, input) {

        if (!button || !input) return;

        button.addEventListener("click", () => {

            const isPassword = input.type === "password";

            input.type = isPassword ? "text" : "password";

            const icon = button.querySelector("i");

            icon.classList.toggle("fa-eye");
            icon.classList.toggle("fa-eye-slash");

            button.setAttribute(
                "aria-label",
                isPassword ? "Hide password" : "Show password"
            );

        });

    }


    // ==========================================
    // REGISTER PASSWORD TOGGLES
    // ==========================================

    setupPasswordToggle(
        document.getElementById("togglePassword"),
        document.getElementById("password")
    );

    setupPasswordToggle(
        document.getElementById("toggleConfirmPassword"),
        document.getElementById("confirmPassword")
    );


    // ==========================================
    // LOGIN PASSWORD TOGGLE
    // ==========================================

    setupPasswordToggle(
        document.getElementById("toggleLoginPassword"),
        document.getElementById("loginPassword")
    );


    // ==========================================
    // REGISTER
    // ==========================================

    const registerForm =
        document.getElementById("registerForm");


    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();

                const message =
                    document.getElementById("registerError");

                message.textContent = "";

                message.style.color = "#f87171";


                const fullName =
                    document.getElementById("fullName")
                    .value
                    .trim();

                const email =
                    document.getElementById("email")
                    .value
                    .trim();

                const password =
                    document.getElementById("password")
                    .value;

                const confirmPassword =
                    document.getElementById("confirmPassword")
                    .value;

                const terms =
                    document.getElementById("terms")
                    .checked;


                // Validation

                if (fullName.length < 2) {

                    showMessage(
                        message,
                        "Please enter your full name."
                    );

                    return;
                }


                if (!email) {

                    showMessage(
                        message,
                        "Please enter your email address."
                    );

                    return;
                }


                if (password.length < 8) {

                    showMessage(
                        message,
                        "Password must contain at least 8 characters."
                    );

                    return;
                }


                if (password !== confirmPassword) {

                    showMessage(
                        message,
                        "Passwords do not match."
                    );

                    return;
                }


                if (!terms) {

                    showMessage(
                        message,
                        "Please accept the Terms & Conditions."
                    );

                    return;
                }


                // ==========================================
                // CREATE FIREBASE ACCOUNT
                // ==========================================

                try {

                    const userCredential =
                        await createUserWithEmailAndPassword(
                            auth,
                            email,
                            password
                        );


                    const user =
                        userCredential.user;


                    // Save user's display name

                    await updateProfile(user, {
                        displayName: fullName
                    });


                    message.style.color = "#4ade80";

                    message.textContent =
                        "Account created successfully!";


                    console.log(
                        "Firebase user created:",
                        user.uid
                    );


                    // Redirect later when dashboard exists

                    // window.location.href = "dashboard.html";


                } catch (error) {

                    console.error(
                        "Registration error:",
                        error
                    );


                    handleFirebaseError(
                        message,
                        error
                    );

                }

            }
        );

    }


    // ==========================================
    // LOGIN
    // ==========================================

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();


                const message =
                    document.getElementById("loginMessage");

                message.textContent = "";

                message.style.color = "#f87171";


                const email =
                    document.getElementById("loginEmail")
                    .value
                    .trim();

                const password =
                    document.getElementById("loginPassword")
                    .value;


                if (!email) {

                    showMessage(
                        message,
                        "Please enter your email address."
                    );

                    return;
                }


                if (!password) {

                    showMessage(
                        message,
                        "Please enter your password."
                    );

                    return;
                }


                // ==========================================
                // FIREBASE LOGIN
                // ==========================================

                try {

                    const userCredential =
                        await signInWithEmailAndPassword(
                            auth,
                            email,
                            password
                        );


                    const user =
                        userCredential.user;


                    message.style.color = "#4ade80";

                    message.textContent =
                        "Login successful!";


                    console.log(
                        "Logged in user:",
                        user.uid
                    );


                    // go to dashboard

                    window.location.href = "dashboard.html";


                } catch (error) {

                    console.error(
                        "Login error:",
                        error
                    );


                    handleFirebaseError(
                        message,
                        error
                    );

                }

            }
        );

    }


    // ==========================================
    // MESSAGE FUNCTION
    // ==========================================

    function showMessage(element, message) {

        element.textContent = message;

    }


    // ==========================================
    // FIREBASE ERROR HANDLING
    // ==========================================

    function handleFirebaseError(element, error) {

        switch (error.code) {

            case "auth/email-already-in-use":

                element.textContent =
                    "An account with this email already exists.";

                break;


            case "auth/invalid-email":

                element.textContent =
                    "Please enter a valid email address.";

                break;


            case "auth/weak-password":

                element.textContent =
                    "The password is too weak.";

                break;


            case "auth/invalid-credential":

                element.textContent =
                    "Incorrect email or password.";

                break;


            case "auth/user-not-found":

                element.textContent =
                    "No account was found with this email.";

                break;


            case "auth/wrong-password":

                element.textContent =
                    "Incorrect password.";

                break;


            default:

                element.textContent =
                    "Something went wrong. Please try again.";

                console.error(error);

        }

    }

});