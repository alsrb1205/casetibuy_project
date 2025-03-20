import React from "react";
import InputField from "./InputField.jsx";

export default function EditAccount(props) {
    const {
        currentId,
        name, setName,
        birthdate, setBirthdate,
        email, setEmail,
        phone, setPhone,
        currentPassword, setCurrentPassword,
        newPassword, setNewPassword,
        confirmNewPassword, setConfirmNewPassword,
        nameError, // 추가: 이름 에러 상태
        birthdateError,
        emailError,
        phoneError,
        currentPasswordError,
        newPasswordError,
        confirmNewPasswordError,
        // 쉐이크 및 ref 등도 동일하게 전달
        currentPasswordShake,
        newPasswordShake,
        confirmNewPasswordShake,
        birthdateShake,
        emailShake,
        phoneShake,
        nameShake,
        currentPasswordRef,
        newPasswordRef,
        confirmNewPasswordRef,
        birthdateRef,
        emailRef,
        phoneRef,
        nameRef,
        validateCurrentPassword,
        validateNewPassword,
        validateConfirmNewPassword,
    } = props;

    return (
        <>
            {/* 현재 아이디 (읽기 전용) */}
            <InputField id="currentId" label="아이디" value={currentId} readOnly={true} />

            {/* 이름 */}
            <InputField
                id="name"
                label="이름"
                value={name}
                setValue={setName}
                error={nameError} // 수정: 이름 에러는 nameError 사용
                refElement={nameRef}
                shake={nameShake}
            />

            {/* 생년월일 (YYYYMMDD) */}
            <InputField
                id="birthdate"
                label="생년월일(YYYYMMDD)"
                value={birthdate}
                setValue={setBirthdate}
                error={birthdateError}
                maxLength={8}
                inputType="number-only"
                refElement={birthdateRef}
                shake={birthdateShake}
            />

            {/* 이메일 */}
            <InputField
                id="email"
                label="이메일 주소"
                value={email}
                setValue={setEmail}
                error={emailError}
                shake={emailShake}
                refElement={emailRef}
            />

            {/* 전화번호 */}
            <InputField
                id="phone"
                label="전화번호(11자리)"
                value={phone}
                setValue={setPhone}
                error={phoneError}
                maxLength={11}
                inputType="number-only"
                shake={phoneShake}
                refElement={phoneRef}
            />

            {/* 현재 비밀번호 */}
            <InputField
                id="currentPassword"
                type="password"
                label="현재 비밀번호"
                value={currentPassword}
                setValue={setCurrentPassword}
                error={currentPasswordError}
                shake={currentPasswordShake}
                refElement={currentPasswordRef}
                maxLength={20}
                onBlur={validateCurrentPassword} // 포커스 해제 시 검증
            />

            {/* 새 비밀번호 */}
            <InputField
                id="newPassword"
                type="password"
                label="새 비밀번호 (6~20자)"
                value={newPassword}
                setValue={setNewPassword}
                error={newPasswordError}
                shake={newPasswordShake}
                refElement={newPasswordRef}
                maxLength={20}
                onBlur={validateNewPassword}
            />

            {/* 새 비밀번호 확인 */}
            <InputField
                id="confirmNewPassword"
                type="password"
                label="새 비밀번호 확인"
                value={confirmNewPassword}
                setValue={setConfirmNewPassword}
                error={confirmNewPasswordError}
                shake={confirmNewPasswordShake}
                refElement={confirmNewPasswordRef}
                maxLength={20}
                onBlur={validateConfirmNewPassword}
            />
        </>
    );
}
