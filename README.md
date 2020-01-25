# tweet-img
 
Generate image from tweet.

Built on Next.js with scraping on Google Cloud Functions.

## Development
```
npm run dev
```
## Details
`pages/index.js`
- Main layout
- Calls `getTweet` from `scraper-client.js`.

`scraper-client.js`
- Uses axios to make http request to twitter
- Has a few string `const`s for quick and easy testing if `dev` is set to true.

`components/result.js`
- Handles tweet output after http request, including the conversion into a canvas and image.

## Tweet support
- [x] Text-only
- [x] w/ 1 image
- [x] Links
- [x] By verified accounts
- [x] Emojis in text
- [x] Emojis in names
- [ ] Quote Tweets
- [ ] w/ multiple images
- [ ] Videos
- [ ] Sensitive content
- [ ] Polls
