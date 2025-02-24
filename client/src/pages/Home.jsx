import React from "react";
import ProductList from "../component/ProductList.jsx";
import Slide from "../component/Slide.jsx";
import SlideVisual from "../component/SlideVisual.jsx";

export default function Home() {
  return (
    <div className="bg-bg">
      {/* slider */}
      <SlideVisual />
      <Slide className="visaul" />

      {/* collaborator */}

      {/* Featured Collection */}
      <div className="content product-container ">
        <h2 className="pb-16 font-bold text-36">Featured Collection</h2>
        <ProductList />
      </div>

      {/* 테크 액세서리 컬렉션 */}
      <div className="content product-container">
        <h2 className="pb-16 font-bold text-36">The Essentials</h2>
        <Slide id="slide1" className="common" />
      </div>
      {/* <div className="content product-container">
        <h2 className="text-[36px] font-bold py-8">The Essentials</h2>
        <Slide id="slide2" />
      </div>
      <div className="content product-container">
        <h2 className="text-[36px] font-bold py-8">The Essentials</h2>
        <Slide id="slide3" />
      </div>
      <div className="content product-container">
        <h2 className="text-[36px] font-bold py-8">The Essentials</h2>
        <Slide id="slide4" />
      </div> */}
    </div>
  );
}
