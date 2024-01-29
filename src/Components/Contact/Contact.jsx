import React, { useEffect, useState } from "react";
import "./Contact.css";

function Contact() {
  const [contact, setContact] = useState(false);

  function contactButton() {
    setContact(!contact);
  }

  return (
    <div className="contactcontainer">
      <div className={`contactbox ${contact ? "expanded" : ""}`}>
        Explore more list inside this button{" "}
        <button onClick={contactButton}>➕</button>
        {contact ? (
          <div className="additional-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
            temporibus adipisci ab molestiae voluptatum optio doloribus, quam
            maxime consectetur expedita perspiciatis, labore possimus velit!
            Molestiae eaque accusantium non cumque? Iure.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Contact;
