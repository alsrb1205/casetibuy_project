import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import Classify from './Classify.jsx';
import ProductList from './ProductList.jsx';
import { useDetail } from '../../hooks/useDetail.js';
import { PListContext } from '../../context/PListContext.js';
import useProduct from '../../hooks/useProduct.js';

export default function ProductType() {
  const [layoutType, setLayoutType] = useState(4);
  const [icons, setIcons] = useState([]);
  const [selectedLayout, setSelectedLayout] = useState(4);
  const [isOpen, setIsOpen] = useState(false);
  const { getProductList, filteredProducts, updateProducts, applyFilter, allProducts} = useProduct();
  const { selectList, originalProducts, setOriginalProducts } = useContext(PListContext);
  useEffect(() => {
    axios
      .get('/data/icons.json')
      .then((res) => setIcons(res.data.layoutIcons))
      .catch((error) => console.error('아이콘 데이터를 불러오는 중 오류 발생:', error));
  }, []);

  // 전체 상품 목록 가져오기 (원본 데이터)
  useEffect(() => {
    async function fetchProducts() {
      const data = await getProductList();
      if (data && data.length > 0) {
        setOriginalProducts(data);
        updateProducts(data);
      }
    }
    fetchProducts();
  }, [getProductList, updateProducts, setOriginalProducts]);


  // 1차 필터: Series(기종) 필터링을 원본 데이터 기준으로 적용
  useEffect(() => {
    if (originalProducts.length > 0) {
      const primaryFiltered =
        selectList === "all"
          ? originalProducts
          : originalProducts.filter((product) => product.kinds === selectList);
      updateProducts(primaryFiltered);
    }
  }, [originalProducts, selectList, updateProducts]);

  // 2차 필터 변경 콜백 (Classify에서 전달)
  const handleFilterChange = useCallback(
    (filterType) => {
      applyFilter(filterType);
    },
    [applyFilter]
  );

  // 레이아웃 변경 시 호출
  const handleLayoutChange = (type) => {
    setLayoutType(type);
    setSelectedLayout(type);
  };

  // 스크롤 제어: 사이드바(isOpen)가 열렸을 때만 스크롤을 숨김
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

  console.log(filteredProducts);

  return (
    <>
      <div>
        {/* 고정 Header */}
        <div className='sticky top-0 z-20 w-full px-32 pt-16 pb-8 bg-white bg-opacity-90 backdrop-blur-[10px]'>
          <div className='flex items-center justify-between w-full p-16 mb-8 bg-bgpink rounded-16'>
            <div>
              <span className='font-extrabold text-16 md:text-32'>전 상품</span>
            </div>
            <div className='flex gap-12'>
              {/* 필터 버튼 자리 (필요 시 isOpen 상태로 스크롤 제어) */}
              {/* <div>
                <FilterSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
              </div> */}
              {/* 레이아웃 변경 버튼 */}
              <div>
                <div className="flex gap-8 p-2 px-4 border-2 border-solid border-[#000000] rounded-100">
                  {icons.map((icon) => (
                    <div
                      key={icon.type}
                      className={`cursor-pointer flex justify-center items-center w-34 h-34 p-6 rounded-[34px] ${selectedLayout === icon.type ? 'bg-[#000000] text-[#fecad6]' : ''}`}
                      onClick={() => handleLayoutChange(icon.type)}
                    >
                      <div dangerouslySetInnerHTML={{ __html: icon.svg.replace(/className=/g, "class=") }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Classify 컴포넌트에서 카테고리 변경 대신 selectList를 사용하는 구조로 변경 */}
            <Classify
              productList={allProducts}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>
        <div>
          <ProductList productList={filteredProducts} layoutType={layoutType} />
        </div>
      </div>
    </>
  );
}
