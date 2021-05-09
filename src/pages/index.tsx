import * as React from 'react';
import { GetStaticProps } from 'next';

import Layout from '@/components/layout';
import HomeSection from '@/components/homeSection';

import { getLandingPageContent } from '@/lib';
import { LandingPageProps } from '@/shared';

const LandingPage = ({ homeSection }: LandingPageProps) => {
  return (
    <Layout>
      <HomeSection {...homeSection} />
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
