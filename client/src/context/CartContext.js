import { createContext, useContext, useState, useEffect } from "react";

// Context 생성
const CartContext = createContext();

// Context Provider 컴포넌트
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // 장바구니 아이템
  const [isCartOpen, setIsCartOpen] = useState(false); // 사이드바 상태
  const [cartCount, setCartCount] = useState(0); // 장바구니 개수

  // cartItems가 변경될 때마다 cartCount 업데이트
  useEffect(() => {
    setCartCount(cartItems.reduce((total, item) => total + (item.qty || 1), 0));
  }, [cartItems]);

  // 장바구니에 상품 추가하는 함수
  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.pid === newItem.pid);
      if (existingItem) {
        return prevItems.map((item) =>
          item.pid === newItem.pid ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevItems, { ...newItem, qty: 1 }];
      }
    });
  };

  // 수량 증가 함수
  const increaseQty = (pid) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.pid === pid ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // 수량 감소 함수
  const decreaseQty = (pid) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.pid === pid
              ? { ...item, qty: Math.max(item.qty - 1, 1) }
              : item
          )
          .filter((item) => item.qty > 0) // 수량이 0이면 장바구니에서 제거
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
