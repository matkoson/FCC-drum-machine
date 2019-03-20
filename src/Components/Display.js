import React from "react";
import "../Styles/Display.sass";
export default function Display(props) {
  return (
    <div id="display" className="display">
      {props.input && props.input}
    </div>
  );
}
