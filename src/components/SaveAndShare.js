import React from "react";
import "./SaveAndShare.css"
const SaveAndShare = ({ product }) => {
  // Function to save the product
  const handleSave = () => {
    const savedProducts = JSON.parse(localStorage.getItem("savedProducts")) || [];
    savedProducts.push(product);
    localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
    alert("Product saved to your collection!");
  };

  // Function to share the product via WhatsApp
  const handleShare = () => {
    const productLink = `${window.location.origin}/product/${product.id}`; // Example link
    const whatsappUrl = `https://wa.me/?text=Check%20out%20this%20product:%20${encodeURIComponent(productLink)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="save-share-buttons">
      <button onClick={handleSave} className="save-btn">Save</button>
      <button onClick={handleShare} className="share-btn">Share</button>
    </div>
  );
};

export default SaveAndShare;
