import React, { useState } from 'react';
import './Login.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { login } from '../../api/Api';
import Navbar from '../navbar/Navbar';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const loginUser = async event => {
    event.preventDefault();
    const user = {
      email,
      password
    };
    try {
      await login(user);
      history.push('/');
    } catch (error) {
      alert('Erreur');
    }
  };
  return (
    <div>
      <Navbar />
      <div className="login-container-user">
        <div className="container-login-user">
          <h2>Connexion</h2>
          <form className="connect-form" onSubmit={loginUser}>
            <input
              className="input-log"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <input
              className="input-log"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <input className="connect-submit" type="submit" />
            <NavLink
              className="nav-link-login"
              activeClassName="active"
              to="/login-user"
            >
              S'inscrire
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
