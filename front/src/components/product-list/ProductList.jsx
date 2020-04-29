import React, { useState, useEffect } from 'react';
import ProductCard from './product-card/ProductCard';
import './ProductList.scss';
import { getProduct } from '../../api/Api';
import Navbar from '../navbar/Navbar';
import ProductDescription from '../product-description/ProductDescription';

const ProductList = () => {
  const [title, setTitle] = useState('Alcools');
  const [products, setProducts] = useState();
  const [addBasket, setAddBasket] = useState(false);
  const [idProduct, setIdProduct] = useState();

  useEffect(() => {
    (async () => {
      setProducts(await getProduct());
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="product-list">
        <div className="product-list-nav">
          <div>
            <p
              onClick={() => setTitle('Alcools')}
              style={{ color: title === 'Alcools' ? 'blue' : '#545454' }}
            >
              Alcools
            </p>
            <p
              onClick={() => setTitle('Softs')}
              style={{ color: title === 'Softs' ? 'blue' : '#545454' }}
            >
              Softs
            </p>
            <p
              onClick={() => setTitle("Hors d'œuvres")}
              style={{ color: title === "Hors d'œuvres" ? 'blue' : '#545454' }}
            >
              Hors d'œuvres
            </p>
          </div>
        </div>
        <div className="product-list-container">
          <div className="product-list-tags">
            <span>
              <p>Vodka</p>
            </span>
            <span>
              <p>Vin</p>
            </span>
            <span>
              <p>Champagne</p>
            </span>
            <span>
              <p>Whisky</p>
            </span>
            <span>
              <p>Rhum</p>
            </span>
            <span>
              <p>Ricard</p>
            </span>
          </div>

          <div className="product-card-container">
            {products
              ? products.map(product => (
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    url={product.url}
                    quantity={product.quantity}
                    price={product.price}
                    setAddBasket={setAddBasket}
                    addBasket={addBasket}
                    setIdProduct={setIdProduct}
                  />
                ))
              : 'Products not found'}
          </div>
          <div className="popup">
            {addBasket ? <ProductDescription id={idProduct} setAddBasket={setAddBasket} addBasket={addBasket} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
