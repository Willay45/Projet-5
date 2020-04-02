import React from 'react';
import './HomePage.scss';
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const HomePage = () => {

  return (
    <div>
      <Navbar/>
      <div className="home-page">
        <div className="header-home-page">
          <h1>Delivery Drink</h1>
          <h1>Livraison d'apero a domicile</h1>
        </div>
        <div className="menu-home-page">
          <h2>La carte</h2>
          <div className="card-menu-container">
            <div className="n1">
              <NavLink
                className="navLink2"
                to={{
                  pathname: '/product-list',
                  state: {
                    titleList: "Sodas"
                  }
                }}
              >
                <img className="img2"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ0xNNJyb49LOitgtrgVmwrU28juSCPzxrDmTthteejDsBxn1k"
                     alt="soda"/>
              </NavLink>
              <NavLink
                className="navLink1"
                to={{
                  pathname: '/product-list',
                  state: {
                    titleList: "Alcools"
                  }
                }}
              >
                <img className="img1"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQilkLaGtDbdrhKo1Qrsy_D7iGQB7SBvUusLHkqQKKtL0mbI-Vq"
                     alt="alcools"/>
              </NavLink>
            </div>

            <div className="n2">
              <NavLink
                className="navLink2"
                to={{
                  pathname: '/product-list',
                  state: {
                    titleList: "Cocktails"
                  }
                }}
              >
                <img className="img1"
                     src="data:image/jpeg;base64,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"
                     alt="COCKTAIL"/>

              </NavLink>
              <NavLink
                className="navLink1"
                to={{
                  pathname: '/product-list',
                  state: {
                    titleList: 'Hors d\'œuvres'
                  }
                }}
              >
                <img className="img2"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj4W_6T-cHSOrV2Bn9Kwhe_PlJHMEhmNK9XfrV-ZY8qkhU8LK4"
                     alt="gateaux apero"/>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="service-home-page">
          <h2>Nos services</h2>
          <div className="service-container-card">
              <span className="service-card">
                <h3>Livraison</h3>
                <NavLink
                  className="navLink1"
                  to={{
                    pathname: '/product-list',
                    state: {
                      titleList: 'Alcools'
                    }
                  }}
                >
                  <img className="img2"
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnzCbq7ksFTl0ZtzmiYOqXWGatsbEcLQxBh4NlZfElLyNXFWl1"
                       alt="Livraison"/>
                </NavLink>

              </span>
            <span className="service-card">
                <h3>Driver</h3>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg2jqHeV4_KXqMSdZnodhb3Tgfc_vsyYqhWarwzO08gg-WKHNy"
                  alt="driver"/>
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;