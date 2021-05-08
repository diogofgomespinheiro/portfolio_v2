export type Project = {
  name: string;
  description: string;
  coverImage: {
    url: string;
    alt: string;
  };
  techs: string[];
  demoUrl?: string;
  repositoryUrl?: string;
};

export type ProjectsSectionProps = {
  title: string;
  projects: Project[];
};
