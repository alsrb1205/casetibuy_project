import { useCart } from "../context/CartContext";
import { CiCircleChevLeft } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";

const Cart = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 px-16`}
    >
      {/* top */}
      <div className="flex items-center p-10 mt-10 rounded-15 bg-gray2">
        <button onClick={toggleCart}>
          <CiCircleChevLeft size={42} />
        </button>
        <h2 className="absolute flex items-center gap-5 text-lg font-bold -translate-x-1/2 left-1/2">
          카트
          <div className="relative w-20 h-20 bg-black rounded-full">
            <span className="absolute text-white text-12 left-7 top-6">1</span>
          </div>
        </h2>
      </div>

      <p className="mt-8 text-center text-12">
        모든 주문 <span className="text-red-600">일반 배송 무료!</span>
      </p>

      {/* 장바구니 삭제 */}
      <div className="flex items-center justify-end">
        <button className="p-8 rounded-full bg-graynav text-12">
          제거하기
        </button>
      </div>

      {/* 담은 상품 정보 */}
      <div className="flex gap-10 p-16 mt-8 bg-gradient-to-b from-[hsla(0,0%,93%,0)] to-[#eee]">
        <div>
          <img
            src="https://cdn-stamplib.casetify.com/cms/image/028b77299cd8ef52e1fc1f8df9c7e937.jpg"
            alt="치이카와패키지"
            className="w-full rounded-10"
          />
        </div>
        <div className="flex flex-col items-start gap-12">
          <p className="font-light text-14">
            Chiikawa Special Set - Grip Stand & Snappy Wallet & AirPods Pro &
            Watch Band 38mm/40mm/41mm/42mm(Series 10) & iPhone 16 Pro Max
          </p>
          <p className="font-light text-grayph text-12">Special Set</p>
          <p className="font-light text-grayph text-12">색상: Multi</p>
          <div className="flex items-center gap-8 p-10 border rounded-full">
            <button type="button">
              <HiOutlineMinus size={20} />
            </button>
            <input
              type="text"
              value="1"
              className="pt-4 text-center bg-transparent px-11 w-44 h-18"
            />
            <button type="button">
              <GoPlus size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* summary */}
      <div className="flex flex-col gap-10 my-16 text-14">
        <div className="flex justify-between">
          <p>소계</p>
          <p>￦307,000</p>
        </div>
        <div className="flex justify-between">
          <p>배송비</p>
          <div className="flex items-center justify-center gap-10">
            <span className="px-12 py-4 border rounded-full text-12 text-orange border-orange">
              무료 배송
            </span>
            <p>￦0</p>
          </div>
        </div>
        <div className="my-16 border border-graynav"></div>
        <div className="flex justify-between font-bold text-20">
          <p>총</p>
          <p>￦307,000</p>
        </div>
      </div>

      {/* payment */}
      <div className="flex flex-col items-center gap-16 py-16 text-12">
        <p>Free Shipping Worldwide</p>
        <ul className="flex gap-20">
          <li className="px-3 py-2 border rounded-6 border-graynav">
            <img
              src="https://cdn-stamplib.casetify.com/cms/image/1f5b660ecb6d0e53919809f6df67c8e8.svg"
              alt="visa"
            />
          </li>
          <li className="px-3 py-2 border rounded-6 border-graynav">
            <img
              src="https://cdn-stamplib.casetify.com/cms/image/47e8945cc56c62551afc38388a3eb372.svg"
              alt="master"
            />
          </li>
          <li className="px-3 py-2 border rounded-6 border-graynav">
            <img
              src="https://cdn-stamplib.casetify.com/cms/image/b51baf6cb955ed8cffdfb34fd2c37afe.svg"
              alt="amex"
            />
          </li>
          <li className="px-3 py-2 border rounded-6 border-graynav">
            <img
              src="https://cdn-stamplib.casetify.com/cms/image/45e398af85526b72f8ab70e323706650.svg"
              alt="apple pay"
            />
          </li>
          <li className="px-3 py-2 border rounded-6 border-graynav">
            <img
              src="https://cdn-stamplib.casetify.com/cms/image/784a444c11b36187118025083d1781fb.svg"
              alt="kakao pay"
            />
          </li>
        </ul>
        <p className="text-10">사용 가능한 결제 방법</p>
      </div>

      {/* guaranteed */}
      <div className="flex flex-col items-center gap-20 px-32 py-32">
        <div>
          <img
            src="https://cdn-stamplib.casetify.com/cms/image/9523e96c55b15e2e8ff379057cfe837e.png"
            alt="mark"
          />
        </div>
        <p className="font-bold">100% 만족 보장</p>
        <p className="text-center text-10 text-grayph">
          케이스티파이는 "10일 이내 무조건 교환 및 반품" 정책과 "6개월 제품
          보증" 정책을 제공합니다.
          <span className="text-black underline">문의하기</span>
          또는 <span className="text-black underline">더 알아보기</span>.
        </p>
      </div>

      {/* bottom */}
      <div className="absolute bottom-0 left-0 w-full px-16 pt-4 pb-18">
        <div className="flex justify-between text-14">
          <span>1 Items</span>
          <span>총 ￦307,000</span>
        </div>
        <button className="w-full px-20 mt-4 text-white bg-black rounded-full py-15">
          결제하기
        </button>
      </div>
      {/* <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">장바구니가 비어있습니다.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-2 border-b"
              >
                <span>{item.name}</span>
                <button onClick={() => removeFromCart(item.id)}>❌</button>
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
};

export default Cart;
