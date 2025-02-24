import React from 'react';
import '../../style/bar.css';

export default function Bars({ gauge }) {
  // 기본값은 보호, 무게 모두 50%로 설정
  const protectiveGauge = gauge?.protective || '50%';
  const weightGauge = gauge?.weight || '50%';

  // 보호 성능에 따른 텍스트 매핑
  const protectiveTextMapping = {
    '25%': '기본',
    '50%': '강력한',
    '75%': '초강력',
    '100%': '극강의'
  };

  // 무게에 따른 텍스트 매핑
  const weightTextMapping = {
    '25%': '매우 가벼움',
    '50%': '가벼움',
    '75%': '중간',
    '100%': '무거움'
  };

  // 매핑된 텍스트 추출
  const protectiveText = protectiveTextMapping[protectiveGauge] || protectiveTextMapping['50%'];
  const weightText = weightTextMapping[weightGauge] || weightTextMapping['50%'];

  return (
    <div className="bars grid grid-cols-2 auto-rows-[fit-content(100%)] mb-20 gap-16">
      <div>
        <div className="bartext hovered" style={{ '--gauge': protectiveGauge }}>
          <span>보호 성능: {protectiveText}</span>
        </div>
        <div className="bar hovered" style={{ '--gauge': protectiveGauge }}></div>
      </div>
      <div>
        <div className="bartext hovered" style={{ '--gauge': weightGauge }}>
          <span>무게: {weightText}</span>
        </div>
        <div className="bar bar2 hovered" style={{ '--gauge': weightGauge }}></div>
      </div>
    </div>
  );
}
