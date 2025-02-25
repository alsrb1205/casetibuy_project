import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { DetailContext } from '../../context/DetailContext';
import { useDetail } from '../../hooks/useDetail';

export default function ProductFeatures() {
    const { activeCase, casesData } = useContext(DetailContext);
    const caseFeature = casesData[activeCase] || {}; // 선택된 케이스 데이터
    const featureList =caseFeature.feature
    console.log(featureList);
    

    return (

        <section className='w-full m-auto bg-gray'>
            <h2 className='font-bold text-[50px] m-0 py-[25px] text-center'>Product Features</h2>
            <div className='grid grid-cols-3 gap-30 justify-items-center max-w-[1200px] m-auto p-5'>

                {
                    featureList && featureList.map((item) =>
                        <div className='border-1 '>
                            <img
                                className='w-[210px] bg-white rounded-32'
                                src={item.src} />
                            <p className='text-[30px] mt-[10px]'>
                                {item.desc}</p>
                        </div>


                    )
                }


                {/* <div>
                    <img className='w-[210px] h-auto bg-white rounded-[25px] object-contain'
                        src="/images/detail/bounce/feature/1.png" />
                    <p className='text-[30px] mt-[10px] text-center'>
                        6.5m
                        <br />
                        낙하 테스트 통과
                    </p>
                </div>
                <div>
                    <img
                        className='w-[210px]'
                        src="/images/detail/bounce/feature/1.png" />
                    <p className='text-[30px] mt-[10px]'>
                        6x
                        <br />
                        MIL-STD-810G
                    </p>
                </div>
                <div>
                    <img
                        className='w-[210px]'
                        src="/images/detail/bounce/feature/1.png" />
                    <p className='text-[30px] mt-[10px]'>
                        카메라 컨트롤 버튼에
                        <br />
                        부드러운 액세스
                    </p>
                </div>
                <div>
                    <img
                        className='w-[210px]'
                        src="/images/detail/bounce/feature/1.png" />
                    <p className='text-[30px] mt-[10px]'>
                        TessLock™
                        <br />
                        소재
                    </p>
                </div>
                <div>
                    <img
                        className='w-[210px]'
                        src="/images/detail/bounce/feature/1.png" />
                    <p className='text-[30px] mt-[10px]'>
                        무선 충전 및
                        <br />
                        맥세이프 호환
                    </p>
                </div> */}
            </div>
        </section>
    );
}
