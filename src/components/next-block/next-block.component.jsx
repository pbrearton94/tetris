import React from "react";
import GridSquare from "../grid-square/grid-square.component";
import "../next-block/next-block.style.scss";

/* Represents the next block that will be dropped on to the grid */
const NextBlock = (props) => {
  const block = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  // Map the block to the grid
  const grid = block.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return <GridSquare key={`${row}${col}`} color={square} />;
    });
  });

  return (
    <>
      <div className="next-block">{grid}</div>
    </>
  );
};

export default NextBlock;
