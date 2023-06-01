import React from "react";
import "./controls.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { moveDown, moveLeft, moveRight, rotate } from "../../actions";

/* The controls to play tetris */
const Controls = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.isRunning);

  return (
    <>
      <div className="controls">
        <button
          className="control-button"
          onClick={(e) => dispatch(moveLeft())}
        >
          LEFT
        </button>
        <button
          className="control-button"
          onClick={(e) => dispatch(moveRight())}
        >
          RIGHT
        </button>
        <button className="control-button" onClick={(e) => dispatch(rotate())}>
          ROTATE
        </button>
        <button
          className="control-button"
          onClick={(e) => dispatch(moveDown())}
        >
          DOWN
        </button>
      </div>
    </>
  );
};

export default Controls;
