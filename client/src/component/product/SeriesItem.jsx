import React from 'react';

export default function SeriesItem({ onClick, imageSrc, title, className = '', titleClassName = '' }) {
  return (
    <div
      onClick={onClick}
      className={`w-[10%] h-full min-h-100 min-w-116 rounded-16 cursor-pointer p-8 pb-16 bg-green ${className}`}
    >
      <img
        src={imageSrc}
        alt="img-err"
        className="w-full rounded-16"
      />
      <p className={`${titleClassName}`}>
        {title}
      </p>
    </div>
  );
}