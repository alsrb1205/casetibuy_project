import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Classify from './Classify.jsx';
import ProductList from './ProductList.jsx';
import Series from './Series.jsx';
// import FilterSelected from './filter/FilterSelected.jsx';
import FilterSidebar from './filter/FilterSidebar.jsx';
import { PListContext } from '../../context/PListContext.js';

export default function ProductType() {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [layoutType, setLayoutType] = useState(4);
    const [icons, setIcons] = useState([]);
    const [selectedLayout, setSelectedLayout] = useState(4);
    const { productList, selectList } = useContext(PListContext);

    // json 
    useEffect(() => {
        axios.get('/data/icons.json')
            .then(res => setIcons(res.data.layoutIcons))
            .catch(error => console.error('아이콘 데이터를 불러오는 중 오류 발생:', error));
    }, []);

    // 함수
    const applyFilter = () => {
        let filtered = productList;
        if (selectList && selectList !== 'all') {
          filtered = filtered.filter(product => product.kinds === selectList);
        }
        setFilteredProducts(filtered);
      };

      const handleLayoutChange = (type) => {
        setLayoutType(type);
        setSelectedLayout(type);
        applyFilter();
      };
    
      const handleCategoryChange = (category) => {
        applyFilter();
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

    // 시리즈 변경 시 필터링 적용
    useEffect(() => {
        applyFilter();
      }, [productList, selectList, layoutType]);
      
      console.log(productList);
      

    return (
        <>
            <div className=''>
                {/* 스크롤시 타이틀바 고정 css */}
                <div className='sticky top-0 z-20 w-full px-32 pt-16 pb-8 bg-white bg-opacity-90 backdrop-blur-[10px] '>
                    {/* ======================================================== */}
                    {/* 타이틀바 */}
                    <div className='flex items-center content-center justify-between w-full h-full p-16 mb-8 bg-bgpink rounded-16 md:min-h-84 min-h-66 '>
                        {/* 제목 */}
                        <div className=''>
                            <span className='text-16 font-extrabold leading-1.2 md:text-32
                                '>
                                전 상품
                            </span>
                        </div>
                        {/* ======================================================== */}
                        {/* 타이틀바 버튼 */}
                        <div className='flex gap-12 '>
                            {/* 필터 버튼 */}
                            <div className=''>
                                {/* <FilterSidebar /> */}
                            </div>

                            {/* 이미지 버튼 */}
                            <div>
                                <div className="flex gap-8 p-2 px-4 border-2 border-solid border-[#000000] rounded-100">
                                    {icons.map((icon) => (
                                        <div
                                            key={icon.type}
                                            className={`cursor-pointer flex justify-center items-center w-34 h-34 p-6 rounded-[34px] ${selectedLayout === icon.type ? 'bg-[#000000] text-[#fecad6]' : ''
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
                <div className=''>
                    <ProductList productList={filteredProducts} layoutType={layoutType} />
                </div>
            </div>
        </>
    );
}