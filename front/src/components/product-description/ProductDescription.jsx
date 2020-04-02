import React from 'react';
import './ProductDescription.scss';

const ProductDescription = () => {
  return (
    <div className="product-description">
      <h1>Description produit</h1>
      <div className="product-description-container">
        <div className="product-description-img">
          <img src="https://www.mhdfrance.fr/wp-content/uploads/2019/04/MoetChandon-ImperialBrut-37-NK-T-ERetailKit-ST-OP-IN-PNG.png" alt="Produits"/>
        </div>
        <div className="product-description-description">
          <h2>name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <form className="product-description-form">
            <div>
              <label htmlFor="number">Quantiter :</label>
              <input type="number"/>
            </div>
            <input  className="product-description-submit" type="submit" value="Ajouter au pannier"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;