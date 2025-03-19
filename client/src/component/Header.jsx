import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../hooks/useCart.js";
import { CartContext } from "../context/CartContext.js";
import { AuthContext } from "../context/AuthContext.js";
import Series from "./product/Series"; // Series 컴포넌트 import
import { useTheme } from "../context/ThemeContext.js";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 확보
  const { cartCount, setCartList } = useContext(CartContext);
  const { toggleCart, getCount, setCount } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSeries, setShowSeries] = useState(false); // Series 토글 상태 추가
  const dropdownRef = useRef(null);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { iconColor, setIconColor } = useTheme();

  // 로그인 상태에 따라 cartCount 값 변경
  useEffect(() => {
    isLoggedIn ? getCount() : setCount(0);
  }, [isLoggedIn]);

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
  }, [dropdownRef]);

  useEffect(() => {
    setShowSeries(false); // Series 토글 상태 초기화
  }, [location]);

  // 슬라이드가 없는 페이지에서는 icon 무조건 black으로 설정
  useEffect(() => {
    const slidePages = ["/", "/home"]; // 슬라이드가 있는 페이지
    if (!slidePages.includes(location.pathname)) {
      setIconColor("black");
    }
  }, [location.pathname, setIconColor]);

  // 로그아웃 함수
  const handleLogout = () => {
    if (window.confirm("정말 로그아웃 하시겠습니까?")) {
      // 토큰 및 사용자 정보 삭제
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      navigate("/");
      setTimeout(() => {
        setIsLoggedIn(false);
        setCartList([]);
        alert("로그아웃 되었습니다.");
      }, 1000);
    }
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
  };

  return (
    <>
      {/* 상단 배너 등 다른 콘텐츠 */}
      <div className="absolute z-30 w-full bg-transparent">
        <div className="relative flex items-center justify-between px-32 h-66">
          <div className="flex gap-20">
            <button
              type="button"
              onClick={() => setShowSeries((prev) => !prev)}
            >
              <FontAwesomeIcon
                className={`w-24 h-24 ${
                  showSeries
                    ? "text-black"
                    : iconColor === "white"
                    ? "text-white"
                    : "text-black"
                }`}
                icon={faBars}
              />
            </button>
            <button type="button">
              <FontAwesomeIcon
                className={`w-24 h-24 ${
                  showSeries
                    ? "text-black"
                    : iconColor === "white"
                    ? "text-white"
                    : "text-black"
                }`}
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
          <Link to="/" className="h-40 w-120">
            <img
              src="https://cdn.casetify.com/img/ui/casetify-logo.png"
              alt=""
            />
          </Link>
          <div className="flex gap-20">
            <div
              className="relative"
              ref={dropdownRef}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                {...(isLoggedIn
                  ? { onMouseOver: toggleDropdown }
                  : { onClick: toggleDropdown })}
              >
                <FontAwesomeIcon
                  className={`w-24 h-24 py-15 ${
                    showSeries
                      ? "text-black"
                      : iconColor === "white"
                      ? "text-white"
                      : "text-black"
                  }`}
                  icon={faUser}
                />
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 text-black bg-white shadow-2xl top-50 rounded-15 w-120">
                  {isLoggedIn && location.pathname !== "/mypage" && (
                    <li>
                      <Link
                        to="/mypage"
                        className="block px-4 text-center py-14 hover:text-grayph text-14"
                        onClick={closeDropdown}
                      >
                        마이페이지
                      </Link>
                    </li>
                  )}
                  {isLoggedIn && (
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
                  )}
                  {!isLoggedIn && (
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
            <div className="flex gap-2">
              <button type="button" onClick={toggleCart} className="relative">
                <FontAwesomeIcon
                  className={`w-24 h-24 ${
                    showSeries
                      ? "text-black"
                      : iconColor === "white"
                      ? "text-white"
                      : "text-black"
                  }`}
                  icon={faCartShopping}
                />
              </button>
              {cartCount > 0 && (
                <div className="relative w-16 h-16 pt-2 text-center text-white bg-black rounded-full top-4 text-12">
                  {cartCount}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {location.pathname !== "/homelist" && (
        <div
          className="w-full h-full overflow-hidden transition-all duration-700 ease-in-out origin-top bg-opacity-90"
          style={{ maxHeight: showSeries ? "600px" : "0px" }}
        >
          <Series />
        </div>
      )}
    </>
  );
}
