// Scroll out - doc: https://scroll-out.github.io/guide.html#configuration
ScrollOut();

const servicios = document.querySelector(".servicios");
const trabajos = document.querySelector(".primero");
const about = document.querySelector(".about-info");
const menuButtons = document.querySelectorAll(".btn-menu");

// Prender y apagar active
window.addEventListener("scroll", () => {
    if (trabajos.dataset.scroll == "in") {
        menuButtons[0].classList.remove("active");
        menuButtons[2].classList.remove("active");
        menuButtons[1].classList.add("active");
    }

    if (servicios.dataset.scroll == "in") {
        menuButtons[1].classList.remove("active");
        menuButtons[0].classList.add("active");
    }

    if (about.dataset.scroll == "in") {
        menuButtons[1].classList.remove("active");
        menuButtons[2].classList.add("active");
    }
});