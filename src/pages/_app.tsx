import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/globals.css';
import { ThemeProvider } from 'emotion-theming';
import { theme, colors } from 'styles/theme';
import { HamburgerMenu } from 'components/HamburgerMenu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ ...theme, colors }}>
      <HamburgerMenu />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
