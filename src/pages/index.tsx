import styled from '@emotion/styled';
import { AnimatedPageContainer } from 'components/PageGrid/AnimatedPageContainer';
import { PageGrid } from 'components/PageGrid';
import { Link } from 'components/Link';
import { useHistoryContext } from 'context/historyContext';
import { useRouter } from 'next/dist/client/router';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { Button } from 'styles/StyledComponents/Input/Button';
import routes from 'utils/contants/routes';
import { Header } from 'styles/StyledComponents/Text/Header';
import { HeaderLink } from 'components/Link/HeaderLink';

const Home: React.FC = () => {
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
      <PageGrid.Center color="white" gridRow="2" gridColumn="2"></PageGrid.Center>
    </PageGrid.Container>
  );
};

export default Home;
