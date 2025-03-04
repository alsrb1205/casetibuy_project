import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import axios from "axios";
import HomeProduct from "./home/HomeProduct.jsx";
import SlideVisual from "./SlideVisual.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/swiper.css";

export default function Slide({ id, pagination, navigation, className }) {
  const swiperRef = useRef(null);
  const [slideList, setSlideList] = useState([]);

  useEffect(() => {
    axios
      .get("/data/slides.json")
      .then((res) => {
        const {
          visualSlideImage,
          featuredCollection,
          collaborator,
          commonSlides,
        } = res.data;

        if (className === "visual") {
          setSlideList(visualSlideImage);
        } else if (className === "collaborator") {
          setSlideList(collaborator);
        } else if (className === "common") {
          const combinedSlides = commonSlides.map((category) => category.data);
          setSlideList(combinedSlides);
        } else {
          setSlideList(featuredCollection);
        }
      })
      .catch((error) => console.log(error));
  }, [className]);

  return (
    <div className={`swiper-container-${id}`}>
      <Swiper
        ref={swiperRef}
        slidesPerView={
          className === "visual" ? 1 : className === "collaborator" ? 4.9 : 3.2
        } // 보이는 슬라이드 수
        slidesPerGroup={1} // 한 번 클릭할 때 한 개씩 이동
        spaceBetween={className === "visual" ? 0 : 30} // 슬라이드 간격
        loop={className === "visual" ? true : false}
        autoplay={className === "visual" ? { delay: 5000 } : false}
        // 페이지네이션 설정
        pagination={
          className === "visual"
            ? true
            : {
                el: `.custom-pagination-${id}`, // 커스텀 클래스 생성
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }
        }
        // 네비게이션 설정
        navigation={
          className === "collaborator"
            ? true
            : {
                nextEl: `.custom-next-${id}`, // 커스텀 클래스 생성
                prevEl: `.custom-prev-${id}`, // 커스텀 클래스 생성
              }
        }
        modules={[Pagination, Navigation, Autoplay]}
        className={`custom-swiper ${className}`}
      >
        {/* 슬라이드 내용 */}
        {slideList.map((slide, index) =>
          className === "visual" ? (
            <SwiperSlide key={index} className="relative">
              <SlideVisual key={index} slide={slide} />
            </SwiperSlide>
          ) : className === "collaborator" ? (
            <SwiperSlide key={index}>
              <div className="px-20 py-10 overflow-hidden border border-grayhborder rounded-20">
                <img src={slide.image} alt={index} className="w-full" />
              </div>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index}>
              <HomeProduct slide={slide} />
            </SwiperSlide>
          )
        )}
      </Swiper>

      {className !== "visual" && className !== "collaborator" && (
        <div
          className={`relative flex justify-between w-full p-24 mt-16 pagination-wrapper-${id}`}
        >
          {/* 페이지네이션 */}
          {pagination && (
            <div
              className={`flex items-center justify-center gap-8 custom-pagination-${id}`}
            ></div>
          )}

          {/* 네비게이션 버튼 */}
          {navigation && (
            <div className="absolute right-0 flex justify-end gap-24 text-5xl text-white -translate-y-1/2 top-1/2">
              <button
                className={`px-24 py-4 bg-black rounded-30 custom-prev-${id}`}
              >
                <HiArrowLongLeft />
              </button>
              <button
                className={`px-24 py-4 bg-black rounded-30 custom-next-${id}`}
              >
                <HiArrowLongRight />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
