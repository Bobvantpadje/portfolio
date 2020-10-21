import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AnimatedBurgerIcon, HamburgerIcon } from 'icons/hamburger';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { Box } from 'styles/StyledComponents/Box';
import { OverlayMenu } from './OverlayMenu';
import { Button } from 'styles/StyledComponents/Input/Button';

interface IHamburgerMenuProps {
  menuItems: HamburgerMenu.MenuItem[];
}
export const HamburgerMenu: React.FC<IHamburgerMenuProps> = ({ menuItems }) => {
  const Router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      setShowMenu(false);
    };
    Router.events.on('routeChangeComplete', closeMenu);
    return () => {
      Router.events.off('routeChangeStart', closeMenu);
    };
  }, []);

  //   ReactDOM
  return (
    <Box display="flex" alignItems="center" justifyContent="flex-end">
      <Button variant="invisible" cursor="pointer" zIndex={2} onClick={() => setShowMenu((showMenu) => !showMenu)}>
        {/* <HamburgerIcon /> */}
        <AnimatedBurgerIcon isOpen={showMenu} />
      </Button>
      <OverlayMenu show={showMenu} items={menuItems} />
    </Box>
  );
};