import React, { useState } from "react";
import "./Login.css";
import google from "../../Assets/google.png";
import facebook from "../../Assets/facebook.png";
import Signin from "../Signin/Signin";

function Login() {
  const [pagehandle, setpagehandle] = useState(true);
  function pagehandlefunction() {
    setpagehandle(!pagehandle);
  }
  return (
    <div className="logincontainer">
      <div className="loginbox">
        <div className="logindiv1">Log in</div>
        <div className="logindiv2">
          Don't have an account?
          <span
            onClick={pagehandlefunction}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {" "}
            Sign up.
          </span>
        </div>
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

        <div className="logindiv4">
          <div className="google">
            <div
              style={{
                display: "inline-block",
                height: "100%",
                width: "60px",
                backgroundColor: "white",
              }}
            >
              <img
                style={{
                  height: "26px",
                  position: "relative",
                  top: "20%",
                  left: "25%",
                }}
                src={google}
                alt="google"
              ></img>
            </div>
            <div className="continuegoogle"> Contine with Google.</div>
          </div>
          <div className="facebook">
            <div
              style={{
                display: "inline-block",
                height: "50px",
                width: "60px",
                backgroundColor: "white",
              }}
            >
              <img
                style={{
                  height: "26px",
                  position: "relative",
                  top: "20%",
                  left: "25%",
                }}
                src={facebook}
                alt="google"
              ></img>
            </div>
            <div className="continuefacebook"> Contine with Facebook.</div>
          </div>
          <div style={{ fontWeight: "600", color: "blue" }}>
            Continue With SSO.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
