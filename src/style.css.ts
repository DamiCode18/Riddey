import { style, globalStyle } from "@vanilla-extract/css";

export const DisplayFlex = style({
  display: "flex",
  flexDirection: "column",
  padding: "30px 20px",
  margin: "auto",
  width: "320px",
  alignItems: "center",
  height: "563px",
  marginTop: "8rem",
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
  color: "#636669",
  marginTop: "6px",
  marginBottom: "0",
});

export const FeaturesContainer = style({
  marginTop: "20px",
});

export const Flex = style({
  display: "flex",
  alignItems: "center",
});

export const FeatureStyle = style({
  marginLeft: "5px",
  fontSize: "12px",
  fontWeight: "400",
});

export const DivOverlay = style({
  filter: "blur(4px)",
  position: "relative",
});

export const BoardTextStyle = style({
  color: "#E26559",
});

export const ButtonStyle = style({
  background: "#E26559",
  height: "46px",
  width: "280px",
  color: "#fff",
  padding: "11px 16px",
  gap: "10px",
  border: "none",
  marginTop: "10px",
  ":hover": {
    background: "#B55147",
    cursor: "pointer",
  },
  ":active": {
    background: "#883D35",
    cursor: "pointer",
  },
  ":disabled": {
    opacity: "0.4",
    transitionDuration: "200ms",
    cursor: "not-allowed",
  },
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  height: "100vh",
  background: "rgba(0, 0, 0, 0.4)",
  fontFamily: "Montserrat",
});
