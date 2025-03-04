import { useState, useRef } from "react";

export function useSignUp() {
    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [nameError, setNameError] = useState("");
    const [birthdateError, setBirthdateError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");

    const [nameFocused, setNameFocused] = useState(false);
    const [birthdateFocused, setBirthdateFocused] = useState(false);
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [passwordConfirmFocused, setPasswordConfirmFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);

    const [nameShake, setNameShake] = useState(false);
    const [birthdateShake, setBirthdateShake] = useState(false);
    const [usernameShake, setUsernameShake] = useState(false);
    const [passwordShake, setPasswordShake] = useState(false);
    const [passwordConfirmShake, setPasswordConfirmShake] = useState(false);
    const [emailShake, setEmailShake] = useState(false);
    const [phoneNumberShake, setPhoneNumberShake] = useState(false);


    const nameRef = useRef(null);
    const birthdateRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const emailRef = useRef(null);
    const phoneNumberRef = useRef(null);

    const handleSignUp = (e) => {
        e.preventDefault();
        alert("임시 회원가입 성공");
        console.log("회원가입 처리");
    };

    const validateName = () => {
        const trimmed = name.trim();
        if (!trimmed) {
            setNameError("이름을 입력해주세요.");
            setNameShake(true);
            setTimeout(() => setNameShake(false), 500);
            return false;
        }
        setNameError("");
        return true;
    };

    const validateBirthdate = () => {
        const trimmed = birthdate.trim();
        if (!/^\d{8}$/.test(trimmed)) {
            setBirthdateError("생년월일을 8자리 숫자로 입력해주세요.");
            setBirthdateShake(true);
            setTimeout(() => setBirthdateShake(false), 500);
            return false;
        }
        setBirthdateError("");
        return true;
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

    const validatePasswordConfirm = () => {
        if (password !== passwordConfirm) {
            setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
            setPasswordConfirmShake(true);
            setTimeout(() => setPasswordConfirmShake(false), 500);
            return false;
        }
        setPasswordConfirmError("");
        return true;
    };

    const validateEmail = () => {
        const trimmed = email.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
            setEmailError("이메일 형식이 올바르지 않습니다.");
            setEmailShake(true);
            setTimeout(() => setEmailShake(false), 500);
            return false;
        }
        setEmailError("");
        return true;
    };

    const validatePhoneNumber = () => {
        const trimmed = phoneNumber.trim();
        if (!/^\d{11}$/.test(trimmed)) {
            setPhoneNumberError("전화번호를 11자리 숫자로 입력해주세요.");
            setPhoneNumberShake(true);
            setTimeout(() => setPhoneNumberShake(false), 500);
            return false;
        }
        setPhoneNumberError("");
        return true;
    };


    return {
        name, setName,
        birthdate, setBirthdate,
        username, setUsername,
        password, setPassword,
        passwordConfirm, setPasswordConfirm,
        email, setEmail,
        phoneNumber, setPhoneNumber,

        nameError, setNameError,
        birthdateError, setBirthdateError,
        usernameError, setUsernameError,
        passwordError, setPasswordError,
        passwordConfirmError, setPasswordConfirmError,
        emailError, setEmailError,
        phoneNumberError, setPhoneNumberError,

        nameFocused, setNameFocused,
        birthdateFocused, setBirthdateFocused,
        usernameFocused, setUsernameFocused,
        passwordFocused, setPasswordFocused,
        passwordConfirmFocused, setPasswordConfirmFocused,
        emailFocused, setEmailFocused,
        phoneNumberFocused, setPhoneNumberFocused,

        nameShake, setNameShake,
        birthdateShake, setBirthdateShake,
        usernameShake, setUsernameShake,
        passwordShake, setPasswordShake,
        passwordConfirmShake, setPasswordConfirmShake,
        emailShake, setEmailShake,
        phoneNumberShake, setPhoneNumberShake,


        nameRef, birthdateRef, usernameRef, passwordRef, passwordConfirmRef, emailRef, phoneNumberRef,

        handleSignUp,
        validateName, validateBirthdate, validateUsername, validatePassword, validatePasswordConfirm, validateEmail, validatePhoneNumber,
    };
}