document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".header__menu");
    const menuItems = document.querySelectorAll(".header__menu li a");
    const hamburger = document.querySelector(".hamburger");
    const closeIcon = document.querySelector(".closeIcon");
    const menuIcon = document.querySelector(".menuIcon");
  
    function toggleMenu() {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
      } else {
        menu.classList.add("active");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
      }
    }
  
    hamburger.addEventListener("click", toggleMenu);
  
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", toggleMenu);
    });
  });