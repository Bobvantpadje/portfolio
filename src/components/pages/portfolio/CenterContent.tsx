import { Link } from 'components/utils/Link';
import { MobileNavigation } from 'components/utils/MobileNavigation';
import { PageGrid } from 'components/utils/PageGrid';
import { ROW_HEIGHT } from 'components/utils/PageGrid/AnimatedPageContainer';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { Button } from 'styles/StyledComponents/Input/Button';
import { Header } from 'styles/StyledComponents/Text/Header';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';
import { useRouteByScrollDirection } from 'utils/hooks/useRouteByScrollDirection';
import { useSwipeScrollDisabler } from 'utils/hooks/useSwipeScrollDisabler';

export const CenterContent: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box>
        <Header>{t('portfolio')}</Header>
        <Paragraph mt={[3, 5]} mb={[3, 6]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, ea dignissimos voluptatum velit quam asperiores distinctio quae
          porro neque, tempora qui laudantium ad, dolorem maxime recusandae harum excepturi voluptates odio!
        </Paragraph>
        <Paragraph mt={[3, 5]} mb={[3, 6]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, ea dignissimos voluptatum velit quam asperiores distinctio quae
          porro neque, tempora qui laudantium ad, dolorem maxime recusandae harum excepturi voluptates odio!
        </Paragraph>
      </Box>
      <Box textAlign="center" display={['block', 'none']}>
        <Box width="100%">
          <Link href="about">
            <Button>{t('showMore')}</Button>
          </Link>
        </Box>
        <MobileNavigation />
      </Box>
    </>
  );
};