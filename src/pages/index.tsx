import * as React from 'react';
import { GetStaticProps } from 'next';

import Layout from '@/components/layout';

import { getLandingPageContent } from '@/lib';
import { LandingPageProps } from '@/shared';

const LandingPage = () => {
  return <Layout>Test</Layout>;
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
