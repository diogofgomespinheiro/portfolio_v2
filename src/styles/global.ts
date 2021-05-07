import { createGlobalStyle } from 'styled-components';
import { typography } from '@diogop_96/portfolio-component-library';

import { fontFaces } from './themes';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: black;
  }

  ${fontFaces};
  ${typography};
`;
