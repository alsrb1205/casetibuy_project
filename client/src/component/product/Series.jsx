import React from 'react';
import {NavLink} from 'react-router-dom';
import Title from './Title.jsx';

export default function series() {

    return (

        <>
            {/* series title */}
            <div className='p-15 m-5'>
                <h1 className='text-25 font-bold'>시리즈</h1>
            </div>

            {/* media series content */}

            <div className=''>
                
                {/* series */}
                {/* 시리즈 수정 중 */}
                <div className='flex gap-25 m-10 p-10'> 

                    {/* 임팩트 시리즈 */}
                    <NavLink 
                        to='/homelist'
                        className={({ isActive }) =>
                            `w-180 h-full min-h-100 rounded-16 cursor-pointer p-8 
                            bg-[#234a89] ${isActive ? 'border-solid border-black border-[3px]' : ''}`
                        }
                        >
                        <img 
                            src="/images/series/series2.png" 
                            alt="img-err" 
                            className="w-full rounded-13"
                        />
                        <p className="text-[#e8e6e3] font-extrabold text-13">임팩트 시리즈</p>
                    </NavLink>

                    
                </div> {/* series */}



            {/* ********************************************************* */}
            {/* media button series item */}

                <div className='flex justify-center'>

                    <div className='sm:block lg:hidden 
                                    p-2 rounded flex'>

                        <button type="button"
                                className='bg-[#21a664] rounded-full h-6 w-25'
                        />

                        <button type="button" 
                                className='bg-[black] rounded-full'
                        />

                    </div>

                    <div className='hidden md:block lg:hidden p-2 rounded ml-2'>
                            <p className=''></p>
                    </div>

                </div> 

            </div>

            {/* ********************************************************* */}
            {/* All title */}

            <Title />

        </>
    );
}
