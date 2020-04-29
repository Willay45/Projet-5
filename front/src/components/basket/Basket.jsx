import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductBasket from './product-basket/ProductBasket';
import './Basket.scss';
import Navbar from '../navbar/Navbar';
import { postProductIntoBasket } from '../../api/Api';
import OrderDescription from '../orderdescription/OrderDescription';

const Basket = () => {
  const [basket, setBasket] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();
  const [wantBooking, setWantBooking] = useState(false);
  const [user] = useState(
    JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]))
  );
  useEffect(() => {
    (async () => {
      if (localStorage.getItem('token')) {
        const request = JSON.parse(localStorage.getItem('basket'));
        const totals = request
          .map(element => 0 + element.product_price)
          .reduce((a, c) => a + c);
        setTotalPrice(totals);
        setBasket(request);
      } else {
        history.push('/login-user');
      }
    })();
  }, []);

  const sendBooking = event => {
    event.preventDefault();
    basket.map(async product => {
      const booking = {
        user_id: product.user_id,
        product_id: product.product_id,
        quantity: product.quantity
      };
      try {
        await postProductIntoBasket(booking);
        alert('Commande passer');
      } catch (error) {
        alert('Error');
      }
    });
  };
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
                    name={product.product_name}
                    price={product.product_price}
                    quantity={product.quantity}
                  />
                ))
              : 'Empty basket'}
          </div>
          <div className="popup-booking">
            {wantBooking ? (
              <OrderDescription
                wantBooking={wantBooking}
                setWantBooking={setWantBooking}
                baskets={basket}
              />
            ) : null}
          </div>
          <div className="basket-recap">
            <h2>Récapitulatif</h2>
            <div>
              {basket
                ? basket.map(product => (
                    <p>{`${product.product_name} : ${product.product_price}`}</p>
                  ))
                : null}
              <p>{`Totals: ${totalPrice} €`}</p>
            </div>
            <div className="link-basket">
              <p onClick={() => setWantBooking(!wantBooking)}>Commander</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
