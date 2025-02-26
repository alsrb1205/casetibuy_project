import React from "react";
import { useSignUp } from "../hooks/useSignUp";

export default function SignUp({ setIsSignUp }) {
    const {
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
        nameRef  // 이름 입력 필드 ref 추가
    } = useSignUp();

    return (
        <form noValidate>
            <div className="flex flex-col items-center">
                {/* 이름 입력 필드 */}
                <div className="relative w-full mb-8">
                    <input
                        type="text"
                        id="name"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ref={nameRef}  // nameRef 추가
                        className="peer block w-full pt-20 pb-5 px-8 text-black bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label
                        htmlFor="name"
                        className="absolute left-8 transition-all duration-200 text-gray-600
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                  peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500
                  peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        이름
                    </label>
                </div>

                {/* 생일 입력 필드 */}
                <div className="relative w-full mb-8">
                    <input
                        type="text"
                        id="birthday"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        ref={birthdayRef}
                        className="peer block w-full pt-20 pb-5 px-8 text-black bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label
                        htmlFor="birthday"
                        className="absolute left-8 transition-all duration-200 text-gray-600
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                        peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500
                        peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        생년월일 (기호 없이 숫자 8자리)
                    </label>
                </div>

                {/* 아이디 입력 필드 */}
                <div className="relative w-full mb-8">
                    <input
                        type="text"
                        id="username"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        ref={usernameRef}
                        className="peer block w-full pt-20 pb-5 px-8 text-black bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label
                        htmlFor="username"
                        className="absolute left-8 transition-all duration-200 text-gray-600
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                  peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500
                  peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        아이디 (6글자~20글자)
                    </label>
                    <button
                        type="button"
                        onClick={handleDuplicateCheck}
                        className="absolute px-4 py-2 text-sm text-white transform -translate-y-1/2 bg-blue-500 rounded-md right-4 top-1/2"
                    >
                        중복 확인
                    </button>
                </div>

                {/* 비밀번호 입력 필드 */}
                <div className="relative w-full mb-8">
                    <input
                        type="password"
                        id="password"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        ref={passwordRef}
                        className="peer block w-full pt-20 pb-5 px-8 text-black bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label
                        htmlFor="password"
                        className="absolute left-8 transition-all duration-200 text-gray-600
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                  peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500
                  peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        비밀번호 (6글자~30글자)
                    </label>
                </div>

                {/* 비밀번호 확인 입력 필드 */}
                <div className="relative w-full mb-8">
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        ref={confirmPasswordRef}
                        className="peer block w-full pt-20 pb-5 px-8 text-black bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label
                        htmlFor="confirmPassword"
                        className="absolute left-8 transition-all duration-200 text-gray-600
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                  peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500
                  peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        비밀번호 확인
                    </label>
                </div>

                {/* 이메일 입력 필드 */}
                <div className="relative w-full mb-8">
                    <input
                        type="text"
                        id="email"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="peer block w-full pt-20 pb-5 px-8 text-black bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-8 transition-all duration-200 text-gray-600
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                  peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500
                  peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        이메일 (ex : hyunu@gmail.com)
                    </label>
                </div>

                {/* 전화번호 입력 필드 */}
                <div className="relative w-full mb-8">
                    <input
                        type="tel"
                        id="phone"
                        placeholder=" "
                        required
                        spellCheck="false"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="peer block w-full pt-20 pb-5 px-8 text-black bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label
                        htmlFor="phone"
                        className="absolute left-8 transition-all duration-200 text-gray-600
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                  peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500
                  peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                    >
                        전화번호 (기호 없이 숫자 11자리)
                    </label>
                </div>

                {/* 회원가입 버튼 */}
                <div className="flex w-full gap-4 mb-8">
                    <button
                        type="button"
                        onClick={handleSignUp}
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
