// ========== ACTIVE NAVLINKS HIGHLIGHT ==========

const linkArray = document.getElementsByClassName("nav-link");
// console.log(linkArray);

// GET CURRENT URL OF PAGE
const currentUrl = window.location.href;
// console.log(currentUrl);
// GRAB NAVBAR LINKS
const home = document.getElementById("navbar__home");
const about = document.getElementById("navbar__about");
const links = document.getElementById("navbar__links");
const contact = document.getElementById("navbar__contact");

// REMOVE ACTIVE CLASS FROM ALL
// for (let i = 0; i < linkArray.length; i += 1) {
//     // linkArray[i].classList.remove("active-link");
//     linkArray[i].addEventListener("click", function () {
//         // console.log("link clicked");
//         console.log(linkArray[i]);
//         // console.log(this);
//         linkArray[i].classList.remove("active-link");
//         // document.querySelector(".site-header").style.background = "red";
//     });
// }

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

// SCROLL EVENTS (STICKY NAVBAR AND HIDE/SHOW UP ARROW)
const upArrow = document.getElementById("top-arrow");
// let aboutSectionRect = document.getElementById("about-section").getBoundingClientRect().top;
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
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
    myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    // console.log(window.pageYOffset);
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

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
        // get body position
        const bodyRect = document.body.getBoundingClientRect().top;
        // get section position relative
        const sectionRect = section.getBoundingClientRect().top;
        // subtract the section from body
        const sectionPosition = sectionRect - bodyRect;
        // subtract offset
        const offsetPosition = sectionPosition - offset;

        e.preventDefault();
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };
});

// To Top
document.querySelector("#top").onclick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
};
