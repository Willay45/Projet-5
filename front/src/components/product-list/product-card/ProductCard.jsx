import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ name, url, id }) => {
  return (
    <NavLink
      to={{ pathname: '/product-description', state: { idProduct: id } }}
      style={{ margin: '10px' }}
    >
      <p>{name}</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNGn74mtRL_UDFGf6jYxaOaKCUQFRlL9O8QvnMRHfZu5KbCFfs"
        alt="Product"
      />
    </NavLink>
  );
};

export default ProductCard;
