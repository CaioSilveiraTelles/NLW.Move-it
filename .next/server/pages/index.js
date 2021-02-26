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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ "./src/styles/components/ChallengeBox.module.css");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\caio.telles\\move.it\\src\\components\\ChallengeBox.tsx";





const ChallengeBox = () => {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    resetCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__["CountdownContext"]);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainer,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: ["Ganhe ", activeChallenge.amount, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `icons/${activeChallenge.type}.svg`,
          alt: "Body"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Nove Desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeFailedButton,
          onClick: handleChallengeFailed,
          children: "Falhei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeSucceededButton,
          onClick: handleChallengeSucceeded,
          children: "Completei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeNotActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Finalize um ciclo para receber um desafio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `icons/level-up.svg`,
          alt: "Level Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, undefined), "Avance um level completando desafios"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ChallengeBox);

/***/ }),

/***/ "./src/components/CompletedChallenges.tsx":
/*!************************************************!*\
  !*** ./src/components/CompletedChallenges.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CompletedChallenges.module.css */ "./src/styles/components/CompletedChallenges.module.css");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\caio.telles\\move.it\\src\\components\\CompletedChallenges.tsx";




const CompletedChallenges = () => {
  const {
    challengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.completedChallengesContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "Desafios completos:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: challengesCompleted
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CompletedChallenges);

/***/ }),

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\caio.telles\\move.it\\src\\components\\Countdown.tsx";




const Countdown = () => {
  const {
    hasFinished,
    minutes,
    seconds,
    isActive,
    resetCountdown,
    startCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__["CountdownContext"]);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,
      children: "Ciclo Encerado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: resetCountdown,
        className: `${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton} ${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButtonActive}`,
        children: "Abandonar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: startCountdown,
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,
        children: "Iniciar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, undefined)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ }),

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_ExperiencesBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ExperiencesBar.module.css */ "./src/styles/components/ExperiencesBar.module.css");
/* harmony import */ var _styles_components_ExperiencesBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperiencesBar_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\caio.telles\\move.it\\src\\components\\ExperienceBar.tsx";




const ExperienceBar = () => {
  const {
    currentExperience,
    experienceToNextLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const porcentToNextLevel = Math.round(currentExperience * 100 / experienceToNextLevel);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _styles_components_ExperiencesBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.experienceBar,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "0 xp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: `${porcentToNextLevel}%`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _styles_components_ExperiencesBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.currentExperience,
        style: {
          left: `${porcentToNextLevel}%`
        },
        children: [currentExperience, "xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [experienceToNextLevel, " xp"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ExperienceBar);

/***/ }),

/***/ "./src/components/LevelUpModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/LevelUpModal.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/LevelUpModal.module.css */ "./src/styles/components/LevelUpModal.module.css");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\caio.telles\\move.it\\src\\components\\LevelUpModal.tsx";




const LevelUpModal = () => {
  const {
    level,
    closeLevelUpModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overlay,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: level
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Parab\xE9ns"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA alcan\xE7ou um novo level."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: closeLevelUpModal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/close.svg",
          alt: "Close Modal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LevelUpModal);

/***/ }),

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Profile.module.css */ "./src/styles/components/Profile.module.css");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\caio.telles\\move.it\\src\\components\\Profile.tsx";




const Profile = () => {
  const {
    level
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.profileContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/profile.jpg",
      alt: "Avatar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Caio Silveira Telles"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/level.svg",
          alt: "Level Icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, undefined), "Level ", level]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

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
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);

var _jsxFileName = "C:\\Users\\caio.telles\\move.it\\src\\contexts\\ChallengesContext.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  var _rest$level, _rest$currentExperien, _rest$challengesCompl;

  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  const {
    0: level,
    1: setLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1);
  const {
    0: currentExperience,
    1: setCurrentExperience
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0);
  const {
    0: challengesCompleted,
    1: setChallengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0);
  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: isLevelUpModalOpen,
    1: setIsLevelUpModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Notification.requestPermission();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);
    const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('🎉 Novo Desafio', {
        body: `Valendo ${challenge.amount}.`
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) return;
    const {
      amount
    } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      experienceToNextLevel,
      levelUp,
      startNewChallenge,
      resetChallenge,
      completeChallenge,
      closeLevelUpModal
    },
    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 30
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");

