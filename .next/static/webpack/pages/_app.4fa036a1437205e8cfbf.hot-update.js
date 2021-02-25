webpackHotUpdate_N_E("pages/_app",{

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
        body: "Valendo ".concat(_challenges_json__WEBPACK_IMPORTED_MODULE_2__.amount, " xp! ")
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
    lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImV4cGVyaWVuY2UiLCJzZXRFeHBlcmllbmNlIiwiY29tcGxldGVkQ2hhbGxlbmdlcyIsInNldENvbXBsZXRlZENoYWxsZW5nZXMiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsIm5ld0NoYWxsZW5nZSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjaGFsbGVuZ0NvbXBsZXQiLCJmaW5hbEV4cGVyaWVuY2UiLCJkYXRhIiwiZnVuY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBMEJPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0Msa0JBQVQsT0FBbUU7QUFBQTs7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDOztBQUFBLGtCQUM5Q0Msc0RBQVEsQ0FBQyxDQUFELENBRHNDO0FBQUEsTUFDakVDLEtBRGlFO0FBQUEsTUFDMURDLFFBRDBEOztBQUFBLG1CQUVwQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRjRCO0FBQUEsTUFFakVHLFVBRmlFO0FBQUEsTUFFckRDLGFBRnFEOztBQUFBLG1CQUdsQkosc0RBQVEsQ0FBQyxDQUFELENBSFU7QUFBQSxNQUdqRUssbUJBSGlFO0FBQUEsTUFHNUNDLHNCQUg0Qzs7QUFBQSxtQkFJMUJOLHNEQUFRLENBQUMsSUFBRCxDQUprQjtBQUFBLE1BSWpFTyxlQUppRTtBQUFBLE1BSWhEQyxrQkFKZ0Q7O0FBTXhFLE1BQU1DLHFCQUFxQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDVixLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTlCO0FBRUFXLHlEQUFTLENBQUUsWUFBTTtBQUNmQyxnQkFBWSxDQUFDQyxpQkFBYjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0MsT0FBVCxHQUFtQjtBQUNqQmIsWUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0Q7O0FBRUQsV0FBU2UsaUJBQVQsR0FBNkI7QUFDM0IsUUFBTUMsb0JBQW9CLEdBQUdQLElBQUksQ0FBQ1EsS0FBTCxDQUFXUixJQUFJLENBQUNTLE1BQUwsS0FBZ0JDLDZDQUFVLENBQUNDLE1BQXRDLENBQTdCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHRiw2Q0FBVSxDQUFDSCxvQkFBRCxDQUEvQjtBQUVBVCxzQkFBa0IsQ0FBQ2MsWUFBRCxDQUFsQjs7QUFFQSxRQUFJVCxZQUFZLENBQUNVLFVBQWIsS0FBNEIsU0FBaEMsRUFBMEM7QUFDeEMsVUFBSVYsWUFBSixDQUFrQixjQUFsQixFQUFtQztBQUNuQ1csWUFBSSxvQkFBYUosNkNBQVUsQ0FBQ0ssTUFBeEI7QUFEK0IsT0FBbkM7QUFHRDtBQUNGOztBQUVELFdBQVNDLGNBQVQsR0FBMEI7QUFDeEJsQixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0Q7O0FBRUQsV0FBU21CLGVBQVQsR0FBMEI7QUFDdEIsUUFBSSxDQUFDcEIsZUFBTCxFQUFxQjtBQUNuQjtBQUNEOztBQUhxQixRQUtma0IsTUFMZSxHQUtMbEIsZUFMSyxDQUtma0IsTUFMZTtBQU90QixRQUFJRyxlQUFlLEdBQUd6QixVQUFVLEdBQUdzQixNQUFuQzs7QUFFQSxRQUFJRyxlQUFlLElBQUluQixxQkFBdkIsRUFBNkM7QUFDekNtQixxQkFBZSxHQUFHQSxlQUFlLEdBQUduQixxQkFBcEM7QUFDQU0sYUFBTztBQUNWOztBQUVEWCxpQkFBYSxDQUFDd0IsZUFBRCxDQUFiO0FBQ0FwQixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0FGLDBCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUNIOztBQUVELHNCQUNFLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0UsU0FBSyxFQUFFO0FBQ0x3QixVQUFJLEVBQUU7QUFDSjVCLGFBQUssRUFBTEEsS0FESTtBQUVKRSxrQkFBVSxFQUFWQSxVQUZJO0FBR0pNLDZCQUFxQixFQUFyQkEscUJBSEk7QUFJSkosMkJBQW1CLEVBQW5CQSxtQkFKSTtBQUtKRSx1QkFBZSxFQUFmQTtBQUxJLE9BREQ7QUFRTHVCLGVBQVMsRUFBRTtBQUNUZixlQUFPLEVBQVBBLE9BRFM7QUFFVEMseUJBQWlCLEVBQWpCQSxpQkFGUztBQUdUVSxzQkFBYyxFQUFkQSxjQUhTO0FBSVRDLHVCQUFlLEVBQWZBO0FBSlM7QUFSTixLQURUO0FBQUEsY0FpQkc1QjtBQWpCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0dBekVlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40ZmEwMzZhMTQzNzIwNWU4Y2ZiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tIFwiLi4vLi4vY2hhbGxlbmdlcy5qc29uXCI7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xyXG4gIGRhdGE6IHtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBleHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcclxuICAgIGNvbXBsZXRlZENoYWxsZW5nZXM6IG51bWJlcjtcclxuICAgIGFjdGl2ZUNoYWxsZW5nZToge1xyXG4gICAgICB0eXBlOiBcImJvZHlcIiB8IFwiZXllXCI7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgIGFtb3VudDogbnVtYmVyO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uczoge1xyXG4gICAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICAgIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICBjaGFsbGVuZ0NvbXBsZXQ6ICgpID0+IHZvaWQ7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7IGNoaWxkcmVuIH06IENoYWxsZW5nZXNQcm92aWRlclByb3BzKSB7XHJcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbZXhwZXJpZW5jZSwgc2V0RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSgxMCk7XHJcbiAgY29uc3QgW2NvbXBsZXRlZENoYWxsZW5nZXMsIHNldENvbXBsZXRlZENoYWxsZW5nZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xyXG5cclxuICB1c2VFZmZlY3QgKCgpID0+IHtcclxuICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gIH0sIFtdKSBcclxuXHJcbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcclxuICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcclxuICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xyXG4gICAgY29uc3QgbmV3Q2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XHJcbiAgICBcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShuZXdDaGFsbGVuZ2UpO1xyXG5cclxuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKXtcclxuICAgICAgbmV3IE5vdGlmaWNhdGlvbiAoJ05vdm8gRGVzYWZpbycgLCB7XHJcbiAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlcy5hbW91bnR9IHhwISBgXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYWxsZW5nQ29tcGxldCgpe1xyXG4gICAgICBpZiAoIWFjdGl2ZUNoYWxsZW5nZSl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7YW1vdW50fSA9IGFjdGl2ZUNoYWxsZW5nZVxyXG5cclxuICAgICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGV4cGVyaWVuY2UgKyBhbW91bnQgO1xyXG5cclxuICAgICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpe1xyXG4gICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsIDtcclxuICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgfSBcclxuXHJcbiAgICAgIHNldEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgICBzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzKGNvbXBsZXRlZENoYWxsZW5nZXMgKyAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgIGV4cGVyaWVuY2UsXHJcbiAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXHJcbiAgICAgICAgICBjb21wbGV0ZWRDaGFsbGVuZ2VzLFxyXG4gICAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb25zOiB7XHJcbiAgICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXHJcbiAgICAgICAgICByZXNldENoYWxsZW5nZSxcclxuICAgICAgICAgIGNoYWxsZW5nQ29tcGxldCxcclxuICAgICAgICB9LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==