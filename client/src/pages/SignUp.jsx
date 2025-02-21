const inputStyle = "block w-[350px] p-8 mb-12 text-black placeholder-grayph bg-white border border-gray-300 rounded-md text-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto";
const buttonStyle = "p-8 text-white transition bg-blue rounded-md w-[170px] text-20 hover:bg-blue-700";  
const buttonContainerStyle = "flex justify-center gap-4 mt-16";

export default function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[500px]">
                <input type="text" placeholder="이름" className={inputStyle} />
                <input type="text" placeholder="아이디" className={inputStyle} />
                <input type="password" placeholder="비밀번호" className={inputStyle} />
                <input type="password" placeholder="비밀번호 확인" className={inputStyle} />
                <input type="email" placeholder="이메일" className={inputStyle} />
                <div className={buttonContainerStyle}>
                    <button
                        type="submit"
                        className={buttonStyle}
                    >
                        회원가입
                    </button>
                    <button
                        type="reset"
                        className="p-8 text-white transition bg-orange rounded-md w-[175px] text-20 hover:bg-red-700"  // 동일한 너비
                    >
                        가입취소
                    </button>
                </div>
            </div>
        </div>
    );
}