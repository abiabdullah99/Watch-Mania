import { Link } from "react-router-dom";
import UseReview from "../../hooks/UseReview";
import Banner from "../Banner/Banner";
import SetReviews from "../SetReviews/SetReviews";
import "./Home.css";
const Home = () => {
  const [review] = UseReview();
  return (
    <>
      <Banner></Banner>
      <h2 className="text">
        Client Rev<span>iews</span>
      </h2>
      <div className="review-container">
        {review.slice(0, 3).map((item) => (
          <SetReviews item={item}></SetReviews>
        ))}
      </div>
      <Link to="/reviews"><button className="review-btn">See More</button></Link>
    </>
  );
};

export default Home;
