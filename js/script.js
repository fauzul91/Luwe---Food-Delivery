// Hamburger Menu
const hamburgerMenu = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", () => {
    menu.classList.toggle("nav-active");
});

window.onscroll = () => {
    menu.classList.remove("nav-active");
};

// Slider
const title = document.querySelector(".title h2")

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".menu-items");
    const articles = document.querySelectorAll(".menu-items article");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % articles.length;
        updateSlider();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + articles.length) % articles.length;
        updateSlider();
    });
});