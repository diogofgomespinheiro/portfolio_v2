import * as React from 'react';
import { useRouter } from 'next/router';
import useDarkMode from 'use-dark-mode';
import {
  Navbar,
  Button,
  ThemeSwitcher
} from '@diogop_96/portfolio-component-library';

import Footer from '@/components/footer';

import { LayoutProps } from './types';
import { menuItems } from './utils';
import * as S from './styles';

const Layout = ({ children, pageId }: LayoutProps) => {
  const router = useRouter();
  const darkMode = useDarkMode();

  const navBarMenuListItems = menuItems[pageId].items.map(
    (item, index): React.ReactElement => {
      if (item.type === 'link') {
        return (
          <span onClick={() => router.push(item.route || '/')}>
            {item.label}
          </span>
        );
      }

      return (
        <S.ScrollLink
          to={item.id}
          smooth={true}
          duration={500}
          offset={menuItems[pageId].items[index].offset}
          spy={true}
        >
          {item.label}
        </S.ScrollLink>
      );
    }
  );

  return (
    <>
      <Navbar
        icon={<S.Logo onClick={() => router.push('/')} />}
        selectedMenuListItem={menuItems[pageId].selectedIndex}
        menuListItems={navBarMenuListItems}
        extraMenuItem={<Button>Resume</Button>}
        extraItems={
          <ThemeSwitcher
            controlledState={darkMode.value}
            onClick={() => darkMode.toggle()}
          />
        }
      />
      <S.MainContainer>{children}</S.MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
