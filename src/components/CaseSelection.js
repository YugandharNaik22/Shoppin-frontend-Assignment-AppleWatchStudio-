import React, { useState } from "react";
import "./CaseSelection.css";

const cases = [
  { id: 1, material: "Aluminum", img: "/images/aluminum-case.jpg" },
  { id: 2, material: "Titanium", img: "/images/titanium-case.jpg" },
  { id: 3, material: "Stainless Steel", img: "/images/stainless-steel-case.jpg" },
  { id: 4, material: "Ceramic", img: "/images/ceramic-case.jpg" },
  { id: 5, material: "Gold", img: "/images/gold-case.jpg" },
  { id: 6, material: "Platinum", img: "/images/platinum-case.jpg" },
  { id: 7, material: "Rose Gold", img: "/images/rose-gold-case.jpg" },
  { id: 8, material: "Graphite", img: "/images/graphite-case.jpg" },
];

const CaseSelection = ({ onCaseSelect }) => {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <div className="case-selection">
      <h2>Select Case</h2>
      <div className="cases-grid">
        {cases.map((item) => (
          <div
            key={item.id}
            className={`case-item ${selectedCase === item.id ? "selected" : ""}`}
            onClick={() => {
              setSelectedCase(item.id);
              onCaseSelect(item);
            }}
          >
            <img src={item.img} alt={item.material} />
            <p>{item.material}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSelection;
