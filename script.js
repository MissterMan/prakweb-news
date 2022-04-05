const toogleHamburger = document.querySelector(".hamburger");
toogleHamburger.addEventListener("click", function () {
  const mobileView = document.querySelector("#mobile__dropdown");
  mobileView.classList.toggle("block");
});
