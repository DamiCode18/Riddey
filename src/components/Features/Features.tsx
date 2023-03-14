import React from "react";
import {
  Feat,
  FeatureStyle,
  LightGray,
} from "../../components/Features/Features.css";
import { Flex } from "../../global.css";

interface FeatureProps {
  icon: string;
  text1: string;
  text2: string;
  feat: string;
}
export default function Features({ icon, text1, text2, feat }: FeatureProps) {
  return (
    <div className={Flex}>
      <img src={icon} alt="logo" />
      <p className={FeatureStyle}>
        <span className={Feat}>{feat}</span>
        <span className={LightGray}>
          {text1} <br /> {text2}
        </span>
      </p>
    </div>
  );
}
