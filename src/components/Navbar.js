import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import both Link and useNavigate
import "./Navbar.css"; // Assuming you have this file for styling

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [savedCount, setSavedCount] = useState(0);

  // Function to update the saved count
  const updateSavedCount = () => {
    const savedProducts = JSON.parse(localStorage.getItem("savedProducts")) || [];
    setSavedCount(savedProducts.length);
  };

  useEffect(() => {
    // Update the saved count on component mount
    updateSavedCount();

    // Set up an event listener for changes in localStorage
    const storageListener = () => {
      updateSavedCount();
    };

    // Add event listener for localStorage changes
    window.addEventListener("storage", storageListener);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("storage", storageListener);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="/images/logo.png"
          alt="Apple Logo"
          className="logo-image"
          onClick={() => navigate("/")} // Clicking the logo will navigate to Home
        />
        <span className="logo-text" onClick={() => navigate("/")}>
          WATCH
        </span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/saved-products">Saved Products </Link>
        </li>
        <li>
          <Link to="/bandselection">Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
