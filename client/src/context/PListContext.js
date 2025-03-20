import React, { createContext, useEffect, useState } from 'react';

export const PListContext = createContext();

export function PListProvider({ children }) {
  const seriesData = [
    {
      kinds: "all",
      imageSrc: "/images/series/series2.png",
      title: "전 상품"
    },
    {
      kinds: "iphone",
      imageSrc: "/images/iphone16pro/common/iphone16p_common_back_case_impact_color_black.jpg",
      title: "아이폰 16 Pro"
    },
    {
      kinds: "airpod4",
      imageSrc: "/images/airpod4/airpod4_common_charcoal.png",
      title: "AirPods 4"
    },
    {
      kinds: "airpodmax",
      imageSrc: "/images/airpod4/airpodmax_ripple_case_airpodmax_color_white1.png",
      title: "AirPod Max"
    }
  ];
    const [productList, setProductList] = useState([]);
    const [selectList, setSelectList]= useState('all');
    const [originalProducts, setOriginalProducts] = useState([]);
    const [selectedSeries, setSelectedSeries] = useState(seriesData[0]);  


    const value = {productList, setProductList,selectList, setSelectList,originalProducts, setOriginalProducts,selectedSeries,setSelectedSeries,seriesData}


    return (
            <PListContext.Provider value={value}>
              {children}
            </PListContext.Provider>
    )
}
