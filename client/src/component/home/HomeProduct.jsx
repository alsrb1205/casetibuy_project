import React from "react";

export default function HomeProduct(slide) {
  return (
    <div
      className={`w-full h-full rounded-20 overflow-hidden ${slide.bgColor} ${slide.className}`}
    >
      <div className="w-full overflow-hidden">
        <img src={slide.image} alt={slide.title} className="w-full" />
      </div>
      <div className="flex flex-col items-start justify-between p-32">
        <span className={`${slide.labelStyle}`}>{slide.label}</span>
        <div>
          <h2 className={`mt-10 font-bold text-26`}>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>
        <button className={`mt-30 ${slide.btnStyle} ${slide.btnColor}`}>
          {slide.btnText}
        </button>
      </div>
    </div>
  );
}
