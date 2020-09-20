import { HamburgerIcon } from 'icons/hamburger';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { Box } from 'styles/StyledComponents/Box';
import { OverlayMenu } from './OverlayMenu';

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
    <Box height="4rem" display="flex" alignItems="center" justifyContent="flex-end" px={[3]}>
      <Box cursor="pointer" zIndex={2} onClick={() => setShowMenu((showMenu) => !showMenu)}>
        <HamburgerIcon />
      </Box>
      <OverlayMenu show={showMenu} items={menuItems} />
    </Box>
  );
};
