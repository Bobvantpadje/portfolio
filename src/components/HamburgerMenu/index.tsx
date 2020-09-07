import { Box } from 'styles/StyledComponents/Box';
import { HamburgerIcon } from 'icons/hamburger';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { OverlayMenu } from './OverlayMenu';

export const HamburgerMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  //   ReactDOM
  return (
    <Box height="4rem" display="flex" alignItems="center" justifyContent="flex-end" px={[3]}>
      <Box cursor="pointer" zIndex={2} onClick={() => setShowMenu((showMenu) => !showMenu)}>
        <HamburgerIcon />
      </Box>
      <OverlayMenu show={showMenu} />
    </Box>
  );
};
