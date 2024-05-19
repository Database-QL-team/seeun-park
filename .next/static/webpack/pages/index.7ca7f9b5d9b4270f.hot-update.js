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

/***/ "./components/Layout/Header.js":
/*!*************************************!*\
  !*** ./components/Layout/Header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_flex_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/flex-box */ \"./components/ui/flex-box.js\");\n\n\n\n\nconst routes = [\n    {\n        title: \"분류별 문제\",\n        href: \"/\"\n    },\n    {\n        title: \"난이도별 문제\",\n        href: \"/difficulty-problems\"\n    },\n    {\n        title: \"함께 풀어요\",\n        href: \"/solve-together\"\n    },\n    {\n        title: \"이화랭킹\",\n        href: \"/ewha-ranking\"\n    }\n];\nconst zoomInOnHover = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)`\n  transition: transform 0.4s;\n\n  &:hover {\n    transform: scale(1.14);\n  }\n`;\nconst LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  ${zoomInOnHover}\n  width: 42px;\n  height: 28px;\n\n  cursor: pointer;\n\n  z-index: 1001;\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n`;\n_c = LogoWrapper;\nconst Header = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(({ className })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_flex_box__WEBPACK_IMPORTED_MODULE_2__.FlexBox, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoWrapper, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/images/QL_logo.png\",\n                            alt: \"logo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/components/Layout/Header.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/components/Layout/Header.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/components/Layout/Header.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/components/Layout/Header.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flexGrow: \"1\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/components/Layout/Header.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            routes.map(({ title, href })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: href,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DesktopTopbarItem, {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/components/Layout/Header.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                }, title, false, {\n                    fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/components/Layout/Header.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lenovo/Documents/ecc/Qup-Frontend-main/q_up-react/components/Layout/Header.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n})`\n  backdrop-filter: blur(1.5rem);\n  display: flex;\n  align-items: center;\n\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  max-width: 1080px; /* 최대 너비를 1080px로 설정 */\n  height: 75px;\n  ${(props)=>props.theme.main.frame.padding};\n\n  @media (max-width: 700px) {\n    padding: 0 8vw;\n  }\n`;\nconst DesktopTopbarItem = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: -0.02rem;\n\n  padding-left: 2.4rem;\n\n  cursor: pointer;\n\n  &:last-child {\n    padding-right: 0;\n  }\n\n  &:hover {\n    font-weight: 500;\n  }\n\n  @media ${(props)=>props.theme.device.sm} {\n    display: none;\n  }\n`;\n_c1 = DesktopTopbarItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c, _c1;\n$RefreshReg$(_c, \"LogoWrapper\");\n$RefreshReg$(_c1, \"DesktopTopbarItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0Q7QUFDbkI7QUFDWTtBQUV6QyxNQUFNSSxTQUFTO0lBQ2I7UUFBRUMsT0FBTztRQUFVQyxNQUFNO0lBQUk7SUFDN0I7UUFBRUQsT0FBTztRQUFXQyxNQUFNO0lBQXVCO0lBQ2pEO1FBQUVELE9BQU87UUFBVUMsTUFBTTtJQUFrQjtJQUMzQztRQUFFRCxPQUFPO1FBQVFDLE1BQU07SUFBZ0I7Q0FDeEM7QUFFRCxNQUFNQyxnQkFBZ0JOLHNEQUFHLENBQUM7Ozs7OztBQU0xQixDQUFDO0FBRUQsTUFBTU8sY0FBY1IsNkRBQVUsQ0FBQztFQUM3QixFQUFFTyxjQUFjOzs7Ozs7Ozs7Ozs7QUFZbEIsQ0FBQztLQWJLQztBQWVOLE1BQU1FLFNBQVNWLDZEQUFNQSxDQUFDLENBQUMsRUFBRVcsU0FBUyxFQUFFO0lBQ2xDLHFCQUNFLDhEQUFDQztRQUFPRCxXQUFXQTs7MEJBQ2pCLDhEQUFDVCxrREFBSUE7Z0JBQUNJLE1BQUs7MEJBQ1QsNEVBQUNILGlEQUFPQTs4QkFDTiw0RUFBQ0s7a0NBQ0MsNEVBQUNLOzRCQUFJQyxLQUFJOzRCQUFzQkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl6Qyw4REFBQ047Z0JBQUlPLE9BQU87b0JBQUVDLFVBQVU7Z0JBQUk7Ozs7OztZQUMzQmIsT0FBT2MsR0FBRyxDQUFDLENBQUMsRUFBRWIsS0FBSyxFQUFFQyxJQUFJLEVBQUUsaUJBQzFCLDhEQUFDSixrREFBSUE7b0JBQWFJLE1BQU1BOzhCQUN0Qiw0RUFBQ2E7a0NBQW1CZDs7Ozs7O21CQURYQTs7Ozs7Ozs7Ozs7QUFNbkIsRUFBRSxDQUFDOzs7Ozs7Ozs7O0VBVUQsRUFBRSxDQUFDZSxRQUFVQSxNQUFNQyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLENBQUM7Ozs7O0FBSzlDLENBQUM7QUFFRCxNQUFNTCxvQkFBb0JuQiw2REFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztTQWlCNUIsRUFBRSxDQUFDb0IsUUFBVUEsTUFBTUMsS0FBSyxDQUFDSSxNQUFNLENBQUNDLEVBQUUsQ0FBQzs7O0FBRzVDLENBQUM7TUFwQktQO0FBc0JOLCtEQUFlVCxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci5qcz9lMmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBGbGV4Qm94IH0gZnJvbSBcIi4uL3VpL2ZsZXgtYm94XCI7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAgeyB0aXRsZTogXCLrtoTrpZjrs4Qg66y47KCcXCIsIGhyZWY6IFwiL1wiIH0sIC8vIOuplOyduCDtjpjsnbTsp4DroZwg6rK966GcIOyEpOyglVxuICB7IHRpdGxlOiBcIuuCnOydtOuPhOuzhCDrrLjsoJxcIiwgaHJlZjogXCIvZGlmZmljdWx0eS1wcm9ibGVtc1wiIH0sXG4gIHsgdGl0bGU6IFwi7ZWo6ruYIO2SgOyWtOyalFwiLCBocmVmOiBcIi9zb2x2ZS10b2dldGhlclwiIH0sXG4gIHsgdGl0bGU6IFwi7J207ZmU656t7YK5XCIsIGhyZWY6IFwiL2V3aGEtcmFua2luZ1wiIH0sXG5dO1xuXG5jb25zdCB6b29tSW5PbkhvdmVyID0gY3NzYFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTQpO1xuICB9XG5gO1xuXG5jb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICR7em9vbUluT25Ib3Zlcn1cbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogMjhweDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgei1pbmRleDogMTAwMTtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkKCh7IGNsYXNzTmFtZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8RmxleEJveD5cbiAgICAgICAgICA8TG9nb1dyYXBwZXI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvUUxfbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICA8L0xvZ29XcmFwcGVyPlxuICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhHcm93OiBcIjFcIiB9fSAvPlxuICAgICAge3JvdXRlcy5tYXAoKHsgdGl0bGUsIGhyZWYgfSkgPT4gKFxuICAgICAgICA8TGluayBrZXk9e3RpdGxlfSBocmVmPXtocmVmfT5cbiAgICAgICAgICA8RGVza3RvcFRvcGJhckl0ZW0+e3RpdGxlfTwvRGVza3RvcFRvcGJhckl0ZW0+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgIDwvaGVhZGVyPlxuICApO1xufSlgXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxLjVyZW0pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTA4MHB4OyAvKiDstZzrjIAg64SI67mE66W8IDEwODBweOuhnCDshKTsoJUgKi9cbiAgaGVpZ2h0OiA3NXB4O1xuICAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWFpbi5mcmFtZS5wYWRkaW5nfTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBwYWRkaW5nOiAwIDh2dztcbiAgfVxuYDtcblxuY29uc3QgRGVza3RvcFRvcGJhckl0ZW0gPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMnJlbTtcblxuICBwYWRkaW5nLWxlZnQ6IDIuNHJlbTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZGV2aWNlLnNtfSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsIkxpbmsiLCJGbGV4Qm94Iiwicm91dGVzIiwidGl0bGUiLCJocmVmIiwiem9vbUluT25Ib3ZlciIsIkxvZ29XcmFwcGVyIiwiZGl2IiwiSGVhZGVyIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaW1nIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJmbGV4R3JvdyIsIm1hcCIsIkRlc2t0b3BUb3BiYXJJdGVtIiwicHJvcHMiLCJ0aGVtZSIsIm1haW4iLCJmcmFtZSIsInBhZGRpbmciLCJkZXZpY2UiLCJzbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/Header.js\n"));

/***/ })

});