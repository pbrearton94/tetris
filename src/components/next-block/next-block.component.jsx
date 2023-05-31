import React from "react";
import GridSquare from "../grid-square/grid-square.component";
import "./next-block.style.scss";
import { useSelector } from "react-redux";
import { shapes } from "../../utils";

/* Represents the next block that will be dropped on to the grid */
const NextBlock = (props) => {
  const nextShape = useSelector((state) => state.game.nextShape);
  const block = shapes[nextShape][0]; // get the first rotation

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
