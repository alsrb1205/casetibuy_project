import React from "react";
import { useSignUp } from "../hooks/useSignUp.js";
import InputField from "../component/InputField.jsx";

export default function SignUp() { 
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


    return (
        <div className="flex flex-col items-center">
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
                inputType="number-only"
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
                maxLength={20}
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
                maxLength={20}
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
                maxLength={20}
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
                inputType="number-only"
            />

            <div className="relative flex justify-center w-full gap-5">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full p-12 text-white transition-all duration-300 bg-blue rounded-12 text-16"
                >
                    회원가입
                </button>
            </div>
        </div>
    );
}