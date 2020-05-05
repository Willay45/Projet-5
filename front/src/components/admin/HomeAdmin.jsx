import React from 'react';
import SlideBarAdmin from './slidebar-admin/SlideBarAdmin';
import Card from './card/Card';
import './HomeAdmin.scss';

const HomeAdmin = () => {
  return (
    <div>
      <SlideBarAdmin />
      <div className="home-page-admin">
        <div>
          <h1>Bienvenue Admin</h1>
        </div>
        <div className="container-card-admin">
          <Card
            className="card-admin-home"
            text="Willy le plus Beaux"
            color="orange"
            heightCard={200}
            widthCard={400}
          />
          <Card
            className="card-admin-home"
            text="Mehdi le plus Fort"
            color="blue"
            heightCard={200}
            widthCard={600}
          />
          <Card
            className="card-admin-home"
            text="Willy le plus Beaux"
            color="red"
            heightCard={200}
            widthCard={700}
          />
          <Card
            className="card-admin-home"
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

export default HomeAdmin;
