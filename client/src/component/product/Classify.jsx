import React, { useEffect, useState } from "react";
import axios from "axios";
// import ProductList from "./ProductList.jsx"

export default function Classify() {

  const [category, setCategory] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [ setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
 
  const handleItemClick = (item) => {
    
    if (selectedItem === item) {
      setSelectedItem(null);
      setProducts(allProducts); 
    } else {
      setSelectedItem(item);
      const filteredProducts = allProducts.filter((product) => product.name === item);
      setProducts(filteredProducts);
    }
  };
  return (
    <div>
      {/* 분류 버튼 */}
        <div className="
                        flex relative md:text-[16px] 
                        justify-between items-center align-middle
                        ">
          <div className="ml-auto">
            <div className="relative cursor-pointer" onClick={() => setCategory(!category)}>
              <div className="flex items-center justify-center">
                <div>
                  <span className="text-[16px] leading-[20px]">분류</span>
                </div>
                <div className="h-[20px] ml-[4px]">
                  <img
                    src="https://cdn-stamplib.casetify.com/cms/image/3188ba203ec58648d71fa5d87e536ee4.png"
                    alt=""
                    className="w-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* ======================================================== */}

      {/* 카테고리 리스트 */}
        {category && (
          <div className="absolute right-0 bg-white border-gray-500 shadow-lg w-350 rounded-20 ">
            <ul className="cursor-pointer p-15">
              {["케이스티파이 추천", "신상품", "인기"].map((item) => (
                <li
                  key={item}
                  className={`p-3 flex items-center gap-2 rounded-full transition-colors ${
                    selectedItem === item ? "bg-#F6E163" : "bg-white"
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  {/* 체크 아이콘 */}
                    <div className="flex items-center justify-center w-5 h-5">
                      {selectedItem === item && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}