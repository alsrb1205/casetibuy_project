import React from "react";
import CommonSlide from "./CommonSlide";
import { useSlide } from "../../hooks/useSlide.js";

export default function SlideSection() {
  const { hnrSlides } = useSlide();

  const title = {
    recommended: "Recommended Collection",
    hot: "Now Hot Designs!",
    new: "#CasetibuyNew",
  };

  return (
    <div>
      {Object.entries(hnrSlides).map(([key, value]) => (
        <CommonSlide
          key={key}
          className={key}
          title={title[key] || key}
          pagination
          navigation
          slidesData={value.map((item) => ({
            ...item,
            link: `/detail/${item.pid}`,
            state: {
              activeCase: item.activeCase,
              activeColor: item.activeColor,
            },
          }))}
        />
      ))}
    </div>
  );
}
