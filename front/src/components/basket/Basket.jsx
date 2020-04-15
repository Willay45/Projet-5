import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ProductBasket from './product-basket/ProductBasket';
import './Basket.scss';
import Navbar from '../navbar/Navbar';

const Basket = () => {
  const [userID, setUserId] = useState(localStorage.getItem('token'));
  console.log(atob(userID.split('.')[1]));

  return (
    <div>
      <Navbar />
      <div className="basket-page-container">
        <h1>Mon Pannier</h1>
        <div className="basket-content">
          <div className="basket-list">
            <ProductBasket />
            <ProductBasket />
            <ProductBasket />
            <ProductBasket />
            <ProductBasket />
            <ProductBasket />
          </div>
          <div className="basket-recap">
            <h2>Récapitulatif</h2>
            <div>
              <p>Vodka x 6</p>
              <p>Prix Total: 200€</p>
            </div>
            <NavLink className="link-basket" activeClassName="active" to="/">
              <p>Commander</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
