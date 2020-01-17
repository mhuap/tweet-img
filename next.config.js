const withSass = require('@zeit/next-sass')
const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = withSass({
  /* config options here */
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: isProd ? '/tweet-img' : '',
})
