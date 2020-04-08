import React from 'react';
import './OrderDescription.scss';

const OrderDescription = () =>{

    return(
        <div className='order-description'>
            <div className='title-description'>
                <h1>Récapitulatif de votre commande</h1>
            </div>
            <div className='info-description'>
                <h2>Ruinart x6</h2>
                <h2>Livrée vers 19h30</h2>
                <h2>Adress: Orléans</h2>
                <h2>Total: 1200€</h2>
            </div>
            <div>
                <button onClick="myFunction">Valider</button>
            </div>
        </div>
    )
};

export default OrderDescription;