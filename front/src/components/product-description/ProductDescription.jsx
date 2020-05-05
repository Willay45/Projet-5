import React, { useState, useEffect } from 'react';
import './ProductDescription.scss';
import { useHistory } from 'react-router-dom';
import { getProductById } from '../../api/Api';

const ProductDescription = ({ id, setAddBasket, addBasket }) => {
  const history = useHistory();
  const [products, setProduct] = useState();
  const [quantity, setQuantity] = useState();
  useEffect(() => {
    (async () => {
      setProduct(await getProductById(id));
    })();
  }, [id]);

  const addToBasket = () => {
    const user = localStorage.getItem('token')
      ? JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]))
      : false;
    const basket = localStorage.getItem('basket')
      ? JSON.parse(localStorage.getItem('basket'))
      : [];
    const product = {
      user_id: user.id,
      product_id: id,
      product_name: products.name,
      product_price: products.price,
      quantity
    };

    if (localStorage.getItem('token')) {
      basket.push(product);
      localStorage.setItem('basket', JSON.stringify(basket));
      alert('Add to basket');
      setAddBasket(!addBasket);
    } else {
      history.push('/login');
    }
  };
  return (
    <div className="product-description">
      <h2>{products ? products.name : null}</h2>
      <p>{products ? products.description : null}</p>
      <p>{`Prix : ${products ? products.price : null} €`}</p>
      <form onSubmit={() => addToBasket()}>
        <div>
          <label htmlFor="number">Quantiter :</label>
          <input
            className="quantity"
            type="number"
            value={quantity}
            onChange={event => setQuantity(event.target.value)}
          />
        </div>
        <div className="product-description-submit-container">
          <input
            className="product-description-submit"
            type="submit"
            value="Ajouter au panier"
          />
        </div>
      </form>
    </div>
  );
};

export default ProductDescription;
