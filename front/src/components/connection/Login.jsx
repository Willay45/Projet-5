import React, { useState } from 'react';
import './Login.scss';
import { login } from '../../api/Api';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async event => {
    event.preventDefault();
    const user = {
      email,
      password
    };
    try {
      await login(user);
    } catch (error) {
      alert('Erreur');
    }
  };
  return (
    <div className="login-container-user">
      <div className="container-login-user">
        <h2>Connexion</h2>
        <form className="connect-form" onSubmit={loginUser}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <input className="connect-submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
