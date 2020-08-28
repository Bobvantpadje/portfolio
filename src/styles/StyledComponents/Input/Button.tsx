import styled from '@emotion/styled';
import { background, border, color, flexbox, grid, layout, position, shadow, space, system, typography, variant } from 'styled-system';
import { IBoxProps } from '../Box';

type VariantProps = { variant?: 'primary' | 'secondary' };

const variants = {
  primary: {
    backgroundSize: '200% 100%',
    backgroundPosition: 'right bottom',
    bg: 'primary',
    border: '1px solid',
    borderColor: 'complementary',
    color: 'complementary',
    '&:hover': {
      backgroundPosition: 'left bottom',
      color: 'primary'
    },
    '&:active': {
      background: 'complementary',
      transform: 'scale(0.9)'
    }
  }
};

type IStyledButtonProps = IBoxProps & VariantProps;

//@ts-expect-error
const StyledButton = styled('button')<IStyledButtonProps>(
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
    outline: 'none',
    transition: 'background .3s ease-in, transform .1s',
    background: `linear-gradient(to right, ${props.theme.colors.complementary} 50%, ${props.theme.colors.primary} 50%)`,
    backgroundSize: '200% 100%',
    backgroundPosition: 'right bottom'
  })
);

StyledButton.defaultProps = {
  variant: 'primary',
  borderRadius: '50px',
  py: [3],
  px: [5]
};

export const Button: React.FC<IStyledButtonProps> = ({ children, ...args }) => {
  return (
    // @ts-expect-error
    <StyledButton type="button" {...args}>
      {children}
    </StyledButton>
  );
};
