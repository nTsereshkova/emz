import React from 'react';
import './CatalogueProductsList.css';

const CatalogueProductsList = ({ item }) => {
  return (
    <div className="catalogue-product">
      <p> {item.name}</p>
      <div className="catalogue-product-descr">
        <img src={item.image.src} alt={item.image.alt} />
        <p> {item.description}</p>
      </div>
    </div>
  );
};

export default CatalogueProductsList;
