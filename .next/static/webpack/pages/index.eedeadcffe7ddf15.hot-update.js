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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  padding: 15px;\\n  background-color: #fff;\\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 14px;\\n  margin: 0;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: #555;\\n  color: #fff;\\n  padding: 10px 15px;\\n  border: none;\\n  border-radius: 5px;\\n  font-size: 14px;\\n  cursor: pointer;\\n  transition: background-color 0.3s;\\n\\n  &:hover {\\n    background-color: #333;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nconst CookieWrapper = styled.div(_templateObject());\nconst CookieMessage = styled.p(_templateObject1());\nconst CookieButton = styled.button(_templateObject2());\nconst CookieComponent = ()=>{\n    _s();\n    const [cookieAccepted, setCookieAccepted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"cookieAccepted\"));\n    const handleAccept = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"cookieAccepted\", true, {\n            expires: 7\n        });\n        setCookieAccepted(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            !cookieAccepted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diren/rekollektiv/components/Cookie/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleAccept,\n                        children: \"Akzeptieren\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diren/rekollektiv/components/Cookie/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/diren/rekollektiv/components/Cookie/index.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined),\n            cookieAccepted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Vielen Dank, dass Sie der Verwendung von Cookies zugestimmt haben.\"\n            }, void 0, false, {\n                fileName: \"/Users/diren/rekollektiv/components/Cookie/index.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diren/rekollektiv/components/Cookie/index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CookieComponent, \"X/ByOjfTSHNvp2EDqcs4XpbEhqE=\");\n_c = CookieComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CookieComponent);\nvar _c;\n$RefreshReg$(_c, \"CookieComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvb2tpZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNSO0FBRWhDLE1BQU1HLGdCQUFnQkMsT0FBT0MsR0FBRztBQWFoQyxNQUFNQyxnQkFBZ0JGLE9BQU9HLENBQUM7QUFLOUIsTUFBTUMsZUFBZUosT0FBT0ssTUFBTTtBQWVsQyxNQUFNQyxrQkFBa0IsSUFBTTs7SUFDNUIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHWCwrQ0FBUUEsQ0FDbERDLHFEQUFXLENBQUM7SUFHZCxNQUFNWSxlQUFlLElBQU07UUFDekJaLHFEQUFXLENBQUMsa0JBQWtCLElBQUksRUFBRTtZQUFFYyxTQUFTO1FBQUU7UUFDakRKLGtCQUFrQixJQUFJO0lBQ3hCO0lBRUEscUJBQ0UsOERBQUNQOztZQUNFLENBQUNNLGdDQUNBLDhEQUFDTjs7a0NBQ0MsOERBQUNFO2tDQUFFOzs7Ozs7a0NBR0gsOERBQUNFO3dCQUFPUSxTQUFTSDtrQ0FBYzs7Ozs7Ozs7Ozs7O1lBR2xDSCxnQ0FDQyw4REFBQ0o7MEJBQUU7Ozs7Ozs7Ozs7OztBQU1YO0dBM0JNRztLQUFBQTtBQTZCTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nvb2tpZS9pbmRleC5qcz85MDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5jb25zdCBDb29raWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQ29va2llTWVzc2FnZSA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IENvb2tpZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIH1cbmA7XG5cbmNvbnN0IENvb2tpZUNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW2Nvb2tpZUFjY2VwdGVkLCBzZXRDb29raWVBY2NlcHRlZF0gPSB1c2VTdGF0ZShcbiAgICBDb29raWVzLmdldChcImNvb2tpZUFjY2VwdGVkXCIpXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQWNjZXB0ID0gKCkgPT4ge1xuICAgIENvb2tpZXMuc2V0KFwiY29va2llQWNjZXB0ZWRcIiwgdHJ1ZSwgeyBleHBpcmVzOiA3IH0pO1xuICAgIHNldENvb2tpZUFjY2VwdGVkKHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHshY29va2llQWNjZXB0ZWQgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRGllc2UgV2Vic2l0ZSB2ZXJ3ZW5kZXQgQ29va2llcywgdW0gSWhyZSBFcmZhaHJ1bmcgenUgdmVyYmVzc2Vybi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBY2NlcHR9PkFremVwdGllcmVuPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtjb29raWVBY2NlcHRlZCAmJiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIFZpZWxlbiBEYW5rLCBkYXNzIFNpZSBkZXIgVmVyd2VuZHVuZyB2b24gQ29va2llcyB6dWdlc3RpbW10IGhhYmVuLlxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29va2llQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb29raWVzIiwiQ29va2llV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkNvb2tpZU1lc3NhZ2UiLCJwIiwiQ29va2llQnV0dG9uIiwiYnV0dG9uIiwiQ29va2llQ29tcG9uZW50IiwiY29va2llQWNjZXB0ZWQiLCJzZXRDb29raWVBY2NlcHRlZCIsImdldCIsImhhbmRsZUFjY2VwdCIsInNldCIsImV4cGlyZXMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cookie/index.js\n"));

/***/ })

});