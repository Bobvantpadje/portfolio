import { HeaderLink } from 'components/Link/HeaderLink';
import { PageGrid } from 'components/PageGrid';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { opacity } from 'styled-system';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import routes from 'utils/contants/routes';

const Home: FC = () => {
  const { t } = useTranslation();
  return (
    <PageGrid.Container bg="primary" route={routes.home}>
      <PageGrid.Left>
        <HeaderLink href="portfolio" rotate={-90}>
          {t('portfolio').toUpperCase()}
        </HeaderLink>
      </PageGrid.Left>
      <PageGrid.Right>
        <HeaderLink href="about" rotate={90}>
          {t('about').toUpperCase()}
        </HeaderLink>
      </PageGrid.Right>
      <PageGrid.Bottom>
        <HeaderLink href="skills">{t('skills').toUpperCase()}</HeaderLink>
      </PageGrid.Bottom>
      <PageGrid.Center color="white">
        <CenterContent />
      </PageGrid.Center>
    </PageGrid.Container>
  );
};

export default Home;

const container = {
  hidden: { opacity: 0, width: '0vw', height: '0vw' },
  show: {
    opacity: 1,
    width: '30vw',
    height: '30vw'
  }
};

const itemContainer = {
  hidden: {
    opacity: 1
  },
  show: {
    opacity: 1
  }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const imageVar = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const width = ['30vw'];
const CenterContent: FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <MotionBox
        bg="secondary"
        borderRadius="100%"
        position="relative"
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{
          delayChildren: 0.5,
          duration: 1,
          delay: 0.5
        }}>
        <MotionBox
          variants={itemContainer}
          transition={{
            staggerChildren: 0.5,
            delay: 0.5,
            duration: 1
          }}
          right={-190}
          position="absolute"
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="space-around">
          <MotionBox variants={item} transition={{ duration: 1 }} bg="secondary" width="160px" height="160px" borderRadius="100%" />
          <MotionBox variants={item} transition={{ duration: 1 }} ml={60} bg="secondary" width="160px" height="160px" borderRadius="100%" />
          <MotionBox variants={item} transition={{ duration: 1 }} bg="secondary" width="160px" height="160px" borderRadius="100%" />
        </MotionBox>
        <MotionBox
          variants={imageVar}
          transition={{ duration: 1 }}
          width="100%"
          height="100%"
          overflow="hidden"
          borderRadius="100%"
          display="flex"
          justifyContent="center"
          alignItems="flex-end">
          <img src="/images/self.png" alt="my image" style={{ height: '90%' }} />
        </MotionBox>
      </MotionBox>
    </Box>
  );
};
