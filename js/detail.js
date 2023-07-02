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

//item swiper

const detailSwiper = new Swiper(".detail_swiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
const detailSwiper2 = new Swiper(".detail_swiper2", {
  loop: true,
  freeMode: true,
  watchSlidesProgress: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: detailSwiper,
  },
});
//review
const reviewSwiper = new Swiper(".review_swiper", {
  loop: true,
  freeMode: true,
  spaceBetween: 10,
  slidesPerView: 5,
  watchSlidesProgress: true,
  loopAdditionalSlides: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//accordion
const accordionBtn = document.querySelectorAll(".toggle");

const accordion = document.querySelectorAll(".accordion_view");
const accordionMargin = document.querySelectorAll(".accordion ul li");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    accordion[i].classList.toggle("toggle_active");
    accordionMargin[i].classList.toggle("toggle_margin");
  });
}
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
//select

const price = document.querySelector('.item_price')
const selectOption = document.getElementById('goods_ml')
console.log(selectOption.value)

selectOption.addEventListener('change',function(){
  if(selectOption.value === '30ml'){
    price.textContent = '₩ 110,000'
  }else if(selectOption.value == '50ml'){
    price.textContent = '₩170,000'
  }else if(selectOption.value == '100ml'){
    price.textContent = '₩ 218,000'
  }else if(selectOption.value == ''){
    price.textContent = '₩ 옵션을 선택해주세요'
  }
})

//review
const reviewImgPre = document.querySelector('.img_box img ')
const reviewFile = document.getElementById('file')

reviewFile.addEventListener('change',()=>{
  let reader = fileReader()
  let fileSrc = reviewFile.src
  reviewImgPre.src = fileSrc 
})
