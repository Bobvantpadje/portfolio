import { useRouter } from 'next/dist/client/router';
import React, { FC } from 'react';
import { Box } from 'styles/StyledComponents/Box';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';

export const MobileNavigation: FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <NavItem route="/">01</NavItem>
      <NavItem route="/skills">02</NavItem>
      <NavItem route="/portfolio">03</NavItem>
      <NavItem route="/contact">04</NavItem>
    </Box>
  );
};

const NavItem: FC<{ route: string }> = ({ children, route }) => {
  const Router = useRouter();
  const isActive = Router.route === route;

  return (
    <Paragraph mx={2} fontWeight={600} fontSize={3} opacity={isActive ? 1 : 0.5} position="relative" color="text">
      {children}
      {isActive && <Box width="100%" height={4} bg="text" mt={1} position="absolute" />}
    </Paragraph>
  );
};
