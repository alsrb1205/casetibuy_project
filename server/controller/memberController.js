import * as repository from '../repository/memberRepository.js';
import jwt from 'jsonwebtoken';

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
    console.log('req.body -->', req.body);
    const result = await repository.registerMember(req.body);
    res.json(result);
    res.end()
};


/**
 * 로그인
 */
export const checkLogin = async (req, res) => {
    let result = await repository.checkLogin(req.body);
    if (result.result_rows === 1) {
        const token = jwt.sign({ "userId": req.body.id }, "64dAeD");
        result = { ...result, "token": token };
    }
    res.json(result);
    res.end();
};