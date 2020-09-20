import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { Header } from 'styles/StyledComponents/Text/Header';
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface IMenuItemProps {
  url: string;
}
export const MenuItem: React.FC<IMenuItemProps> = ({ children, url }) => {
  const Router = useRouter();

  return (
    <Link href={url}>
      <Header
        cursor="pointer"
        variant="h2"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        color={url === Router.route ? 'complementary' : 'text'}>
        {children}
      </Header>
    </Link>
  );
};
