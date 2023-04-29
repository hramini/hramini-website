import { graphql } from 'gatsby';
import React, { ReactNode } from 'react';
import BaseComponent from '../../base/base-component';
import Flex from '../../components/flex/flex-component';
import Grid from '../../components/grid/grid-component';
import { GridLayoutType } from '../../components/grid/grid-enum';
import Layout from '../../components/layout/layout';
import Posts from '../../components/posts/posts';
import '../../global/locale/en-us';
import { IBlogProperties } from '../../page-interfaces/blog-interface';
import './blog.sass';

export default class Blog extends BaseComponent<IBlogProperties> {
  protected declareTranslateCollection(): string {
    return 'home';
  }

  public render(): ReactNode {
    const { posts } = this.props.data;

    return (
      <Layout title="Blog" description="Hamidreza Amini's Blog">
        <Grid layout={GridLayoutType.ROW}>
          <Flex size={75} className="blog_posts">
            <h2 className="blog_title">Blog Posts</h2>
            <Posts posts={posts.nodes} />
          </Flex>
          <Flex size={25} className="blog_categories">
            <h2 className="blog_title">Categories</h2>
          </Flex>
        </Grid>
      </Layout>
    );
  }
}

export const query = graphql`
  query GetBlogData {
    posts: allWpPost {
      nodes {
        tags {
          nodes {
            name
          }
        }
        slug
        content
        title
        featuredImage {
          node {
            srcSet
          }
        }
        date(formatString: "YYYY-MM-DD")
        excerpt
        categories {
          nodes {
            name
          }
        }
      }
    }
    categories: allWpCategory {
      nodes {
        name
        id
        parentId
      }
    }
  }
`;
