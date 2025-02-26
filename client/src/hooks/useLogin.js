import React, { useState, useRef } from "react";

export const useLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지
        
        // 아이디와 비밀번호가 비어있는지 확인
        if (!username.trim()) {
            // alert("아이디를 입력하세요.");
            usernameRef.current.focus();
            return;
        }

        if (!password.trim()) {
            // alert("비밀번호를 입력하세요.");
            passwordRef.current.focus();
            return;
        }

        // 아이디와 비밀번호가 6글자 이상인지 확인
        if (username.length < 6) {
            // alert("아이디는 6글자 이상이어야 합니다.");
            usernameRef.current.focus();
            return;
        }

        if (password.length < 6) {
            // alert("비밀번호는 6글자 이상이어야 합니다.");
            passwordRef.current.focus();
            return;
        }

        // 로그인 성공
        alert("로그인 성공!");
        console.log(`아이디: ${username}, 비밀번호: ${password}`);
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        rememberMe,
        setRememberMe,
        usernameRef,
        passwordRef,
        handleLogin,
    };
};
