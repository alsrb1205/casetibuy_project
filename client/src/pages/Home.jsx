import React from "react";
import HomeProductList from "../component/home/HomeProductList.jsx";
import Slide from "../component/slide/Slide.jsx";
import SlideDataFetcher from "../component/slide/SlideDataFetcher.jsx";
import Payment from "../component/cart/Payment.jsx";
import Guarantee from "../component/cart/Guarantee.jsx";

export default function Home() {
  return (
    <div>
      {/* visual slider */}
      <Slide className="visual" pagination={true} navigation={false} />

      {/* collaborator */}
      <Slide className="collaborator" pagination={false} navigation={true} />

      {/* Featured Collection */}
      <div className="content product-container bg-bg">
        <h2 className="pb-16 font-bold text-36">Featured Collection</h2>
        <HomeProductList />
      </div>

      {/* Common Slides */}
      <SlideDataFetcher />

      {/* 카트에 있던 컴포넌트 재사용 */}
      <div className="flex items-center justify-center py-40 mt-40">
        <Payment
          conStyle="flex flex-col justify-center items-center gap-5 px-28 w-full"
          hidden="hidden"
          text="사용 가능한 결제 방법"
          textSize="text-24 font-bold"
        />
        <div className="w-1 border h-150 border-grayhborder"></div>
        <Guarantee
          conStyle="flex flex-col justify-center items-center px-28 justify-between  w-full"
          flex="flex gap-10 items-center pb-28"
          imgeSize="w-36 h-36"
          description={`케이스티파이는 선정된 제품에 대해\n
                      구매 후 10일 이내 조건 없이 반품 및 교환,\n
                      6개월 제품 보증을 제공해 드립니다.\n
                      도움이 필요하시다면 연락하기 또는\n
                      더 알아보기를 클릭해 주세요.`}
          textStyle="leading-12 text-center whitespace-pre-line text-16"
          textSize="text-24"
          hidden="hidden"
        />
      </div>
    </div>
  );
}
