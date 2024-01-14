import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./Course.css";
import websecurity from "../../Assets/websecurity.jpg";
import java from "../../Assets/java.png";
import c from "../../Assets/c++.png";
import webdeveloper from "../../Assets/webdeveloper.png";
import hardware from "../..//Assets/hardware.png";
import cybersecruity from "../../Assets/cybersecurity.png";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Course() {
  const websecureref = useRef(null);
  const hardwareref = useRef(null);
  const webdeveloperref = useRef(null);
  const cref = useRef(null);
  const javaref = useRef(null);
  const cybersecurityref = useRef(null);
  useLayoutEffect(() => {
    const t1 = new gsap.timeline({
      duration: 1,
      scrollTrigger: {
        trigger: websecureref.current,
        toggleActions: "play", // Define the trigger behavior
      },
    });
    t1.from(
      websecureref.current,
      {
        opacity: 0,
        duration: 1,
        ease: Power2.easeInOut, // Experiment with different ease functions
      },
      0.2
    )
      .to(
        websecureref.current,
        {
          opacity: 1,
          duration: 1,
          ease: Power2.easeInOut, // Use the same ease for consistency
        },
        0.2
      )
      .from(
        hardwareref.current,
        {
          opacity: 0,
          duration: 1,
          ease: Power2.easeInOut,
        },
        0.4
      )
      .to(
        hardwareref.current,
        {
          opacity: 1,
          duration: 1,
          ease: Power2.easeInOut,
        },
        0.4
      )
      .from(
        webdeveloperref.current,
        {
          opacity: 0,
          duration: 1,
          ease: Power2.easeInOut,
        },
        0.6
      )
      .to(
        webdeveloperref.current,
        {
          opacity: 1,
          duration: 1,
          ease: Power2.easeInOut,
        },
        0.6
      );
  }, []);
  useLayoutEffect(() => {
    const t2 = new gsap.timeline({
      duration: 1,
      scrollTrigger: {
        trigger: javaref.current,
        toggleActions: "play",
      },
    });
    t2.from(
      javaref.current,
      {
        opacity: 0,
        duration: 1,
        ease: Power2.easeInOut, // Experiment with different ease functions
      },
      0.2
    )
      .to(
        javaref.current,
        {
          opacity: 1,
          duration: 1,
          ease: Power2.easeInOut, // Use the same ease for consistency
        },
        0.2
      )
      .from(
        cref.current,
        {
          opacity: 0,
          duration: 1,
          ease: Power2.easeInOut,
        },
        0.4
      )
      .to(
        cref.current,
        {
          opacity: 1,
          duration: 1,
          ease: Power2.easeInOut,
        },
        0.4
      )
      .from(
        cybersecurityref.current,
        {
          opacity: 0,
          duration: 1,
          ease: Power2.easeInOut,
        },
        0.6
      )
      .to(
        cybersecurityref.current,
        {
          opacity: 1,
          duration: 1,
          ease: Power2.easeInOut,
        },
        0.6
      );
  });
  return (
    <div className="coursecontainer">
      <div className="coursetitle">
        Online <span style={{ color: "red" }}>Coaching Lessons </span>For Remote
        Learnings.
      </div>
      <div className="courseallbox">
        <div ref={websecureref} className="coursebox1">
          <div className="courseimage1">
            <img src={websecurity} alt="websecurity"></img>
          </div>
          <div className="webtitle">Web Security</div>
        </div>
        <div ref={hardwareref} className="coursebox2">
          <div className="courseimage2">
            <img src={hardware} alt="hardware"></img>
          </div>
          <div className="webtitle">Web Security</div>
        </div>
        <div ref={webdeveloperref} className="coursebox3">
          <div className="courseimage3">
            <img src={webdeveloper} alt="webdeveloper"></img>
          </div>
          <div className="webtitle">Web Security</div>
        </div>
        <div ref={javaref} className="coursebox4">
          <div className="courseimage4">
            <img src={java} alt="java"></img>
          </div>
          <div className="webtitle">Web Security</div>
        </div>
        <div ref={cref} className="coursebox5">
          <div className="courseimage5">
            <img src={c} alt="C++"></img>
          </div>
          <div className="webtitle">Web Security</div>
        </div>
        <div ref={cybersecurityref} className="coursebox6">
          <div className="courseimage6">
            <img src={cybersecruity} alt="cybersecurity"></img>
          </div>
          <div className="webtitle">Web Security</div>
        </div>
      </div>
    </div>
  );
}

export default Course;
