import React from "react";
import "./CSS/Projects.css";
import { GoProjectRoadmap } from "react-icons/go";
import { DiGithubBadge } from "react-icons/di";
import project_img from "./Photos/project_image.jpg";
import project_weather from "./Photos/project_weather.jpg";
import react_calculator from './Photos/React Calculator.jpg'

export default function Projects() {
  document.title = "Hassanjavaid | Projects"
  return (
    <>
      <div className="prjects">
        <div className="sub-projects">
          <div className="project_box">
            <div className="project_img">
              <img src={project_img} className="project_img" alt="" />
            </div>
            <div>
              <h5>iFlix Movie App</h5 >
            </div>
            <div className="btns">
              <button className="github">
                <DiGithubBadge />
                <a href="https://github.com/Hassanjavaid1/reactmovieapp" target='_blank'>
                  Github
                </a>
              </button>
              <button className="demo">
                <GoProjectRoadmap />
                <a href="https://hassanjavaid1.github.io/reactmovieapp/" target='_blank'>
                  Demo
                </a>
              </button>
            </div>
          </div>
          <div className="project_box">
            <div className="project_img">
              <img src={project_weather} className="project_img" alt="" />
            </div>
            <div>
              <h5>React Weather App!</h5>
            </div>
            <div className="btns">
              <button className="github">
                <DiGithubBadge />
                <a href="https://github.com/Hassanjavaid1/ReactWeatherApp" target='_blank'>
                  Github
                </a>
              </button>
              <button className="demo">
                <GoProjectRoadmap />
                <a href="https://hassanjavaid1.github.io/ReactWeatherApp/" target='_blank'>
                  Demo
                </a>
              </button>
            </div>
          </div>
          <div className="project_box">
            <div className="project_img">
              <img src={react_calculator} className="project_img" alt="" />
            </div>
            <div>
              <h5>Calculator App!</h5>
            </div>
            <div className="btns">
              <button className="github">
                <DiGithubBadge />
                <a href="next day" target='_blank'>
                  Github
                </a>
              </button>
              <button className="demo">
                <GoProjectRoadmap />
                <a href="next day" target='_blank'>
                  Demo
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
