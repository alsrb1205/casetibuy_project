import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faMagnifyingGlass,
    faUser,
    faCartShopping,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext.js";
import Series from "./product/Series"; // 추가: Series 컴포넌트 import

export default function Header() {
  const { toggleCart, cartCount } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSeries, setShowSeries] = useState(false); // Series 토글 상태 추가
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 확보
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
  };
  const toggleDropdown = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setIsDropdownOpen(true);
    }
  };

  const closeDropdown = () => {
      setIsDropdownOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  useEffect(() => {
    setShowSeries(false); // Series 토글 상태 초기화
  },[location])

  return (
    <>
      <div className="absolute z-30 w-full bg-transparent">
        <div className="relative flex items-center justify-between px-32 h-66">
          <div className="flex gap-20">
            {/* 메뉴 버튼: 클릭 시 Series 토글 */}
            <button type="button" onClick={() => setShowSeries(prev => !prev)}>
              <FontAwesomeIcon className="w-24 h-24 text-white" icon={faBars} />
            </button>
            {/* 검색 */}
            <button type="button">
              <FontAwesomeIcon className="w-24 h-24 text-white" icon={faMagnifyingGlass} />
            </button>
          </div>
          {/* 로고 */}
          <Link to="/" className="h-40 w-120">
            <img src="https://cdn.casetify.com/img/ui/casetify-logo.png" alt="" />
          </Link>
          <div className="flex gap-20">
            {/* 로그인/마이페이지 드롭다운 */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                {...(isLoggedIn
                  ? { onMouseOver: toggleDropdown() }
                  : { onClick: ()=>toggleDropdown() })}
              >
                <FontAwesomeIcon className="w-24 h-24 text-white" icon={faUser} />
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-[100%] right-0 bg-white rounded-15 mt-2 w-120 text-black shadow-2xl">
                  {isLoggedIn ? (
                    <>
                      <li>
                        <Link
                          to="/mypage"
                          className="block px-4 text-center py-14 hover:text-grayph text-14"
                          onClick={closeDropdown}
                        >
                          마이페이지
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleLogout();
                            closeDropdown();
                          }}
                          className="block w-full px-4 text-center py-14 hover:text-grayph text-14"
                        >
                          로그아웃
                        </button>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link
                        to="/login"
                        className="block px-4 py-2 hover:text-grayph text-14"
                        onClick={closeDropdown}
                      >
                        로그인
                      </Link>
                    </li>
                  )}
                </ul>
              )}
            </div>
            {/* Language */}
            <button>
              <FontAwesomeIcon className="w-24 h-24 text-white" icon={faGlobe} />
            </button>
            {/* 장바구니 */}
            <button type="button" onClick={toggleCart} className="relative">
              <FontAwesomeIcon className="w-24 h-24 text-white" icon={faCartShopping} />
            </button>
            <div className="w-20 h-20 pt-2 text-center text-white bg-black rounded-full">
              {cartCount}
            </div>
          </div>
        </div>
      </div>
      {/* 메뉴 버튼 토글 시 Series 컴포넌트 렌더링 */}
      {location.pathname !== "/homelist" && (
  <div
    className="w-full overflow-hidden transition-all duration-700 ease-in-out origin-top h-[355px]"
    style={{ maxHeight: showSeries ? "600px" : "0px" }}
  >
    <Series />
  </div>
)}
</>
  );
}

