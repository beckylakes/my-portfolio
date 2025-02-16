function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

var typed = new Typed(".typing", {
    strings: ["Rebecca Lake", "A Fullstack Developer", "A Freelancer", "A Coffee Addict", "Pleased to Meet You"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});