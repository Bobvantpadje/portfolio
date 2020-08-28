// import styled from 'styled-components'
import styled from "@emotion/styled";
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
  FlexboxProps,
} from "styled-system";

type customProps = {
  textDecoration?: string;
  cursor?: string;
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

// @ts-expect-error
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
  ${system(
    {
      textDecoration: true,
      cursor: true,
    }
  )}
`;
