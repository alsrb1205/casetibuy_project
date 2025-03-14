import React from "react";

export default function HomeProduct({
  className,
  title,
  image,
  description,
  label,
  labelStyle,
  btnStyle,
  bgColor,
  btnColor,
  btnText,
  cpadding,
  cround,
  contentPadding,
}) {
  return (
    <div
      className={`w-full h-full rounded-20 overflow-hidden block ${bgColor} ${className} ${cpadding}`}
    >
      <div className="w-full overflow-hidden">
        <img src={image} alt={title} className={`w-full ${cround}`} />
      </div>
      <div
        className={`flex flex-col items-start justify-between ${contentPadding}`}
      >
        <span className={`${labelStyle}`}>{label}</span>
        <div>
          <h2 className={`mt-10 font-bold text-26`}>{title}</h2>
          <p>{description}</p>
        </div>
        <button className={`mt-30 ${btnStyle} ${btnColor}`}>{btnText}</button>
      </div>
    </div>
  );
}