var _jsxFileName = "C:\\Users\\caio.telles\\move.it\\src\\contexts\\CountdownContext.tsx";


const CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
let countdownTimeout;
function CountdownProvider({
  children
}) {
  const {
    startNewChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    0: time,
    1: setTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.1 * 30);
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: hasFinished,
    1: setHasFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.1 * 30);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CompletedChallenges */ "./src/components/CompletedChallenges.tsx");
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Countdown */ "./src/components/Countdown.tsx");
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ChallengeBox */ "./src/components/ChallengeBox.tsx");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");

var _jsxFileName = "C:\\Users\\caio.telles\\move.it\\src\\pages\\index.tsx";

/* eslint-disable react/prop-types */










const Home = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_9__["ChallengesProvider"], {
    level: props.level,
    currentExperience: props.currentExperience,
    challengesCompleted: props.challengesCompleted,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Build | Move.it"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_8__["CountdownProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Countdown__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

const getServerSideProps = async context => {
  const {
    level,
    currentExperience,
    challengesCompleted
  } = context.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

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
	"countdownButtonActive": "Countdown_countdownButtonActive__37GOc"
};


/***/ }),

/***/ "./src/styles/components/ExperiencesBar.module.css":
/*!*********************************************************!*\
  !*** ./src/styles/components/ExperiencesBar.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experienceBar": "ExperiencesBar_experienceBar__1_55z",
	"currentExperience": "ExperiencesBar_currentExperience__2s5k0"
};


/***/ }),

