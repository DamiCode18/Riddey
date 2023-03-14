import { style, globalStyle, createGlobalTheme } from "@vanilla-extract/css";

export const Flex = style({
  display: "flex",
  alignItems: "center",
  margin: "0",
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  height: "100vh",
  background: "rgba(0, 0, 0, 0.4)",
  fontFamily: "Montserrat",
});

export const globalTheme = createGlobalTheme(":root", {
  color: {
    button: "#E26559",
    header: "#3C4043",
    gray1: "#242628",
    gray2: "#636669",
    buttonHover: "#B55147",
    buttonActive: "#883D35",
    white: "#FFFFFF",
  },
  font: {
    size: {
      small: "14px",
      medium: "16px",
      large: "18px",
    },
    weight: {
      normal: "400",
      medium: "700",
    },
  },
});