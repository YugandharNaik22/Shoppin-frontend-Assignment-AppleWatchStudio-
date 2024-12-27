import React, { useState } from "react";
import "./CollectionSwitcher.css";

const collections = ["Series 10", "Hermès", "SE"];

const CollectionSwitcher = ({ onCollectionChange }) => {
  const [selectedCollection, setSelectedCollection] = useState(collections[0]);

  const handleCollectionChange = (e) => {
    const newSelection = e.target.value;
    setSelectedCollection(newSelection);
    onCollectionChange(newSelection);
  };

  return (
    <div className="collection-switcher">
      <h2>Switch Collection</h2>
      <select
        value={selectedCollection}
        onChange={handleCollectionChange}
        className="collection-dropdown"
      >
        {collections.map((collection) => (
          <option key={collection} value={collection}>
            {collection}
          </option>
        ))}
      </select>
      <p>Selected Collection: {selectedCollection}</p>
    </div>
  );
};

export default CollectionSwitcher;
