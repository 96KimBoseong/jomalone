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
    //headerOuter.style.borderTop = "1px solid #000";
    //headerOuter.style.borderBottom = "1px solid #000";
    headerOuter.style.backgroundColor = "";
    logo.style.color = "#000";
    header.style.color = "#000";
    headerOuter.style.transition = "0.3s";
    //gnb.style = "filter:brightness(1);";
  });

  menu[i].addEventListener("mouseover", function () {
    headerOuter.style.height = "180px";
    headerOuter.style.border = "none";
    headerOuter.style.backgroundColor = "#fcf9ee";
    logo.style.color = "#000";
    header.style.color = "#000";
    headerOuter.style.transition = "0.3s";
    //gnb.style = "filter:brightness(0);";
  });
}

//search
/* const searchBtn = document.querySelector(".gnb .search_btn");
const search = document.querySelector(".search");
const searchClose = document.querySelector(".search span");

searchBtn.addEventListener("click", function () {
  search.style.display = "block";
});
searchClose.addEventListener("click", function () {
  search.style.display = "none";
} );*/
//post html 연결 잘못됨 오류남
//subList
const item = [
  { src: "/images/sub_cologne/sub_item01.png", en: "Blackberry & Bay Cologne", ko: "블랙베리 앤 베이 코롱", price: "₩ 218,000" },
  { src: "./images/sub_cologne/sub_item02.png", en: "Lime Basil & Mandarin Cologne", ko: "라임 바질 앤 만다린 코롱", price: "₩ 218,000" },
  { src: "./images/sub_cologne/sub_item03.png", en: "Wood Sage & Sea Salt Cologne", ko: "우드세이지 앤 씨쏠트 코롱", price: "₩ 218,000" },

  { src: "/images/sub_cologne/sub_item04.png", en: "Star Magnolia Cologne", ko: "스타 매그놀리아 코롱", price: "₩ 225,000" },
  { src: "/images/sub_cologne/sub_item05.png", en: "Nashi Blossom Cologne", ko: "나시 블로썸 코롱", price: "₩ 225,000" },
  { src: "/images/sub_cologne/sub_item06.png", en: "Waterlily Cologne", ko: "워터릴리 코롱", price: "₩ 225,000" },
  { src: "/images/sub_cologne/sub_item07.png", en: "Special-Edition Red Roses Cologne", ko: "스페셜 에디션 레드 로즈 코롱", price: "₩ 160,000" },
  { src: "/images/sub_cologne/sub_item08.png", en: "Rose Water & Vanilla Cologne", ko: "로즈 워터 앤 바닐라 코롱", price: "₩ 116,000" },
  { src: "/images/sub_cologne/sub_item09.png", en: "Rose Blush Cologne", ko: "로즈 블러쉬 코롱", price: "₩ 116,000" },
  { src: "/images/sub_cologne/sub_item10.png", en: "The Golden & Sweet Duo", ko: "더 골든 앤 스윗 듀오", price: "₩ 220,000" },
  { src: "/images/sub_cologne/sub_item11.png", en: "Spirited & Addictive Duo", ko: "스피릿 앤 에딕티드 듀오", price: "₩ 220,000" },
  { src: "/images/sub_cologne/sub_item12.png", en: "Fruity & Sweet Duo", ko: "프루티 앤 스윗 듀오", price: "₩ 220,000" },
];

const subImg = document.querySelectorAll(".item_list .item .img_box img");
const subTextEn = document.querySelectorAll(".item_list .item .text .en_title");
const subTextKo = document.querySelectorAll(".item_list .item .text .ko_title");
const price = document.querySelectorAll(".item_list .item .text .price");
const select = document.getElementById("sort");

console.log(select);
/* console.log(subImg);
console.log(subTextEn);
console.log(subTextKo);
console.log(price); */

for (let i = 0; i < item.length; i++) {
  subImg[i].src = item[i].src;
  subTextEn[i].textContent = item[i].en;
  subTextKo[i].textContent = item[i].ko;
  price[i].textContent = item[i].price;
}
console.log(select.value);
select.addEventListener("change", function () {
  if (select.value == "pop") {
    item.sort(function (a, b) {
      return a.price - b.price;
    });
  }
});
