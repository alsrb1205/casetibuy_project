import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Footer() {
  const [footMenu, setFootMenu] = useState([]);

  useEffect(() => {
    axios
      .get("/data/menu.json")
      .then((res) => setFootMenu(res.data))
      .catch((error) => console.log(error));
  }, []);

  const firstCategory = footMenu.length > 0 ? footMenu[0].category : "";
  const firstItems = footMenu.length > 0 ? footMenu[0].items : [];

  return (
    <footer className="text-white footer">
      {/* footer-top */}
      <div className="footer-top">
        <div className="leading-[2] pl-[32px] pr-[32px] pt-[24px]">
          <div className="flex gap-10 justify-start pt-[20px] pb-[20px]">
            <div className="mr-20">
              <h2 className="pb-3">{firstCategory}</h2>
              <ul className="flex gap-5">
                {firstItems.map((item, index) => (
                  <li key={index} className="sns">
                    <img src={item} alt="" />
                  </li>
                ))}
              </ul>
            </div>
            <>
              {footMenu &&
                footMenu.slice(1, -1).map((section, index) => (
                  <div key={index}>
                    <h3>{section.category}</h3>
                    <ul>
                      {section.category === "기종"
                        ? section.items.map((device, deviceIndex) => (
                            <li key={deviceIndex}>
                              <strong>{device.brand}</strong>
                              <ul>
                                {device.models.map((model, modelIndex) => (
                                  <li key={modelIndex}>{model}</li>
                                ))}
                              </ul>
                            </li>
                          ))
                        : section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                    </ul>
                  </div>
                ))}
            </>
          </div>
        </div>
        {/* <div className="text-white pl-[20px] pr-[20px] pt-[22px] pb-[24px] flex justify-center">
          <ul>
            <li>{footMenu[footMenu.length - 1].items}</li>
          </ul>
        </div> */}
      </div>

      {/* footer-bottom */}
      <div className="footer-bottom">
        <div className="flex flex-col justify-center items-center text-xs border-t-[1px] border-white text-gray-400 pl-[10px] pr-[10px] pb-[22px]">
          <p>
            케이스티파이: 케이스타그램 리미티드(Casetify: Casetagram Limited) |
            케이스티파이 유한회사 (CASETiFY) | 대표: 응푸이순 웨슬리 (Wesley Ng)
          </p>
          <p>
            사업자등록번호: 580-88-02026 | 통신판매업 신고번호: 제
            2021-서울강남-03049 호
          </p>
          <p>
            주소: 서울특별시 강남구 선릉로 818 6층, 케이스티파이 CS Center:
            hello@casetify.com
          </p>
          <p>휴무: 토요일, 일요일, 공휴일 휴무</p>
        </div>
        <div className="pl-[16px] pr-[16px] pt-[20px] pb-[20px]">
          <p>개인정보 처리방침 | 약관</p>
          <p className="mt-[16px]">Copyright © 2025 CASETiFY</p>
        </div>
      </div>
    </footer>
  );
}