// ==========================================
// GERBOO TRADING ACADEMY
// Authentication JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // GET ELEMENTS
    // ==========================================

    const registerForm = document.getElementById("registerForm");

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword =
        document.getElementById("toggleConfirmPassword");

    const registerError = document.getElementById("registerError");


    // ==========================================
    // SHOW / HIDE PASSWORD
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


    setupPasswordToggle(togglePassword, password);

    setupPasswordToggle(toggleConfirmPassword, confirmPassword);


    // ==========================================
    // REGISTER FORM
    // ==========================================

    if (registerForm) {

        registerForm.addEventListener("submit", (event) => {

            event.preventDefault();

            registerError.textContent = "";


            // Get values

            const fullName =
                document.getElementById("fullName").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const passwordValue = password.value;

            const confirmPasswordValue =
                confirmPassword.value;

            const terms =
                document.getElementById("terms").checked;


            // ==========================================
            // VALIDATION
            // ==========================================

            if (fullName.length < 2) {

                showError("Please enter your full name.");

                return;

            }


            if (!email) {

                showError("Please enter your email address.");

                return;

            }


            if (passwordValue.length < 8) {

                showError(
                    "Password must contain at least 8 characters."
                );

                return;

            }


            if (passwordValue !== confirmPasswordValue) {

                showError(
                    "Passwords do not match."
                );

                return;

            }


            if (!terms) {

                showError(
                    "Please accept the Terms & Conditions."
                );

                return;

            }


            // ==========================================
            // SUCCESS FOR NOW
            // ==========================================

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
    // ERROR FUNCTION
    // ==========================================

    function showError(message) {

        registerError.style.color = "#f87171";

        registerError.textContent = message;

    }

});