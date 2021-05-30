import * as React from 'react';
import {
  NavbarProvider,
  GithubIcon,
  LinkedinIcon,
  EmailIcon
} from '@diogop_96/portfolio-component-library';

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
      <S.SocialLinks>
        <a href="mailto:diogo.fgomes.pinheiro@gmail.com">
          <EmailIcon fill="#DE9D7B" />
        </a>
        <LinkedinIcon
          fill="#DE9D7B"
          onClick={() =>
            window.open('https://www.linkedin.com/in/diogo-fgpinheiro/')
          }
        />
        <GithubIcon
          fill="#DE9D7B"
          onClick={() => window.open('https://github.com/diogofgomespinheiro')}
        />
      </S.SocialLinks>
      <Footer />
    </>
  );
};

export default Layout;
