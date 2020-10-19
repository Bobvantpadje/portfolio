import { HamburgerMenu } from 'components/HamburgerMenu';
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

const menuItems: HamburgerMenu.MenuItem[] = [
  { url: '/', text: 'home' },
  { url: '/portfolio', text: 'portfolio' },
  { url: '/about', text: 'about' },
  { url: '/contact', text: 'contact' }
];

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeProvider theme={{ ...theme, colors }}>
      {/* <HamburgerMenu menuItems={menuItems} /> */}
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
