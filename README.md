# tweet-img
 
Generate an image from tweet.

Built on Next.js using Twitter API and deployed on Vercel.

## Development
```
npm run dev
```
## Details
`pages/index.js`
- Main layout
- Uses axios to make request to `api/tweet`
- parses through JSON from Twitter API

`api/tweet`
- Uses axios to make request to Twitter API

`components/result.js`
- Handles tweet output after http request, including the conversion into a canvas and image.

## Tweet support
- [x] Text-only
- [x] w/ 1 image
- [x] Links
- [x] By verified accounts
- [x] Mentions
- [ ] Quote Tweets
- [ ] w/ multiple images
- [ ] Videos
- [ ] Polls

## Features
- [x] Solid color background
- [ ] Gradient background
- [ ] Upload photo background
- [ ] No white box (content only)
