import React, { useEffect, useRef, useState } from "react";
import "./Typewriter.css";
import restart from "../../Assets/restart.png";
import confetti from "canvas-confetti";
function Typewriter() {
  const array100 = [
    "Shreyas Kohli and Nandre Burger are making headlines after South African pacers show on-field aggression to the former India captain in the ongoing Day 1 of India vs South Africa 1st Test at Newlands, Cape Town. Now a photo is going viral on social media where Nandre Burger was seen touching the feet of Virat Kohli and the post claiming that Burger apologized to Kohli after sledging him in the Test. However, India.com found that this is a morphed photo and nothing like that happened in the field.",
    "ananya Kohli and Nandre Burger are making headlines after South African pacers show on-field aggression to the former India captain in the ongoing Day 1 of India vs South Africa 1st Test at Newlands, Cape Town. Now a photo is going viral on social media where Nandre Burger was seen touching the feet of Virat Kohli and the post claiming that Burger apologized to Kohli after sledging him in the Test. However, India.com found that this is a morphed photo and nothing like that happened in the field.",
    "priyanka Kohli and Nandre Burger are making headlines after South African pacers show on-field aggression to the former India captain in the ongoing Day 1 of India vs South Africa 1st Test at Newlands, Cape Town. Now a photo is going viral on social media where Nandre Burger was seen touching the feet of Virat Kohli and the post claiming that Burger apologized to Kohli after sledging him in the Test. However, India.com found that this is a morphed photo and nothing like that happened in the field.",
  ];
  const array10 = [
    "Rabbish ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat laborum.",
    "Dinasour ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat laborum.",
    "Animal ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat laborum.",
  ];
  const array40 = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde consequatur quis tempora nostrum corporis quasi esse. Quo praesentium dolore reprehenderit dolorum assumenda consectetur iusto doloribus, explicabo non placeat sequi adipisci!",
    "Siafbo ipsum dolor sit amet, consectetur adipisicing elit. Unde consequatur quis tempora nostrum corporis quasi esse. Quo praesentium dolore reprehenderit dolorum assumenda consectetur iusto doloribus, explicabo non placeat sequi adipisci!",
    "Paniyon ipsum dolor sit amet, consectetur adipisicing elit. Unde consequatur quis tempora nostrum corporis quasi esse. Quo praesentium dolore reprehenderit dolorum assumenda consectetur iusto doloribus, explicabo non placeat sequi adipisci!",
  ];
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [inputText, setInputText] = useState("");
  const [value, setvalue] = useState(array10);
  const [valuecopy, setvaluecopy] = useState(1);
  const [match, setmatch] = useState([]);
  const [cursorpos, setcursorpos] = useState(0);
  const [contentpos, setcontentpos] = useState(0);
  const [isHovered, setishovered] = useState(false);
  const [istrue, settrue] = useState(0);
  const [isfalse, setfalse] = useState(0);
  const [finish, setfinish] = useState(false);
  function handle10array() {
    setvalue(array10);
  }
  function handle40array() {
    setvalue(array40);
  }
  function handle100array() {
    setvalue(array100);
  }

  function contenthandle() {
    let currentcontentpos = contentpos;
    if (currentcontentpos < value.length) {
      currentcontentpos = currentcontentpos + 1;
      setcontentpos(currentcontentpos);
      setmatch([]);
      setcursorpos(0);
      if (currentcontentpos > value.length - 1) {
        currentcontentpos = 0;
        setcontentpos(currentcontentpos);
        setmatch([]);
        setcursorpos(0);
      }
    }
  }
  // function handlechecker(e) {
  //   let ans = e.target.value;
  //   setvalue(ans);
  //   const anscontent = array[contentpos].split("");
  //   let newmatch   = [];
  //   for (let i = 0; i < ans.length; i++) {
  //     if (ans[i] === " ") {
  //       newmatch.push(true);
  //       setvalue("");
  //     } else if (ans[i] === anscontent[i]) {
  //       console.log(true);
  //       newmatch.push(true);
  //     } else {
  //       console.log(false);
  //       newmatch.push(false);
  //     }
  //   }
  //   setmatch(newmatch);
  // }
  useEffect(() => {
    const handleKeyPress = (e) => {
      const ans = e.key;
      console.log(match.length);
      const contentans = value[contentpos].charAt(match.length);
      setcursorpos(match.length + 1);

      if (ans === contentans) {
        setmatch((prevMatch) => [...prevMatch, true]);
        settrue(istrue + 1);
      } else {
        setmatch((prevMatch) => [...prevMatch, false]);
        setfalse(isfalse + 1);
      }

      if (match.length >= valuecopy * 100) {
        setvaluecopy(valuecopy + 1);
      }

      // Check if the user has finished typing the current content
      if (match.length === value[contentpos].length - 1) {
        setfinish(true);
        console.log("Finished your content.");
        setTimeout(() => {
          confetti();
        }, 1000);
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [match, valuecopy, contentpos]);
  return (
    <div className="typecontainer">
      {finish ? (
        <>
          <div className="finishcontainer">
            <div className="correctchar">
              <div className="correct">{istrue}</div>
              <div className="correctlabel">Correct Character</div>
            </div>
            <div className="wrongchar">
              {" "}
              <div className="wrong">{isfalse}</div>
              <div className="wronglabel">Wrong Character</div>
            </div>
            <div className="speed">
              {" "}
              <div className="speedkm">20</div>
              <div className="speedlabel">Words/Minute</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="typenav">
            <div className="wordsbox1">Words</div>
            <div className="wordsbox2" onClick={handle10array}>
              10
            </div>
            <div className="wordsbox3" onClick={handle40array}>
              40
            </div>
            <div className="wordsbox4" onClick={handle100array}>
              100
            </div>
          </div>
          <div className="typebox">
            <div className="typespace">
              <div className="typecontent">
                {value[contentpos]
                  .split("")
                  .slice(valuecopy * 100 - 100, valuecopy * 100)
                  .map((letter, index) => (
                    <React.Fragment key={index}>
                      <span
                        className={`${index === cursorpos ? "cursor" : ""}`}
                      ></span>
                      <span
                        key={index}
                        className={`${
                          match[index] ? "sucesscolor" : "errorcolor"
                        }`}
                      >
                        {letter}
                      </span>
                    </React.Fragment>
                  ))}
              </div>
              {/* <div>
            <input
              type="text"
              value={value}
              ref={inputref}
              onChange={handlechecker}
              placeholder="Type Here..."
            ></input>
          </div> */}
            </div>
          </div>
        </>
      )}
      <div className="typebuttons">
        <img
          className="restartimg"
          src={restart}
          alt="Restart_Image"
          onClick={contenthandle}
          onMouseEnter={() => setishovered(true)}
          onMouseLeave={() => setishovered(false)}
        ></img>
        {isHovered && (
          <div className="hover-box">
            <p>Restart Button </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Typewriter;
