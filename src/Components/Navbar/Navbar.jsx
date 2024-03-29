import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbarcontainer">
        <ul>
          <Link to="/Login">
            <li className="winimage loginbutton">Login</li>
          </Link>
          <Link to="/Contact">
            <li className="wincontact">Contact</li>
          </Link>
          <Link to="/Superlist">
            <li className="windoc">Superlist</li>
          </Link>
          <Link to="/Games">
            <li className="winpages">Games</li>
          </Link>
          <Link to="/">
            <li className="winhome">Home</li>
          </Link>
          <Link to="/">
            <li
              style={{
                float: "left",
                fontSize: "30px",
                padding: "9px 10px 9px 9px",
                fontWeight: "600",
              }}
            >
              Maxtech
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
