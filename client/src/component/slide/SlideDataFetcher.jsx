import React, { useState, useEffect } from "react";
import { useDetail } from "../../hooks/useDetail.jsx";
import SlideSection from "./SlideSection.jsx";

export default function SlideDataFetcher() {
  const { getProductList } = useDetail();
  const [slides, setSlides] = useState({
    recommended: [],
    hot: [],
    new: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductList();
      if (!data || data.length === 0) return;

      const categorizedData = {
        recommended: [],
        hot: [],
        new: [],
      };

      // 배경색 배열
      const bgColors = ["bg-orange", "bg-green", "bg-blue", "bg-yellow"];

      // 각 상품의 출력할 데이터, 스타일 정리
      data.forEach((item) => {
        const productData = {
          image: `http://localhost:9000/${item.repImage}`,
          pid: item.pid,
          title: item.name,
          btnText: "Buy Now",
          btnStyle: "py-12 px-20 text-20 rounded-full border",
          bgColor: bgColors[item.pid % bgColors.length],
          cpadding: "p-24",
          cround: "rounded-20",
        };

        if (item.isRec === 1) categorizedData.recommended.push(productData);
        if (item.isHot === 1) categorizedData.hot.push(productData);
        if (item.isNew === 1) categorizedData.new.push(productData);
      });

      setSlides(categorizedData);
    };

    fetchData();
  }, []);

  return <SlideSection slides={slides} />;
}
