import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

export const useCart = () => {
  const { cartItems, setCartItems, isCartOpen, setIsCartOpen } =
    useContext(CartContext);

  return {
    cartItems,
    isCartOpen,
  };
};
