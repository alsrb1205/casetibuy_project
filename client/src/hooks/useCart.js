import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

export const useCart = () => {
  const { cartItems, setCartItems, isCartOpen, setIsCartOpen } =
    useContext(CartContext);

  // 장바구니 열기
  const openCart = () => setIsCartOpen(true);

  // 장바구니 닫기
  const closeCart = () => setIsCartOpen(false);

  return {
    cartItems,
    isCartOpen,
    openCart,
    closeCart,
  };
};
