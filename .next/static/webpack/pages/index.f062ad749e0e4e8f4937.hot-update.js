webpackHotUpdate_N_E("pages/index",{

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
    setHasFinished(false);
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
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50RG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNvdW50RG93bkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ291bnREb3duUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNvdW50ZG93blRpbWVvdXQiLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJmdW5jdGlvbnMiLCJzdGFydE5ld0NoYWxsZW5nZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlIiwiTWF0aCIsImZsb29yIiwic2Vjb25kIiwic3RhcnRDb3VudGRvd24iLCJyZXNldENvdW50ZG93biIsImNsZWFyVGltZW91dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWtCTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF0QztBQUVBLFNBQVNDLGlCQUFULE9BQThEO0FBQUE7O0FBQUEsTUFBbENDLFFBQWtDLFFBQWxDQSxRQUFrQztBQUVqRSxNQUFJQyxnQkFBSjs7QUFGaUUsb0JBSTNDQyx3REFBVSxDQUFDQyxvRUFBRCxDQUppQztBQUFBLE1BSXpEQyxTQUp5RCxlQUl6REEsU0FKeUQ7O0FBQUEsTUFLekRDLGlCQUx5RCxHQUtuQ0QsU0FMbUMsQ0FLekRDLGlCQUx5RDs7QUFBQSxrQkFPdkNDLHNEQUFRLENBQUMsTUFBTSxFQUFQLENBUCtCO0FBQUEsTUFPMURDLEtBUDBEO0FBQUEsTUFPbkRDLFFBUG1EOztBQUFBLG1CQVFqQ0Ysc0RBQVEsQ0FBQyxLQUFELENBUnlCO0FBQUEsTUFRMURHLFFBUjBEO0FBQUEsTUFRaERDLFdBUmdEOztBQUFBLG1CQVMzQkosc0RBQVEsQ0FBQyxLQUFELENBVG1CO0FBQUEsTUFTMURLLFdBVDBEO0FBQUEsTUFTN0NDLGNBVDZDOztBQVdqRSxNQUFNQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixLQUFLLEdBQUcsRUFBbkIsQ0FBZjtBQUNBLE1BQU1TLE1BQU0sR0FBR1QsS0FBSyxHQUFHLEVBQXZCOztBQUVBLFdBQVNVLGNBQVQsR0FBMEI7QUFDdEJQLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRDs7QUFFRCxXQUFTUSxjQUFULEdBQTBCO0FBQ3hCQyxnQkFBWSxDQUFDbEIsZ0JBQUQsQ0FBWjtBQUNBUyxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FFLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0FKLFlBQVEsQ0FBQyxNQUFNLEVBQVAsQ0FBUjtBQUNEOztBQUVEWSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJWCxRQUFRLElBQUlGLEtBQUssR0FBRyxDQUF4QixFQUEyQjtBQUN6Qk4sc0JBQWdCLEdBQUdvQixVQUFVLENBQUMsWUFBTTtBQUNsQ2IsZ0JBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNELE9BRjRCLEVBRTFCLElBRjBCLENBQTdCO0FBR0QsS0FKRCxNQUlPLElBQUlFLFFBQVEsSUFBSUYsS0FBSyxLQUFLLENBQTFCLEVBQTZCO0FBQ2xDSyxvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBRixpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBTCx1QkFBaUI7QUFDbEI7QUFDRixHQVZRLEVBVU4sQ0FBQ0ksUUFBRCxFQUFXRixLQUFYLENBVk0sQ0FBVDtBQWNGLHNCQUVJLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQ0EsU0FBSyxFQUFFO0FBQ0hNLFlBQU0sRUFBTkEsTUFERztBQUVIRyxZQUFNLEVBQU5BLE1BRkc7QUFHSEwsaUJBQVcsRUFBWEEsV0FIRztBQUlIRixjQUFRLEVBQVJBLFFBSkc7QUFLSFEsb0JBQWMsRUFBZEEsY0FMRztBQU1IQyxvQkFBYyxFQUFkQTtBQU5HLEtBRFA7QUFBQSxjQVVLbEI7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFlSDs7R0F0RGVELGlCOztLQUFBQSxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMDYyYWQ3NDllMGU0ZThmNDkzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4vQ2hhbGxlbmdlc0NvbnRleHRcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgQ291bnREb3duQ29udGV4dFByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgfVxyXG5cclxuaW50ZXJmYWNlIENvdW50RG93bkNvbnRleHREYXRhe1xyXG5cclxuICAgIG1pbnV0ZSAgICAgIDogbnVtYmVyICAgO1xyXG4gICAgc2Vjb25kICAgICAgOiBudW1iZXIgICA7XHJcbiAgICBoYXNGaW5pc2hlZCA6IGJvb2xlYW4gIDtcclxuICAgIGlzQWN0aXZlICAgIDogYm9vbGVhbiAgO1xyXG4gICAgc3RhcnRDb3VudGRvd246ICgpID0+IHZvaWQ7XHJcbiAgICByZXNldENvdW50ZG93bjogKCkgPT4gdm9pZDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudERvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3VudERvd25Db250ZXh0RGF0YSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudERvd25Qcm92aWRlcih7Y2hpbGRyZW59OiBDb3VudERvd25Db250ZXh0UHJvcHMpIHtcclxuXHJcbiAgICBsZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG4gICAgY29uc3QgeyBmdW5jdGlvbnMgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG4gICAgY29uc3QgeyBzdGFydE5ld0NoYWxsZW5nZSB9ID0gZnVuY3Rpb25zO1xyXG4gIFxyXG4gICAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgwLjEgKiA2MCk7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gICAgY29uc3QgbWludXRlID0gTWF0aC5mbG9vcih0aW1lciAvIDYwKTtcclxuICAgIGNvbnN0IHNlY29uZCA9IHRpbWVyICUgNjA7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHNldEhhc0ZpbmlzaGVkKGZhbHNlKTtcclxuICAgICAgICBzZXRUaW1lcigwLjEgKiA2MCk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lciA+IDApIHtcclxuICAgICAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZXIodGltZXIgLSAxKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZXIgPT09IDApIHtcclxuICAgICAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xyXG4gICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtpc0FjdGl2ZSwgdGltZXJdKTtcclxuICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcblxyXG4gICAgICAgIDxDb3VudERvd25Db250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgbWludXRlLFxyXG4gICAgICAgICAgICBzZWNvbmQsXHJcbiAgICAgICAgICAgIGhhc0ZpbmlzaGVkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZSxcclxuICAgICAgICAgICAgc3RhcnRDb3VudGRvd24sXHJcbiAgICAgICAgICAgIHJlc2V0Q291bnRkb3duLFxyXG5cclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ291bnREb3duQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=