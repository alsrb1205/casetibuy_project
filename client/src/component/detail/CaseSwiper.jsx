import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../style/case-swiper.css';
import '../../style/bar.css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CaseSwiper({ onHover, onLeave, onCaseClick, activeCase }) {
  return (
    <div>
      <Swiper slidesPerView={'auto'} spaceBetween={16} className="mySwiper">
        <SwiperSlide>
          <div
            className="max-w-135 case-swiper"
            onMouseEnter={() => onHover({ protective: '100%', weight: '75%' })}
            onMouseLeave={onLeave}
            onClick={() => onCaseClick({ protective: '100%', weight: '75%' }, 'bounce')}
          >
            <img
              className={`rounded-16 ${activeCase === 'bounce' ? 'border-1' : ''}`}
              src="/images/detail/selectcase/bounce.png"
              alt="바운스 케이스"
            />
            <div className="flex flex-col mt-10">
              <span className="truncate text-14">바운스 케이스</span>
              <span className="text-14 text-black2">₩10000</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="max-w-135 case-swiper"
            onMouseEnter={() => onHover({ protective: '50%', weight: '50%' })}
            onMouseLeave={onLeave}
            onClick={() => onCaseClick({ protective: '50%', weight: '50%' }, 'impact')}
          >
            <img
              className={`rounded-16 ${activeCase === 'impact' ? 'border-1' : ''}`}
              src="/images/detail/selectcase/impactringstand.png"
              alt="임팩트 케이스"
            />
            <div className="flex flex-col mt-10">
              <span className="truncate text-14">
                맥세이프 호환 임팩트 링 스탠드 케이스
              </span>
              <span className="text-14">10000</span>
            </div>
          </div>
        </SwiperSlide>
        {/* 다른 케이스 항목들도 유사하게 처리 */}
      </Swiper>
    </div>
  );
}
