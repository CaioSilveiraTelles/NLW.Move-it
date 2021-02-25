webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50RG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNvdW50RG93bkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ291bnREb3duUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNvdW50ZG93blRpbWVvdXQiLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJmdW5jdGlvbnMiLCJzdGFydE5ld0NoYWxsZW5nZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlIiwiTWF0aCIsImZsb29yIiwic2Vjb25kIiwic3RhcnRDb3VudGRvd24iLCJyZXNldENvdW50ZG93biIsImNsZWFyVGltZW91dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWtCTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF0QztBQUVBLFNBQVNDLGlCQUFULE9BQThEO0FBQUE7O0FBQUEsTUFBbENDLFFBQWtDLFFBQWxDQSxRQUFrQztBQUVqRSxNQUFJQyxnQkFBSjs7QUFGaUUsb0JBSTNDQyx3REFBVSxDQUFDQyxvRUFBRCxDQUppQztBQUFBLE1BSXpEQyxTQUp5RCxlQUl6REEsU0FKeUQ7O0FBQUEsTUFLekRDLGlCQUx5RCxHQUtuQ0QsU0FMbUMsQ0FLekRDLGlCQUx5RDs7QUFBQSxrQkFPdkNDLHNEQUFRLENBQUMsTUFBTSxFQUFQLENBUCtCO0FBQUEsTUFPMURDLEtBUDBEO0FBQUEsTUFPbkRDLFFBUG1EOztBQUFBLG1CQVFqQ0Ysc0RBQVEsQ0FBQyxLQUFELENBUnlCO0FBQUEsTUFRMURHLFFBUjBEO0FBQUEsTUFRaERDLFdBUmdEOztBQUFBLG1CQVMzQkosc0RBQVEsQ0FBQyxLQUFELENBVG1CO0FBQUEsTUFTMURLLFdBVDBEO0FBQUEsTUFTN0NDLGNBVDZDOztBQVdqRSxNQUFNQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixLQUFLLEdBQUcsRUFBbkIsQ0FBZjtBQUNBLE1BQU1TLE1BQU0sR0FBR1QsS0FBSyxHQUFHLEVBQXZCOztBQUVBLFdBQVNVLGNBQVQsR0FBMEI7QUFDdEJQLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRDs7QUFFRCxXQUFTUSxjQUFULEdBQTBCO0FBQ3hCQyxnQkFBWSxDQUFDbEIsZ0JBQUQsQ0FBWjtBQUNBUyxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FFLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0FKLFlBQVEsQ0FBQyxNQUFNLEVBQVAsQ0FBUjtBQUNEOztBQUVEWSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJWCxRQUFRLElBQUlGLEtBQUssR0FBRyxDQUF4QixFQUEyQjtBQUN6Qk4sc0JBQWdCLEdBQUdvQixVQUFVLENBQUMsWUFBTTtBQUNsQ2IsZ0JBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNELE9BRjRCLEVBRTFCLElBRjBCLENBQTdCO0FBR0QsS0FKRCxNQUlPLElBQUlFLFFBQVEsSUFBSUYsS0FBSyxLQUFLLENBQTFCLEVBQTZCO0FBQ2xDSyxvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBRixpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBTCx1QkFBaUI7QUFDbEI7QUFDRixHQVZRLEVBVU4sQ0FBQ0ksUUFBRCxFQUFXRixLQUFYLENBVk0sQ0FBVDtBQWNGLHNCQUVJLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQ0EsU0FBSyxFQUFFO0FBQ0hNLFlBQU0sRUFBTkEsTUFERztBQUVIRyxZQUFNLEVBQU5BLE1BRkc7QUFHSEwsaUJBQVcsRUFBWEEsV0FIRztBQUlIRixjQUFRLEVBQVJBLFFBSkc7QUFLSFEsb0JBQWMsRUFBZEEsY0FMRztBQU1IQyxvQkFBYyxFQUFkQTtBQU5HLEtBRFA7QUFBQSxjQVVLbEI7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFlSDs7R0F0RGVELGlCOztLQUFBQSxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmYwNjJhZDc0OWUwZTRlOGY0OTM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi9DaGFsbGVuZ2VzQ29udGV4dFwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBDb3VudERvd25Db250ZXh0UHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICB9XHJcblxyXG5pbnRlcmZhY2UgQ291bnREb3duQ29udGV4dERhdGF7XHJcblxyXG4gICAgbWludXRlICAgICAgOiBudW1iZXIgICA7XHJcbiAgICBzZWNvbmQgICAgICA6IG51bWJlciAgIDtcclxuICAgIGhhc0ZpbmlzaGVkIDogYm9vbGVhbiAgO1xyXG4gICAgaXNBY3RpdmUgICAgOiBib29sZWFuICA7XHJcbiAgICBzdGFydENvdW50ZG93bjogKCkgPT4gdm9pZDtcclxuICAgIHJlc2V0Q291bnRkb3duOiAoKSA9PiB2b2lkO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50RG93bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvdW50RG93bkNvbnRleHREYXRhKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50RG93blByb3ZpZGVyKHtjaGlsZHJlbn06IENvdW50RG93bkNvbnRleHRQcm9wcykge1xyXG5cclxuICAgIGxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcclxuXHJcbiAgICBjb25zdCB7IGZ1bmN0aW9ucyB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH0gPSBmdW5jdGlvbnM7XHJcbiAgXHJcbiAgICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDAuMSAqIDYwKTtcclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgICBjb25zdCBtaW51dGUgPSBNYXRoLmZsb29yKHRpbWVyIC8gNjApO1xyXG4gICAgY29uc3Qgc2Vjb25kID0gdGltZXIgJSA2MDtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpIHtcclxuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcclxuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgc2V0SGFzRmluaXNoZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldFRpbWVyKDAuMSAqIDYwKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlICYmIHRpbWVyID4gMCkge1xyXG4gICAgICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lcih0aW1lciAtIDEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lciA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0SGFzRmluaXNoZWQodHJ1ZSk7XHJcbiAgICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgW2lzQWN0aXZlLCB0aW1lcl0pO1xyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybihcclxuXHJcbiAgICAgICAgPENvdW50RG93bkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICBtaW51dGUsXHJcbiAgICAgICAgICAgIHNlY29uZCxcclxuICAgICAgICAgICAgaGFzRmluaXNoZWQsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlLFxyXG4gICAgICAgICAgICBzdGFydENvdW50ZG93bixcclxuICAgICAgICAgICAgcmVzZXRDb3VudGRvd24sXHJcblxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db3VudERvd25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==