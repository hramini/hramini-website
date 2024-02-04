import React, { ReactElement } from 'react';
import BaseComponent from '../../../base/base-component';
import parse from 'html-react-parser';
import { IPostBoxProperties } from './post-box-interface';
import { MainImage } from 'gatsby-plugin-image';
import './post-box.sass';

export default class PostBox extends BaseComponent<IPostBoxProperties> {
  public render(): ReactElement {
    const {
      title,
      excerpt,
      slug,
      featuredImage,
      date,
      tags: { nodes: tags },
    } = this.props.post;

    return (
      <div className="c-post-box">
        <div className="c-post-box_image-holder">
          <MainImage
            className="c-post-box_image"
            srcSet={featuredImage?.node.srcSet}
            alt={title}
          />
          <time className="c-post-box_date">{date}</time>
        </div>
        <div className="c-post-box_content-holder">
          <h3 className="c-post-box_title">{title}</h3>
          <p className="c-post-box_content">{parse(excerpt)}</p>
          <p className="c-post-box_link-holder">
            <a className="c-post-box_link" href={`/blog/${slug}`}>
              Read More <i className="fa fa-angle-right"></i>
            </a>
          </p>
        </div>
      </div>
    );
  }
}
