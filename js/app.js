// ======================================
// HHBW Navigation
// ======================================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const mobileTitle = document.getElementById("mobileTitle");
const navLinks = document.querySelectorAll(".nav-link");

// ------------------------------
// Open / Close Mobile Menu
// ------------------------------

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// ------------------------------
// Active Navigation
// ------------------------------

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        // Remove old active state
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        // Add new active state
        this.classList.add("active");

        // Change mobile title
        if (mobileTitle) {
            mobileTitle.textContent = this.textContent;
        }

        // Close menu on mobile
        navMenu.classList.remove("active");

    });

});

// ------------------------------
// Highlight section while scrolling
// ------------------------------

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

            if (mobileTitle) {

                mobileTitle.textContent = link.textContent;

            }

        }

    });

});