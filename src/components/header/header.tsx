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
import { menuItems } from './utils';
import * as S from './styles';

const Header = ({ pageId }: HeaderProps) => {
  const router = useRouter();
  const darkMode = useDarkMode();
  const {
    selectedItemState: { setSelectedItem }
  } = useNavbar();

  useIntersectionObserver({
    elementsQuery: '#home, #about, #projects, #contact',
    threshold: 0.45,
    onElementIntersected: setSelectedItem,
    useIndex: true
  });

  const navBarMenuListItems = menuItems[pageId].items.map(
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
      extraMenuItem={<Button>Resume</Button>}
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
