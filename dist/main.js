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
    txt: "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",

}

let menu = {
    title: 'Menu items'
}

let contact = {
    title: 'Contact Us'
}




/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "loadMain": () => (/* binding */ loadMain)
/* harmony export */ });
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

function clear(){
    let container = document.getElementById('main');
    container.innerHTML = ""
}

function loadMain(content, id){
    clear()
    if(id == 'home'){
        createHome(content);
    }else if(id == 'menu'){
       // createMenu(content);
    }else{
       // createContact(content);
    }
}

function createHome(content){
    let container = document.getElementById('main');
    let title = document.createElement('h1');
    let titleDiv = document.createElement('div')
    titleDiv.classList.add('titleDiv')
    title.innerHTML = content.title;

    titleDiv.appendChild(title)
    container.appendChild(titleDiv);

    let txt = document.createElement('p');
    let txtDiv = document.createElement('div');
    txtDiv.classList.add('txtDiv');
    txt.innerHTML = content.txt;

    txtDiv.appendChild(txt);
    container.appendChild(txtDiv);

    let timesDiv = document.createElement('div');
    timesDiv.classList.add('timesDiv');
    let times = document.createElement('p');
    times.innerHTML = `<h2>Hours</h2><br>Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm
        <br>Thursday: 6am - 10pm<br>
        Friday: 6am - 10pm<br>
        Saturday: 8am - 10pm`;
    timesDiv.appendChild(times);

    container.appendChild(timesDiv); 
   
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2Q5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDMUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlEO0FBQ0Y7QUFDL0M7QUFDQTtBQUNBO0FBQ0EscURBQVM7QUFDVCxtREFBUSxDQUFDLDBDQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFRLENBQUMsMENBQUk7QUFDekIsU0FBUztBQUNULFlBQVksbURBQVEsQ0FBQywwQ0FBSTtBQUN6QixTQUFTO0FBQ1QsWUFBWSxtREFBUSxDQUFDLDZDQUFPO0FBQzVCO0FBQ0EsS0FBSztBQUNMLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGhvbWUgPSB7XHJcbiAgICB0aXRsZTpcIlJlc3RhdXJhbnQgU3dlZXQgUmVzdGF1cmFudFwiLFxyXG4gICAgdHh0OiBcIkJlYXJ5J3MgaGFzIHRoZSBiZXN0IHBvcnJpZGdlISBUaGUgYXRtb3NwaGVyZSBhbmQgY3VzdG9tZXIgc2VydmljZSBtYWtlIHlvdSBmZWVsIGxpa2UgeW91IGFyZSBzaXR0aW5nIGluIHRoZSBtaWRkbGUgb2YgdGhlIHdvb2RzLCBlYXRpbmcgbGlrZSBhIGJlYXIhIFRoaXMgaXMgZXhhY3RseSB0aGUga2luZCBvZiBwbGFjZSB0aGF0IEkgbGlrZSB0byByZXR1cm4gdG8gYWdhaW4gYW5kIGFnYWluLlwiLFxyXG5cclxufVxyXG5cclxubGV0IG1lbnUgPSB7XHJcbiAgICB0aXRsZTogJ01lbnUgaXRlbXMnXHJcbn1cclxuXHJcbmxldCBjb250YWN0ID0ge1xyXG4gICAgdGl0bGU6ICdDb250YWN0IFVzJ1xyXG59XHJcblxyXG5leHBvcnQgeyBob21lLCBtZW51LCBjb250YWN0IH1cclxuIiwiZnVuY3Rpb24gY3JlYXRlTmF2KCl7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpXHJcbiAgICBsZXQgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiYXIuY2xhc3NMaXN0LmFkZCgnYmFyJyk7XHJcblxyXG4gICAgbGV0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFicycpO1xyXG4gICAgaG9tZVRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcclxuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgIGhvbWVUYWIuaW5uZXJIVE1MID0gXCJIb21lXCI7XHJcblxyXG4gICAgbGV0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFicycpO1xyXG4gICAgbWVudVRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcclxuICAgIG1lbnVUYWIuaW5uZXJIVE1MID0gXCJNZW51XCI7XHJcblxyXG4gICAgbGV0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgndGFicycpO1xyXG4gICAgY29udGFjdFRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcclxuICAgIGNvbnRhY3RUYWIuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XHJcblxyXG4gICAgYmFyLmFwcGVuZENoaWxkKGhvbWVUYWIpXHJcbiAgICBiYXIuYXBwZW5kQ2hpbGQobWVudVRhYilcclxuICAgIGJhci5hcHBlbmRDaGlsZChjb250YWN0VGFiKVxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKCl7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNYWluKGNvbnRlbnQsIGlkKXtcclxuICAgIGNsZWFyKClcclxuICAgIGlmKGlkID09ICdob21lJyl7XHJcbiAgICAgICAgY3JlYXRlSG9tZShjb250ZW50KTtcclxuICAgIH1lbHNlIGlmKGlkID09ICdtZW51Jyl7XHJcbiAgICAgICAvLyBjcmVhdGVNZW51KGNvbnRlbnQpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAvLyBjcmVhdGVDb250YWN0KGNvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb21lKGNvbnRlbnQpe1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlRGl2JylcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IGNvbnRlbnQudGl0bGU7XHJcblxyXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG5cclxuICAgIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgdHh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0eHREaXYuY2xhc3NMaXN0LmFkZCgndHh0RGl2Jyk7XHJcbiAgICB0eHQuaW5uZXJIVE1MID0gY29udGVudC50eHQ7XHJcblxyXG4gICAgdHh0RGl2LmFwcGVuZENoaWxkKHR4dCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodHh0RGl2KTtcclxuXHJcbiAgICBsZXQgdGltZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpbWVzRGl2LmNsYXNzTGlzdC5hZGQoJ3RpbWVzRGl2Jyk7XHJcbiAgICBsZXQgdGltZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0aW1lcy5pbm5lckhUTUwgPSBgPGgyPkhvdXJzPC9oMj48YnI+U3VuZGF5OiA4YW0gLSA4cG08YnI+TW9uZGF5OiA2YW0gLSA2cG08YnI+VHVlc2RheTogNmFtIC0gNnBtPGJyPldlZG5lc2RheTogNmFtIC0gNnBtXHJcbiAgICAgICAgPGJyPlRodXJzZGF5OiA2YW0gLSAxMHBtPGJyPlxyXG4gICAgICAgIEZyaWRheTogNmFtIC0gMTBwbTxicj5cclxuICAgICAgICBTYXR1cmRheTogOGFtIC0gMTBwbWA7XHJcbiAgICB0aW1lc0Rpdi5hcHBlbmRDaGlsZCh0aW1lcyk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVzRGl2KTsgXHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQgeyBsb2FkTWFpbiwgY3JlYXRlTmF2IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRNYWluLCBjcmVhdGVOYXYgfSBmcm9tIFwiLi9wYWdlbG9hZFwiO1xyXG5pbXBvcnQgeyBob21lLCBtZW51LCBjb250YWN0IH0gZnJvbSAnLi9kYXRhLmpzJ1xyXG5cclxuXHJcbmxldCBuYXZzID0gWydob21lJywnbWVudScsJ2NvbnRhY3QnXVxyXG5jcmVhdGVOYXYoKTtcclxubG9hZE1haW4oaG9tZSwgJ2hvbWUnKTtcclxuXHJcblxyXG5sZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJyk7XHJcblxyXG5idG5zLmZvckVhY2goYnRuPT57XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIG5hdnMuZm9yRWFjaChuYXY9PntcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmF2KS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgIGlmKGJ0bi5pZCA9PSAnaG9tZScpe1xyXG4gICAgICAgICAgICBsb2FkTWFpbihob21lLCBidG4uaWQpO1xyXG4gICAgICAgIH1lbHNlIGlmKGJ0bi5pZCA9PSAnbWVudScpe1xyXG4gICAgICAgICAgICBsb2FkTWFpbihtZW51LCBidG4uaWQpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsb2FkTWFpbihjb250YWN0LCBidG4uaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9