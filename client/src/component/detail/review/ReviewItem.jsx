import React from 'react';

export default function ReviewItem () {
    return (
        <>
            <div className='flex mx-auto min-h-150'>
                <div className='flex flex-col w-[20%] mr-50 text-left'>
                    <div className='text-12'>
                        이름
                    </div>
                    <div className='flex-1 text-12'>
                        12/06/24
                    </div>
                    <div className='font-bold text-12'>
                        기종-케이스-색상
                    </div>
                </div>
                <div className=' w-[20%] text-left'>
                    <div>
                        별점
                    </div>
                    <div className='mt-8 text-12'>
                        리뷰내용
                    </div>
                    <div>
                        사진있으면사진
                    </div>
                </div>
            </div>
            <hr className='my-20 text-grayborder2' />
        </>
    );
}

