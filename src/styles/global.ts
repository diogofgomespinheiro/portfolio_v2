import { createGlobalStyle } from 'styled-components';
import { typography } from '@diogop_96/portfolio-component-library';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  #__next {
    display: flex;
    flex-direction: column;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  ${typography};
`;
