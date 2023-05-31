import React from "react";
import "../grid-square/grid-square.style.scss";

const GridSquare = (props) => {
  const classes = `grid-square color-${props.color}`;
  return (
    <>
      <div className={classes} />
    </>
  );
};

export default GridSquare;
