import React, { useEffect, useRef } from "react";
import "./Games.css";
import { Link } from "react-router-dom";
import { gsap, Power2 } from "gsap";
function Games() {
  const firstbox = useRef(null);
  const secondbox = useRef(null);
  useEffect(() => {
    let t1 = gsap.timeline();
    t1.to(firstbox.current, 1.3, {
      opacity: 0.75,
      transform: "translateY(0%)",
      delay: 0.2,
    }).to(
      secondbox.current,
      1,
      {
        opacity: 0.75,
        transform: "translateY(0%)",
        delay: 0.33,
      },
      0.1
    );
  }, []);
  return (
    <div className="gamescontainer">
      <div className="gamefirstbox">
        <div className="gamefirsttitle">
          Game<span style={{ color: "tomato" }}>Haven</span>
        </div>
        <div className="gamefirstdesc">
          Your Ultimate destination for interactive games.
        </div>
      </div>
      <div className="gamesecondbox">
        <div ref={firstbox} className="gamesecondbox1">
          <div>Typewriter Game</div>
          <Link to="/Typewriter">
            <button>Start Game</button>
          </Link>
        </div>
        <div ref={secondbox} className="gamesecondbox2">
          {" "}
          <div>Tic-Tac-Toe</div>
          <Link to="/Tictac">
            <button>Start Game</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Games;
