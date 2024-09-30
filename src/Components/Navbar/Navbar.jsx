import React, { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./Dimmensions";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./Menutoogle";
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <div className="navbarcontainer">
        <ul>
          <Link to="/Login">
            <li className="winimage loginbutton">Login</li>
          </Link>
          <Link to="/Contact">
            <li className="wincontact">Contact</li>
          </Link>
          <Link to="/Superlist">
            <li className="windoc">Superlist</li>
          </Link>
          <Link to="/Games">
            <li className="winpages">Games</li>
          </Link>
          <Link to="/">
            <li className="winhome">Home</li>
          </Link>
          <Link to="/">
            <li
              style={{
                float: "left",
                fontSize: "30px",
                padding: "9px 10px 9px 9px",
                fontWeight: "600",
              }}
            >
              Maxtech
            </li>
          </Link>
        </ul>
      </div>

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
}

export default Navbar;
