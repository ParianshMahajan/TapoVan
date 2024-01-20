import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <section>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Company<span>logo</span>
          </h3>
          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>
            <a href="#">Nurses</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
          </p>
          <p className="footer-company-name">Company Name © 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <FontAwesomeIcon icon={faMapMarker} />
            <p>
              <span>Rajpura,Chitkara</span> Punjab
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <p>+911223243243</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>
              <a href="mailto:support@company.com">pariansh@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span> Lorem ipsum dolor sit amet,
            consectateur adispicing elit. Fusce euismod convallis velit, eu
            auctor lacus vehicula sit amet.
          </p>
          <div className="footer-icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
