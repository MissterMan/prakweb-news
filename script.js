const toogleHamburger = document.querySelector(".hamburger");
toogleHamburger.addEventListener("click", function () {
  const mobileView = document.querySelector("#mobile__dropdown");
  mobileView.classList.toggle("block");
});

const toogleDrop = document.querySelector("#toogleDrop");
toogleDrop.addEventListener("click", function () {
  const dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.classList.toggle("block");
});
