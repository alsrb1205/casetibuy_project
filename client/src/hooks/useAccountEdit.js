// src/hooks/useAccountEdit.js
import { useState, useEffect, useRef } from "react";
import axios from "axios";

/**
 * 계정 정보 수정 훅
 * - 서버에서 현재 유저 정보 가져옴
 * - 아이디 변경, 이메일, 전화번호, 비밀번호 등 수정
 * - 포커스 아웃 시 자동 검증 / 중복 체크
 */
export default function useAccountEdit() {
    // 서버에서 불러온 기존 데이터
    const [currentId, setCurrentId] = useState("");    // 현재 아이디
    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    // 변경할 데이터
    const [newId, setNewId] = useState("");  // 아이디 변경
    const [currentPassword, setCurrentPassword] = useState(""); // 현재 비밀번호
    const [newPassword, setNewPassword] = useState("");         // 새 비밀번호
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    // 에러 메시지 상태
    const [newIdError, setNewIdError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [currentPasswordError, setCurrentPasswordError] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");
    const [birthdateError, setBirthdateError] = useState("");

    // 아이디 사용 가능 여부
    const [isIdAvailable, setIsIdAvailable] = useState(true);

    // ref
    const newIdRef = useRef(null);

    // 1) 마운트 시 로그인 유저 정보 가져오기
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;
        // 현재 유저 정보 불러오기
        axios
            .get("http://localhost:9000/member/userinfo", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                const user = res.data;
                // 예: { id, name, birthdate, email, phone }
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
    const validateNewId = () => {
        if (!newId) {
            setNewIdError("");
            setIsIdAvailable(true);
            return true;
        }
        if (newId.trim() === currentId.trim()) {
            setNewIdError("현재 사용중인 아이디와 동일할 수 없습니다.");
            setIsIdAvailable(false);
            return false;
        }
        if (newId.trim().length < 6 || newId.trim().length > 20) {
            setNewIdError("아이디는 6~20자로 입력해주세요.");
            setIsIdAvailable(false);
            return false;
        }
        return true;
    };

    // 이메일 검증
    const validateEmail = () => {
        if (!email) {
            setEmailError("");
            return true;
        }
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!reg.test(email.trim())) {
            setEmailError("이메일 형식이 올바르지 않습니다.");
            return false;
        }
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
            return false;
        }
        return true;
    };

    // 생년월일 검증
    const validateBirthdate = () => {
        if (!/^\d{8}$/.test(birthdate)) {
            setBirthdateError("생년월일을 YYYYMMDD 형태로 입력해주세요.");
            return false;
        }
        return true;
    };

    // 현재 비밀번호 검증 (서버로 확인)
    const validateCurrentPassword = async () => {
        if (!currentPassword) {
            setCurrentPasswordError("현재 비밀번호를 입력해주세요.");
            return false;
        }
        try {
            const res = await axios.post("http://localhost:9000/member/checkPassword", {
                currentPassword
            });
            // 서버에서 match: true/false 반환한다고 가정
            if (res.data.match) {
                return true;
            } else {
                setCurrentPasswordError("현재 비밀번호가 일치하지 않습니다.");
                return false;
            }
        } catch (err) {
            console.error("현재 비밀번호 확인 실패:", err);
            setCurrentPasswordError("비밀번호 확인 중 오류가 발생했습니다.");
            return false;
        }
    };

    // 새 비밀번호 검증
    const validateNewPassword = () => {
        if (!newPassword) {
            setNewPasswordError("");
            return true;
        }
        if (newPassword.length < 6 || newPassword.length > 20) {
            setNewPasswordError("새 비밀번호를 6~20자로 입력해주세요.");
            return false;
        }
        return true;
    };

    // 새 비밀번호 확인
    const validateConfirmNewPassword = () => {
        if (!newPassword) {
            setConfirmNewPasswordError("");
            return true;
        }
        if (!confirmNewPassword) {
            setConfirmNewPasswordError("새 비밀번호를 먼저 입력해주세요.");
            return false;
        }
        if (newPassword !== confirmNewPassword) {
            setConfirmNewPasswordError("새 비밀번호가 일치하지 않습니다.");
            return false;
        }
        setConfirmNewPasswordError("비밀번호가 일치합니다.");
        return true;
    };

    // 2) 포커스 아웃 시 아이디 자동 중복 체크
    const checkNewIdAutomatically = async () => {
        // 아이디 검증 통과 못하면 바로 리턴
        if (!validateNewId()) {
            return;
        }
        if (!newId) {
            // 아이디 변경 안함
            setNewIdError("");
            setIsIdAvailable(true);
            return;
        }
        try {
            const res = await axios.post("http://localhost:9000/member/idcheck", {
                id: newId,
            });
            if (res.status === 200) {
                if (res.data.result === 0) {
                    setNewIdError("사용 가능한 아이디입니다.");
                    setIsIdAvailable(true);
                } else {
                    setNewIdError("이미 사용중인 아이디입니다. 다시 입력해주세요.");
                    setIsIdAvailable(false);
                }
            }
        } catch (err) {
            console.error("아이디 중복 확인 실패:", err);
            setNewIdError("아이디 중복 확인 중 오류가 발생했습니다.");
            setIsIdAvailable(false);
        }
    };

    // 3) 계정 정보 업데이트
    const handleUpdateAccount = async (e) => {
        e.preventDefault();
        // 클라이언트 유효성 검사
        setNewIdError("");
        setBirthdateError("");
        setEmailError("");
        setPhoneError("");
        setCurrentPasswordError("");
        setNewPasswordError("");
        setConfirmNewPasswordError("");

        // 순차 검사(아이디, 생년월일, 이메일, 전화, 현재 비번, 새 비번, 새비번확인)
        if (!validateNewId() || !validateBirthdate() || !validateEmail() || !validatePhone()) {
            return;
        }
        if (!isIdAvailable) {
            // 이미 "현재 사용중인 아이디" or "중복 아이디" 에러
            newIdRef.current?.focus();
            return;
        }

        const passOk = await validateCurrentPassword();
        if (!passOk) return;

        if (!validateNewPassword() || !validateConfirmNewPassword()) {
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const body = {
                currentId,        // 현재 아이디
                newId,            // 변경할 아이디 (없으면 미변경)
                name,             // 변경된 이름
                birthdate,        // 변경된 생년월일
                email,            // 변경된 이메일
                phone,            // 변경된 전화번호
                currentPassword,  // 현재 비밀번호
                newPassword,      // 새 비밀번호
            };
            const res = await axios.put("http://localhost:9000/member/update", body, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.status === 200) {
                alert("계정 정보가 수정되었습니다.");
                window.location.href = "/mypage"; // /mypage로 이동
            }
        } catch (error) {
            console.error("계정 정보 수정 오류:", error);
            alert("계정 정보 수정 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    return {
        // 상태
        currentId, name, birthdate, newId,
        email, phone,
        currentPassword, newPassword, confirmNewPassword,

        // setState
        setName, setBirthdate, setNewId,
        setEmail, setPhone,
        setCurrentPassword, setNewPassword, setConfirmNewPassword,

        // 에러
        newIdError, emailError, phoneError,
        currentPasswordError, newPasswordError, confirmNewPasswordError,
        birthdateError,

        // ref
        newIdRef,

        // 함수
        handleUpdateAccount,
        checkNewIdAutomatically, // onBlur용
    };
}
