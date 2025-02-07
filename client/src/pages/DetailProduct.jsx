import React from 'react';

export default function DetailProduct() {
    return (
        <div className='detailpage'>
            <div>
                asdsadsadsa
            </div>
            {/* <div className='top w-full flex justify-center'>
                <div className='flex gap-[100px] border-2 border-black max-w-[1382px] w-full mx-auto'>
                    <div className='flex flex-col gap-x-4 border border-blue-500 overflow-x-auto'>
                        <img src="/images/1.webp" alt="" className='' />
                        <img src="/images/2.webp" alt="" className='' />
                        <img src="/images/3.png" alt="" className='' />
                        <img src="/images/4.jpg" alt="" className='' />
                        <img src="/images/5.jpg" alt="" className='' />
                        <img src="/images/6.jpg" alt="" className='' />
                    </div>
                    <div className='border-2 border-red-900 w-[300px]'>
                        right
                    </div>
                </div>


            </div> */}
            <div className="grid grid-cols-[calc(100%-533px-32px)_533px] gap-8 max-w-[1382px] mx-auto">
                {/* 왼쪽 컨텐츠 */}
                <div className="flex flex-col gap-4 border-2 border-black p-4">
                    <div className="w-full">
                        <img src="/images/1.webp" alt="" className="w-full h-auto object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="/images/2.webp" alt="" className="w-full h-auto object-cover" />
                        <img src="/images/3.png" alt="" className="w-full h-auto object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="/images/4.jpg" alt="" className="w-full h-auto object-cover" />
                        <img src="/images/5.jpg" alt="" className="w-full h-auto object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="/images/6.jpg" alt="" className="w-full h-auto object-cover" />
                        <img src="/images/7.jpg" alt="" className="w-full h-auto object-cover" />
                    </div>
                </div>

                {/* 오른쪽 컨텐츠 */}
                <div className="border-2 border-red-900 w-[533px] self-start sticky top-0 overflow-y-auto">
                <div className="p-4 space-y-4">
                <p>Right Content 1</p>
            <p>Right Content 2</p>
            <p>Right Content 3</p>
            <p>Right Content 4</p>
            <p>Right Content 5</p>
            <p>Right Content 6</p>
            <p>Right Content 7</p>
            <p>Right Content 8</p>
            <p>Right Content 9</p>
            <p>Right Content 10</p>
        </div>
                </div>
            </div>
        </div>
    );
}
