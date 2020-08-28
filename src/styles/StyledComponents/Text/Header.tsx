import styled from '@emotion/styled';
import { background, border, color, flexbox, grid, layout, position, shadow, space, system, typography, variant } from 'styled-system';
import { IBoxProps } from '../Box';

type VariantProps = { variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' };

const variants = {
  h1: {
    fontSize: [11]
  },
  h2: {
    fontSize: [10]
  },
  h3: {
    fontSize: [9]
  },
  h4: {
    fontSize: [8]
  },
  h5: {
    fontSize: [3]
  }
};

//@ts-expect-error
export const Header = styled('h1')<IBoxProps & VariantProps>(
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
  variant({ variants })
);

Header.defaultProps = {
  color: 'complementary',
  fontWeight: 5
  // variant: 'h1'
};
