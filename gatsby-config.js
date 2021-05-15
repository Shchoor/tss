require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open+Sans:300,400,600,700`, `Eczar:400,600,700`],
        display: "swap",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "TssMember",
        imagePath: "avatar",
      },
    },
    // {
    //   resolve: 'gatsby-source-rest-api',
    //   options: {
    //     endpoints: [
    //       'https://eu.api.blizzard.com/data/wow/guild/ravencrest/the-scarlet-scourge/roster?namespace=profile-eu&locale=en_US&access_token=USBYrTjTNAsxVt5wIqYecAd3xbdBVw99ih'
    //     ],
    //   },
    // },
  ],
}
