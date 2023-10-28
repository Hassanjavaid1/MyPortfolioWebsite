import React, { useEffect, useState } from "react";
import "./CSS/Nav.css";
import { BsGithub } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [handleScroll, sethandleScroll] = useState("SubNav");
  const [click, setclick] = useState("handleHide");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        sethandleScroll("scrollUp");
      } else {
        sethandleScroll("SubNav");
      }
    });
  }, []);
  const handleOnClick = () => {
    if (click == "handleHide") {
      setclick("handleShow");
    } else {
      setclick("handleHide");
    }
  };
  return (
    <>
      <div className="NavContainer">
        <div className={handleScroll}>
          <div className="logoName">
            <span className="gitlogo">
              <a href="https://github.com/Hassanjavaid1" target="_blank">
                {<BsGithub id="logo" />}
              </a>
            </span>
            <div id="name">
              <Link to="/">Hassanjavaid!</Link>
            </div>
          </div>
          <div className="NavLink" id={click}>
            <NavLink to="/" className="link">
              <AiOutlineHome /> Home
            </NavLink>
            <NavLink to="/about" className="link">
              <BsFillPersonLinesFill /> About
            </NavLink>
            <NavLink to="/projects" className="link">
              <AiOutlineFundProjectionScreen /> Projects
            </NavLink>
            <NavLink to="/contact" className="link">
              <IoIosContact />
              Contact
            </NavLink>
          </div>
          <div className="hamburger" onClick={handleOnClick}>
            <div className="sub-hamburger">
              <RxHamburgerMenu id="burger" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
