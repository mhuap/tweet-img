# tweet-img

Generate an image from tweet.

Built on Next.js using Twitter API and deployed on Vercel.

## Development
```
npm run dev
```
push to master to update build

using [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
```
ncu -x html2canvas
npm install
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

## Future adaptations
- twitter bot
- app
