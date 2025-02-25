import React from 'react';
import {Link} from 'react-router-dom';
import Title from './Title.jsx';

export default function Series() {

    return (

        <>
            <div className=''>
                {/* media series item */}
                
                <div className='flex space-x-4 mx-7'>

                    {/* 바운드 시리즈 */}
                        <div className='bg-[#1a8550] h-full min-h-[100px] rounded-[16px] cursor-pointer pt-[8px] pr-[8px] pb-[16px]
                                        hover:border-1 border-solid border-[#000] rounded-[100px] p-2'>

                            {/* 이미지 */}
                            <div className=''><img src="/image/Series/Series1.png" 
                                                   alt="img-err" 
                                                   className='w-[150px] rounded-[13px] items-center'

                                              /></div>


                            {/* 텍스트 */}
                            <Link to=''><p className='text-[#000] font-extrabold'>바운드 시리즈</p></Link>

                        </div>

                    {/* 임팩트 시리즈 */}

                        <div className='bg-[#234a89] h-full min-h-[100px] rounded-[16px] cursor-pointer pt-[8px] pr-[8px] pb-[16px]
                                        hover:border-1 border-solid border-[#000] rounded-[100px] p-2'>

                            <div className=''><img src="/image/Series/Series2.png" alt="img-err" className='w-[150px] rounded-[13px] items-center'/></div>
                            
                            <Link to=''><p className='text-[#e8e6e3] font-extrabold'>임팩트 시리즈</p></Link>

                        </div>

                    {/* 링 시리즈 */}
                    
                        <div className='bg-[#a2220c] h-full min-h-[100px] rounded-[16px] cursor-pointer pt-[8px] pr-[8px] pb-[16px]
                                        hover:border-1 border-solid border-[#000] rounded-[100px] p-2'>

                            <div className=''><img src="/image/Series/Series3.png" alt="img-err" className='w-[150px] rounded-[13px]'/></div>
                            <Link to=''><p className='text-[##000] font-extrabold'>링 시리즈</p></Link>

                        </div>


                    {/* 미러 시리즈 */}
                    
                        <div className='bg-[#6a5c06] h-full min-h-[100px] rounded-[16px] cursor-pointer pt-[8px] pr-[8px] pb-[16px]'>

                            <div className='bg-[#fff] rounded-[13px]'><img src="/image/Series/Series4.png" alt="img-err" className='w-[150px] rounded-[13px]'/></div>
                            <Link to=''><p className='text-[##000] font-extrabold'>미러 시리즈</p></Link>    

                        </div>


                    {/* Essentials by CASETiFY™ */}
                    
                        <div className='bg-[#fecad6] h-full min-h-[100px] rounded-[16px] cursor-pointer pt-[8px] pr-[8px] pb-[16px]'>

                            <div className='bg-[#fff] rounded-[13px]'><img src="/image/Series/Series5.png" alt="img-err" className='w-[150px] rounded-[13px]'/></div>
                            <Link to=''><p className='text-[##000] font-extrabold'>Essentials by CASETiFY™</p></Link>

                        </div>


                    {/* 페블 레더 시리즈 */}
                    
                        <div className='bg-[#1a8550] h-full min-h-[100px] rounded-[16px] cursor-pointer pt-[8px] pr-[8px] pb-[16px]'>

                            <div className=''><img src="/image/Series/Series6.png" alt="img-err" className='w-[150px] rounded-[13px]'/></div>
                            <Link to=''><p className='text-[##000] font-extrabold'>BioVeg &amp; 페블 레더 시리즈</p></Link>    

                        </div>

                </div>

                {/* ********************************************************* */}
                {/* media button series item */}
                <div className=''>

                    <div>

                    </div>

                    <div>

                    </div>

                </div> 

            </div>

            {/* All title */}

            <Title />

        </>
    );
}
