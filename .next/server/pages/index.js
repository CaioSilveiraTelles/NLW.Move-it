module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"body\",\"description\":\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\",\"amount\":100},{\"type\":\"body\",\"description\":\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\",\"amount\":50},{\"type\":\"body\",\"description\":\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\",\"amount\":80},{\"type\":\"eye\",\"description\":\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\",\"amount\":90},{\"type\":\"eye\",\"description\":\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\",\"amount\":140},{\"type\":\"eye\",\"description\":\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\",\"amount\":90}]");

/***/ }),

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeBox", function() { return ChallengeBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ "./src/styles/components/ChallengeBox.module.css");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_CountDownContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/CountDownContext */ "./src/contexts/CountDownContext.tsx");

var _jsxFileName = "C:\\Users\\caio.telles\\move-it\\src\\components\\ChallengeBox.tsx";




function ChallengeBox() {
  const {
    data
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    functions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    activeChallenge
  } = data;
  const {
    resetChallenge
  } = functions;
  const {
    challengComplet
  } = functions;
  const {
    resetCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountDownContext__WEBPACK_IMPORTED_MODULE_4__["CountDownContext"]);

  function handChallengSucceded() {
    challengComplet();
    resetCountdown();
  }

  function handChallengFailed() {
    resetChallenge();
    resetCountdown();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeBoxContainer,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: ["Ganhe ", activeChallenge.amount, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `icons/${activeChallenge.type}.svg`,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Novo desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeFailedButton,
          onClick: handChallengFailed,
          children: "Falhei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeSucceededButton,
          onClick: handChallengSucceded,
          children: "Completei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeNotActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Inicie um ciclo para receber um desafio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level-up.svg",
          alt: "Level up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this), "Avance de n\xEDvel completando desafios"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/CompletedChallanges.tsx":
/*!************************************************!*\
  !*** ./src/components/CompletedChallanges.tsx ***!
  \************************************************/
/*! exports provided: CompletedChallanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedChallanges", function() { return CompletedChallanges; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CompletedChallenges.module.css */ "./src/styles/components/CompletedChallenges.module.css");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\caio.telles\\move-it\\src\\components\\CompletedChallanges.tsx";



function CompletedChallanges() {
  const {
    data
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    completedChallenges
  } = data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.completedChallengesContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "Desafios Completos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: completedChallenges
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_CountDownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountDownContext */ "./src/contexts/CountDownContext.tsx");


var _jsxFileName = "C:\\Users\\caio.telles\\move-it\\src\\components\\Countdown.tsx";



let countdownTimeout;
function Countdown() {
  const {
    minute,
    second,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountDownContext__WEBPACK_IMPORTED_MODULE_3__["CountDownContext"]);
  const [minuteLeft, minuteRight] = String(minute).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(second).padStart(2, "0").split("");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      type: "button",
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countdownButton,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: resetCountdown,
        type: "button",
        className: `${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countdownButton} + ${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.stopCountdownButton}`,
        children: "Abandonar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: startCountdown,
        type: "button",
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countdownButton,
        children: "Iniciar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, this)
    }, void 0, false)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/*! exports provided: ExperienceBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBar", function() { return ExperienceBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ExperienceBar.module.css */ "./src/styles/components/ExperienceBar.module.css");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\caio.telles\\move-it\\src\\components\\ExperienceBar.tsx";



