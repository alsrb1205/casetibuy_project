import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../style/color-swiper.css'
import { DetailContext } from '../../context/DetailContext';


export default function Color() {
    const { activeColor, setActiveColor,activeCase,matchCaseColor,matchColor } = useContext(DetailContext);



     // activeCase가 있고 해당 케이스에 대한 색상 목록이 있으면 사용, 없으면 전체 색상 사용
    const availableColorKeys =
                activeCase && matchCaseColor[activeCase] ? matchCaseColor[activeCase] : Object.keys(matchColor);
    
    return (
        <div className='mb-12 color-container'>
            <div>
                <div className='mb-12'>
                    <span className='font-bold'>색상:</span>
                    <span>{matchColor[activeColor] || activeColor}</span>
                </div>
                <div className=''>
                    <div className='pt-2 pb-6'>
                        <Swiper
                            slidesPerView={9.7}
                            spaceBetween={0}
                            className="mySwiper"
                        >
                            {availableColorKeys.map((colorKey) => (
                                <SwiperSlide key={colorKey} className='overflow-visible'>
                                    <div
                                        onClick={() => setActiveColor(colorKey)}
                                        className={` bg-${(activeCase === "podbounce" && colorKey === "pink") ? "rosepink" : colorKey} m-5 overflow-visible flex justify-center items-center relative cursor-pointer rounded-full w-44 h-44 shadow-[inset_0_1.5px_1.5px_rgba(0,0,0,0.3)]
                                        ${activeColor === colorKey ? 'after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[52px] after:h-[52px] after:rounded-full after:border-[1.375px] after:border-black' : ''}
                                        `}
                                    >
                                        {/* 원형 내부 장식 */}
                                        <span className='block absolute aspect-square w-26 top-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,_hsla(0,0%,100%,0.45),_transparent)]'></span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}