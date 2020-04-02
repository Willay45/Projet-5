import React from 'react';
import SlideBar from "../slide-bar/SlideBar";
import Navbar from "../../navbar/Navbar";
import "./UserIfon.scss";

const UserInfo = () => {
  return (
    <div>
      <Navbar />
      <div className="user-info-container">
        <SlideBar />
        <div className="info-container">
          <h1>Info Personnel</h1>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;