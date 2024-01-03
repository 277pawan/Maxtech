import React, { useEffect, useRef } from "react";
import "./Games.css";
import { Link } from "react-router-dom";
import { gsap, Power2 } from "gsap";
function Games() {
  const firstbox = useRef(null);
  const secondbox = useRef(null);
  useEffect(() => {
    let t1 = new gsap.timeline();
    t1.to(firstbox.current, 1, {
      opacity: 0.75,
      transform: "translate(0%)",
      delay: 0.2,
    }).to(
      secondbox.current,
      1,
      {
        opacity: 0.75,
        transform: "translate(0%)",
        delay: 0.3,
      },
      0.1
    );
  }, []);
  return (
    <div className="gamescontainer">
      <div className="gamefirstbox">
        <div className="gamefirsttitle">Game Haven</div>
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
