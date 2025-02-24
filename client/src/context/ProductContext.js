import React, { createContext, useContext, useState } from 'react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  // 기본 선택: 임팩트 케이스, 검은색
  const [activeCase, setActiveCase] = useState('impact');
  const [hoveredCase, setHoveredCase] = useState(null); // hover 상태
  const [activeColor, setActiveColor] = useState('black');

  const value = { activeCase, setActiveCase, hoveredCase, setHoveredCase, activeColor, setActiveColor };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

