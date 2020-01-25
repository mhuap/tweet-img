const getTweet = require('./scraper');
const ASSET_PREFIX = '/tweet-img/';

exports.scrape = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    if (req.body.url) {
      const result = await getTweet(req.body.url, ASSET_PREFIX);
      // console.log(result);
      if (result.errno) {
        res.sendStatus(400);
      } else {
        res.send(result);
      }
    } else {
      res.sendStatus(400);
    }
  }
}
