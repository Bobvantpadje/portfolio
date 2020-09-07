import { Box } from 'styles/StyledComponents/Box';
import { HamburgerIcon } from 'icons/hamburger';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';

export const HamburgerMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  //   ReactDOM
  return (
    <Box height="4rem" display="flex" alignItems="center" justifyContent="flex-end" px={[3]}>
      <Box cursor="pointer" zIndex={2} onClick={() => setShowMenu((showMenu) => !showMenu)}>
        <HamburgerIcon />
      </Box>
      <OverlayMenu show={showMenu} />
      {/* {document ? ReactDOM.createPortal(<OverlayMenu show={showMenu} />, document.body) : null} */}
    </Box>
  );
};

const sidebar = {
  open: {
    clipPath: `circle(150% at right 0)`,
    opacity: 1,
    transition: {
      // type: 'spring',
      duration: 2
      // stiffness: 20,
      // restDelta: 2,
    }
  },
  closed: {
    clipPath: 'circle(0% at right 0)',
    opacity: 0.7,
    transition: {
      duration: 2,
      // type: 'spring',
      // stiffness: 20,
      // restDelta: 2
      // stiffness: 20,
      // restDelta: 2 // duration: 5
      // stiffness: 400,
      // damping: 40
    }
  }
};
interface IOverlayMenuProps {
  show: boolean;
}
const OverlayMenu: React.FC<IOverlayMenuProps> = ({ show }) => {
  const [body, setBody] = useState(false);
  useEffect(() => {
    setBody(true);
  }, []);

  if (!body) return null;
  return ReactDOM.createPortal(
    <MotionBox
      height="100vh"
      width="100vw"
      // bg="primary"
      bg="primary"
      position="absolute"
      top={0}
      variants={sidebar}
      animate={show ? 'open' : 'closed'}
      transition={
        {
          // type: 'spring',
          // duration: 1
          // stiffness: 20,
          // restDelta: 2
        }
      }
    />,
    document.body
  );
};
