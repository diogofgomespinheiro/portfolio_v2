import * as React from 'react';
import useDarkMode from 'use-dark-mode';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@diogop_96/portfolio-component-library';

import GlobalStyle from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {isMounted && <Component {...pageProps} />}
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
