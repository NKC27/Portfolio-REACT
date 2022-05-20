import "./FooterStyles.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Oxfordshire</p>
              <p>OXON</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +44 07123876543
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              n.clarke2785@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Contact me through Social Media</h4>
          {/* <p>Information on Something Here</p> */}
          <div className="social">
            <FaFacebook
              onClick={() => window.open("https://facebook.com/")}
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              onClick={() => window.open("https://twitter.com/")}
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              onClick={() => window.open("https://linkedin.com/")}
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaGithub
              onClick={() => window.open("https://github.com/nkc27")}
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
