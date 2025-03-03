import React from "react";

export default function HomeProduct({
  title,
  bgColor,
  btnColor,
  image,
  className,
  label,
  description,
  labelStyle,
  btnText,
  btnStyle,
}) {
  return (
    <div
      className={`w-full h-full border rounded-20 overflow-hidden ${bgColor} ${className}`}
    >
      <div className="w-full overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col items-start p-32">
        <span className={`${labelStyle}`}>{label}</span>
        <div className={`flex justify-between flex-col items-start`}>
          <div>
            <h2 className={`pt-10 items-start font-bold text-26 mt-12`}>
              {title}
            </h2>
            <p>{description}</p>
          </div>
          <button className={`${btnStyle} ${btnColor}`}>{btnText}</button>
        </div>
      </div>
    </div>
  );
}
