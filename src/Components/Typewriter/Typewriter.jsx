import React from "react";
import "./Typewriter.css";
function Typewriter() {
  const array = [
    "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quos minus veniam animi voluptatum error non excepturi, architecto fugiat est quas nihil sed amet libero dolor enim tempore dignissimos exercitationem?",
    "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quos minus veniam animi voluptatum error non excepturi, architecto fugiat est quas nihil sed amet libero dolor enim tempore dignissimos exercitationem?",
    "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quos minus veniam animi voluptatum error non excepturi, architecto fugiat est quas nihil sed amet libero dolor enim tempore dignissimos exercitationem?",
  ];
  return (
    <div className="typecontainer">
      <div className="typenav"></div>
      <div className="typecontent"></div>
    </div>
  );
}

export default Typewriter;
