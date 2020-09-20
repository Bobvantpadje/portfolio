import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { MenuItem } from './MenuItem';
import { Box } from 'styles/StyledComponents/Box';

const sidebar = {
  open: {
    clipPath: `circle(150% at right 0)`,
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  closed: {
    clipPath: 'circle(0% at right 0)',
    opacity: 1,
    transition: {
      duration: 1
    }
  }
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.5 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
interface IOverlayMenuProps {
  show: boolean;
  items: HamburgerMenu.MenuItem[];
}
export const OverlayMenu: React.FC<IOverlayMenuProps> = ({ show, items }) => {
  const [body, setBody] = useState(false);
  useEffect(() => {
    setBody(true);
  }, []);

  if (!body) return null;
  return ReactDOM.createPortal(
    <MotionBox
      height="100vh"
      width="100vw"
      bg="primary"
      position="absolute"
      top={0}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      variants={sidebar}
      overflow="hidden"
      animate={show ? 'open' : 'closed'}>
      <MotionBox display="grid" gridGap={5} variants={variants}>
        {items.map((item) => (
          <MenuItem key={item.text} url={item.url}>{item.text}</MenuItem>
        ))}
      </MotionBox>
      <Box
        bg="complementary"
        // width="115%"
        width="110%"
        borderRadius="110% 28% 0 0 / 75% 7% 0 0"
        position="absolute"
        bottom="-85px"
        // width="100%"
        height="150px"
      />
    </MotionBox>,
    document.body
  );
};
