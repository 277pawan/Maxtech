import React, { useEffect, useRef } from "react";
import "./Guide.css";
import future from "../../Assets/futurestudy.png";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/all";
function Guide() {
  const guidecontainref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: guidecontainref.current,
        // markers: true,
        start: "top 70%",
        end: "bottom 0%",
        toggleActions: "play reverse play reverse",
      },
    });

    t1.to(guidecontainref.current, {
      duration: 1,
      css: { "background-color": "rgb(1, 38, 1)", visibility: "visible" },
      ease: Power2.easeInOut,
    });
  });
  return (
    <div ref={guidecontainref} className="guidecontainer">
      <div className="guidebox1">
        <div className="guidesmallbox1">
          <div className="guidebox1title">
            Learn at your own <span style={{ color: "tomato" }}>pace.</span>
          </div>
          <ul className="guideboxul">
            <li className="guideboxli">
              Select & customize courses to your preferences.
            </li>
            <li className="guideboxli">
              Change the tutor and make your arrangement.
            </li>
            <li className="guideboxli">
              Participate in events and activity to join others.
            </li>
            <li className="guideboxli">
              Get the desired certificates delivered at houses.
            </li>
            <li className="guideboxli">
              Why hesitation while Register, let's get started?
            </li>
            <button className="guidebutton">Let's Get Started</button>
          </ul>
        </div>
      </div>
      <div className="guidebox2">
        <div className="guidesmallbox2">
          <img src={future} alt="books"></img>
        </div>
      </div>
    </div>
  );
}

export default Guide;
