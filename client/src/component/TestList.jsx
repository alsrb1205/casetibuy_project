import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductListItem from './ProductListItem';

export default function TestList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/product/all')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductListItem key={product.pid} product={product} />
      ))}
    </div>
  );
}
