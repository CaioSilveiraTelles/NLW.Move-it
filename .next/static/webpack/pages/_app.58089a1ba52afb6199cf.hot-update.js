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
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo Desafio', {
        body: "Valendo ".concat(Challenges.experience, " xp! ")
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
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImV4cGVyaWVuY2UiLCJzZXRFeHBlcmllbmNlIiwiY29tcGxldGVkQ2hhbGxlbmdlcyIsInNldENvbXBsZXRlZENoYWxsZW5nZXMiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsIm5ld0NoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiQ2hhbGxlbmdlcyIsInJlc2V0Q2hhbGxlbmdlIiwiY2hhbGxlbmdDb21wbGV0IiwiYW1vdW50IiwiZmluYWxFeHBlcmllbmNlIiwiZGF0YSIsImZ1bmN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQTBCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLFNBQVNDLGtCQUFULE9BQW1FO0FBQUE7O0FBQUEsTUFBckNDLFFBQXFDLFFBQXJDQSxRQUFxQzs7QUFBQSxrQkFDOUNDLHNEQUFRLENBQUMsQ0FBRCxDQURzQztBQUFBLE1BQ2pFQyxLQURpRTtBQUFBLE1BQzFEQyxRQUQwRDs7QUFBQSxtQkFFcENGLHNEQUFRLENBQUMsRUFBRCxDQUY0QjtBQUFBLE1BRWpFRyxVQUZpRTtBQUFBLE1BRXJEQyxhQUZxRDs7QUFBQSxtQkFHbEJKLHNEQUFRLENBQUMsQ0FBRCxDQUhVO0FBQUEsTUFHakVLLG1CQUhpRTtBQUFBLE1BRzVDQyxzQkFINEM7O0FBQUEsbUJBSTFCTixzREFBUSxDQUFDLElBQUQsQ0FKa0I7QUFBQSxNQUlqRU8sZUFKaUU7QUFBQSxNQUloREMsa0JBSmdEOztBQU14RSxNQUFNQyxxQkFBcUIsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBQ1YsS0FBSyxHQUFHLENBQVQsSUFBYyxDQUF2QixFQUEwQixDQUExQixDQUE5QjtBQUVBVyx5REFBUyxDQUFFLFlBQU07QUFDZkMsZ0JBQVksQ0FBQ0MsaUJBQWI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLFdBQVNDLE9BQVQsR0FBbUI7QUFDakJiLFlBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNEOztBQUVELFdBQVNlLGlCQUFULEdBQTZCO0FBQzNCLFFBQU1DLG9CQUFvQixHQUFHUCxJQUFJLENBQUNRLEtBQUwsQ0FBV1IsSUFBSSxDQUFDUyxNQUFMLEtBQWdCQyw2Q0FBVSxDQUFDQyxNQUF0QyxDQUE3QjtBQUNBLFFBQU1DLFlBQVksR0FBR0YsNkNBQVUsQ0FBQ0gsb0JBQUQsQ0FBL0I7QUFFQVQsc0JBQWtCLENBQUNjLFlBQUQsQ0FBbEI7QUFFQSxRQUFJQyxLQUFKLENBQVcsbUJBQVgsRUFBZ0NDLElBQWhDOztBQUVBLFFBQUlYLFlBQVksQ0FBQ1ksVUFBYixLQUE0QixTQUFoQyxFQUEwQztBQUN4QyxVQUFJWixZQUFKLENBQWtCLGNBQWxCLEVBQW1DO0FBQ25DYSxZQUFJLG9CQUFhQyxVQUFVLENBQUN4QixVQUF4QjtBQUQrQixPQUFuQztBQUdEO0FBQ0Y7O0FBRUQsV0FBU3lCLGNBQVQsR0FBMEI7QUFDeEJwQixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0Q7O0FBRUQsV0FBU3FCLGVBQVQsR0FBMEI7QUFDdEIsUUFBSSxDQUFDdEIsZUFBTCxFQUFxQjtBQUNuQjtBQUNEOztBQUhxQixRQUtmdUIsTUFMZSxHQUtMdkIsZUFMSyxDQUtmdUIsTUFMZTtBQU90QixRQUFJQyxlQUFlLEdBQUc1QixVQUFVLEdBQUcyQixNQUFuQzs7QUFFQSxRQUFJQyxlQUFlLElBQUl0QixxQkFBdkIsRUFBNkM7QUFDekNzQixxQkFBZSxHQUFHQSxlQUFlLEdBQUd0QixxQkFBcEM7QUFDQU0sYUFBTztBQUNWOztBQUVEWCxpQkFBYSxDQUFDMkIsZUFBRCxDQUFiO0FBQ0F2QixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0FGLDBCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUNIOztBQUVELHNCQUNFLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0UsU0FBSyxFQUFFO0FBQ0wyQixVQUFJLEVBQUU7QUFDSi9CLGFBQUssRUFBTEEsS0FESTtBQUVKRSxrQkFBVSxFQUFWQSxVQUZJO0FBR0pNLDZCQUFxQixFQUFyQkEscUJBSEk7QUFJSkosMkJBQW1CLEVBQW5CQSxtQkFKSTtBQUtKRSx1QkFBZSxFQUFmQTtBQUxJLE9BREQ7QUFRTDBCLGVBQVMsRUFBRTtBQUNUbEIsZUFBTyxFQUFQQSxPQURTO0FBRVRDLHlCQUFpQixFQUFqQkEsaUJBRlM7QUFHVFksc0JBQWMsRUFBZEEsY0FIUztBQUlUQyx1QkFBZSxFQUFmQTtBQUpTO0FBUk4sS0FEVDtBQUFBLGNBaUJHOUI7QUFqQkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQTNFZUQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTgwODlhMWJhNTJhZmI2MTk5Y2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uLy4uL2NoYWxsZW5nZXMuanNvblwiO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICBkYXRhOiB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgZXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgICBjb21wbGV0ZWRDaGFsbGVuZ2VzOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IHtcclxuICAgICAgdHlwZTogXCJib2R5XCIgfCBcImV5ZVwiO1xyXG4gICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIH07XHJcbiAgfTtcclxuICBmdW5jdGlvbnM6IHtcclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgY2hhbGxlbmdDb21wbGV0OiAoKSA9PiB2b2lkO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xyXG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2V4cGVyaWVuY2UsIHNldEV4cGVyaWVuY2VdID0gdXNlU3RhdGUoMTApO1xyXG4gIGNvbnN0IFtjb21wbGV0ZWRDaGFsbGVuZ2VzLCBzZXRDb21wbGV0ZWRDaGFsbGVuZ2VzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcclxuXHJcbiAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICB9LCBbXSkgXHJcblxyXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XHJcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XHJcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IG5ld0NoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG4gICAgXHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobmV3Q2hhbGxlbmdlKTtcclxuXHJcbiAgICBuZXcgQXVkaW8gKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKVxyXG5cclxuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKXtcclxuICAgICAgbmV3IE5vdGlmaWNhdGlvbiAoJ05vdm8gRGVzYWZpbycgLCB7XHJcbiAgICAgIGJvZHk6IGBWYWxlbmRvICR7Q2hhbGxlbmdlcy5leHBlcmllbmNlfSB4cCEgYFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFsbGVuZ0NvbXBsZXQoKXtcclxuICAgICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2Upe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qge2Ftb3VudH0gPSBhY3RpdmVDaGFsbGVuZ2VcclxuXHJcbiAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBleHBlcmllbmNlICsgYW1vdW50IDtcclxuXHJcbiAgICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKXtcclxuICAgICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbCA7XHJcbiAgICAgICAgICBsZXZlbFVwKCk7XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBzZXRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgc2V0Q29tcGxldGVkQ2hhbGxlbmdlcyhjb21wbGV0ZWRDaGFsbGVuZ2VzICsgMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgICBleHBlcmllbmNlLFxyXG4gICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgY29tcGxldGVkQ2hhbGxlbmdlcyxcclxuICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uczoge1xyXG4gICAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXHJcbiAgICAgICAgICBjaGFsbGVuZ0NvbXBsZXQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=