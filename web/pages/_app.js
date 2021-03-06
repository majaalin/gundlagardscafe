import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../config/globalStyle.js';
import theme from '../config/theme.js';
import './../styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
