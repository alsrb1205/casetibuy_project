import React from 'react';

export default function DetailProduct() {
  return (
    <>
      <div>asdsadsadasdsa</div>
      <div className="detailpage max-w-[1382px] mx-auto">
        <div className="flex gap-8">
          {/* 왼쪽 콘텐츠 */}
          <div className="flex-1 relative">
            <div className="flex flex-col gap-4 border-2 border-black">
              <div className="w-full relative">
                <img
                  src="/images/1.webp"
                  alt=""
                  className="w-full h-auto object-cover"
                />
                <div className='absolute bottom-[16px] left-[20px] flex gap-[8px] justify-center items-center border-2 border-color-black p-[4px] pr-[10px] rounded-[100px]'>
                  <div className='w-[20px] h-[20px] rounded-[100%] bg-black'></div>
                  <span>기기컬러</span>
                </div>
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
            <div className="space-y-4">
              <h2 className="text-[36px] font-extrabold">Chrome Doodles</h2>
              <div>
                <span className="text-[16px] font-medium">마그네틱 미러 케이스</span>
              </div>
              <div className='price-container flex justify-between relative'>
                <div className='flex gap-[10px] items-center'>
                  <span className='text-[24px] pb-1'>86000</span>
                  <span className='border-[1px] border-orange text-orange text-[10px] text-center rounded-[40px] h-[18px] px-[8px] 
                '>무료 배송</span>
                </div>
                <div className='flex flex-col gap-[4px] absolute right-0 bottom-0'>
                  <img src="images/qr.png" alt="" />
                  <span className='text-[8px] pt-0'>12345678</span>
                </div>
              </div>
              <div className='select-box'>
                <select name="" id="" className='w-full'>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
