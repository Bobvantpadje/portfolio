import { Box } from 'styles/StyledComponents/Box';
import { HamburgerIcon } from 'icons/hamburger';
import { useState } from 'react';
import ReactDOM from 'react-dom';

export const HamburgerMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  //   ReactDOM
  return (
    <Box height="4rem" display="flex" alignItems="center" justifyContent="flex-end" px={[3]}>
      <Box cursor="pointer" zIndex={2} onClick={() => setShowMenu((showMenu) => !showMenu)}>
        <HamburgerIcon />
      </Box>
      {ReactDOM.createPortal(<OverlayMenu show={showMenu} />, document.body)}
    </Box>
  );
};

interface IOverlayMenuProps {
  show: boolean;
}
const OverlayMenu: React.FC<IOverlayMenuProps> = ({ show }) => {
  if (!show) return null;
  return <Box height="100vh" width="100vw" bg="primary" opacity={0.9} position="absolute" top={0} backdropFilter="blur(4px)" />;
};
