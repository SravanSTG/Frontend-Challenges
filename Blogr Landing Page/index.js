let menuIcon = document.querySelector(".menu-icon");
let menuContainer = document.querySelector(".menu-container");

menuIcon.addEventListener("click", function () {
  if (menuContainer.style.display === "none") {
    menuIcon.src = "./images/icon-close.svg";
    menuContainer.style.display = "flex";
  } else {
    menuIcon.src = "./images/icon-hamburger.svg";
    menuContainer.style.display = "none";
  }
});
