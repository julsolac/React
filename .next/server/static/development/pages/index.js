module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./componentes/ClaseComponent.js":
/*!***************************************!*\
  !*** ./componentes/ClaseComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\jsolis\\Desktop\\Curso REACT\\proyecto1\\componentes\\ClaseComponent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx("div", {
  id: "clase-container",
  className: "jsx-2876180460",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-2876180460",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Clase de ", props.nombre), props.clase.map(item => {
  return __jsx("div", {
    id: "clase-list",
    className: "jsx-2876180460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    src: item.foto,
    alt: "",
    className: "jsx-2876180460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("p", {
    className: "jsx-2876180460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, item.first_name, " ", item.last_name));
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2876180460",
  __self: undefined
}, "#clase-container.jsx-2876180460{-webkit-perspective:500px;-moz-perspective:500px;-ms-perspective:500px;perspective:500px;}#clase-list.jsx-2876180460{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcanNvbGlzXFxEZXNrdG9wXFxDdXJzbyBSRUFDVFxccHJveWVjdG8xXFxjb21wb25lbnRlc1xcQ2xhc2VDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J3QixBQUdrRCxBQUdKLDBFQUNqQixlQUhBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcanNvbGlzXFxEZXNrdG9wXFxDdXJzbyBSRUFDVFxccHJveWVjdG8xXFxjb21wb25lbnRlc1xcQ2xhc2VDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocHJvcHMpPT4oXHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJjbGFzZS1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDI+Q2xhc2UgZGUge3Byb3BzLm5vbWJyZX08L2gyPiAgIFxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNsYXNlLm1hcChpdGVtPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNsYXNlLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmZvdG99IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmZpcnN0X25hbWV9IHtpdGVtLmxhc3RfbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NsYXNlLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTo1MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjbGFzZS1saXN0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbikiXX0= */\n/*@ sourceURL=C:\\Users\\jsolis\\Desktop\\Curso REACT\\proyecto1\\componentes\\ClaseComponent.js */")));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentes_ClaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentes/ClaseComponent */ "./componentes/ClaseComponent.js");
var _jsxFileName = "C:\\Users\\jsolis\\Desktop\\Curso REACT\\proyecto1\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const matematicas = [{
  "id": 1,
  "first_name": "Abby",
  "last_name": "Dudmesh",
  "genero": "Male",
  "foto": "https://robohash.org/molestiaeetautem.bmp?size=50x50&set=set1"
}, {
  "id": 2,
  "first_name": "Kalindi",
  "last_name": "Cossem",
  "genero": "Female",
  "foto": "https://robohash.org/quiaestnon.bmp?size=50x50&set=set1"
}, {
  "id": 3,
  "first_name": "Wake",
  "last_name": "Lanfer",
  "genero": "Male",
  "foto": "https://robohash.org/seddelectusvoluptate.bmp?size=50x50&set=set1"
}, {
  "id": 4,
  "first_name": "Fielding",
  "last_name": "Skryne",
  "genero": "Male",
  "foto": "https://robohash.org/optiodolorqui.bmp?size=50x50&set=set1"
}, {
  "id": 5,
  "first_name": "Mariana",
  "last_name": "Sherrock",
  "genero": "Female",
  "foto": "https://robohash.org/autemsimiliqueculpa.png?size=50x50&set=set1"
}, {
  "id": 6,
  "first_name": "Kelwin",
  "last_name": "Martinat",
  "genero": "Male",
  "foto": "https://robohash.org/quibusdamarchitectovoluptatem.png?size=50x50&set=set1"
}, {
  "id": 7,
  "first_name": "Boris",
  "last_name": "MacHoste",
  "genero": "Male",
  "foto": "https://robohash.org/nesciuntsequimodi.bmp?size=50x50&set=set1"
}, {
  "id": 8,
  "first_name": "Sibelle",
  "last_name": "Donat",
  "genero": "Female",
  "foto": "https://robohash.org/remaspernaturquibusdam.png?size=50x50&set=set1"
}, {
  "id": 9,
  "first_name": "Leshia",
  "last_name": "Artrick",
  "genero": "Female",
  "foto": "https://robohash.org/autlaborumvoluptas.bmp?size=50x50&set=set1"
}, {
  "id": 10,
  "first_name": "Patrice",
  "last_name": "Willcot",
  "genero": "Male",
  "foto": "https://robohash.org/temporelaboriosamvoluptas.png?size=50x50&set=set1"
}];
const ciencias = [{
  "id": 1,
  "first_name": "Nolan",
  "last_name": "Meron",
  "genero": "Male",
  "foto": "https://robohash.org/nullaatexcepturi.bmp?size=50x50&set=set1"
}, {
  "id": 2,
  "first_name": "Dannie",
  "last_name": "Koppen",
  "genero": "Female",
  "foto": "https://robohash.org/nambeataedolore.jpg?size=50x50&set=set1"
}, {
  "id": 3,
  "first_name": "Bing",
  "last_name": "Mortimer",
  "genero": "Male",
  "foto": "https://robohash.org/quiaestassumenda.png?size=50x50&set=set1"
}, {
  "id": 4,
  "first_name": "Melania",
  "last_name": "Garbett",
  "genero": "Female",
  "foto": "https://robohash.org/eaquiaconsequatur.jpg?size=50x50&set=set1"
}, {
  "id": 5,
  "first_name": "Hakim",
  "last_name": "Byas",
  "genero": "Male",
  "foto": "https://robohash.org/veroabillum.png?size=50x50&set=set1"
}, {
  "id": 6,
  "first_name": "Hillie",
  "last_name": "Friedman",
  "genero": "Male",
  "foto": "https://robohash.org/minusdoloremest.jpg?size=50x50&set=set1"
}, {
  "id": 7,
  "first_name": "Woody",
  "last_name": "Powder",
  "genero": "Male",
  "foto": "https://robohash.org/repudiandaeminuspariatur.jpg?size=50x50&set=set1"
}, {
  "id": 8,
  "first_name": "Boycie",
  "last_name": "Schwartz",
  "genero": "Male",
  "foto": "https://robohash.org/remomnisplaceat.bmp?size=50x50&set=set1"
}, {
  "id": 9,
  "first_name": "Remington",
  "last_name": "Sieur",
  "genero": "Male",
  "foto": "https://robohash.org/beataererumipsum.png?size=50x50&set=set1"
}, {
  "id": 10,
  "first_name": "Janine",
  "last_name": "Lefever",
  "genero": "Female",
  "foto": "https://robohash.org/autetdeleniti.jpg?size=50x50&set=set1"
}];
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
}, "Introducci\xF3n a REACT !!!"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130
  },
  __self: undefined
}, "Curso del Plan"), __jsx(_componentes_ClaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
  nombre: "Matem\xE1ticas",
  clase: matematicas,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131
  },
  __self: undefined
}), __jsx(_componentes_ClaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
  nombre: "Ciencias",
  clase: ciencias,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
})));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jsolis\Desktop\Curso REACT\proyecto1\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map