import * as React from 'react';
import { AppProps } from 'next/app';
import {
  ThemeProvider,
  darkTheme
} from '@diogop_96/portfolio-component-library';

import GlobalStyle from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={darkTheme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
