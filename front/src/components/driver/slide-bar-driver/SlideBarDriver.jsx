import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SlideBarDriver.scss';

const SlideBarDriver = () => {
  const [showBar, setShowBar] = useState(true);
  return (
    <div className="slide-bar-driver-container">
      <div className="slide-bar-driver">
        <i className="fas fa-bars fa-2x" style={{cursor: 'pointer'}} onClick={() => setShowBar(!showBar)}></i>
        <div className={showBar ? 'open-bar' : 'close-bar'}>
          <NavLink
            className="nav-link-driver"
            activeClassName="active"
            to="/driver/dashboard"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link-driver"
            activeClassName="active"
            to="/driver/dashboard"
          >
            Users
          </NavLink>
          <NavLink
            className="nav-link-driver"
            activeClassName="active"
            to="/driver/dashboard"
          >
            Bookings
          </NavLink>
          <NavLink
            className="nav-link-driver"
            activeClassName="active"
            to="/driver/dashboard"
          >
            Products
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default SlideBarDriver;
