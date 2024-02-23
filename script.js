function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // Corrected selector
    const icon = document.querySelector(".hamburger-icon"); // Corrected selector
    menu.classList.toggle("open"); // Corrected class name
    icon.classList.toggle("open"); // Corrected class name
}
