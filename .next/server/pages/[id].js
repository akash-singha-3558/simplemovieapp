"use strict";
(() => {
var exports = {};
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 667:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(648);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SingleMovie = ({
  el
}) => {
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useToast)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Container, {
    maxW: '7xl',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.SimpleGrid, {
      columns: {
        base: 1,
        lg: 2
      },
      spacing: {
        base: 8,
        md: 10
      },
      py: {
        base: 18,
        md: 24
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
          rounded: 'md',
          alt: 'product image',
          src: el.Images[2],
          fit: 'cover',
          align: 'center',
          w: '100%',
          h: {
            base: '100%',
            sm: '400px',
            lg: '500px'
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stack, {
        spacing: {
          base: 6,
          md: 10
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          as: 'header',
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
            lineHeight: 1.1,
            fontWeight: 600,
            fontSize: {
              base: '2xl',
              sm: '4xl',
              lg: '5xl'
            },
            children: el.Title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('gray.900', 'gray.400'),
            fontWeight: 300,
            fontSize: '2xl',
            children: el.Year
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stack, {
          spacing: {
            base: 4,
            sm: 6
          },
          direction: 'column',
          divider: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.StackDivider, {
            borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('gray.200', 'gray.600')
          }),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.VStack, {
            spacing: {
              base: 4,
              sm: 6
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
              color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('gray.500', 'gray.400'),
              fontSize: '2xl',
              fontWeight: '300',
              children: ["Writer: ", el.Writer]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
              fontSize: 'lg',
              children: ["Plot: ", el.Plot]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
              fontSize: {
                base: '16px',
                lg: '18px'
              },
              color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('yellow.500', 'yellow.300'),
              fontWeight: '500',
              textTransform: 'uppercase',
              mb: '4',
              children: ["Actors: ", el.Actors]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.SimpleGrid, {
              columns: {
                base: 1,
                md: 2
              },
              spacing: 10,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.List, {
                spacing: 2,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
                  children: ["Director: ", el.Director]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
                  children: ["Genre: ", el.Genre]
                }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
                  children: ["Awards:  ", el.Awards]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.List, {
                spacing: 2,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
                  children: ["Metascore:", el.Metascore]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
                  children: ["Rating :", el.imdbRating]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
                  children: ["Imdb Votes :", el.imdbVotes]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
              fontSize: {
                base: '16px',
                lg: '18px'
              },
              color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('yellow.500', 'yellow.300'),
              fontWeight: '500',
              textTransform: 'uppercase',
              mb: '4',
              children: "Details"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.List, {
              spacing: 2,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                  as: 'span',
                  fontWeight: 'bold',
                  children: "Runtime :"
                }), ' ', el.Runtime]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                  as: 'span',
                  fontWeight: 'bold',
                  children: "Rated :"
                }), ' ', el.Rated]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                  as: 'span',
                  fontWeight: 'bold',
                  children: "Language :"
                }), ' ', el.Language]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                  as: 'span',
                  fontWeight: 'bold',
                  children: "Metascore:"
                }), ' ', el.Metascore]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                  as: 'span',
                  fontWeight: 'bold',
                  children: "imdbVotes:"
                }), ' ', el.imdbVotes]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                  as: 'span',
                  fontWeight: 'bold',
                  children: "imdbID :"
                }), ' ', el.imdbID]
              })]
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
          rounded: 'none',
          w: 'full',
          mt: 8,
          size: 'lg',
          py: '7',
          bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('gray.900', 'gray.50'),
          color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('white', 'gray.900'),
          textTransform: 'uppercase',
          _hover: {
            transform: 'translateY(2px)',
            boxShadow: 'lg'
          },
          onClick: () => {
            axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("https://mockserver-rny6.onrender.com/cart", _objectSpread({}, el));
            toast({
              position: "top",
              description: "Movie has been added your watchlist",
              status: 'success',
              duration: 3000,
              isClosable: true
            });
          },
          children: "Add to Wishlist"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stack, {
          direction: "row",
          alignItems: "center",
          justifyContent: 'center'
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleMovie);
async function getStaticProps(context) {
  let id = context.params.id;
  const res = await fetch(`https://movies-database-gold.vercel.app/movies/${id}`);
  const el = await res.json();
  return {
    props: {
      el: el
    }
  };
}
async function getStaticPaths() {
  const res = await fetch(`https://movies-database-gold.vercel.app/movies`);
  const data = await res.json();
  return {
    paths: data.map(el => ({
      params: {
        id: el.id.toString()
      }
    })),
    fallback: false // can also be true or 'blocking'

  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(667));
module.exports = __webpack_exports__;

})();