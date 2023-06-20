import { graphql } from 'gatsby';
import React, { ReactNode } from 'react';
import BaseComponent from '../base/base-component';
import { Banner } from '../components/banner/banner';
import { IEducationBoxProperties } from '../components/education/box/education-box-interface';
import Education from '../components/education/education';
import { IExperienceBoxProperties } from '../components/experience/box/experience-box-interface';
import Experience from '../components/experience/experience';
import Layout from '../components/layout/layout';
import { ITestimonialBoxProperties } from '../components/testimonials/box/testimonial-box-interface';
import Testimonial from '../components/testimonials/testimonial';
import '../global/locale/en-us';

interface IHomeProperties {
  data: {
    experiences: {
      nodes: IExperienceBoxProperties[];
    };
    educations: {
      nodes: IEducationBoxProperties[];
    };
    testimonials: {
      nodes: ITestimonialBoxProperties[];
    };
  };
}

export default class Home extends BaseComponent<IHomeProperties> {
  protected declareTranslateCollection(): string {
    return 'home';
  }

  public render(): ReactNode {
    const { experiences, educations, testimonials } = this.props.data;

    return (
      <Layout title="Home" description="JavaScript Engineer">
        <Banner />
        <Experience experiences={experiences.nodes} />
        <Education educations={educations.nodes} />
        <Testimonial testimonials={testimonials.nodes} />
      </Layout>
    );
  }
}

export const query = graphql`
  query GetData {
    experiences: allWpExperience {
      nodes {
        jobDetails {
          address
          duration
          role
          remote
          time
          website
          type
        }
        title
        content
      }
    }
    educations: allWpEducation {
      nodes {
        educationDetails {
          duration
          field
          grade
        }
        title
        content
      }
    }
    testimonials: allWpTestimonial {
      nodes {
        title
        content
        testimonialDetails {
          job
          recommender
          confirm
          image {
            srcSet
          }
        }
      }
    }
  }
`;
