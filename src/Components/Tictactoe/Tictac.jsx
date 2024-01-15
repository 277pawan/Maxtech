import React, { useEffect, useState } from "react";
import "./Tictac.css";
import Tacbox from "./Tacbox";
import restart from "../../Assets/restart.png";
import confetti from "canvas-confetti";
function Tictac() {
  const [value, setvalue] = useState(Array(9).fill(null));
  const [toogle, settoogle] = useState(true);
  const [winnertoogle, setwinnertoogle] = useState(false);
  const [winnervalue, setwinnervalue] = useState();
  const [rotate, setrotate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function tooglehandle(index) {
    const updatedvalue = [...value];
    if (toogle) {
      if (updatedvalue[index] == null) {
        updatedvalue[index] = "O";
        setvalue(updatedvalue);
        settoogle(!toogle);
      }
    } else {
      if (updatedvalue[index] == null) {
        updatedvalue[index] = "X";
        setvalue(updatedvalue);
        settoogle(!toogle);
      }
    }
  }
  function checkwinner() {
    const winnerarray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i of winnerarray) {
      const [a, b, c] = i;
      if (
        value[a] !== null &&
        value[a] === value[b] &&
        value[b] === value[c] &&
        value[c] === value[a]
      ) {
        setwinnertoogle(!winnertoogle);
        setwinnervalue(value[a]);
        confetti();
        return value[a];
      }
    }

    return false;
  }
  function restartgame() {
    setrotate(true);
    setTimeout(() => {
      setrotate(false);
    }, 1000);
    setvalue(Array(9).fill(null));
    setwinnertoogle(false);
    setwinnervalue();
    settoogle(true);
  }
  useEffect(() => {
    checkwinner();
    // if (winnerhero === "X") {
    //   console.log("User1 Chicken Dinner.");
    // } else if (winnerhero === "O") {
    //   console.log("User2 Chicken Dinner.");
    // } else {
    //   console.log("Main Kameena.");
    // }
  }, [value]);

  return (
    <div className="taccontainer">
      <div className="tacbox">
        {winnertoogle ? (
          <div
            style={{ fontSize: "24px", color: "White", fontWeight: "bolder" }}
          >
            {winnervalue} Chicken Dinner.
          </div>
        ) : (
          <>
            <div className="tacrow1">
              <Tacbox
                toogle={toogle}
                value={value[0]}
                tooglevalue={() => tooglehandle(0)}
              />
              <Tacbox
                toogle={toogle}
                value={value[1]}
                tooglevalue={() => tooglehandle(1)}
              />
              <Tacbox
                toogle={toogle}
                value={value[2]}
                tooglevalue={() => tooglehandle(2)}
              />
            </div>
            <div className="tacrow2">
              <Tacbox
                toogle={toogle}
                value={value[3]}
                tooglevalue={() => tooglehandle(3)}
              />
              <Tacbox
                toogle={toogle}
                value={value[4]}
                tooglevalue={() => tooglehandle(4)}
              />
              <Tacbox
                toogle={toogle}
                value={value[5]}
                tooglevalue={() => tooglehandle(5)}
              />
            </div>
            <div className="tacrow3">
              <Tacbox
                toogle={toogle}
                value={value[6]}
                tooglevalue={() => tooglehandle(6)}
              />
              <Tacbox
                toogle={toogle}
                value={value[7]}
                tooglevalue={() => tooglehandle(7)}
              />
              <Tacbox
                toogle={toogle}
                value={value[8]}
                tooglevalue={() => tooglehandle(8)}
              />
            </div>
          </>
        )}
      </div>
      <div>
        <abbr title="Restart">
          <img
            className={`restartimage ${rotate ? "round" : ""}`}
            src={restart}
            alt="Restart button"
            onClick={restartgame}
          ></img>
        </abbr>
      </div>
      <div></div>
    </div>
  );
}

export default Tictac;
