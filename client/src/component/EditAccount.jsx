// src/component/EditAccount.jsx
import React from 'react';
import useAccountEdit from '../hooks/useAccountEdit.js';
import InputField from './InputField.jsx';

export default function EditAccount() {
    const {
        currentId, name, birthdate, newId,
        email, phone,
        currentPassword, newPassword, confirmNewPassword,

        setName, setBirthdate, setNewId,
        setEmail, setPhone,
        setCurrentPassword, setNewPassword, setConfirmNewPassword,

        newIdError, emailError, phoneError,
        currentPasswordError, newPasswordError, confirmNewPasswordError,
        birthdateError,

        newIdRef,
        handleUpdateAccount,
        checkNewIdAutomatically,
    } = useAccountEdit();

    // onBlur 이벤트 핸들러
    const handleNewIdBlur = () => {
        checkNewIdAutomatically();
    };

    const handleFormSubmit = (e) => {
        // “설정 업데이트” 버튼 클릭 시
        e.preventDefault();
        handleUpdateAccount(e);
    };

    return (
        <>
            {/* 현재 아이디 (읽기 전용) */}
            <InputField
                id="user_Id"
                label="유저 아이디"
                readOnly={true}
                value={currentId}
            />

            {/* 새 아이디 */}
            <InputField
                id="newUserId"
                label="새 아이디 (6~20자)"
                value={newId}
                setValue={setNewId}
                error={newIdError}
                refElement={newIdRef}
                onBlur={handleNewIdBlur}
                maxLength={20}
            />

            {/* 이름 */}
            <InputField
                id="name"
                label="이름"
                value={name}
                setValue={setName}
            />
            {/* 생년월일 */}
            <InputField
                id="birthdate"
                label="생년월일(YYYYMMDD)"
                value={birthdate}
                setValue={setBirthdate}
                error={birthdateError}
                maxLength={8}
            />
            {/* 이메일 */}
            <InputField
                id="email"
                label="이메일 주소"
                value={email}
                setValue={setEmail}
                error={emailError}
            />
            {/* 전화번호 */}
            <InputField
                id="phone"
                label="전화번호(11자리)"
                value={phone}
                setValue={setPhone}
                error={phoneError}
            />

            {/* 현재 비밀번호 */}
            <InputField
                id="currentPassword"
                type="password"
                label="현재 비밀번호"
                value={currentPassword}
                setValue={setCurrentPassword}
                error={currentPasswordError}
            />
            {/* 새 비밀번호 */}
            <InputField
                id="newPassword"
                type="password"
                label="새 비밀번호"
                value={newPassword}
                setValue={setNewPassword}
                error={newPasswordError}
            />
            {/* 새 비밀번호 확인 */}
            <InputField
                id="confirmNewPassword"
                type="password"
                label="새 비밀번호 확인"
                value={confirmNewPassword}
                setValue={setConfirmNewPassword}
                error={confirmNewPasswordError}
            />

            {/* 하단 버튼 (설정 업데이트) */}
            <div className="mt-8 text-center">
                <button
                    onClick={handleFormSubmit}
                    className="p-15 bg-black border-2 text-18 text-white rounded-20 w-[300px]"
                >
                    설정 업데이트
                </button>
            </div>
        </>
    );
}
