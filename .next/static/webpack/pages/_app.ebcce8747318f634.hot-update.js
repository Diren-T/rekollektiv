"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Footer/DatenschutzModal.js":
/*!***********************************************!*\
  !*** ./components/Footer/DatenschutzModal.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  0% {\\n    transform: scale(0.9);\\n  }\\n  100% {\\n    transform: scale(1);\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: \",\n        \";\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  z-index: 444;\\n  align-items: center;\\n  justify-content: center;\\n  animation: \",\n        \" 0.3s ease-out;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 50%;\\n  max-width: 600px;\\n  background-color: white;\\n  border: 1px solid black;\\n  padding: 20px;\\n  position: relative;\\n  margin: 10px;\\n  overflow-y: auto;\\n  max-height: 80%;\\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\\n  animation: \",\n        \" 0.3s ease-out;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: fixed;\\n  z-index: 445;\\n  top: 12%;\\n  right: 31%;\\n  background-color: transparent;\\n  border: none;\\n  font-size: 30px;\\n  cursor: pointer;\\n  color: #333;\\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nconst fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject());\nconst scaleIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject1());\nconst ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"DatenschutzModal__ModalWrapper\",\n    componentId: \"sc-467b8832-0\"\n})(_templateObject2(), (props)=>props.show ? \"flex\" : \"none\", fadeIn);\n_c = ModalWrapper;\nconst ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"DatenschutzModal__ModalContent\",\n    componentId: \"sc-467b8832-1\"\n})(_templateObject3(), scaleIn);\n_c1 = ModalContent;\nconst CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n    displayName: \"DatenschutzModal__CloseButton\",\n    componentId: \"sc-467b8832-2\"\n})(_templateObject4());\n_c2 = CloseButton;\nfunction DatenschutzModal(param) {\n    let { show , onClose  } = param;\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsMounted(true);\n        return ()=>setIsMounted(false);\n    }, []);\n    if (!isMounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ModalWrapper, {\n        show: show,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ModalContent, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseButton, {\n                    onClick: onClose,\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: \"Datenschutzerkl\\xe4rung\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Wir freuen uns \\xfcber Ihren Besuch auf unserer Website. Der Schutz Ihrer Privatsph\\xe4re ist uns sehr wichtig. In dieser Datenschutzerkl\\xe4rung informieren wir Sie dar\\xfcber, welche Daten wir von Ihnen erheben und wie wir diese Daten verwenden.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Personenbezogene Daten\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Wir erheben und speichern keine personenbezogenen Daten von Ihnen. Wir setzen keine Cookies ein und nutzen keine Tracking-Tools.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Server-Logfiles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Unser Webserver erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch an uns \\xfcbermittelt. Diese sind:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: \"Browsertyp/ -version\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: \"verwendetes Betriebssystem\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: \"Referrer URL (die zuvor besuchte Seite)\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: \"Hostname des zugreifenden Rechners (IP-Adresse)\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: \"Uhrzeit der Serveranfrage\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this),\n                                \"Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenf\\xfchrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Datensicherheit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Wir treffen angemessene technische und organisatorische Ma\\xdfnahmen, um Ihre Daten gegen unbeabsichtigte oder unrechtm\\xe4\\xdfige L\\xf6schung, Ver\\xe4nderung oder gegen Verlust und gegen unbefugte Weitergabe oder unbefugten Zugriff zu sch\\xfctzen.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"\\xc4nderungen dieser Datenschutzerkl\\xe4rung\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Wir behalten uns das Recht vor, diese Datenschutzerkl\\xe4rung jederzeit zu \\xe4ndern. Bitte besuchen Sie diese Seite regelm\\xe4\\xdfig, um sich \\xfcber \\xc4nderungen zu informieren.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Kontakt\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Wenn Sie Fragen zu dieser Datenschutzerkl\\xe4rung haben, k\\xf6nnen Sie uns per E-Mail an [Email-Adresse einf\\xfcgen] kontaktieren.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Stand: [aktuelles Datum einf\\xfcgen]\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Diese Datenschutzerkl\\xe4rung ist g\\xfcltig ab dem Tag, an dem sie auf unserer Website ver\\xf6ffentlicht wurde.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s(DatenschutzModal, \"h7njlszr1nxUzrk46zHyBTBrvgI=\");\n_c3 = DatenschutzModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DatenschutzModal);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ModalWrapper\");\n$RefreshReg$(_c1, \"ModalContent\");\n$RefreshReg$(_c2, \"CloseButton\");\n$RefreshReg$(_c3, \"DatenschutzModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9EYXRlbnNjaHV0ek1vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1E7QUFFM0QsTUFBTU0sU0FBU0QsNERBQVNBO0FBU3hCLE1BQU1FLFVBQVVGLDREQUFTQTtBQVN6QixNQUFNRyxlQUFlTCx3RUFBVTs7O3VCQUNsQixDQUFDTyxRQUFXQSxNQUFNQyxJQUFJLEdBQUcsU0FBUyxNQUFNLEVBVXRDTDtLQVhURTtBQWNOLE1BQU1JLGVBQWVULHdFQUFVOzs7dUJBV2hCSTtNQVhUSztBQWNOLE1BQU1DLGNBQWNWLDJFQUFhOzs7O01BQTNCVTtBQWFOLFNBQVNFLGlCQUFpQixLQUFpQixFQUFFO1FBQW5CLEVBQUVKLEtBQUksRUFBRUssUUFBTyxFQUFFLEdBQWpCOztJQUN4QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDLEtBQUs7SUFFaERELGdEQUFTQSxDQUFDLElBQU07UUFDZGlCLGFBQWEsSUFBSTtRQUNqQixPQUFPLElBQU1BLGFBQWEsS0FBSztJQUNqQyxHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNELFdBQVc7UUFDZCxPQUFPLElBQUk7SUFDYixDQUFDO0lBRUQscUJBQ0UsOERBQUNUO1FBQWFHLE1BQU1BO2tCQUNsQiw0RUFBQ0M7OzhCQUNDLDhEQUFDQztvQkFBWU0sU0FBU0g7OEJBQVM7Ozs7Ozs4QkFDL0IsOERBQUNQOztzQ0FDQyw4REFBQ1c7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7c0NBQUU7Ozs7OztzQ0FNSCw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0Q7c0NBQUU7Ozs7OztzQ0FJSCw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0Q7O2dDQUFFOzhDQUlELDhEQUFDRTs7c0RBQ0MsOERBQUNDO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBO3NEQUFHOzs7Ozs7Ozs7Ozs7Z0NBQ0Q7Ozs7Ozs7c0NBS1AsOERBQUNGO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNEO3NDQUFFOzs7Ozs7c0NBTUgsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNEO3NDQUFFOzs7Ozs7c0NBS0gsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNEO3NDQUFFOzs7Ozs7c0NBSUgsOERBQUNBO3NDQUFFOzs7Ozs7c0NBQ0gsOERBQUNBO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNiO0dBekVTTjtNQUFBQTtBQTJFVCwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdGVyL0RhdGVuc2NodXR6TW9kYWwuanM/YTdiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBmYWRlSW4gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbmNvbnN0IHNjYWxlSW4gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuYDtcblxuY29uc3QgTW9kYWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5zaG93ID8gXCJmbGV4XCIgOiBcIm5vbmVcIil9O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiA0NDQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbmltYXRpb246ICR7ZmFkZUlufSAwLjNzIGVhc2Utb3V0O1xuYDtcblxuY29uc3QgTW9kYWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDUwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogODAlO1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYW5pbWF0aW9uOiAke3NjYWxlSW59IDAuM3MgZWFzZS1vdXQ7XG5gO1xuXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNDQ1O1xuICB0b3A6IDEyJTtcbiAgcmlnaHQ6IDMxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbmA7XG5cbmZ1bmN0aW9uIERhdGVuc2NodXR6TW9kYWwoeyBzaG93LCBvbkNsb3NlIH0pIHtcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTW91bnRlZCh0cnVlKTtcbiAgICByZXR1cm4gKCkgPT4gc2V0SXNNb3VudGVkKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghaXNNb3VudGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFdyYXBwZXIgc2hvdz17c2hvd30+XG4gICAgICA8TW9kYWxDb250ZW50PlxuICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17b25DbG9zZX0+JnRpbWVzOzwvQ2xvc2VCdXR0b24+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPkRhdGVuc2NodXR6ZXJrbMOkcnVuZzwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaXIgZnJldWVuIHVucyDDvGJlciBJaHJlbiBCZXN1Y2ggYXVmIHVuc2VyZXIgV2Vic2l0ZS4gRGVyIFNjaHV0elxuICAgICAgICAgICAgSWhyZXIgUHJpdmF0c3Bow6RyZSBpc3QgdW5zIHNlaHIgd2ljaHRpZy4gSW4gZGllc2VyXG4gICAgICAgICAgICBEYXRlbnNjaHV0emVya2zDpHJ1bmcgaW5mb3JtaWVyZW4gd2lyIFNpZSBkYXLDvGJlciwgd2VsY2hlIERhdGVuIHdpclxuICAgICAgICAgICAgdm9uIElobmVuIGVyaGViZW4gdW5kIHdpZSB3aXIgZGllc2UgRGF0ZW4gdmVyd2VuZGVuLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDM+UGVyc29uZW5iZXpvZ2VuZSBEYXRlbjwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaXIgZXJoZWJlbiB1bmQgc3BlaWNoZXJuIGtlaW5lIHBlcnNvbmVuYmV6b2dlbmVuIERhdGVuIHZvbiBJaG5lbi5cbiAgICAgICAgICAgIFdpciBzZXR6ZW4ga2VpbmUgQ29va2llcyBlaW4gdW5kIG51dHplbiBrZWluZSBUcmFja2luZy1Ub29scy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgzPlNlcnZlci1Mb2dmaWxlczwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBVbnNlciBXZWJzZXJ2ZXIgZXJoZWJ0IHVuZCBzcGVpY2hlcnQgYXV0b21hdGlzY2ggSW5mb3JtYXRpb25lbiBpblxuICAgICAgICAgICAgc29nZW5hbm50ZW4gU2VydmVyLUxvZ2ZpbGVzLCBkaWUgSWhyIEJyb3dzZXIgYXV0b21hdGlzY2ggYW4gdW5zXG4gICAgICAgICAgICDDvGJlcm1pdHRlbHQuIERpZXNlIHNpbmQ6XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5Ccm93c2VydHlwLyAtdmVyc2lvbjwvbGk+XG4gICAgICAgICAgICAgIDxsaT52ZXJ3ZW5kZXRlcyBCZXRyaWVic3N5c3RlbTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5SZWZlcnJlciBVUkwgKGRpZSB6dXZvciBiZXN1Y2h0ZSBTZWl0ZSk8L2xpPlxuICAgICAgICAgICAgICA8bGk+SG9zdG5hbWUgZGVzIHp1Z3JlaWZlbmRlbiBSZWNobmVycyAoSVAtQWRyZXNzZSk8L2xpPlxuICAgICAgICAgICAgICA8bGk+VWhyemVpdCBkZXIgU2VydmVyYW5mcmFnZTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgRGllc2UgRGF0ZW4gc2luZCBuaWNodCBiZXN0aW1tdGVuIFBlcnNvbmVuIHp1b3JkZW5iYXIuIEVpbmVcbiAgICAgICAgICAgIFp1c2FtbWVuZsO8aHJ1bmcgZGllc2VyIERhdGVuIG1pdCBhbmRlcmVuIERhdGVucXVlbGxlbiB3aXJkIG5pY2h0XG4gICAgICAgICAgICB2b3JnZW5vbW1lbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgzPkRhdGVuc2ljaGVyaGVpdDwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaXIgdHJlZmZlbiBhbmdlbWVzc2VuZSB0ZWNobmlzY2hlIHVuZCBvcmdhbmlzYXRvcmlzY2hlIE1hw59uYWhtZW4sXG4gICAgICAgICAgICB1bSBJaHJlIERhdGVuIGdlZ2VuIHVuYmVhYnNpY2h0aWd0ZSBvZGVyIHVucmVjaHRtw6TDn2lnZSBMw7ZzY2h1bmcsXG4gICAgICAgICAgICBWZXLDpG5kZXJ1bmcgb2RlciBnZWdlbiBWZXJsdXN0IHVuZCBnZWdlbiB1bmJlZnVndGUgV2VpdGVyZ2FiZSBvZGVyXG4gICAgICAgICAgICB1bmJlZnVndGVuIFp1Z3JpZmYgenUgc2Now7x0emVuLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDM+w4RuZGVydW5nZW4gZGllc2VyIERhdGVuc2NodXR6ZXJrbMOkcnVuZzwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaXIgYmVoYWx0ZW4gdW5zIGRhcyBSZWNodCB2b3IsIGRpZXNlIERhdGVuc2NodXR6ZXJrbMOkcnVuZyBqZWRlcnplaXRcbiAgICAgICAgICAgIHp1IMOkbmRlcm4uIEJpdHRlIGJlc3VjaGVuIFNpZSBkaWVzZSBTZWl0ZSByZWdlbG3DpMOfaWcsIHVtIHNpY2ggw7xiZXJcbiAgICAgICAgICAgIMOEbmRlcnVuZ2VuIHp1IGluZm9ybWllcmVuLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDM+S29udGFrdDwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXZW5uIFNpZSBGcmFnZW4genUgZGllc2VyIERhdGVuc2NodXR6ZXJrbMOkcnVuZyBoYWJlbiwga8O2bm5lbiBTaWUgdW5zXG4gICAgICAgICAgICBwZXIgRS1NYWlsIGFuIFtFbWFpbC1BZHJlc3NlIGVpbmbDvGdlbl0ga29udGFrdGllcmVuLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5TdGFuZDogW2FrdHVlbGxlcyBEYXR1bSBlaW5mw7xnZW5dPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRGllc2UgRGF0ZW5zY2h1dHplcmtsw6RydW5nIGlzdCBnw7xsdGlnIGFiIGRlbSBUYWcsIGFuIGRlbSBzaWUgYXVmXG4gICAgICAgICAgICB1bnNlcmVyIFdlYnNpdGUgdmVyw7ZmZmVudGxpY2h0IHd1cmRlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBGw7xnZW4gU2llIGhpZXIgd2VpdGVyZSBBYnNjaG5pdHRlIG9kZXIgSW5mb3JtYXRpb25lbiBmw7xyIElocmUgRGF0ZW5zY2h1dHplcmtsw6RydW5nIGVpbiAqL31cbiAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgIDwvTW9kYWxXcmFwcGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlbnNjaHV0ek1vZGFsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJjc3MiLCJrZXlmcmFtZXMiLCJmYWRlSW4iLCJzY2FsZUluIiwiTW9kYWxXcmFwcGVyIiwiZGl2IiwicHJvcHMiLCJzaG93IiwiTW9kYWxDb250ZW50IiwiQ2xvc2VCdXR0b24iLCJidXR0b24iLCJEYXRlbnNjaHV0ek1vZGFsIiwib25DbG9zZSIsImlzTW91bnRlZCIsInNldElzTW91bnRlZCIsIm9uQ2xpY2siLCJoMiIsInAiLCJoMyIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer/DatenschutzModal.js\n"));

/***/ })

});