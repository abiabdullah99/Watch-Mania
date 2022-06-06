import React from "react";
import "./SetReviews.css";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
const SetReviews = (props) => {
  const { name, img, review } = props.item;
  return (
    <div data-aos="fade-down-right" data-aos-duration="3000" className="card">
      <p className="icons">
        <FaQuoteLeft />
      </p>
      <div className="Review">
        <img src={img} alt="" />
      </div>
      <div className="Review-details">
        <h1>{name}</h1>
        <h5>{review}</h5>
        <div className="rating">
          <p className="rating-text">Rating:</p> <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};

export default SetReviews;
