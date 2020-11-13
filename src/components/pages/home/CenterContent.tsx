import { ImageCircle } from 'components/utils/ImageCircle';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { Button } from 'styles/StyledComponents/Input/Button';
import { useNextRoute } from 'utils/hooks/useNextRoute';

const exitAnimation = (nextRoute: string) => {
  if (nextRoute === '/skills') return { y: '-20vh' };
  if (nextRoute === '/about') return { x: '-15vw' };
  return { opacity: 0 };
};

export const CenterContent: FC = () => {
  const nextRoute = useNextRoute();
  const { t } = useTranslation();

  return (
    <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between" pb={3}>
      <MotionBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={['unset', '100%']}
        position="relative"
        top={[65, 0]}
        transition={{ duration: 1 }}
        exit={exitAnimation}
        custom={nextRoute}>
        <ImageCircle>
          <ImageCircle.SkillIcons />
          <ImageCircle.Text />
        </ImageCircle>
      </MotionBox>
      <Box textAlign="center" display={['block', 'none']}>
        <Box width="100%">
          <Button>{t('showMore')}</Button>
        </Box>
        <Box width="100%" textAlign="center" mt={3}>
          01 02 03 04
        </Box>
      </Box>
    </Box>
  );
};
