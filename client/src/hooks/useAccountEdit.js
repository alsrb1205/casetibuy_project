// src/hooks/useAccountEdit.js
import { useState, useEffect, useRef } from "react";
import axios from "axios";

/**
 * 계정 정보 수정 훅
 * - 아이디 변경 불가 (아이디 필드는 현재 아이디 readonly)
 * - 이메일, 전화번호, 생년월일, 비밀번호만 수정
 * - 포커스 아웃 시 자동 검증(새 아이디 관련 로직 제거)
 * - 현재 비밀번호 확인 시 헤더 토큰 포함
 */
export default function useAccountEdit() {
  // 서버에서 불러온 기존 데이터
  const [currentId, setCurrentId] = useState(""); // 현재 아이디(변경 불가)
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // 비밀번호 관련
  const [currentPassword, setCurrentPassword] = useState(""); // 현재 비밀번호
  const [newPassword, setNewPassword] = useState("");         // 새 비밀번호
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // 에러 메시지 상태
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");
  const [birthdateError, setBirthdateError] = useState("");

  // 쉐이크 효과를 위한 상태
  const [currentPasswordShake, setCurrentPasswordShake] = useState(false);
  const [newPasswordShake, setNewPasswordShake] = useState(false);
  const [confirmNewPasswordShake, setConfirmNewPasswordShake] = useState(false);
  const [birthdateShake, setBirthdateShake] = useState(false);
  const [emailShake, setEmailShake] = useState(false);
  const [phoneShake, setPhoneShake] = useState(false);

  // ref
  const currentPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmNewPasswordRef = useRef(null);
  const birthdateRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  // 1) 마운트 시 로그인 유저 정보 가져오기
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://localhost:9000/member/userinfo", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const user = res.data;
        // { id, name, birthdate, email, phone }
        setCurrentId(user.id || "");
        setName(user.name || "");
        setBirthdate(user.birthdate || "");
        setEmail(user.email || "");
        setPhone(user.phone || "");
      })
      .catch((err) => {
        console.error("유저정보 가져오기 실패:", err);
      });
  }, []);

  // ========== 유효성 검증 함수들 ==========

  // 이메일 검증
  const validateEmail = () => {
    if (!email) {
      setEmailError("");
      return true; 
    }
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!reg.test(email.trim())) {
      setEmailError("이메일 형식이 올바르지 않습니다.");
      setEmailShake(true);
      setTimeout(() => setEmailShake(false), 500);
      return false;
    }
    setEmailError("");
    return true;
  };

  // 전화번호 검증
  const validatePhone = () => {
    if (!phone) {
      setPhoneError("");
      return true;
    }
    if (!/^\d{11}$/.test(phone.trim())) {
      setPhoneError("전화번호는 11자리 숫자로 입력해주세요.");
      setPhoneShake(true);
      setTimeout(() => setPhoneShake(false), 500);
      return false;
    }
    setPhoneError("");
    return true;
  };

  // 생년월일 검증
  const validateBirthdate = () => {
    if (!/^\d{8}$/.test(birthdate.trim())) {
      setBirthdateError("생년월일을 YYYYMMDD 형태로 입력해주세요.");
      setBirthdateShake(true);
      setTimeout(() => setBirthdateShake(false), 500);
      return false;
    }
    setBirthdateError("");
    return true;
  };

  // 현재 비밀번호 검증
  const validateCurrentPassword = async () => {
    if (!currentPassword) {
      setCurrentPasswordError("현재 비밀번호를 입력해주세요.");
      setCurrentPasswordShake(true);
      setTimeout(() => setCurrentPasswordShake(false), 500);
      return false;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:9000/member/checkPassword",
        { currentPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // match: true/false
      if (res.data.match) {
        return true;
      } else {
        setCurrentPasswordError("현재 비밀번호가 일치하지 않습니다.");
        setCurrentPasswordShake(true);
        setTimeout(() => setCurrentPasswordShake(false), 500);
        return false;
      }
    } catch (err) {
      console.error("현재 비밀번호 확인 실패:", err);
      setCurrentPasswordError("비밀번호 확인 중 오류가 발생했습니다.");
      setCurrentPasswordShake(true);
      setTimeout(() => setCurrentPasswordShake(false), 500);
      return false;
    }
  };

  // 새 비밀번호 검증
  const validateNewPassword = () => {
    if (!newPassword) {
      setNewPasswordError("");
      return true; // 비번 변경 안 할 수도
    }
    if (newPassword.length < 6 || newPassword.length > 20) {
      setNewPasswordError("새 비밀번호를 6~20자로 입력해주세요.");
      setNewPasswordShake(true);
      setTimeout(() => setNewPasswordShake(false), 500);
      return false;
    }
    setNewPasswordError("");
    return true;
  };

  // 새 비밀번호 확인
  const validateConfirmNewPassword = () => {
    if (!newPassword) {
      setConfirmNewPasswordError("");
      return true; // 비번 변경 안 하는 경우
    }
    if (!confirmNewPassword) {
      setConfirmNewPasswordError("새 비밀번호를 먼저 입력해주세요.");
      setConfirmNewPasswordShake(true);
      setTimeout(() => setConfirmNewPasswordShake(false), 500);
      return false;
    }
    if (newPassword !== confirmNewPassword) {
      setConfirmNewPasswordError("새 비밀번호가 일치하지 않습니다.");
      setConfirmNewPasswordShake(true);
      setTimeout(() => setConfirmNewPasswordShake(false), 500);
      return false;
    }
    setConfirmNewPasswordError("비밀번호가 일치합니다.");
    return true;
  };

  // 최종 업데이트 (아이디 변경 없이)
  const handleUpdateAccount = async (e) => {
    e.preventDefault();

    // 에러 초기화
    setBirthdateError("");
    setEmailError("");
    setPhoneError("");
    setCurrentPasswordError("");
    setNewPasswordError("");
    setConfirmNewPasswordError("");

    // 1) 생년월일, 이메일, 전화번호 검증
    if (!validateBirthdate() || !validateEmail() || !validatePhone()) {
      return;
    }
    // 2) 현재 비밀번호 서버 검증
    const passOk = await validateCurrentPassword();
    if (!passOk) return;
    // 3) 새 비밀번호 & 확인
    if (!validateNewPassword() || !validateConfirmNewPassword()) {
      return;
    }

    // 서버로 PUT 요청
    try {
      const token = localStorage.getItem("token");
      const body = {
        // 아이디는 그대로 currentId (변경 안함)
        currentId,
        newId: "",            // 빈 문자열 or undefined
        name,
        birthdate,
        email,
        phone,
        currentPassword,
        newPassword,
      };
      const res = await axios.put("http://localhost:9000/member/update", body, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200) {
        alert("계정 정보가 수정되었습니다.");
        window.location.href = "/mypage";
      }
    } catch (error) {
      console.error("계정 정보 수정 오류:", error);
      alert("계정 정보 수정 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return {
    currentId, // 읽기 전용
    name, setName,
    birthdate, setBirthdate,
    email, setEmail,
    phone, setPhone,

    currentPassword, setCurrentPassword,
    newPassword, setNewPassword,
    confirmNewPassword, setConfirmNewPassword,

    emailError,
    phoneError,
    currentPasswordError,
    newPasswordError,
    confirmNewPasswordError,
    birthdateError,

    currentPasswordShake,
    newPasswordShake,
    confirmNewPasswordShake,
    birthdateShake,
    emailShake,
    phoneShake,

    currentPasswordRef,
    newPasswordRef,
    confirmNewPasswordRef,
    birthdateRef,
    emailRef,
    phoneRef,

    handleUpdateAccount,
  };
}
