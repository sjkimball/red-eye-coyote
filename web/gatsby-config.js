// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `Sam Kimball`,
    description: `Portfolio highlighting design and development work of Sam Kimball`,
    author: `@sjkimball`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sjkimball-portfolio`,
        short_name: `Sam Kimball`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `browser`,
        icon: `src/images/red_eye_coyote_icon.png` // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline'
  ]
}
