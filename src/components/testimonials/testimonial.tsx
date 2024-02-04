import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import Flex from '../flex/flex-component';
import Grid from '../grid/grid-component';
import { GridLayoutType } from '../grid/grid-enum';
import TagContainer from '../tag-container/tag-container';
import TestimonialBox from './box/testimonial-box';
import { ITestimonialBoxProperties } from './box/testimonial-box-interface';
import { ITestimonialProperties } from './testimonial-interface';
import './testimonial.sass';

export default class Testimonial extends BaseComponent<ITestimonialProperties> {
  protected declareTranslateCollection(): string | undefined {
    return 'home.testimonial';
  }

  public render(): ReactElement {
    const { testimonials } = this.props;

    return (
      <section className="testimonial">
        <h2 className="testimonial_title">
          <TagContainer text={this.translate('title')} />
        </h2>
        <Grid layout={GridLayoutType.ROW} wrap>
          {testimonials
            .filter((t) => t.testimonialDetails.confirm)
            .map(
              (
                testimonial: ITestimonialBoxProperties,
                index: number
              ): ReactElement => {
                return (
                  <Flex
                    size={50}
                    mobileSize={100}
                    key={index}
                    className="testimonial_flex"
                  >
                    <TestimonialBox {...testimonial} />
                  </Flex>
                );
              }
            )}
        </Grid>
      </section>
    );
  }
}
