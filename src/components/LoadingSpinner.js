import React from "react";
import "./LoadingSpinner.css"; // You can add custom CSS to style the spinner

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
