import * as React from 'react';
import { NavbarProvider } from '@diogop_96/portfolio-component-library';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { menuItems } from '@/components/header/utils';

import { LayoutProps } from './types';
import * as S from './styles';

const Layout = ({ children, pageId }: LayoutProps) => {
  return (
    <>
      <NavbarProvider
        initialSelectedItemIndexState={menuItems[pageId].selectedIndex}
      >
        <Header pageId={pageId} />
      </NavbarProvider>
      <S.MainContainer>{children}</S.MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
