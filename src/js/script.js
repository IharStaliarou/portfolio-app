window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu"),
      menuLink = document.querySelectorAll(".menu__link"),
      hamburger = document.querySelector(".hamburger");
    //   cross = document.querySelector(".cross");
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    //   cross.classList.toggle("cross_active");
    });

    // cross.addEventListener("click", () => {
    //     hamburger.classList.toggle("hamburger_active");
    //     menu.classList.toggle("menu_active");
    //     cross.classList.toggle("cross_active");
    //   });
  
    menuLink.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("hamburger_active");
        menu.classList.remove("menu_active");
      });
    });
  });