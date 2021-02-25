webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_caio_telles_move_it_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_caio_telles_move_it_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_CountDownContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/CountDownContext */ "./src/contexts/CountDownContext.tsx");





var _jsxFileName = "C:\\Users\\caio.telles\\move-it\\src\\components\\Countdown.tsx",
    _s = $RefreshSig$();




var countdownTimeout;
function Countdown() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_CountDownContext__WEBPACK_IMPORTED_MODULE_5__["CountDownContext"]);

  Object(C_Users_caio_telles_move_it_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(_useContext);

  var _String$padStart$spli = String(minute).padStart(2, "0").split(""),
      _String$padStart$spli2 = Object(C_Users_caio_telles_move_it_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRight = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(second).padStart(2, "0").split(""),
      _String$padStart$spli4 = Object(C_Users_caio_telles_move_it_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRight = _String$padStart$spli4[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      type: "button",
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: resetCountdown,
        type: "button",
        className: "".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton, " + ").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.stopCountdownButton),
        children: "Abandonar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: startCountdown,
        type: "button",
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
        children: "Iniciar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, this)
    }, void 0, false)]
  }, void 0, true);
}

_s(Countdown, "GEVSeSrD72hjJ3fa3BFTxaVyljk=");

_c = Countdown;

var _c;

