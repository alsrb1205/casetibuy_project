import React, { useState } from 'react';
import InputField from '../component/InputField.jsx';
import ContactEdit from '../component/ContactEdit.jsx';

export default function Settings() {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);

    const handleDeleteClick = () => {
        setShowConfirmDelete(true);
    };

    const handleCancelClick = () => {
        setShowConfirmDelete(false);
    };

    const handleConfirmDelete = () => {
        alert("계정이 삭제되었습니다.");
        setShowConfirmDelete(false);
    };

    return (
        <>
            <div className="font-bold text-32 mb-30">계정 정보 수정하기</div>
            <form className="w-full p-8 mx-auto bg-white">


                {/* 로그인 중인 사용자의 아이디 (읽기 전용) */}
                <InputField
                    id="userId"
                    label="사용자 아이디"
                    readOnly={true}
                />
                {/* 아이디 변경 */}
                <InputField id="newUserId" label="아이디 변경" />
                {/* 이름 */}
                <InputField id="name" label="이름" />
                {/* 이메일 주소 */}
                <InputField id="email" label="이메일 주소" />
                {/* 전화번호 */}
                <InputField id="phone" label="전화번호" inputType="number-only" />
                {/* 생년월일 */}
                <InputField id="birthdate" label="생년월일" />
                {/* 사용중인 비밀번호 */}
                <InputField id="currentPassword" label="사용중인 비밀번호" type="password" />
                {/* 새 비밀번호 */}
                <InputField id="newPassword" label="새 비밀번호" type="password" />
                {/* 새 비밀번호 확인 */}
                <InputField id="confirmNewPassword" label="새 비밀번호 확인" type="password" />


                {/* <div className="font-bold my-30 text-32">
                    연락처 수정
                </div>
                <div className="text-[#666] mb-16 text-14">
                    케이스티파이의 뉴스, 프로모션, 제품 및 서비스에 대한 최신 정보를 수신하는 데 동의합니다.
                </div>

                <div className="block w-full h-72 p-16 mb-4 rounded-lg cursor-pointer bg-[#f8f8f8]">
                    <div className="flex items-center gap-8">
                        <input
                            type="checkbox"
                            className="w-6 h-6 cursor-pointer accent-black"
                        />
                        <span className="font-bold text-20">이메일</span>
                    </div>
                </div>

                <div className="block w-full h-72 p-16 mb-4 rounded-lg cursor-pointer bg-[#f8f8f8]">
                    <div className="flex items-center gap-8">
                        <input
                            type="checkbox"
                            className="w-6 h-6 cursor-pointer accent-black"
                        />
                        <span className="font-bold text-20">문자 메시지(예:SMS)</span>
                    </div>
                </div>

                <div className="mt-20 mb-40 text-12 leading-relaxed text-[#666]">
                    이메일 및 문자메시지를 클릭함으로써 케이스티파이
                    <strong> 이용약관</strong>, <strong>CASETiFY Club 이용약관</strong>,
                    <strong> 개인정보 보호정책</strong>에 동의하게 됩니다.
                </div> */}
                <ContactEdit />


                <div className="text-center">
                    <button className="p-15 bg-black border-2 text-18 text-white rounded-20 w-[300px]">
                        설정 업데이트
                    </button>
                </div>
            </form>

            <div className="p-32 rounded-20 bg-[#eee] mt-60 relative">
                <div className="mb-32 font-bold text-32">
                    계정 삭제
                </div>
                <div className="mb-16">
                    주문 등 정보를 포함한 모든 프로필이 영구적으로 삭제됩니다.
                    계정 삭제 후에는 주문 정보를 복원할 수 없습니다.
                </div>
                <div className="text-center">
                    {/* "내 계정 삭제" 버튼 클릭 시 확인 박스 노출 */}
                    <button
                        onClick={handleDeleteClick}
                        className="p-15 bg-white border-2 text-orange rounded-20 mb-15 w-[300px]"
                    >
                        내 계정 삭제
                    </button>
                </div>

                {/* showConfirmDelete가 true일 때만 확인 박스 렌더링 */}
                {showConfirmDelete && (
                    <>
                        <div
                            className="absolute top-0 left-0 z-40 w-full h-full bg-opacity-30"
                            onClick={handleCancelClick}
                        />
                        {/* 인라인 박스: 부모 내부에 절대 배치 */}
                        <div
                            className="
                                        absolute 
                                        top-1/2 left-1/2 
                                        transform -translate-x-1/2 -translate-y-1/2
                                        w-[400px] h-[267px] 
                                        bg-white 
                                        rounded-20 p-30 
                                        z-50
                                        text-center
                                        "
                        >
                            <div className="mb-5 font-bold text-21">계정 삭제 확인</div>
                            <div className="mb-20 text-[#666]">
                                주문 등 정보를 포함한 모든 프로필이 영구적으로 삭제됩니다.
                            </div>
                            <div className="flex flex-col items-center gap-5">
                                <button
                                    onClick={handleConfirmDelete}
                                    className="p-15 bg-red-500 border-2 text-18 text-white rounded-20 w-[300px]"
                                >
                                    내 계정 삭제
                                </button>
                                <button
                                    onClick={handleCancelClick}
                                    className="p-15 bg-white border-2 text-18 border-[#eee] rounded-20 w-[300px]"
                                >
                                    취소
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
