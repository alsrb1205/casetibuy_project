import React, { useState } from "react";
import { useSignUp } from "../hooks/useSignUp.js";
import InputField from "../component/InputField.jsx";

export default function SignUp({ setIsSignUp }) {
    const {
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

        nameShake,
        birthdateShake,
        usernameShake,
        passwordShake,
        passwordConfirmShake,
        emailShake,
        phoneNumberShake,


        nameRef, birthdateRef, usernameRef, passwordRef, passwordConfirmRef, emailRef, phoneNumberRef,

        handleSignUp,
        validateName, validateBirthdate, validateUsername, validatePassword, validatePasswordConfirm, validateEmail, validatePhoneNumber,
    } = useSignUp();

    const [showCancelConfirm, setShowCancelConfirm] = useState(false); // 가입 취소 확인 visibility 상태 추가

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateName()) {
            nameRef.current.focus();
            return;
        }
        if (!validateBirthdate()) {
            birthdateRef.current.focus();
            return;
        }
        if (!validateUsername()) {
            usernameRef.current.focus();
            return;
        }
        if (!validatePassword()) {
            passwordRef.current.focus();
            return;
        }
        if (!validatePasswordConfirm()) {
            passwordConfirmRef.current.focus();
            return;
        }
        if (!validateEmail()) {
            emailRef.current.focus();
            return;
        }
        if (!validatePhoneNumber()) {
            phoneNumberRef.current.focus();
            return;
        }
        handleSignUp(e);
    };

    // 가입 취소 버튼 클릭 시 실행될 함수 (알림창 대신 confirmation UI 표시)
    const handleCancelSignUp = () => {
        setShowCancelConfirm(true); // Confirmation UI visibility 상태를 true로 변경
    };

    // 실제 가입 취소 처리 함수 (확인 버튼 클릭 시)
    const handleConfirmCancelSignUp = () => {
        setName("");
        setBirthdate("");
        setUsername("");
        setPassword("");
        setPasswordConfirm("");
        setEmail("");
        setPhoneNumber("");
        setShowCancelConfirm(false);

        // 에러 메시지 상태 초기화 (숨김)
        setNameError("");
        setBirthdateError("");
        setUsernameError("");
        setPasswordError("");
        setPasswordConfirmError("");
        setEmailError("");
        setPhoneNumberError("");
    };

    // 가입 취소 취소 함수 (취소 버튼 클릭 시)
    const handleRejectCancelSignUp = () => {
        setShowCancelConfirm(false); // Confirmation UI visibility 상태를 false로 변경 (숨김)
    };


    return (
        <div className="flex flex-col items-center">
            {/* InputField 컴포넌트에 forceDefaultBg prop 전달 */}
            <InputField
                id="name"
                label="이름"
                value={name}
                setValue={setName}
                error={nameError}
                refElement={nameRef}
                focused={nameFocused}
                setFocused={setNameFocused}
                validate={validateName}
                shake={nameShake}
            />
            <InputField
                id="birthdate"
                label="생년월일 (기호 없이 8자리 숫자)"
                value={birthdate}
                setValue={setBirthdate}
                error={birthdateError}
                refElement={birthdateRef}
                focused={birthdateFocused}
                setFocused={setBirthdateFocused}
                validate={validateBirthdate}
                shake={birthdateShake}
                maxLength={8}
            />
            <InputField
                id="username"
                label="아이디 (6~20글자)"
                value={username}
                setValue={setUsername}
                error={usernameError}
                refElement={usernameRef}
                focused={usernameFocused}
                setFocused={setUsernameFocused}
                validate={validateUsername}
                shake={usernameShake}
            />
            <InputField
                id="password"
                type="password"
                label="비밀번호 (6~20글자)"
                value={password}
                setValue={setPassword}
                error={passwordError}
                refElement={passwordRef}
                focused={passwordFocused}
                setFocused={setPasswordFocused}
                validate={validatePassword}
                shake={passwordShake}
            />
            <InputField
                id="passwordConfirm"
                type="password"
                label="비밀번호 확인"
                value={passwordConfirm}
                setValue={setPasswordConfirm}
                error={passwordConfirmError}
                refElement={passwordConfirmRef}
                focused={passwordConfirmFocused}
                setFocused={setPasswordConfirmFocused}
                validate={validatePasswordConfirm}
                shake={passwordConfirmShake}
            />
            <InputField
                id="email"
                type="text"
                label="이메일 (example@xxx.com)"
                value={email}
                setValue={setEmail}
                error={emailError}
                refElement={emailRef}
                focused={emailFocused}
                setFocused={setEmailFocused}
                validate={validateEmail}
                shake={emailShake}
            />
            <InputField
                id="phoneNumber"
                label="전화번호 (기호없이 11자리 숫자)"
                value={phoneNumber}
                setValue={setPhoneNumber}
                error={phoneNumberError}
                refElement={phoneNumberRef}
                focused={phoneNumberFocused}
                setFocused={setPhoneNumberFocused}
                validate={validatePhoneNumber}
                shake={phoneNumberShake}
                maxLength={11}
            />

            <div className="relative flex justify-center w-full gap-5">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="p-12 text-white transition-all duration-300 bg-blue rounded-12 w-[50%] text-16"
                >
                    회원가입
                </button>
                <button
                    type="button"
                    className="p-12 text-white transition-all duration-300 bg-orange rounded-12 w-[50%] text-16"
                    onClick={handleCancelSignUp}
                >
                    가입 취소
                </button>


                {/* 가입 취소 Confirmation UI (inline) */}
                {showCancelConfirm && (
                    <div className="absolute left-0 z-10 w-full p-8 mt-4 text-center bg-white shadow-lg rounded-12 top-full">
                        <p className="mb-4 text-black">정말로 가입을 취소하시겠습니까?</p>
                        <div className="flex justify-center gap-4">
                            <button
                                className="p-4 text-white transition-all duration-300 bg-blue rounded-6 w-[40%] text-[16px]"
                                onClick={handleRejectCancelSignUp}
                            >
                                아니오, 계속 작성
                            </button>
                            <button
                                className="p-4 text-white transition-all duration-300 bg-orange rounded-6 w-[40%] text-[16px]"
                                onClick={handleConfirmCancelSignUp}
                            >
                                네, 취소합니다
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}