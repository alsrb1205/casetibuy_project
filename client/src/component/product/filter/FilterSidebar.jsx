import React, { useState, useEffect } from "react";
import axios from "axios";
// import FilterSelected from './FilterSelected.jsx';
import FilterSubcategories from './FilterSubcatogories.jsx';

export default function FilterSidebar({ onFilterApply }) {

    // const 
    const [isOpen, setIsOpen] = useState(false);
    // const [isButton, setIsButton] = useState(false);
    const [sidebar, setSidebar] = useState({ filters: [], brand: [] });
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCategoryName, setSelectedCategoryName] = useState("필터"); // 필터 제목 상태
    const [selectedFilters, setSelectedFilters] = useState([]); // 선택된 필터 저장
    const [isAllModelsSelected, setIsAllModelsSelected] = useState(false);

    // json
    useEffect(() => {
        axios.get('/data/sidebar.json') 
            .then(res => setSidebar(res.data))
            .catch(error => console.error(error));
    }, []);


    /* 필터 함수 */

    // 필터 선택 
    const handleFilterSelect = (filter) => {
          setSelectedFilters([...selectedFilters, filter]); // 선택된 필터 추가
          setIsOpen(false); // 사이드바 닫기
          onFilterApply(filter); // 상품 리스트 필터링 함수 실행
    };



    /* 필터 카테고리 함수 */

    // 카테고리 선택 시 실행되는 함수
    const handleCategorySelect = (category) => {
        if (category.name === "모든 기종") {
            setIsAllModelsSelected(true);
            // setSelectedCategory({ subcategories: sidebar.brand }); // 브랜드 리스트 출력
            setSelectedCategoryName("모든 기종");


        } else {
            setIsAllModelsSelected(false);
            setSelectedCategory(category);
            setSelectedCategoryName(category.category);
        }
    };


    /* 필터 하단 버튼 함수 */

    // 모두 지우기 버튼 함수
    // 필터 초기화  
    const resetFilters = () => {
          setSelectedFilters([]);
          setSelectedCategory(null);
          setSelectedCategoryName("필터");
          setIsAllModelsSelected(false);
    };





    /* return문 */

    return (

        <div className="">

            {/* 필터 버튼 */}
            <button 
                onClick={() => setIsOpen(true)}
                className="flex gap-8 p-8 justify-center
                            border-2 rounded-full w-85
                          ">
                    <div className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 14"
                            className="w-20 h-23 fill-current"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.4312 3.69226C14.0366 3.69226 14.5273 3.20151 14.5273 2.59614C14.5273 1.99077 14.0366 1.50002 13.4312 1.50002C12.8259 1.50002 12.3351 1.99077 12.3351 2.59614C12.3351 3.20151 12.8259 3.69226 13.4312 3.69226ZM16.0273 2.59614C16.0273 4.02994 14.865 5.19226 13.4312 5.19226C11.9974 5.19226 10.8351 4.02994 10.8351 2.59614C10.8351 1.16234 11.9974 2.15822e-05 13.4312 2.17075e-05C14.865 2.18329e-05 16.0273 1.16234 16.0273 2.59614Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.2095 3.72546C14.6802 3.47239 15.0002 2.97528 15.0002 2.40344C15.0002 2.15946 14.9419 1.92909 14.8386 1.72546H16.9997C17.552 1.72546 17.9997 2.17318 17.9997 2.72546C17.9997 3.27775 17.552 3.72546 16.9997 3.72546H14.2095ZM12.7909 3.72546H1C0.447717 3.72546 0 3.27775 0 2.72546C0 2.17318 0.447717 1.72546 1 1.72546H12.1618C12.0584 1.92909 12.0002 2.15946 12.0002 2.40344C12.0002 2.97528 12.3202 3.47239 12.7909 3.72546Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.56878 11.5957C3.96341 11.5957 3.47266 11.105 3.47266 10.4996C3.47266 9.89421 3.96341 9.40346 4.56878 9.40346C5.17415 9.40346 5.66489 9.89421 5.66489 10.4996C5.66489 11.105 5.17415 11.5957 4.56878 11.5957ZM1.97266 10.4996C1.97266 11.9334 3.13498 13.0957 4.56878 13.0957C6.00257 13.0957 7.16489 11.9334 7.16489 10.4996C7.16489 9.06579 6.00257 7.90346 4.56878 7.90346C3.13498 7.90346 1.97266 9.06579 1.97266 10.4996Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.79049 11.6289C3.3198 11.3758 2.99981 10.8787 2.99981 10.3069C2.99981 10.0629 3.05806 9.83253 3.16141 9.62891H1.0003C0.448015 9.62891 0.000299454 10.0766 0.000299454 10.6289C0.000299454 11.1812 0.448015 11.6289 1.0003 11.6289H3.79049ZM5.20913 11.6289H17C17.5523 11.6289 18 11.1812 18 10.6289C18 10.0766 17.5523 9.62891 17 9.62891H5.83821C5.94156 9.83253 5.99981 10.0629 5.99981 10.3069C5.99981 10.8787 5.67982 11.3758 5.20913 11.6289Z"
                            />
                        </svg>
                    </div>


                    <span className="text-center">필터</span>

            </button>


            {/* 화면 오버레이 수정 중 */} 
            {/* {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-[100]"
                    onClick={() => setIsOpen(false)}
                />
            )} */}


            {/* 필터 사이드바창 */}
            <div 
                className={`fixed top-0 left-0 w-380 min-h-screen
                            bg-[#E8e8e8] shadow-lg transform transition-transform 
                            duration-300 rounded-r-28 overflow-auto
                            
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

            {/******** Header ********/}

                {/* 필터 화면 */}
                <div className="flex items-center justify-center p-4">
                    {/* 필터 타이틀 (선택한 카테고리명 표시) */}
                    <h2 className="text-lg font-semibold">
                        {selectedCategoryName}
                    </h2>

                    {/* 닫기 버튼 */}
                    <button onClick={() => setIsOpen(false)}
                            className="text-[12px] underline text-[#8b8b8b] absolute right-4">
                        닫기
                    </button>
                </div>


            {/* ======================================================== */}

            {/******** Layout ********/}

                {/* 필터 카테고리 */}
                <div className="p-4">

                    {selectedCategory === null ? (
            /* ======================================================== */

                        // 필터 카테고리 목록
                        sidebar.filters?.map((filter, index) => (
                            <div key={index}>
                                <button
                                    className="flex justify-between w-full h-[50px] text-left p-2 mb-2 bg-gray-100 rounded-[15px] cursor-pointer"
                                    onClick={() => handleCategorySelect(filter)}
                                >
                                    {filter.category}

                                    {/* 화살표 */}
                                        <div>
                                            <img src="https://cdn-stamplib.casetify.com/cms/image/9df716f3ea25f4fcf4f0b5d5790bca57.svg" alt="" />
                                        </div>

                                </button>
                            </div>
                        ))

            /* ======================================================== */

                    ) : (

                        // 서브 카테고리 목록
                        <FilterSubcategories 

                        
                            // subcategories={selectedCategory.subcategories}
                            subcategories={isAllModelsSelected ? sidebar.brand : selectedCategory?.subcategories || []}
                            selectedCategory={selectedCategory} 
                            onFilterSelect={handleFilterSelect} 




                            // *******************************************
                            // 뒤로 가기 버튼
                            onBack={() => {
                                setSelectedCategory(null);
                                setSelectedCategoryName("필터"); 
                                setIsAllModelsSelected(false);
                            }} 
                            

                            
                            
                        />


                    )}

                </div>

            
            {/* ======================================================== */}

            {/******** Footer ********/}

                {/* 필터 하단 버튼 */}
                <div className="flex ">

                    {/* 모두 지우기 */}
                        <div className="p-4">
                            <button 
                                className="w-[120px] h-[50px] p-2 text-[#000] rounded-[20px] border-black border-solid border-2 hover:border-gray"
                                onClick={resetFilters}
                            >
                                모두 지우기
                            </button>
                        </div>

                    {/* 결과 보기 */}
                        <div className="p-4">
                            <button 
                                className="w-[190px] h-[50px] p-2 bg-black text-white rounded-[20px] hover:bg-opacity-70"
                            >
                                결과 보기
                            </button>
                        </div>
                        
                </div>
            
            {/* ======================================================== */}

            </div> {/* 필터 사이드바창 css 마지막 */}

        </div>
    );
}