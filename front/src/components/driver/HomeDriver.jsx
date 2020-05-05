import React from 'react';
import SlideBarDriver from './slide-bar-driver/SlideBarDriver';
import Card from '../admin/card/Card';
import './HomeDriver.scss';

const HomeDriver = () => {
  return (
    <div>
      <SlideBarDriver />
      <div className="home-page-driver">
        <div>
          <h1>Bienvenue Driver</h1>
        </div>
        <div className="container-card-driver">
          <Card
            className="card-driver-home"
            text="Willy le plus Beaux"
            color="orange"
            heightCard={200}
            widthCard={400}
          />
          <Card
            className="card-driver-home"
            text="Mehdi le plus Fort"
            color="blue"
            heightCard={200}
            widthCard={600}
          />
          <Card
            className="card-driver-home"
            text="Willy le plus Beaux"
            color="red"
            heightCard={200}
            widthCard={700}
          />
          <Card
            className="card-driver-home"
            text="Mehdi le plus Beaux"
            color="purple"
            heightCard={200}
            widthCard={300}
          />
        </div>
      </div>

    </div>
  );
};

export default HomeDriver;
