import React from "react";
import "./Cards.css";
import cardData from '../../data.json';

const Cards = () => {
  return (
    <div className="cards">
      <div className="card-head">
        <h2>
          DONT'T MISS OUT <br /> NEW DROPS
        </h2>
        <button>SHOP NEW DROPS</button>
      </div>
      <div className="card-container">
      {cardData.map((item) => {
        return (
            <div className="card">
              <div className="card-image">
                <img src={item.image} alt="" />
              </div>
              <div className="card-title">
                <h2>{item.title}</h2>
              </div>
              <div className="card-price">
                <h3>VIEW PRODUCT - <span>{item.price}</span></h3>
              </div>
            </div>
        );
      })}
       </div>
    </div>
  );
};

export default Cards;
