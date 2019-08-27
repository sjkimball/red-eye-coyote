module.exports = {
  siteMetadata: {
    title: `Sam Kimball`,
    description: `Portfolio highlighting design and development work of Sam Kimball`,
    author: `@sjkimball`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `6y7rlog8`,
        dataset: `production`,
        watchMode: true,
        overlayDrafts: true,
        token: `sk21w6Cl9k1qHJ49YUR7YoWP3usFQJGCwXlJqvHw2pObyivrJjYokubm2qHxjE7ABl0DIV2Lts9VWEMJafPIXfIQJI7T566P1sNrIlaUIDIEVORGuo8sPa4P4mRKZEMX1MU6fmqfTGHHiyt16RKfC0czbzp9Xx8dHN3QapHkWP5RtGv7gmUG`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sjkimball-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
