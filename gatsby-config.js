/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Carbonn`,
    siteUrl: `https://carbonn.eu/`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-google-gtag`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`
  ]
};