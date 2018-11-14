function mobileNav() {
  const header = document.querySelector(".main-nav");
  const menuIcon = document.querySelector(".mobile__toggle");

  menuIcon.addEventListener("click", function() {
    header.classList.contains("nav--open")
      ? header.classList.remove("nav--open")
      : header.classList.add("nav--open");
  });
}

mobileNav();
