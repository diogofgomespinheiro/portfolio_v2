import * as React from 'react';
import { NavbarProvider } from '@diogop_96/portfolio-component-library';

import Footer from '@/components/footer';
import Header from '@/components/header';

import { LayoutProps } from './types';
import * as S from './styles';

const Layout = ({
  children,
  headerMenuItemSelectedIndex,
  headerMenuItems,
  ...othersProps
}: LayoutProps) => {
  return (
    <>
      <NavbarProvider
        initialSelectedItemIndexState={headerMenuItemSelectedIndex}
      >
        <Header menuItems={headerMenuItems} {...othersProps} />
      </NavbarProvider>
      <S.MainContainer>{children}</S.MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
