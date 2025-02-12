import React, { useEffect, useState } from "react";
import Product from "../components/Product.jsx";
import axios from "axios";

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("/data/product.json")
      .then((res) => {
        console.log("데이터 로드 성공:", res.data.featuredCollection);
        setProductList(res.data.featuredCollection); // 상태 업데이트 추가
      })
      .catch((error) => console.error("데이터 불러오기 실패:", error));
  }, []);

  return (
    <div className="content">
      <h2 className="content-title">Featured Collection</h2>
      <div className="products-container">
        {productList.map((product) => (
          <div
            key={product.pid}
            className={
              product.layout === "even" ? "products-even" : "products-odd"
            }
          >
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}