import React, { useState, useEffect, useRef } from "react";
import SignUp from "./SignUp";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const { username, setUsername, password, setPassword, usernameRef, passwordRef, handleLogin } = useLogin();

  const videos = [
    "/images/login/tom_jerry.mp4",
    "/images/login/chiikawa.mp4",
    "/images/login/kuromi.mp4",
  ];

  useEffect(() => {
    const handleTransition = () => {
      setFade(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setFade(false);
      }, 500);
    };

    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.addEventListener("ended", handleTransition);
    }

    return () => {
      const videoElement = document.querySelector("video");
      if (videoElement) {
        videoElement.removeEventListener("ended", handleTransition);
      }
    };
  }, [currentVideoIndex]);

  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-66px)] overflow-hidden relative">
      <video
        className={`fixed top-0 left-0 w-full h-full object-cover duration-500 z-10 ${fade ? "opacity-0" : "opacity-100"}`}
        src={videos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
      />
      <div className="fixed top-0 left-0 z-0 w-full h-full bg-black"></div>
      {/* 로그인창 */}
      <form noValidate onSubmit={(e) => handleLogin(e)}>
        <div className="absolute text-center text-black transition-all duration-300 bg-white rounded-lg shadow-2xl w-[400px] top-[20px] left-1/2 lg:left-[70%] transform -translate-x-1/2 z-20">
          <div className="w-full overflow-hidden h-[180px]">
            <img src="/images/login/skater_john.jpg" alt="Skater" className="object-cover w-full h-full rounded-t-md" />
          </div>
          <div className="p-24 pt-0">

          <h2 className="mt-20 mb-16 font-bold text-30">{isSignUp ? "회원가입" : "로그인"}</h2>
          {!isSignUp ? (
            <div className="flex flex-col items-center">
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
                  className="peer block w-full pt-20 pb-5 px-8 text-black bg-white border border-gray-300 rounded-md text-[16px] 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <label
                  htmlFor="username"
                  className="absolute left-8 transition-all duration-200 text-gray-600
  peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
  peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500
  peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                >
                  아이디
                </label>
              </div>

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
                  className="peer block w-full pt-20 pb-5 px-8 text-black bg-white border border-gray-300 rounded-md text-[16px] 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <label
                  htmlFor="password"
                  className="absolute left-8 transition-all duration-200 text-gray-600
  peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
  peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-xs peer-focus:text-blue-500
  peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-xs peer-valid:text-blue-500"
                >
                  비밀번호
                </label>
              </div>

              <div className="flex justify-end gap-4 w-[320px] mb-8 mx-auto">
                <span className="text-sm text-gray-600 underline cursor-pointer hover:text-gray-800 text-blue">
                  아이디 찾기
                </span>
                <span className="text-sm text-gray-600">|</span>
                <span className="text-sm text-gray-600 underline cursor-pointer hover:text-gray-800 text-blue">
                  비밀번호 찾기
                </span>
              </div>
              <button
                type="submit"
                className="p-10 text-white transition-all duration-300 bg-[var(--color-blue)] rounded-md w-full text-[20px] hover:bg-[var(--color-green)]">로그인
              </button>
            </div>) : (
            <SignUp setIsSignUp={setIsSignUp} />
          )}
          <div className="flex items-center justify-center gap-4 mt-16 text-[16px]">
            <span className="text-black">{isSignUp ? "이미 계정이 있습니까?" : "CASETiBUY 계정이 없습니까?"}</span>
            <a
              href="#"
              onClick={() => setIsSignUp(!isSignUp)}
              className="underline cursor-pointer text-blue">
              {isSignUp ? "로그인" : "지금 만드세요."}
            </a>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
}
