import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SlideBarAdmin.scss';

const SlideBarAdmin = () => {
  const [showBar, setShowBar] = useState(true);
  return (
    <div className="slide-bar-admin-container">
      <div className="slide-bar-admin">
        <i className="fas fa-bars fa-2x" style={{cursor: 'pointer'}} onClick={() => setShowBar(!showBar)}></i>
        <div className={showBar ? 'open-bar' : 'close-bar'}>
          <NavLink
            className="nav-link-admin"
            activeClassName="active"
            to="/admin/dashboard"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link-admin"
            activeClassName="active"
            to="/admin/users-list"
          >
            Users
          </NavLink>
          <NavLink
            className="nav-link-admin"
            activeClassName="active"
            to="/admin/dashboard"
          >
            Bookings
          </NavLink>
          <NavLink
            className="nav-link-admin"
            activeClassName="active"
            to="/admin/add-product"
          >
            Products
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default SlideBarAdmin;
