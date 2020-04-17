import React from 'react';

const ProductBasket = ({ name, quantity, price, url }) => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", margin: "20px", backgroundColor: "#545454", opacity: "60%"}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNGn74mtRL_UDFGf6jYxaOaKCUQFRlL9O8QvnMRHfZu5KbCFfs" alt="product"/>
      <h2>{name}</h2>
      <p>{`Quantiter: ${quantity}`}</p>
      <p>{`Prix / u: ${price} €`}</p>
    </div>
  );
};

export default ProductBasket;
