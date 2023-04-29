const axios = require('axios').default;
const { createMediaPostPages } = require('./gatsby-node-functions');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: '/node-modules/util/',
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const {
    data: {
      mediaPosts: { nodes: mediaPosts },
    },
  } = await graphql(`
    query {
      mediaPosts: allWpPost {
        nodes {
          slug
          id
          categories {
            nodes {
              id
              uri
            }
          }
        }
      }
    }
  `);

  createMediaPostPages({ actions, mediaPosts });
};
