import React, { useState } from "react";
import {
    BoardTextStyle,
  DisplayFlex,
  FeaturesContainer,
  Header,
  Subheader,
} from "../style.css";
import Logo from "../assets/logo.svg";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import Features from "./Features";

export default function RiddeyCard() {
  const [boarduse, setBoardUse] = useState<number>(0);
  const boardValue = (boarduse/10)*100;
  return (
    <div className={DisplayFlex}>
      <img src={Logo} alt="logo" />
      <h2 className={Header}>Upgrade to Riddey PRO and boost productivity!</h2>
      <h4 className={Subheader}>Pellentesque porttitor euismod ante, accumsan consequat purus!</h4>
      <div className={FeaturesContainer}>
        <Features />
        <Features />
        <Features />
      </div>
      <h4>Current usage</h4>
      <h5 className={BoardTextStyle}>{boarduse} out of 10 boards in use</h5>
        <ProgressBar bgcolor="#E26559" completed={boardValue} />
      <Button boarduse={boarduse} setBoardUse={setBoardUse} />
    </div>
  );
}
