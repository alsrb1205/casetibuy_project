import React from 'react';

export default function DetailProduct() {
  return (
    <div className="detailpage max-w-[1382px] mx-auto">
      <div className="flex gap-8">
        {/* 왼쪽 콘텐츠 */}
        <div className="flex-1 relative">
          <div className="flex flex-col gap-4 border-2 border-black p-4">
            <div className="w-full relative">
              <img
                src="/images/1.webp"
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/2.webp"
                alt=""
                className="w-full h-auto object-cover"
              />
              <img
                src="/images/3.png"
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/4.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
              <img
                src="/images/5.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/6.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
              <img
                src="/images/7.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* 오른쪽 콘텐츠 (sticky) */}
        <div className="w-[533px] sticky top-0 self-start border-2 border-red-900">
          <div className="p-4 space-y-4">
            <h2 className="text-[36px] font-extrabold">Chrome Doodles</h2>
            <p className="text-[16px] font-medium">케이스 설명설명설명</p>
            {Array(30)
              .fill(0)
              .map((_, index) => (
                <p key={index} className="text-[16px] font-medium">
                  케이스 설명 {index + 1}
                </p>
              ))}
          </div>
        </div>
      </div>

    </div>
  );
}
