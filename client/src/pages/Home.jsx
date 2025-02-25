import React from "react";
import HomeProductList from "../component/home/HomeProductList.jsx";
import Slide from "../component/Slide.jsx";

export default function Home() {
  const images = [
    "https://cdn-stamplib.casetify.com/cms/image/5b730b163767a29c90e65e519a6de9cd.jpg",
    "https://cdn-stamplib.casetify.com/cms/image/5b730b163767a29c90e65e519a6de9cd.jpg",
    "https://cdn-stamplib.casetify.com/cms/image/5b730b163767a29c90e65e519a6de9cd.jpg",
    "https://cdn-stamplib.casetify.com/cms/image/5b730b163767a29c90e65e519a6de9cd.jpg",
  ];

  return (
    <div className="bg-bg">
      {/* visual slider */}
      {/* <SlideVisual /> */}
      <Slide
        id="visual"
        className="visual"
        images={images}
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
        <HomeProductList />
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
