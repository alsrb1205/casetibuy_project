import { createContext, useContext, useState, useEffect } from "react";

// Context 생성
const CartContext = createContext();

// Context Provider 컴포넌트
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // localStorage 데이터 불러오기
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartList"));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  // 장바구니 개수 업데이트, localStorage에 저장
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartList", JSON.stringify(cartItems));
    }
    setCartCount(cartItems.reduce((total, item) => total + item.qty, 0));

    // 총 가격 업데이트
    setTotalPrice(
      cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
    );
  }, [cartItems]);

  // 장바구니에 상품 추가하는 함수
  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.pid === newItem.pid &&
          item.color === newItem.color &&
          item.case === newItem.case
      );

      let updatedCart;
      if (existingItemIndex !== -1) {
        // 같은 상품이 있으면 qty 증가
        updatedCart = prevItems.map((item, index) =>
          index === existingItemIndex ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // 새로운 상품 추가
        updatedCart = [...prevItems, { ...newItem }];
      }

      // localStorage 저장
      localStorage.setItem("cartList", JSON.stringify(updatedCart));

      console.log("🛒 로컬스토리지 저장됨:", updatedCart);
      return updatedCart;
    });
  };

  // 상품 삭제 함수
  const removeFromCart = (pid, color, caseType) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter(
        (item) =>
          !(item.pid === pid && item.color === color && item.case === caseType)
      );

      localStorage.setItem("cartList", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // 수량 증가 함수
  const increaseQty = (pid, color, caseType) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map((item) =>
        item.pid === pid && item.color === color && item.case === caseType
          ? { ...item, qty: item.qty + 1 }
          : item
      );
      localStorage.setItem("cartList", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // 수량 감소 함수
  const decreaseQty = (pid, color, caseType) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems
        .map((item) =>
          item.pid === pid && item.color === color && item.case === caseType
            ? { ...item, qty: Math.max(item.qty - 1, 1) }
            : item
        )
        .filter((item) => item.qty > 0);

      localStorage.setItem("cartList", JSON.stringify(updatedCart)); // ✅ 변경된 데이터 저장
      return updatedCart;
    });
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
        removeFromCart,
        totalPrice,
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
