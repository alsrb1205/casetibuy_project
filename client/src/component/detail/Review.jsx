import React, { useContext, useState } from 'react';
import ReviewBars from './review/ReviewBars.jsx';
import ReviewForm from './review/ReviewForm.jsx';
import ReviewList from './review/ReviewList.jsx';
import axios from 'axios';
import { ReviewContext } from '../../context/ReviewContext.js';
import useReview from '../../hooks/useReview.js';

export default function Review() {
    const {reviewForm, setReviewForm,rating, setRating, comment, setComment} = useContext(ReviewContext);


    return (
        <div className='mx-auto mt-90 max-w-[1140px] text-center'>
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
            <div className='text-end mr-67'>
                <button onClick={()=>setReviewForm(prev=>!prev)}>
                    리뷰 작성
                </button>
            </div>
            </div>
            {/* 별점갯수 */}
            <div className='mt-50 w-[969px] mx-auto'>
                <div className='font-bold text-left text-18'>
                    별점순으로 정렬
                </div>
                <div>
                    <ReviewBars/>
                </div>
            </div>
            {
                reviewForm && <ReviewForm/>
            }
            <ReviewList/>
        </div>
    );
}

