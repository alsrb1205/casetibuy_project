import { useState, useRef } from "react";

export function useLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [usernameShake, setUsernameShake] = useState(false);
    const [passwordShake, setPasswordShake] = useState(false);

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        alert("임시 로그인 성공");
        console.log("로그인 처리");
    };

    const validateUsername = () => {
        const trimmed = username.trim();
        if (trimmed.length < 6 || trimmed.length > 20) {
            setUsernameError("아이디를 입력해주세요.(6~20자)");
            setUsernameShake(true);
            setTimeout(() => setUsernameShake(false), 500);
            return false;
        }
        setUsernameError("");
        return true;
    };

    const validatePassword = () => {
        const trimmed = password.trim();
        if (trimmed.length < 6 || trimmed.length > 20) {
            setPasswordError("비밀번호를 입력해주세요.(6~20자)");
            setPasswordShake(true);
            setTimeout(() => setPasswordShake(false), 500);
            return false;
        }
        setPasswordError("");
        return true;
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        usernameError,
        passwordError,
        usernameFocused,
        setUsernameFocused,
        passwordFocused,
        setPasswordFocused,
        usernameRef,
        passwordRef,
        handleLogin,
        validateUsername,
        validatePassword,
        usernameShake,
        passwordShake
    };
}