import React, { useRef, useState } from 'react';
import Bars from './Bars';
import CaseSwiper from './CaseSwiper';
import Color from './Color';
// Import Swiper React components

// Import Swiper styles

// import required modules

export default function DetailTopRight() {
    return (
        <div className="sticky top-0 self-start border-r-1 border-l-1 w-[533px]">
            <div className="flex flex-col gap-10">
                <div className='flex flex-col gap-10'>
                    <div>
                        <h2 className="text-[36px] font-extrabold mt-10">Chrome Doodles</h2>
                    </div>
                    <div>
                        <span className="text-[16px] font-medium">마그네틱 미러 케이스</span>
                    </div>
                </div>
                <div className='relative mb-12 price-container'>
                    <div className='flex items-center gap-10'>
                        <span className='text-[24px] pb-1'>₩86000</span>
                        <span className='border-[1px] border-orange text-orange text-[10px] text-center rounded-[40px] h-[18px] px-[8px]
            '>무료 배송</span>
                    </div>
                    <div className='flex flex-col gap-[4px] absolute right-0 bottom-4'>
                        <img src="images/qr.png" alt="" />
                        <span className='text-[8px] pt-0'>12345678</span>
                    </div>
                </div>
                <div name="" id="" className='w-full border-1 h-48 border-black rounded-[16px] mb-16 flex items-center'>
                    <span>기종선택 컨테이너</span>
                </div>
            <div className='mb-16'>
                    <Bars />
                    <CaseSwiper/>
                </div>
                <Color/>
                <div className='flex justify-center bg-sky rounded-[16px] mb-6'>
                    <div className='px-16 py-12'>
                        <span className='text-blue2'>번들 구성: 스크린 프로텍터와 세트로 구매 시 할인 적용!</span>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center px-20 py-16 bg-blue2 rounded-[16px]'>
                        <strong className='text-white text-20'>제품 비교</strong>
                        <button className='text-white border-1 rounded-[40px] px-20 py-10'>비교하기</button>
                    </div>
                </div>
            </div>
        </div>);
}

