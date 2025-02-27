import React from 'react';
import {Link} from 'react-router-dom';
import Title from './Title.jsx';

export default function series() {

    return (

        <>

            <div className='p-15 m-5'>
                <h1 className='text-25 font-bold'>시리즈</h1>
            </div>

            {/* media series item */}

            <div className=''>
                
                {/* series */}
                <div className='flex gap-25 m-10 p-10'> 

                    {/* 바운드 시리즈 */}
                    <Link to='/homelist'
                          className='group-visited:border-red'>

                        <div className='bg-[#1a8550] h-full min-h-100 rounded-16
                                        cursor-pointer w-200 p-8
                                        '>

                            {/* 이미지 */}
                            <img src="/images/series/series1.png" 
                                alt="img-err" 
                                className='w-180 rounded-13        
                            '/>
                            
                            {/* 텍스트 */}
                            <p className='text-#000000 font-extrabold'>
                                바운드 시리즈
                            </p>

                        </div>
                    </Link>

                    {/* 임팩트 시리즈 */}
                    <Link to='/homelist'>
                        <div className='bg-[#234a89] h-full min-h-100 rounded-16
                                        cursor-pointer w-200 p-8
                                        '>

                            <img src="/images/series/series2.png" 
                                    alt="img-err" 
                                    className='w-180 rounded-13
                            '/>

                            <p className='text-[#e8e6e3] font-extrabold'>임팩트 시리즈</p>
                            
                        </div>
                    </Link>

                    {/* 링 시리즈 */}
                    
                    <Link to='/homelist'>
                        <div className='bg-orange h-full min-h-100 rounded-16
                                        cursor-pointer w-200 p-8

                                        '>

                            <div className='bg-[#fff] rounded-[13px]'>
                                            <img src="/images/series/series3.png" 
                                                 alt="img-err" 
                                                 className='w-180 rounded-13'/>
                            </div>

                            <p className='text-#000000 font-extrabold'>링 시리즈</p>

                        </div>
                    </Link>


                    {/* 미러 시리즈 */}
                    
                    <Link to='/homelist'>
                        <div className='bg-[#6a5c06] h-full min-h-100 rounded-16
                                        cursor-pointer w-200 p-8
                                        '>

                                        <img src="/images/series/series4.png" 
                                                alt="img-err" 
                                                className='w-180 rounded-13
                                                '/>

                            <p className='text-#000000 font-extrabold'>미러 시리즈</p>   

                        </div>
                    </Link> 


                    {/* Essentials by CASETiFY™ */}
                    <Link to='/homelist'>
                        <div className='bg-[#fecad6] h-full min-h-100 rounded-16
                                        cursor-pointer w-200 p-8
                                        '>

                            <img src="/images/series/series5.png" 
                                    alt="img-err" 
                                    className='w-180 rounded-13'/>
                            
                            <p className='text-#000000 font-extrabold'>Essentials by CASETiFY™</p>
                        </div>
                    </Link>


                    {/* 페블 레더 시리즈 */}
                    <Link to='/homelist'>
                        <div className='bg-[#1a8550] h-full min-h-100 rounded-16
                                        cursor-pointer w-200 p-8 
                                        '>

                            <div className="bg-white rounded-15">
                                <img src="/images/series/series6.png" 
                                        alt="img-err" 
                                        className='w-180 rounded-13'/>
                            </div>
                           
                            <p className='text-#000000 font-extrabold'>BioVeg &amp; 페블 레더 시리즈</p>   

                        </div>
                    </Link> 

                </div> {/* series */}



            {/* ********************************************************* */}
            {/* media button series item */}

                <div className=''>

                    <div>
                    </div>

                    <div>

                    </div>

                </div> 

            </div>

            {/* ********************************************************* */}
            {/* All title */}

                <Title />

        </>
    );
}
