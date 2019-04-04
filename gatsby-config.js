module.exports = {
  siteMetadata: {
    title: "Daemon Notes",
    description: "A cloud library",
    author: "@basarevych"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "daemon-notes",
        short_name: "dnotes",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/logo.png"
      }
    },
    "gatsby-plugin-offline"
  ]
};
