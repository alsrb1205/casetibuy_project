export default function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[450px]">
                {/* 이름 입력 */}
                <input
                    type="text"
                    placeholder="이름"
                    className="block w-[320px] p-8 mb-8 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto"
                />

                {/* 아이디 입력 */}
                <input
                    type="text"
                    placeholder="아이디"
                    className="block w-[320px] p-8 mb-8 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto"
                />

                {/* 비밀번호 입력 */}
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="block w-[320px] p-8 mb-8 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto"
                />

                {/* 비밀번호 확인 */}
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    className="block w-[320px] p-8 mb-8 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto"
                />

                {/* 이메일과 도메인 입력 */}
                <div className="flex items-center mb-8 w-[320px] mx-auto">
                    <input
                        type="email"
                        placeholder="이메일"
                        className="w-[180px] p-8 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span className="text-black text-[16px] mx-2">@</span>
                    <select className="w-[140px] p-8 text-black bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">---선택---</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="naver.com">naver.com</option>
                        <option value="daum.net">daum.net</option>
                    </select>
                </div>

                {/* 전화번호 입력 */}
                <input
                    type="tel"
                    placeholder="전화번호 (010-1234-5678)"
                    maxLength="13" // 하이픈 포함
                    pattern="^010-\d{4}-\d{4}$" // 전화번호 형식 패턴 (010-XXXX-XXXX)
                    className="block w-[320px] p-8 mb-8 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-auto"
                />

                {/* 생년월일 입력 */}
                <div className="flex justify-between w-[320px] mx-auto mb-8">
                    <input
                        type="text"
                        placeholder="YYYY"
                        maxLength="4"
                        pattern="\d{4}" // 숫자 4자리만 입력 가능
                        className="w-[100px] p-8 text-black placeholder-gray-600 bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center"
                    />
                    <select className="w-[100px] p-8 text-black bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">월</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}월</option>
                        ))}
                    </select>

                    <select className="w-[100px] p-8 text-black bg-white border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">일</option>
                        {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}일</option>
                        ))}
                    </select>
                </div>

                {/* 버튼 */}
                <div className="flex justify-between w-[320px] mx-auto mt-8">
                    <button
                        type="submit"
                        className="p-8 text-white transition-all duration-300 bg-[var(--color-blue)] rounded-md w-[155px] text-[20px] hover:bg-[var(--color-green)]"
                    >
                        회원가입
                    </button>
                    <button
                        type="reset"
                        className="p-8 text-white transition-all duration-300 bg-[var(--color-red)] rounded-md w-[155px] text-[20px] hover:bg-[var(--color-pink)]"
                    >
                        가입취소
                    </button>
                </div>
            </div>
        </div>
    );
}
