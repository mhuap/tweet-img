# tweet-img

Generate an image from tweet.

Built on Next.js using Twitter API and deployed on Vercel.

## Development
```
npm run dev
```
push to master to update build via vercel

using [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
```
ncu -x html2canvas
npm install
```
keep html2canvas at version 1.0.0-rc.1

### Details
`pages/index.js`
- Main layout
- Uses axios to make request to `api/tweet`
- parses through JSON from Twitter API

`api/tweet.js`
- Uses axios to make request to Twitter API

`components/result.js`
- Handles tweet output after http request, including the conversion into a canvas and image.

## Potential future adaptations
- twitter bot
- app
