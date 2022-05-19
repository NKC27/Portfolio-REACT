import "./WorkCardStyles.css";
import soloTraveller from "../assets/soloTraveller.png";
import { NavLink } from "react-router-dom";

import React from "react";

const WorkCard = () => {
  return (
    <div className="Work-container">
      <h1 className="project-heading">Project 1</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={soloTraveller} alt="" />
          <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p>This is the project text.</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="url.com" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
