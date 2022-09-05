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
    title: 'Menu items'
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
       // createMenu(content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhCOzs7Ozs7Ozs7Ozs7Ozs7QUN0QjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRG9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVU7QUFDbEIsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTitEO0FBQ2hCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHFEQUFTO0FBQ1QsbURBQVEsQ0FBQywwQ0FBSTtBQUNiLHVEQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBUSxDQUFDLDBDQUFJO0FBQ3pCLFNBQVM7QUFDVCxZQUFZLG1EQUFRLENBQUMsMENBQUk7QUFDekIsU0FBUztBQUNULFlBQVksbURBQVEsQ0FBQyw2Q0FBTztBQUM1QjtBQUNBLEtBQUs7QUFDTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBob21lID0ge1xyXG4gICAgdGl0bGU6XCJSZXN0YXVyYW50IFN3ZWV0IFJlc3RhdXJhbnRcIixcclxuICAgIHR4dDogXCJXZSBiZWxpZXZlIGluIHRoZSBjb21taXRtZW50IHRvIG91ciBjb21tdW5pdHkgYW5kIGluIGZvc3RlcmluZyBsb25nIHRlcm0gcmVsYXRpb25zaGlwcyB3aXRoIGxvY2FsIGZhcm1lcnMgYW5kIGZpc2hlcm1lbi4gT3VyIG1lbnVzIHJlZmxlY3QgdGhlc2UgY29ubmVjdGlvbnMsIGZlYXR1cmluZyBsb2NhbCwgc2Vhc29uYWwgcHJvZHVjZSBhbmQgc3VzdGFpbmFibHkgc291cmNlZCBzZWFmb29kIGFuZCBtZWF0c1wiLFxyXG4gICAgdGltZToge1xyXG4gICAgICAgIHRpdGxlOiAnSG91cnMnLFxyXG4gICAgICAgIHRpbWVzOiBbJ1N1bmRheTogOGFtIC0gOHBtJywnTW9uZGF5OiA2YW0gLSA2cG0nLCdUdWVzZGF5OiA2YW0gLSA2cG0nLCdXZWRuZXNkYXk6IDZhbSAtIDZwbScsJ1RodXJzZGF5OiA2YW0gLSAxMHBtJywnRnJpZGF5OiA2YW0gLSAxMHBtJywnU2F0dXJkYXk6IDhhbSAtIDEwcG0nXSxcclxuICAgIH0sXHJcbiAgICBhZGQ6e1xyXG4gICAgICAgIHRpdGxlOiBcIkxvY2F0aW9uXCIsXHJcbiAgICAgICAgdHh0OiBcIjEyMyBGb3Jlc3QgRHJpdmUsIEZvcmVzdHZpbGxlLCBNYWluZVwiXHJcbiAgICB9LFxyXG5cclxufVxyXG5cclxubGV0IG1lbnUgPSB7XHJcbiAgICB0aXRsZTogJ01lbnUgaXRlbXMnXHJcbn1cclxuXHJcbmxldCBjb250YWN0ID0ge1xyXG4gICAgdGl0bGU6ICdDb250YWN0IFVzJ1xyXG59XHJcblxyXG5leHBvcnQgeyBob21lLCBtZW51LCBjb250YWN0IH1cclxuIiwiZnVuY3Rpb24gY3JlYXRlSG9tZShjb250ZW50KXtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZS1kaXYnKVxyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gY29udGVudC50aXRsZTtcclxuXHJcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcblxyXG4gICAgbGV0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCB0eHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHR4dERpdi5jbGFzc0xpc3QuYWRkKCd0eHQtZGl2Jyk7XHJcbiAgICB0eHQuaW5uZXJIVE1MID0gY29udGVudC50eHQ7XHJcblxyXG4gICAgdHh0RGl2LmFwcGVuZENoaWxkKHR4dCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodHh0RGl2KTtcclxuXHJcbiAgICBsZXQgdGltZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpbWVzRGl2LmNsYXNzTGlzdC5hZGQoJ3RpbWVzLWRpdicpO1xyXG4gICAgbGV0IHRpbWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IHRpbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aW1lVGl0bGUuY2xhc3NMaXN0LmFkZCgndGltZS10aXRsZScpO1xyXG4gICAgdGltZVRpdGxlLmlubmVySFRNTCA9IGNvbnRlbnQudGltZS50aXRsZTtcclxuXHJcbiAgICB0aW1lcy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29udGVudC50aW1lLnRpbWVzLmZvckVhY2godGltZSA9PiB7XHJcbiAgICAgICAgdGltZXMuaW5uZXJIVE1MICs9IGAke3RpbWV9PGJyPmBcclxuICAgIH0pO1xyXG5cclxuICAgIHRpbWVzRGl2LmFwcGVuZENoaWxkKHRpbWVUaXRsZSk7XHJcbiAgICB0aW1lc0Rpdi5hcHBlbmRDaGlsZCh0aW1lcyk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVzRGl2KTsgXHJcblxyXG4gICAgbGV0IGFkZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkRGl2LmNsYXNzTGlzdC5hZGQoJ3RpbWVzLWRpdicpO1xyXG4gICAgbGV0IGFkZFR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBhZGRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBhZGRUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aW1lLXRpdGxlJyk7XHJcbiAgICBhZGRUaXRsZS5pbm5lckhUTUwgPSBjb250ZW50LmFkZC50aXRsZTtcclxuICAgIGFkZFR4dC5pbm5lckhUTUwgPSBjb250ZW50LmFkZC50eHQ7XHJcblxyXG4gICAgYWRkRGl2LmFwcGVuZENoaWxkKGFkZFRpdGxlKTtcclxuICAgIGFkZERpdi5hcHBlbmRDaGlsZChhZGRUeHQpO1xyXG4gICBcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGREaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVIb21lIH0iLCJpbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCl7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpXHJcbiAgICBsZXQgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiYXIuY2xhc3NMaXN0LmFkZCgnYmFyJyk7XHJcblxyXG4gICAgbGV0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFicycpO1xyXG4gICAgaG9tZVRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcclxuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgIGhvbWVUYWIuaW5uZXJIVE1MID0gXCJIb21lXCI7XHJcblxyXG4gICAgbGV0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFicycpO1xyXG4gICAgbWVudVRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcclxuICAgIG1lbnVUYWIuaW5uZXJIVE1MID0gXCJNZW51XCI7XHJcblxyXG4gICAgbGV0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgndGFicycpO1xyXG4gICAgY29udGFjdFRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcclxuICAgIGNvbnRhY3RUYWIuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XHJcblxyXG4gICAgYmFyLmFwcGVuZENoaWxkKGhvbWVUYWIpXHJcbiAgICBiYXIuYXBwZW5kQ2hpbGQobWVudVRhYilcclxuICAgIGJhci5hcHBlbmRDaGlsZChjb250YWN0VGFiKVxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKVxyXG4gICAgbGV0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoJ2JhcicpO1xyXG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5cclxuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvZ2l0aHViLnBuZycpO1xyXG5cclxuICAgIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgdHh0LmlubmVySFRNTCA9IFwiQG1pc2hhbHBcIjtcclxuICAgIGJhci5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGJhci5hcHBlbmRDaGlsZCh0eHQpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKCl7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTWFpbihjb250ZW50LCBpZCl7XHJcbiAgICBjbGVhcigpXHJcbiAgICBpZihpZCA9PSAnaG9tZScpe1xyXG4gICAgICAgIGNyZWF0ZUhvbWUoY29udGVudCk7XHJcbiAgICB9ZWxzZSBpZihpZCA9PSAnbWVudScpe1xyXG4gICAgICAgLy8gY3JlYXRlTWVudShjb250ZW50KTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgLy8gY3JlYXRlQ29udGFjdChjb250ZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgbG9hZE1haW4sIGNyZWF0ZU5hdiwgY3JlYXRlRm9vdGVyIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRNYWluLCBjcmVhdGVOYXYsIGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL3BhZ2Vsb2FkXCI7XHJcbmltcG9ydCB7IGhvbWUsIG1lbnUsIGNvbnRhY3QgfSBmcm9tICcuL2RhdGEuanMnXHJcblxyXG5cclxubGV0IG5hdnMgPSBbJ2hvbWUnLCdtZW51JywnY29udGFjdCddXHJcbmNyZWF0ZU5hdigpO1xyXG5sb2FkTWFpbihob21lLCAnaG9tZScpO1xyXG5jcmVhdGVGb290ZXIoKTtcclxuXHJcbmxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKTtcclxuXHJcbmJ0bnMuZm9yRWFjaChidG49PntcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgbmF2cy5mb3JFYWNoKG5hdj0+e1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYXYpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgaWYoYnRuLmlkID09ICdob21lJyl7XHJcbiAgICAgICAgICAgIGxvYWRNYWluKGhvbWUsIGJ0bi5pZCk7XHJcbiAgICAgICAgfWVsc2UgaWYoYnRuLmlkID09ICdtZW51Jyl7XHJcbiAgICAgICAgICAgIGxvYWRNYWluKG1lbnUsIGJ0bi5pZCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxvYWRNYWluKGNvbnRhY3QsIGJ0bi5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=