export interface ITestimonialBoxProperties {
  title: string;
  testimonialDetails: {
    job: string;
    confirm: boolean;
    image: {
      srcSet: string;
    };
  };
  content: string;
}
