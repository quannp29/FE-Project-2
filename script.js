// Header
const btnBar = document.querySelector(".header .inner-bar")
const icon = document.querySelector(".header .inner-bar i")
const menu = document.querySelector(".header .inner-menu-2")

btnBar.addEventListener("click", () => {
    menu.classList.toggle("open");
    const isOpen = menu.classList.contains("open");

    icon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
})
// End Header