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

export const MenuItem: React.FC = ({ children }) => {
  return (
    <Header variant="h2" variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      {children}
    </Header>
  );
};
