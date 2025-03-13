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
import { useCart } from "../hooks/useCart.js";
import { CartContext } from "../context/CartContext.js";
import { AuthContext } from "../context/AuthContext.js";
import Series from "./product/Series"; // 추가: Series 컴포넌트 import
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

  //로그인 상태에 따라 cartCount 값 변경
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
      // 우선 메인 페이지("/")로 강제 이동
      navigate("/");
      // 짧은 지연 후에 로그아웃 상태 업데이트 및 장바구니 초기화
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
      {/* 지혜 / 추가 : 임시 */}
      {/* <div
        className="relative flex items-center justify-center bg-orangebanner p-20 
                    text-xs font-medium leading-[1.2] basis-full flex-shrink-0 overflow-hidden"
        style={{ fontFamily: 'var(--nav-font-family, "PP Pangram Sans")' }}
      >
        <p className="absolute animate-slide-left-fade">
          첫 번째 이벤트 문구입니다.
        </p>
        <p
          className="absolute animate-slide-right-fade"
          style={{ animationDelay: "3s" }}
        >
          두 번째 이벤트 문구입니다.
        </p>
      </div> */}
      <div className="absolute z-30 w-full bg-transparent">
        <div className="relative flex items-center justify-between px-32 h-66">
          <div className="flex gap-20">
            {/* 메뉴 버튼: 클릭 시 Series 토글 */}
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
            {/* 검색 */}
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
          {/* 로고 */}
          <Link to="/" className="h-40 w-120">
            <img
              src="https://cdn.casetify.com/img/ui/casetify-logo.png"
              alt=""
            />
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
                  ? { onMouseOver: toggleDropdown }
                  : { onClick: toggleDropdown })}
              >
                <FontAwesomeIcon
                  className={`w-24 h-24 ${
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
                <ul className="absolute top-[100%] right-0 rounded-15 mt-2 w-120 bg-white text-black shadow-2xl ">
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
              <FontAwesomeIcon
                className={`w-24 h-24 ${
                  showSeries
                    ? "text-black"
                    : iconColor === "white"
                    ? "text-white"
                    : "text-black"
                }`}
                icon={faGlobe}
              />
            </button>
            <div className="flex gap-2">
              {/* 장바구니 */}
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
                <div className="relative w-16 h-16 pt-2 text-center text-white bg-black rounded-full -top-10 text-12">
                  {cartCount}
                </div>
              )}
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
