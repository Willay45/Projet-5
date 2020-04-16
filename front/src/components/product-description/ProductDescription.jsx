import React, { useState, useEffect } from 'react';
import './ProductDescription.scss';
import { useLocation, useHistory } from 'react-router-dom';
import { getProductById, postProductIntoBasket } from '../../api/Api';

const ProductDescription = () => {
  const history = useHistory();
  const location = useLocation();
  const [id] = useState(location.state.idProduct);
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      setProduct(await getProductById(id));
    })();
  }, [id]);

  const addToBasket = async () => {
    const userId = window
      .atob(localStorage.getItem('token').split('.')[1])
      .split(',')[0]
      .split(':')[1];
    const data = {
      user_id: userId,
      product_id: id
    };
    if (userId) {
      try {
        await postProductIntoBasket(data);
        alert('Add to basket');
        history.push('/product-list', 'Alcools');
      } catch (error) {
        alert('Some error occurred while add product into basket.');
      }
    } else {
      history.push('/login-user');
    }
  };
  return (
    <div className="product-description">
      <h1>Description produit</h1>
      <div className="product-description-container">
        <div className="product-description-img">
          <img
            src="https://www.mhdfrance.fr/wp-content/uploads/2019/04/MoetChandon-ImperialBrut-37-NK-T-ERetailKit-ST-OP-IN-PNG.png"
            alt="Produits"
          />
        </div>
        <div className="product-description-description">
          <h2>{product ? product.name : null}</h2>
          <p>{product ? product.description : null}</p>
          <form className="product-description-form" onSubmit={()=> addToBasket()}>
            <div>
              <label htmlFor="number">Quantiter :</label>
              <input type="number" />
            </div>
            <input
              className="product-description-submit"
              type="submit"
              value="Ajouter au pannier"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
