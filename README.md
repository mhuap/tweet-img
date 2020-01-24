# tweet-img
 
Generate image from tweet.

tweet URL -> HTML div -> HTML canvas -> image

Built on Next.js > statically deployed

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
