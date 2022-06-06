import React from "react";
import UseReview from "../../hooks/UseReview";
import SetReviews from "../SetReviews/SetReviews";
import "./Reviews.css";
const Reviews = () => {
  const [review] = UseReview();
  return (
    <>
      <h2 className="review-tite">
        Client Rev<span>iews</span>
      </h2>
      <div className="reviw-container">
        {review.map((item) => (
          <SetReviews item={item}></SetReviews>
        ))}
      </div>
    </>
  );
};

export default Reviews;
