import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import axios from "axios";
import Product from "./home/HomeProduct.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/swiper.css";

export default function Slide({
  id,
  pagination,
  navigation,
  className,
  images = [],
}) {
  const swiperRef = useRef(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("/data/product.json")
      .then((res) => {
        console.log("res.data-->", res.data.featuredCollection);
        setProductList(res.data.featuredCollection);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={`swiper-container-${id} border`}>
      <Swiper
        ref={swiperRef}
        slidesPerView={className === "visual" ? 1 : 3.2} // 보이는 슬라이드 수
        slidesPerGroup={1} // 한 번 클릭할 때 한 개씩 이동
        spaceBetween={className === "visual" ? 0 : 30} // 슬라이드 간격
        loop={className === "visual" ? true : false}
        autoplay={className === "visual" ? { delay: 5000 } : false}
        // 페이지네이션
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
        // 네비게이션 버튼
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
        {productList &&
          productList.map((product, index) => (
            <SwiperSlide key={index}>
              <Product image={product.image} />
            </SwiperSlide>
          ))}
        {/* {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`slide-${index}`} className="slide-img" />
          </SwiperSlide>
        ))} */}
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
