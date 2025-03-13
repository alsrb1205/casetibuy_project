import { createContext, useState } from "react";

// Context 생성
export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const  [reviewForm, setReviewForm] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    
  // <<< 지혜 / 삭제 :  userId, setUserId >>>

  return (
    <ReviewContext.Provider
      value={{
        reviewForm, setReviewForm,rating, setRating, comment, setComment
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
