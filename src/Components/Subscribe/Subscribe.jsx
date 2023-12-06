import React, { useEffect, useRef } from "react";
import "./Subscribe.css";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CSSRulePlugin } from "gsap/all";
function Subscribe() {
  const subscribetitleref = useRef(null);
  const subscribedescref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSRulePlugin);
    const t1 = new gsap.timeline({
      duration: 1,
      scrollTrigger: {
        trigger: subscribetitleref.current,
        toggleActions: "play",
      },
    });
    t1.staggerTo(
      subscribetitleref.current,
      2,
      {
        opacity: 1,
        y: 0,
        ease: " Power2.easeOut ",
      },
      0.2
    ).to(
      subscribedescref.current,
      1,
      { opacity: 1, ease: Power2.easeInOut, y: 0 },
      0.3
    );
  });

  return (
    <div className="subscribecontainer">
      <div className="subscribebox">
        <div ref={subscribetitleref} className="subscribetitle">
          Help Maxtech to be a <span style={{ color: "tomato" }}>better</span>
        </div>
        <div ref={subscribedescref} className="subscribedesc">
          Provide your valuable feedback, will be a great help for us to reach
          at top of the peak.
        </div>
        <div className="subscribebutton">
          <button>Eager to help</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
