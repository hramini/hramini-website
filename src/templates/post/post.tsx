import { graphql } from 'gatsby';
import React, { Fragment, ReactNode } from 'react';
import BaseComponent from '../../base/base-component';
import ContainerBox from '../../components/container-box/container-box';
import Share from '../../components/share/share';
import SocialMetadata from '../../components/social-metadata/social-metadata';
import { SocialMetadataType } from '../../components/social-metadata/social-metadata-enum';
import { IMediaPostTemplateProperties } from './post-interface';
import parse from 'html-react-parser';
import Layout from '../../components/layout/layout';
import './post.sass';
import { MainImage } from 'gatsby-plugin-image';

export default class MediaPostTemplate extends BaseComponent<IMediaPostTemplateProperties> {
  public render(): ReactNode {
    const { post } = this.props.data;
    const { title, date, content, featuredImage } = post;

    return (
      <Layout title={title} description="">
        <SocialMetadata
          type={SocialMetadataType.SUMMARY}
          title={title}
          description={title}
          imageResourceFileName={featuredImage?.node.sourceUrl}
        />
        <div className="c-post_header">
          <h1 className="c-post_header__title">
            {/* <a className="c-post_header__back-link" href="/blog">
              <i className="fa fa-angle-left"></i> Back
            </a>{' '} */}
            {title}
          </h1>
          <time className="c-post_header__date">{date}</time>
        </div>
        <article
          className="c-post_article"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="c-post_article__image-holder">
            <MainImage
              className="c-post_article__image"
              srcSet={featuredImage?.node.srcSet}
              src={featuredImage?.node.sourceUrl}
              alt={featuredImage?.node.altText}
              loading="lazy"
            />
          </div>
          <div className="c-post_article__content">{parse(content)}</div>
        </article>
        <ContainerBox className="c-section--article u-media-width">
          <article>
            <div className="c-article__wrapper">
              <div className="c-article__col">
                {/* <div className="c-article__author">
                  <img
                    alt={post.author?.node.name}
                    src={post.author?.node.avatar.url}
                    width={post.author?.node.avatar.width}
                    height={post.author?.node.avatar.height}
                    loading="lazy"
                    className="c-article__author-image"
                  />
                  <span>{`BY ${post.author?.node.name}`}</span>
                  <span>{new Date(post.date).toDateString()}</span>
                </div> */}
              </div>
            </div>
          </article>
        </ContainerBox>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query MediaPost($postId: String, $categoryId: String) {
    post: wpPost(
      id: { eq: $postId }
      categories: { nodes: { elemMatch: { id: { eq: $categoryId } } } }
    ) {
      id
      title
      slug
      uri
      date(formatString: "MMMM DD, YYYY - HH:mm")
      content
      author {
        node {
          name
          avatar {
            url
            width
            height
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
          srcSet
          sizes
          mediaDetails {
            height
            width
          }
        }
      }
      categories {
        nodes {
          slug
          uri
          name
        }
      }
    }
  }
`;
