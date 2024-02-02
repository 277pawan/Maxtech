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
        trigger: ".details1",
        start: "top 60%",
        end: "bottom 50%",
        // markers: true,
        toggleActions: "play reverse play reverse",
      },
    });
    start.to(".gallery", {
      backgroundColor: "#ffbcbc",
      duration: 1,
      opacity: 1,
      ease: Power2.easeInOut,
    });
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".details2",
        start: "top 70%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
    });
    t1.to(".second", {
      opacity: 1,
      duration: 1,
      ease: Power2.easeInOut,
    });
    const t2 = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: ".details3",
        start: "top 60%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
    });
    t2.to(".gallery", {
      backgroundColor: "#ebbff7",
      duration: 1,
      ease: Power2.easeInOut,
    }).to(
      ".third",
      {
        opacity: 1,
        duration: 1,
      },
      0.1
    );
    // const t3 = gsap.timeline({
    //   scrollTrigger: {
    //     // markers: true,
    //     trigger: ".wrapperlast",
    //     start: "top 25%",
    //     end: "bottom 50%",
    //     toggleActions: "play reverse play reverse",
    //   },
    // });
    // t3.to(".lap4", {
    //   opacity: "1",
    //   duration: 2,
    //   transform: "scale(1)",
    //   ease: Power2.easeInOut,
    // });
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
              fontSize: "45px",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            Home to
          </div>
          <div
            style={{
              fontSize: "45px",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            all your📃<span style={{ color: "blue" }}>List.</span>
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
      <div class="gallery">
        <div class="left">
          <div class="detailsWrapper">
            <div class="details1">
              <div class="headline">Integrated</div>
              <div class="text">with apps</div>
              <div class="text">
                you <span style={{ color: "red" }}>Love.</span>
              </div>
            </div>

            <div class="details2">
              <div class="headline">Private</div>
              <div class="text">until you</div>
              <div class="text">
                are <span style={{ color: "green" }}>ready.</span>
              </div>
            </div>

            <div class="details3">
              <div class="headline">Work & Personal</div>
              <div class="text">at the flip</div>
              <div class="text">
                of a <span style={{ color: "purple" }}>ready.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="photos first"></div>
          <div class="photos second"></div>
          <div class="photos third"></div>
        </div>
      </div>
    </div>
  );
}

export default Superlist;
