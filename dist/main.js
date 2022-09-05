/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
let home = {
    title:"Restaurant Sweet Restaurant",
    txt: "We believe in the commitment to our community and in fostering long term relationships with local farmers and fishermen. Our menus reflect these connections, featuring local, seasonal produce and sustainably sourced seafood and meats",
    time: {
        title: 'Hours',
        times: ['Sunday: 8am - 8pm','Monday: 6am - 6pm','Tuesday: 6am - 6pm','Wednesday: 6am - 6pm','Thursday: 6am - 10pm','Friday: 6am - 10pm','Saturday: 8am - 10pm'],
    },
    add:{
        title: "Location",
        txt: "123 Forest Drive, Forestville, Maine"
    },

}

let menu = {
    title: 'Menu Items',
    items:[
        {
        name: "Burger",
        discription: "This is a nice Burger to eat",
        price: "$2",
        path: './img/burger.jpg'
        },
        {
            name: "Pizza",
            discription: "This is a nice Pizza to eat",
            price: "$3",
            path: './img/pizza.jpg'
        },
        {
            name: "Sandwich",
            discription: "This is a nice Sandwich to eat",
            price: "$2",
            path: './img/sandwich.jpg'
        },
        {
            name: "French Fries",
            discription: "This is a nice French Fries to eat",
            price: "$2",
            path: './img/french.jpg'
        },
        {
            name: "Spaghetti",
            discription: "This is a nice Spaghetti to eat",
            price: "$3",
            path: './img/spaghetti.jpg'
        }
    ]
}

