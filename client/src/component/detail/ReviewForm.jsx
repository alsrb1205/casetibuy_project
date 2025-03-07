import React, { useState } from "react";

// 별점 컴포넌트
const StarRating = ({ rating, setRating }) => {
  return (
      <div className="flex">
          {Array.from({ length: 5 }, (_, index) => {
              const currentRating = index + 1;
              return (
                  <svg
                      key={index}
                      onClick={() => setRating(currentRating)}
                      className={`w-60 h-60 cursor-pointer ${currentRating <= rating ? "text-yellow" : "text-gray3"
                          }`}
                      fill="currentColor"
                      viewBox="0 0 25 25"
                  >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
              );
          })}
      </div>
  );
};

// 리뷰 작성 폼 컴포넌트
const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 rating과 comment를 백엔드에 전송하거나 로직을 처리한다.
    console.log("리뷰 제출:", { rating, comment });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-4 mx-auto">
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">별점을 선택하세요</h3>
        <StarRating rating={rating} setRating={setRating} />
      </div>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="리뷰 내용을 작성하세요"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        리뷰 제출
      </button>
    </form>
  );
};

export default ReviewForm;