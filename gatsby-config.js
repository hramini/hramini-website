const { config } = require('dotenv');
const { join } = require('path');

config();

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: 'Hamidreza Amini',
    apiUrl:
      process.env.WORDPRESS_API_URL ?? 'http://api.hramini.ir/wp-json/wp/v1',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-nodejs',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: process.env.WORDPRESS_GRAPHQL_URL,
        html: {
          useGatsbyImage: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: join(__dirname, './src/assets/'),
      },
      __key: 'assets',
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        allowList: ['SITE_URL'],
      },
    },
  ],
};
