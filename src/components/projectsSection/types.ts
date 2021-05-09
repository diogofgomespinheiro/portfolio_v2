import { ImageProps } from '@/shared';

export type Project = {
  name: string;
  description: string;
  coverImage: ImageProps;
  techs: string[];
  demoUrl?: string;
  repositoryUrl?: string;
};

export type ProjectsSectionProps = {
  title: string;
  projects: Project[];
};
