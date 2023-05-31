import React from "react";
import "./score-board.style.scss";

const ScoreBoard = (props) => {
  return (
    <>
      <div className="score-board">
        <div>Score: {props.score}</div>
        <div>Level: 1</div>
        <button className="score-board-button" onClick={(e) => {}}>
          Play
        </button>
        <button className="score-board-button" onClick={(e) => {}}>
          Restart
        </button>
      </div>
    </>
  );
};

export default ScoreBoard;
