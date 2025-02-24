import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import axios from "axios";
import Product from "./Product.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slide({ id }) {
  const swiperRef = useRef(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("/data/product.json")
      .then((res) => {
        setProductList(res.data.featuredCollection);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="border border-red">
      <Swiper
        ref={swiperRef}
        slidesPerView={3.2} // 보이는 슬라이드 수
        slidesPerGroup={1} // 한 번 클릭할 때 한 개씩 이동
        spaceBetween={30} // 슬라이드 간격
        // centeredSlides={true} // 슬라이드 center 정렬
        // centeredSlidesBounds={true} // first, last 슬라이드 끝정렬
        // breakpoints={{
        //   // 반응형
        //   320: {
        //     slidesPerView: 1.2,
        //     slidesPerGroup: 1,
        //     spaceBetween: 15,
        //     centeredSlides: true, // 슬라이드 center 정렬
        //     centeredSlidesBounds: true, // first, last 슬라이드 끝정렬
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     slidesPerGroup: 1,
        //     spaceBetween: 20,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //     slidesPerGroup: 1,
        //     spaceBetween: 30,
        //   },
        // }}
        페이지네이션
        pagination={{
          el: `.custom-pagination-${id}`, // 커스텀 클래스 생성
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        // 네비게이션 버튼
        navigation={{
          nextEl: `.custom-next-${id}`, // 커스텀 클래스 생성
          prevEl: `.custom-prev-${id}`, // 커스텀 클래스 생성
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* 슬라이드 내용 */}
        {productList.map((product, index) => (
          <SwiperSlide key={index}>
            <Product className="w-full h-auto" />
          </SwiperSlide>
        ))}

        {/* { 만약 클래스 네임이 슬라이드가 아니면 ? (
          틀대로 하고
        ) : (
          슬라이드면 슬라이드 이미지를 바꿀게요
        )} */}
      </Swiper>

      {/* 페이지네이션 */}
      <div className="relative flex justify-between w-full p-24 mt-16 pagination-wrapper">
        <div
          className={`flex items-center justify-center gap-8 custom-pagination-${id}`}
        ></div>

        {/* 네비게이션 버튼 */}
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
      </div>
    </div>
  );
}
