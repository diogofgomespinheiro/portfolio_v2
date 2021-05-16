import styled from 'styled-components';
import { Link } from 'react-scroll';
import {
  getPropFromColors,
  LogoIcon
} from '@diogop_96/portfolio-component-library';

export const MainContainer = styled.main`
  flex: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`;

export const Logo = styled(LogoIcon)`
  cursor: pointer;
`;

export const ScrollLink = styled(Link)`
  color: ${getPropFromColors('navbar', 'textColor')};

  &.active {
    color: ${getPropFromColors('navbar', 'hightlightedTextColor')};
  }
`;
