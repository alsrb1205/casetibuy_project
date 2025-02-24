import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        // spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".visual-pagination", // 커스텀 클래스 생성
          renderBullet: (index, className) => {
            return `<span class="${className} visual-bullet"></span>`;
          },
        }}
        modules={[Pagination]}
        className="mySwiper -mt-66"
      >
        <SwiperSlide>
          <img
            src="https://cdn-stamplib.casetify.com/cms/image/5b730b163767a29c90e65e519a6de9cd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn-stamplib.casetify.com/cms/image/5b730b163767a29c90e65e519a6de9cd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn-stamplib.casetify.com/cms/image/5b730b163767a29c90e65e519a6de9cd.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
