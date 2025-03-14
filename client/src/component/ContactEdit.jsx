import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ContactEdit() {
  // 이메일/문자메시지 체크 상태
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isSMSChecked, setIsSMSChecked] = useState(false);

  // 이메일 체크박스 토글
  const handleEmailClick = () => {
    setIsEmailChecked(!isEmailChecked);
  };

  // 문자메시지 체크박스 토글
  const handleSMSClick = () => {
    setIsSMSChecked(!isSMSChecked);
  };

  return (
    <div className="max-w-[800px] mx-auto p-16">
      {/* 상단 제목 */}
      <div className="font-bold my-30 text-32">연락처 수정</div>
      {/* 설명 문구 */}
      <div className="text-[#666] mb-16 text-14">
        케이스티파이의 뉴스, 프로모션, 제품 및 서비스에 대한 최신 정보를 수신하는 데 동의합니다.
      </div>

      {/* 이메일 체크 영역 */}
      <div
        className="flex w-full h-72 p-16 mb-4 rounded-lg cursor-pointer bg-[#f8f8f8]"
        onClick={handleEmailClick}
      >
        <div className="flex items-center gap-8">
          {/* 네모 박스 */}
          <div className="flex items-center justify-center w-20 h-20 border border-black">
            {/* 체크 아이콘: isEmailChecked가 true면 표시 */}
            {isEmailChecked && (
              <FontAwesomeIcon icon={faCheck} className="text-sm text-black" />
            )}
          </div>
          <span className="font-bold text-20">이메일</span>
        </div>
      </div>

      {/* 문자메시지 체크 영역 */}
      <div
        className="flex w-full h-72 p-16 mb-4 rounded-lg cursor-pointer bg-[#f8f8f8]"
        onClick={handleSMSClick}
      >
        <div className="flex items-center gap-8">
          {/* 네모 박스 */}
          <div className="flex items-center justify-center w-20 h-20 border border-black">
            {/* 체크 아이콘: isSMSChecked가 true면 표시 */}
            {isSMSChecked && (
              <FontAwesomeIcon icon={faCheck} className="text-sm text-black" />
            )}
          </div>
          <span className="font-bold text-20">문자 메시지(예:SMS)</span>
        </div>
      </div>

      {/* 하단 설명 문구 */}
      <div className="mt-20 mb-40 text-12 leading-relaxed text-[#666]">
        이메일 및 문자메시지를 클릭함으로써 케이스티파이
        <strong> 이용약관</strong>, <strong>CASETiFY Club 이용약관</strong>,
        <strong> 개인정보 보호정책</strong>에 동의하게 됩니다.
      </div>
    </div>
  );
}
