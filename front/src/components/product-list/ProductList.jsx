import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from "./product-card/ProductCard";
import './ProductList.scss';

const ProductList = () => {
  const location = useLocation();
  const  titleprops = location;
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle(titleprops.state.titleList);
    }, []);

  return (
    <div className="product-list">
      <div className="product-list-nav">
        <h2>{title}</h2>
        <div>
          <p onClick={() => setTitle('Alcools')} style={{color: title === 'Alcools' ? 'blue' : 'white'}}>Alcools</p>
          <p onClick={() => setTitle('Cocktails')} style={{color: title === 'Cocktails' ? 'blue' : 'white'}}>Cocktails</p>
          <p onClick={() => setTitle('Sodas')} style={{color: title === 'Sodas' ? 'blue' : 'white'}}>Sodas</p>
          <p onClick={() => setTitle('Hors d\'œuvres')} style={{color: title === 'Hors d\'œuvres' ? 'blue' : 'white'}}>Hors d'œuvres</p>
        </div>
      </div>
      <div className="product-list-container">
        <div className="product-list-tags">
          <span>
            <input type="checkbox"/>
            <p>Vodka</p>
          </span>
          <span>
            <input type="checkbox"/>
            <p>Vin</p>
          </span>
          <span>
            <input type="checkbox"/>
            <p>Champagne</p>
          </span>
          <span>
            <input type="checkbox"/>
            <p>Whisky</p>
          </span>
          <span>
            <input type="checkbox"/>
            <p>Rhum</p>
          </span>
          <span>
            <input type="checkbox"/>
            <p>Ricard</p>
          </span>
        </div>
        <div className="product-card-container">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
  );
};

export default ProductList;