const { switchCase } = require("babel-types");
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


//

//스크롤
/* window.addEventListener("scroll", function () {
  console.log("스크롤중");
  console.log(window.scrollY);
});
 */

//best

const bestPreview = document.querySelectorAll('.preview_btn')
const bestModal = document.querySelector('.best_modal_outer')
const bestDelete = document.querySelector('.best_modal .delete')

const bestImg = document.querySelector('.modal_img img')
const bestTxt = document.querySelectorAll('.modal_txt')

const modalEn = document.querySelector('.best_tit_en')
const modalKo = document.querySelector('.best_tit_ko')
const modalInfo = document.querySelector('.best_info')
const modalPrice = document.querySelector('.best_price')



for(let i = 0; i <bestPreview.length; i++){
  bestPreview[i].addEventListener("click",()=>{
    bestModal.style.display = "block"
    document.body.style.overflow = 'hidden'
    bestImg.src = `./images/main/best_0${i+2}.png`
    switch(i){
      case 0 : 
      modalEn.textContent = 'Mini Luxuries'
      modalKo.textContent = '미니 럭셔리즈'
      modalInfo.textContent='조 말론 런던의 세 가지 시그니처 센트를 여행용 사이즈로 만나보세요. 활기 넘치는 우드 세이지 앤 씨 솔트 코롱과, 풍성한 질감의 피오니 앤 블러쉬 스웨이드 바디 크림으로 피부를 가꾸고 감미로운 잉글리쉬 페어 앤 프리지아 미니어처 캔들로 분위기를 꾸며보세요. 트래블 파우치에 구성됩니다.'
      modalPrice.textContent = '₩ 69,000'
      break;
      case 1: 
      modalEn.textContent = 'Blackberry & Bay Cologne'
      modalKo.textContent = '블랙베리 앤 베이 코롱'
      modalInfo.textContent='순수의 향, 블랙베리를 따던 어린 시절의 추억, 블랙베리로 물든 입술과 손. 이제 막 수확한 월계수 잎의 신선함에 톡 쏘는 블랙베리 과즙을 가미하였습니다.매력적이고 생기 넘치는 상쾌한 느낌의 향입니다.'
      modalPrice.textContent = '₩ 218,000'
      break;
      case 2:
      modalEn.textContent = 'Vanilla & Anise Cologne'
      modalKo.textContent = '바닐라 앤 아니스 코롱'
      modalInfo.textContent='바닐라 향을 현대적으로 해석한 향. 섬세한 바닐라 오키드와 진한 카라멜 향이 만나 따뜻하게 감싸주는 느낌을 선사합니다.'
      modalPrice.textContent = '₩ 218,000'
      break;
      case 3:
        modalEn.textContent = 'Wild Bluebell Body & Hand Wash'
      modalKo.textContent = '와일드 블루벨 바디 앤 핸드워시'
      modalInfo.textContent='마음에 여유를 더하는 와일드 블루벨 바디 앤 핸드 워시로 당신의 데일리 루틴을 완성해보세요. 자연 유래 글리세린과 메도우폼 씨드 오일이 함유된 포뮬러가 벨벳처럼 부드러운 거품을 내며, 피부를 클렌징해주고 부드럽게 가꿀 수 있도록 도와줍니다. 마음을 사로잡는 라이트 플로랄 향을 피부에 은은하게 남겨보세요.'
      modalPrice.textContent = '₩ 75,000'
      break;
      case 4:
        modalEn.textContent = 'White Jasmine & Mint Cologne'
        modalKo.textContent = '화이트 자스민 앤 민트 코롱'
        modalInfo.textContent='햇살이 퍼지는 영국 시골 정원의 아침. 바로 딴 야생 민트와 자스민, 백합, 오렌지 꽃과 장미로 만들어진 부케의 향이 어우러진 마법같은 향을 선사합니다.'
        modalPrice.textContent = '₩ 218,000'
        break;
        case 5:
          modalEn.textContent = 'Peony & Blush Suede Cologne'
          modalKo.textContent = '피오니 앤 블러쉬 스웨이드 코롱'
          modalInfo.textContent='꽃의 귀족, 작약의 화려함을 담은 향. 화려하게 핀 작약에 더해진 붉은 사과의 향기로운 과즙과 순수한 자스민, 장미 그리고 카네이션, 블러쉬 스웨이드의 부드러운 관능미가 여운을 남깁니다.'
          modalPrice.textContent = '₩ 218,000' 

    }
    
  })
}

bestDelete.addEventListener('click',()=>{
  bestModal.style.display = 'none'
  document.body.style.overflow = 'visible'
})


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


const snsModal = document.querySelector('.sns_modal_outer')
const swiperImg = document.querySelectorAll('.sns_img img')
//const snsModalGoods = document.querySelector('.modal_right .img_box img')
const snsModalMain = document.querySelector('.modal_left .img_box img')

const snsClose = document.querySelector('.sns_close')
for(let i = 0 ; i<swiperImg.length;i++){
  swiperImg[i].addEventListener('click',()=>{
    snsModal.style.display='block'
    document.body.style.overflow = 'hidden'
    snsModalMain.src = swiperImg[i].src 
  })
}

snsClose.addEventListener('click',()=>{
  snsModal.style.display ='none'
  document.body.style.overflow = 'visible'

})