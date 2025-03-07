import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

export default function Header() {
  // 장바구니 열기, 장바구니 개수 가져오기
  const { toggleCart, cartCount } = useCart();

  // 드롭다운 관리
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
  };

  const toggleDropdown = () => {
    if (!isLoggedIn) {
      // 로그아웃 상태일 때
      navigate("/login"); // 즉시 로그인 페이지로 이동
    } else {
      // 로그인 상태일 때
      setIsDropdownOpen(true); // 드롭다운 메뉴 토글
    }
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // 드롭다운 외부 클릭 감지
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

  return (
    <div className="relative z-30 w-full bg-transparent mt-35">
      <div className="relative flex items-center justify-between px-32 h-66">
        <div className="flex gap-20">
          {/* 메뉴 */}
          <button type="button">
            <FontAwesomeIcon className="w-24 h-24 text-white" icon={faBars} />
          </button>
          {/* 검색 */}
          <button type="button">
            <FontAwesomeIcon
              className="w-24 h-24 text-white"
              icon={faMagnifyingGlass}
            />
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
                ? { onMouseOver: toggleDropdown }
                : { onClick: toggleDropdown })}
            >
              <FontAwesomeIcon className="w-24 h-24 text-white" icon={faUser} />
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-[100%] right-0 bg-white border-none rounded-15 mt-2 w-120 text-black shadow-2xl">
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
                        className="block px-4 py-14 w-[100%] hover:text-grayph text-center text-14"
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
            <FontAwesomeIcon
              className="w-24 h-24 text-white"
              icon={faCartShopping}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
