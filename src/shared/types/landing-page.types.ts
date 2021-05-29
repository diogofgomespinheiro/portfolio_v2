import type { SeoMetaTagType } from 'react-datocms';

import { HeaderMenuItem } from './header.types';
import { AboutSectionProps } from '@/components/aboutSection';
import { HomeSectionProps } from '@/components/homeSection';
import { ProjectsSectionProps } from '@/components/projectsSection';
import { ContactSectionProps } from '@/components/contactSection';

export type LandingPageProps = {
  seoMetaTags: SeoMetaTagType[];
  navbar: {
    selectedIndex: number;
    items: HeaderMenuItem[];
  };
  homeSection: HomeSectionProps;
  aboutSection: AboutSectionProps;
  projectsSection: ProjectsSectionProps;
  contactSection: ContactSectionProps;
};
