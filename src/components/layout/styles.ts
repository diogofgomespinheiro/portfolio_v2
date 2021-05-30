import styled from 'styled-components';
import {
  deviceQueries,
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

export const SocialLinks = styled.div`
  display: none;

  @media screen and (${deviceQueries.tablet.min}) {
    position: fixed;
    bottom: 0;
    left: 23.5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
      width: 33px;
      height: 32px;
      cursor: pointer;
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 40px;
      }
    }

    &::after {
      content: '';
      height: 100px;
      width: 2px;
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
