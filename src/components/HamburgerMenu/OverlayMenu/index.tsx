import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { MenuItem } from './MenuItem';
import { Box } from 'styles/StyledComponents/Box';
import styled from '@emotion/styled';
import { SocialIcons } from './SocialIcons';

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
    <MenuOverlay variants={sidebar} animate={show ? 'open' : 'closed'}>
      <MotionBox display="grid" gridGap={5} variants={variants}>
        {items.map((item) => (
          <MenuItem key={item.text} url={item.url}>
            {item.text}
          </MenuItem>
        ))}
      </MotionBox>
      <SocialIcons />
      {/* <GreenBottomBorder /> */}
      {/* <Box bg="complementary" width="110%" borderRadius="110% 28% 0 0 / 75% 7% 0 0" position="absolute" bottom="-85px" height="150px" /> */}
    </MenuOverlay>,
    document.body
  );
};

const MenuOverlay = styled(MotionBox)``;
MenuOverlay.defaultProps = {
  height: '100vh',
  width: '100vw',
  bg: 'primary',
  position: 'absolute',
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden'
};

// const GreenBottomBorder = styled(Box)``;
// GreenBottomBorder.defaultProps = {
//   bg: 'complementary',
//   width: '200vw',
//   height: '154vw',
//   transform: 'rotate(9.6deg)',
//   borderRadius: '60% 40% 40% 60% / 50% 40% 60% 60%',
//   bottom: '-125vw',
//   left: '-36vw',
//   position: 'absolute'
// };
