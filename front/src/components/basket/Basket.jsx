import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import ProductBasket from './product-basket/ProductBasket';
import './Basket.scss';
import Navbar from '../navbar/Navbar';
import { getBasket } from '../../api/Api';

const Basket = () => {
  const [basket, setBasket] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(
      window.atob(localStorage.getItem('token').split('.')[1])
    );
    (async () => {
      if (localStorage.getItem('token')) {
        const request = await getBasket(user.id);
        const totals = request
          .map(element => 0 + element.price)
          .reduce((a, c) => a + c);
        setTotalPrice(totals);
        setBasket(request);
      } else {
        history.push('/login-user');
      }
    })();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="basket-page-container">
        <h1>Mon Pannier</h1>
        <div className="basket-content">
          <div className="basket-list">
            {basket
              ? basket.map(product => (
                  <ProductBasket
                    name={product.name}
                    url={product.url}
                    price={product.price}
                    quantity={product.quantity}
                  />
                ))
              : 'Empty basket'}
          </div>
          <div className="basket-recap">
            <h2>Récapitulatif</h2>
            <div>
              <div>
                {basket
                  ? basket.map(product => <p>{product.name}</p>)
                  : 'Empty basket'}
              </div>
              <p>{`Totals: ${totalPrice} €`}</p>
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
