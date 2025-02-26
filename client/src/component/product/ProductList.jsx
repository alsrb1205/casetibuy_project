import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ products = [], layoutType }) {

    return (
    
        <div className={`grid gap-4 ${layoutType === 2 ? 'grid-cols-2' : 
                                      layoutType === 4 ? 'grid-cols-4' : 'grid-cols-6'}`}
                                      >

            {products.map(product => (

                <Link key={product.id} to={`/product/${product.id}`}>

                    {/* product list */}

                    <div className='w-full p-30 relative'>

                        {/* Gradient Background */}
                        <div className='absolute top-0 left-0 w-full h-full 
                                        bg-gradient-to-tl from-[#EEE] via-transparent to-[rgba(238,238,238,0)] z-0'></div>

                        {/* 상품 이미지 */}
                        <div className='absoulte z-10 w-full max-w-sm mx-auto'>
                            <img src={product.image} 
                                 alt={product.title} 
                                 className='object-cover w-full h-auto align-middle'/>
                        </div>

                        {/* 상품 내용 */}
                        <div className='relative z-10 flex flex-col mt-6
                                        '>

                            {/* 상품 정보 */}
                            <div className='mt-12 gap-10 flex flex-col text-#8c8c8c 
                                            p-5 
                                            '>
                                
                                <p className='text-black font-semibold'>
                                   {product.title}</p>
                                <p>{product.model}</p>
                                <p>{product.series}</p>

                            </div>

                            {/* 상품 가격 */}
                            <div className='bg-black rounded-full 
                                            px-15 py-10 w-100
                                            
                                            '>

                                <p className='text-14 text-white text-center'>
                                        ₩{product.price.toLocaleString()}
                                </p>

                            </div>

                        </div>
                        {/* ======================================================== */}
                    </div>

                </Link>
            ))}

        </div>
    );
}