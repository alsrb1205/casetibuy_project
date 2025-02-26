import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
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
          {/* 로그인 */}
          <button type="button">
            <Link to="/login">
              <FontAwesomeIcon className="w-24 h-24 text-white" icon={faUser} />
            </Link>
          </button>
          {/* Language */}
          <button>
            <FontAwesomeIcon className="w-24 h-24 text-white" icon={faGlobe} />
          </button>
          {/* 장바구니 */}
          <button type="button">
            <Link to="/cart">
              <FontAwesomeIcon
                className="w-24 h-24 text-white"
                icon={faCartShopping}
              />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
