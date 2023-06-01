import React, { useCallback, useEffect } from "react";
import "./controls.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { moveDown, moveLeft, moveRight, rotate } from "../../actions";

/* The controls to play tetris */
const Controls = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);
  const isGameLocked = !isRunning || gameOver;

  // set up the key bindings so that game can also be played solely from keyboard
  const handleKeyPress = useCallback(
    (event) => {
      let key = event.key;

      if (!isGameLocked) {
        if (key === "w") {
          dispatch(rotate());
        } else if (key === "s") {
          dispatch(moveDown());
        } else if (key === "a") {
          dispatch(moveLeft());
        } else if (key === "d") {
          dispatch(moveRight());
        }
      }
    },
    [dispatch, isGameLocked]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <div className={`controls`}>
        {/* left */}
        <button
          disabled={isGameLocked}
          className="control-button"
          onClick={(e) => {
            if (isGameLocked) {
              return;
            }
            dispatch(moveLeft());
          }}
        >
          Left
        </button>

        {/* right */}
        <button
          disabled={isGameLocked}
          className="control-button"
          onClick={(e) => {
            if (isGameLocked) {
              return;
            }
            dispatch(moveRight());
          }}
        >
          Right
        </button>

        {/* rotate */}
        <button
          disabled={isGameLocked}
          className="control-button"
          onClick={(e) => {
            if (isGameLocked) {
              return;
            }
            dispatch(rotate());
          }}
        >
          Rotate
        </button>

        {/* down */}
        <button
          disabled={isGameLocked}
          className="control-button"
          onClick={(e) => {
            if (isGameLocked) {
              return;
            }
            dispatch(moveDown());
          }}
        >
          Down
        </button>
      </div>
    </>
  );
};

export default Controls;
