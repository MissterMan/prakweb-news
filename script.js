const toogleHamburger = document.querySelector(".hamburger");
toogleHamburger.addEventListener("click", function () {
  const mobileView = document.querySelector("#mobile__dropdown");
  mobileView.classList.toggle("block");
});

const toogleDrop = document.querySelector("#toogleDrop");
toogleDrop.addEventListener("click", function () {
  const dropdownContent = document.querySelector("#dropdown-content");
  dropdownContent.classList.toggle("block");
});

const toogleDropMobile = document.getElementById("toogleDropMobile");
toogleDropMobile.addEventListener("click", function () {
  const dropdownMobile = document.getElementById("dropdownContentMobile");
  dropdownMobile.classList.toggle("block");
});
