const { url } = require("css-tree");

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  //컬렉션
  const backImg = document.querySelector(".collection_inner");
  const hoverBox = document.querySelectorAll(".collection_inner div");

  /*  for (let i = 0; i < hoverBox.length; i++) {
    hoverBox[i].addEventListener("mouseover", function () {

    });
  } */
});
