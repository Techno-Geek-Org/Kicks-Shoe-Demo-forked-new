import React from "react";
import reviewData from "../../review.json";
import "./Review.css";

const Review = () => {
  return (
    <div className="review">
      <div className="review-head">
        <h2>REVIEWS</h2>
        <button>SEE ALL</button>
      </div>
      <div className="review-cards">
        {reviewData.map((item, index) => {
          return (
            <div className="card">
              <div className="card-top">
                <div className="card-data">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
                <div className="card-img">
                  <img key={index} src={item.avatar} alt="" />
                </div>
              </div>
              <div className="card-rating">
                <img key={index} src="/assets/rating_stars.png" alt="" />
              </div>
              <div className="card-bottom">
                <img src={item.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
