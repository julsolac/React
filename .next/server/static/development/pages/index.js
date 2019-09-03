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
  className: "jsx-1608089709",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-1608089709",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Clase de ", props.nombre), props.clase.map(item => {
  return __jsx("div", {
    className: "jsx-1608089709" + " " + "clase-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    src: item.foto,
    alt: "",
    className: "jsx-1608089709",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("p", {
    className: "jsx-1608089709",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, item.first_name, " ", item.last_name));
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1608089709",
  __self: undefined
}, "#clase-container.jsx-1608089709{-webkit-perspective:500;-moz-perspective:500;-ms-perspective:500;perspective:500;}.clase-list.jsx-1608089709{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.clase-list.jsx-1608089709 img.jsx-1608089709{padding:3px;border:1px solid #ccc;margin:5px;}.clase-list.jsx-1608089709 p.jsx-1608089709{font-size:10px;font-weight:bold;font-style:italic;margin-left:12px;}.clase-list.jsx-1608089709:hover{-webkit-transform:translateY(10px)scale(1);-ms-transform:translateY(10px)scale(1);transform:translateY(10px)scale(1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcanNvbGlzXFxEZXNrdG9wXFxDdXJzbyBSRUFDVFxccHJveWVjdG8xXFxjb21wb25lbnRlc1xcQ2xhc2VDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J3QixBQUdnRCxBQUdGLEFBR0YsQUFLRyxBQU1vQixZQVZiLEdBS0wsaUJBQ0MsRUFMUCxXQUNkLEtBS29CLGlCQUNwQixPQVhBLE9BSEEsb0NBaUJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcanNvbGlzXFxEZXNrdG9wXFxDdXJzbyBSRUFDVFxccHJveWVjdG8xXFxjb21wb25lbnRlc1xcQ2xhc2VDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocHJvcHMpPT4oXHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJjbGFzZS1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDI+Q2xhc2UgZGUge3Byb3BzLm5vbWJyZX08L2gyPiAgIFxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNsYXNlLm1hcChpdGVtPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGFzZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBzcmM9e2l0ZW0uZm90b30gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uZmlyc3RfbmFtZX0ge2l0ZW0ubGFzdF9uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2xhc2UtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOjUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzZS1saXN0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2xhc2UtbGlzdCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzozcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjo1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2xhc2UtbGlzdCBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTppdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzZS1saXN0OmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuKSJdfQ== */\n/*@ sourceURL=C:\\Users\\jsolis\\Desktop\\Curso REACT\\proyecto1\\componentes\\ClaseComponent.js */")));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componentes_ClaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentes/ClaseComponent */ "./componentes/ClaseComponent.js");
var _jsxFileName = "C:\\Users\\jsolis\\Desktop\\Curso REACT\\proyecto1\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

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
  className: "jsx-2921423004",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}, __jsx("h1", {
  style: {
    textAlign: "center"
  },
  className: "jsx-2921423004",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
}, "Introducci\xF3n a REACT !!!"), __jsx("div", {
  style: {
    display: "flex",
    justifyContent: "space-around"
  },
  className: "jsx-2921423004",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131
  },
  __self: undefined
}, __jsx(_componentes_ClaseComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
  nombre: "Matem\xE1ticas",
  clase: matematicas,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
}), __jsx(_componentes_ClaseComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
  nombre: "Ciencias",
  clase: ciencias,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2921423004",
  __self: undefined
}, "body{background:#ffca20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcanNvbGlzXFxEZXNrdG9wXFxDdXJzbyBSRUFDVFxccHJveWVjdG8xXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0lnQixBQUd1QyxtQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqc29saXNcXERlc2t0b3BcXEN1cnNvIFJFQUNUXFxwcm95ZWN0bzFcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgQ2xhc2VDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50ZXMvQ2xhc2VDb21wb25lbnQnXHJcblxyXG5jb25zdCBtYXRlbWF0aWNhcyA9IFt7XHJcbiAgICBcImlkXCI6IDEsXHJcbiAgICBcImZpcnN0X25hbWVcIjogXCJBYmJ5XCIsXHJcbiAgICBcImxhc3RfbmFtZVwiOiBcIkR1ZG1lc2hcIixcclxuICAgIFwiZ2VuZXJvXCI6IFwiTWFsZVwiLFxyXG4gICAgXCJmb3RvXCI6IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvbW9sZXN0aWFlZXRhdXRlbS5ibXA/c2l6ZT01MHg1MCZzZXQ9c2V0MVwiXHJcbiAgfSwge1xyXG4gICAgXCJpZFwiOiAyLFxyXG4gICAgXCJmaXJzdF9uYW1lXCI6IFwiS2FsaW5kaVwiLFxyXG4gICAgXCJsYXN0X25hbWVcIjogXCJDb3NzZW1cIixcclxuICAgIFwiZ2VuZXJvXCI6IFwiRmVtYWxlXCIsXHJcbiAgICBcImZvdG9cIjogXCJodHRwczovL3JvYm9oYXNoLm9yZy9xdWlhZXN0bm9uLmJtcD9zaXplPTUweDUwJnNldD1zZXQxXCJcclxuICB9LCB7XHJcbiAgICBcImlkXCI6IDMsXHJcbiAgICBcImZpcnN0X25hbWVcIjogXCJXYWtlXCIsXHJcbiAgICBcImxhc3RfbmFtZVwiOiBcIkxhbmZlclwiLFxyXG4gICAgXCJnZW5lcm9cIjogXCJNYWxlXCIsXHJcbiAgICBcImZvdG9cIjogXCJodHRwczovL3JvYm9oYXNoLm9yZy9zZWRkZWxlY3R1c3ZvbHVwdGF0ZS5ibXA/c2l6ZT01MHg1MCZzZXQ9c2V0MVwiXHJcbiAgfSwge1xyXG4gICAgXCJpZFwiOiA0LFxyXG4gICAgXCJmaXJzdF9uYW1lXCI6IFwiRmllbGRpbmdcIixcclxuICAgIFwibGFzdF9uYW1lXCI6IFwiU2tyeW5lXCIsXHJcbiAgICBcImdlbmVyb1wiOiBcIk1hbGVcIixcclxuICAgIFwiZm90b1wiOiBcImh0dHBzOi8vcm9ib2hhc2gub3JnL29wdGlvZG9sb3JxdWkuYm1wP3NpemU9NTB4NTAmc2V0PXNldDFcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogNSxcclxuICAgIFwiZmlyc3RfbmFtZVwiOiBcIk1hcmlhbmFcIixcclxuICAgIFwibGFzdF9uYW1lXCI6IFwiU2hlcnJvY2tcIixcclxuICAgIFwiZ2VuZXJvXCI6IFwiRmVtYWxlXCIsXHJcbiAgICBcImZvdG9cIjogXCJodHRwczovL3JvYm9oYXNoLm9yZy9hdXRlbXNpbWlsaXF1ZWN1bHBhLnBuZz9zaXplPTUweDUwJnNldD1zZXQxXCJcclxuICB9LCB7XHJcbiAgICBcImlkXCI6IDYsXHJcbiAgICBcImZpcnN0X25hbWVcIjogXCJLZWx3aW5cIixcclxuICAgIFwibGFzdF9uYW1lXCI6IFwiTWFydGluYXRcIixcclxuICAgIFwiZ2VuZXJvXCI6IFwiTWFsZVwiLFxyXG4gICAgXCJmb3RvXCI6IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvcXVpYnVzZGFtYXJjaGl0ZWN0b3ZvbHVwdGF0ZW0ucG5nP3NpemU9NTB4NTAmc2V0PXNldDFcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogNyxcclxuICAgIFwiZmlyc3RfbmFtZVwiOiBcIkJvcmlzXCIsXHJcbiAgICBcImxhc3RfbmFtZVwiOiBcIk1hY0hvc3RlXCIsXHJcbiAgICBcImdlbmVyb1wiOiBcIk1hbGVcIixcclxuICAgIFwiZm90b1wiOiBcImh0dHBzOi8vcm9ib2hhc2gub3JnL25lc2NpdW50c2VxdWltb2RpLmJtcD9zaXplPTUweDUwJnNldD1zZXQxXCJcclxuICB9LCB7XHJcbiAgICBcImlkXCI6IDgsXHJcbiAgICBcImZpcnN0X25hbWVcIjogXCJTaWJlbGxlXCIsXHJcbiAgICBcImxhc3RfbmFtZVwiOiBcIkRvbmF0XCIsXHJcbiAgICBcImdlbmVyb1wiOiBcIkZlbWFsZVwiLFxyXG4gICAgXCJmb3RvXCI6IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvcmVtYXNwZXJuYXR1cnF1aWJ1c2RhbS5wbmc/c2l6ZT01MHg1MCZzZXQ9c2V0MVwiXHJcbiAgfSwge1xyXG4gICAgXCJpZFwiOiA5LFxyXG4gICAgXCJmaXJzdF9uYW1lXCI6IFwiTGVzaGlhXCIsXHJcbiAgICBcImxhc3RfbmFtZVwiOiBcIkFydHJpY2tcIixcclxuICAgIFwiZ2VuZXJvXCI6IFwiRmVtYWxlXCIsXHJcbiAgICBcImZvdG9cIjogXCJodHRwczovL3JvYm9oYXNoLm9yZy9hdXRsYWJvcnVtdm9sdXB0YXMuYm1wP3NpemU9NTB4NTAmc2V0PXNldDFcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogMTAsXHJcbiAgICBcImZpcnN0X25hbWVcIjogXCJQYXRyaWNlXCIsXHJcbiAgICBcImxhc3RfbmFtZVwiOiBcIldpbGxjb3RcIixcclxuICAgIFwiZ2VuZXJvXCI6IFwiTWFsZVwiLFxyXG4gICAgXCJmb3RvXCI6IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvdGVtcG9yZWxhYm9yaW9zYW12b2x1cHRhcy5wbmc/c2l6ZT01MHg1MCZzZXQ9c2V0MVwiXHJcbiAgfV1cclxuXHJcbmNvbnN0IGNpZW5jaWFzID0gW3tcclxuICAgIFwiaWRcIjogMSxcclxuICAgIFwiZmlyc3RfbmFtZVwiOiBcIk5vbGFuXCIsXHJcbiAgICBcImxhc3RfbmFtZVwiOiBcIk1lcm9uXCIsXHJcbiAgICBcImdlbmVyb1wiOiBcIk1hbGVcIixcclxuICAgIFwiZm90b1wiOiBcImh0dHBzOi8vcm9ib2hhc2gub3JnL251bGxhYXRleGNlcHR1cmkuYm1wP3NpemU9NTB4NTAmc2V0PXNldDFcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogMixcclxuICAgIFwiZmlyc3RfbmFtZVwiOiBcIkRhbm5pZVwiLFxyXG4gICAgXCJsYXN0X25hbWVcIjogXCJLb3BwZW5cIixcclxuICAgIFwiZ2VuZXJvXCI6IFwiRmVtYWxlXCIsXHJcbiAgICBcImZvdG9cIjogXCJodHRwczovL3JvYm9oYXNoLm9yZy9uYW1iZWF0YWVkb2xvcmUuanBnP3NpemU9NTB4NTAmc2V0PXNldDFcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogMyxcclxuICAgIFwiZmlyc3RfbmFtZVwiOiBcIkJpbmdcIixcclxuICAgIFwibGFzdF9uYW1lXCI6IFwiTW9ydGltZXJcIixcclxuICAgIFwiZ2VuZXJvXCI6IFwiTWFsZVwiLFxyXG4gICAgXCJmb3RvXCI6IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvcXVpYWVzdGFzc3VtZW5kYS5wbmc/c2l6ZT01MHg1MCZzZXQ9c2V0MVwiXHJcbiAgfSwge1xyXG4gICAgXCJpZFwiOiA0LFxyXG4gICAgXCJmaXJzdF9uYW1lXCI6IFwiTWVsYW5pYVwiLFxyXG4gICAgXCJsYXN0X25hbWVcIjogXCJHYXJiZXR0XCIsXHJcbiAgICBcImdlbmVyb1wiOiBcIkZlbWFsZVwiLFxyXG4gICAgXCJmb3RvXCI6IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvZWFxdWlhY29uc2VxdWF0dXIuanBnP3NpemU9NTB4NTAmc2V0PXNldDFcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogNSxcclxuICAgIFwiZmlyc3RfbmFtZVwiOiBcIkhha2ltXCIsXHJcbiAgICBcImxhc3RfbmFtZVwiOiBcIkJ5YXNcIixcclxuICAgIFwiZ2VuZXJvXCI6IFwiTWFsZVwiLFxyXG4gICAgXCJmb3RvXCI6IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvdmVyb2FiaWxsdW0ucG5nP3NpemU9NTB4NTAmc2V0PXNldDFcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogNixcclxuICAgIFwiZmlyc3RfbmFtZVwiOiBcIkhpbGxpZVwiLFxyXG4gICAgXCJsYXN0X25hbWVcIjogXCJGcmllZG1hblwiLFxyXG4gICAgXCJnZW5lcm9cIjogXCJNYWxlXCIsXHJcbiAgICBcImZvdG9cIjogXCJodHRwczovL3JvYm9oYXNoLm9yZy9taW51c2RvbG9yZW1lc3QuanBnP3NpemU9NTB4NTAmc2V0PXNldDFcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogNyxcclxuICAgIFwiZmlyc3RfbmFtZVwiOiBcIldvb2R5XCIsXHJcbiAgICBcImxhc3RfbmFtZVwiOiBcIlBvd2RlclwiLFxyXG4gICAgXCJnZW5lcm9cIjogXCJNYWxlXCIsXHJcbiAgICBcImZvdG9cIjogXCJodHRwczovL3JvYm9oYXNoLm9yZy9yZXB1ZGlhbmRhZW1pbnVzcGFyaWF0dXIuanBnP3NpemU9NTB4NTAmc2V0PXNldDFcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogOCxcclxuICAgIFwiZmlyc3RfbmFtZVwiOiBcIkJveWNpZVwiLFxyXG4gICAgXCJsYXN0X25hbWVcIjogXCJTY2h3YXJ0elwiLFxyXG4gICAgXCJnZW5lcm9cIjogXCJNYWxlXCIsXHJcbiAgICBcImZvdG9cIjogXCJodHRwczovL3JvYm9oYXNoLm9yZy9yZW1vbW5pc3BsYWNlYXQuYm1wP3NpemU9NTB4NTAmc2V0PXNldDFcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogOSxcclxuICAgIFwiZmlyc3RfbmFtZVwiOiBcIlJlbWluZ3RvblwiLFxyXG4gICAgXCJsYXN0X25hbWVcIjogXCJTaWV1clwiLFxyXG4gICAgXCJnZW5lcm9cIjogXCJNYWxlXCIsXHJcbiAgICBcImZvdG9cIjogXCJodHRwczovL3JvYm9oYXNoLm9yZy9iZWF0YWVyZXJ1bWlwc3VtLnBuZz9zaXplPTUweDUwJnNldD1zZXQxXCJcclxuICB9LCB7XHJcbiAgICBcImlkXCI6IDEwLFxyXG4gICAgXCJmaXJzdF9uYW1lXCI6IFwiSmFuaW5lXCIsXHJcbiAgICBcImxhc3RfbmFtZVwiOiBcIkxlZmV2ZXJcIixcclxuICAgIFwiZ2VuZXJvXCI6IFwiRmVtYWxlXCIsXHJcbiAgICBcImZvdG9cIjogXCJodHRwczovL3JvYm9oYXNoLm9yZy9hdXRldGRlbGVuaXRpLmpwZz9zaXplPTUweDUwJnNldD1zZXQxXCJcclxuICB9XVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCk9PihcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5JbnRyb2R1Y2Npw7NuIGEgUkVBQ1QgISEhPC9oMT5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCJ9fT5cclxuICAgICAgICAgICAgPENsYXNlQ29tcG9uZW50IG5vbWJyZT1cIk1hdGVtw6F0aWNhc1wiIGNsYXNlPXttYXRlbWF0aWNhc30vPlxyXG4gICAgICAgICAgICA8Q2xhc2VDb21wb25lbnQgbm9tYnJlPVwiQ2llbmNpYXNcIiBjbGFzZT17Y2llbmNpYXN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmNhMjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcblxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\jsolis\\Desktop\\Curso REACT\\proyecto1\\pages\\index.js */")));

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