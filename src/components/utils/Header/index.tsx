import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from 'styles/StyledComponents/Box';
import { Header as TextHeader } from 'styles/StyledComponents/Text/Header';
import { HamburgerMenu } from 'components/utils/HamburgerMenu';

const menuItems: HamburgerMenu.MenuItem[] = [
  { url: '/', text: 'home' },
  { url: '/portfolio', text: 'portfolio' },
  { url: '/about', text: 'about' },
  { url: '/contact', text: 'contact' }
];

export const Header: FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      zIndex={2}
      position="fixed"
      width="100%"
      height={['6rem']}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent={['center', 'left']}
      bg="primary"
      px={[3]}>
      <TextHeader variant="h4">{t('name').toUpperCase()}</TextHeader>
      <Box position="absolute" right={0}>
        <HamburgerMenu menuItems={menuItems} />
      </Box>
    </Box>
  );
};
