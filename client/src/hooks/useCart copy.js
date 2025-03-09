import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import axios from "axios";

export const useCart = () => {
  const {
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
    setCartList,
    setCartCount,
  } = useContext(CartContext);

  // 컴포넌트가 처음 렌더링될 때 localStorage에서 장바구니 데이터 가져오기
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartList")) || [];
    setCartItems(storedCart);
  }, []);

  // ✅ 장바구니에 상품 추가하는 함수
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) =>
          cartItem.pid === item.pid &&
          cartItem.color === item.color &&
          cartItem.case === item.case
      );

      let updatedCart;
      if (existingItem) {
        updatedCart = prevItems.map((cartItem) =>
          cartItem.pid === item.pid &&
          cartItem.color === item.color &&
          cartItem.case === item.case
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      } else {
        updatedCart = [...prevItems, { ...item, qty: 1 }];
      }

      // ✅ localStorage에 저장
      localStorage.setItem("cartList", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return {
    cartItems,
    isCartOpen,
    setCartList,
    setCartCount,
  };
};
