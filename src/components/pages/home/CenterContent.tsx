import { ImageCircle } from 'components/utils/ImageCircle';
import React, { FC } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { useNextRoute } from 'utils/hooks/useNextRoute';

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
        {/* <ImageCircle.SkillIcons /> */}
        <ImageCircle.Text />
      </ImageCircle>
    </MotionBox>
  );
};
