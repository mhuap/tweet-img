webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_result__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/result */ "./components/result.js");
/* harmony import */ var _components_arrow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/arrow.js */ "./components/arrow.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scss/index.scss */ "./scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/Users/Matias/Documents/ImageTweet/tweet-img/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var getTweet = __webpack_require__(/*! ../scraper-client.js */ "./scraper-client.js"); // import SEO from "../components/seo"





var errormsg = 'Error: 404 Invalid URL';
var ASSET_PREFIX = '/tweet-img/';

var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(IndexPage, _React$Component);

  function IndexPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndexPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexPage).call(this, props));
    _this.state = {
      loading: false,
      // url: '',
      blank: true,
      tweet: ''
    };
    _this.result = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.urlInput = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IndexPage, [{
    key: "createTweet",
    value: function createTweet(url) {
      var _this2 = this;

      console.log('axios');
      this.setState({
        loading: true
      });
      console.log('loading'); // SERVER-SIDE
      // axios.post('/api', {
      //   url: url
      // })

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('https://us-central1-tweet-img.cloudfunctions.net/scraper', {
        url: url
      }).then(function (response) {
        console.log('response'); // console.log(response)

        _this2.setState({
          tweet: response.data,
          loading: false
        });

        console.log('not loading');
      })["catch"](function (error) {
        _this2.setState({
          tweet: errormsg,
          loading: false
        });

        console.log('not loading');
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      react_scroll__WEBPACK_IMPORTED_MODULE_9__["scroller"].scrollTo('result-wrapper', {
        smooth: true
      });
      console.log('Submitted');
      this.setState({
        blank: false
      }, function () {
        return _this3.createTweet(_this3.urlInput.current.value);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var res;

      if (this.state.blank) {
        res = null;
      } else if (this.state.loading) {
        res = __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Loading...");
      } else {
        res = __jsx(_components_result__WEBPACK_IMPORTED_MODULE_10__["default"], {
          blank: this.state.blank,
          tweet: this.state.tweet,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        });
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "tweet-img"), __jsx("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        key: "viewport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), __jsx("meta", {
        name: "description",
        content: "Generate image from tweets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), __jsx("meta", {
        name: "keywords",
        content: "Twitter,Image,Background,Tweet,Instagram,Social,Media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), __jsx("meta", {
        name: "author",
        content: "Matias Huapaya",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), __jsx("link", {
        rel: "shortcut icon",
        href: "/logo-bgwhite.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), __jsx("div", {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("div", {
        id: "form-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "tweet-img"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Only tested on some tweets. ", __jsx("a", {
        target: "__blank",
        href: "https://github.com/mhuap/tweet-img/blob/master/README.md#tweet-support",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "See what kinds of tweets we support.")), __jsx("form", {
        id: "top-form",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Enter Tweet URL"), __jsx("div", {
        id: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx("input", {
        id: "url-input",
        type: "text",
        ref: this.urlInput,
        name: "url",
        placeholder: "twitter.com/status/tweeturl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), __jsx("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx(_components_arrow_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }))))), __jsx("div", {
        id: "result-wrapper",
        ref: this.result,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, res)), __jsx("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Created by ", __jsx("a", {
        href: "https://twitter.com/matias_huapaya",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Matias Huapaya"))));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.39223ee81d49b4dbbe96.hot-update.js.map