import { Box } from 'styles/StyledComponents/Box';
import { HamburgerIcon } from 'icons/hamburger';
import { useState } from 'react';
import ReactDOM from 'react-dom';

export const HamburgerMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  //   ReactDOM
  return (
    <Box height="4rem" display="flex" alignItems="center" justifyContent="flex-end" px={[3]}>
      <Box cursor="pointer" onClick={() => setShowMenu((showMenu) => !showMenu)}>
        <HamburgerIcon />
      </Box>
      {showMenu &&
        ReactDOM.createPortal(
          <Box height="100vh" width="100vw" bg="red" position="absolute" top={0} onClick={() => setShowMenu(false)} />,
          document.body
        )}
    </Box>
  );
};
