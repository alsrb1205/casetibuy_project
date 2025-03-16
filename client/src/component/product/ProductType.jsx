import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Classify from './Classify.jsx';
import ProductList from './ProductList.jsx';
import FilterSidebar from './filter/FilterSidebar.jsx';
import { useDetail } from '../../hooks/useDetail.js';
import { PListContext } from '../../context/PListContext.js';

export default function ProductType() {
  // 상품 전체 데이터를 저장할 로컬 state
  const [allProducts, setAllProducts] = useState([]);
  // 필터링 후 출력할 상품 목록 state
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [layoutType, setLayoutType] = useState(4);
  const [icons, setIcons] = useState([]);
  const [selectedLayout, setSelectedLayout] = useState(4);
  // 사이드바 열림 여부 (필요시 스크롤 제어에 사용)
  const [isOpen, setIsOpen] = useState(false);
  const { getProductList } = useDetail();
  // PListContext에서 필터링 기준인 selectList를 가져옴
  const { selectList } = useContext(PListContext);

  // JSON 아이콘 데이터 불러오기
  useEffect(() => {
    axios
      .get('/data/icons.json')
      .then((res) => setIcons(res.data.layoutIcons))
      .catch((error) => console.error('아이콘 데이터를 불러오는 중 오류 발생:', error));
  }, []);

  // getProductList를 통해 상품 목록을 가져와 로컬 state에 저장
  useEffect(() => {
    async function fetchProducts() {
      const data = await getProductList();
      if (data && data.length > 0) {
        setAllProducts(data);
      }
    }
    fetchProducts();
  }, [getProductList]);

  // 필터링 함수: allProducts에서 selectList에 맞게 필터링
  const applyFilter = () => {
    let filtered = allProducts;
    if (selectList && selectList !== 'all') {
      filtered = filtered.filter(product => product.kinds === selectList);
    }
    setFilteredProducts(filtered);
  };

  // 레이아웃 변경 시 호출
  const handleLayoutChange = (type) => {
    setLayoutType(type);
    setSelectedLayout(type);
  };

  // allProducts나 selectList가 변경되면 필터 재적용
  useEffect(() => {
    applyFilter();
  }, [allProducts, selectList]);

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
              <div>
                <FilterSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
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
            <Classify />
          </div>
        </div>
        <div>
          <ProductList productList={filteredProducts} layoutType={layoutType} />
        </div>
      </div>
    </>
  );
}
