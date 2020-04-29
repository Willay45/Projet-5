import React from 'react';

const ProductBasket = ({ name, price, quantity }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
        backgroundColor: '#5454544d'
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNGn74mtRL_UDFGf6jYxaOaKCUQFRlL9O8QvnMRHfZu5KbCFfs"
        alt="product"
      />
      <h2>{name}</h2>
      <p>{`Quantité: ${quantity}`}</p>
      <p>{`Prix / u: ${price} €`}</p>
    </div>
  );
};

export default ProductBasket;
