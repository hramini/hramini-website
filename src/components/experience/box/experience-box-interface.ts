export interface IExperienceBoxProperties {
  title: string;
  jobDetails: {
    role: string;
    address: string;
    duration: string;
    remote: boolean;
    time: string;
    website: string;
    type: string;
  };
  content: string;
}
