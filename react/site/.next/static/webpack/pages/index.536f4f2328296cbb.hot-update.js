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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [pass, setPass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const submit = ()=>{\n        fetch(\"http://localhost:8080/insert\", {\n            method: \"POST\",\n            mode: \"cors\",\n            headers: {\n                \"Accept\": \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"name\": user,\n                \"expansion\": pass\n            })\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"header__button\",\n                id: \"header__button\",\n                children: \"button\"\n            }, void 0, false, {\n                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"header__nav\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"header__navItem\",\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"header__navItem\",\n                            children: \"Skills\"\n                        }, void 0, false, {\n                            fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"header__navItem\",\n                            children: \"About me\"\n                        }, void 0, false, {\n                            fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"header__navItem\",\n                            children: \"CV\"\n                        }, void 0, false, {\n                            fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"header__navItem\",\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"welcome contentPart\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: \"welcome__wrapper\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"welcome__title\",\n                            children: \"Welcome to my Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"welcome__text\",\n                            children: \"My name is Kyryl Ieremieiev, I am an aspiring fullstack webdeveloper!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"welcome__button\",\n                            children: \"CV\"\n                        }, void 0, false, {\n                            fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/di/Documents/ma/repo/portfolio/react/site/pages/index.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n} /*\n    <body>\n    \n        <main>\n            <section class=\"welcome contentPart\">\n                <img src=\"./img/placeholdr.png\" alt=\"an image of me\" class=\"welcome__img\">\n                <article class=\"welcome__wrapper\">\n                    <h1 class=\"welcome__title\">Welcome to my Portfolio</h1>\n                    <p class=\"welcome__text\">My name is Kyryl Ieremieiev, <br> I am an aspiring fullstack webdeveloper!</p>\n                    <button class=\"welcome__button\">CV</button>\n                </article>\n            </section>\n            \n            <section class=\"projects contentPart\">\n                <h2 class=\"projects__title\">Projects</h2>\n                <ul class=\"projects__list\">\n                    <li class=\"projects__item\">\n                        <img src=\"/img/project_placeholder.png\" alt=\"\" class=\"projects__img\">\n                        <figcaption class=\"projects__name\">Test Project 1</figcaption>\n                    </li>\n                    <li class=\"projects__item\">\n                        <img src=\"/img/project_placeholder.png\" alt=\"\" class=\"projects__img\">\n                        <figcaption class=\"projects__name\">Test Project 1</figcaption>\n                    </li>\n                    <li class=\"projects__item\">\n                        <img src=\"/img/project_placeholder.png\" alt=\"\" class=\"projects__img\">\n                        <figcaption class=\"projects__name\">Test Project 1</figcaption>\n                    </li>\n                    <li class=\"projects__item\">\n                        <img src=\"/img/project_placeholder.png\" alt=\"\" class=\"projects__img\">\n                        <figcaption class=\"projects__name\">Test Project 1</figcaption>\n                    </li>\n                    <li class=\"projects__item\">\n                        <img src=\"/img/project_placeholder.png\" alt=\"\" class=\"projects__img\">\n                        <figcaption class=\"projects__name\">Test Project 1</figcaption>\n                    </li>\n                    <li class=\"projects__item\">\n                        <img src=\"/img/project_placeholder.png\" alt=\"\" class=\"projects__img\">\n                        <figcaption class=\"projects__name\">Test Project 1</figcaption>\n                    </li>\n                    <li class=\"projects__item\">\n                        <img src=\"/img/project_placeholder.png\" alt=\"\" class=\"projects__img\">\n                        <figcaption class=\"projects__name\">Test Project 1</figcaption>\n                    </li>\n                    <li class=\"projects__item\">\n                        <img src=\"/img/project_placeholder.png\" alt=\"\" class=\"projects__img\">\n                        <figcaption class=\"projects__name\">Test Project 1</figcaption>\n                    </li>\n                </ul>\n            </section>\n    \n            <section class=\"about contentPart\">\n                <article class=\"about__profile\">\n                    <h2 class=\"about__title\">About Me</h2>\n                    <section class=\"about__wrapper\">\n                        <img src=\"/img/project_placeholder.png\" alt=\"an image of me\" class=\"about__img\">\n                        <p class=\"about__text\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi cum hic quas voluptatem dicta, porro aliquid incidunt obcaecati rem expedita quam sint illum non laborum veritatis ducimus voluptatum sed dolore.\n                        Consequatur ipsa, quis accusamus est earum aliquam, vel laboriosam eos aut, esse quasi accusantium eius pariatur fugiat. Sint deserunt fugiat quisquam soluta, nisi mollitia omnis dolore sit quibusdam dicta vel!</p>\n                    </section>\n                </article>\n            </section>\n    \n            <section class=\"contact contentPart\">\n                <article class=\"contact__forms\">\n                    <h2 class=\"contact__bigTitle\">Contact</h2>\n                    <figure class=\"contact__form\">\n                        <h2 class=\"contact__title\">Email:</h2>\n                        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" class=\"contact__input\"></textarea>\n                    </figure>\n                    <figure class=\"contact__form\">\n                        <h2 class=\"contact__title\">Message:</h2>\n                        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" class=\"contact__input\"></textarea>\n                    </figure>\n                    <button class=\"contact__post\">Send!</button>\n                </article>\n            </section>\n        </main>\n    </body>\n    </html>*/ \n_s(Home, \"TYvzQlggWKFC7C/yaVgrcrOEfvA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBQ047QUFFbEIsU0FBU0c7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTU0sU0FBUztRQUNYQyxNQUFNLGdDQUFnQztZQUN0Q0MsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLFNBQVM7Z0JBQ1QsVUFBVTtnQkFDVixnQkFBZ0I7WUFDaEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFDLFFBQVFYO2dCQUFNLGFBQVlFO1lBQUk7UUFDcEQ7SUFDSjtJQUNBLHFCQUNJLDhEQUFDVTs7MEJBQ0csOERBQUNDO2dCQUNHQyxXQUFVO2dCQUNWQyxJQUFHOzBCQUNOOzs7Ozs7MEJBSUQsOERBQUNDO2dCQUFPRixXQUFVOzBCQUNkLDRFQUFDRztvQkFBR0gsV0FBVTs7c0NBQ1YsOERBQUNJOzRCQUFHSixXQUFVO3NDQUFrQjs7Ozs7O3NDQUNoQyw4REFBQ0k7NEJBQUdKLFdBQVU7c0NBQWtCOzs7Ozs7c0NBQ2hDLDhEQUFDSTs0QkFBR0osV0FBVTtzQ0FBa0I7Ozs7OztzQ0FDaEMsOERBQUNJOzRCQUFHSixXQUFVO3NDQUFrQjs7Ozs7O3NDQUNoQyw4REFBQ0k7NEJBQUdKLFdBQVU7c0NBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJeEMsOERBQUNGO2dCQUFRRSxXQUFVOzBCQUNmLDRFQUFDSztvQkFBUUwsV0FBVTs7c0NBQ2YsOERBQUNNOzRCQUFHTixXQUFVO3NDQUFpQjs7Ozs7O3NDQUMvQiw4REFBQ087NEJBQUVQLFdBQVU7c0NBQWdCOzs7Ozs7c0NBQzdCLDhEQUFDRDs0QkFBT0MsV0FBVTtzQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hELEVBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQThFVztHQTVIYWY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzcywgc2V0UGFzc10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3Qgc3VibWl0ID0gKCkgPT57XG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvaW5zZXJ0Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyduYW1lJzogdXNlciwgJ2V4cGFuc2lvbic6cGFzc30pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgaWQ9XCJoZWFkZXJfX2J1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2SXRlbVwiPlByb2plY3RzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2SXRlbVwiPlNraWxsczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXJfX25hdkl0ZW1cIj5BYm91dCBtZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXJfX25hdkl0ZW1cIj5DVjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXJfX25hdkl0ZW1cIj5Db250YWN0PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndlbGNvbWUgY29udGVudFBhcnRcIj5cbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ3ZWxjb21lX193cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3ZWxjb21lX190aXRsZVwiPldlbGNvbWUgdG8gbXkgUG9ydGZvbGlvPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2VsY29tZV9fdGV4dFwiPk15IG5hbWUgaXMgS3lyeWwgSWVyZW1pZWlldiwgSSBhbSBhbiBhc3BpcmluZyBmdWxsc3RhY2sgd2ViZGV2ZWxvcGVyITwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3ZWxjb21lX19idXR0b25cIj5DVjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIFxuICAgICAgICApO1xufVxuXG4vKlxuICAgIDxib2R5PlxuICAgIFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwid2VsY29tZSBjb250ZW50UGFydFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWcvcGxhY2Vob2xkci5wbmdcIiBhbHQ9XCJhbiBpbWFnZSBvZiBtZVwiIGNsYXNzPVwid2VsY29tZV9faW1nXCI+XG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ3ZWxjb21lX193cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIndlbGNvbWVfX3RpdGxlXCI+V2VsY29tZSB0byBteSBQb3J0Zm9saW88L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndlbGNvbWVfX3RleHRcIj5NeSBuYW1lIGlzIEt5cnlsIEllcmVtaWVpZXYsIDxicj4gSSBhbSBhbiBhc3BpcmluZyBmdWxsc3RhY2sgd2ViZGV2ZWxvcGVyITwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIndlbGNvbWVfX2J1dHRvblwiPkNWPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInByb2plY3RzIGNvbnRlbnRQYXJ0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicHJvamVjdHNfX3RpdGxlXCI+UHJvamVjdHM8L2gyPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2plY3RzX19saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3RzX19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvcHJvamVjdF9wbGFjZWhvbGRlci5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cInByb2plY3RzX19pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwicHJvamVjdHNfX25hbWVcIj5UZXN0IFByb2plY3QgMTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdHNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wcm9qZWN0X3BsYWNlaG9sZGVyLnBuZ1wiIGFsdD1cIlwiIGNsYXNzPVwicHJvamVjdHNfX2ltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3M9XCJwcm9qZWN0c19fbmFtZVwiPlRlc3QgUHJvamVjdCAxPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0c19faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3Byb2plY3RfcGxhY2Vob2xkZXIucG5nXCIgYWx0PVwiXCIgY2xhc3M9XCJwcm9qZWN0c19faW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cInByb2plY3RzX19uYW1lXCI+VGVzdCBQcm9qZWN0IDE8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3RzX19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvcHJvamVjdF9wbGFjZWhvbGRlci5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cInByb2plY3RzX19pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwicHJvamVjdHNfX25hbWVcIj5UZXN0IFByb2plY3QgMTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdHNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wcm9qZWN0X3BsYWNlaG9sZGVyLnBuZ1wiIGFsdD1cIlwiIGNsYXNzPVwicHJvamVjdHNfX2ltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3M9XCJwcm9qZWN0c19fbmFtZVwiPlRlc3QgUHJvamVjdCAxPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0c19faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3Byb2plY3RfcGxhY2Vob2xkZXIucG5nXCIgYWx0PVwiXCIgY2xhc3M9XCJwcm9qZWN0c19faW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cInByb2plY3RzX19uYW1lXCI+VGVzdCBQcm9qZWN0IDE8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3RzX19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvcHJvamVjdF9wbGFjZWhvbGRlci5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cInByb2plY3RzX19pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwicHJvamVjdHNfX25hbWVcIj5UZXN0IFByb2plY3QgMTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdHNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wcm9qZWN0X3BsYWNlaG9sZGVyLnBuZ1wiIGFsdD1cIlwiIGNsYXNzPVwicHJvamVjdHNfX2ltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3M9XCJwcm9qZWN0c19fbmFtZVwiPlRlc3QgUHJvamVjdCAxPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImFib3V0IGNvbnRlbnRQYXJ0XCI+XG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJhYm91dF9fcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJhYm91dF9fdGl0bGVcIj5BYm91dCBNZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYWJvdXRfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wcm9qZWN0X3BsYWNlaG9sZGVyLnBuZ1wiIGFsdD1cImFuIGltYWdlIG9mIG1lXCIgY2xhc3M9XCJhYm91dF9faW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFib3V0X190ZXh0XCI+TG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1vZGkgY3VtIGhpYyBxdWFzIHZvbHVwdGF0ZW0gZGljdGEsIHBvcnJvIGFsaXF1aWQgaW5jaWR1bnQgb2JjYWVjYXRpIHJlbSBleHBlZGl0YSBxdWFtIHNpbnQgaWxsdW0gbm9uIGxhYm9ydW0gdmVyaXRhdGlzIGR1Y2ltdXMgdm9sdXB0YXR1bSBzZWQgZG9sb3JlLlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc2VxdWF0dXIgaXBzYSwgcXVpcyBhY2N1c2FtdXMgZXN0IGVhcnVtIGFsaXF1YW0sIHZlbCBsYWJvcmlvc2FtIGVvcyBhdXQsIGVzc2UgcXVhc2kgYWNjdXNhbnRpdW0gZWl1cyBwYXJpYXR1ciBmdWdpYXQuIFNpbnQgZGVzZXJ1bnQgZnVnaWF0IHF1aXNxdWFtIHNvbHV0YSwgbmlzaSBtb2xsaXRpYSBvbW5pcyBkb2xvcmUgc2l0IHF1aWJ1c2RhbSBkaWN0YSB2ZWwhPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgIFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250YWN0IGNvbnRlbnRQYXJ0XCI+XG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJjb250YWN0X19mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb250YWN0X19iaWdUaXRsZVwiPkNvbnRhY3Q8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwiY29udGFjdF9fZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29udGFjdF9fdGl0bGVcIj5FbWFpbDo8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJcIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIGNsYXNzPVwiY29udGFjdF9faW5wdXRcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImNvbnRhY3RfX2Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbnRhY3RfX3RpdGxlXCI+TWVzc2FnZTo8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJcIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIGNsYXNzPVwiY29udGFjdF9faW5wdXRcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbnRhY3RfX3Bvc3RcIj5TZW5kITwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9tYWluPlxuICAgIDwvYm9keT5cbiAgICA8L2h0bWw+Ki8iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJ1c2VyIiwic2V0VXNlciIsInBhc3MiLCJzZXRQYXNzIiwic3VibWl0IiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VjdGlvbiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImlkIiwiaGVhZGVyIiwidWwiLCJsaSIsImFydGljbGUiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});