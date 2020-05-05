import React from 'react';
import './ProductCard.css';

const ProductCard = ({
  name,
  url,
  id,
  quantity,
  price,
  addBasket,
  setAddBasket,
  setIdProduct
}) => {
  return (
    <div
      onClick={() => {
        setAddBasket(!addBasket);
        setIdProduct(id);
      }}
      className={quantity <= 0 ? 'not-active' : 'active'}
      style={{ margin: '10px' }}
    >
      <p>{name}</p>
      <p>{`${price}€`}</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNGn74mtRL_UDFGf6jYxaOaKCUQFRlL9O8QvnMRHfZu5KbCFfs"
        alt="Product"
      />
    </div>
  );
};

export default ProductCard;
