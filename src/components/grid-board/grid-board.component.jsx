import React from "react";
import GridSquare from "../grid-square/grid-square.component";
import './grid-board.style.scss';

/* Create a 10 x 18 grid */
const GridBoard = (props) => {
  const grid = [];

  for (let row = 0; row < 18; row++) {
    grid.push([]);
    for (let col = 0; col < 10; col++) {
      grid[row].push(<GridSquare key={`${col}${row}`} color="1" />);
    }
  }

  return (
    <>
      <div className="grid-board">{grid}</div>
    </>
  );
};

export default GridBoard;
