import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./Header.css";
import boy from "../../Assets/boy.jpg";
import girl from "../../Assets/girl.jpg";
import { gsap, Power2 } from "gsap";
import { CSSRulePlugin } from "gsap/all";
function Header() {
  const girlref = useRef(null);
  const boyref = useRef(null);
  const headerh1ref = useRef(null);
  const headerdescref = useRef(null);
  const headerbuttonref = useRef(null);
  const headerrealbuttonref = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(CSSRulePlugin);
    let tl = new gsap.timeline();
    tl.to(girlref.current, 1, { css: { top: "30%" } })
      .to(boyref.current, 1, { css: { top: "8%" } }, 0.2)
      .to(headerh1ref.current, 1, { opacity: 1, delay: 0.7 }, 0.4)
      .to(headerdescref.current, 1, { css: { opacity: 1 } }, 1.6)
      .to(headerrealbuttonref.current, 1, { css: { top: "0px" } }, 1.6);
  }, []);
  return (
    <div className="headercontainer">
      <div className="headerbox1">
        <div className="headerh1" ref={headerh1ref}>
          Ultimate Place for Personal Training and{" "}
          <span style={{ color: "red" }}>tutoring</span>
        </div>
        <div ref={headerdescref} className="headerdesc">
          Study with group of professionals Ultimate Theme for Online Tutoring &
          Distance Education Platforms
          <div ref={headerbuttonref} className="headerbutton">
            <button ref={headerrealbuttonref}>Get Started</button>
          </div>
        </div>
      </div>
      <div className="headerbox2">
        <img ref={girlref} className="girl" src={girl} alt="girl"></img>
        <img ref={boyref} className="boy" src={boy} alt="boy"></img>
      </div>
    </div>
  );
}

export default Header;
