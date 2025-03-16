import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useSlide } from "../../hooks/useSlide.js";
import HomeProduct from "../home/HomeProduct.jsx";
import SlideVisual from "./SlideVisual.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../style/swiper.css";

export default function Slide({
  slidesData,
  pagination,
  navigation,
  className,
  slidesPerView,
  spaceBetween,
  loop,
  autoplay,
}) {
  const swiperRef = useRef(null);
  const { setIconColor } = useTheme(); // Header 아이콘 색상 변경
  const { slideList } = useSlide();

  // 홈(`/home`)으로 돌아올 때 슬라이드 첫 번째 이미지의 `iconColor` 적용
  // if (className === "visual" && filteredSlides.length > 0) {
  //   setIconColor(filteredSlides[0]?.iconColor === "white" ? "white" : "black");
  // }

  return (
    <div className={`swiper-container`}>
      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView} // 보이는 슬라이드 수
        slidesPerGroup={1} // 한 번 클릭할 때 한 개씩 이동
        spaceBetween={spaceBetween} // 슬라이드 간격
        loop={loop}
        autoplay={autoplay ? { delay: 5000 } : false}
        // 페이지네이션 설정
        pagination={pagination}
        // 네비게이션 설정
        navigation={navigation}
        modules={[Pagination, Navigation, Autoplay]}
        onSlideChange={(swiper) => {
          if (slideList.length > 0) {
            const activeSlide = slideList[swiper.realIndex]; // Swiper에서 현재 실제 인덱스 가져오기
            setIconColor(
              activeSlide?.iconColor === "white" ? "white" : "black"
            );
          }
        }}
        className={`custom-swiper ${className}`}
      >
        {/* 슬라이드 내용 */}
        {slidesData.map((slide, index) =>
          className === "visual" ? (
            <SwiperSlide key={index}>
              <Link
                key={slide.pid}
                to={`/detail/${slide.pid}`}
                draggable="false"
              >
                <SlideVisual key={index} slide={slide} />
              </Link>
            </SwiperSlide>
          ) : className === "collaborator" ? (
            <SwiperSlide key={index}>
              <Link
                key={slide.pid}
                to={`/detail/${slide.pid}`}
                draggable="false"
              >
                <div className="px-20 py-10 overflow-hidden border border-grayhborder rounded-20">
                  <img src={slide.image} alt={index} className="w-full" />
                </div>
              </Link>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index}>
              <HomeProduct {...slide} />
            </SwiperSlide>
          )
        )}
      </Swiper>

      {className !== "visual" && className !== "collaborator" && (
        <div
          className={`relative flex justify-between w-full p-24 mt-16 pagination-wrapper`}
        >
          {/* 페이지네이션 */}
          {pagination && (
            <div
              className={`flex items-center justify-center gap-8 custom-pagination`}
            ></div>
          )}

          {/* 네비게이션 버튼 */}
          {navigation && (
            <div className="absolute right-0 flex justify-end gap-24 text-5xl text-white -translate-y-1/2 top-1/2">
              <button className={`px-24 py-4 bg-black rounded-30 custom-prev`}>
                <HiArrowLongLeft />
              </button>
              <button className={`px-24 py-4 bg-black rounded-30 custom-next`}>
                <HiArrowLongRight />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
