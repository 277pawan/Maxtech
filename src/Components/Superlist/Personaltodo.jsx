import React, { useLayoutEffect, useState } from "react";
import "./Personaltodo.css";
import personalimage from "../../Assets/personalimage.webp";
import { gsap, Power2 } from "gsap";
function Personaltodo() {
  const [check, setcheck] = useState({
    yellow: true,
    red: false,
    orange: true,
    maroon: true,
    skyblue: false,
    tomato: false,
    brown: false,
    lightpink: false,
  });
  function handlecheckbox(color) {
    setcheck((prevcheck) => ({
      ...prevcheck,
      [color]: !prevcheck[color],
    }));
  }
  useLayoutEffect(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    t1.to(".personaltodo", {
      transform: "translateX(0)",
      opacity: 1,
      duration: 1,
      ease: Power2.easeInOut,
    });
    t2.to(".todoimage", {
      transform: "translateX(0)",
      opacity: 1,
      duration: 1,
      ease: Power2.easeInOut,
    });
  }, []);

  return (
    <div className="todocontainer">
      <div className="personaltodo">
        <div className="personalheading">My Kitchen.</div>
        <div className="personaldesc">
          I'm putting this list together so we can get started organzing the
          project. Excited that we're doing this.💚💚
        </div>
        <div className="personallist">
          <div style={{ height: "auto", padding: "10px 0px 10px 0px" }}>
            <input
              type="checkbox"
              checked={check.yellow}
              onClick={() => {
                handlecheckbox("yellow");
              }}
              style={{ fontSize: "30px" }}
            ></input>
            <label
              className={check.yellow ? "labelmark" : "labelfont"}
              htmlFor="yellow"
            >
              Learn Redux.
            </label>
          </div>{" "}
          <div style={{ height: "auto", padding: "10px 0px 10px 0px" }}>
            <input
              type="checkbox"
              checked={check.red}
              onClick={() => {
                handlecheckbox("red");
              }}
            ></input>
            <label
              className={check.red ? "labelmark" : "labelfont"}
              htmlFor="red"
            >
              Learn Typescript
            </label>
          </div>
          <div style={{ height: "auto", padding: "10px 0px 10px 0px" }}>
            <input
              type="checkbox"
              checked={check.orange}
              onClick={() => {
                handlecheckbox("orange");
              }}
            ></input>
            <label
              className={check.orange ? "labelmark" : "labelfont"}
              htmlFor="orange"
            >
              Learn Docker.
            </label>
          </div>
          <div style={{ height: "auto", padding: "10px 0px 10px 0px" }}>
            <input
              type="checkbox"
              checked={check.maroon}
              onClick={() => {
                handlecheckbox("maroon");
              }}
            ></input>
            <label
              className={check.maroon ? "labelmark" : "labelfont"}
              htmlFor="maroon"
            >
              Use Postman for testing.
            </label>
          </div>
          <div style={{ height: "auto", padding: "10px 0px 10px 0px" }}>
            <input
              type="checkbox"
              checked={check.skyblue}
              onClick={() => {
                handlecheckbox("skyblue");
              }}
            ></input>
            <label
              className={check.skyblue ? "labelmark" : "labelfont"}
              htmlFor="skyblue"
            >
              Figma Designer.
            </label>
          </div>
          <div style={{ height: "auto", padding: "10px 0px 10px 0px" }}>
            <input
              type="checkbox"
              checked={check.lightpink}
              onClick={() => {
                handlecheckbox("lightpink");
              }}
            ></input>
            <label
              className={check.lightpink ? "labelmark" : "labelfont"}
              htmlFor="lightpink"
            >
              Read about System Design.
            </label>
          </div>
          <div style={{ height: "auto", padding: "10px 0px 10px 0px" }}>
            <input
              type="checkbox"
              checked={check.brown}
              onClick={() => {
                handlecheckbox("brown");
              }}
            ></input>
            <label
              className={check.brown ? "labelmark" : "labelfont"}
              htmlFor="brown"
            >
              Learn about Golang.
            </label>
          </div>
          <div style={{ height: "auto", padding: "10px 0px 10px 0px" }}>
            <input
              type="checkbox"
              checked={check.tomato}
              onClick={() => {
                handlecheckbox("tomato");
              }}
            ></input>
            <label
              className={check.tomato ? "labelmark" : "labelfont"}
              htmlFor="tomato"
            >
              React Query(Learn it).
            </label>
          </div>
        </div>
      </div>
      <div className="todoimage">
        <img src={personalimage} alt="peronaltable"></img>
      </div>
    </div>
  );
}

export default Personaltodo;
