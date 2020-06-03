/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Musa Jundi Portfolio",
    author: "Musa Jundi",
    description:
      "Musa Jundi is a developer with experience building tools and web apps with varied applications. Check out the rest of Musa Jundi's personal website and his GitHub and LinkedIn profiles for more information.",
    siteUrl: "https://www.musajundi.com/",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-smoothscroll",
  ],
}
