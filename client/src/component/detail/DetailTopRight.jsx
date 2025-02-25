import React, { useContext, useRef, useState } from 'react';
import Bars from './Bars';
import CaseSwiper from './CaseSwiper';
import Color from './Color';
import '../../style/case-swiper.css'
import '../../style/bar.css';

export default function DetailTopRight() {
 // activeGauge: 클릭한 케이스의 게이지 (클릭 시 유지됨)
  // hoverGauge: 현재 hover 중인 케이스의 게이지
  // activeCase: 선택된 케이스의 id
  const [activeGauge, setActiveGauge] = useState(null);
  const [hoverGauge, setHoverGauge] = useState({ protective: '50%', weight: '50%' });
  const [activeCase, setActiveCase] = useState(null);

  const handleHover = (gaugeValues) => {
    setHoverGauge(gaugeValues);
  };

  const handleLeave = () => {
    setHoverGauge(activeGauge || { protective: '50%', weight: '50%' });
  };

  // onCaseClick 핸들러에 케이스 id도 함께 전달
  const handleCaseClick = (gaugeValues, caseId) => {
    setActiveGauge(gaugeValues);
    setHoverGauge(gaugeValues);
    setActiveCase(caseId);
  };

  const gaugeToUse = hoverGauge;
    return (
        <div className="sticky top-12 self-start w-[533px]">
            <div className="flex flex-col gap-10">
                <div className='flex flex-col gap-5'>
                    <h2 className="text-[36px] font-extrabold">Chrome Doodles</h2>
                    <span className="text-[16px] font-medium">마그네틱 미러 케이스</span>
                </div>
                <div className='relative mt-3 mb-12 price-container'>
                    <div className='flex items-center gap-10'>
                        <span className='text-[24px] pb-1'>₩86000</span>
                        <span className='border-[1px] border-orange text-orange text-[10px] text-center rounded-[40px] h-[18px] px-[8px] pt-1'>
                            무료 배송</span>
                    </div>
                    <div className='flex flex-col gap-[4px] absolute right-0 bottom-4'>
                        <img src="images/qr.png" alt="" />
                        <span className='text-[8px] pt-0'>12345678</span>
                    </div>
                </div>
                <div name="" id="" className='w-full border-1 h-48 border-black rounded-[16px] mb-15 flex items-center'>
                    <span>기종선택 컨테이너</span>
                </div>
                <div className='mb-16'>
                <Bars gauge={gaugeToUse} />
          <CaseSwiper 
            onHover={handleHover} 
            onLeave={handleLeave} 
            onCaseClick={handleCaseClick} 
            activeCase={activeCase}
          />                </div>
                <Color />
                <div className='flex justify-center bg-sky rounded-[16px] mb-6'>
                    <div className='py-14'>
                        <span className='tracking-[0.015em] text-blue2'>번들 구성: 스크린 프로텍터와 세트로 구매 시 할인 적용!</span>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center px-20 py-16 bg-blue2 rounded-[16px] mb-24'>
                        <strong className='text-white text-20'>제품 비교</strong>
                        <button className='text-white border-1 rounded-[40px] px-20 py-10'>비교하기</button>
                    </div>
                    <button className='w-full text-20 text-white bg-black rounded-[16px] py-19 mb-24'>카트에 담기</button>
                    <div className='mb-24 text-center'>전 세계 무료 배송</div>
                    <div className='flex flex-col items-center mb-24 bg-white rounded-[16px] py-16 px-32'>
                        <div className='flex gap-20 mb-32'>
                            <img className='rounded-[4px] border-1 border-grayborder w-47 h-33' src="/images/detail/paymentlist/visa.svg" alt="" />
                            <img className='rounded-[4px] border-1 border-grayborder w-47 h-33' src="/images/detail/paymentlist/mastercard.svg" alt="" />
                            <img className='rounded-[4px] border-1 border-grayborder w-47 h-33' src="/images/detail/paymentlist/amex.svg" alt="" />
                            <img className='rounded-[4px] border-1 border-grayborder w-47 h-33' src="/images/detail/paymentlist/applepay.svg" alt="" />
                            <img className='rounded-[4px] border-1 border-grayborder w-47 h-33' src="/images/detail/paymentlist/kakaopay.svg" alt="" />
                        </div>
                        <div className='text-12'>사용 가능한 결제 방법</div>
                    </div>
                    <div className='flex justify-between items-center px-20 py-16 bg-white rounded-[16px]'>
                        <strong className='text-black text-20'>아티스트 소개</strong>
                        <button className='text-black border-1 rounded-[40px] px-20 py-10'>아티스트 갤러리 둘러보기</button>
                    </div>
                </div>
            </div>
        </div>);
}

