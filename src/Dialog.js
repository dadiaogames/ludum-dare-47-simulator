import React from 'react';

import "./Board.css";
import "./Dialog.css";

export function Dialog(props) {
  return <div className="board" align="center">
    <p className="dialog">{props.content}</p>
    {/* TODO: change this into better version of "dialog" */}
    <button className="next-button" onClick={props.next}>Next</button>
  </div>;
}