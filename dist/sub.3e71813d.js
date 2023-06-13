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
})({"js/sub.js":[function(require,module,exports) {
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
var searchBtn = document.querySelector(".gnb .search_btn");
var search = document.querySelector(".search");
var searchClose = document.querySelector(".search span");
searchBtn.addEventListener("click", function () {
  search.style.display = "block";
});
searchClose.addEventListener("click", function () {
  search.style.display = "none";
});
//subList
var items = [{
  src: "./images/sub_cologne/sub_item01.png",
  en: "Blackberry & Bay Cologne",
  ko: "블랙베리 앤 베이 코롱",
  price: 218000,
  id: 1
}, {
  src: "./images/sub_cologne/sub_item02.png",
  en: "Lime Basil & Mandarin Cologne",
  ko: "라임 바질 앤 만다린 코롱",
  price: 218000,
  id: 2
}, {
  src: "./images/sub_cologne/sub_item03.png",
  en: "Wood Sage & Sea Salt Cologne",
  ko: "우드세이지 앤 씨쏠트 코롱",
  price: 218000,
  id: 3
}, {
  src: "./images/sub_cologne/sub_item04.png",
  en: "Star Magnolia Cologne",
  ko: "스타 매그놀리아 코롱",
  price: 225000,
  id: 4
}, {
  src: "./images/sub_cologne/sub_item05.png",
  en: "Nashi Blossom Cologne",
  ko: "나시 블로썸 코롱",
  price: 225000,
  id: 5
}, {
  src: "./images/sub_cologne/sub_item06.png",
  en: "Waterlily Cologne",
  ko: "워터릴리 코롱",
  price: 225000,
  id: 6
}, {
  src: "./images/sub_cologne/sub_item07.png",
  en: "Special-Edition Red Roses Cologne",
  ko: "스페셜 에디션 레드 로즈 코롱",
  price: 160000,
  id: 7
}, {
  src: "./images/sub_cologne/sub_item08.png",
  en: "Rose Water & Vanilla Cologne",
  ko: "로즈 워터 앤 바닐라 코롱",
  price: 116000,
  id: 8
}, {
  src: "./images/sub_cologne/sub_item09.png",
  en: "Rose Blush Cologne",
  ko: "로즈 블러쉬 코롱",
  price: 116000,
  id: 9
}, {
  src: "./images/sub_cologne/sub_item10.png",
  en: "The Golden & Sweet Duo",
  ko: "더 골든 앤 스윗 듀오",
  price: 220000,
  id: 10
}, {
  src: "./images/sub_cologne/sub_item11.png",
  en: "Spirited & Addictive Duo",
  ko: "스피릿 앤 에딕티드 듀오",
  price: 220000,
  id: 11
}, {
  src: "./images/sub_cologne/sub_item12.png",
  en: "Fruity & Sweet Duo",
  ko: "프루티 앤 스윗 듀오",
  price: 220000,
  id: 12
}
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
{ src: "/images/sub_cologne/sub_item12.png", en: "Fruity & Sweet Duo", ko: "프루티 앤 스윗 듀오", price: 220000, id: 35 }, */];

var subImg = document.querySelectorAll(".item_list .item .img_box img");
var subTextEn = document.querySelectorAll(".item_list .item .text .en_title");
var subTextKo = document.querySelectorAll(".item_list .item .text .ko_title");
var price = document.querySelectorAll(".item_list .item .text .price");
var select = document.getElementById("sort");
/* const formattedNumber = items.price.toLocaleString(); */
function itemShow(array) {
  for (var _i = 0; _i < array.length; _i++) {
    subImg[_i].src = array[_i].src;
    subTextEn[_i].textContent = array[_i].en;
    subTextKo[_i].textContent = array[_i].ko;
    price[_i].textContent = array[_i].price;
  }
}
items.forEach(function (item) {
  var price = item.price;
  var formattedPrice = price.toLocaleString();
  item.price = formattedPrice;
}); //for문 안에서 해야 댐
itemShow(items);
var order = items.slice().sort(function (a, b) {
  return a.id - b.id;
});
var priceHigh = items.slice().sort(function (a, b) {
  if (a.price > b.price) {
    return -1;
  } else if (a.price < b.price) {
    return 1;
  } else if (a.price == b.price) {
    return 0;
  }
});
var priceLow = items.slice().sort(function (a, b) {
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
var preview = document.querySelectorAll(".item_list .item .text .preview");
var itemBox = document.querySelectorAll(".item_list .item");
console.log(preview);
var _loop = function _loop(_i2) {
  preview[_i2].addEventListener("mouseover", function () {
    itemBox[_i2].style.border = "1px solid #eee";
  });
  preview[_i2].addEventListener("mouseout", function () {
    itemBox[_i2].style.border = "";
  });
};
for (var _i2 = 0; _i2 < preview.length; _i2++) {
  _loop(_i2);
}
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61342" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sub.js"], null)
//# sourceMappingURL=/sub.3e71813d.js.map