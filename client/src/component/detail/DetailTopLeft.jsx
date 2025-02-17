import React from 'react';

export default function DetailTopLeft() {
    return (
        <div className="relative flex-1">
            <div className="flex flex-col gap-4 border-2 border-black">
                <div className="relative flex w-full">
                    <img
                        src="/images/1.webp"
                        alt=""
                        className="w-[80%] h-auto object-cover justify-center mx-auto"
                    />
                    <div className='absolute bottom-[16px] left-[20px] flex gap-[8px] justify-center items-center border-2 border-color-black p-[4px] pr-[10px] rounded-[100px]'>
                        <div className='w-[20px] h-[20px] rounded-[100%] bg-black'></div>
                        <span>기기컬러</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="/images/2.webp"
                        alt=""
                        className="object-cover w-full h-auto"
                    />
                    <img
                        src="/images/3.png"
                        alt=""
                        className="object-cover w-full h-auto"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="/images/4.jpg"
                        alt=""
                        className="object-cover w-full h-auto"
                    />
                    <img
                        src="/images/5.jpg"
                        alt=""
                        className="object-cover w-full h-auto"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="/images/6.jpg"
                        alt=""
                        className="object-cover w-full h-auto"
                    />
                    <img
                        src="/images/7.jpg"
                        alt=""
                        className="object-cover w-full h-auto"
                    />
                </div>
            </div>
        </div>

    );
}

