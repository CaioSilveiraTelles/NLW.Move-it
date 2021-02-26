webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getServeSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServeSideProps", function() { return getServeSideProps; });
/* harmony import */ var C_Users_caio_telles_NLW_Move_it_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_caio_telles_NLW_Move_it_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_caio_telles_NLW_Move_it_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_caio_telles_NLW_Move_it_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Countdown */ "./src/components/Countdown.tsx");
/* harmony import */ var _components_CompletedChallanges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CompletedChallanges */ "./src/components/CompletedChallanges.tsx");
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ChallengeBox */ "./src/components/ChallengeBox.tsx");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _contexts_CountDownContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contexts/CountDownContext */ "./src/contexts/CountDownContext.tsx");



var _jsxFileName = "C:\\Users\\caio.telles\\NLW.Move-it\\src\\pages\\index.tsx";








function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "Bulding | move.it"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_4__["ExperienceBar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_contexts_CountDownContext__WEBPACK_IMPORTED_MODULE_10__["CountDownProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_5__["Profile"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_CompletedChallanges__WEBPACK_IMPORTED_MODULE_7__["CompletedChallanges"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Countdown__WEBPACK_IMPORTED_MODULE_6__["Countdown"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_8__["ChallengeBox"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = Home;
var getServeSideProps = /*#__PURE__*/function () {
  var _ref = Object(C_Users_caio_telles_NLW_Move_it_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_caio_telles_NLW_Move_it_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var user;
    return C_Users_caio_telles_NLW_Move_it_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //call api
            user = {
              level: 1,
              experience: 50,
              challengComplet: 2
            };
            consele.log(user);
            return _context.abrupt("return", {
              props: {}
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getServeSideProps() {
    return _ref.apply(this, arguments);
  };
}();

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSG9tZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImdldFNlcnZlU2lkZVByb3BzIiwidXNlciIsImxldmVsIiwiZXhwZXJpZW5jZSIsImNoYWxsZW5nQ29tcGxldCIsImNvbnNlbGUiLCJsb2ciLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxvRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFNRSxxRUFBQyw2RUFBRDtBQUFBLDZCQUNBO0FBQUEsZ0NBQ0U7QUFBQSxrQ0FDRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUscUVBQUMsbUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUtFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUU7QUFBQSxpQ0FDRSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7S0E1QnVCRixJO0FBOEJqQixJQUFNRyxpQkFBaUI7QUFBQSxzUkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDOUI7QUFFTUMsZ0JBSHdCLEdBR2xCO0FBQ1ZDLG1CQUFLLEVBQUMsQ0FESTtBQUVWQyx3QkFBVSxFQUFFLEVBRkY7QUFHVkMsNkJBQWUsRUFBRTtBQUhQLGFBSGtCO0FBUzlCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFUOEIsNkNBWXhCO0FBQ0xNLG1CQUFLLEVBQUc7QUFESCxhQVp3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFqQlAsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEdBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg2ZTdhOTIxNzJlODE1MmQ2NjM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQgeyBFeHBlcmllbmNlQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhclwiO1xyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZVwiO1xyXG5pbXBvcnQgeyBDb3VudGRvd24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGRvd25cIjtcclxuaW1wb3J0IHsgQ29tcGxldGVkQ2hhbGxhbmdlcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsYW5nZXNcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgQ291bnREb3duUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQ291bnREb3duQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QnVsZGluZyB8IG1vdmUuaXQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxFeHBlcmllbmNlQmFyIC8+XHJcblxyXG4gICAgICA8Q291bnREb3duUHJvdmlkZXI+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICAgICAgPENvbXBsZXRlZENoYWxsYW5nZXMgLz5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxDb3VudGRvd24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENoYWxsZW5nZUJveCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvQ291bnREb3duUHJvdmlkZXI+XHJcblxyXG4gIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgIFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZVNpZGVQcm9wcyA9IGFzeW5jICgpPT4ge1xyXG4gICAvL2NhbGwgYXBpXHJcblxyXG4gICBjb25zdCB1c2VyID17XHJcbiAgICAgbGV2ZWw6MSxcclxuICAgICBleHBlcmllbmNlOiA1MCxcclxuICAgICBjaGFsbGVuZ0NvbXBsZXQ6IDIsXHJcbiAgIH1cclxuICBcclxuICAgY29uc2VsZS5sb2codXNlcik7XHJcbiAgXHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzIDoge31cclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==