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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  0% {\\n    transform: scale(0.9);\\n  }\\n  100% {\\n    transform: scale(1);\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: \",\n        \";\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  z-index: 444;\\n  align-items: center;\\n  justify-content: center;\\n  animation: \",\n        \" 0.3s ease-out;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 50%;\\n  max-width: 600px;\\n  background-color: white;\\n  border: 1px solid black;\\n  padding: 20px;\\n  position: relative;\\n  margin: 10px;\\n  overflow-y: auto;\\n  max-height: 80%;\\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\\n  animation: \",\n        \" 0.3s ease-out;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: fixed;\\n  z-index: 445;\\n  top: 12%;\\n  right: 31%;\\n  background-color: transparent;\\n  border: none;\\n  font-size: 30px;\\n  cursor: pointer;\\n  color: #333;\\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nconst fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject());\nconst scaleIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject1());\nconst ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"ImpressumModal__ModalWrapper\",\n    componentId: \"sc-91eac7be-0\"\n})(_templateObject2(), (props)=>props.show ? \"flex\" : \"none\", fadeIn);\n_c = ModalWrapper;\nconst ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"ImpressumModal__ModalContent\",\n    componentId: \"sc-91eac7be-1\"\n})(_templateObject3(), scaleIn);\n_c1 = ModalContent;\nconst CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n    displayName: \"ImpressumModal__CloseButton\",\n    componentId: \"sc-91eac7be-2\"\n})(_templateObject4());\n_c2 = CloseButton;\nfunction ImpressumModal(param) {\n    let { show , onClose  } = param;\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsMounted(true);\n        return ()=>setIsMounted(false);\n    }, []);\n    if (!isMounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ModalWrapper, {\n        show: show,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ModalContent, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseButton, {\n                    onClick: onClose,\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: \"Impressum\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Firma: [Name des Architekturb\\xfcros]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                \"Adresse: [Stra\\xdfe, Hausnummer, PLZ, Ort]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                \"Telefon: [Telefonnummer]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                \"E-Mail: [E-Mail-Adresse]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                \"Website: [Webadresse]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Vertretungsberechtigter: [Name des vertretungsberechtigten Gesch\\xe4ftsf\\xfchrers oder Inhabers]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                \"Registergericht: [Name des Registergerichts]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this),\n                                \"Registernummer: [Registernummer]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this),\n                                \"Umsatzsteuer-ID: [Umsatzsteuer-Identifikationsnummer]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Berufsbezeichnung: Architektenkammer [Name der zust\\xe4ndigen Architektenkammer]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this),\n                                \"Zust\\xe4ndige Aufsichtsbeh\\xf6rde: [Name der zust\\xe4ndigen Aufsichtsbeh\\xf6rde]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Berufsrechtliche Regelungen:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, this),\n                                \"Architektengesetz (ArchG)\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, this),\n                                \"Honorarordnung f\\xfcr Architekten und Ingenieure (HOAI)\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, this),\n                                \"Berufsordnung der Architektenkammer [Name der zust\\xe4ndigen Architektenkammer]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, this),\n                                \"Die Regelungen k\\xf6nnen auf der Website der Architektenkammer [Name der zust\\xe4ndigen Architektenkammer] eingesehen werden.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Haftungsausschluss: Wir \\xfcbernehmen keine Haftung f\\xfcr die Inhalte externer Links. F\\xfcr den Inhalt der verlinkten Seiten sind ausschlie\\xdflich deren Betreiber verantwortlich.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Urheberrecht: Die Inhalte dieser Website sind urheberrechtlich gesch\\xfctzt. Eine Vervielf\\xe4ltigung, Verbreitung oder sonstige Verwendung der Inhalte bedarf der ausdr\\xfccklichen schriftlichen Genehmigung des Architekturb\\xfcros.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Bildnachweise: Die auf der Website verwendeten Bilder stammen von [Name des Fotografen oder der Fotografen oder Bildagentur].\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 140,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Stand: [aktuelles Datum einf\\xfcgen]\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                                    lineNumber: 144,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                            lineNumber: 142,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/diren/rekollektiv/components/Footer/ImpressumModal.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(ImpressumModal, \"h7njlszr1nxUzrk46zHyBTBrvgI=\");\n_c3 = ImpressumModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImpressumModal);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ModalWrapper\");\n$RefreshReg$(_c1, \"ModalContent\");\n$RefreshReg$(_c2, \"CloseButton\");\n$RefreshReg$(_c3, \"ImpressumModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9JbXByZXNzdW1Nb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNRO0FBRTNELE1BQU1NLFNBQVNELDREQUFTQTtBQVN4QixNQUFNRSxVQUFVRiw0REFBU0E7QUFTekIsTUFBTUcsZUFBZUwsd0VBQVU7Ozt1QkFDbEIsQ0FBQ08sUUFBV0EsTUFBTUMsSUFBSSxHQUFHLFNBQVMsTUFBTSxFQVV0Q0w7S0FYVEU7QUFjTixNQUFNSSxlQUFlVCx3RUFBVTs7O3VCQVdoQkk7TUFYVEs7QUFjTixNQUFNQyxjQUFjViwyRUFBYTs7OztNQUEzQlU7QUFhTixTQUFTRSxlQUFlLEtBQWlCLEVBQUU7UUFBbkIsRUFBRUosS0FBSSxFQUFFSyxRQUFPLEVBQUUsR0FBakI7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHaEIsK0NBQVFBLENBQUMsS0FBSztJQUVoREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkaUIsYUFBYSxJQUFJO1FBQ2pCLE9BQU8sSUFBTUEsYUFBYSxLQUFLO0lBQ2pDLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0QsV0FBVztRQUNkLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFDRCxxQkFDRSw4REFBQ1Q7UUFBYUcsTUFBTUE7a0JBQ2xCLDRFQUFDQzs7OEJBQ0MsOERBQUNDO29CQUFZTSxTQUFTSDs4QkFBUzs7Ozs7OzhCQUMvQiw4REFBQ1A7O3NDQUNDLDhEQUFDVztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQzs7Z0NBQUU7OENBRUQsOERBQUNDOzs7OztnQ0FBSzs4Q0FFTiw4REFBQ0E7Ozs7O2dDQUFLOzhDQUVOLDhEQUFDQTs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7OztnQ0FBSzs4Q0FFTiw4REFBQ0E7Ozs7Ozs7Ozs7O3NDQUVILDhEQUFDRDs7Z0NBQUU7OENBR0QsOERBQUNDOzs7OztnQ0FBSzs4Q0FFTiw4REFBQ0E7Ozs7O2dDQUFLOzhDQUVOLDhEQUFDQTs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7Ozs7Ozs7OztzQ0FFSCw4REFBQ0Q7O2dDQUFFOzhDQUdELDhEQUFDQzs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7Ozs7Ozs7OztzQ0FFSCw4REFBQ0Q7O2dDQUFFOzhDQUVELDhEQUFDQzs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7OztnQ0FBSzs4Q0FFTiw4REFBQ0E7Ozs7O2dDQUFLOzhDQUdOLDhEQUFDQTs7Ozs7Z0NBQUs7OENBR04sOERBQUNBOzs7Ozs7Ozs7OztzQ0FFSCw4REFBQ0Q7O2dDQUFFOzhDQUlELDhEQUFDQzs7Ozs7Ozs7Ozs7c0NBRUgsOERBQUNEOztnQ0FBRTs4Q0FLRCw4REFBQ0M7Ozs7Ozs7Ozs7O3NDQUVILDhEQUFDRDs7Z0NBQUU7OENBR0QsOERBQUNDOzs7Ozs7Ozs7OztzQ0FFSCw4REFBQ0Q7O2dDQUFFOzhDQUVELDhEQUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0dBdkZTUDtNQUFBQTtBQXlGVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci9JbXByZXNzdW1Nb2RhbC5qcz85Njk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuY29uc3Qgc2NhbGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG5gO1xuXG5jb25zdCBNb2RhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLnNob3cgPyBcImZsZXhcIiA6IFwibm9uZVwiKX07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDQ0NDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogJHtmYWRlSW59IDAuM3MgZWFzZS1vdXQ7XG5gO1xuXG5jb25zdCBNb2RhbENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA4MCU7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBhbmltYXRpb246ICR7c2NhbGVJbn0gMC4zcyBlYXNlLW91dDtcbmA7XG5cbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA0NDU7XG4gIHRvcDogMTIlO1xuICByaWdodDogMzElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuYDtcblxuZnVuY3Rpb24gSW1wcmVzc3VtTW9kYWwoeyBzaG93LCBvbkNsb3NlIH0pIHtcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTW91bnRlZCh0cnVlKTtcbiAgICByZXR1cm4gKCkgPT4gc2V0SXNNb3VudGVkKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghaXNNb3VudGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxXcmFwcGVyIHNob3c9e3Nob3d9PlxuICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PiZ0aW1lczs8L0Nsb3NlQnV0dG9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5JbXByZXNzdW08L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRmlybWE6IFtOYW1lIGRlcyBBcmNoaXRla3R1cmLDvHJvc11cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgQWRyZXNzZTogW1N0cmHDn2UsIEhhdXNudW1tZXIsIFBMWiwgT3J0XVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBUZWxlZm9uOiBbVGVsZWZvbm51bW1lcl1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgRS1NYWlsOiBbRS1NYWlsLUFkcmVzc2VdXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFdlYnNpdGU6IFtXZWJhZHJlc3NlXVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVmVydHJldHVuZ3NiZXJlY2h0aWd0ZXI6IFtOYW1lIGRlcyB2ZXJ0cmV0dW5nc2JlcmVjaHRpZ3RlblxuICAgICAgICAgICAgR2VzY2jDpGZ0c2bDvGhyZXJzIG9kZXIgSW5oYWJlcnNdXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFJlZ2lzdGVyZ2VyaWNodDogW05hbWUgZGVzIFJlZ2lzdGVyZ2VyaWNodHNdXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFJlZ2lzdGVybnVtbWVyOiBbUmVnaXN0ZXJudW1tZXJdXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFVtc2F0enN0ZXVlci1JRDogW1Vtc2F0enN0ZXVlci1JZGVudGlmaWthdGlvbnNudW1tZXJdXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBCZXJ1ZnNiZXplaWNobnVuZzogQXJjaGl0ZWt0ZW5rYW1tZXIgW05hbWUgZGVyIHp1c3TDpG5kaWdlblxuICAgICAgICAgICAgQXJjaGl0ZWt0ZW5rYW1tZXJdXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFp1c3TDpG5kaWdlIEF1ZnNpY2h0c2JlaMO2cmRlOiBbTmFtZSBkZXIgenVzdMOkbmRpZ2VuIEF1ZnNpY2h0c2JlaMO2cmRlXVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQmVydWZzcmVjaHRsaWNoZSBSZWdlbHVuZ2VuOlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBBcmNoaXRla3Rlbmdlc2V0eiAoQXJjaEcpXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEhvbm9yYXJvcmRudW5nIGbDvHIgQXJjaGl0ZWt0ZW4gdW5kIEluZ2VuaWV1cmUgKEhPQUkpXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEJlcnVmc29yZG51bmcgZGVyIEFyY2hpdGVrdGVua2FtbWVyIFtOYW1lIGRlciB6dXN0w6RuZGlnZW5cbiAgICAgICAgICAgIEFyY2hpdGVrdGVua2FtbWVyXVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBEaWUgUmVnZWx1bmdlbiBrw7ZubmVuIGF1ZiBkZXIgV2Vic2l0ZSBkZXIgQXJjaGl0ZWt0ZW5rYW1tZXIgW05hbWVcbiAgICAgICAgICAgIGRlciB6dXN0w6RuZGlnZW4gQXJjaGl0ZWt0ZW5rYW1tZXJdIGVpbmdlc2VoZW4gd2VyZGVuLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSGFmdHVuZ3NhdXNzY2hsdXNzOiBXaXIgw7xiZXJuZWhtZW4ga2VpbmUgSGFmdHVuZyBmw7xyIGRpZSBJbmhhbHRlXG4gICAgICAgICAgICBleHRlcm5lciBMaW5rcy4gRsO8ciBkZW4gSW5oYWx0IGRlciB2ZXJsaW5rdGVuIFNlaXRlbiBzaW5kXG4gICAgICAgICAgICBhdXNzY2hsaWXDn2xpY2ggZGVyZW4gQmV0cmVpYmVyIHZlcmFudHdvcnRsaWNoLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVXJoZWJlcnJlY2h0OiBEaWUgSW5oYWx0ZSBkaWVzZXIgV2Vic2l0ZSBzaW5kIHVyaGViZXJyZWNodGxpY2hcbiAgICAgICAgICAgIGdlc2Now7x0enQuIEVpbmUgVmVydmllbGbDpGx0aWd1bmcsIFZlcmJyZWl0dW5nIG9kZXIgc29uc3RpZ2VcbiAgICAgICAgICAgIFZlcndlbmR1bmcgZGVyIEluaGFsdGUgYmVkYXJmIGRlciBhdXNkcsO8Y2tsaWNoZW4gc2NocmlmdGxpY2hlblxuICAgICAgICAgICAgR2VuZWhtaWd1bmcgZGVzIEFyY2hpdGVrdHVyYsO8cm9zLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQmlsZG5hY2h3ZWlzZTogRGllIGF1ZiBkZXIgV2Vic2l0ZSB2ZXJ3ZW5kZXRlbiBCaWxkZXIgc3RhbW1lbiB2b25cbiAgICAgICAgICAgIFtOYW1lIGRlcyBGb3RvZ3JhZmVuIG9kZXIgZGVyIEZvdG9ncmFmZW4gb2RlciBCaWxkYWdlbnR1cl0uXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBTdGFuZDogW2FrdHVlbGxlcyBEYXR1bSBlaW5mw7xnZW5dXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgPC9Nb2RhbFdyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltcHJlc3N1bU1vZGFsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJjc3MiLCJrZXlmcmFtZXMiLCJmYWRlSW4iLCJzY2FsZUluIiwiTW9kYWxXcmFwcGVyIiwiZGl2IiwicHJvcHMiLCJzaG93IiwiTW9kYWxDb250ZW50IiwiQ2xvc2VCdXR0b24iLCJidXR0b24iLCJJbXByZXNzdW1Nb2RhbCIsIm9uQ2xvc2UiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJvbkNsaWNrIiwiaDIiLCJwIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer/ImpressumModal.js\n"));

/***/ })

});