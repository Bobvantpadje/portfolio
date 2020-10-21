import React, { FC } from 'react';
import { Header } from 'styles/StyledComponents/Text/Header';
import { Link } from '.';

export const HeaderLink: FC<{ href: string; rotate?: number }> = ({ href, rotate = 0, children }) => {
  return (
    <Link href={href}>
      <Header variant="h2" transform={`rotate(${rotate}deg)`} whiteSpace="nowrap">
        {children}
      </Header>
    </Link>
  );
};
