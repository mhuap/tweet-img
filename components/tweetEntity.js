const defaultTweet = {
  text: '',
  date: null,
  media: null,
  urls: null,
  mentionsAndTags: null,
};
const defaultUser = {
  username: '',
  name: '',
  verified: false,
  img: null,
};


export default function TweetEntity(tweet = defaultTweet, user = defaultUser) {
  this.tweet = tweet;
  this.user = user;
};
