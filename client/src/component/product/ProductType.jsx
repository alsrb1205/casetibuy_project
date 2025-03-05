import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Classify from './Classify.jsx';
import ProductList from './ProductList.jsx';
// import FilterSelected from './filter/FilterSelected.jsx';
import FilterSidebar from './filter/FilterSidebar.jsx';
import { PListContext } from '../../context/PListContext.js';

export default function ProductType() {

    const [isOpen, setIsOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [layoutType, setLayoutType] = useState(4);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [icons, setIcons] = useState([]);
    const [selectedLayout, setSelectedLayout] = useState(4); 
    const {productList} = useContext(PListContext);


    // json 
    useEffect(() => {
        axios.get('/data/icons.json')
            .then(res => setIcons(res.data.layoutIcons))
            .catch(error => console.error('아이콘 데이터를 불러오는 중 오류 발생:', error));
    }, []);

    // 함수
    const applyFilter = (data, type, category) => {
        let filtered = data;
        if (category) {
            filtered = filtered.filter(product => product.category === category);
        }
        setFilteredProducts(filtered);
    };

    const handleLayoutChange = (type) => {
        setLayoutType(type);
        setSelectedLayout(type); 
        applyFilter(productList, type, selectedCategory);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        applyFilter(productList, layoutType, category);
    };

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

    return (
        <>
            <div className=''>
            {/* 스크롤시 타이틀바 고정 css */}
            <div className='top-0 w-full p-4 bg-white bg-opacity-80 backdrop-blur-sm '>
            {/* ======================================================== */}
                {/* 타이틀바 */}
                    <div className='flex bg-[#fecad6] 
                                    rounded-16 justify-between 
                                    w-full md:min-h-84
                                    items-center p-20
                                    mb-2 min-h-66
                                    h-full content-center
                                                    
                    '>
                        {/* 제목 */} 
                            <div className=''>
                                <span className='text-16 font-extrabold 
                                                 leading-1.2 flex 
                                                 gap-2
                                                 md:text-32
                                '>
                                    전 상품
                                </span>
                            </div>
                    {/* ======================================================== */}
                        {/* 타이틀바 버튼 */}
                        <div className='flex gap-12 '>

                            {/* 필터 버튼 */}
                            <div className=''>
                                <FilterSidebar />
                            </div>
                                
                            {/* 이미지 버튼 */}  
                            <div>
                                <div className="flex gap-10 p-3 border-2 border-solid border-[#000000] rounded-full">
                                    {icons.map((icon) => (
                                        <div
                                            key={icon.type}
                                            className={`cursor-pointer p-6 rounded-[34px] ${
                                                selectedLayout === icon.type ? 'bg-[#000000] text-[#fecad6]' : ''
                                            }`}
                                            onClick={() => handleLayoutChange(icon.type)}
                                        >
                                            <div dangerouslySetInnerHTML={{ __html: icon.svg.replace(/className=/g, "class=") }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>  
                {/* ======================================================== */}
                    </div> {/* 타이틀바 */}
                {/* ======================================================== */}
                {/* 분류 버튼 */}
                <div className="">
                    <Classify onCategoryChange={handleCategoryChange} />
                </div>

                
            </div> {/* 고정 Header */}
                {/* ======================================================== */}
                {/* ======================================================== */}
                {/* ======================================================== */}
                {/* ======================================================== */}
                {/* 필터링된 상품 이미지 배열 리스트 */}
                <div className=''>
                    <ProductList productList={productList} layoutType={layoutType} />
                </div>


            </div>
        </>
    );
}