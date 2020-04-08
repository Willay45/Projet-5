import React from "react";
import './RegisterUser.scss';

const RegisterUser = () => {


  return (
    <div className="register-container-user">
      <div className="container-register-user">
        <h2>Inscription</h2>
        <form className="register-user-form">
          <div className="register-user-container-input">
            <label className="register-user-label" htmlFor="name">Nom :</label>
            <input className="register-user-input" type="name"/>
          </div>
          <div className="register-user-container-input">
            <label className="register-user-label" htmlFor="name">Prénom :</label>
            <input className="register-user-input" type="name"/>
          </div>
          <div className="register-user-container-input">
            <label className="register-user-label" htmlFor="email">E-mail :</label>
            <input className="register-user-input" type="email"/>
          </div>
          <div className="register-user-container-input">
            <label className="register-user-label" htmlFor="password">Mot de passe :</label>
            <input className="register-user-input" type="password"/>
          </div>
          <div className="register-user-container-input">
            <label className="register-user-label" htmlFor="password">Mot de passe :</label>
            <input className="register-user-input" type="password"/>
          </div>
          <div className="register-user-container-input">
            <label className="register-user-label" htmlFor="address">Adresse :</label>
            <input className="register-user-input" type="text"/>
          </div>
          <input className="register-user-submit" type="submit"/>
        </form>

      </div>
    </div>
  )
};

export default RegisterUser;