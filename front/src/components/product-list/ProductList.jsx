import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './product-card/ProductCard';
import './ProductList.scss';
import { getProduct } from '../../api/Api';
import Navbar from '../navbar/Navbar';

const ProductList = () => {
  const location = useLocation();
  const titleprops = location;
  const [title, setTitle] = useState('');
  const [products, setProducts] = useState();
  useEffect(() => {
    (async () => {
      setProducts(await getProduct());
    })();
    setTitle(titleprops.state.titleList);
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
                  />
                ))
              : 'Products not found'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
