webpackHotUpdate("static/development/pages/index.js",{

/***/ "./scraper-client.js":
/*!***************************!*\
  !*** ./scraper-client.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

// const cheerio = require("cheerio");
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // https://twitter.com/dog_feelings
// const url = 'https://twitter.com/SciShow/status/1208767945813442564'
// const url = 'https://publish.twitter.com/#'
// https://twitter.com/redditships/status/1210309670654664719


var twitterLogo = __webpack_require__(/*! ./components/twitter-logo.js */ "./components/twitter-logo.js");

var verifiedBadge = __webpack_require__(/*! ./components/verified.js */ "./components/verified.js");

var str2 = "<div class=\"permalink-tweet\"><a class=\"account-group js-account-group js-action-profile js-user-profile-link js-nav\" href=\"/ProBirdRights\" data-user-id=\"448476934\">\n      <img class=\"avatar js-action-profile-avatar\" src=\"https://pbs.twimg.com/profile_images/684212991714131972/15IGSMB2_bigger.jpg\" alt>\n    <span class=\"FullNameGroup\">\n      <strong class=\"fullname show-popup-with-id u-textTruncate \" data-aria-label-part>birdsrightsactivist</strong><span>&#x200F;</span><span class=\"UserNameBreak\">&#xA0;</span></span><span class=\"username u-dir u-textTruncate\" dir=\"ltr\" data-aria-label-part>@<b>ProBirdRights</b></span></a><span class=\"_timestamp js-short-timestamp \" data-aria-label-part=\"last\" data-time=\"1577303405\" data-time-ms=\"1577303405000\" data-long-form=\"true\">Dec 25</span>\n\n\n\n        <div class=\"js-tweet-text-container\">\n  <p class=\"TweetTextSize TweetTextSize--jumbo js-tweet-text tweet-text\" lang=\"en\" data-aria-label-part=\"0\">reindeer. stay. in. ur. lane.</p>\n</div></div>";
var str3 = "<div class=\"permalink-tweet\"><a class=\"account-group js-account-group js-action-profile js-user-profile-link js-nav\">\n      <img class=\"avatar js-action-profile-avatar\" src=\"https://pbs.twimg.com/profile_images/1046968391389589507/_0r5bQLl_bigger.jpg\" alt>\n    <span class=\"FullNameGroup\">\n      <strong class=\"fullname show-popup-with-id u-textTruncate \" data-aria-label-part>Thoughts of Dog&#xAE;</strong><span>&#x200F;</span><span class=\"u-hiddenVisually\">Verified account</span><span class=\"UserNameBreak\">&#xA0;</span></span><span class=\"username u-dir u-textTruncate\" dir=\"ltr\" data-aria-label-part>@<b>dog_feelings</b></span></a><span class=\"_timestamp js-short-timestamp \" data-aria-label-part=\"last\" data-time=\"1572893428\" data-time-ms=\"1572893428000\" data-long-form=\"true\">Nov 4</span>\n        <div class=\"js-tweet-text-container\">\n  <p class=\"TweetTextSize TweetTextSize--jumbo js-tweet-text tweet-text\" lang=\"en\" data-aria-label-part=\"0\">the human keeps a picture of me. on the front of their little computer. so they can show everyone they meet. wherever they go. just how beautiful i am</p>\n</div></div>";
var dev = false;

var parse = function parse(result) {
  result.find(".follow-bar, .ProfileTweet-action, .tweet-text .u-hidden,\n    .permalink-footer, .stream-item-footer,\n    .js-machine-translated-tweet-container, .tweet-stats-container, .tweet-details-fixer").remove();
  var img = result.find('.AdaptiveMedia-container img');
  img.removeAttr('style');
  result.find('.AdaptiveMediaOuterContainer').replaceWith(img);
  var accountInfo = result.find('.account-group, .js-short-timestamp');
  accountInfo.removeAttr('href');
  accountInfo.removeAttr('data-user-id');
  result.find('.content.clearfix').replaceWith(accountInfo);
  accountInfo.after("<img id='logo' src='/twitterlogoblue.png'/>"); // result.find('.account-group').after(twitterLogo);

  console.log(result);
  var verified = result.find('.u-hiddenVisually');

  if (verified.length) {
    verified.replaceWith("<img id='badge' src='/verified.png'/>"); // verified.replaceWith(verifiedBadge);
  } // console.log(result)


  return result.html();
};

var getTweet = function getTweet(siteUrl) {
  if (dev) {
    // const $ = cheerio.load(str3);
    var $all = $(str3);
    var tweet = $($all);
    var allImgs = tweet.find('img').each(function (i, elem) {
      $(this).attr('crossorigin', '*'); // console.log(elem);
    });
    var re = parse(tweet).trim(); // console.log(re);

    return new _Promise(function (resolve, reject) {
      resolve(re);
    });
  }

  var anyoriginurl = "https://cors-anywhere.herokuapp.com/" + siteUrl;
  return axios.get(anyoriginurl).then(function (response) {
    if (response.status === 200) {
      // const $ = cheerio.load(response.data);
      console.log('hello');

      var _$all = $(response.data);

      var _tweet = $(_$all).find('.permalink-tweet');

      var _allImgs = $('.permalink-tweet img').each(function (i, elem) {
        // console.log(result.findthis.html());
        $(this).attr('crossorigin', 'anonymous');
      });

      return parse(_tweet);
    }
  })["catch"](function (error) {
    console.log(error);
    throw error;
  });
};

module.exports = getTweet;

/***/ })

})
//# sourceMappingURL=index.js.393d87a2525a2d79f9f6.hot-update.js.map