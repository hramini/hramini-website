export interface IExperienceBoxProperties {
  title: string;
  jobDetails: {
    role: string;
    address: string;
    duration: string;
    remote: boolean;
    time: string;
    website: string;
  };
  content: string;
}
