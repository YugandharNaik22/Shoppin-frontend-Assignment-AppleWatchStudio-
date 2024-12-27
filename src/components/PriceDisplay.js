import React from "react";
import "./PriceDisplay.css";

const PriceDisplay = ({ price }) => {
  return (
    <div className="price-display">
      <h2>💰Total Price: <span className="price">${price.toFixed(2)}</span></h2>
    </div>
  );
};

export default PriceDisplay;
