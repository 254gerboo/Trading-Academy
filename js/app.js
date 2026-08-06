// ==========================================
// Gerboo Trading Academy
// Main JavaScript File
// ==========================================

// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ Gerboo Trading Academy Loaded");

    enableSmoothScrolling();

});

// ==========================================
// Smooth Scrolling
// ==========================================

function enableSmoothScrolling() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

}