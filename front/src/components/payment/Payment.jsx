import React from "react";
import "./Payment.scss";

const Payment = () =>{

    return (
        <div className="payment-order">
            <h1>Paiement</h1>
            <div className="payment-container">

                <h2>Montant de la transaction : 1200€</h2>

                <form className="form-container">

                    <label className="#" htmlFor="date">Date</label>
                    <input type="number"/>

                    <label htmlFor="texte">Numero de carte de crédit ou de débit</label>
                    <input type="text"/>

                    <label htmlFor="number">Date d'expiration</label>
                    <input className="expiration" type="text" placeholder="jour/mois"/>

                    <label htmlFor="text">Cryptogramme</label>
                    <input className="text"/>

                    <label htmlFor="text">Code postale</label>
                    <input type="text"/>

                </form>
            </div>
        </div>
    )
};

export default Payment;