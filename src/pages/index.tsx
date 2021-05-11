import * as React from 'react';
import { GetStaticProps } from 'next';

import Layout from '@/components/layout';
import HomeSection from '@/components/homeSection';
import AboutSection from '@/components/aboutSection';
import ContactSection from '@/components/contactSection';

import { getLandingPageContent } from '@/lib';
import { LandingPageProps } from '@/shared';

const LandingPage = ({
  homeSection,
  aboutSection,
  contactSection
}: LandingPageProps) => {
  return (
    <Layout>
      <HomeSection {...homeSection} />
      <AboutSection {...aboutSection} />
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
