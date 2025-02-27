import React from "react";

export default function HomeProduct({
  title,
  bgColor,
  btnColor,
  image,
  className,
  pid,
  no,
  description,
  labelStyle,
  btnText,
  btnStyle,
}) {
  return (
    <div
      className={`border rounded-20 overflow-hidden ${bgColor} ${className}`}
    >
      <img src={image} alt={title} className="object-cover w-full" />
      <div className="px-32 py-16">
        <span className={`${labelStyle}`}>
          {pid}
          {no}
        </span>
        <div className="flex-col justify-between inline py-32 md:flex-row md:flex">
          <div>
            <h2 className="pt-10 font-bold text-26">{title}</h2>
            <p>{description}</p>
          </div>
          <button className={`${btnStyle} ${btnColor}`}>{btnText}</button>
        </div>
      </div>
    </div>
  );
}
