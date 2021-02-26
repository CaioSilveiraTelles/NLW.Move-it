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


var _jsxFileName = "C:\\Users\\caio.telles\\NLW.Move-it\\src\\contexts\\ChallengesContext.tsx",
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
    var _data = data,
        activeChallenge = _data.activeChallenge;
    setActiveChallenge(newChallenge);
    new Audio('/notification.mp3').play();

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
    lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImV4cGVyaWVuY2UiLCJzZXRFeHBlcmllbmNlIiwiY29tcGxldGVkQ2hhbGxlbmdlcyIsInNldENvbXBsZXRlZENoYWxsZW5nZXMiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsIm5ld0NoYWxsZW5nZSIsImRhdGEiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxlbmdlIiwiY2hhbGxlbmdDb21wbGV0IiwiZmluYWxFeHBlcmllbmNlIiwiZnVuY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBMEJPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0Msa0JBQVQsT0FBbUU7QUFBQTs7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDOztBQUFBLGtCQUM5Q0Msc0RBQVEsQ0FBQyxDQUFELENBRHNDO0FBQUEsTUFDakVDLEtBRGlFO0FBQUEsTUFDMURDLFFBRDBEOztBQUFBLG1CQUVwQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRjRCO0FBQUEsTUFFakVHLFVBRmlFO0FBQUEsTUFFckRDLGFBRnFEOztBQUFBLG1CQUdsQkosc0RBQVEsQ0FBQyxDQUFELENBSFU7QUFBQSxNQUdqRUssbUJBSGlFO0FBQUEsTUFHNUNDLHNCQUg0Qzs7QUFBQSxtQkFJMUJOLHNEQUFRLENBQUMsSUFBRCxDQUprQjtBQUFBLE1BSWpFTyxlQUppRTtBQUFBLE1BSWhEQyxrQkFKZ0Q7O0FBTXhFLE1BQU1DLHFCQUFxQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDVixLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTlCO0FBRUFXLHlEQUFTLENBQUUsWUFBTTtBQUNmQyxnQkFBWSxDQUFDQyxpQkFBYjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0MsT0FBVCxHQUFtQjtBQUNqQmIsWUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0Q7O0FBRUQsV0FBU2UsaUJBQVQsR0FBNkI7QUFDM0IsUUFBTUMsb0JBQW9CLEdBQUdQLElBQUksQ0FBQ1EsS0FBTCxDQUFXUixJQUFJLENBQUNTLE1BQUwsS0FBZ0JDLDZDQUFVLENBQUNDLE1BQXRDLENBQTdCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHRiw2Q0FBVSxDQUFDSCxvQkFBRCxDQUEvQjtBQUYyQixnQkFHQ00sSUFIRDtBQUFBLFFBR25CaEIsZUFIbUIsU0FHbkJBLGVBSG1CO0FBSzNCQyxzQkFBa0IsQ0FBQ2MsWUFBRCxDQUFsQjtBQUVBLFFBQUlFLEtBQUosQ0FBVyxtQkFBWCxFQUFnQ0MsSUFBaEM7O0FBRUEsUUFBSVosWUFBWSxDQUFDYSxVQUFiLEtBQTRCLFNBQWhDLEVBQTBDO0FBQ3hDLFVBQUliLFlBQUosQ0FBa0IsY0FBbEIsRUFBbUM7QUFDbkNjLFlBQUksb0JBQWFwQixlQUFlLENBQUNxQixNQUE3QjtBQUQrQixPQUFuQztBQUdEO0FBQ0Y7O0FBRUQsV0FBU0MsY0FBVCxHQUEwQjtBQUN4QnJCLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDRDs7QUFFRCxXQUFTc0IsZUFBVCxHQUEwQjtBQUN0QixRQUFJLENBQUN2QixlQUFMLEVBQXFCO0FBQ25CO0FBQ0Q7O0FBSHFCLFFBS2ZxQixNQUxlLEdBS0xyQixlQUxLLENBS2ZxQixNQUxlO0FBT3RCLFFBQUlHLGVBQWUsR0FBRzVCLFVBQVUsR0FBR3lCLE1BQW5DOztBQUVBLFFBQUlHLGVBQWUsSUFBSXRCLHFCQUF2QixFQUE2QztBQUN6Q3NCLHFCQUFlLEdBQUdBLGVBQWUsR0FBR3RCLHFCQUFwQztBQUNBTSxhQUFPO0FBQ1Y7O0FBRURYLGlCQUFhLENBQUMyQixlQUFELENBQWI7QUFDQXZCLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUYsMEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0g7O0FBRUQsc0JBQ0UscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFDRSxTQUFLLEVBQUU7QUFDTGtCLFVBQUksRUFBRTtBQUNKdEIsYUFBSyxFQUFMQSxLQURJO0FBRUpFLGtCQUFVLEVBQVZBLFVBRkk7QUFHSk0sNkJBQXFCLEVBQXJCQSxxQkFISTtBQUlKSiwyQkFBbUIsRUFBbkJBLG1CQUpJO0FBS0pFLHVCQUFlLEVBQWZBO0FBTEksT0FERDtBQVFMeUIsZUFBUyxFQUFFO0FBQ1RqQixlQUFPLEVBQVBBLE9BRFM7QUFFVEMseUJBQWlCLEVBQWpCQSxpQkFGUztBQUdUYSxzQkFBYyxFQUFkQSxjQUhTO0FBSVRDLHVCQUFlLEVBQWZBO0FBSlM7QUFSTixLQURUO0FBQUEsY0FpQkcvQjtBQWpCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0dBNUVlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGI3ODQ1MWRmOGUwMGJhYjRmNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uLy4uL2NoYWxsZW5nZXMuanNvblwiO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICBkYXRhOiB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgZXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgICBjb21wbGV0ZWRDaGFsbGVuZ2VzOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IHtcclxuICAgICAgdHlwZTogXCJib2R5XCIgfCBcImV5ZVwiO1xyXG4gICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIH07XHJcbiAgfTtcclxuICBmdW5jdGlvbnM6IHtcclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgY2hhbGxlbmdDb21wbGV0OiAoKSA9PiB2b2lkO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xyXG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2V4cGVyaWVuY2UsIHNldEV4cGVyaWVuY2VdID0gdXNlU3RhdGUoMTApO1xyXG4gIGNvbnN0IFtjb21wbGV0ZWRDaGFsbGVuZ2VzLCBzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcclxuXHJcbiAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICB9LCBbXSkgXHJcblxyXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XHJcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XHJcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IG5ld0NoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG4gICAgY29uc3QgeyBhY3RpdmVDaGFsbGVuZ2UgfSA9IGRhdGE7XHJcbiAgICBcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShuZXdDaGFsbGVuZ2UpO1xyXG5cclxuICAgIG5ldyBBdWRpbyAoJy9ub3RpZmljYXRpb24ubXAzJykucGxheSgpXHJcblxyXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpe1xyXG4gICAgICBuZXcgTm90aWZpY2F0aW9uICgnTm92byBEZXNhZmlvJyAsIHtcclxuICAgICAgYm9keTogYFZhbGVuZG8gJHthY3RpdmVDaGFsbGVuZ2UuYW1vdW50fSB4cCEgYFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFsbGVuZ0NvbXBsZXQoKXtcclxuICAgICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2Upe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qge2Ftb3VudH0gPSBhY3RpdmVDaGFsbGVuZ2VcclxuXHJcbiAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBleHBlcmllbmNlICsgYW1vdW50IDtcclxuXHJcbiAgICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKXtcclxuICAgICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbCA7XHJcbiAgICAgICAgICBsZXZlbFVwKCk7XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBzZXRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgc2V0Q29tcGxldGVkQ2hhbGxlbmdlcyhjb21wbGV0ZWRDaGFsbGVuZ2VzICsgMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgICBleHBlcmllbmNlLFxyXG4gICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgY29tcGxldGVkQ2hhbGxlbmdlcyxcclxuICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uczoge1xyXG4gICAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXHJcbiAgICAgICAgICBjaGFsbGVuZ0NvbXBsZXQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=