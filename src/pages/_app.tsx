import * as React from 'react';
import useDarkMode from 'use-dark-mode';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@diogop_96/portfolio-component-library';

import GlobalStyle from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
