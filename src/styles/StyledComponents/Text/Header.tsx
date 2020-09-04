import styled from '@emotion/styled';
import { background, border, color, flexbox, grid, layout, position, shadow, space, system, typography, variant } from 'styled-system';
import { IBoxProps } from '../Box';
import { motion } from 'framer-motion';

type CustomProps = { variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'; whiteSpace?: string };

const variants = {
  h1: {
    fontSize: [7, 7, 7, 8],
    lineHeight: [6, 6, 6, 7]
  },
  h2: {
    fontSize: [6, 6, 6, 7],
    lineHeight: [5, 5, 5, 6]
  },
  h3: {
    fontSize: [5, 5, 5, 6],
    lineHeight: [4, 4, 4, 5]
  },
  h4: {
    fontSize: [4, 4, 4, 5],
    lineHeight: [3, 3, 3, 4]
  },
  h5: {
    fontSize: [3, 3, 3, 4],
    lineHeight: [2, 2, 2, 3]
  }
};

export type IHeaderProps = IBoxProps & CustomProps;

//@ts-expect-error
export const Header = styled(motion.h1)<IHeaderProps>(
  color,
  position,
  space,
  shadow,
  grid,
  color,
  layout,
  border,
  typography,
  background,
  flexbox,
  variant({ variants }),
  system({
    whiteSpace: true
  })
);

Header.defaultProps = {
  color: 'complementary',
  fontWeight: 5,
  variant: 'h1',
  m: 0
};
