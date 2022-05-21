import "./HeroImageStyles.css";
import React from "react";

import IntroImg from "../assets/bkg4.jpg";
import { Link } from "react-router-dom";
import Typical from "react-typical";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt={IntroImg} />
      </div>
      <div className="content">
        <h1>
          HI, I'M NICK{" "}
          <Typical
            steps={[
              "HTML5 CODE",
              5000,
              "CSS3 STYLING",
              5000,
              "JAVASCRIPT DEVELOPMENT",
              5000,
              "NODEJS",
              5000,
              "NPM",
              5000,
              "MONGDB DATABASE",
              5000,
              "MYSQL2",
              5000,
              "HEROKU DEPLOYMENT",
              5000,
              "GITHUB",
              5000,
              "AWS",
              5000,
              "AMAZON S3",
              5000,
              "BOOTSTRAP FRAMEWORK",
              5000,
              "TAILWIND",
              5000,
              "REACT",
              5000,
              "GRAPHQL",
              5000,
              "API's",
              5000,
              "MERN FULLSTACK",
              5000,
            ]}
            loop={Infinity}
            wrapper="h1"
          />
        </h1>
        <div className="">
          <Link to="/Portfolio-REACT/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/Portfolio-REACT/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
