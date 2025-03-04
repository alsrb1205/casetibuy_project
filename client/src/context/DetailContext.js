import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DetailContext = createContext();

export function DetailProvider({ children }) {
  // 기본 선택: 임팩트 케이스, 기본 색상, 기본 게이지 값
  const [activeCase, setActiveCase] = useState('impact');
  const [activeColor, setActiveColor] = useState('black');
  // JSON 전체 데이터를 저장 (케이스별 protective, weight, feature, cname, price 등)
  const [casesData, setCasesData] = useState({});

  const [gauge, setGauge] = useState({ protective: '50%', weight: '50%' });
  // hover 시 임시로 보여줄 게이지 값
  const [hoveredGauge, setHoveredGauge] = useState(null);
  // 제품 feature 정보 (선택된 케이스의 feature)

  const [feature, setFeature] = useState([]);
  const [productList,setProductList] = useState([]);
  const [detail, setDetail]= useState({});
  const currentCase = casesData[activeCase] || {}; // 선택된 케이스 데이터


  useEffect(() => {
    axios.get('/data/detail-feature.json')
      .then(res => setCasesData(res.data))
      .catch(error => console.error("Error fetching detail data", error));
  }, []);


  const value = {
    activeCase,
    setActiveCase,
    activeColor,
    setActiveColor,
    casesData,
    hoveredGauge,
    setHoveredGauge,
    feature,
    setFeature,
    gauge, 
    setGauge,
    currentCase,productList,setProductList
    ,detail,setDetail
  };

  return (
    <DetailContext.Provider value={value}>
      {children}
    </DetailContext.Provider>
  );
}
