import { AboutSectionProps } from './about.types';
import { HomeSectionProps } from './home.types';
import { ProjectsSectionProps } from './projects.types';
import { ContactSectionProps } from './contact.types';

export type LandingPageProps = {
  homeSection: HomeSectionProps;
  aboutSection: AboutSectionProps;
  projectsSection: ProjectsSectionProps;
  contactSection: ContactSectionProps;
};
