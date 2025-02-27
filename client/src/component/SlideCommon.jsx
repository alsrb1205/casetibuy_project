import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import axios from "axios";
import HomeProduct from "./home/HomeProduct.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/swiper.css";

export default function SlideCommon({ className, pagination, navigation }) {
  const swiperRef = useRef(null);
  const [slideList, setSlideList] = useState([]);

  useEffect(() => {
    axios
      .get("/data/commonSlides.json")
      .then((res) => {
        console.log("API 응답:", res.data);
        setSlideList(res.data); // ✅ 카테고리별로 데이터를 저장
      })
      .catch((error) => console.log("API 요청 실패:", error));
  }, []);

  return (
    <>
      {slideList.map((slide, i) => (
        <div key={i} className="border content product-container bg-bg">
          <h2 className="pb-16 font-bold text-36">{slide.category}</h2>

          <div className={`swiper-container-${className}-${i}`}>
            <Swiper
              ref={swiperRef}
              slidesPerView={className === 3.2}
              slidesPerGroup={1}
              spaceBetween={30}
              pagination={{
                el: `.custom-pagination-${className}-${i}`,
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
              navigation={{
                nextEl: `.custom-next-${className}-${i}`,
                prevEl: `.custom-prev-${className}-${i}`,
              }}
              modules={[Pagination, Navigation]}
              className={`custom-swiper ${className}`}
            >
              {/* 슬라이드 내용 */}
              {slide.data.map((slide, index) => (
                <SwiperSlide key={index} className="border">
                  <HomeProduct
                    pid={slide.pid}
                    no={slide.no}
                    image={slide.image}
                    title={slide.title}
                    description={slide.description}
                    bgColor={slide.bgColor}
                    labelStyle={slide.labelStyle}
                    btnText={slide.btnText}
                    btnStyle={slide.btnStyle}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              className={`relative flex justify-between w-full p-24 mt-16 pagination-wrapper-${className}`}
            >
              {/* 페이지네이션 */}
              {pagination && (
                <div
                  className={`flex items-center justify-center gap-8 custom-pagination-${className}-${i}`}
                ></div>
              )}

              {/* 네비게이션 버튼 */}
              {navigation && (
                <div className="absolute right-0 flex justify-end gap-24 text-5xl text-white -translate-y-1/2 top-1/2">
                  <button
                    className={`px-24 py-4 bg-black rounded-30 custom-prev-${className}-${i}`}
                  >
                    <HiArrowLongLeft />
                  </button>
                  <button
                    className={`px-24 py-4 bg-black rounded-30 custom-next-${className}-${i}`}
                  >
                    <HiArrowLongRight />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
