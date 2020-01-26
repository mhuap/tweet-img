webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/result.js":
/*!******************************!*\
  !*** ./components/result.js ***!
  \******************************/
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
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/Matias/Documents/ImageTweet/tweet-img/components/result.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var errormsg = 'Error: 404 Invalid URL';

var Result =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Result, _React$Component);

  function Result(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Result);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Result).call(this, props));
    _this.state = {
      bg: '#E1E8ED',
      isDiff: false,
      // is the image different from the preview
      first: true // is this the first image to be generated

    };
    _this.handleColorChange = _this.handleColorChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.genCanvas = _this.genCanvas.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.imgClick = _this.imgClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.refresh = _this.refresh.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Result, [{
    key: "genCanvas",
    value: function genCanvas() {
      var _this2 = this;

      var html2canvas = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js"); // window.scrollTo(0,0)


      html2canvas(document.querySelector("#preview .tweet-container"), {
        allowTaint: true,
        useCORS: true
      }).then(function (canvas) {
        canvas.className = 'tweet-container-container';
        var img = document.createElement('img');
        img.src = canvas.toDataURL();

        if (_this2.state.first) {
          var div = document.querySelector('#canvas .tweet-container-container');
          div.parentNode.replaceChild(img, div);
        } else {
          var old = document.querySelector('#canvas > img');
          old.parentNode.replaceChild(img, old);
        }
      }).then(function () {
        if (_this2.state.first) {
          _this2.setState({
            first: false
          });
        }
      }); // scroller.scrollTo('canvas')
    }
  }, {
    key: "imgClick",
    value: function imgClick() {
      this.genCanvas();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.setState({
        isDiff: false
      });
      this.genCanvas();
    }
  }, {
    key: "handleColorChange",
    value: function handleColorChange(color, event) {
      if (this.state.first) {
        this.setState({
          bg: color.hex
        });
      } else {
        this.setState({
          bg: color.hex,
          isDiff: true
        });
      }

      var v = document.querySelector('.twitter-picker input');
      v.value = String(color.hex).toUpperCase().replace('#', '');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tweet !== errormsg) {
        var v = document.querySelector('.twitter-picker input');
        v.value = String(this.state.bg).toUpperCase().replace('#', '');
      }

      react_scroll__WEBPACK_IMPORTED_MODULE_9__["scroller"].scrollTo('result-wrapper', {
        smooth: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log('render');
      var bgStyle = {
        backgroundColor: this.state.bg
      }; // console.log(this.props.tweet);

      if (this.props.tweet === errormsg) {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, errormsg);
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
        id: "result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx("div", {
        id: "preview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Preview"), __jsx("div", {
        className: "tweet-container-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("div", {
        className: "tweet-container",
        style: bgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("div", {
        id: "tweet",
        dangerouslySetInnerHTML: {
          __html: this.props.tweet
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))), __jsx(react_color__WEBPACK_IMPORTED_MODULE_8__["TwitterPicker"], {
        triangle: "hide",
        onChangeComplete: this.handleColorChange,
        colors: ['#E1E8ED', '#EB144C', '#FF8B00', '#ffd000', '#00D036', '#1DA1F2', '#ff40cf', '#7900f2'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })), __jsx("div", {
        id: "canvas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx("div", {
        id: "canvas-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Image"), __jsx("button", {
        id: "refresh",
        onClick: this.refresh,
        disabled: !this.state.isDiff || this.state.first,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("span", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "\u21BB"), " Refresh")), __jsx("div", {
        className: "tweet-container-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("div", {
        className: "tweet-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("button", {
        onClick: this.imgClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Create Image"))))));
    }
  }]);

  return Result;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ })

})
//# sourceMappingURL=index.js.56e99f6b8e454a572d7c.hot-update.js.map