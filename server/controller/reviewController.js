import * as repository from "../repository/reviewRepository.js";

export const addReview = async (req, res) => {
    console.log('리뷰 서버',req.body);
    
    // const result = await repository.addReview(req.body);
//   res.json(result);
//   res.end();
};

// const getReview = async (req, res) => {
//   const result = await repository.getReview(req.body);
//   res.json(result);
//   res.end();
// };