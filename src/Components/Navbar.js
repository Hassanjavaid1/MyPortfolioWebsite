import React, { useEffect, useState } from "react";
import "./CSS/Nav.css";
import { BsGithub } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll"; 
import {  NavLink } from "react-router-dom";
import { MdMedicalServices } from "react-icons/md";


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
            <Link to ='About' spy={true} smooth={true} duration={250} className="link">
    
              <BsFillPersonLinesFill /> About
        
            </Link>
            <Link to ='My_Services' spy={true} smooth={true} duration={250} className="link">

              <MdMedicalServices /> Services
            </Link>
            <NavLink to="/Portfolio" className="link">
              <AiOutlineFundProjectionScreen /> Portfolio
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
