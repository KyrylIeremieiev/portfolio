"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_planet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/planet */ \"./pages/components/planet.js\");\n/* harmony import */ var _components_MyNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MyNavigation */ \"./pages/components/MyNavigation.js\");\n/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/welcome */ \"./pages/components/welcome.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/project */ \"./pages/components/project.js\");\n/* harmony import */ var _components_aboutMe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/aboutMe */ \"./pages/components/aboutMe.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), user = ref[0], setUser = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), pass = ref1[0], setPass = ref1[1];\n    var submit = function() {\n        fetch(\"http://localhost:8080/insert\", {\n            method: \"POST\",\n            mode: \"cors\",\n            headers: {\n                \"Accept\": \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"name\": user,\n                \"expansion\": pass\n            })\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"site\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyNavigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_welcome__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aboutMeSec\", {}, void 0, false, {\n                        fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDRTtBQUNaO0FBQ29CO0FBQ0c7QUFDVDtBQUNBO0FBQ0c7QUFHL0IsU0FBU1UsSUFBSSxHQUFFOztJQUMxQixJQUF3QlIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3QlMsSUFBSSxHQUFhVCxHQUFZLEdBQXpCLEVBQUVVLE9BQU8sR0FBSVYsR0FBWSxHQUFoQjtJQUNwQixJQUF3QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3QlcsSUFBSSxHQUFhWCxJQUFZLEdBQXpCLEVBQUVZLE9BQU8sR0FBSVosSUFBWSxHQUFoQjtJQUNwQixJQUFNYSxNQUFNLEdBQUcsV0FBSztRQUNoQkMsS0FBSyxDQUFDLDhCQUE4QixFQUFFO1lBQ3RDQyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxJQUFJLEVBQUUsTUFBTTtZQUNaQyxPQUFPLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsY0FBYyxFQUFFLGtCQUFrQjthQUNqQztZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dCQUFDLE1BQU0sRUFBRVgsSUFBSTtnQkFBRSxXQUFXLEVBQUNFLElBQUk7YUFBQyxDQUFDO1NBQ3JELENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxxQkFDSSw4REFBQ1UsU0FBTztRQUFDQyxTQUFTLEVBQUMsTUFBTTs7MEJBQ3JCLDhEQUFDbEIsZ0VBQVk7Ozs7b0JBQWdCOzBCQUM3Qiw4REFBQ21CLE1BQUk7O2tDQUNELDhEQUFDbEIsMkRBQU87Ozs7NEJBQVc7a0NBQ25CLDhEQUFDQywyREFBTzs7Ozs0QkFBVztrQ0FDbkIsOERBQUNDLFlBQVU7Ozs7NEJBQWM7Ozs7OztvQkFDdEI7Ozs7OztZQUNELENBR1I7QUFDVixDQUFDO0dBMUJ1QkMsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU3Bpbm5pbmdQbGFuZXQgZnJvbSAnLi9jb21wb25lbnRzL3BsYW5ldCc7XG5pbXBvcnQgTXlOYXZpZ2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9NeU5hdmlnYXRpb24nXG5pbXBvcnQgV2VsY29tZSBmcm9tIFwiLi9jb21wb25lbnRzL3dlbGNvbWVcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdFwiO1xuaW1wb3J0IGFib3V0TWVTZWMgZnJvbSBcIi4vY29tcG9uZW50cy9hYm91dE1lXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzcywgc2V0UGFzc10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3Qgc3VibWl0ID0gKCkgPT57XG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvaW5zZXJ0Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyduYW1lJzogdXNlciwgJ2V4cGFuc2lvbic6cGFzc30pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpdGVcIj5cbiAgICAgICAgICAgIDxNeU5hdmlnYXRpb24+PC9NeU5hdmlnYXRpb24+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8V2VsY29tZT48L1dlbGNvbWU+XG4gICAgICAgICAgICAgICAgPFByb2plY3Q+PC9Qcm9qZWN0PlxuICAgICAgICAgICAgICAgIDxhYm91dE1lU2VjPjwvYWJvdXRNZVNlYz5cbiAgICAgICAgICAgIDwvbWFpbj4gICAgXG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICBcbiAgICAgICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiTGluayIsIlNwaW5uaW5nUGxhbmV0IiwiTXlOYXZpZ2F0aW9uIiwiV2VsY29tZSIsIlByb2plY3QiLCJhYm91dE1lU2VjIiwiSG9tZSIsInVzZXIiLCJzZXRVc2VyIiwicGFzcyIsInNldFBhc3MiLCJzdWJtaXQiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});