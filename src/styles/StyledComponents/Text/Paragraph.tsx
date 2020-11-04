import styled from '@emotion/styled';
import { background, border, color, flexbox, grid, layout, position, shadow, space, system, typography, variant } from 'styled-system';
import { IBoxProps } from '../Box';

export const Paragraph = styled('p')<IBoxProps>(
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
  flexbox
);

Paragraph.defaultProps = {
  fontSize: [2, 2, 2, 3],
  lineHeight: [1, 1, 1, 2],
  fontWeight: 1,
  color: 'complementary'
};
