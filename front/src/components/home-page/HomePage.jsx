import React from 'react';
import './HomePage.scss';
import { NavLink } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-page">
        <div className="header-home-page">
          <div className="container-title-header">
            <h1 className="logo-title">Bring</h1>
            <h1>Livraison d'apero a domicile</h1>
          </div>
        </div>

        <div className="menu-home-page">
          <h2 className="menu-home-page-title">La Carte</h2>

          <div className="card-menu-container">
            <div className="container-menu-link">
              <NavLink
                className="navLink"
                to={{
                  pathname: '/product-list',
                  state: {
                    titleList: 'Sodas'
                  }
                }}
              >
                <h3>Softs</h3>
                <i
                  style={{ color: 'black', marginBottom: '15px' }}
                  className="fas fa-glass-martini-alt fa-4x"
                />
              </NavLink>
            </div>
            <div className="container-menu-link">
              <NavLink
                className="navLink"
                to={{
                  pathname: '/product-list',
                  state: {
                    titleList: 'Alcools'
                  }
                }}
              >
                <h3>Alcools</h3>
                <i
                  style={{ color: 'black', marginBottom: '15px' }}
                  className="fas fa-glass-cheers fa-4x"
                />
              </NavLink>
            </div>

            <div className="container-menu-link">
              <NavLink
                className="navLink"
                to={{
                  pathname: '/product-list',
                  state: {
                    titleList: "Hors d'œuvres"
                  }
                }}
              >
                <h3>Hors d'œuvres</h3>
                <i
                  style={{ color: 'black', marginBottom: '15px' }}
                  className="fas fa-drumstick-bite fa-4x"
                />
              </NavLink>
            </div>
          </div>
        </div>
        <hr />
        <div className="service-home-page">
          <h2>Nos Services</h2>
          <div className="service-container-card">
            <span className="service-card">
              <h3>Livraison</h3>
              <NavLink
                className="navLink"
                to={{
                  pathname: '/product-list',
                  state: {
                    titleList: 'Alcools'
                  }
                }}
              >
                <i style={{color:'black'}} className="fas fa-box-open fa-4x"></i>
              </NavLink>
            </span>
            <span className="service-card">
              <h3>Driver</h3>
              <NavLink className="navLink" to={{ pathname: '/login-driver' }}>
                <i style={{ color: 'black' }} className="fas fa-biking fa-4x" />
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
