import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DetailContext } from '../../context/DetailContext';
import { useDetail } from '../../hooks/useDetail';

export default function ProductList({ productList, layoutType }) {
    const { casesData } = useContext(DetailContext);
    const { parseCaseAndColor } = useDetail();
    

    return (
        <div className={`grid gap-4 ${layoutType === 2 ? 'grid-cols-2' :
            layoutType === 4 ? 'grid-cols-4' : 'grid-cols-6'}`}
        >

            {productList.map(product => {
                const { caseType,color } = parseCaseAndColor(product.repImage);
                const caseData = { ...(casesData[caseType] || {}), color };    


                return <Link 
                to={`/detail/${product.pid}`}
                state={{ activeCase: caseType, activeColor: color }}
                onClick={() => window.scrollTo(0, 0)}
                >
                    {/* product list */}
                    <div className='relative w-full p-30'>
                        {/* Gradient Background */}
                        <div className='absolute top-0 left-0 w-full h-full 
                                        bg-gradient-to-tl from-[#EEE] via-transparent to-[rgba(238,238,238,0)]'></div>
                        {/* 상품 이미지 */}
                        <div className='w-full max-w-sm mx-auto absoulte'>
                            <img src={`http://localhost:9000/${product.repImage}`}
                                alt={product.name}
                                className='object-cover w-full h-auto align-middle' />
                        </div>
                        {/* 상품 내용 */}
                        <div className='relative flex flex-col mt-6 '>
                            {/* 상품 정보 */}
                            <div className='mt-12 gap-10 flex flex-col text-#8c8c8c 
                                            p-5 
                                            '>
                                <p className='font-semibold text-black'>
                                    {product.name}</p>
                                <p>{product.kinds}</p>
                                <p>{caseData.cname}</p>
                                <p>{caseData.color}</p>
                            </div>
                            {/* 상품 가격 */}
                            <div className='py-10 bg-black rounded-full px-15 w-100 '>
                                <p className='text-center text-white text-14'>
                                    ₩{caseData.price}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            })}

        </div>
    );
}