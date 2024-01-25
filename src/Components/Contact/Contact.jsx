import React, { useEffect, useState } from "react";

function Contact() {
  const [state, setstate] = useState([
    { work: "Simran", checked: false },
    { work: "pawan", checked: false },
    { work: "Shivani", checked: false },
    { work: "Sweety", checked: false },
  ]);

  function handleCheckboxChange(index) {
    setstate((prevdata) => {
      const updateddata = [...prevdata];
      updateddata[index] = {
        ...updateddata[index],
        checked: !updateddata[index].checked,
      };
      return updateddata;
    });
  }

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      {state.map((data, index) => (
        <div key={index}>
          <div onClick={() => handleCheckboxChange(index)}>
            {data.work} and{" "}
            <span>{data.checked ? "Checked" : "Unchecked"}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
