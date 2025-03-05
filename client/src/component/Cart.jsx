import { useCart } from "../context/CartContext";
import { IoIosArrowBack } from "react-icons/io";

const Cart = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 px-16`}
    >
      <div className="flex items-center p-10 mt-10 rounded-15 bg-gray2">
        <button onClick={toggleCart}>
          <IoIosArrowBack size={32} className="p-5 border rounded-full" />
        </button>
        <h2 className="absolute flex items-center gap-5 text-lg font-bold -translate-x-1/2 left-1/2">
          카트
          <div className="relative w-20 h-20 bg-black rounded-full">
            <span className="absolute text-white text-12 left-7 top-6">1</span>
          </div>
        </h2>
      </div>
      <div className="flex gap-10 p-16 mt-24 bg-gray2">
        <div>
          <img
            src="https://cdn-stamplib.casetify.com/cms/image/028b77299cd8ef52e1fc1f8df9c7e937.jpg"
            alt="치이카와패키지"
            className="w-full rounded-10"
          />
        </div>
        <div className="flex flex-col items-start gap-12">
          <h3>
            Chiikawa Special Set - Grip Stand & Snappy Wallet & AirPods Pro &
            Watch Band 38mm/40mm/41mm/42mm(Series 10) & iPhone 16 Pro Max
          </h3>
          <p>Special Set</p>
          <p>색상: Multi</p>
          <button className="px-40 py-10 border rounded-full">- 1 +</button>
        </div>
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
