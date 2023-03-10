import React from 'react';
import './MainPageProduct.css';

const MainPageProduct = ({ product }) => {
  //   console.log(product);
  return (
    <div className="product">
      <p className="product-name"> {product.name}</p>
      <img
        className="product-image"
        src={product.image.src}
        alt={product.image.alt}
      />
    </div>
  );
};

export default MainPageProduct;
