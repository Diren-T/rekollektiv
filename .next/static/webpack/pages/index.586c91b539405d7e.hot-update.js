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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Cookie */ \"./components/Cookie/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  min-height: 100vh;\\n  position: relative;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  z-index: 1;\\n  margin-top: 10%;\\n  position: fixed;\\n  top: 40%;\\n  right: 20%;\\n  transform: translate(0, -50%);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: center;\\n  padding-left: 50px;\\n  // @media screen and (max-width: 1200px) {\\n  //   /* Styling f\\xfcr Ger\\xe4te mit einer Breite von maximal 1200px */\\n  //   margin-top: 20%;\\n  //   padding-left: 30px;\\n\\n  // }\\n  @media screen and (max-width: 768px) {\\n    /* Styling f\\xfcr Ger\\xe4te mit einer Breite von maximal 768px */\\n    margin-top: 30%;\\n    padding-left: 20px;\\n  }\\n  @media screen and (max-width: 568px) and (orientation: landscape) {\\n    /* Styling f\\xfcr das iPhone SE im Querformat */\\n    margin-top: 30%;\\n    padding-left: 20px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 50%;\\n  border-top: 1px solid white;\\n  margin-bottom: 1%;\\n  margin-top: 5%;\\n  opacity: 0.7;\\n  @media screen and (max-width: 768px) {\\n    width: 60%;\\n  }\\n  @media screen and (max-width: 668px) and (orientation: landscape) {\\n    /* Styling f\\xfcr das iPhone SE im Querformat */\\n    margin-top: 10%;\\n    padding-left: 20px;\\n    font-size: 3vw;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  color: white;\\n  font-size: 2vw;\\n  font-weight: bold;\\n  margin-right: 2%;\\n  margin-bottom: 0;\\n  text-align: left;\\n  margin-top: 10vw;\\n  opacity: 0.8;\\n  @media screen and (max-width: 768px) {\\n    font-size: 5vw;\\n    margin-top: 20vw;\\n  }\\n  @media screen and (max-width: 668px) and (orientation: landscape) {\\n    /* Styling f\\xfcr das iPhone SE im Querformat */\\n    margin-top: 10%;\\n    padding-left: 20px;\\n    font-size: 3vw;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  color: white;\\n  font-size: 1, 5vw;\\n  font-weight: normal;\\n  text-align: left;\\n  margin-bottom: 0%;\\n  margin-right: 2%;\\n  opacity: 0.8;\\n  @media screen and (max-width: 768px) {\\n    font-size: 4vw;\\n  }\\n  @media screen and (max-width: 668px) and (orientation: landscape) {\\n    /* Styling f\\xfcr das iPhone SE im Querformat */\\n    margin-top: 30%;\\n    padding-left: 20px;\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 1.5vw;\\n  font-weight: normal;\\n  margin-left: 1%;\\n  opacity: 0.8;\\n  @media screen and (max-width: 768px) {\\n    font-size: 4vw;\\n  }\\n  @media screen and (max-width: 668px) and (orientation: landscape) {\\n    /* Styling f\\xfcr das iPhone SE im Querformat */\\n    margin-top: 30%;\\n    padding-left: 20px;\\n    font-size: 2vw;\\n  }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  width: 100%;\\n  transition: 0.5s;\\n  transform: translateY(\",\n        \");\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  height: 200vh;\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// const ContentWrapper = styled.div`\n//   min-height: 100vh; /* Stellt sicher, dass das Inhaltsfeld mindestens so groß wie der Bildschirm ist */\n//   position: relative; /* Fügt das relative Positionierungselement hinzu */\n// `;\n// const TitleWrapper = styled.div`\n//   z-index: 1;\n//   margin-top: 10%;\n//   position: fixed;\n//   top: 50%;\n//   left: 0;\n//   transform: translate(0, -50%);\n//   display: flex;\n//   flex-direction: column;\n//   align-items: flex-start;\n//   justify-content: center;\n//   padding-left: 50px;\n//   @media screen and (max-width: 768px) {\n//     /* Styling für Geräte mit einer Breite von maximal 768px */\n//     margin-top: 45%;\n//     padding-left: 20px;\n//   }\n// `;\n// const TitleDivider = styled.div`\n//   width: 50%; /* Vergrößern der Breite auf 60% */\n//   border-top: 1px solid white;\n//   margin-bottom: 1%; /* Verkleinern des Abstands zum H2-Element */\n//   margin-top: 5%; /* Verkleinern des Abstands zum H1-Element */\n//   opacity: 0.7;\n//   @media screen and (max-width: 768px) {\n//     /* Styling für Geräte mit einer Breite von maximal 768px */\n//     width: 60%;\n//   }\n// `;\n// const H1 = styled.h1`\n//   color: white;\n//   font-size: px;\n//   font-weight: bold;\n//   margin-right: 20px;\n//   margin-bottom: 0;\n//   text-align: left;\n//   margin-top: 100px;\n//   opacity: 0.8;\n//   @media screen and (max-width: 768px) {\n//     /* Styling für Geräte mit einer Breite von maximal 768px */\n//     font-size: 15px;\n//     margin-top: 50px;\n//   }\n// `;\n// const H2 = styled.h2`\n//   color: white;\n//   font-size: 20px;\n//   font-weight: normal;\n//   text-align: left;\n//   margin-bottom: 0%;\n//   margin-right: 20px;\n//   opacity: 0.8;\n//   @media screen and (max-width: 768px) {\n//     /* Styling für Geräte mit einer Breite von maximal 768px */\n//     font-size: 14px;\n//   }\n// `;\n// const Author = styled.span`\n//   font-size: 18px;\n//   font-weight: normal;\n//   margin-left: 10px;\n//   opacity: 0.8;\n//   @media screen and (max-width: 768px) {\n//     /* Styling für Geräte mit einer Breite von maximal 768px */\n//     font-size: 14px;\n//   }\n// `;\n// const FooterWrapper = styled.div`\n//   position: fixed;\n//   bottom: 0;\n//   left: 0;\n//   width: 100%;\n//   transition: 0.5s; // Fügen Sie eine Übergangseffekt hinzu\n//   transform: translateY(${({ isVisible }) => (isVisible ? \"0%\" : \"100%\")});\n// `;\n// const Placeholder = styled.div`\n//   height: 200vh; // Platzhalter mit einer Höhe von 200% des Viewports\n// `;\nconst ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"pages__ContentWrapper\",\n    componentId: \"sc-58f19ab6-0\"\n})(_templateObject());\n_c = ContentWrapper;\nconst TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"pages__TitleWrapper\",\n    componentId: \"sc-58f19ab6-1\"\n})(_templateObject1());\n_c1 = TitleWrapper;\nconst TitleDivider = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"pages__TitleDivider\",\n    componentId: \"sc-58f19ab6-2\"\n})(_templateObject2());\n_c2 = TitleDivider;\nconst H1 = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h1.withConfig({\n    displayName: \"pages__H1\",\n    componentId: \"sc-58f19ab6-3\"\n})(_templateObject3());\n_c3 = H1;\nconst H2 = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h2.withConfig({\n    displayName: \"pages__H2\",\n    componentId: \"sc-58f19ab6-4\"\n})(_templateObject4());\n_c4 = H2;\nconst Author = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].span.withConfig({\n    displayName: \"pages__Author\",\n    componentId: \"sc-58f19ab6-5\"\n})(_templateObject5());\n_c5 = Author;\nconst FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"pages__FooterWrapper\",\n    componentId: \"sc-58f19ab6-6\"\n})(_templateObject6(), (param)=>{\n    let { isVisible  } = param;\n    return isVisible ? \"0%\" : \"100%\";\n});\n_c6 = FooterWrapper;\nconst Placeholder = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"pages__Placeholder\",\n    componentId: \"sc-58f19ab6-7\"\n})(_templateObject7());\n_c7 = Placeholder;\nfunction Home() {\n    _s();\n    const [footerVisible, setFooterVisible] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollTop = window.scrollY;\n            const windowHeight = window.innerHeight;\n            const docHeight = document.documentElement.scrollHeight;\n            // Ändern Sie die Bedingung, um den Footer beim Scrollen anzuzeigen\n            if (scrollTop > 0) {\n                setFooterVisible(true);\n            } else {\n                setFooterVisible(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/diren/rekollektiv/pages/index.js\",\n                lineNumber: 242,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/diren/rekollektiv/pages/index.js\",\n                lineNumber: 243,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContentWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TitleWrapper, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(H1, {\n                            children: [\n                                \"„Auch aus Steinen, die einem in den Weg gelegt werden, kann man etwas Sch\\xf6nes bauen. “\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Author, {\n                                    children: \"– Johann Wolfgang von Goethe.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/diren/rekollektiv/pages/index.js\",\n                                    lineNumber: 248,\n                                    columnNumber: 35\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diren/rekollektiv/pages/index.js\",\n                            lineNumber: 246,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TitleDivider, {}, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/pages/index.js\",\n                            lineNumber: 250,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(H2, {\n                            children: \"rekollektiv UG | +49 (0)15157631832 | post@rekollektiv.de | L\\xfcnener Stra\\xdfe 30 | 44145 Dortmund\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diren/rekollektiv/pages/index.js\",\n                            lineNumber: 251,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diren/rekollektiv/pages/index.js\",\n                    lineNumber: 245,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/diren/rekollektiv/pages/index.js\",\n                lineNumber: 244,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FooterWrapper, {\n                isVisible: footerVisible,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/diren/rekollektiv/pages/index.js\",\n                    lineNumber: 258,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/diren/rekollektiv/pages/index.js\",\n                lineNumber: 257,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Placeholder, {}, void 0, false, {\n                fileName: \"/Users/diren/rekollektiv/pages/index.js\",\n                lineNumber: 260,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"jsV9476uZ9phvTAY0QgU00++Z8k=\");\n_c8 = Home;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"ContentWrapper\");\n$RefreshReg$(_c1, \"TitleWrapper\");\n$RefreshReg$(_c2, \"TitleDivider\");\n$RefreshReg$(_c3, \"H1\");\n$RefreshReg$(_c4, \"H2\");\n$RefreshReg$(_c5, \"Author\");\n$RefreshReg$(_c6, \"FooterWrapper\");\n$RefreshReg$(_c7, \"Placeholder\");\n$RefreshReg$(_c8, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTztnQkFDTEEsaUJBQWlCLEtBQUs7WUFDeEIsQ0FBQztRQUNIO1FBRUFHLE9BQU9RLGdCQUFnQixDQUFDLFVBQVVWO1FBQ2xDLE9BQU8sSUFBTTtZQUNYRSxPQUFPUyxtQkFBbUIsQ0FBQyxVQUFVWDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ3hCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNPLDBEQUFlQTs7Ozs7MEJBQ2hCLDhEQUFDQzswQkFDQyw0RUFBQ0U7O3NDQUNDLDhEQUFDRTs7Z0NBQUc7OENBRW9CLDhEQUFDSTs4Q0FBTzs7Ozs7Ozs7Ozs7O3NDQUVoQyw4REFBQ0w7Ozs7O3NDQUNELDhEQUFDRztzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTVIsOERBQUNJO2dCQUFjQyxXQUFXRzswQkFDeEIsNEVBQUNyQiwwREFBTUE7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNtQjs7Ozs7OztBQUdQLENBQUM7R0E5Q3VCQztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZUNvbXBvbmVudCBmcm9tIFwiQC9jb21wb25lbnRzL0Nvb2tpZVwiO1xuXG4vLyBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHZoOyAvKiBTdGVsbHQgc2ljaGVyLCBkYXNzIGRhcyBJbmhhbHRzZmVsZCBtaW5kZXN0ZW5zIHNvIGdyb8OfIHdpZSBkZXIgQmlsZHNjaGlybSBpc3QgKi9cbi8vICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBGw7xndCBkYXMgcmVsYXRpdmUgUG9zaXRpb25pZXJ1bmdzZWxlbWVudCBoaW56dSAqL1xuLy8gYDtcblxuLy8gY29uc3QgVGl0bGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbi8vICAgei1pbmRleDogMTtcbi8vICAgbWFyZ2luLXRvcDogMTAlO1xuLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgIHRvcDogNTAlO1xuLy8gICBsZWZ0OiAwO1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4vLyAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4vLyAgICAgLyogU3R5bGluZyBmw7xyIEdlcsOkdGUgbWl0IGVpbmVyIEJyZWl0ZSB2b24gbWF4aW1hbCA3NjhweCAqL1xuLy8gICAgIG1hcmdpbi10b3A6IDQ1JTtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4vLyAgIH1cbi8vIGA7XG5cbi8vIGNvbnN0IFRpdGxlRGl2aWRlciA9IHN0eWxlZC5kaXZgXG4vLyAgIHdpZHRoOiA1MCU7IC8qIFZlcmdyw7bDn2VybiBkZXIgQnJlaXRlIGF1ZiA2MCUgKi9cbi8vICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuLy8gICBtYXJnaW4tYm90dG9tOiAxJTsgLyogVmVya2xlaW5lcm4gZGVzIEFic3RhbmRzIHp1bSBIMi1FbGVtZW50ICovXG4vLyAgIG1hcmdpbi10b3A6IDUlOyAvKiBWZXJrbGVpbmVybiBkZXMgQWJzdGFuZHMgenVtIEgxLUVsZW1lbnQgKi9cbi8vICAgb3BhY2l0eTogMC43O1xuLy8gICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuLy8gICAgIC8qIFN0eWxpbmcgZsO8ciBHZXLDpHRlIG1pdCBlaW5lciBCcmVpdGUgdm9uIG1heGltYWwgNzY4cHggKi9cbi8vICAgICB3aWR0aDogNjAlO1xuLy8gICB9XG4vLyBgO1xuXG4vLyBjb25zdCBIMSA9IHN0eWxlZC5oMWBcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBmb250LXNpemU6IHB4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwO1xuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gICBtYXJnaW4tdG9wOiAxMDBweDtcbi8vICAgb3BhY2l0eTogMC44O1xuLy8gICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuLy8gICAgIC8qIFN0eWxpbmcgZsO8ciBHZXLDpHRlIG1pdCBlaW5lciBCcmVpdGUgdm9uIG1heGltYWwgNzY4cHggKi9cbi8vICAgICBmb250LXNpemU6IDE1cHg7XG4vLyAgICAgbWFyZ2luLXRvcDogNTBweDtcbi8vICAgfVxuLy8gYDtcblxuLy8gY29uc3QgSDIgPSBzdHlsZWQuaDJgXG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gICBtYXJnaW4tYm90dG9tOiAwJTtcbi8vICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuLy8gICBvcGFjaXR5OiAwLjg7XG4vLyAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4vLyAgICAgLyogU3R5bGluZyBmw7xyIEdlcsOkdGUgbWl0IGVpbmVyIEJyZWl0ZSB2b24gbWF4aW1hbCA3NjhweCAqL1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgfVxuLy8gYDtcblxuLy8gY29uc3QgQXV0aG9yID0gc3R5bGVkLnNwYW5gXG4vLyAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4vLyAgIG9wYWNpdHk6IDAuODtcblxuLy8gICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuLy8gICAgIC8qIFN0eWxpbmcgZsO8ciBHZXLDpHRlIG1pdCBlaW5lciBCcmVpdGUgdm9uIG1heGltYWwgNzY4cHggKi9cbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgIH1cbi8vIGA7XG5cbi8vIGNvbnN0IEZvb3RlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgIGJvdHRvbTogMDtcbi8vICAgbGVmdDogMDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIHRyYW5zaXRpb246IDAuNXM7IC8vIEbDvGdlbiBTaWUgZWluZSDDnGJlcmdhbmdzZWZmZWt0IGhpbnp1XG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkeyh7IGlzVmlzaWJsZSB9KSA9PiAoaXNWaXNpYmxlID8gXCIwJVwiIDogXCIxMDAlXCIpfSk7XG4vLyBgO1xuXG4vLyBjb25zdCBQbGFjZWhvbGRlciA9IHN0eWxlZC5kaXZgXG4vLyAgIGhlaWdodDogMjAwdmg7IC8vIFBsYXR6aGFsdGVyIG1pdCBlaW5lciBIw7ZoZSB2b24gMjAwJSBkZXMgVmlld3BvcnRzXG4vLyBgO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuY29uc3QgVGl0bGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNDAlO1xuICByaWdodDogMjAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAvLyAgIC8qIFN0eWxpbmcgZsO8ciBHZXLDpHRlIG1pdCBlaW5lciBCcmVpdGUgdm9uIG1heGltYWwgMTIwMHB4ICovXG4gIC8vICAgbWFyZ2luLXRvcDogMjAlO1xuICAvLyAgIHBhZGRpbmctbGVmdDogMzBweDtcblxuICAvLyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLyogU3R5bGluZyBmw7xyIEdlcsOkdGUgbWl0IGVpbmVyIEJyZWl0ZSB2b24gbWF4aW1hbCA3NjhweCAqL1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY4cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIC8qIFN0eWxpbmcgZsO8ciBkYXMgaVBob25lIFNFIGltIFF1ZXJmb3JtYXQgKi9cbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBUaXRsZURpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNTAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgb3BhY2l0eTogMC43O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY4cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIC8qIFN0eWxpbmcgZsO8ciBkYXMgaVBob25lIFNFIGltIFF1ZXJmb3JtYXQgKi9cbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG5gO1xuXG5jb25zdCBIMSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJ2dztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDEwdnc7XG4gIG9wYWNpdHk6IDAuODtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmb250LXNpemU6IDV2dztcbiAgICBtYXJnaW4tdG9wOiAyMHZ3O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2OHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAvKiBTdHlsaW5nIGbDvHIgZGFzIGlQaG9uZSBTRSBpbSBRdWVyZm9ybWF0ICovXG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDN2dztcbiAgfVxuYDtcblxuY29uc3QgSDIgPSBzdHlsZWQuaDJgXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLCA1dnc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDAlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuICBvcGFjaXR5OiAwLjg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY4cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIC8qIFN0eWxpbmcgZsO8ciBkYXMgaVBob25lIFNFIGltIFF1ZXJmb3JtYXQgKi9cbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBdXRob3IgPSBzdHlsZWQuc3BhbmBcbiAgZm9udC1zaXplOiAxLjV2dztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBvcGFjaXR5OiAwLjg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY4cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIC8qIFN0eWxpbmcgZsO8ciBkYXMgaVBob25lIFNFIGltIFF1ZXJmb3JtYXQgKi9cbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG5gO1xuXG5jb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHsoeyBpc1Zpc2libGUgfSkgPT4gKGlzVmlzaWJsZSA/IFwiMCVcIiA6IFwiMTAwJVwiKX0pO1xuYDtcblxuY29uc3QgUGxhY2Vob2xkZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDIwMHZoO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2Zvb3RlclZpc2libGUsIHNldEZvb3RlclZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBjb25zdCBkb2NIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXG4gICAgICAvLyDDhG5kZXJuIFNpZSBkaWUgQmVkaW5ndW5nLCB1bSBkZW4gRm9vdGVyIGJlaW0gU2Nyb2xsZW4gYW56dXplaWdlblxuICAgICAgaWYgKHNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgc2V0Rm9vdGVyVmlzaWJsZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEZvb3RlclZpc2libGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29va2llQ29tcG9uZW50IC8+XG4gICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgIDxUaXRsZVdyYXBwZXI+XG4gICAgICAgICAgPEgxPlxuICAgICAgICAgICAg4oCeQXVjaCBhdXMgU3RlaW5lbiwgZGllIGVpbmVtIGluIGRlbiBXZWcgZ2VsZWd0IHdlcmRlbiwga2FubiBtYW5cbiAgICAgICAgICAgIGV0d2FzIFNjaMO2bmVzIGJhdWVuLiDigJw8QXV0aG9yPuKAkyBKb2hhbm4gV29sZmdhbmcgdm9uIEdvZXRoZS48L0F1dGhvcj5cbiAgICAgICAgICA8L0gxPlxuICAgICAgICAgIDxUaXRsZURpdmlkZXIgLz5cbiAgICAgICAgICA8SDI+XG4gICAgICAgICAgICByZWtvbGxla3RpdiBVRyB8ICs0OSAoMCkxNTE1NzYzMTgzMiB8IHBvc3RAcmVrb2xsZWt0aXYuZGUgfCBMw7xuZW5lclxuICAgICAgICAgICAgU3RyYcOfZSAzMCB8IDQ0MTQ1IERvcnRtdW5kXG4gICAgICAgICAgPC9IMj5cbiAgICAgICAgPC9UaXRsZVdyYXBwZXI+XG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgPEZvb3RlcldyYXBwZXIgaXNWaXNpYmxlPXtmb290ZXJWaXNpYmxlfT5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9Gb290ZXJXcmFwcGVyPlxuICAgICAgPFBsYWNlaG9sZGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiRm9vdGVyIiwic3R5bGVkIiwia2V5ZnJhbWVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvb2tpZUNvbXBvbmVudCIsIkNvbnRlbnRXcmFwcGVyIiwiZGl2IiwiVGl0bGVXcmFwcGVyIiwiVGl0bGVEaXZpZGVyIiwiSDEiLCJoMSIsIkgyIiwiaDIiLCJBdXRob3IiLCJzcGFuIiwiRm9vdGVyV3JhcHBlciIsImlzVmlzaWJsZSIsIlBsYWNlaG9sZGVyIiwiSG9tZSIsImZvb3RlclZpc2libGUiLCJzZXRGb290ZXJWaXNpYmxlIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsVG9wIiwid2luZG93Iiwic2Nyb2xsWSIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiZG9jSGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});