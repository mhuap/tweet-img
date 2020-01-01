const cheerio = require("cheerio");
const axios = require("axios");
// const url = 'https://publish.twitter.com/?query=https%3A%2F%2Ftwitter.com%2FSciShow%2Fstatus%2F1208767945813442564&widget=Tweet'
// const url = 'https://twitter.com/SciShow/status/1208767945813442564'
// const url = 'https://publish.twitter.com/#'
// https://twitter.com/redditships/status/1210309670654664719

const str2 = `<a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/ProBirdRights" data-user-id="448476934">
      <img class="avatar js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/684212991714131972/15IGSMB2_bigger.jpg" alt>
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part>birdsrightsactivist</strong><span>&#x200F;</span><span class="UserNameBreak">&#xA0;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part>@<b>ProBirdRights</b></span></a><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1577303405" data-time-ms="1577303405000" data-long-form="true">Dec 25</span>



        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--jumbo js-tweet-text tweet-text" lang="en" data-aria-label-part="0">reindeer. stay. in. ur. lane.</p>
</div>`

const str3 = `<a class="account-group js-account-group js-action-profile js-user-profile-link js-nav">
      <img class="avatar js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/1046968391389589507/_0r5bQLl_bigger.jpg" alt>
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part>Thoughts of Dog&#xAE;</strong><span>&#x200F;</span><span class="u-hiddenVisually">Verified account</span><span class="UserNameBreak">&#xA0;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part>@<b>dog_feelings</b></span></a><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1572893428" data-time-ms="1572893428000" data-long-form="true">Nov 4</span>



        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--jumbo js-tweet-text tweet-text" lang="en" data-aria-label-part="0">the human keeps a picture of me. on the front of their little computer. so they can show everyone they meet. wherever they go. just how beautiful i am</p>
</div>`

const dev = true;

const parse = (result) => {
  result.find(
    `.follow-bar, .ProfileTweet-action, .tweet-text .u-hidden,
    .permalink-footer, .stream-item-footer,
    .js-machine-translated-tweet-container, .tweet-stats-container, .tweet-details-fixer`)
    .remove();

  let img = result.find('.AdaptiveMedia-container img');
  img.removeAttr('style')
  result.find('.AdaptiveMediaOuterContainer').replaceWith(img);

  let accountInfo = result.find('.account-group, .js-short-timestamp');
  accountInfo.removeAttr('href');
  accountInfo.removeAttr('data-user-id');
  result.find('.content.clearfix').replaceWith(accountInfo);

  let verified = result.find('.u-hiddenVisually');
  result.find('.UserBadges').replaceWith(verified);

  // console.log(result.html().trim());
  return result.html();
}

const getTweet = async (siteUrl) => {
  if (dev){
    const $ = cheerio.load(str3);
    let tweet = $('*');
    return parse(tweet);
  }
  return await
  axios.get(siteUrl)
  .then((response) => {
    if(response.status === 200){
      const $ = cheerio.load(response.data);
      let tweet = $('.permalink-tweet');

      return parse(tweet).trim();
    }
  })
  .catch(error => {
    // console.log(error);
    return 'Invalid URL';
  });

};

module.exports = getTweet;
