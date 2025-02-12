import React from "react";

export default function Product({ product }) {
  if (!product) return null; // 데이터 없을 때 렌더링 방지

  return (
    <div className={`featured-collection ${product.bgColor}`}>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-item">
        <span className="pid">{product.pid}</span>
        <div className="product-info">
          <p className="ptitle">{product.title}</p>
          <button className="pbutton">{product.buttonText}</button>
        </div>
      </div>
    </div>
  );
}