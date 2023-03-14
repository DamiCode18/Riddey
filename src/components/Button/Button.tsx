import React from "react";
import { ButtonStyle } from "./Button.css";

interface ButtonProps {
  boarduse: number;
  value: string;
  setBoardUse: React.Dispatch<React.SetStateAction<number>>;
}
export default function Button({ boarduse, setBoardUse, value }: ButtonProps) {
  return (
    <button
      onClick={() => boarduse < 10 && setBoardUse(boarduse + 1)}
      disabled={boarduse === 10}
      className={ButtonStyle}
    >
      {value}
    </button>
  );
}
