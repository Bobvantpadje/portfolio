// import styled from 'styled-components'
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import {
  shadow,
  grid,
  GridProps,
  ShadowProps,
  space,
  color,
  system,
  position,
  layout,
  border,
  typography,
  background,
  PositionProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  BorderProps,
  TypographyProps,
  BackgroundProps,
  flexbox,
  FlexboxProps
} from 'styled-system';

type customProps = {
  textDecoration?: string;
  cursor?: string;
  visibility?: string;
  backdropFilter?: string;
};

// @ts-expect-error
export const MotionBox = styled(motion.div)<IBoxProps>`
  ${color}
  ${position}
  ${space} 
  ${shadow} 
  ${grid} 
  ${color}
  ${layout}
  ${border}
  ${typography}
  ${background}
  ${flexbox}
  ${system({
    textDecoration: true,
    cursor: true,
    visibility: true,
    backdropFilter: true
  })}
`;
