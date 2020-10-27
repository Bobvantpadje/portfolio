// https://github.com/system-ui/theme-specification

export const colors = {
  primary: '#071E3D',
  secondary: '#394B64',
  tertiary: '#486B9B',
  complementary: '#21E6C1',
  text: '#F1F3F8'
};

export const breakPoints = {
  mobile: '48rem', // 768px
  ipadPortrait: '48rem', // 1024px
  ipadLandscape: '90rem', // 1440px
  hd: '120rem' // 1920px
};

export const theme = {
  breakpoints: [...Object.values(breakPoints)],
  fonts: {
    Montserrat: `Montserrat`,
    Jura: `jura`
  },
  radii: [2, 5, 10, 15, 20],
  space: [
    '0rem', // 0
    '0.25rem', // 1
    '0.5rem', // 2
    '1rem', // 3
    '1.5rem', // 4
    '2rem', // 5
    '4rem', // 6
    '8rem', // 7
    '16rem', // 8
    '32rem' // 9
  ],
  fontSizes: [
    '0.625rem', // 0
    '0.75rem', // 1
    '0.875rem', // 2
    '1rem', // 3
    '1.25rem', // 4
    '1.5rem', // 5
    '2rem', // 6
    '2.5rem', // 7
    '3rem' // 8
  ],
  lineHeights: [
    '16px', // 0
    '21px', // 1
    '24px', // 2
    '26px', // 3
    '32px', // 4
    '42px', // 5
    '52px', // 6
    '64px' // 7
  ],
  fontWeights: [
    '200', // 0
    '300', // 1
    '400', // 2
    '500', // 3
    '600', // 4
    '700', // 5
    '800', // 6
    '900' // 7
  ],
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid'],
  shadows: {
    thin: ' 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
    light: '0 18px 29px -2px rgba(0, 0, 0, 0.26)',
    bold: 'rgb(74, 74, 74) 0px 0px 1px',
    bottomTop: '0 -3px 5px -5px #333, 0 3px 5px -5px #333'
  }
};

export default theme;
