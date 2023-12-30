import React from "react";
import "./Tacbox.css";
function Tacbox(props) {
  return (
    <div className="tacfield" onClick={props.tooglevalue}>
      {props.value}
    </div>
  );
}

export default Tacbox;
