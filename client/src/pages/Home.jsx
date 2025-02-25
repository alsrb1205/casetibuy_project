import React from "react";
import ProductList from "../component/ProductList.jsx";
import Slide from "../component/Slide.jsx";

export default function Home() {
  return (
    <div className="bg-bg">
      {/* visual slider */}
      <Slide
        id="visual"
        className="visual"
        pagination={true}
        navigation={false}
      />

      {/* collaborator */}
      <Slide
        id="collaborator"
        className="collaborator"
        pagination={false}
        navigation={true}
      />

      {/* Featured Collection */}
      <div className="content product-container ">
        <h2 className="pb-16 font-bold text-36">Featured Collection</h2>
        <ProductList />
      </div>

      {/* 테크 액세서리 컬렉션 */}
      <div className="content product-container">
        <h2 className="pb-16 font-bold text-36">The Essentials</h2>
        <Slide
          id="common"
          className="common"
          pagination={true}
          navigation={true}
        />
      </div>
    </div>
  );
}