let contact = {
    title: 'Contact Us'
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
function createHome(content){
    let container = document.getElementById('main');
    let title = document.createElement('h1');
    let titleDiv = document.createElement('div')
    titleDiv.classList.add('title-div')
    title.innerHTML = content.title;

    titleDiv.appendChild(title)
    container.appendChild(titleDiv);

    let txt = document.createElement('p');
    let txtDiv = document.createElement('div');
    txtDiv.classList.add('txt-div');
    txt.innerHTML = content.txt;

    txtDiv.appendChild(txt);
    container.appendChild(txtDiv);

    let timesDiv = document.createElement('div');
    timesDiv.classList.add('times-div');
    let times = document.createElement('p');
    let timeTitle = document.createElement('h2');
    timeTitle.classList.add('time-title');
    timeTitle.innerHTML = content.time.title;

    times.innerHTML = "";
    content.time.times.forEach(time => {
        times.innerHTML += `${time}<br>`
    });

    timesDiv.appendChild(timeTitle);
    timesDiv.appendChild(times);

    container.appendChild(timesDiv); 

    let addDiv = document.createElement('div');
    addDiv.classList.add('times-div');
    let addTxt = document.createElement('p');
    let addTitle = document.createElement('h2');
    addTitle.classList.add('time-title');
    addTitle.innerHTML = content.add.title;
    addTxt.innerHTML = content.add.txt;

    addDiv.appendChild(addTitle);
    addDiv.appendChild(addTxt);
   
    container.appendChild(addDiv);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
function createMenu(content){
    let container = document.getElementById('main');
    let title = document.createElement('h1');
    let titleDiv = document.createElement('div')
    titleDiv.classList.add('title-div')
    title.innerHTML = content.title;

    titleDiv.appendChild(title)
    container.appendChild(titleDiv);

    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card-div');
    content.items.forEach(item => {
        let card = document.createElement('div');
        card.classList.add('card');
        let name = document.createElement('h3');
        name.innerHTML = item.name;
        let txt = document.createElement('p');
        txt.innerHTML = item.discription;
        let price = document.createElement('span');
        price.innerHTML = item.price;
        let img = document.createElement('img');
        img.setAttribute('src', item.path);

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(txt);
        card.appendChild(price);

        cardDiv.appendChild(card);
        container.appendChild(cardDiv);
    });
}




/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "loadMain": () => (/* binding */ loadMain)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



function createNav(){
    let container = document.getElementById('nav')
    let bar = document.createElement('div');
    bar.classList.add('bar');

    let homeTab = document.createElement('div');
    homeTab.classList.add('tabs');
    homeTab.setAttribute('id', 'home');
    homeTab.classList.add('selected');
    homeTab.innerHTML = "Home";

    let menuTab = document.createElement('div');
    menuTab.classList.add('tabs');
    menuTab.setAttribute('id', 'menu');
    menuTab.innerHTML = "Menu";

    let contactTab = document.createElement('div');
    contactTab.classList.add('tabs');
    contactTab.setAttribute('id', 'contact');
    contactTab.innerHTML = "Contact";

    bar.appendChild(homeTab)
    bar.appendChild(menuTab)
    bar.appendChild(contactTab)

    container.appendChild(bar)
}

function createFooter(){
    let container = document.getElementById('footer')
    let bar = document.createElement('div');
    bar.classList.add('bar');
    bar.classList.add('footer');
    let logo = document.createElement('img')

    logo.setAttribute('src', './img/github.png');

    let txt = document.createElement('p');

    txt.innerHTML = "@mishalp";
    bar.appendChild(logo);
    bar.appendChild(txt);
    container.appendChild(bar);
}

function clear(){
    let container = document.getElementById('main');
    container.innerHTML = "";
}

function loadMain(content, id){
    clear()
    if(id == 'home'){
        (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)(content);
    }else if(id == 'menu'){
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)(content);
    }else{
       // createContact(content);
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");




let navs = ['home','menu','contact']
;(0,_pageload__WEBPACK_IMPORTED_MODULE_0__.createNav)();
(0,_pageload__WEBPACK_IMPORTED_MODULE_0__.loadMain)(_data_js__WEBPACK_IMPORTED_MODULE_1__.home, 'home');
(0,_pageload__WEBPACK_IMPORTED_MODULE_0__.createFooter)();

let btns = document.querySelectorAll('.tabs');

btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        navs.forEach(nav=>{
            document.getElementById(nav).classList.remove('selected');
        })
        btn.classList.add('selected');

        if(btn.id == 'home'){
            (0,_pageload__WEBPACK_IMPORTED_MODULE_0__.loadMain)(_data_js__WEBPACK_IMPORTED_MODULE_1__.home, btn.id);
        }else if(btn.id == 'menu'){
            (0,_pageload__WEBPACK_IMPORTED_MODULE_0__.loadMain)(_data_js__WEBPACK_IMPORTED_MODULE_1__.menu, btn.id);
        }else{
            (0,_pageload__WEBPACK_IMPORTED_MODULE_0__.loadMain)(_data_js__WEBPACK_IMPORTED_MODULE_1__.contact, btn.id);
        }
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBob21lID0ge1xyXG4gICAgdGl0bGU6XCJSZXN0YXVyYW50IFN3ZWV0IFJlc3RhdXJhbnRcIixcclxuICAgIHR4dDogXCJXZSBiZWxpZXZlIGluIHRoZSBjb21taXRtZW50IHRvIG91ciBjb21tdW5pdHkgYW5kIGluIGZvc3RlcmluZyBsb25nIHRlcm0gcmVsYXRpb25zaGlwcyB3aXRoIGxvY2FsIGZhcm1lcnMgYW5kIGZpc2hlcm1lbi4gT3VyIG1lbnVzIHJlZmxlY3QgdGhlc2UgY29ubmVjdGlvbnMsIGZlYXR1cmluZyBsb2NhbCwgc2Vhc29uYWwgcHJvZHVjZSBhbmQgc3VzdGFpbmFibHkgc291cmNlZCBzZWFmb29kIGFuZCBtZWF0c1wiLFxyXG4gICAgdGltZToge1xyXG4gICAgICAgIHRpdGxlOiAnSG91cnMnLFxyXG4gICAgICAgIHRpbWVzOiBbJ1N1bmRheTogOGFtIC0gOHBtJywnTW9uZGF5OiA2YW0gLSA2cG0nLCdUdWVzZGF5OiA2YW0gLSA2cG0nLCdXZWRuZXNkYXk6IDZhbSAtIDZwbScsJ1RodXJzZGF5OiA2YW0gLSAxMHBtJywnRnJpZGF5OiA2YW0gLSAxMHBtJywnU2F0dXJkYXk6IDhhbSAtIDEwcG0nXSxcclxuICAgIH0sXHJcbiAgICBhZGQ6e1xyXG4gICAgICAgIHRpdGxlOiBcIkxvY2F0aW9uXCIsXHJcbiAgICAgICAgdHh0OiBcIjEyMyBGb3Jlc3QgRHJpdmUsIEZvcmVzdHZpbGxlLCBNYWluZVwiXHJcbiAgICB9LFxyXG5cclxufVxyXG5cclxubGV0IG1lbnUgPSB7XHJcbiAgICB0aXRsZTogJ01lbnUgSXRlbXMnLFxyXG4gICAgaXRlbXM6W1xyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJ1cmdlclwiLFxyXG4gICAgICAgIGRpc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBuaWNlIEJ1cmdlciB0byBlYXRcIixcclxuICAgICAgICBwcmljZTogXCIkMlwiLFxyXG4gICAgICAgIHBhdGg6ICcuL2ltZy9idXJnZXIuanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBpenphXCIsXHJcbiAgICAgICAgICAgIGRpc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBuaWNlIFBpenphIHRvIGVhdFwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIkM1wiLFxyXG4gICAgICAgICAgICBwYXRoOiAnLi9pbWcvcGl6emEuanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNhbmR3aWNoXCIsXHJcbiAgICAgICAgICAgIGRpc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBuaWNlIFNhbmR3aWNoIHRvIGVhdFwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIkMlwiLFxyXG4gICAgICAgICAgICBwYXRoOiAnLi9pbWcvc2FuZHdpY2guanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkZyZW5jaCBGcmllc1wiLFxyXG4gICAgICAgICAgICBkaXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgbmljZSBGcmVuY2ggRnJpZXMgdG8gZWF0XCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIiQyXCIsXHJcbiAgICAgICAgICAgIHBhdGg6ICcuL2ltZy9mcmVuY2guanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNwYWdoZXR0aVwiLFxyXG4gICAgICAgICAgICBkaXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgbmljZSBTcGFnaGV0dGkgdG8gZWF0XCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIiQzXCIsXHJcbiAgICAgICAgICAgIHBhdGg6ICcuL2ltZy9zcGFnaGV0dGkuanBnJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxubGV0IGNvbnRhY3QgPSB7XHJcbiAgICB0aXRsZTogJ0NvbnRhY3QgVXMnXHJcbn1cclxuXHJcbmV4cG9ydCB7IGhvbWUsIG1lbnUsIGNvbnRhY3QgfVxyXG4iLCJmdW5jdGlvbiBjcmVhdGVIb21lKGNvbnRlbnQpe1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWRpdicpXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBjb250ZW50LnRpdGxlO1xyXG5cclxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuXHJcbiAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IHR4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdHh0RGl2LmNsYXNzTGlzdC5hZGQoJ3R4dC1kaXYnKTtcclxuICAgIHR4dC5pbm5lckhUTUwgPSBjb250ZW50LnR4dDtcclxuXHJcbiAgICB0eHREaXYuYXBwZW5kQ2hpbGQodHh0KTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0eHREaXYpO1xyXG5cclxuICAgIGxldCB0aW1lc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGltZXNEaXYuY2xhc3NMaXN0LmFkZCgndGltZXMtZGl2Jyk7XHJcbiAgICBsZXQgdGltZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgdGltZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpbWVUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aW1lLXRpdGxlJyk7XHJcbiAgICB0aW1lVGl0bGUuaW5uZXJIVE1MID0gY29udGVudC50aW1lLnRpdGxlO1xyXG5cclxuICAgIHRpbWVzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb250ZW50LnRpbWUudGltZXMuZm9yRWFjaCh0aW1lID0+IHtcclxuICAgICAgICB0aW1lcy5pbm5lckhUTUwgKz0gYCR7dGltZX08YnI+YFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGltZXNEaXYuYXBwZW5kQ2hpbGQodGltZVRpdGxlKTtcclxuICAgIHRpbWVzRGl2LmFwcGVuZENoaWxkKHRpbWVzKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXNEaXYpOyBcclxuXHJcbiAgICBsZXQgYWRkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGREaXYuY2xhc3NMaXN0LmFkZCgndGltZXMtZGl2Jyk7XHJcbiAgICBsZXQgYWRkVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IGFkZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGFkZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpbWUtdGl0bGUnKTtcclxuICAgIGFkZFRpdGxlLmlubmVySFRNTCA9IGNvbnRlbnQuYWRkLnRpdGxlO1xyXG4gICAgYWRkVHh0LmlubmVySFRNTCA9IGNvbnRlbnQuYWRkLnR4dDtcclxuXHJcbiAgICBhZGREaXYuYXBwZW5kQ2hpbGQoYWRkVGl0bGUpO1xyXG4gICAgYWRkRGl2LmFwcGVuZENoaWxkKGFkZFR4dCk7XHJcbiAgIFxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZERpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhvbWUgfSIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoY29udGVudCl7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUtZGl2JylcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IGNvbnRlbnQudGl0bGU7XHJcblxyXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG5cclxuICAgIGxldCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGl2Jyk7XHJcbiAgICBjb250ZW50Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgbmFtZS5pbm5lckhUTUwgPSBpdGVtLm5hbWU7XHJcbiAgICAgICAgbGV0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0eHQuaW5uZXJIVE1MID0gaXRlbS5kaXNjcmlwdGlvbjtcclxuICAgICAgICBsZXQgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgcHJpY2UuaW5uZXJIVE1MID0gaXRlbS5wcmljZTtcclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaXRlbS5wYXRoKTtcclxuXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0eHQpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJpY2UpO1xyXG5cclxuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGl2KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTWVudSB9IiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gXCIuL21lbnVcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpe1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKVxyXG4gICAgbGV0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoJ2JhcicpO1xyXG5cclxuICAgIGxldCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcclxuICAgIGhvbWVUYWIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XHJcbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICBob21lVGFiLmlubmVySFRNTCA9IFwiSG9tZVwiO1xyXG5cclxuICAgIGxldCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcclxuICAgIG1lbnVUYWIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XHJcbiAgICBtZW51VGFiLmlubmVySFRNTCA9IFwiTWVudVwiO1xyXG5cclxuICAgIGxldCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcclxuICAgIGNvbnRhY3RUYWIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XHJcbiAgICBjb250YWN0VGFiLmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICAgIGJhci5hcHBlbmRDaGlsZChob21lVGFiKVxyXG4gICAgYmFyLmFwcGVuZENoaWxkKG1lbnVUYWIpXHJcbiAgICBiYXIuYXBwZW5kQ2hpbGQoY29udGFjdFRhYilcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJylcclxuICAgIGxldCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJhci5jbGFzc0xpc3QuYWRkKCdiYXInKTtcclxuICAgIGJhci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuXHJcbiAgICBsb2dvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL2dpdGh1Yi5wbmcnKTtcclxuXHJcbiAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIHR4dC5pbm5lckhUTUwgPSBcIkBtaXNoYWxwXCI7XHJcbiAgICBiYXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBiYXIuYXBwZW5kQ2hpbGQodHh0KTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhcigpe1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE1haW4oY29udGVudCwgaWQpe1xyXG4gICAgY2xlYXIoKVxyXG4gICAgaWYoaWQgPT0gJ2hvbWUnKXtcclxuICAgICAgICBjcmVhdGVIb21lKGNvbnRlbnQpO1xyXG4gICAgfWVsc2UgaWYoaWQgPT0gJ21lbnUnKXtcclxuICAgICAgICBjcmVhdGVNZW51KGNvbnRlbnQpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAvLyBjcmVhdGVDb250YWN0KGNvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBsb2FkTWFpbiwgY3JlYXRlTmF2LCBjcmVhdGVGb290ZXIgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZE1haW4sIGNyZWF0ZU5hdiwgY3JlYXRlRm9vdGVyIH0gZnJvbSBcIi4vcGFnZWxvYWRcIjtcclxuaW1wb3J0IHsgaG9tZSwgbWVudSwgY29udGFjdCB9IGZyb20gJy4vZGF0YS5qcydcclxuXHJcblxyXG5sZXQgbmF2cyA9IFsnaG9tZScsJ21lbnUnLCdjb250YWN0J11cclxuY3JlYXRlTmF2KCk7XHJcbmxvYWRNYWluKGhvbWUsICdob21lJyk7XHJcbmNyZWF0ZUZvb3RlcigpO1xyXG5cclxubGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpO1xyXG5cclxuYnRucy5mb3JFYWNoKGJ0bj0+e1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBuYXZzLmZvckVhY2gobmF2PT57XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hdikuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG5cclxuICAgICAgICBpZihidG4uaWQgPT0gJ2hvbWUnKXtcclxuICAgICAgICAgICAgbG9hZE1haW4oaG9tZSwgYnRuLmlkKTtcclxuICAgICAgICB9ZWxzZSBpZihidG4uaWQgPT0gJ21lbnUnKXtcclxuICAgICAgICAgICAgbG9hZE1haW4obWVudSwgYnRuLmlkKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbG9hZE1haW4oY29udGFjdCwgYnRuLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==