import { createGlobalStyle } from 'styled-components';
import {
  typography,
  deviceQueries
} from '@diogop_96/portfolio-component-library';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #__next {
    min-height: 100%;
  }

  #__next {
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    @media screen and (${deviceQueries.mobileL.min}) {
      padding: 0 80px;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  ${typography};
`;
