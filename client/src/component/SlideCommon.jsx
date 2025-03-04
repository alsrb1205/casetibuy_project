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
import { useDetail } from "../hooks/useDetail";

export default function SlideCommon({ className, pagination, navigation }) {
  const swiperRef = useRef(null);
  const [slideList, setSlideList] = useState([]);
  const { getProductList } = useDetail();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductList(); // 🔥 데이터 가져오기
        console.log("불러온 제품 목록:", data);
      } catch (error) {
        console.error("제품 데이터 로딩 실패:", error);
      }
    };

    fetchData(); // 함수 실행
  }, []);
  // useEffect(() => {
  //   axios
  //     .get("/data/commonSlides.json")
  //     .then((res) => {
  //       setSlideList(res.data); // 카테고리별로 데이터를 저장
  //     })
  //     .catch((error) => console.log("API 요청 실패:", error));
  // }, []);

  return (
    <>
      {slideList.map((slide, i) => {
        if (slide.category === "Our Mission") {
          // Our Mission, Club은 Swiper 제외
          return (
            <>
              <div
                key={i}
                className="relative w-full p-8 content product-container bg-bg"
              >
                <h2 className="pb-16 font-bold text-36">{slide.category}</h2>
                {slide.data.map((item, i) => (
                  <div key={i} className={`w-full rounded-lg bg-lightgreen`}>
                    <div className="flex w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-[30%]"
                      />
                      <img
                        src={item.src}
                        alt={item.title}
                        className="object-cover w-[70%]"
                      />
                    </div>
                    <div className="flex justify-between p-32">
                      <div>
                        <h3 className="font-bold text-36">{item.title}</h3>
                        <p className="mt-4 text-gray-600 text-14">
                          {item.description}
                        </p>
                      </div>
                      {item.btnText && (
                        <button className={`mt-4 ${item.btnStyle}`}>
                          {item.btnText}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          );
        } else if (slide.category === "CASETiBUY Club") {
          return (
            <>
              <div className="relative">
                <img
                  src="https://cdn-stamplib.casetify.com/cms/image/82530d836f5bd685f4169e4c9b6d1b2b.jpg.webp"
                  alt="casetibuy-club-img"
                  className="w-full"
                />
                <div
                  className={`absolute p-4 bottom-24 left-24 flex flex-col items-start`}
                >
                  <h2
                    className={`p-16 font-bold text-36 rounded-br-10 rounded-t-10 bg-yellow text-blue`}
                  >
                    CASETiBUY Club
                  </h2>
                  <span
                    className={`py-12 rounded-b-10 rounded-tr-10 px-15 text-20 bg-yellow`}
                  >
                    Get exclusive rewards and privileges
                  </span>
                </div>
              </div>
            </>
          );
        }

        // 일반 카테고리는 Swiper 적용
        return (
          <div key={i} className="content product-container bg-bg">
            <h2 className="pb-16 font-bold text-36">{slide.category}</h2>

            <div className={`swiper-container-${className}-${i}`}>
              <Swiper
                ref={swiperRef}
                slidesPerView={
                  slide.category === "#CASETiBUYCommunity" ||
                  slide.category === "CASETiBUY Artist"
                    ? 2.5
                    : 3.2
                }
                slidesPerGroup={
                  slide.category === "#CASETiBUYCommunity" ||
                  slide.category === "CASETiBUY Artist"
                    ? 1
                    : 3.2
                }
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
                  <SwiperSlide key={index}>
                    <HomeProduct {...slide} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* 페이지네이션 & 네비게이션 */}
              <div
                className={`relative flex justify-between w-full p-24 mt-16 pagination-wrapper-${className}`}
              >
                {pagination && (
                  <div
                    className={`flex items-center justify-center gap-8 custom-pagination-${className}-${i}`}
                  ></div>
                )}
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
        );
      })}
    </>
  );
}
