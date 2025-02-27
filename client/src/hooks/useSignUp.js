import { useState, useRef } from "react";

export function useSignUp() {
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [birthdayError, setBirthdayError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [nameShake, setNameShake] = useState(false);
    const [birthdayShake, setBirthdayShake] = useState(false);
    const [usernameShake, setUsernameShake] = useState(false);
    const [emailShake, setEmailShake] = useState(false);
    const [phoneShake, setPhoneShake] = useState(false);
    const [passwordShake, setPasswordShake] = useState(false);
    const [confirmPasswordShake, setConfirmPasswordShake] = useState(false);

    const nameRef = useRef(null);
    const birthdayRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    // 이름 검증
    const validateName = () => {
        if (name.trim() === "") {
            setNameError("이름을 입력해주세요.");
            setNameShake(true);
            setTimeout(() => setNameShake(false), 500);
            return false;
        }
        setNameError("");
        return true;
    };

    // 생년월일 검증
    const validateBirthday = () => {
        const trimmed = birthday.trim();
        const regex = /^\d{8}$/;
        if (!regex.test(trimmed)) {
            setBirthdayError("생년월일을 형식에 맞게 입력해주세요.");
            setBirthdayShake(true);
            setTimeout(() => setBirthdayShake(false), 500);
            return false;
        }
        setBirthdayError("");
        return true;
    };

    // 아이디 검증 (6~20자)
    const validateUsername = () => {
        const trimmed = username.trim();
        if (trimmed.length < 6 || trimmed.length > 20) {
            setUsernameError("아이디를 형식에 맞게 입력해주세요.");
            setUsernameShake(true);
            setTimeout(() => setUsernameShake(false), 500);
            return false;
        }
        setUsernameError("");
        return true;
    };

    // 이메일 형식 검증
    const validateEmail = () => {
        const trimmed = email.trim();
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regex.test(trimmed)) {
            setEmailError("이메일을 형식에 맞게 입력해주세요.");
            setEmailShake(true);
            setTimeout(() => setEmailShake(false), 500);
            return false;
        }
        setEmailError("");
        return true;
    };

    // 전화번호 검증
    const validatePhone = () => {
        const trimmed = phone.trim();
        if (!/^\d{11}$/.test(trimmed)) {
            setPhoneError("전화번호를 형식에 맞게 입력해주세요.");
            setPhoneShake(true);
            setTimeout(() => setPhoneShake(false), 500);
            return false;
        }
        setPhoneError("");
        return true;
    };

    // 비밀번호 검증
    const validatePassword = () => {
        const trimmed = password.trim();
        if (trimmed.length < 6 || trimmed.length > 20) {
            setPasswordError("비밀번호를 형식에 맞게 입력해주세요.");
            setPasswordShake(true);
            setTimeout(() => setPasswordShake(false), 500);
            return false;
        }
        setPasswordError("");
        return true;
    };

    // 비밀번호 확인 검증
    const validateConfirmPassword = () => {
        if (confirmPassword !== password) {
            setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
            setConfirmPasswordShake(true);
            setTimeout(() => setConfirmPasswordShake(false), 500);
            return false;
        }
        setConfirmPasswordError("");
        return true;
    };

    // 아이디 중복 확인
    const handleDuplicateCheck = () => {
        if (username.trim() === "test123") {
            setUsernameError("이미 사용 중인 아이디입니다.");
            setUsernameShake(true);
            setTimeout(() => setUsernameShake(false), 500);
        } else {
            setUsernameError("사용이 가능한 아이디입니다.");
        }
    };

    const handleSignUp = () => {
        const isNameValid = validateName();
        const isBirthdayValid = validateBirthday();
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        if (!isNameValid) {
            nameRef.current.focus();
            return;
        }
        if (!isBirthdayValid) {
            birthdayRef.current.focus();
            return;
        }
        if (!isUsernameValid) {
            usernameRef.current.focus();
            return;
        }
        if (!isEmailValid) {
            emailRef.current.focus();
            return;
        }
        if (!isPhoneValid) {
            phoneRef.current.focus();
            return;
        }
        if (!isPasswordValid) {
            passwordRef.current.focus();
            return;
        }
        if (!isConfirmPasswordValid) {
            confirmPasswordRef.current.focus();
            return;
        }
        alert("회원가입 성공!");
        console.log("회원가입 처리 완료");
    };

    return {
        name,
        setName,
        birthday,
        setBirthday,
        username,
        setUsername,
        email,
        setEmail,
        phone,
        setPhone,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleDuplicateCheck,
        handleSignUp,
        nameRef,
        birthdayRef,
        usernameRef,
        emailRef,
        phoneRef,
        passwordRef,
        confirmPasswordRef,
        nameError,
        birthdayError,
        usernameError,
        emailError,
        phoneError,
        passwordError,
        confirmPasswordError,
        nameShake,
        birthdayShake,
        usernameShake,
        emailShake,
        phoneShake,
        passwordShake,
        confirmPasswordShake,
        validateName,
        validateBirthday,
        validateUsername,
        validateEmail,
        validatePhone,
        validatePassword,
        validateConfirmPassword,
    };
}
