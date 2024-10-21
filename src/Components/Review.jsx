import React from "react";
import { review } from "../Data";
import qouteImg from "../images/quote-img.png"; 
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          <span>Customer's Review</span> 
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={qouteImg} alt="" className="quote" />
              <p>
              The Green Plate offers a delightful farm-to-table dining experience. The beet salad was fresh and well-balanced, and the grilled salmon was perfectly cooked, moist, and flavorful. The flourless chocolate cake was rich and decadent. Attentive service and a cozy ambiance made for a memorable meal.
              </p>
              <img src={item.img} className="user" alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
