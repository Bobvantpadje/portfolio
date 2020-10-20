import { HeaderLink } from 'components/Link/HeaderLink';
import { PageGrid } from 'components/PageGrid';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
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

const width = ['30vw'];
const CenterContent: FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Box bg="secondary" width={width} height={width} borderRadius="100%" position="relative">
        {/* <img src="/images/self.png" alt="my image" style={{ height: '100%' }} /> */}
        <Box right={-190} position="absolute" display="flex" flexDirection="column" height="100%" justifyContent="space-around">
          <Box bg="secondary" width="160px" height="160px" borderRadius="100%" />
          <Box ml={60} bg="secondary" width="160px" height="160px" borderRadius="100%" />
          <Box bg="secondary" width="160px" height="160px" borderRadius="100%" />
        </Box>
      </Box>
    </Box>
  );
};
