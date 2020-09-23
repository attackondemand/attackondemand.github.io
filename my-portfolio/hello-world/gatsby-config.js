/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
      siteUrl: 'http://msilvestre.xyz'
},

  plugins: [`gatsby-plugin-react-helmet`, 'gatsby-plugin-cname', {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-40558316-2",
      },
    },]

}
