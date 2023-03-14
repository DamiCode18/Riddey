import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../global.css";

export const DisplayFlex = style({
  display: "flex",
  flexDirection: "column",
  paddingTop: "30px",
  margin: "auto",
  width: "320px",
  alignItems: "center",
  height: "533px",
  marginTop: "1rem",
  background: globalTheme.color.white,
  boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.12)",
});

export const Header = style({
  fontSize: globalTheme.font.size.larger,
  fontWeight: globalTheme.font.weight.medium,
  lineHeight: "24px",
  fontStyle: "normal",
  textAlign: "center",
  width: "280px",
  color: globalTheme.color.header,
  marginTop: "14px",
  marginBottom: "0",
});

export const Subheader = style({
  fontStyle: "normal",
  fontWeight: globalTheme.font.weight.normal,
  fontSize: globalTheme.font.size.small,
  lineHeight: "22px",
  textAlign: "center",
  color: globalTheme.color.gray2,
  marginTop: "6px",
  marginBottom: "0",
});

export const BoardTextStyle = style({
  color: globalTheme.color.button,
  fontSize: globalTheme.font.size.xSmall,
  marginBottom: "5px",
  marginTop: "8px",
  fontWeight: globalTheme.font.weight.medium,
});

export const InnerHeading = style({
  fontSize: globalTheme.font.size.small,
  fontWeight: globalTheme.font.weight.medium,
  color: globalTheme.color.header,
  marginTop: 10,
  marginBottom: 0,
});
