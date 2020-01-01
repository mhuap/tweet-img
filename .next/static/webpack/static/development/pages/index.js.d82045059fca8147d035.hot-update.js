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
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/index.scss */ "./scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_8__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

 // import { useRouter } from 'next/router'
// import SEO from "../components/seo"

 // import logosrc from '../images/Twitter_Logo_Blue.svg'

var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(IndexPage, _React$Component);

  // const router = useRouter()
  // const { tweeturl } = router.query
  function IndexPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndexPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexPage).call(this, props));
    _this.state = {
      url: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IndexPage, [{
    key: "handleChange",
    value: function handleChange(e) {
      e.preventDefault();
      this.setState({
        url: e.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault(); //making a post request with the fetch API

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/api', {
        url: this.state.url
      }).then(function (response) {
        // console.log(response.data)
        var div = document.getElementById('tweet');
        div.innerHTML = response.data;
        var logo = document.createElement('img');
        logo.id = 'logo';
        logo.src = '/Twitter_Logo_Blue.png';
        document.getElementById('tweet').appendChild(logo);
        var ver = document.querySelector('.u-hiddenVisually');

        if (ver) {
          var badge = document.createElement('img');
          badge.id = 'badge';
          badge.src = '/verified.png';
          ver.parentNode.replaceChild(badge, ver);
        } // this.genCanvas()

      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "genCanvas",
    value: function genCanvas() {
      var html2canvas = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");

      html2canvas(document.querySelector("#tweet-container"), {
        allowTaint: true
      }).then(function (canvas) {
        // document.querySelector('#container').appendChild(canvas);
        var tweetContainer = document.getElementById('tweet-container-container');
        tweetContainer.parentNode.replaceChild(canvas, tweetContainer);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "container"
      }, __jsx("h1", null, "tweet-img"), __jsx("form", {
        onSubmit: this.handleSubmit
      }, __jsx("label", null, "Enter Tweet URL"), __jsx("div", {
        id: "form-input"
      }, __jsx("input", {
        id: "url-input",
        type: "text",
        onChange: this.handleChange,
        name: "url",
        placeholder: "twitter.com/status/tweeturl"
      }), __jsx("button", null, "Generate Image"))), __jsx("div", {
        id: "tweet-container-container"
      }, __jsx("div", {
        id: "tweet-container"
      }, __jsx("div", {
        id: "tweet"
      }))), __jsx("button", {
        onClick: this.genCanvas
      }, "Save Image"));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); // IndexPage.getInitialProps = async ({ req }) => {
//   const res = await axios.post('/');
//   const json = await res.json();
//   return { tweeturl: json.url };
// }


/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.d82045059fca8147d035.hot-update.js.map