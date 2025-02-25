import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import axios from "axios";
import Product from "./Product.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/swiper.css";

export default function Slide({ id, pagination, navigation, className }) {
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
        slidesPerView={className === "visual" ? 1 : 3.2}
        slidesPerGroup={1}
        spaceBetween={className === "visual" ? 0 : 30}
        loop={className === "visual"}
        autoplay={className === "visual" ? { delay: 5000 } : false}
        pagination={
          className === "visual"
            ? true
            : {
                el: `.custom-pagination-${id}`,
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }
        }
        navigation={
          className === "collaborator"
            ? true
            : {
                nextEl: `.custom-next-${id}`,
                prevEl: `.custom-prev-${id}`,
              }
        }
        modules={[Pagination, Navigation, Autoplay]}
        className={`custom-swiper ${className}`}
      >
        {/* 슬라이드 내용 */}
        {productList.length > 0 &&
          productList.map((product, index) => (
            <SwiperSlide key={index}>
              <Product image={product.image} />
            </SwiperSlide>
          ))}
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
