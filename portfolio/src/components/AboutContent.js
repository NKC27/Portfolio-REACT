import React from "react";
import { Link } from "react-router-dom";
import profilePicture from "../assets/logos/profilePicture.png";
import bootstrap from "../assets/logos/BootstrapLogo.png";
import css3 from "../assets/logos/css3.png";
import html5 from "../assets/logos/html5.png";
import heroku2 from "../assets/logos/heroku2.png";
import js from "../assets/logos/JSLogo.png";
import mongoDB from "../assets/logos/mongodb.png";
import mysql2 from "../assets/logos/MySQL2.png";
import react from "../assets/logos/react.png";
import npm from "../assets/logos/npm-logo-red.jpg";
import vscode from "../assets/logos/VSLogo.png";

import "./AboutContentStyles.css";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>What can I do?</h1>
        <p>
          I am pursuing a career in Web Development and currently studying Full
          Stack Coding at the University of Birmingham. I'm a FullStack
          Developer. I can create front-end designs or, work back-end coding for
          server side. I enjoy learning and will continue to expand my knowledge
          in a variety of web development fields.
        </p>
        <Link to="/contact">
          <button class="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack-top">
            <img src={profilePicture} className="img" alt="" />
            <div className="img-stack-top">
              <img src={html5} className="img" alt="" />
            </div>
            <div className="img-stack-top">
              <img src={css3} className="img" alt="" />
            </div>

            <div className="img-stack-top">
              <img src={js} className="img" alt="" />
            </div>
            <div className="img-stack-top">
              <img src={vscode} className="img" alt="" />
            </div>
            <div className="img-stack-top">
              <img src={react} className="img" alt="" />
            </div>
            <div className="img-stack-top">
              <img src={mysql2} className="img" alt="" />
            </div>
            <div className="img-stack-top">
              <img src={bootstrap} className="img" alt="" />
            </div>
            <div className="img-stack-top">
              <img src={heroku2} className="img" alt="" />
            </div>
            <div className="img-stack-top">
              <img src={mongoDB} className="img" alt="" />
            </div>
            <div className="img-stack-top">
              <img src={npm} className="img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
