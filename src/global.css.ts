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
    gray3: "#8A8C8E",
    buttonHover: "#B55147",
    buttonActive: "#883D35",
    white: "#FFFFFF",
    progress: "#ebecec",
  },
  font: {
    size: {
      xSmall: "12px",
      small: "14px",
      medium: "16px",
      large: "18px",
      larger: "20px",
    },
    weight: {
      normal: "400",
      medium: "700",
    },
  },
});
