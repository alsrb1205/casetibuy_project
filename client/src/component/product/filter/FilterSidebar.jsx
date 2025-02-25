import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterSubcategories from './FilterSubcatogories.jsx';
export default function FilterSidebar({ onFilterApply }) {

    const [isOpen, setIsOpen] = useState(false);
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


    // 스크롤 함수
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = "auto";   
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);




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

            {/* 화면 필터 */}
                <button 
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 p-2 rounded"
                >
                    <span>필터</span>
                </button>

            {/* 화면 오버레이 수정 중 */} 
                {/* {isOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm "
                        onClick={() => setIsOpen(false)}
                    />
                )} */}

            {/* ======================================================== */}
            
            {/* 필터 사이드바창 */}


                {/* 필터 사이드바창 css */}
                <div 
                    className={`fixed top-0 left-0 w-[380px] h-screen 
                                bg-[#E8e8e8] shadow-lg z-[101] transform transition-transform 
                                duration-300 rounded-r-[28px] overflow-y-auto
                        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                        
                >

            {/******** Header ********/}

                {/* 타이틀, 닫기 */}
                <div className="flex items-center justify-center p-4">

                    {/* 필터 타이틀 (선택한 카테고리명 표시) */}
                    <h2 className="text-lg font-semibold">
                        {selectedCategoryName}
                    </h2>

                    {/* 닫기 버튼 */}
                    <button onClick={() => setIsOpen(false)}
                            className="text-[12px] underline text-[#8b8b8b] absolute right-4"
                    >
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