/***/ "./src/styles/components/LevelUpModal.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/LevelUpModal.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"overlay": "LevelUpModal_overlay__1huQl",
	"container": "LevelUpModal_container__1dM18"
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

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xldmVsVXBNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvQ291bnRkb3duQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0V4cGVyaWVuY2VzQmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0xldmVsVXBNb2RhbC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Qcm9maWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VCb3giLCJhY3RpdmVDaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwidXNlQ29udGV4dCIsIkNoYWxsZW5nZXNDb250ZXh0IiwicmVzZXRDb3VudGRvd24iLCJDb3VudGRvd25Db250ZXh0IiwiaGFuZGxlQ2hhbGxlbmdlU3VjY2VlZGVkIiwiaGFuZGxlQ2hhbGxlbmdlRmFpbGVkIiwic3R5bGVzIiwiY2hhbGxlbmdlQm94Q29udGFpbmVyIiwiY2hhbGxlbmdlQWN0aXZlIiwiYW1vdW50IiwidHlwZSIsImRlc2NyaXB0aW9uIiwiY2hhbGxlbmdlRmFpbGVkQnV0dG9uIiwiY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9uIiwiY2hhbGxlbmdlTm90QWN0aXZlIiwiQ29tcGxldGVkQ2hhbGxlbmdlcyIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJjb21wbGV0ZWRDaGFsbGVuZ2VzQ29udGFpbmVyIiwiQ291bnRkb3duIiwiaGFzRmluaXNoZWQiLCJtaW51dGVzIiwic2Vjb25kcyIsImlzQWN0aXZlIiwic3RhcnRDb3VudGRvd24iLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0Iiwic2Vjb25kTGVmdCIsInNlY29uZFJpZ2h0IiwiY291bnRkb3duQ29udGFpbmVyIiwiY291bnRkb3duQnV0dG9uIiwiY291bnRkb3duQnV0dG9uQWN0aXZlIiwiRXhwZXJpZW5jZUJhciIsImN1cnJlbnRFeHBlcmllbmNlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwicG9yY2VudFRvTmV4dExldmVsIiwiTWF0aCIsInJvdW5kIiwiZXhwZXJpZW5jZUJhciIsIndpZHRoIiwibGVmdCIsIkxldmVsVXBNb2RhbCIsImxldmVsIiwiY2xvc2VMZXZlbFVwTW9kYWwiLCJvdmVybGF5IiwiY29udGFpbmVyIiwiUHJvZmlsZSIsInByb2ZpbGVDb250YWluZXIiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZXN0Iiwic2V0TGV2ZWwiLCJ1c2VTdGF0ZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImlzTGV2ZWxVcE1vZGFsT3BlbiIsInNldElzTGV2ZWxVcE1vZGFsT3BlbiIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiQ29va2llcyIsInNldCIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsImJvZHkiLCJmaW5hbEV4cGVyaWVuY2UiLCJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duUHJvdmlkZXIiLCJ0aW1lIiwic2V0VGltZSIsInNldElzQWN0aXZlIiwic2V0SGFzRmluaXNoZWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiSG9tZSIsInByb3BzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcSIsImNvb2tpZXMiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnXHJcbmltcG9ydCB7IENvdW50ZG93bkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZW5nZUJveC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQ2hhbGxlbmdlQm94OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IGFjdGl2ZUNoYWxsZW5nZSwgcmVzZXRDaGFsbGVuZ2UsIGNvbXBsZXRlQ2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KFxyXG4gICAgQ2hhbGxlbmdlc0NvbnRleHRcclxuICApXHJcbiAgY29uc3QgeyByZXNldENvdW50ZG93biB9ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFsbGVuZ2VTdWNjZWVkZWQoKSB7XHJcbiAgICBjb21wbGV0ZUNoYWxsZW5nZSgpXHJcbiAgICByZXNldENvdW50ZG93bigpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFsbGVuZ2VGYWlsZWQoKSB7XHJcbiAgICByZXNldENoYWxsZW5nZSgpXHJcbiAgICByZXNldENvdW50ZG93bigpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VCb3hDb250YWluZXJ9PlxyXG4gICAgICB7YWN0aXZlQ2hhbGxlbmdlID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlQWN0aXZlfT5cclxuICAgICAgICAgIDxoZWFkZXI+R2FuaGUge2FjdGl2ZUNoYWxsZW5nZS5hbW91bnR9IHhwPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0gYWx0PVwiQm9keVwiIC8+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+Tm92ZSBEZXNhZmlvPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDxwPnthY3RpdmVDaGFsbGVuZ2UuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VGYWlsZWRCdXR0b259XHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2hhbGxlbmdlRmFpbGVkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRmFsaGVpXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9ufVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNoYWxsZW5nZVN1Y2NlZWRlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbXBsZXRlaVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlTm90QWN0aXZlfT5cclxuICAgICAgICAgIDxzdHJvbmc+RmluYWxpemUgdW0gY2ljbG8gcGFyYSByZWNlYmVyIHVtIGRlc2FmaW88L3N0cm9uZz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YGljb25zL2xldmVsLXVwLnN2Z2B9IGFsdD1cIkxldmVsIFVwXCIgLz5cclxuICAgICAgICAgICAgQXZhbmNlIHVtIGxldmVsIGNvbXBsZXRhbmRvIGRlc2FmaW9zXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYWxsZW5nZUJveFxyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ29tcGxldGVkQ2hhbGxlbmdlcy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQ29tcGxldGVkQ2hhbGxlbmdlczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjaGFsbGVuZ2VzQ29tcGxldGVkIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wbGV0ZWRDaGFsbGVuZ2VzQ29udGFpbmVyfT5cclxuICAgICAgPHNwYW4+RGVzYWZpb3MgY29tcGxldG9zOjwvc3Bhbj5cclxuICAgICAgPHNwYW4+e2NoYWxsZW5nZXNDb21wbGV0ZWR9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wbGV0ZWRDaGFsbGVuZ2VzXHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ291bnRkb3duQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBDb3VudGRvd246IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGhhc0ZpbmlzaGVkLFxyXG4gICAgbWludXRlcyxcclxuICAgIHNlY29uZHMsXHJcbiAgICBpc0FjdGl2ZSxcclxuICAgIHJlc2V0Q291bnRkb3duLFxyXG4gICAgc3RhcnRDb3VudGRvd25cclxuICB9ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KVxyXG5cclxuICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpXHJcbiAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57bWludXRlTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuPjo8L3NwYW4+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPntzZWNvbmRMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntzZWNvbmRSaWdodH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge2hhc0ZpbmlzaGVkID8gKFxyXG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufT5cclxuICAgICAgICAgIENpY2xvIEVuY2VyYWRvXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtpc0FjdGl2ZSA/IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gJHtzdHlsZXMuY291bnRkb3duQnV0dG9uQWN0aXZlfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBYmFuZG9uYXIgY2ljbG9cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRDb3VudGRvd259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSW5pY2lhciBjaWNsb1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blxyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvRXhwZXJpZW5jZXNCYXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEV4cGVyaWVuY2VCYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY3VycmVudEV4cGVyaWVuY2UsIGV4cGVyaWVuY2VUb05leHRMZXZlbCB9ID0gdXNlQ29udGV4dChcclxuICAgIENoYWxsZW5nZXNDb250ZXh0XHJcbiAgKVxyXG5cclxuICBjb25zdCBwb3JjZW50VG9OZXh0TGV2ZWwgPSBNYXRoLnJvdW5kKFxyXG4gICAgKGN1cnJlbnRFeHBlcmllbmNlICogMTAwKSAvIGV4cGVyaWVuY2VUb05leHRMZXZlbFxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuZXhwZXJpZW5jZUJhcn0+XHJcbiAgICAgIDxzcGFuPjAgeHA8L3NwYW4+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogYCR7cG9yY2VudFRvTmV4dExldmVsfSVgIH19IC8+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFeHBlcmllbmNlfVxyXG4gICAgICAgICAgc3R5bGU9e3sgbGVmdDogYCR7cG9yY2VudFRvTmV4dExldmVsfSVgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2N1cnJlbnRFeHBlcmllbmNlfXhwXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4+e2V4cGVyaWVuY2VUb05leHRMZXZlbH0geHA8L3NwYW4+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2VCYXJcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0xldmVsVXBNb2RhbC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgTGV2ZWxVcE1vZGFsOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IGxldmVsLCBjbG9zZUxldmVsVXBNb2RhbCB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxoZWFkZXI+e2xldmVsfTwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8c3Ryb25nPlBhcmFiw6luczwvc3Ryb25nPlxyXG4gICAgICAgIDxwPlZvY8OqIGFsY2Fuw6dvdSB1bSBub3ZvIGxldmVsLjwvcD5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xvc2VMZXZlbFVwTW9kYWx9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvY2xvc2Uuc3ZnXCIgYWx0PVwiQ2xvc2UgTW9kYWxcIiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGV2ZWxVcE1vZGFsXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvUHJvZmlsZS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUHJvZmlsZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBsZXZlbCB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29udGFpbmVyfSA+XHJcbiAgICA8aW1nIHNyYz1cIi9wcm9maWxlLmpwZ1wiIGFsdD1cIkF2YXRhclwiLz5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHN0cm9uZz5DYWlvIFNpbHZlaXJhIFRlbGxlczwvc3Ryb25nPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9sZXZlbC5zdmdcIiBhbHQ9XCJMZXZlbCBJY29uXCIvPlxyXG4gICAgICAgICBMZXZlbCB7bGV2ZWx9PC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIFxyXG48L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGV2ZWxVcE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbidcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xyXG4gIHR5cGU6IHN0cmluZ1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcclxuICBhbW91bnQ6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICBsZXZlbDogbnVtYmVyXHJcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlclxyXG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlclxyXG4gIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlIHwgbnVsbFxyXG4gIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyXHJcbiAgbGV2ZWxVcDogKCkgPT4gdm9pZFxyXG4gIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkXHJcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWRcclxuICBjb21wbGV0ZUNoYWxsZW5nZTogKCkgPT4gdm9pZFxyXG4gIGNsb3NlTGV2ZWxVcE1vZGFsOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG4gIGxldmVsOiBudW1iZXJcclxuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyXHJcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7XHJcbiAgY2hpbGRyZW4sXHJcbiAgLi4ucmVzdFxyXG59OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShyZXN0LmxldmVsID8/IDEpXHJcbiAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShcclxuICAgIHJlc3QuY3VycmVudEV4cGVyaWVuY2UgPz8gMFxyXG4gIClcclxuICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShcclxuICAgIHJlc3QuY2hhbGxlbmdlc0NvbXBsZXRlZCA/PyAwXHJcbiAgKVxyXG5cclxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGU8Q2hhbGxlbmdlIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbaXNMZXZlbFVwTW9kYWxPcGVuLCBzZXRJc0xldmVsVXBNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMilcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpXHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBTdHJpbmcobGV2ZWwpKVxyXG4gICAgQ29va2llcy5zZXQoJ2N1cnJlbnRFeHBlcmllbmNlJywgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSlcclxuICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZ2VzQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsZW5nZXNDb21wbGV0ZWQpKVxyXG4gIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKVxyXG5cclxuICBmdW5jdGlvbiBsZXZlbFVwKCkge1xyXG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKVxyXG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKHRydWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZUxldmVsVXBNb2RhbCgpIHtcclxuICAgIHNldElzTGV2ZWxVcE1vZGFsT3BlbihmYWxzZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xyXG4gICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aClcclxuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdXHJcblxyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSlcclxuXHJcbiAgICBuZXcgQXVkaW8oJy9ub3RpZmljYXRpb24ubXAzJykucGxheSgpXHJcblxyXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgbmV3IE5vdGlmaWNhdGlvbign8J+OiSBOb3ZvIERlc2FmaW8nLCB7XHJcbiAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fS5gXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XHJcbiAgICBpZiAoIWFjdGl2ZUNoYWxsZW5nZSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZVxyXG5cclxuICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudFxyXG5cclxuICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XHJcbiAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbFxyXG4gICAgICBsZXZlbFVwKClcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpXHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbClcclxuICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCArIDEpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcclxuICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXHJcbiAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXHJcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXHJcbiAgICAgICAgY2xvc2VMZXZlbFVwTW9kYWxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAge2lzTGV2ZWxVcE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxyXG4gICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7XHJcbiAgY3JlYXRlQ29udGV4dCxcclxuICBSZWFjdE5vZGUsXHJcbiAgdXNlQ29udGV4dCxcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlU3RhdGVcclxufSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuL0NoYWxsZW5nZXNDb250ZXh0J1xyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhIHtcclxuICBtaW51dGVzOiBudW1iZXJcclxuICBzZWNvbmRzOiBudW1iZXJcclxuICBoYXNGaW5pc2hlZDogYm9vbGVhblxyXG4gIGlzQWN0aXZlOiBib29sZWFuXHJcbiAgc3RhcnRDb3VudGRvd246ICgpID0+IHZvaWRcclxuICByZXNldENvdW50ZG93bjogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ291bnRkb3duUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRkb3duQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ291bnRkb3duQ29udGV4dERhdGEpXHJcblxyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd25Qcm92aWRlcih7XHJcbiAgY2hpbGRyZW5cclxufTogQ291bnRkb3duUHJvdmlkZXJQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgeyBzdGFydE5ld0NoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dClcclxuXHJcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4xICogMzApXHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApXHJcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MFxyXG5cclxuICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpIHtcclxuICAgIHNldElzQWN0aXZlKHRydWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcclxuICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KVxyXG4gICAgc2V0SXNBY3RpdmUoZmFsc2UpXHJcbiAgICBzZXRIYXNGaW5pc2hlZChmYWxzZSlcclxuICAgIHNldFRpbWUoMC4xICogMzApXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XHJcbiAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lKHRpbWUgLSAxKVxyXG4gICAgICB9LCAxMDAwKVxyXG4gICAgfSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XHJcbiAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpXHJcbiAgICAgIHNldElzQWN0aXZlKGZhbHNlKVxyXG4gICAgICBzdGFydE5ld0NoYWxsZW5nZSgpXHJcbiAgICB9XHJcbiAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgbWludXRlcyxcclxuICAgICAgICBzZWNvbmRzLFxyXG4gICAgICAgIGhhc0ZpbmlzaGVkLFxyXG4gICAgICAgIGlzQWN0aXZlLFxyXG4gICAgICAgIHN0YXJ0Q291bnRkb3duLFxyXG4gICAgICAgIHJlc2V0Q291bnRkb3duXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ291bnRkb3duQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBFeHBlcmllbmNlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhcidcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlJ1xyXG5pbXBvcnQgQ29tcGxldGVkQ2hhbGxlbmdlcyBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXMnXHJcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGRvd24nXHJcbmltcG9ydCBDaGFsbGVuZ2VCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgQ291bnRkb3duUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0J1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCdcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcclxuXHJcbmludGVyZmFjZSBIb21lUHJvcHMge1xyXG4gIGxldmVsOiBudW1iZXJcclxuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyXHJcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFsbGVuZ2VzUHJvdmlkZXJcclxuICAgICAgbGV2ZWw9e3Byb3BzLmxldmVsfVxyXG4gICAgICBjdXJyZW50RXhwZXJpZW5jZT17cHJvcHMuY3VycmVudEV4cGVyaWVuY2V9XHJcbiAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ9e3Byb3BzLmNoYWxsZW5nZXNDb21wbGV0ZWR9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5CdWlsZCB8IE1vdmUuaXQ8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgPEV4cGVyaWVuY2VCYXIgLz5cclxuXHJcbiAgICAgICAgPENvdW50ZG93blByb3ZpZGVyPlxyXG4gICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgICAgICA8Q29tcGxldGVkQ2hhbGxlbmdlcyAvPlxyXG4gICAgICAgICAgICAgIDxDb3VudGRvd24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPENoYWxsZW5nZUJveCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0NvdW50ZG93blByb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2hhbGxlbmdlc1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XHJcbiAgY29uc3QgeyBsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWQgfSA9IGNvbnRleHQucmVxLmNvb2tpZXNcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGxldmVsOiBOdW1iZXIobGV2ZWwpLFxyXG4gICAgICBjdXJyZW50RXhwZXJpZW5jZTogTnVtYmVyKGN1cnJlbnRFeHBlcmllbmNlKSxcclxuICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogTnVtYmVyKGNoYWxsZW5nZXNDb21wbGV0ZWQpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNoYWxsZW5nZUJveENvbnRhaW5lclwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VCb3hDb250YWluZXJfXzUzQWtGXCIsXG5cdFwiY2hhbGxlbmdlTm90QWN0aXZlXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZU5vdEFjdGl2ZV9fMzVpeEtcIixcblx0XCJjaGFsbGVuZ2VBY3RpdmVcIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlQWN0aXZlX18zbU9fRFwiLFxuXHRcImNoYWxsZW5nZUZhaWxlZEJ1dHRvblwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VGYWlsZWRCdXR0b25fX3U4YUZTXCIsXG5cdFwiY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9uXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZVN1Y2NlZWRlZEJ1dHRvbl9fMThidTJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbXBsZXRlZENoYWxsZW5nZXNDb250YWluZXJcIjogXCJDb21wbGV0ZWRDaGFsbGVuZ2VzX2NvbXBsZXRlZENoYWxsZW5nZXNDb250YWluZXJfX1Q5azRiXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb3VudGRvd25Db250YWluZXJcIjogXCJDb3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMc1wiLFxuXHRcImNvdW50ZG93bkJ1dHRvblwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVXCIsXG5cdFwiY291bnRkb3duQnV0dG9uQWN0aXZlXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMzdHT2NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImV4cGVyaWVuY2VCYXJcIjogXCJFeHBlcmllbmNlc0Jhcl9leHBlcmllbmNlQmFyX18xXzU1elwiLFxuXHRcImN1cnJlbnRFeHBlcmllbmNlXCI6IFwiRXhwZXJpZW5jZXNCYXJfY3VycmVudEV4cGVyaWVuY2VfXzJzNWswXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJvdmVybGF5XCI6IFwiTGV2ZWxVcE1vZGFsX292ZXJsYXlfXzFodVFsXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiTGV2ZWxVcE1vZGFsX2NvbnRhaW5lcl9fMWRNMThcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2ZpbGVDb250YWluZXJcIjogXCJQcm9maWxlX3Byb2ZpbGVDb250YWluZXJfXzNpWWxZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fSGJKRWNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=