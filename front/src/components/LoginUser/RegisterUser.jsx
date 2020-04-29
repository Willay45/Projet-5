import React, { useState } from 'react';
import './RegisterUser.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { postUser } from '../../api/Api';
import Navbar from '../navbar/Navbar';

const RegisterUser = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const history = useHistory();

  const createUser = async event => {
    event.preventDefault();
    const user = {
      firstname,
      lastname,
      email,
      password,
      address
    };
    try {
      await postUser(user);
      history.push('/login');
    } catch (error) {
      alert('Error');
    }
  };
  return (
    <div>
      <Navbar />
      <div className="register-container-user">
        <div className="container-register-user">
          <h2>Inscription</h2>
          <form className="register-user-form" onSubmit={createUser}>
            <div className="register-user-container-input">
              <label className="register-user-label" htmlFor="name">
                Nom :
              </label>
              <input
                className="register-user-input"
                type="name"
                value={lastname}
                onChange={event => setLastname(event.target.value)}
              />
            </div>
            <div className="register-user-container-input">
              <label className="register-user-label" htmlFor="name">
                Prénom :
              </label>
              <input
                className="register-user-input"
                type="name"
                value={firstname}
                onChange={event => setFirstname(event.target.value)}
              />
            </div>
            <div className="register-user-container-input">
              <label className="register-user-label" htmlFor="email">
                E-mail :
              </label>
              <input
                className="register-user-input"
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="register-user-container-input">
              <label className="register-user-label" htmlFor="password">
                Mot de passe :
              </label>
              <input className="register-user-input" type="password" />
            </div>
            <div className="register-user-container-input">
              <label className="register-user-label" htmlFor="password">
                Mot de passe :
              </label>
              <input
                className="register-user-input"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <div className="register-user-container-input">
              <label className="register-user-label" htmlFor="address">
                Adresse :
              </label>
              <input
                className="register-user-input"
                type="text"
                value={address}
                onChange={event => setAddress(event.target.value)}
              />
            </div>
            <input className="register-user-submit" type="submit" />
            <NavLink
              className="nav-link-log"
              activeClassName="active"
              to="/login"
            >
              Connection
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
