import React from "react";
import CommonSlide from "./CommonSlide";

export default function SlideSection({ slides }) {
  // 사람이 보기 좋은 className 설정
  const title = {
    recommended: "Recommended Collection",
    hot: "Now Hot Designs!",
    new: "#CasetibuyNew",
  };

  return (
    <div>
      {Object.entries(slides).map(([key, value]) => (
        <CommonSlide
          key={key}
          className={key}
          title={title[key] || key}
          pagination
          navigation
          slidesData={value}
        />
      ))}
    </div>
  );
}
