import "./HeroImageStyles.css";

import React from "react";
import IntroImg from "../assets/rayi-christian-wicaksono-6PF6DaiWz48-unsplash.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
      HeroImage
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt={IntroImg} />
      </div>
      <div className="content">
        <p>HI, I AM A DEVELOPER.</p>
        <h1> FULL STACK DEVELOPER</h1>
        <div className="">
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
