// ========== ACTIVE NAVLINKS HIGHLIGHT/BORDER BOTTOM ==========

const linkArray = document.getElementsByClassName("nav-link");

// const addClass = (elementsArr, classname) => {
//     for (el of elementsArr) {
//         el.classList.add(classname);
//     }
// }

// GET CURRENT URL OF PAGE
const currentUrl = window.location.href;
console.log(currentUrl);
// GRAB NAVBAR LINKS
const home = document.getElementById("navbar__home");
const about = document.getElementById("navbar__about");
const links = document.getElementById("navbar__links");
const contact = document.getElementById("navbar__contact");

// ADD active-link CLASS TO CURRENT PAGE'S LINK
const addActiveClassToCurrrent = () => {
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