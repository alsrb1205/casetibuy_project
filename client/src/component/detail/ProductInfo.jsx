import React, { useContext } from 'react';
import { DetailContext } from '../../context/DetailContext';

export default function ProductInfo() {
    const { activeCase, casesData } = useContext(DetailContext);
    const caseFeature = casesData[activeCase] || {}; // 선택된 케이스 데이터
    const infoList = caseFeature.info

    return (
        <div>
            {/* 바운스케이스 */}
            {
                activeCase === "bounce" ?

                    <div>
                        <div className='relative'>
                            <div>
                                <img src={infoList[0].image} alt="" />
                            </div>
                            <div className='absolute bottom-64 right-32 w-[36%] border-1 bg-white'>
                                <div>
                                    바운스 케이스
                                </div>
                                <div>
                                    2023년 뉴욕 제품 디자인<br />
                                    어워드에서 금상을 수상한<br />
                                    케이스를 소개합니다!
                                </div>
                                <div>
                                    현수교에서 영감받은 바운스 코너 디자인.<br />
                                    TesseLock™이 탑재되어, 6.5m 낙하<br />
                                    테스트를 통과해, 미 군사 등급 6배에<br />
                                    달하는 보호력을 제공합니다.
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-[2.083vw] bg-gray2 p-32 pb-0'>
                            <div className='bg-white w-[70%] rounded-[1.1vw]'>
                                <div>
                                    <img
                                        className=' rounded-t-[1.1vw]'
                                        src={infoList[1].image} alt="" />
                                </div>
                                <div>
                                    <div>
                                        바운스 케이스123
                                    </div>
                                    <div>
                                        2023년 뉴욕 제품 디자인<br />
                                        어워드에서 금상을 수상한<br />
                                        케이스를 소개합니다!
                                    </div>
                                    <div>
                                        현수교에서 영감받은 바운스 코너 디자인.<br />
                                        TesseLock™이 탑재되어, 6.5m 낙하<br />
                                        테스트를 통과해, 미 군사 등급 6배에<br />
                                        달하는 보호력을 제공합니다.
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white w-[30%] rounded-[1.1vw]'>
                                <div>
                                    바운스 케이스
                                </div>
                                <div>
                                    2023년 뉴욕 제품 디자인<br />
                                    어워드에서 금상을 수상한<br />
                                    케이스를 소개합니다!
                                </div>
                                <div>
                                    현수교에서 영감받은 바운스 코너 디자인.<br />
                                    TesseLock™이 탑재되어, 6.5m 낙하<br />
                                    테스트를 통과해, 미 군사 등급 6배에<br />
                                    달하는 보호력을 제공합니다.
                                </div>
                                <div className='overflow-hidden '>
                                    <img
                                        className='w-1000 rounded-b-[1.1vw]'
                                        src={infoList[2].image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    : ""
            }
            <div className='flex p-32 bg-gray2'>
                <div className='bg-green p-[2.083vw] w-[28%] rounded-l-[1.1vw]'>
                    <div>
                        바운스 케이스
                    </div>
                    <div>
                        2023년 뉴욕 제품 디자인<br />
                        어워드에서 금상을 수상한<br />
                        케이스를 소개합니다!
                    </div>
                    <div>
                        현수교에서 영감받은 바운스 코너 디자인.<br />
                        TesseLock™이 탑재되어, 6.5m 낙하<br />
                        테스트를 통과해, 미 군사 등급 6배에<br />
                        달하는 보호력을 제공합니다.
                    </div>
                </div>
                <div className='w-[72%]'>
                    <video
                        autoPlay
                        playsInline
                        loop
                        muted
                        className='w-full rounded-r-[1.1vw]' src="/images/detail/descdefault.mp4" />
                </div>
            </div>
        </div>

    );
}

