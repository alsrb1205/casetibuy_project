import React from 'react';
import Bars from './Bars';
import ReviewBars from './ReviewBars';
import ReviewForm from './ReviewForm';
import { useToggle } from '../../hooks/useToggle';

export default function Review() {
    const {toggleDropdown,closeDropdown} = useToggle();
    return (
        <div className='mt-90 max-w-[1140px] text-center'>
            <div className=''>
                <p className='font-bold text-30 text-black3'>고객리뷰</p>
            </div>
            {/* average star */}
            <div className='mt-45 leading-[50px]'>
                <div className='text-50'>
                    5(평균)
                </div>
                <div className='flex items-center justify-center h-50'>
                ❤❤❤❤❤
                </div>
                <div className='text-12 text-gray3'>
                    기준 () 리뷰
                </div>
            </div>
            {/* 별점갯수 */}
            <div className='mt-50 w-[969px]'>
                <div className='font-bold text-left text-18'>
                    별점순으로 정렬
                </div>
                <div>
                    <ReviewBars/>
                </div>
            </div>
            <hr className='my-40 text-gray3'/>
            <div>
                리뷰리스트

                <button>
                    리뷰 작성
                </button>
                <ReviewForm/>
            </div>
        </div>
    );
}

