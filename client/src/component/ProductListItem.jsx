import React, { useContext } from 'react';
import { DetailContext } from '../context/DetailContext';
import { useDetail } from '../hooks/useDetail';


// 상품 하나를 출력하는 컴포넌트 예시
export default function ProductListItem({ product }) {
      const {casesData } = useContext(DetailContext);
  
  // product는 DB에서 가져온 객체 (예: { pid, kinds, repImage, ... })
  const { parseCaseAndColor } = useDetail();
  // repImage에서 케이스종류 파싱 (예: "bounce")
  const { caseType } = parseCaseAndColor(product.repImage);
  // JSON에서 해당 케이스의 데이터 조회
  const caseData = casesData[caseType] || {};

  return (
    <div className="product-item">
      <img
        src={`http://localhost:9000/${product.repImage}`}
        alt="대표 이미지"
        className="rep-image"
      />
      <div className="product-info">
        <h3>{caseData.cname || "케이스"}</h3>
        <p>가격: {caseData.price ? `₩${caseData.price.toLocaleString()}` : "-"}</p>
        <p>기종: {product.kinds}</p>
      </div>
    </div>
  );
}
