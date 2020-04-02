import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div>
      <div className="navbar">
        <NavLink className="nav-link" activeClassName="active" to="/">
          <h1 className="title-nav">Delivery Drink</h1>
        </NavLink>
        <div className="navbar-button-container">
          <NavLink className="nav-link" activeClassName="active" to="/login">
            <h2>Connexion</h2>
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/login-driver">
            <h2>Driver</h2>
          </NavLink>
        </div>
        <div className="burger">
          <i className="fas fa-bars fa-2x"  onClick={() => setIsOpen(!isOpen)}></i>
        </div>

      </div>
      <div className={isOpen ? "open" : "close"}>
        <NavLink className="nav-link" activeClassName="active" to="/login-user">
          <h2>S'inscrire</h2>
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/product-list">
          <h2>La Carte</h2>
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/user/info">
          <h2>Mon Profil</h2>
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/basket">
          <h2>Pannier</h2>
        </NavLink>
      </div>
    </div>

  )};

export default Navbar ;