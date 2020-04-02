import React from 'react';

const ProductBasket = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", margin: "20px", backgroundColor: "#545454", opacity: "60%"}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNGn74mtRL_UDFGf6jYxaOaKCUQFRlL9O8QvnMRHfZu5KbCFfs" alt="product"/>
      <h2>Vodka</h2>
      <p>Quantiter: 2</p>
      <p>Prix/u: 60€</p>
    </div>
  );
};

export default ProductBasket;