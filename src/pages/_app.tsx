import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/globals.css';
import { ThemeProvider } from 'emotion-theming';
import { theme, colors } from 'styles/theme';
import { HamburgerMenu } from 'components/HamburgerMenu';

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
