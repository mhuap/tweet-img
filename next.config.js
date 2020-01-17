const withSass = require('@zeit/next-sass')
const debug = process.env.NODE_ENV !== "production";
module.exports = withSass({
  /* config options here */
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: isProd ? '/your-repository-name' : '',
})
