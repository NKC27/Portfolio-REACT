import React from "react";
import { Link } from "react-router-dom";

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
            <img src={} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