function ExperienceBar() {
  const {
    data
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    experience,
    experienceToNextLevel
  } = data;
  const percentToLevelUp = Math.round(100 * experience / experienceToNextLevel);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.experienceBar,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "0 xp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: `${percentToLevelUp}%`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.currentExperience,
        style: {
          left: `${percentToLevelUp}%`
        },
        children: [experience, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [experienceToNextLevel, " xp"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Profile.module.css */ "./src/styles/components/Profile.module.css");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");

var _jsxFileName = "C:\\Users\\caio.telles\\move-it\\src\\components\\Profile.tsx";



function Profile() {
  const {
    data
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__["ChallengesContext"]);
  const {
    level
  } = data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.profileContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/profile.jpg",
      alt: "Avatar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Caio Silveira Telles"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/level.svg",
          alt: "Level Icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this), "Level ", level]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);

var _jsxFileName = "C:\\Users\\caio.telles\\move-it\\src\\contexts\\ChallengesContext.tsx";


const ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider({
  children
}) {
  const {
    0: level,
    1: setLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: experience,
    1: setExperience
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10);
  const {
    0: completedChallenges,
    1: setCompletedChallenges
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    const newChallenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];
    setActiveChallenge(newChallenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo Desafio', {
        body: `Valendo ${_challenges_json__WEBPACK_IMPORTED_MODULE_2__.amount} xp! `
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function challengComplet() {
    if (!activeChallenge) {
      return;
    }

    const {
      amount
    } = activeChallenge;
    let finalExperience = experience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setExperience(finalExperience);
    setActiveChallenge(null);
    setCompletedChallenges(completedChallenges + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      data: {
        level,
        experience,
        experienceToNextLevel,
        completedChallenges,
        activeChallenge
      },
      functions: {
        levelUp,
        startNewChallenge,
        resetChallenge,
        challengComplet
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/contexts/CountDownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountDownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountDownContext, CountDownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownContext", function() { return CountDownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownProvider", function() { return CountDownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");

var _jsxFileName = "C:\\Users\\caio.telles\\move-it\\src\\contexts\\CountDownContext.tsx";


const CountDownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function CountDownProvider({
  children
}) {
  let countdownTimeout;
  const {
    functions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    startNewChallenge
  } = functions;
  const {
    0: timer,
    1: setTimer
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.1 * 60);
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: hasFinished,
    1: setHasFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const minute = Math.floor(timer / 60);
  const second = timer % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTimer(0.1 * 60);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isActive && timer > 0) {
      countdownTimeout = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (isActive && timer === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, timer]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountDownContext.Provider, {
    value: {
      minute,
      second,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Countdown */ "./src/components/Countdown.tsx");
/* harmony import */ var _components_CompletedChallanges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CompletedChallanges */ "./src/components/CompletedChallanges.tsx");
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ChallengeBox */ "./src/components/ChallengeBox.tsx");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_CountDownContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/CountDownContext */ "./src/contexts/CountDownContext.tsx");

var _jsxFileName = "C:\\Users\\caio.telles\\move-it\\src\\pages\\index.tsx";








function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Bulding | move.it"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_2__["ExperienceBar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_CountDownContext__WEBPACK_IMPORTED_MODULE_8__["CountDownProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_3__["Profile"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallanges__WEBPACK_IMPORTED_MODULE_5__["CompletedChallanges"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Countdown__WEBPACK_IMPORTED_MODULE_4__["Countdown"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__["ChallengeBox"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "footer-icons",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "social-icons",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://github.com/CaioSilveiraTelles",
              target: "_blank",
              style: {
                color: "white"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-github"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "social-icons",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://twitter.com/silveira_telles",
              target: "_blank",
              style: {
                color: "white"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "social-icons",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://www.linkedin.com/in/caio-silveira-telles-9750301a3/",
              target: "_blank",
              style: {
                color: "white"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-linkedin-in"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "social-icons",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://www.instagram.com/caiosilveira___/?hl=pt-br",
              target: "_blank",
              style: {
                color: "white"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/styles/components/ChallengeBox.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/ChallengeBox.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"challengeBoxContainer": "ChallengeBox_challengeBoxContainer__53AkF",
	"challengeNotActive": "ChallengeBox_challengeNotActive__35ixK",
	"challengeActive": "ChallengeBox_challengeActive__3mO_D",
	"challengeFailedButton": "ChallengeBox_challengeFailedButton__u8aFS",
	"challengeSucceededButton": "ChallengeBox_challengeSucceededButton__18bu2"
};


/***/ }),

/***/ "./src/styles/components/CompletedChallenges.module.css":
/*!**************************************************************!*\
  !*** ./src/styles/components/CompletedChallenges.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"completedChallengesContainer": "CompletedChallenges_completedChallengesContainer__T9k4b"
};


/***/ }),

/***/ "./src/styles/components/Countdown.module.css":
/*!****************************************************!*\
  !*** ./src/styles/components/Countdown.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"countdownContainer": "Countdown_countdownContainer__3pqLs",
	"countdownButton": "Countdown_countdownButton__2cSHU",
	"stopCountdownButton": "Countdown_stopCountdownButton__3Ivtc"
};


/***/ }),

/***/ "./src/styles/components/ExperienceBar.module.css":
/*!********************************************************!*\
  !*** ./src/styles/components/ExperienceBar.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experienceBar": "ExperienceBar_experienceBar__2JbAX",
	"currentExperience": "ExperienceBar_currentExperience__2XATR"
};


/***/ }),

/***/ "./src/styles/components/Profile.module.css":
/*!**************************************************!*\
  !*** ./src/styles/components/Profile.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profileContainer": "Profile_profileContainer__3iYlY"
};


/***/ }),

/***/ "./src/styles/pages/Home.module.css":
/*!******************************************!*\
  !*** ./src/styles/pages/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__HbJEc"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGFuZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0NvdW50RG93bkNvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZW5nZUJveC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL1Byb2ZpbGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNoYWxsZW5nZUJveCIsImRhdGEiLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJmdW5jdGlvbnMiLCJhY3RpdmVDaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZSIsImNoYWxsZW5nQ29tcGxldCIsInJlc2V0Q291bnRkb3duIiwiQ291bnREb3duQ29udGV4dCIsImhhbmRDaGFsbGVuZ1N1Y2NlZGVkIiwiaGFuZENoYWxsZW5nRmFpbGVkIiwic3R5bGVzIiwiY2hhbGxlbmdlQm94Q29udGFpbmVyIiwiY2hhbGxlbmdlQWN0aXZlIiwiYW1vdW50IiwidHlwZSIsImRlc2NyaXB0aW9uIiwiY2hhbGxlbmdlRmFpbGVkQnV0dG9uIiwiY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9uIiwiY2hhbGxlbmdlTm90QWN0aXZlIiwiQ29tcGxldGVkQ2hhbGxhbmdlcyIsImNvbXBsZXRlZENoYWxsZW5nZXMiLCJjb21wbGV0ZWRDaGFsbGVuZ2VzQ29udGFpbmVyIiwiY291bnRkb3duVGltZW91dCIsIkNvdW50ZG93biIsIm1pbnV0ZSIsInNlY29uZCIsImhhc0ZpbmlzaGVkIiwiaXNBY3RpdmUiLCJzdGFydENvdW50ZG93biIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJjb3VudGRvd25Db250YWluZXIiLCJjb3VudGRvd25CdXR0b24iLCJzdG9wQ291bnRkb3duQnV0dG9uIiwiRXhwZXJpZW5jZUJhciIsImV4cGVyaWVuY2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJwZXJjZW50VG9MZXZlbFVwIiwiTWF0aCIsInJvdW5kIiwiZXhwZXJpZW5jZUJhciIsIndpZHRoIiwiY3VycmVudEV4cGVyaWVuY2UiLCJsZWZ0IiwiUHJvZmlsZSIsImxldmVsIiwicHJvZmlsZUNvbnRhaW5lciIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldExldmVsIiwidXNlU3RhdGUiLCJzZXRFeHBlcmllbmNlIiwic2V0Q29tcGxldGVkQ2hhbGxlbmdlcyIsInNldEFjdGl2ZUNoYWxsZW5nZSIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJuZXdDaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImZpbmFsRXhwZXJpZW5jZSIsIkNvdW50RG93blByb3ZpZGVyIiwidGltZXIiLCJzZXRUaW1lciIsInNldElzQWN0aXZlIiwic2V0SGFzRmluaXNoZWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiSG9tZSIsImNvbnRhaW5lciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxz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Q0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZW5nZUJveC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IENvdW50ZG93biB9IGZyb20gXCIuL0NvdW50ZG93blwiO1xyXG5pbXBvcnQgeyBDb3VudERvd25Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NvdW50RG93bkNvbnRleHRcIjtcclxuaW1wb3J0IHsgQ29tcGxldGVkQ2hhbGxhbmdlcyB9IGZyb20gXCIuL0NvbXBsZXRlZENoYWxsYW5nZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VCb3goKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuICBjb25zdCB7IGZ1bmN0aW9ucyB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHsgYWN0aXZlQ2hhbGxlbmdlIH0gPSBkYXRhO1xyXG4gIGNvbnN0IHsgcmVzZXRDaGFsbGVuZ2UgIH0gPSBmdW5jdGlvbnM7XHJcbiAgY29uc3QgeyBjaGFsbGVuZ0NvbXBsZXQgfSA9IGZ1bmN0aW9ucztcclxuXHJcbiAgY29uc3Qge3Jlc2V0Q291bnRkb3duICAgfSA9IHVzZUNvbnRleHQoQ291bnREb3duQ29udGV4dCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRDaGFsbGVuZ1N1Y2NlZGVkKCl7XHJcbiAgICAgICBjaGFsbGVuZ0NvbXBsZXQoKTtcclxuICAgICAgIHJlc2V0Q291bnRkb3duICgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZENoYWxsZW5nRmFpbGVkKCl7XHJcbiAgICAgIHJlc2V0Q2hhbGxlbmdlKCk7XHJcbiAgICAgIHJlc2V0Q291bnRkb3duICgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlQm94Q29udGFpbmVyfT5cclxuICAgICAge2FjdGl2ZUNoYWxsZW5nZSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUFjdGl2ZX0+XHJcbiAgICAgICAgICA8aGVhZGVyPkdhbmhlIHthY3RpdmVDaGFsbGVuZ2UuYW1vdW50fSB4cDwvaGVhZGVyPlxyXG4gICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPHN0cm9uZz5Ob3ZvIGRlc2FmaW88L3N0cm9uZz5cclxuICAgICAgICAgICAgPHA+e2FjdGl2ZUNoYWxsZW5nZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUZhaWxlZEJ1dHRvbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kQ2hhbGxlbmdGYWlsZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBGYWxoZWlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b259ICBcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZENoYWxsZW5nU3VjY2VkZWR9IFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ29tcGxldGVpXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VOb3RBY3RpdmV9PlxyXG4gICAgICAgICAgPHN0cm9uZz5JbmljaWUgdW0gY2ljbG8gcGFyYSByZWNlYmVyIHVtIGRlc2FmaW88L3N0cm9uZz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xldmVsLXVwLnN2Z1wiIGFsdD1cIkxldmVsIHVwXCIgLz5cclxuICAgICAgICAgICAgQXZhbmNlIGRlIG7DrXZlbCBjb21wbGV0YW5kbyBkZXNhZmlvc1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXMubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbXBsZXRlZENoYWxsYW5nZXMoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuICBjb25zdCB7IGNvbXBsZXRlZENoYWxsZW5nZXMgfSA9IGRhdGE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGxldGVkQ2hhbGxlbmdlc0NvbnRhaW5lcn0+XHJcbiAgICAgIDxzcGFuPkRlc2FmaW9zIENvbXBsZXRvczwvc3Bhbj5cclxuICAgICAgPHNwYW4+e2NvbXBsZXRlZENoYWxsZW5nZXN9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IENvdW50RG93bkNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQ291bnREb3duQ29udGV4dFwiO1xyXG5cclxubGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpIHtcclxuICBjb25zdCB7XHJcbiAgICAgbWludXRlXHJcbiAgICAsc2Vjb25kXHJcbiAgICAsaGFzRmluaXNoZWRcclxuICAgICxpc0FjdGl2ZVxyXG4gICAgLHN0YXJ0Q291bnRkb3duXHJcbiAgICAscmVzZXRDb3VudGRvd25cclxuICB9ICA9IHVzZUNvbnRleHQoQ291bnREb3duQ29udGV4dClcclxuXHJcbiAgY29uc3QgW21pbnV0ZUxlZnQsIG1pbnV0ZVJpZ2h0XSA9IFN0cmluZyhtaW51dGUpLnBhZFN0YXJ0KDIsIFwiMFwiKS5zcGxpdChcIlwiKTtcclxuICBjb25zdCBbc2Vjb25kTGVmdCwgc2Vjb25kUmlnaHRdID0gU3RyaW5nKHNlY29uZCkucGFkU3RhcnQoMiwgXCIwXCIpLnNwbGl0KFwiXCIpO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3Bhbj46PC9zcGFuPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57c2Vjb25kUmlnaHR9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2hhc0ZpbmlzaGVkID8gKFxyXG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0+XHJcbiAgICAgICAgICBDaWNsbyBlbmNlcnJhZG9cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2lzQWN0aXZlID8gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17cmVzZXRDb3VudGRvd259XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bnRkb3duQnV0dG9ufSArICR7c3R5bGVzLnN0b3BDb3VudGRvd25CdXR0b259YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFiYW5kb25hciBjaWNsb1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydENvdW50ZG93bn1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBJbmljaWFyIGNpY2xvXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFeHBlcmllbmNlQmFyKCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgY29uc3QgeyBleHBlcmllbmNlLCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgfSA9IGRhdGE7XHJcblxyXG4gIGNvbnN0IHBlcmNlbnRUb0xldmVsVXAgPSBNYXRoLnJvdW5kKFxyXG4gICAgKDEwMCAqIGV4cGVyaWVuY2UpIC8gZXhwZXJpZW5jZVRvTmV4dExldmVsXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuZXhwZXJpZW5jZUJhcn0+XHJcbiAgICAgIDxzcGFuPjAgeHA8L3NwYW4+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGAke3BlcmNlbnRUb0xldmVsVXB9JWAgfX0+PC9kaXY+XHJcblxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXhwZXJpZW5jZX1cclxuICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IGAke3BlcmNlbnRUb0xldmVsVXB9JWAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZXhwZXJpZW5jZX0geHBcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHNwYW4+e2V4cGVyaWVuY2VUb05leHRMZXZlbH0geHA8L3NwYW4+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvUHJvZmlsZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGxldmVsfSA9IGRhdGE7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3Byb2ZpbGUuanBnXCIgYWx0PVwiQXZhdGFyXCIvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5DYWlvIFNpbHZlaXJhIFRlbGxlczwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvbGV2ZWwuc3ZnXCIgYWx0PVwiTGV2ZWwgSWNvblwiLz5cclxuICAgICAgICAgICAgICAgICBMZXZlbCB7bGV2ZWx9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uLy4uL2NoYWxsZW5nZXMuanNvblwiO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICBkYXRhOiB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgZXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgICBjb21wbGV0ZWRDaGFsbGVuZ2VzOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IHtcclxuICAgICAgdHlwZTogXCJib2R5XCIgfCBcImV5ZVwiO1xyXG4gICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIH07XHJcbiAgfTtcclxuICBmdW5jdGlvbnM6IHtcclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgY2hhbGxlbmdDb21wbGV0OiAoKSA9PiB2b2lkO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xyXG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2V4cGVyaWVuY2UsIHNldEV4cGVyaWVuY2VdID0gdXNlU3RhdGUoMTApO1xyXG4gIGNvbnN0IFtjb21wbGV0ZWRDaGFsbGVuZ2VzLCBzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcclxuXHJcbiAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICB9LCBbXSkgXHJcblxyXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XHJcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XHJcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IG5ld0NoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG4gICAgXHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobmV3Q2hhbGxlbmdlKTtcclxuXHJcbiAgICBuZXcgQXVkaW8gKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKVxyXG5cclxuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKXtcclxuICAgICAgbmV3IE5vdGlmaWNhdGlvbiAoJ05vdm8gRGVzYWZpbycgLCB7XHJcbiAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlcy5hbW91bnR9IHhwISBgXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYWxsZW5nQ29tcGxldCgpe1xyXG4gICAgICBpZiAoIWFjdGl2ZUNoYWxsZW5nZSl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7YW1vdW50fSA9IGFjdGl2ZUNoYWxsZW5nZVxyXG5cclxuICAgICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGV4cGVyaWVuY2UgKyBhbW91bnQgO1xyXG5cclxuICAgICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpe1xyXG4gICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsIDtcclxuICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgfSBcclxuXHJcbiAgICAgIHNldEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgICBzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzKGNvbXBsZXRlZENoYWxsZW5nZXMgKyAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgIGV4cGVyaWVuY2UsXHJcbiAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXHJcbiAgICAgICAgICBjb21wbGV0ZWRDaGFsbGVuZ2VzLFxyXG4gICAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb25zOiB7XHJcbiAgICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXHJcbiAgICAgICAgICByZXNldENoYWxsZW5nZSxcclxuICAgICAgICAgIGNoYWxsZW5nQ29tcGxldCxcclxuICAgICAgICB9LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4vQ2hhbGxlbmdlc0NvbnRleHRcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgQ291bnREb3duQ29udGV4dFByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgfVxyXG5cclxuaW50ZXJmYWNlIENvdW50RG93bkNvbnRleHREYXRhe1xyXG5cclxuICAgIG1pbnV0ZSAgICAgIDogbnVtYmVyICAgO1xyXG4gICAgc2Vjb25kICAgICAgOiBudW1iZXIgICA7XHJcbiAgICBoYXNGaW5pc2hlZCA6IGJvb2xlYW4gIDtcclxuICAgIGlzQWN0aXZlICAgIDogYm9vbGVhbiAgO1xyXG4gICAgc3RhcnRDb3VudGRvd246ICgpID0+IHZvaWQ7XHJcbiAgICByZXNldENvdW50ZG93bjogKCkgPT4gdm9pZDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudERvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3VudERvd25Db250ZXh0RGF0YSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudERvd25Qcm92aWRlcih7Y2hpbGRyZW59OiBDb3VudERvd25Db250ZXh0UHJvcHMpIHtcclxuXHJcbiAgICBsZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG4gICAgY29uc3QgeyBmdW5jdGlvbnMgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG4gICAgY29uc3QgeyBzdGFydE5ld0NoYWxsZW5nZSB9ID0gZnVuY3Rpb25zO1xyXG4gIFxyXG4gICAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgwLjEgKiA2MCk7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gICAgY29uc3QgbWludXRlID0gTWF0aC5mbG9vcih0aW1lciAvIDYwKTtcclxuICAgIGNvbnN0IHNlY29uZCA9IHRpbWVyICUgNjA7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHNldEhhc0ZpbmlzaGVkKGZhbHNlKTtcclxuICAgICAgICBzZXRUaW1lcigwLjEgKiA2MCk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lciA+IDApIHtcclxuICAgICAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZXIodGltZXIgLSAxKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZXIgPT09IDApIHtcclxuICAgICAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xyXG4gICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtpc0FjdGl2ZSwgdGltZXJdKTtcclxuICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcblxyXG4gICAgICAgIDxDb3VudERvd25Db250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgbWludXRlLFxyXG4gICAgICAgICAgICBzZWNvbmQsXHJcbiAgICAgICAgICAgIGhhc0ZpbmlzaGVkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZSxcclxuICAgICAgICAgICAgc3RhcnRDb3VudGRvd24sXHJcbiAgICAgICAgICAgIHJlc2V0Q291bnRkb3duLFxyXG5cclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ291bnREb3duQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufSIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmltcG9ydCB7IEV4cGVyaWVuY2VCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FeHBlcmllbmNlQmFyXCI7XHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlXCI7XHJcbmltcG9ydCB7IENvdW50ZG93biB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZG93blwiO1xyXG5pbXBvcnQgeyBDb21wbGV0ZWRDaGFsbGFuZ2VzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tcGxldGVkQ2hhbGxhbmdlc1wiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFsbGVuZ2VCb3hcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgQ291bnREb3duUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQ291bnREb3duQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QnVsZGluZyB8IG1vdmUuaXQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxFeHBlcmllbmNlQmFyIC8+XHJcblxyXG4gICAgICA8Q291bnREb3duUHJvdmlkZXI+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICAgICAgPENvbXBsZXRlZENoYWxsYW5nZXMgLz5cclxuICAgICAgICAgIDxDb3VudGRvd24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENoYWxsZW5nZUJveCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItaWNvbnNcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NhaW9TaWx2ZWlyYVRlbGxlc1wiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWJcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic29jaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3NpbHZlaXJhX3RlbGxlc1wiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2NhaW8tc2lsdmVpcmEtdGVsbGVzLTk3NTAzMDFhMy9cIlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4taW5cIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic29jaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2NhaW9zaWx2ZWlyYV9fXy8/aGw9cHQtYnJcIlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9Db3VudERvd25Qcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2hhbGxlbmdlQm94Q29udGFpbmVyXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZUJveENvbnRhaW5lcl9fNTNBa0ZcIixcblx0XCJjaGFsbGVuZ2VOb3RBY3RpdmVcIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlTm90QWN0aXZlX18zNWl4S1wiLFxuXHRcImNoYWxsZW5nZUFjdGl2ZVwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VBY3RpdmVfXzNtT19EXCIsXG5cdFwiY2hhbGxlbmdlRmFpbGVkQnV0dG9uXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZUZhaWxlZEJ1dHRvbl9fdThhRlNcIixcblx0XCJjaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b25cIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9uX18xOGJ1MlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29tcGxldGVkQ2hhbGxlbmdlc0NvbnRhaW5lclwiOiBcIkNvbXBsZXRlZENoYWxsZW5nZXNfY29tcGxldGVkQ2hhbGxlbmdlc0NvbnRhaW5lcl9fVDlrNGJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvdW50ZG93bkNvbnRhaW5lclwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzXCIsXG5cdFwiY291bnRkb3duQnV0dG9uXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9fMmNTSFVcIixcblx0XCJzdG9wQ291bnRkb3duQnV0dG9uXCI6IFwiQ291bnRkb3duX3N0b3BDb3VudGRvd25CdXR0b25fXzNJdnRjXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJleHBlcmllbmNlQmFyXCI6IFwiRXhwZXJpZW5jZUJhcl9leHBlcmllbmNlQmFyX18ySmJBWFwiLFxuXHRcImN1cnJlbnRFeHBlcmllbmNlXCI6IFwiRXhwZXJpZW5jZUJhcl9jdXJyZW50RXhwZXJpZW5jZV9fMlhBVFJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2ZpbGVDb250YWluZXJcIjogXCJQcm9maWxlX3Byb2ZpbGVDb250YWluZXJfXzNpWWxZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fSGJKRWNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==