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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MyNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MyNavigation */ \"./pages/components/MyNavigation.js\");\n/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/welcome */ \"./pages/components/welcome.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/project */ \"./pages/components/project.js\");\n/* harmony import */ var _components_aboutMe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/aboutMe */ \"./pages/components/aboutMe.js\");\n/* harmony import */ var _components_myExperience__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/myExperience */ \"./pages/components/myExperience.js\");\n/* harmony import */ var _components_passion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/passion */ \"./pages/components/passion.js\");\n/* harmony import */ var _components_searchingFor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/searchingFor */ \"./pages/components/searchingFor.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact */ \"./pages/components/contact.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var scrollToComponentARef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var scrollToElementA = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(elementId) {\n        if (scrollToComponentARef.current) {\n            var elementRef = scrollToComponentARef.current.elementRefs[elementId];\n            if (elementRef && elementRef.current) {\n                elementRef.current.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_helmet__WEBPACK_IMPORTED_MODULE_10__.Helmet, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    href: \"https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,400;1,500&display=swap\",\n                    rel: \"stylesheet\"\n                }, void 0, false, {\n                    fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"site\",\n                style: {\n                    fontFamily: \"Ubuntu, sans-serif\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyNavigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onClick: scrollToElementA\n                    }, void 0, false, {\n                        fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"header\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"header__nav\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                    children: \"MoveTo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"header__navItem\",\n                                    onClick: function() {\n                                        return onClick(\"element1\");\n                                    },\n                                    label: \"Projects\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"header__navItem\",\n                                    onClick: function() {\n                                        return scrollToElement(\"about\");\n                                    },\n                                    label: \"About\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"header__navItem\",\n                                    onClick: function() {\n                                        return scrollToElement(\"skills\");\n                                    },\n                                    label: \"Skills\",\n                                    children: \"Skills\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"header__navItem\",\n                                    onClick: function() {\n                                        return scrollToElement(\"contact\");\n                                    },\n                                    label: \"Contact\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_welcome__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_aboutMe__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_myExperience__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_passion__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchingFor__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contact__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"Gf/YRZZvQlRUv5K1sZmWRgNZSSo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNhbGxiYWNrLExpbmsgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNeU5hdmlnYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL015TmF2aWdhdGlvbidcbmltcG9ydCBXZWxjb21lIGZyb20gXCIuL2NvbXBvbmVudHMvd2VsY29tZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0XCI7XG5pbXBvcnQgQWJvdXRNZSBmcm9tIFwiLi9jb21wb25lbnRzL2Fib3V0TWVcIjtcbmltcG9ydCBNeUV4cCBmcm9tIFwiLi9jb21wb25lbnRzL215RXhwZXJpZW5jZVwiO1xuaW1wb3J0IFBhc3Npb24gZnJvbSBcIi4vY29tcG9uZW50cy9wYXNzaW9uXCI7XG5pbXBvcnQgU2VhcmNoaW5nRm9yIGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoaW5nRm9yXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdCdcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcbiAgICBjb25zdCBzY3JvbGxUb0NvbXBvbmVudEFSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9FbGVtZW50QSA9IHVzZUNhbGxiYWNrKChlbGVtZW50SWQpID0+IHtcbiAgICBpZiAoc2Nyb2xsVG9Db21wb25lbnRBUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRSZWYgPSBzY3JvbGxUb0NvbXBvbmVudEFSZWYuY3VycmVudC5lbGVtZW50UmVmc1tlbGVtZW50SWRdO1xuICAgICAgaWYgKGVsZW1lbnRSZWYgJiYgZWxlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGVsZW1lbnRSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzEsNDAwOzEsNTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpdGVcIiBzdHlsZT17eyBmb250RmFtaWx5OiAnVWJ1bnR1LCBzYW5zLXNlcmlmJ319PlxuICAgICAgICAgICAgICAgIDxNeU5hdmlnYXRpb24gb25DbGljaz17c2Nyb2xsVG9FbGVtZW50QX0+PC9NeU5hdmlnYXRpb24+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluaz5Nb3ZlVG88L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZJdGVtXCIgb25DbGljaz17KCkgPT4gb25DbGljaygnZWxlbWVudDEnKX0gbGFiZWw9XCJQcm9qZWN0c1wiPlByb2plY3RzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXJfX25hdkl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb0VsZW1lbnQoJ2Fib3V0Jyl9IGxhYmVsPVwiQWJvdXRcIiA+QWJvdXQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2SXRlbVwiIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvRWxlbWVudCgnc2tpbGxzJyl9IGxhYmVsPVwiU2tpbGxzXCIgPlNraWxsczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZJdGVtXCIgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9FbGVtZW50KCdjb250YWN0Jyl9IGxhYmVsPVwiQ29udGFjdFwiID5Db250YWN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICAgICAgPFdlbGNvbWU+PC9XZWxjb21lPlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdD48L1Byb2plY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxBYm91dE1lPjwvQWJvdXRNZT5cbiAgICAgICAgICAgICAgICAgICAgPE15RXhwID48L015RXhwPlxuICAgICAgICAgICAgICAgICAgICA8UGFzc2lvbj48L1Bhc3Npb24+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hpbmdGb3I+PC9TZWFyY2hpbmdGb3I+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWN0PjwvQ29udGFjdD5cbiAgICAgICAgICAgICAgICA8L21haW4+ICAgIFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiTGluayIsIk15TmF2aWdhdGlvbiIsIldlbGNvbWUiLCJQcm9qZWN0IiwiQWJvdXRNZSIsIk15RXhwIiwiUGFzc2lvbiIsIlNlYXJjaGluZ0ZvciIsIkNvbnRhY3QiLCJIZWxtZXQiLCJIb21lIiwic2Nyb2xsVG9Db21wb25lbnRBUmVmIiwic2Nyb2xsVG9FbGVtZW50QSIsImVsZW1lbnRJZCIsImN1cnJlbnQiLCJlbGVtZW50UmVmIiwiZWxlbWVudFJlZnMiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZGl2IiwibGluayIsImhyZWYiLCJyZWwiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJmb250RmFtaWx5Iiwib25DbGljayIsImhlYWRlciIsInVsIiwibGkiLCJsYWJlbCIsInNjcm9sbFRvRWxlbWVudCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});