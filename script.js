// DOM Elements
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const navLinks = document.querySelectorAll(".nav-list a");

// Toggle Mobile Menu
navToggle.addEventListener("click", () => {
    const isVisible = primaryNav.getAttribute("data-visible") === "true";
    
    if (!isVisible) {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
        // Optional: Animate hamburger to X
        document.querySelector(".hamburger").style.background = "transparent";
    } else {
        closeMenu();
    }
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

function closeMenu() {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    document.querySelector(".hamburger").style.background = "#fff";
}

// Optional: Header scroll effect
window.addEventListener("scroll", () => {
    const header = document.querySelector(".main-header");
    if (window.scrollY > 100) {
        header.style.padding = "10px 0";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    } else {
        header.style.padding = "0";
        header.style.boxShadow = "none";
    }
});