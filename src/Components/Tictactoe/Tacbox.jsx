import React from "react";
import "./Tacbox.css";
function Tacbox(props) {
  function tooglehandle() {
    if (props.value === null) {
      return props.toogle ? "O" : "X";
    }
    return "";
  }
  return (
    <div className="tacfield" onClick={props.tooglevalue}>
      {props.value}
      <div className="hovertext">{tooglehandle()}</div>
    </div>
  );
}

export default Tacbox;
