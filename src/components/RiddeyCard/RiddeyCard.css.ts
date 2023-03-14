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
  background: "#FFFFFF",
  boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.12)",
});

export const Header = style({
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "24px",
  fontStyle: "normal",
  textAlign: "center",
  width: "280px",
  color: "#3C4043",
  marginTop: "14px",
  marginBottom: "0",
});

export const Subheader = style({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "22px",
  textAlign: "center",
  color: globalTheme.color.gray2,
  marginTop: "6px",
  marginBottom: "0",
});

export const BoardTextStyle = style({
  color: globalTheme.color.button,
  fontSize: "12px",
  marginBottom: "5px",
  fontWeight: "700",
});

export const InnerHeading = style({
  fontSize: "14px",
  fontWeight: "700",
  color: globalTheme.color.header,
  marginTop: 15,
  marginBottom: 0,
});
