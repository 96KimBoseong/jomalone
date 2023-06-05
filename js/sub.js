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
    headerOuter.style.backgroundColor = "";
    logo.style.color = "#000";
    header.style.color = "#000";
    headerOuter.style.transition = "0.3s";
  });

  menu[i].addEventListener("mouseover", function () {
    headerOuter.style.height = "180px";
    headerOuter.style.border = "none";
    headerOuter.style.backgroundColor = "#fcf9ee";
    logo.style.color = "#000";
    header.style.color = "#000";
    headerOuter.style.transition = "0.3s";
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
//subList
const items = [
  { src: "./images/sub_cologne/sub_item01.png", en: "Blackberry & Bay Cologne", ko: "블랙베리 앤 베이 코롱", price: 218000, id: 1 },
  { src: "./images/sub_cologne/sub_item02.png", en: "Lime Basil & Mandarin Cologne", ko: "라임 바질 앤 만다린 코롱", price: 218000, id: 2 },
  { src: "./images/sub_cologne/sub_item03.png", en: "Wood Sage & Sea Salt Cologne", ko: "우드세이지 앤 씨쏠트 코롱", price: 218000, id: 3 },
  { src: "./images/sub_cologne/sub_item04.png", en: "Star Magnolia Cologne", ko: "스타 매그놀리아 코롱", price: 225000, id: 4 },
  { src: "./images/sub_cologne/sub_item05.png", en: "Nashi Blossom Cologne", ko: "나시 블로썸 코롱", price: 225000, id: 5 },
  { src: "./images/sub_cologne/sub_item06.png", en: "Waterlily Cologne", ko: "워터릴리 코롱", price: 225000, id: 6 },
  { src: "./images/sub_cologne/sub_item07.png", en: "Special-Edition Red Roses Cologne", ko: "스페셜 에디션 레드 로즈 코롱", price: 160000, id: 7 },
  { src: "./images/sub_cologne/sub_item08.png", en: "Rose Water & Vanilla Cologne", ko: "로즈 워터 앤 바닐라 코롱", price: 116000, id: 8 },
  { src: "./images/sub_cologne/sub_item09.png", en: "Rose Blush Cologne", ko: "로즈 블러쉬 코롱", price: 116000, id: 9 },
  { src: "./images/sub_cologne/sub_item10.png", en: "The Golden & Sweet Duo", ko: "더 골든 앤 스윗 듀오", price: 220000, id: 10 },
  { src: "./images/sub_cologne/sub_item11.png", en: "Spirited & Addictive Duo", ko: "스피릿 앤 에딕티드 듀오", price: 220000, id: 11 },
  { src: "./images/sub_cologne/sub_item12.png", en: "Fruity & Sweet Duo", ko: "프루티 앤 스윗 듀오", price: 220000, id: 12 },
  /*{ src: "/images/sub_cologne/sub_item01.png", en: "Blackberry & Bay Cologne", ko: "블랙베리 앤 베이 코롱", price: 218000, id: 13 },
  { src: "./images/sub_cologne/sub_item02.png", en: "Lime Basil & Mandarin Cologne", ko: "라임 바질 앤 만다린 코롱", price: 218000, id: 14 },
  { src: "./images/sub_cologne/sub_item03.png", en: "Wood Sage & Sea Salt Cologne", ko: "우드세이지 앤 씨쏠트 코롱", price: 218000, id: 15 },
  { src: "/images/sub_cologne/sub_item04.png", en: "Star Magnolia Cologne", ko: "스타 매그놀리아 코롱", price: 225000, id: 16 },
  { src: "/images/sub_cologne/sub_item05.png", en: "Nashi Blossom Cologne", ko: "나시 블로썸 코롱", price: 225000, id: 17 },
  { src: "/images/sub_cologne/sub_item06.png", en: "Waterlily Cologne", ko: "워터릴리 코롱", price: 225000, id: 18 },
  { src: "/images/sub_cologne/sub_item07.png", en: "Special-Edition Red Roses Cologne", ko: "스페셜 에디션 레드 로즈 코롱", price: 160000, id: 19 },
  { src: "/images/sub_cologne/sub_item08.png", en: "Rose Water & Vanilla Cologne", ko: "로즈 워터 앤 바닐라 코롱", price: 116000, id: 20 },
  { src: "/images/sub_cologne/sub_item09.png", en: "Rose Blush Cologne", ko: "로즈 블러쉬 코롱", price: 116000, id: 21 },
  { src: "/images/sub_cologne/sub_item10.png", en: "The Golden & Sweet Duo", ko: "더 골든 앤 스윗 듀오", price: 220000, id: 22 },
  { src: "/images/sub_cologne/sub_item11.png", en: "Spirited & Addictive Duo", ko: "스피릿 앤 에딕티드 듀오", price: 220000, id: 23 },
  { src: "/images/sub_cologne/sub_item12.png", en: "Fruity & Sweet Duo", ko: "프루티 앤 스윗 듀오", price: 220000, id: 24 },
  { src: "/images/sub_cologne/sub_item01.png", en: "Blackberry & Bay Cologne", ko: "블랙베리 앤 베이 코롱", price: 218000, id: 25 },
  { src: "./images/sub_cologne/sub_item02.png", en: "Lime Basil & Mandarin Cologne", ko: "라임 바질 앤 만다린 코롱", price: 218000, id: 26 },
  { src: "./images/sub_cologne/sub_item03.png", en: "Wood Sage & Sea Salt Cologne", ko: "우드세이지 앤 씨쏠트 코롱", price: 218000, id: 27 },
  { src: "/images/sub_cologne/sub_item04.png", en: "Star Magnolia Cologne", ko: "스타 매그놀리아 코롱", price: 225000, id: 4 },
  { src: "/images/sub_cologne/sub_item05.png", en: "Nashi Blossom Cologne", ko: "나시 블로썸 코롱", price: 225000, id: 28 },
  { src: "/images/sub_cologne/sub_item06.png", en: "Waterlily Cologne", ko: "워터릴리 코롱", price: 225000, id: 29 },
  { src: "/images/sub_cologne/sub_item07.png", en: "Special-Edition Red Roses Cologne", ko: "스페셜 에디션 레드 로즈 코롱", price: 160000, id: 30 },
  { src: "/images/sub_cologne/sub_item08.png", en: "Rose Water & Vanilla Cologne", ko: "로즈 워터 앤 바닐라 코롱", price: 116000, id: 31 },
  { src: "/images/sub_cologne/sub_item09.png", en: "Rose Blush Cologne", ko: "로즈 블러쉬 코롱", price: 116000, id: 32 },
  { src: "/images/sub_cologne/sub_item10.png", en: "The Golden & Sweet Duo", ko: "더 골든 앤 스윗 듀오", price: 220000, id: 33 },
  { src: "/images/sub_cologne/sub_item11.png", en: "Spirited & Addictive Duo", ko: "스피릿 앤 에딕티드 듀오", price: 220000, id: 34 },
  { src: "/images/sub_cologne/sub_item12.png", en: "Fruity & Sweet Duo", ko: "프루티 앤 스윗 듀오", price: 220000, id: 35 }, */
];

const subImg = document.querySelectorAll(".item_list .item .img_box img");
const subTextEn = document.querySelectorAll(".item_list .item .text .en_title");
const subTextKo = document.querySelectorAll(".item_list .item .text .ko_title");
const price = document.querySelectorAll(".item_list .item .text .price");
const select = document.getElementById("sort");
/* const formattedNumber = items.price.toLocaleString(); */
function itemShow(array) {
  for (let i = 0; i < array.length; i++) {
    subImg[i].src = array[i].src;
    subTextEn[i].textContent = array[i].en;
    subTextKo[i].textContent = array[i].ko;
    price[i].textContent = array[i].price;
  }
}
items.forEach((item) => {
  let price = item.price;
  let formattedPrice = price.toLocaleString();
  item.price = formattedPrice;
}); //for문 안에서 해야 댐
itemShow(items);
let order = items.slice().sort(function (a, b) {
  return a.id - b.id;
});
let priceHigh = items.slice().sort(function (a, b) {
  if (a.price > b.price) {
    return -1;
  } else if (a.price < b.price) {
    return 1;
  } else if (a.price == b.price) {
    return 0;
  }
});
let priceLow = items.slice().sort(function (a, b) {
  if (a.price > b.price) {
    return 1;
  } else if (a.price < b.price) {
    return -1;
  } else if (a.price == b.price) {
    return 0;
  }
});
select.addEventListener("change", function () {
  if (select.value == "new") {
    order;
    itemShow(order);
  } else if (select.value == "price_low") {
    priceLow;
    itemShow(priceLow);
  } else if (select.value == "price_high") {
    priceHigh;
    itemShow(priceHigh);
  }
});

const preview = document.querySelectorAll(".item_list .item .text .preview");
const itemBox = document.querySelectorAll(".item_list .item");
console.log(preview);
for (let i = 0; i < preview.length; i++) {
  preview[i].addEventListener("mouseover", function () {
    itemBox[i].style.border = "1px solid #eee";
  });
  preview[i].addEventListener("mouseout", function () {
    itemBox[i].style.border = "";
  });
}
