import React from "react";
import { globalTheme } from "../../global.css";


interface ProgressBarProps {
  bgcolor: string;
  completed: number;
}
const ProgressBar = (props: ProgressBarProps) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 4,
    width: "200px",
    backgroundColor: globalTheme.color.progress,
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
  };

  const fillerStyles: React.CSSProperties = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    transition: "width .2s ease-in-out",
    textAlign: "right",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} />
    </div>
  );
};

export default ProgressBar;
