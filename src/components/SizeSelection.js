import React, { useState } from "react";
import "./SizeSelection.css";

const sizes = [
  { id: 1, label: "40mm", priceModifier: 0 },
  { id: 2, label: "42mm", priceModifier: 15 },
  { id: 3, label: "44mm", priceModifier: 45 },
  { id: 4, label: "46mm", priceModifier: 70 },
  { id: 5, label: "48mm", priceModifier: 150 },
];

const SizeSelection = ({ onSizeSelect }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size.id);
    onSizeSelect(size);
  };

  return (
    <div className="size-selection">
      <h2>Select Size</h2>
      <div className="size-toggle">
        {sizes.map((size) => (
          <button
            key={size.id}
            className={`size-btn ${selectedSize === size.id ? "active" : ""}`}
            onClick={() => handleSizeClick(size)}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;
