import React from "react";
import { Link } from "react-router-dom";
import Watch from "../../Assests/images/watch.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <div data-aos="fade-up-right" data-aos-duration="2000" className="banner-right">
        <h3>
          The <span>New Tech</span> Gift You Are
        </h3>
        <h1>WISHING FOR</h1>
        <h2>
          is right <span>here</span>
        </h2>
        <p>
          is unveiling its latest creations: watches that shine the light of
          optimism and innovation on the watchmaking world
        </p>
        <Link to="/about">
          <button className="shop-btn">See Details</button>
        </Link>
      </div>
      <div data-aos="fade-up-left" data-aos-duration="2000" className="banner-left">
        <img src={Watch} alt="" />
      </div>
    </div>
  );
};

export default Banner;
