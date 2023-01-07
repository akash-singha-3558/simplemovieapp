"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/watchlist";
exports.ids = ["pages/watchlist"];
exports.modules = {

/***/ "./pages/watchlist.jsx":
/*!*****************************!*\
  !*** ./pages/watchlist.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst Watchlist = ({ data  })=>{\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const refresh = ()=>{\n        console.log(\"refresh\");\n        router.replace(router.asPath);\n    };\n    const handleDelete = (el)=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](`https://mockserver-rny6.onrender.com/cart/${el}`).then(()=>refresh());\n        console.log(\"Deleted\");\n        toast({\n            position: \"top\",\n            description: \"Movie has been removed from your watchlist\",\n            status: \"info\",\n            duration: 3000,\n            isClosable: true\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TableContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table, {\n            variant: \"simple\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Thead, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                children: \"Movie Name\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                children: \"Year\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                children: \"Released\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                children: \"Genre\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                children: \"Language\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                children: \"Country\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                children: \"Imdb Rating\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                children: \"Remove From Watchlist\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tbody, {\n                    children: data.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                    children: el.Title\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                    children: el.Year\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                    children: el.Released\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                    children: el.Genre\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                    children: el.Language\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                    children: el.Country\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                    children: el.imdbRating\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        bg: \"red\",\n                                        color: \"white\",\n                                        onClick: ()=>{\n                                            handleDelete(el.id);\n                                        },\n                                        children: \"Remove\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 18\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, el.id, true, {\n                            fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n            lineNumber: 39,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\nextjsfirstdeploy\\\\simplemovieapp\\\\pages\\\\watchlist.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getServerSideProps() {\n    // Fetch data from external API\n    const res = await fetch(`https://mockserver-rny6.onrender.com/cart`);\n    const data = await res.json();\n    // Pass data to the page via props\n    return {\n        props: {\n            data\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Watchlist);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YXRjaGxpc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFTNEI7QUFDaUI7QUFDakI7QUFDYztBQUUxQyxNQUFNVyxZQUFVLENBQUMsRUFBQ0MsS0FBSSxFQUFDLEdBQUc7SUFDdEIsTUFBTUMsUUFBUUwsMERBQVFBO0lBQ3RCLE1BQU1NLFNBQU9KLHNEQUFTQTtJQUN0QixNQUFNSyxVQUFRLElBQUk7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaSCxPQUFPSSxPQUFPLENBQUNKLE9BQU9LLE1BQU07SUFFOUI7SUFDQSxNQUFNQyxlQUFhLENBQUNDLEtBQUs7UUFDdkJaLHVEQUFZLENBQUMsQ0FBQywwQ0FBMEMsRUFBRVksR0FBRyxDQUFDLEVBQUVFLElBQUksQ0FBQyxJQUFLUjtRQUMxRUMsUUFBUUMsR0FBRyxDQUFDO1FBRWJKLE1BQU07WUFDSFcsVUFBUztZQUVUQyxhQUFhO1lBQ2JDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxZQUFZLElBQUk7UUFDbEI7SUFDTjtJQUNBLHFCQUNJLDhEQUFDdEIsNERBQWNBO2tCQUNqQiw0RUFBQ04sbURBQUtBO1lBQUM2QixTQUFROzs4QkFFYiw4REFBQzVCLG1EQUFLQTs4QkFDSiw0RUFBQ0UsZ0RBQUVBOzswQ0FDRCw4REFBQ0MsZ0RBQUVBOzBDQUFDOzs7Ozs7MENBQ0osOERBQUNBLGdEQUFFQTswQ0FBQzs7Ozs7OzBDQUNKLDhEQUFDQSxnREFBRUE7MENBQUU7Ozs7OzswQ0FDTCw4REFBQ0EsZ0RBQUVBOzBDQUFDOzs7Ozs7MENBQ0osOERBQUNBLGdEQUFFQTswQ0FBQzs7Ozs7OzBDQUNKLDhEQUFDQSxnREFBRUE7MENBQUM7Ozs7OzswQ0FDSiw4REFBQ0EsZ0RBQUVBOzBDQUFDOzs7Ozs7MENBQ0osOERBQUNBLGdEQUFFQTswQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNGLG1EQUFLQTs4QkFFTFUsS0FBS2tCLEdBQUcsQ0FBQyxDQUFDVCxtQkFDUCw4REFBQ2xCLGdEQUFFQTs7OENBQ0MsOERBQUNFLGdEQUFFQTs4Q0FBRWdCLEdBQUdVLEtBQUs7Ozs7Ozs4Q0FDYiw4REFBQzFCLGdEQUFFQTs4Q0FBRWdCLEdBQUdXLElBQUk7Ozs7Ozs4Q0FDWiw4REFBQzNCLGdEQUFFQTs4Q0FBRWdCLEdBQUdZLFFBQVE7Ozs7Ozs4Q0FDaEIsOERBQUM1QixnREFBRUE7OENBQUVnQixHQUFHYSxLQUFLOzs7Ozs7OENBQ2IsOERBQUM3QixnREFBRUE7OENBQUVnQixHQUFHYyxRQUFROzs7Ozs7OENBQ2hCLDhEQUFDOUIsZ0RBQUVBOzhDQUFFZ0IsR0FBR2UsT0FBTzs7Ozs7OzhDQUNmLDhEQUFDL0IsZ0RBQUVBOzhDQUFFZ0IsR0FBR2dCLFVBQVU7Ozs7Ozs4Q0FDbEIsOERBQUNoQyxnREFBRUE7OENBQUUsNEVBQUNFLG9EQUFNQTt3Q0FBQytCLElBQUc7d0NBQU1DLE9BQU07d0NBQVFDLFNBQVMsSUFBSTs0Q0FBQ3BCLGFBQWFDLEdBQUdvQixFQUFFO3dDQUFDO2tEQUFHOzs7Ozs7Ozs7Ozs7MkJBUm5FcEIsR0FBR29CLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CdEI7QUFHTyxlQUFlQyxxQkFBcUI7SUFDekMsK0JBQStCO0lBQy9CLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLHlDQUF5QyxDQUFDO0lBQ25FLE1BQU1oQyxPQUFPLE1BQU0rQixJQUFJRSxJQUFJO0lBRTNCLGtDQUFrQztJQUNsQyxPQUFPO1FBQUVDLE9BQU87WUFBRWxDO1FBQUs7SUFBRTtBQUMzQixDQUFDO0FBSUQsaUVBQWVELFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZWFwcC8uL3BhZ2VzL3dhdGNobGlzdC5qc3g/ZGVhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtcclxuICAgIFRhYmxlLFxyXG4gICAgVGhlYWQsXHJcbiAgICBUYm9keSxcclxuICAgIFRyLFxyXG4gICAgVGgsXHJcbiAgICBUZCxcclxuICAgIFRhYmxlQ29udGFpbmVyLFxyXG4gICAgQnV0dG9uLFxyXG4gIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbiAgaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG4gIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuICBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBXYXRjaGxpc3Q9KHtkYXRhfSk9PntcclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKVxyXG4gICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgcmVmcmVzaD0oKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlZnJlc2hcIilcclxuICAgICAgcm91dGVyLnJlcGxhY2Uocm91dGVyLmFzUGF0aClcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGU9KGVsKT0+e1xyXG4gICAgICBheGlvcy5kZWxldGUoYGh0dHBzOi8vbW9ja3NlcnZlci1ybnk2Lm9ucmVuZGVyLmNvbS9jYXJ0LyR7ZWx9YCkudGhlbigoKT0+IHJlZnJlc2goKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlZFwiKVxyXG5cclxuICAgICB0b2FzdCh7XHJcbiAgICAgICAgcG9zaXRpb246XCJ0b3BcIixcclxuICAgICAgICBcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNb3ZpZSBoYXMgYmVlbiByZW1vdmVkIGZyb20geW91ciB3YXRjaGxpc3RcIixcclxuICAgICAgICBzdGF0dXM6ICdpbmZvJyxcclxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgICB9KVxyXG59XHJcbnJldHVybihcclxuICAgIDxUYWJsZUNvbnRhaW5lcj5cclxuICA8VGFibGUgdmFyaWFudD0nc2ltcGxlJz5cclxuIFxyXG4gICAgPFRoZWFkPlxyXG4gICAgICA8VHI+XHJcbiAgICAgICAgPFRoPk1vdmllIE5hbWU8L1RoPlxyXG4gICAgICAgIDxUaD5ZZWFyPC9UaD5cclxuICAgICAgICA8VGggPlJlbGVhc2VkPC9UaD5cclxuICAgICAgICA8VGg+R2VucmU8L1RoPlxyXG4gICAgICAgIDxUaD5MYW5ndWFnZTwvVGg+XHJcbiAgICAgICAgPFRoPkNvdW50cnk8L1RoPlxyXG4gICAgICAgIDxUaD5JbWRiIFJhdGluZzwvVGg+XHJcbiAgICAgICAgPFRoPlJlbW92ZSBGcm9tIFdhdGNobGlzdDwvVGg+XHJcbiAgICAgIDwvVHI+XHJcbiAgICA8L1RoZWFkPlxyXG4gICAgPFRib2R5PlxyXG4gICAge1xyXG4gICAgIGRhdGEubWFwKChlbCk9PihcclxuICAgICAgICA8VHIga2V5PXtlbC5pZH0+XHJcbiAgICAgICAgICAgIDxUZD57ZWwuVGl0bGV9PC9UZD5cclxuICAgICAgICAgICAgPFRkPntlbC5ZZWFyfTwvVGQ+XHJcbiAgICAgICAgICAgIDxUZD57ZWwuUmVsZWFzZWR9PC9UZD5cclxuICAgICAgICAgICAgPFRkPntlbC5HZW5yZX08L1RkPlxyXG4gICAgICAgICAgICA8VGQ+e2VsLkxhbmd1YWdlfTwvVGQ+XHJcbiAgICAgICAgICAgIDxUZD57ZWwuQ291bnRyeX08L1RkPlxyXG4gICAgICAgICAgICA8VGQ+e2VsLmltZGJSYXRpbmd9PC9UZD5cclxuICAgICAgICAgICAgPFRkPns8QnV0dG9uIGJnPVwicmVkXCIgY29sb3I9XCJ3aGl0ZVwiIG9uQ2xpY2s9eygpPT57aGFuZGxlRGVsZXRlKGVsLmlkKX19PlJlbW92ZTwvQnV0dG9uPn08L1RkPlxyXG4gICAgICAgIDwvVHI+XHJcbiAgICAgKSlcclxuICAgIH1cclxuICAgICA8L1Rib2R5PiBcclxuICAgIFxyXG4gIDwvVGFibGU+XHJcbjwvVGFibGVDb250YWluZXI+XHJcbilcclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL21vY2tzZXJ2ZXItcm55Ni5vbnJlbmRlci5jb20vY2FydGApXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xyXG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2F0Y2hsaXN0OyJdLCJuYW1lcyI6WyJUYWJsZSIsIlRoZWFkIiwiVGJvZHkiLCJUciIsIlRoIiwiVGQiLCJUYWJsZUNvbnRhaW5lciIsIkJ1dHRvbiIsInVzZVRvYXN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJXYXRjaGxpc3QiLCJkYXRhIiwidG9hc3QiLCJyb3V0ZXIiLCJyZWZyZXNoIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJhc1BhdGgiLCJoYW5kbGVEZWxldGUiLCJlbCIsImRlbGV0ZSIsInRoZW4iLCJwb3NpdGlvbiIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiZHVyYXRpb24iLCJpc0Nsb3NhYmxlIiwidmFyaWFudCIsIm1hcCIsIlRpdGxlIiwiWWVhciIsIlJlbGVhc2VkIiwiR2VucmUiLCJMYW5ndWFnZSIsIkNvdW50cnkiLCJpbWRiUmF0aW5nIiwiYmciLCJjb2xvciIsIm9uQ2xpY2siLCJpZCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/watchlist.jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/watchlist.jsx"));
module.exports = __webpack_exports__;

})();