const swiper = new Swiper(".swiper_main", {
  //effect: "fade",
  loop: true,
  freeMode: true,
  watchSlidesProgress: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperThums,
  },
});
const swiperThums = new Swiper(".swiper_thums", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
/* swiper.controller.control = swiperThums;
swiperThums.controller.control = swiper; */

//menuMouseEvent
const visual = document.querySelector(".visual");
const headerOuter = document.querySelector(".header_outer");
const header = document.querySelector(".header");
const logo = document.querySelector(".header .logo");
const menu = document.querySelectorAll("li.menu");
const gnb = document.querySelector(".gnb");

//
//
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("mouseout", function () {
    headerOuter.style.height = "auto";
    headerOuter.style.borderTop = "1px solid #fff";
    headerOuter.style.borderBottom = "1px solid #fff";
    headerOuter.style.backgroundColor = "";
    logo.style.color = "#fff";
    header.style.color = "#fff";
    headerOuter.style.transition = "0.3s";
    gnb.style = "filter:brightness(1);";
  });

  menu[i].addEventListener("mouseover", function () {
    headerOuter.style.height = "180px";
    headerOuter.style.border = "none";
    headerOuter.style.backgroundColor = "#fcf9ee";
    logo.style.color = "#000";
    header.style.color = "#000";
    headerOuter.style.transition = "0.3s";
    gnb.style = "filter:brightness(0);";
  });
}

//search
const searchBtn = document.querySelector(".gnb .search_btn");
const search = document.querySelector(".search");
const searchClose = document.querySelector(".search span");

searchBtn.addEventListener("click", function () {
  search.style.display = "block";
});
searchClose.addEventListener("click", function () {
  search.style.display = "none";
});
//

//collection
const BackImg = document.querySelectorAll(".collection_inner .back_img");
const collectionBox = document.querySelectorAll(".collection_box a");
const collectionBackColor = document.querySelectorAll(".collection_box");
console.log(collectionBox);

for (let i = 0; i < collectionBox.length; i++) {
  collectionBox[i].addEventListener("mouseover", () => {
    BackImg[i].style.display = "block";

    collectionBackColor[i].classList.remove("none");
    collectionBackColor[i].classList.add("hover");
    if (i > 0) {
      collectionBackColor[0].classList.add("none");
      collectionBackColor[0].classList.remove("hover");
    }
  });
  collectionBox[i].addEventListener("mouseout", () => {
    BackImg[i].style.display = "none";

    BackImg[0].style.display = "block";

    collectionBackColor[i].classList.remove("hover");
    collectionBackColor[i].classList.add("none");
    if (i > 0) {
      collectionBackColor[0].classList.add("hover");
      collectionBackColor[0].classList.remove("none");
    } else if (i == 0) {
      collectionBackColor[0].classList.add("hover");
      collectionBackColor[0].classList.remove("none");
    }
  });
}
//

//test
const start = document.querySelector(".start");
const startBtn = document.querySelector(".test_start");
const question01 = document.querySelector(".question1");
const question02 = document.querySelector(".question2");
const question03 = document.querySelector(".question3");
const next = document.querySelectorAll(".question p");

//sns

const swiperSns = new Swiper(".sns_swiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  //freeMode: true,
  watchSlidesProgress: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
