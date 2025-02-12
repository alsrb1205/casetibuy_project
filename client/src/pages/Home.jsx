import React from "react";
import ProductList from "../components/ProductList.jsx";
import "../index.css";
export default function Home() {
  return (
    <div className="content product-container">
      <ProductList />
    </div>
  );
}