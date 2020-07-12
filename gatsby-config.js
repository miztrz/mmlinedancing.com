require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  pathPrefix: `/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'MM Line Dancing',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'MM Line Dancing',
        short_name: 'mmlinedance',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        icon: 'src/assets/img/mm-linedancing-logo.png'
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        googleMapsAPI: process.env.SANITY_STUDIO_GMAPS_API,
        graphqlTag: 'default',
      },
    },
  ],
};
