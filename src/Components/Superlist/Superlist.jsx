import React, { useEffect, useRef, useState } from "react";
import "./Superlist.css";
import { gsap, Power2 } from "gsap";
import lap1 from "../../Assets/todo1.gif";
import lap2 from "../../Assets/todo2.gif";
import lap3 from "../../Assets/todo3.gif";
import lap4 from "../../Assets/todo4.gif";

import restart from "../../Assets/laptop.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import Personaltodo from "./Personaltodo";
import Usertodo from "./Usertodo";

function Superlist() {
  const [todoshift, settodoshift] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const start = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper1",
        start: "top 25%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
    });
    start.to(".lap1", {
      opacity: "1",
      duration: 2,
      transform: "scale(1)",
      ease: Power2.easeInOut,
    });
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper2",
        start: "top 25%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
    });
    t1.to(".lap2", {
      opacity: "1",
      duration: 2,
      transform: "scale(1)",
      ease: Power2.easeInOut,
    });
    const t2 = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: ".wrapper3",
        start: "top 25%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
    });
    t2.to(".lap3", {
      opacity: "1",
      duration: 2,
      transform: "scale(1)",
      ease: Power2.easeInOut,
    });
    const t3 = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: ".wrapperlast",
        start: "top 25%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
    });
    t3.to(".lap4", {
      opacity: "1",
      duration: 2,
      transform: "scale(1)",
      ease: Power2.easeInOut,
    });
  }, []);
  function handlepersonal() {
    settodoshift(true);
  }
  function handlecreate() {
    settodoshift(false);
  }
  return (
    <div className="superlist">
      <div className="todo">
        <div className="todobox1">
          <div
            style={{
              fontSize: "42px",
              fontFamily: "gigi",
              fontWeight: "bolder",
            }}
          >
            Superlist
          </div>
          <div
            style={{
              fontSize: "60px",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            Home to
          </div>
          <div
            style={{
              fontSize: "60px",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            all your✅<span style={{ color: "lightgreen" }}>List.</span>
          </div>
        </div>
        <div className="todobox2">
          <button className="personal" onClick={handlepersonal}>
            Personal Projects
          </button>
          <button className="createtodo" onClick={handlecreate}>
            Create your own todo
          </button>
        </div>
        <div className="todobox3">
          {todoshift ? <Personaltodo /> : <Usertodo />}
        </div>
      </div>
      <div className="gallery">
        <div className="leftbox">
          <div className="wrapper1">
            <div className="heading"> Integrated</div>
            <div className="text">With Apps</div>
            <div className="text">you love.</div>
          </div>
          <div className="wrapper2">
            {" "}
            <div className="heading"> Work &</div>
            <div className="text">Personal</div>
            <div className="text">at the flip</div>
            <div className="text">of a switch.</div>
          </div>
          <div className="wrapper3">
            {" "}
            <div className="heading">Perfect for</div>
            <div className="text">teams and</div>
            <div className="text">solo user.</div>
          </div>
          <div className="wrapperlast">
            {" "}
            <div className="heading">Task Notes</div>
            <div className="text">and everything</div>
            <div className="text">in between.</div>
          </div>
        </div>
        <div className="rightbox">
          <div className="wrapper4">
            <img className="lap1" alt="lap1" src={lap1}></img>
          </div>
          <div className="wrapper5">
            <img className="lap2" src={lap2}></img>
          </div>
          <div className="wrapper6">
            <img className="lap3" src={lap3}></img>
          </div>
          <div className="wrapperlastright">
            <img className="lap4" src={lap4}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Superlist;
