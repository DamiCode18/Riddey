import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../global.css";

export const ButtonStyle = style({
  background: globalTheme.color.button,
  height: "46px",
  width: "280px",
  fontSize: globalTheme.font.size.small,
  color: globalTheme.color.white,
  padding: "11px 16px",
  fontWeight: globalTheme.font.weight.medium,
  fontStyle: "normal",
  border: "none",
  marginTop: "10px",
  ":hover": {
    background: globalTheme.color.buttonHover,
    cursor: "pointer",
  },
  ":active": {
    background: globalTheme.color.buttonActive,
    cursor: "pointer",
  },
  ":disabled": {
    opacity: "0.4",
    transitionDuration: ".2s",
    cursor: "not-allowed",
  },
});
