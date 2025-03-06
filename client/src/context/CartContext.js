import { createContext, useContext, useState, useEffect } from "react";

// Context 생성
const CartContext = createContext();

// Context Provider 컴포넌트
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // 장바구니 아이템
  const [isCartOpen, setIsCartOpen] = useState(false); // 사이드바 상태
  const [cartCount, setCartCount] = useState(0); // 장바구니 개수

  //  장바구니 개수 업데이트
  useEffect(() => {
    setCartCount(cartItems.reduce((total, item) => total + item.qty, 0));
  }, [cartItems]);

  // 장바구니 상태 확인
  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.pid === newItem.pid &&
          item.color === newItem.color &&
          item.case === newItem.case
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.pid === newItem.pid &&
          item.color === newItem.color &&
          item.case === newItem.case
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...newItem, qty: 1 }];
      }
    });

    console.log("🛒 장바구니 상품 목록:", cartItems);
  };

  // 수량 증가 함수
  const increaseQty = (pid, color, caseType) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.pid === pid && item.color === color && item.case === caseType
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // 수량 감소 함수 (특정 상품만 감소)
  const decreaseQty = (pid, color, caseType) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.pid === pid && item.color === color && item.case === caseType
            ? { ...item, qty: Math.max(item.qty - 1, 1) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // 장바구니 열기/닫기
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        isCartOpen,
        toggleCart,
        cartCount,
        addToCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Context 사용을 쉽게 하기 위한 커스텀 훅
export const useCart = () => {
  return useContext(CartContext);
};
