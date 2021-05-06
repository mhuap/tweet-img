const axios = require("axios");

const token = process.env.BEARER_TOKEN;

const endpointUrl = 'https://api.twitter.com/2/tweets'

async function getRequest(tweetId) {
    // Edit query parameters below
    const params = {
        'ids': tweetId,
        'expansions': 'author_id,attachments.media_keys',
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
      return JSON.stringify(response.data);
    })
    .catch(error => {
      console.log(error);
      return error.data;
    });

}


export default async (req, res) => {
  if (req.method === 'POST') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const tweet = await getRequest(req.body.tweetId);
    res.end(tweet);
  } else {
    res.statusCode = 404;
  }
}
