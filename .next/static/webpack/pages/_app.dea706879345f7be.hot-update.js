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

/***/ "./components/Footer/ImpressumModal.js":
/*!*********************************************!*\
  !*** ./components/Footer/ImpressumModal.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  0% {\\n    transform: scale(0.9);\\n  }\\n  100% {\\n    transform: scale(1);\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: \",\n        \";\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  z-index: 444;\\n  align-items: center;\\n  justify-content: center;\\n  animation: \",\n        \" 0.3s ease-out;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 50%;\\n  max-width: 600px;\\n  background-color: white;\\n  border: 1px solid black;\\n  padding: 20px;\\n  position: relative;\\n  margin: 10px;\\n  overflow-y: auto;\\n  max-height: 80%;\\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\\n  animation: \",\n        \" 0.3s ease-out;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  z-index: 445;\\n  top: 3%;\\n  right: 31%;\\n  background-color: transparent;\\n  border: none;\\n  font-size: 30px;\\n  cursor: pointer;\\n  color: #333;\\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\\n  animation: \",\n        \" 0.3s ease-out;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nconst fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject());\nconst scaleIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject1());\nconst ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"ImpressumModal__ModalWrapper\",\n    componentId: \"sc-e01a2ac9-0\"\n})(_templateObject2(), (props)=>props.show ? \"flex\" : \"none\", fadeIn);\n_c = ModalWrapper;\nconst ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"ImpressumModal__ModalContent\",\n    componentId: \"sc-e01a2ac9-1\"\n})(_templateObject3(), scaleIn);\n_c1 = ModalContent;\nconst CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n    displayName: \"ImpressumModal__CloseButton\",\n    componentId: \"sc-e01a2ac9-2\"\n})(_templateObject4(), scaleIn);\n_c2 = CloseButton;\nfunction ImpressumModal(param) {\n    let { show , onClose  } = param;\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsMounted(true);\n        return ()=>setIsMounted(false);\n    }, []);\n    if (!isMounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ModalWrapper, {\n        show: show,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ModalContent, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseButton, {\n                    onClick: onClose,\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: \"Impressum\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Firma: [Name des Architekturb\\xfcros]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this),\n                                \"Adresse: [Stra\\xdfe, Hausnummer, PLZ, Ort]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                \"Telefon: [Telefonnummer]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this),\n                                \"E-Mail: [E-Mail-Adresse]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                \"Website: [Webadresse]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Vertretungsberechtigter: [Name des vertretungsberechtigten Gesch\\xe4ftsf\\xfchrers oder Inhabers]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this),\n                                \"Registergericht: [Name des Registergerichts]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this),\n                                \"Registernummer: [Registernummer]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this),\n                                \"Umsatzsteuer-ID: [Umsatzsteuer-Identifikationsnummer]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Berufsbezeichnung: Architektenkammer [Name der zust\\xe4ndigen Architektenkammer]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this),\n                                \"Zust\\xe4ndige Aufsichtsbeh\\xf6rde: [Name der zust\\xe4ndigen Aufsichtsbeh\\xf6rde]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Berufsrechtliche Regelungen:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, this),\n                                \"Architektengesetz (ArchG)\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, this),\n                                \"Honorarordnung f\\xfcr Architekten und Ingenieure (HOAI)\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, this),\n                                \"Berufsordnung der Architektenkammer [Name der zust\\xe4ndigen Architektenkammer]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, this),\n                                \"Die Regelungen k\\xf6nnen auf der Website der Architektenkammer [Name der zust\\xe4ndigen Architektenkammer] eingesehen werden.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Haftungsausschluss: Wir \\xfcbernehmen keine Haftung f\\xfcr die Inhalte externer Links. F\\xfcr den Inhalt der verlinkten Seiten sind ausschlie\\xdflich deren Betreiber verantwortlich.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Urheberrecht: Die Inhalte dieser Website sind urheberrechtlich gesch\\xfctzt. Eine Vervielf\\xe4ltigung, Verbreitung oder sonstige Verwendung der Inhalte bedarf der ausdr\\xfccklichen schriftlichen Genehmigung des Architekturb\\xfcros.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Bildnachweise: Die auf der Website verwendeten Bilder stammen von [Name des Fotografen oder der Fotografen oder Bildagentur].\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 141,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Stand: [aktuelles Datum einf\\xfcgen]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 145,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 143,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s(ImpressumModal, \"h7njlszr1nxUzrk46zHyBTBrvgI=\");\n_c3 = ImpressumModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImpressumModal);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ModalWrapper\");\n$RefreshReg$(_c1, \"ModalContent\");\n$RefreshReg$(_c2, \"CloseButton\");\n$RefreshReg$(_c3, \"ImpressumModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9JbXByZXNzdW1Nb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDUTtBQUUzRCxNQUFNTSxTQUFTRCw0REFBU0E7QUFTeEIsTUFBTUUsVUFBVUYsNERBQVNBO0FBU3pCLE1BQU1HLGVBQWVMLHdFQUFVOzs7dUJBQ2xCLENBQUNPLFFBQVdBLE1BQU1DLElBQUksR0FBRyxTQUFTLE1BQU0sRUFVdENMO0tBWFRFO0FBY04sTUFBTUksZUFBZVQsd0VBQVU7Ozt1QkFXaEJJO01BWFRLO0FBY04sTUFBTUMsY0FBY1YsMkVBQWE7Ozt1QkFXbEJJO01BWFRNO0FBY04sU0FBU0UsZUFBZSxLQUFpQixFQUFFO1FBQW5CLEVBQUVKLEtBQUksRUFBRUssUUFBTyxFQUFFLEdBQWpCOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDLEtBQUs7SUFFaERELGdEQUFTQSxDQUFDLElBQU07UUFDZGlCLGFBQWEsSUFBSTtRQUNqQixPQUFPLElBQU1BLGFBQWEsS0FBSztJQUNqQyxHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNELFdBQVc7UUFDZCxPQUFPLElBQUk7SUFDYixDQUFDO0lBQ0QscUJBQ0UsOERBQUNUO1FBQWFHLE1BQU1BO2tCQUNsQiw0RUFBQ0M7OzhCQUNDLDhEQUFDQztvQkFBWU0sU0FBU0g7OEJBQVM7Ozs7Ozs4QkFDL0IsOERBQUNQOztzQ0FDQyw4REFBQ1c7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7O2dDQUFFOzhDQUVELDhEQUFDQzs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7OztnQ0FBSzs4Q0FFTiw4REFBQ0E7Ozs7O2dDQUFLOzhDQUVOLDhEQUFDQTs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7Ozs7Ozs7OztzQ0FFSCw4REFBQ0Q7O2dDQUFFOzhDQUdELDhEQUFDQzs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7OztnQ0FBSzs4Q0FFTiw4REFBQ0E7Ozs7O2dDQUFLOzhDQUVOLDhEQUFDQTs7Ozs7Ozs7Ozs7c0NBRUgsOERBQUNEOztnQ0FBRTs4Q0FHRCw4REFBQ0M7Ozs7O2dDQUFLOzhDQUVOLDhEQUFDQTs7Ozs7Ozs7Ozs7c0NBRUgsOERBQUNEOztnQ0FBRTs4Q0FFRCw4REFBQ0M7Ozs7O2dDQUFLOzhDQUVOLDhEQUFDQTs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7OztnQ0FBSzs4Q0FHTiw4REFBQ0E7Ozs7O2dDQUFLOzhDQUdOLDhEQUFDQTs7Ozs7Ozs7Ozs7c0NBRUgsOERBQUNEOztnQ0FBRTs4Q0FJRCw4REFBQ0M7Ozs7Ozs7Ozs7O3NDQUVILDhEQUFDRDs7Z0NBQUU7OENBS0QsOERBQUNDOzs7Ozs7Ozs7OztzQ0FFSCw4REFBQ0Q7O2dDQUFFOzhDQUdELDhEQUFDQzs7Ozs7Ozs7Ozs7c0NBRUgsOERBQUNEOztnQ0FBRTs4Q0FFRCw4REFBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQXZGU1A7TUFBQUE7QUF5RlQsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIvSW1wcmVzc3VtTW9kYWwuanM/OTY5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBmYWRlSW4gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbmNvbnN0IHNjYWxlSW4gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuYDtcblxuY29uc3QgTW9kYWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5zaG93ID8gXCJmbGV4XCIgOiBcIm5vbmVcIil9O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiA0NDQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbmltYXRpb246ICR7ZmFkZUlufSAwLjNzIGVhc2Utb3V0O1xuYDtcblxuY29uc3QgTW9kYWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDUwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogODAlO1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYW5pbWF0aW9uOiAke3NjYWxlSW59IDAuM3MgZWFzZS1vdXQ7XG5gO1xuXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDQ1O1xuICB0b3A6IDMlO1xuICByaWdodDogMzElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBhbmltYXRpb246ICR7c2NhbGVJbn0gMC4zcyBlYXNlLW91dDtcbmA7XG5cbmZ1bmN0aW9uIEltcHJlc3N1bU1vZGFsKHsgc2hvdywgb25DbG9zZSB9KSB7XG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc01vdW50ZWQodHJ1ZSk7XG4gICAgcmV0dXJuICgpID0+IHNldElzTW91bnRlZChmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBpZiAoIWlzTW91bnRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPE1vZGFsV3JhcHBlciBzaG93PXtzaG93fT5cbiAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT4mdGltZXM7PC9DbG9zZUJ1dHRvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+SW1wcmVzc3VtPC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEZpcm1hOiBbTmFtZSBkZXMgQXJjaGl0ZWt0dXJiw7xyb3NdXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEFkcmVzc2U6IFtTdHJhw59lLCBIYXVzbnVtbWVyLCBQTFosIE9ydF1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgVGVsZWZvbjogW1RlbGVmb25udW1tZXJdXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEUtTWFpbDogW0UtTWFpbC1BZHJlc3NlXVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBXZWJzaXRlOiBbV2ViYWRyZXNzZV1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFZlcnRyZXR1bmdzYmVyZWNodGlndGVyOiBbTmFtZSBkZXMgdmVydHJldHVuZ3NiZXJlY2h0aWd0ZW5cbiAgICAgICAgICAgIEdlc2Now6RmdHNmw7xocmVycyBvZGVyIEluaGFiZXJzXVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBSZWdpc3RlcmdlcmljaHQ6IFtOYW1lIGRlcyBSZWdpc3RlcmdlcmljaHRzXVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBSZWdpc3Rlcm51bW1lcjogW1JlZ2lzdGVybnVtbWVyXVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBVbXNhdHpzdGV1ZXItSUQ6IFtVbXNhdHpzdGV1ZXItSWRlbnRpZmlrYXRpb25zbnVtbWVyXVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQmVydWZzYmV6ZWljaG51bmc6IEFyY2hpdGVrdGVua2FtbWVyIFtOYW1lIGRlciB6dXN0w6RuZGlnZW5cbiAgICAgICAgICAgIEFyY2hpdGVrdGVua2FtbWVyXVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBadXN0w6RuZGlnZSBBdWZzaWNodHNiZWjDtnJkZTogW05hbWUgZGVyIHp1c3TDpG5kaWdlbiBBdWZzaWNodHNiZWjDtnJkZV1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEJlcnVmc3JlY2h0bGljaGUgUmVnZWx1bmdlbjpcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgQXJjaGl0ZWt0ZW5nZXNldHogKEFyY2hHKVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBIb25vcmFyb3JkbnVuZyBmw7xyIEFyY2hpdGVrdGVuIHVuZCBJbmdlbmlldXJlIChIT0FJKVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBCZXJ1ZnNvcmRudW5nIGRlciBBcmNoaXRla3RlbmthbW1lciBbTmFtZSBkZXIgenVzdMOkbmRpZ2VuXG4gICAgICAgICAgICBBcmNoaXRla3RlbmthbW1lcl1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgRGllIFJlZ2VsdW5nZW4ga8O2bm5lbiBhdWYgZGVyIFdlYnNpdGUgZGVyIEFyY2hpdGVrdGVua2FtbWVyIFtOYW1lXG4gICAgICAgICAgICBkZXIgenVzdMOkbmRpZ2VuIEFyY2hpdGVrdGVua2FtbWVyXSBlaW5nZXNlaGVuIHdlcmRlbi5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEhhZnR1bmdzYXVzc2NobHVzczogV2lyIMO8YmVybmVobWVuIGtlaW5lIEhhZnR1bmcgZsO8ciBkaWUgSW5oYWx0ZVxuICAgICAgICAgICAgZXh0ZXJuZXIgTGlua3MuIEbDvHIgZGVuIEluaGFsdCBkZXIgdmVybGlua3RlbiBTZWl0ZW4gc2luZFxuICAgICAgICAgICAgYXVzc2NobGllw59saWNoIGRlcmVuIEJldHJlaWJlciB2ZXJhbnR3b3J0bGljaC5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFVyaGViZXJyZWNodDogRGllIEluaGFsdGUgZGllc2VyIFdlYnNpdGUgc2luZCB1cmhlYmVycmVjaHRsaWNoXG4gICAgICAgICAgICBnZXNjaMO8dHp0LiBFaW5lIFZlcnZpZWxmw6RsdGlndW5nLCBWZXJicmVpdHVuZyBvZGVyIHNvbnN0aWdlXG4gICAgICAgICAgICBWZXJ3ZW5kdW5nIGRlciBJbmhhbHRlIGJlZGFyZiBkZXIgYXVzZHLDvGNrbGljaGVuIHNjaHJpZnRsaWNoZW5cbiAgICAgICAgICAgIEdlbmVobWlndW5nIGRlcyBBcmNoaXRla3R1cmLDvHJvcy5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEJpbGRuYWNod2Vpc2U6IERpZSBhdWYgZGVyIFdlYnNpdGUgdmVyd2VuZGV0ZW4gQmlsZGVyIHN0YW1tZW4gdm9uXG4gICAgICAgICAgICBbTmFtZSBkZXMgRm90b2dyYWZlbiBvZGVyIGRlciBGb3RvZ3JhZmVuIG9kZXIgQmlsZGFnZW50dXJdLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgU3RhbmQ6IFtha3R1ZWxsZXMgRGF0dW0gZWluZsO8Z2VuXVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgIDwvTW9kYWxXcmFwcGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbXByZXNzdW1Nb2RhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiY3NzIiwia2V5ZnJhbWVzIiwiZmFkZUluIiwic2NhbGVJbiIsIk1vZGFsV3JhcHBlciIsImRpdiIsInByb3BzIiwic2hvdyIsIk1vZGFsQ29udGVudCIsIkNsb3NlQnV0dG9uIiwiYnV0dG9uIiwiSW1wcmVzc3VtTW9kYWwiLCJvbkNsb3NlIiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwib25DbGljayIsImgyIiwicCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer/ImpressumModal.js\n"));

/***/ })

});