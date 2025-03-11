import * as repository from "../repository/memberRepository.js";
import jwt from "jsonwebtoken";

/**
 * 아이디 중복체크
 */
export const getIdCheck = async (req, res) => {
  // console.log('id ===', req.body)
  const result = await repository.getIdCheck(req.body);
  res.json(result);
  res.end();
};

/**
 * 회원가입
 */
export const registerMember = async (req, res) => {
  console.log("req.body -->", req.body);
  const result = await repository.registerMember(req.body);
  res.json(result);
  res.end();
};

/**
 * 로그인
 */
export const checkLogin = async (req, res) => {
  let result = await repository.checkLogin(req.body);
  if (result.result_rows === 1) {
    const userId = req.body.id; // <<< 지혜 / 추가 : 로컬에 넣을 아이디 값 >>>
    const token = jwt.sign({ userId: req.body.id }, "64dAeD");
    result = { ...result, id: userId, token: token }; // <<< 지혜 / 추가 : 로컬에 넣을 아이디 값 >>>
  }

  res.json(result);
  res.end();
};

/**
 * 회원 정보 조회 (/member/userinfo)
 */
export const getUserInfo = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ error: "토큰이 제공되지 않았습니다." });
    return;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, "64dAeD");
    const userId = decoded.userId;
    const userInfo = await repository.getUserInfo(userId);
    if (userInfo) {
      res.json(userInfo);
    } else {
      res.status(404).json({ error: "사용자 정보를 찾을 수 없습니다." });
    }
  } catch (error) {
    res.status(401).json({ error: "유효하지 않은 토큰입니다." });
  }
  res.end();
};
