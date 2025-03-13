import React from 'react';
import ReviewItem from './ReviewItem';

export default function ReviewList() {
    return (
        <>
            <div className='w-[90%] mx-auto'>
                <hr className='my-20 text-grayborder2' />

                {/* 리뷰아이템 컴포넌트 */}
                <ReviewItem />
                {/* 리뷰아이템 컴포넌트 */}



            </div>
        </>
    );
}

