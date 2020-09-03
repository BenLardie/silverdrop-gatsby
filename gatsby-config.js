module.exports = {
  siteMetadata: {
    title: `Silver Drop Media`,
    author: {
      name: `Ben Lardie`,
      summary: ``,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://relaxed-kirch-616c5f.netlify.app/`,
    social: {
      twitter: ``,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/img`,
        name: 'img',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown/albums`,
        name: 'albums',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown/portfolio`,
        name: 'portfolio',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown/trusted`,
        name: 'trusted',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      }},
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          // Setting a color is optional.
          color: `dodger blue`,
          // Disable the loading spinner.
          showSpinner: true,
        },
      },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
]}