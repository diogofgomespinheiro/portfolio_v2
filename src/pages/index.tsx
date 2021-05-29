import { GetStaticProps } from 'next';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';

import Layout from '@/components/layout';
import HomeSection from '@/components/homeSection';
import AboutSection from '@/components/aboutSection';
import ProjectsSection from '@/components/projectsSection';
import ContactSection from '@/components/contactSection';

import { getLandingPageContent } from '@/lib';
import { LandingPageProps } from '@/shared';

const LandingPage = ({
  seoMetaTags,
  navbar,
  homeSection,
  aboutSection,
  projectsSection,
  contactSection
}: LandingPageProps) => {
  return (
    <Layout
      headerMenuItemSelectedIndex={navbar.selectedIndex}
      headerMenuItems={navbar.items}
      enableLinkObserver
      linksQuery="#home, #about, #projects, #contact"
    >
      <Head>{renderMetaTags(seoMetaTags)}</Head>
      <HomeSection {...homeSection} />
      <AboutSection {...aboutSection} />
      <ProjectsSection {...projectsSection} />
      <ContactSection {...contactSection} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<LandingPageProps> = async ({
  preview = false
}) => {
  const props = await getLandingPageContent(preview);

  return {
    props
  };
};

export default LandingPage;
