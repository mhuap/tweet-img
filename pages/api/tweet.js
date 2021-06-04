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
        'expansions': 'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
        'user.fields': 'profile_image_url,verified',
        'tweet.fields': 'created_at,entities',
        'media.fields': 'url',
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

// tweet parsing

function parseRes(response) {
  // console.log(response);

  const res = response.data;
  const errors = res.errors ? res.errors[0].detail : null;

  const tweetData = res[0];

  const iso = new Date(tweetData.created_at);
  const month = monthNames[iso.getMonth()];
  const date = iso.getDate();
  const year = iso.getFullYear();
  const fullDate = `${date} ${month} ${year}`;

  let media;
  if (tweetData.attachments){
    const mediaData = response.includes.media;
    media = mediaData.map((x) => (x.type == 'photo') ? x.url : null);
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

  const mainTweet = new TweetEntity({
      text: tweetData.text,
      date: fullDate,
      media: media,
      urls: tweetUrls,
      mentionsAndTags: mentionsAndTags
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

    const quotedMedia = null;
    const quotedUrls = null;

    if (quotedTweetData){

      const quotedAuthor = response.includes.users.find(x => x.id == quotedTweetData.author_id);

      quotedTweet = new TweetEntity({
          text: quotedTweetData.text,
          date: quotedTweetData.created_at,
          media: quotedMedia, // unsupported
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
    },
    errors: errors
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
      const tweet = parseRes(twitterRes);
      res.end(tweet);
    } catch(err) {
      return res.status(400).json({ error: err.toString() });
    }

  } else {
    res.statusCode = 404;
  }
};
