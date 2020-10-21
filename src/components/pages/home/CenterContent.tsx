import { ImageCircle } from 'components/utils/ImageCircle';
import React, { FC, useState } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { useNextRoute } from 'utils/hooks/useNextRoute';
import { useRouteChangeListener } from 'utils/hooks/useRouteChangeListener';

const container = {
  hidden: { opacity: 0, width: '0%', height: '0%' },
  show: {
    opacity: 1,
    width: '100%',
    height: '100%',
    transition: {
      duration: 1,
      delayChildren: 1,
      delay: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: -500,
    transition: {
      duration: 1
    }
  }
};

const exitAnimation = (nextRoute: string) => {
  if (nextRoute === '/skills') return { y: '-20vh' };
  if (nextRoute === '/about') return { x: '-15vw' };
  return { opacity: 0 };
};

export const CenterContent: FC = () => {
  const nextRoute = useNextRoute();

  return (
    <MotionBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      transition={{ duration: 1 }}
      exit={exitAnimation}
      custom={nextRoute}>
      <ImageCircle>
        <ImageCircle.SkillIcons />
        <ImageCircle.Text />
      </ImageCircle>
    </MotionBox>
  );
};
