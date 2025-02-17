import React from 'react';
import DetailTopLeft from '../component/detail/DetailTopLeft';
import DetailTopRight from '../component/detail/DetailTopRight';

export default function DetailProduct() {
  return (
    <>
      <div className="detailpage max-w-[1382px] mx-auto bg-detailbg">
        <div className="flex gap-32">
          {/* 왼쪽 콘텐츠 */}
          <DetailTopLeft/>
          {/* 오른쪽 콘텐츠 (sticky) */}
          <DetailTopRight/>
        </div>
      </div>
    </>
  );
}
