import React from "react";
import './Login.scss';

const Login = () =>{

    return (
        <div className="login-container-user">
            <div className="container-login-user">
                <h2>Connexion</h2>
                <form className="connect-form">
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Mot de passe"/>
                    <input className="connect-submit" type="submit" />
                </form>
            </div>
        </div>
    )
};

export default Login;