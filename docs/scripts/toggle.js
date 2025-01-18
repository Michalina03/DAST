document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".header__menu");
  const menuItems = document.querySelectorAll(".header__menu li a");
  const hamburger = document.querySelector(".hamburger");

  function toggleMenu() {
    const isActive = menu.classList.toggle("active");
    hamburger.classList.toggle("active", isActive);
  }

  hamburger.addEventListener("click", toggleMenu);

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", () => {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
});
