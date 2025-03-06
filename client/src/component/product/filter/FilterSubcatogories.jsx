import React, { useState } from "react";

export default function FilterSubcategories({ subcategories = [], onBack }) {

    const [selectedBrand, setSelectedBrand] = useState(null);


    return (

        <div className="p-1">

            {/* < 뒤로 가기 버튼 */}

            <div>
                <button className="items-center mb-2 cursor-pointer" onClick={onBack}>
                    <img
                        src="https://cdn-stamplib.casetify.com/cms/image/99672a20d2432000d0b3871c7d43887c.svg"
                        alt="뒤로 가기"
                        className=""
                    />
                </button>
            </div>

            {/* ======================================================== */}
            {/* ======================================================== */}
            {/* ======================================================== */}


            {/* 서브 카테고리 */}

            <ul className="space-y-2">



                {subcategories.map((sub, index) => (

                    <li key={index}>

                        {/* 기종 카테고리 버튼 리스트 */}

                        <div>

                            <button className="flex justify-between w-full h-[50px] text-left 
                                               p-2 mb-2 bg-gray-100 rounded-[15px] cursor-pointer"
                                onClick={() => setSelectedBrand(sub.name === "모든 기종" ? sub.name : null)}
                            >

                                {sub.name}

                                {/* 에어태그 케이스 화살표 생략 */}
                                {sub.name !== "에어태그 케이스" && (
                                    <div>
                                        <img src="https://cdn-stamplib.casetify.com/cms/image/9df716f3ea25f4fcf4f0b5d5790bca57.svg" alt="" />
                                    </div>
                                )}

                            </button>

                            {/* 모든 기종 */}
                            {selectedBrand === "모든 기종" && sub.options?.length > 0 && (
                                <ul className="pl-4">
                                    {sub.options.map((option, idx) => (
                                        <li key={idx} className="p-2 bg-gray-200 rounded-[10px] mb-1">
                                            {option.brand}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {/* ======================================================== */}
                    </li>
                ))}
            </ul> {/* 기종 카테고리 마지막 */}

            {/* ======================================================== */}

        </div>
    );
}