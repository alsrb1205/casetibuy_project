import React, { useContext, useEffect } from 'react';
import DetailTopLeft from '../component/detail/DetailTopLeft';
import DetailTopRight from '../component/detail/DetailTopRight';
import ProductFeatures from '../component/detail/ProductFeature';
import ProductInfo from '../component/detail/ProductInfo';
import { DetailContext } from '../context/DetailContext';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { useDetail } from '../hooks/useDetail';

export default function DetailProduct() {
  const { pid } = useParams();
  const { detail, setDetail, activeColor, activeCase, setActiveCase, setActiveColor } = useContext(DetailContext);
  const { parseCaseAndColor } = useDetail();
  const { state } = useLocation();
  useEffect(() => {
    if (state?.activeCase) setActiveCase(state.activeCase);
    if (state?.activeColor) setActiveColor(state.activeColor);
  }, [state, setActiveCase, setActiveColor]);

console.log(activeCase);

  useEffect(() => {
    axios.post('http://localhost:9000/product/detail', { "pid": pid })
      .then(res => setDetail(res.data))
      .catch(err => console.log(err));
  }, [pid])

  const detailImage = detail.image || [];
  const filteredImages = detailImage.filter(imgPath => {
    const { caseType, color } = parseCaseAndColor(imgPath);
    return caseType === activeCase && color === activeColor;
  });

  const addCartItem = () => {
    // if (isLoggedIn) {
    //장바구니 추가 항목 : { pid, size, qty }
    const cartItem = { pid: detail.pid, kinds: detail.kinds, color: activeColor, case: activeCase, qty: 1 };
    // cartItem에 있는 pid, size를 cartList(로그인 성공시 준비)의 item과 비교해서 있으면 qty+1 없으면 새로 추가
    // some --> boolean, find --> item요소
    const formData = { "cartList": [cartItem] }
    console.log(formData);

    return formData;
    // } else {
    //   window.confirm("로그인이 필요한 서비스입니다. 로그인 하시겠습니까?") && navigate('/login');
    // }
  };

  return (
    <div className='flex flex-col items-center'>
      <div className="detailpage max-w-[1382px] m-32 bg-detailbg">
        <div className="flex gap-32">
          {/* 왼쪽 콘텐츠 */}
          <DetailTopLeft detail={detail} filteredImages={filteredImages} />
          {/* 오른쪽 콘텐츠 (sticky) */}
          <DetailTopRight detail={detail} addCartItem={addCartItem} detailImage={detailImage} filteredImages={filteredImages} />
        </div>
      </div>
      <ProductFeatures />
      <ProductInfo />
    </div>
  );
}
