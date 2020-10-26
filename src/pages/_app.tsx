import { HamburgerMenu } from 'components/utils/HamburgerMenu';
import { ThemeProvider } from 'emotion-theming';
import type { AppProps /*, AppContext */ } from 'next/app';
import { useEffect, useState } from 'react';
import { colors, theme } from 'styles/theme';
import 'utils/localization/i18n';
import '../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { useRouter } from 'next/dist/client/router';
import { HistoryContextProvider } from 'context/historyContext';
import { Header } from 'components/utils/Header';
import { Box } from 'styles/StyledComponents/Box';

const menuItems: HamburgerMenu.MenuItem[] = [
  { url: '/', text: 'home' },
  { url: '/portfolio', text: 'portfolio' },
  { url: '/about', text: 'about' },
  { url: '/contact', text: 'contact' }
];

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const promiseImages = async () => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = '/images/self.png';
        // @ts-expect-error
        image.onload = resolve();
        // @ts-expect-error
        image.onerror = reject();
      });
    };

    const loadImages = async () => {
      await promiseImages();
      setLoaded(true);
    };

    loadImages();
  }, []);

  if (!loaded) return <Box color="white">loading...</Box>;

  return (
    <ThemeProvider theme={{ ...theme, colors }}>
      {/* <HamburgerMenu menuItems={menuItems} /> */}
      <Header />
      <HistoryContextProvider>
        <AnimatePresence>
          <MotionBox key={router.route} overflow="hidden">
            <Component {...pageProps} />
          </MotionBox>
        </AnimatePresence>
      </HistoryContextProvider>
    </ThemeProvider>
  );
};

export default MyApp;
