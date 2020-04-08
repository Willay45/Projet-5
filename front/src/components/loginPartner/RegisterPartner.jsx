import React, {useState} from "react";
import './RegisterDriver.scss';

const RegisterDriver = () =>{
    const[firstname, setFirstname] = useState();
    const[lastname,setLastname] = useState();
    const[address, setAddress] = useState();
    const[password, setPassword] = useState();
    const[numberSiret, setNumberSire] = useState();
    const[rib, setRib] = useState;

const createDriver = async event => {
    event.preventDefault();
    const driver = {
        firstname,
        lastname,
        email,
        address,
        password,
        numberSiret,
        rib
    };
    try {
        await postPartner(user);
    }   catch (error) {
        alert('error')
    }
};

    return (
        <div className="register-container-driver">
            <div className="container-register-driver">
                <h2>Devenez partenaire</h2>
                <form className="register-driver-form">
                    <div className="register-driver-container-input" onSubmit={createDriver}>
                        <label className="register-driver-label" htmlFor="name">Nom :</label>
                        <input className="register-driver-input" type="name" value={lastname} onChange={event => setLastname(event.target.value)}/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="name">Prénom :</label>
                        <input className="register-driver-input" type="name" value={firstname} onChange={event => setFirstname(event.target.value)}/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="email">E-mail :</label>
                        <input className="register-driver-input" type="email" value={address} onChange={event => setAddress(event.target.value)}/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="password">Mot de passe :</label>
                        <input className="register-driver-input" type="password"/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="password">Mot de passe :</label>
                        <input className="register-driver-input" type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="address">Adresse :</label>
                        <input className="register-driver-input" type="text" value={address} onChange={event => setAddress(event.target.value)} />
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="number">N° siret :</label>
                        <input className="register-driver-input" type="number" value={numberSiret} onChange={event => setNumberSire(event.target.value)}/>
                    </div>
                    <div className="register-driver-container-input">
                        <label className="register-driver-label" htmlFor="number">RIB :</label>
                        <input className="register-driver-input" type="number" value={rib} onChange={event => setRib(event.target.value)}/>
                    </div>
                    <input className="register-driver-submit" type="submit"/>
                </form>
            </div>
        </div>
    )
};


export default RegisterDriver;