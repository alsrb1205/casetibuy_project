import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Title from "./Title.jsx";
import { PListContext } from "../../context/PListContext.js";

export default function Series() {
  const { productList, setProductList,selectList, setSelectList} = useContext(PListContext);

   const handleList = (kinds) => {
    setSelectList(kinds);
  };

  return (
    <div className="px-32 mt-32">
      {/* series title */}
      <div className="mb-8">
        <p className="font-bold text-26">시리즈</p>
      </div>

      {/* media series content */}

      <div className="">
        <div className="flex gap-16 p-2">
          <div
           onClick={()=>handleList('all')}
            className='w-[10%] h-full min-h-100 min-w-116 rounded-16 cursor-pointer p-8 pb-16 bg-green'
          >
            <img
              src="/images/series/series2.png"
              alt="img-err"
              className="w-full rounded-16"
            />
            <p className="text-[#e8e6e3] font-extrabold text-12 mt-8">
              전 상품
            </p>
          </div>
          <div
            className='w-[10%] h-full min-h-100 min-w-116 rounded-16 cursor-pointer p-8 pb-16 bg-green'
            onClick={() => handleList('iphone')}
          >
            <img
              src="/images/series/iphone.png"
              alt="img-err"
              className="w-full rounded-16"
            />
            <p className="text-[#e8e6e3] font-extrabold text-12 mt-8">
              iPhone
            </p>
          </div>
          <div
            className='w-[10%] h-full min-h-100 min-w-116 rounded-16 cursor-pointer p-8 pb-16 bg-green'
            onClick={() => handleList('airpod4')}
          >
            <img
              src="/images/series/airpod4.png"
              alt="img-err"
              className="w-full rounded-16"
            />
            <p className="text-[#e8e6e3] font-extrabold text-12 mt-8">
              AirPod 4
            </p>
          </div>
          <div
            className='w-[10%] h-full min-h-100 min-w-116 rounded-16 cursor-pointer p-8 pb-16 bg-green'
            onClick={() => handleList('airpodmax')}
          >
            <img
              src="/images/series/airpodmax.png"
              alt="img-err"
              className="w-full rounded-16"
            />
            <p className="text-[#e8e6e3] font-extrabold text-12 mt-8">
              AirPod Max
            </p>
          </div>
        </div>
        {/* series */}
      </div>
      {/* <Title /> */}
    </div>
  );
}
