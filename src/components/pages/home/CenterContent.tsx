import { ImageCircle } from 'components/utils/ImageCircle';
import { Link } from 'components/utils/Link';
import { MobileNavigation } from 'components/utils/MobileNavigation';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { Button } from 'styles/StyledComponents/Input/Button';
import { useNextRoute } from 'utils/hooks/useNextRoute';
import { useRouteByScrollDirection } from 'utils/hooks/useRouteByScrollDirection';

const exitAnimation = (nextRoute: string) => {
  if (nextRoute === '/skills') return { y: '-20vh' };
  if (nextRoute === '/about') return { x: '-15vw' };
  return { opacity: 0 };
};

export const CenterContent: FC = () => {
  useRouteByScrollDirection({ down: 'skills' });
  const nextRoute = useNextRoute();
  const { t } = useTranslation();

  return (
    <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
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
          <Link href="about">
            <Button>{t('showMore')}</Button>
          </Link>
        </Box>
        <MobileNavigation />
      </Box>
    </Box>
  );
};
