import React, { useEffect, useRef, useState } from "react";
import "./Typewriter.css";
import restart from "../../Assets/restart.png";

function Typewriter() {
  const array = [
    "Virat Kohli and Nandre Burger are making headlines after South African pacers show on-field aggression to the former India captain in the ongoing Day 1 of India vs South Africa 1st Test at Newlands, Cape Town. Now a photo is going viral on social media where Nandre Burger was seen touching the feet of Virat Kohli and the post claiming that Burger apologized to Kohli after sledging him in the Test. However, India.com found that this is a morphed photo and nothing like that happened in the field.",
    "ananya Kohli and Nandre Burger are making headlines after South African pacers show on-field aggression to the former India captain in the ongoing Day 1 of India vs South Africa 1st Test at Newlands, Cape Town. Now a photo is going viral on social media where Nandre Burger was seen touching the feet of Virat Kohli and the post claiming that Burger apologized to Kohli after sledging him in the Test. However, India.com found that this is a morphed photo and nothing like that happened in the field.",
    "priyanka Kohli and Nandre Burger are making headlines after South African pacers show on-field aggression to the former India captain in the ongoing Day 1 of India vs South Africa 1st Test at Newlands, Cape Town. Now a photo is going viral on social media where Nandre Burger was seen touching the feet of Virat Kohli and the post claiming that Burger apologized to Kohli after sledging him in the Test. However, India.com found that this is a morphed photo and nothing like that happened in the field.",
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [inputText, setInputText] = useState("");
  const [value, setvalue] = useState("");
  const [valuecopy, setvaluecopy] = useState(0);
  const [match, setmatch] = useState([]);
  const [cursorpos, setcursorpos] = useState(0);
  const [contentpos, setcontentpos] = useState(0);
  const [isHovered, setishovered] = useState(false);
  const inputref = useRef(null);
  function contenthandle() {
    let currentcontentpos = contentpos;
    if (currentcontentpos < array.length) {
      currentcontentpos = currentcontentpos + 1;
      setcontentpos(currentcontentpos);
      if (currentcontentpos > array.length - 1) {
        currentcontentpos = 0;
        setcontentpos(currentcontentpos);
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
      const contentans = array[contentpos].charAt(match.length);
      console.log(contentans);
      setcursorpos(match.length + 1);
      if (ans === contentans) {
        setmatch((prevMatch) => [...prevMatch, true]);
      } else {
        setmatch((prevMatch) => [...prevMatch, false]);
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [contentpos, match]);
  return (
    <div className="typecontainer">
      <div className="typenav"></div>
      <div className="typebox">
        <div className="typespace">
          <div className="typecontent">
            {array[contentpos]
              .split("")
              .slice(0, array[contentpos].length)
              .map((letter, index) => (
                <React.Fragment key={index}>
                  <span
                    className={`${index === cursorpos ? "cursor" : ""}`}
                  ></span>
                  <span
                    key={index}
                    className={`${match[index] ? "sucesscolor" : "errorcolor"}`}
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
