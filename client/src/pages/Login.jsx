import { useState, useEffect, useRef } from "react";
import SignUp from "./SignUp";

const inputStyle =
  "block w-[350px] p-8 mb-12 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto";
const buttonStyle =
  "p-8 text-white transition bg-blue rounded-md w-[350px] text-[20px] hover:bg-blue-700";
// 컨테이너는 헤더 높이(66px)를 제외한 뷰포트 영역으로 설정
const containerStyle =
  "flex items-center justify-center w-full h-[calc(100vh-66px)] overflow-hidden relative";
// 로그인 박스는 absolute로 위치 지정하고, left값은 Tailwind 반응형 클래스로 설정
const boxStyle =
  "absolute -z-10 p-24 text-center text-black transition-all duration-300 bg-white rounded-lg shadow-2xl w-[500px] top-[100px] left-1/2 lg:left-[70%] transform -translate-x-1/2 ";
// linkStyle은 그대로 사용
const linkStyle =
  "text-blue-500 underline cursor-pointer hover:text-blue-700";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fade, setFade] = useState(false);
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
    <div className={containerStyle}>
      {/* 백그라운드 영상 */}
      <video
        ref={videoRef}
        className={`fixed top-0 left-0 w-full h-full object-cover duration-500 -z-10 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        src={videos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
      />
      {/* 검은 오버레이 */}
      <div className="fixed top-0 left-0 w-full h-full bg-black -z-20"></div>
      {/* 로그인 박스 */}
      <div
        className={`${boxStyle}`}
      >
        <div className="w-full overflow-hidden h-[160px]">
          <img
            src="/images/login/skater_john.jpg"
            alt="Skater"
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="mt-10 mb-20 font-bold text-[48px]">
          {isSignUp ? "회원가입" : "로그인"}
        </h2>
        {!isSignUp ? (
          <div className="flex flex-col items-center">
            <input type="text" placeholder="아이디" className={inputStyle} />
            <input type="password" placeholder="비밀번호" className={inputStyle} />
            <button className={buttonStyle}>로그인</button>
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
            className={linkStyle}
          >
            {isSignUp ? "로그인" : "지금 만드세요."}
          </a>
        </div>
      </div>
    </div>
  );
}
