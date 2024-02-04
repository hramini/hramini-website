import { MainImage, StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import BaseComponent from '../../../base/base-component';
import { ITestimonialBoxProperties } from './testimonial-box-interface';
import parse from 'html-react-parser';
import './testimonial-box.sass';

export default class TestimonialBox extends BaseComponent<ITestimonialBoxProperties> {
  public render(): ReactElement {
    const {
      title,
      content,
      testimonialDetails: {
        job,
        image: { srcSet },
      },
    } = this.props;

    return (
      <div className="testimonial-box">
        <h3 className="testimonial-box_title">{title}</h3>
        <MainImage
          className="testimonial-box_image"
          srcSet={srcSet}
          alt="Testimonial"
        />
        <p className="testimonial-box_job">
          <i>{job}</i>
        </p>
        <div className="testimonial-box_content">{parse(content)}</div>
      </div>
    );
  }
}
