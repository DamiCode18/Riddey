import React from 'react'
import { ButtonStyle } from '../style.css';

interface ButtonProps {
    boarduse: number;
    setBoardUse: React.Dispatch<React.SetStateAction<number>>
}
export default function Button({boarduse, setBoardUse}: ButtonProps) {
  return (
        <button
        onClick={() => setBoardUse(boarduse + 1)}
        disabled={boarduse === 10}
        className={ButtonStyle}
      >
        Add New Board
      </button>
  )
}
