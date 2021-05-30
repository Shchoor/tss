require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://thescarletscourge.com`,
    title: `The Scarlet Scourge - EU Ravencrest Guild`,
    description: `We are a unique guild concept founded on 11/1/2019 on the realm of Argent Dawn (We are now located on Ravencrest EU). The idea of the guild is that open world fun always comes first, and our main goal is to be the biggest and strongest world PvP guild in Europe. We have a long history of fighting the Alliance in Stormwind and in various other locations across Azeroth and beyond.`,
    image: `/icons/icon.png`,
    siteName: "LeaseFinds",
    siteLanguage: "en",
    ogLanguage: "en_US",
    icon: `/icons/icon.png`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://thescarletscourge.com/sitemap.xml',
    
      }
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Scarlet Scourge`,
        short_name: `TSS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-GCZKGKNTG4", // Google Analytics / GA
        ],
      },
    },
    
  ],
}
