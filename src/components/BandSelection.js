import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./BandSelection.css";
import SaveAndShare from "./SaveAndShare"; // Import SaveAndShare component

const bands = [
  { id: 1, type: "Solo Loop", img: "/images/solo-loop.jpg", priceModifier: 30 },
  { id: 2, type: "Braided Solo Loop", img: "/images/braided-loop.jpg", priceModifier: 50 },
  { id: 3, type: "Leather", img: "/images/leather-band.jpg", priceModifier: 70 },
  { id: 4, type: "Sport Band", img: "/images/sport-band.jpg", priceModifier: 20 },
  { id: 5, type: "Stainless Steel", img: "/images/stainless-steel-band.jpg", priceModifier: 100 },
  { id: 6, type: "Nike Sport Band", img: "/images/nike-sport-band.jpg", priceModifier: 40 },
  { id: 7, type: "Milano Loop", img: "/images/milano-loop.jpg", priceModifier: 60 },
  { id: 8, type: "Link Bracelet", img: "/images/link-bracelet.jpg", priceModifier: 150 },
  { id: 9, type: "Sport Loop", img: "/images/sport-loop.jpg", priceModifier: 35 },
  { id: 10, type: "Woven Nylon", img: "/images/woven-nylon.jpg", priceModifier: 45 },
  { id: 11, type: "Hermès", img: "/images/hermes-band.jpg", priceModifier: 200 },
  { id: 12, type: "Braided Nylon", img: "/images/braided-nylon.jpg", priceModifier: 55 },
  { id: 13, type: "Apple Watch Edition", img: "/images/apple-watch-edition.jpg", priceModifier: 300 },
  { id: 14, type: "Vintage Leather", img: "/images/vintage-leather.jpg", priceModifier: 80 },
];

const BandSelection = ({ onBandSelect }) => {
  const [selectedBand, setSelectedBand] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="band-page">
      {/* Back button placed outside the Band Selection */}
    

      <div className="band-selection">
        <h2>Select Band</h2>
        <div className="band-carousel">
          {bands.map((band) => (
            <div
              key={band.id}
              className={`band-item ${selectedBand === band.id ? "selected" : ""}`}
              onClick={() => {
                setSelectedBand(band.id);
                onBandSelect(band);
              }}
            >
              <img src={band.img} alt={band.type} />
              <p>{band.type}</p>
              <div className="actions">
                <SaveAndShare product={band} /> {/* Add Save and Share buttons for each band */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default BandSelection;
