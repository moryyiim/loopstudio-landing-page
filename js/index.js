const hamburger = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close-nav");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-nav-links");

hamburger.addEventListener("click", () => {
  toggleMobileMenu();
});

closeNav.addEventListener("click", () => {
  toggleMobileMenu();
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMobileMenu();
  });
});

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");

  // Toggle between hamburger and close-nav icons
  hamburger.style.display = mobileMenu.classList.contains("active")
    ? "none"
    : "block";

  closeNav.style.display = mobileMenu.classList.contains("active")
    ? "block"
    : "none";

  // Apply overflow-y: hidden when mobile menu is active
  document.body.style.overflowY = mobileMenu.classList.contains("active")
    ? "hidden"
    : "initial";
}

// Close mobile menu when clicking mobile links

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.style.display = "block";
    closeNav.style.display = "none";
    document.body.style.overflowY = "initial";
  });
});
