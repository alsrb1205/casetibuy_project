import React, { useContext } from 'react';
import { ReviewContext } from '../context/ReviewContext';
import axios from 'axios';
import useOrder from './useOrder';

export default function useReview() {
      const {rating, setRating, comment, setComment} = useContext(ReviewContext);
      const{orderList,getOrderList} = useOrder();


    const reviewSubmit = async(e) => {
        e.preventDefault();
        await getOrderList();




        // 여기서 rating과 comment를 백엔드에 전송하거나 로직을 처리한다.
        const sendData = {
          order_id: orderList.order_Id,       // 주문 번호 (예: 주문 상세 페이지나 주문 context에서 가져옴)
          pid: orderList.product_id,          // 상품 아이디 (예: detail.pid 등)
          member_id: orderList.member_id,       // 로그인한 회원의 아이디 (예: localStorage 또는 AuthContext에서 가져옴)
          color: orderList.color,      // 상품의 색상 정보
          case: orderList.case,        // 상품의 케이스 타입
          rating: rating,          // 평점
          comment: comment         // 리뷰 내용
        };
      
        axios
        .post('http://localhost:9000/review/new', sendData)
        .then(res => {
          if (res.data.result_rows === 1) {
            alert("리뷰가 등록되었습니다.");
            // navigate('/all')
          } else {
            alert("리뷰 등록 실패");
          }}).catch(err => {
            alert("리뷰 등록 실패");
            console.log(err)
          });
        console.log("리뷰 제출:", sendData);
        return sendData;
      };


    return {
        reviewSubmit
    };
}

