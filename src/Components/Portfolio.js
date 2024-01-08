import React from "react";
import "./CSS/Portfolio.css";
import { GoProjectRoadmap } from "react-icons/go";
import { DiGithubBadge } from "react-icons/di";
import { projectData } from "./CustomApi";
import SocialHandle from "./SocialHandle";

export default function Portfolio() {
  document.title = "Hassanjavaid | Portfolio";
  return (
    <>
      <div className="projects"  data-aos="fade-up">
        <h4 className="latest_project" >MY LATEST PROJECTS!</h4>
        <div className="sub-projects">
          {projectData.map(({ title, url, github, img }) => (
            <div className="project_box">
              <div className="project_img">
                <img src={img} className="project_img" alt="" />
              </div>
              <div>
                <h5>{title}</h5>
              </div>
              <div className="btns">
                <button className="github">
                  <DiGithubBadge />
                  <a href={github} target="_blank">
                    Github
                  </a>
                </button>
                <button className="demo">
                  <GoProjectRoadmap />
                  <a href={url} target="_blank">
                    Demo
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SocialHandle />
    </>
  );
}
