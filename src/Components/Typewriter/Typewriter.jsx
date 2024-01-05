import React, { useEffect, useState } from "react";
import "./Typewriter.css";

function Typewriter() {
  const array = [
    "Virat Kohli and Nandre Burger are making headlines after South African pacers show on-field aggression to the former India captain in the ongoing Day 1 of India vs South Africa 1st Test at Newlands, Cape Town. Now a photo is going viral on social media where Nandre Burger was seen touching the feet of Virat Kohli and the post claiming that Burger apologized to Kohli after sledging him in the Test. However, India.com found that this is a morphed photo and nothing like that happened in the field.",
    "ananya Kohli and Nandre Burger are making headlines after South African pacers show on-field aggression to the former India captain in the ongoing Day 1 of India vs South Africa 1st Test at Newlands, Cape Town. Now a photo is going viral on social media where Nandre Burger was seen touching the feet of Virat Kohli and the post claiming that Burger apologized to Kohli after sledging him in the Test. However, India.com found that this is a morphed photo and nothing like that happened in the field.",
    "priyanka Kohli and Nandre Burger are making headlines after South African pacers show on-field aggression to the former India captain in the ongoing Day 1 of India vs South Africa 1st Test at Newlands, Cape Town. Now a photo is going viral on social media where Nandre Burger was seen touching the feet of Virat Kohli and the post claiming that Burger apologized to Kohli after sledging him in the Test. However, India.com found that this is a morphed photo and nothing like that happened in the field.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputText, setInputText] = useState("");
  const [value, setvalue] = useState("");
  const [match, setmatch] = useState([]);
  const [cursorpos, setcursorpos] = useState(0);

  function contenthandle() {
    let current = currentIndex;
    if (currentIndex > array.length - 1) {
      current = 0;
    } else {
      current++;
      if (current === 3) {
        current = 0;
      }
    }
    setCurrentIndex(current);
  }
  useEffect(() => {
    setInputText(array[currentIndex]);
    setmatch(new Array(array[currentIndex].length).fill(null));
  }, [currentIndex]);
  const handlechecker = (e) => {
    const ans = e.target.value;
    const content = array[currentIndex];
    const newmatch = [];
    for (let i = 0; i < ans.length; i++) {
      if (ans[i] === content[i]) {
        newmatch.push(true);
      } else {
        newmatch.push(false);
      }
    }
    setmatch(newmatch);
    setcursorpos(ans.length);
    console.log(cursorpos);
  };
  return (
    <div className="typecontainer">
      <div className="typenav"></div>
      <div className="typebox">
        <div className="typespace">
          <div className="typecontent">
            {inputText.split("").map((letter, index) => (
              <React.Fragment key={index}>
                {index === cursorpos && <span className="cursor"></span>}
                <span
                  className={`${match[index] ? "successcolor" : "errorcolor"}`}
                >
                  {letter}
                </span>
              </React.Fragment>
            ))}
          </div>
          <div>
            <input
              type="text"
              onChange={handlechecker}
              placeholder="Type Here..."
            ></input>
          </div>
        </div>
      </div>
      <div className="typebuttons">
        {value}
        <button onClick={contenthandle}>click here</button>
      </div>
    </div>
  );
}

export default Typewriter;
