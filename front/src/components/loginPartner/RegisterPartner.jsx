import React from "react";
import './RegisterPartner.scss';

const RegisterPartner = () =>{

    return (
        <div className="register-container-driver">
            <div className="container-register-driver">
                <h2>Devenez partenaire</h2>
                <form className="register-driver-form">
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="name">Nom :</label>
                        <input className="register-driver-input" type="name"/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="name">Prénom :</label>
                        <input className="register-driver-input" type="name"/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="email">E-mail :</label>
                        <input className="register-driver-input" type="email"/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="password">Mot de passe :</label>
                        <input className="register-driver-input" type="password"/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="password">Mot de passe :</label>
                        <input className="register-driver-input" type="password"/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="address">Adresse :</label>
                        <input className="register-driver-input" type="text"/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="number">N° siret :</label>
                        <input className="register-driver-input" type="number"/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="number">RIB :</label>
                        <input className="register-driver-input" type="number"/>
                    </div>
                    <input className="register-driver-submit" type="submit"/>
                </form>
            </div>
        </div>
    )
};


export default RegisterPartner;