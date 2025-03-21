import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch, faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { PListContext } from "../context/PListContext";
// 예시로 카메라 아이콘 추가

export default function Search({
  isSearchOpen,
  onClose,
}) {
    const {getSearch}= useProduct();
    const navigate = useNavigate();
    const {setSearchTerm}=useContext(PListContext);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const search = e.target.elements.search.value;
        const result = await getSearch(search);
        navigate("/homelist", { state: { searchResult: result } });
        setSearchTerm(search);        
        console.log("검색 결과:", result);
        // 검색 결과를 state로 함께 넘겨 /homelist 페이지에서 사용할 수 있음
        onClose();
      };
    
    if (!isSearchOpen) return null;
  return (
    <div className="absolute top-0 left-0 z-50 w-full bg-white h-66">
      {/* 상단 바 */}
      <div className="flex items-center w-full px-8 h-60">
        {/* 로고 영역 */}
        <div className="flex items-center mr-8">
        <Link
         to="/" 
         className="w-100"
         onClick={onClose}
        >
            <img
              src="https://cdn.casetify.com/img/ui/casetify-logo.png"
              alt="Casetify 로고"
            />
          </Link>
        </div>

        {/* 검색 폼 */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-1 h-40 px-16 bg-gray rounded-20"
        >
          <FontAwesomeIcon icon={faSearch} className="mr-8 text-gray-400" />
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="flex-1 bg-transparent focus:outline-none"
          />
        </form>

        {/* 우측 아이콘들 (예시: 이미지 검색, 카메라 아이콘, 닫기 버튼) */}
        <div className="flex items-center gap-16 ml-8">
          {/* 닫기 버튼 */}
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 text-20"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </div>
  );
}
