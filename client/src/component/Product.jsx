import React from "react";

export default function Product({
  title,
  bgColor,
  btnColor,
  image,
  className,
}) {
  return (
    <div
      className={`rounded-20 overflow-hidden ${bgColor} relative ${className}`}
    >
      <img src={image} alt={title} className="object-cover w-full" />
      <div className="p-16">
        <h2 className="text-lg font-bold">{title}</h2>
        <button className={`mt-8 px-16 py-8 rounded-lg ${btnColor}`}>
          구매하기
        </button>
      </div>
    </div>
  );
}
