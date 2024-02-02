import React from "react";
import "./Signin.css";
function Signin() {
  return (
    <div className="logindiv3">
      <div className="input-wrapper">
        <input
          className="input-box"
          type="email"
          placeholder="Enter Email..."
        />
        <span className="underline"></span>
      </div>
      <div className="input-wrapperpass">
        <input
          className="input-boxpass"
          type="password"
          placeholder="Enter password..."
        />
        <span className="underlinepass"></span>
      </div>
      <div>
        <button className="Continuelogin">Continue with email</button>
      </div>
    </div>
  );
}

export default Signin;
