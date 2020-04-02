import React from 'react';
import {NavLink} from 'react-router-dom';
import "./SlideBar.scss";

const SlideBar = () => {
  return (
    <div className="SlideBar">
      <h2>Menu</h2>
      <NavLink className="link-slide-bar" activeClassName="active" to="/user/order">
        Mes Commander
      </NavLink>
      <NavLink className="link-slide-bar" activeClassName="active" to="/user/info">
        Info Personnel
      </NavLink>
      <NavLink className="link-slide-bar" activeClassName="active" to="/basket">
        Mon Pannier
      </NavLink>
      <NavLink className="link-slide-bar" activeClassName="active" to="/">
        Acceuil
      </NavLink>
      <p>Déconnexion</p>
    </div>
  );
};

export default SlideBar;
