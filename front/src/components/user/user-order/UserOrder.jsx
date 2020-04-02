import React from 'react';
import SlideBar from '../slide-bar/SlideBar';
import Navbar from '../../navbar/Navbar';
import './UserOrder.scss';

const UserOrder = () => {
  return (
    <div>
      <Navbar />
      <div className="user-order-container">
        <SlideBar />
        <div className="order-container">
          <h1>Mes Commandes</h1>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;