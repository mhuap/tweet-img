import { createApi } from 'unsplash-js';

const accessKey = process.env.UNSPLASH_ACCESS;
const unsplash = createApi({
  accessKey: accessKey,
});

export default function handler(req, res) {
  if (req.method == "GET"){
    unsplash.search
      .getPhotos({
        query: req.query.query,
        per_page: 20
      })
      .then(result => {
        res.status(200).json(result)
      })
      .catch((e) => {
        console.log("Unsplash GET failed");
        console.log(e);
      });
  } else if (req.method == "POST") {

    unsplash.photos.trackDownload({
      downloadLocation: req.body.downloadLocation
    })
    .then(result => {
      res.status(200).end()
    })
    .catch((e) => {
      console.log("Unsplash POST failed");
      console.log(e);
    });
  } else {
    res.status(405);
    res.end();
  }

}
