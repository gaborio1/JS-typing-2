// ========== ACTIVE NAVLINKS HIGHLIGHT ==========

const linkArray = document.getElementsByClassName("nav-link");
console.log(linkArray);

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
    // ADD ACTIVE CLASS TO CURRENT
    if (currentUrl.includes("index")) {
        home.classList.add("active-link");
    } else if (currentUrl.includes("about")) {
        about.classList.add("active-link");
    } else if (currentUrl.includes("links")) {
        links.classList.add("active-link");
    } else {
        contact.classList.add("active-link");
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
