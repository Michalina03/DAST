document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".header__hamburger");
  const navMenu = document.querySelector(".header__menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
      hamburger.setAttribute("aria-expanded", !expanded);

      hamburger.classList.toggle("is-active");
      navMenu.classList.toggle("active");

      if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  }
});
