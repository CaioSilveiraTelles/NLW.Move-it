webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);


var _jsxFileName = "C:\\Users\\caio.telles\\move-it\\src\\contexts\\ChallengesContext.tsx",
    _s = $RefreshSig$();



var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10),
      experience = _useState2[0],
      setExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      completedChallenges = _useState3[0],
      setCompletedChallenges = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    var newChallenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];
    setActiveChallenge(newChallenge);

    if (Notification.permission === 'granted') {
      new Notification('Novo Desafio', {
        body: "Valendo ".concat(activeChallenge.amount, " xp! ")
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

    var amount = activeChallenge.amount;
    var finalExperience = experience + amount;

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
        level: level,
        experience: experience,
        experienceToNextLevel: experienceToNextLevel,
        completedChallenges: completedChallenges,
        activeChallenge: activeChallenge
      },
      functions: {
        levelUp: levelUp,
        startNewChallenge: startNewChallenge,
        resetChallenge: resetChallenge,
        challengComplet: challengComplet
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "0LH5CITHy+AWY06ZxBe5CeRew/U=");

_c = ChallengesProvider;

var _c;

$RefreshReg$(_c, "ChallengesProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImV4cGVyaWVuY2UiLCJzZXRFeHBlcmllbmNlIiwiY29tcGxldGVkQ2hhbGxlbmdlcyIsInNldENvbXBsZXRlZENoYWxsZW5nZXMiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsIm5ld0NoYWxsZW5nZSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjaGFsbGVuZ0NvbXBsZXQiLCJmaW5hbEV4cGVyaWVuY2UiLCJkYXRhIiwiZnVuY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBMEJPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0Msa0JBQVQsT0FBbUU7QUFBQTs7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDOztBQUFBLGtCQUM5Q0Msc0RBQVEsQ0FBQyxDQUFELENBRHNDO0FBQUEsTUFDakVDLEtBRGlFO0FBQUEsTUFDMURDLFFBRDBEOztBQUFBLG1CQUVwQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRjRCO0FBQUEsTUFFakVHLFVBRmlFO0FBQUEsTUFFckRDLGFBRnFEOztBQUFBLG1CQUdsQkosc0RBQVEsQ0FBQyxDQUFELENBSFU7QUFBQSxNQUdqRUssbUJBSGlFO0FBQUEsTUFHNUNDLHNCQUg0Qzs7QUFBQSxtQkFJMUJOLHNEQUFRLENBQUMsSUFBRCxDQUprQjtBQUFBLE1BSWpFTyxlQUppRTtBQUFBLE1BSWhEQyxrQkFKZ0Q7O0FBTXhFLE1BQU1DLHFCQUFxQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDVixLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTlCO0FBRUFXLHlEQUFTLENBQUUsWUFBTTtBQUNmQyxnQkFBWSxDQUFDQyxpQkFBYjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0MsT0FBVCxHQUFtQjtBQUNqQmIsWUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0Q7O0FBRUQsV0FBU2UsaUJBQVQsR0FBNkI7QUFDM0IsUUFBTUMsb0JBQW9CLEdBQUdQLElBQUksQ0FBQ1EsS0FBTCxDQUFXUixJQUFJLENBQUNTLE1BQUwsS0FBZ0JDLDZDQUFVLENBQUNDLE1BQXRDLENBQTdCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHRiw2Q0FBVSxDQUFDSCxvQkFBRCxDQUEvQjtBQUNBVCxzQkFBa0IsQ0FBQ2MsWUFBRCxDQUFsQjs7QUFFQSxRQUFJVCxZQUFZLENBQUNVLFVBQWIsS0FBNEIsU0FBaEMsRUFBMEM7QUFDeEMsVUFBSVYsWUFBSixDQUFrQixjQUFsQixFQUFtQztBQUNuQ1csWUFBSSxvQkFBYWpCLGVBQWUsQ0FBQ2tCLE1BQTdCO0FBRCtCLE9BQW5DO0FBR0Q7QUFDRjs7QUFFRCxXQUFTQyxjQUFULEdBQTBCO0FBQ3hCbEIsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNEOztBQUVELFdBQVNtQixlQUFULEdBQTBCO0FBQ3RCLFFBQUksQ0FBQ3BCLGVBQUwsRUFBcUI7QUFDbkI7QUFDRDs7QUFIcUIsUUFLZmtCLE1BTGUsR0FLTGxCLGVBTEssQ0FLZmtCLE1BTGU7QUFPdEIsUUFBSUcsZUFBZSxHQUFHekIsVUFBVSxHQUFHc0IsTUFBbkM7O0FBRUEsUUFBSUcsZUFBZSxJQUFJbkIscUJBQXZCLEVBQTZDO0FBQ3pDbUIscUJBQWUsR0FBR0EsZUFBZSxHQUFHbkIscUJBQXBDO0FBQ0FNLGFBQU87QUFDVjs7QUFFRFgsaUJBQWEsQ0FBQ3dCLGVBQUQsQ0FBYjtBQUNBcEIsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBRiwwQkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDSDs7QUFFRCxzQkFDRSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNFLFNBQUssRUFBRTtBQUNMd0IsVUFBSSxFQUFFO0FBQ0o1QixhQUFLLEVBQUxBLEtBREk7QUFFSkUsa0JBQVUsRUFBVkEsVUFGSTtBQUdKTSw2QkFBcUIsRUFBckJBLHFCQUhJO0FBSUpKLDJCQUFtQixFQUFuQkEsbUJBSkk7QUFLSkUsdUJBQWUsRUFBZkE7QUFMSSxPQUREO0FBUUx1QixlQUFTLEVBQUU7QUFDVGYsZUFBTyxFQUFQQSxPQURTO0FBRVRDLHlCQUFpQixFQUFqQkEsaUJBRlM7QUFHVFUsc0JBQWMsRUFBZEEsY0FIUztBQUlUQyx1QkFBZSxFQUFmQTtBQUpTO0FBUk4sS0FEVDtBQUFBLGNBaUJHNUI7QUFqQkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQXhFZUQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg3NDhlZGU5Mjc3ZGZhZTI0MTRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gXCIuLi8uLi9jaGFsbGVuZ2VzLmpzb25cIjtcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgZGF0YToge1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgY29tcGxldGVkQ2hhbGxlbmdlczogbnVtYmVyO1xyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOiB7XHJcbiAgICAgIHR5cGU6IFwiYm9keVwiIHwgXCJleWVcIjtcclxuICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgZnVuY3Rpb25zOiB7XHJcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIGNoYWxsZW5nQ29tcGxldDogKCkgPT4gdm9pZDtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfTogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtleHBlcmllbmNlLCBzZXRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDEwKTtcclxuICBjb25zdCBbY29tcGxldGVkQ2hhbGxlbmdlcywgc2V0Q29tcGxldGVkQ2hhbGxlbmdlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XHJcblxyXG4gIHVzZUVmZmVjdCAoKCkgPT4ge1xyXG4gICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgfSwgW10pIFxyXG5cclxuICBmdW5jdGlvbiBsZXZlbFVwKCkge1xyXG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xyXG4gICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XHJcbiAgICBjb25zdCBuZXdDaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShuZXdDaGFsbGVuZ2UpO1xyXG5cclxuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKXtcclxuICAgICAgbmV3IE5vdGlmaWNhdGlvbiAoJ05vdm8gRGVzYWZpbycgLCB7XHJcbiAgICAgIGJvZHk6IGBWYWxlbmRvICR7YWN0aXZlQ2hhbGxlbmdlLmFtb3VudH0geHAhIGBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCkge1xyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbGxlbmdDb21wbGV0KCl7XHJcbiAgICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHthbW91bnR9ID0gYWN0aXZlQ2hhbGxlbmdlXHJcblxyXG4gICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gZXhwZXJpZW5jZSArIGFtb3VudCA7XHJcblxyXG4gICAgICBpZiAoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWwgO1xyXG4gICAgICAgICAgbGV2ZWxVcCgpO1xyXG4gICAgICB9IFxyXG5cclxuICAgICAgc2V0RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICAgIHNldENvbXBsZXRlZENoYWxsZW5nZXMoY29tcGxldGVkQ2hhbGxlbmdlcyArIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgZXhwZXJpZW5jZSxcclxuICAgICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICAgIGNvbXBsZXRlZENoYWxsZW5nZXMsXHJcbiAgICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbnM6IHtcclxuICAgICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgY2hhbGxlbmdDb21wbGV0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9