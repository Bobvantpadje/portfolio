import React, { FC, useMemo } from 'react';
import { Header } from 'styles/StyledComponents/Text/Header';
import { Link } from '.';

export const HeaderLink: FC<{ href: string; rotate?: number }> = ({ href, rotate = 0, children }) => {
  const hoverAnimation = useMemo(() => getHoverEffect(rotate), [rotate]);

  return (
    <Link href={href}>
      {/* <Header variant="h2" transform={`rotate(${rotate}deg)`} whiteSpace="nowrap" whileHover={{ x: -10 }}> */}
      <Header variant="h2" initial={false} animate={{ rotate }} whiteSpace="nowrap" whileHover={hoverAnimation}>
        {children}
      </Header>
    </Link>
  );
};

const getHoverEffect = (rotate: number) => {
  if (rotate === 0) return { y: -10 };
  if (rotate === 90) return { x: -10 };
  if (rotate === -90) return { x: 10 };
};
