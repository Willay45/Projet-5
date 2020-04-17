import React, { useState, useEffect } from 'react';
import './ProductDescription.scss';
import { useLocation, useHistory } from 'react-router-dom';
import { getProductById, postProductIntoBasket } from '../../api/Api';

const ProductDescription = () => {
  const history = useHistory();
  const location = useLocation();
  const [id] = useState(location.state.idProduct);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState();
  useEffect(() => {
    (async () => {
      setProduct(await getProductById(id));
    })();
  }, [id]);

  const addToBasket = async () => {
    const user = JSON.parse(
      window.atob(localStorage.getItem('token').split('.')[1])
    );
    const data = {
      user_id: user.id,
      product_id: id,
      quantity,
      name: product.name,
      price: product.price,
      url: product.url
    };
    if (localStorage.getItem('token')) {
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
          <form
            className="product-description-form"
            onSubmit={() => addToBasket()}
          >
            <div>
              <label htmlFor="number">Quantiter :</label>
              <input
                type="number"
                value={quantity}
                onChange={event => setQuantity(event.target.value)}
              />
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