$RefreshReg$(_c, "Countdown");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/contexts/CountDownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountDownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountDownContext, CountDownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownContext", function() { return CountDownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownProvider", function() { return CountDownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");


var _jsxFileName = "C:\\Users\\caio.telles\\move-it\\src\\contexts\\CountDownContext.tsx",
    _s = $RefreshSig$();



var CountDownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function CountDownProvider(_ref) {
  _s();

  var children = _ref.children;
  var countdownTimeout;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      functions = _useContext.functions;

  var startNewChallenge = functions.startNewChallenge;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.1 * 60),
      timer = _useState[0],
      setTimer = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFinished = _useState3[1];

  var minute = Math.floor(timer / 60);
  var second = timer % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTimer(0.1 * 60);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isActive && timer > 0) {
      countdownTimeout = setTimeout(function () {
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
      minute: minute,
      second: second,
      hasFinished: hasFinished,
      isActive: isActive,
      startCountdown: startCountdown,
      resetCountdown: resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, this);
}

_s(CountDownProvider, "2+MWsepS2CyijW/A1oDjUJX/nxo=");

_c = CountDownProvider;

var _c;

$RefreshReg$(_c, "CountDownProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50RG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd24iLCJ1c2VDb250ZXh0IiwiQ291bnREb3duQ29udGV4dCIsIlN0cmluZyIsIm1pbnV0ZSIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJzZWNvbmQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJzdHlsZXMiLCJjb3VudGRvd25Db250YWluZXIiLCJoYXNGaW5pc2hlZCIsImNvdW50ZG93bkJ1dHRvbiIsImlzQWN0aXZlIiwicmVzZXRDb3VudGRvd24iLCJzdG9wQ291bnRkb3duQnV0dG9uIiwic3RhcnRDb3VudGRvd24iLCJjcmVhdGVDb250ZXh0IiwiQ291bnREb3duUHJvdmlkZXIiLCJjaGlsZHJlbiIsIkNoYWxsZW5nZXNDb250ZXh0IiwiZnVuY3Rpb25zIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJ1c2VTdGF0ZSIsInRpbWVyIiwic2V0VGltZXIiLCJzZXRJc0FjdGl2ZSIsInNldEhhc0ZpbmlzaGVkIiwiTWF0aCIsImZsb29yIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFJQSxnQkFBSjtBQUVPLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxvQkFDZkMsd0RBQVUsQ0FBQ0MsMkVBQUQsQ0FESzs7QUFBQTs7QUFBQSw4QkFJUUMsTUFBTSxDQUFDQyxNQUFELENBQU4sQ0FBZUMsUUFBZixDQUF3QixDQUF4QixFQUEyQixHQUEzQixFQUFnQ0MsS0FBaEMsQ0FBc0MsRUFBdEMsQ0FKUjtBQUFBO0FBQUEsTUFJbkJD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QUFELENBQVo7QUFDQThCLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUQsWUFBUSxDQUFDLE1BQU0sRUFBUCxDQUFSO0FBQ0Q7O0FBRURNLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlsQixRQUFRLElBQUlXLEtBQUssR0FBRyxDQUF4QixFQUEyQjtBQUN6QjVCLHNCQUFnQixHQUFHb0MsVUFBVSxDQUFDLFlBQU07QUFDbENQLGdCQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDRCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdELEtBSkQsTUFJTyxJQUFJWCxRQUFRLElBQUlXLEtBQUssS0FBSyxDQUExQixFQUE2QjtBQUNsQ0csb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUQsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUosdUJBQWlCO0FBQ2xCO0FBQ0YsR0FWUSxFQVVOLENBQUNULFFBQUQsRUFBV1csS0FBWCxDQVZNLENBQVQ7QUFjRixzQkFFSSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUNBLFNBQUssRUFBRTtBQUNIdkIsWUFBTSxFQUFOQSxNQURHO0FBRUhLLFlBQU0sRUFBTkEsTUFGRztBQUdISyxpQkFBVyxFQUFYQSxXQUhHO0FBSUhFLGNBQVEsRUFBUkEsUUFKRztBQUtIRyxvQkFBYyxFQUFkQSxjQUxHO0FBTUhGLG9CQUFjLEVBQWRBO0FBTkcsS0FEUDtBQUFBLGNBVUtLO0FBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBZUg7O0dBckRlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2Y2N2Y5ZmRhM2ZhYmU4OTNkMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgQ291bnREb3duQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Db3VudERvd25Db250ZXh0XCI7XHJcblxyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duKCkge1xyXG4gIGNvbnN0IHt9ID0gdXNlQ29udGV4dChDb3VudERvd25Db250ZXh0KVxyXG4gIFxyXG5cclxuICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZSkucGFkU3RhcnQoMiwgXCIwXCIpLnNwbGl0KFwiXCIpO1xyXG4gIGNvbnN0IFtzZWNvbmRMZWZ0LCBzZWNvbmRSaWdodF0gPSBTdHJpbmcoc2Vjb25kKS5wYWRTdGFydCgyLCBcIjBcIikuc3BsaXQoXCJcIik7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57bWludXRlTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuPjo8L3NwYW4+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPntzZWNvbmRMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntzZWNvbmRSaWdodH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aGFzRmluaXNoZWQgPyAoXHJcbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufT5cclxuICAgICAgICAgIENpY2xvIGVuY2VycmFkb1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7aXNBY3RpdmUgPyAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtyZXNldENvdW50ZG93bn1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudGRvd25CdXR0b259ICsgJHtzdHlsZXMuc3RvcENvdW50ZG93bkJ1dHRvbn1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWJhbmRvbmFyIGNpY2xvXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEluaWNpYXIgY2ljbG9cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi9DaGFsbGVuZ2VzQ29udGV4dFwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBDb3VudERvd25Db250ZXh0UHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICB9XHJcblxyXG5pbnRlcmZhY2UgQ291bnREb3duQ29udGV4dERhdGF7XHJcblxyXG4gICAgbWludXRlICAgICAgOiBudW1iZXIgICA7XHJcbiAgICBzZWNvbmQgICAgICA6IG51bWJlciAgIDtcclxuICAgIGhhc0ZpbmlzaGVkIDogYm9vbGVhbiAgO1xyXG4gICAgaXNBY3RpdmUgICAgOiBib29sZWFuICA7XHJcbiAgICBzdGFydENvdW50ZG93bjogKCkgPT4gdm9pZDtcclxuICAgIHJlc2V0Q291bnRkb3duOiAoKSA9PiB2b2lkO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50RG93bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvdW50RG93bkNvbnRleHREYXRhKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50RG93blByb3ZpZGVyKHtjaGlsZHJlbn06IENvdW50RG93bkNvbnRleHRQcm9wcykge1xyXG5cclxuICAgIGxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcclxuXHJcbiAgICBjb25zdCB7IGZ1bmN0aW9ucyB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH0gPSBmdW5jdGlvbnM7XHJcbiAgXHJcbiAgICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDAuMSAqIDYwKTtcclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgICBjb25zdCBtaW51dGUgPSBNYXRoLmZsb29yKHRpbWVyIC8gNjApO1xyXG4gICAgY29uc3Qgc2Vjb25kID0gdGltZXIgJSA2MDtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpIHtcclxuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcclxuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgc2V0VGltZXIoMC4xICogNjApO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNBY3RpdmUgJiYgdGltZXIgPiAwKSB7XHJcbiAgICAgICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVyKHRpbWVyIC0gMSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzQWN0aXZlICYmIHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKTtcclxuICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBbaXNBY3RpdmUsIHRpbWVyXSk7XHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICA8Q291bnREb3duQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIG1pbnV0ZSxcclxuICAgICAgICAgICAgc2Vjb25kLFxyXG4gICAgICAgICAgICBoYXNGaW5pc2hlZCxcclxuICAgICAgICAgICAgaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIHN0YXJ0Q291bnRkb3duLFxyXG4gICAgICAgICAgICByZXNldENvdW50ZG93bixcclxuXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvdW50RG93bkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9