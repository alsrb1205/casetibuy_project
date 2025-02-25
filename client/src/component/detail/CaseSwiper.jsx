import React, { useContext } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../style/case-swiper.css';
import '../../style/bar.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DetailContext } from '../../context/DetailContext';
import { useDetail } from '../../hooks/useDetail';

export default function CaseSwiper() {
  const { activeCase } = useContext(DetailContext);
  const { casesData, handleCaseClick, handleHover, handleLeave } = useDetail();

 

  return (
    <div>
      <Swiper slidesPerView={'auto'} spaceBetween={16} className="mySwiper">
        {Object.keys(casesData).map((caseId) => {
          const caseItem = casesData[caseId];
          return (
            <SwiperSlide key={caseId}>
              <div
                className="max-w-135 case-swiper"
                onMouseEnter={() => handleHover(caseId)}
                onMouseLeave={handleLeave}
                onClick={() => handleCaseClick(caseId)}
              >
                <img
                  className={`rounded-16 ${activeCase === caseId ? 'border-1' : ''}`}
                  src={`/images/detail/selectcase/${caseId}.png`}
                  alt={caseItem.cname}
                />
                <div className="flex flex-col mt-10">
                  <span className="truncate text-14">{caseItem.cname}</span>
                  <span className="text-14 text-black2">₩{caseItem.price}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
