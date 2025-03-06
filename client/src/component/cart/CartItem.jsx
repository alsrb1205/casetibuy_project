import React from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";

export default function CartItem({
  cartCount,
  cartItems,
  increaseQty,
  decreaseQty,
}) {
  console.log("CartItems==>", cartItems);

  return (
    <div className="mt-8">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">장바구니가 비어있습니다.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={`${item.pid}-${item.color}-${item.case}`}
              className={`flex gap-10 -mx-16 p-16 mt-8 bg-gradient-to-b from-[hsla(0,0%,93%,0)] to-[#eee] bg-yellow`}
            >
              <div>
                <img
                  src={item.image[0]}
                  alt={item.kinds}
                  className={`w-full rounded-10`}
                />
              </div>
              <div className={`flex flex-col items-start gap-12`}>
                <p className={`font-light text-14`}>{item.kinds}</p>
                <p className={`font-light text-grayph text-12`}>{item.case}</p>
                <p className={`font-light text-grayph text-12`}>
                  색상: {item.color}
                </p>
                <div
                  className={`flex items-center gap-8 p-10 border rounded-full`}
                >
                  <button
                    onClick={() => decreaseQty(item.pid, item.color, item.case)}
                  >
                    <HiOutlineMinus size={20} />
                  </button>
                  <input
                    type="text"
                    value={cartCount}
                    className={`pt-4 text-center bg-transparent px-11 w-44 h-18`}
                  />
                  <button
                    onClick={() => increaseQty(item.pid, item.color, item.case)}
                  >
                    <GoPlus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
