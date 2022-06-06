import { useEffect, useState } from "react";

const UseReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return [review, setReview];
};
export default UseReview;
