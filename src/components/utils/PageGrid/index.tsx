import styled from '@emotion/styled';
import { IBoxProps } from '@types';
import { FC } from 'react';
import { MotionBox } from 'styles/StyledComponents/Animated/MotionBox';
import { Box } from 'styles/StyledComponents/Box';
import { AnimatedPageContainer } from './AnimatedPageContainer';

const flexCenterProps = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

const Left: FC<IBoxProps> = ({ children, ...args }) => (
  <Box gridRow="2" gridColumn="1" {...flexCenterProps} {...args}>
    {children}
  </Box>
);

const Right: FC<IBoxProps> = ({ children, ...args }) => (
  <Box gridRow="2" gridColumn="3" {...flexCenterProps} {...args}>
    {children}
  </Box>
);

const Bottom: FC<IBoxProps> = ({ children, ...args }) => (
  <Box gridRow="3" gridColumn="1 / span 3" {...flexCenterProps} {...args}>
    {children}
  </Box>
);

const Center: FC<IBoxProps> = ({ children, ...args }) => {
  return (
    <HideScrollbar gridRow={2} gridColumn={2} {...args} overflow="auto">
      {children}
    </HideScrollbar>
  );
};

export const PageGrid = {
  Left,
  Right,
  Bottom,
  Center,
  Container: AnimatedPageContainer
};

const HideScrollbar = styled(MotionBox)`
  -webkit-overflow-scroll: auto;
  /* -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  } */
`;
