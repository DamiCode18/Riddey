import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../global.css";

export const FeatureStyle = style({
  marginLeft: "10px",
  fontSize: globalTheme.font.size.xSmall,
  width: "200px",
  lineHeight: "16px",
  fontWeight: globalTheme.font.weight.normal,
});

export const Feat = style({
  fontWeight: globalTheme.font.weight.medium,
  color: globalTheme.color.header,
});

export const LightGray = style({
  color: globalTheme.color.gray3,
});
