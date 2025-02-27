import React, { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";

export default function SignUp({ setIsSignUp }) {
    const {
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
        nameRef,
        birthdayRef,
        usernameRef,
        emailRef,
        phoneRef,
        passwordRef,
        confirmPasswordRef,
        validateName,
        validateBirthday,
        validateUsername,
        validateEmail,
        validatePhone,
        validatePassword,
        validateConfirmPassword,
    } = useSignUp();

    // 각 입력필드의 포커스 상태를 관리하는 state 추가
    const [nameFocused, setNameFocused] = useState(false);
    const [birthdayFocused, setBirthdayFocused] = useState(false);
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [phoneFocused, setPhoneFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

    return (
        <form
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
                e.preventDefault();
                handleSignUp();
            }}
        >
            <div className="flex flex-col items-center">
                {/* 이름 입력 필드 */}
                <div className="relative w-full mb-20">
                    <p
                        className={`absolute top-50 left-4 text-xs text-red-500 transition-opacity duration-300 ${nameError ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {nameError}
                    </p>
                    <input
                        type="text"
                        id="name"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ref={nameRef}
                        onFocus={() => setNameFocused(true)}
                        onBlur={() => {
                            setNameFocused(false);
                            validateName();
                        }}
                        className={`peer block w-full pt-20 pb-5 px-8 text-black ${nameError && !nameFocused ? "bg-pink" : "bg-white"
                            } border ${nameError && !nameFocused ? "border-red-500" : "border-gray-300"
                            } rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${nameShake ? "animate-shake" : ""
                            }`}
                    />
                    <label
                        htmlFor="name"
                        className="absolute left-8 transition-all duration-200 text-gray-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500 peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        이름
                    </label>
                </div>

                {/* 생일 입력 필드 */}
                <div className="relative w-full mb-20">
                    <p
                        className={`absolute top-50 left-4 text-xs text-red-500 transition-opacity duration-300 ${birthdayError ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {birthdayError}
                    </p>
                    <input
                        type="text"
                        id="birthday"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        ref={birthdayRef}
                        onFocus={() => setBirthdayFocused(true)}
                        onBlur={() => {
                            setBirthdayFocused(false);
                            validateBirthday();
                        }}
                        className={`peer block w-full pt-20 pb-5 px-8 text-black ${birthdayError && !birthdayFocused ? "bg-pink" : "bg-white"
                            } border ${birthdayError && !birthdayFocused ? "border-red-500" : "border-gray-300"
                            } rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${birthdayShake ? "animate-shake" : ""
                            }`}
                    />
                    <label
                        htmlFor="birthday"
                        className="absolute left-8 transition-all duration-200 text-gray-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500 peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        생년월일 (기호없이 숫자만 8자)
                    </label>
                </div>

                {/* 아이디 입력 필드 */}
                <div className="relative w-full mb-20">
                    <p
                        className={`absolute top-50 left-4 text-xs text-red-500 transition-opacity duration-300 ${usernameError ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {usernameError}
                    </p>
                    <input
                        type="text"
                        id="username"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        ref={usernameRef}
                        onFocus={() => setUsernameFocused(true)}
                        onBlur={() => {
                            setUsernameFocused(false);
                            validateUsername();
                        }}
                        className={`peer block w-full pt-20 pb-5 px-8 text-black ${usernameError && !usernameFocused ? "bg-pink" : "bg-white"
                            } border ${usernameError && !usernameFocused ? "border-red-500" : "border-gray-300"
                            } rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${usernameShake ? "animate-shake" : ""
                            }`}
                    />
                    <label
                        htmlFor="username"
                        className="absolute left-8 transition-all duration-200 text-gray-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500 peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        아이디(6~20자)
                    </label>
                    <button
                        type="button"
                        onClick={handleDuplicateCheck}
                        className="absolute px-4 py-2 text-sm text-white transform -translate-y-1/2 right-4 top-1/2 bg-[var(--color-red)] rounded-md"
                    >
                        중복 확인
                    </button>
                </div>

                {/* 비밀번호 입력 필드 */}
                <div className="relative w-full mb-20">
                    <p
                        className={`absolute top-50 left-4 text-xs text-red-500 transition-opacity duration-300 ${passwordError ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {passwordError}
                    </p>
                    <input
                        type="password"
                        id="password"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        ref={passwordRef}
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => {
                            setPasswordFocused(false);
                            validatePassword();
                        }}
                        className={`peer block w-full pt-20 pb-5 px-8 text-black ${passwordError && !passwordFocused ? "bg-pink" : "bg-white"
                            } border ${passwordError && !passwordFocused ? "border-red-500" : "border-gray-300"
                            } rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${passwordShake ? "animate-shake" : ""
                            }`}
                    />
                    <label
                        htmlFor="password"
                        className="absolute left-8 transition-all duration-200 text-gray-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500 peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        비밀번호(6~20자)
                    </label>
                </div>

                {/* 비밀번호 확인 입력 필드 */}
                <div className="relative w-full mb-20">
                    <p
                        className={`absolute top-50 left-4 text-xs text-red-500 transition-opacity duration-300 ${confirmPasswordError ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {confirmPasswordError}
                    </p>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        ref={confirmPasswordRef}
                        onFocus={() => setConfirmPasswordFocused(true)}
                        onBlur={() => {
                            setConfirmPasswordFocused(false);
                            validateConfirmPassword();
                        }}
                        className={`peer block w-full pt-20 pb-5 px-8 text-black ${confirmPasswordError && !confirmPasswordFocused ? "bg-pink" : "bg-white"
                            } border ${confirmPasswordError && !confirmPasswordFocused ? "border-red-500" : "border-gray-300"
                            } rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${confirmPasswordShake ? "animate-shake" : ""
                            }`}
                    />
                    <label
                        htmlFor="confirmPassword"
                        className="absolute left-8 transition-all duration-200 text-gray-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500 peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        비밀번호 확인
                    </label>
                </div>

                {/* 이메일 입력 필드 */}
                <div className="relative w-full mb-20">
                    <p
                        className={`absolute top-50 left-4 text-xs text-red-500 transition-opacity duration-300 ${emailError ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {emailError}
                    </p>
                    <input
                        type="text"
                        id="email"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ref={emailRef}
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => {
                            setEmailFocused(false);
                            validateEmail();
                        }}
                        className={`peer block w-full pt-20 pb-5 px-8 text-black ${emailError && !emailFocused ? "bg-pink" : "bg-white"
                            } border ${emailError && !emailFocused ? "border-red-500" : "border-gray-300"
                            } rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${emailShake ? "animate-shake" : ""
                            }`}
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-8 transition-all duration-200 text-gray-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500 peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        이메일 (example@XXX.com)
                    </label>
                </div>

                {/* 전화번호 입력 필드 */}
                <div className="relative w-full mb-20">
                    <p
                        className={`absolute top-50 left-4 text-xs text-red-500 transition-opacity duration-300 ${phoneError ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {phoneError}
                    </p>
                    <input
                        type="tel"
                        id="phone"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        ref={phoneRef}
                        onFocus={() => setPhoneFocused(true)}
                        onBlur={() => {
                            setPhoneFocused(false);
                            validatePhone();
                        }}
                        className={`peer block w-full pt-20 pb-5 px-8 text-black ${phoneError && !phoneFocused ? "bg-pink" : "bg-white"
                            } border ${phoneError && !phoneFocused ? "border-red-500" : "border-gray-300"
                            } rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${phoneShake ? "animate-shake" : ""
                            }`}
                    />
                    <label
                        htmlFor="phone"
                        className="absolute left-8 transition-all duration-200 text-gray-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500 peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        전화번호 (기호없이 숫자만 11자)
                    </label>
                </div>

                {/* 회원가입 / 가입취소 버튼 */}
                <div className="flex w-full gap-4 mb-8">
                    <button
                        type="submit"
                        className="p-8 text-white transition-all duration-300 bg-[var(--color-blue)] rounded-md w-[50%] text-[20px] hover:bg-[var(--color-green)]"
                    >
                        회원가입
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsSignUp(false)}
                        className="p-8 text-white transition-all duration-300 bg-[var(--color-red)] rounded-md w-[50%] text-[20px] hover:bg-[var(--color-pink)]"
                    >
                        가입취소
                    </button>
                </div>
            </div>
        </form>
    );
}
