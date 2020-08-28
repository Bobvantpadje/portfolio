// https://github.com/system-ui/theme-specification

export const theme = {
  breakpoints: ["48rem", "64rem", "90rem", "120rem"],
  fonts: {
    Montserrat: `Montserrat`,
    Jura: `jura`,
  },
  colors: {
    white: "#FFFFFF",
    greys: {
      light: "#F7F7F7",
      semiDark: "#F4F4F4",
      dark: "#9C9C9C",
      blue: "#F4F8FF",
    },
    black: "#000000",
    blues: {
      extraLight: "#f0f3f7",
      light: "#E2E7F1",
      semiLight: "#F4F8FF",
      semiDark: "#406D96",
      dark: "#313A54",
    },
    red: "#E3464c",
    green: "#39C668",
  },
  radii: [3, 5, 10, 15, 20],
  space: [
    "0rem", // 0
    "0.25rem", // 1
    "0.5rem", // 2
    "1rem", // 3
    "1.5rem", // 4
    "2rem", // 5
    "4rem", // 6
    "8rem", // 7
    "16rem", // 8
    "32rem", // 9
  ],
  fontSizes: [
    "0.625rem", // 0
    "0.75rem", // 1
    "0.875rem", // 2
    "1rem", // 3
    "1.125rem", // 4
    "1.25rem", // 5
    "1.375rem", // 6
    "1.75rem", // 7
    "2rem", // 8
    "2.5rem", // 9
    "3rem", // 10
  ],
  lineHeights: [
    "0.875rem", // 0
    "1rem", // 1
    "1.375rem", // 2
    "1.5rem", // 3
    "1.75rem", // 4
    "2rem", // 5
    "2.375rem", // 6
    "2.5rem", // 7
    "3.125rem", // 8
    "3.625rem", // 9
  ],
  fontWeights: [
    "200", // 0
    "300", // 1
    "400", // 2
    "500", // 3
    "600", // 4
    "700", // 5
  ],
  borders: [0, "1px solid", "2px solid", "3px solid", "4px solid"],
  shadows: {
    thin: " 0 2px 4px 0 rgba(0, 0, 0, 0.3)",
    light: "0 18px 29px -2px rgba(0, 0, 0, 0.26)",
    bold: "rgb(74, 74, 74) 0px 0px 1px",
    bottomTop: "0 -3px 5px -5px #333, 0 3px 5px -5px #333",
  },
};

export default theme;
