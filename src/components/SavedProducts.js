import React, { useState, useEffect } from 'react';
import './SavedProducts.css';
import LoadingSpinner from './LoadingSpinner';  // Assuming you have a LoadingSpinner component

const SavedProducts = () => {
  const [savedProducts, setSavedProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // Load saved products from localStorage on component mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('savedProducts')) || [];
    setSavedProducts(savedItems);
    
    // Simulate loading delay (e.g., for async data fetching)
    const timer = setTimeout(() => {
      setLoading(false);  // Set loading to false once data is loaded
    }, 1000);  // Set a delay to simulate the loading state
    
    return () => clearTimeout(timer);  // Cleanup timeout on unmount
  }, []);

  const handleDelete = (productId) => {
    // Filter out the product to be deleted
    const updatedProducts = savedProducts.filter(product => product.id !== productId);

    // Update state and localStorage with the new array
    setSavedProducts(updatedProducts);
    localStorage.setItem('savedProducts', JSON.stringify(updatedProducts));

    alert(`Product ${productId} deleted`);
  };

  return (
    <div className="saved-products">
      {loading ? (
        <LoadingSpinner /> // Show spinner while loading
      ) : (
        <>
          <h1>Saved Products</h1>
          {savedProducts.length === 0 ? (
            <p className="no-config-message">😢No saved products found.</p>
          ) : (
            savedProducts.map((product) => (
              <div className="saved-product-item" key={product.id}>
                <div className="product-info">
                  <img src={product.img} alt={product.material} />
                  <div className="product-details">
                    <p><strong>Material:</strong> {product.material}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                  </div>
                </div>
                <div className="action-buttons">
                  <button onClick={() => handleDelete(product.id)} className="dlt-btn">Remove🗑️</button>
                </div>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default SavedProducts;
