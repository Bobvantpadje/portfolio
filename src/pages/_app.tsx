import { HamburgerMenu } from 'components/HamburgerMenu';
import { ThemeProvider } from 'emotion-theming';
import type { AppProps /*, AppContext */ } from 'next/app';
import { colors, theme } from 'styles/theme';
import 'utils/localization/i18n';
import '../styles/globals.css';

const menuItems: HamburgerMenu.MenuItem[] = [
  { url: '/', text: 'home' },
  { url: '/portfolio', text: 'portfolio' },
  { url: '/about', text: 'about' },
  { url: '/contact', text: 'contact' }
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ ...theme, colors }}>
      <HamburgerMenu menuItems={menuItems} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
