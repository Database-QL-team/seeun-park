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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst categories = [\n    {\n        category: \"다이나믹 프로그래밍\",\n        problem: 6180\n    },\n    {\n        category: \"자료 구조\",\n        problem: 3690\n    },\n    {\n        category: \"구현\",\n        problem: 5351\n    },\n    {\n        category: \"그래프 이론\",\n        problem: 3690\n    },\n    {\n        category: \"그리디 알고리즘\",\n        problem: 3690\n    },\n    {\n        category: \"문자열\",\n        problem: 3690\n    },\n    {\n        category: \"브루트포스 알고리즘\",\n        problem: 3690\n    },\n    {\n        category: \"그래프 탐색\",\n        problem: 3690\n    },\n    {\n        category: \"정렬\",\n        problem: 3690\n    }\n];\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {}, void 0, false, {\n                    fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionTitle, {\n                    children: \"- 분류별 문제 -\"\n                }, void 0, false, {\n                    fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"분류\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"문제\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: categories.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: `/algorithms?category=${item.category}`,\n                                                children: item.category\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: item.problem\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  padding: 2rem;\n  text-align: center;\n  background-image: url(\"/images/background.png\"); /* 배경 이미지 설정 */\n  background-size: cover;\n  background-position: center;\n`;\n_c1 = Container;\nconst SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h2`\n  font-size: 1.5rem;\n  color: green;\n  margin-bottom: 1rem;\n`;\n_c2 = SectionTitle;\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].table`\n  width: 100%;\n  border-collapse: collapse;\n  margin: 0 auto;\n\n  th,\n  td {\n    border: 1px solid #000;\n    padding: 0.5rem;\n    text-align: center;\n  }\n\n  th {\n    background-color: #f8f8f8;\n  }\n\n  tr:nth-child(even) {\n    background-color: #f2f2f2;\n  }\n`;\n_c3 = Table;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"SectionTitle\");\n$RefreshReg$(_c3, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUNWO0FBQ1Y7QUFFN0IsTUFBTUcsYUFBYTtJQUNqQjtRQUFFQyxVQUFVO1FBQWNDLFNBQVM7SUFBSztJQUN4QztRQUFFRCxVQUFVO1FBQVNDLFNBQVM7SUFBSztJQUNuQztRQUFFRCxVQUFVO1FBQU1DLFNBQVM7SUFBSztJQUNoQztRQUFFRCxVQUFVO1FBQVVDLFNBQVM7SUFBSztJQUNwQztRQUFFRCxVQUFVO1FBQVlDLFNBQVM7SUFBSztJQUN0QztRQUFFRCxVQUFVO1FBQU9DLFNBQVM7SUFBSztJQUNqQztRQUFFRCxVQUFVO1FBQWNDLFNBQVM7SUFBSztJQUN4QztRQUFFRCxVQUFVO1FBQVVDLFNBQVM7SUFBSztJQUNwQztRQUFFRCxVQUFVO1FBQU1DLFNBQVM7SUFBSztDQUVqQztBQUVELE1BQU1DLE9BQU87SUFDWCxxQkFDRSw4REFBQ04saUVBQU1BO2tCQUNMLDRFQUFDTzs7OEJBQ0MsOERBQUNBOzs7Ozs4QkFDRCw4REFBQ0M7OEJBQWE7Ozs7Ozs4QkFDZCw4REFBQ0M7O3NDQUNDLDhEQUFDQztzQ0FDQyw0RUFBQ0M7O2tEQUNDLDhEQUFDQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR1IsOERBQUNDO3NDQUNFVixXQUFXVyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3JCLDhEQUFDTDs7c0RBQ0MsOERBQUNNO3NEQUNDLDRFQUFDZixrREFBSUE7Z0RBQUNnQixNQUFNLENBQUMscUJBQXFCLEVBQUVILEtBQUtYLFFBQVEsQ0FBQyxDQUFDOzBEQUNoRFcsS0FBS1gsUUFBUTs7Ozs7Ozs7Ozs7c0RBR2xCLDhEQUFDYTtzREFBSUYsS0FBS1YsT0FBTzs7Ozs7OzttQ0FOVlc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWN2QjtLQTdCTVY7QUErQk4sK0RBQWVBLElBQUlBLEVBQUM7QUFFcEIsTUFBTUMsWUFBWU4sNkRBQVUsQ0FBQzs7Ozs7O0FBTTdCLENBQUM7TUFOS007QUFRTixNQUFNQyxlQUFlUCw0REFBUyxDQUFDOzs7O0FBSS9CLENBQUM7TUFKS087QUFNTixNQUFNQyxRQUFRUiwrREFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUIzQixDQUFDO01BbkJLUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAgeyBjYXRlZ29yeTogXCLri6TsnbTrgpjrr7kg7ZSE66Gc6re4656Y67CNXCIsIHByb2JsZW06IDYxODAgfSxcbiAgeyBjYXRlZ29yeTogXCLsnpDro4wg6rWs7KGwXCIsIHByb2JsZW06IDM2OTAgfSxcbiAgeyBjYXRlZ29yeTogXCLqtaztmIRcIiwgcHJvYmxlbTogNTM1MSB9LFxuICB7IGNhdGVnb3J5OiBcIuq3uOuemO2UhCDsnbTroaBcIiwgcHJvYmxlbTogMzY5MCB9LFxuICB7IGNhdGVnb3J5OiBcIuq3uOumrOuUlCDslYzqs6DrpqzspphcIiwgcHJvYmxlbTogMzY5MCB9LFxuICB7IGNhdGVnb3J5OiBcIuusuOyekOyXtFwiLCBwcm9ibGVtOiAzNjkwIH0sXG4gIHsgY2F0ZWdvcnk6IFwi67iM66Oo7Yq47Y+s7IqkIOyVjOqzoOumrOymmFwiLCBwcm9ibGVtOiAzNjkwIH0sXG4gIHsgY2F0ZWdvcnk6IFwi6re4656Y7ZSEIO2DkOyDiVwiLCBwcm9ibGVtOiAzNjkwIH0sXG4gIHsgY2F0ZWdvcnk6IFwi7KCV66CsXCIsIHByb2JsZW06IDM2OTAgfSxcbiAgLy8gQWRkIG1vcmUgY2F0ZWdvcmllcyBhbmQgcHJvYmxlbXMgYXMgbmVlZGVkXG5dO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Q29udGFpbmVyPjwvQ29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvblRpdGxlPi0g67aE66WY67OEIOusuOygnCAtPC9TZWN0aW9uVGl0bGU+XG4gICAgICAgIDxUYWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD7rtoTrpZg8L3RoPlxuICAgICAgICAgICAgICA8dGg+66y47KCcPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FsZ29yaXRobXM/Y2F0ZWdvcnk9JHtpdGVtLmNhdGVnb3J5fWB9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5wcm9ibGVtfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIik7IC8qIOuwsOqyvSDsnbTrr7jsp4Ag7ISk7KCVICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiBncmVlbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmA7XG5cbmNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgdGgsXG4gIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgfVxuXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJzdHlsZWQiLCJMaW5rIiwiY2F0ZWdvcmllcyIsImNhdGVnb3J5IiwicHJvYmxlbSIsIkhvbWUiLCJDb250YWluZXIiLCJTZWN0aW9uVGl0bGUiLCJUYWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiaXRlbSIsImluZGV4IiwidGQiLCJocmVmIiwiZGl2IiwiaDIiLCJ0YWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});