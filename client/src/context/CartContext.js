import { createContext, useContext, useState } from "react";

// Context 생성
const CartContext = createContext();

// Context Provider 컴포넌트
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // 장바구니 아이템
  const [isCartOpen, setIsCartOpen] = useState(false); // 사이드바 상태

  // 장바구니에 상품 추가
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // 장바구니에서 상품 삭제
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // 장바구니 열기/닫기
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isCartOpen, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Context 사용을 쉽게 하기 위한 커스텀 훅
export const useCart = () => {
  return useContext(CartContext);
};
