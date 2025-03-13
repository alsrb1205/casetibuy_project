import React from 'react';
import InputField from '../component/InputField.jsx';


export default function Settings() {
    return (
        <>
            <h2 className="font-bold text-32 mb-30">계정 정보 수정하기</h2>
                {/* 설정 관련 내용을 여기에 추가 */}
                <form className="w-full p-8 mx-auto bg-white">
                    {/* 사용자 아이디 (읽기 전용) */}
                    <InputField
                        id="userId"
                        label="사용자 아이디"
                        // value={userId}
                        readOnly={true}
                    />

                    {/* 아이디 변경 */}
                    <InputField
                        id="newUserId"
                        label="아이디 변경"
                    // value={newUserId}
                    // setValue={setNewUserId}
                    />

                    {/* 이름 */}
                    <InputField
                        id="name"
                        label="이름"
                    // value={name}
                    // setValue={setName}
                    />

                    {/* 이메일 주소 */}
                    <InputField
                        id="email"
                        label="이메일 주소"
                    // value={email}
                    // setValue={setEmail}
                    />

                    {/* 전화번호 (숫자만 입력하도록 설정) */}
                    <InputField
                        id="phone"
                        label="전화번호"
                        // value={phone}
                        // setValue={setPhone}
                        inputType="number-only"
                    />

                    {/* 생년월일 - 간단히 text 타입으로 사용 (원하는 경우 date 타입으로 변경 가능) */}
                    <InputField
                        id="birthdate"
                        label="생년월일"
                    // value={birthdate}
                    // setValue={setBirthdate}
                    />

                    {/* 사용중인 비밀번호 */}
                    <InputField
                        id="currentPassword"
                        label="사용중인 비밀번호"
                        // value={currentPassword}
                        // setValue={setCurrentPassword}
                        type="password"
                    />

                    {/* 새 비밀번호 */}
                    <InputField
                        id="newPassword"
                        label="새 비밀번호"
                        // value={newPassword}
                        // setValue={setNewPassword}
                        type="password"
                    />

                    {/* 새 비밀번호 확인 */}
                    <InputField
                        id="confirmNewPassword"
                        label="새 비밀번호 확인"
                        // value={confirmNewPassword}
                        // setValue={setConfirmNewPassword}
                        type="password"
                    />

                    <button
                        // type="submit"
                        className="w-full py-4 mt-8 text-lg text-white rounded-md bg-blue"
                    >
                        설정 업데이트
                    </button>
                </form>
        </>
    );
}