import React from "react";
import "./CSS/About.css";
import "./CSS/MediaAbout.css";
import about_person from "./Photos/about.png";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { BiGitBranch } from "react-icons/bi";
import { ImNpm } from "react-icons/im";
import { SiPostman } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiMacos } from "react-icons/si";
import { BiExtension } from "react-icons/bi";
import { FaChrome } from "react-icons/fa";
import { TbBrandSublimeText } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { Element } from "react-scroll";

export default function About() {
  return (
    <>
      <div className="know_me">
          <div className="sub_know_me">
        <Element name="About">
            <p className="know_heading" data-aos="fade-left">
              Know Who <span>I'm? </span>
            </p>
            <p id="sub_heading" data-aos="fade-up">
              Hi Everyone, I am <span className="about_span">Hassanjavaid</span>{" "}
              from <span className="about_span">Pakistan</span>.
            </p>
        </Element>
          </div>
        <div className="full_detail" data-aos="fade-left">
          I'm a self-taught frontend developer with expertise in HTML, CSS,
          Bootstrap JavaScript, React.js, Npm, Git, Github. Currently, I'm
          crafting user-friendly web interfaces and diving into exciting new
          projects. I have a passion for transforming ideas into interactive
          digital experiences. In my free time, I explore the latest tech
          trends, enjoy coding challenges, and love bringing creative concepts
          to life. Eager to collaborate, learn, and make a meaningful impact in
          the web development world! 🚀🌐
          <div>
            <img
              src={about_person}
              alt=""
              id="about_person"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
      <div className="tech_used" data-aos="fade-up">
        <h4 data-aos="fade-up">
          Professional <span>Skillset</span>
        </h4>
        <div id="sub_tech" data-aos="fade-left">
          <ImHtmlFive className="tech_icon" />
          <FaCss3Alt className="tech_icon" />
          <GrReactjs className="tech_icon" />
          <IoLogoJavascript className="tech_icon" />
          <FaBootstrap className="tech_icon" />
          <FiGithub className="tech_icon" />
          <BiGitBranch className="tech_icon" />
          <ImNpm className="tech_icon" />
        </div>
      </div>
      <div className="tool_used">
        <h4 data-aos="fade-up">
          <span>Tools</span> I use
        </h4>
        <div id="sub_tool" data-aos="fade-right">
          <FiGithub className="tool_icon" />
          <SiPostman className="tool_icon" />
          <BiLogoVisualStudio className="tool_icon" />
          <SiMacos className="tool_icon" />
          <BiExtension className="tool_icon" />
          <FaChrome className="tool_icon" />
          <TbBrandSublimeText className="tool_icon" />
          <FaNodeJs className="tool_icon" />
        </div>
      </div>
      {/* <SocialHandle /> */}
    </>
  );
}
