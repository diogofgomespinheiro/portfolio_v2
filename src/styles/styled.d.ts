import 'styled-components';
import { PersonalLibraryTheme } from '@diogop_96/portfolio-component-library';

declare module 'styled-components' {
  export interface DefaultTheme extends PersonalLibraryTheme {}
}
