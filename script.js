/* =========================================================
   JS FITNESS CLUB - PREMIUM JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        menuButton.classList.toggle("active");

    });

}


/* ================= CLOSE MOBILE MENU ================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuButton) {
            menuButton.classList.remove("active");
        }

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a[href^='#']");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

function navbarEffect() {

    if (!navbar) return;

    if (window.scrollY > 60) {

        navbar.style.background =
            "rgba(5, 5, 5, 0.96)";

        navbar.style.boxShadow =
            "0 8px 30px rgba(0, 0, 0, 0.45)";

    } else {

        navbar.style.background =
            "rgba(5, 5, 5, 0.88)";

        navbar.style.boxShadow =
            "none";

    }

}

window.addEventListener(
    "scroll",
    navbarEffect
);

navbarEffect();


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".about-content, " +
    ".membership-card, " +
    ".why-card, " +
    ".facility-card, " +
    ".service-card, " +
    ".gallery-item, " +
    ".contact-item"
);


function revealOnScroll() {

    revealElements.forEach((element) => {

        const elementPosition =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (
            elementPosition <
            windowHeight - 70
        ) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ================= STAGGER CARD ANIMATION ================= */

const animatedGroups = [
    ".membership-card",
    ".why-card",
    ".facility-card",
    ".service-card",
    ".gallery-item"
];


animatedGroups.forEach((selector) => {

    const elements =
        document.querySelectorAll(selector);

    elements.forEach((element, index) => {

        element.style.transitionDelay =
            `${index * 0.08}s`;

    });

});


/* ================= COUNTER ANIMATION ================= */

const counters =
    document.querySelectorAll(".stat h3");

let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    const statsSection =
        document.querySelector(".hero-stats");

    if (!statsSection) return;

    const sectionPosition =
        statsSection.getBoundingClientRect().top;

    if (
        sectionPosition <
        window.innerHeight
    ) {

        countersStarted = true;

        counters.forEach((counter) => {

            const originalText =
                counter.innerText.trim();

            let target = 0;
            let suffix = "";

            if (originalText.includes("+")) {

                target =
                    parseInt(originalText);

                suffix = "+";

            } else if (
                originalText.includes("%")
            ) {

                target =
                    parseInt(originalText);

                suffix = "%";

            } else if (
                originalText.includes("/")
            ) {

                counter.innerText =
                    originalText;

                return;

            }


            let current = 0;

            const duration = 1000;

            const increment =
                target / (duration / 20);


            const timer =
                setInterval(() => {

                    current += increment;

                    if (
                        current >= target
                    ) {

                        current = target;

                        clearInterval(timer);

                    }

                    counter.innerText =
                        Math.floor(current) +
                        suffix;

                }, 20);

        });

    }

}

window.addEventListener(
    "scroll",
    startCounters
);

startCounters();


/* ================= MEMBERSHIP BUTTONS ================= */

const membershipButtons =
    document.querySelectorAll(".plan-button");


membershipButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const card =
                button.closest(
                    ".membership-card"
                );

            const plan =
                card?.querySelector(
                    ".plan-top small"
                );

            if (plan) {

                console.log(
                    "Membership selected:",
                    plan.innerText
                );

            }

        }
    );

});


/* ================= ESCAPE KEY ================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            if (navLinks) {
                navLinks.classList.remove("active");
            }

            if (menuButton) {
                menuButton.classList.remove("active");
            }

        }

    }
);


/* ================= GALLERY HOVER EFFECT ================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");


galleryItems.forEach((item) => {

    item.addEventListener(
        "mouseenter",
        () => {

            item.style.zIndex = "5";

        }
    );


    item.addEventListener(
        "mouseleave",
        () => {

            item.style.zIndex = "1";

        }
    );

});


/* ================= SMOOTH BUTTON FEEDBACK ================= */

const buttons =
    document.querySelectorAll(
        ".btn, .plan-button, .contact-btn"
    );


buttons.forEach((button) => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.cursor =
                "pointer";

        }
    );

});


/* ================= PREVENT BROKEN IMAGE LOOK ================= */

const images =
    document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener(
        "error",
        () => {

            image.style.opacity = "0.35";

            console.log(
                "Image not found:",
                image.getAttribute("src")
            );

        }
    );

});


/* ================= PAGE LOAD ================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

        revealOnScroll();
        updateActiveNavigation();

    }
);


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "JS Fitness Club website loaded successfully!"
);