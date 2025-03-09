import { useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const { isCartOpen, setIsCartOpen, setCartList } = useContext(CartContext);
  const testUserId = "test_user"; // 로그인 없이 테스트용 사용자 ID

  /**
   * 장바구니 전체 리스트 조회
   */
  const getCartList = async () => {
    // const id = localStorage.getItem("user_id");
    const result = await axios.post("http://localhost:9000/cart/items", {
      // id: id,
      id: testUserId,
    });
    setCartList(result.data);
    // setCartCount(result.data.length);
    // calculateTotalPrice(result.data);
  };

  /**
   * 장바구니 새로운 아이템 저장
   */
  const saveToCartList = async (cartItems) => {
    try {
      const formData = { id: testUserId, cartList: cartItems }; // 로그인 없이 고정 ID 사용
      console.log("[saveToCartList] 서버로 보낼 데이터:", formData);

      const result = await axios.post(
        "http://localhost:9000/cart/add",
        formData
      );
      console.log("[saveToCartList] 서버 응답:", result.data);

      if (result.data.result_rows) {
        getCartList(); // 장바구니 갱신
        return result.data.result_rows;
      }
    } catch (error) {
      console.error(
        "[saveToCartList] Axios 요청 실패:",
        error.response ? error.response.data : error
      );
    }
  };
  // const saveToCartList = async (formData) => {
  //   const result = await axios.post("http://localhost:9000/cart/add", formData);
  //   if (result.data.result_rows) {
  //     // setCartCount(cartCount + 1);
  //     console.log("서버로 보낼 데이터:", formData);
  //     getCartList();
  //   }
  //   return result.data.result_rows;
  // };

  return {
    isCartOpen,
    toggleCart: () => setIsCartOpen((prev) => !prev),
    saveToCartList,
    getCartList,
  };
};
