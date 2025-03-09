import React from "react";

export default function CartFooter({ totalPrice, cartCount }) {
  return (
    <div className="sticky bottom-0 left-0 w-full px-16 pt-4 bg-white pb-18">
      <div className="flex justify-between text-14">
        <span>{cartCount} Items</span>
        <span>총 ￦{totalPrice}</span>
      </div>
      <button className="w-full px-20 mt-4 text-white bg-black rounded-full py-15">
        결제하기
      </button>
    </div>
  );
}
