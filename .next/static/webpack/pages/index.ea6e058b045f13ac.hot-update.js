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

/***/ "./components/Cookie/index.js":
/*!************************************!*\
  !*** ./components/Cookie/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border: 2px solid black;\\n  z-index: 9999;\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  padding: 15px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: white;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 14px;\\n  margin: 0;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: transparent;\\n  color: black;\\n  padding: 10px 15px;\\n  border: 2px solid black;\\n  font-size: 14px;\\n  cursor: pointer;\\n  transition: background-color 0.3s;\\n\\n  &:hover {\\n    background-color: black;\\n    color: white;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CookieWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"Cookie__CookieWrapper\",\n    componentId: \"sc-abd1ad43-0\"\n})(_templateObject());\n_c = CookieWrapper;\nconst CookieMessage = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].p.withConfig({\n    displayName: \"Cookie__CookieMessage\",\n    componentId: \"sc-abd1ad43-1\"\n})(_templateObject1());\n_c1 = CookieMessage;\nconst CookieButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].button.withConfig({\n    displayName: \"Cookie__CookieButton\",\n    componentId: \"sc-abd1ad43-2\"\n})(_templateObject2());\n_c2 = CookieButton;\nconst CookieComponent = ()=>{\n    _s();\n    const [cookieAccepted, setCookieAccepted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)( true ? localStorage.getItem(\"cookieAccepted\") : 0);\n    const handleAccept = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"cookieAccepted\", true, {\n            expires: 7\n        });\n        if (true) {\n            localStorage.setItem(\"cookieAccepted\", true);\n        }\n        setCookieAccepted(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: !cookieAccepted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CookieWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CookieMessage, {\n                    children: \"Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Durch die Nutzung dieser Website stimmen Sie der Verwendung von Cookies zu. Weitere Informationen finden Sie in unserer Datenschutzerkl\\xe4rung.\"\n                }, void 0, false, {\n                    fileName: \"/Users/diren/rekollektiv/components/Cookie/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FooterContent, {}, void 0, false, {\n                    fileName: \"/Users/diren/rekollektiv/components/Cookie/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CookieButton, {\n                    onClick: handleAccept,\n                    children: \"Akzeptieren\"\n                }, void 0, false, {\n                    fileName: \"/Users/diren/rekollektiv/components/Cookie/index.js\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/diren/rekollektiv/components/Cookie/index.js\",\n            lineNumber: 58,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(CookieComponent, \"LjLWk8ZYhwPAq+y3pcN1j3/ZHX8=\");\n_c3 = CookieComponent;\nconst NoSSRCookieComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c4 = ()=>Promise.resolve(CookieComponent), {\n    ssr: false\n});\n_c5 = NoSSRCookieComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoSSRCookieComponent);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"CookieWrapper\");\n$RefreshReg$(_c1, \"CookieMessage\");\n$RefreshReg$(_c2, \"CookieButton\");\n$RefreshReg$(_c3, \"CookieComponent\");\n$RefreshReg$(_c4, \"NoSSRCookieComponent$dynamic\");\n$RefreshReg$(_c5, \"NoSSRCookieComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvb2tpZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNSO0FBQ087QUFDSjtBQUVuQyxNQUFNSyxnQkFBZ0JGLHdFQUFVOzs7O0tBQTFCRTtBQWNOLE1BQU1FLGdCQUFnQkosc0VBQVE7Ozs7TUFBeEJJO0FBS04sTUFBTUUsZUFBZU4sMkVBQWE7Ozs7TUFBNUJNO0FBZU4sTUFBTUUsa0JBQWtCLElBQU07O0lBQzVCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1osK0NBQVFBLENBQ2xELEtBQTZCLEdBQ3pCYSxhQUFhQyxPQUFPLENBQUMsb0JBQ3JCLENBQUs7SUFHWCxNQUFNQyxlQUFlLElBQU07UUFDekJkLHFEQUFXLENBQUMsa0JBQWtCLElBQUksRUFBRTtZQUFFZ0IsU0FBUztRQUFFO1FBQ2pELElBQUksSUFBNkIsRUFBRTtZQUNqQ0osYUFBYUssT0FBTyxDQUFDLGtCQUFrQixJQUFJO1FBQzdDLENBQUM7UUFDRE4sa0JBQWtCLElBQUk7SUFDeEI7SUFFQSxxQkFDRTtrQkFDRyxDQUFDRCxnQ0FDQSw4REFBQ1A7OzhCQUNDLDhEQUFDRTs4QkFBYzs7Ozs7OzhCQU1mLDhEQUFDYTs7Ozs7OEJBQ0QsOERBQUNYO29CQUFhWSxTQUFTTDs4QkFBYzs7Ozs7Ozs7Ozs7OztBQUsvQztHQS9CTUw7TUFBQUE7QUFpQ04sTUFBTVcsdUJBQXVCbEIsbURBQU9BLE9BQUMsSUFBTW1CLFFBQVFDLE9BQU8sQ0FBQ2Isa0JBQWtCO0lBQzNFYyxLQUFLLEtBQUs7QUFDWjs7QUFFQSwrREFBZUgsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29va2llL2luZGV4LmpzPzkwMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG5jb25zdCBDb29raWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IENvb2tpZU1lc3NhZ2UgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBDb29raWVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuYDtcblxuY29uc3QgQ29va2llQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbY29va2llQWNjZXB0ZWQsIHNldENvb2tpZUFjY2VwdGVkXSA9IHVzZVN0YXRlKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWVBY2NlcHRlZFwiKVxuICAgICAgOiBmYWxzZVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUFjY2VwdCA9ICgpID0+IHtcbiAgICBDb29raWVzLnNldChcImNvb2tpZUFjY2VwdGVkXCIsIHRydWUsIHsgZXhwaXJlczogNyB9KTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWVBY2NlcHRlZFwiLCB0cnVlKTtcbiAgICB9XG4gICAgc2V0Q29va2llQWNjZXB0ZWQodHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyFjb29raWVBY2NlcHRlZCAmJiAoXG4gICAgICAgIDxDb29raWVXcmFwcGVyPlxuICAgICAgICAgIDxDb29raWVNZXNzYWdlPlxuICAgICAgICAgICAgRGllc2UgV2Vic2l0ZSB2ZXJ3ZW5kZXQgQ29va2llcywgdW0gSWhyZSBFcmZhaHJ1bmcgenUgdmVyYmVzc2Vybi5cbiAgICAgICAgICAgIER1cmNoIGRpZSBOdXR6dW5nIGRpZXNlciBXZWJzaXRlIHN0aW1tZW4gU2llIGRlciBWZXJ3ZW5kdW5nIHZvblxuICAgICAgICAgICAgQ29va2llcyB6dS4gV2VpdGVyZSBJbmZvcm1hdGlvbmVuIGZpbmRlbiBTaWUgaW4gdW5zZXJlclxuICAgICAgICAgICAgRGF0ZW5zY2h1dHplcmtsw6RydW5nLlxuICAgICAgICAgIDwvQ29va2llTWVzc2FnZT5cbiAgICAgICAgICA8Rm9vdGVyQ29udGVudCAvPlxuICAgICAgICAgIDxDb29raWVCdXR0b24gb25DbGljaz17aGFuZGxlQWNjZXB0fT5Ba3plcHRpZXJlbjwvQ29va2llQnV0dG9uPlxuICAgICAgICA8L0Nvb2tpZVdyYXBwZXI+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTm9TU1JDb29raWVDb21wb25lbnQgPSBkeW5hbWljKCgpID0+IFByb21pc2UucmVzb2x2ZShDb29raWVDb21wb25lbnQpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTm9TU1JDb29raWVDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvb2tpZXMiLCJzdHlsZWQiLCJkeW5hbWljIiwiQ29va2llV3JhcHBlciIsImRpdiIsIkNvb2tpZU1lc3NhZ2UiLCJwIiwiQ29va2llQnV0dG9uIiwiYnV0dG9uIiwiQ29va2llQ29tcG9uZW50IiwiY29va2llQWNjZXB0ZWQiLCJzZXRDb29raWVBY2NlcHRlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVBY2NlcHQiLCJzZXQiLCJleHBpcmVzIiwic2V0SXRlbSIsIkZvb3RlckNvbnRlbnQiLCJvbkNsaWNrIiwiTm9TU1JDb29raWVDb21wb25lbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cookie/index.js\n"));

/***/ })

});