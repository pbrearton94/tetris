import React from "react";
import GridSquare from "../grid-square/grid-square.component";
import { useSelector } from "react-redux";
import "./grid-board.style.scss";
import { shapes } from "../../utils";

/* Create a 10 x 18 grid */
const GridBoard = (props) => {
  //const grid = [];
  const game = useSelector((state) => state.game);
  const { grid, shape, rotation, x, y, isRunning, speed } = game;
  const block = shapes[shape][rotation];
  const blockColor = shape;
  const gridSquares = grid.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      const blockX = col - x;
      const blockY = row - y;
      let color = square;

      if (
        blockX >= 0 &&
        blockX < block.length &&
        blockY >= 0 &&
        blockY < block.length
      ) {
        color = block[blockY][blockX] === 0 ? color : blockColor;
      }

      const k = row * grid[0].length + col;
      return <GridSquare key={k} color={color} />;
    });
  });

  return (
    <>
      <div className="grid-board">{gridSquares}</div>
    </>
  );
};

export default GridBoard;
