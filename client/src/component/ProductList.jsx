import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product.jsx";

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
    <>
      <div className="grid grid-cols-1 gap-6 p-6 border-2 sm:grid-cols-2 lg:grid-cols-3">
        {productList.map((product, index) => (
          <Product
            key={product.id}
            {...product}
            className={
              index === 0
                ? "sm:col-span-2 lg:col-span-2"
                : index === 1
                ? "sm:col-span-1 lg:col-span-1"
                : index === 2
                ? "sm:col-span-1 lg:col-span-1"
                : index === 3
                ? "sm:col-span-2 lg:col-span-2"
                : ""
            }
          />
        ))}
      </div>
    </>
  );
}