import TweetEntity from '../../components/tweetEntity.js';
const axios = require("axios");
import Cors from 'cors';

const token = process.env.BEARER_TOKEN;
const endpointUrl = 'https://api.twitter.com/2/tweets'

const cors = Cors({
  methods: ['GET', 'POST'],
});

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function getRequest(tweetId) {
    // Edit query parameters below
    const params = {
        'ids': tweetId,
        'expansions': 'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id,attachments.poll_ids',
        'user.fields': 'profile_image_url,verified',
        'tweet.fields': 'created_at,entities',
        'media.fields': 'url,preview_image_url',
    }

    return axios.get(endpointUrl,
      { headers: {"authorization": `Bearer ${token}`},
        params,
      })
    .then(response => {
      // console.log(response.data);
      // console.log(response);
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error.data;
    });
};

async function getQuotedMedia(tweetId) {
  const params = {
    'ids': tweetId,
    'expansions': 'attachments.media_keys',
    'media.fields': 'url',
  }

  return axios.get(endpointUrl,
    { headers: {"authorization": `Bearer ${token}`},
      params,
    })
  .then(response => {
    // console.log(response.data.includes.media[0]);
    // console.log(response);
    return response.data.includes.media[0];
  })
  .catch(error => {
    console.log(error);
    return error.data;
  });
}

// tweet parsing

async function parseRes(response) {
  // console.log(response);

  const res = response.data;
  const res_err = response.errors;

  if (res_err){
    return JSON.stringify({errors: res_err[0].detail});
  }

  const tweetData = res[0];

  const iso = new Date(tweetData.created_at);
  const month = monthNames[iso.getMonth()];
  const date = iso.getDate();
  const year = iso.getFullYear();
  const fullDate = `${date} ${month} ${year}`;

  let media;
  if (tweetData.attachments && tweetData.attachments.media_keys){
    const mediaData = response.includes.media;
    // console.log(mediaData);
    media = mediaData.map((x) => {
      if (x.type == 'photo'){
        return x.url;
      } else if (x.type == 'video'){
        return x.preview_image_url;
      } else {
        return null;
      }
    });
  }

  // console.log(media)

  const user = response.includes.users[0];

  const tweetUrls = {};
  const mentionsAndTags = [];

  if (tweetData.entities){

    // URLs
    if (tweetData.entities.urls){
      const urls = tweetData.entities.urls;
      for (let i = 0; i < urls.length; i++){
        if (!urls[i].display_url.includes('pic.twitter.com')){
          tweetUrls[urls[i].url] = urls[i].display_url;
        }
      }
    }

    // mentions
    if (tweetData.entities.mentions){
      const mentions = tweetData.entities.mentions;
      for (let i = 0; i < mentions.length; i++){
        mentionsAndTags.push('@' + mentions[i].username);
      }
    }

    if (tweetData.entities.hashtags){
      const hashtags = tweetData.entities.hashtags;
      for (let i = 0; i < hashtags.length; i++){
        mentionsAndTags.push('#' + hashtags[i].tag);
      }
    }

  }
  // console.log(tweetUrls);

  // polls

  let poll = {}

  const pollData = response.includes.polls;
  if (pollData) {
    const options = pollData[0].options;
    const totalVotes = options.map(x => x.votes).reduce((a, b) => a + b, 0);
    poll = {
      total: totalVotes,
      options: options.map(x => {
        const percentage = x.votes / totalVotes * 100;
        x.percentage = Math.round(percentage * 10) / 10;
        return x;
      })
    }
    // console.log(poll)
  }

  const mainTweet = new TweetEntity({
      text: tweetData.text,
      date: fullDate,
      media: media,
      urls: tweetUrls,
      mentionsAndTags: mentionsAndTags,
      poll: poll
    },{
      username: user.username,
      name: user.name,
      verified: user.verified,
      img: user.profile_image_url
  });

  // quoted tweet

  let quotedId;
  if (tweetData.referenced_tweets && tweetData.referenced_tweets[0].type == "quoted"){
    quotedId = tweetData.referenced_tweets[0].id;
  } else {
    quotedId = 0;
  }

  let quotedTweet = null;
  if (quotedId){
    let quotedTweetData = response.includes.tweets[0];
    quotedTweetData = quotedTweetData.id == quotedId ? quotedTweetData : null;

    let quotedMedia = null;
    if (quotedTweetData.attachments){
      if (quotedTweetData.attachments.media_keys) {
        // make query with quotedTweetData.id
        const quotedMediaResponse = await getQuotedMedia(quotedTweetData.id);
        quotedMedia = quotedMediaResponse.url;
      }
    }

    const quotedUrls = null;

    if (quotedTweetData){

      const quotedAuthor = response.includes.users.find(x => x.id == quotedTweetData.author_id);

      quotedTweet = new TweetEntity({
          text: quotedTweetData.text,
          date: quotedTweetData.created_at,
          media: quotedMedia,
          urls: quotedUrls, // unsupported
          mentionsAndTags: null // unneccessary for quoted tweets
        },{
          username: quotedAuthor.username,
          name: quotedAuthor.name,
          verified: quotedAuthor.verified,
          img: quotedAuthor.profile_image_url
      })
    }

    // console.log(this.state.quoted)
  }

  return JSON.stringify({
    tweet: {
      main: mainTweet,
      quoted: quotedTweet,
    }
  })
};


export default async (req, res) => {
  await runMiddleware(req, res, cors)

  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
      const twitterRes = await getRequest(req.query.tweetId);
      const tweet = await parseRes(twitterRes);
      res.end(tweet);
    } catch(err) {
      console.log(err);
      res.status(400);
      res.end("oops tweet-img server error");
    }

  } else {
    res.statusCode = 404;
  }
};
