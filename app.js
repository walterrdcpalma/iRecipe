const menu_toggle = document.getElementsByClassName("menu-toggle")[0];
const links = document.getElementsByClassName("navbar-ul")[0];

menu_toggle.addEventListener("click", () => {
  links.classList.toggle("links-active");
});
