import React from "react";
import "./Games.css";
function Games() {
  return (
    <div className="gamescontainer">
      <div className="gamefirstbox">
        <div className="gamefirsttitle">Game Haven</div>
        <div className="gamefirstdesc">
          Your Ultimate destination for interactive games.
        </div>
      </div>
      <div className="gamesecondbox">
        <div className="gamesecondbox1">
          <div>Typewriter Game</div>
          <button>Start Game</button>
        </div>
        <div className="gamesecondbox2">
          {" "}
          <div>Tic-Tac-Toe</div>
          <button>Start Game</button>
        </div>
      </div>
    </div>
  );
}

export default Games;
