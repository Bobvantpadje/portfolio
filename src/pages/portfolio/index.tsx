import { CenterContent } from 'components/pages/portfolio/CenterContent';
import { PageGrid } from 'components/utils/PageGrid';
import React, { FC } from 'react';
import routes from 'utils/contants/routes';

const Portfolio: FC = () => {
  return (
    <PageGrid.Container bg="primary" route={routes.portfolio}>
      <PageGrid.Center gridRow="2 / span 3">
        <CenterContent />
      </PageGrid.Center>
    </PageGrid.Container>
  );
};

export default Portfolio;
