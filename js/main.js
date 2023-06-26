const { result } = require("lodash");

const swiperThums = new Swiper(".swiper_thums", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

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
const answer01 = document.querySelectorAll(".question1 p");
const answer02 = document.querySelectorAll(".question2 p");
const answer03 = document.querySelectorAll(".question3 p");
const resultPage = document.querySelector(".result");

const incense = document.querySelector(".incense");
const resultImg = document.querySelectorAll(".result_img img");
const resultP = document.querySelectorAll(".result_img p");
const resultSpan = document.querySelectorAll(".result_img span");
let score = 0;

startBtn.addEventListener("click", function () {
  start.style.display = "none";
  question01.style.display = "block";
});
/* for (let i = 0; i < answer01.length; i++) {
  answer01[i].addEventListener("click", function () {
    if (answer01[i] == answer01[0]) {
      score += 1;
    } else if (answer01[i] == answer01[1]) {
      score += 2;
    }
    question01.style.display = "none";
    question02.style.display = "block";
  });
}
for (let i = 0; i < answer02.length; i++) {
  answer02[i].addEventListener("click", function () {
    if (answer02[i] == answer02[0]) {
      score += 1;
    } else if (answer02[i] == answer02[1]) {
      score += 2;
    }
    question02.style.display = "none";
    question03.style.display = "block";
  });
}
for (let i = 0; i < answer03.length; i++) {
  answer03[i].addEventListener("click", function () {
    if (answer03[i] == answer03[0]) {
      score += 1;
    } else if (answer01[i] == answer01[1]) {
      score += 2;
    }
    question03.style.display = "none";
    resultPage.style.display = "block";
    console.log(score);
  });
} */
for (let i = 0; i < 2; i++) {
  answer01[i].addEventListener("click", function () {
    if (answer01[i] == answer01[0]) {
      score += 1;
    } else if (answer01[i] == answer01[1]) {
      score += 2;
    }
    question01.style.display = "none";
    question02.style.display = "block";
  });
  answer02[i].addEventListener("click", function () {
    if (answer02[i] == answer02[0]) {
      score += 1;
    } else if (answer02[i] == answer02[1]) {
      score += 2;
    }
    question02.style.display = "none";
    question03.style.display = "block";
  });
  answer03[i].addEventListener("click", function () {
    if (answer03[i] == answer03[0]) {
      score += 1;
    } else if (answer01[i] == answer01[1]) {
      score += 2;
    }
    question03.style.display = "none";
    resultPage.style.display = "block";
    console.log(score);
    //연습 결과 더 많이 째기
    if (score == 3 || score == 4) {
      incense.textContent = "우드세이지";
      //
      resultP[0].textContent = "Wood Sage & Sea Salt";
      resultP[1].textContent = "Wood Sage & Sea Salt";
      resultP[2].textContent = "Wood Sage & Sea Salt";
      //
      resultSpan[0].textContent = "우드 세이지 앤 씨 쏠트";
      resultSpan[1].textContent = "우드 세이지 앤 씨 쏠트 미스트";
      resultSpan[2].textContent = "우드 세이지 앤 씨 쏠트 바디워시";
      //
      resultImg[0].src = "./images/sub_bestseller/subBest_item01.png";
      resultImg[1].src = "./images/sub_bestseller/subBest_item02.png";
      resultImg[2].src = "./images/sub_bestseller/subBest_item03.png";
    } else if (score == 5 || score == 6) {
      incense.textContent = "라임바질";
      //
      resultP[0].textContent = "Lime Basil & Mandarin";
      resultP[1].textContent = "Lime Basil & Mandarin";
      resultP[2].textContent = "Lime Basil & Mandarin";
      //
      resultSpan[0].textContent = "라임 바질 앤 만다린";
      resultSpan[1].textContent = "라임 바질 앤 만다린 미스트";
      resultSpan[2].textContent = "라임 바질 앤 만다린 바디워시";
      //
      resultImg[0].src = "./images/sub_bestseller/subBest_item03.png";
      resultImg[1].src = "./images/sub_bestseller/subBest_item04.png";
      resultImg[2].src = "./images/sub_bestseller/subBest_item05.png";
    }
  });
}

//
//sns

const swiperSns = new Swiper(".sns_swiper", {
  loop: true,
  spaceBetween: 15,
  slidesPerView: 5,
  //freeMode: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//스크롤
/* window.addEventListener("scroll", function () {
  console.log("스크롤중");
  console.log(window.scrollY);
});
 */
