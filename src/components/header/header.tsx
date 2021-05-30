import * as React from 'react';
import { useRouter } from 'next/router';
import useDarkMode from 'use-dark-mode';
import {
  Navbar,
  Button,
  ThemeSwitcher,
  useNavbar
} from '@diogop_96/portfolio-component-library';

import { useIntersectionObserver } from '@/utils/hooks';

import { HeaderProps } from './types';
import * as S from './styles';

const Header = ({
  menuItems,
  enableLinkObserver,
  linksQuery = '',
  resumeUrl = ''
}: HeaderProps) => {
  const router = useRouter();
  const darkMode = useDarkMode();
  const {
    selectedItemState: { setSelectedItem }
  } = useNavbar();

  if (enableLinkObserver) {
    useIntersectionObserver({
      elementsQuery: linksQuery,
      threshold: 0.45,
      onElementIntersected: setSelectedItem,
      useIndex: true
    });
  }

  const navBarMenuListItems = menuItems.map(
    (item): React.ReactElement => {
      if (item.type === 'link') {
        return (
          <span onClick={() => router.push(item.route || '/')}>
            {item.label}
          </span>
        );
      }

      return (
        <span
          onClick={() =>
            document
              .getElementById(item.id)
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          {item.label}
        </span>
      );
    }
  );

  return (
    <Navbar
      icon={<S.Logo onClick={() => router.push('/')} />}
      menuListItems={navBarMenuListItems}
      extraMenuItem={
        <Button onClick={() => window.open(resumeUrl)}>Resume</Button>
      }
      extraItems={
        <ThemeSwitcher
          controlledState={darkMode.value}
          onClick={() => darkMode.toggle()}
        />
      }
      bindSelectItem={false}
    />
  );
};

export default Header;
