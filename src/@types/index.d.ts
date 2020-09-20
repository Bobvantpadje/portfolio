import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from 'styled-system';

type IBoxProps = ColorProps &
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

interface Hekkie {
  hooi: string;
}

interface MenuItem {
  url: string;
  text: string;
}
