import React from "react";
import "./message-popup.style.scss";
import { useSelector } from "react-redux";

/* Represnts the popup for the game to indicate status */
const MessagePopup = (props) => {
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);

  let message = "";
  let isHidden = "hidden";

  if (gameOver) {
    message = "Game Over";
    isHidden = "";
  } else if (!isRunning) {
    message = "Paused";
    isHidden = "";
  }

  return (
    <div className={`message-popup ${isHidden}`}>
      <h1>{message}</h1>
    </div>
  );
};

export default MessagePopup;
