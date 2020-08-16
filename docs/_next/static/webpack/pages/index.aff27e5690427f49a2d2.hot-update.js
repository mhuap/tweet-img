webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_result__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/result */ \"./components/result.js\");\n/* harmony import */ var _components_arrow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/arrow.js */ \"./components/arrow.js\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scss/index.scss */ \"./scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Matias/Documents/ImageTweet/tweet-img/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar getTweet = __webpack_require__(/*! ../scraper-client.js */ \"./scraper-client.js\"); // import SEO from \"../components/seo\"\n\n\n\n\n\nvar serverErrorMsg = 'Server Error';\nvar ASSET_PREFIX = '/tweet-img';\n\nvar IndexPage = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(IndexPage, _React$Component);\n\n  var _super = _createSuper(IndexPage);\n\n  function IndexPage(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, IndexPage);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      loading: false,\n      blank: true,\n      error: false,\n      tweet: {\n        text: '',\n        date: null,\n        media: null,\n        urls: null,\n        other: null\n      },\n      user: {\n        username: '',\n        name: '',\n        verified: false,\n        img: null\n      }\n    };\n    _this.result = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();\n    _this.urlInput = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();\n    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.validate = _this.validate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(IndexPage, [{\n    key: \"createTweet\",\n    value: function createTweet(url) {\n      var _this2 = this;\n\n      // console.log('axios');\n      this.setState({\n        loading: true\n      }); // console.log('loading')\n      // SERVER-SIDE\n\n      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/api/tweet', {\n        tweetId: url\n      }).then(function (response) {\n        // console.log('response')\n        var tweet = response.data.data[0];\n        var media;\n\n        if (tweet.attachments) {\n          media = response.data.includes.media[0].url;\n        } else {\n          media = null;\n        } // console.log(media)\n\n\n        var user = response.data.includes.users[0];\n        var tweetUrls = {};\n        var other = [];\n\n        if (tweet.entities) {\n          // URLs\n          if (tweet.entities.urls) {\n            var urls = tweet.entities.urls;\n\n            for (var i = 0; i < urls.length; i++) {\n              if (!urls[i].display_url.includes('pic.twitter.com')) {\n                tweetUrls[urls[i].url] = urls[i].display_url;\n              }\n            }\n          }\n\n          if (tweet.entities.mentions) {\n            var mentions = tweet.entities.mentions;\n\n            for (var _i = 0; _i < mentions.length; _i++) {\n              other.push('@' + mentions[_i].username);\n            }\n          }\n\n          if (tweet.entities.hashtags) {\n            var hashtags = tweet.entities.hashtags;\n\n            for (var _i2 = 0; _i2 < hashtags.length; _i2++) {\n              other.push('#' + hashtags[_i2].tag);\n            }\n          }\n        } // console.log(tweetUrls);\n\n\n        _this2.setState({\n          tweet: {\n            text: tweet.text,\n            date: tweet.created_at,\n            media: media,\n            urls: tweetUrls,\n            other: other\n          },\n          user: {\n            username: user.username,\n            name: user.name,\n            verified: user.verified,\n            img: user.profile_image_url\n          },\n          loading: false\n        }); // console.log('not loading')\n\n      })[\"catch\"](function (error) {\n        _this2.setState({\n          tweet: errormsg,\n          loading: false\n        }); // console.log('not loading')\n\n      });\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      var _this3 = this;\n\n      e.preventDefault(); // console.log('Submitted');\n\n      var tweetId = this.validate(this.urlInput.current.value);\n\n      if (tweetId == 0) {\n        this.setState({\n          blank: true,\n          error: true\n        });\n      } else {\n        this.setState({\n          blank: false,\n          error: false\n        }, function () {\n          _this3.createTweet(tweetId);\n        });\n      }\n    }\n  }, {\n    key: \"validate\",\n    value: function validate(urlInput) {\n      var regexMobile = /(https:\\/\\/)?mobile.twitter.com\\/([a-z]|[A-Z]|\\d|_){0,15}\\/status\\/(\\d{1,19})/g;\n      var regexGen = /(https:\\/\\/)?(www)?twitter.com\\/([a-z]|[A-Z]|\\d|_){0,15}\\/status\\/(\\d{1,19})/g;\n      var newInput;\n      var mobile = regexMobile.exec(urlInput);\n\n      if (mobile) {\n        newInput = mobile[3];\n      } else {\n        var valid = regexGen.exec(urlInput);\n\n        if (valid) {\n          newInput = valid[4];\n        } else {\n          newInput = 0;\n        }\n      }\n\n      return newInput;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var res;\n\n      if (this.state.blank) {\n        res = null;\n      } else if (this.state.loading) {\n        res = __jsx(\"p\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 185,\n            columnNumber: 13\n          }\n        }, \"Loading...\");\n      } else {\n        res = __jsx(_components_result__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          blank: this.state.blank,\n          tweet: this.state.tweet,\n          user: this.state.user,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 187,\n            columnNumber: 13\n          }\n        }); // res = this.state.tweet.text;\n      }\n\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 193,\n          columnNumber: 9\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 194,\n          columnNumber: 11\n        }\n      }, \"tweet-img\"), __jsx(\"meta\", {\n        charSet: \"utf-8\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 195,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\",\n        key: \"viewport\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 196,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        name: \"description\",\n        content: \"Generate image from tweets\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 197,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        name: \"keywords\",\n        content: \"Twitter,Image,Background,Tweet,Instagram,Social,Media\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 198,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        name: \"author\",\n        content: \"Matias Huapaya\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 199,\n          columnNumber: 11\n        }\n      }), __jsx(\"link\", {\n        rel: \"shortcut icon\",\n        href: ASSET_PREFIX + \"/logo-bgwhite.png\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 200,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        property: \"og:title\",\n        content: \"tweet-img\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 201,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        property: \"og:description\",\n        content: \"Offering tour packages for individuals or groups.\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 202,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        property: \"og:image\",\n        content: \"https://mhuap.github.io/tweet-img/example.png\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 203,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        property: \"og:url\",\n        content: \"https://mhuap.github.io/tweet-img\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 204,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        property: \"og:site_name\",\n        content: \"tweet-img\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 205,\n          columnNumber: 11\n        }\n      }), __jsx(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary_large_image\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 206,\n          columnNumber: 11\n        }\n      })), __jsx(\"div\", {\n        id: \"container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 209,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        id: \"form-wrapper\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 210,\n          columnNumber: 11\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 211,\n          columnNumber: 13\n        }\n      }, \"tweet-img\"), __jsx(\"p\", {\n        style: \"color; red\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 213,\n          columnNumber: 13\n        }\n      }, \"Currently down because Twitter obfuscated its CSS. Working on integrating with the official Twitter API.\"), __jsx(\"form\", {\n        id: \"top-form\",\n        onSubmit: this.handleSubmit,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 214,\n          columnNumber: 13\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 215,\n          columnNumber: 15\n        }\n      }, \"Enter Tweet URL\"), __jsx(\"div\", {\n        id: \"form-input\",\n        className: this.state.error ? 'error' : '',\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 216,\n          columnNumber: 15\n        }\n      }, __jsx(\"input\", {\n        id: \"url-input\",\n        type: \"text\",\n        ref: this.urlInput,\n        name: \"url\",\n        placeholder: \"twitter.com/status/tweeturl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 217,\n          columnNumber: 17\n        }\n      }), __jsx(\"button\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 218,\n          columnNumber: 17\n        }\n      }, __jsx(_components_arrow_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 218,\n          columnNumber: 25\n        }\n      }))), this.state.error ? __jsx(\"p\", {\n        id: \"error\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 220,\n          columnNumber: 35\n        }\n      }, \"Not a tweet URL\") : null)), __jsx(\"div\", {\n        id: \"result-wrapper\",\n        ref: this.result,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 224,\n          columnNumber: 11\n        }\n      }, res)), __jsx(\"footer\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 229,\n          columnNumber: 9\n        }\n      }, \"Created by \", __jsx(\"a\", {\n        href: \"https://twitter.com/matias_huapaya\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 230,\n          columnNumber: 22\n        }\n      }, \"Matias Huapaya\")));\n    }\n  }]);\n\n  return IndexPage;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJnZXRUd2VldCIsInJlcXVpcmUiLCJzZXJ2ZXJFcnJvck1zZyIsIkFTU0VUX1BSRUZJWCIsIkluZGV4UGFnZSIsInByb3BzIiwic3RhdGUiLCJsb2FkaW5nIiwiYmxhbmsiLCJlcnJvciIsInR3ZWV0IiwidGV4dCIsImRhdGUiLCJtZWRpYSIsInVybHMiLCJvdGhlciIsInVzZXIiLCJ1c2VybmFtZSIsIm5hbWUiLCJ2ZXJpZmllZCIsImltZyIsInJlc3VsdCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwidXJsSW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwidmFsaWRhdGUiLCJ1cmwiLCJzZXRTdGF0ZSIsImF4aW9zIiwicG9zdCIsInR3ZWV0SWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiYXR0YWNobWVudHMiLCJpbmNsdWRlcyIsInVzZXJzIiwidHdlZXRVcmxzIiwiZW50aXRpZXMiLCJpIiwibGVuZ3RoIiwiZGlzcGxheV91cmwiLCJtZW50aW9ucyIsInB1c2giLCJoYXNodGFncyIsInRhZyIsImNyZWF0ZWRfYXQiLCJwcm9maWxlX2ltYWdlX3VybCIsImVycm9ybXNnIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiY3JlYXRlVHdlZXQiLCJyZWdleE1vYmlsZSIsInJlZ2V4R2VuIiwibmV3SW5wdXQiLCJtb2JpbGUiLCJleGVjIiwidmFsaWQiLCJyZXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLGlEQUFELENBQXhCLEMsQ0FDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUMsY0FBYyxHQUFHLGNBQXZCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLFlBQXJCOztJQUVNQyxTOzs7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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgc2Nyb2xsZXIgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuY29uc3QgZ2V0VHdlZXQgPSByZXF1aXJlKFwiLi4vc2NyYXBlci1jbGllbnQuanNcIik7XG4vLyBpbXBvcnQgU0VPIGZyb20gXCIuLi9jb21wb25lbnRzL3Nlb1wiXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdWx0JztcbmltcG9ydCBBcnJvdyBmcm9tICcuLi9jb21wb25lbnRzL2Fycm93LmpzJztcbmltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJztcblxuY29uc3Qgc2VydmVyRXJyb3JNc2cgPSAnU2VydmVyIEVycm9yJztcbmNvbnN0IEFTU0VUX1BSRUZJWCA9ICcvdHdlZXQtaW1nJztcblxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgYmxhbms6IHRydWUsXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgdHdlZXQ6IHtcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICBkYXRlOiBudWxsLFxuICAgICAgICAgIG1lZGlhOiBudWxsLFxuICAgICAgICAgIHVybHM6IG51bGwsXG4gICAgICAgICAgb3RoZXI6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgdmVyaWZpZWQ6IGZhbHNlLFxuICAgICAgICAgIGltZzogbnVsbCxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5yZXN1bHQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLnVybElucHV0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjcmVhdGVUd2VldCh1cmwpe1xuICAgIC8vIGNvbnNvbGUubG9nKCdheGlvcycpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2FkaW5nOiB0cnVlXG4gICAgfSlcbiAgICAvLyBjb25zb2xlLmxvZygnbG9hZGluZycpXG5cbiAgICAvLyBTRVJWRVItU0lERVxuICAgIGF4aW9zLnBvc3QoJy9hcGkvdHdlZXQnLCB7XG4gICAgICB0d2VldElkOiB1cmxcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNwb25zZScpXG4gICAgICBjb25zdCB0d2VldCA9IHJlc3BvbnNlLmRhdGEuZGF0YVswXTtcblxuICAgICAgbGV0IG1lZGlhO1xuICAgICAgaWYgKHR3ZWV0LmF0dGFjaG1lbnRzKXtcbiAgICAgICAgbWVkaWEgPSByZXNwb25zZS5kYXRhLmluY2x1ZGVzLm1lZGlhWzBdLnVybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lZGlhID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2cobWVkaWEpXG5cbiAgICAgIGNvbnN0IHVzZXIgPSByZXNwb25zZS5kYXRhLmluY2x1ZGVzLnVzZXJzWzBdO1xuXG4gICAgICBjb25zdCB0d2VldFVybHMgPSB7fTtcbiAgICAgIGNvbnN0IG90aGVyID0gW107XG5cbiAgICAgIGlmICh0d2VldC5lbnRpdGllcyl7XG5cbiAgICAgICAgLy8gVVJMc1xuICAgICAgICBpZiAodHdlZXQuZW50aXRpZXMudXJscyl7XG4gICAgICAgICAgY29uc3QgdXJscyA9IHR3ZWV0LmVudGl0aWVzLnVybHM7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmICghdXJsc1tpXS5kaXNwbGF5X3VybC5pbmNsdWRlcygncGljLnR3aXR0ZXIuY29tJykpe1xuICAgICAgICAgICAgICB0d2VldFVybHNbdXJsc1tpXS51cmxdID0gdXJsc1tpXS5kaXNwbGF5X3VybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHdlZXQuZW50aXRpZXMubWVudGlvbnMpe1xuICAgICAgICAgIGNvbnN0IG1lbnRpb25zID0gdHdlZXQuZW50aXRpZXMubWVudGlvbnM7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW50aW9ucy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBvdGhlci5wdXNoKCdAJyArIG1lbnRpb25zW2ldLnVzZXJuYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHdlZXQuZW50aXRpZXMuaGFzaHRhZ3Mpe1xuICAgICAgICAgIGNvbnN0IGhhc2h0YWdzID0gdHdlZXQuZW50aXRpZXMuaGFzaHRhZ3M7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYXNodGFncy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBvdGhlci5wdXNoKCcjJyArIGhhc2h0YWdzW2ldLnRhZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2codHdlZXRVcmxzKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHR3ZWV0OiB7XG4gICAgICAgICAgdGV4dDogdHdlZXQudGV4dCxcbiAgICAgICAgICBkYXRlOiB0d2VldC5jcmVhdGVkX2F0LFxuICAgICAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgICAgICB1cmxzOiB0d2VldFVybHMsXG4gICAgICAgICAgb3RoZXI6IG90aGVyLFxuICAgICAgICB9LFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIHZlcmlmaWVkOiB1c2VyLnZlcmlmaWVkLFxuICAgICAgICAgIGltZzogdXNlci5wcm9maWxlX2ltYWdlX3VybCxcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZygnbm90IGxvYWRpbmcnKVxuXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHdlZXQ6IGVycm9ybXNnLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdub3QgbG9hZGluZycpXG4gICAgfSlcblxuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdTdWJtaXR0ZWQnKTtcblxuICAgIGNvbnN0IHR3ZWV0SWQgPSB0aGlzLnZhbGlkYXRlKHRoaXMudXJsSW5wdXQuY3VycmVudC52YWx1ZSk7XG4gICAgaWYgKHR3ZWV0SWQgPT0gMCl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYmxhbms6IHRydWUsXG4gICAgICAgIGVycm9yOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYmxhbms6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBmYWxzZVxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmNyZWF0ZVR3ZWV0KHR3ZWV0SWQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICB2YWxpZGF0ZSh1cmxJbnB1dCl7XG4gICAgY29uc3QgcmVnZXhNb2JpbGUgPSAvKGh0dHBzOlxcL1xcLyk/bW9iaWxlLnR3aXR0ZXIuY29tXFwvKFthLXpdfFtBLVpdfFxcZHxfKXswLDE1fVxcL3N0YXR1c1xcLyhcXGR7MSwxOX0pL2dcbiAgICBjb25zdCByZWdleEdlbiA9IC8oaHR0cHM6XFwvXFwvKT8od3d3KT90d2l0dGVyLmNvbVxcLyhbYS16XXxbQS1aXXxcXGR8Xyl7MCwxNX1cXC9zdGF0dXNcXC8oXFxkezEsMTl9KS9nXG5cbiAgICBsZXQgbmV3SW5wdXQ7XG4gICAgY29uc3QgbW9iaWxlID0gcmVnZXhNb2JpbGUuZXhlYyh1cmxJbnB1dCk7XG4gICAgaWYgKG1vYmlsZSkge1xuICAgICAgbmV3SW5wdXQgPSBtb2JpbGVbM107XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbGlkID0gcmVnZXhHZW4uZXhlYyh1cmxJbnB1dCk7XG5cbiAgICAgIGlmKHZhbGlkKXtcbiAgICAgICAgbmV3SW5wdXQgPSB2YWxpZFs0XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0lucHV0ID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3SW5wdXQ7XG5cbiAgfVxuXG5cbiAgcmVuZGVyKCl7XG4gICAgdmFyIHJlcztcbiAgICBpZiAodGhpcy5zdGF0ZS5ibGFuayl7XG4gICAgICByZXMgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKXtcbiAgICAgIHJlcyA9IDxwPkxvYWRpbmcuLi48L3A+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSA8UmVzdWx0IGJsYW5rPXt0aGlzLnN0YXRlLmJsYW5rfSB0d2VldD17dGhpcy5zdGF0ZS50d2VldH0gdXNlcj17dGhpcy5zdGF0ZS51c2VyfS8+O1xuICAgICAgLy8gcmVzID0gdGhpcy5zdGF0ZS50d2VldC50ZXh0O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+dHdlZXQtaW1nPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIga2V5PVwidmlld3BvcnRcIi8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlIGltYWdlIGZyb20gdHdlZXRzXCIvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJUd2l0dGVyLEltYWdlLEJhY2tncm91bmQsVHdlZXQsSW5zdGFncmFtLFNvY2lhbCxNZWRpYVwiLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIk1hdGlhcyBIdWFwYXlhXCIvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtBU1NFVF9QUkVGSVggKyBcIi9sb2dvLWJnd2hpdGUucG5nXCJ9IC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJ0d2VldC1pbWdcIi8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJPZmZlcmluZyB0b3VyIHBhY2thZ2VzIGZvciBpbmRpdmlkdWFscyBvciBncm91cHMuXCIvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9taHVhcC5naXRodWIuaW8vdHdlZXQtaW1nL2V4YW1wbGUucG5nXCIvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vbWh1YXAuZ2l0aHViLmlvL3R3ZWV0LWltZ1wiLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJ0d2VldC1pbWdcIi8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGRpdiBpZD0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGlkPSdmb3JtLXdyYXBwZXInPlxuICAgICAgICAgICAgPGgxPnR3ZWV0LWltZzwvaDE+XG4gICAgICAgICAgICB7LyogPHAgaWQ9J3N1cHBvcnQnPk9ubHkgdGVzdGVkIG9uIHNvbWUgdHdlZXRzLiA8YSB0YXJnZXQ9J19fYmxhbmsnIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9taHVhcC90d2VldC1pbWcvYmxvYi9tYXN0ZXIvUkVBRE1FLm1kI3R3ZWV0LXN1cHBvcnQnPlNlZSB3aGF0IGtpbmRzIG9mIHR3ZWV0cyB3ZSBzdXBwb3J0LjwvYT48L3A+ICovfVxuICAgICAgICAgICAgPHAgc3R5bGU9XCJjb2xvcjsgcmVkXCI+Q3VycmVudGx5IGRvd24gYmVjYXVzZSBUd2l0dGVyIG9iZnVzY2F0ZWQgaXRzIENTUy4gV29ya2luZyBvbiBpbnRlZ3JhdGluZyB3aXRoIHRoZSBvZmZpY2lhbCBUd2l0dGVyIEFQSS48L3A+XG4gICAgICAgICAgICA8Zm9ybSBpZD0ndG9wLWZvcm0nIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxsYWJlbD5FbnRlciBUd2VldCBVUkw8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGlkPSdmb3JtLWlucHV0JyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZXJyb3IgPyAnZXJyb3InIDogJyd9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ndXJsLWlucHV0J3R5cGU9J3RleHQnIHJlZj17dGhpcy51cmxJbnB1dH0gbmFtZT0ndXJsJyBwbGFjZWhvbGRlcj0ndHdpdHRlci5jb20vc3RhdHVzL3R3ZWV0dXJsJy8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj48QXJyb3cvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgPyA8cCBpZD0nZXJyb3InPk5vdCBhIHR3ZWV0IFVSTDwvcD4gOiBudWxsfVxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBpZD0ncmVzdWx0LXdyYXBwZXInIHJlZj17dGhpcy5yZXN1bHR9PlxuICAgICAgICAgICAge3Jlc31cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICBDcmVhdGVkIGJ5IDxhIGhyZWY9J2h0dHBzOi8vdHdpdHRlci5jb20vbWF0aWFzX2h1YXBheWEnPk1hdGlhcyBIdWFwYXlhPC9hPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})