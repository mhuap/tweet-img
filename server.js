const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const getTweet = require("./scraper");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({
    extended: true
  }));
  server.use(bodyParser.json());

  server.post('/api', async (req, res) => {
    const result = await getTweet(req.body.url);
    // console.log(result);
    res.send(result);
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
})
