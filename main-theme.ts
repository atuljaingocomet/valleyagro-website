// af-theme.ts
import { DefaultTheme } from "styled-components";

export const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  ipadmini: "820px",
  laptop: "1024px",
  desktop: "1200px",
  large: "1400px",
};

export const BOX_SHADOW = {
  box1: "0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)",
  box2: "0 1px 5px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12)",
  box3: "0 1px 8px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px -2px rgba(0,0,0,.12)",
  box4: "0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)",
  box5: "0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12)",
  card: "0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12)",
};

const mainTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    stroke: "#D5E7F2",
    main: "#96B3D9",
    fontgrey: "#848484",
    highlight: "#7EBFB3",
    secondary: "#C9EBF2",
    tertiary: "#0B2624",
    yellowMain: '#f1cf69'
  },
};

export { mainTheme };