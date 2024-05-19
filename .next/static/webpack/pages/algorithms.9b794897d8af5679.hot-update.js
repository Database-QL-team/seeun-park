"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/algorithms",{

/***/ "./pages/algorithms.js":
/*!*****************************!*\
  !*** ./pages/algorithms.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst algorithms = {\n    \"다이나믹 프로그래밍\": [\n        {\n            id: 1,\n            title: \"설탕 배달\",\n            number: 2839,\n            solvedCount: 94155,\n            tier: 6180,\n            category: \"다이나믹 프로그래밍\"\n        }\n    ],\n    \"자료 구조\": [\n        {\n            id: 1,\n            title: \"문제 1\",\n            number: 1001,\n            solvedCount: 12345,\n            tier: 3000,\n            category: \"자료 구조\"\n        }\n    ]\n};\nconst Algorithm = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { category } = router.query;\n    const algorithmList = algorithms[category] || [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                    children: category\n                }, void 0, false, {\n                    fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"문제 제목\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"문제 번호\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"푼 사람 수\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"문제 티어\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"문제 알고리즘 분류\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: algorithmList.map((algorithm)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: algorithm.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: `https://www.acmicpc.net/problem/${algorithm.number}`,\n                                                target: \"_blank\",\n                                                rel: \"noopener noreferrer\",\n                                                children: algorithm.number\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: algorithm.solvedCount\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: algorithm.tier\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: algorithm.category\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, algorithm.id, true, {\n                                    fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/pages/algorithms.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Algorithm, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Algorithm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Algorithm);\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  padding: 2rem;\n  text-align: center;\n  background-size: cover;\n  background-image: url(\"/images/background.png\");\n  background-position: center;\n  margin-top: 75px; /* 헤더 높이만큼 마진 추가 */\n`;\n_c1 = Container;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1`\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n`;\n_c2 = Title;\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].table`\n  width: 100%;\n  border-collapse: collapse;\n  margin: 0 auto;\n\n  th,\n  td {\n    border: 1px solid #000;\n    padding: 0.5rem;\n    text-align: center;\n  }\n\n  th {\n    background-color: #f8f8f8;\n  }\n\n  tr:nth-child(even) {\n    background-color: #f2f2f2;\n  }\n\n  a {\n    color: blue;\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n`;\n_c3 = Table;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Algorithm\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"Title\");\n$RefreshReg$(_c3, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hbGdvcml0aG1zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUNTO0FBQ1Y7QUFFdkMsTUFBTUcsYUFBYTtJQUNqQixjQUFjO1FBQ1o7WUFDRUMsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsYUFBYTtZQUNiQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtLQUVEO0lBQ0QsU0FBUztRQUNQO1lBQ0VMLElBQUk7WUFDSkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLGFBQWE7WUFDYkMsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7S0FFRDtBQUVIO0FBRUEsTUFBTUMsWUFBWTs7SUFDaEIsTUFBTUMsU0FBU1gsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsUUFBUSxFQUFFLEdBQUdFLE9BQU9DLEtBQUs7SUFDakMsTUFBTUMsZ0JBQWdCVixVQUFVLENBQUNNLFNBQVMsSUFBSSxFQUFFO0lBRWhELHFCQUNFLDhEQUFDUixpRUFBTUE7a0JBQ0wsNEVBQUNhOzs4QkFDQyw4REFBQ0M7OEJBQU9OOzs7Ozs7OEJBQ1IsOERBQUNPOztzQ0FDQyw4REFBQ0M7c0NBQ0MsNEVBQUNDOztrREFDQyw4REFBQ0M7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0E7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0E7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0E7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0E7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdSLDhEQUFDQztzQ0FDRVAsY0FBY1EsR0FBRyxDQUFDLENBQUNDLDBCQUNsQiw4REFBQ0o7O3NEQUNDLDhEQUFDSztzREFBSUQsVUFBVWpCLEtBQUs7Ozs7OztzREFDcEIsOERBQUNrQjtzREFDQyw0RUFBQ0M7Z0RBQ0NDLE1BQU0sQ0FBQyxnQ0FBZ0MsRUFBRUgsVUFBVWhCLE1BQU0sQ0FBQyxDQUFDO2dEQUMzRG9CLFFBQU87Z0RBQ1BDLEtBQUk7MERBRUhMLFVBQVVoQixNQUFNOzs7Ozs7Ozs7OztzREFHckIsOERBQUNpQjtzREFBSUQsVUFBVWYsV0FBVzs7Ozs7O3NEQUMxQiw4REFBQ2dCO3NEQUFJRCxVQUFVZCxJQUFJOzs7Ozs7c0RBQ25CLDhEQUFDZTtzREFBSUQsVUFBVWIsUUFBUTs7Ozs7OzttQ0FiaEJhLFVBQVVsQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQm5DO0dBMUNNTTs7UUFDV1Ysa0RBQVNBOzs7S0FEcEJVO0FBNENOLCtEQUFlQSxTQUFTQSxFQUFDO0FBRXpCLE1BQU1JLFlBQVlaLDZEQUFVLENBQUM7Ozs7Ozs7QUFPN0IsQ0FBQztNQVBLWTtBQVNOLE1BQU1DLFFBQVFiLDREQUFTLENBQUM7OztBQUd4QixDQUFDO01BSEthO0FBS04sTUFBTUMsUUFBUWQsK0RBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCM0IsQ0FBQztNQTVCS2MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWxnb3JpdGhtcy5qcz8wNzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBhbGdvcml0aG1zID0ge1xuICBcIuuLpOydtOuCmOuvuSDtlITroZzqt7jrnpjrsI1cIjogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0bGU6IFwi7ISk7YOVIOuwsOuLrFwiLFxuICAgICAgbnVtYmVyOiAyODM5LFxuICAgICAgc29sdmVkQ291bnQ6IDk0MTU1LFxuICAgICAgdGllcjogNjE4MCxcbiAgICAgIGNhdGVnb3J5OiBcIuuLpOydtOuCmOuvuSDtlITroZzqt7jrnpjrsI1cIixcbiAgICB9LFxuICAgIC8vIOuNlCDrp47snYAg66y47KCc66W8IOy2lOqwgO2VmOyEuOyalFxuICBdLFxuICBcIuyekOujjCDqtazsobBcIjogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0bGU6IFwi66y47KCcIDFcIixcbiAgICAgIG51bWJlcjogMTAwMSxcbiAgICAgIHNvbHZlZENvdW50OiAxMjM0NSxcbiAgICAgIHRpZXI6IDMwMDAsXG4gICAgICBjYXRlZ29yeTogXCLsnpDro4wg6rWs7KGwXCIsXG4gICAgfSxcbiAgICAvLyDrjZQg66eO7J2AIOusuOygnOulvCDstpTqsIDtlZjshLjsmpRcbiAgXSxcbiAgLy8g64uk66W4IOy5tO2FjOqzoOumrOulvCDstpTqsIDtlZjshLjsmpRcbn07XG5cbmNvbnN0IEFsZ29yaXRobSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgYWxnb3JpdGhtTGlzdCA9IGFsZ29yaXRobXNbY2F0ZWdvcnldIHx8IFtdO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxUaXRsZT57Y2F0ZWdvcnl9PC9UaXRsZT5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPuusuOygnCDsoJzrqqk8L3RoPlxuICAgICAgICAgICAgICA8dGg+66y47KCcIOuyiO2YuDwvdGg+XG4gICAgICAgICAgICAgIDx0aD7tkbwg7IKs656MIOyImDwvdGg+XG4gICAgICAgICAgICAgIDx0aD7rrLjsoJwg7Yuw7Ja0PC90aD5cbiAgICAgICAgICAgICAgPHRoPuusuOygnCDslYzqs6Drpqzsppgg67aE66WYPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7YWxnb3JpdGhtTGlzdC5tYXAoKGFsZ29yaXRobSkgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXthbGdvcml0aG0uaWR9PlxuICAgICAgICAgICAgICAgIDx0ZD57YWxnb3JpdGhtLnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LmFjbWljcGMubmV0L3Byb2JsZW0vJHthbGdvcml0aG0ubnVtYmVyfWB9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWxnb3JpdGhtLm51bWJlcn1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YWxnb3JpdGhtLnNvbHZlZENvdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnthbGdvcml0aG0udGllcn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YWxnb3JpdGhtLmNhdGVnb3J5fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGdvcml0aG07XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA3NXB4OyAvKiDtl6TrjZQg64aS7J2066eM7YG8IOuniOynhCDstpTqsIAgKi9cbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmA7XG5cbmNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgdGgsXG4gIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgfVxuXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiBibHVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkxheW91dCIsInN0eWxlZCIsImFsZ29yaXRobXMiLCJpZCIsInRpdGxlIiwibnVtYmVyIiwic29sdmVkQ291bnQiLCJ0aWVyIiwiY2F0ZWdvcnkiLCJBbGdvcml0aG0iLCJyb3V0ZXIiLCJxdWVyeSIsImFsZ29yaXRobUxpc3QiLCJDb250YWluZXIiLCJUaXRsZSIsIlRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJhbGdvcml0aG0iLCJ0ZCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiZGl2IiwiaDEiLCJ0YWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/algorithms.js\n"));

/***/ })

});