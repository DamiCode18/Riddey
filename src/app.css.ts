import { style } from "@vanilla-extract/css";

export const DivOverlay = style({
  filter: "blur(3px)",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
});
