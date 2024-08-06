// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
var swiperThums = new Swiper(".swiper_thums", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});
var swiper = new Swiper(".swiper_main", {
  //effect: "fade",
  loop: true,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: swiperThums
  }
});

//menuMouseEvent
var visual = document.querySelector(".visual");
var headerOuter = document.querySelector(".header_outer");
var header = document.querySelector(".header");
var logo = document.querySelector(".header .logo");
var menu = document.querySelectorAll("li.menu");
var gnb = document.querySelector(".gnb");

//
//
for (var i = 0; i < menu.length; i++) {
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
var searchBtn = document.querySelector(".gnb .search_btn");
var search = document.querySelector(".search");
var searchClose = document.querySelector(".search span");
searchBtn.addEventListener("click", function () {
  search.style.display = "block";
});
searchClose.addEventListener("click", function () {
  search.style.display = "none";
});
//

//collection
var BackImg = document.querySelectorAll(".collection_inner .back_img");
var collectionBox = document.querySelectorAll(".collection_box a");
var collectionBackColor = document.querySelectorAll(".collection_box");
console.log(collectionBox);
var _loop = function _loop(_i) {
  collectionBox[_i].addEventListener("mouseover", function () {
    BackImg[_i].style.display = "block";
    collectionBackColor[_i].classList.remove("none");
    collectionBackColor[_i].classList.add("hover");
    if (_i > 0) {
      collectionBackColor[0].classList.add("none");
      collectionBackColor[0].classList.remove("hover");
    }
  });
  collectionBox[_i].addEventListener("mouseout", function () {
    BackImg[_i].style.display = "none";
    BackImg[0].style.display = "block";
    collectionBackColor[_i].classList.remove("hover");
    collectionBackColor[_i].classList.add("none");
    if (_i > 0) {
      collectionBackColor[0].classList.add("hover");
      collectionBackColor[0].classList.remove("none");
    } else if (_i == 0) {
      collectionBackColor[0].classList.add("hover");
      collectionBackColor[0].classList.remove("none");
    }
  });
};
for (var _i = 0; _i < collectionBox.length; _i++) {
  _loop(_i);
}
//

//test
var start = document.querySelector(".start");
var startBtn = document.querySelector(".test_start");
var question01 = document.querySelector(".question1");
var question02 = document.querySelector(".question2");
var question03 = document.querySelector(".question3");
var answer01 = document.querySelectorAll(".question1 p");
var answer02 = document.querySelectorAll(".question2 p");
var answer03 = document.querySelectorAll(".question3 p");
var resultPage = document.querySelector(".result");
var incense = document.querySelector(".incense");
var resultImg = document.querySelectorAll(".result_img img");
var resultP = document.querySelectorAll(".result_img p");
var resultSpan = document.querySelectorAll(".result_img span");
var score = 0;
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
var _loop2 = function _loop2(_i2) {
  answer01[_i2].addEventListener("click", function () {
    if (answer01[_i2] == answer01[0]) {
      score += 1;
    } else if (answer01[_i2] == answer01[1]) {
      score += 2;
    }
    question01.style.display = "none";
    question02.style.display = "block";
  });
  answer02[_i2].addEventListener("click", function () {
    if (answer02[_i2] == answer02[0]) {
      score += 1;
    } else if (answer02[_i2] == answer02[1]) {
      score += 2;
    }
    question02.style.display = "none";
    question03.style.display = "block";
  });
  answer03[_i2].addEventListener("click", function () {
    if (answer03[_i2] == answer03[0]) {
      score += 1;
    } else if (answer01[_i2] == answer01[1]) {
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
};
for (var _i2 = 0; _i2 < 2; _i2++) {
  _loop2(_i2);
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

var bestPreview = document.querySelectorAll('.preview_btn');
var bestModal = document.querySelector('.best_modal_outer');
var bestDelete = document.querySelector('.best_modal .delete ');
var bestImg = document.querySelector('.modal_img img');
var bestTxt = document.querySelectorAll('.modal_txt');
var modalEn = document.querySelector('.best_tit_en');
var modalKo = document.querySelector('.best_tit_ko');
var modalInfo = document.querySelector('.best_info');
var modalPrice = document.querySelector('.best_price');
var _loop3 = function _loop3(_i3) {
  bestPreview[_i3].addEventListener("click", function () {
    bestModal.style.display = "block";
    document.body.style.overflow = 'hidden';
    bestImg.src = "./images/main/best_0".concat(_i3 + 2, ".png");
    switch (_i3) {
      case 0:
        modalEn.textContent = 'Mini Luxuries';
        modalKo.textContent = '미니 럭셔리즈';
        modalInfo.textContent = '조 말론 런던의 세 가지 시그니처 센트를 여행용 사이즈로 만나보세요. 활기 넘치는 우드 세이지 앤 씨 솔트 코롱과, 풍성한 질감의 피오니 앤 블러쉬 스웨이드 바디 크림으로 피부를 가꾸고 감미로운 잉글리쉬 페어 앤 프리지아 미니어처 캔들로 분위기를 꾸며보세요. 트래블 파우치에 구성됩니다.';
        modalPrice.textContent = '₩ 69,000';
        break;
      case 1:
        modalEn.textContent = 'Blackberry & Bay Cologne';
        modalKo.textContent = '블랙베리 앤 베이 코롱';
        modalInfo.textContent = '순수의 향, 블랙베리를 따던 어린 시절의 추억, 블랙베리로 물든 입술과 손. 이제 막 수확한 월계수 잎의 신선함에 톡 쏘는 블랙베리 과즙을 가미하였습니다.매력적이고 생기 넘치는 상쾌한 느낌의 향입니다.';
        modalPrice.textContent = '₩ 218,000';
        break;
      case 2:
        modalEn.textContent = 'Vanilla & Anise Cologne';
        modalKo.textContent = '바닐라 앤 아니스 코롱';
        modalInfo.textContent = '바닐라 향을 현대적으로 해석한 향. 섬세한 바닐라 오키드와 진한 카라멜 향이 만나 따뜻하게 감싸주는 느낌을 선사합니다.';
        modalPrice.textContent = '₩ 218,000';
        break;
      case 3:
        modalEn.textContent = 'Wild Bluebell Body & Hand Wash';
        modalKo.textContent = '와일드 블루벨 바디 앤 핸드워시';
        modalInfo.textContent = '마음에 여유를 더하는 와일드 블루벨 바디 앤 핸드 워시로 당신의 데일리 루틴을 완성해보세요. 자연 유래 글리세린과 메도우폼 씨드 오일이 함유된 포뮬러가 벨벳처럼 부드러운 거품을 내며, 피부를 클렌징해주고 부드럽게 가꿀 수 있도록 도와줍니다. 마음을 사로잡는 라이트 플로랄 향을 피부에 은은하게 남겨보세요.';
        modalPrice.textContent = '₩ 75,000';
        break;
      case 4:
        modalEn.textContent = 'White Jasmine & Mint Cologne';
        modalKo.textContent = '화이트 자스민 앤 민트 코롱';
        modalInfo.textContent = '햇살이 퍼지는 영국 시골 정원의 아침. 바로 딴 야생 민트와 자스민, 백합, 오렌지 꽃과 장미로 만들어진 부케의 향이 어우러진 마법같은 향을 선사합니다.';
        modalPrice.textContent = '₩ 218,000';
        break;
      case 5:
        modalEn.textContent = 'Peony & Blush Suede Cologne';
        modalKo.textContent = '피오니 앤 블러쉬 스웨이드 코롱';
        modalInfo.textContent = '꽃의 귀족, 작약의 화려함을 담은 향. 화려하게 핀 작약에 더해진 붉은 사과의 향기로운 과즙과 순수한 자스민, 장미 그리고 카네이션, 블러쉬 스웨이드의 부드러운 관능미가 여운을 남깁니다.';
        modalPrice.textContent = '₩ 218,000';

      //   const getData = async () => {
      //     try {
      //         const response = await fetch("<https://jsonplaceholder123.typicode.com/posts>");
      //         const data = await response.json();
      //         console.log(data);
      //     } catch (error) {
      //         console.log(`error : ${error}`);
      //     }
      // };

      // getData();
    }
  });
};
for (var _i3 = 0; _i3 < bestPreview.length; _i3++) {
  _loop3(_i3);
}
bestDelete.addEventListener('click', function () {
  bestModal.style.display = 'none';
  document.body.style.overflow = 'visible';
});

//sns

var swiperSns = new Swiper(".sns_swiper", {
  loop: true,
  spaceBetween: 15,
  slidesPerView: 5,
  //freeMode: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var snsModal = document.querySelector('.sns_modal_outer');
var swiperImg = document.querySelectorAll('.sns_img img');
var snsModalMain = document.querySelector('.modal_left .img_box img');
var snsClose = document.querySelector('.sns_close');
var _loop4 = function _loop4(_i4) {
  swiperImg[_i4].addEventListener('click', function () {
    snsModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    snsModalMain.src = swiperImg[_i4].src;
  });
};
for (var _i4 = 0; _i4 < swiperImg.length; _i4++) {
  _loop4(_i4);
}
snsClose.addEventListener('click', function () {
  snsModal.style.display = 'none';
  document.body.style.overflow = 'visible';
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64230" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map