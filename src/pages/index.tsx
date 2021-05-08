import * as React from 'react';
import { GetStaticProps } from 'next';

import { getLandingPageContent } from '@/lib';
import { LandingPageProps } from '@/shared';

const LandingPage = (props: LandingPageProps) => {
  return (
    <div>
      <main></main>
    </div>
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
