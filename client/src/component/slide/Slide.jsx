import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
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
  const location = useLocation();

  // 홈(`/home`)으로 돌아올 때 슬라이드 첫 번째 이미지의 `iconColor` 적용
  useEffect(() => {
    if (
      location.pathname === "/home" &&
      className === "visual" &&
      slidesData.length > 0
    ) {
      setIconColor(slidesData[0]?.iconColor === "white" ? "white" : "black");
    }
  }, [location.pathname, slidesData, className, setIconColor]);

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
          const activeSlide = slidesData?.[swiper.realIndex]; // 현재 활성화된 슬라이드 가져오기
          // console.log("Active Slide:", activeSlide); // 디버깅 로그 추가
          if (activeSlide) {
            setIconColor(activeSlide.iconColor === "white" ? "white" : "black");
          }
        }}
        className={`custom-swiper ${className}`}
      >
        {/* 슬라이드 내용 */}
        {slidesData.map((slide, index) => {
          return className === "visual" ? (
            <SwiperSlide key={index} className="bg-black">
              <Link
                key={slide.pid}
                to={`/detail/${slide.pid}`}
                state={{ activeCase: slide.caseType, activeColor: slide.color }} // caseType과 color 함께 전달
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
                state={{ activeCase: slide.caseType, activeColor: slide.color }} // caseType과 color 함께 전달
                draggable="false"
              >
                <div className="px-20 py-10 overflow-hidden border border-grayhborder rounded-20">
                  <img src={slide.image} alt={index} className="w-full" />
                </div>
              </Link>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index} className="relative">
              <HomeProduct {...slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {className !== "visual" && className !== "collaborator" && (
        <div
          className={`relative flex justify-between w-full p-24 mt-16 pagination-wrapper-${className}`}
        >
          {/* 페이지네이션 */}
          {pagination && (
            <div
              className={`flex items-center justify-center gap-8 custom-pagination-${className}`}
            ></div>
          )}

          {/* 네비게이션 버튼 */}
          {navigation && (
            <div className={`navigation-common`}>
              <button
                className={`px-24 py-4 bg-black rounded-30 custom-prev-${className}`}
              >
                <HiArrowLongLeft />
              </button>
              <button
                className={`px-24 py-4 bg-black rounded-30 custom-next-${className}`}
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
