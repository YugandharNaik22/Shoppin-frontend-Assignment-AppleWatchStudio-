import React from "react";
import { useNavigate } from "react-router-dom";  // Optional if you want to navigate when clicking "Get Started"
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  // Handle button click to navigate to the shop page
  const handleGetStarted = () => {
    navigate("/bandselection"); // Change this route to where you want the user to go
  };

  return (
    <>
    <header className="header">
      <div className="row">
      <div className="col">
      <p className="brand-name">Apple Watch Studio</p>
      <h1 className="tagline">
        Choose a case.<br/>
        Pick a band.<br/>
        Create your own style.<br/>
      </h1>
      <button className="get" onClick={handleGetStarted}>Get Started</button>
      </div>
       <div>
      <img className="watch" src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"  alt="/"/>
      </div>
      </div>
    </header>
    </>
  );
};

export default Header;
