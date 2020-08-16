# tweet-img
 
Generate image from tweet

Built on Next.js with scraping on Google Cloud Functions.

## Development
```
npm run dev
```
## Details
`pages/index.js`
- Main layout
- Uses axios to make http request to Google Cloud Functions

Google Cloud Functions: `googleCloudFunctions/scraper.js`
- Uses axios to make http request to twitter
- Scrapes twitter and isolates tweet

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

## Features
- [x] Solid color background
- [ ] Gradient background
- [ ] Upload photo background
- [ ] No white box (content only)
