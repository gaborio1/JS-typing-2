const linksArray = document.getElementsByClassName("nav-link");
const navLinks = document.querySelectorAll(".nav-link");
// console.log(linksArray);

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
// const addActiveClassToCurrrent = () => {
//     console.log(currentUrl);
//     // ADD ACTIVE CLASS TO CURRENT
//     if (currentUrl.includes("index")) {
//         home.classList.add("active-link");
//     } else if (currentUrl.includes("about")) {
//         about.classList.add("active-link");
//     } else if (currentUrl.includes("links")) {
//         links.classList.add("active-link");
//     } else if (currentUrl.includes("contact")) {
//         contact.classList.add("active-link");
//     } else {
//         home.classList.add("active-link");
//     }
//     for (let i = 0; i < linksArray.length; i += 1) {}
// };

// addActiveClassToCurrrent();

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

// !!! REFACTOR THIS !!!
// HIGHLIGHT ACTIVE LINK BASED ON CURRENT SCROLL POSITION
const highlightActiveLink = () => {
    let homeSectionRect = document
        .getElementById("app-section-trigger")
        .getBoundingClientRect().top;
    let aboutSectionRect = document
        .getElementById("about-section")
        .getBoundingClientRect().top;
    let linksSectionRect = document
        .getElementById("links-section")
        .getBoundingClientRect().top;
    let contactSectionRect = document
        .getElementById("contact-section")
        .getBoundingClientRect().top;

    // setTimeout(() => {
    //     if (homeSectionRect < 200 && homeSectionRect > -1) {
    //         console.log("home");
    //         for (let i = 0; i < Array.from(navLinks).length; i += 1) {
    //             Array.from(navLinks)[i].classList.remove("active-link");
    //         }
    //         home.classList.add("active-link");
    //     }
    //     if (aboutSectionRect < 200 && aboutSectionRect > -1) {
    //         console.log("about");
    //         for (let i = 0; i < Array.from(navLinks).length; i += 1) {
    //             Array.from(navLinks)[i].classList.remove("active-link");
    //         }
    //         about.classList.add("active-link");
    //     }
    //     if (linksSectionRect < 200 && linksSectionRect > -1) {
    //         console.log("links");
    //         for (let i = 0; i < Array.from(navLinks).length; i += 1) {
    //             Array.from(navLinks)[i].classList.remove("active-link");
    //         }
    //         links.classList.add("active-link");
    //     }
    //     if (contactSectionRect < 500 && contactSectionRect > -1) {
    //         console.log("contact");
    //         for (let i = 0; i < Array.from(navLinks).length; i += 1) {
    //             Array.from(navLinks)[i].classList.remove("active-link");
    //         }
    //         contact.classList.add("active-link");
    //     }
    // }, 500);

    if (homeSectionRect < 200 && homeSectionRect > -1) {
        console.log("home");
        for (let i = 0; i < Array.from(navLinks).length; i += 1) {
            Array.from(navLinks)[i].classList.remove("active-link");
        }
        home.classList.add("active-link");
    }
    if (aboutSectionRect < 200 && aboutSectionRect > -1) {
        console.log("about");
        for (let i = 0; i < Array.from(navLinks).length; i += 1) {
            Array.from(navLinks)[i].classList.remove("active-link");
        }
        about.classList.add("active-link");
    }
    if (linksSectionRect < 200 && linksSectionRect > -1) {
        console.log("links");
        for (let i = 0; i < Array.from(navLinks).length; i += 1) {
            Array.from(navLinks)[i].classList.remove("active-link");
        }
        links.classList.add("active-link");
    }
    if (contactSectionRect < 500 && contactSectionRect > -1) {
        console.log("contact");
        for (let i = 0; i < Array.from(navLinks).length; i += 1) {
            Array.from(navLinks)[i].classList.remove("active-link");
        }
        contact.classList.add("active-link");
    }
};
// HIDE/SHOW UP ARROW
const handleUpArrow = () => {
    // USE ABOUT SECTION AS TRIGGER
    let aboutSectionRect = document
        .getElementById("about-section")
        .getBoundingClientRect().top;

    // console.log(aboutSectionRect);

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
    highlightActiveLink();
};

// SMOOTH SCROLL INTO VIEW:
// SOURCE: https://codepen.io/ekfuhrmann/pen/pVvpqM
// To Section

Array.from(navLinks).forEach((navLink) => {
    const href = navLink.getAttribute("href");
    const section = document.querySelector(href);
    const offset = 50 + 100; // nav and offset

    // ADD active-link CLASS TO CURRENT PAGE'S LINK
    navLink.onclick = (e) => {
        for (let i = 0; i < Array.from(navLinks).length; i += 1) {
            Array.from(navLinks)[i].classList.remove("active-link");
        }
        // navLink.classList.add("active-link");

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
            // behavior: "smooth",
        });
    };
});

// UP ARROW
upArrow.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
};
