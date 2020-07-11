const menu_toggle = document.getElementsByClassName("menu-toggle")[0];
const links = document.getElementsByClassName("navbar-ul")[0];
const form_cont = document.getElementsByClassName("form-container")[0];
const instructions_tag = document.getElementById("inst-tag");
const recipe_cont = document.getElementsByClassName("recipe-container")[0];

menu_toggle.addEventListener("click", () => {
  links.classList.toggle("links-active");
});

instructions_tag.addEventListener("click", () => {
  if (form_cont.style.display == "none") {
    form_cont.style.display = "block";
  } else {
    form_cont.style.display = "none";
  }

  recipe_cont.classList.toggle("recipe-container-toggle");
});
