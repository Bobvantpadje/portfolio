import { CenterContent } from 'components/pages/skills/CenterContent';
import { MobileCenterContent } from 'components/pages/skills/MobileCenterContent';
import { AnimatedImage } from 'components/utils/AnimatedImage';
import { PageGrid } from 'components/utils/PageGrid';
import { useHistoryContext } from 'context/historyContext';
import { useViewportScroll } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import React, { FC, useRef } from 'react';
import { Box } from 'styles/StyledComponents/Box';
import { Header } from 'styles/StyledComponents/Text/Header';
import { Paragraph } from 'styles/StyledComponents/Text/Paragraph';
import routes from 'utils/contants/routes';
import { useSwipeScrollDisabler } from 'utils/hooks/useSwipeScrollDisabler';
import { useWindowSize } from 'utils/hooks/useWindowSize';

const Skills: FC = () => {
  const windowSize = useWindowSize();
  useSwipeScrollDisabler();

  if (windowSize.width < 768) {
    return (
      <PageGrid.Container bg="primary" route={routes.skills}>
        <PageGrid.Center gridRow="2 / span 3">
          <MobileCenterContent />
        </PageGrid.Center>
      </PageGrid.Container>
    );
  }

  return (
    <PageGrid.Container bg="primary" route={routes.skills} display="block">
      <CenterContent />
    </PageGrid.Container>
  );
};

export default Skills;

const AboutItem: FC<{ title: string; content: string }> = React.memo(({ title, content }) => {
  return (
    <Box display="flex">
      <Box width="50%" display="flex" justifyContent="center" alignItems="center">
        <AnimatedImage />
      </Box>
      <Box width="50%">
        <Header variant="h1" mb={5}>
          {title}
        </Header>
        <Paragraph color="text" fontSize={5} lineHeight={5} mb={5}>
          {content}
        </Paragraph>
      </Box>
    </Box>
  );
});
