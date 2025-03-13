import React, { useContext } from 'react';
import { ReviewContext } from '../context/ReviewContext';
import axios from 'axios';

export default function useReview() {
      const {rating, setRating, comment, setComment} = useContext(ReviewContext);
    

    const reviewSubmit = (e) => {
        e.preventDefault();
        // 여기서 rating과 comment를 백엔드에 전송하거나 로직을 처리한다.
        const sendData = {rating, comment};
      
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

