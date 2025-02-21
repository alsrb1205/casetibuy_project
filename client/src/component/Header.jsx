import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="w-full bg-primary">
      <div className="relative flex justify-between items-center h-[66px] px-8">
        <div className="flex gap-5">
          {/* 메뉴 */}
          <button type="button">
            <FontAwesomeIcon icon={faBars} className="header-menu" />
          </button>
          {/* 검색 */}
          <button type="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {/* 로고 */}
        <Link to="/" className="w-[120px] h-[40px]">
          <img src="https://cdn.casetify.com/img/ui/casetify-logo.png" alt="" />
        </Link>

        <div className="flex gap-5">
          <button type="button">
            {/* 로그인 */}
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </button>
          {/* 장바구니 */}
          <button type="button">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}