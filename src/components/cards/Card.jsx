import React from "react";
import "./Card.css";

const Card = ({ product }) => {

  return (
    <div className="card">
      <img className="card__img" src={product.image} alt="" />
      <div>
        <h2>{product.category}</h2>
        <h4>{product.title}</h4>
      </div>
      <div className="card-price-add">
        <span>Price : ${product.price}</span>
      </div>
    </div>
  );
};

export default Card;
