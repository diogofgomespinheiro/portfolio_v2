import * as React from 'react';

import Footer from '@/components/footer';

import { LayoutProps } from './types';
import * as S from './styles';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <S.MainContainer>{children}</S.MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
