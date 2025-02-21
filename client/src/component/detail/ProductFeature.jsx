import React from 'react';

export default function ProductFeatures() {
    return (
        <section className='w-full m-auto bg-gray'>
            <h2 className='font-bold text-[50px] m-0 py-[25px] text-center'>Product Features</h2>
            <div className='border border-red-500 grid grid-cols-3 gap-[30px] justify-items-center max-w-[1200px] m-auto p-5'>
                <div>
                    <img src="/images/Bounce_Case_Bounce_Corners.png" />
                    <p>바운스 코너</p>
                </div>
                <div>
                    <img className='w-[200px] h-auto bg-white rounded-[25px] object-contain' src="/images/detail/feature/Bounce_Case_Drop_Protection.png" />
                    <p className='text-[30px] mt-[10px]'>
                        6.5m
                        <br />
                        낙하 테스트 통과
                    </p>
                </div>
                <div>
                    <img src="/images/Bounce_Case_MIL_STD_810G.png" />
                    <p>
                        6x
                        <br />
                        MIL-STD-810G
                    </p>
                </div>
                <div>
                    <img src="/images/Camera_Control_Button.png" />
                    <p>
                        카메라 컨트롤 버튼에
                        <br />
                        부드러운 액세스
                    </p>
                </div>
                <div>
                    <img src="/images/Bounce_Case_Tesselock.png" />
                    <p>
                        TessLock™
                        <br />
                        소재
                    </p>
                </div>
                <div>
                    <img src="/images/Bounce_Case_MagSafe_Wirless_Charge.png" />
                    <p>
                        무선 충전 및
                        <br />
                        맥세이프 호환
                    </p>
                </div>
            </div>
        </section>
    );
}
