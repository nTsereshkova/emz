import React from 'react';
import { useSelector } from 'react-redux';
import { CatalogueProductsList } from './CatalogueProductsList';

const CatalogueConteiner = () => {
  const products = useSelector(state => state.main.productsList);
  //console.log(products);

  return (
    <>
      {products.map(item => (
        <CatalogueProductsList key={item.id} item={item} />
      ))}
    </>
  );
};

export default CatalogueConteiner;
