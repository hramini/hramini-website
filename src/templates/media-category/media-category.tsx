import { graphql } from 'gatsby';
import React, { ReactNode } from 'react';
import BaseComponent from '../../base/base-component';
import ContainerBox from '../../components/container-box/container-box';
import Layout from '../../components/layout/layout';
import SocialMetadata from '../../components/social-metadata/social-metadata';
import { SocialMetadataType } from '../../components/social-metadata/social-metadata-enum';
import { IMediaCategoryTemplate } from './media-category-interface';

export default class MediaCategoryTemplate extends BaseComponent<IMediaCategoryTemplate> {
  public render(): ReactNode {
    const { category } = this.props.data;

    return (
      <Layout title={category.name} description="">
        <SocialMetadata
          type={SocialMetadataType.SUMMARY}
          title={category.name}
          description={category.name}
          imageResourceFileName={''}
        />
        <ContainerBox className="c-section--pageheader">
          <div className="c-pageheader">
            {/* <BreadCrumb
              crumbItems={[
                {
                  label: 'State of Democracy',
                  location: '/',
                },
                {
                  label: 'Media',
                  location: '/media',
                },
              ]}
            /> */}
            <div className="c-section">
              <h1 className="c-section__title">{category.name}</h1>
            </div>
          </div>
        </ContainerBox>
        <ContainerBox className="c-section--category u-media-width">
          <div></div>
          {/* <MediaItemGrid items={category.posts.nodes} showMoreCount={8} /> */}
        </ContainerBox>
      </Layout>
    );
  }
}

export const query = graphql`
  query MediaCategory($categoryId: String) {
    category: wpCategory(id: { eq: $categoryId }) {
      posts {
        nodes {
          uri
          title
          slug
          id
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
          author {
            node {
              name
            }
          }
          date
          categories {
            nodes {
              name
              uri
            }
          }
        }
      }
      name
      uri
      slug
      link
    }
  }
`;
