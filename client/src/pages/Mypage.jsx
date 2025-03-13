import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faGear,
  faArrowRightFromBracket,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";
import { CartContext } from "../context/CartContext.js";
import SeriesItem from "../component/product/SeriesItem.jsx";
import Settings from "./Settings.jsx";
import OrderList from "../component/OrderList.jsx";

export default function Mypage() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { setCartList } = useContext(CartContext);
  const navigate = useNavigate();
  
  // 상태로 활성 메뉴("order" 또는 "settings")를 관리합니다.
  const [activeMenu, setActiveMenu] = useState("order");

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
  

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  
  return (
    <div className="w-[1200px] m-auto flex gap-10 bg-white mt-66">
      {/* 네비게이션 */}
      <nav className="h-full px-8 py-16 rounded-15 w-[300px] bg-graynav">
        <ul className="flex flex-col gap-5">
          <li
            onClick={() => handleMenuClick("order")}
            className={`flex gap-5 px-20 py-10 rounded-full cursor-pointer transition-colors  ${
              activeMenu === "order" ? "bg-black text-white" : " text-black"
            }`}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className={`w-20 h-20 ${activeMenu === "order" ? "text-white" : "text-black"}`}
            />
            주문
          </li>
          <li
            onClick={() => handleMenuClick("settings")}
            className={`flex gap-5 px-20 py-10 rounded-full cursor-pointer transition-colors  ${
              activeMenu === "settings" ? "bg-black text-white" : " text-black"
            }`}
          >
            <FontAwesomeIcon
              icon={faGear}
              className={`w-20 h-20 ${activeMenu === "settings" ? "text-white" : "text-black"}`}
            />
            설정
          </li>
          <li className="flex gap-5 px-20 py-10 rounded-full cursor-pointer">
            <button onClick={handleLogout} className="flex items-center w-full gap-5">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="w-20 h-20"
              />
              로그아웃
            </button>
          </li>
        </ul>
      </nav>

      {/* 콘텐츠 영역 */}
      {/* <div className="w-full p-8">
        {activeMenu === "order" && <OrderList />}
        {activeMenu === "settings" && <Settings />}
      </div>     */}
      {/* 콘텐츠 영역 */}
      <div className="w-full p-8 border">
        {activeMenu === "order" && (
          <>
            <h2 className="font-bold text-32 mb-30">주문</h2>
            <div className="flex gap-10 mb-10">
              <span className="px-20 py-10 text-white bg-black border rounded-full">
                모든 주문
              </span>
              <span className="px-20 py-10 border rounded-full">출고 완료</span>
            </div>
            {/* 이 밑에 orderlist로 어쩌구 해야됨 */}
            <div className="px-24 pt-32 pb-40 border rounded-20 border-grayhborder">
              <ul className="flex flex-col gap-10">
                <li className="flex items-center justify-between">
                  <span>
                    주문 현황 : <span className="font-bold">Shipped</span>
                  </span>
                  <span className="flex items-center">
                    <span className="p-2 mr-5 bg-sky text-blue text-10">포인트</span>
                    <span className="text-blue">적립 완료</span>
                    <FontAwesomeIcon icon={faAngleRight} className="ml-20" />
                  </span>
                </li>
                <li>
                  <span className="text-grayph">주문 번호</span>
                  <span>5220417</span>
                </li>
                <li>
                  <span className="text-grayph">소계</span> 
                  <span>$64.00 USD</span>
                </li>
                <li>
                  <span className="text-grayph">주문 일자</span>
                  <span>19 Dec 2020</span>
                </li>
              </ul>
              <div className="flex gap-10 mt-20 border">
              </div>
            </div>
          </>
        )}
        {activeMenu === "settings" && (
          <>
            <h2 className="font-bold text-32 mb-30">설정</h2>
            <div className="px-24 pt-32 pb-40 border rounded-20 border-grayhborder">
              <p>여기는 설정 관련 내용이 표시됩니다.</p>
            </div>
          </>
        )}
      </div>
      </div>
  );
} 