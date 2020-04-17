import React, { useState, useEffect } from 'react';
import './OrderDescription.scss';
import { getBasket } from '../../api/Api';

const OrderDescription = () => {
  const [basket, setBasket] = useState();
  const currentDate = new Date();
  useEffect(() => {
    const user = JSON.parse(
      window.atob(localStorage.getItem('token').split('.')[1])
    );
    (async () => {
      setBasket(await getBasket(user.id));
    })();
  }, []);
  return (
    <div className="order-description">
      <div className="title-description">
        <h1>Récapitulatif de votre commande</h1>
      </div>
      <div className="info-description">
        {basket
          ? basket.map(product => (
              <div>{`${product.name} x${product.quantity}: ${product.price} €/u`}</div>
            ))
          : null}
      </div>
      <div>
        <form>
          <span>
            <label htmlFor="address">Addresse</label>
            <input type="text" />
          </span>
          <span>
            <label htmlFor="date">Date de livraison</label>
            <input min={currentDate} type="date" />
          </span>
          <span>
            <label htmlFor="time">heure de livraison</label>
            <input min="17h00" max="3h00" type="time" />
          </span>
          <span>
            <input type="submit" />
          </span>
        </form>
      </div>
    </div>
  );
};

export default OrderDescription;
