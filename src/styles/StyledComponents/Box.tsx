// import styled from 'styled-components'
import styled from '@emotion/styled';
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
  transform?: string;
  color?: any; // Overwrite color because of React color declaration: https://spectrum.chat/styled-system/general/types-of-property-color-are-incompatible~9227ce42-00f2-473a-8924-f476f0ce6ae1
};

export type IBoxProps = ColorProps &
  SpaceProps &
  LayoutProps &
  BorderProps &
  TypographyProps &
  ShadowProps &
  GridProps &
  BackgroundProps &
  FlexboxProps &
  PositionProps &
  customProps;

export const Box = styled.div<IBoxProps>`
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
    backdropFilter: true,
    transform: true
  })}
`;
