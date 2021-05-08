import 'styled-components';
import { PersonalLibraryTheme } from '@diogop_96/portfolio-component-library';

import { ThemeColors } from '@/styles/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends PersonalLibraryTheme {
    colors: ThemeColors;
  }
}
