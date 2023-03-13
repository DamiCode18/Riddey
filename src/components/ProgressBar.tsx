import React from "react";

const ProgressBar = (props: any) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 6,
    width: "250px",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
  };

  const fillerStyles: any = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
     transition: 'width .5s ease-in-out',
    textAlign: "right",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} />
    </div>
  );
};

export default ProgressBar;
