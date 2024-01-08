import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./CSS/Home.css";
import handeshak from "./Photos/handshake.gif";
import person from "./Photos/person.png";
import Hassanjavaid from "./Photos/me.svg";
import "./CSS/MediaHome.css";

const SocialHandle = React.lazy(()=> import('./SocialHandle'))
const Footer = React.lazy(()=> import('./Footer'))
const About = React.lazy(()=> import('./About'))
const My_Services = React.lazy(()=> import('./My_Services'))
export default function Home() {
  document.title = 'Hassanjavaid | Home'
  const [text] = useTypewriter({
    words: [
      "Freelancer",
      "React JS Developer",
      "FrontEnd Web Developer",
      "Open Source Contributor",
    ],
    loop: {},
  });
  return (
    <>
      <div className="homeContainer">
        <div className="homeContent">
          <p id="greet">
            Hi,Welcome!
            <img src={handeshak} alt="" id="handeshak" />
          </p>
          <h1>
            I,m <span id="spanName"> Hassanjavaid!</span>
          </h1>
          <div className="typewriter">
            <div className="typewrite" data-period="2000" data-type="">
              <span className="wrap" data-aos="fade-up">
                {text}
              </span>
            </div>
          </div>
        </div>
        <div className="personImage" data-aos="fade-up">
          <img src={person} alt="" id="person" />
        </div>
      </div>
      {/* <div className="introduction">
        <div className="sub_intro">
          <h1 className="my-self" data-aos="fade-up">
            LET ME INTRODUCE MYSELF!🌟{" "}
          </h1>
          <div id="introduceMySelf">
            <div className="self-desc">
              <p id="desc" data-aos="fade-up">
                I'm a Self-Taught Frontend Developer 🌟 Passionate about coding
                and web development! Fluent in{" "}
                <span id="skillSet">
                  {" "}
                  HTML, CSS, Bootstrap, Javascript, and React.js.
                </span>{" "}
                I create responsive web experiences and innovative tech
                solutions. Let's turn ideas into digital magic! 💻✨
              </p>
            </div>
            <div className="my-pic" data-aos="fade-up">
              <img src={Hassanjavaid} alt="" id="me" />
            </div>
          </div>
        </div>
      </div> */}
      <About />
      <My_Services />
      <SocialHandle />
    </>
  );
}
