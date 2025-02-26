import { useState, useRef } from "react";

export function useSignUp() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Ref 추가
    const nameRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const birthdayRef = useRef(null);

    // 중복 체크 로직
    const handleDuplicateCheck = () => {
        // 중복 확인 로직
        console.log("중복 확인!");
    };

    // 회원가입 처리 로직
    const handleSignUp = () => {
        if (name.trim() === "") {
            nameRef.current.focus();  // 이름 필드가 비어있으면 포커스 이동
            alert("이름을 입력하세요.");
            return;
        }
        if (username.trim() === "") {
            usernameRef.current.focus();  // 아이디 필드가 비어있으면 포커스 이동
            alert("아이디를 입력하세요.");
            return;
        }
        if (password !== confirmPassword) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        console.log("회원가입 완료");
    };

    return {
        name,
        setName,
        username,
        setUsername,
        email,
        setEmail,
        phone,
        setPhone,
        birthday,
        setBirthday,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleDuplicateCheck,
        handleSignUp,
        usernameRef,
        passwordRef,
        confirmPasswordRef,
        birthdayRef,
        nameRef  // nameRef 반환
    };
}
