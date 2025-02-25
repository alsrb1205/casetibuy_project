import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Classify from './Classify.jsx';
import ProductList from './ProductList.jsx';
import FilterSidebar from './filter/FilterSidebar.jsx';

export default function ProductType() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [layoutType, setLayoutType] = useState(4);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [icons, setIcons] = useState([]);
    const [selectedLayout, setSelectedLayout] = useState(4); 


    // json 
    useEffect(() => {
        axios.get('/data/products.json')
            .then(res => {
                setProducts(res.data);
                applyFilter(res.data, 4, null);
            })
            .catch(error => console.error('상품 데이터를 불러오는 중 오류 발생:', error));

        
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
        applyFilter(products, type, selectedCategory);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        applyFilter(products, layoutType, category);
    };


    return (
        <>
            <div className=''>

                {/* 고정 Header */}
                <div className='fixed top-0 z-50 w-full p-4 bg-white bg-opacity-80 backdrop-blur-sm '>

            {/* ======================================================== */}

                {/* 화면 타이틀 */}
                    <div className='flex bg-[#fecad6] 
                                    rounded-[16px] justify-between 
                                    w-full md:min-h-[84px]
                                    items-center p-[12px_16px]
                                    mb-2 min-h-[66px]
                                    h-full 
                                                    
                    '>
                        
                        {/* 타이틀 */} 
                            <div className=''>

                                <span className='text-[16px] font-extrabold 
                                                 leading-[1.2] flex 
                                                 items-center gap-2
                                                 md:text-[32px]
                                                
                                '>
                                    전 상품
                                </span>
                            </div>

                    {/* ======================================================== */}

                        {/* 버튼 */}

                            <div className='flex gap-[10px]'>

                                {/* 필터 버튼 */}

                                    <div className=''>

                                        <FilterSidebar />
                                    </div>
                                    
                                {/* 이미지 버튼 */}  
                                    <div>
                                        <div className='flex gap-[8px] p-[10px] border-2 border-solid border-[#000] rounded-[100px] items-center'>
                                            {icons.map((icon) => (
                                                <div
                                                    key={icon.type}
                                                    className={`cursor-pointer p-2 rounded-[34px] ${
                                                        selectedLayout === icon.type ? 'bg-[#000] text-[#fecad6]' : ''
                                                    }`}
                                                    onClick={() => handleLayoutChange(icon.type)}
                                                >
                                                    <div dangerouslySetInnerHTML={{ __html: icon.svg }} />
                                                </div>
                                            ))}
                                        </div>   
                                    </div>

                            </div>  

                {/* ======================================================== */}

                    </div> {/* 화면 타이틀 */}
                    
                {/* ======================================================== */}

                    {/* 분류 버튼 */}

                  <div className="">
                    <Classify onCategoryChange={handleCategoryChange} />
                  </div>

                {/* ======================================================== */}
            </div> {/* 고정 Header */}


                    {/* 필터링된 상품 이미지 배열 리스트 */}
                    <div className=''>
                        <ProductList products={filteredProducts} layoutType={layoutType} />
                    </div>


            </div>
        </>
    );
}