import React from 'react';
import Bars from './Bars';

export default function DetailTopRight() {
    return (
        <div className="sticky top-0 self-start border-1 w-[533px]">
            <div className="flex flex-col gap-10">
                <div className='flex flex-col gap-10'>
                    <div>
                        <h2 className="text-[36px] font-extrabold">Chrome Doodles</h2>
                    </div>
                    <div>
                        <span className="text-[16px] font-medium">마그네틱 미러 케이스</span>
                    </div>
                </div>
                <div className='relative mb-24 price-container'>
                    <div className='flex items-center gap-10'>
                        <span className='text-[24px] pb-1'>₩86000</span>
                        <span className='border-[1px] border-orange text-orange text-[10px] text-center rounded-[40px] h-[18px] px-[8px]
            '>무료 배송</span>
                    </div>
                    <div className='flex flex-col gap-[4px] absolute right-0 bottom-20'>
                        <img src="images/qr.png" alt="" />
                        <span className='text-[8px] pt-0'>12345678</span>
                    </div>
                </div>
                <div name="" id="" className='w-full border-1 h-48 border-black rounded-[16px] mb-24'>
                    기종선택 컨테이너
                </div>
                <Bars />
                <div>
                    a
                </div>
            </div>
        </div>);
}

