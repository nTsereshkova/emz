import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MainPageProduct } from './MainPageProduct';
import { BsArrowUpRight } from 'react-icons/bs';
import './MainPageProductsList.css';

const MainPageProductsList = () => {
  const navigate = useNavigate();
  const productsList = useSelector(state => state.main.productsList);

  return (
    <div className="productsList">
      {productsList.map(item => (
        <MainPageProduct product={item} key={item.id} />
      ))}
      <div
        className="product"
        id="product-pointer"
        onClick={() => navigate('catalogue')}
      >
        Вся продукция
        <BsArrowUpRight className="product-arrow" />
      </div>
    </div>
  );
};
export default MainPageProductsList;
