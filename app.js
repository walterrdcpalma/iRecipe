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

(function ($) {
  $.fn.serializeFormJSON = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || "");
      } else {
        o[this.name] = this.value || "";
      }
    });
    return o;
  };
})(jQuery);

$("form").submit(function (e) {
  e.preventDefault();
  var data = $(this).serializeFormJSON();
  console.log(data);
});
