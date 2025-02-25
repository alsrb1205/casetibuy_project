import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../style/color-swiper.css'


export default function Color() {
    const colors = {
        "black": "블랙",
        "skyblue": "스카이 블루",
        "purple": "퍼플",
        "mattblack": "매트 블랙"
    }

    return (
        <div className='mb-12 color-container'>
            <div>
                <div className='mb-12'>
                    <span className='font-bold'>색상:</span>
                    <span>블랙</span>
                </div>
                <div className=''>
                    <div className='pt-8 pb-6'>
                        <Swiper
                            slidesPerView={9.7}
                            spaceBetween={0}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='rounded-[100%] w-44 h-44 bg-black shadow-[inset_0_1.5px_1.5px_rgba(0,0,0,0.3)]'>
                                    <span className='block absolute aspect-square w-26 left-[50%] -translate-x-1/2 rounded-[50rem] bg-[radial-gradient(circle_at_50%_50%,_hsla(0,0%,100%,0.45),_transparent)] border-0'></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='rounded-[100%] w-44 h-44 bg-skyblue shadow-[inset_0_1.5px_1.5px_rgba(0,0,0,0.3)]'>
                                    <span className='block absolute aspect-square w-26 left-[50%] -translate-x-1/2 rounded-[50rem] bg-[radial-gradient(circle_at_50%_50%,_hsla(0,0%,100%,0.45),_transparent)] border-0'></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='rounded-[100%] w-44 h-44 bg-purple shadow-[inset_0_1.5px_1.5px_rgba(0,0,0,0.3)]'>
                                    <span className='block absolute aspect-square w-26 left-[50%] -translate-x-1/2 rounded-[50rem] bg-[radial-gradient(circle_at_50%_50%,_hsla(0,0%,100%,0.45),_transparent)] border-0'></span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}