import { CenterContent } from 'components/pages/portfolio/CenterContent';
import { MobileHomeContainer } from 'components/utils/MobileHomeContainer';
import { PageGrid } from 'components/utils/PageGrid';
import React, { FC } from 'react';
import routes from 'utils/contants/routes';

const Portfolio: FC = () => {
  return (
    <PageGrid.Container bg="primary" route={routes.portfolio}>
      <MobileHomeContainer down="skills">
        <CenterContent />
      </MobileHomeContainer>
    </PageGrid.Container>
  );
};

export default Portfolio;
