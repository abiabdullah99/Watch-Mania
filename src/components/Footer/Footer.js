import React from "react";
import "./Footer.css";
import { BsFacebook, BsTwitter, BsInstagram, BsBehance } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer-area">
      <div className="foot" id="Contact">
        <div className="foot-1">
          <h6>
            Copyright ©2021 All rights reserved | This template is made with by
            <span className="span"> Abi Abdullah</span>
          </h6>
        </div>
        <div className="foot-2">
          <h3>Newsletter</h3>
          <h5>Stay updated with our latest trends</h5>
          <input type="text" placeholder="Enter Your E-mail Address" />
          <button>Send</button>
        </div>
        <div className="foot-3">
          <h3>Follow Me</h3>
          <h6>Let us be social</h6>
          <BsFacebook className="icon" />
          <BsTwitter className="icon" />
          <BsInstagram className="icon" />
          <BsBehance className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
