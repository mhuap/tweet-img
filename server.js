const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const getTweet = require("./scraper");

const dev = process.env.NODE_ENV !== 'production';
const ASSET_PREFIX = '/tweet-img/';
const app = next({ dev });
const handle = app.getRequestHandler();

// node server.js

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({
    extended: true
  }));
  server.use(bodyParser.json());

  server.post('/api', async (req, res) => {
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


  })

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
})
