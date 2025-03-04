import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faGear,
  faArrowRightFromBracket,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import HomeProduct from "../component/home/HomeProduct";

export default function Mypage() {
  return (
    <div className="w-[1200px] m-auto border flex gap-10 bg-white">
      {/* 네비게이션 */}
      <nav className="h-full px-8 py-16 border rounded-15 w-[300px] bg-graynav">
        <ul className="flex flex-col gap-5 ">
          <li className="flex gap-5 px-20 py-10 text-white bg-black border rounded-full">
            <FontAwesomeIcon
              className="w-20 h-20 text-white"
              icon={faCartShopping}
            />
            주문
          </li>
          <li className="flex gap-5 px-20 py-10">
            <FontAwesomeIcon className="w-20 h-20" icon={faGear} />
            설정
          </li>
          <li className="flex gap-5 px-20 py-10">
            <FontAwesomeIcon
              className="w-20 h-20"
              icon={faArrowRightFromBracket}
            />
            로그아웃
          </li>
        </ul>
      </nav>

      {/* 주문 페이지 */}
      <div className="w-full border">
        <h2 className="font-bold text-32 mb-30">주문</h2>

        <div className="flex gap-10 mb-10">
          <span className="px-20 py-10 text-white bg-black border rounded-full">
            모든 주문
          </span>
          <span className="px-20 py-10 border rounded-full">출고 완료</span>
        </div>

        <div className="px-24 pt-32 pb-40 border rounded-20 border-grayhborder">
          <ul className="flex flex-col gap-10">
            <li className="flex items-center justify-between">
              <span>
                주문 현황 : <span className="font-bold">Shipped</span>
              </span>
              <span>
                <span className="p-2 mr-5 bg-sky text-blue text-10">
                  포인트
                </span>
                <span className="text-blue">적립 완료</span>
                <FontAwesomeIcon icon={faAngleRight} className="ml-20" />
              </span>
            </li>
            <li>
              <span className="text-grayph">주문 번호</span>
              <span>5220417</span>
            </li>
            <li>
              <span className="text-grayph">소계</span> <span>$64.00 USD</span>
            </li>
            <li>
              <span className="text-grayph">주문 일자</span>
              <span>19 Dec 2020</span>
            </li>
          </ul>
          <div className="flex gap-10 border">
            <HomeProduct
              image="https://cdn-image02.casetify.com/usr/4787/34787/~v11/33263431_pouch__color_black_16006701.png.560x560-w.m80.webp"
              description="Chiikawa Sunglass Earbuds Pouch"
              bgColor="blue"
            />
            <HomeProduct
              image="https://cdn-image02.casetify.com/usr/4787/34787/~v1141/33530665_iphone-16-pro-max__color_white-titanium_16007135.png.560x560-w.m80.webp"
              description="Chiikawa Luggage Sticker Case"
              bgColor="green"
            />
            <HomeProduct
              image="https://cdn-image02.casetify.com/usr/4787/34787/~v1141/33530665_iphone-16-pro-max__color_white-titanium_16007135.png.560x560-w.m80.webp"
              description="Chiikawa Luggage Sticker Case"
              bgColor="orange"
            />
            <HomeProduct
              image="https://cdn-image02.casetify.com/usr/4787/34787/~v1141/33530665_iphone-16-pro-max__color_white-titanium_16007135.png.560x560-w.m80.webp"
              description="Chiikawa Luggage Sticker Case"
              bgColor="yellow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
