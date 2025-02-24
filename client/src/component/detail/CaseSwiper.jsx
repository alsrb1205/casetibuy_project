import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../style/case-swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CaseSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={16}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='max-w-135'>
                        <img src="/images/detail/selectcase/bounce.png" alt="" />
                        <div className='flex flex-col mt-10'>
                            <span className='truncate text-14'>바운스 케이스</span>
                            <span className='text-14'>10000</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-135'>
                        <img src="/images/detail/selectcase/impactringstand.png" alt="" />
                        <div className='flex flex-col mt-10'>
                            <span className='truncate text-14 '>맥세이프 호환 임팩트 링 스탠드 케이스</span>
                            <span className='text-14'>10000</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-135'>
                        <img src="/images/detail/selectcase/impactmac.png" alt="" />
                        <div className='flex flex-col mt-10'>
                            <div className='inline-flex'>
                            <span className='truncate text-14'>맥세이프 호환 임팩트 케이스</span>

                            </div>
                            <span className='text-14'>10000</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-135'>
                        <img src="/images/detail/selectcase/impactcase.png" alt="" />
                        <div className='flex flex-col mt-10'>
                            <span className='truncate text-14'>임팩트 케이스</span>
                            <span className='text-14'>10000</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-135'>
                        <img src="/images/detail/selectcase/impactcase.png" alt="" />
                        <div className='flex flex-col mt-10'>
                            <span className='truncate text-14'>임팩트 케이스</span>
                            <span className='text-14'>10000</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-135'>
                        <img src="/images/detail/selectcase/impactcase.png" alt="" />
                        <div className='flex flex-col mt-10'>
                            <span className='truncate text-14'>임팩트 케이스</span>
                            <span className='text-14'>10000</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

