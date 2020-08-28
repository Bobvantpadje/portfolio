import styled from '@emotion/styled';
import { background, border, color, flexbox, grid, layout, position, shadow, space, system, typography, variant } from 'styled-system';
import { IBoxProps } from '../Box';

type VariantProps = { variant?: 'primary' | 'secondary' };

const variants = {
  primary: {
    bg: 'primary',
    border: '1px solid',
    borderColor: 'complementary',
    color: 'complementary',
    '&:hover': {
      color: 'primary',
      borderColor: 'primary',
      bg: 'complementary'
    }
  },
  secondary: {}
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
  () => ({
    '&:hover': {
      cursor: 'pointer'
    },
    outline: 'none',
    transition: '.3s ease-in'
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
