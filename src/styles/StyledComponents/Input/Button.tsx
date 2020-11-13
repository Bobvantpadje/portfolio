import styled from '@emotion/styled';
import { background, border, color, flexbox, grid, layout, position, shadow, space, system, typography, variant } from 'styled-system';
import { IBoxProps } from '../Box';

const variants = {
  primary: {
    backgroundSize: '200% 100%',
    bg: 'complementary',
    border: '1px solid',
    borderColor: 'complementary',
    color: 'primary',
    '&:hover': {
      color: 'complementary'
    },
    '&:active': {
      background: 'primary',
      transform: 'scale(0.9)'
    }
  },
  invisible: {
    border: 'none'
  }
};

type IButtonProps = IBoxProps & { variant?: keyof typeof variants };

export const Button = styled('button')<IButtonProps>(
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
  (props: any) => ({
    '&:hover': {
      cursor: 'pointer'
    },
    outline: 'none'
    // transition: 'background .3s ease-in, transform .1s',
    // background: `linear-gradient(to right, ${props.theme.colors.complementary} 50%, ${props.theme.colors.primary} 50%)`,
    // backgroundSize: '200% 100%',
    // backgroundPosition: 'right bottom'
  })
);

Button.defaultProps = {
  variant: 'primary',
  borderRadius: '50px',
  py: [3],
  px: [5],
  type: 'button',
  fontWeight: 7
};
