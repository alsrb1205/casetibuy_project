import React, { useContext, useEffect, useState } from "react";
import DetailTopLeft from "../component/detail/DetailTopLeft";
import DetailTopRight from "../component/detail/DetailTopRight";
import ProductFeatures from "../component/detail/ProductFeature";
import ProductInfo from "../component/detail/ProductInfo";
import { DetailContext } from "../context/DetailContext";
import axios from "axios";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useDetail } from "../hooks/useDetail";
import { useCart } from "../hooks/useCart.js";
import Review from "../component/detail/Review";
import { CartContext } from "../context/CartContext.js";
import { AuthContext } from "../context/AuthContext.js";

export default function DetailProduct() {
  const navigate = useNavigate();
  const { saveToCartList, updateCartList } = useCart();
  const { isLoggedIn } = useContext(AuthContext);
  const { cartList } = useContext(CartContext);
  const { pid } = useParams();
  const {
    detail,
    setDetail,
    activeColor,
    activeCase,
    setActiveCase,
    setActiveColor,
    currentCase,
  } = useContext(DetailContext);
  const { parseCaseAndColor } = useDetail();
  const { state } = useLocation();

  useEffect(() => {
    if (state?.activeCase) setActiveCase(state.activeCase);
    if (state?.activeColor) setActiveColor(state.activeColor);
  }, [state, setActiveCase, setActiveColor]);

  useEffect(() => {
    axios
      .post("http://localhost:9000/product/detail", { pid: pid })
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, [pid]);

  const detailImage = detail.image || [];
  const filteredImages = detailImage.filter((imgPath) => {
    const { caseType, color } = parseCaseAndColor(imgPath);
    return caseType === activeCase && color === activeColor;
  });

  const filteredImagesFirst = filteredImages[0];

  const addCartItem = async () => {
    if (isLoggedIn) {
      //장바구니 추가 항목 : { pid, size, qty }
      const cartItem = {
        name: detail.name,
        pid: detail.pid,
        color: activeColor,
        image: filteredImagesFirst,
        price: currentCase.price,
        cname: currentCase.cname,
        qty: 1,
        caseType: activeCase ?? "기본 케이스",
      };
      const findItem =
        cartList &&
        cartList.find(
          (item) =>
            item.pid === detail.pid &&
            item.caseType === activeCase &&
            item.color === activeColor
        );

      if (findItem !== undefined) {
        //qty+1 업데이트
        const result = updateCartList(findItem.cid, "increase");
        result && alert("장바구니에 추가되었습니다.");
      } else {
        //새로 추가
        const id = localStorage.getItem("user_id"); // <<< 지혜 / 추가 >>>
        const formData = { id: id, cartList: [cartItem] };
        const result = await saveToCartList(formData);
        result && alert("장바구니에 추가되었습니다.");
      }
    } else {
      const select = window.confirm(
        "로그인 서비스가 필요합니다. \n로그인 하시겠습니까?"
      );
      if (select) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="flex flex-col items-center bg-detailbg">
      <div className="detailpage max-w-[1382px] m-32 pt-66">
        <div className="flex gap-32">
          {/* 왼쪽 콘텐츠 */}
          <DetailTopLeft detail={detail} filteredImages={filteredImages} />
          {/* 오른쪽 콘텐츠 (sticky) */}
          <DetailTopRight
            detail={detail}
            addCartItem={addCartItem}
            detailImage={detailImage}
            filteredImages={filteredImages}
          />
        </div>
      </div>
      <ProductFeatures />
      <ProductInfo />
      <Review />
    </div>
  );
}
