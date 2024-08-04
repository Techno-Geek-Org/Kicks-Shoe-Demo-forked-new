import React from 'react'
import './Review.css'

const Review = () => {
  return (
    <div className='review'>
      <div className="review-head">
        <h2>REVIEWS</h2>
        <button>SEE ALL</button>
      </div>
      <div className="review-cards">
        <div className="card">
          <div className="card-top">
            <div className="card-data">
              <h2>Good Quality</h2>
              <p>I highly recommend shopping from kicks</p>
            </div>
            <div className="card-img">
              <img src="/assets/avatar1.jpg" alt="" />
            </div>
          </div>
          <div className="card-rating">
            <img src="/assets/rating_stars.png" alt="" />
          </div>
          <div className="card-bottom">
            {/* <img src="/assets/review_img1.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
