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
      className={`p-4 rounded-lg shadow-lg ${bgColor} relative ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full rounded-lg h-52"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <button className={`mt-2 px-4 py-2 text-white rounded-lg ${btnColor}`}>
          구매하기
        </button>
      </div>
    </div>
  );
}