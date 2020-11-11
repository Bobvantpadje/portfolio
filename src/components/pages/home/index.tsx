import { HeaderLink } from 'components/utils/Link/HeaderLink';
import { PageGrid } from 'components/utils/PageGrid';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import routes from 'utils/contants/routes';
import { CenterContent } from './CenterContent';

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <PageGrid.Container bg="primary" route={routes.home}>
      <PageGrid.Left display={['none', 'flex']}>
        <HeaderLink href="portfolio" rotate={-90}>
          {t('portfolio').toUpperCase()}
        </HeaderLink>
      </PageGrid.Left>
      <PageGrid.Right display={['none', 'flex']}>
        <HeaderLink href="about" rotate={90}>
          {t('about').toUpperCase()}
        </HeaderLink>
      </PageGrid.Right>
      <PageGrid.Center color="white">
        <CenterContent />
      </PageGrid.Center>
      <PageGrid.Bottom display={['none', 'flex']}>
        <HeaderLink href="skills">{t('skills').toUpperCase()}</HeaderLink>
      </PageGrid.Bottom>
    </PageGrid.Container>
  );
};

export default Home;
