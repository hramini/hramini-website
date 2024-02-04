const { resolve } = require(`path`);
const { slash } = require(`gatsby-core-utils`);

function createMediaPostPages({ actions, mediaPosts }) {
  const { createPage } = actions;
  const mediaPostTemplate = resolve(`./src/templates/post/post.tsx`);

  mediaPosts.forEach((item) => {
    createPage({
      path: `/blog/${item.slug}`,
      component: slash(mediaPostTemplate),
      context: {
        postId: item.id,
        categoryId: item.categories?.nodes[0].id,
      },
    });
  });
}

module.exports = {
  createMediaPostPages,
};
