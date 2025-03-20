import React from "react";
import HomeProductList from "../component/home/HomeProductList.jsx";
import Slide from "../component/slide/Slide.jsx";
import SlideSection from "../component/slide/SlideSection.jsx";
import { useSlide } from "../hooks/useSlide.js";

export default function Home() {
  const { slideList, hnrSlides } = useSlide();

  const paginationSettings = {
    visual: true,
    common: {
      el: `.custom-pagination`,
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className} custom-bullet"></span>`;
      },
    },
  };

  const navigationSettings = {
    collaborator: true,
    common: {
      nextEl: `.custom-next`,
      prevEl: `.custom-prev`,
    },
  };

  return (
    <div>
      {/* visual slider */}
      <Slide
        slidesData={slideList.visualSlideImage || []}
        className="visual"
        pagination={paginationSettings.visual}
        navigation={false}
        slidesPerView="1"
        spaceBetween="0"
        loop={true}
        autoplay={true}
      />

      {/* collaborator */}
      <Slide
        slidesData={slideList.collaborator || []}
        className="collaborator"
        pagination={false}
        navigation={navigationSettings.collaborator}
        slidesPerView="4.9"
        spaceBetween="30"
        autoplay={false}
        loop={false}
        navStyle="navigation-collabo"
      />

      {/* common 임시 */}
      {/* <div className="content bg-bg">
        <h2 className="pt-32 pb-16 pl-32 font-bold text-36">
          Featured Collection
        </h2>
        <div className="common">
          {Object.entries(hnrSlides).map(([key, value]) => (
            <Slide
              slidesData={value}
              pagination={paginationSettings.common}
              navigation={navigationSettings.common}
              slidesPerView="3.2"
              spaceBetween="30"
              autoplay={false}
              loop={false}
            />
          ))}
        </div>
      </div> */}

      {/* Featured Collection */}
      <div className="content product-container bg-bg">
        <h2 className="pb-16 font-bold text-36">Featured Collection</h2>
        <HomeProductList />
      </div>

      {/* Common Slides */}
      <SlideSection className="common" />
    </div>
  );
}
