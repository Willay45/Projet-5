import React, { useState, useEffect } from 'react';
import './OrderDescription.scss';
import { postProductIntoBasket } from '../../api/Api';

const OrderDescription = ({ wantBooking, setWantBooking, baskets}) => {
  const currentDate = new Date();

  const sendBooking = async () => {
    console.log(baskets);
    await postProductIntoBasket(baskets);
  };
  return (
    <div className="order-description">
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
          <label htmlFor="time">Heure de livraison</label>
          <input min="17h00" max="3h00" type="time" />
        </span>
        <span>
          <input className="submit" type="submit" onClick={() => {
            setWantBooking(!wantBooking);
            sendBooking();
          }} />
        </span>
      </form>
    </div>
  );
};

export default OrderDescription;
