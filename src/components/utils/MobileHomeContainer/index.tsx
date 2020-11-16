import { PageGrid } from 'components/utils/PageGrid';
import React, { FC } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { useRouteByScrollDirection } from 'utils/hooks/useRouteByScrollDirection';
import { useSwipeScrollDisabler } from 'utils/hooks/useSwipeScrollDisabler';

export const MobileHomeContainer: FC<{ up?: string; down?: string }> = ({ children, up, down }) => {
  useRouteByScrollDirection({ up, down });
  useSwipeScrollDisabler();
  return (
    <PageGrid.Center gridRow="2 / span 3">
      <MotionBox
        textAlign="center"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        {children}
      </MotionBox>
    </PageGrid.Center>
  );
};
