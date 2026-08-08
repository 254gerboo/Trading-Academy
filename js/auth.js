// ==========================================
// GERBOO TRADING ACADEMY
// Authentication JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // PASSWORD TOGGLE FUNCTION
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

    const password = document.getElementById("password");

    const confirmPassword =
        document.getElementById("confirmPassword");

    const togglePassword =
        document.getElementById("togglePassword");

    const toggleConfirmPassword =
        document.getElementById("toggleConfirmPassword");


    setupPasswordToggle(togglePassword, password);

    setupPasswordToggle(
        toggleConfirmPassword,
        confirmPassword
    );


    // ==========================================
    // LOGIN PASSWORD TOGGLE
    // ==========================================

    const loginPassword =
        document.getElementById("loginPassword");

    const toggleLoginPassword =
        document.getElementById("toggleLoginPassword");


    setupPasswordToggle(
        toggleLoginPassword,
        loginPassword
    );


    // ==========================================
    // REGISTER FORM
    // ==========================================

    const registerForm =
        document.getElementById("registerForm");


    if (registerForm) {

        registerForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const registerError =
                document.getElementById("registerError");

            registerError.style.color = "#f87171";

            registerError.textContent = "";


            const fullName =
                document.getElementById("fullName")
                .value
                .trim();

            const email =
                document.getElementById("email")
                .value
                .trim();

            const passwordValue =
                password.value;

            const confirmPasswordValue =
                confirmPassword.value;

            const terms =
                document.getElementById("terms").checked;


            // Validation

            if (fullName.length < 2) {

                showRegisterError(
                    "Please enter your full name."
                );

                return;

            }


            if (!email) {

                showRegisterError(
                    "Please enter your email address."
                );

                return;

            }


            if (passwordValue.length < 8) {

                showRegisterError(
                    "Password must contain at least 8 characters."
                );

                return;

            }


            if (passwordValue !== confirmPasswordValue) {

                showRegisterError(
                    "Passwords do not match."
                );

                return;

            }


            if (!terms) {

                showRegisterError(
                    "Please accept the Terms & Conditions."
                );

                return;

            }


            // Temporary success message

            registerError.style.color = "#4ade80";

            registerError.textContent =
                "Registration details are valid! Firebase will be connected soon.";

            console.log("Registration data:", {
                fullName,
                email
            });

        });

    }


    // ==========================================
    // LOGIN FORM
    // ==========================================

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const loginMessage =
                document.getElementById("loginMessage");


            loginMessage.textContent = "";

            loginMessage.style.color = "#f87171";


            const email =
                document.getElementById("loginEmail")
                .value
                .trim();

            const passwordValue =
                loginPassword.value;


            // Validation

            if (!email) {

                showLoginError(
                    "Please enter your email address."
                );

                return;

            }


            if (!passwordValue) {

                showLoginError(
                    "Please enter your password."
                );

                return;

            }


            if (passwordValue.length < 8) {

                showLoginError(
                    "Password must contain at least 8 characters."
                );

                return;

            }


            // Temporary success message

            loginMessage.style.color = "#4ade80";

            loginMessage.textContent =
                "Login details are valid! Firebase will be connected soon.";

            console.log("Login attempt:", {
                email
            });

        });

    }


    // ==========================================
    // ERROR FUNCTIONS
    // ==========================================

    function showRegisterError(message) {

        const error =
            document.getElementById("registerError");

        if (!error) return;

        error.style.color = "#f87171";

        error.textContent = message;

    }


    function showLoginError(message) {

        const messageBox =
            document.getElementById("loginMessage");

        if (!messageBox) return;

        messageBox.style.color = "#f87171";

        messageBox.textContent = message;

    }

});