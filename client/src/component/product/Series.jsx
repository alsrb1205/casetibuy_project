import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SeriesItem from "./SeriesItem.jsx";
import { PListContext } from "../../context/PListContext.js";
import useColorScheme from "../../hooks/useColorScheme.js";

export default function Series() {
  const { setSelectList } = useContext(PListContext);
  const getColorScheme = useColorScheme();
  const navigate = useNavigate();

  // 시리즈 데이터를 JSON 형식의 배열로 정의
  const seriesData = [
    {
      kinds: "all",
      imageSrc: "/images/series/series2.png",
      title: "전 상품"
    },
    {
      kinds: "iphone",
      imageSrc: "/images/iphone16pro/common/iphone16p_common_back_case_impact_color_black.jpg",
      title: "iPhone"
    },
    {
      kinds: "airpod4",
      imageSrc: "/images/airpod4/airpod4_common_charcoal.png",
      title: "AirPod 4"
    },
    {
      kinds: "airpodmax",
      imageSrc: "/images/airpod4/airpodmax_ripple_case_airpodmax_color_white1.png",
      title: "AirPod Max"
    }
  ];

  const handleList = (kinds) => {
    setSelectList(kinds);
  };

  return (
    <div className="px-32 pt-98">
      {/* 시리즈 타이틀 */}
      <div className="mb-8">
        <p className="font-bold text-26">시리즈</p>
      </div>

      {/* 미디어 시리즈 콘텐츠 */}
      <div className="">
        <div className="flex gap-16 p-2">
          {seriesData.map((item, index) => (
            <SeriesItem
              key={index}
              onClick={() => {
                handleList(item.kinds);
                navigate("/homelist");
              }}
              className={`w-[10%] h-full min-h-100 min-w-116 rounded-16 cursor-pointer p-8 pb-16 ${getColorScheme(index).bg}`}
              imageSrc={item.imageSrc}
              title={item.title}
              titleClassName={`mt-8 font-extrabold text-12 ${getColorScheme(index).text}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
