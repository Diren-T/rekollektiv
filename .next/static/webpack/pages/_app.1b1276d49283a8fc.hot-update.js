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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  0% {\\n    transform: scale(0.9);\\n  }\\n  100% {\\n    transform: scale(1);\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: \",\n        \";\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  z-index: 444;\\n  align-items: center;\\n  justify-content: center;\\n  animation: \",\n        \" 0.3s ease-out;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 50%;\\n  max-width: 600px;\\n  background-color: white;\\n  border: 1px solid black;\\n  padding: 20px;\\n  position: relative;\\n  margin: 10px;\\n  overflow-y: auto;\\n  max-height: 80%;\\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\\n  animation: \",\n        \" 0.3s ease-out;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: fixed;\\n  z-index: 445;\\n  top: 12%;\\n  right: 31%;\\n  background-color: transparent;\\n  border: none;\\n  font-size: 30px;\\n  cursor: pointer;\\n  color: #333;\\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\\n  animation: \",\n        \" 0.3s ease-out;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nconst fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject());\nconst scaleIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject1());\nconst ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"DatenschutzModal__ModalWrapper\",\n    componentId: \"sc-8b35d0e0-0\"\n})(_templateObject2(), (props)=>props.show ? \"flex\" : \"none\", fadeIn);\n_c = ModalWrapper;\nconst ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"DatenschutzModal__ModalContent\",\n    componentId: \"sc-8b35d0e0-1\"\n})(_templateObject3(), scaleIn);\n_c1 = ModalContent;\nconst CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n    displayName: \"DatenschutzModal__CloseButton\",\n    componentId: \"sc-8b35d0e0-2\"\n})(_templateObject4(), scaleIn);\n_c2 = CloseButton;\nfunction DatenschutzModal(param) {\n    let { show , onClose  } = param;\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsMounted(true);\n        return ()=>setIsMounted(false);\n    }, []);\n    if (!isMounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ModalWrapper, {\n        show: show,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ModalContent, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseButton, {\n                    onClick: onClose,\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: \"Datenschutzerkl\\xe4rung\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Wir freuen uns \\xfcber Ihren Besuch auf unserer Website. Der Schutz Ihrer Privatsph\\xe4re ist uns sehr wichtig. In dieser Datenschutzerkl\\xe4rung informieren wir Sie dar\\xfcber, welche Daten wir von Ihnen erheben und wie wir diese Daten verwenden.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Personenbezogene Daten\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Wir erheben und speichern keine personenbezogenen Daten von Ihnen. Wir setzen keine Cookies ein und nutzen keine Tracking-Tools.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Server-Logfiles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Unser Webserver erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch an uns \\xfcbermittelt. Diese sind:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: \"Browsertyp/ -version\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: \"verwendetes Betriebssystem\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: \"Referrer URL (die zuvor besuchte Seite)\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: \"Hostname des zugreifenden Rechners (IP-Adresse)\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: \"Uhrzeit der Serveranfrage\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this),\n                                \"Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenf\\xfchrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Datensicherheit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Wir treffen angemessene technische und organisatorische Ma\\xdfnahmen, um Ihre Daten gegen unbeabsichtigte oder unrechtm\\xe4\\xdfige L\\xf6schung, Ver\\xe4nderung oder gegen Verlust und gegen unbefugte Weitergabe oder unbefugten Zugriff zu sch\\xfctzen.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"\\xc4nderungen dieser Datenschutzerkl\\xe4rung\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Wir behalten uns das Recht vor, diese Datenschutzerkl\\xe4rung jederzeit zu \\xe4ndern. Bitte besuchen Sie diese Seite regelm\\xe4\\xdfig, um sich \\xfcber \\xc4nderungen zu informieren.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Kontakt\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Wenn Sie Fragen zu dieser Datenschutzerkl\\xe4rung haben, k\\xf6nnen Sie uns per E-Mail an [Email-Adresse einf\\xfcgen] kontaktieren.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Stand: [aktuelles Datum einf\\xfcgen]\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Diese Datenschutzerkl\\xe4rung ist g\\xfcltig ab dem Tag, an dem sie auf unserer Website ver\\xf6ffentlicht wurde.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/diren/rekollektiv/components/Footer/DatenschutzModal.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(DatenschutzModal, \"h7njlszr1nxUzrk46zHyBTBrvgI=\");\n_c3 = DatenschutzModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DatenschutzModal);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ModalWrapper\");\n$RefreshReg$(_c1, \"ModalContent\");\n$RefreshReg$(_c2, \"CloseButton\");\n$RefreshReg$(_c3, \"DatenschutzModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9EYXRlbnNjaHV0ek1vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNRO0FBRTNELE1BQU1NLFNBQVNELDREQUFTQTtBQVN4QixNQUFNRSxVQUFVRiw0REFBU0E7QUFTekIsTUFBTUcsZUFBZUwsd0VBQVU7Ozt1QkFDbEIsQ0FBQ08sUUFBV0EsTUFBTUMsSUFBSSxHQUFHLFNBQVMsTUFBTSxFQVV0Q0w7S0FYVEU7QUFjTixNQUFNSSxlQUFlVCx3RUFBVTs7O3VCQVdoQkk7TUFYVEs7QUFjTixNQUFNQyxjQUFjViwyRUFBYTs7O3VCQVdsQkk7TUFYVE07QUFjTixTQUFTRSxpQkFBaUIsS0FBaUIsRUFBRTtRQUFuQixFQUFFSixLQUFJLEVBQUVLLFFBQU8sRUFBRSxHQUFqQjs7SUFDeEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RpQixhQUFhLElBQUk7UUFDakIsT0FBTyxJQUFNQSxhQUFhLEtBQUs7SUFDakMsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDRCxXQUFXO1FBQ2QsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELHFCQUNFLDhEQUFDVDtRQUFhRyxNQUFNQTtrQkFDbEIsNEVBQUNDOzs4QkFDQyw4REFBQ0M7b0JBQVlNLFNBQVNIOzhCQUFTOzs7Ozs7OEJBQy9CLDhEQUFDUDs7c0NBQ0MsOERBQUNXO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDO3NDQUFFOzs7Ozs7c0NBTUgsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNEO3NDQUFFOzs7Ozs7c0NBSUgsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNEOztnQ0FBRTs4Q0FJRCw4REFBQ0U7O3NEQUNDLDhEQUFDQztzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7Ozs7Ozs7O2dDQUNEOzs7Ozs7O3NDQUtQLDhEQUFDRjtzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDRDtzQ0FBRTs7Ozs7O3NDQU1ILDhEQUFDQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDRDtzQ0FBRTs7Ozs7O3NDQUtILDhEQUFDQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDRDtzQ0FBRTs7Ozs7O3NDQUlILDhEQUFDQTtzQ0FBRTs7Ozs7O3NDQUNILDhEQUFDQTtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTYjtHQXpFU047TUFBQUE7QUEyRVQsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci9EYXRlbnNjaHV0ek1vZGFsLmpzP2E3YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5jb25zdCBzY2FsZUluID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbmA7XG5cbmNvbnN0IE1vZGFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiAocHJvcHMuc2hvdyA/IFwiZmxleFwiIDogXCJub25lXCIpfTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogNDQ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiAke2ZhZGVJbn0gMC4zcyBlYXNlLW91dDtcbmA7XG5cbmNvbnN0IE1vZGFsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDgwJTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGFuaW1hdGlvbjogJHtzY2FsZUlufSAwLjNzIGVhc2Utb3V0O1xuYDtcblxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDQ0NTtcbiAgdG9wOiAxMiU7XG4gIHJpZ2h0OiAzMSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGFuaW1hdGlvbjogJHtzY2FsZUlufSAwLjNzIGVhc2Utb3V0O1xuYDtcblxuZnVuY3Rpb24gRGF0ZW5zY2h1dHpNb2RhbCh7IHNob3csIG9uQ2xvc2UgfSkge1xuICBjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNNb3VudGVkKHRydWUpO1xuICAgIHJldHVybiAoKSA9PiBzZXRJc01vdW50ZWQoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFpc01vdW50ZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsV3JhcHBlciBzaG93PXtzaG93fT5cbiAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT4mdGltZXM7PC9DbG9zZUJ1dHRvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+RGF0ZW5zY2h1dHplcmtsw6RydW5nPC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdpciBmcmV1ZW4gdW5zIMO8YmVyIElocmVuIEJlc3VjaCBhdWYgdW5zZXJlciBXZWJzaXRlLiBEZXIgU2NodXR6XG4gICAgICAgICAgICBJaHJlciBQcml2YXRzcGjDpHJlIGlzdCB1bnMgc2VociB3aWNodGlnLiBJbiBkaWVzZXJcbiAgICAgICAgICAgIERhdGVuc2NodXR6ZXJrbMOkcnVuZyBpbmZvcm1pZXJlbiB3aXIgU2llIGRhcsO8YmVyLCB3ZWxjaGUgRGF0ZW4gd2lyXG4gICAgICAgICAgICB2b24gSWhuZW4gZXJoZWJlbiB1bmQgd2llIHdpciBkaWVzZSBEYXRlbiB2ZXJ3ZW5kZW4uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMz5QZXJzb25lbmJlem9nZW5lIERhdGVuPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdpciBlcmhlYmVuIHVuZCBzcGVpY2hlcm4ga2VpbmUgcGVyc29uZW5iZXpvZ2VuZW4gRGF0ZW4gdm9uIElobmVuLlxuICAgICAgICAgICAgV2lyIHNldHplbiBrZWluZSBDb29raWVzIGVpbiB1bmQgbnV0emVuIGtlaW5lIFRyYWNraW5nLVRvb2xzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDM+U2VydmVyLUxvZ2ZpbGVzPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFVuc2VyIFdlYnNlcnZlciBlcmhlYnQgdW5kIHNwZWljaGVydCBhdXRvbWF0aXNjaCBJbmZvcm1hdGlvbmVuIGluXG4gICAgICAgICAgICBzb2dlbmFubnRlbiBTZXJ2ZXItTG9nZmlsZXMsIGRpZSBJaHIgQnJvd3NlciBhdXRvbWF0aXNjaCBhbiB1bnNcbiAgICAgICAgICAgIMO8YmVybWl0dGVsdC4gRGllc2Ugc2luZDpcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPkJyb3dzZXJ0eXAvIC12ZXJzaW9uPC9saT5cbiAgICAgICAgICAgICAgPGxpPnZlcndlbmRldGVzIEJldHJpZWJzc3lzdGVtPC9saT5cbiAgICAgICAgICAgICAgPGxpPlJlZmVycmVyIFVSTCAoZGllIHp1dm9yIGJlc3VjaHRlIFNlaXRlKTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Ib3N0bmFtZSBkZXMgenVncmVpZmVuZGVuIFJlY2huZXJzIChJUC1BZHJlc3NlKTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5VaHJ6ZWl0IGRlciBTZXJ2ZXJhbmZyYWdlPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICBEaWVzZSBEYXRlbiBzaW5kIG5pY2h0IGJlc3RpbW10ZW4gUGVyc29uZW4genVvcmRlbmJhci4gRWluZVxuICAgICAgICAgICAgWnVzYW1tZW5mw7xocnVuZyBkaWVzZXIgRGF0ZW4gbWl0IGFuZGVyZW4gRGF0ZW5xdWVsbGVuIHdpcmQgbmljaHRcbiAgICAgICAgICAgIHZvcmdlbm9tbWVuLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDM+RGF0ZW5zaWNoZXJoZWl0PC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdpciB0cmVmZmVuIGFuZ2VtZXNzZW5lIHRlY2huaXNjaGUgdW5kIG9yZ2FuaXNhdG9yaXNjaGUgTWHDn25haG1lbixcbiAgICAgICAgICAgIHVtIElocmUgRGF0ZW4gZ2VnZW4gdW5iZWFic2ljaHRpZ3RlIG9kZXIgdW5yZWNodG3DpMOfaWdlIEzDtnNjaHVuZyxcbiAgICAgICAgICAgIFZlcsOkbmRlcnVuZyBvZGVyIGdlZ2VuIFZlcmx1c3QgdW5kIGdlZ2VuIHVuYmVmdWd0ZSBXZWl0ZXJnYWJlIG9kZXJcbiAgICAgICAgICAgIHVuYmVmdWd0ZW4gWnVncmlmZiB6dSBzY2jDvHR6ZW4uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMz7DhG5kZXJ1bmdlbiBkaWVzZXIgRGF0ZW5zY2h1dHplcmtsw6RydW5nPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdpciBiZWhhbHRlbiB1bnMgZGFzIFJlY2h0IHZvciwgZGllc2UgRGF0ZW5zY2h1dHplcmtsw6RydW5nIGplZGVyemVpdFxuICAgICAgICAgICAgenUgw6RuZGVybi4gQml0dGUgYmVzdWNoZW4gU2llIGRpZXNlIFNlaXRlIHJlZ2VsbcOkw59pZywgdW0gc2ljaCDDvGJlclxuICAgICAgICAgICAgw4RuZGVydW5nZW4genUgaW5mb3JtaWVyZW4uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMz5Lb250YWt0PC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdlbm4gU2llIEZyYWdlbiB6dSBkaWVzZXIgRGF0ZW5zY2h1dHplcmtsw6RydW5nIGhhYmVuLCBrw7ZubmVuIFNpZSB1bnNcbiAgICAgICAgICAgIHBlciBFLU1haWwgYW4gW0VtYWlsLUFkcmVzc2UgZWluZsO8Z2VuXSBrb250YWt0aWVyZW4uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlN0YW5kOiBbYWt0dWVsbGVzIERhdHVtIGVpbmbDvGdlbl08L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBEaWVzZSBEYXRlbnNjaHV0emVya2zDpHJ1bmcgaXN0IGfDvGx0aWcgYWIgZGVtIFRhZywgYW4gZGVtIHNpZSBhdWZcbiAgICAgICAgICAgIHVuc2VyZXIgV2Vic2l0ZSB2ZXLDtmZmZW50bGljaHQgd3VyZGUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIEbDvGdlbiBTaWUgaGllciB3ZWl0ZXJlIEFic2Nobml0dGUgb2RlciBJbmZvcm1hdGlvbmVuIGbDvHIgSWhyZSBEYXRlbnNjaHV0emVya2zDpHJ1bmcgZWluICovfVxuICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgPC9Nb2RhbFdyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVuc2NodXR6TW9kYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsImNzcyIsImtleWZyYW1lcyIsImZhZGVJbiIsInNjYWxlSW4iLCJNb2RhbFdyYXBwZXIiLCJkaXYiLCJwcm9wcyIsInNob3ciLCJNb2RhbENvbnRlbnQiLCJDbG9zZUJ1dHRvbiIsImJ1dHRvbiIsIkRhdGVuc2NodXR6TW9kYWwiLCJvbkNsb3NlIiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwib25DbGljayIsImgyIiwicCIsImgzIiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer/DatenschutzModal.js\n"));

/***/ })

});