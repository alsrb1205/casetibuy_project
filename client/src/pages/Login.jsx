import { useState, useEffect, useRef } from "react";
import SignUp from "./SignUp";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // 체크박스 상태 추가
  const videoRef = useRef(null);

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

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleTransition);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleTransition);
      }
    };
  }, [currentVideoIndex]);

  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-66px)] overflow-hidden relative">
      {/* 백그라운드 영상 */}
      <video
        ref={videoRef}
        className={`fixed top-0 left-0 w-full h-full object-cover duration-500 z-10 ${fade ? "opacity-0" : "opacity-100"}`}
        src={videos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
      />
      {/* 검은 오버레이 */}
      <div className="fixed top-0 left-0 z-0 w-full h-full bg-black"></div>
      {/* 로그인 박스 */}
      <div className={"absolute p-10 text-center text-black transition-all duration-300 bg-white rounded-lg shadow-2xl w-[400px] top-[20px] left-1/2 lg:left-[70%] transform -translate-x-1/2 z-20"}>
        <div className="w-full overflow-hidden h-[160px]">
          <img
            src="/images/login/skater_john.jpg"
            alt="Skater"
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="mt-20 mb-10 font-bold text-[36px]">
          {isSignUp ? "회원가입" : "로그인"}
        </h2>
        {!isSignUp ? (
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="아이디"
              className="block w-[320px] p-8 mb-8 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="block w-[320px] p-8 mb-8 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto"
            />
            
            
            <div className="flex items-center justify-between w-[320px] mb-8">
              {/* 아이디 저장 체크박스 */}
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">아이디 저장</span>
              </label>

              {/* 아이디 찾기 & 비밀번호 찾기 */}
              <div className="flex justify-end gap-4">
                <span className="text-sm text-gray-600 underline cursor-pointer hover:text-gray-800 text-blue">
                  아이디 찾기
                </span>
                <span className="text-sm text-gray-600">|</span>
                <span className="text-sm text-gray-600 underline cursor-pointer hover:text-gray-800 text-blue">
                  비밀번호 찾기
                </span>
              </div>
            </div>

            <button className="p-8 text-white transition-all duration-300 bg-[var(--color-blue)] rounded-md w-[320px] text-[20px] hover:bg-[var(--color-green)]">
              로그인
            </button>

          </div>
        ) : (
          <SignUp />
        )}
        <div className="flex items-center justify-center gap-4 mt-16 text-[16px]">
          <span className="text-black">
            {isSignUp ? "이미 계정이 있습니까?" : "CASETiBUY 계정이 없습니까?"}
          </span>
          <a
            href="#"
            onClick={() => setIsSignUp(!isSignUp)}
            className="underline cursor-pointer text-blue"
          >
            {isSignUp ? "로그인" : "지금 만드세요."}
          </a>
        </div>
      </div>
    </div>
  );
}
