import { DefaultTheme } from 'styled-components';
import { darkTheme as componentLibDarkTheme } from '@diogop_96/portfolio-component-library';

import { colors } from './colors';

export const darkTheme: DefaultTheme = {
  ...componentLibDarkTheme,
  colors
};
