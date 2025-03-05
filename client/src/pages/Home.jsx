import React, { useState, useEffect } from "react";
import HomeProductList from "../component/home/HomeProductList.jsx";
import Slide from "../component/Slide.jsx";
import SlideTest from "../component/SlideTest.jsx";
import { useDetail } from "../hooks/useDetail.jsx";

export default function Home() {
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

      data.forEach((item) => {
        const productData = {
          image: `http://localhost:9000/${item.repImage}`,
          title: item.pname,
          description: item.kinds,
          btnText: "Buy Now",
          btnStyle: "py-12 px-20 text-20 rounded-full border",
          bgColor: "blue",
        };

        // 카테고리별 필터링 한 번에 처리
        if (item.isRec === 1) categorizedData.recommended.push(productData);
        if (item.isHot === 1) categorizedData.hot.push(productData);
        if (item.isNew === 1) categorizedData.new.push(productData);
      });

      setSlides(categorizedData);
    };

    fetchData();
  }, []);

  return (
    <div className="-mt-66">
      {/* visual slider */}
      <Slide className="visual" pagination={true} navigation={false} />

      {/* collaborator */}
      <Slide className="collaborator" pagination={false} navigation={true} />

      {/* Featured Collection */}
      <div className="content product-container bg-bg">
        <h2 className="pb-16 font-bold text-36">Featured Collection</h2>
        <HomeProductList />
      </div>

      {/* common */}
      <div>
        {/* 추천 상품 슬라이드 */}
        <SlideTest
          className="recommended"
          pagination
          navigation
          slidesData={slides.recommended}
        />

        {/* 핫한 상품 슬라이드 */}
        <SlideTest
          className="hot"
          pagination
          navigation
          slidesData={slides.hot}
        />

        {/* 새로운 상품 슬라이드 */}
        <SlideTest
          className="new"
          pagination
          navigation
          slidesData={slides.new}
        />
      </div>
    </div>
  );
}
