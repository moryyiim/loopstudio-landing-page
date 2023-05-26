const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
// const mobileLinks = documetn.querySelectorAll('.mobile-nav-links')

hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");

  //   ternary operator to apply overflow-y: hidden when mobile menu is active
  document.body.style.overflowY = mobileMenu.classList.contains("active")
    ? "hidden"
    : "initial";
});
