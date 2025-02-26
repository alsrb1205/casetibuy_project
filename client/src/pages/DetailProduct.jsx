import React from 'react';
import DetailTopLeft from '../component/detail/DetailTopLeft';
import DetailTopRight from '../component/detail/DetailTopRight';
import ProductFeatures from '../component/detail/ProductFeature';
import ProductInfo from '../component/detail/ProductInfo';

export default function DetailProduct() {
  return (
    <div className='flex flex-col items-center'>
      <div className="detailpage max-w-[1382px] m-32 bg-detailbg">
        <div className="flex gap-32">
          {/* 왼쪽 콘텐츠 */}
          <DetailTopLeft/>
          {/* 오른쪽 콘텐츠 (sticky) */}
          <DetailTopRight/>
        </div>
      </div>
      <ProductFeatures/>
      <ProductInfo/>
    </div>
  );
}
