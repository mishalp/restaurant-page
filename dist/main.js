/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });
function createContact(content){
    let container = document.getElementById('main');
    let title = document.createElement('h1')
    let titleDiv = document.createElement('div')
    titleDiv.classList.add('title-div')
    title.innerHTML = content.title;

    titleDiv.appendChild(title)
    container.appendChild(titleDiv);

    let contactDiv = document.createElement('div')
    contactDiv.classList.add('contact-div');

    content.persons.forEach(person => {
        let card = document.createElement('div')
        card.classList.add('contact-card');
        let name = document.createElement('h2');
        name.innerHTML = person.name;
        let pos = document.createElement('p');
        pos.classList.add('pos');
        pos.innerHTML = person.pos;

        let mobile = document.createElement('p');
        mobile.classList.add('mobile');
        mobile.innerHTML = `Mobile: ${person.mobile}`;

        let mail = document.createElement('p');
        mail.classList.add('mail');
        mail.innerHTML = `E-mail: ${person.mail}`;

        card.appendChild(name);
        card.appendChild(pos);
        card.appendChild(mobile);
        card.appendChild(mail);

        contactDiv.appendChild(card)

    });
    container.appendChild(contactDiv);
}



/***/ }),

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
    title: 'Contact Us',
    persons:[
        {
            name: "Jhone",
            pos: "Chef",
            mobile: "+1234567890",
            mail: "jhone@jhone.com"
        },
        {
            name: "Martin",
            pos: "Chef",
            mobile: "+1234567890",
            mail: "Martin@Martin.com"
        },
        {
            name: "Alex",
            pos: "Chef",
            mobile: "+1234567890",
            mail: "Alex@Alex.com"
        }
    ]
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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




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
    }else if(id == 'contact'){
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)(content);
    }else return
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxjQUFjO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxZQUFZO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4Qjs7Ozs7Ozs7Ozs7Ozs7O0FDMUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSztBQUNuQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ29DO0FBQ0E7QUFDSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFVO0FBQ2xCLEtBQUs7QUFDTCxRQUFRLGlEQUFVO0FBQ2xCLEtBQUs7QUFDTCxRQUFRLHVEQUFhO0FBQ3JCLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O1VDaEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTitEO0FBQ2hCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHFEQUFTO0FBQ1QsbURBQVEsQ0FBQywwQ0FBSTtBQUNiLHVEQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBUSxDQUFDLDBDQUFJO0FBQ3pCLFNBQVM7QUFDVCxZQUFZLG1EQUFRLENBQUMsMENBQUk7QUFDekIsU0FBUztBQUNULFlBQVksbURBQVEsQ0FBQyw2Q0FBTztBQUM1QjtBQUNBLEtBQUs7QUFDTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoY29udGVudCl7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZS1kaXYnKVxyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gY29udGVudC50aXRsZTtcclxuXHJcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcblxyXG4gICAgbGV0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRpdicpO1xyXG5cclxuICAgIGNvbnRlbnQucGVyc29ucy5mb3JFYWNoKHBlcnNvbiA9PiB7XHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jYXJkJyk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIG5hbWUuaW5uZXJIVE1MID0gcGVyc29uLm5hbWU7XHJcbiAgICAgICAgbGV0IHBvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwb3MuY2xhc3NMaXN0LmFkZCgncG9zJyk7XHJcbiAgICAgICAgcG9zLmlubmVySFRNTCA9IHBlcnNvbi5wb3M7XHJcblxyXG4gICAgICAgIGxldCBtb2JpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbW9iaWxlLmNsYXNzTGlzdC5hZGQoJ21vYmlsZScpO1xyXG4gICAgICAgIG1vYmlsZS5pbm5lckhUTUwgPSBgTW9iaWxlOiAke3BlcnNvbi5tb2JpbGV9YDtcclxuXHJcbiAgICAgICAgbGV0IG1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbWFpbC5jbGFzc0xpc3QuYWRkKCdtYWlsJyk7XHJcbiAgICAgICAgbWFpbC5pbm5lckhUTUwgPSBgRS1tYWlsOiAke3BlcnNvbi5tYWlsfWA7XHJcblxyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwb3MpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobW9iaWxlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKG1haWwpO1xyXG5cclxuICAgICAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNhcmQpXHJcblxyXG4gICAgfSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSIsImxldCBob21lID0ge1xyXG4gICAgdGl0bGU6XCJSZXN0YXVyYW50IFN3ZWV0IFJlc3RhdXJhbnRcIixcclxuICAgIHR4dDogXCJXZSBiZWxpZXZlIGluIHRoZSBjb21taXRtZW50IHRvIG91ciBjb21tdW5pdHkgYW5kIGluIGZvc3RlcmluZyBsb25nIHRlcm0gcmVsYXRpb25zaGlwcyB3aXRoIGxvY2FsIGZhcm1lcnMgYW5kIGZpc2hlcm1lbi4gT3VyIG1lbnVzIHJlZmxlY3QgdGhlc2UgY29ubmVjdGlvbnMsIGZlYXR1cmluZyBsb2NhbCwgc2Vhc29uYWwgcHJvZHVjZSBhbmQgc3VzdGFpbmFibHkgc291cmNlZCBzZWFmb29kIGFuZCBtZWF0c1wiLFxyXG4gICAgdGltZToge1xyXG4gICAgICAgIHRpdGxlOiAnSG91cnMnLFxyXG4gICAgICAgIHRpbWVzOiBbJ1N1bmRheTogOGFtIC0gOHBtJywnTW9uZGF5OiA2YW0gLSA2cG0nLCdUdWVzZGF5OiA2YW0gLSA2cG0nLCdXZWRuZXNkYXk6IDZhbSAtIDZwbScsJ1RodXJzZGF5OiA2YW0gLSAxMHBtJywnRnJpZGF5OiA2YW0gLSAxMHBtJywnU2F0dXJkYXk6IDhhbSAtIDEwcG0nXSxcclxuICAgIH0sXHJcbiAgICBhZGQ6e1xyXG4gICAgICAgIHRpdGxlOiBcIkxvY2F0aW9uXCIsXHJcbiAgICAgICAgdHh0OiBcIjEyMyBGb3Jlc3QgRHJpdmUsIEZvcmVzdHZpbGxlLCBNYWluZVwiXHJcbiAgICB9LFxyXG5cclxufVxyXG5cclxubGV0IG1lbnUgPSB7XHJcbiAgICB0aXRsZTogJ01lbnUgSXRlbXMnLFxyXG4gICAgaXRlbXM6W1xyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJ1cmdlclwiLFxyXG4gICAgICAgIGRpc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBuaWNlIEJ1cmdlciB0byBlYXRcIixcclxuICAgICAgICBwcmljZTogXCIkMlwiLFxyXG4gICAgICAgIHBhdGg6ICcuL2ltZy9idXJnZXIuanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBpenphXCIsXHJcbiAgICAgICAgICAgIGRpc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBuaWNlIFBpenphIHRvIGVhdFwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIkM1wiLFxyXG4gICAgICAgICAgICBwYXRoOiAnLi9pbWcvcGl6emEuanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNhbmR3aWNoXCIsXHJcbiAgICAgICAgICAgIGRpc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBuaWNlIFNhbmR3aWNoIHRvIGVhdFwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIkMlwiLFxyXG4gICAgICAgICAgICBwYXRoOiAnLi9pbWcvc2FuZHdpY2guanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkZyZW5jaCBGcmllc1wiLFxyXG4gICAgICAgICAgICBkaXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgbmljZSBGcmVuY2ggRnJpZXMgdG8gZWF0XCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIiQyXCIsXHJcbiAgICAgICAgICAgIHBhdGg6ICcuL2ltZy9mcmVuY2guanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNwYWdoZXR0aVwiLFxyXG4gICAgICAgICAgICBkaXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgbmljZSBTcGFnaGV0dGkgdG8gZWF0XCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIiQzXCIsXHJcbiAgICAgICAgICAgIHBhdGg6ICcuL2ltZy9zcGFnaGV0dGkuanBnJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxubGV0IGNvbnRhY3QgPSB7XHJcbiAgICB0aXRsZTogJ0NvbnRhY3QgVXMnLFxyXG4gICAgcGVyc29uczpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkpob25lXCIsXHJcbiAgICAgICAgICAgIHBvczogXCJDaGVmXCIsXHJcbiAgICAgICAgICAgIG1vYmlsZTogXCIrMTIzNDU2Nzg5MFwiLFxyXG4gICAgICAgICAgICBtYWlsOiBcImpob25lQGpob25lLmNvbVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiTWFydGluXCIsXHJcbiAgICAgICAgICAgIHBvczogXCJDaGVmXCIsXHJcbiAgICAgICAgICAgIG1vYmlsZTogXCIrMTIzNDU2Nzg5MFwiLFxyXG4gICAgICAgICAgICBtYWlsOiBcIk1hcnRpbkBNYXJ0aW4uY29tXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJBbGV4XCIsXHJcbiAgICAgICAgICAgIHBvczogXCJDaGVmXCIsXHJcbiAgICAgICAgICAgIG1vYmlsZTogXCIrMTIzNDU2Nzg5MFwiLFxyXG4gICAgICAgICAgICBtYWlsOiBcIkFsZXhAQWxleC5jb21cIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IHsgaG9tZSwgbWVudSwgY29udGFjdCB9XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZUhvbWUoY29udGVudCl7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUtZGl2JylcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IGNvbnRlbnQudGl0bGU7XHJcblxyXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG5cclxuICAgIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgdHh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0eHREaXYuY2xhc3NMaXN0LmFkZCgndHh0LWRpdicpO1xyXG4gICAgdHh0LmlubmVySFRNTCA9IGNvbnRlbnQudHh0O1xyXG5cclxuICAgIHR4dERpdi5hcHBlbmRDaGlsZCh0eHQpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHR4dERpdik7XHJcblxyXG4gICAgbGV0IHRpbWVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aW1lc0Rpdi5jbGFzc0xpc3QuYWRkKCd0aW1lcy1kaXYnKTtcclxuICAgIGxldCB0aW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCB0aW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGltZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpbWUtdGl0bGUnKTtcclxuICAgIHRpbWVUaXRsZS5pbm5lckhUTUwgPSBjb250ZW50LnRpbWUudGl0bGU7XHJcblxyXG4gICAgdGltZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnRlbnQudGltZS50aW1lcy5mb3JFYWNoKHRpbWUgPT4ge1xyXG4gICAgICAgIHRpbWVzLmlubmVySFRNTCArPSBgJHt0aW1lfTxicj5gXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aW1lc0Rpdi5hcHBlbmRDaGlsZCh0aW1lVGl0bGUpO1xyXG4gICAgdGltZXNEaXYuYXBwZW5kQ2hpbGQodGltZXMpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lc0Rpdik7IFxyXG5cclxuICAgIGxldCBhZGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFkZERpdi5jbGFzc0xpc3QuYWRkKCd0aW1lcy1kaXYnKTtcclxuICAgIGxldCBhZGRUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgYWRkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgYWRkVGl0bGUuY2xhc3NMaXN0LmFkZCgndGltZS10aXRsZScpO1xyXG4gICAgYWRkVGl0bGUuaW5uZXJIVE1MID0gY29udGVudC5hZGQudGl0bGU7XHJcbiAgICBhZGRUeHQuaW5uZXJIVE1MID0gY29udGVudC5hZGQudHh0O1xyXG5cclxuICAgIGFkZERpdi5hcHBlbmRDaGlsZChhZGRUaXRsZSk7XHJcbiAgICBhZGREaXYuYXBwZW5kQ2hpbGQoYWRkVHh0KTtcclxuICAgXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkRGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlSG9tZSB9IiwiZnVuY3Rpb24gY3JlYXRlTWVudShjb250ZW50KXtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZS1kaXYnKVxyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gY29udGVudC50aXRsZTtcclxuXHJcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcblxyXG4gICAgbGV0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZC1kaXYnKTtcclxuICAgIGNvbnRlbnQuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBuYW1lLmlubmVySFRNTCA9IGl0ZW0ubmFtZTtcclxuICAgICAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHR4dC5pbm5lckhUTUwgPSBpdGVtLmRpc2NyaXB0aW9uO1xyXG4gICAgICAgIGxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBwcmljZS5pbm5lckhUTUwgPSBpdGVtLnByaWNlO1xyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpdGVtLnBhdGgpO1xyXG5cclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHR4dCk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcmljZSk7XHJcblxyXG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREaXYpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBjcmVhdGVNZW51IH0iLCJpbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2JylcclxuICAgIGxldCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJhci5jbGFzc0xpc3QuYWRkKCdiYXInKTtcclxuXHJcbiAgICBsZXQgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XHJcbiAgICBob21lVGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpO1xyXG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgaG9tZVRhYi5pbm5lckhUTUwgPSBcIkhvbWVcIjtcclxuXHJcbiAgICBsZXQgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XHJcbiAgICBtZW51VGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xyXG4gICAgbWVudVRhYi5pbm5lckhUTUwgPSBcIk1lbnVcIjtcclxuXHJcbiAgICBsZXQgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XHJcbiAgICBjb250YWN0VGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xyXG4gICAgY29udGFjdFRhYi5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcclxuXHJcbiAgICBiYXIuYXBwZW5kQ2hpbGQoaG9tZVRhYilcclxuICAgIGJhci5hcHBlbmRDaGlsZChtZW51VGFiKVxyXG4gICAgYmFyLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpXHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhcilcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpXHJcbiAgICBsZXQgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiYXIuY2xhc3NMaXN0LmFkZCgnYmFyJyk7XHJcbiAgICBiYXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcblxyXG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9naXRodWIucG5nJyk7XHJcblxyXG4gICAgbGV0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICB0eHQuaW5uZXJIVE1MID0gXCJAbWlzaGFscFwiO1xyXG4gICAgYmFyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgYmFyLmFwcGVuZENoaWxkKHR4dCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXIoKXtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNYWluKGNvbnRlbnQsIGlkKXtcclxuICAgIGNsZWFyKClcclxuICAgIGlmKGlkID09ICdob21lJyl7XHJcbiAgICAgICAgY3JlYXRlSG9tZShjb250ZW50KTtcclxuICAgIH1lbHNlIGlmKGlkID09ICdtZW51Jyl7XHJcbiAgICAgICAgY3JlYXRlTWVudShjb250ZW50KTtcclxuICAgIH1lbHNlIGlmKGlkID09ICdjb250YWN0Jyl7XHJcbiAgICAgICAgY3JlYXRlQ29udGFjdChjb250ZW50KTtcclxuICAgIH1lbHNlIHJldHVyblxyXG59XHJcblxyXG5leHBvcnQgeyBsb2FkTWFpbiwgY3JlYXRlTmF2LCBjcmVhdGVGb290ZXIgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZE1haW4sIGNyZWF0ZU5hdiwgY3JlYXRlRm9vdGVyIH0gZnJvbSBcIi4vcGFnZWxvYWRcIjtcclxuaW1wb3J0IHsgaG9tZSwgbWVudSwgY29udGFjdCB9IGZyb20gJy4vZGF0YS5qcydcclxuXHJcblxyXG5sZXQgbmF2cyA9IFsnaG9tZScsJ21lbnUnLCdjb250YWN0J11cclxuY3JlYXRlTmF2KCk7XHJcbmxvYWRNYWluKGhvbWUsICdob21lJyk7XHJcbmNyZWF0ZUZvb3RlcigpO1xyXG5cclxubGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpO1xyXG5cclxuYnRucy5mb3JFYWNoKGJ0bj0+e1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBuYXZzLmZvckVhY2gobmF2PT57XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hdikuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG5cclxuICAgICAgICBpZihidG4uaWQgPT0gJ2hvbWUnKXtcclxuICAgICAgICAgICAgbG9hZE1haW4oaG9tZSwgYnRuLmlkKTtcclxuICAgICAgICB9ZWxzZSBpZihidG4uaWQgPT0gJ21lbnUnKXtcclxuICAgICAgICAgICAgbG9hZE1haW4obWVudSwgYnRuLmlkKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbG9hZE1haW4oY29udGFjdCwgYnRuLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==