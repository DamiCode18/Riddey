import React, { useState } from "react";
import {
  BoardTextStyle,
  DisplayFlex,
  Header,
  InnerHeading,
  Subheader,
} from "../../components/RiddeyCard/RiddeyCard.css";
import Logo from "../../assets/logo.svg";
import Check from "../../assets/check.svg";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import Features from "../Features/Features";
import { globalTheme } from "../../global.css";

export default function RiddeyCard() {
  const [boarduse, setBoardUse] = useState<number>(0);
  const total: number = 10;
  const boardValue: number = (boarduse / total) * 100;

  return (
    <section className={DisplayFlex}>
      <img src={Logo} alt="logo" />
      <header className={Header}>
        Upgrade to Riddey PRO and boost productivity!
      </header>
      <p className={Subheader}>
        Pellentesque porttitor euismod ante, accumsan consequat purus!
      </p>
      <Features
        icon={Check}
        feat="Feature #1"
        text1=" - Etiam convallis,"
        text2="nibh vitae dui risus"
      />
      <Features
        icon={Check}
        feat="Feature #2"
        text1=" - Etiam"
        text2="convallis, nibh vitae dui risus"
      />
      <Features
        icon={Check}
        feat="Feature #3"
        text1=" - Etiam"
        text2="convallis, nibh vitae dui risus"
      />
      <header className={InnerHeading}>Current usage</header>
      <p className={BoardTextStyle}>
        {boarduse} out of {total} boards in use
      </p>
      <ProgressBar bgcolor={globalTheme.color.button} completed={boardValue} />
      <Button boarduse={boarduse} setBoardUse={setBoardUse} value="Add New Board" />
    </section>
  );
}
