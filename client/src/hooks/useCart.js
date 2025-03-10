import { useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartList,
    setCartList,
    cartCount,
    setCartCount,
    totalPrice,
    setTotalPrice,
    userId,
    setUserId,
  } = useContext(CartContext);

  const id = "test_user"; // 로그인 없이 테스트용 사용자 ID
  // const id = userId;

  /**
   * member에서 회원 아이디 가져오기
   */
  const fetchUserInfo = async () => {
    try {
      const response = await axios.post("http://localhost:9000/cart/info", {
        withCredentials: true,
      });
      console.log("response.data.id", response.data.id);

      setUserId(response.data.id); // 서버에서 `{ id: "user123" }` 이런 형태로 응답된다고 가정
      return response.data.id;
    } catch (error) {
      console.error("유저 정보 불러오기 실패", error);
      return "test_user"; // 실패하면 테스트 ID 사용
    }
  };

  /**
   * 장바구니 전체 리스트 조회
   */
  const getCartList = async () => {
    const result = await axios.post("http://localhost:9000/cart/items", {
      id: id,
    });
    setCartList(result.data);
    setCartCount(result.data.length);
    calculateTotalPrice(result.data);
  };

  /**
   * 장바구니 새로운 아이템 저장
   */
  const saveToCartList = async (cartItems) => {
    try {
      const formData = { id: id, cartList: cartItems }; // 로그인 없이 고정 ID 사용
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

  /**
   * 장바구니 아이템 수량 업데이트
   */
  const updateCartList = async (cid, type) => {
    const result = await axios.put("http://localhost:9000/cart/updateQty", {
      cid: cid,
      type: type,
    });
    result.data.result_rows && getCartList();
    return result.data.result_rows;
  };

  /**
   * 장바구니 전체 카운트 조회
   */
  const getCount = async () => {
    const result = await axios.post("http://localhost:9000/cart/count", {
      id: id,
    });
    setCartCount(result.data.count);
    return result.data.count;
  };

  /**
   * 장바구니 카운트 초기화
   */
  const setCount = (value) => {
    setCartCount(value);
  };

  /**
   * 장바구니 아이템 삭제
   */
  const deleteCartItem = async (cid) => {
    const result = await axios.delete("http://localhost:9000/cart/deleteItem", {
      data: { cid: cid },
    });
    result.data.result_rows && getCartList();
  };

  /**
   * 장바구니 총 주문금액 계산하기
   */
  const calculateTotalPrice = (cartList) => {
    const totalPrice = cartList.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
    setTotalPrice(totalPrice);
  };

  return {
    isCartOpen,
    toggleCart: () => setIsCartOpen((prev) => !prev),
    saveToCartList,
    getCartList,
    getCount,
    setCount,
    updateCartList,
    deleteCartItem,
    calculateTotalPrice,
    fetchUserInfo,
    userId,
  };
};