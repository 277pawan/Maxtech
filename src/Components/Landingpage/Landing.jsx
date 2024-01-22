import React, { useEffect, useRef } from "react";
import "./Landing.css";
import { gsap, Power2 } from "gsap";
function Landing() {
  const landingcontainerref = useRef(null);
  const landingtitleref = useRef(null);
  const firstdotref = useRef(null);
  const seconddotref = useRef(null);
  const thirddotref = useRef(null);
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.to(
      landingcontainerref.current,
      2,
      {
        width: "0%",
        ease: Power2.easeInOut,
        delay: 3.2,
      },
      0.2
    )
      .to(
        landingtitleref.current,
        1,
        {
          delay: 4,
          opacity: 0,
          esae: Power2.easeInOut,
        },
        0.1
      )
      .to(
        firstdotref.current,
        1,
        {
          opacity: 1,
          ease: Power2.easeInOut,
        },
        0.4
      )
      .to(seconddotref.current, 1, { opacity: 1, ease: Power2.easeInOut }, 1.2)
      .to(thirddotref.current, 1, { opacity: 1, ease: Power2.easeInOut }, 2.1);
  });

  return (
    <div ref={landingcontainerref} className="landingcontainer">
      <div ref={landingtitleref}>
        Max
        <span style={{ color: "red" }}>tech</span>
        <span ref={firstdotref} style={{ color: "white", opacity: 0 }}>
          {" "}
          .
        </span>
        <span ref={seconddotref} style={{ color: "red", opacity: 0 }}>
          {" "}
          .
        </span>
        <span ref={thirddotref} style={{ color: "white", opacity: 0 }}>
          {" "}
          .
        </span>
      </div>
    </div>
  );
}

export default Landing;
