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

const menuItems: HamburgerMenu.MenuItem[] = [
  { url: '/', text: 'home' },
  { url: '/portfolio', text: 'portfolio' },
  { url: '/about', text: 'about' },
  { url: '/contact', text: 'contact' }
];

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  // const Router = useRouter();
  return (
    <ThemeProvider theme={{ ...theme, colors }}>
      {/* <HamburgerMenu menuItems={menuItems} /> */}
      <AnimatePresence>
        <MotionBox
          key={router.route}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <Component {...pageProps} />
        </MotionBox>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MyApp;
