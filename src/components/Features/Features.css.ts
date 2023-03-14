import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../global.css";

export const FeatureStyle = style({
  marginLeft: "10px",
  fontSize: "12px",
  width: "200px",
  fontWeight: globalTheme.font.weight.normal,
});

export const Feat = style({
  fontWeight: globalTheme.font.weight.medium,
  color: globalTheme.color.header,
});

export const LightGray = style({
  color: globalTheme.color.gray2,
});
