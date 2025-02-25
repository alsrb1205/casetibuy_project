import React from 'react';

export default function DetailTopLeft() {
    return (
        <div className="relative flex-1">
            <div className="flex flex-col gap-17">
                <div className="relative flex w-full">
                    <img
                        src="/images/1.webp"
                        alt=""
                        className="w-[83.2%] h-auto object-cover justify-center mx-auto"
                    />
                </div>
                <div className="grid grid-cols-2 gap-17">
                    <img
                        src="/images/2.webp"
                        alt=""
                        className="object-cover w-[98%] h-auto"
                    />
                    <img
                        src="/images/3.png"
                        alt=""
                        className="object-cover w-[98%] h-auto"
                    />
                </div>
                <div className="grid grid-cols-2 gap-17">
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
                <div className="grid grid-cols-2 gap-17">
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

