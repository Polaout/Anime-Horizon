//Menu
const menuButton = document.getElementById("nav-menu");
const menu = document.getElementById("menu");
const blur = document.getElementById("blur")

menuButton.addEventListener("click", function(event) {

  menu.style.display = "block";
  blur.style.display = "block";

})
