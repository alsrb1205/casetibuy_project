import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import HomeProduct from "../home/HomeProduct.jsx";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../style/swiper.css";

export default function CommonSlide({
  className,
  pagination,
  navigation,
  slidesData,
  title,
}) {
  const swiperRef = useRef(null);

  return (
    <div className="content product-container bg-bg">
      <h2 className="pb-16 font-bold text-36">{title}</h2>

      <div className={`swiper-container-${className}`}>
        <Swiper
          ref={swiperRef}
          slidesPerView={3.2}
          slidesPerGroup={3}
          spaceBetween={30}
          pagination={{
            el: `.custom-pagination-${className}`,
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          navigation={{
            nextEl: `.custom-next-${className}`,
            prevEl: `.custom-prev-${className}`,
          }}
          modules={[Pagination, Navigation]}
          className={`custom-swiper ${className}`}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link key={slide.pid} to={`/detail/${slide.pid}`}
              state={{ activeCase: slide.activeCase, activeColor: slide.activeColor }}
              onClick={() => window.scrollTo(0, 0)}

              >
                <HomeProduct {...slide} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 페이지네이션 & 네비게이션 */}
        <div className="relative flex justify-between w-full p-24 mt-16">
          {pagination && (
            <div
              className={`flex items-center justify-center gap-8 custom-pagination-${className}`}
            ></div>
          )}
          {navigation && (
            <div className="absolute right-0 flex justify-end gap-24 text-5xl text-white -translate-y-1/2 top-1/2">
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
      </div>
    </div>
  );
}
