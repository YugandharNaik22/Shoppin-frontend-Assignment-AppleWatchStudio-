import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CaseSelection from "./components/CaseSelection";
import SizeSelection from "./components/SizeSelection";
import BandSelection from "./components/BandSelection";
import CollectionSwitcher from "./components/CollectionSwitcher";
import PriceDisplay from "./components/PriceDisplay";
import { calculatePrice } from "./utils/priceCalculator";
import Navbar from "./components/Navbar";
import SavedProducts from "./components/SavedProducts"; // Import SavedProducts Page
import LoadingSpinner from "./components/LoadingSpinner"; // Import the spinner component

// Sample data for each collection
const collectionsData = {
  "Series 10": {
    cases: [
      { id: 1, material: "Aluminum", img: "/images/aluminum-case.jpg", priceModifier: 50 },
      { id: 2, material: "Titanium", img: "/images/titanium-case.jpg", priceModifier: 100 },
    ],
    sizes: ["Small", "Medium", "Large"],
    bands: [
      { id: 1, type: "Solo Loop", img: "/images/solo-loop.jpg", priceModifier: 30 },
      { id: 2, type: "Braided Solo Loop", img: "/images/braided-loop.jpg", priceModifier: 50 },
    ],
  },
  Hermès: {
    cases: [
      { id: 3, material: "Gold", img: "/images/gold-case.jpg", priceModifier: 200 },
      { id: 4, material: "Platinum", img: "/images/platinum-case.jpg", priceModifier: 300 },
    ],
    sizes: ["Medium", "Large"],
    bands: [
      { id: 3, type: "Hermès Leather", img: "/images/hermes-leather.jpg", priceModifier: 200 },
      { id: 4, type: "Hermès Rubber", img: "/images/hermes-rubber.jpg", priceModifier: 150 },
    ],
  },
  SE: {
    cases: [
      { id: 5, material: "Plastic", img: "/images/plastic-case.jpg", priceModifier: 20 },
      { id: 6, material: "Aluminum", img: "/images/aluminum-case.jpg", priceModifier: 50 },
    ],
    sizes: ["Small", "Medium"],
    bands: [
      { id: 5, type: "Sport Band", img: "/images/sport-band.jpg", priceModifier: 20 },
      { id: 6, type: "Nike Sport Band", img: "/images/nike-sport-band.jpg", priceModifier: 40 },
    ],
  },
};

const App = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);
  const [collection, setCollection] = useState("Series 10");
  const [loading, setLoading] = useState(false); // Add loading state

  // Retrieve data based on selected collection
  const currentCollectionData = collectionsData[collection];
  const { cases, sizes, bands } = currentCollectionData || {};

  // Default base price for a watch
  const basePrice = 400;

  // Calculate the total price using selected options
  const totalPrice = calculatePrice(basePrice, selectedSize, selectedBand);

  // Save configuration to localStorage
  const saveConfiguration = () => {
    const config = {
      selectedCase,
      selectedSize,
      selectedBand,
      collection,
    };
    localStorage.setItem("watchConfig", JSON.stringify(config));
    alert("Configuration saved!");
  };

  // Generate a shareable URL with the configuration
  const generateShareableLink = () => {
    const config = {
      selectedCase,
      selectedSize,
      selectedBand,
      collection,
    };
    const encodedConfig = btoa(JSON.stringify(config)); // Base64 encode the configuration
    const shareableLink = `${window.location.origin}/shared-config/${encodedConfig}`;
    alert(`Share this link: ${shareableLink}`);
  };

  useEffect(() => {
    // Simulate a loading state when the route changes
    const timeout = setTimeout(() => setLoading(false), 1000); // Set timeout for demo purposes

    setLoading(true);

    return () => {
      clearTimeout(timeout);
    };
  }, [collection]); // Track changes to the collection, or you can track other dependencies if needed.

  return (
    <Router>
      <div className="App">
        {loading && <LoadingSpinner />} {/* Show spinner when loading */}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <CollectionSwitcher onCollectionChange={setCollection} />
                <CaseSelection cases={cases} onCaseSelect={setSelectedCase} />
                <SizeSelection sizes={sizes} onSizeSelect={setSelectedSize} />
                <BandSelection bands={bands} onBandSelect={setSelectedBand} />
                <PriceDisplay price={totalPrice} />
              </>
            }
          />
          <Route path="/"/>
          <Route path="/saved-products" element={<SavedProducts />} />
          <Route path="/shared-config/:encodedConfig" element={<SavedProducts />} />
          <Route path="/bandselection" element={<BandSelection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
