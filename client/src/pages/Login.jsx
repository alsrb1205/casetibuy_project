import { useState, useEffect, useRef } from "react";
import SignUp from "./SignUp";

const inputStyle = "block w-[350px] p-8 mb-12 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto";
const buttonStyle = "p-8 text-white transition bg-blue rounded-md w-[350px] text-20 hover:bg-blue-700";
const containerStyle = "flex items-center justify-center w-full h-screen overflow-hidden";
const boxStyle = "relative z-10 p-24 overflow-hidden text-center text-black transition-all duration-300 bg-white rounded-lg shadow-2xl w-[500px] left-[550px]";
const linkStyle = "text-blue-500 underline cursor-pointer hover:text-blue-700";

export default function Login() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const videoRef = useRef(null);

    const videos = [
        "/images/login/tom_jerry.mp4",
        "/images/login/chiikawa.mp4",
        "/images/login/kuromi.mp4"
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
            <div className="absolute top-0 left-0 w-full h-full bg-black -z-20"></div>
            <video
                ref={videoRef}
                className={`absolute top-0 left-0 w-full h-full object-cover -z-10 transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
                src={videos[currentVideoIndex]}
                autoPlay
                muted
                playsInline
            />
            <div className={boxStyle}>
                <div className="w-full overflow-hidden h-160">
                    <img
                        src="/images/login/skater_john.jpg"
                        alt="Skater"
                        className="object-cover w-full h-full"
                    />
                </div>
                <h2 className="mt-10 mb-20 font-bold text-48">{isSignUp ? "회원가입" : "로그인"}</h2>
                {!isSignUp ? (
                    <>
                        <div className="flex flex-col items-center">
                            <input type="text" placeholder="아이디" className={inputStyle} />
                            <input type="password" placeholder="비밀번호" className={inputStyle} />
                            <button className={buttonStyle}>로그인</button>
                        </div>
                    </>
                ) : (
                    <SignUp />
                )}
                <div className="flex items-center justify-center gap-4 mt-16 text-16">
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