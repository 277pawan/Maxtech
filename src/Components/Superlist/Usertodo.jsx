import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Usertodo.css";
import helloimage from "../../Assets/hello.png";
import plus from "../../Assets/plus.png";
import usertodoimage from "../../Assets/todoadd.jpg";
import boyim from "../../Assets/boy.jpg";
import { gsap, Power2 } from "gsap";
function Usertodo() {
  const [userdata, setuserdata] = useState([]);
  const [tempdata, settempdata] = useState("");
  const [taskdata, settaskdata] = useState(true);
  const [showBoyImage, setShowBoyImage] = useState(false);
  const [rotateAddTodo, setRotateAddTodo] = useState(false);
  const [rotateAddFirstTodo, setRotateAddFirstTodo] = useState(false);
  function Addfirstdata() {
    if (tempdata !== "") {
      const newdata = {
        word: tempdata,
        checked: false,
      };
      setuserdata((prevdata) => [...prevdata, newdata]);
      settempdata("");
      setRotateAddFirstTodo(true);
      setTimeout(() => {
        setRotateAddFirstTodo(false);
      }, 2000);
    }
  }
  function userinputhandle() {
    if (tempdata !== "") {
      const newdata = {
        word: tempdata,
        checked: false,
      };
      setuserdata((prevdata) => [...prevdata, newdata]);
      settempdata("");
      setRotateAddTodo(true);
      setTimeout(() => {
        setRotateAddTodo(false);
      }, 2000);
    }
  }
  function handleCheckboxChange(index) {
    // console.log("checked");
    setuserdata((prevdata) => {
      const updatestate = [...prevdata];
      updatestate[index] = {
        ...updatestate[index],
        checked: !updatestate[index].checked,
      };
      return updatestate;
    });
    settaskdata(false);
    console.log(userdata);
  }
  useEffect(() => {
    if (userdata.length === 0) {
      settaskdata(true);
    } else {
      settaskdata(false);
      setShowBoyImage(true);
    }
  }, [tempdata]);
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.to(".usertododatalist", {
      opacity: 1,
      duration: 0.3,
      ease: Power2.easeIn,
    }).to(
      ".usertodo1image",
      {
        opacity: 1,
        duration: 0.3,
        ease: Power2.easeIn,
      },
      0.01
    );
  }, [taskdata]);
  return (
    <div className="usertodocontainer">
      {taskdata ? (
        <div className="usertododata">
          <div
            style={{
              height: "70%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              borderRadius: "20px",
            }}
          >
            <img className="helloimage" src={helloimage} alt="helloimage"></img>
          </div>
          <div style={{ height: "30%" }}>
            <button>Create your Todo</button>
          </div>
          {/* <div
            style={{
              height: "100px",
              backgroundColor: "transparent",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Type your first todo task.
          </div>
          <div className="todoinput">
            <input
              className="todotext"
              value={tempdata}
              onChange={(e) => settempdata(e.target.value)}
              type="text"
            ></input>
            <img
              className={`addplusfirsttodo ${
                rotateAddFirstTodo ? "rotate" : ""
              }`}
              src={plus}
              alt="adduser"
              onClick={Addfirstdata}
            ></img>
          </div> */}
        </div>
      ) : (
        <div className="usertododatalist">
          <div
            style={{
              height: "60px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "36px",
              fontWeight: "bolder",
            }}
          >
            User Todo.
          </div>
          <div className="userpersonallist">
            {userdata.map((data, index) => (
              <div
                key={index}
                style={{
                  height: "auto",
                  padding: "10px 0px 10px 0px",
                  borderBottom: "inset",
                }}
              >
                <input
                  className="usercheckbox"
                  type="checkbox"
                  checked={data.checked}
                  onClick={() => handleCheckboxChange(index)}
                  style={{ fontSize: "25px" }}
                ></input>
                <label className="labelfont" htmlFor="yellow">
                  {data.word}
                </label>
              </div>
            ))}
          </div>
          <div className="usertodoinput">
            <input
              className="usertodotext"
              value={tempdata}
              onChange={(e) => settempdata(e.target.value)}
              type="text"
            ></input>
            <img
              className={`addplusfirsttodo ${rotateAddTodo ? "rotate" : ""}`}
              src={plus}
              alt="adduser"
              onClick={userinputhandle}
            ></img>
          </div>
        </div>
      )}
      <div className="usertodoimage">
        {showBoyImage ? (
          <img className="usertodo1image" src={boyim} alt="boyim"></img>
        ) : (
          <img
            className="todoaddimage"
            src={usertodoimage}
            alt="todoimage"
          ></img>
        )}{" "}
      </div>
    </div>
  );
}

export default Usertodo;
