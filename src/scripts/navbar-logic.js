const linkArray = document.getElementsByClassName("nav-link");
// console.log(linkArray);

// GET CURRENT URL OF PAGE
const currentUrl = window.location.href;
// console.log(currentUrl);
const navbar = document.getElementById("navbar");
// GRAB NAVBAR LINKS
const home = document.getElementById("navbar__home");
const about = document.getElementById("navbar__about");
const links = document.getElementById("navbar__links");
const contact = document.getElementById("navbar__contact");

const upArrow = document.getElementById("top-arrow");

// ========== ACTIVE NAVLINKS HIGHLIGHT ==========

// ADD active-link CLASS TO CURRENT PAGE'S LINK
const addActiveClassToCurrrent = () => {
    // console.log(currentUrl);
    // ADD ACTIVE CLASS TO CURRENT
    if (currentUrl.includes("index")) {
        home.classList.add("active-link");
    } else if (currentUrl.includes("about")) {
        about.classList.add("active-link");
    } else if (currentUrl.includes("links")) {
        links.classList.add("active-link");
    } else if (currentUrl.includes("contact")) {
        contact.classList.add("active-link");
    } else {
        home.classList.add("active-link");
    }
};

addActiveClassToCurrrent();

// MOBILE SIZE MENU EXPAND/COLLAPSE
let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");
navToggle.addEventListener("click", function () {
    if (navWrapper.classList.contains("active")) {
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
    } else {
        navWrapper.classList.add("active");
        this.setAttribute("aria-label", "close menu");
        this.setAttribute("aria-expanded", "true");
    }
});

// HIDE/SHOW UP ARROW
const handleUpArrow = () => {
    // USE ABOUT SECTION AS TRIGGER
    let aboutSectionRect = document
        .getElementById("about-section")
        .getBoundingClientRect().top;
    // ONLY MAKE UP ARROW VISIBLE IF USER SCROLLED PAST APP SECTION
    if (aboutSectionRect < 200) {
        upArrow.classList.remove("hidden");
    } else {
        upArrow.classList.add("hidden");
    }
};

// ADD STICKY CLASS TO NAVBAR WHEN ITS SCROLL POSITION IS REACHED AND REMOVE WHEN IT LEAVES POSITION

// GET NAVBAR OFFSET
const sticky = navbar.offsetTop;

const makeNavbarSticky = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

// SCROLL EVENTS (STICKY NAVBAR AND HIDE/SHOW UP ARROW)

// PAGE SCROLL
window.onscroll = function () {
    makeNavbarSticky();
    handleUpArrow();
};

// SMOOTH SCROLL INTO VIEW:
// SOURCE: https://codepen.io/ekfuhrmann/pen/pVvpqM
// To Section
const navLinks = document.querySelectorAll(".nav-link");

Array.from(navLinks).forEach((navLink) => {
    const href = navLink.getAttribute("href");
    const section = document.querySelector(href);
    const offset = 50 + 100; // nav and offset

    navLink.onclick = (e) => {
        // console.log("navlink clicked", navLink);
        // BODY POSITION
        const bodyRect = document.body.getBoundingClientRect().top;
        // SECTION POSITION RELATIVE
        const sectionRect = section.getBoundingClientRect().top;
        // SUBTRACT SECTION FROM BODY
        const sectionPosition = sectionRect - bodyRect;
        // SUBTRACT OFFSET
        const offsetPosition = sectionPosition - offset;

        e.preventDefault();
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };
});

// UP ARROW
upArrow.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
};
