import { AboutSectionProps } from '@/components/aboutSection';
import { HomeSectionProps } from '@/components/homeSection';
import { ProjectsSectionProps } from '@/components/projectsSection';
import { ContactSectionProps } from '@/components/contactSection';

export type LandingPageProps = {
  homeSection: HomeSectionProps;
  aboutSection: AboutSectionProps;
  projectsSection: ProjectsSectionProps;
  contactSection: ContactSectionProps;
};
