import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Usertodo.css";
import helloimage from "../../Assets/hello.png";
import plus from "../../Assets/plus.png";
import deleteimage from "../../Assets/deleteimage.png";
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
  function createfirsttodo() {
    settaskdata(false);
    setShowBoyImage(true);
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
  function deletetodo(index) {
    setuserdata((prevdata) => {
      const updatedata = [...prevdata];
      updatedata.splice(index, 1);
      return updatedata;
    });
  }
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
          <div
            style={{
              height: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="createyourtodo" onClick={createfirsttodo}>
              Create your Todo
            </button>
          </div>
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
                  borderBottom: "2px inset gray",
                }}
              >
                <input
                  className="usercheckbox"
                  type="checkbox"
                  checked={data.checked}
                  onClick={() => handleCheckboxChange(index)}
                  style={{ fontSize: "25px" }}
                ></input>
                <label
                  className={data.checked ? "labelmark" : "labelfont"}
                  htmlFor="yellow"
                >
                  {data.word}
                </label>
                <span style={{ float: "right" }}>
                  <img
                    className="deletetodo"
                    src={deleteimage}
                    alt="Delete"
                    onClick={() => deletetodo(index)}
                  ></img>
                </span>
              </div>
            ))}
          </div>
          <div className="usertodoinput">
            <div class="input-container">
              <input
                placeholder="Enter your todo"
                className="input-field"
                type="text"
                value={tempdata}
                onChange={(e) => settempdata(e.target.value)}
              />
              <label for="input-field" className="input-label">
                Enter your todo
              </label>
              <span class="input-highlight"></span>
            </div>
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
