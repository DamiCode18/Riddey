import React from "react";

const ProgressBar = (props: any) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 4,
    width: "200px",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20
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
