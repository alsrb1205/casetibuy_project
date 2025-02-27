import React from "react";
import HomeProductList from "../component/home/HomeProductList.jsx";
import Slide from "../component/Slide.jsx";
import SlideCommon from "../component/SlideCommon.jsx";

export default function Home() {
  return (
    <div>
      {/* visual slider */}
      <Slide className="visual" pagination={true} navigation={false} />

      {/* collaborator */}
      <Slide className="collaborator" pagination={false} navigation={true} />

      {/* Featured Collection */}
      <div className="content product-container bg-bg">
        <h2 className="pb-16 font-bold text-36">Featured Collection</h2>
        <HomeProductList />
      </div>

      {/* common */}
      <SlideCommon className="common" pagination={true} navigation={true} />
    </div>
  );
}
