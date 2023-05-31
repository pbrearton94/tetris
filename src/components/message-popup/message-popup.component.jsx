import React from "react";
import './message-popup.style.scss';

/* Represnts the popup for the game to indicate status */
const MessagePopup = (props) => {
  return (
    <>
      <div className="message-popup">
        <h1>Message Title</h1>
        <p>Message Info</p>
      </div>
    </>
  );
};

export default MessagePopup;
