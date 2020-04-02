import React from 'react';
import { NavLink } from "react-router-dom";

const ProductCard = () => {
  return (
    <NavLink to="/product-description"
      style={{margin: "10px"}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNGn74mtRL_UDFGf6jYxaOaKCUQFRlL9O8QvnMRHfZu5KbCFfs" alt="Product"/>
    </NavLink>
  );
};

export default ProductCard;