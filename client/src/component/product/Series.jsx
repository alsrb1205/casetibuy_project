import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SeriesItem from "./SeriesItem.jsx";
import { PListContext } from "../../context/PListContext.js";
import useColorScheme from "../../hooks/useColorScheme.js";

export default function Series() {
  const { setSelectList } = useContext(PListContext);
  const getColorScheme = useColorScheme();
  const navigate = useNavigate();

  const handleList = (kinds) => {
    setSelectList(kinds);
  };

  return (
    <div className="px-32 pt-98">
      {/* series title */}
      <div className="mb-8">
        <p className="font-bold text-26">시리즈</p>
      </div>

      {/* media series content */}
      <div className="">
        <div className="flex gap-16 p-2">
          <SeriesItem
            onClick={() => {
              handleList("all");
              navigate("/homelist");
            }}
            className="w-[10%] h-full min-h-100 min-w-116 rounded-16 cursor-pointer p-8 pb-16 bg-green"

            imageSrc="/images/series/series2.png"
            title="전 상품"
            titleClassName="mt-8 font-extrabold text-12"
          />
          <SeriesItem
            onClick={() => {
              handleList("iphone");
              navigate("/homelist");
            }}
            className="w-[10%] h-full min-h-100 min-w-116 rounded-16 cursor-pointer p-8 pb-16 bg-green"
            imageSrc="/images/iphone16pro/common/iphone16p_common_back_case_impact_color_black.jpg"
            title="iPhone"
            titleClassName="mt-8 font-extrabold text-12"
          />
          <SeriesItem
            onClick={() => {
              handleList("airpod4");
              navigate("/homelist");
            }}
            className="w-[10%] h-full min-h-100 min-w-116 rounded-16 cursor-pointer p-8 pb-16 bg-green"
            imageSrc="/images/airpod4/airpod4_common_charcoal.png"
            title="AirPod 4"
            titleClassName="mt-8 font-extrabold text-12"
          />
          <SeriesItem
            onClick={() => {
              handleList("airpodmax");
              navigate("/homelist");
            }}
            className="w-[10%] h-full min-h-100 min-w-116 rounded-16 cursor-pointer p-8 pb-16 bg-green"
            imageSrc="/images/airpod4/airpodmax_ripple_case_airpodmax_color_white1.png"
            title="AirPod Max"
            titleClassName="mt-8 font-extrabold text-12"
          />
        </div>
      </div>
    </div>
  );
}