import React from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { useCart } from "../../context/CartContext.js";

export default function CartHeader({ cartCount }) {
  const { toggleCart } = useCart();

  return (
    <div className="flex items-center p-10 mt-10 rounded-15 bg-gray2 bg-yellow">
      <button onClick={toggleCart}>
        <CiCircleChevLeft size={42} />
      </button>
      <h2 className="absolute flex items-center gap-5 text-lg font-bold -translate-x-1/2 left-1/2">
        카트
        <div className="relative w-20 h-20 bg-black rounded-full">
          <span className="absolute text-white text-12 left-7 top-6">
            {cartCount}
          </span>
        </div>
      </h2>
    </div>
  );
}
