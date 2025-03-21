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
    nameError,
    birthdateError,
    emailError,
    phoneError,
    currentPasswordError,
    newPasswordError,
    confirmNewPasswordError,
    currentPasswordShake,
    newPasswordShake,
    confirmNewPasswordShake,
    birthdateShake,
    emailShake,
    phoneShake,
    nameShake,
    nameRef,
    birthdateRef,
    emailRef,
    phoneRef,
    currentPasswordRef,
    newPasswordRef,
    confirmNewPasswordRef,
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
        error={nameError}
        refElement={nameRef}
        shake={nameShake}
        validate={() => {
          if (name.trim()) {
            // 통과 시 에러 초기화
            props.setNameError && props.setNameError("");
          } else {
            props.setNameError && props.setNameError("이름을 입력해주세요.");
            props.setNameShake && props.setNameShake(true);
            setTimeout(() => props.setNameShake && props.setNameShake(false), 500);
          }
        }}
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
        validate={() => {
          if (birthdate.trim() && /^\d{8}$/.test(birthdate.trim())) {
            props.setBirthdateError && props.setBirthdateError("");
          } else {
            props.setBirthdateError && props.setBirthdateError("생년월일은 8자리 숫자로 입력해주세요.");
            props.setBirthdateShake && props.setBirthdateShake(true);
            setTimeout(() => props.setBirthdateShake && props.setBirthdateShake(false), 500);
          }
        }}
      />

      {/* 이메일 */}
      <InputField
        id="email"
        label="이메일 주소"
        value={email}
        setValue={setEmail}
        error={emailError}
        refElement={emailRef}
        shake={emailShake}
        validate={() => {
          const trimmed = email.trim();
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (trimmed && regex.test(trimmed)) {
            props.setEmailError && props.setEmailError("");
          } else if (!trimmed) {
            props.setEmailError && props.setEmailError("이메일을 입력해주세요.");
            props.setEmailShake && props.setEmailShake(true);
            setTimeout(() => props.setEmailShake && props.setEmailShake(false), 500);
          } else {
            props.setEmailError && props.setEmailError("이메일 형식이 올바르지 않습니다.");
            props.setEmailShake && props.setEmailShake(true);
            setTimeout(() => props.setEmailShake && props.setEmailShake(false), 500);
          }
        }}
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
        refElement={phoneRef}
        shake={phoneShake}
        validate={() => {
          const trimmed = phone.trim();
          if (trimmed && /^\d{11}$/.test(trimmed)) {
            props.setPhoneError && props.setPhoneError("");
          } else if (!trimmed) {
            props.setPhoneError && props.setPhoneError("전화번호를 입력해주세요.");
            props.setPhoneShake && props.setPhoneShake(true);
            setTimeout(() => props.setPhoneShake && props.setPhoneShake(false), 500);
          } else {
            props.setPhoneError && props.setPhoneError("전화번호는 11자리 숫자로 입력해주세요.");
            props.setPhoneShake && props.setPhoneShake(true);
            setTimeout(() => props.setPhoneShake && props.setPhoneShake(false), 500);
          }
        }}
      />

      {/* 현재 비밀번호 */}
      <InputField
        id="currentPassword"
        type="password"
        label="현재 비밀번호"
        value={currentPassword}
        setValue={setCurrentPassword}
        error={currentPasswordError}
        refElement={currentPasswordRef}
        shake={currentPasswordShake}
        maxLength={20}
        onBlur={validateCurrentPassword}
      />

      {/* 새 비밀번호 */}
      <InputField
        id="newPassword"
        type="password"
        label="새 비밀번호 (6~20자)"
        value={newPassword}
        setValue={setNewPassword}
        error={newPasswordError}
        refElement={newPasswordRef}
        shake={newPasswordShake}
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
        refElement={confirmNewPasswordRef}
        shake={confirmNewPasswordShake}
        maxLength={20}
        onBlur={validateConfirmNewPassword}
      />
    </>
  );
}
